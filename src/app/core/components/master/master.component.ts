import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-master',
  templateUrl: './master.component.html',
  styleUrls: ['./master.component.scss']
})
export class MasterComponent implements OnInit, AfterViewInit {
  constructor(private route:ActivatedRoute) {

  }
  ngAfterViewInit(): void {
    // console.log(this.route.getCurrentNavigation())
  }
  ngOnInit(): void {  
    this.route.data.subscribe((data) => {
      console.log(data['id'])
    });
  }

}
