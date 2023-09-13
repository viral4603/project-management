import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard-presentation',
  templateUrl: './dashboard-presentation.component.html',
  styleUrls: ['./dashboard-presentation.component.scss']
})
export class DashboardPresentationComponent {
  public hello:string = 'I am veer'
  static isUserDefine() {
    console.log('static method works')
  }
}
