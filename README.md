# Jogo de Damas Interativo

## 📝 Descrição do Projeto

Este projeto é uma implementação de um tabuleiro de Jogo de Damas, desenvolvido como uma atividade para a disciplina de [Programação Script II] na faculdade. O objetivo inicial era criar a representação visual de um tabuleiro com as peças em suas posições iniciais.

Como um passo adicional, foi implementada uma mecânica básica de interação, permitindo que o usuário selecione e mova as peças pelo tabuleiro. O projeto serve como uma base sólida para a futura implementação completa das regras do Jogo de Damas.

## ✨ Funcionalidades Atuais

* **Renderização do Tabuleiro:** Exibe um tabuleiro 8x8 com cores alternadas, seguindo o padrão do jogo.
* **Posicionamento Inicial das Peças:** As peças dos dois jogadores (`player-1` e `player-2`) são posicionadas corretamente nas suas linhas de partida.
* **Seleção de Peças:** O usuário pode clicar em uma peça para selecioná-la, aplicando um destaque visual no quadrado correspondente.
* **Movimento Básico de Peças:** Após selecionar uma peça, o usuário pode clicar em qualquer outro quadrado do tabuleiro para movê-la. **(Observação: A lógica de validação de movimentos do jogo de damas ainda não foi implementada)**.

## 🛠️ Tecnologias Utilizadas

* **[Next.js](https://nextjs.org/):** Framework React para construção da interface e estrutura do projeto.
* **[React](https://react.dev/):** Biblioteca para a criação dos componentes da interface de usuário (`Board`, `Square`, `Piece`).
* **[React Hooks (useState)](https://react.dev/reference/react/useState):** Para gerenciamento do estado do tabuleiro e da peça selecionada.
* **CSS Modules:** Para estilização escopada dos componentes, evitando conflitos de classes.
* **JavaScript (ES6+)**

## 🚀 Como Executar o Projeto

Siga os passos abaixo para executar o projeto em seu ambiente local.

### Pré-requisitos

* [Node.js](https://nodejs.org/en) (versão 18 ou superior)
* [npm](https://www.npmjs.com/) ou [Yarn](https://yarnpkg.com/)

### Passo a Passo

1.  **Clone o repositório:**

    ```bash
    git clone https://github.com/MaurilioSemeao/tabuleiro-dama.git
    ```

2.  **Navegue até a pasta do projeto:**

    ```bash
    cd tabuleiro-dama
    ```

3.  **Instale as dependências:**

    ```bash
    npm install
    ```

4.  **Execute o servidor de desenvolvimento:**

    ```bash
    npm run dev
    ```

5.  **Abra o navegador:**
    Acesse [http://localhost:3000](http://localhost:3000) para ver a aplicação em execução.

## 🗺️ Próximos Passos (A Fazer)

O projeto está funcional, mas a lógica do jogo ainda precisa ser implementada. Os próximos passos planejados são:

- [x] **Implementar a lógica de turnos** para alternar entre `player-1` e `player-2`.
- [x] **Validar movimentos legais** (apenas na diagonal, para frente).
- [x] **Criar a mecânica de captura** de peças adversárias.
- [ ] **Implementar a promoção de peças** para "Dama" (Rei) ao alcançarem o lado oposto.
- [ ] **Adicionar regras de movimento para a Dama**.
- [ ] **Definir condições de vitória e derrota**.
- [ ] (Opcional) Criar uma interface para exibir o jogador atual e as peças capturadas.

## 👨‍💻 Autor

Feito com ❤️ por **[Maurilio Santos Semeão]**.

[](https://www.google.com/search?q=%5Bhttps://www.linkedin.com/in/seu-usuario-linkedin/%5D\(https://www.linkedin.com/in/seu-usuario-linkedin/\))

## 📜 Licença

Este projeto é para fins educacionais e pode ser utilizado livremente. Sugere-se a licença MIT.