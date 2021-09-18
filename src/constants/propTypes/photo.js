import PropTypes from "prop-types";
import { IRelatedCollections } from "./collection";
import { ILinks } from "./links";
import { ITopic } from "./topic";
import { IUser } from "./user";
import { IUrls } from "./urls";
import { IExif, IMeta } from "./generic";
import { ITag } from "./tags";
import { ILocation } from "./location";
import { lazyFunction } from "../../utils";

const IProfileImage = {
  small: PropTypes.string,
  medium: PropTypes.string,
  large: PropTypes.string,
};

const IPreviewPhotos = {
  id: PropTypes.string,
  created_at: PropTypes.string,
  updated_at: PropTypes.string,
  blur_hash: PropTypes.string,
  urls: PropTypes.shape(IUrls),
};

const IPhoto = {
  id: PropTypes.string,
  created_at: PropTypes.string,
  updated_at: PropTypes.string,
  promoted_at: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
  color: PropTypes.string,
  blur_hash: PropTypes.string,
  description: PropTypes.string,
  alt_description: PropTypes.string,
  urls: PropTypes.shape(IUrls),
  links: PropTypes.shape(ILinks),
  categories: PropTypes.array,
  likes: PropTypes.number,
  liked_by_user: PropTypes.bool,
  current_user_collections: PropTypes.array,
  sponsorship: PropTypes.object,
  user: PropTypes.shape(
    lazyFunction(function () {
      return IUser;
    })
  ),
};

const IPhotoExtended = {
  ...IPhoto,
  exif: PropTypes.shape(IExif),
  location: PropTypes.shape(ILocation),
  tags: PropTypes.arrayOf(PropTypes.shape(ITag)),
  tags_preview: PropTypes.arrayOf(PropTypes.shape(ITag)),
  views: PropTypes.PropTypes.number,
  downloads: PropTypes.number,
  topics: PropTypes.arrayOf(PropTypes.shape(ITopic)),
  related_collections: PropTypes.shape(IRelatedCollections),
  meta: PropTypes.shape(IMeta),
};

export { IProfileImage, IPreviewPhotos, IPhoto, IPhotoExtended };
