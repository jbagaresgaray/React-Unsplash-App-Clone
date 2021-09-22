import React from "react";
import PropTypes from "prop-types";
import { Card, Badge } from "react-bootstrap";
import { ReactPhotoCollage } from "react-photo-collage";
import { ICollection } from "../../constants/propTypes/collection";

import "./AppCollectionItem.scss";

function AppCollectionItem({ index, item, onPressImage, onPressTitle }) {
  const getProps = () => {
    let previewsArr = [];
    if (item && item?.preview_photos) {
      previewsArr = item?.preview_photos?.map((item) => {
        return {
          source: item?.urls.small,
        };
      });
    }

    return {
      width: "100%",
      height: ["250px", "120px"],
      layout: [1, 3],
      photos: previewsArr,
      showNumOfRemainingPhotos: true,
    };
  };

  return (
    <Card className="AppCollectionItem">
      <div className="AppCollectionItem__ImageContainer">
        {item && item?.preview_photos && <ReactPhotoCollage {...getProps()} />}
      </div>
      <Card.Body>
        <Card.Title>{item?.title}</Card.Title>
        <Card.Text>
          {item?.total_photos} Photos · Curated by {item?.user?.username}
        </Card.Text>
        <div className="AppCollectionItem__TagWrapper">
          {item?.tags &&
            item?.tags.map((tag, index) => (
              <Badge bg="secondary" key={index}>
                {tag.title}
              </Badge>
            ))}
        </div>
      </Card.Body>
    </Card>
  );
}

AppCollectionItem.propTypes = {
  index: PropTypes.number,
  item: PropTypes.shape(ICollection),
  onPressImage: PropTypes.func,
  onPressTitle: PropTypes.func,
};

export default AppCollectionItem;
