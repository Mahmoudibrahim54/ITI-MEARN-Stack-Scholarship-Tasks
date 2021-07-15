import { Component } from '@angular/core';

@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.css']
})
export class SlideShowComponent {
  image:string ="assets/Images/0.png";
  count:number = 0;
  myInterval;
  goLeft(){
    if(this.count > 1){
      this.image = "assets/Images/"+(--this.count)+".jpg"
    }
  }
  goRight(){
    if(this.count < 6){
      this.image = "assets/Images/"+(++this.count)+".jpg"
    }
  }
  startSlideshow(){
    clearInterval(this.myInterval);
    this.myInterval = setInterval(()=>{
      if(this.count === 6){
        this.count = 0;  }   
      this.image = "assets/Images/"+(++this.count)+".jpg"
     
    },500)
  }
  pauseSlideshow(){
    clearInterval(this.myInterval);
  }

}
