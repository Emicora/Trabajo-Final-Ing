import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { Ticket } from '../models/ticket.model';
import { Project } from '../models/project.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = environment.apiUrl;
  private authToken: string | null = null;
  private readonly CACHE_PREFIX = 'bugtracker_cache_';
  private readonly CACHE_EXPIRY = 7 * 24 * 60 * 60 * 1000; // 7 días

  constructor(private http: HttpClient) {}

  setAuthToken(token: string) {
    this.authToken = token;
    localStorage.setItem('auth_token', token);
  }

  getAuthToken(): string | null {
    if (!this.authToken) {
      this.authToken = localStorage.getItem('auth_token');
    }
    return this.authToken;
  }

  clearAuthToken() {
    this.authToken = null;
    localStorage.removeItem('auth_token');
  }

  // Métodos para caché offline
  private getCachedData<T>(key: string): T | null {
    try {
      const cached = localStorage.getItem(this.CACHE_PREFIX + key);
      if (!cached) return null;
      
      const { data, timestamp } = JSON.parse(cached);
      const now = Date.now();
      
      if (now - timestamp > this.CACHE_EXPIRY) {
        localStorage.removeItem(this.CACHE_PREFIX + key);
        return null;
      }
      
      return data as T;
    } catch (e) {
      console.error('Error reading cache:', e);
      return null;
    }
  }

  private setCachedData<T>(key: string, data: T): void {
    try {
      const cacheData = {
        data,
        timestamp: Date.now()
      };
      localStorage.setItem(this.CACHE_PREFIX + key, JSON.stringify(cacheData));
    } catch (e) {
      console.error('Error writing cache:', e);
    }
  }

  private isOnline(): boolean {
    return navigator.onLine;
  }

  private getHeaders(): HttpHeaders {
    const token = this.getAuthToken();
    let headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    if (token) {
      headers = headers.set('Authorization', `Bearer ${token}`);
    }
    return headers;
  }

  // Authentication
  login(username: string, password: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/authenticate`, { username, password });
  }

  // Tickets
  getTickets(): Observable<Ticket[]> {
    const cacheKey = 'tickets';
    
    // Si está offline, devolver datos del caché
    if (!this.isOnline()) {
      const cached = this.getCachedData<Ticket[]>(cacheKey);
      if (cached) {
        console.log('Offline: usando tickets del caché');
        return of(cached);
      }
      return throwError(() => new Error('No hay conexión y no hay datos en caché'));
    }
    
    // Si está online, obtener de la red y guardar en caché
    return this.http.get<Ticket[]>(`${this.apiUrl}/tickets`, { headers: this.getHeaders() }).pipe(
      tap(tickets => {
        this.setCachedData(cacheKey, tickets);
        console.log('Tickets guardados en caché para uso offline');
      }),
      catchError(error => {
        // Si falla la red, intentar usar caché
        const cached = this.getCachedData<Ticket[]>(cacheKey);
        if (cached) {
          console.log('Error de red: usando tickets del caché');
          return of(cached);
        }
        return throwError(() => error);
      })
    );
  }

  getTicket(id: number): Observable<Ticket> {
    return this.http.get<Ticket>(`${this.apiUrl}/tickets/${id}`, { headers: this.getHeaders() });
  }

  createTicket(ticket: Ticket): Observable<Ticket> {
    return this.http.post<Ticket>(`${this.apiUrl}/tickets`, ticket, { headers: this.getHeaders() });
  }

  updateTicket(ticket: Ticket): Observable<Ticket> {
    return this.http.put<Ticket>(`${this.apiUrl}/tickets`, ticket, { headers: this.getHeaders() });
  }

  deleteTicket(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/tickets/${id}`, { headers: this.getHeaders() });
  }

  // Projects
  getProjects(): Observable<Project[]> {
    const cacheKey = 'projects';
    
    // Si está offline, devolver datos del caché
    if (!this.isOnline()) {
      const cached = this.getCachedData<Project[]>(cacheKey);
      if (cached) {
        console.log('Offline: usando projects del caché');
        return of(cached);
      }
      return throwError(() => new Error('No hay conexión y no hay datos en caché'));
    }
    
    // Si está online, obtener de la red y guardar en caché
    return this.http.get<Project[]>(`${this.apiUrl}/projects`, { headers: this.getHeaders() }).pipe(
      tap(projects => {
        this.setCachedData(cacheKey, projects);
        console.log('Projects guardados en caché para uso offline');
      }),
      catchError(error => {
        // Si falla la red, intentar usar caché
        const cached = this.getCachedData<Project[]>(cacheKey);
        if (cached) {
          console.log('Error de red: usando projects del caché');
          return of(cached);
        }
        return throwError(() => error);
      })
    );
  }

  getProject(id: number): Observable<Project> {
    return this.http.get<Project>(`${this.apiUrl}/projects/${id}`, { headers: this.getHeaders() });
  }

  createProject(project: Project): Observable<Project> {
    return this.http.post<Project>(`${this.apiUrl}/projects`, project, { headers: this.getHeaders() });
  }

  updateProject(project: Project): Observable<Project> {
    return this.http.put<Project>(`${this.apiUrl}/projects`, project, { headers: this.getHeaders() });
  }

  deleteProject(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/projects/${id}`, { headers: this.getHeaders() });
  }
}



