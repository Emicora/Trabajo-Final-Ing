import { Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'authority',
    data: { pageTitle: 'Authorities' },
    loadChildren: () => import('./admin/authority/authority.routes'),
  },
  {
    path: 'project',
    data: { pageTitle: 'Projects' },
    loadChildren: () => import('./project/project.routes'),
  },
  {
    path: 'label',
    data: { pageTitle: 'Labels' },
    loadChildren: () => import('./label/label.routes'),
  },
  {
    path: 'ticket',
    data: { pageTitle: 'Tickets' },
    loadChildren: () => import('./ticket/ticket.routes'),
  },
  {
    path: 'attachment',
    data: { pageTitle: 'Attachments' },
    loadChildren: () => import('./attachment/attachment.routes'),
  },
  {
    path: 'comment',
    data: { pageTitle: 'Comments' },
    loadChildren: () => import('./comment/comment.routes'),
  },
  /* jhipster-needle-add-entity-route - JHipster will add entity modules routes here */
];

export default routes;
