const nodemailer = require("nodemailer");
const transporter = nodemailer.createTransport({
    service: "gmail",
    auth:{
        user: "serha.board.retreat@gmail.com",
        pass: "isgb iyut dodx chty"
    },
})

//Need to check this

const sendEmail = async (req, res) =>{
    try{
        await transporter.sendMail(req.mailOptions, async(err, info)=>{
        if(err){
            throw new Error("Error sending email.");
        }
        return 1;
    })
    }catch(err){
        return 0
    }
    
}

module.exports = sendEmail