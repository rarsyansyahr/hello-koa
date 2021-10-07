const Router = require("koa-router");
const router = new Router({
  prefix: "/home",
});

router.get("/", (ctx) => (ctx.body = { msg: "Home Page" }));

router.post("/", (ctx) => (ctx.body = { msg: "Home Page - POST" }));

module.exports = router;
