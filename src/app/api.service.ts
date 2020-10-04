import {ElementRef, EventEmitter, Injectable, Input, ViewChild} from '@angular/core';
import {switchMap, map, takeWhile, catchError} from 'rxjs/operators';
import {HttpClient, HttpHeaders} from '@angular/common/http';
// for setting observables to get serverurl and endpointurl from app
import {Observable, Subject, Subscription, throwError} from 'rxjs';
import {CookieService} from 'ngx-cookie-service';
import {environment} from '../environments/environment';
import {Router, ActivatedRoute} from '@angular/router';
import {MatSnackBar} from '@angular/material';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  public baseUrl = "http://132.148.90.242:3031/";
  public jwtToken = '';
  constructor(private http: HttpClient, private cookieService: CookieService, public router: Router, public activatedRoute: ActivatedRoute, private _snackBar: MatSnackBar) {
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
        'Content-Type': 'application/json'
      })
    };
    return this.http.post(this.baseUrl + endpoint, JSON.stringify(jsonData), httpOptions);
  }



  httpReportDownload(endpoint, jsonData): Observable<any> {

    /* set common header */
    // const httpOptions = {
    //   headers: new HttpHeaders({
    //     'Content-Type': 'application/json',
    //     'Access-Control-Allow-Origin': '*',
    //     'responseType': 'text'
    //   })
    // };
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
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      })
    };
    return this.http.get(this.baseUrl + endpoint, jsonData);
  }

  /* Resolve service */
  ResolveViaPost(requestdata: any, endpoint: any): Observable<any> {
    /* set common header */
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': '*'
      })
    };
    // console.log(this.baseUrl + endpoint,requestdata)
    return this.http.post(this.baseUrl + endpoint, JSON.stringify(requestdata), httpOptions).pipe(map(res => res));
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

