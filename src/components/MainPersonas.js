import React from "react";

export default function MainPersonas() {
  return (
    <div>
      <div className="row center card-body">
        <img
          className="persona"
          src="https://images.unsplash.com/photo-1602102618389-8431a5ffd9fe?ixid=MXwxMjA3fDB8MHx0b3BpYy1mZWVkfDEwNXxTNE1LTEFzQkI3NHx8ZW58MHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
        />
      </div>
      <h1 className="textOver">
        Scent is often underestimated, <br></br> when it can be the most
        evocative.
      </h1>
      <div className="row center">
        <div className="card-body">
          <img
            className="persona"
            src="https://images.unsplash.com/photo-1613498751678-e062db48c549?ixid=MXwxMjA3fDB8MHx0b3BpYy1mZWVkfDE2MnxTNE1LTEFzQkI3NHx8ZW58MHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
          />
          <h1 className="h1persona">OLENE</h1>
          <a className="aPersona">Shop the Olene</a>
        </div>
        <div className="card-body">
          <img
            className="persona"
            src="https://images.unsplash.com/photo-1600247991036-ab063c4c49ba?ixid=MXwxMjA3fDB8MHx0b3BpYy1mZWVkfDIxOXxTNE1LTEFzQkI3NHx8ZW58MHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
          />
          <h1 className="h1persona">LOEWE 001</h1>
          <a className="aPersona">Shop the Loewe 001</a>
        </div>
      </div>
    </div>
  );
}
