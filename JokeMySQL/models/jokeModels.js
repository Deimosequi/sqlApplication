const db = require('../config/jokeDB')

class Joke {
    constructor(jokeType, jokeSetup, jokePunchLine) {
        this.jokeType = jokeType;
        this.jokeSetUp = jokeSetup;
        this.jokePunchLine = jokePunchLine;
    }
    async save(){

        let sql = `
        INSERT INTO jokes(
            jokeType,
            jokeSetup,
            jokePunchLine
        )
        VALUES(
            '${this.jokeType}',
            '${this.jokeSetUp}',
            '${this.jokePunchLine}'
        )`;

        return db.execute(sql);
    }

    static findALL(){
        let sql = "SELECT jokes_mysql.joke_type.jokeType, jokes_mysql.jokes.jokeSetup, jokes_mysql.jokes.jokePunchLine,jokes_mysql.jokes.jokeType FROM jokes_mysql.jokes JOIN jokes_mysql.joke_type ON jokes_mysql.jokes.jokeType = jokes_mysql.joke_type.id;";

        return db.execute(sql);
    }

    static getRandomJoke(){
        let sql = "SELECT jokes_mysql.joke_type.jokeType, jokes_mysql.jokes.jokeSetup, jokes_mysql.jokes.jokePunchLine,jokes_mysql.jokes.jokeType FROM jokes_mysql.jokes JOIN jokes_mysql.joke_type ON jokes_mysql.jokes.jokeType = jokes_mysql.joke_type.id ORDER BY RAND() LIMIT 1;";

        return db.execute(sql);
    }

    static findById(id){
        let sql = `SELECT * FROM jokes WHERE id = ${id};`;


        return db.execute(sql);
    }

    static getRandomJokeByType(jokeTypeAgain){

        let sql = `SELECT jokes_mysql.jokes.jokeType, jokes_mysql.jokes.jokeSetUp, jokes_mysql.jokes.jokePunchLine, jokes_mysql.joke_type.jokeType FROM jokes_mysql.jokes JOIN jokes_mysql.joke_type ON jokes_mysql.jokes.jokeType = jokes_mysql.joke_type.id WHERE jokes_mysql.joke_type.jokeType = '${jokeTypeAgain}' ORDER BY RAND() LIMIT 1;`;

        return db.execute(sql);
    }

}

module.exports = Joke;