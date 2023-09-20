import React from "react";
import Slider from "react-slick";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import styles from "../../../styles/Landing.module.css";

function CustomNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "#5E50A1",
        borderRadius: "100%",
        width: "35px",
        height: "35px",
        zIndex: "999",
        marginTop: "-50px"
      }}
      onClick={onClick}
    />
  );
}

function CustomPrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "#5E50A1",
        borderRadius: "100%",
        width: "35px",
        height: "35px",
        zIndex: "999",
        marginTop: "-50px"
      }}
      onClick={onClick}
    />
  );
}

export default function LandingCarousel({ data }) {
  console.log(data);
  const settings = {
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    swipeToSlide: true,
    infinite: true,
    pauseOnHover: true,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
    responsive: [
      {
        breakpoint: 1100,
        settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 650,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    // ${styles["slider-container"]}
    <div className={`w-100 `}>
      <h1 className="fw-bold text-center mb-5">
        Their opinion about Hire Jobs
      </h1>
      <Slider {...settings}>
        {data.map((res, index) => {
          console.log(res);
          return (
            <div className="w-100" key={index}>
              <div
                
                className="shadow p-4 mb-5 bg-body rounded mx-2"
                style={{ height: "350px" }}
              >
                <div
                  style={{
                    position: "relative",
                    height: 120,
                    width: 120,
                  }}
                  className="mx-auto"
                >
                  <Image
                        src={
                            res.image ? 
                            `https://drive.google.com/thumbnail?id=${res.image}&sz=s1080` : 
                            `https://ui-avatars.com/api/?name=${res.fullname}`
                        }
                        className="rounded-circle cover"
                        layout="fill"
                        alt="imgProfile"
                    />
                </div>
                <p className="text-center mt-2 fw-bold my-0">{res.fullname}</p>
                <p className="text-center text-secondary">
                  <small>{res.jobs}</small>
                </p>
                <p className="text-center">{res.opini}</p>
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
}
