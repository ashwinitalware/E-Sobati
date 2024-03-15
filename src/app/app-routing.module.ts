import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'registration',
    loadChildren: () => import('./registration/registration.module').then( m => m.RegistrationPageModule)
  },
  {
    path: 'forgotpass',
    loadChildren: () => import('./forgotpass/forgotpass.module').then( m => m.ForgotpassPageModule)
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./dashboard/dashboard.module').then( m => m.DashboardPageModule)
  },
  {
    path: 'changepass',
    loadChildren: () => import('./changepass/changepass.module').then( m => m.ChangepassPageModule)
  },
  {
    path: 'selectcity',
    loadChildren: () => import('./selectcity/selectcity.module').then( m => m.SelectcityPageModule)
  },
  {
    path: 'footer',
    loadChildren: () => import('./footer/footer.module').then( m => m.FooterPageModule)
  },
  {
    path: 'allhospital',
    loadChildren: () => import('./allhospital/allhospital.module').then( m => m.AllhospitalPageModule)
  },
  {
    path: 'allmedical',
    loadChildren: () => import('./allmedical/allmedical.module').then( m => m.AllmedicalPageModule)
  },
  {
    path: 'allambulance',
    loadChildren: () => import('./allambulance/allambulance.module').then( m => m.AllambulancePageModule)
  },
  {
    path: 'alljobs',
    loadChildren: () => import('./alljobs/alljobs.module').then( m => m.AlljobsPageModule)
  },
  {
    path: 'hospitaldetails',
    loadChildren: () => import('./hospitaldetails/hospitaldetails.module').then( m => m.HospitaldetailsPageModule)
  },
  {
    path: 'appointment',
    loadChildren: () => import('./appointment/appointment.module').then( m => m.AppointmentPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
