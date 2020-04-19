import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
declare var $: any;
import { trigger, query, transition, style, animate, state, group } from '@angular/animations';
import { AnimationService } from '../common/animation.service';

import { slideToLeft, slideToRight, slideToTop, slideToBottom } from '../common/animations';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [
    trigger('routeTransition', [
      transition("* => slideToLeft", slideToLeft),
      transition("* => slideToRight", slideToRight),
      transition("* => slideToTop", slideToTop),
      transition("* => slideToBottom", slideToBottom),
      transition("* => slideToLeftDuplicate", slideToLeft),
      transition("* => slideToRightDuplicate", slideToRight),
      transition("* => slideToTopDuplicate", slideToTop),
      transition("* => slideToBottomDuplicate", slideToBottom),
    ])
  ],
})
export class HomeComponent implements OnInit {
  subscription: Subscription;
  constructor(private ro: Router, private animSRVC: AnimationService) { }

  ngOnInit(): void {
    $("#menu-toggle").click(function (e) {
      e.preventDefault();
      $("#wrapper").toggleClass("toggled");
    });

  }


  gotoRoute(rou){
    if(rou=='sydney'){
      this.animSRVC.slideToRIGHT();
      this.ro.navigateByUrl(rou);
    }
    else if(rou=='conference'){
      this.animSRVC.slideToLEFT();
         this.ro.navigateByUrl(rou);
    }
  
 
  }

 

  getAnimation() {
    console.log(this.animSRVC.getCurrentAnimation());
    return this.animSRVC.getCurrentAnimation();
  }


  

}
