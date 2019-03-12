import { Component, OnInit, Input , Output ,EventEmitter } from '@angular/core';
//import { EventEmitter } from 'events';

@Component({
  selector: 'app-test',
  //templateUrl: './test.component.html',
  template:`
  <!--
  <input [class]="successClass" [id]="myId" type="text" value="Mrunal">
  <input class="text-special" id="{{myId}}" type="text" value="Mrunal">
  <h2 [class.text-danger]="hasError">Error</h2>
  <h2 [ngClass]= "messageClasses">Hello</h2>
  <button (click)="whenCLickGreed($event)">Greed</button>
  <button (click)="greed='Hello'">Greed</button>
  {{greed}}
  <input #myInput type= "text">
  <button (click)="LogMessage(myInput.value)">LOG</button>
  -->
  <!--
  <input [(ngModel)]="name"  type="text">
  {{name}}
  <h3>ngIf</h3>
  <h2 *ngIf="false; else else1Block">
    Hello *ngIf
  </h2>
  <ng-template #else1Block>
    <h2>Hello *ngIf else block</h2>
  </ng-template>

<div *ngIf="false; then thenBlock; else elseBlock"></div>
<ng-template #thenBlock>
  <h1>  thenBlock </h1> 
</ng-template>

<ng-template #elseBlock>
  <h1>  elseBlock </h1> 
</ng-template>
<h3>ngSwitch</h3>
<div [ngSwitch]="color">
  <div *ngSwitchCase="'red'">RED</div>
  <div *ngSwitchCase="'green'">GREEN</div>
  <div *ngSwitchCase="'blue'">BLUE</div>
  <div *ngSwitchDefault>pick again</div>
</div>
<div *ngFor="let col of colors; index as i ">
<h2>{{i}} {{col}}</h2>
</div>
<!--<h2>{{"Hello " + parentData}}</h2>-->
<h2>{{"Hello " + name}}</h2>
<button (click)="firstEvent()">Send Event</button>
{{"HELLO" | lowercase}}
{{"HELLO" | uppercase}}
{{"HELLO" | titlecase}}
{{"HELLO" | slice:1:2}} <!--only index[1] Display-->
{{person  | json}}
{{5.678 | number:'2.4-5'}}
{{0.25 | percent }}
{{5800 | currency: 'INR'}}
<h2>Services</h2>

`,

  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
public successClass = "text-success";
public hasError = false;
public isSpecial = true;
public color ="red";
public colors = ["red","green","blue","whight"];
public messageClasses = {
  "text-success": this.hasError,
  "text-danger": !this.hasError,
  "text-spacial":!this.isSpecial
}
public person={
  firstname :"Mrunal",
  color:"red",
  op:true 
}
//@Input() public parentData;
@Input('parentData') public name; 
@Output() public childEvent = new EventEmitter();//cutom event
public todaysdate = Date;
public  myId = "testid";
  constructor() { }

  ngOnInit() {
  }

  whenCLickGreed(event_details){
  console.log("event_details" + event_details);      
  }
  LogMessage(value){
    console.log(value); 
  }
  firstEvent(){
    this.childEvent.emit('Hey Mrunal');
  }
}
