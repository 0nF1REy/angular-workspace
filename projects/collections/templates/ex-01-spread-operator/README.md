# Operador Spread em Templates

Este projeto demonstra uma das adições mais úteis do **Angular 21.1**:  
o uso do **operador spread diretamente nos templates**.

Você verá como isso permite:

- Compor **arrays** diretamente na view
- Estender e mesclar **objetos** de forma declarativa
- Eliminar código auxiliar (“glue code”) nos componentes
- Manter a lógica de UI onde ela deve estar: no template

A demo consiste em um pequeno painel de usuários que mostra:

- A construção de uma lista única de usuários a partir de múltiplas fontes usando _array spread_
- O compartilhamento e extensão de configurações de botões usando _object spread_
- O mesmo comportamento em tempo de execução antes e depois da refatoração

Tudo isso com templates mais limpos e expressivos.

---

## Requisitos

- Angular **21.1+**
- Node **18+**

---

## Executando o projeto

```bash
npm install
npm start
```

Acesse `http://localhost:4200`, ative as opções **"Is Admin"** e **"Is Busy"**, e explore o arquivo `users-page.component.html` para ver o _template spread_ em ação.
