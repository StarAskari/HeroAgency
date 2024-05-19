import { Component } from '@angular/core';
import { Hero } from '../hero';

@Component({
  selector: 'app-hero-form',
  templateUrl: './hero-form.component.html',
  styleUrl: './hero-form.component.css'
})
export class HeroFormComponent {
power=['Really Smart', 'Super Flexible',
'Super Hot', 'Weather Changer'];
  model= new Hero(18,'Dr.IQ',this.power[0],'Chuck Overstreet');
  submitted =false;
  onSubmit():void{
    this.submitted=true;
  }
  newHero():void{
    this.model=new Hero(42,'','','');
  }
   
}
