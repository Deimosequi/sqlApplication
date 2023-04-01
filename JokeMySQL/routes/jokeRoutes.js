/**
 * @swagger
 * components:
 *   schemas:
 *     Joke:
 *       type: object
 *       required:
 *         - jokeType
 *         - jokeSetUp
 *         - jokePunchLine
 *       properties:
 *         id:
 *           type: string
 *           description: The auto-generated id of the joke
 *         jokeType:
 *           type: number
 *           description: The joke type
 *         jokeSetUp:
 *           type: string
 *           description: The joke setup
 *         jokePunchLine:
 *           type: string
 *           description: The joke punchline
 *       example:
 *         jokeType: 1
 *         jokeSetUp: Why did the chicken go to prison?
 *         jokePunchLine: Crimes.
 */

/**
 * @swagger
 * /:
 *   get:
 *     summary: Lists all the jokes
 *     tags: [Get Jokes]
 *     responses:
 *       200:
 *         description: The list of jokes
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Joke'
 *       409:
 *         description: Server error 409
 *
 *
 * /jokeRandom:
 *   get:
 *     summary: Lists all the jokes
 *     tags: [Get Random Jokes]
 *     responses:
 *       200:
 *         description: The list of jokes
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Joke'
 *       409:
 *         description: Server error 409
 *
 *
 * /type/jokeRandom/{jokeType}:
 *   get:
 *     summary: Get the joke by type
 *     tags: [Get Random Joke By Type]
 *     parameters:
 *       - in: path
 *         name: jokeType
 *         schema:
 *           type: string
 *         required: true
 *         description: The Joke Type
 *     responses:
 *       200:
 *         description: The joke response by type
 *         contents:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Joke'
 *       409:
 *          description: Server error 409
 *
 */

// /post:
// post:
//     summary: Create a new joke
// tags: [Post Jokes]
// requestBody:
//     required: true
// content:
//     application/json:
// schema:
//     $ref: '#/components/schemas/Joke'
// responses:
//     201:
// description: The created joke.
//     content:
// application/json:
// schema:
//     $ref: '#/components/schemas/Joke'
// 409:
// description: Server error 409
// USE THIS FOR SWAGGER

const express = require('express');
const jokeControllers = require('../controllers/jokeControllers')
const router = express.Router();

//@route GET && POST - /posts
router.route("/jokeRandom").get(jokeControllers.getJokeByRandom);
router.route("/type/jokeRandom/:jokeType").get(jokeControllers.getJokeByTypeRandom);
router.route("/:id").get(jokeControllers.getJokeById);
router.route("/").get(jokeControllers.getAllJokes);


module.exports = router;