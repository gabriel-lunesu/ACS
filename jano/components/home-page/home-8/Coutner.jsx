import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";

const Counter = () => {
  const { ref, inView } = useInView({
    threshold: 0.62,
    triggerOnce: true,
  });

  const counters = [
    {
      id: 1,
      value: 400,
      text: "Made on our algorithm.",
      symbol: "$",
      suffix: "k+",
      delay: 0,
    },
    {
      id: 2,
      value: 200,
      text: "Members trading with us.",
      suffix: "+",
      delay: 0.2,
    },
    {
      id: 3,
      value: 30,
      text: "Data samples collected from the market.",
      suffix: "k+",
      delay: 0.3,
    },
  ];

  return (
    <>
      {counters.map(
        ({ id, value, text, symbol = "", suffix = "", delay = 0 }) => (
          <div
            className="col-md-5 col-sm-6"
            key={id}
            ref={ref}
            data-aos="fadr-up"
            data-aos-delay={delay}
          >
            <div
              className={`counter-block-four text-center mt-40 wow fadeInUp ${
                inView ? "animated" : ""
              }`}
            >
              <div className="main-count fw-500">
                {symbol}
                <CountUp
                  end={inView ? value : 0}
                  duration={2}
                  separator=","
                  start={inView ? null : 0}
                />
                {suffix}
              </div>
              <p className="fs-18 m0">{text}</p>
            </div>
            {/* /.counter-block-four */}
          </div>
        )
      )}
    </>
  );
};

export default Counter;
