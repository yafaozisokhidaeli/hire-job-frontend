import Link from "next/link";
import React, {  useState } from "react";
import Image from "next/image";
import styles from "../../styles/RegisterWork.module.css";
import Logo from "../../assets/image/logo-white.svg";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { registerRecruiter } from "../../config/Redux/Action/authAction";

export default function RegisterRecuiterForm() {
  const router = useRouter();
  const dispatch = useDispatch();
  const [Loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    fullname: "",
    email: "",
    company: "",
    position: "",
    phonenumber: "",
    password: "",
  });
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
    console.log(form);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    dispatch(registerRecruiter(form, router, Loading));
  };

  return (
    <>
      <div className="body">
        <div className={styles.body}>
          <div className="py-3 ">
            <div className="d-flex mt-0 justify-content-center ">
              <div className={styles.backdroplogin}>
                <div className="mt-4 ">
                  <Image
                    className={styles.logo}
                    src={Logo}
                    height={30}
                    alt="Logo"
                  />
                </div>
                <div className="mt-5 py-5">
                  <h1 className="text-white mt-5 py-5 mx-5">
                    Temukan developer berbakat & terbaik di berbagai bidang
                    keahlian
                  </h1>
                </div>
              </div>
              <div className={styles.container_form}>
                <div className="column d-flex align-items-center justify-content-start">
                  <form className={styles.form_login} onSubmit={handleSubmit}>
                    <h1 className="text-center title-text">
                      <b>Halo, Pweapeople</b>
                    </h1>
                    <p className="subtitle-text text-center my-4">
                      Please Fill The Fileds To Create Your Account!
                    </p>
                    <label className={styles.inputLabelText} htmlFor="fullname">
                      Nama
                    </label>
                    <input
                      type="text"
                      name="fullname"
                      className="login form-control my-2 mb-4"
                      placeholder="Masukkan Nama Panjang"
                      onChange={handleChange}
                      required
                    />

                    <label className={styles.inputLabelText} htmlFor="email">
                      E-mail
                    </label>
                    <input
                      type="email"
                      name="email"
                      className="login form-control my-2 mb-4"
                      required
                      placeholder="Masukkan Email"
                      onChange={handleChange}
                    />
                    <label className={styles.inputLabelText} htmlFor="company">
                      Perusahaan
                    </label>
                    <input
                      type="perusahaan"
                      name="company"
                      className="login form-control my-2 mb-4"
                      required
                      placeholder="Masukkan Nama Perusahaan"
                      onChange={handleChange}
                    />
                    <label className={styles.inputLabelText} htmlFor="position">
                      Jabatan
                    </label>
                    <input
                      type="text"
                      name="position"
                      className="login form-control my-2 mb-4"
                      placeholder="Masukkan Jabatan"
                      onChange={handleChange}
                      required
                    />
                    <label
                      className={styles.inputLabelText}
                      htmlFor="phonenumber"
                    >
                      No Handphone
                    </label>
                    <input
                      type="nohp"
                      name="phonenumber"
                      className="login form-control my-2 mb-4"
                      required
                      placeholder="Masukkan No Handphone"
                      onChange={handleChange}
                    />

                    <label className={styles.inputLabelText} htmlFor="password">
                      Password
                    </label>
                    <input
                      type="password"
                      name="password"
                      className="login form-control my-2"
                      required
                      placeholder="Masukkan Kata Sandi"
                      onChange={handleChange}
                    />
                    {/* <label className={styles.inputLabelText} htmlFor="confirmpassword">
                    Confirm Password
                    </label>
                    <input
                      required
                      type="password"
                      name="confirmpassword"
                      className="login form-control my-2"
                  
                      placeholder="Masukkan Konfirmasi Kata Sandi"
                    /> */}
                    {/* <Link href='/login'> */}
                    <button
                      type="submit"
                      className="btn btn-warning submit text-white w-100 mt-3"
                    >
                      Daftar
                    </button>
                    {/* </Link> */}

                    <br />
                    <label className="dont-have-an-account-text align-self-center ">
                      Anda sudah punya akun?
                      <Link
                        className="signup-text ms-1 "
                        href="/Login/recruiter"
                      >
                        <span className={`text-warning`}> Masuk disini</span>
                      </Link>
                    </label>
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
