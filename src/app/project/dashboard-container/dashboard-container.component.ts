import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subject, Subscription } from 'rxjs';

@Component({
  selector: 'app-dashboard-container',
  templateUrl: './dashboard-container.component.html',
  styleUrls: ['./dashboard-container.component.scss']
})
export class DashboardContainerComponent implements OnInit, OnDestroy {
  public dataObservable: Observable<any> = new Observable((subscrier) => {
    let i = 0;
    subscrier.next('hello')
    subscrier.next({ name: 'viral', age: 27 })
  })

  public subscription!: Subscription;
  ngOnInit() {
    this.subscription = this.dataObservable.subscribe((res: number) => {
      // console.log(res)
    }, (error) => {
      console.log(error)
    })    
    this.dataObservable.subscribe((res: any) => {
      console.log(res, '1')
    })
  }

  ngOnDestroy() {
    this.subscription.unsubscribe()
  }
}
