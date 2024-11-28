// ==================== DECLARATION FILES ====================
// Podemos criar arquivos focados apenas na declaração de tipos e interfaces, estes devem ser terminados em .d.ts.
// O TypeScript NÃO irá compilar eles, mas os tipos declarados poderão ser consumidos globalmente na nossa aplicação.
// Esse tipo de declaração é comum em bibliotecas criadas em JavaScript que desejam dar suporte ao uso da mesma em TypeScript.

// ==================== DECLARATION FILES NATIVOS ====================
// Se clicarmos sobre o método "querySelector" segurando CONTROL ou COMMAND, teremos acesso ao arquivo de declaração desse método: "lib.dom.d.ts".
//  Veremos então que nesse arquivo não há nenhum código além das declarações de tipo das bibliotecas do DOM
document.querySelector;

// ==================== DECLARATION FILES MANUAIS x AUTOMÁTICOS ====================
// Os arquivos automáticos .d.ts contêm somente os tipos que foram exportados ou declarados globalmente nos arquivos .ts, pois eles são compilados. 🚨
// O TypeScript não compila os arquivos .d.ts manualmente criados; eles são usados apenas para definir tipos e não participam da compilação em si. 💡
// Por exemplo: perceba que a interface "Curso", presente no arquivo .d.ts, criado manualmente, pode ser consumida globalmente, mas não é automaticamente incluida no arquivo .d.ts automático "index.d.ts" 💡
// PS: confita as anotações do arquivo manual "script.d.ts"
const consumindoCurso: Curso = {
  nome: "HTML",
  totalAulas: 20,
  totalHoras: 40,
};

console.log(consumindoCurso);

// ==================== DECLARAÇÃO GLOBAL ====================
// Não é necessário criar um arquivo global ou .d.ts para ter um tipo global.
// É possível também declarar dentro de um arquivo do tipo module, usando a sintaxe: "declare global {}"
// No exemplo a seguir, veja que estamos fazendo isso diretamente no nosso arquivo principal "index.ts",
// Isso só é possível se o arquivo em questão for do tipo "module", o que é o nosso caso, já que nosso arquivo principal possui "import/export" dentro de si, o que automaticamente o torna um arquivo do tipo modular 🚨
declare global {
  interface Usuario {
    nome: string;
    id: number;
  }
}

// ==================== EXPORTS ====================
// Tudo que for exportado de arquivos compiláveis (.ts), assim como tipos/interfaces globais vindas de desse tipo de arquivos, será incluído no arquivo automático .d.ts
export interface Produto {
  nome: string;
  preco: number;
}

export const livro: Produto = {
  nome: "O senhor dos aneis",
  preco: 230,
};

// ==================== NOME DO ARQUIVO MANUAIS ====================
// Crie uma pasta específica para os arquivos .d.ts criados manualmente, pois o TS ignora arquivos que possuem o mesmo nome e diretório, em favor do arquivo que terminar em .ts.

// - Use ✅
// /types/script.d.ts
// /script.ts

// - Não use 🔴
// /script.d.ts
// /script.ts

// ==================== EVITE GLOBAIS ====================
// Use apenas quando necessário. Assim como variáveis globais são problemáticas, tipos globais possuem os mesmos problemas.

// ==================== CONCLUSÃO ====================
// Vefifique o arquivo "index.d.ts" no diretório "dist", para conferir o resultado final
