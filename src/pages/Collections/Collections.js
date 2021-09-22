import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import AppCollectionItem from "../../components/AppCollectionItem";
import AppFooter from "../../components/AppFooter";
import AppHeader from "../../components/AppHeader";

import { collectionsSelectors } from "../../stores/slices/collectionsSlice";

function CollectionsScreen() {
  const CollectionsArr = useSelector(collectionsSelectors.collections);

  const onPressImage = (id) => {};

  const onPressTitle = (id) => {};

  return (
    <div className="Collections">
      <AppHeader />
      <main>
        <Container>
          <div className="py-5 text-left">
            <h2>Collections</h2>
            <p className="lead">
              Explore the world through topics of beautiful photos free to use
              under the <br /> Unsplash License.
            </p>
          </div>
          <div className="py-5">
            <Row md="3" sm="2" className="row-cols-1 g-3">
              {CollectionsArr.map((collection, index) => (
                <Col key={index}>
                  <AppCollectionItem
                    key={index}
                    item={collection}
                    onPressImage={() => onPressImage(collection.id)}
                    onPressTitle={() => onPressTitle(collection.id)}
                  />
                </Col>
              ))}
            </Row>
          </div>
        </Container>
      </main>
      <AppFooter />
    </div>
  );
}

export default CollectionsScreen;
