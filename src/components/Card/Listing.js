import React from "react";
import Feature from "./Feature";
import "./Listing.css";
import { motion } from "framer-motion";

const Listing = ({ data, open }) => {
  const { imageUrl, price, address, numBedroom, numWashrooms, livingSpace } =
    data;

  return (
    <motion.div className="listing" onClick={open} whileHover={{ scale: 1.1 }}>
      <div className="listing-content">
        <div className="listing-image-container">
          <img
            className="listing-image"
            alt="real estate mansion"
            src={imageUrl}
          />
        </div>
        <div className="listing-details">
          <div className="listing-type">For Sale</div>
          <div className="listing-row">
            <span className="listing-price">{price}</span>
          </div>
          <div className="listing-row">
            <span className="listing-address">{address}</span>
          </div>
          <div className="listing-row">
            <Feature iconName={"FaBed"} iconLabel={numBedroom} />
            <Feature iconName={"FaShower"} iconLabel={numWashrooms} />
            <Feature iconName={"FaRuler"} iconLabel={livingSpace} />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Listing;
