var express = require('express');
var router = express.Router();
const {sendNotification} = require("../utils/notification");

router.post("/",async(req,res) =>{
    try{
        await sendNotification("testTopic","notification title","notification message","https://miro.medium.com/fit/c/110/110/1*cVD4VRQlNGQdMDw0H8Pj1w.jpeg")

        res.status(200).json({
            status:true,
            msg:"Notification sent to 'testTopic' successfully."
        })

    }catch(err){
        console.log(err)
        return res.status(500).json({
            status:false,
            msg:err.message
        })
    }
})

module.exports = router;