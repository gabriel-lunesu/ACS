import Link from "next/link";
import { useState } from "react";
import ModalVideo from "react-modal-video";

const Hero = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      <ModalVideo
        channel="youtube"
        autoplay
        isOpen={isOpen}
        videoId="Vsq1_kewchQ"
        onClose={() => setOpen(false)}
      />

      <h1 className="hero-heading fw-500 text-white mb-45">
        Advanced <span>Crypto</span> Signals
      </h1>

      <h3 className="text-lg fw-400 text-white mb-35">
        The Most Advanced Crypto <b>Algorithm</b>.
      </h3>

      <p className="text-base text-white opacity-75 mb-65 lg-mb-50 pe-lg-5">
        Superior Signals, for Superior Traders.
      </p>

      <div className="d-sm-flex align-items-center">
        <div
          onClick={() => setOpen(true)}
          role="button"
          className="fancybox video-icon tran3s mb-25 d-flex align-items-center order-sm-last"
        >
          {/* <span className="icon d-block">
            <i className="bi bi-play" />
          </span> */}
          {/* <div className="ps-3">
            <span className="d-block fs-15 text-uppercase tx1">Watch</span>
            <strong className="fs-18 fw-500 text-white d-block">
              Intro Video
            </strong>
          </div> */}
        </div>
        {/* End popup video */}

        <Link
          href="#"
          className="btn-sixteen fw-500 tran3s mb-25 me-4 order-sm-first"
        >
          Start Trading
        </Link>
      </div>
  

    </>
  );
};

export default Hero;
