import Link from "next/link";
import { useState } from "react";

const footerLinks = [

  {
    title: "Legal",
    links: [
      { label: "Terms of use", href: "/pages-menu/faq" },
      { label: "Terms & conditions", href: "/pages-menu/faq" },
      { label: "Privacy policy", href: "/pages-menu/faq" },
      { label: "Cookie policy", href: "/pages-menu/faq" },
    ],
  }
];

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };
  return (
    <>
      <div className="col-lg-5 form-widget mb-10">
        <div className="logo">
          <Link href="/">
            <img src="/images/logo/acs-logoo.png" alt="" width={295} height={200} />
          </Link>
        </div>
        {/* <h6 className="pt-40 pb-10 text-white fw-normal">
          Join our Discord
        </h6>
        <form
          onSubmit={handleSubmit}
          action="#"
          className="position-relative me-xxl-5"
        >
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={handleEmailChange}
          />
          <button type="submit" className="fw-500 position-absolute">
            contact
          </button>
        </form>
        <div className="fs-14 mt-10 text-white opacity-50">
          We will contact you for our premium service.
        </div> */}
      </div>
      {/* End .col */}
      {footerLinks.map((section) => (
        <div className="col-lg-2 col-sm-4 ms-auto mb-30" key={section.title}>
          <h5 className="footer-title text-white fw-500">{section.title}</h5>
          <ul className="footer-nav-link style-none">
            {section.links.map((link) => (
              <li key={link.label}>
                <Link href={link.href}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </>
  );
};

export default Footer;
