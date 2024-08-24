import React from 'react'
import "./Certification.css"
import theme_patter from "../../assets/theme_pattern.svg"
import certificate_data from "../../assets/certificate_data"
import arrow_icon from "../../assets/arrow_icon.svg"

function Certifications() {
  return (
    <div className='certifications'>
      <div className='certification-title'>
        <h1>Certifications</h1>
        <img src={theme_patter} alt=''></img>
      </div>
      <div className='certificate-container'>
        {certificate_data.map((certificate,index)=>{
            return <div key={index} className='certificate-format'>
                <h3>{certificate.s_no}</h3>
                <h2>{certificate.s_name}</h2>
                <p>{certificate.s_desc}</p>
                <div className='certificate-readmore'>
                <p>Read more</p>
                <img src={arrow_icon} alt=''></img>
                </div>
        </div>
        })}
      </div>
    </div>
  )
}

export default Certifications
