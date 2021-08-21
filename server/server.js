const express = require('express');
const dialogflow = require('@google-cloud/dialogflow');
const app = express();
const projectId = 'triny-assignment-kxxf';
const intentClient = new dialogflow.IntentsClient();

app.use('/', async(req,res)=>{
    res.setHeader('Access-Control-Allow-Origin', '*');
   
    try {
        const projectAgentPath = intentClient.projectAgentPath(projectId);
        const request = {
            parent: projectAgentPath
        }
        const [response] = await intentClient.listIntents(request);
        res.send(response);
    }catch(err){
        console.log(err);
        res.sendStatus(424);
    }
})

app.listen(3001, ()=>{
    console.log('server is runing at port 3001');
})