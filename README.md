# 🔗 Projeto Encurtador de Link - Automação de Testes

Projeto de automação de testes desenvolvido durante o **Bootcamp TestBeyond**, focado em testar uma API de encurtamento de URLs utilizando o framework Playwright.

## 💡 Sobre o Projeto

Este projeto tem como objetivo automatizar testes de API para um serviço de encurtamento de links, garantindo a qualidade e confiabilidade do sistema através de testes automatizados.

## 🛠️ Tecnologias Utilizadas

- **Playwright**: Framework principal para automação dos testes
- **Node.js**: Ambiente de execução JavaScript
- **Podman**: Gerenciamento de containers
- **PostgreSQL**: Banco de dados
- **Adminer**: Interface para gerenciamento do banco de dados

## 📋 Pré-requisitos

Para executar este projeto, você precisará ter instalado:

- Node.js (v22.19.0 ou superior)
- Visual Studio Code
- Git
- Podman
- Postman

## 🚀 Configuração do Ambiente

1. Clone o repositório:
```bash
git clone https://github.com/crisfelicio/PW-Encurtador-Links-API.git
```

2. Instale as dependências:
```bash
npm install
```

3. Inicie os containers com Podman:
```bash
podman play kube shortbeyond.yaml
```


Após a configuração, você terá acesso aos seguintes serviços:

- **API Documentation**: http://localhost:3333/docs#
- **Adminer (DB Management)**: http://localhost:8080
- **Frontend**: http://localhost

## ▶️ Executando os Testes

Para executar a suite de testes:

```bash
npx playwright test
```

Para executar os testes com interface visual:
```bash
npx playwright test --ui
```

## 📊 Relatórios de Teste

Os relatórios de teste podem ser encontrados em:
```
./playwright-report/index.html
```

## 👥 Contribuição

Este é um projeto de estudo desenvolvido durante o Bootcamp TestBeyond. Sinta-se à vontade para contribuir através de:

- 🐛 Reportando bugs
- 💡 Sugerindo melhorias
- 🔧 Enviando pull requests

## ✨ Créditos

Projeto desenvolvido durante o **Bootcamp TestBeyond** sob mentoria de **Fernando Papito**.