// let users = [];
// async function getUser() {
//   try {
//     let data = await axios.get("https://api.github.com/users");
//     users = data.data;
//     renderUser();
//   } catch (error) {
//     console.log(error);
//   }
// }

// function renderUser() {
//   let element = 'document.querySelectorAll(".list-user");'
//   users.map(value => {
//     element+=`<tr>
//     <td>${value.id}</td>
//     <td>${value.avatar_url}</td>
//     <td>${value.login}</td>
//     <td>${value.gists_url}</td>
//     <td>${value.repos_url}</td>
//     </tr>`
//   });
//   document.getElementsByClassName("list-user").innerHTML = element;
// window.addEventListener("DOMContentLoaded", function (e) {
//   getUser().then(function (res) {
//     renderUser(res.data);
//   });
// }

function getUser() {
  return axios.get("https://api.github.com/users");
}

function renderUser(users) {
  document.querySelector("tbody").innerHTML = users
    .map(function (user) {
      const tr = `<tr>
       <td>${user.id}</td>
        <td>${user.avatar_url}</td>
       <td>${user.login}</td>
        <td>${user.gists_url}</td>
        <td>${user.repos_url}</td>
      </tr>`;

      return tr;
    })
    .join("");
}

window.addEventListener("DOMContentLoaded", function (e) {
  getUser().then(function (res) {
    renderUser(res.data);
  });
});
