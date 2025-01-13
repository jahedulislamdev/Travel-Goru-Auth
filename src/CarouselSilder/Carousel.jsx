import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import './Carousel.css'
import { FaLongArrowAltRight } from "react-icons/fa";
import { Link } from "react-router-dom";
const Carousel = () => {
   const carouselImages = [
      {
         id: 1,
         background: "https://i.postimg.cc/qqDP6Gqx/Rectangle-1.png",
         title: "Most Populer sea Beach",
         description: "Cox's Bazar is a city, fishing port, tourism centre and district headquarters in southeastern Bangladesh. It is famous mostly for its long natural sandy beach, and it ...."
      },
      {
         id: 2,
         background: "https://i.postimg.cc/2S89LVcL/Rectangle-26.png",
         title: "premium Hotel View",
         description: "Cox's Bazar is a city, fishing port, tourism centre and district headquarters in southeastern Bangladesh. It is famous mostly for its long natural sandy beach, and it ...."
      },
      {
         id: 3,
         background: "https://i.postimg.cc/28xX54wf/Rectangle-27.png",
         title: "Premium Hotel View",
         description: "Cox's Bazar is a city, fishing port, tourism centre and district headquarters in southeastern Bangladesh. It is famous mostly for its long natural sandy beach, and it ...."
      },
      {
         id: 4,
         background: "https://i.postimg.cc/htyyLc6y/Rectangle-28.png",
         title: "Forest Restaurent View",
         description: "Cox's Bazar is a city, fishing port, tourism centre and district headquarters in southeastern Bangladesh. It is famous mostly for its long natural sandy beach, and it ...."
      }
   ];
   const settings = {
      customPaging: function (i) {
         return (
            <a href="#">
               <img src={carouselImages[i].background} alt="carousel" className="h-12 w-20 object-center object-cover" />
            </a>
         );
      },
      dots: true,
      dotsClass: "slick-dots slick-thumb",
      infinite: true,
      speed: 800,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
      cssEase: "linear",
   };
   return (
      <Slider {...settings} className="h-dvh overflow-hidden">
         {carouselImages.map((image, index) => (
            <div key={index} className="h-dvh w-full">
               <div style={{ backgroundImage: `url(${image.background})` }} className="h-dvh w-full bg-no-repeat bg-center bg-cover">
                  <div className="h-dvh bg-black text-white flex bg-opacity-50 justify-center flex-col">
                     <h1 className="text-white text-3xl md:text-5xl lg:text-7xl font-bold mb-3 ms-10">{image.title}</h1>
                     <p className="text-white md:w-1/2 text-sm font-light ms-10">{image.description}</p>
                     <Link to={'/'} className="ms-10 font-light mt-7"><button className="bg-yellow-600 px-4 text-lg py-2 rounded flex items-center justify-center">Booking <FaLongArrowAltRight className="mt-1 ms-1" /></button></Link>
                  </div>
               </div>
            </div>
         ))}
      </Slider>
   );
};

export default Carousel;