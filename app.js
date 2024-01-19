// ДЗ

document.addEventListener("DOMContentLoaded", function() {
  const redSquare = document.querySelector(".red");
  const yellowSquare = document.querySelector(".yellow");
  const blueSquare = document.querySelector(".blue");
  const blackSquare = document.querySelector(".black");
  const whiteSquare = document.querySelector(".white");

  redSquare.addEventListener("click", function() {
    document.body.style.backgroundColor = "red";
  });

  yellowSquare.addEventListener("click", function() {
    document.body.style.backgroundColor = "yellow";
  });

  blueSquare.addEventListener("click", function() {
    document.body.style.backgroundColor = "blue";
  });

  blackSquare.addEventListener("click", function() {
    document.body.style.backgroundColor = "black";
  });

  whiteSquare.addEventListener("click", function() {
    document.body.style.backgroundColor = "white";
  });
});
