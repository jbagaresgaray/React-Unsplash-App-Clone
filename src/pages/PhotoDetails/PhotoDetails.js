import React, { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router";
import isEmpty from "lodash/isEmpty";

import AppFooter from "../../components/AppFooter";
import AppHeader from "../../components/AppHeader";
import AppRelatedPhotos from "../../components/AppRelatedPhotos";
import AppFastImage from "../../components/AppFastImage";
import PhotoDetailsHeader from "./components/PhotoDetailsHeader";
import PhotoDetailsFooter from "./components/PhotoDetailsFooter";

import { ROUTES } from "../../router/routes";

import { getPhoto, getPhotoRelated } from "../../stores/middleware/photos";
import { photosSelectors } from "../../stores/slices/photosSlice";

import "./PhotoDetails.scss";

function PhotoDetailsScreen() {
  const params = useParams();
  const dispatch = useDispatch();
  const history = useHistory();

  const image = useSelector(photosSelectors.photo);
  const relatedPhotos = useSelector(photosSelectors.relatedPhotos);
  // const isLoadingPhoto = useSelector(photosSelectors.isLoadingPhoto);
  const isLoadingRelatedPhotos = useSelector(
    photosSelectors.isLoadingRelatedPhotos
  );

  console.log("image: ", image);

  useEffect(() => {
    if (params && params.id) {
      dispatch(getPhoto(params.id));
      dispatch(getPhotoRelated(params.id));
    }

    window.scrollTo(0, 0);
  }, [dispatch, params]);

  const onRelatedImagePress = (id) => {
    history.push(`${ROUTES.PHOTO}/${id}`);
  };

  const onUserPress = (username) => {
    console.log("username: ", username);
  };

  const onDownloadPress = () => {};

  return (
    <div className="PhotoDetailsScreen">
      <AppHeader />
      <main>
        <Container>
          <PhotoDetailsHeader
            image={image}
            onDownloadPress={onDownloadPress}
            onUserPress={onUserPress}
          />
          <div className="py-5">
            <Row>
              <Col
                xl={{
                  span: 8,
                  offset: 2,
                }}
                lg={{
                  span: 8,
                  offset: 2,
                }}
                md={12}
                sm={12}
              >
                <AppFastImage uri={image?.urls?.regular} />
              </Col>
            </Row>
          </div>
          <PhotoDetailsFooter image={image} />
          {!isEmpty(relatedPhotos) && (
            <AppRelatedPhotos
              photos={relatedPhotos}
              isLoadingPhotos={isLoadingRelatedPhotos}
              onImagePress={onRelatedImagePress}
              onUserPress={onUserPress}
            />
          )}
        </Container>
      </main>
      <AppFooter />
    </div>
  );
}

export default PhotoDetailsScreen;
