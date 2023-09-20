import React, { Fragment } from "react";
import Image from "next/image";
import iconOffice from "../../assets/iconppOffice.svg";

const Experiences = ({data}) => {
  console.log(data)
  return (
    <div>
      <div className="row">
        {
          data.map((item, index) =>{
            return(
              <Fragment key={index}>
                <div className="col-2">
                  <Image
                    src={item.image ? `https://drive.google.com/uc?export=view&id=${item.image}` : iconOffice}
                    className="bg-white"
                    layout="responsive"
                    width="150"
                    height="150"
                    alt="Profile"
                  />
                </div>
                <div className="col-10">
                  <h3>{item.position}</h3>
                  <h5>{item.name_company}</h5>
                  <p>{item.month_year}</p>
                  <p>
                    {item.job_description}
                  </p>
                </div>
              </Fragment>
            )
          })
        }
      </div>
    </div>
  );
};

export default Experiences;