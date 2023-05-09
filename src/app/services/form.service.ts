import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Form } from '../models/form';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FormService {
  API_URI = 'http://190.60.101.59:6003/Help/api';

  constructor(private http: HttpClient) {}

  getForms() {
    return this.http.get(`${this.API_URI}/personas`);
  }

  getForm(id: string) {
    return this.http.get(`${this.API_URI}/personas/${id}`);
  }

  deletegetForm(id: string) {
    return this.http.delete(`${this.API_URI}/personas/${id}`);
  }

  savegetForm(form: Form) {
    return this.http.post(`${this.API_URI}/personas`, form);
  }

  updateMovie(id: string | number, updatedForm: Form): Observable<any> {
    return this.http.put(`${this.API_URI}/personas/${id}`, updatedForm);
  }
}