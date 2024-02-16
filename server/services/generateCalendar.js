const {ICalCalendar} = require('ical-generator'); 

async function getIcalObjectInstance(  
//   start_time,
//   end_time,
//   summary,
//   description,
//   location,
//   url,
//   name,
//   email
) {
  const cal = ICalCalendar({ name: "My test calendar event" });
  cal.domain("testing.com");
  const startTime = new Date();
  const endTime = new Date();
  endTime.setHours(startTime.getHours()+1);
  cal.createEvent({
    start:startTime,
    end: endTime,
    summary: "summary",
    description: "description",
    location: "location",
    url: 'https://serha.gov.jm',
    organizer: {
      name: "Kian O'Connor",
      email: "kian.oconnor.serha@gmail.com",
    },
  });
  return cal;
}

module.exports={
    getIcalObjectInstance
}
