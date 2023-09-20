import Head from "next/head";
import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar/NavbarDetail";
import Footer from "../components/footer/Footer";
import Image from "next/image";
// import UploadImage from "../assets/image/upload_image.png";
import styles from "../styles/Profile.module.css";
import ImageProfile from "../assets/iconOffice.svg";
import Cookies from "js-cookie";
import axios from "axios";
import Swal from "sweetalert2";
import Link from "next/link";
const Profile = () => {
  const token = Cookies.get("token");
  const [detail, setDetail] = useState([]);
  console.log(detail)
  const [loading, setLoading] = useState(false);
  const [image, setImage] = useState();
  const [form, setFrom] = useState({
    company_bidang: "",
    address: "",
    company_description: "",
    instagram: "",
    linkedin: "",
    phonenumber: "",
    company: "",
  });

  const imageChangeHandler = (e) => {
    setImage(e.target.files[0]);
    console.log(e.target.files[0]);
  };
  const onSubmitImage = () => {
    document.getElementById("close").click();
    setLoading(true);
    const formData = new FormData();
    // if (image) {
    formData.append("image", image);
    axios
      .put(
        `${process.env.API_BACKEND}authRecruiter/update-profile/img`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
          "Content-Type": "multipart/form-data",
        }
      )
      .then((res) => {
        console.log(res);
        Swal.fire({
          icon: "success",
          title: res.data.message,
          confirmButtonText: "Oke",
        })
          .then((res) => {
            if (res.isConfirmed) {
              setLoading(false);
            }
          })
          .catch((err) => {
            Swal.fire({
              icon: "error",
              title: err.response.data.message,
            });
          });
        fetch();
      });
    // }
  };
  const handleChange = (e) => {
    e.preventDefault();
    setFrom({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      company_field: form.company_bidang,
      address: form.address,
      company_description: form.company_description,
      instagram: form.instagram,
      linkedin: form.linkedin,
      phonenumber: form.phonenumber,
      company: form.company,
    };
    e.preventDefault();
    console.log(data);
    if (data.company_field || data.address || data.company_description || data.instagram || data.instagram || data.company || data.linkedin || data.phonenumber) {
      axios
        .put(`${process.env.API_BACKEND}authRecruiter/update-profile/`, data, {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        })
        .then((result) => {
          console.log(result);
          Swal.fire({
            icon: "success",
            title: result.data.message,
          });
          fetch();
        })
        .catch((err) => {
          console.log(err)
          Swal.fire({
            icon: "error",
            title: "error",
          });
        });
    } else {
      Swal.fire({
        icon: "warning",
        title: "Lengkapi data!!!",
      });
    }
  };
  // console.log(detail)
  const fetch = async () => {
      const result = await axios.get(
        `${process.env.API_BACKEND}authRecruiter/profile`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(result.data.data[0]);
      setDetail(result.data.data[0]);
      console.log(detail);
    }

  useEffect(() => {
    fetch();
  }, []);

  return (
    <div className="body">
      <div className={`${styles.bg_profile}`}>
        <Head>
          <title>Edit Profile</title>
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
        </Head>
        <Navbar />
        <div className={`${styles.bg}`}></div>
        <div className={`container ${styles.hight}`}>
          <div className="row mt-3 justify-content-center ">
            <div className="col-lg-12 col-md-12 col-sm-7 col-xl-4 mb-5">
              <div className={`card ${styles.border_none}`}>
                <div className="card-body">
                  <div className={`${styles.img_profile}`}>
                    <div
                      className="edit-icon"
                      type="button"
                      data-bs-toggle="modal"
                      data-bs-target="#editPhoto"
                    >
                      {loading ? (
                        <div className="p-3">
                          <div className="spinner-grow" role="status">
                            <span className="visually-hidden">Loading...</span>
                          </div>
                        </div>
                      ) : (
                        <Image
                          src={
                            detail
                              ? `https://drive.google.com/thumbnail?id=${detail.image}&sz=s1080`
                              : ImageProfile
                          }
                          className={`${styles.img_profile}`}
                          layout="responsive"
                          width="1"
                          height="1"
                          alt="Photo Profile"
                        />
                      )}
                    </div>
                  </div>
                  <div
                    className="modal fade"
                    id="editPhoto"
                    tabIndex="-1"
                    aria-labelledby="editPhotoLabel"
                    aria-hidden="true"
                  >
                    <div className="modal-dialog">
                      <div className="modal-content">
                        <div className="modal-header">
                          <h5 className="modal-title" id="editPhotoLabel">
                            Change Photo Profile
                          </h5>
                          <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                          />
                        </div>
                        <div className="modal-body">
                          <form>
                            <input
                              type="file"
                              className="form-control"
                              onChange={imageChangeHandler}
                            />
                          </form>
                        </div>
                        <div className="modal-footer">
                          <button
                            type="button"
                            id="close"
                            className="btn btn-secondary"
                            data-bs-dismiss="modal"
                          >
                            Close
                          </button>
                          <button
                            type="button"
                            onClick={onSubmitImage}
                            className="btn bg-primary text-white"
                          >
                            Save changes
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <h3>{detail.fullname}</h3>
                  <h5>
                    {detail.company ? (
                      detail.company
                    ) : (
                      <span className="text-secondary">Nama Perusahaan</span>
                    )}
                  </h5>
                  <p>
                    {detail.company_field ? (
                      detail.company_field
                    ) : (
                      <span className="text-secondary">bidang</span>
                    )}
                  </p>
                    <span className="text-secondary">{detail.address}</span>
                </div>
              </div>
              <button className="btn w-100 reg my-3" onClick={handleSubmit}>
                Simpan
              </button>
              <Link href="/profile/recruiter">
                <button className="btn w-100 reg">Batal</button>
              </Link>
            </div>
            <div className="col-lg-12 col-md-12 col-sm-7 col-xl-8 g-sm-5 g-lg-0 mb-5">
              <div className={`card ${styles.border_none}`}>
                <div className="card-body">
                  <h3>Data Diri</h3>
                  <hr />
                  <form
                    //   onSubmit={handleCreate}
                    className="w-100 form-sign-up"
                  >
                    <div className="mb-2">
                      <label htmlFor="nama" className="form-label">
                        Nama Peruhasaan
                      </label>
                      <input
                        type="text"
                        name="company"
                        className="form-input form-control"
                        id="nama"
                        // defaultValue={detail.fullname}
                        placeholder="Masukan nama perusahan"
                        onChange={handleChange}
                      />
                    </div>

                    <div className="mb-2">
                      <label htmlFor="job" className="form-label">
                        Bidang
                      </label>
                      <input
                        // defaultValue={detail.jobs}
                        type="text"
                        name="company_bidang"
                        className="form-input form-control"
                        id="job"
                        placeholder="Masukan bidang perusahaan ex : Financial"
                        onChange={handleChange}
                      />
                    </div>

                    <div className="mb-2">
                      <label htmlFor="domisili" className="form-label">
                        kota
                      </label>
                      <input
                        // defaultValue={detail.address}
                        type="text"
                        name="address"
                        className="form-input form-control"
                        id="domosili"
                        placeholder="Masukan kota"
                        onChange={handleChange}
                      />
                    </div>

                    <div className="mb-2">
                      <label htmlFor="deskripsi" className="form-label">
                        Deskripsi Singkat
                      </label>
                      <textarea
                        type="description"
                        name="company_description"
                        className="form-input form-control"
                        id="kerja"
                        placeholder="Tuliskan Deskripsi Singkat"
                        rows="5"
                        onChange={handleChange}
                      />
                    </div>
                    <div className="mb-2">
                      <label htmlFor="domisili" className="form-label">
                      Instagram
                      </label>
                      <input
                        // defaultValue={detail.address}
                        type="text"
                        name="instagram"
                        className="form-input form-control"
                        id="domosili"
                        placeholder="Masukan nama Instagram"
                        onChange={handleChange}
                      />
                    </div>
                    <div className="mb-2">
                      <label htmlFor="domisili" className="form-label">
                      Nomor Telepon
                      </label>
                      <input
                        // defaultValue={detail.address}
                        type="text"
                        name="phonenumber"
                        className="form-input form-control"
                        id="domosili"
                        placeholder="Masukan nomor telepon"
                        onChange={handleChange}
                      />
                    </div>
                    <div className="mb-2">
                      <label htmlFor="domisili" className="form-label">
                        Linkedin
                      </label>
                      <input
                        // defaultValue={detail.address}
                        type="text"
                        name="linkedin"
                        className="form-input form-control"
                        id="domosili"
                        placeholder="Masukan nama Linkedin"
                        onChange={handleChange}
                      />
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Profile;
