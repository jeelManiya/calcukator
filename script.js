const inputData = document.getElementById("inputData");
const equalBtn = document.getElementById("btn_equal");
const clearBtn = document.getElementById("btn_clear");
const btnAC = document.getElementById("btn_AC");

const backBtn = document.getElementById("btn_back");
const backBtn2 = document.querySelector(".btn_back");

const buttons = document.querySelector(".btns");

buttons.addEventListener("click", (event) => {
  const currentBtn = event.target;
  if (currentBtn.classList.contains("op")) {
    if (inputData.value == "0") {
      inputData.value = currentBtn.value;
    } else {
      inputData.value += currentBtn.value;
    }
  }
  if (currentBtn === equalBtn && inputData.value != "") {
    try {
      inputData.value = eval(inputData.value);
    } catch (error) {
      inputData.value = "0";
    }
  }

  if (currentBtn.id === "btn_clear") {
    clear(inputData);
  }
  if (currentBtn === backBtn || currentBtn === backBtn2) {
    clearBack(inputData);
  }
});

function clear(element) {
  element.value = "";
}

function clearBack(inputData)
{
    inputData.value = inputData.value.substring(0, inputData.value.length - 1);
}