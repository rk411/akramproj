import { Component, OnInit } from '@angular/core';
import { AnimationService } from '../../common/animation.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-conference',
  templateUrl: './conference.component.html',
  styleUrls: ['./conference.component.scss']
})
export class ConferenceComponent implements OnInit {

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
