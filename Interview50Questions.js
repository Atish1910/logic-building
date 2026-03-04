async function getData(){
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts/1");
    const result = await res.json();
    setTimeout(() => {
      console.log(result);
    }, 5000);
  } catch (error) {
    console.log(error)
  }
}

getData();
// ////////////////////////////////////////////////////

// closuse
function outerFunction(){
  let counter = 0;

  function innerFunction(){
    counter++;
    console.log(counter)
  }
  return innerFunction;
}

var c = outerFunction();
c();
c();