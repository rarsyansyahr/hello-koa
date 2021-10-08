const knex = require("../knex");

const getUsers = async () => {
  let users = [];

  await knex
    .select()
    .from("users")
    .then((res) => {
      users = res;
    });

  return users;
};

const getUser = async (id) => {
  let user = {};
  
  await knex
    .select()
    .from("users")
    .where("id", id)
    .then((res) => {
      user = res[0];
    });

  return user ? user : 'User Not Found';
};

const createUser = async (obj) => {
  return await knex('users')
    .insert({
      name: obj.name,
      address: obj.address
    })
    .onConflict('name')
    .ignore();
}

const updateUser = async (id, obj) => {
  return await knex('users')
    .where('id', id)
    .update({
      name: obj.name,
      address: obj.address
    });
}

const destroyUser = async (id) => {
  return await knex('users')
    .where('id', id)
    .del();
}

module.exports = { getUsers, getUser, createUser, updateUser, destroyUser };
