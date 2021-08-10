export async function getCategories() {
  const response = await fetch('https://api.mercadolibre.com/sites/MLB/categories');

  const Categorias = await response.json();

  return Categorias;
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  // Implemente aqui! Quando o fizer, descomente os parâmetros que essa função recebe
  let searchQuery = 'search?';

  if (categoryId) {
    searchQuery += `category=$${categoryId || ''}`;
  }

  if (query) {
    searchQuery += `${categoryId ? '&' : ''}q=$${query || ''}`;
  }

  const response = await fetch(
    `https://api.mercadolibre.com/sites/MLB/${searchQuery}`,
  );
  const itens = await response.json();

  return itens;
}
