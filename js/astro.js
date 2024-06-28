const data = "{\"style\":\"inverted\",\"observer\":{\"latitude\":33.775867,\"longitude\":-84.39733,\"date\":\"2024-06-28\"},\"view\":{\"type\":\"constellation\",\"parameters\":{\"constellation\":\"ori\"}}}";

const xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function () {
  if (this.readyState === this.DONE) {
    console.log(this.responseText);
  }
});

// Put that code here!


const params = {
  style: "inverted",
  observer: {
    latitude: 33.775867,
    longitude: -84.39733,
    date: "2024-06-13"
  },
  view: {
    type: "constellation",
    parameters: {constellation: "ori"}
  }
}

const headers = {
  "X-Requested-With": "XMLHttpRequest",
  Authorization: `Basic ${btoa(`${appId}:${secret}`)}`
}

this.setSnippetData('POST', url, params, headers)

axios.post(url, params, { headers }).then(response => {
  this.imageUrl = response.data.data.imageUrl;
  store.response = JSON.stringify(response.data, null, 2);

  this.loading = false;
});