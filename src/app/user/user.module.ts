import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DndModule } from 'ngx-drag-drop';

import { UserRoutingModule } from './user-routing.module';
import { MenubarComponent } from './menubar/menubar.component';
import { MaterialModule } from '../material/material.module';
import { DietplanComponent } from './dietplan/dietplan.component';
import { CreateComponent } from './create/create.component';
import { HomeComponent } from './home/home.component';
import { ForumComponent } from './forum/forum.component';
import { ProductComponent } from './home/product/product.component';
import { ProductdetailsComponent } from './home/productdetails/productdetails.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TypefilterPipe } from '../pipes/typefilter.pipe';
import { RouterModule } from '@angular/router';
import { DiettypeComponent } from './dietplan/diettype/diettype.component';
import { DietdetailsComponent } from './dietplan/dietdetails/dietdetails.component';
import { ContactboxComponent } from './create/contactbox/contactbox.component';
import { FeedbackFormComponent } from './forum/feedback-form/feedback-form.component';
import { FeedbackBoxComponent } from './forum/feedback-box/feedback-box.component';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { DndDraggableDirective } from 'ngx-drag-drop';






export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http,'./assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    MenubarComponent,
    HomeComponent,
    DietplanComponent,
    CreateComponent,
    ForumComponent,
    ProductComponent,
    ProductdetailsComponent,
    TypefilterPipe,
    DiettypeComponent,
    DietdetailsComponent,
    ContactboxComponent,
    FeedbackFormComponent,
    
  
    
   
    FeedbackBoxComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    MaterialModule,
    FormsModule,
    HttpClientModule,
    DragDropModule,
    RouterModule,
    DndModule,
        
    
    ReactiveFormsModule,
    TranslateModule.forRoot({
      loader: {
          provide: TranslateLoader,
          useFactory: HttpLoaderFactory,
          deps: [HttpClient]
      }
  })
  ],
  exports:[
    HomeComponent,
    MenubarComponent,
    
  ]
})
export class UserModule { }
