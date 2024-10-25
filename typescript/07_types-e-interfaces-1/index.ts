// ========================= TYPES E INTERFACES =========================

// ============ OBJECT ============
// Definindo a forma (shape) de um objeto diretamente nas anotações de tipo.
// Usamos uma sintaxe similar à de um objeto normal.

/*  
  VANTAGENS:
    I - O TypeScript informa exatamente o que deve ser preenchido ao chamar a função.
    II - Sugestões de autocomplete são fornecidas ao preencher os dados do objeto.
    
  DESVANTAGENS:
    I - A função pode se tornar complexa e o código acoplado.
    II - Abordagem ruim caso o objeto tenha muitas propriedades.
*/

function mostrarDadosPessoa(dados: {
  nome: string;
  idade: number;
  area: string;
}) {
  document.body.innerHTML += `
    <div>
      <h2>${dados.nome}</h2>
      <p>${dados.idade}</p>
      <p>${dados.area}</p>
    </div>
    <hr />
  `;
}

mostrarDadosPessoa({
  nome: "Renard Bergson",
  idade: 32,
  area: "Front-End",
});

mostrarDadosPessoa({
  nome: "Esdras Medeiros",
  idade: 20,
  area: "Front-End",
});

// ============ TYPE ============
// Forma mais flexível de definir tipos, permitindo criar modelos mais complexos e reutilizáveis.
// Um "type" pode ser usado para criar aliases (apelidos) para tipos existentes.
// Também pode combinar tipos com Union ou Intersection Types.
// É convencional nomear "types" com a primeira letra maiúscula.

// Exemplo I - Alias com Union Types:
type NumeroOuString = number | string; // Variável pode ser número ou string
let total: NumeroOuString = 10; // Pode ser um número
total = "10"; // Ou uma string

// Exemplo II - Definindo um objeto com "type":
type TypeProduto = {
  nome: string;
  preco: number;
  teclado: boolean;
};

function mostrarDadosProduto(dados: TypeProduto | InterfaceProduto) {
  document.body.innerHTML += `
    <div>
      <h2>${dados.nome}</h2>
      <p>${dados.preco}</p>
      <p>Inclui teclado: ${dados.teclado ? "Sim 🟢" : "Não 🔴"}</p>
    </div>
    <hr />
  `;
}

const desktop: TypeProduto = {
  nome: "Computador de Mesa",
  preco: 3500,
  teclado: false,
};

mostrarDadosProduto(desktop);

// Exemplo III - Union Types em funções:
type Cursos = "história" | "direito" | "Biologia";

function mostrarCurso(curso: Cursos): void {
  console.log("Curso escolhido: " + curso);
}

mostrarCurso("história"); // Só aceita strings do tipo "Cursos"

// ============ INTERFACE ============
// Interface molda objetos e classes, com sintaxe diferente de "type".
// Usa-se "interface" sem o sinal de igualdade (=).
// É mais utilizada ao moldar objetos e classes.

// Exemplo IV - Definindo um objeto com interface:
interface InterfaceProduto {
  nome: string;
  preco: number;
  teclado: boolean;
}

const notebook: InterfaceProduto = {
  nome: "Notebook",
  preco: 5000,
  teclado: true,
};

mostrarDadosProduto(notebook);

// ============ TYPE x INTERFACE ============
// A princípio:
// - "interface" para moldar objetos e classes.
// - "type" para outros tipos de dados, como primitivos e union types.
