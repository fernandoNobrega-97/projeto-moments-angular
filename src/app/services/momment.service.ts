import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';
import { Momment } from '../Momment';
import { Response } from '../Response';

@Injectable({
  providedIn: 'root'
})
export class MommentService {

  private baseApiUrl = environment.baseApiUrl;
  private urlMomment = `${this.baseApiUrl}/api/moments`;

  constructor(private httpMomment: HttpClient) { }

  getMomments(): Observable<Response<Momment[]>> {
    return this.httpMomment.get<Response<Momment[]>>(this.urlMomment);
  }

  getMomment(id: number): Observable<Response<Momment>> {
    const url = `${this.urlMomment}/${id}`;
    console.log('url para o momento detalhes: ', url);
    return this.httpMomment.get<Response<Momment>>(url);
  }

  createMomment(formData: FormData): Observable<FormData> {
    console.log('minha url', this.urlMomment);
    return this.httpMomment.post<FormData>(this.urlMomment, formData);
  }

  removeMomment(id: number) {
    const url = `${this.urlMomment}/${id}`;
    return this.httpMomment.delete(url);
  }

  updateMomment(id: number, formData: FormData): Observable<FormData> {
    const url = `${this.urlMomment}/${id}`;
    return this.httpMomment.put<FormData>(url, formData);
  }
}
