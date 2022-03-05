const express = require('express'); 
const cors = require("cors");
const ticketConfig = require('./data/ticketLowcost.json')

const app = express();             
const port = 5000;      

const corsOptions ={
    origin:'*', 
    optionSuccessStatus:200,
 }
app.use(cors(corsOptions))


app.get('/ticketWizard/:type', (req, res) => {   
    const type= req.params.type
    const typeConfig = ticketConfig[type] || ''
    if(typeConfig){
       return res.json(typeConfig);  
    }
    return res.status(400).send({
        message: 'This is an error!'
     });
    

});

app.listen(port, () => { 
    console.log(`Now listening on port ${port}`); 
});