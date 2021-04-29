import React from "react";
import {connect} from "react-redux";

import CollectionPreview from "../../components/collection-preview/collection-preview.comopnent";
import { createStructuredSelector } from "reselect";
import {selectCollections} from "../../redux/shop/shop.selectors";
//we need to store data of actual colllection so we make class comp

const ShopPage =({collections})=>  (
      <div className="shop-page">
        {collections.map(({ id, ...otherCollectionProps }) => (
          <CollectionPreview key={id} {...otherCollectionProps} />
        ))}
      </div>
    );
  
const mapStateToProps=createStructuredSelector({
  collections: selectCollections
})
export default connect(mapStateToProps)(ShopPage);
