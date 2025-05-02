const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const multer = require('multer');
const cloudinary = require('cloudinary');

const app = express();
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });
// Cloudinary configuration
cloudinary.v2.config({
    cloud_name: "djp1oiwpe",
    api_key: 264348425669867,
    api_secret: "9dzpJ_LwXZUSfDjHTdvPhbmjHPQ",
  });

const port = 3000;

const { v4: uuidv4, v4 } = require('uuid');

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
    const ans = result.find(e => e.crecheid == id);
        if (ans) {
            console.log(ans)
            res.send(ans);
        } else {
            res.status(404).send('Location not found');
        }
    
})







})

app.post('/login',(req,res)=>{
const { username, currentPassword } = req.body;
console.log(req.body,"this is body from login")
    fs.readFile('users.json', 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            res.status(500).send('Internal Server Error');
            return;
        }
        const users = JSON.parse(data);
        const user = users[username];
        console.log(user, "this is user from login");
        if (user && user.password === currentPassword) {
            if(user.crecheOwner==true){
                console.log("creche owner logged in")
                res.send({status:"crecheowner loggedin",
                    data:user
                })
            }
           else{
            console.log("logged in");
            res.send({status:"loggedin",
                data:user
            })
        }
        } else {
            console.log("wrong credentials ");
            res.send({status:"wrong credentials"})
        }
    });
})

app.post('/signin', (req, res) => {
    console.log(req.body);
    const { username, currentPassword,role,phoneNumber,location} = req.body;
 

    fs.readFile('users.json', 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            res.status(500).send('Internal Server Error');
            return;
        }
        const uid=uuidv4();
        const users = JSON.parse(data);
        const user = users[username];
        console.log(user, "this is user from signin");
        if (user && user.password === currentPassword) {
            if(user.crecheOwner==true){
                console.log("creche owner logged in")
                res.send({status:"crecheowner loggedin",
                    data:user,
                    id:user.id
                })
            }
           else{
            console.log("logged in");
            res.send({status:"user already exist",
                data:user,
                id:user.id

            })
        }
        } else {
            console.log("not logged in");
            const newUser = {
                userName: username,
                email: null,
                bookingHistory: null,
                currentBooking: null,
                profilePicture: null,
                phoneNumber:phoneNumber,
                password: currentPassword,
               crecheOwner:role=="crecheowner"?true:false,
               id:uid,
                location:role=="crecheowner"?location:null,

            }
            console.log(newUser, "this is new user from signin")
            users[username] = newUser;
                
            
fs.writeFile('users.json', JSON.stringify(users,null,2), (err) => {
            if (err) {
                console.error(err);
                res.status(500).send('Internal Server Error');
                return;
            }
            res.send({status:"signedin",data:newUser,id:uid});

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

app.post('/booking', (req, res) => {
    const crecheInfo = req.body.crecheInfo;
    const bookingDetails = req.body.bookingDetails;
    const userInfo = req.body.userInfo.User;
    let crecheName="";
    let crecheprice=0;
    
    const l=crecheInfo.location;
    const time=new Date().getHours()+":"+new Date().getMinutes()+":"+new Date().getSeconds();
const date=new Date().getDate()+"/"+new Date().getMonth()+"/"+new Date().getFullYear();

    fs.readFile('locationinfo.json', 'utf8', (err, data) => {
       let Data=JSON.parse(data);
        
const creche = Data[l].find(item => item.id == crecheInfo.id);
if (creche) {
    if (!creche.bookings) {
        creche.bookings = [];
    }
    creche.bookings.push(bookingDetails);

} else {
    console.log("Creche not found in location data");
    res.status(404).send('Creche not found');
    return;
}
const fullCrecheInfo=Data[l].find(item=>item.id=crecheInfo.id)
 crecheprice=fullCrecheInfo.price;
 crecheName=fullCrecheInfo.name;

// console.log(Data.Ambala[0].bookings);

fs.writeFile('locationinfo.json', JSON.stringify(Data,null,2), (err) => {
    if (err) {
        console.error(err);
        res.status(500).send('Internal Server Error');
        return;
    }
   
});



    })


fs.readFile('users.json', 'utf8', (err, userdata) => {
        if (err) {
            console.error(err);
            res.status(500).send('Internal Server Error');
            return;
        }
        const users = JSON.parse(userdata);
        const booking={
         date: date,
        time :time,
        location: crecheInfo.location,
        crecheName: crecheName,
        price: crecheprice,
        id:crecheInfo.id,
        }
        // console.log(users[userInfo.userName],"this is user from booking");
        // users[userInfo.userName].currentBooking=booking;
        users[userInfo.userName].bookingHistory.push(booking);
        users[userInfo.userName].currentBooking.push(booking);

        console.log(users[userInfo.userName].bookingHistory,"added")
        // users.user.bookingHistory.push(booking);
        // user.currentBooking=booking;

        fs.writeFile('users.json', JSON.stringify(users,null,2), (err) => {
            if (err) {
                console.error(err);
                res.status(500).send('Internal Server Error');
                return;
            }
            res.send("ok");
        });
        
    })
})

app.post('/registercreche', (req, res) => {
    const crecheInfo = req.body.data;
    const editing = req.body.editing;

    console.log(crecheInfo, "this is creche info from register creche");
    console.log(crecheInfo.location, "this is creche info from register creche")
  fs.readFile('locationinfo.json', 'utf8', (err, data) => {
    data = JSON.parse(data);
        if (err) {
            console.error(err);
            res.status(500).send('Internal Server Error');
            return;
        }
        if(editing==true){
            console.log("editing creche")
            const index = data[crecheInfo.location].findIndex(e => e.id == crecheInfo.id);
            if (index !== -1) {
                data[crecheInfo.location][index] = crecheInfo;
            }
        }
        else{
            crecheInfo.crecheid=uuidv4();


        data[crecheInfo.location].push(crecheInfo);
    }

        // console.log(data[crecheInfo.location], "this is data from register creche")
        // console.log(result,"this is result from add creche")
        fs.writeFile('locationinfo.json', JSON.stringify(data,null,2), (err) => {
            if (err) {
                console.error(err);
                res.status(500).send('Internal Server Error');
                return;
            }
            res.send("ok");
        });
  })
})

app.get('/registercreche', (req, res) => {
    console.log(req.query)
    // const username = req.query.username;
    // const password = req.query.password;
    const location = req.query.location;
    const id = req.query.id;
    console.log("rer")
    
    fs.readFile('locationinfo.json', 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            res.status(500).send('Internal Server Error');
            return;
        }
        const locations = JSON.parse(data);
        const locationData = locations[location];
        if (!locationData) {
            res.status(404).send('Location not found');
            return;
        }
        const result = locationData.find(item => item.userid == id);
        if (result) {
            res.send(result);
        } else {
            res.status(404).send('Creche not found');
        }
    });

});

app.post('/upload', upload.single('image'), async (req, res) => {
    if (!req.file) return res.status(400).send('No file uploaded.');
  
    try {
      const result =  cloudinary.v2.uploader.upload_stream(req.file.buffer, { resource_type: 'auto' });
      return res.status(201).json({ url: result.secure_url, public_id: result.public_id });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  });





app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});