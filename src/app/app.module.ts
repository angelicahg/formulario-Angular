import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
//realizar la imprtacion para poder consumir la api
import { HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { FormulariogComponent } from './components/formulariog/formulariog.component';

@NgModule({
  declarations: [
    AppComponent,
    FormulariogComponent
    
    
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
