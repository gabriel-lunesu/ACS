const BlockFeatureList = () => {
  const featureList = [
    {
      title: "Backed by Data starting from 2010.",
    },
    {
      title: "Access to the premium discord.",
    },
    {
      title: "Highest win-rate in the market.",
    },
    {
      title: "Multiple signals per week.",
    },
  ];

  return (
    <div className="block-style-three ps-xxl-5" data-aos="fade-left">
      <div className="title-style-nine">
        <div className="sc-title">Pricing</div>
        <h2 className="text-lg main-title text-white">
          <b>Get Limited <span>Discount</span> Now!</b>
        </h2>
        <h3 className="text-lg mt-3 animate-ping main-title text-white ">
              <u>Time-Sensitive <span className="animate-ping">Offer</span>!</u> <s>$99</s>  <span>$74</span>/month.
        </h3>
      </div>
      <p className="text-base text-white opacity-75 pt-20 pb-30 lg-pb-20">
        This Dicount will expire soon! Join the winning-side.
      </p>
      <ul className="style-none list-item fs-18 text-white opacity-75">
        {featureList.map((feature, index) => (
          <li key={index}>{feature.title}</li>
        ))}
      </ul>
      <a href="https://discord.gg/98XSdH6D" className="btn-sixteen fw-500 border7 tran3s mt-45">
        Start Trading
      </a>
    </div>
  );
};

export default BlockFeatureList;
