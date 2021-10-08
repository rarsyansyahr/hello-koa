const Koa = require("koa");
const bodyParser = require("koa-bodyparser");
const HomeRoutes = require("./routers/home.route");
const PostRoutes = require("./routers/post.route");
const UserRoutes = require('./routers/user.route');

const app = new Koa();

app.use(bodyParser());

app.use(HomeRoutes.routes()).use(HomeRoutes.allowedMethods());
app.use(PostRoutes.routes()).use(PostRoutes.allowedMethods());
app.use(UserRoutes.routes()).use(UserRoutes.allowedMethods());

// app.use((ctx) => (ctx.body = "Hello World"));
const PORT = 3001;
app.listen(PORT);

console.log(`Started Server on port ${PORT}`);
