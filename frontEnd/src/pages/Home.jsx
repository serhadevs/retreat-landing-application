import guest_speaker_image from "./assets/images/guest_speaker_image.jpeg";
import CountdownTimer from "./components/countdown_timer";
import EventMap from "./components/event_map";
import Navbar from "./components/navbar";
import "@fontsource/varela-round";
import { useEffect, useState } from "react";
import Carousel from "./components/carousel";
import Footer from "./components/footer";
import Agenda from "./components/agenda";
import RegisterModal from "./components/register_modal";

const Home = () => {
  const [displayModal, setDisplayModal] = useState(false);
  useEffect(() => {
    const welcome = document.querySelector(".welcome-container");
    const google_map = document.querySelector(".venue-map");
    const speaker_image = document.querySelector(".gs-left");
    const sponsors = document.querySelector(".sponsor-images");

    const options = {
      root: null,
      threshold: 0,
      rootMargin: "-150px",
    };

    const observer = new IntersectionObserver(function (entries) {
      entries.forEach((entry) => {
        // console.log(entry);
        if (entry.isIntersecting == true) {
          entry.target.classList.add("show");
          entry.target.style.opacity = 1;
        }
      });
    }, options);

    const observer2 = new IntersectionObserver(function (entries) {
      entries.forEach((entry) => {
        if (entry.isIntersecting == true) {
          entry.target.classList.add("show2");
          entry.target.style.opacity = 1;
        }
      });
    }, options);

    const observer3 = new IntersectionObserver(function (entries) {
      entries.forEach((entry) => {
        // console.log(entry);
        if (entry.isIntersecting == true) {
          entry.target.classList.add("show");
          entry.target.style.opacity = 1;
        }
      });
    });

    const observer4 = new IntersectionObserver(function (entries) {
      entries.forEach((entry) => {
        // console.log(entry);
        if (entry.isIntersecting == true) {
          entry.target.classList.add("show2");
          entry.target.style.opacity = 1;
        }
      });
    });

    observer.observe(welcome);
    observer2.observe(google_map);
    observer3.observe(speaker_image);
    observer4.observe(sponsors);
  }, []);

  const handleModal = () => {
    if (displayModal == true) {
      setDisplayModal(false);
    } else if (displayModal == false) {
      setDisplayModal(true);
    }
  };
  return (
    <>
      <div className="container">
        <div className="background-proper">
          <div className="top-section">
            {displayModal ? <RegisterModal handleModal={handleModal} /> : ""}
            <Navbar />
            <div className="welcome box">
              <div className="vert-line"></div>
              <div className="welcome-text">
                <div className="event-name">
                  SERHA&apos;s 3rd Annual Board of Directors&apos; Strategic
                  Management Retreat
                </div>
                <div className="theme">
                  Right Care at the Right Time: Expanding Access to Quality
                  Healthcare Delivery across the Region
                </div>
              </div>
              <CountdownTimer />
            </div>
            <div className="event-date box">
              <div className="left">
                <h2>March 20 - 22, 2024</h2>
                <p>Royalton Blue Waters Hotel in Trelawny</p>
              </div>
              <div className="right">
                <button className="agenda-button" onClick={handleModal}>
                  Register Here
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="container-body">
          <div className="welcome-message">
            <div className="agenda-image box">
              <div className="welcome-container">
                <div className="section-header sec-1 show-animate">
                  <div className="welcome-svg"></div>
                  <a id="agenda"></a>
                  <h2 className="animate">Welcome</h2>
                  <hr className="section-header-line" />
                </div>
                <div className="welcome-text2">
                  The secretariat of the Board Retreat Planning Committee warmly
                  welcomes you to the annual Board of Directors’ Strategic
                  Management Retreat for 2024. During your stay, we hope that
                  you will be refreshed by the activities and presentations
                  specifically tailored for you. Should you have any queries,
                  the following persons who form part of our committee, are
                  available to provide assistance. Please see their contact
                  information below:
                  <div className="welcome-list">
                    <ul>
                      <li>Ms. Stacey Ann Steele – (876) 537-9709</li>
                      <li>Ms. Joelle Gabbidon – (876) 548-5740</li>
                      <li>Ms. Kasheef Moore – (876) 539-2523</li>
                      <li>Ms. Kady-Ann Edwards – (876) 538 4420</li>
                      <li>Mr. Jaedon Dunkley – (876) 538-3821</li>
                      <li>Ms. Tameka Somers – (876) 538-5540</li>
                      <li>Mrs. Gloria Burke-Ellis – (876) 317-8967</li>
                    </ul>
                  </div>
                  For any medical emergencies please contact our Regional
                  Technical Director at (876) 317- 9588.
                </div>
              </div>
            </div>
          </div>
          <div className="agenda">
            <div className="section-header">
              <a id="agenda"></a>
              <h2>Agenda</h2>
              <hr className="section-header-line" />
            </div>
            <div className="agenda-flex-box">
              <Agenda />
            </div>
          </div>
          <div className="venue">
            <div className="section-header">
              <a id="venue_information"></a>
              <h3>The Venue</h3>
              <h2>Royalton Blue Waters Hotel in Trelawny</h2>
              <hr className="section-header-line" />
            </div>
            <EventMap />
          </div>
          <div className="guest-speaker">
            <div className="section-header">
              <a id="guest_speaker"></a>
              <h2>Meet Our Guest Speaker</h2>
              <hr className="section-header-line" />
            </div>
            <div className="guest-speaker-info">
              <div className="gs-left">
                {/* <a href="https://jm.linkedin.com/in/hugh-wong-90402674"> */}
                <img src={guest_speaker_image} alt="" className="gs-image" />
                {/* </a> */}
                <div className="gs-left-name">
                  Dr Hugh M. Wong BSc; MBBs; MSc; DM
                </div>
              </div>
              <div className="gs-right">
                Dr. Hugh Wong is the Head of Department of the Accident and
                Emergency Department at the Kingston Public Hospital (KPH) and
                was the Acting Regional Quality Assurance and Infection Control
                Co-Ordinator, KPH. Dr. Wong is a highly qualified consultant
                physician with 27 years of experience in the medical field. He
                is currently an Associate lecturer at the University of the West
                Indies in the Department of Surgery, Radiology, Anaesthesia and
                Intensive Care. He is also an adjunct lecturer for the
                postgraduate diploma in Emergency Medicine. <br />
                <br />
                His expertise has been engaged at the national level where he
                served as the Director of Emergency Medical Services with
                responsibility for Emergency Disaster and Special Services
                Branch, Ministry of Health and wellness and the Chairman of the
                National Resuscitation Council of Jamaica. His accomplishments
                have led him to sit on several boards. He is currently a board
                member and the Director of Emergency Cardiac Care at the Heart
                Foundation of Jamaica.
                <br />
                Dr. Wong is a dedicated and accomplished Physician Administrator
                with a proven track record of seamlessly integrating medical
                expertise with effective administrative leadership. Known for
                driving operational excellence, optimizing healthcare delivery,
                and fostering collaborative environments, he has used his skills
                in overseeing medical staff, implementing strategic initiatives,
                and ensuring regulatory compliance.
                <br />
                Dr. Wong enjoys cycling, travelling, reading and doing DIY
                projects at home. His life mantra is to make a positive impact
                on the lives of the persons that he comes in contact with.
              </div>
            </div>
          </div>
          <div className="previous-retreats">
            <a id="previous_retreats"></a>
            <div className="section-header">
              <h2>Previous Retreat Highlights</h2>
              <hr />
            </div>
            <Carousel />
          </div>
          <div className="clear"></div>
          <div className="footer">
            <div className="section-header">
              <a id="sponsors"></a>
              <h2>Sponsors</h2>
              <hr />
            </div>
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
