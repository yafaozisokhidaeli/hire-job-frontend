import React, { useEffect, useState } from "react";
import Image from "next/image";
import Cookies from "js-cookie";
import Swal from "sweetalert2";
import axios from "axios";
import Link from "next/link";

const Portofolio = ({ data }) => {
  const token = Cookies.get('token')
  const id = Cookies.get("id");
  const [dataPort, setDataPort] = useState([])
  const [idPort, setIdPort] = useState('')
  console.log(idPort)
  const [formPorto, setPortfolio] = useState({
    name_app: "" ,
    repository: "",
    type: "",
  });
  const [imagePorto, setImagePorto] = useState();
  console.log(imagePorto)
  const handleChangePort = (e) => {
    e.preventDefault();
    setPortfolio({
      ...formPorto,
      [e.target.name]: e.target.value
    });
    console.log(formPorto);
  };
  const handleUpload = (e) => {
    e.preventDefault();
    const file = e.target.files;
    setImagePorto(file);
  };
  const handleSubmitPorto = async(e) => {
    Swal.fire({
      title: 'loading...',
      allowEscapeKey: false,
      allowOutsideClick: false,
      showConfirmButton: false,
    })
    e.preventDefault();
    const data = new FormData();
    data.append("name_app", formPorto.name_app);
    data.append("repository", formPorto.repository);
    data.append("type", formPorto.type);
    for(let img of imagePorto){
      console.log(img)
      data.append("image", img);
    }
    console.log(data)
    await  axios
        .put(`${process.env.API_BACKEND}portfolio/${idPort}`, data, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
          "Content-Type": "multipart/form-data",
        })
        .then((res) => {
          console.log(res);
          Swal.fire({
            icon: "success",
            title: res.data.message,
            confirmButtonText: "Oke",
            }).then((res) => {
              if (res.isConfirmed) {
                return window.location.reload();
            }
          })
        })
        .catch((err) => {
          Swal.fire({
            icon: "error",
            title: "Error",
          });
          console.log(err)});
    }
    
  const getPortByID = (id_port) =>{
    console.log(id_port)
    return(
      axios.get(`${process.env.API_BACKEND}portfolio/id/${id_port}`)
      .then(res =>{
        console.log(res.data.data)
        setDataPort(res.data.data[0])
      })
      .catch(err => console.log(err))
    )
  }
  


  const handleDelete = (Id) => {
    Swal.fire({
      title: "Are you sure?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#32C33B",
      confirmButtonText: "Deleted",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: 'loading...',
          allowEscapeKey: false,
          allowOutsideClick: false,
          showConfirmButton: false,
      })
        return(axios
          .delete(`${process.env.API_BACKEND}portfolio/${Id}`)
          .then((res) => {
            console.log(res);
            Swal.fire({
              icon: "success",
              title: res.data.message,
              confirmButtonText: "Oke",
            }).then((res) => {
              if (res.isConfirmed) {
                return window.location.reload();
              }
            });
          })
          )
      }
    });
  };

 useEffect(() =>{
  getPortByID()
 }, [])
  return (
    <div>
      <div className="column align-items-center g-1">
        {data?.map((item, index) => {
          // setIdPort(item)
          return (
            <div className="col-lg-10 categories border ms-lg-5 mb-5" key={index}>
              {id ? (
                <div>
                  <div className="d-flex row mt-2">
                    <div className="col">
                      <button
                        className="btn btn-danger ms-lg-5 ms-3"
                        onClick={() => {
                          handleDelete(item.id);
                          
                        }}
                      >
                        Delete
                      </button>
                    </div>
                    <div className="col">
                      <a className="d-flex ms-auto ">
                        <h4 className="font-category fw-1 m-auto">
                          {item.name_app}
                        </h4>
                      </a>
                    </div>
                    <div className="col ">
                      <div
                        className="edit-icon"
                        type="button"
                        data-bs-toggle="modal"
                        data-bs-target="#updatePorto"
                      >
                        <button className="btn btn-primary ms-lg-5 "
                        onClick={() =>{
                          setIdPort(item.id)
                          getPortByID(item.id)
                        }
                      }
                        >Update</button>
                      </div>
                    </div>
                    <div
                      className="modal fade"
                      id="updatePorto"
                      tabIndex="-1"
                      aria-labelledby="editPhotoLabel"
                      aria-hidden="true"
                    >
                      <div className="modal-dialog">
                        <div className="modal-content">
                          <div className="modal-header">
                            <h5 className="modal-title" id="editPhotoLabel">
                              Update Portfolio
                            </h5>
                            <button
                              type="button"
                              className="btn-close"
                              data-bs-dismiss="modal"
                              aria-label="Close"
                            />
                          </div>
                          <div className="modal-body">
                            <form
                              // onSubmit={handleSubmitPorto}
                              className="w-100 form-sign-up"
                            >
                              <div className="mb-2">
                                <label htmlFor="nama" className="form-label">
                                  Nama Aplikasi
                                </label>
                                <input
                                  type="text"
                                  defaultValue={dataPort?.name_app}
                                  name="name_app"
                                  className="form-input form-control"
                                  id="nama"
                                  placeholder="Masukan nama aplikasi"
                                  onChangeCapture={handleChangePort}
                                />
                              </div>

                              <div className="mb-2">
                                <label htmlFor="nama" className="form-label">
                                  Link repository
                                </label>
                                <input
                                  type="text"
                                  defaultValue={dataPort?.repository}
                                  name="repository"
                                  className="form-input form-control"
                                  id="nama"
                                  placeholder="Masukan link repository"
                                  onChangeCapture={handleChangePort}
                                />
                              </div>

                              <div className="mb-2">
                                <label htmlFor="nama" className="form-label">
                                  Type portofolio
                                </label>
                                <div className="container row">
                                  <div className="form-check col-4">
                                    <input
                                      className="form-check-input"
                                      type="radio"
                                      name="type"
                                      id="flexRadioDefault1"
                                      value="Aplikasi Mobile"
                                      onChangeCapture={handleChangePort}
                                    />
                                    <label
                                      className="form-check-label"
                                      // for="flexRadioDefault1"
                                    >
                                      Aplikasi mobile
                                    </label>
                                  </div>
                                  <div className="form-check col-4">
                                    <input
                                      className="form-check-input"
                                      type="radio"
                                      name="type"
                                      id="flexRadioDefault2"
                                      // checked
                                      value="Aplikasi Web"
                                      onChangeCapture={handleChangePort}
                                    />
                                    <label
                                      className="form-check-label"
                                      // for="flexRadioDefault2"
                                    >
                                      Aplikasi web
                                    </label>
                                  </div>
                                </div>
                              </div>

                              <div className="mb-2">
                                <label htmlFor="nama" className="form-label">
                                  Upload Gambar
                                </label>
                                <input
                                  type="file"
                                  // name="image"
                                  className="form-control"
                                  onChange={handleUpload}
                                  multiple
                                ></input>
                              </div>
                              {/* <hr className="mt-3" /> */}
                              <div className="row justify-content-center">
                                {/* <button
                                  type="submit"
                                  className="btn btn-outline-warning"
                                >
                                  Tambah Portofolio
                                </button> */}
                              </div>
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
                              type="submit"
                              id="close"
                              data-bs-dismiss="modal"
                              onClick={handleSubmitPorto
                              }
                              className="btn bg-primary text-white"
                            >
                              Update
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="d-flex justify-content-center mt-2">
                    <Link href={item.repository} className="btn btn-transparent fs-5 fw-bold text-danger w-50 ">Link Repository</Link>
                  </div>
                </div>
              ) : (
                <div>
                <span
                  // href="/category/{category[0].id}"
                  className="d-flex ms-auto "
                >
                  <h1 className="font-category fw-1 m-auto">{item.name_app}</h1>
                </span>
                <div className="d-flex justify-content-center mt-2">
                    <Link href={item.repository} className="btn btn-primary w-50 ">Link Repository</Link>

                </div>
                </div>
              )}
              {/* <div
                className={`${styles.card_custom} card text-center d-flex flex-column row p-0`}
              > */}
              <div className="row">
                {item?.image?.map((image, index) => {
                  console.log(image)
                  return (
                    <div className="col-5 m-auto mt-5" key={index}>
                      <Image
                        className="mb-2 "
                        src={image}
                        width="1"
                        height={1}
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
