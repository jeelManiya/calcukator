const container = document.querySelector(".btn-container");
const container_sci = document.querySelector(".container-sci");
const normal = document.getElementById("normal");
let scientific = document.getElementById("scientific");

scientific.addEventListener("click", () => {
  container.classList.toggle("hide");
  container_sci.classList.toggle("show");
});
normal.addEventListener("click", () => {
  container.classList.toggle("hide");
  container_sci.classList.toggle("show");
});

// equalBtn=document.getElementById('btn_equal');
// clearBtn=document.getElementById('btn_clear');

container_sci.addEventListener("click", (event) => {
  let currentBtn = event.target;
  if (currentBtn.value === "factorial") {
    let sum = 1;
    for (let i = 1; i <= +inputData.value; i++) {
      sum = sum * i;
    }
    inputData.value = sum;
  }

  if (currentBtn.value === "xy") {
    let ans = inputData.value.split("-");
    inputData.value = Math.pow(+ans[0], +ans[1]);
  }

  if(currentBtn.value==="rupees")
  {
      inputData.value = (+inputData.value)*(82.73);    
  }
  if(currentBtn.value==="dollar")
  {
      inputData.value = (+inputData.value)/(82.73);    
  }

  if (currentBtn.value === "log")
    inputData.value = Math.log10(+inputData.value);

  if (currentBtn.value === "sin")
    inputData.value = Math.sin(+inputData.value);

  if (currentBtn.value === "root3")
    inputData.value = 3 * Math.sqrt(+inputData.value);

  if (currentBtn.value === "root")
    inputData.value = Math.sqrt(+inputData.value);

  if (currentBtn.value === "square")
    inputData.value = Math.pow(+inputData.value, 2);

  if (currentBtn.id === "btn_clear") clear(inputData);

  if (currentBtn.id === "btn_back" || currentBtn.classList.contains("btn_back"))
    clearBack(inputData);

  if (currentBtn === backBtn || currentBtn === backBtn2) {
    inputData.value = inputData.value.substring(0, inputData.value.length - 1);
  }
});
