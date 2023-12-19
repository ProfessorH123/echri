import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CategoriesService {
  private baseUrl = 'https://echri.onrender.com/category/';

  constructor(private http: HttpClient) {}

  getAllCategories(): Observable<any> {
    return this.http.get(this.baseUrl).pipe(catchError(this.handleError));
  }

  createCategory(categoryData: any): Observable<any> {
    return this.http
      .post(this.baseUrl, categoryData, {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
        }),
      })
      .pipe(catchError(this.handleError));
  }

  deleteToy(id: object): Observable<any> {
    return this.http
      .delete(this.baseUrl + id)
      .pipe(catchError(this.handleError));
  }
  getSubCategoriesByParentCategory(parentCategory: string): Observable<any> {
    const url = `https://echri.onrender.com/sub-category/by-parent/${parentCategory}`;
    return this.http.get(url).pipe(catchError(this.handleError));
  }

  private handleError(error: any) {
    return throwError(error);
  }
}
