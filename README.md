# Documentação do Projeto "Carteirinha de Estudante"

## Descrição

Este projeto consiste em uma interface web interativa para gerar uma carteirinha de estudante. Desenvolvido com **HTML**, **CSS** e **Vue.js**, ele permite que o usuário insira informações como curso, data de nascimento, RA, CPF e foto. Além disso, possui um modo escuro que pode ser ativado pelo usuário e mantido através do armazenamento local do navegador.

## Tecnologias Utilizadas

- **HTML5**
- **CSS3**
- **Vue.js 3**
- **JavaScript**

## Estrutura do Projeto

```
/
├── index.html  # Estrutura principal do projeto
├── CarteirinhaJs.js  # Lógica Vue.js
└── README.md  # Documentação
```

## Como Executar o Projeto

1. Clone o repositório:
   ```sh
   git clone https://github.com/alanNerde/carteirinha_estudante_github.git
   ```
2. Acesse a pasta do projeto:
   ```sh
   cd nome-do-repositorio
   ```
3. Abra o arquivo `CarteirinhaHtml.html` em um navegador moderno.

## Funcionamento

O projeto é composto por:

### **1. Formulário de Entrada**

O formulário permite ao usuário preencher as seguintes informações:

- **Curso**
- **Data de Nascimento**
- **RA**
- **CPF**
- **Foto** (upload de imagem)
- **Modo escuro** (toggle)

### **2. Carteirinha Gerada Dinamicamente**

Após inserir os dados, a carteirinha é exibida automaticamente ao lado do formulário com as informações preenchidas.

### **3. Modo Escuro**

- O usuário pode ativar ou desativar o modo escuro.
- A escolha é salva no `localStorage`, garantindo que a preferência seja mantida após recarregar a página.

## Arquivos Principais

### **index.html**

Responsável pela estrutura da página, incluindo o formulário e a exibição da carteirinha.

### **CarteirinhaJs.js**

Arquivo contendo a lógica Vue.js, com:

- ``: Definição das variáveis reativas (curso, dataNascimento, ra, cpf, foto, modoEscuro)
- ``:
  - `atualizarFoto(event)`: Permite o upload de uma foto e exibe-a na carteirinha.
  - `alternarModoEscuro()`: Alterna o tema claro/escuro.
- ``: Verifica e aplica o modo escuro salvo no `localStorage`.
- ``:
  - Monitora alterações no modo escuro e salva a preferência no `localStorage`.

## Melhorias Futuras

- Implementação de um backend para armazenar os dados.
- Possibilidade de baixar a carteirinha gerada.
- Validação aprimorada dos campos de entrada.

## Contribuição

Contribuições são bem-vindas! Para contribuir:

1. Faça um fork do repositório.
2. Crie uma branch para sua feature (`git checkout -b minha-feature`).
3. Commit suas alterações (`git commit -m 'Adiciona nova funcionalidade'`).
4. Faça um push para a branch (`git push origin minha-feature`).
5. Abra um Pull Request.

---

Feito com ❤️ usando Vue.js!

