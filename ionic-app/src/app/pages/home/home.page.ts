import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { Ticket } from '../../models/ticket.model';
import { Project } from '../../models/project.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss']
})
export class HomePage implements OnInit {
  tickets: Ticket[] = [];
  projects: Project[] = [];
  loading = false;

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    console.log('HomePage initialized');
    // No cargar automáticamente, esperar al botón
  }

  authenticateAndLoadData() {
    // Verificar si ya tenemos un token guardado
    const existingToken = this.apiService.getAuthToken();
    if (existingToken) {
      console.log('Token encontrado, cargando datos...');
      this.loadData();
      return;
    }

    // Si no hay token, hacer login automático con credenciales por defecto
    console.log('No hay token, haciendo login automático...');
    this.apiService.login('admin', 'admin').subscribe({
      next: (response: any) => {
        // JHipster devuelve el token en el body como { id_token: "..." }
        const token = response.id_token;
        if (token) {
          this.apiService.setAuthToken(token);
          console.log('Login exitoso, cargando datos...');
          this.loadData();
        } else {
          console.error('No se recibió token en la respuesta:', response);
        }
      },
      error: (error) => {
        console.error('Error en login con admin:', error);
        // Intentar con usuario 'user' si 'admin' falla
        this.apiService.login('user', 'user').subscribe({
          next: (response: any) => {
            const token = response.id_token;
            if (token) {
              this.apiService.setAuthToken(token);
              console.log('Login exitoso con usuario "user", cargando datos...');
              this.loadData();
            } else {
              console.error('No se recibió token en la respuesta:', response);
            }
          },
          error: (err) => {
            console.error('Error en login con usuario "user":', err);
          }
        });
      }
    });
  }

  loadData() {
    this.loading = true;
    this.apiService.getTickets().subscribe({
      next: (tickets) => {
        this.tickets = tickets;
        this.loading = false;
        console.log('Tickets cargados:', tickets.length);
      },
      error: (error) => {
        console.error('Error loading tickets:', error);
        this.loading = false;
        // Si es 401, el token puede haber expirado, intentar login de nuevo
        if (error.status === 401) {
          console.log('Token expirado o inválido, intentando login de nuevo...');
          this.apiService.clearAuthToken();
          this.authenticateAndLoadData();
        } else if (this.tickets.length === 0) {
          console.log('No tickets loaded, showing empty state');
        }
      }
    });

    this.apiService.getProjects().subscribe({
      next: (projects) => {
        this.projects = projects;
        console.log('Projects cargados:', projects.length);
      },
      error: (error) => {
        console.error('Error loading projects:', error);
        // Si es 401, el token puede haber expirado
        if (error.status === 401) {
          console.log('Token expirado al cargar projects, intentando login de nuevo...');
          this.apiService.clearAuthToken();
          this.authenticateAndLoadData();
        }
      }
    });
  }

  loadDataOnClick() {
    if (this.loading) {
      return; // Evitar múltiples llamadas simultáneas
    }
    this.authenticateAndLoadData();
  }

  refresh(event: any) {
    this.loadData();
    setTimeout(() => {
      event.target.complete();
    }, 1000);
  }

  getStatusColor(status?: string): string {
    switch (status) {
      case 'OPEN':
        return 'primary';
      case 'IN_PROGRESS':
        return 'warning';
      case 'CLOSED':
      case 'SOLVED':
        return 'success';
      default:
        return 'medium';
    }
  }
}

