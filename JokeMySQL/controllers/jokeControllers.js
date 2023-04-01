const Joke = require('../models/jokeModels');

exports.getAllJokes = async (req, res, next) => {
    try {
        const [jokes, _] = await Joke.findALL();

        res.status(200).json({count: jokes.length, jokes});
    } catch (error){
        console.log(error);
        next(error);
    }

}

// exports.createNewJoke = async (req, res, next) =>{
//     try {
//         let {jokeType, jokeSetUp, jokePunchLine} = req.body;
//         let joke = new Joke(jokeType, jokeSetUp, jokePunchLine);
//
//         joke = await joke.save();
//
//         res.status(201).json({message: "Joke created"});
//     } catch (error){
//         console.log(error);
//         next(error);
//     }
// }
//can use this to create a new user

exports.getJokeById = async (req, res, next) =>{
    try {
        let jokeId = req.params.id;

        let [joke, _] = await Joke.findById(jokeId);

        res.status(200).json({joke: joke[0]});


    }catch (error){
        console.log(error);
        next(error);
    }
}

exports.getJokeByRandom = async (req, res, next) =>{
    try {
        const [jokes, _] = await Joke.getRandomJoke();

        res.status(200).json({count: jokes.length, jokes});

    } catch (error){
        console.log(error);
        next(error);
    }
}

exports.getJokeByTypeRandom = async (req, res, next) =>{
    try {

        const [jokes, _] = await Joke.getRandomJokeByType(req.params.jokeType);

        res.status(200).json({count: jokes.length, jokes});

    } catch (error){
        console.log(error);
        next(error);
    }
}

