import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginFormComponent, ResetPasswordFormComponent, CreateAccountFormComponent, ChangePasswordFormComponent } from './shared/components';
import { AuthGuardService } from './shared/services';
import { HomeComponent } from './pages/home/home.component';
import { DxButtonModule, DxDataGridModule, DxDropDownBoxModule, DxFormModule, DxPopupModule, DxScrollViewModule, DxTemplateModule, DxTreeViewModule } from 'devextreme-angular';
import { HttpClientModule } from '@angular/common/http';
import { GridComponent } from './pages/grid/grid.component';
import { DropDownBoxComponent } from './pages/drop-down-box/drop-down-box.component';
import { PopupComponent } from './pages/popup/popup.component';
import { TasksComponent } from './pages/tasks/tasks.component';

const routes: Routes = [
  {
    path: 'pages/popup',
    component: PopupComponent,
  },
  {
    path: 'pages/dropdown-box',
    component: DropDownBoxComponent,
  },
  {
    path: 'pages/grid',
    component: GridComponent,
  },
  {
    path: 'tasks',
    component: TasksComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'login-form',
    component: LoginFormComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'reset-password',
    component: ResetPasswordFormComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'create-account',
    component: CreateAccountFormComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'change-password/:recoveryCode',
    component: ChangePasswordFormComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: '**',
    redirectTo: 'home'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { useHash: true }),
    DxDataGridModule,
    DxFormModule,
    DxTreeViewModule,
    DxDropDownBoxModule,
    HttpClientModule,
    DxPopupModule,
    DxButtonModule,
    DxScrollViewModule,
    DxTemplateModule,
  ],
  providers: [AuthGuardService],
  exports: [RouterModule],
  declarations: [
    HomeComponent,
    GridComponent,
    DropDownBoxComponent,
    PopupComponent,
    TasksComponent
  ]
})
export class AppRoutingModule { }
