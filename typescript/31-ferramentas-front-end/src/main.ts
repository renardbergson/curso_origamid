// ==================== FERRAMENTAS FRONT-END ====================
// Nesta aula, vamos explorar como o TypeScript pode ser integrado a uma ferramenta moderna de desenvolvimento front-end.
// A biblioteca escolhida para isso foi a **Vite**.

// ====== VITE ======
// O Vite é uma ferramenta de automação Front-End. Com ele, podemos:
// - Gerar bundles;
// - Iniciar um live server;
// - Otimizar o código para produção e muito mais.
//
// **Vantagem principal:** Automatiza tarefas como iniciar o live server e compilar o TypeScript, simplificando o fluxo de trabalho. 💡

// ====== BENEFÍCIOS (VITE) ======
// - **Configuração mínima:** Funciona bem com poucas configurações iniciais.
// - **Rápido e eficiente:** Fornece um ambiente de desenvolvimento ultrarrápido e simplifica o build de produção.

// ====== COMO INICIAR (VITE) ======
// Etapas para iniciar um projeto com Vite:
// 1. Criação do projeto (dentro da pasta atual):
//    ```bash
//    npm create vite@latest .
//    ```
// 2. Instalar dependências:
//    ```bash
//    npm install
//    ```
// 3. Comandos principais:
//    ```bash
//    npm run dev    // Inicia o servidor de desenvolvimento
//    npm run build  // Gera o build de produção
//    ```

// ====== INSTALANDO BIBLIOTECAS EXTERNAS COM VITE ======
// O Vite simplifica a instalação de bibliotecas externas com `npm install`.
// Não é necessário buscar dependências manualmente nem inserir scripts no HTML. 💡
//
// **Exemplo:** Instalando as bibliotecas "lodash" e "clipboard":
// ```bash
// npm install lodash ✅
// npm install --save-dev @types/lodash ✅ // (os tipos não vêm por padrão)
//
// npm install clipboard --save ✅ // (já inclui o arquivo .d.ts)
// ```

// ====== EXEMPLOS DE USO ======

// Exemplo 1: Usando "lodash"
import _ from "lodash";
console.log("Diferença entre as arrays:", _.difference([1, 45], [2, 1, 3]));

// Exemplo 2: Usando "clipboard"
import ClipboardJS from "clipboard";

const button = new ClipboardJS("button");

function handleCopy(event: ClipboardJS.Event) {
  // Tipando corretamente "event": Pressione CONTROL (ou COMMAND) + clique sobre a função "on", para abrir o arquivo .d.ts e verificar sua tipagem.
  // Esse é o princípio ao utilizar bibliotecas externas tipadas. 💡

  console.log("Texto copiado:", event.text); // Autocomplete funcionando ✅
  event.clearSelection();
}

button.on("success", handleCopy);
