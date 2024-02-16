import { useEffect } from "react";
import carousel_image1 from '../assets/images/carousel/carousel_image1.jpg'
import carousel_image2 from '../assets/images/carousel/carousel_image2.jpg'
import carousel_image3 from '../assets/images/carousel/carousel_image3.jpg'
import carousel_image4 from '../assets/images/carousel/carousel_image4.jpg'
import carousel_image5 from '../assets/images/carousel/carousel_image5.jpg'
import carousel_image6 from '../assets/images/carousel/carousel_image6.jpg'
import carousel_image7 from '../assets/images/carousel/carousel_image7.jpg'
import carousel_image8 from '../assets/images/carousel/carousel_image8.jpg'
import carousel_image9 from '../assets/images/carousel/carousel_image9.jpg'
import carousel_image10 from '../assets/images/carousel/carousel_image10.jpg'



const Carousel = () => {
  useEffect(() => {
    let slider = document.querySelector(".slider .list");
    let items = document.querySelectorAll(".slider .list .item");
    let next = document.getElementById("next");
    let prev = document.getElementById("prev");
    let dots = document.querySelectorAll(".slider .dots li");

    let lengthItems = items.length - 1;
    let active = 0;
    next.onclick = function () {
      active = active + 1 <= lengthItems ? active + 1 : 0;
      reloadSlider();
    };
    prev.onclick = function () {
      active = active - 1 >= 0 ? active - 1 : lengthItems;
      reloadSlider();
    };
    let refreshInterval = setInterval(() => {
      next.click();
    }, 3000);

    function reloadSlider() {
      slider.style.left = -items[active].offsetLeft + "px";
      //
      let last_active_dot = document.querySelector(".slider .dots li.active");
      last_active_dot.classList.remove("active");
      dots[active].classList.add("active");

      clearInterval(refreshInterval);
      refreshInterval = setInterval(() => {
        next.click();
      }, 3000);
    }

    dots.forEach((li, key) => {
      li.addEventListener("click", () => {
        active = key;
        reloadSlider();
      });
    });
    window.onresize = function () {
      reloadSlider();
    };
  }, []);
  return (
    <div className="slider">
      <div className="list">
        <div className="item">
          <img src={carousel_image1} alt="" />
        </div>
        <div className="item">
          <img src={carousel_image2} alt="" />
        </div>
        <div className="item">
          <img src={carousel_image3} alt="" />
        </div>
        <div className="item">
          <img src={carousel_image4} alt="" />
        </div>
        <div className="item">
          <img src={carousel_image5} alt="" />
        </div>
        <div className="item">
          <img src={carousel_image6} alt="" />
        </div>
        <div className="item">
          <img src={carousel_image7} alt="" />
        </div>
        <div className="item">
          <img src={carousel_image8} alt="" />
        </div>
        <div className="item">
          <img src={carousel_image9} alt="" />
        </div>
        <div className="item">
          <img src={carousel_image10} alt="" />
        </div>
      </div>
      <div className="buttons">
        <button id="prev">&#8592;</button>
        <button id="next">&#8594;</button>
      </div>
      <ul className="dots">
        <li className="active"></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </div>
  );
};

export default Carousel;
