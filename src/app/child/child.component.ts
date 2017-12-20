import { Component,Input,Output,EventEmitter } from '@angular/core';
@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
@Input()
private parentData:string;

@Output()
private childEvent = new EventEmitter<string>();
  constructor() { }
  changeValue(value:string){
      this.childEvent.emit(value);
  }
 
}
