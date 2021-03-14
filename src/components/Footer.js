import React from "react";

export default function Footer() {
  return (
    <div className="footer">
      <div className="row center">
        <div>
          <h1>JOIN AREOSH'S MAILING LIST</h1>
          <ul>
            <li>In order to get promo codes, info on new arrivals and more.</li>

            <input
              className="finput"
              placeholder="Enter Email Address                                                                "
              type="text"
            ></input>
          </ul>
          <ul>
            <i class="fab fa-facebook"></i>
            <i class="fab fa-twitter"></i>
            <i class="fab fa-pinterest"></i>
            <i class="fab fa-instagram"></i>
            <i class="fab fa-youtube"></i>
          </ul>
          <ul className="f">© 2021 Areosh - All Rights Reserved </ul>
        </div>

        <div className="fgrid">
          <p>AREOSH</p>
          <ul>
            <li>About Us</li>
            <li>Careers</li>
            <li>Gift Cards</li>
            <li>Sustainability</li>
            <li>Accessibility</li>
          </ul>
        </div>
        <div className="fgrid">
          <p>POLICY</p>
          <ul>
            <li>Cookies Policy</li>
            <li>Privacy Policy</li>
            <li>Terms of Use</li>
            <li>COVID-19 Information</li>
            <li>Promotion Details</li>
          </ul>
        </div>
        <div>
          <p>GET HELP</p>
          <ul>
            <li>Contact Us</li>
            <li>Size Guide</li>
            <li>Shipping</li>
            <li>Returns and Exchanges</li>
            <li>Payment and Security</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
