# Campo de Sugestão com IA

Um demo minimalista, mas com estrutura de produção, mostrando um campo de sugestão alimentado por IA no Angular sem prejudicar a experiência do usuário.

## ⚙️ Funcionalidades

- **Disparo manual**: O usuário clica no botão de brilho para solicitar sugestões da IA (sem disparo automático)
- **Sugestões apenas para visualização**: As sugestões da IA aparecem abaixo da área de texto e nunca são escritas automaticamente
- **Aceitação explícita**: O usuário deve clicar em "Aceitar" para aceitar a sugestão
- **Cancelamento de requisição**: Clicar novamente no botão cancela requisições em andamento usando AbortController
- **Limite de requisições**: 10 requisições por minuto por endereço IP
- **Tempo limite de requisição**: 10 segundos para chamadas ao provedor de IA (15 segundos de timeout HTTP)
- **Tratamento de erros**: Exibe mensagem "IA indisponível" e preserva o texto do usuário

## 🛠️ Configuração

### 📌 Pré-requisitos

- Node.js 18+
- npm

### 📦 Instalação

Instale todas as dependências:

```bash
npm run install:all
```

### 🔧 Configuração

Crie um arquivo `server/.env` com sua chave de API Groq:

```
GROQ_API_KEY=sua_chave_groq_aqui
GROQ_MODEL=llama-3.1-8b-instant
PORT=3500
AI_PROVIDER=groq
```

**Nota:** O `PORT` deve ser definido como `3500` para coincidir com a configuração de proxy do cliente. Se usar outra porta, atualize `client/proxy.conf.json` e `client/vite.config.ts` conforme necessário.

**Como obter uma chave de API Groq:**

1. Cadastre-se em https://console.groq.com
2. Vá para a seção API Keys
3. Crie uma nova chave de API
4. Copie para o arquivo `.env`

### ▶️ Execução

Execute servidor e cliente juntos:

```bash
npm run dev
```

O servidor roda em `http://localhost:3500` (ou na porta definida em `.env`) e o cliente roda na porta padrão do Angular (`http://localhost:4200`). A configuração de proxy do cliente encaminha requisições `/api` para o servidor.

## 🧪 Uso

1. Comece a digitar uma descrição na área de texto
2. Clique no **botão de brilho** (✨) ao lado da área de texto para solicitar uma sugestão da IA
3. Aguarde a sugestão aparecer abaixo da área de texto (mostra "Pensando..." enquanto carrega)
4. Clique em **Aceitar** para substituir seu texto atual pela sugestão
5. Continue digitando ou clique novamente para obter uma nova sugestão

## 🌐 Endpoints da API

- `GET /health` - Verificação de saúde
- `POST /api/suggest` - Obter sugestão da IA
  - Requisição: `{ text: string }`
    - `text`: O texto atual da descrição para continuar
  - Resposta: `{ suggestion: string }`
  - Limite: 10 requisições por minuto por IP (retorna 429 se excedido)
  - Timeout: 10 segundos para chamada ao provedor de IA, 15 segundos de timeout HTTP total (retorna 504 se excedido)
