let products = [
  { name: "Keyboard", price: 499 },
  { name: "Monitor", price: 8999 },
  { name: "Mouse", price: 299 }
];
// 
function sortProducts(products) {
  return products.sort((a, b) => a.price - b.price);
}

console.log(sortProducts(products));