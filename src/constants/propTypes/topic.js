import PropTypes from "prop-types";
import { ILinks, IPreviewPhotos } from "./generic";
import { IPhoto } from "./photo";
import { IUser } from "./user";

export const ITopic = {
  id: PropTypes.string,
  slug: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  published_at: PropTypes.string,
  updated_at: PropTypes.string,
  starts_at: PropTypes.string,
  ends_at: PropTypes.string,
  only_submissions_after: PropTypes.string,
  featured: PropTypes.bool,
  total_photos: PropTypes.number,
  current_user_contributions: PropTypes.array,
  total_current_user_submissions: PropTypes.number,
  links: PropTypes.shape(ILinks),
  status: PropTypes.string,
  owners: PropTypes.arrayOf(PropTypes.shape(IUser)),
  top_contributors: PropTypes.arrayOf(PropTypes.shape(IUser)),
  cover_photo: PropTypes.shape(IPhoto),
  preview_photos: PropTypes.arrayOf(PropTypes.shape(IPreviewPhotos)),
};
