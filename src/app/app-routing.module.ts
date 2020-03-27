import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  {
    path: 'khalifah',
    loadChildren: () => import('./khalifah/khalifah.module').then( m => m.KhalifahPageModule)
  },
  {
    path: 'welcome',
    loadChildren: () => import('./welcome/welcome.module').then( m => m.WelcomePageModule)
  },
  {
    path: 'azan',
    loadChildren: () => import('./azan/azan.module').then( m => m.AzanPageModule)
  },
  {
    path: 'doa',
    loadChildren: () => import('./doa/doa.module').then( m => m.DoaPageModule)
  },
  {
    path: 'wuduk',
    loadChildren: () => import('./wuduk/wuduk.module').then( m => m.WudukPageModule)
  },
  {
    path: 'hijaiyah',
    loadChildren: () => import('./hijaiyah/hijaiyah.module').then( m => m.HijaiyahPageModule)
  },
  {
    path: 'najis',
    loadChildren: () => import('./najis/najis.module').then( m => m.NajisPageModule)
  },
  {
    path: 'bulanislam',
    loadChildren: () => import('./bulanislam/bulanislam.module').then( m => m.BulanislamPageModule)
  },
  {
    path: 'rukunislam',
    loadChildren: () => import('./rukunislam/rukunislam.module').then( m => m.RukunislamPageModule)
  },
  {
    path: 'solatfardhu',
    loadChildren: () => import('./solatfardhu/solatfardhu.module').then( m => m.SolatfardhuPageModule)
  },
  {
    path: 'rukuniman',
    loadChildren: () => import('./rukuniman/rukuniman.module').then( m => m.RukunimanPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
