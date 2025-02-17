import React from "react";
import dealsImg from "../../assets/deals.png";

const DealsSection = () => {
  return (
    <section className="section__container deals__container">
      <div className="deals__image">
        <img src={dealsImg} alt="" />
      </div>
      <div className="deals__content">
        <h5>upto 20% discount</h5>
        <h4>Deals of the Month</h4>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut
          quibusdam libero minus modi maiores molestiae commodi voluptatum saepe
          deserunt numquam odit ipsa eum error quis pariatur consectetur fugiat
          possimus, blanditiis placeat, itaque delectus? Perspiciatis numquam
          quia dolorum laborum vero inventore?
        </p>
        <div className="deals__countdown flex-wrap">
            <div className="deals__countdown__card">
                <h4>14</h4>
                <p>Days</p>
            </div>
            <div className="deals__countdown__card">
                <h4>20</h4>
                <p>Hours</p>
            </div>
            <div className="deals__countdown__card">
                <h4>14</h4>
                <p>Mins</p>
            </div>
            <div className="deals__countdown__card">
                <h4>14</h4>
                <p>Secs</p>
            </div>
        </div>
      </div>
    </section>
  );
};

export default DealsSection;
