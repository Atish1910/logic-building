var payments = [
  ["Swiggy", 123],
  ["Swiggy", 227],
  ["Zomato", 103],
  ["Zomato", 171],
  ["Dunzo", 131],
  ["Zomato", 122],
  ["Swiggy", 181],
];

function getNoSplurgeServices(data) {
  var maxPaid = {};

  // find max payment for each service
  for (var i = 0; i < data.length; i++) {
    var service = data[i][0];
    var amount = data[i][1];

    if (!maxPaid[service] || amount > maxPaid[service]) {
      maxPaid[service] = amount;
    }
  }

  // collect services with max < 200
  var result = [];

  for (var serviceName in maxPaid) {
    if (maxPaid[serviceName] < 200) {
      result.push(serviceName);
    }
  }

  return result;
}

console.log(getNoSplurgeServices(payments));
