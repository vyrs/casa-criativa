const sqlite3 = require('sqlite3').verbose()
const db = new sqlite3.Database('./iniciante.db')


db.serialize(function() {

        // Criar a tabela
        db.run(`
            CREATE TABLE IF NOT EXISTS ideas(
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                image TEXT,
                title TEXT,
                category TEXT,
                description TEXT,
                link TEXT
            );
        `)

     // Inserir dados na tabela
        const query = `
        INSERT INTO ideas(
            image,
            title,
            category,
            description,
            link
        ) VALUES (?,?,?,?,?);
        `

        const values = [
            "https://image.flaticon.com/icons/svg/2709/2709762.svg",
            "Meditação",
            "Mentalidadecle",
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
            "https://rocketseat.com.br"
        ]

        db.run(query, values, function(err) {
            if (err) return console.log(err)

            console.log(this)
        })


/*    // Deletar um dado da tabela
     db.run(`DELETE FROM ideas`, function(err, rows) {
        if (err) return console.log(err)

        console.log("DELETEI", this)
    })

    // Consultar dados na tabela
    db.all(`SELECT * FROM ideas`, function(err, rows) {
        if (err) return console.log(err)

        console.log(rows)
    })*/

})

module.exports = db
