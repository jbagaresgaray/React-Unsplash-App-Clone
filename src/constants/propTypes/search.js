import PropTypes from "prop-types";
import { ICollection } from "./collection";
import { IPhoto } from "./photo";
import { ISearchUser } from "./user";

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
