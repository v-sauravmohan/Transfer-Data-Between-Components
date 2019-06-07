import { Component, OnInit } from '@angular/core';
import { TranferService } from '../tranfer.service';

@Component({
  selector: 'app-one',
  templateUrl: './one.component.html',
  styleUrls: ['./one.component.css']
})
export class OneComponent implements OnInit {
  val = 0;
  constructor( private transfer: TranferService ) { }

  ngOnInit() {
  }
  onClick() {
    this.val = this.val + 1;
    this.transfer.counter.next(this.val);
  }
}
