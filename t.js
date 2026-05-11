const users = [
  { name: "A", city: "Pune" },
  { name: "B", city: "Mumbai" },
  { name: "D", city: "Pune" },
  { name: "E", city: "Mumbai" },
  { name: "F", city: "Nashik" },
  { name: "G", city: "Pune" },
  { name: "H", city: "Mumbai" },
];

const iResult = users.reduce((prev, user) => {
  prev[user.city] = prev[user.city] || [];
  prev[user.city].push(user);
  return prev;
}, {});
console.log(iResult);
