import React from 'react'
import Icon from '../../assets/image/icon-footer.svg';
import Image from 'next/image';
import styles from '../../styles/Footer.module.css'

function Footer() {
  return (
    <footer className='desktop-bottom '>
        <div className={`${styles.container_footer}`}>
            <div className={`container-sm ${styles.content_footer}`}>
                <Image src={Icon} alt='icon'/>
                <p className={`w-25 my-4 ${styles.width_p}`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In euismod ipsum et dui rhoncus auctor.</p>
                <hr/>
                <div className='d-flex justify-content-between my-4'>
                <p>2022 Pewworld. All right reserved</p>
                    <div className='contact '>
                        <a href='#' className='me-4'>Telepon</a>
                        <a href='#'>Email</a>
                    </div>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer