const fetch = require('node-fetch');

1.
async function getPost(id) {
  await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
    });
}

2.
async function getUsers() {
  const users = [];
  await fetch('https://jsonplaceholder.typicode.com/users')
    .then((res) => res.json())
    .then((json) => json.map((user) => {
      console.log(users.push(`${user.name}`));
    }));
}

3.
async function getAddresses() {
  const address = [];
  await fetch('https://jsonplaceholder.typicode.com/users')
    .then((res) => res.json())
    .then((json) => json.map((user) => {
      console.log(address.push(`${user.address.street}, ${user.address.suite}, ${user.address.city}`));
    }));
}

4.
async function shortestPost() {
  let shortestPost = '';
  await fetch('https://jsonplaceholder.typicode.com/posts/')
    .then((res) => res.json())
    .then((json) => {
      for (let i = 0; i < json.length; i++) {
        if (json[i].body.length < shortestPost.length) {
          shortestPost = json[i].body;
        }
      }
    });
  console.log(shortestPost);
}

5.
async function numCompleted() {
  await fetch('https://jsonplaceholder.typicode.com/todos')
    .then((res) => res.json())
    .then((json) => {
      const tasks = json.filter((obj) => obj.completed === true);
      console.log(tasks.length);
    });
}

6.
async function searchPosts(searchWord){
  await fetch('https://jsonplaceholder.typicode.com/posts')
  .then(res => res.json())
  .then(json => {
      const biz = json.filter((obj => obj.body.includes(`${searchWord}`)))
      console.log(biz.length)
  })
}

module.exports = {
  // getPost,
  // getUsers,
  // getAddresses,
  // shortestPost,
  // numCompleted,
  // searchPosts,
};
