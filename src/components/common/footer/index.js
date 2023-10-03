import React from "react";
import "./footer.css";
//import zlogof from "./Assests/z-logof.png";
// import gplay from "./Assests/gplay.png";
//import Astore from "./Assests/Astore.png";
const Footer = () => {
  return (
    <div className="zfot">
      <div className="zfot-wrapper">
        <div className="zfot-t">
          <div className="zfot-tlogo">
            <img src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png?fit=around|198:42&crop=198:42;*,*" alt="" />
          </div>

          <div className="zfot-tbtn">
            <button>India</button>
            <button>English</button>
          </div>
        </div>
        <div className="zfot-m">
          <div className="zfotm1">
            <ul className="fotul">
              <li>
                <h4>COMPANY</h4>
              </li>
              <li>
                <a href="https://www.zomato.com/who-we-are" target="_blank">
                  <p>Who We Are</p>
                </a>
              </li>
              <li>
                <a href="https://blog.zomato.com/" target="_blank">
                  <p>Blog</p>
                </a>
              </li>
              <li>
                <a href="https://www.zomato.com/careers" target="_blank">
                  <p>Careers</p>
                </a>
              </li>
              <li>
                <a href="https://www.zomato.com/report-fraud" target="_blank">
                  <p>Report Fraud</p>
                </a>
              </li>
              <li>
                <a href="https://www.zomato.com/contact" target="_blank">
                  <p>Contact</p>
                </a>
              </li>
              <li>
                <a
                  href="https://www.zomato.com/investor-relations"
                  target="_blank"
                >
                  <p>Inverstor Relations</p>
                </a>
              </li>
            </ul>
          </div>

          <div className="zfotm2">
            <ul className="fotul">
              <li>
                <h4>FOR FOODIES</h4>
              </li>
              <li>
                <a href="https://www.zomato.com/policies" target="_blank">
                  <p>Code of conduct</p>
                </a>
              </li>
              <li>
                <a href="https://community.zomato.com/" target="_blank">
                  <p>Community</p>
                </a>
              </li>
              <li>
                <a href="https://www.zomato.com/bloggers" target="_blank">
                  <p>Blogger Help</p>
                </a>
              </li>
              <li>
                <a href="https://www.zomato.com/mobile" target="_blank">
                  <p>Mobile Aps</p>
                </a>
              </li>
            </ul>
          </div>

          <div className="zfotm3">
            <ul className="fotul">
              <li>
                <h4>FOR RESTAURANTS</h4>
              </li>
              <li>
                <a href="">
                  <p>Add restaurant</p>
                </a>
              </li>
              <li>
                <h4>FOR ENTERPRISES</h4>
              </li>
              <li>
                <a
                  href="https://www.zomato.com/enterprise-solutions"
                  target="_blank"
                >
                  <p>Zomato for Work</p>
                </a>
              </li>
            </ul>
          </div>

          <div className="zfotm4">
            <ul className="fotul">
              <li>
                <h4>FOR YOU</h4>
              </li>
              <li>
                <a
                  href="https://www.zomato.com/policies/privacy/"
                  target="_blank"
                >
                  <p>Privacy</p>
                </a>
              </li>
              <li>
                <a href="https://www.zomato.com/conditions" target="_blank">
                  <p>Terms</p>
                </a>
              </li>
              <li>
                <a href="https://www.zomato.com/security" target="_blank">
                  <p>Security</p>
                </a>
              </li>
              <li>
                <a href="https://www.zomato.com/directory" target="_blank">
                  <p>Sitemap</p>
                </a>
              </li>
            </ul>
          </div>

          <div className="zfotm5">
            <ul className="fotul">
              <li>
                <h4>SOCIAL LINKS</h4>
              </li>
              <li>
                <div className="sicons">
                  <a
                    href="https://www.facebook.com/zomato"
                    target="_blank"
                    class="fa fa-facebook"
                  ></a>
                  <a
                    href="https://twitter.com/zomato"
                    target="_blank"
                    class="fa fa-twitter"
                  ></a>
                  <a
                    href="https://www.instagram.com/zomato/"
                    target="_blank"
                    class="fa fa-instagram"
                  ></a>
                  <a
                    href="https://www.youtube.com/zomato"
                    target="_blank"
                    class="fa fa-youtube"
                  ></a>
                  <a
                    href="https://in.linkedin.com/company/zomato"
                    target="_blank"
                    class="fa fa-linkedin"
                  ></a>
                </div>
              </li>

              <li>
                <div className="gstore">
                  <img src="https://b.zmtcdn.com/data/webuikit/9f0c85a5e33adb783fa0aef667075f9e1556003622.png" alt="" />
                </div>
                <div className="Astore">
                  <img src="https://b.zmtcdn.com/data/webuikit/9f0c85a5e33adb783fa0aef667075f9e1556003622.png" alt="" />
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="zfot-b">
          <p>
            By continuing past this page, you agree to our Terms of Service,
            Cookie Policy, Privacy Policy and Content Policies. All trademarks
            are properties of their respective owners. 2008-2019 © Zomato™ Media
            Pvt Ltd. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
