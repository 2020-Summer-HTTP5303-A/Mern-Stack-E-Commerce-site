import React from 'react';
import img3 from './handbag1.jpg';
import img2 from './pant1.jpg';
import img1 from './shoe1.jpg';
    function HomePage(){

        return(

        
            <section class="section-name padding-y-sm">
                <div class="container">

                <header class="section-heading">
                    <h3 class="section-title text-center my-5">Popular products</h3>
                </header>

                    
                <div class="row">
                    <div class="col-md-3">
                        <div href="#" class="card card-product-grid">
                            <a href="#" class="img-wrap"> <img src="images/items/1.jpg"/> </a>
                            <figcaption class="info-wrap">
                                <a href="#" class="title">Just another product name</a>
                                <div class="price mt-1">$179.00</div> 
                            </figcaption>
                        </div>
                    </div> 
                    <div class="col-md-3">
                        <div href="#" class="card card-product-grid">
                            <a href="#" class="img-wrap"> <img src="images/items/2.jpg"/> </a>
                            <figcaption class="info-wrap">
                                <a href="#" class="title">Some item name here</a>
                                <div class="price mt-1">$280.00</div> 
                            </figcaption>
                        </div>
                    </div>
                    <div class="col-md-3">
                        <div href="#" class="card card-product-grid">
                            <a href="#" class="img-wrap"> <img src="images/items/3.jpg"/> </a>
                            <figcaption class="info-wrap">
                                <a href="#" class="title">Great product name here</a>
                                <div class="price mt-1">$56.00</div> 
                            </figcaption>
                        </div>
                    </div>
                    <div class="col-md-3">
                        <div href="#" class="card card-product-grid">
                            <a href="#" class="img-wrap"> <img src="images/items/4.jpg"/> </a>
                            <figcaption class="info-wrap">
                                <a href="#" class="title">Just another product name</a>
                                <div class="price mt-1">$179.00</div> 
                            </figcaption>
                        </div>
                    </div>
                    <div class="col-md-3">
                        <div href="#" class="card card-product-grid">
                            <a href="#" class="img-wrap"> <img src="images/items/5.jpg"/> </a>
                            <figcaption class="info-wrap">
                                <a href="#" class="title">Just another product name</a>
                                <div class="price mt-1">$179.00</div>
                            </figcaption>
                        </div>
                    </div> 
                    <div class="col-md-3">
                        <div href="#" class="card card-product-grid">
                            <a href="#" class="img-wrap"> <img src="images/items/6.jpg"/> </a>
                            <figcaption class="info-wrap">
                                <a href="#" class="title">Some item name here</a>
                                <div class="price mt-1">$280.00</div> 
                            </figcaption>
                        </div>
                    </div> 
                    <div class="col-md-3">
                        <div href="#" class="card card-product-grid">
                            <a href="#" class="img-wrap"> <img src="images/items/7.jpg"/> </a>
                            <figcaption class="info-wrap">
                                <a href="#" class="title">Great product name here</a>
                                <div class="price mt-1">$56.00</div>
                            </figcaption>
                        </div>
                    </div> 
                    <div class="col-md-3">
                        <div href="#" class="card card-product-grid">
                            <a href="#" class="img-wrap"> <img src="images/items/9.jpg"/> </a>
                            <figcaption class="info-wrap">
                                <a href="#" class="title">Just another product name</a>
                                <div class="price mt-1">$179.00</div>
                            </figcaption>
                        </div>
                    </div> 
                </div> 

                </div>
            </section>
    );
    }
    export default HomePage;