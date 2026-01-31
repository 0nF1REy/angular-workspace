import { Injectable } from "@angular/core";

// Interface da resposta retornada pela API de sugestão
export interface SuggestResponse {
  suggestion: string;
}

@Injectable({
  providedIn: "root",
})
export class AiSuggestService {
  // Envia um texto para a API e retorna uma sugestão gerada
  async suggest(text: string, signal?: AbortSignal): Promise<SuggestResponse> {
    const response = await fetch("/api/suggest", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ text }),
      signal,
    });

    // Tratamento de erro caso a resposta não seja bem-sucedida
    if (!response.ok) {
      const error = await response.json().catch(() => ({
        error: "Erro desconhecido",
      }));

      throw new Error(error.error || `Erro HTTP ${response.status}`);
    }

    return response.json();
  }
}
