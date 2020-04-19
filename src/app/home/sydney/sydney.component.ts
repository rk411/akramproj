import { Component, OnInit } from '@angular/core';


import { AnimationService } from 'src/app/common/animation.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sydney',
  templateUrl: './sydney.component.html',
  styleUrls: ['./sydney.component.scss']
})
export class SydneyComponent implements OnInit {
 
  constructor(private animSRVC: AnimationService,private ro: Router) { }

  ngOnInit(): void {
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

}
