import React from 'react';
import { render } from '@testing-library/react';
function ProductDescription(){
    return(
<div class="col-sm-12 col-md-12 col-lg-12">
    <div class="container">
    <div class="product-content product-wrap product-deatil">
        <div class="row">
            <div class="col-md-5 col-sm-12 col-xs-12">
                <div class="product-image">
                   
                </div>
            </div>
            <div class="col-md-7 col-sm-12 col-xs-12">
                <h2 class="Productname">
                    Product Name Here
                    <small>Sold by <a href="#">Madhu</a></small>
                    <i class="fa fa-star fa-2x text-primary"></i>
                    <i class="fa fa-star fa-2x text-primary"></i>
                    <i class="fa fa-star fa-2x text-primary"></i>
                    <i class="fa fa-star fa-2x text-primary"></i>
                    <i class="fa fa-star fa-2x text-muted"></i>
                    <span class="fa fa-2x"></span>
                    <a href="#">1 customer reviews</a>
                </h2>
                <hr/>
                <h3 class="price-container">
                    $999.99
                </h3>
                <div class="purchase">
                    <ul>
                        <li>
                            <button type="button" class="btn btn-warning">ADD TO CART</button>
                        </li>
                        <li>
                            <button type="button" class="btn btn-primary">BUY NOW</button>
                        </li>
                        <li>
                            <button type="button" class="btn btn-primary">ADD TO WISHLIST</button>
                        </li>
                    </ul>
                </div>
                <hr />
                <div class="description description-tabs">
                    <ul class="nav nav-tabs nav-fill">
                        <li class="active mr-auto"><a href="#more-information" data-toggle="tab" class="no-margin">Description </a></li>
                        <li class="mr-auto"><a href="#specifications" data-toggle="tab">Specifications</a></li>
                        <li class="mr-auto"><a href="#reviews" data-toggle="tab">Reviews</a></li>
                    </ul>
                    <div class="tab-content">
                        <div class="tab-pane active " id="more-information">
                            <br />
                            <strong>Description Title</strong>
                            <p>Sample</p>
                        </div>
                        <div class="tab-pane fade" id="specifications">
                            
                            <p>Sample</p>
                        </div>
                        <div class="tab-pane fade" id="reviews">
                            <br />
                            <form method="post" class="well padding-bottom-10" onsubmit="return false;">
                                <textarea rows="2" class="form-control mb-2" placeholder="Write a review"></textarea>
                                <div class="margin-top-10 ">
                                    <button type="submit" class="btn btn-sm btn-primary pull-right">Submit</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <hr />  
            </div>
        </div>
    </div>
</div>
</div>
    )
}
export default ProductDescription;