import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 't-footer',
  imports: [],
  templateUrl: './t-footer.html',
  styleUrl: './t-footer.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TFooter {
  isAtBottom = input<boolean>(true);
}
