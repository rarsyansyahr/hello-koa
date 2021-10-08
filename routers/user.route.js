const Router = require('koa-router');
const {getUsers, getUser, createUser, updateUser, destroyUser} = require('../services/user.service');

const router = new Router({
    prefix:'/users'
});

router.get('/', async ctx => {
    ctx.body = {
        success: true,
        users: await getUsers()
    }
});

router.get('/:id', async ctx => {
    const id = ctx.params.id;
    ctx.body = {
      success: true,
      user: await getUser(id),
    };
});

router.post('/', async ctx => {
    const body = ctx.request.body;
    ctx.body = {
      status: true,
      created: await createUser(body),
    };
});

router.put('/:id', async ctx => {
    const id = ctx.params.id,
        body = ctx.request.body;
    
    ctx.body = {
      success: true,
      updated: await updateUser(id, body),
    };
});

router.del('/:id', async ctx => {
    const id = ctx.params.id;

    ctx.body = {
        success: true,
        deleted: await destroyUser(id)
    }
});

module.exports = router;