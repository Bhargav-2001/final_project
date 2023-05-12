import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AdminModule } from './admin/admin.module';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { DndModule } from 'ngx-drag-drop';
import { DndDraggableDirective } from 'ngx-drag-drop';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { RouterModule } from '@angular/router';








@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    
  
    
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    AdminModule,
    BrowserAnimationsModule,
    MaterialModule,
   
    RouterModule,
    DragDropModule,
    DndModule,
    
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
