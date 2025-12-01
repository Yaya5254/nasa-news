let date = document.getElementById("date");
let btn = document.getElementById("btn");
let img = document.getElementById("img");
let vid = document.getElementById("vid");
let email = document.getElementById("email");
let save = document.getElementById("save");
let name = document.getElementById("name");

let url = ""; // Declare globally

btn.onclick = () => {
  let nasaurl = 'https://api.nasa.gov/planetary/apod?api_key=mhBPHAAms2BYxDnjahAsQv9sGn0hDadWwYRrVUoU&date=' + date.value;

  fetch(nasaurl)
    .then((results) => results.json())
    .then((results) => {
      console.log(results);
      url = results.url;

      if (results.media_type === "image") {
        img.setAttribute("src", results.url);
        img.style.display = "block";
        if (vid) vid.style.display = "none";
      } else if (results.media_type === "video") {
        if (vid) {
          vid.setAttribute("src", results.url);
          vid.style.display = "block";
        }
        img.style.display = "none";
      }
    });
};

save.onclick = () => {
  let savedDataToDatabase = {
    username: name.value,
    email: email.value,
    url: url
  };

  console.log(savedDataToDatabase);

  fetch("http://localhost:3455/saveURL", {
    method: "POST",
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(savedDataToDatabase)
  })
  .then(res => {
    if (!res.ok) {
      throw new Error("Server error: " + res.status);
    }
    return res.json();
  })
  .then(data => console.log("Saved:", data))
  .catch(err => console.error("Save failed:", err));
};
let del = document.getElementById("del");

del.onclick = () => {
  let deletedData = {
    username: name.value,
    email: email.value
  };

  console.log("Deleting:", deletedData);

  fetch("http://localhost:3455/deleteData", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(deletedData)
  })
    .then(res => {
      if (!res.ok) {
        throw new Error("Server error: " + res.status);
      }
      return res.json();
    })
    .then(data => {
      console.log("Deleted:", data);
      alert("Deleted successfully ");
    })
    .catch(err => {
      console.error("Delete failed:", err);
      alert("Failed to delete ");
    });
};
