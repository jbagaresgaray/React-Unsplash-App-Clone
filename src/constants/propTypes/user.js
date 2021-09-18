import PropTypes from "prop-types";
import { lazyFunction } from "../../utils";
import { IBadge, IMeta, ISocialLinks } from "./generic";
import { ILinks } from "./links";
import { IPreviewPhotos, IProfileImage } from "./photo";
import { ITags } from "./tags";

export const IUser = {
  id: PropTypes.string,
  updated_at: PropTypes.string,
  username: PropTypes.string,
  name: PropTypes.string,
  first_name: PropTypes.string,
  last_name: PropTypes.string,
  twitter_username: PropTypes.string,
  portfolio_url: PropTypes.string,
  bio: PropTypes.string,
  location: PropTypes.string,
  links: PropTypes.shape(ILinks),
  profile_image: PropTypes.shape(
    lazyFunction(function () {
      return IProfileImage;
    })
  ),
  instagram_username: PropTypes.string,
  total_collections: PropTypes.number,
  total_likes: PropTypes.number,
  total_photos: PropTypes.number,
  accepted_tos: PropTypes.bool,
  for_hire: PropTypes.bool,
  social: PropTypes.shape(ISocialLinks),
};

export const IUserProfile = {
  ...IUser,
  followed_by_user: PropTypes.bool,
  photos: PropTypes.arrayOf(
    PropTypes.shape(
      lazyFunction(function () {
        return IPreviewPhotos;
      })
    )
  ),
  badge: PropTypes.shape(IBadge),
  tags: PropTypes.shape(ITags),
  followers_count: PropTypes.number,
  following_count: PropTypes.number,
  allow_messages: PropTypes.bool,
  numeric_id: PropTypes.number,
  downloads: PropTypes.number,
  meta: PropTypes.shape(IMeta),
};

export const ISearchUser = {
  ...IUser,
  followed_by_user: PropTypes.bool,
  photos: PropTypes.arrayOf(
    PropTypes.shape(
      lazyFunction(function () {
        return IPreviewPhotos;
      })
    )
  ),
};
