import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'to-do', pathMatch: 'full' },  // Default route
  { path: 'to-do', loadChildren: () => import('./to-do/to-do.module').then(m => m.ToDoPageModule) } // Lazy-loaded ToDo module
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
