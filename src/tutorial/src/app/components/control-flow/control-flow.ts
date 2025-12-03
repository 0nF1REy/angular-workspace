import { Component, signal, WritableSignal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'control-flow',
  imports: [FormsModule],
  templateUrl: './control-flow.html',
  styleUrl: './control-flow.css',
})
export class ControlFlow {
  isOfferCodeAvl: boolean = false;
  studentTotalMark: number | null = null;

  isSuccessDivVisiable: WritableSignal<boolean> = signal(false);

  offerList: string[] = [
    '15% de desconto no Pix',
    '30% de desconto no cartão Visa',
    '20% de desconto em compras acima de R$ 100',
    'Frete grátis para pagamentos no PayPal',
  ];

  productCategoryList: string[] = [
    'Ferramentas Manuais',
    'Livros de Ficção',
    'Roupas Casuais',
    'Utensílios de Cozinha',
    'Brinquedos Educativos',
    'Produtos de Jardinagem',
  ];

  employeeList = [
    { name: 'Ana Beatriz Souza', city: 'São Paulo', isActive: false },
    { name: 'Carlos Henrique Lima', city: 'Rio de Janeiro', isActive: false },
    { name: 'Giovanna Martins Duarte', city: 'Curitiba', isActive: false },
    { name: 'Rafael dos Anjos Moreira', city: 'Belo Horizonte', isActive: true },
    { name: 'Luiza Ferreira Campos', city: 'Salvador', isActive: false },
    { name: 'Miguel Andrade Pires', city: 'Fortaleza', isActive: false },
    { name: 'Bruna Oliveira Costa', city: 'Recife', isActive: false },
    { name: 'Eduardo Ramos Figueiredo', city: 'Porto Alegre', isActive: true },
  ];

  toggleDivVisibility() {
    this.isSuccessDivVisiable.set(!this.isSuccessDivVisiable());
  }
}
