// ======================================================
// 2️⃣ Closure + setInterval (VERY COMMON BUG)

function displayInterval() {
  let iCnt = 0;

  let id = setInterval(() => {
    iCnt++;
    console.log(iCnt);
  }, 250);

  setTimeout(() => {
    clearInterval(id);
  }, 5000);
}

displayInterval();
