import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-summary-presentation',
  templateUrl: './summary-presentation.component.html',
  styleUrls: ['./summary-presentation.component.scss'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class SummaryPresentationComponent {
}
