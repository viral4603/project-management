import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { TaskStatus } from '../../model/task.model';

@Component({
  selector: 'app-task-list-presentation',
  templateUrl: './task-list-presentation.component.html',
  styleUrls: ['./task-list-presentation.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaskListPresentationComponent implements OnInit {
  task = [
    {
      id: 1,
      status: 'new',
      title: 'listing screen'
    },
    {
      id: 2,
      status: 'new',
      title: 'create student info form'
    },
    {
      id: 3,
      status: 'new',
      title: 'bug task 102'
    },
    {
      id: 2,
      status: 'new',
      title: 'listing screen'
    },

  ]

  active = [];
  new = [];
  resolve = [];
  closed = [];

  ngOnInit(): void {
    this.new = this.filterTask('new')
    this.active = this.filterTask('active')
    this.resolve = this.filterTask('resolve')
    this.closed = this.filterTask('completed')
  }
  /**
   * @description This method return new array that contain only provide status
   * @param status add task status as string 
   **/

  filterTask(status: string) {
    return this.task.filter((task: any) => {
      if (task.status === status) {
        return task
      }
    })
  }

  drop(event: CdkDragDrop<any[]>) {
    // console.log(event)
    const currentArray = event.previousContainer.data;
    let targetArray = event.container.data;

    if (event.previousContainer !== event.container) {

      transferArrayItem(
        currentArray,
        targetArray,
        event.previousIndex,
        event.currentIndex,
      );
      targetArray = this.changeStatusOfDropItem(targetArray, event.container.id)
    }
    else {
      moveItemInArray(currentArray, event.previousIndex, event.currentIndex)
    }

  }
  /**
   * change status of item according to its droped container
   * @param targetArray in which array item will drop
   * @param containerId id of container where item will droped 
   * @returns filter array with new status
   */
  changeStatusOfDropItem(targetArray, containerId: string): any[] {
    return targetArray.map((item: any) => {
      item.status = this.changeItemStatus(containerId)
      return item
    })
  }

  changeItemStatus(id: string): TaskStatus | undefined {
    switch (id) {
      case "cdk-drop-list-0":
        return TaskStatus.New;
      case "cdk-drop-list-1":
        return TaskStatus.Active;
      case "cdk-drop-list-2":
        return TaskStatus.Resolve;
      case "cdk-drop-list-3":
        return TaskStatus.Done;
      default:
        return TaskStatus.New;
    }
  }
}
