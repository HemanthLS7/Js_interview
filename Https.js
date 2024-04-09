const xhr = new XMLHttpRequest();
xhr.open("GET", "./user.json");
xhr.onreadystatechange = function () {
  if (this.status == 200 && this.readyState == 4) {
    const users = JSON.parse(this.responseText);
    // console.log(users);
    users.forEach((user) => {
      const li = document.createElement("li");
      li.innerHTML = `<strong>${user.name}<strong> - ${user.age}`;
      document.querySelector("#list").appendChild(li);
    });
  }
};
xhr.send();
