import chase_logo from "../assets/images/logos/chase_logo.png";
import nhf_logo from "../assets/images/logos/nhf_logo.jpg";
import mohw_logo from "../assets/images/logos/mohw_lgo.png";

const Footer = () => {
  return (
    <div className="sponsor-images">
      <div className="sponsor-image">
        <img
          src={chase_logo}
          alt=""
          className="sponsor-image-img"
        />
      </div>
      <div className="sponsor-image">
        <img
          src={mohw_logo}
          alt=""
          className="sponsor-image-img"
        />
      </div>
      <div className="sponsor-image">
        <img
          src={nhf_logo}
          alt=""
          className="sponsor-image-img"
        />
      </div>
    </div>
  );
};

export default Footer
