
exports.up = knex => knex.schema.table("pessoa", tb => {
    tb.integer("idadepessoa").notNullable().defaultTo(18)
})

exports.down = knex => knex.schema.table("pessoa", tb => {
    tb.dropColumn("idadepessoa")
})
