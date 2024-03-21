// import { useState, useEffect } from "react";

const CountdownTimer = () => {
  // const [seconds, setSeconds] = useState(0);
  // const [minutes, setMinutes] = useState(0);
  // const [hours, setHours] = useState(0);
  // const [days, setDays] = useState(0);

  // useEffect(() => {
  //   const eventDate = new Date("March 20, 2024 00:00:00");
  //   const currentDate = new Date().getTime();

  //   const distance = eventDate - currentDate;

  //   setDays(Math.floor(distance / (1000 * 60 * 60 * 24)).toString());
  //   setHours(
  //     Math.floor(
  //       (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  //     ).toString()
  //   );
  //   setMinutes(
  //     Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)).toString()
  //   );
  //   setSeconds(Math.floor((distance % (1000 * 60)) / 1000).toString());

  //   setInterval(() => {
  //     const currentDate = new Date().getTime();

  //     const distance = eventDate - currentDate;

  //     setDays(Math.floor(distance / (1000 * 60 * 60 * 24)).toString());
  //     setHours(
  //       Math.floor(
  //         (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  //       ).toString()
  //     );
  //     setMinutes(
  //       Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)).toString()
  //     );
  //     setSeconds(Math.floor((distance % (1000 * 60)) / 1000));
  //   }, 1000);
  //   // alert(currentDate);
  // }, []);
  return (
    <div className="counter-container">
      <div className="counter-header">Time to retreat</div>
      <div className="counter">
        <div className="counter-section">
          <div className="counter-numbers">
            <div className="counter-numbers-left" id="days-left">
              {/* {days.toString().charAt(1) ? days.toString().charAt(0) : 0} */}
              0
            </div>
            <div className="counter-numbers-right" id="days-right">
              0
              {/* {days.toString().charAt(1)
                ? days.toString().charAt(1)
                : days.toString().charAt(0)} */}
            </div>
          </div>
          <div className="counter-name">Days</div>
        </div>
        <div className="counter-comma">:</div>
        <div className="counter-section">
          <div className="counter-numbers">
            <div className="counter-numbers-left" id="hours-left">
              {/* {hours.toString().charAt(1) ? hours.toString().charAt(0) : 0} */}
              0
            </div>
            <div className="counter-numbers-right" id="hours-right">
              {/* {hours.toString().charAt(1)
                ? hours.toString().charAt(1)
                : hours.toString().charAt(0)} */}
              0
            </div>
          </div>
          <div className="counter-name">Hours</div>
        </div>
        <div className="counter-comma">:</div>
        <div className="counter-section">
          <div className="counter-numbers">
            <div className="counter-numbers-left" id="minutes-left">
              {/* {minutes.toString().charAt(1) ? minutes.toString().charAt(0) : 0} */}
              0
            </div>
            <div className="counter-numbers-right" id="minutes-right">
              {/* {minutes.toString().charAt(1)
                ? minutes.toString().charAt(1)
                : minutes.toString().charAt(0)} */}
              0
            </div>
          </div>
          <div className="counter-name">Mins</div>
        </div>
        <div className="counter-comma">:</div>
        <div className="counter-section">
          <div className="counter-numbers">
            <div className="counter-numbers-left" id="seconds-left">
              {/* {seconds.toString().charAt(1) ? seconds.toString().charAt(0) : 0} */}
              0
            </div>
            <div className="counter-numbers-right" id="seconds-right">
              {/* {seconds.toString().charAt(1)
                ? seconds.toString().charAt(1)
                : seconds.toString().charAt(0)} */}
              0
            </div>
          </div>
          <div className="counter-name">Secs</div>
        </div>
      </div>
    </div>
  );
};

export default CountdownTimer;
