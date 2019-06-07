import { Component, OnInit } from '@angular/core';
import { TranferService } from '../tranfer.service';


@Component({
  selector: 'app-two',
  templateUrl: './two.component.html',
  styleUrls: ['./two.component.css']
})
export class TwoComponent implements OnInit {
  clickValue: number;
  constructor(private transfer: TranferService) { }

  ngOnInit() {
    this.transfer.counter.subscribe(
      (value: number) => {
        this.clickValue = value;
      }
    );
  }
}
