import React, { useEffect } from "react";
import {
  Col,
  Container,
  Row,
  Button,
  SplitButton,
  Dropdown,
} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router";
import isEmpty from "lodash/isEmpty";
import moment from "moment";

import AppFooter from "../../components/AppFooter";
import AppHeader from "../../components/AppHeader";
import AppRelatedPhotos from "../../components/AppRelatedPhotos";
import { ROUTES } from "../../router/routes";
import { getPhoto, getPhotoRelated } from "../../stores/middleware/photos";

import { photosSelectors } from "../../stores/slices/photosSlice";

import "./PhotoDetails.scss";
import AppFastImage from "../../components/AppFastImage";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendar,
  faHeart,
  faInfoCircle,
  faMapMarkerAlt,
  faPlus,
  faShare,
  faShieldAlt,
} from "@fortawesome/free-solid-svg-icons";
import AppUserCardItem from "../../components/AppUserCardItem";

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
          <div className="py-5 d-flex flex-row justify-content-between align-items-center">
            <div className="w-25">
              <div className="PhotoDetailsScreen__User">
                {image?.sponsorship !== null && (
                  <AppUserCardItem
                    user={image?.sponsorship?.sponsor}
                    tagline={image?.sponsorship?.tagline}
                    onMorePress={onDownloadPress}
                    onUserPress={onUserPress}
                  />
                )}
                {image?.sponsorship == null && (
                  <AppUserCardItem
                    user={image?.user}
                    onMorePress={onDownloadPress}
                    onUserPress={onUserPress}
                  />
                )}
              </div>
            </div>
            <div>
              <Button variant="outline-secondary m-1">
                <FontAwesomeIcon icon={faHeart} />
              </Button>
              <Button variant="outline-secondary m-1">
                <FontAwesomeIcon icon={faPlus} />
              </Button>
              <SplitButton
                variant="outline-secondary"
                title="Download"
                id="segmented-button-dropdown-2"
              >
                <Dropdown.Item href="#">Small</Dropdown.Item>
                <Dropdown.Item href="#">Medium</Dropdown.Item>
                <Dropdown.Item href="#">Large</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item href="#">Original</Dropdown.Item>
              </SplitButton>
            </div>
          </div>
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
          <div className="py-5">
            <div className="PhotoDetailsScreen__Stats_Info">
              <div className="PhotoDetailsScreen__Stats">
                <div className="mr-4">
                  <h3>Views</h3>
                  <p className="lead">{image.views}</p>
                </div>
                <div className="mx-4">
                  <h3>Downloads</h3>
                  <p className="lead">{image.downloads}</p>
                </div>
                <div className="mx-4">
                  <h3>Featured in</h3>
                  <div className="d-flex flex-row align-items-center">
                    <p className="lead">
                      Editorial
                      {image?.topics && <span>,</span>}
                    </p>
                    {image?.topics.map((item, index) => (
                      <p className="lead ms-1" key={index}>
                        {item.title},{" "}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
              <div>
                <Button variant="outline-secondary m-1">
                  <FontAwesomeIcon icon={faShare} />
                  &nbsp;Share
                </Button>
                <Button variant="outline-secondary m-1">
                  <FontAwesomeIcon icon={faInfoCircle} />
                  &nbsp;Info
                </Button>
              </div>
            </div>
            <div className="PhotoDetailsScreen__Info">
              <div className="d-block w-25">
                {image?.location?.title && (
                  <div className="PhotoDetailsScreen__Info__items">
                    <FontAwesomeIcon icon={faMapMarkerAlt} />
                    <span>{image?.location?.title}</span>
                  </div>
                )}
                <div className="PhotoDetailsScreen__Info__items">
                  <FontAwesomeIcon icon={faCalendar} />
                  <span>
                    Published on
                    {moment(new Date(image?.created_at)).format(
                      "MMMM DD, YYYY"
                    )}
                  </span>
                </div>
                <a
                  className="PhotoDetailsScreen__Info__items"
                  href="https://unsplash.com/license"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FontAwesomeIcon icon={faShieldAlt} />
                  <span>Free to use under the Unsplash License</span>
                </a>
              </div>
              <div className="d-block">
                <p className="PhotoDetailsScreen__Description">
                  {image.description}
                </p>
              </div>
            </div>
          </div>
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
