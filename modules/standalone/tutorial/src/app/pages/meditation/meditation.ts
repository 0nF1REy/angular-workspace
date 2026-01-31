import { ChangeDetectionStrategy, Component, signal, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 't-meditation',
  standalone: true,
  templateUrl: './meditation.html',
  styleUrl: './meditation.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Meditation implements OnInit, OnDestroy {
  breathState = signal<'inhale' | 'hold' | 'exhale'>('inhale');
  breathText = signal('Inspirar');

  private timer: any;

  ngOnInit() {
    this.startBreathingCycle();
  }

  startBreathingCycle() {
    const cycle = () => {
      this.breathState.set('inhale');
      this.breathText.set('Inspirar');

      this.timer = setTimeout(() => {
        this.breathState.set('hold');
        this.breathText.set('Segurar');

        this.timer = setTimeout(() => {
          this.breathState.set('exhale');
          this.breathText.set('Expirar');

          this.timer = setTimeout(cycle, 4000);
        }, 2000);
      }, 4000);
    };
    cycle();
  }

  ngOnDestroy() {
    if (this.timer) clearTimeout(this.timer);
  }
}
