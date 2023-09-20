import React, { useEffect, useState } from 'react';
import Icon from '../../assets/image/Icon.svg';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../../styles/navbar.module.css'
import iconMail from '../../assets/image/navbar/icon-mail.svg'
import iconBell from '../../assets/image/navbar/icon-bell.svg'
import { Dropdown, DropdownButton } from 'react-bootstrap';
import { useRouter } from "next/router";
import Swal from 'sweetalert2';
import axios from 'axios';
import Cookies from 'js-cookie';


function Navbar() {
    const router = useRouter()
    const [profile, setProfile] = useState([])
    console.log(profile)
    const role = Cookies.get('role');
    console.log(role)
    const token = Cookies.get('token')
    const handleSignOut = () =>{
        Swal.fire({
            title: "Are you sure?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#d33",
            cancelButtonColor: "#32C33B",
            confirmButtonText: "Yes",
          }).then((result) => {
            if (result.isConfirmed) {
                Cookies.remove("token")
                Cookies.remove("refreshToken")
                Cookies.remove("id");
                Cookies.remove("role");
                router.push('/')
            }
          });
    }

    const fetch = async() =>{
        if(role){
            axios.get(`${process.env.API_BACKEND}authRecruiter/profile`, {
                headers:{
                    Authorization: `Bearer ${token}`
                }
            })
            .then(res =>{
                console.log(res)
                setProfile(res.data.data)
            })
        }else{
            axios.get(`${process.env.API_BACKEND}authWorker/profile`, {
                headers:{
                    Authorization: `Bearer ${token}`
                }
            })
            .then(res =>{
                console.log(res)
                setProfile(res.data.data[0])
            })
        }

    };

    useEffect(() =>{
        fetch()
    },[])
    
  return (
    <>
        <nav className="navbar navbar-expand-lg bg-white">
            <div className="container-fluid">
                <Link href='/home'>
                    <a className="navbar-brand ms-5" href="#">
                        <Image src={Icon}></Image>
                    </a>
                </Link>
                
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                    <div className={`d-flex justify-content-end ${styles.auth_detail1} `} >
                        <ul className={`navbar-nav mb-2 mb-lg-0 ${styles.auth_detail}`}>
                        <li className={`${styles.border_none} nav-item my-3`}>
                                <Image 
                                className={`${styles.icon_profile}`}
                                src={iconBell}
                                />
                            </li>
                            <li className={`${styles.border_none} nav-item mx-3 my-3`}>
                                <Image 
                                className={`${styles.icon_profile}`}
                                src={iconMail}
                                />
                            </li>
                            <li className={`${styles.container_profile} nav-item mx-1 my-1`}>
                                <DropdownButton
                                    align="end"
                                    title={role === 'recruiter' ? 
                                    <Image
                                        src={profile.image ? `https://drive.google.com/thumbnail?id=${profile.image}&sz=s1080` : `https://ui-avatars.com/api/?name=${profile.fullname}`}
                                        alt=""
                                        width={35}
                                        height={35}
                                        className="rounded-circle"
                                        onChange={fetch}
                                    /> :
                                    <Image
                                        src={profile.image ? `https://drive.google.com/thumbnail?id=${profile.image}&sz=s1080` : `https://ui-avatars.com/api/?name=${profile.fullname}`}
                                        alt=""
                                        width={35}
                                        height={35}
                                        className="rounded-circle"
                                        onChange={fetch}
                                    />
                                    }
                                    variant="link"
                                    id="dropdown-menu-align-end"
                                >
                                    {/* <Dropdown.Item
                                        onClick={() => {
                                        router.push("/[profile]");
                                        }}
                                    >
                                        My Profile
                                    </Dropdown.Item> */}
                                    {/* <Dropdown.Divider /> */}
                                    
                                    <Dropdown.Item
                                        onClick={() =>{
                                            if(role){
                                                router.push('/profile/recruiter')
                                            }else{
                                                router.push('/profile')
                                            }
                                        }}
                                        className={`${styles.icons_profile}`}
                                    >
                                        Profile
                                    </Dropdown.Item>
                                    <Dropdown.Item
                                        onClick={handleSignOut}
                                        className={`${styles.icons_profile}`}
                                    >
                                        Sign Out
                                    </Dropdown.Item>
                                </DropdownButton>
                                {/* </NavDropdown> */}
                            </li>
                         </ul>
                    </div>
                </div>
            </div>
        </nav>
    </>
  )
}

export default Navbar