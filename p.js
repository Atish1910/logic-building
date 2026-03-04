function countService(iStr) {
  var payments = JSON.parse(iStr);

  var iMax = {};

  for (var i = 0; i < payments.length; i++) {
    var service = payments[i][0];
    var amount = payments[i][1];

    if (!iMax[service] || amount > iMax[service]) {
      iMax[service] = amount;
    }
    var iCnt = 0;
    var allServices = Object.keys(iMax);

    for (var j = 0; j < allServices.length; j++) {
      if (iMax[allServices[j]] < 200) {
        iCnt++;
      }
    }
    return iCnt;
  }
}
