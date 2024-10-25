// ===================== EXERCÍCIOS =====================
// Definir a interface da API: https://api.origamid.dev/json/notebook.json
// e exibir os dados na tela usando TypeScript

async function fetchProduct() {
  const response = await fetch("https://api.origamid.dev/json/notebook.json");
  const data = await response.json();
  document.body.innerHTML += mostrarProduto(data);
}

// ===================== INTERFACES =====================
// Interface para moldar os dados da empresa
interface Empresa {
  nome: string;
  fundacao: number;
  pais: string;
}

// Interface para moldar os dados do produto
interface Producto {
  nome: string;
  preco: number;
  descricao: string;
  garantia: string;
  seguroAcidente: boolean;
  empresaFabricante: Empresa;
  empresaMontadora: Empresa;
  // Dica 💡: Criar a interface "Empresa" separadamente para evitar repetição de código,
  // já que tanto "empresaFabricante" quanto "empresaMontadora" têm a mesma estrutura.
}

function mostrarProduto(data: Producto): string {
  return `
    <div>
      <h2>Produto</h2>
      <h3>${data.nome}</h3>
      <p>Descrição: ${data.descricao}</p>
      <p>Preço: R$ ${data.preco}</p>
      <p>Garantia: ${data.garantia} anos</p>
      <p>Possui seguro contra acidentes: ${
        data.seguroAcidente ? "Sim 🟢" : "Não 🔴"
      }</p>
      
      <div>
        <h2>Fabricante</h2>
        <h4>${data.empresaFabricante.nome}</h4>
        <p>País: ${data.empresaFabricante.pais}</p>
        <p>Fundada em: ${data.empresaFabricante.fundacao}</p>
      </div>

      <div>
        <h2>Montadora</h2>
        <h4>${data.empresaMontadora.nome}</h4>
        <p>País: ${data.empresaMontadora.pais}</p>
        <p>Fundada em: ${data.empresaMontadora.fundacao}</p>
      </div>
    </div>
  `;
}

fetchProduct();
