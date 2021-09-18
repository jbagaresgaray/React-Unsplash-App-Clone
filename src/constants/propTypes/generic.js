import PropTypes from "prop-types";

export const ISocialLinks = {
  instagram_username: PropTypes.string,
  portfolio_url: PropTypes.string,
  twitter_username: PropTypes.string,
  paypal_email: PropTypes.string,
};

export const IBadge = {
  title: PropTypes.string,
  primary: PropTypes.bool,
  slug: PropTypes.string,
  link: PropTypes.string,
};


export const IExif = {
  make: PropTypes.string,
  model: PropTypes.string,
  exposure_time: PropTypes.string,
  aperture: PropTypes.string,
  focal_length: PropTypes.string,
  iso: PropTypes.number,
};

export const IMeta = {
  title: PropTypes.string,
  description: PropTypes.string,
  index: PropTypes.bool,
};

