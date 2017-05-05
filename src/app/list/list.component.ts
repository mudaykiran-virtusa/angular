import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor() {

  }
   @Input() type: string;
   @Input() listoftasks: string[];
   count: number=1;
   increment(){ this.count++}
  ngOnInit() {
   
  }

}
