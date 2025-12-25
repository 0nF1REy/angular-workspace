import {
  AfterViewInit,
  Component,
  effect,
  ViewChild,
  ElementRef,
  NgZone,
  HostBinding,
} from '@angular/core';
import { ThemeService, SnowTheme } from '../services/theme';

interface Snowflake {
  x: number;
  y: number;
  size: number;
  speed: number;
}

@Component({
  selector: 'snowfall',
  standalone: true,
  imports: [],
  templateUrl: './snowfall.html',
  styleUrl: './snowfall.scss',
})
export class Snowfall implements AfterViewInit {
  @HostBinding('style.background')
  get background() {
    return this.theme?.background || 'transparent';
  }

  @ViewChild('canvasEl') canvasRef!: ElementRef<HTMLCanvasElement>;
  ctx!: CanvasRenderingContext2D;
  snowflakes: Snowflake[] = [];
  theme!: SnowTheme;

  private readonly SNOW_COUNT = 200;

  constructor(private themeService: ThemeService, private ngZone: NgZone) {
    effect(() => {
      this.theme = this.themeService.currentTheme();
      this.updateSnowSpeed();
    });
  }

  ngAfterViewInit(): void {
    const canvas = this.canvasRef.nativeElement;
    this.ctx = canvas.getContext('2d')!;
    this.resizeCanvas();
    this.initialSnowSetup();
    this.ngZone.runOutsideAngular(() => {
      this.animate();
    });
    window.addEventListener('resize', () => this.resizeCanvas());
  }

  resizeCanvas() {
    const canvas = this.canvasRef.nativeElement;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }

  initialSnowSetup() {
    this.snowflakes = [];
    for (let i = 0; i < this.SNOW_COUNT; i++) {
      this.snowflakes.push({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        size: Math.random() * 3 + 1,
        speed: Math.random() * 1 + this.theme.snowSpeed,
      });
    }
  }

  updateSnowSpeed() {
    if (this.snowflakes.length > 0) {
      this.snowflakes.forEach((flake) => {
        flake.speed = Math.random() * 1 + this.theme.snowSpeed;
      });
    }
  }

  animate() {
    const canvas = this.canvasRef.nativeElement;
    this.ctx.clearRect(0, 0, canvas.width, canvas.height);
    this.snowflakes.forEach((flake) => {
      flake.y += flake.speed;
      if (flake.y > canvas.height) {
        flake.y = -flake.size;
        flake.x = Math.random() * canvas.width;
      }
      this.ctx.fillStyle = this.theme.snowColor;
      this.ctx.beginPath();
      this.ctx.arc(flake.x, flake.y, flake.size, 0, Math.PI * 2);
      this.ctx.fill();
    });
    requestAnimationFrame(() => this.animate());
  }
}
