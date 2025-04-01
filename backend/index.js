const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');
const app = express();
const port = 3000;
app.use(express.json());

app.use(cors());

app.get('/getdata', (req, res) => {
    res.send("reached here");
});

app.get('/search', (req, res) => {
    let location=req.query.location
    console.log(location)
    console.log("mkm")
    res.send("reached kmkm");
});

app.get('/searchlocation/:location',(req,res)=>{
    console.log("reached here");
    let l=req.params.location;
    console.log(l);
    fs.readFile('locationinfo.json', 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            res.status(500).send('Internal Server Error');
            return;
        }
        const locations = JSON.parse(data);
        const result = locations[l];
        console.log(result);
        if (result) {
            console.log("njnjnj")
            res.send(result);
        } else {
            res.status(404).send('Location not found');
        }
    });
})

app.get('/biggercard',(req,res)=>{
    let id=req.query.id;
    let location=req.query.location

fs.readFile('locationinfo.json', 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            res.status(500).send('Internal Server Error');
            return;
        }
        const locations = JSON.parse(data);
        const result = locations[location];
    const ans = result.find(e => e.id == id);
        if (ans) {
            console.log(ans)
            res.send(ans);
        } else {
            res.status(404).send('Location not found');
        }
    
})







})

app.post('/signin', (req, res) => {
    console.log(req.body);
    const { username, password } = req.body;
    fs.readFile('users.json', 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            res.status(500).send('Internal Server Error');
            return;
        }
        const users = JSON.parse(data);
        const user = users[username];
        if (user && user === password) {
            console.log("logged in");
            res.send({status:"loggedin"})
        } else {
            console.log("not logged in");
            users[username] = password;
            // users.push({ username, password });
fs.writeFile('users.json', JSON.stringify(users), (err) => {
            if (err) {
                console.error(err);
                res.status(500).send('Internal Server Error');
                return;
            }
            res.send({status:"signedin"})

        }
        );
        }
    });
})

app.post('/updatereviews', (req, res) => {
    console.log("this is",req.body);
    const a= { username, newreviews,location,crecheName } = req.body;
    console.log(a.username,"this is username");
    console.log(a.newreviews,"this is new reviews");
    console.log(a.location,"this is location");
    console.log(a.crecheName,"this is creche name");
  console.log(a.newreviews,"tis jnk");    
    fs.readFile('locationinfo.json', 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            res.status(500).send('Internal Server Error');
            return;
        }
        const Data = JSON.parse(data);
        const locationToChange = Data[location];
        if (!locationToChange) {
            console.log("not found location from update review");
        } else {
            console.log("found location logged in");
            // users.push({ username, password });
            locationToChange.map((e,i)=>{

                if(e.name==crecheName){
                     e.reviews=a.newreviews ;
                    return;
                }
            })
fs.writeFile('locationinfo.json', JSON.stringify(Data,"nn",2), (err) => {
            if (err) {
                console.error(err);
                res.status(500).send('Internal Server Error');
                return;
            }
            res.send({ status: 'success' });
        });
        }
    });
    
}
)

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});