// server/index.js

const { response } = require("express");
const express = require("express");

const PORT = process.env.PORT || 3001;
const app = express();
var cors = require('cors');
app.use(cors());

async function getAllCountries() {
  try {
    const allCountriesURL = 'https://restcountries.com/v2/all';
    const response = await fetch(allCountriesURL);
    if (!response.ok){
      throw new Error(`http error: ${response.status}`)
          }
    const json = await response.json();
    return json
  } 
  catch(error) {
        console.log(`Could not fetch all countries: ${error}`);
      }   
  }










//front end conversation

app.get("/api/all", (req, res) => {
    getAllCountries().then(data => {
      res.json(data)
    });
  });
  
  app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
  });

 