const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();

app.use(cors());

app.get("/api/country", async (req, res) => {
    try {
        const response = await axios.get(
            "https://restcountries.com/v2/all?fields=name;flag;capital;population;region"
        );

        const countries = response.data;
        const filteredCountries = countries.filter((c) =>
            c.name.toLowerCase().includes(req.query.name.toLowerCase())
        );
        res.send(filteredCountries);
    } catch (error) {
        console.log(error);
        res.status(500).send("Error retrieving country information.");
    }
});


const PORT = process.env.PORT || 3001;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
