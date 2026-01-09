export const GlobalConstants = {
  API_ENDPOINTS: {
    PRODUCT: {
      GET_ALL_PRODUCTS: 'get-products',
    },
    MASTER: {
      GET_PARENT_CATEGORY: 'GetParentCategory',
      CREATE_PARENT_CATEGORY: 'CreateParentCategory',
    },
  },
  REGULAR_EXPRESSIONS: {
    // ===== USUÁRIO =====
    USER: {
      NAME: /^[A-Za-zÀ-ÿ\s]{2,80}$/,
      EMAIL: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
      PASSWORD: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*#?&]{8,}$/,
      PHONE_E164: /^\+?[1-9]\d{7,14}$/,
    },

    // ===== ENDEREÇO =====
    ADDRESS: {
      BR: {
        POSTAL_CODE: /^\d{5}-?\d{3}$/,
      },
      US: {
        POSTAL_CODE: /^\d{5}(-\d{4})?$/,
      },
      JP: {
        POSTAL_CODE: /^\d{3}-?\d{4}$/,
      },
      EU: {
        POSTAL_CODE: /^[A-Za-z0-9\s-]{3,10}$/,
      },
    },

    // ===== DOCUMENTOS =====
    DOCUMENT: {
      BR: {
        CPF: /^\d{3}\.\d{3}\.\d{3}-\d{2}$/,
        CNPJ: /^\d{2}\.\d{3}\.\d{3}\/\d{4}-\d{2}$/,
      },
      US: {
        EIN: /^\d{2}-?\d{7}$/,
      },
      EU: {
        VAT: /^[A-Z]{2}[A-Z0-9]{8,12}$/,
      },
      JP: {
        CORPORATE_NUMBER: /^\d{13}$/,
      },
      IN: {
        PAN: /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/,
      },
    },

    // ===== PAGAMENTO =====
    PAYMENT: {
      CREDIT_CARD_NUMBER: /^\d{13,19}$/,
      CVV: /^\d{3,4}$/,
    },
  },
} as const;
