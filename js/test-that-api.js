console.log("ok");
const input = document.querySelector("#input-url");

document.querySelector("#try-it").addEventListener("click", function(event) {
  event.preventDefault();
  const url = input.value.trim();
  fetch(url).then(response => response.json()).then(
    function(data) {
      return console.log(data)
    }
  ).catch(err => console.error(err));
  console.log("woohoo");
})

