const express = require("express");
const server = express();

const reviewRouter = require("./src/services/reviews/");




const port = 3003;

server.use(express.json())

server.use("/reviews", reviewRouter)




server.listen(port, () => {
    console.log(`Server is running on port ${port}`)
});
