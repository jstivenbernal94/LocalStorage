import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { Users } from './models/users';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  url: string = "https://jsonplaceholder.typicode.com/users";
  Users: Array<Users>;

  constructor(private http: Http){
    this.http.get(this.url).subscribe(resp => this.grabarlocalstorage(resp.json()),
    err => {
      this.obtenerlocalstorage();
    });
  }

  obtenerlocalstorage(){
    this.Users = JSON.parse(localStorage.getItem("datos"));
  }

  private grabarlocalstorage(datos){
    localStorage.removeItem('datos');
    localStorage.setItem("datos", JSON.stringify(datos));
    this.Users = JSON.parse(localStorage.getItem("datos"));
  }
}