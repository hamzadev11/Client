import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../app-routing.module';
import { AppComponent } from '../app.component';
import { MenuComponent } from '../menu/menu.component';
import { ListProgrammeComponent } from '../Programme/list-programme/list-programme.component';
import { FooterComponent } from '../footer/footer.component';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MenuComponent,
    ListProgrammeComponent,
    FooterComponent
  ]
})
export class ClientModule { }
