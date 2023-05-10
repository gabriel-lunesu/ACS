const Faq = () => {
  const faqItems = [
    {
      question: "What is ACS and what do you do?",
      answer:
        "ACS (Advanced Crypto Signals) is a trading signal provider that delivers high-quality bot call trades based on our proprietary trading bot. Customers can join our free Discord server to request access to our premium signals.",
    },
    {
      question: "How do I join your free Discord server?",
      answer:
        "Joining our Discord server is easy! Simply visit our website and follow the instructions to connect with us and our bot. Once you're connected, you can access our server and request access to our premium signals. ",
    },
    {
      question: "What kind of results can I expect from your bot call trades?",
      answer:
        "Our bot call trades have consistently delivered profitable results for our members, with a success rate between 75% and 97% depending on the current market conditions. However, please keep in mind that trading always involves some level of risk and there is no guarantee of profits.",
    },
    {
      question: "Can I customize the parameters of your trading bot to suit my trading style?",
      answer:
        "No, our trading bot is not customizable. However, our team can provide guidance and support to help you optimize your trading strategy.",
    },
    {
      question: "What kind of customer support do you offer?",
      answer:
        "We are committed to providing top-notch customer support to our members. Our team is available around the clock to answer any questions you may have and provide assistance with any issues you encounter. We also offer regular updates to our bot and community to ensure that you always have access to the latest features and performance enhancements.",
    },
    {
      question: "How much does it cost to access your premium signals?",
      answer:
        "We offer affordable pricing options to suit a variety of budgets. Currently, our monthly subscription to access premium signals is $74 per month. We also offer a special discount for the first 1000 members who join our community. This is a limited-time offer, so be sure to take advantage of it while you can! ",
    },
    {
      question: "Do I need any trading experience to use your signals?",
      answer:
        "No, you do not need any trading experience to use our signals. Our bot is designed to do all the heavy lifting for you, so you can simply follow the signals and make trades based on our recommendations.",
    },
    {
      question: "What do your signals look like?",
      answer:
        "Our signals provide you with an entry price, a stop loss, and three take profit targets. We believe in providing our customers with a complete trading plan, so you have all the information you need to make informed trading decisions.",
    },
  ];

  return (
    <div className="accordion accordion-style-three md-mt-60" id="accordionOne">
      {faqItems.map((item, index) => (
        <div className="accordion-item" key={index}>
          <div className="accordion-header" id={`heading${index}`}>
            <button
              className={`accordion-button ${
                index === 2 ? "not-collapsed" : "collapsed"
              }`}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target={`#collapse${index}`}
              aria-expanded={index === 2 ? "true" : "false"}
              aria-controls={`collapse${index}`}
            >
              {item.question}
            </button>
          </div>
          <div
            id={`collapse${index}`}
            className={`accordion-collapse collapse ${
              index === 2 ? "show" : ""
            }`}
            aria-labelledby={`heading${index}`}
            data-bs-parent="#accordionOne"
          >
            <div className="accordion-body">
              <p>{item.answer}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Faq;
