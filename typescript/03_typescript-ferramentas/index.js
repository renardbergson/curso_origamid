"use strict";
// =================== FERRAMENTAS DO TYPESCRIPT ===================
// Os navegadores e o Node.js não executam TypeScript diretamente, apenas JavaScript 💡
// Por isso, é necessário usar um compilador que converta o código TypeScript para JavaScript
// =================== COMANDOS BÁSICOS ===================
// 1 - Instalação do TypeScript globalmente:
//    "npm install -g typescript"
//    - Esse comando instala o TypeScript no sistema para que possa ser usado em qualquer projeto
// 2 - Verificação da instalação:
//    "tsc"
//    - Executar esse comando no terminal confirma se o TypeScript foi instalado corretamente, exibindo a versão instalada
// 3 - Criação do arquivo de configuração "tsconfig.json":
//    "tsc --init"
//    - Esse comando gera o arquivo "tsconfig.json", que define como o TypeScript deve ser compilado. Aqui está uma configuração básica que usaremos:
/*
  {
    "compilerOptions": {
      "target": "ESNext", // Versão moderna de JavaScript
      "strict": true      // Modo estrito para validação de tipos
    }
  }
  
  I - "target": Define para qual versão do JavaScript o TypeScript será compilado. O valor "ESNext" compila para a versão mais moderna disponível.
  II - "strict": Ativa o modo estrito, adicionando regras rigorosas de tipagem e prevenindo erros comuns, como o uso do tipo "any".
*/
// 4 - Observando mudanças nos arquivos TypeScript:
//    "tsc -w"
//    - Esse comando monitora os arquivos TypeScript e recompila automaticamente sempre que há mudanças, eliminando a necessidade de rodar "tsc" manualmente após cada alteração.
// =================== INTRODUÇÃO AOS TYPE ANNOTATIONS ===================
// Exemplo básico de anotação de tipos no TypeScript:
function somar(a, b) {
    return a + b;
}
console.log(somar(10, 20)); // Saída: 30
