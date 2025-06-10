import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {

  constructor(private http:HttpClient) { }

  dummyObj:any = {
  "name": "Harsha",
  "email": "Harsha1235@gmail.com",
  "password": "Harsha@81109181",
  "phoneNumber": "9809809809"
}

  
  // {
  //   userName : 'Deepika',
  //   password : 'SnapQueen@1234'
  // }

  httpPost(obj:any,url:any){
    return this.http.post(url,this.dummyObj).pipe(
      map((resp:any) => {
        return resp ?? {data : resp}
      })
    );
  }


}
