import express from 'express';
//import cors from 'cors';
//Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser 

const app = express();
app.use(express.json())

app.get('/', function(req, res)
{
    res.sendFile(__dirname + '/index.html');
});

app.listen(3334, () => console.log('front running on port 3334'));

