const reasons = [
  {
    title: "World's best and most advanced algorithm trusted by 200+ users.",
  },
  {
    title: "We provide the best price in the market.",
  },
  {
    title: "We've expert to support you 24 hours per week.",
  },
];

const WhyChooseList = () => {
  return (
    <div className="block-style-five pe-xl-5 me-xxl-5" data-aos="fade-right">
      <div className="title-style-nine pb-20">
        <div className="sc-title">Why Choose us</div>
        <h2 className="text-lg main-title text-white">
         <b>Why <span>Choose</span> us for your trading.</b> 
        </h2>
      </div>
      {/* /.title-style-nine */}
      <ul className="style-none list-item">
        {reasons.map((reason) => (
          <li key={reason.title}>{reason.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default WhyChooseList;
