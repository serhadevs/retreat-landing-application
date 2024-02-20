const db = require("../databases/db");
const sendEmail = require("../services/sendEmail");

const register = async (req, res) => {
  const getMailOptions = async ({
    recipient,
    first_name,
    last_name,
    day_1,
    day_2,
    day_3,
    day_1_pass,
    day_2_pass
  }) => {
    mailOptions = {
      from: "serha.board.retreat@gmail.com",
      to: recipient,
      subject: "Registration for SERHA's Board Retreat",
      html: `<h2 style="text-align:center">Registration for Serha's Board Retreat</h2><hr/>
      <div>
      Dear ${first_name} ${last_name},<br/>
      <br/>
      Thank You!<br/>
      <br/>
      You have been registered for the 2024/2025 Strategic Management Retreat by the South East Regional Health Authority (SERHA) at the Royalton Blue Waters Hotel for the following days:
      <ul>
      ${
        day_1 == "1"
          ? `<li>March 20, 2024` +
            (day_1_pass == "1"
              ? " - Day Pass"
              : day_1_pass == "2"
              ? " - Overnight"
              : "") +
            `</li>`
          : ""
      }
      ${
        day_2 == "2"
          ? `<li>March 21, 2024` +
            (day_2_pass == "1"
              ? " - Day Pass"
              : day_2_pass == "2"
              ? " - Overnight"
              : "") +
            `</li>`
          : ""
      }
      ${day_3 == "3" ? `<li>March 22, 2024</li>` : ""}
      </ul> 
      <br/> 
      We look forward to seeing you!
      <br/>
      </div>`,
    };
    return mailOptions;
  };
  try {
    const id = req.invitees_id;
    if (id) {
      //check if patron already registered
      sql0 = "SELECT * FROM attendance WHERE `invitees_id` = ?";
      const query_zero = await db.execute(sql0, [id]);
      //check if already registered
      if (query_zero[0].length == 0) {
        sql =
          "SELECT a.`first_name`, a.`last_name`, a.`email_address`, a.`phone_number`, a.`id`, b.`day_1`,b.`day_2`,b.`day_3`, c.`day_1_pass`, c.`day_2_pass` FROM invitees as a, invitees_days as b, invitees_passes as c WHERE a.id = b.invitees_id AND a.id = c.invitees_id AND a.id=?";
        const query_one = await db.execute(sql, [id]);
        if (query_one[0].length > 0) {
          sql2 =
            "INSERT into attendance(`invitees_id`, `created_at`) VALUES(?, ?)";
          const query_two = await db.execute(sql2, [id, new Date()]);
          if (query_two[0].affectedRows > 0) {
            sql3 =
              "UPDATE `invitees` SET `registered_status`=1, updated_at= ? WHERE `id`=?";
            query_three = await db.execute(sql3, [new Date(), id]);
            if (query_three[0].affectedRows > 0) {
              await sendEmail({
                mailOptions: await getMailOptions({
                  recipient: query_one[0][0].email_address,
                  first_name: query_one[0][0].first_name,
                  last_name: query_one[0][0].last_name,
                  day_1: query_one[0][0].day_1,
                  day_2: query_one[0][0].day_2,
                  day_3: query_one[0][0].day_3,
                  day_1_pass: query_one[0][0].day_1_pass,
                  day_2_pass: query_one[0][0].day_2_pass,
                }),
              });
              return res.json({
                Status: "Success",
              });
            } else {
              throw new Error("An error occurred while registering");
            }
          } else {
            throw new Error("Error updating status");
          }
        } else {
          throw new Error("Invalid credentials entered controller");
        }
      } else {
        throw new Error("You have already been registered");
      }
    } else {
      throw new Error("Invalid input");
    }
  } catch (err) {
    if (err.code == "ECONNREFUSED") {
      return res.json({ Error: "Database Error." });
    }
    return res.json({ Error: err.message });
  }
};

// const markPresent = async (req, res) => {
//   const day_id = req.day_id;
//   const invitees_id = req.invitees_id;

//   try {
//     sql = "SELECT `name`, `date` FROM days WHERE `id` = ?";
//     //Get the day_name for the day the person is marking themselves present for
//     const query_one = await db.execute(sql, [day_id]);

//     if (query_one[0].length > 0) {
//       const day_name = query_one[0][0].name;
//       var invited = false;
//       sql2 =
//         "SELECT `" + day_name + "` from invitees_days WHERE invitees_id = ?";
//       //Check if patron was invited to this day of the retreat
//       query_two = await db.execute(sql2, [invitees_id]);
//       if (query_two[0].length > 0) {
//         if (day_name == "day_1") {
//           if (parseInt(query_two[0][0].day_1) == 1) {
//             invited = true;
//           }
//         } else if (day_name == "day_2") {
//           if (query_two[0][0].day_2 == 2) {
//             invited = true;
//           }
//         } else if (day_name == "day_3") {
//           if (query_two[0][0].day_3 == 3) {
//             invited = true;
//           }
//         }
//         if (invited) {
//           //Check if the person has registered themselves for the retreat
//           sql3 = "SELECT `day_2` FROM attendance WHERE invitees_id = ?";
//           query_three = await db.execute(sql3, [invitees_id]);
//           if (query_three[0].length > 0) {
//             //check if person was already marked present
//             var alreadyMarked = false;
//             if (day_name == "day_1") {
//               if (parseInt(query_three[0][0].day_1) == 1) {
//                 alreadyMarked = true;
//               }
//             } else if (day_name == "day_2") {
//               if (query_three[0][0].day_2 == 2) {
//                 alreadyMarked = true;
//               }
//             } else if (day_name == "day_3") {
//               if (query_three[0][0].day_3 == 3) {
//                 alreadyMarked = true;
//               }
//             }
//             if (!alreadyMarked) {
//               sql4 =
//                 "UPDATE attendance SET `" +
//                 day_name +
//                 "`=?, updated_at = ? WHERE `invitees_id`=?";
//               query_four = await db.execute(sql4, [
//                 day_id,
//                 new Date(),
//                 invitees_id,
//               ]);
//               //Check if database was undated
//               if (query_four[0].affectedRows > 0) {
//                 return res.json({
//                   Status:
//                     "You have been marked present for " +
//                     query_one[0][0].date.toLocaleDateString("en-us") +
//                     "",
//                 });
//               }
//             } else {
//               throw new Error("You have already been marked present");
//             }
//           } else {
//             throw new Error("You have not yet registered");
//           }
//           if (query_three[0].length) {
//           }
//         } else {
//           throw new Error("Patron was not invited to this day of the event");
//         }
//       } else {
//         throw new Error("You were not invited to this day of the event");
//       }
//       //Check if user was actually invited to this day of the event
//     } else {
//       throw new Error("Incorrect Event Day value entered");
//     }
//   } catch (err) {
//     if (err.code == "ECONNREFUSED") {
//       res.json({ Error: "Database Error" });
//     } else {
//       return res.json({ Error: err.message });
//     }
//   }
// };

module.exports = {
  register,
  // markPresent,
};
