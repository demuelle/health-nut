const data = "{\"style\":\"inverted\",\"observer\":{\"latitude\":33.775867,\"longitude\":-84.39733,\"date\":\"2024-06-28\"},\"view\":{\"type\":\"constellation\",\"parameters\":{\"constellation\":\"ori\"}}}";

const xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function () {
  if (this.readyState === this.DONE) {
    console.log(this.responseText);
  }
});

xhr.open("POST", "https://api.astronomyapi.com/api/v2/studio/star-chart");
xhr.setRequestHeader("Authorization", "Basic MmFlZDY3OWMtMGFlYi00MWQ0LWFkNDMtODZlNThlNTU0NzE1OjZhMzNhNmYwNGQ3NDY5NzRkMzExYjQwOTJlMTNhY2Q2M2JlMzM2NmU2NWFmYTZiYTllZTM5Mzc5YjFhNGM5MzUyNDVlNzdhZWQyYzYxYjYyY2MyOTcwOTRkNDI3YzkzMTkyMWQyNmViZTE2YmViY2M0ZjNmN2MyNjU5ZTMxZDA2ZjU1NDgzMmFiMzUwN2U5NGM4OWQxMTYxZjRiMjYwMDAxNWEzYzAzYWFhNTk3MTYxNTMyYTU4YWY2ZjA0MTVhMDM2NmJmOGMyYjg5NGY4NTE1ODdlNzE5YWYyMDkxOGMx");

xhr.send(data);