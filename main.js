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

// fetchProductById("1");

const name = document.getElementById("name");
const price = document.getElementById("price");
const form = document.getElementById("form");

addEventListener("submit", async (event) => {
  event.preventDefault();

  fetch("http://localhost:3333/products", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JASON.stringify({
      id: new Date().getTime().toString(),
      name: productName.value,
      price: productPrice.value,
    }),
  });
});
