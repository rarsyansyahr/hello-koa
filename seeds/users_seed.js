exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("users")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("users").insert([
        { name: "Rizky", address: "Purbalingga" },
        { name: "Wahyu", address: "Ponorogo" },
        { name: "Aji", address: "Trenggalek" },
        { name: "Apri", address: "Jakarta" },
        { name: "Dipto", address: "Jakarta Barat" },
        { name: "Handoko", address: "Jakarta Timur" },
        { name: "Ajat", address: "Magelang" },
        { name: "Aris", address: "Bekasi" },
        { name: "Nida", address: "Palembang" },
        { name: "Nunung", address: "Panjaitan" },
      ]);
    });
};
