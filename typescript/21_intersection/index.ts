// ========================= INTERSECTION TYPES (&) =========================
// Intersection Types têm um funcionamento semelhante ao operador "extends" usado em interfaces.
// Eles permitem combinar tipos, ou seja, criar um novo tipo que tenha todas as propriedades
// dos tipos envolvidos na interseção.

// A diferença entre Intersection Types e o operador "extends" é que o intersection pode ser
// usado tanto com `types` quanto com `interfaces`, enquanto "extends" é utilizado para estender
// apenas interfaces.

// INTERSECTION EXEMPLO
type Produto = {
  preco: number;
};

type Carro = {
  rodas: number;
  portas: number;
};

function handleProdutoCarro(dados: Produto & Carro) {
  console.log(
    `Portas: ${dados.portas}; Rodas: ${dados.rodas}; Preço: ${dados.preco}`
  );
}

// O objeto precisa ter todas as propriedades de `Produto` e `Carro`.
handleProdutoCarro({ portas: 5, rodas: 4, preco: 300000 });

// ========================= ADICIONAR PROPRIEDADES =========================
// Podemos adicionar propriedades a `types` e `interfaces` previamente definidos,
// mas há diferenças importantes entre os dois.

// 1 - Adicionando propriedades a `types`
// Não é possível criar múltiplos `types` com o mesmo nome.
// Se precisar adicionar propriedades, devemos fazer uma interseção (`&`).

type TipoCarro = {
  portas: number;
  rodas: number;
};

type TipoCarroComPreco = TipoCarro & {
  preco: number;
};

const carroComPreco: TipoCarroComPreco = {
  portas: 4,
  rodas: 4,
  preco: 50000,
};

console.log(carroComPreco);

// 2 - Adicionando propriedades a `interfaces`
// Ao contrário dos `types`, podemos declarar múltiplas interfaces com o mesmo nome,
// e o TypeScript automaticamente as mescla (merge).

interface InterfaceCarro {
  portas: number;
  rodas: number;
}

interface InterfaceCarro {
  preco: number;
}

function handleInterfaceCarro(carro: InterfaceCarro) {
  console.log(
    `Portas: ${carro.portas}; Rodas: ${carro.rodas}; Preço: ${carro.preco}`
  );
}

const meuCarro: InterfaceCarro = {
  portas: 4,
  rodas: 4,
  preco: 70000,
};

handleInterfaceCarro(meuCarro);

// ========================= EXEMPLO DE CASO DE USO REAL =========================
// Um uso comum de adicionar propriedades a interfaces é quando precisamos estender
// objetos globais, como o objeto `window`.
// O TypeScript mostrará um erro se tentarmos adicionar propriedades diretamente
// sem antes estender a interface `Window`.

// ❌ ERRO: A propriedade 'teste' não existe no tipo 'Window & typeof globalThis'.
window.teste = "teste";

// ✔️ CORRETO: Expansão da interface `Window` para adicionar novas propriedades.
interface Window {
  userId: number;
}

window.userId = 200;
console.log(window.userId); // 200
