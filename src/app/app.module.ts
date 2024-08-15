import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// features - business
import { ListThoughtsComponent } from './features/thoughts/list/list.component';
import { CreateThoughtsComponent } from './features/thoughts/create/create.component';
import { DeleteThoughtsComponent } from './features/thoughts/delete/delete.component';
import { UpdateThoughtsComponent } from './features/thoughts/update/update.component';

// core - non business
import { HeaderComponent } from './core/header/header.component';
import { FooterComponent } from './core/footer/footer.component';
import { CardComponent } from './features/thoughts/card/card.component';
import {
  HttpClientModule,
  provideHttpClient,
  withInterceptorsFromDi,
} from '@angular/common/http';

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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    // HttpClientModule,
  ],
  providers: [provideHttpClient(withInterceptorsFromDi())],
  bootstrap: [AppComponent],
})
export class AppModule {}
