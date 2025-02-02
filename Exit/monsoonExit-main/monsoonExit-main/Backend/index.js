const express = require("express");
const cors = require("cors");
require("./connection")
var BlogModel = require("./model") 

const app = express();
var PORT = 3001;
app.use(express.json());
app.use(cors());

app.post("/add", async (req, res) => {
  try {
      await BlogModel(req.body).save()
      res.send({message:"data added"})
  } catch (error) {
      console.log(error)
  }
})

app.get("/get", async (req, res) => {
  try {
    let data = await BlogModel.find();
    res.send(data);
  } catch (error) {
    console.log(error);
  }
});


app.listen(PORT, () => {
  console.log(`${PORT} is up and running`);
});
