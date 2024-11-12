# 📦 Gerenciador de Estoque

Bem-vindo ao projeto **Gerenciador de Estoque**! 🚀 Este é um sistema completo de controle e monitoramento de estoque, desenvolvido em React com funcionalidades de CRUD para gestão de produtos e um dashboard dinâmico para visualização de dados. Essa aplicação é ideal para empresas que desejam gerenciar seu inventário de forma prática e eficiente.

## 📋 Sumário

- [📦 Gerenciador de Estoque](#-gerenciador-de-estoque)
- [⚙️ Funcionalidades](#️-funcionalidades)
- [💻 Tecnologias Utilizadas](#-tecnologias-utilizadas)
- [📂 Estrutura do Projeto](#-estrutura-do-projeto)
- [🚀 Como Executar o Projeto](#-como-executar-o-projeto)
- [📜 Documentação dos Componentes](#-documentação-dos-componentes)
- [🤝 Contribuições](#-contribuições)
- [📄 Licença](#-licença)

## ⚙️ Funcionalidades

Esse sistema possui uma série de funcionalidades que facilitam o controle do estoque e a visualização de informações relevantes. Confira abaixo:

- **Adicionar, Editar e Excluir Produtos**: Cadastre novos produtos no estoque, atualize informações ou remova itens que não são mais necessários.
- **Dashboard Informativo**:
  - **Diversidade de Itens**: Veja o total de tipos de produtos em estoque.
  - **Inventário Total**: Total das quantidades de produtos.
  - **Itens Recentes**: Visualize rapidamente os itens adicionados nos últimos 10 dias.
  - **Itens Acabando**: Identifique itens com estoque baixo (quantidade menor que 10).
- **Confirmação de Ações Sensíveis**: Exclusões são confirmadas por um diálogo antes de serem executadas, evitando exclusões acidentais.
- **Componentização e Reutilização**: O sistema é estruturado em componentes reutilizáveis, como `DeleteButton`, `ItemsTable`, e `ItemForm`.

## 💻 Tecnologias Utilizadas

As tecnologias e bibliotecas principais usadas nesse projeto são:

- **React**: Biblioteca principal para construção da interface.
- **React Router DOM**: Gerenciamento de rotas para navegação entre as páginas.
- **PropTypes**: Verificação de tipos das propriedades, aumentando a robustez do código.
- **JavaScript (ES6+)**: Linguagem de programação do projeto.
- **CSS**: Estilização dos componentes e do layout da aplicação.

## 📂 Estrutura do Projeto

Abaixo, uma visão geral da estrutura de pastas e arquivos do projeto:

```plaintext
📦 projeto-gerenciador-estoque
├── 📁 src
│   ├── 📁 components
│   │   ├── DeleteButton.jsx         # Botão para exclusão com confirmação
│   │   ├── ItemForm.jsx             # Formulário para adicionar/editar itens
│   │   └── ItemsTable.jsx           # Tabela de exibição de itens com ações
│   ├── 📁 hooks
│   │   └── useStock.js              # Hook personalizado para controle do estoque
│   ├── 📁 pages
│   │   ├── Home.jsx                 # Página principal com dashboard
│   │   ├── ShowItem.jsx             # Página para exibir detalhes de um item
│   │   └── UpdateItem.jsx           # Página para atualização de um item
│   ├── App.js                       # Arquivo principal da aplicação
│   └── index.js                     # Ponto de entrada do React
└── README.md                        # Documentação do projeto
```

## 🚀 Como Executar o Projeto
Pré-requisitos
Certifique-se de ter o Node.js e o npm instalados em sua máquina. Esses são necessários para rodar o ambiente React.

Passos para execução
-- Clone o repositório:
git clone https://github.com/seu-usuario/projeto-gerenciador-estoque.git
cd projeto-gerenciador-estoque

-- Instale as dependências:
npm install

-- Inicie o servidor de desenvolvimento:
npm start

Isso abrirá o projeto em http://localhost:3000.

## 📜 Documentação dos Componentes

1. DeleteButton.jsx
Componente de botão para exclusão de itens. Solicita uma confirmação antes de excluir um item e redireciona o usuário para a lista de itens após a exclusão.

2. ItemsTable.jsx
Tabela que exibe todos os itens no estoque, com botões para atualizar e excluir cada item. Utiliza o hook useStock para listar os produtos.

3. UpdateItem.jsx
Página para atualizar as informações de um item específico. Recebe o ID do item pela URL, busca o item usando o hook useStock e exibe o formulário de edição.

4. ShowItem.jsx
Página de detalhes de um item, mostrando as informações completas (categoria, quantidade, preço, descrição, e datas de criação e atualização).

5. Home.jsx
Dashboard com métricas gerais do estoque (diversidade de itens, quantidade total, itens recentes e itens acabando), além de tabelas resumidas de itens recentes e itens com baixa quantidade.

## 🤝 Contribuições
Contribuições são bem-vindas! Para contribuir:

Faça um fork do projeto.

-- Crie uma nova branch:
git checkout -b feature/nova-funcionalidade

-- Faça suas alterações e commit:
git commit -m 'Add nova funcionalidade'

-- Envie para o repositório original:
git push origin feature/nova-funcionalidade

-- Crie um Pull Request explicando suas alterações.

## 📄 Licença
Este projeto está licenciado sob a licença MIT. Consulte o arquivo LICENSE para mais informações.

