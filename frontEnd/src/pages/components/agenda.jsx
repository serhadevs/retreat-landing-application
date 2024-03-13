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
            <span className="agenda-time"> 9: 30 a.m. - 10:00 a.m </span>
            <span className="agenda-event"> Registration Secretariat </span>
            <hr className="agenda-expandable-content-hr" />
            <span className="agenda-time"> 10:00 a.m. - 10:05 a.m. </span>
            <span className="agenda-event"> Prayer </span>
            Dr. Samantha Nicholson Spence <br />
            Senior Medical Officer, Kingston Public Hospital
            <hr className="agenda-expandable-content-hr" />
            <span className="agenda-time"> 10:05 am – 10:20 am </span>
            <span className="agenda-event">Welcome/Recap of the Past Year</span>
            Mr. Errol Greene, Regional Director
            <br />
            <hr className="agenda-expandable-content-hr" />
            <span className="agenda-time"> 10:20 am – 10:40 am </span>
            <span className="agenda-event"> Purpose Statement </span>
            Mr. Wentworth Charles, Board Chairman
            <hr className="agenda-expandable-content-hr" />
            {/* <span className="agenda-time"> 10:40 am - 11:30 am </span>
            <span className="agenda-event"> Remarks </span>
            Mr. Dunstan Bryan, Permanent Secretary, Ministry of Health &
            Wellness
            <hr className="agenda-expandable-content-hr" /> */}
            <span className="agenda-time"> 10:40 am - 11:30 am </span>
            <span className="agenda-event">
              Charge of the Board of Directors
            </span>
            Hon. Christopher Tufton,
            <br />
            Minister of Health and Wellness <br />
            <hr className="agenda-expandable-content-hr" />
            <span className="agenda-time"> 11:30 am - 12:15 am </span>
            <span className="agenda-event">
              Update from the Implementation Committee
            </span>
            Mrs. Kathy Smith Hylton, Chairperson, Implementation Committee
            <br /> Ms. Aneika Angus, Project Officer, MyHR+
            <br />
            Mr. Lascelles Brown, Director, Operations & Maintenance
            <br /> Mrs. Sophia Moodie Reid, Director of Finance
            <hr className="agenda-expandable-content-hr" />
            <span className="agenda-time"> 12:15 pm – 12:30 pm </span>
            <span className="agenda-event"> Discussion and Comments </span>
            Ms. Alicia King
            <hr className="agenda-expandable-content-hr" />
            <span className="agenda-time"> 12:30 pm – 1:30 pm </span>
            <span className="agenda-event"> LUNCH</span>
            <hr className="agenda-expandable-content-hr" />
            <span className="agenda-time"> 1:30 pm - 2:00 pm </span>
            <span className="agenda-event">
              Presentation: Integrated Healthcare Management Platforms &
              Software: Enabling Coordinated Care and Efficient Operations
            </span>
            Mr. Tywayne Buchanan
            <br />
            Senior Software Engineer
            <br />
            <hr className="agenda-expandable-content-hr" />
            <span className="agenda-time"> 2:00 pm - 2:15 pm </span>
            <span className="agenda-event"> Discussion and Comments </span>
            Ms. Alicia King
            <hr className="agenda-expandable-content-hr" />
            <span className="agenda-time"> 2:15 pm - 3:15 pm </span>
            <span className="agenda-event">
              KPH/VJH & St. Joseph’s Hospital Strategic Focus for 2024/2025
            </span>
            Dr. Natalie Whylie, Chief Executive Officer, KPH/VJH (Acting)
            <br />
            Dr. Samantha Nicholson Spence, Senior Medical Officer, KPH (Acting){" "}
            <br />
            Dr. Garth McDonald, Senior Medical Officer, Victoria Jubilee
            Hospital
            <br />
            Dr. Christopher Munroe, Chief Executive Officer, St. Joseph’s
            Hospital (Acting)
            <hr className="agenda-expandable-content-hr" />
            <span className="agenda-time"> 3:15 pm - 3:30 pm </span>
            <span className="agenda-event"> Discussion and Comments </span>
            Ms. Alicia King
            <hr className="agenda-expandable-content-hr" />
            {/* <span className="agenda-time"> 3:35 pm - 3:50 pm </span>
            <span className="agenda-event"> COFFEE BREAK </span>
            <hr className="agenda-expandable-content-hr" /> */}
            <span className="agenda-time"> 3:30 pm - 4:30 pm </span>
            <span className="agenda-event">
              Kingston & St. Andrew Strategic Focus 2024/2025
            </span>
            Mr. Mark Martin, Parish Manager, Kingston and St. Andrew (KSA)
            <br />
            Dr.Susan Strachan-Johnson, Senior Medical Officer of Health, KSA{" "}
            <br />
            Mr.Anthony Wood, Chief Executive Officer, BHC
            <br />
            Mr. Dwayne Francis, Chief Executive Officer, Liguanea Region
            <hr className="agenda-expandable-content-hr" />
            <span className="agenda-time"> 4:30 pm - 4:45 pm </span>
            <span className="agenda-event"> Discussion and Comments </span>
            Ms. Alicia King
            <hr className="agenda-expandable-content-hr" />
            <span className="agenda-time"> 4:45 pm - 4:50 pm </span>
            <span className="agenda-event"> Vote of Thanks </span>
            Mr. Maurice Matthews, Senior Project Manager
            <hr className="agenda-expandable-content-hr" />
            {/* <span className="agenda-time"> 4:50 pm – 7:00 pm </span>
            <span className="agenda-event"> BREAK </span>
            <hr className="agenda-expandable-content-hr" />
            <span className="agenda-time"> 7:00 pm – 9:00 pm </span>
            <span className="agenda-event">An Evening with the Chairman</span>
            Dress Code: Casually Elegant
            <br />
            Venue: THe Pavilion (by the beach - Royalton Blue Waters)
            <hr className="agenda-expandable-content-hr" />
            <span className="agenda-time"> 7:00 pm – 7:15 pm </span>
            <span className="agenda-event"> Welcome </span>
            Mr. Wentworth Charles
            <br />
            Board Chairman
            <hr className="agenda-expandable-content-hr" />
            <span className="agenda-time"> 7:15 pm -9:00 pm </span>
            <span className="agenda-event"> Dinner with the Chairman </span>
            <hr className="agenda-expandable-content-hr" /> */}
            <span className="agenda-time">4:50 p.m</span>
            <span className="agenda-event"> End of Day One </span>
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
            <div className="agenda-time">9:30 am – 10:00 am</div>
            <div className="agenda-event">Registration - Secretariat</div>
            <hr className="agenda-expandable-content-hr" />
            <div className="agenda-time">10:00 am – 10:05 am</div>
            <div className="agenda-event">Prayer</div>
            Ms. Pauline Roberts
            <br />
            Director, HR
            <hr className="agenda-expandable-content-hr" />
            <div className="agenda-time">10:05 am – 10:20 am</div>
            <div className="agenda-event">A Review of Previous Day</div>
            Dr. Susan Wright
            <br />
            Assistant Regional Technical Director
            <hr className="agenda-expandable-content-hr" />
            <div className="agenda-time">10:20 am – 10:25 am</div>
            <div className="agenda-event">
              Introduction of Guest Speaker: Dr. Hugh Wong
            </div>
            Ms.Shuwana Johnson
            <br />
            Public Relations Manager
            <hr className="agenda-expandable-content-hr" />
            <div className="agenda-time">10:25 am – 10:55 am</div>
            <div className="agenda-event">
              Presentation of Guest Speaker: Emergency Insight - The Chaotic
              Symphony of The Emergency Department Revealed
            </div>
            Dr. Hugh Wong <br />
            Head of Department, Accident & Emergency Department
            <br />
            KPH
            <hr className="agenda-expandable-content-hr" />
            <div className="agenda-time">10:55 am – 11:10 am</div>
            <div className="agenda-event">Discussion and Comments</div>
            Ms. Alicia King
            <hr className="agenda-expandable-content-hr" />
            <div className="agenda-time">11:10 am – 11:40 am</div>
            <div className="agenda-event">
              Presentation: SERHA&apos;s Strategic Plan 2024/2025: One SERHA,
              One Plan
            </div>
            Mr. Andrew Condappa Director,
            <br />
            Strategic Planning, Performance Monitoring and Evaluation
            <hr className="agenda-expandable-content-hr" />
            <div className="agenda-time">11:40 am - 12:10 am</div>
            <div className="agenda-event">
              Presentation: Reorganization of the Region
            </div>
            Mr. Rohan Maynard, HR Consultant
            <hr className="agenda-expandable-content-hr" />
            <div className="agenda-time">12:10 pm - 12:25 pm</div>
            <div className="agenda-event">Discussion and Comments</div>
            Ms. Alicia King
            <hr className="agenda-expandable-content-hr" />
            <div className="agenda-time">12:25 am – 1:25 pm</div>
            <div className="agenda-event">LUNCH</div>
            <hr className="agenda-expandable-content-hr" />
            <div className="agenda-time">1:25 pm – 2:25 pm</div>
            <div className="agenda-event">
              St. Catherine Strategic Focus for 2024/2025
            </div>
            Mr. Abdon Campbell, Parish Manager, St. Catherine
            <br />
            Dr. Francia Prosper Chen, Senior Medical Officer of Health, St.
            Catherine
            <br /> Ms. Jacqueline Ellis, Chief Executive Officer, Spanish Town
            Hospital <br />
            Mrs. Camille Wallen-Panton, Chief Executive Officer, Linstead
            Hospital
            <hr className="agenda-expandable-content-hr" />
            <div className="agenda-time">2:25 pm-2:40 pm</div>
            <div className="agenda-event">Discussion and Comments</div>
            Ms. Alicia King
            <hr className="agenda-expandable-content-hr" />
            <div className="agenda-time">2:40 pm – 3:40 pm</div>
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
            <div className="agenda-time">3:40 pm- 3:55 pm</div>
            <div className="agenda-event">Discussion and Comments</div>
            Ms. Alicia King
            <hr className="agenda-expandable-content-hr" />
            <div className="agenda-time">3:55 pm-4:10 pm</div>
            <div className="agenda-event">COFFEE BREAK</div>
            <hr className="agenda-expandable-content-hr" />
            <div className="agenda-time">4:10 pm-4:30 pm</div>
            <div className="agenda-event">
              Presentation: Regional Budget 2024/2025
            </div>
            Mrs. Sophia Moodie Reid, Director of Finance <br />
            Ms. Ktrina Brown, Chief Accountant
            <hr className="agenda-expandable-content-hr" />
            <div className="agenda-time">4:30 pm- 4:45 pm</div>
            <div className="agenda-event">Discussion and Comments</div>
            Ms. Alicia King
            <hr className="agenda-expandable-content-hr" />
            <div className="agenda-time">4:45 pm-4:55 pm</div>
            <div className="agenda-event">Way Forward and Closing Remarks</div>
            Wentworth Charles
            <br />
            Board Chairman
            <hr className="agenda-expandable-content-hr" />
            <div className="agenda-time">4:55 pm- 5:00 pm</div>
            <div className="agenda-event">Vote of Thanks</div>
            Mr. Damion Dunbar
            <br />
            Audit Manager
            <hr className="agenda-expandable-content-hr" />
            <div className="agenda-time">5:00 pm</div>
            <div className="agenda-event">End of Day Two</div>
            <hr className="agenda-expandable-content-hr" />
          </div>
        </div>
      ) : (
        ""
      )}
      <div
        className="agenda-expandable-header"
        onClick={() => {
          handleToggle(3);
        }}
      >
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
