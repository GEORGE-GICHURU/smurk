// @ts-nocheck
  

import { Component, OnInit } from '@angular/core';
import { Quote } from '@angular/compiler';

import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-quotes-form',
  templateUrl: './quotes-form.component.html',
  styleUrls: ['./quotes-form.component.css']
})
export class QuotesFormComponent implements OnInit {
  quoted!: any;
  




  quoted = new Quote(0,"","","","",new Date(),0,0);
  @Output() add = new EventEmitter<Quote>();

  addQuote(){
this.add.emit(this.quoted);
this.quoted = new Quote(0,"","","","",new Date(),0,0);
  }



  constructor() { }

  ngOnInit(): void {
    this.quoted = {
      title: 'tech',
      quote: 'magere',
      author: 'lwanda',
    };
    

  }

}
