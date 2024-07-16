import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import { AdminComponent } from './component/admin/admin.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './component/login/login.component';
import { UserregisterComponent } from './component/userregister/userregister.component';
import { AdminPanelComponent } from './component/admin-panel/admin-panel.component';
import { AddRestaurantComponent } from './component/add-restaurant/add-restaurant.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AdminComponent,
    LoginComponent,
    UserregisterComponent,
    AdminPanelComponent,
    AddRestaurantComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
