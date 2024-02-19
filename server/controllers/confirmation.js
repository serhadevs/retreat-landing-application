const db = require("../databases/db");
const jwt = require("jsonwebtoken");
const sendEmail = require("../services/sendEmail");
require("dotenv").config();
const confirmPatron = async (req, res, next) => {
  const getMailOptions = async ({ recipient, verification_code }) => {
    return await (mailOptions = {
      from: "serha.board.retreat@gmail.com",
      to: recipient,
      subject: "SERHA Board Retreat Verification Code",
      html: `<h2 style="text-align:center">Verification Code</h2><hr/><div>Good day,<br/><br/> Please use the following code to verify your email <b>${verification_code}</b> in the register section of registration form. Please note that this verification code will expire after twenty-four(24) hours. After expiration you will have to request another code.</div>`,
      dsn: {
        id: "123",
        return: "headers",
        notify: "success",
        recipient: "serha.board.retreat@gmail.com",
      },
    });
  };
  //Handle if req not defined
  const invitees_ref = req.params.invitees_ref;
  try {
    const sql =
      "SELECT `id`, `email_address` FROM invitees WHERE `email_address` = ? or `phone_number` = ?";
    query_one = await db.execute(sql, [invitees_ref, invitees_ref]);
    if (query_one[0].length > 0) {
      const invitees_id = query_one[0][0].id;
      currentTime = new Date();
      currentTime.setMinutes(currentTime.getMinutes() + 1440);

      expiry_date = new Date(currentTime);
      const verification_code =
        Math.floor(Math.random() * (parseInt(process.env.CODE_MAX_VALUE) - parseInt(process.env.CODE_MIN_VALUE)) + parseInt(process.env.CODE_MIN_VALUE)) + 1;
      email_token = await jwt.sign(
        {
          invitees_id: invitees_id,
          expires: expiry_date.getTime(),
          verification_code: verification_code,
        },
        process.env.JSON_SECRET_KEY
      );
      if (email_token) {
        sql2 = "UPDATE `invitees` SET email_token = ? WHERE id = ?";
        query_two = await db.execute(sql2, [email_token, invitees_id]);
        if (query_two[0].affectedRows > 0) {
            //Need to handle email
          await sendEmail({
            mailOptions: await getMailOptions({
              recipient: query_one[0][0].email_address,
              verification_code: verification_code,
            }),
          });
          return res.json({Status:"Success"});
        } else {
          throw new Error("Error providing verification code.");
        }
      } else {
        throw new Error("Error generating verification code");
      }
    } else {
      return res.json({ Error: "This email was not invited" });
    }
  } catch (err) {
    if (err.code == "ECONNREFUSED") {
      return res.json({ Error: "Database Error" });
    } 
    else {
      return res.json({ Error: err.message});
    }
  }
};

module.exports = confirmPatron;
