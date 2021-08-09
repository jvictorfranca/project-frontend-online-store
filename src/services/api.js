export default async function getCategories() {
  const response = await fetch('https://api.mercadolibre.com/sites/MLB/search?q=categories');

  const Categorias = response.json();
//s
  console.log(Categorias);
  return Categorias;
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  // Implemente aqui! Quando o fizer, descomente os parâmetros que essa função recebe
  const response = await fetch(
    `https://api.mercadolibre.com/sites/MLB/search?category=$${categoryId || ''}&q=${query || ''}`,
  );
  const itens = await response.json();

  return itens;
}
