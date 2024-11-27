// ==================== MODULE ====================
// Quando usamos as palavras-chave "import" ou "export" em um arquivo .ts, esse arquivo é tratado como um módulo.
// Isso significa que seu escopo deixa de ser global, e para acessar o conteúdo de um módulo em outro arquivo .ts, é necessário exportar o que se deseja compartilhar.
// PS: Vale notar que a importação pode vir de um arquivo .js 💡
// PS: No HTML, é necessário declarar o arquivo principal como do tipo "module" para que o TypeScript trate o arquivo como um módulo 💡
import plugin from "./plugin.js";
plugin("teste");

// ==================== COMO CARREGAR SCRIPTS DE FORMA GLOBAL? ====================
// Para carregar scripts globalmente, basta adicioná-los no HTML, como fazemos com o arquivo JavaScript principal.
// Atenção! A ordem de carregamento dos arquivos importa: um script carregado antes de outro não terá acesso aos scripts que são carregados posteriormente, mesmo que estejam no escopo global! 🚨
// Esse tipo de erro pode causar problemas ou confusões, então, sempre que possível, evite depender da ordem de carregamento dos scripts. 💡
console.log(URL_BASE);

// ==================== COMO EVITAR ERROS DE CARREGAMENTO DE SCRIPTS? ====================
// Podemos configurar o arquivo "tsconfig.json" com a opção "isolatedModules": true, o que força o uso de módulos no TypeScript.
// Essa configuração impede o uso de arquivos com scripts globais, evitando erros de escopo e carregamento.
// Vamos adicionar essa configuração na próxima aula para não interferir no exemplo com o arquivo "global.ts".
