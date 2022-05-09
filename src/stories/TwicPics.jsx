import React from "react";
import PropTypes from "prop-types";
import { installTwicPics, TwicImg } from "@twicpics/components/react";

import "./TwicPics.css";

installTwicPics({
  // see https://github.com/TwicPics/components/blob/0.6.6/documentation/react.md#setup-options for more info
  domain: "https://front-commerce.twic.pics",
  step: 50,
});

const TwicPics = ({ src, ratio }) => {
  return <TwicImg src={src} ratio={String(ratio)} focus="auto" />;
};

TwicPics.propTypes = {
  src: PropTypes.string.isRequired,
};

TwicPics.defaultProps = {};

export default TwicPics;
