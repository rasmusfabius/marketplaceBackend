const express = require("express");
const multer = require("multer");
const {readFile, writeFile} = require("fs-extra");
const {join} = require("path");
const router = express.Router();

const reviewPath = join(__dirname, "reviews.json");

console.log(reviewPath)

router.get("/", async (req, res, next) => {

    const buffer = await readFile(reviewPath)
    const content = buffer.toString()
    const reviews = JSON.parse(content)

    res.send(reviews)
})

router.get("/:id", async (req, res, next) => {
    const buffer = await readFile(reviewPath)
    const content = buffer.toString()
    const reviews = JSON.parse(content)

    const productReview = reviews.find(review => review._id == req.params.id)

    if (productReview) {
        res.send(productReview)
    } else {
        res.status(404).send(`Review ${review._id} can not be found`)
    }
})

router.get("/products/:id", async (req, res, next) => {

    const buffer = await readFile(reviewPath)
    const content = buffer.toString()
    const reviews = JSON.parse(content)

    /* const elementId  = reviews.find(review => review.elementId) */

    const elementReviews = reviews.filter(review => review.elementId == req.params.id)

    if (elementReviews) {
        res.send(elementReviews)
    } else {
        res.send("This product has 0 reviews")
    }

    
})

router.post("/reviews", async (req, res, next) => {
    
})

router.put("/reviews/:id", async (req, res, next) => {
    
})

router.delete("/reviews/:id", async (req, res, next) => {
    
})




module.exports = router;