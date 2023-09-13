import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public projectName: string;
  constructor(private route: ActivatedRoute,private router:Router) {
    this.projectName = '';
  }
  
  public ngOnInit() {
    console.log('Route ==================',this.router)
    console.log('Activated route ==================',this.route)
    
    this.route.data.subscribe(data => {
      this.projectName = data['name']
    })
  }

  /**
   * @description navigate user to selected project
   */
  public navigateToProject() {
    this.router.navigate(['/1rivet/project'])
  }


}
