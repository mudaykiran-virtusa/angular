import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }
listpersonal: string[]=["clean","eat","drink"];
listprof: string[]=["work","more work","more and more work"];
  ngOnInit() {
  }

}
