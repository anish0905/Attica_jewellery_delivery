import React from "react";
import "./Footer.css";
import { assets } from "../../assets/assets";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
const Footer = () => {
  return (
    <>
      <div className="footer" id="footer">
        <div className="footer-content-left">
          <img src={assets.logo} alt="" srcset="" />
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. A corporis
            totam nesciunt modi odit. Quisquam aperiam, placeat corrupti
            laudantium voluptatem perferendis repudiandae eligendi, odio quod
            distinctio blanditiis consectetur voluptate cumque!
          </p>
          <div className="footer-social-icons">
            <FacebookIcon style={{ fontSize: 40 }} />

            <InstagramIcon style={{ fontSize: 40 }} />

            <WhatsAppIcon style={{ fontSize: 40 }} />
          </div>
        </div>

        <div className="footer-content-center">
          <h2>COMPANY</h2>
          <ul>
            <li>HOME</li>
            <li>ABOUT US</li>
            <li>DELIVERY</li>
            <li>PRIVACY POLICY</li>
          </ul>
        </div>

        <div className="footer-content-right">
          <h2>GET IN TOUCH</h2>
          <ul>
            <li>+917260858715</li>
            <li>contact@gmail.com</li>
          </ul>
        </div>
      </div>
      <hr className="hr" />
      <div className="footer-center">
        <p>@copyright-2024 - This website is not copy right</p>
      </div>
    </>
  );
};

export default Footer;
