import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {

  constructor(private http:HttpClient) { }
  dummyObj:any =  {
    userName : 'Deepika',
    password : 'SnapQueen@1234'
  }

  httpPost(obj:any){
    return this.http.post("https://localhost:7202/api/login/login",this.dummyObj).pipe(
      map((resp:any) => {
        return resp ?? {data : resp}
      })
    );
  }


}
