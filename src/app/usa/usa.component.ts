import { Component, OnInit } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
//import { Headers,Http} from '@angular/http';


@Component({
  selector: 'app-usa',
  templateUrl: './usa.component.html',
  styleUrls: ['./usa.component.css']
})
export class UsaComponent implements OnInit {

  constructor(private http: HttpClient) { }

  mybearerToken= "Bearer "+localStorage.getItem("TOKEN");

  value:string = "my india"  
 

  // oncheck()
  // {

  //   const httpOptions = {
  //     headers: new HttpHeaders({
  //       'Authorization': this.mybearerToken
  //     })
  //   };

  //  // this.http.post('http://localhost:4000/check',this.value,httpOptions).subscribe();
  //   this.http.post('http://localhost:4000/check',this.value).subscribe();

  // }

  oncheck()
  {

    const httpOptions = {
          headers: new HttpHeaders({
            'Authorization': this.mybearerToken
          })
        };
    this.http.get("http://localhost:7000/orders-api/orders").subscribe(res=>console.log(res));

  }

  ngOnInit() {
  }

}
