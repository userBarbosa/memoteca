import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {
  provideHttpClient,
  withInterceptorsFromDi,
} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// features - business
import { ListThoughtsComponent } from './features/thoughts/list/list.component';
import { CreateThoughtsComponent } from './features/thoughts/create/create.component';
import { DeleteThoughtsComponent } from './features/thoughts/delete/delete.component';
import { UpdateThoughtsComponent } from './features/thoughts/update/update.component';
import { CardComponent } from './features/thoughts/card/card.component';
import { LoadMoreComponent } from './features/thoughts/load-more/load-more.component';

// core - non business
import { HeaderComponent } from './core/header/header.component';
import { FooterComponent } from './core/footer/footer.component';

// shared - shared code

@NgModule({
  declarations: [
    AppComponent,
    ListThoughtsComponent,
    HeaderComponent,
    FooterComponent,
    CreateThoughtsComponent,
    DeleteThoughtsComponent,
    UpdateThoughtsComponent,
    CardComponent,
    LoadMoreComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule],
  providers: [provideHttpClient(withInterceptorsFromDi())],
  bootstrap: [AppComponent],
})
export class AppModule {}
