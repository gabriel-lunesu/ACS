import { Fragment, useState } from "react";
import Modal from "../../modal/modal";

const CallToAction = () => {
  const [showModal, setShowModal] = useState(false);
  const platformButtons = [
    {
      href: "https://discord.gg/5CCWuv4g83",
      className: "ios-button",
      icon: "/images/icon/icon_89.svg",
      text1: "Download on the",
      text2: "App store",
      aos: "fade-right",
    },
    {
      href: "https://discord.gg/5CCWuv4g83",
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
          Get Ready to Started. It’s <span>Fast &amp; Easy.</span> 
        </h2>
      </div>
      {/* /.title-style-nine */}
      <p
        className="text-white opacity-75 text-center text-lg mt-40 mb-40 lg-mt-20"
        data-aos="fade-up"
      >
        Join our Discord now and start trading &amp; earning money!
      </p>
      <div className="d-sm-flex justify-content-center" style={{marginLeft : '80px'}}>

    
      <a href="https://discord.gg/5CCWuv4g83" className="btn-sixteen text-center content fw-500 border7 mt-45" onClick={() => setShowModal(true)}>
         Get Started
      </a>
     



        </div>
    </div>
  );
};

export default CallToAction;
