require("dotenv").config();
const jwt = require("jsonwebtoken");
const db = require("../databases/db");

const verifyUser = async (req, res, next) => {
  try {
    const invitees_ref = req.body.invitees_ref;
    const verification_code = req.body.verification_code;
    //Run query to get day_id
    if (!invitees_ref || !verification_code) {
      throw new Error("Invalid inputs entered");
    }
    sql =
      "SELECT `id`, `email_token` from invitees WHERE email_address = ? OR phone_number=?";
    const query_one = await db.execute(sql, [invitees_ref, invitees_ref]);
    if (query_one[0].length > 0) {
      const invitees_id = query_one[0][0].id;
      const verify_patron = jwt.verify(
        query_one[0][0].email_token,
        process.env.JSON_SECRET_KEY
      );
      if (verify_patron) {
        //Check if pass code is valid
        if (verify_patron.verification_code == verification_code) {
          const token_expiry_time = new Date(verify_patron.expires);
          const current_time = new Date();
          //Check if code expired
          if (token_expiry_time.getTime() > current_time.getTime()) {
            req.invitees_id = invitees_id;
            next();
          } else {
            throw new Error("Verification code is expired. Return to verification");
          }
        } else {
          throw new Error("Verification code is invalid. Return to verification");
        }
      }
    } else {
      throw new Error("Invalid email or phone number entered");
    }
  } catch (err) {
    if (err.code == "ECONNREFUSED") {
      return res.json({ Error: "Database Error" });
    } else if (err.message == "jwt must be provided") {
      return res.json({ Error: "Invalid credentials provided" });
    } else if (err.message == "jwt malformed") {
      return res.json({ Error: "Invalid credentials provided" });
    }
    return res.json({ Error: err.message });
  }
};

module.exports = verifyUser;
