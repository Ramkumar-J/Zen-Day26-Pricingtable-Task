import React from "react";

function Card(props){
    return(
        <div class="col-lg-4">
        <div class="card mb-5 mb-lg-0">
        <div class="card-body">
          <h5 class="card-title text-muted text-uppercase text-center">{props.PriceCard.plan}</h5>
          <h6 class="card-price text-center">${props.PriceCard.price}<span class="period">/month</span></h6>
          <hr/>
          <ul class="fa-ul">
            {
              props.PriceCard.Planinfo.map((info) => {
                 return <li className={info.ismute ? "text-muted" : ""}>
                   <span class="fa-li">
                   <i className={info.ischeck ? "fas fa-check" : "fas fa-times"}></i>
                   </span><span className={info.isbold ? "fw-bolder" : ""}>{info.feature}</span></li>
              }) 
            }
            </ul>
          <div class="d-grid">
            <a href="#" class="btn btn-primary text-uppercase">Button</a>
          </div>
        </div>
      </div>
      </div>
    );
}

export default Card;