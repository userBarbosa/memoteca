import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CreateThoughtsComponent } from './features/thoughts/create/create.component';
import { ListThoughtsComponent } from './features/thoughts/list/list.component';
import { DeleteThoughtsComponent } from './features/thoughts/delete/delete.component';
import { UpdateThoughtsComponent } from './features/thoughts/update/update.component';
import { ConfigService } from './shared/services/config/config.service';

const cs = new ConfigService();

const routes: Routes = [
  { path: '', redirectTo: cs.ROUTES.LIST, pathMatch: 'full' },
  { path: cs.ROUTES.NEW, component: CreateThoughtsComponent },
  { path: cs.ROUTES.LIST, component: ListThoughtsComponent },
  { path: cs.ROUTES.DELETE, component: DeleteThoughtsComponent },
  { path: cs.ROUTES.UPDATE, component: UpdateThoughtsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
