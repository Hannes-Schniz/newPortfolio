import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { IntroComponent } from './shared/components/intro/intro.component';
import { TextContainerComponent } from './shared/components/text-container/text-container.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    IntroComponent,
    TextContainerComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, MatIconModule, MatButtonModule],
  providers: [provideAnimationsAsync()],
  bootstrap: [AppComponent],
})
export class AppModule {}
