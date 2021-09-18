import PropTypes from "prop-types";
import { IPhoto } from "./photo";
import { lazyFunction } from "../../utils";

const ITagSourceAncestrySlug = {
  slug: PropTypes.string,
  pretty_slug: PropTypes.string,
};

const ITagSourceAncestry = {
  type: PropTypes.shape(ITagSourceAncestrySlug),
  category: PropTypes.shape(ITagSourceAncestrySlug),
};

const ITagSource = {
  ancestry: PropTypes.shape(ITagSourceAncestry),
  title: PropTypes.string,
  subtitle: PropTypes.string,
  description: PropTypes.string,
  meta_title: PropTypes.string,
  meta_description: PropTypes.string,
  // cover_photo: PropTypes.shape(IPhoto),
  cover_photo: PropTypes.shape(
    lazyFunction(function () {
      return IPhoto;
    })
  ),
};

const ITag = {
  type: PropTypes.string,
  title: PropTypes.string,
  source: PropTypes.shape(ITagSource),
};

const ITags = {
  custom: PropTypes.arrayOf(PropTypes.shape(ITag)),
  aggregated: PropTypes.arrayOf(PropTypes.shape(ITag)),
};

export { ITagSourceAncestrySlug, ITagSourceAncestry, ITagSource, ITag, ITags };
