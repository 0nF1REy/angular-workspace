export function getNestedError(errorObject: Error): string {
  if (!(errorObject instanceof Error)) {
    return 'Erro desconhecido';
  }

  // Verifica primeiro se existe uma causa
  const cause = errorObject.cause as Record<string, any> | undefined;
  if (cause) {
    const body = cause['body'] as Record<string, any> | undefined;
    if (body) {
      if ('error' in body) {
        return body['error'];
      }
    }
  }

  // Caso contrário, verifica se existe uma mensagem
  if ('message' in errorObject) {
    return `${errorObject.message}`;
  }

  return 'Erro desconhecido';
}
