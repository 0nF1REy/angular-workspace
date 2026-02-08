import { ChangeDetectionStrategy, Component, computed, effect, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { form, Field, required, disabled, submit } from '@angular/forms/signals';

type Category = { id: string; name: string };
type Subcategory = { id: string; categoryId: string; name: string };
type Product = { id: string; subcategoryId: string; name: string; price: number };

type Model = {
  categoryId: string;
  subcategoryId: string;
  productId: string;
};

@Component({
  selector: 't-cascading-dropdowns',
  imports: [CommonModule, Field],
  templateUrl: './cascading-dropdowns.html',
  styleUrl: './cascading-dropdowns.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CascadingDropdowns {
  readonly categories: Category[] = [
    { id: 'music', name: 'Música' },
    { id: 'games', name: 'Jogos' },
    { id: 'books', name: 'Livros' },
  ];

  readonly subcategories: Subcategory[] = [
    { id: 'vinyl', categoryId: 'music', name: 'Vinil' },
    { id: 'cd', categoryId: 'music', name: 'CD' },
    { id: 'rpg', categoryId: 'games', name: 'RPG' },
    { id: 'indie', categoryId: 'games', name: 'Indie' },
    { id: 'classic', categoryId: 'books', name: 'Clássicos' },
    { id: 'sci', categoryId: 'books', name: 'Ficção científica' },
  ];

  readonly products: Product[] = [
    { id: 'vinyl-1', subcategoryId: 'vinyl', name: 'Turntable básico', price: 899 },
    { id: 'vinyl-2', subcategoryId: 'vinyl', name: 'Disco: Rock 80s', price: 120 },
    { id: 'cd-1', subcategoryId: 'cd', name: 'CD: Coletânea Pop', price: 39 },
    { id: 'cd-2', subcategoryId: 'cd', name: 'CD: Metal clássico', price: 45 },
    { id: 'rpg-1', subcategoryId: 'rpg', name: 'Livro de regras', price: 160 },
    { id: 'rpg-2', subcategoryId: 'rpg', name: 'Conjunto de dados', price: 35 },
    { id: 'indie-1', subcategoryId: 'indie', name: 'Jogo indie (Steam key)', price: 30 },
    { id: 'indie-2', subcategoryId: 'indie', name: 'Soundtrack indie', price: 18 },
    { id: 'classic-1', subcategoryId: 'classic', name: 'Machado de Assis', price: 29 },
    { id: 'classic-2', subcategoryId: 'classic', name: 'Platão (Diálogos)', price: 55 },
    { id: 'sci-1', subcategoryId: 'sci', name: 'Sci-fi: Antologia', price: 42 },
  ];

  readonly model = signal<Model>({
    categoryId: '',
    subcategoryId: '',
    productId: '',
  });

  readonly f = form(this.model, (p) => {
    required(p.categoryId, { message: 'Escolha uma categoria.' });
    required(p.subcategoryId, { message: 'Escolha uma subcategoria.' });
    required(p.productId, { message: 'Escolha um produto.' });

    disabled(p.subcategoryId, ({ valueOf }) => !valueOf(p.categoryId));
    disabled(p.productId, ({ valueOf }) => !valueOf(p.subcategoryId));
  });

  readonly filteredSubcategories = computed(() => {
    const categoryId = this.model().categoryId;
    return this.subcategories.filter((s) => s.categoryId === categoryId);
  });

  readonly filteredProducts = computed(() => {
    const subcategoryId = this.model().subcategoryId;
    return this.products.filter((p) => p.subcategoryId === subcategoryId);
  });

  readonly selectedProduct = computed(() => {
    const productId = this.model().productId;
    return this.products.find((p) => p.id === productId) ?? null;
  });

  constructor() {
    effect(() => {
      const { categoryId, subcategoryId, productId } = this.model();

      if (subcategoryId) {
        const okSub = this.subcategories.some(
          (s) => s.id === subcategoryId && s.categoryId === categoryId,
        );
        if (!okSub) {
          this.model.update((m) => ({ ...m, subcategoryId: '', productId: '' }));
          return;
        }
      }

      if (productId) {
        const okProd = this.products.some(
          (p) => p.id === productId && p.subcategoryId === subcategoryId,
        );
        if (!okProd) {
          this.model.update((m) => ({ ...m, productId: '' }));
        }
      }
    });
  }

  onSubmit(): void {
    submit(this.f, async () => {
      console.log('Pedido Enviado:', this.model());
      console.log('Detalhes do Produto:', this.selectedProduct());
    });
  }

  displayPriceBRL(value: number): string {
    return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(value);
  }
}
