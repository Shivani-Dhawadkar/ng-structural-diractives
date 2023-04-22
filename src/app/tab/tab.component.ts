import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.scss']
})
export class TabComponent implements OnInit {

  framework : string = "Angular"
  frame : string = "1"

  constructor() { }

  ngOnInit(): void {
  }

  onFrameworkChange(val : string){
    // console.log(val)
    this.framework = val
  }

  onFrameChange(eve : Event){
    let val = (eve.target as HTMLElement).innerText
    this.frame = val
  }
}
