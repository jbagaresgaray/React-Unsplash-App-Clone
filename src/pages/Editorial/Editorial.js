import React from "react";
import { useSelector } from "react-redux";
import AppCardItem from "../../components/AppCardItem";
import { photosSelectors } from "../../stores/slices/photosSlice";

function Editorial() {
  const PhotosArr = useSelector(photosSelectors.photos);

  return (
    <div className="Editorial">
      <section class="py-5 text-center">
        <div class="row py-lg-5">
          <div class="col-lg-6 col-md-8 mx-auto">
            <h1 class="fw-light">Album example</h1>
            <p class="lead text-muted">
              Something short and leading about the collection below—its
              contents, the creator, etc. Make it short and sweet, but not too
              short so folks don’t simply skip over it entirely.
            </p>
            <p>
              <a href="#" class="btn btn-primary my-2">
                Main call to action
              </a>
              <a href="#" class="btn btn-secondary my-2">
                Secondary action
              </a>
            </p>
          </div>
        </div>
      </section>
      <div class="album py-5 bg-light">
        <div class="container">
          <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            {PhotosArr.map((item, index) => (
              <div class="col">
                <AppCardItem />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Editorial;
