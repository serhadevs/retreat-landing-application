import { useState } from "react";

const Agenda = () => {
  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);
  const [show3, setShow3] = useState(false);

  const handleToggle = (index) => {
    if (index == 1) {
      if (show1 == false) {
        setShow1(true);
        setShow2(false);
        setShow3(false);
      } else if (show1 == true) {
        setShow1(false);
      }
    }

    if (index == 2) {
      if (show2 == false) {
        setShow2(true);
        setShow1(false);
        setShow3(false);
      } else if (show2 == true) {
        setShow2(false);
      }
    }

    if (index == 3) {
      if (show3 == false) {
        setShow3(true);
        setShow1(false);
        setShow2(false);
      } else if (show3 == true) {
        setShow3(false);
      }
    }
  };

  return (
    <div className="agenda-expandable">
      <div
        className="agenda-expandable-header"
        onClick={() => {
          handleToggle(1);
        }}
      >
        <p>+ Wednesday, March 20</p>
      </div>
      {show1 ? (
        <div className="agenda-expandable-content" id="agenda-content-1">
          <div className="agenda-expandable-content-text">
            <span className="agenda-time"> 9: 00 a.m. - 10:00 p.m </span>
            <span className="agenda-event"> Registration Secretariat </span>
            <hr className="agenda-expandable-content-hr" />
            <span className="agenda-time"> 10:00 a.m. - 10:00 a.m. </span>
            <span className="agenda-event"> Prayer </span>
            Dr. Samantha Nicholson Spence <br />
            Senior Medical Officer, Kingston Public Hospital
            <hr className="agenda-expandable-content-hr" />
            <span className="agenda-time"> 10:10 am – 10:20 am </span>
            <span className="agenda-event">Welcome/Recap of the Past Year</span>
            Mr. Errol Greene, Regional Director
            <br />
            <hr className="agenda-expandable-content-hr" />
            <span className="agenda-time"> 10:20 am – 10:40 am </span>
            <span className="agenda-event"> Purpose Statement </span>
            Board Chairman
            <hr className="agenda-expandable-content-hr" />
            <span className="agenda-time"> 10:40 am - 11:05 am </span>
            <span className="agenda-event"> Remarks </span>
            Mr. Dunstan Bryan, Permanent Secretary, Ministry of Health &
            Wellness
            <hr className="agenda-expandable-content-hr" />
            <span className="agenda-time"> 11:05 am - 11:35 am </span>
            <span className="agenda-event">
              Charge of the Board of Directors
            </span>
            Hon. Christopher Tufton,
            <br />
            Minister of Health and Wellness <br />
            <hr className="agenda-expandable-content-hr" />
            <span className="agenda-time"> 11:35 am - 11:50 am </span>
            <span className="agenda-event">
              Update from the Implementation Committee
            </span>
            Chairperson, Implementation Committee
            <hr className="agenda-expandable-content-hr" />
            <span className="agenda-time"> 11:50 am – 12:05 pm </span>
            <span className="agenda-event"> Discussion and Comments </span>
            Ms. Alicia King
            <hr className="agenda-expandable-content-hr" />
            <span className="agenda-time"> 12:05 pm – 1:05 pm </span>
            <span className="agenda-event"> </span>
            LUNCH
            <hr className="agenda-expandable-content-hr" />
            <span className="agenda-time"> 1:05 pm - 2:05 pm </span>
            <span className="agenda-event">
              Kingston & St. Andrew Strategic Focus for 2024/2025
            </span>
            Mr. Mark Martin, Parish Manager, Kingston and St. Andrew (KSA)
            <br />
            Dr. Susan Strachan-Johnson, Senior Medical Officer of Health, KSA
            <br />
            Mr. Anthony Wood, Chief Executive Officer, BHC
            <br />
            Mr. Dwayne Francis, Chief Executive Officer, Liguanea Region
            <br />
            <hr className="agenda-expandable-content-hr" />
            <span className="agenda-time"> 2:05 pm - 2:20 pm </span>
            <span className="agenda-event"> Discussion and Comments </span>
            Ms. Alicia King
            <hr className="agenda-expandable-content-hr" />
            <span className="agenda-time"> 2:20 pm - 3:20 pm </span>
            <span className="agenda-event">
              St. Joseph’s Hospital & KPH/VJH Strategic Focus for 2024/2025
            </span>
            Dr. Christopher Munroe, Chief Executive Officer, St. Joseph’s
            Hospital (Acting) <br />
            Dr. Natalie Whylie, Chief Executive Officer, KPH/VJH (Acting)
            <br />
            Dr. Samantha Nicholson Spence, Senior Medical Officer, KPH (Acting){" "}
            <br />
            Dr. Garth McDonald, Senior Medical Officer, Victoria Jubilee
            Hospital
            <hr className="agenda-expandable-content-hr" />
            <span className="agenda-time"> 3:20 pm - 3:35 pm </span>
            <span className="agenda-event"> Discussion and Comments </span>
            Ms. Alicia King
            <hr className="agenda-expandable-content-hr" />
            <span className="agenda-time"> 3:35 pm - 3:50 pm </span>
            <span className="agenda-event"> COFFEE BREAK </span>
            <hr className="agenda-expandable-content-hr" />
            <span className="agenda-time"> 3:50 pm - 4:20 pm </span>
            <span className="agenda-event">
              Technical Presentation: Identifying and Addressing Gaps in
              Healthcare Delivery to Ensure Patients Receive the Right Care at
              the Right Time across the Region
            </span>
            Dr. Sandra Chambers, Regional Technical Director
            <br />
            Nurse Marcia Thomas-Yetman, Regional Nursing Supervisor
            <hr className="agenda-expandable-content-hr" />
            <span className="agenda-time"> 4:20 pm - 4:35 pm </span>
            <span className="agenda-event"> Discussion and Comments </span>
            Ms. Alicia King
            <hr className="agenda-expandable-content-hr" />
            <span className="agenda-time"> 4:35 pm - 4:40 pm </span>
            <span className="agenda-event"> Vote of Thanks </span>
            Dr. Susan Wright
            <br />
            Assistant Regional Technical Director
            <hr className="agenda-expandable-content-hr" />
            <span className="agenda-time"> 5:00 pm – 7:00 pm </span>
            <span className="agenda-event"> BREAK </span>
            <hr className="agenda-expandable-content-hr" />
            <span className="agenda-time"> 7:00 pm – 9:00 pm </span>
            <span className="agenda-event">An Evening with the Chairman</span>
            Dress Code: Casually Elegant
            <br />
            Venue:
            <hr className="agenda-expandable-content-hr" />
            <span className="agenda-time"> 7:00 pm – 7:15 pm </span>
            <span className="agenda-event"> Welcome </span>
            Mr. Errol Greene
            <br />
            Regional Director
            <hr className="agenda-expandable-content-hr" />
            <span className="agenda-time"> 7:15 pm -9:00 pm </span>
            <span className="agenda-event"> Dinner with the Chairman </span>
            <hr className="agenda-expandable-content-hr" />
            9:00pm
            <br />
            End of Day One
          </div>
        </div>
      ) : (
        ""
      )}

      <div
        className="agenda-expandable-header"
        onClick={() => {
          handleToggle(2);
        }}
      >
        <p>+ Thursday, March 21</p>
      </div>
      {show2 ? (
        <div className="agenda-expandable-content" id="agenda-content-2">
          <div className="agenda-expandable-content-text">
            <div className="agenda-time">9:00 am – 9:30 am</div>
            <div className="agenda-event">Registration - Secretariat</div>
            <hr className="agenda-expandable-content-hr" />
            <div className="agenda-time">9:30 am – 9:40 am</div>
            <div className="agenda-event">Prayer</div>
            Ms. Pauline Roberts
            <br />
            Director, HR & IR
            <hr className="agenda-expandable-content-hr" />
            <div className="agenda-time">9:40 am – 9:50 am</div>
            <div className="agenda-event">A Review of Previous Day</div>
            Dr. Marsha James
            <hr className="agenda-expandable-content-hr" />
            <div className="agenda-time">9:50 am – 9:55am</div>
            <div className="agenda-event">
              Introduction of Guest Speaker: Dr. Hugh Wong
            </div>
            Dr. Samantha Walker
            <br />
            Regional Consultant
            <hr className="agenda-expandable-content-hr" />
            <div className="agenda-time">9:55 am – 10:25 am</div>
            <div className="agenda-event">Presentation of Guest Speaker</div>
            <hr className="agenda-expandable-content-hr" />
            <div className="agenda-time">10:25 am – 10:40 am</div>
            <div className="agenda-event">Discussion and Comments</div>
            Ms. Alicia King
            <hr className="agenda-expandable-content-hr" />
            <div className="agenda-time">10:40 am – 11:40 am</div>
            <div className="agenda-event">
              St. Catherine Strategic Focus for 2024/2025
            </div>
            Mr. Abdon Campbell, Parish Manager, St. Catherine
            <br />
            Dr. Francia Prosper Chen, Senior Medical Officer of Health, St.
            Catherine
            <br />
            Ms. Jacqueline Ellis, Chief Executive Officer, Spanish Town Hospital
            <br />
            Mrs. Camille Wallen-Panton, Chief Executive Officer, Linstead
            Hospital
            <hr className="agenda-expandable-content-hr" />
            <div className="agenda-time">11:40 am - 11:55 am</div>
            <div className="agenda-event">Discussion and Comments</div>
            Ms. Alicia King
            <hr className="agenda-expandable-content-hr" />
            <div className="agenda-time">11:55 am – 12:55 pm</div>
            <div className="agenda-event">LUNCH</div>
            <hr className="agenda-expandable-content-hr" />
            <div className="agenda-time">12:55 pm – 1:40 pm</div>
            <div className="agenda-event">
              St. Thomas Strategic Focus for 2024/2025
            </div>
            Mrs. Colleen Wright, Parish Manager, St. Thomas
            <br />
            Dr. Doyen Smith, Senior Medical Officer of Health, St. Thomas
            <br />
            Ms. Melecia Linton, Chief Executive Officer, Princess Margaret
            Hospital
            <hr className="agenda-expandable-content-hr" />
            <div className="agenda-time">1:40 pm-1:55 pm</div>
            <div className="agenda-event">Discussion and Comments</div>
            Ms. Alicia King
            <hr className="agenda-expandable-content-hr" />
            <div className="agenda-time">1:55 pm-2:10 pm</div>
            <div className="agenda-event">COFFEE BREAK</div>
            <hr className="agenda-expandable-content-hr" />
            <div className="agenda-time">2:10 pm-2:25 pm</div>
            <div className="agenda-event">
              Presentation: Building a Resilient and Skilled Workforce to
              Provide Quality Healthcare Access across the Region
            </div>
            Ms. Pauline Roberts
            <br />
            Director, HR & IR
            <hr className="agenda-expandable-content-hr" />
            <div className="agenda-time">2:25 pm- 2:40 pm</div>
            <div className="agenda-event">
              Presentation: Strategic Procurement to ensure Quality and
              Efficiency in Regional Healthcare Delivery
            </div>
            Ms. Roxanne Henlon
            <br />
            Senior Director of Public Procurement
            <hr className="agenda-expandable-content-hr" />
            <div className="agenda-time">2:40 pm-3:00 pm</div>
            <div className="agenda-event">
              Presentation: SERHA’s Strategic Future: The Role of its Managers
            </div>
            Mr. Andrew Condappa Director, Strategic Planning, Performance
            Monitoring and Evaluation
            <hr className="agenda-expandable-content-hr" />
            <div className="agenda-time">3:00 pm- 3:15 pm</div>
            <div className="agenda-event">Discussion and Comments</div>
            Ms. Alicia King
            <hr className="agenda-expandable-content-hr" />
            <div className="agenda-time">3:15 pm- 3:45 pm</div>
            <div className="agenda-event">
              Presentation: Regional Budget 2024/2025
            </div>
            Mrs. Sophia Moodie Reid, Director of Finance
            <br />
            Ms. K’Trina Brown, Chief Accountant
            <hr className="agenda-expandable-content-hr" />
            <div className="agenda-time">3:45 pm - 4:00 pm</div>
            <div className="agenda-event">Discussion and Comments</div>
            Ms. Alicia King
            <hr className="agenda-expandable-content-hr" />
            <div className="agenda-time">4:00 pm - 4:15 pm</div>
            <div className="agenda-event">Closing Remarks</div>
            Board Chairman
            <hr className="agenda-expandable-content-hr" />
            <div className="agenda-time">4:15 pm- 4:20 pm</div>
            <div className="agenda-event">Vote of Thanks</div>
            Mr. Damion Dunbar
            <br />
            Audit Manager
            <hr className="agenda-expandable-content-hr" />
            <div className="agenda-time">4:20 pm</div>
            <div className="agenda-event">End of Day Two</div>
            <hr className="agenda-expandable-content-hr" />
          </div>
        </div>
      ) : (
        ""
      )}
      <div className="agenda-expandable-header" onClick={()=>{handleToggle(3)}}>
        <p>+ Friday, March 22</p>
      </div>
      {show3 ? (
        <div className="agenda-expandable-content" id="agenda-content-3">
          <div className="agenda-expandable-content-text">
            <div className="agenda-time">8:30 am – 11:30 am</div>
            <div className="agenda-event">Board Meeting</div>
            <hr className="agenda-expandable-content-hr" />
            <div className="agenda-time">11:30 am – 12:00 pm</div>
            <div className="agenda-event">CHECK OUT</div>
            <hr className="agenda-expandable-content-hr" />
            <div className="agenda-time">12:00 pm</div>
            <div className="agenda-event">LUNCH & DEPARTURE</div>
            <hr className="agenda-expandable-content-hr" />
            <div className="agenda-event">End of Day Three</div>
            <hr className="agenda-expandable-content-hr" />
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Agenda;
