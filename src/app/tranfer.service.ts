import { Injectable, OnInit } from '@angular/core';
import { Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class TranferService implements OnInit {

  counter = new Subject<number>();

  constructor() { }

  ngOnInit(): void {

  }

}
