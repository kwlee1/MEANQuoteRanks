import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css'],
  // encapsulation: ViewEncapsulation.None
})
export class AddComponent implements OnInit {
  @Input() quotes;
  @Output() createQuoteEvent = new EventEmitter();
  
  newQuote = { body: '', author: '', rating: 0};

  constructor() { }

  ngOnInit() {
  }
  onSubmit(formData) {
    console.log(formData)
    console.log(this.newQuote);
    this.createQuoteEvent.emit(this.newQuote);
    this.newQuote = { body: '', author: '', rating: 0};
  }


}
