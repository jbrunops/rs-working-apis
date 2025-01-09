// fetch("http://localhost:3333/products").then((response) => {
//   console.log(response);
// });

async function fetchProducts() {
  const response = await fetch("http://localhost:3333/products");
  const data = await response.json();
  console.log(data);
}

async function fetchProductById(id) {
  const response = await fetch("http://localhost:3333/products");
  const data = await response.json();
  console.log(data);
}

fetchProductById("1");
