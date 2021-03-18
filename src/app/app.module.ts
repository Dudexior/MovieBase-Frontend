import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './shared/modules/core/core.module';
import { MovieModule } from './modules/movie/movie.module';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { DisplaySourceInterceptor } from './shared/interceptors/display-source.interceptor';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    MovieModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: DisplaySourceInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
