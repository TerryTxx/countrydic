const express = require("express");
// const bodyPaser = require('body-parser')

const axios = require('axios')
const app = express();

// app. use(bodyPaser. json())

app.all('*', function (req, res, next) {
    res. header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Headers', 'X-Requested-With,Content-Type')
    res.header('Access-Control-Allow-Methods','GET,POST,OPTIONS')
    next()
})

app.get("/api/country", function(req, res){
        console. log(req. query)
        const queryname = decodeURI(req.query.name)
        console.log(queryname)
        console.log('************')
        axios.get(`https://restcountries.com/v3.1/name/${req.query.name}`,{
            headers: {
                'Access-Control-Allow-Origin':'*', //Solve the cors header problem
                'Access-Control-Allow-Credentials':'true', //Solve the session problem
            }
        }).then(response=>{

            // console. log(response. data[0])
            const data = {
                code:200,
                data:response.data,
                message: `Current Country : ${req.query.name}`
            }
            res. send(JSON. stringify(data))

        })
    }
)

app.get("/getNationCN", function(req, res){
        console. log(req. query)
        const queryname = decodeURI(req.query.name)
        console.log(queryname)
        console.log('************')
        axios.get(`https://restcountries.com/v3.1/translation/${req.query.name}`,{
            headers: {
                'Access-Control-Allow-Origin':'*', //Solve the cors header problem
                'Access-Control-Allow-Credentials':'true', //Solve the session problem
            }
        }).then(response=>{

            // console. log(response. data[0])
            const data = {
                code:200,
                data:response.data[0],
                message: `The current country is: ${req.query.name}`
            }
            res. send(JSON. stringify(data))

        })
    }
)

app.listen(3000,err=>{
    console.log('http://localhost:3000')
    if(!err) console.log('The server started successfully!!');
    else console. log(err);
})