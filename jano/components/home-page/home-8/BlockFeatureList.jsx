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
  ];

  return (
    <div className="block-style-three ps-xxl-5" data-aos="fade-left">
      <div className="title-style-nine">
        <div className="sc-title">Pricing</div>
        <h2 className="main-title text-white">
          Get Limited Discount for <span>30%</span>!
        </h2>
      </div>
      <p className="text-lg text-white opacity-75 pt-20 pb-30 lg-pb-20">
        Get this limited discount now! And join the winning-side.
      </p>
      <ul className="style-none list-item fs-18 text-white opacity-75">
        {featureList.map((feature, index) => (
          <li key={index}>{feature.title}</li>
        ))}
      </ul>
      <a href="#" className="btn-sixteen fw-500 border7 tran3s mt-45">
        Start Trading
      </a>
    </div>
  );
};

export default BlockFeatureList;
