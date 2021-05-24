import { Component, Input, OnInit } from '@angular/core';
import { Day } from './day';
import {Slot} from './slot';

@Component({
  selector: 'app-common-grid',
  templateUrl: './common-grid.component.html',
  styleUrls: ['./common-grid.component.scss']
})
export class CommonGridComponent implements OnInit {
  dayArr: Day[] = [];  

  constructor() { }

  ngOnInit(): void {   
    this.dayArr = [
      {
        id:1,
        label:"day 1",
        slots:[
          {
            id: 1,
            label: "Slot 1"
          }
        ]
      },
      {
        id:2,
        label:"day 2",
        slots:[
          {
            id: 1,
            label: "Slot 1"
          },
          {
            id: 2,
            label: "Slot 2"
          }
        ]
      },
      {
        id:3,
        label:"day 3",
        slots:[
          {
            id: 1,
            label: "Slot 1"
          }
        ]
      },
      {
        id:4,
        label:"day 4",
        slots:[
          {
            id: 1,
            label: "Slot 1"
          },
          {
            id: 2,
            label: "Slot 2"
          }
        ]
      },
      {
        id:5,
        label:"day 5",
        slots:[
          {
            id: 1,
            label: "Slot 1"
          },
          {
            id: 2,
            label: "Slot 2"
          }
        ]
      },
      {
        id:6,
        label:"day 6",
        slots:[
          {
            id: 1,
            label: "Slot 1"
          },
          {
            id: 2,
            label: "Slot 2"
          }          
        ]
      },
      {
        id:7,
        label:"day 7",
        slots:[
        ]
      },
    ]
  }
}
