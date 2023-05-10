import Image from "next/image";

const Block2 = () => {
  const data = [
    {
      icon: "/images/icon/icon_78.png",
      title: "Best Accuracy Rate",
      description: "Our trading algorithm has demonstrated a high level of accuracy in predicting market trends and identifying profitable trading opportunities. ",
    },
    {
      icon: "/images/icon/icon_79.png",
      title: "Protected by Adaptability",
      description: "Our trading algorithm is designed to adapt to changing market conditions and adjust its strategies accordingly.",
    },
    {
      icon: "/images/icon/icon_81.png",
      title: "Risk Management",
      description: "Our trading algorithm incorporates robust risk management strategies to protect investments and minimize downside risk. ",
    },
  ];

  return (
    <>
      {data.map((item, index) => (
        <div
          key={index}
          className={`col-lg-4 col-md-6 ${index === 1 ? "active" : ""}`}
        >
          <div
            className="card-style-twelve text-center position-relative mt-40"
            data-aos="fade-up"
            data-aos-delay={`${index * 100}`}
          >
            <div className="icon d-flex align-items-center justify-content-center">
              <Image
                width={180}
                height={180}
                layout="intrinsic"
                src={item.icon}
                alt="shape"
                className="lazy-img"
              />
            </div>
            <h4 className="text-white mb-10 mt-25"><b>{item.title}</b></h4>
            <p className="text-white opacity-75 mb-25">{item.description}</p>
            <a href="#" className="arrow tran3s">
              <img
                src="/images/icon/icon_80.svg"
                alt="shape"
                className="lazy-img"
              />
            </a>
          </div>
          {/* /.card-style-twelve */}
        </div>
      ))}
    </>
  );
};

export default Block2;
