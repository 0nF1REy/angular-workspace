import { TSidebarItem } from './t-sidebar.model';

export const SIDEBAR_MENU: TSidebarItem[] = [
  {
    label: 'Variável',
    icon: 'bi-code-square',
    route: 'variables',
  },
  {
    label: 'Data Binding',
    icon: 'bi-link-45deg',
    route: 'databinding',
  },
  {
    label: 'Signals',
    icon: 'bi-lightning-charge',
    route: 'signal',
  },
  {
    label: 'Fluxo de Controle',
    icon: 'bi-git',
    route: 'control-flow',
  },
  {
    label: 'ngClass & ngStyle',
    icon: 'bi-palette',
    route: 'dynamic-css-class',
  },
  {
    label: 'Usuários',
    icon: 'bi-people',
    route: 'users',
  },
  {
    label: 'Usuários Reativos',
    icon: 'bi-person-gear',
    route: 'reactive-users',
  },
  {
    label: 'Lotes',
    icon: 'bi-layers',
    route: 'batch',
  },
  {
    label: 'Competição',
    icon: 'bi-trophy',
    route: 'competition',
  },
  {
    label: 'Signal Form',
    icon: 'bi-ui-checks',
    route: 'signal-form',
  },
  {
    label: 'Life Cycle',
    icon: 'bi-arrow-repeat',
    route: 'life-cycle',
  },
];
