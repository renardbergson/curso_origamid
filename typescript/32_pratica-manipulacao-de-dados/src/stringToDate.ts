function stringToDate(texto: string): Date {
  const [data, horario] = texto.split(" ");
  const [dia, mes, ano] = data.split("/").map(Number);
  // map chamará a função "Number" para cada item de "data" 💡
  const [hora, minuto] = horario.split(":").map(Number);
  const objetoData = new Date(ano, mes - 1, dia, hora, minuto);
  return objetoData;
}

export default stringToDate;

// SYNTAX
// new Date()
// new Date(value)
// new Date(dateString)
// new Date(dateObject)

// new Date(year, monthIndex)
// new Date(year, monthIndex, day)
// new Date(year, monthIndex, day, hours)
// new Date(year, monthIndex, day, hours, minutes) 💡
// new Date(year, monthIndex, day, hours, minutes, seconds)
// new Date(year, monthIndex, day, hours, minutes, seconds, milliseconds)

// Date()
