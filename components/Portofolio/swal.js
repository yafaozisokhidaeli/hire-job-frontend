// import Head from "next/head";
import React from "react";
// import styles from "./porto.module.css";
import Image from "next/image";
// import { useRouter } from "next/router";
// import Cookies from "js-cookie";
// import Swal from "sweetalert2";
// import axios from "axios";
import Link from "next/link";

const Portofolio = ({ data }) => {
  return (
    <div>
      <div className="column align-items-center g-1">
        {data?.map((item, index) => {
          // setIdPort(item)
          return (
            <div className="col-lg-10 categories border ms-lg-5 mb-1" key={index}>
                <span
                  // href="/category/{category[0].id}"
                  className="d-flex ms-auto "
                >
                  <h4 className="font-category fw-1 m-auto">{item.name_app}</h4>
                </span>
                <div className="d-flex justify-content-center mt-2">
                    <Link href={item.repository} className="btn btn-primary w-50 ">Link Repository</Link>

                </div>
              {/* <div
                className={`${styles.card_custom} card text-center d-flex flex-column row p-0`}
              > */}
              <div className="row">
                {item?.image?.map((image, index) => {
                  console.log(image)
                  return (
                    <div className="col-5 m-auto mt-5" key={index}>
                      <Image
                        className="mb-2"
                        src={image}
                        width="10"
                        height={10}
                        fill='cover'
                        layout="responsive"
                        alt="portofolio"
                      />
                    </div>
                  );
                })}
              </div>
            </div>

            // </div>
          );
        })}
        {/* {
          data[0]?.image.map((image, index) =>{
            return(
              <div key={index} className="col categories">
              <Image
                    key={index}
                    className={`${styles.img}`}
                    src={image}
                    width="1"
                    height={1}
                    layout="responsive"
                    alt="portofolio"
                  />
            </div>
            )
          })
        } */}
        {/* <div className="col categories">
          <div
            className={`card ${styles.card_custom} text-center d-flex flex-colum`}
          >
            <Image
              className={`${styles.img}`}
              src={Porto6}
              layout="responsive"
              alt="portofolio"
            />
            <a href="/category/{category[0].id}">
              <p className="font-category fw-1">Project management web</p>
            </a>
            <div className="card-img-overlay text-white d-flex justify-content-center align-items-center">
              <p className="font-category"></p>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Portofolio;
