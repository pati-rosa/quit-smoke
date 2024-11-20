export const optionGroups = {
    day: Array.from({ length: 31 }, (_, i) => (i + 1).toString()),
    month: [
      'January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December'
    ],
    year: Array.from({ length: 100 }, (_, i) => (2023 - i).toString()),
  };