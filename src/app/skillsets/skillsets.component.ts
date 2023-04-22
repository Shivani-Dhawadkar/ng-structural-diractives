import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skillsets',
  templateUrl: './skillsets.component.html',
  styleUrls: ['./skillsets.component.scss']
})
export class SkillsetsComponent implements OnInit {

  skillArray : Array<string> = ['Html 5', 'Css3', 'BootStrap 4', 'JavaScript Es6', 'Sass', 'Ajax', 'Angular 10']
  
  primarySkillArray : Array<string> = ['MS-office', 'word', 'excel']
  color : boolean = true;
  isSkill : boolean = false;
  constructor() { }

  ngOnInit(): void {
    setTimeout(()=>{
      this.color = Math.random() >= .5 ? true : false
    },2000)

    setTimeout(()=>{
      this.isSkill = Math.random() >= .5 ? true : false
    },2000)
  }
  
  public bgcolor(){
   if(this.color){
    return 'yellow'
   }else{
    return 'red'
   };

   

  }
  public getcolor(){
    if(this.isSkill){
      return 'hotpink'
     }else{
      return 'gray'
     }
  }
  

}
