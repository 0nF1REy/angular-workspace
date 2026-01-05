import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 't-lifecycle-hook-box',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './lifecycle-hook-box.html',
  styleUrl: './lifecycle-hook-box.css',
})
export class LifecycleHookBox {
  @Input({ required: true }) title!: string;
  @Input({ required: true }) description!: string;
  @Input() highlight: boolean = false;
}
