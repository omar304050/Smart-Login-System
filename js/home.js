let demo = document.querySelector("#demo");
const username = localStorage.getItem("currentUser");

console.log(username);

if (username) {
    demo.innerHTML = `<h1>Welcome ${username}</h1>`;
} else {
    demo.innerHTML = `<h1>Welcome Guest</h1>`;
}


