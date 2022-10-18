const buttonAdd = document.querySelector(".button-add");
const inputAdd = document.querySelector("#input-add");
const ulList = document.querySelector(".list");
const inputSearch = document.querySelector(".input-text");

buttonAdd.addEventListener("click", () => {
  const inputValue = inputAdd.value.trim();
  if (inputValue.length) {
    ulList.innerHTML += `
    <li>
      <input type="checkbox" name="" id="" class="teste" value="off">
      <p>${inputValue}</p>
      <i class="fa-regular fa-trash-alt delete"></i>
    </li>
    `;
    inputAdd.value = "";
  }
  console.log(inputValue);
});

ulList.addEventListener("click", (event) => {
  const targetClick = event.target.classList;
  const paragraphClass = event.target.nextElementSibling;

  if (targetClick.contains("delete")) {
    event.target.parentNode.remove();
  }
  if (targetClick.contains("teste")) {
    paragraphClass.classList.toggle("feito");
  }
});

inputSearch.addEventListener("input", (e) => {
  const inputValue = e.target.value.toLowerCase();
  arrayLi = Array.from(ulList.children);
  console.log(arrayLi);
  arrayLi
    .filter((li) => !li.textContent.toLowerCase().includes(inputValue))
    .forEach((item) => {
      item.classList.add("hidden");
    });
  arrayLi
    .filter((li) => li.textContent.toLowerCase().includes(inputValue))
    .forEach((item) => {
      item.classList.remove("hidden");
    });
});
