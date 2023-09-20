import React, { useEffect, useState } from "react";
import Image from "next/image";
import baner1 from "../../assets/image/baner1.svg";
import baner2 from "../../assets/image/baner2.svg";
import baner3 from "../../assets/image/baner3.svg";
import styles from "../../styles/header.module.css";
import LandingCarousel from "./carausel";
import Link from "next/link";
import axios from "axios";

function Baner({ data }) {
  console.log("ini data", data);
  const [detail, setDetail] = useState([]);
  const fetch = async () => {
    const result = await axios.get(`${process.env.API_BACKEND}worker`);

    setDetail(result.data.data);
  };

  useEffect(() => {
    fetch();
  }, []);
  return (
    <div className="container">
      <div className=" container-sm container_content1 mb-5">
        <div className="contain-tex m-auto">
          <h1>Talenta terbaik negri untuk perubahan revolusi 4.0</h1>
          <br />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In euismod
            ipsum et dui rhoncus auctor.
          </p>
          <Link href="/detail">
            <button className="btn btn-custom">Mulai Dari Sekarang</button>
          </Link>
        </div>
        <div className="">
          <div className="">
            <Image src={baner1} alt='gambar1' />
          </div>
        </div>
      </div>
      <div className="container-sm container_content1">
        <div className="container-sm contain-text">
          <div>
            <Image src={baner2} alt='gambar2' />
          </div>
        </div>
        <div className="d-flex flex-column w-100 align-self-center">
          <h1>Kenapa harus mencari tallent di peworld</h1>
          <ul className="daftar">
            <li>
              <i className="bi bi-check-circle-fill" />
              <span> Lorem ipsum dolor sit amet.</span>
            </li>
            <li>
              <i className="bi bi-check-circle-fill" />
              <span> Lorem ipsum dolor sit amet.</span>
            </li>
            <li>
              <i className="bi bi-check-circle-fill" />
              <span> Lorem ipsum dolor sit amet.</span>
            </li>
            <li>
              <i className="bi bi-check-circle-fill" />
              <span> Lorem ipsum dolor sit amet.</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="container_content1 ">
        <div className="contain-text2 ">
          <h1 className="ms-5">Skill Tallent</h1>
          <span className="fw-light ms-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In euismod
            ipsum et dui rhoncus auctor.
          </span>
          <div className="container-sm mt-2">
            <ul className="list-skill">
              <li>
                <i className="bi bi-check-circle-fill text-color" />
                <span> Java</span>
              </li>
              <li>
                <i className="bi bi-check-circle-fill text-color" />
                <span> Kotlin</span>
              </li>
              <li>
                <i className="bi bi-check-circle-fill text-color" />
                <span> PHP</span>
              </li>
              <li>
                <i className="bi bi-check-circle-fill text-color" />
                <span> Javascrip</span>
              </li>
              <li>
                <i className="bi bi-check-circle-fill text-color" />
                <span> Golang</span>
              </li>
              <li>
                <i className="bi bi-check-circle-fill text-color" />
                <span> C++</span>
              </li>
              <li>
                <i className="bi bi-check-circle-fill text-color" />
                <span> Ruby</span>
              </li>
              <li>
                <i className="bi bi-check-circle-fill text-color" />
                <span> 10+ Bahasa lainnya</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="container_img d-flex justify-content-center align-items-center">
          <div className="contain-img3">
            <Image src={baner3} alt="gambar3" />
          </div>
        </div>
      </div>

      <div className="w-100">
        <LandingCarousel data={detail} />
      </div>

      <div className="container_content4 my-5">
        <div className={`${styles.container_img4}`}>
          <div className="">
            <p className={`text-white w-50 ms-5 fs-2 ${styles.text_custom}`}>
              Lorem ipsum dolor sit amet
            </p>
          </div>
          <div className="d-flex justify-content-end me-5">
            <button
              className={`btn bg-white py-2 fs-5 btn3 ${styles.btn_custom}`}
            >
              Mulai Dari Sekarang
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Baner;
