import React from "react";

export default function Reassure() {
  return (
    <div className="row center reaBackground">
      <div className="row center reaCart">
        <div className="reaIcon">
          <i className="reaIcon" class="fas fa-phone-alt"></i>
        </div>
        <div>
          <p className="reaTitle">AREOSH CONCIERGE</p>
          <p>
            Connect with Areosh Concierge <br></br> via chat, email or phone.
          </p>
          <a className="aPersona">Contact Us</a>
        </div>
      </div>
      <div className="row center reaCart">
        <div className="reaIcon">
          <i class="fas fa-shipping-fast"></i>
        </div>
        <div>
          <p className="reaTitle">FREE SHIPPING</p>
          <p>
            Free shipping on all orders <br></br> over $200.{" "}
          </p>
          <a className="aPersona">Shop Now</a>
        </div>
      </div>
      <div className="row center reaCart">
        <div className="reaIcon">
          <i class="fas fa-gift"></i>
        </div>
        <div>
          <p className="reaTitle">GIFT CARDS</p>
          <p>
            For your loved ones. <br></br> Gift Cards start from $50.
          </p>
          <a className="aPersona">Shop Gift Cards</a>
        </div>
      </div>
    </div>
  );
}
