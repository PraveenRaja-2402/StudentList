import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
 
  constructor(private http: HttpClient) { }

  getFirstStandardData(_standard: string): Observable<any[]> {
    return this.http.get<any[]>(`https://localhost:44337/api/Student/${_standard}`);
  }

  // getSecondStandardData(): Observable<any[]> {
  //   return this.http.get<any[]>('https://localhost:44337/api/Student/2');
  // }
}
