import { Component, OnInit } from '@angular/core';
import { posts } from '../shared/const/post';
import { Ipost } from '../shared/model/student';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  postArray! : Array<Ipost>
  constructor() { }

  ngOnInit(): void {
    this.postArray = posts
    console.log(this.postArray)
  }

}
