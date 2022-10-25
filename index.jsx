const express = require("express");
const app = express();
const cors = require("cors");

const port = process.env.PORT || 5000;

app.listen(port, () =>
  console.log(`web & cyber-security el is running on Port ${port}`)
);
//api for topic category

const topics = require("./data/topics.json");
const topicInfo = require("./data/topicDetails.json");

app.get("/topics-category", (req, res) => {
  res.send({ topics });
});
//its its used to get cross origin access
app.use(cors());

//api for single topic
app.get("/topics-category/:id", (req, res) => {
  const id = req.params.id;
  const topicDetails = topicInfo.filter(
    (singleTopic) => singleTopic.category_id === id
  );
  res.send(topicDetails);
});

//api for all topics topicDetails

app.get("/allTopics", (req, res) => {
  res.send({ topicInfo });
});

// create a GET route
app.get("/express_backend", (req, res) => {
  //Line 9
  res.send({ express: "Your Web and cyber-security backend is running" }); //Line 10
}); //Line 11
