import Link from "next/link";
import Seo from "../../components/common/Seo";
import Header from "../../components/home-page/home-8/Header";
import Hero from "../../components/home-page/home-8/Hero";
import ShapeGroup from "../../components/home-page/home-8/ShapeGroup";
import Block1 from "../../components/home-page/home-8/Block1";
import Block2 from "../../components/home-page/home-8/Block2";
import BlockFeatureList from "../../components/home-page/home-8/BlockFeatureList";
import Block3 from "../../components/home-page/home-8/Block3";
import WhyChooseList from "../../components/home-page/home-8/WhyChooseList";
import Coutner from "../../components/home-page/home-8/Coutner";
import Testimonial from "../../components/home-page/home-8/Testimonial";
import Faq from "../../components/home-page/home-8/Faq";
import Blog from "../../components/home-page/home-8/Blog";
import CallToAction from "../../components/home-page/home-8/CallToAction";
import CopyrightFooter2 from "../../components/footer/CopyrightFooter2";
import Footer from "../../components/home-page/home-8/Footer";
import Stats from "../../components/home-page/home-8/Stats";
import Image from "next/image";
import Modal from "../../components/modal/modal";
import { Fragment, useState } from "react";


const crypto = () => {
  
  return (
    
    <div className="dark-bg-one">
      
      <ShapeGroup />

      <Seo pageTitle="ACS" />

      {/* <!-- 
        =============================================
        Theme Default Menu
        ============================================== 	
        --> */}
      <Header />
      

      {/* 
        =============================================
        Theme Hero Banner
        ============================================== 
        */}
      <div
        className="hero-banner-eight position-relative pt-225 md-pt-150"
        data-aos="fade-right"
      >
        <div className="container">
          <div className="row">
            <div className="col-md-7">
              <Hero />
            </div>
          </div>
        </div>
        {/* /.container */}

        <div className="illustration-holder" data-aos="fade-right">
          <Image
            width={697}
            height={664}
            layout="intrinsic"
            src="/images/assets/ils_08.png"
            alt="illustration"
            className="main-illustration lazy-img"
          />
          <div className="shapes shape-one rounded-circle" />
        </div>
        {/* /.illustration-holder */}
        <img
          src="/images/shape/shape_100.svg"
          alt="shape"
          className="lazy-img shapes line-shape"
        />
      </div>
      

      <div className="wrapper mt-140 lg-mt-60">
          <div className="container">
            <div className="row justify-content-center">
              <Coutner />
            </div>
          </div>
        </div>
        <div className="App h-screen flex flex-col items-center justify-center bg-purple-200">
     
      </div>
      


      

    



          {/* /.title-style-nine */}

      

      {/* 
        =============================================
        Feature Section Twenty Six
        ============================================== 
        */}
      <div className="fancy-feature-twentySix position-relative zn2 pt-150 lg-pt-80">
        <div className="wrapper-xl m-auto wow fadeInUp">
          <div className="bg mb-200 lg-mb-80">
            <div className="row gx-0">
              {/* <Block1 /> */}
            </div>
          </div>
        </div>


        
        
        {/* /.wrapper-xl */}

        <div className="container">
          <div className="title-style-nine text-center wow fadeInUp mb-60 lg-mb-30">
            <h3 className="text-lg main-title text-white ">
              <b>Advanced <span>Cryptocurrency</span> Algorithm</b>
            </h3>
            <p className="text-sm text-white opacity-54 fs-20 pt-15">
              Our algorithm is based on more than 30.000 samples, and with data starting from 2010. 
            </p>
            <p className="text-white opacity-50 fs-20 pt-12">
              We make sure we achieve the <u>highest</u> winrate in the market!
            </p>
          </div>
          {/* /.title-style-nine */}

          <div className="row gx-xxl-5">
            <Block2 />
          </div>
          {/* End .row */}
        </div>
        {/* End .container */}
        <div className="shapes shape-one rounded-circle" />
        <div className="shapes shape-two rounded-circle" />
      </div>

      {/* 
        =============================================
        Feature Section Twenty Seven
        ============================================== 
        */}
      <div className="fancy-feature-twentySeven position-relative zn2 mt-250 lg-mt-120">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 ms-auto order-lg-last">
              <BlockFeatureList />
              {/* /.block-style-three */}
            </div>
            <div
              className="col-lg-6 col-md-8 m-auto order-lg-first"
              data-aos="fade-right"
            >
              <div className="illustration-holder md-mt-50 pe-xxl-1 pe-xl-5 pe-lg-4">
                <Image
                  width={569}
                  height={559}
                  layout="intrinsic"
                  src="/images/assets/ils_09.png"
                  alt="illustration"
                  className="lazy-img main-img m-auto"
                />
              </div>
              {/* /.illustration-holder */}
            </div>
          </div>
        </div>
        {/* /.container */}

        <div className="container">
          <div className="wrapper mt-130 lg-mt-100" data-aos="fade-up">
            <div className="row">
              <Block3 />
            </div>
          </div>
          {/* /.wrapper */}
        </div>
        <div className="r-shape-one shapes" />
      </div>

      {/* 
        =============================================
        Feature Section Twenty Eight
        ============================================== 
        */}
      <div className="fancy-feature-twentyEight position-relative zn2 mt-225 lg-mt-120">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <WhyChooseList />
              {/* /.block-style-five */}
            </div>
            <div className="col-lg-6 col-md-8 m-auto" data-aos="fade-left">
              <div className="illustration-holder md-mt-50 position-relative">
                <img
                  src="/images/shape/shape_106.svg"
                  alt="shape"
                  className="lazy-img main-img"
                />
                <Image
                  width={766}
                  height={766}
                  layout="intrinsic"
                  src="/images/assets/ils_10.png"
                  alt="shape"
                  className="lazy-img illustration-img"
                />
              </div>
              {/* /.illustration-holder */}
            </div>
          </div>
        </div>
        {/* /.container */}

        {/* <div className="wrapper mt-110 lg-mt-60">
          <div className="container">
            <div className="row justify-content-center">
              <Coutner />
            </div>
          </div>
        </div> */}
        {/* /.wrapper */}
      </div>

    

      {/* 
        =============================================
        Feature Section Twenty Nine
        ============================================== 
        */}
      <div className="fancy-feature-twentyNine position-relative zn2 mt-180 pb-180 lg-mt-110 lg-pb-120">
        <div className="container">
          <div className="row">
            <div className="col-lg-5" data-aos="fade-right">
              <div className="title-style-nine">
                <h2 className="text-lg main-title text-white">
                 <b>Any <span>Questions?</span> Find here.</b> 
                </h2>
              </div>
              {/* /.title-style-nine */}
              <p className="text-white opacity-75 fs-18 mb-40 mt-30 pe-xxl-5">
                Don’t find your answer here? just send us a message on <u>Discord</u>.
              </p>
              <Link href="https://discord.gg/9xjMfhmSAu" className="btn-seventeen fw-500 tran3s">
                Contact us
              </Link>
            </div>
            {/* End .col */}
            <div className="col-xxl-6 col-lg-7 ms-auto" data-aos="fade-left">
              <Faq />
            </div>
            {/* End .col */}
          </div>
        </div>
        {/* /.container */}
        <div className="shapes shape-one rounded-circle" />
      </div>

      {/*
        =====================================================
        Blog Section Four
        =====================================================
        */}
        {/* original code from here on themeforest (inside story section) */}

      {/*
			=====================================================
				Fancy Short Banner Eleven
			=====================================================
			*/}
      <div className="fancy-short-banner-eleven position-relative zn2 pt-130 pb-170 lg-pb-130">
        <div className="container">
          <div className="row">
            <CallToAction />
          </div>
        </div>
        <div className="shapes shape-one rounded-circle" />
        <div className="shapes shape-two rounded-circle" />
      </div>

      {/*
			=====================================================
				Footer
			=====================================================
			*/}
      {/* footer code in themeforest!! */}
    </div>
    // main-page-wrapper
  );
};

export default crypto;
