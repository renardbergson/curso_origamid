"use strict";
// ========================= CLASSES =========================
// CLASSES NATIVAS
// As classes em JavaScript são funções construtoras usadas para criar objetos.
// Exemplos de classes nativas incluem MouseEvent, HTMLElement, HTMLAnchorElement, entre outras.
console.log(document.constructor);
// Resultado: "HTMLDocument", que é a função construtora usada para criar o "document".
// ===========================================================
// CRIANDO CLASSES
// Ao definir uma classe no TypeScript, ele automaticamente gera a interface correspondente.
class Produto {
    tipo = "Produto";
    nome;
    preco; // "preco" é opcional.
    constructor(nome, preco) {
        this.nome = nome;
        this.preco = preco;
    }
}
const livro = new Produto("O Senhor dos Aneis", 300);
console.log(`Tipo: ${livro.tipo}; Nome: ${livro.nome}; Preço: R$ ${livro.preco}`);
// ===========================================================
// MODIFICADORES
// TypeScript fornece palavras-chave para alterar o comportamento de propriedades e métodos.
class Produto2 {
    tipo = "Produto"; // Apenas leitura.
    preco; // Acessível apenas na classe e subclasses.
    nome; // Acessível apenas dentro da classe.
    constructor(nome, preco) {
        this.nome = nome;
        this.preco = preco;
    }
    getNome() {
        return this.nome;
    }
    getPreco() {
        return Produto2.formatarPreco(this.preco);
    }
    // static: permite que o método seja chamado diretamente na classe,
    // sem a necessidade de instanciar um objeto dela.
    // Métodos/propriedades estáticos não são acessíveis pelos objetos instanciados.
    static formatarPreco(preco) {
        return preco.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
        });
    }
}
const livro2 = new Produto2("A Bela e a Fera", 120);
console.log(livro2.getNome()); // "A Bela e a Fera"
console.log(Produto2.formatarPreco(500)); // "R$ 500,00"
console.log(livro2.getPreco()); // "R$ 120,00"
// ===========================================================
// CLASS E INTERFACE
// Classes geram automaticamente uma interface correspondente no TypeScript.
// Isso permite o uso do operador "instanceof" para verificar se um objeto é uma instância de uma classe específica.
// Isso não é possível com interfaces puras.
class Quadrado {
    lados = 4;
    medida;
    constructor(medida) {
        this.medida = medida;
    }
    getPerimetro() {
        return this.medida * this.lados;
    }
    getArea() {
        return this.medida * this.medida;
    }
}
class Circulo {
    PI = Math.PI;
    raio;
    constructor(raio) {
        this.raio = raio;
    }
    getPerimetro() {
        return Math.round(2 * this.PI * this.raio * 100) / 100;
    }
    getArea() {
        return Math.round(this.PI * this.raio * this.raio * 100) / 100;
    }
}
// Exemplo de uso do "instanceof":
const quadrado1 = new Quadrado(10);
if (quadrado1 instanceof Quadrado) {
    console.log("Lados:", quadrado1.lados); // 4
    console.log("Perímetro:", quadrado1.getPerimetro()); // 40
    console.log("Área:", quadrado1.getArea()); // 100
}
// ===========================================================
// USANDO UMA LISTA DE FORMAS PARA INSTANCIAR OU "QUADRADO" OU "CIRCULO"
const formas = [2, 32, 12, 3, 4, 20, 37, 9].map((n) => n < 15 ? new Quadrado(n) : new Circulo(n));
// .map() retorna uma array, então "formas" é uma array de instâncias de Quadrado e Circulo.
// interface: "const formas: (Quadrado | Circulo)[]"
console.log(formas);
formas.forEach((forma) => {
    // Temos acesso apenas às propriedades/métodos em comum,
    // pois TypeScript infere o tipo como "Quadrado | Circulo".
    forma.getArea();
    forma.getPerimetro();
});
// Para acessar propriedades ou métodos exclusivos, usamos o operador "instanceof".
formas.forEach((forma) => {
    if (forma instanceof Quadrado) {
        console.log("QUADRADO");
        console.log("Lados:", forma.lados);
        console.log("Medida:", forma.medida);
        console.log("Perímetro:", forma.getPerimetro());
        console.log("Área:", forma.getArea());
        console.log("");
    }
    if (forma instanceof Circulo) {
        console.log("CÍRCULO");
        console.log("Raio:", forma.raio);
        console.log("Perímetro:", forma.getPerimetro());
        console.log("Área:", forma.getArea());
        console.log("");
    }
});
