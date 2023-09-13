import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-task-card',
  templateUrl: './task-card.component.html',
  styleUrls: ['./task-card.component.scss'],
  standalone:true,
  providers:[CommonModule],
  inputs:['task']
})
export class TaskCardComponent {
  task:any;
}
