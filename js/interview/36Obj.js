const obj = {
  name: "Atish",
  print: function () {
    setTimeout(function () {
      console.log(this.name);
    }, 1000);
  },
};

obj.print();
