import { Fragment, useState } from "react";
import Modal from "../../modal/modal";

const CallToAction = () => {
  const [showModal, setShowModal] = useState(false);
  const platformButtons = [
    {
      href: "https://wa.me/447456435236?text=Helllo%2C%20i%20would%20like%20to%20know%20more%20about%20ACS.",
      className: "ios-button",
      icon: "/images/icon/icon_89.svg",
      text1: "Download on the",
      text2: "App store",
      aos: "fade-right",
    },
    {
      href: "https://wa.me/447456435236?text=Helllo%2C%20i%20would%20like%20to%20know%20more%20about%20ACS.",
      className: "windows-button",
      icon: "/images/icon/playstore.svg",
      text1: "Get it on",
      text2: "Google play",
      aos: "fade-left",
    },
  ];
  return (
    <div className="col-xl-7 col-lg-8 col-md-10 m-auto">
      <div className="title-style-nine text-center mb-40" data-aos="fade-up">
        <h2 className="text-lg main-title text-white">
          Get Ready to Start. It’s <span>Fast &amp; Easy.</span> 
        </h2>
      </div>
      {/* /.title-style-nine */}
      <a href="https://wa.me/447456435236?text=Helllo%2C%20i%20would%20like%20to%20know%20more%20about%20ACS."
        className="text-white opacity-75 text-center text-lg mt-40 mb-40 lg-mt-20"
        data-aos="fade-up"
        
      >
        <u><b>Click here</b> to join our Discord now and start trading &amp; earning money!</u>
      </a>
      <div className="d-sm-flex justify-content-center md:ml-auto " style={{marginLeft : '30%'}}>

    
     
     



        </div>
        
    </div>
    
  );
};

export default CallToAction;
