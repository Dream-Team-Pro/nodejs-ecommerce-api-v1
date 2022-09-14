const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
dotenv.config({ path: "config.env" });


// express app
const app = express();

// Middlewares
app.use(express.json());

if (process.env.NODE_ENV == "development") {
    app.use(morgan("dev"));
    console.log(`mode: ${process.env.NODE_ENV}`);
}



// Routes
app.post("/", (req, res) => {
    const name = req.body.name;
    console.log(`Post Name from body: ${name}`);

    const newCategory = new CategoryModel({ name });
    newCategory
        .save()
        .then((doc) => {
            res.json(doc);
        })
        .catch((err) => {
            res.json(err);
        });
});

app.get("/", (req, res) => {
    //res.send("Hi nodejs V1");
    const name = req.body.name;
    res.send(`Get Name from body: ${name}`);
});

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
    console.log(`App Running on port: ${PORT} `);
});