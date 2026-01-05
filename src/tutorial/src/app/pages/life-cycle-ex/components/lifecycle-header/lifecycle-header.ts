import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 't-lifecycle-header',
  imports: [],
  templateUrl: './lifecycle-header.html',
  styleUrl: './lifecycle-header.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LifecycleHeader {

}
