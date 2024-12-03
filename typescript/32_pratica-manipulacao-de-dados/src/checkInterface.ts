function checkInterface<Tipo>(
  data: unknown,
  ...keys: Array<keyof Tipo>
): data is Tipo[] {
  if (
    data &&
    Array.isArray(data) &&
    data.every(
      (transacao) =>
        typeof transacao === "object" && keys.every((key) => key in transacao)
    )
  ) {
    return true;
  } else {
    return false;
  }
}

export default checkInterface;
