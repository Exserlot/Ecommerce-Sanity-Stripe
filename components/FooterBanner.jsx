import React from "react";
import PropTypes from "prop-types";
import Link from "next/link";

import { urlFor } from "@/lib/client";

const FooterBanner = ({ footerBanner }) => {
  return (
    <div className="footer-banner-container">
      <div className="banner-desc">
        <div className="left">
          <p>{footerBanner.discount}</p>
          <h3>{footerBanner.largeText1}</h3>
          <h3>{footerBanner.largeText2}</h3>
          <p>{footerBanner.saleTime}</p>
        </div>
        <div className="right">
          <p>{footerBanner.smallText}</p>
          <h3>{footerBanner.midText}</h3>
          <p>{footerBanner.desc}</p>
          <Link href={`/product/${footerBanner.product}`}>
            <button type="button">{footerBanner.buttonText}</button>
          </Link>
        </div>
        <img
          src={urlFor(footerBanner.image)}
          alt="FooterBanner-Image"
          className="footer-banner-image"
        />
      </div>
    </div>
  );
};

FooterBanner.propTypes = {
  footerBanner: PropTypes.shape({
    discount: PropTypes.string.isRequired,
    largeText1: PropTypes.string.isRequired,
    largeText2: PropTypes.string.isRequired,
    saleTime: PropTypes.string.isRequired,
    smallText: PropTypes.string.isRequired,
    midText: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
    product: PropTypes.string.isRequired,
    buttonText: PropTypes.string.isRequired,
    image: PropTypes.object.isRequired,
  }).isRequired,
};

export default FooterBanner;
