import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { ProductsPage } from './products/products.page';
import { AuthGuardService } from './services/auth-guard.service';

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
    path: 'form',
    loadChildren: () => import('./form/form.module').then(m => m.FormPageModule),
    canActivate: [AuthGuardService] // Protege la ruta con AuthGuardService
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./products/products.module').then(m => m.FolderPageModule),
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