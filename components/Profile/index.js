import Head from "next/head";
import React, { Fragment } from "react";
// import Script from 'next/script';
import Portofolio from "../../components/Portofolio/swal";
import Pengalaman from "../experiences/constant";
import styles from '../../styles/Profile.module.css'
import Image from "next/image";



const Profile = ({ detail, portfolio, experience }) => {
  console.log(`https://drive.google.com/uc?export=view&id=${detail?.image}`)
  return (
    <div>
      <Head>
        <title>Profile</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Fragment>
        <div className={`container ${styles.hight}`}>
          <div className="row mt-3 justify-content-center">
            <div className="col-lg-4 col-sm-8">
              <div className={`card mb-5 ${styles.border_none}`}>
                <div className={`card-body `}>
                    <div
                      className={`${styles.img_profile}`}
                    >
                      <Image
                        src={detail.image ? `https://drive.google.com/thumbnail?id=${detail.image}&sz=s1080` : `https://ui-avatars.com/api/?name=${detail.fullname}`}
                        layout="responsive"
                        width="1"
                        height="1"
                        alt="Photo Profile"
                        className={`${styles.img_profile}`}
                      />
                    </div>
                  <h3>{detail?.fullname}</h3>
                  <h5>{detail?.jobs}</h5>
                  <p>{detail?.address}</p>
                  {/* <p>{detail?.job}</p> */}
                  <p>
                    {detail.description ? 
                    detail.description : ``  
                  }
                  </p>
                  <button className={`btn ${styles.btn_custom}`}>Hire</button>

                  <p className="fw-1 fw-bold mt-5">Skill</p>
                  <div className="container text-center">
                    <div className="row gy-2">
                        {/* <div className={`border bg-warning ${styles.container_skill}`}> */}
                        {
                          detail?.skill?.split(',').map((item, index) =>(
                            <div className="col-4" key={index}>
                              <div>
                                <button className="btn bg-warning me-1 mt-2">{item}</button>
                              </div>
                            </div>
                          ))
                        }
                    {/* </div> */}
                      
                      
                    </div>
                  </div>

                      <ul className="d-flex flex-column mt-5">
                        {detail.instagram ? <li><i className="bi bi-instagram "/>{detail.instagram}</li> : ''}
                        {detail.github ? <li><i className="bi bi-github "/>{detail.github}</li> : ''}
                        
                        {/* <li><i class="bi bi-envelope "/> Louistommo@gmail.com</li>
                        <li><i class="bi bi-github "/> @Louistommo</li>
                        <li><i class="bi bi-linkedin "/> @Louistommo91</li> */}
                      </ul>
                      
                </div>
              </div>
            </div>
            <div className="col-lg-8 col-sm-8">
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
                        {/* <div className="row row-cols-2 row-cols-lg-3 align-items-center g-5">
                            {
                              portfolio?.map((item, index) =>{
                                console.log(item)
                                return(
                                  <div className="col categories" 
                                  key={index}>
                                    <div className={`${styles.card_custom} card text-center d-flex flex-column`}>
                                            <Image
                                              className={`${styles.img}`}
                                              src={item.image[0]}
                                              width='1'
                                              height={1}
                                              layout="responsive"
                                              alt="portofolio"
                                              />
                                          <a href="/category/{category[0].id}">
                                            <p className="font-category fw-1">{item.name_app}</p>
                                          </a>
                                      </div>
                                    </div>
                                )
                              })
                            }

                            </div> */}
                      </div>
                      <div
                        className="tab-pane fade"
                        id="nav-profile"
                        role="tabpanel"
                        aria-labelledby="nav-profile-tab"
                        tabIndex="0"
                      >
                        <Pengalaman data={experience}/>
                      </div>
                    </div>
                  </div>
                    {/* <div className="tab-content mt-5" id="nav-tabContent">
                      <div
                        className="tab-pane fade show active"
                        id="nav-home"
                        role="tabpanel"
                        aria-labelledby="nav-home-tab"
                        tabIndex="0"
                      >
                        <Portofolio />
                      </div>
                      <div
                        className="tab-pane fade"
                        id="nav-profile"
                        role="tabpanel"
                        aria-labelledby="nav-profile-tab"
                        tabIndex="0"
                      >
                        <Pengalaman />
                      </div>
                    </div> */}
                  {/* </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    </div>
  );
};

export default Profile;