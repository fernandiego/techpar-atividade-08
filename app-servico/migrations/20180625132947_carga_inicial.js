const pessoas = [

    {idpessoa: 1, nomepessoa: "Astrogildo", telefonepessoa:"123456"},
    {idpessoa: 2, nomepessoa: "Artur", telefonepessoa:"123456"},
    {idpessoa: 3, nomepessoa: "Bruno", telefonepessoa:"123456"},
    {idpessoa: 4, nomepessoa: "Cecilia", telefonepessoa:"123456"},
    {idpessoa: 5, nomepessoa: "Dolores", telefonepessoa:"123456"},
    {idpessoa: 6, nomepessoa: "Elis", telefonepessoa:"123456"},
    
]  

exports.up = knex => knex("pessoa").insert(pessoas)

exports.down = knex => knex("pessoa").del()
  .whereIn("idpessoa", pessoas.map(e => e.idpessoa))