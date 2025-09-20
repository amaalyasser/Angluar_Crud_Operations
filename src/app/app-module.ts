

import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Navbar } from './shared/navbar/navbar';
import { Index } from './pages/index/index';

import { Services } from './pages/services/services';
import { SinglePost } from './pages/single-post/single-post';
import { FormsModule } from '@angular/forms'; 

@NgModule({
  declarations: [
    App,
    Navbar,
    Index,
    //Posts,             
    Services,
    SinglePost
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule      
  ],
  providers: [
    provideBrowserGlobalErrorListeners()
  ],
  bootstrap: [App]
})
export class AppModule { }
