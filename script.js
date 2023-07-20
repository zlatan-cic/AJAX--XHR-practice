const xhr = new XMLHttpRequest();

xhr.open("GET", "./movies.json");

/*

readyState has 5 possible values:

0: request not initialized
1: server connection established
2: request received
3: processing request
4: request finished and response is ready

*/

xhr.onreadystatechange = function () {
  // console.log(this.readyState);
  console.log(this.status);
  if (this.readyState === 4 && this.status === 200) {
    // console.log(JSON.parse(this.responseText));
    const data = JSON.parse(this.responseText);

    data.forEach((movie) => {
      let li = document.createElement("li");
      li.innerHTML = `
      <strong>${movie.title}</strong> - Year: ${movie.year}
      `;
      document.getElementById("results").appendChild(li)
      console.log(li);
    });

  }
};

xhr.send();