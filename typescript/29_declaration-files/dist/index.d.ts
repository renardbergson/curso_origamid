declare global {
    interface Usuario {
        nome: string;
        id: number;
    }
}
export interface Produto {
    nome: string;
    preco: number;
}
export declare const livro: Produto;
