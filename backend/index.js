const express = require('express');
const app = express();
const PORT = 80 || process.env.PORT;
const User = require("./models/userInfo");


app.use(express.json());

require('./db/conn');  //  connection to db

app.post('/data', async (req, res) => {
    try {
        const newUser = new User({
          name: req.body.username,
          email: req.body.email,
            phone: req.body.phone,
          date:req.body.date
        });

        await newUser.save();
        console.log(newUser);
        res.status(200).send(newUser);
    } catch (err) {
        console.log(err);
    }
})





app.listen(PORT,  () => {
    console.log(`server is running at Port ${PORT}`);
});
