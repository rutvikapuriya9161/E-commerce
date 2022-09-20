import React from 'react';

function ProductDetail(props) {
    return (
        <main id="main">
            <section className="breadcrumb_part">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="breadcrumb_iner">
                                <h2>product Detail</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div className="product_image_area">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-12">
                            <div className="product_img_slide owl-carousel">
                                <div className="single_product_img">
                                    <img src="img/product/single_product.png" alt="#" className="img-fluid" />
                                </div>
                                <div className="single_product_img">
                                    <img src="img/product/single_product.png" alt="#" className="img-fluid" />
                                </div>
                                <div className="single_product_img">
                                    <img src="img/product/single_product.png" alt="#" className="img-fluid" />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-8">
                            <div className="single_product_text text-center">
                                <h3>Foam filling cotton slow <br />
                                    rebound pillows</h3>
                                <p>
                                    Seamlessly empower fully researched growth strategies and interoperable internal or “organic” sources. Credibly innovate granular internal or “organic” sources whereas high standards in web-readiness. Credibly innovate granular internal or organic sources whereas high standards in web-readiness. Energistically scale future-proof core competencies vis-a-vis impactful experiences. Dramatically synthesize integrated schemas. with optimal networks.
                                </p>
                                <div className="card_area">
                                    <div className="product_count_area">
                                        <p>Quantity</p>
                                        <div className="product_count d-inline-block">
                                            <span className="product_count_item inumber-decrement"> <i className="ti-minus" /></span>
                                            <input className="product_count_item input-number" type="text" defaultValue={1} min={0} max={10} />
                                            <span className="product_count_item number-increment"> <i className="ti-plus" /></span>
                                        </div>
                                        <p>$5</p>
                                    </div>
                                    <div className="add_to_cart">
                                        <a href="#" className="btn_3">add to cart</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <section className="subscribe_part section_padding">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                            <div className="subscribe_part_content">
                                <h2>Get promotions &amp; updates!</h2>
                                <p>Seamlessly empower fully researched growth strategies and interoperable internal or “organic” sources credibly innovate granular internal .</p>
                                <div className="subscribe_form">
                                    <input type="email" placeholder="Enter your mail" />
                                    <a href="#" className="btn_1">Subscribe</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}

export default ProductDetail;