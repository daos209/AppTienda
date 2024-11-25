import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { ProductsPage } from './products/products.page';
import { AuthGuardService } from './auth-guard.service';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then(m => m.LoginPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule),
    canActivate: [AuthGuardService] // Protege la ruta con AuthGuardService
  },
  {
    path: 'profile',
    loadChildren: () => import('./profile/profile.module').then(m => m.ProfilePageModule),
    canActivate: [AuthGuardService] // Protege la ruta con AuthGuardService
  },
  {
    path: 'settings',
    loadChildren: () => import('./settings/settings.module').then(m => m.SettingsPageModule),
    canActivate: [AuthGuardService] // Protege la ruta con AuthGuardService
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardPageModule),
    canActivate: [AuthGuardService] // Protege la ruta con AuthGuardService
  },
  {
    path: 'registro',
    loadChildren: () => import('./registro/registro.module').then(m => m.RegistroPageModule),
    canActivate: [AuthGuardService] // Protege la ruta con AuthGuardService
  },
  {
    path: 'registro/:id',
    loadChildren: () => import('./registro/registro.module').then(m => m.RegistroPageModule),
    canActivate: [AuthGuardService] // Protege la ruta con AuthGuardService
  },
  {
    path: 'products',
    component: ProductsPage,
    canActivate: [AuthGuardService] // Protege la ruta con AuthGuardService
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule {}