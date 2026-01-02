import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  OnDestroy,
  OnInit,
} from '@angular/core';

@Component({
  selector: 'life-cycle-ex',
  standalone: true,
  imports: [],
  templateUrl: './life-cycle-ex.html',
  styleUrl: './life-cycle-ex.css',
})
export class LifeCycleEx
  implements
    OnInit,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy
{
  ngOnInit(): void {
    console.log('ngOnInit');
    // Invocação de funções de chamada de API
  }

  ngAfterContentInit(): void {
    console.log('ngAfterContentInit');
  }

  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked');
  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit');
    // Manipulação de ViewChild
  }

  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked');
  }

  ngDoCheck(): void {
    console.log('ngDoCheck');
    // Detecção de mudanças (Change detection)
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy');
    // Cancelar inscrições (Unsubscribe)
  }

  // Fora esses 3, os outros têm casos de uso específicos
}
