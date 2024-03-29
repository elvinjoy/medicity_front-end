import React from 'react';
import './footer.css'

const Footer = () => {
    return (
        <div>
            <section className="footer">
                <div className="footer-row">
                    <div className="footer-col">
                        <h4>Info</h4>
                        <ul className="links">
                            <li><a href="/aboutus">About Us</a></li>
                            <li><a href="/appointment">Appointment</a></li>
                            <li><a href="#">Customers</a></li>
                            <li><a href="#">Service</a></li>
                            <li><a href="#">Contact us</a></li>
                        </ul>
                    </div>

                    <div className="footer-col">
                        <h4>Explore</h4>
                        <ul className="links">
                            <li><a href="#">Health Packages</a></li>
                            <li><a href="#">International Patients</a></li>
                            <li><a href="#">Collection</a></li>
                            <li><a href="#">Feedback</a></li>
                            <li><a href="#">Gallery</a></li>
                            <li><a href="#">Brochure</a></li>
                        </ul>
                    </div>

                    <div className="footer-col">
                        <h4>Legal</h4>
                        <ul className="links">
                            <li><a href="#">Customer Agreement</a></li>
                            <li><a href="#">Privacy Policy</a></li>
                            <li><a href="#">GDPR</a></li>
                            <li><a href="#">Security</a></li>
                            <li><a href="#">Testimonials</a></li>
                            <li><a href="#">Media Kit</a></li>
                        </ul>
                    </div>

                    <div className="footer-col">
                        <h4>Newsletter</h4>
                        <p>
                            Subscribe to our newsletter for a weekly dose
                            of news, updates, helpful tips, and
                            exclusive offers.
                        </p>
                        <form action="#">
                            <input type="text" placeholder="Your email" required />
                            <button type="submit">SUBSCRIBE</button>
                        </form>
                        <div className="icons">
                            <a href="https://www.facebook.com"><i className="fa-brands fa-facebook-f"></i></a>
                            <a href="https://twitter.com"><i className="fa-brands fa-twitter"></i></a>
                            <a href="https://www.linkedin.com"><i className="fa-brands fa-linkedin"></i></a>
                            <a href="https://github.com"><i className="fa-brands fa-github"></i></a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Footer;
