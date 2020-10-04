import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
import { ActivatedRouteSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  public baseUrl = "http://132.148.90.242:3031/";
  public jwtToken = '';
  constructor(private http: HttpClient) {
  }

  /* read site setting data */
  public getSiteSettingData(url): Observable<any> {
    return this.http.get(url);
  }

  /* call api via post method */
  httpViaPost(endpoint, jsonData): Observable<any> {

    /* set common header */
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        // 'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
        // 'Access-Control-Allow-Methods': 'POST',
        // 'Access-Control-Allow-Origin': '*'
      })
    };
    return this.http.post(this.baseUrl + endpoint, jsonData, httpOptions);
  }



  httpReportDownload(endpoint, jsonData): Observable<any> {

    /* set common header */
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': 'https://127.0.0.1:4200',
        'responseType': 'text'
      })
    };
    return this.http.get(endpoint, jsonData);
    // var result = this.http.get(endpoint).pipe(map(res => res));
    // return result;
  }



  //ip track api function
  getclientip() {
    var result = this.http.get("https://ipinfo.io/?format=json&token=9797c42b93078a").pipe(map(res => res));
    return result;
  }

  /* call api via get method */
  httpViaGet(endpoint, jsonData): Observable<any> {

    /* set common header */
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return this.http.get(this.baseUrl + endpoint, jsonData);
  }

  /* Resolve service */
  ResolveViaPost(requestdata: any, endpoint: any): Observable<any> {
    /* set common header */
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    // console.log(this.baseUrl + endpoint,requestdata)
    return this.http.post(this.baseUrl + endpoint, JSON.stringify(requestdata), httpOptions).pipe(map(res => res));
  }


  checkingDuplicateEmail(requestdata: any): Observable<any> {
    let data: any = { "email": requestdata, "source": "users" };

    /* set common header */
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    return this.http.post(this.baseUrl + 'duplicate-email-checking', JSON.stringify(data), httpOptions).pipe(map(res => res));
  }

  /* call api via get method */
  httpViaGetExt(url, jsonData): Observable<any> {

    /* set common header */
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        // 'Authorization': this.cookieService.get('jwtToken')
      })
    };
    return this.http.get(url, jsonData);
  }

  getRequest(url, data) {
    return this.http.get(this.baseUrl + url, data);
  }

  get(url) {
    return this.http.get(url);
  }

}

