import { Component} from '@angular/core';
import { Form }from 'src/app/models/form'
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-formulariog',
  templateUrl: './formulariog.component.html',
  styleUrls: ['./formulariog.component.css'],
})
export class FormulariogComponent {
  
   nombres = '';
    apellidos= '';
    telefono= '';
    correo= '';
    direccion='';
    documento= ''
  

  constructor(private http: HttpClient ) { }

  onSubmit(): void {
    const formData = { nombres: this.nombres, apellidos: this.apellidos };
    this.http.post('http://190.60.101.59:6003/Help/api', formData)
      .subscribe((response) => {
        console.log(response);
      });
  }
  }

 