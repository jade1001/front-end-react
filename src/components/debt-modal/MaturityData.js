import React, { Component } from "react";
import "./Maturity.css";

class MaturityData extends Component {
  render() {
    return (
      <div class="main ">
        <div class="container">
          <div class="row" id="frow">
            <div class="col fcolumn text-muted">ISIN</div>
            <div class="col scolumn text-muted">Currency</div>
            <div class="col tcolumn text-muted">Total redemption Value</div>
            <div class="w-100"></div>

          </div>
          <div class="row " id="srow">
            <div class="col fcolumn text-muted">Maturity Date</div>
            <div class="col scolumn text-muted">Tenor</div>
            <div class="col tcolumn text-muted">Currently Allocated</div>
            <div class="w-100"></div>
            </div>
        </div>
      </div>
    );
  }
}

export default MaturityData;
