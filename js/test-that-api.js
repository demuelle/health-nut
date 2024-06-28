console.log("ok");
const input = document.querySelector("#input-url");
const urlSpan = document.querySelector("#url-display");
const statusDiv = document.querySelector("#status");
const outputDiv = document.querySelector("#output");
const errorDiv = document.querySelector("#error");

document.querySelector("#try-it").addEventListener("click", function (event) {
  event.preventDefault();
  const url = input.value.trim();
  urlSpan.textContent = url;
  statusDiv.textContent = "";
  outputDiv.textContent = "";
  errorDiv.textContetn = "";
  fetch(url).then(
    function (response) {
      statusDiv.textContent = response.status;
      console.log(response);
      return response.json();
    }).then(
      function (data) {
        outputDiv.textContent = JSON.stringify(data, null, 3);
        return console.log(data)
      }
    ).catch(err => {
      errorDiv.textContent = err;
      console.error(err);
    });
  console.log("woohoo");
})

