const Router = require("koa-router");
const {
  createPost,
  getPosts,
  getPost,
  updatePost,
  destroyPost,
} = require("../services/post.service");

const router = new Router({
  prefix: "/posts",
});

router.get("/", (ctx) => (ctx.body = getPosts()));

router.post("/", (ctx) => {
  let post = ctx.request.body;
  post = createPost(post);

  ctx.response.status = 201;
  ctx.body = post;
});

router.get("/:id", (ctx) => {
  const id = ctx.params.id;
  ctx.body = getPost(id);
});

router.put("/:id", (ctx) => {
  const id = ctx.params.id;
  ctx.body = updatePost(id, ctx.request.body);
});

router.delete("/:id", (ctx) => {
  const id = ctx.params.id;
  ctx.body = destroyPost(id);
});

module.exports = router;
