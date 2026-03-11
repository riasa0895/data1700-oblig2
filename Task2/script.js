function getUser() {

fetch("https://jsonplaceholder.typicode.com/users/1")
  .then(response => response.json())
  .then(data => {
    console.log(data);
    document.getElementById("result").textContent =
      JSON.stringify(data, null, 2);
  })
  .catch(error => {
    console.error("Error:", error);
  });

}
