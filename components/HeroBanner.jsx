import React from "react";
import Link from "next/link";
import { urlFor } from "@/lib/client";
import PropTypes from "prop-types";

const HeroBanner = ({ heroBanner }) => {
  return (
    <div className="hero-banner-container">
      <div>
        <p className="beats-solo">{heroBanner.smallText}</p>
        <h3>{heroBanner.midText}</h3>
        <h1>{heroBanner.largeText1}</h1>
        <img
          src={urlFor(heroBanner.image)}
          alt="headphones"
          className="hero-banner-image"
        />
      </div>
      <div>
        <Link href={`/product/${heroBanner.product}`}>
          <button type="button">{heroBanner.buttonText}</button>
        </Link>
        <div className="desc">
          <h5>Description</h5>
          <p>{heroBanner.desc}</p>
        </div>
      </div>
    </div>
  );
};

HeroBanner.propTypes = {
  heroBanner: PropTypes.shape({
    smallText: PropTypes.string.isRequired,
    midText: PropTypes.string.isRequired,
    largeText1: PropTypes.string.isRequired,
    image: PropTypes.object.isRequired,
    product: PropTypes.string.isRequired,
    buttonText: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
  }).isRequired,
};

export default HeroBanner;
