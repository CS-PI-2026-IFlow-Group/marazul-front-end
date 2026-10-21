export function sendWhatsAppMessage() {
  const nome = document.getElementById("customerName").value;

  const origem = document.getElementById("originCity").value;

  const destino = document.getElementById("destinationCity").value;

  const dataSaida = document.getElementById("departureDate").value;

  const dataChegada = document.getElementById("arrivalDate").value;

  const horario = document.getElementById("departureTime").value;

  const onibus = document.getElementById("selectedBus").value;

  const deslocamento = document.getElementById("hasTransfer").value;

  const detalhes = document.getElementById("transferDetails")?.value || "-";

  const mensagem = `
*Solicitação de Fretamento*

Nome: ${nome}
Origem: ${origem}
Destino: ${destino}

Data de saída: ${dataSaida}
Data de chegada: ${dataChegada}
Horário: ${horario}

Ônibus: ${onibus}

Deslocamento: ${deslocamento}
Detalhes: ${detalhes}
`;

  window.open(
    `https://wa.me/5544997392626?text=${encodeURIComponent(mensagem)}`,
    "_blank",
  );
}
