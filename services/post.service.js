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

const updatePost = (id, obj) => {
  posts = posts.map((post) => {
    if (post.id === id) {
      post.name = obj.name;
      post.description = obj.description;
      post.date = new Date();
    }

    return post;
  });

  return posts;
};

const destroyPost = (id) => {
  posts = posts.filter((post) => {
    return post.id !== id;
  });

  return posts;
};

module.exports = {
  createPost,
  getPosts,
  getPost,
  updatePost,
  destroyPost,
};
