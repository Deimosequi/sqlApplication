require("dotenv").config(); // ALLOWS ENVIRONMENT VARIABLES TO BE SET ON PROCESS.ENV SHOULD BE AT TOP

const express = require("express");
const app = express();

bodyParser = require("body-parser")
swaggerJsdoc = require("swagger-jsdoc")
swaggerUi = require("swagger-ui-express");

// Middleware
app.use(express.json())

// Redirect requests to endpoint starting with /posts to postRoutes.js
app.use("/jokes", require("./routes/jokeRoutes"));

// Global Error Handler. IMPORTANT function params MUST start with err
app.use((err, req, res, next) => {
    console.log(err.stack);
    console.log(err.name);
    console.log(err.code);

    res.status(500).json({
        message: "ERROR CODE RED",
    });
});

const options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "MySQL API with Swagger",
            version: "0.1.0",
            description:
                "This is a get joke API application made with Express and documented with Swagger",
            license: {},
            contact: {
                name: "Dhanushka",
                email: "Dhanushkagurusinghe03@gmail.com",
            },
        },
        servers: [
            {
                url: "http://localhost:3000/jokes",
                url: "http://20.189.78.142:3000/jokes",
            },
        ],
    },
    apis: ["./routes/*.js"],
};

const specs = swaggerJsdoc(options);
app.use(
    "/api-docs",
    swaggerUi.serve,
    swaggerUi.setup(specs, { explorer: true })
);

// Listen on pc port
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on PORT ${PORT}`));
