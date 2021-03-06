import PropTypes from "prop-types";
import { lazyFunction } from "../../utils";

import { IMeta } from "./generic";
import { ILinks } from "./links";
import { IPhoto, IPreviewPhotos } from "./photo";
import { ITag } from "./tags";
import { IUser } from "./user";

export const ICollection = {
  id: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  published_at: PropTypes.string,
  last_collected_at: PropTypes.string,
  updated_at: PropTypes.string,
  curated: PropTypes.bool,
  featured: PropTypes.bool,
  total_photos: PropTypes.number,
  private: PropTypes.bool,
  share_key: PropTypes.string,
  tags: PropTypes.arrayOf(PropTypes.shape(ITag)),
  links: PropTypes.shape(ILinks),
  user: PropTypes.shape(
    lazyFunction(function () {
      return IUser;
    })
  ),
  cover_photo: PropTypes.shape(
    lazyFunction(function () {
      return IPhoto;
    })
  ),
  preview_photos: PropTypes.arrayOf(
    PropTypes.shape(
      lazyFunction(function () {
        return IPreviewPhotos;
      })
    )
  ),
};

export const ICollectionExtended = {
  meta: PropTypes.shape(IMeta),
  ...ICollection,
};

export const IRelatedCollections = {
  total: PropTypes.number,
  type: PropTypes.string,
  results: PropTypes.arrayOf(PropTypes.shape(ICollection)),
};
