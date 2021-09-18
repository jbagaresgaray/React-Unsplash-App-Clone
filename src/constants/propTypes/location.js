import PropTypes from "prop-types";

export const IGeolocation = {
  latitude: PropTypes.number,
  longitude: PropTypes.number,
};

export const ILocation = {
  title: PropTypes.string,
  name: PropTypes.string,
  city: PropTypes.string,
  country: PropTypes.string,
  position: PropTypes.shape(IGeolocation),
};
