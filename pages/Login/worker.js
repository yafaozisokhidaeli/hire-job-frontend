import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";
import styles from "../../styles/Login.module.css";
import Logo from "../../assets/image/logo-white.svg";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { loginWorker } from "../../config/Redux/Action/authAction";

export default function LoginForm() {
  const dispatch = useDispatch();
  const router = useRouter();
  // const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
    console.log(form);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    // setLoading(true);
    dispatch(loginWorker(form, router));
  };

  return (
    <>
      <div className="body">
        <div className={styles.body}>
          <div className="">
            <div className="d-flex align-items-center justify-content-center  ">
              <div className={styles.backdroplogin}>
                <div className="mt-4 me-3">
                  <Image
                    className={styles.logo}
                    src={Logo}
                    height={30}
                    alt="Logo"
                  />
                </div>
                <div className="mt-5 py-5 d-flex align-items-center justify-content-center  ">
                  <h1 className="text-white mx-5">
                    Temukan developer berbakat & terbaik di berbagai bidang
                    keahlian
                  </h1>
                </div>
              </div>
              <div className="container-sm ">
                <div
                  className={`${styles.column} d-flex align-items-center justify-content-center my-5 py-4`}
                >
                  <form
                    className={`container-sm d-flex flex-column ${styles.login} justify-content-center`}
                  >
                    <h1 className="text-center title-text">
                      <b>Halo, Pweapeople</b>
                    </h1>
                    <p className="subtitle-text text-center my-4">
                      Login into your existing account{" "}
                      <span className="text-danger fw-bold">Worker</span>
                    </p>
                    <label
                      className={`align-self-start ${styles.inputLabelText} ms-5`}
                      htmlFor="email"
                    >
                      E-mail
                    </label>
                    <input
                      type="email"
                      name="email"
                      className={`${styles.login} form-control my-2 mb-4`}
                      placeholder="Masukan alamat email"
                      onChange={handleChange}
                    />
                    <label
                      className={`align-self-start ${styles.inputLabelText} ms-5`}
                      htmlFor="password"
                    >
                      Kata Sandi
                    </label>
                    <input
                      type="password"
                      name="password"
                      className={`${styles.login} form-control my-2 `}
                      placeholder="Masukan kata sandi"
                      onChange={handleChange}
                    />
                    <div className="mb-1 d-flex w-100 justify-content-evenly align-self-center ms-lg-5">
                      <Link
                        href="/Login/recruiter"
                        
                      >
                        <span className="forgot-password-text m-auto ms-5 pe-3 btn btn-primary">

                          Masuk Recruiter
                        </span>
                      </Link>
                      <label className="forgot-password-text m-auto pe-3">
                        Lupa kata sandi?
                      </label>
                    </div>
                    {/* <Link > */}
                    <button
                      // type="submit"
                      className={`btn btn-warning ${styles.submit} text-white w-100`}
                      onClick={handleLogin}
                    >
                      Masuk
                    </button>
                    {/* </Link> */}

                    <br />
                    <div className={`${styles.text_}`}>
                      <label className="dont-have-an-account-text align-self-center">
                        Anda belom punya akun?
                        <Link
                          className="signup-text ms-1 "
                          href="/register/worker"
                        >
                          <span className={`text-warning`}> Daftar disini</span>
                        </Link>
                      </label>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
