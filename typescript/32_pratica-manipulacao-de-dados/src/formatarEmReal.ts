function formatarEmReal(valor: number | null): string | null {
  if (valor) {
    return valor.toLocaleString("pt-br", {
      style: "currency",
      currency: "BRL",
    });
  } else {
    return null;
  }
}

export default formatarEmReal;
