function generatePokemonListHTML(pokemonList) {
    const listItems = pokemonList.map((pokemon, index) => {
      return `<li><a href="/pokemon-pretty/${index}">${pokemon.name}</a></li>`;
    });
  
    return `<ul>${listItems.join('')}</ul>`;
  }
  
  function generatePokemonDetailsHTML(pokemon) {
    const { name, img, type, stats, damages, misc } = pokemon;
  
    // Generate HTML for details
    return `
      <h1>${name}</h1>
      <img src="${img}" alt="${name}">
      <!-- Add more HTML for displaying Pokemon details here -->
    `;
  }
  
  module.exports = { generatePokemonListHTML, generatePokemonDetailsHTML };
  