import React from "react";
import Style from "./index.module.css";
import mePic from "../../Img/mePic.png";
export default function AboutMe() {
  return (
    <>
      <div className={Style.aboutMe} id="about">
        <h1 className={Style.myInfo}>About Me</h1>

        <div className={Style.parellogram}>
          <div className={Style.parellogramShape}>
            <div className={Style.shape}>
              <div className={Style.left}>
                <div className={Style.imgMe}>
                  <img
                    className={Style.mePic}
                    src={mePic}
                    alt="portfolio img"
                  ></img>
                </div>
              </div>
              <div className={Style.right}>
                <p>
                  I am from Jaipur, the capital city of Rajasthan. I'm
                  B.Sc(Maths) graduate transitioning my career to a developer.
                  Currently, I'm learning ReactJS. Instead of mugging up the
                  concepts, I rather love to build the stuff.
                  <br />
                  <br />
                  You can find some of my projects here -
                  <a href="https://github.com/ramavatarmeena99">
                    <p>https://github.com/ramavatarmeena99</p>
                  </a>
                  <br />
                  You can connect with me if you want -
                  <br />
                  ✔ To collaborate on any project
                  <br />✔ Help with ReactJs
                  <br />✔ To hire me
                  <br />
                  Feel free to reach out to me via email or Shot me a DM. 📩
                  meenaramavatar48@gmail.com
                </p>
              </div>
            </div>
          </div>
          <div className={Style.forReview}>
            <div className={Style.bestReview}>
              <div className={Style.reviews}>
                <div className={Style.reviewerComment}>
                  <h3>“Simplicity is the baddest choice to be the best.“</h3>
                </div>
                <div className={Style.reviewerName}>
                  <h5>-ramavatar meena</h5>
                </div>
              </div>
              <div className={Style.reviews}>
                <div className={Style.reviewerComment}>
                  <h3>
                    “I know I’m not successful enough, but I’m passionate enough
                    not to worry about success.“
                  </h3>
                </div>
                <div className={Style.reviewerName}>
                  <h5>-ramavatar meena</h5>
                </div>
              </div>
              <div className={Style.reviews}>
                <div className={Style.reviewerComment}>
                  <h3>
                    “Creativity is the driver of an unstoppable train called
                    Passion.”
                  </h3>
                </div>
                <div className={Style.reviewerName}>
                  <h5>-ramavatar meena</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
