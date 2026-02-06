# Angular Template Arrow Functions Demo

This repository demonstrates how to use **arrow functions directly in Angular component templates,** a powerful feature available in Angular 21.2-next.

It shows different approaches to using arrow functions in templates, including:
- Using arrow functions directly in event handlers instead of component methods
- Updating signals inline with arrow functions
- Updating nested object properties with arrow functions
- Performing inline calculations with arrow functions


## Key Features

### Arrow Functions in Templates
Angular 21.2-next allows you to use arrow functions directly in component templates, enabling you to:
- Simplify component code by removing small helper methods
- Write more concise and readable template code
- Update signals and perform calculations inline

### Example Usage

```html
<!-- Before: Component method -->
<button type="button" (click)="incrementQty()">+</button>

<!-- After: Arrow function directly in template -->
<button type="button" (click)="qty.update(n => n + 1)">+</button>

<!-- Updating nested object properties -->
<button type="button" 
  (click)="settings.update(s => ({ 
    taxRate: s.taxRate + 0.01
  }))">+1%</button>

<!-- Inline calculations -->
<span>
  {{ ((dist, rate) => dist * rate)(100, 0.05) | currency }}
</span>
```

### What NOT to Do

```html
<!-- ❌ DON'T wrap arrow functions in another arrow function -->
<button type="button" (click)="() => qty.update(n => n + 1)">+</button>
```

## How to Run

```bash
npm install
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

---

## Related Resources
- 🎥 **YouTube Tutorial**: [https://youtu.be/xoCQ6Pyv0C0](https://youtu.be/xoCQ6Pyv0C0)
