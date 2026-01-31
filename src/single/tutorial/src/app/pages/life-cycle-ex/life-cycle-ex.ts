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

import { LifecycleHeader } from './components/lifecycle-header/lifecycle-header';
import { LifecycleFooter } from './components/lifecycle-footer/lifecycle-footer';
import { LifecycleHookBox } from './components/lifecycle-hook-box/lifecycle-hook-box';

@Component({
  selector: 't-life-cycle-ex',
  standalone: true,
  imports: [LifecycleHeader, LifecycleHookBox, LifecycleFooter],
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
  readonly hooksList = [
    { title: 'ngOnInit', highlight: true, desc: 'Inicialização do componente e chamadas de API.' },
    {
      title: 'ngOnDestroy',
      highlight: true,
      desc: 'Limpeza: cancela inscrições e libera memória.',
    },
    {
      title: 'ngAfterViewInit',
      highlight: false,
      desc: 'Executado após o HTML e filhos serem renderizados.',
    },
    {
      title: 'ngAfterViewChecked',
      highlight: false,
      desc: 'Verificação após cada renderização da View.',
    },
    {
      title: 'ngAfterContentInit',
      highlight: false,
      desc: 'Executado após a projeção de conteúdo externo.',
    },
    {
      title: 'ngAfterContentChecked',
      highlight: false,
      desc: 'Verificação após cada checagem de conteúdo projetado.',
    },
    {
      title: 'ngDoCheck',
      highlight: false,
      desc: 'Detecção customizada de mudanças (roda com alta frequência).',
    },
  ];

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
