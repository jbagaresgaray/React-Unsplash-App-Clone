import PropTypes from "prop-types";
import { ICollection } from "./collection";
import { IPhoto } from "./photo";
import { ISearchUser } from "./user";

export const ILinks = {
  self: PropTypes.string,
  html: PropTypes.string,
  photos: PropTypes.string,
  likes: PropTypes.string,
  portfolio: PropTypes.string,
  following: PropTypes.string,
  followers: PropTypes.string,
  download: PropTypes.string,
  download_location: PropTypes.string,
};

export const IUrls = {
  raw: PropTypes.string,
  full: PropTypes.string,
  regular: PropTypes.string,
  small: PropTypes.string,
  thumb: PropTypes.string,
};

export const IProfileImage = {
  small: PropTypes.string,
  medium: PropTypes.string,
  large: PropTypes.string,
};

export const IPreviewPhotos = {
  id: PropTypes.string,
  created_at: PropTypes.string,
  updated_at: PropTypes.string,
  blur_hash: PropTypes.string,
  urls: PropTypes.shape(IUrls),
};

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

export const ITagSourceAncestrySlug = {
  slug: PropTypes.string,
  pretty_slug: PropTypes.string,
};

export const ITagSourceAncestry = {
  type: PropTypes.shape(ITagSourceAncestrySlug),
  category: PropTypes.shape(ITagSourceAncestrySlug),
};

export const ITagSource = {
  ancestry: PropTypes.shape(ITagSourceAncestry),
  title: PropTypes.string,
  subtitle: PropTypes.string,
  description: PropTypes.string,
  meta_title: PropTypes.string,
  meta_description: PropTypes.string,
  cover_photo: PropTypes.shape(IPhoto),
};

export const ITag = {
  type: PropTypes.string,
  title: PropTypes.string,
  source: PropTypes.shape(ITagSource),
};

export const ITags = {
  custom: PropTypes.arrayOf(PropTypes.shape(ITag)),
  aggregated: PropTypes.arrayOf(PropTypes.shape(ITag)),
};

export const IExif = {
  make: PropTypes.string,
  model: PropTypes.string,
  exposure_time: PropTypes.string,
  aperture: PropTypes.string,
  focal_length: PropTypes.string,
  iso: PropTypes.number,
};

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

export const IMeta = {
  title: PropTypes.string,
  description: PropTypes.string,
  index: PropTypes.bool,
};

export const ISearchCollections = {
  total: PropTypes.number,
  total_pages: PropTypes.number,
  results: PropTypes.arrayOf(PropTypes.shape(ICollection)),
};

export const ISearchPhotos = {
  total: PropTypes.number,
  total_pages: PropTypes.number,
  results: PropTypes.arrayOf(PropTypes.shape(IPhoto)),
};

export const ISearchUsers = {
  total: PropTypes.number,
  total_pages: PropTypes.number,
  results: PropTypes.arrayOf(PropTypes.shape(ISearchUser)),
};
