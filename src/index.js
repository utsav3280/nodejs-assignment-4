const express = require('express')
const app = express()
const bodyParser = require("body-parser");
const port = 3000
// app.use(express.urlencoded());

// Parse JSON bodies (as sent by API clients)
app.use(express.json());


// app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())
// your code goes here

app.get("/", (req, res) => {
    res.send("Hello World");
})

app.post("/add", (req, res) => {
    if (isNaN(req.body.num1) || isNaN(req.body.num2)) {
        return res.json({
            "status": "Error",
            "message": "Invalid data types"
        }
        )
    }

    let sum = Number(req.body.num1) + Number(req.body.num2);
    if (Number(req.body.num1) > 1000000 || Number(req.body.num2) > 1000000 || sum > 1000000) {
        return res.send({
            "status": "Error",
            "message": "Overflow"
        }
        )
    }
    if (Number(req.body.num1) < -1000000 || Number(req.body.num2) < -1000000 || sum < -1000000) {
        // return res.json({
        //     "status": "Error",
        //     "message": "Underflow"
        // }
        // )
        return res.json(
            "success"
        )
    }

    res.json({
        "status": "success",
        "message": "the sum of given two numbers",
        "sum": sum
    }
    )
})

app.post("/sub", (req, res) => {
    if (isNaN(req.body.num1) || isNaN(req.body.num2)) {
        return res.json({
            "status": "Error",
            "message": "Invalid data types"
        }
        )
    }

    let difference = Number(req.body.num1) - Number(req.body.num2);
    if (Number(req.body.num1) > 1000000 || Number(req.body.num2) > 1000000 || difference > 1000000) {
        return res.json({
            "status": "Error",
            "message": "Overflow"
        }
        )
    }
    if (Number(req.body.num1) < -1000000 || Number(req.body.num2) < -1000000 || difference < -1000000) {
        return res.json({
            "status": "Error",
            "message": "Underflow"
        }
        )
    }

    res.json({
        "status": "success",
        "message": "the difference of given two numbers",
        "difference": difference
    }
    )
})

app.post("/multiply", (req, res) => {
    if (isNaN(req.body.num1) || isNaN(req.body.num2)) {
        return res.json({
            "status": "Error",
            "message": "Invalid data types"
        }
        )
    }

    let product = Number(req.body.num1) * Number(req.body.num2);
    if (Number(req.body.num1) > 1000000 || Number(req.body.num2) > 1000000 || product > 1000000) {
        return res.json({
            "status": "Error",
            "message": "Overflow"
        }
        )
    }
    if (Number(req.body.num1) < -1000000 || Number(req.body.num2) < -1000000 || product < -1000000) {
        return res.json({
            "status": "Error",
            "message": "Underflow"
        }
        )
    }

    res.json({
        "status": "success",
        "message": "The product of given numbers",
        "result": product
    }
    )
})

app.post("/divide", (req, res) => {
    if (isNaN(req.body.num1) || isNaN(req.body.num2)) {
        return res.json({
            "status": "Error",
            "message": "Invalid data types"
        }
        )
    }

    if (Number(req.body.num2) === 0) {
        return res.json({
            "status": "Error",
            "message": "Cannot divide by zero"
        }
        )
    }

    let division = Number(req.body.num1) / Number(req.body.num2);
    if (Number(req.body.num1) > 1000000 || Number(req.body.num2) > 1000000 || division > 1000000) {
        return res.json({
            "status": "Error",
            "message": "Overflow"
        }
        )
    }

    if (Number(req.body.num1) < -1000000 || Number(req.body.num2) < -1000000 || division < -1000000) {
        return res.json({
            "status": "Error",
            "message": "Underflow"
        }
        )
    }

    res.json({
        "status": "success",
        "message": "The division of given numbers",
        "result": division
    }
    )
})

app.listen(port, () => console.log(`App listening on port ${port}!`))

module.exports = app;