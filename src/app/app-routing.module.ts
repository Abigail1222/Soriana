import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'department',
    loadChildren: () => import('./department/department.module').then( m => m.DepartmentPageModule)
  },  {
    path: 'lady',
    loadChildren: () => import('./lady/lady.module').then( m => m.LadyPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'cuenta',
    loadChildren: () => import('./cuenta/cuenta.module').then( m => m.CuentaPageModule)
  },
  {
    path: 'compra',
    loadChildren: () => import('./compra/compra.module').then( m => m.CompraPageModule)
  },
  {
    path: 'proceso',
    loadChildren: () => import('./proceso/proceso.module').then( m => m.ProcesoPageModule)
  },
  {
    path: 'metodo',
    loadChildren: () => import('./metodo/metodo.module').then( m => m.MetodoPageModule)
  },
  {
    path: 'promocion',
    loadChildren: () => import('./promocion/promocion.module').then( m => m.PromocionPageModule)
  },
  {
    path: 'resumen',
    loadChildren: () => import('./resumen/resumen.module').then( m => m.ResumenPageModule)
  },
  {
    path: 'confirmacion',
    loadChildren: () => import('./confirmacion/confirmacion.module').then( m => m.ConfirmacionPageModule)
  },
  {
    path: 'modal-articulo',
    loadChildren: () => import('./modal-articulo/modal-articulo.module').then( m => m.ModalArticuloPageModule)
  },
  {
    path: 'modal-carrito',
    loadChildren: () => import('./modal-carrito/modal-carrito.module').then( m => m.ModalCarritoPageModule)
  },
  {
    path: 'recuperacion',
    loadChildren: () => import('./recuperacion/recuperacion.module').then( m => m.RecuperacionPageModule)
  },
  {
    path: 'verificacion',
    loadChildren: () => import('./verificacion/verificacion.module').then( m => m.VerificacionPageModule)
  },
  {
    path: 'caballero',
    loadChildren: () => import('./caballero/caballero.module').then( m => m.CaballeroPageModule)
  },
  {
    path: 'bebe',
    loadChildren: () => import('./bebe/bebe.module').then( m => m.BebePageModule)
  },
  {
    path: 'joyeria',
    loadChildren: () => import('./joyeria/joyeria.module').then( m => m.JoyeriaPageModule)
  },
  {
    path: 'zapatos',
    loadChildren: () => import('./zapatos/zapatos.module').then( m => m.ZapatosPageModule)
  },
  {
    path: 'kids',
    loadChildren: () => import('./kids/kids.module').then( m => m.KidsPageModule)
  },
  {
    path: 'despensa',
    loadChildren: () => import('./despensa/despensa.module').then( m => m.DespensaPageModule)
  },
  {
    path: 'farmacia',
    loadChildren: () => import('./farmacia/farmacia.module').then( m => m.FarmaciaPageModule)
  },
  {
    path: 'fruta-verdura',
    loadChildren: () => import('./fruta-verdura/fruta-verdura.module').then( m => m.FrutaVerduraPageModule)
  }



];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
