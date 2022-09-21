import React from 'react';

function About(props) {
    return (
        <main id="main">
            <section className="breadcrumb_part">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="breadcrumb_iner">
                                <h2>About</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* breadcrumb part end*/}
            {/* product list part start*/}
            <section className="about_us padding_top">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                            <div className="about_us_content">
                                <h5>Our Mission</h5>
                                <h3>Donec imperdiet congue orci consequat mattis. Donec rutrum porttitor sollicitudin. Pellentesque id dolor tempor sapien feugiat ultrices nec sed neque.</h3>
                                <div className="about_us_video">
                                    <img src="img/about_us_video.png" alt="#" className="img-fluid" />
                                    <a className="about_video_icon popup-youtube" href="https://www.youtube.com/watch?v=DWHB6nTyKDI" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* product list part end*/}
            {/* feature part here */}
            <section className="feature_part section_padding">
                <div className="container">
                    <div className="row justify-content-between">
                        <div className="col-lg-6">
                            <div className="feature_part_tittle">
                                <h3>Credibly innovate granular
                                    internal or organic sources
                                    whereas standards.</h3>
                            </div>
                        </div>
                        <div className="col-lg-5">
                            <div className="feature_part_content">
                                <p>Seamlessly empower fully researched growth strategies and interoperable internal or “organic” sources. Credibly innovate granular internal or “organic” sources whereas high standards in web-readiness.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-lg-3 col-sm-6">
                            <div className="single_feature_part">
                                <img src="img/icon/feature_icon_1.svg" alt="#" />
                                <h4>Credit Card Support</h4>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6">
                            <div className="single_feature_part">
                                <img src="img/icon/feature_icon_2.svg" alt="#" />
                                <h4>Online Order</h4>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6">
                            <div className="single_feature_part">
                                <img src="img/icon/feature_icon_3.svg" alt="#" />
                                <h4>Free Delivery</h4>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6">
                            <div className="single_feature_part">
                                <img src="img/icon/feature_icon_4.svg" alt="#" />
                                <h4>Product with Gift</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* feature part end */}
            {/* client review part here */}
            <section className="client_review">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                            <div className="client_review_slider owl-carousel">
                                <div className="single_client_review">
                                    <div className="client_img">
                                        <img src="img/client.png" alt="#" />
                                    </div>
                                    <p>"Working in conjunction with humanitarian aid agencies, we have supported programmes to help alleviate human suffering.</p>
                                    <h5>- Micky Mouse</h5>
                                </div>
                                <div className="single_client_review">
                                    <div className="client_img">
                                        <img src="img/client_1.png" alt="#" />
                                    </div>
                                    <p>"Working in conjunction with humanitarian aid agencies, we have supported programmes to help alleviate human suffering.</p>
                                    <h5>- Micky Mouse</h5>
                                </div>
                                <div className="single_client_review">
                                    <div className="client_img">
                                        <img src="img/client_2.png" alt="#" />
                                    </div>
                                    <p>"Working in conjunction with humanitarian aid agencies, we have supported programmes to help alleviate human suffering.</p>
                                    <h5>- Micky Mouse</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* client review part end */}
            {/* subscribe part here */}
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

export default About;