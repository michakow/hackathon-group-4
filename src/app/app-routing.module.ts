import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth.guard';
import { EventListComponent } from './event-list/event-list.component';
import { EventDetailsComponent } from './event-details/event-details.component';
import { MainComponent } from './main/main.component';
import { LoginGuardGuard } from './login-guard.guard';
import { AddEventComponent } from './add-event/add-event.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'events',
    pathMatch: 'full',
  },

  {
    path: 'login',
    component: LoginComponent,
    // canActivate: [LoginGuardGuard]
  },
  {
    path: 'events',
    component: MainComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        component: EventListComponent,
      },
      {
        path: 'my-events',
        component: EventListComponent,
      },
      {
        path: 'participated',
        component: EventListComponent,
      },
      {
        path: 'details/:id',
        component: EventDetailsComponent,
      },
      {
        path: 'addevent', component: AddEventComponent
      }
    ],
  },
  {
    path: '**',
    redirectTo: 'events',
    pathMatch: 'full',
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
