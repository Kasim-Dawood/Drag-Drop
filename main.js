let btn = document.getElementById("btn");
let input = document.getElementById("input");
let boxes = document.querySelectorAll(".box");
let drag = null;

btn.onclick = function () {
  if (input.value !== "") {
    boxes[0].innerHTML += `<p class='item' draggable='true'>${input.value}</p>`;
    input.value = "";
  }

  dragItem();
};

function dragItem() {
  let items = document.querySelectorAll(".item");

  items.forEach((item) => {
    item.addEventListener("dragstart", function () {
      drag = item;
      item.style.opacity = "0.5";
    });

    item.addEventListener("dragend", function () {
      drag = null;
      item.style.opacity = "1";
    });

    boxes.forEach((box) => {
      box.addEventListener("dragover", function (e) {
        e.preventDefault();
        box.style.background = "#41c4d9";
        box.style.color = "#fff";
      });

      box.addEventListener("dragleave", function () {
        box.style.background = "#fff";
        box.style.color = "#000";
      });

      box.addEventListener("drop", function () {
        box.append(drag);
        box.style.background = "#fff";
        box.style.color = "#000";
      });
    });
  });
}
