import React from "react";
import styles from '../../styles/Profile.module.css'
import Image from "next/image";
import PhotoProfile from "../../assets/iconOffice.svg";
import Link from "next/link";

const Profile = ({ detail }) => {
    console.log(detail.image)

  console.log(`https://drive.google.com/uc?export=view&id=${detail?.image}`)
  return (
    <div className="body">
      <div className={`container mt-5`}>
        <div className="row mt-3 justify-content-center">
          <div className="col-lg col-sm-8">
          <div className={`${styles.bg1}`}></div>
            <div className={`card mb-5 ${styles.border_none}`}>
              <div className={`card-body ${styles.border_none1}`}>
                <div className={`${styles.img_profile}`}>
                 
                      <Image
                        src={
                          detail.image
                            ? `https://drive.google.com/thumbnail?id=${detail.image}&sz=s1080`
                            : PhotoProfile
                        }
                        className={`${styles.img_profile}`}
                        priority={true}
                        layout="responsive"
                        width="50"
                        height="50"
                        alt="Photo Profile"
                      />
                </div>
                <div className="text-center">
                  <h3>{detail?.company}</h3>
                  <h5>{detail?.company_field}</h5>
                  <p>{detail?.address}</p>
                  {/* <p>{detail?.job}</p> */}
                  <p>{detail.company_description ? detail.company_description : ``}</p>
                </div>
                <div className="container w-50">
                  {/* <Link href="/edit-recruiter"> */}
                    <button className={`btn ${styles.btn_custom}`}>
                      Hubungi
                    </button>
                  {/* </Link> */}
                  <div className=" d-flex w-100 mt-5 text-secondary text-decoration-none flex-column align-items-center fs-5">
                    <div className="d-flex flex-column ">
                      <span className="mb-2">
                        <i className="bi bi-envelope me-3 " /> {detail.email}
                      </span>
                      <span className="mb-2">
                        <i className="bi bi-instagram me-3 " /> {detail.instagram}
                      </span>
                      <span className="mb-2">
                        <i className="bi bi-telephone me-3 " /> {detail.phonenumber}
                      </span>
                      <span className="mb-2">
                        <i className="bi bi-linkedin me-3 " /> {detail.linkedin}
                      </span>
                    </div>

                  </div>

                </div>
              </div>
            </div>
          </div>
          {/* <div className="col-lg-8 col-sm-8">
            <div className={`card mb-5 ${styles.border_none}`}>
              <div className="card-body">
                <div className="utama">
                  <nav>
                    <div className="nav nav-tabs" id="nav-tab" role="tablist">
                      <button
                        className={`nav-link active ${styles.under_line}`}
                        id="nav-home-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#nav-home"
                        type="button"
                        role="tab"
                        aria-controls="nav-home"
                        aria-selected="true"
                      >
                        Portofolio
                      </button>
                      <button
                        className="nav-link"
                        id="nav-profile-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#nav-profile"
                        type="button"
                        role="tab"
                        aria-controls="nav-profile"
                        aria-selected="false"
                      >
                        Pengalaman Kerja
                      </button>
                    </div>
                  </nav>
                  <div className="tab-content mt-5" id="nav-tabContent">
                    <div
                      className="tab-pane fade show active"
                      id="nav-home"
                      role="tabpanel"
                      aria-labelledby="nav-home-tab"
                      tabIndex="0"
                    >
                      <Portofolio data={portfolio} />
                    </div>
                    <div
                      className="tab-pane fade"
                      id="nav-profile"
                      role="tabpanel"
                      aria-labelledby="nav-profile-tab"
                      tabIndex="0"
                    >
                      <Pengalaman data={experience} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Profile;