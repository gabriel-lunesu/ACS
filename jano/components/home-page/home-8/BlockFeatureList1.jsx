const BlockFeatureList = () => {
  const plans = [
    {
      icon: "/images/icon/icon_56.svg",
      plan: "1 Month Plan",
      features: [
        "85% Winrate",
        "High-Value Community",
        "Consistent Profits",
        "Continuous Improvement",
        "Transparency",
      ],
      price: "$94",
      trial: "",
      className: "pr-column bg-black mb-50 text-white pr-one",
    },
    {
      icon: "/images/icon/icon_57.svg",
      plan: "3 Month Plan",
      features: [
        "85% Winrate",
        "High-Value Community",
        "Consistent Profits",
        "Continuous Improvement",
        "Transparency",
      ],
      price: "$214",
      trial: "25% Discount!",
      className: "bg-white mb-50 text-black pr-column",
    },
    {
      icon: "/images/icon/icon_58.svg",
      plan: "6 Month Plan",
      features: [
        "85% Winrate",
        "High-Value Community",
        "Consistent Profits",
        "Continuous Improvement",
        "Transparency",
      ],
      price: "$364",
      trial: "36% Discount!",
      className: "pr-column mb-50 bg-black text-white pr-two",
    },
    {
      icon: "/images/icon/icon_59.svg",
      plan: "Lifetime Plan",
      features: [
        "85% Winrate",
        "High-Value Community",
        "Consistent Profits",
        "Continuous Improvement",
        "Transparency",
      ],
      price: "$694",
      trial: "For The Serious Traders!",
      className: "pr-column mb-50 bg-black text-white pr-three",
    },
  ];
 

  return (
    <div data-aos="fade-up">
      

      <div className="pricing-table-area-two mt-160 text-black  lg-mt-100 xs-mt-60 wow fadeInUp">
        <div className="tab-content">
          <div className="tab-pane show active" id="month">
            <div className="row gx-5 align-items-center">
              {plans.map((plan, index) => (
                <div className="col-lg-3 md:w-32 lg:w-48 col-sm-6" key={index}>
                  <div className={`pr-column ${plan.className}`}>
                    <img src={plan.icon} alt="" className="icon" />
                    <div className="plan tx-white">{plan.plan}</div>
                    <div className="pr-body">
                      <ul className="style-none text-start">
                        {plan.features.map((feature, index) => (
                          <li key={index}>{feature}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="pr-footer pt-45 lg-pt-30">
                      <div className="price tx-white">{plan.price}</div>
                      <div className="trial-text fs-17 opacity-75 mb-30">
                        {plan.trial}
                      </div>
                      <a href="https://discord.gg/5CCWuv4g83" className="btn-sixteen fw-500 tran3s">
                        Sign up
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            {/* /.row */}
          </div>
          {/* /.tab-pane */}

          
            {/* /.row */}
          </div>
        </div>
      </div>
    
  );
};

export default BlockFeatureList;
