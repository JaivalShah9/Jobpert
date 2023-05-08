import { MatFormFieldModule } from '@angular/material/form-field';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
// import { FormField } from '../assets/MatFormFieldModule';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  // getFormFiels(): Observable<FormField> {
    // return this.http.get('../assets/formFields.json');
  }
// }
