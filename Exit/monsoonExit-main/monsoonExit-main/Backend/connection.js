const mongoose = require("mongoose");
//Write missing code here
mongoose
  .connect("mongodb+srv://athulyadileep012:AthulyaDileep@cluster0.q3mam.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
   
  )
  .then(() => {
    console.log("Connected to DB");
  })
  .catch((error) => {
    console.log(error);
  });
