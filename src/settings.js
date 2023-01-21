const KIWI_BANK = "KIWI_BANK";
const ASB_BANK = "ASB_BANK";
const WESTPAC_BANK = "WESTPAC_BANK";
const ANZ_BANK = "ANZ_BANK";

const SUPPORTED_BANKS = [KIWI_BANK, ASB_BANK, WESTPAC_BANK, ANZ_BANK];

const BANKS = {
  KIWI_BANK: {
    HEADER_REGEX: /\d+-\d+-\d+-\d+,,,,/,
    DATE_FORMAT: "DD MMM YYYY ",
    COLUMNS: {
      TRANSACTION_DATE: 0,
      TRANSACTION_TEXT: 1,
      TRANSACTION_VALUE: 3,
    },
  },
  ASB_BANK: {
    HEADER_REGEX: /Date,Unique Id,Tran Type,Cheque Number,Payee,Memo,Amount/,
    DATE_FORMAT: "YYYY/MM/DD",
    COLUMNS: {
      TRANSACTION_DATE: 0,
      TRANSACTION_PAYEE: 4,
      TRANSACTION_TEXT: 5,
      TRANSACTION_VALUE: 6,
    },
  },
  WESTPAC_BANK: {
    HEADER_REGEX:
      /Date,Amount,Other Party,Description,Reference,Particulars,Analysis Code/,
    DATE_FORMAT: "DD/MM/YYYY",
    COLUMNS: {
      TRANSACTION_DATE: 0,
      TRANSACTION_VALUE: 1,
      TRANSACTION_OTHER_PARTY: 2,
      TRANSACTION_DESCRIPTION: 3,
      TRANSACTION_PARTICULARS: 5,
    },
  },
  ANZ_BANK: {
    HEADER_REGEX:
      /Type,Details,Particulars,Code,Reference,Amount,Date,ForeignCurrencyAmount,ConversionCharge/,
    DATE_FORMAT: "DD/MM/YYYY",
    COLUMNS: {
      TRANSACTION_DATE: 6,
      TRANSACTION_VALUE: 5,
      TRANSACTION_TYPE: 0,
      TRANSACTION_DETAILS: 1,
      TRANSACTION_CODE: 3,
    },
  },
};

function bank(id) {
  return {
    get TRANSACTION_DATE() {
      return BANKS[id].COLUMNS.TRANSACTION_DATE;
    },
    get TRANSACTION_PAYEE() {
      return BANKS[id].COLUMNS.TRANSACTION_PAYEE;
    },
    get TRANSACTION_TEXT() {
      return BANKS[id].COLUMNS.TRANSACTION_TEXT;
    },
    get TRANSACTION_VALUE() {
      return BANKS[id].COLUMNS.TRANSACTION_VALUE;
    },
  };
}

// After normalization these are the values
const TRANSACTION_DATE = 0;
const TRANSACTION_TEXT = 1;
const TRANSACTION_VALUE = 2;

export {
  SUPPORTED_BANKS,
  KIWI_BANK,
  ASB_BANK,
  WESTPAC_BANK,
  ANZ_BANK,
  TRANSACTION_DATE,
  TRANSACTION_TEXT,
  TRANSACTION_VALUE,
  BANKS,
  bank,
};
