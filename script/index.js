// Reuse able function
function getElement(id) {
  const element = document.getElementById(id);
  return element;
}
// card main box code..
getElement("cardMainBox").addEventListener("click", function (e) {
  // console.log(e.target);
  //condition for hert icon increment...
  if (e.target.className.includes("hertIcon")) {
    const icon = e.target;
    // console.log(icon)
    const navHertIcon = getElement("heartBtn");
    let navHertIconConvart = parseInt(navHertIcon.innerText);
    // console.log(navHertIconConvart);
    navHertIconConvart = navHertIconConvart + 1;
    navHertIcon.innerText = navHertIconConvart;
  }
  // condition for copy btn..
  if (e.target.className.includes("copyBtn")) {
    const copy = e.target;
    // console.log(copy)
    const copyNavBtn = getElement("copyNav");
    let copyNavBtnConvart = parseInt(copyNavBtn.innerText);
    copyNavBtnConvart = copyNavBtnConvart + 1;
    copyNavBtn.innerText = copyNavBtnConvart;
    // console.log(copyNavBtnConvart);
    const hotLine =
      copy.parentNode.parentNode.children[1].children[2].innerText;
    // console.log(hotLine)
    navigator.clipboard.writeText(hotLine);
    alert("নম্বর কপি হয়েছে: " + hotLine);
  }
  // main condition
  if (e.target.className.includes("cardBtn")) {
    const cartBtn = e.target;
    // const hertIcon = cartBtn.parentNode.parentNode.children[0].children[1].children[0];
    // console.log(hertIcon);
    const title =
      cartBtn.parentNode.parentNode.children[1].children[0].innerText;

    const subTitle =
      cartBtn.parentNode.parentNode.children[1].children[1].innerText;

    const hotLine =
      cartBtn.parentNode.parentNode.children[1].children[2].innerText;
    // console.log(hotLine)
    // coin decrese...............code
    const coinElement = getElement("coinBtn");
    let coinBtnConvart = parseInt(coinElement.innerText);
    // console.log(coinBtnConvart)
    // condition..
    if (coinBtnConvart < 20) {
      alert("❌ আপনার পর্যাপ্ত কয়েন নেই কল করতে কমপক্ষে ২০ কয়েন লাগবে।");
      return;
    } else {
      coinBtnConvart = coinBtnConvart - 20;
      coinBtn.innerText = coinBtnConvart;
    }

    // aleart...
    alert("📞 " + "Calling " + subTitle + " " + hotLine + "...");

    //Container
    const container = getElement("container");
    const newDiv = document.createElement("div");
    newDiv.innerHTML = `
        
          <div
              class="flex justify-between items-center bg-gray-100 p-4 rounded-lg m-4"
            >
              <div>
                <h2>${title}</h2>
                <h3>${hotLine}</h3>
              </div>
              <div>
                <p id="time"></p>
              </div>
            </div>
        
        `;
    container.appendChild(newDiv);

    // Time element select
    const setTime = newDiv.querySelector("#time");
    const now = new Date();
    const time = now.toLocaleTimeString();
    setTime.innerText = time;
  }
});
// Clear Btn code..
const clearAll = getElement("clearBtn").addEventListener("click", function () {
  getElement("container").innerHTML = "";
});
