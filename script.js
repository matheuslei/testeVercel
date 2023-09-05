function salvarNome() {
  const nome = document.getElementById("name").value;

  // Validar se o nome foi inserido
  if (!nome) {
    alert("Por favor, insira um nome antes de salvar.");
    return;
  }

  // Criar um objeto para representar os dados (pode ser uma planilha)
  const dados = [
    {
      Nome: nome,
    },
  ];

  // Simular o envio dos dados para o servidor
  enviarParaServidor(dados);
}

function enviarParaServidor(data) {
  // URL do servidor onde você deseja enviar os dados
  const url = "/api/salvar-em-excel";

  // Configuração da requisição
  const requestOptions = {
    method: "POST", // Método HTTP para envio de dados
    headers: {
      "Content-Type": "application/json", // Tipo de conteúdo
    },
    body: JSON.stringify(data), // Os dados convertidos para JSON
  };

  // Enviar a requisição para o servidor
  fetch(url, requestOptions)
    .then((response) => {
      if (!response.ok) {
        throw new Error("O servidor retornou um erro.");
      }
      return response.json();
    })
    .then((result) => {
      if (result.success) {
        alert("Nome salvo com sucesso!");
      } else {
        alert("Ocorreu um erro ao salvar o nome.");
      }
    })
    .catch((error) => {
      console.error("Erro:", error);
      alert("Ocorreu um erro ao salvar o nome.");
    });
}
