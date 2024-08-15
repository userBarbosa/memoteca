import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CreateThoughtsComponent } from './features/thoughts/create/create.component';
import { ListThoughtsComponent } from './features/thoughts/list/list.component';
import { DeleteThoughtsComponent } from './features/thoughts/delete/delete.component';
import { UpdateThoughtsComponent } from './features/thoughts/update/update.component';

const routes: Routes = [
  { path: '', redirectTo: 'thoughts/all', pathMatch: 'full' },
  { path: 'thoughts/create', component: CreateThoughtsComponent },
  { path: 'thoughts/all', component: ListThoughtsComponent },
  { path: 'thoughts/delete/:id', component: DeleteThoughtsComponent },
  { path: 'thoughts/update/:id', component: UpdateThoughtsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
