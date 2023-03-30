# Projeto de testes com a React Testing Library

## Habilidades Praticadas:

  * Utilizar os seletores (queries) da React-Testing-Library em testes automatizados;

  * Simular eventos com a React-Testing-Library em testes automatizados;

  * Testar fluxos lógicos assíncronos com a React-Testing-Library;

  * Escrever testes que permitam a refatoração da estrutura dos componentes da aplicação sem necessidade de serem alterados;

  * Testar inputs.
  
  ## Requisitos do Projeto
  
  1. Teste o componente `<App.js />`

    > Caminho do componente: `src/App.js`

    - <details><summary>Teste se o topo da aplicação contém um conjunto fixo de links de navegação:</summary>

    - O primeiro link deve possuir o texto `Home`;

    - O segundo link deve possuir o texto `About`;

    - O terceiro link deve possuir o texto `Favorite Pokémon`.

    - Teste se a aplicação é redirecionada para a página inicial, na URL `/` ao clicar no link `Home` da barra de navegação;

    - Teste se a aplicação é redirecionada para a página de `About`, na URL `/about`, ao clicar no link `About` da barra de navegação;

    - Teste se a aplicação é redirecionada para a página de `Pokémon Favoritados`, na URL `/favorites`, ao clicar no link `Favorite Pokémon` da barra de    navegação;

    - Teste se a aplicação é redirecionada para a página `Not Found` ao entrar em uma URL desconhecida.
  2. Teste o componente `<About.js />.`

    > Caminho do componente: `src/pages/About.js`

    - Teste se a página contém as informações sobre a Pokédex;

    - Teste se a página contém um heading `h2` com o texto `About Pokédex`;

    - Teste se a página contém dois parágrafos com texto sobre a Pokédex;

    - Teste se a página contém a seguinte imagem de uma Pokédex: `https://cdn2.bulbagarden.net/upload/thumb/8/86/Gen_I_Pok%C3%A9dex.png/800px-      Gen_I_Pok%C3%A9dex.png`.
  3. Teste o componente `<FavoritePokemon.js />`

    > Caminho do componente: `src/pages/FavoritePokemon.js`

    - Ao favoritar a partir da página de detalhes teste se:
      - Teste se é exibida na tela a mensagem `No favorite pokemon found`, caso a pessoa não tenha Pokémon favoritos;
      - Teste se apenas são exibidos os Pokémon favoritados.
   4. Teste o componente `<NotFound.js />`

    > Caminho do componente: `src/pages/NotFound.js`

    - Teste se a página contém um heading `h2` com o texto `Page requested not found`;

    - Teste se a página mostra a imagem `https://media.giphy.com/media/kNSeTs31XBZ3G/giphy.gif`.
   5. Teste o componente `<Pokedex.js />`

    > Caminho do componente: `src/pages/Pokedex.js`

    - Teste se a página contém um heading `h2` com o texto `Encountered Pokémon`;

    - Teste se é exibido o próximo Pokémon da lista quando o botão <code>Próximo Pokémon</code> é clicado:

      - O botão deve conter o texto `Próximo Pokémon`;

      - Os próximos Pokémon da lista devem ser mostrados, um a um, ao clicar sucessivamente no botão;

      - O primeiro Pokémon da lista deve ser mostrado ao clicar no botão, se estiver no último Pokémon da lista.

      - Teste se é mostrado apenas um Pokémon por vez;

    - Teste se a Pokédex tem os botões de filtro:

      - Deve existir um botão de filtragem para cada tipo de Pokémon, sem repetição;
        - _obs: Os botões devem ser capturados pelo `data-testid=pokemon-type-button`_ 

      - A partir da seleção de um botão de tipo, a Pokédex deve circular somente pelos Pokémon daquele tipo;

      - O texto do botão deve corresponder ao `nome do tipo`, ex. `Psychic`;

      - O botão `All` precisa estar **sempre** visível.

    - Teste se a Pokédex contém um botão para resetar o filtro:

      - O texto do botão deve ser `All`;

      - A Pokedéx deverá mostrar os Pokémon normalmente (sem filtros) quando o botão `All` for clicado;

      - Ao carregar a página, o filtro selecionado deverá ser `All`.
    
   6. Teste o componente `<Pokemon.js />`

    > Caminho do componente: `src/components/Pokemon.js`

    - Teste se é renderizado um card com as informações de determinado Pokémon:

      - O nome correto do Pokémon deve ser mostrado na tela;

      - O tipo correto do Pokémon deve ser mostrado na tela;

      - O peso médio do Pokémon deve ser exibido com um texto no formato `Average weight: <value> <measurementUnit>`; onde `<value>` e `<measurementUnit>` são, respectivamente, o peso médio do Pokémon e sua unidade de medida;

      - A imagem do Pokémon deve ser exibida. Ela deve conter um atributo `src` com a URL da imagem e um atributo `alt` com o texto `<name> sprite`, onde `<name>` é o nome do Pokémon.

    - Teste se o card do Pokémon indicado na Pokédex contém um link de navegação para exibir detalhes deste Pokémon. O link deve possuir a URL   `/pokemon/<id>`, onde `<id>` é o id do Pokémon exibido;

    - Teste se ao clicar no link de navegação do Pokémon, é feito o redirecionamento da aplicação para a página de detalhes de Pokémon;
  
    - Teste também se a URL exibida no navegador muda para `/pokemon/<id>`, onde `<id>` é o id do Pokémon cujos detalhes se deseja ver;

    - Teste se existe um ícone de estrela nos Pokémon favoritados:

      - O ícone deve ser uma imagem com o atributo `src` contendo o caminho `/star-icon.svg`;

      - A imagem deve ter o atributo `alt` igual a `<Pokemon> is marked as favorite`, onde `<Pokemon>` é o nome do Pokémon exibido.
    
   7. Teste o componente `<PokemonDetails.js />`

    > Caminho do componente: `src/pages/PokemonDetails.js`

    - Teste se as informações detalhadas do Pokémon selecionado são mostradas na tela:

      - A página deve conter um texto `<name> Details`, onde `<name>` é o nome do Pokémon;

      - **Não** deve existir o link de navegação para os detalhes do Pokémon selecionado;

      - A seção de detalhes deve conter um heading `h2` com o texto `Summary`;

      - A seção de detalhes deve conter um parágrafo com o resumo do Pokémon específico sendo visualizado.
        - _obs: é possível utilizar regex para capturar o parágrafo_

    - Teste se existe na página uma seção com os mapas contendo as localizações do Pokémon:

      - Na seção de detalhes deverá existir um heading `h2` com o texto `Game Locations of <name>`; onde `<name>` é o nome do Pokémon exibido;

      - Todas as localizações do Pokémon devem ser mostradas na seção de detalhes;

      - Devem ser exibidos o nome da localização e uma imagem do mapa em cada localização;

      - A imagem da localização deve ter um atributo `src` com a URL da localização;

      - A imagem da localização deve ter um atributo `alt` com o texto `<name> location`, onde `<name>` é o nome do Pokémon.

    - Teste se o usuário pode favoritar um Pokémon através da página de detalhes:

      - A página deve exibir um `checkbox` que permite favoritar o Pokémon;

      - Cliques alternados no `checkbox` devem adicionar e remover respectivamente o Pokémon da lista de favoritos;

      - O `label` do `checkbox` deve conter o texto `Pokémon favoritado?`.
