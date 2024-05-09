import { Component, computed, signal } from '@angular/core';

const name = signal("Laura");

@Component({
  templateUrl: './counter-page.component.html',
  styleUrls: ['./counter-page.component.css']
})
export class CounterPageComponent {

  public counter = signal(10);
  // squareCounter es de solo lectura
  public squareCounter = computed( () => this.counter() * this.counter() );

  constructor() {
    console.log(name());
  }

  increasedBy( value: number ) {

    // this.counter.set( this.counter() + value );
    this.counter.update( current => current + value );

  }

}
