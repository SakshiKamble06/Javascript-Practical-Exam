let users = [
  { name: "Alice", age: 22 },
  { name: "Bob", age: 17 },
  { name: "Charlie", age: 19 }
];
function filterAdults(users) {
  return users.filter(user => user.age > 18);
}
console.log(filterAdults(users));