// re use able function

function getElement(id) {
  const element = document.getElementById(id);
  return element;
}
// set time
// const timeEl = newDiv.querySelector('.time');
// setInterval(() => {
//   timeEl.innerText = new Date().toLocaleTimeString();
// }, 1000);

// card main box code..
getElement("cardMainBox").addEventListener("click", function (e) {
  // console.log(e.target);

  if (e.target.className.includes("cardBtn")) {
    const cartBtn = e.target;

    const title =
      cartBtn.parentNode.parentNode.children[1].children[0].innerText;

    const subTitle =
      cartBtn.parentNode.parentNode.children[1].children[1].innerText;

    const hotLine =
      cartBtn.parentNode.parentNode.children[1].children[2].innerText;

    // aleart...
    alert("📞 " + "Calling " + subTitle + " " + hotLine + "...");

    // Coin btn code..
    const coinBtn = getElement("coinBtn");
    console.log(coinBtn.innerText);

    //   Container
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
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    setTime.innerText = `${hours}:${minutes}:${seconds}`;
  }
});

// Clear Btn code..

const clearAll = getElement("clearBtn").addEventListener("click", function () {
  getElement("container").innerHTML = "";
});
