interface Curso {
  nome: string;
  totalAulas: number;
  totalHoras: number;
}

// Arquivos .d.ts manuais (como este) servem para adicionar declarações globais, mas não são incluídos no arquivo .d.ts gerado automaticamente pela compilação. Para garantir que as declarações globais como a interface "Curso" apareçam no arquivo gerado, elas devem ser exportadas de um arquivo .ts que será compilado. 🚨
