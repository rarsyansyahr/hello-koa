const uuid = require("uuid");

let posts = [
  {
    id: uuid.v1(),
    date: new Date(),
    name: "Buku",
    description: "Untuk tempat menulis..",
  },
  {
    id: uuid.v4(),
    date: new Date() + 1000,
    name: "Pensil",
    description: "Untuk menulis....",
  },
];

const createPost = (obj) => {
  let post = {
    id: uuid.v4(),
    date: new Date(),
    name: obj.name,
    description: obj.description,
  };

  return post;
};

const getPosts = () => {
  return posts;
};

const getPost = (id) => {
  return posts.filter((post) => {
    return post.id === id;
  });
};

module.exports = {
  createPost,
  getPosts,
  getPost,
};
