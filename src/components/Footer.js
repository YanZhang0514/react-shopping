import React, { Component } from "react";

const Footer = (props) => {
  return (
    <footer>
      <p className="footer-links">
        <a
          href="https://github.com/yanzhang05/react-shopping-cart"
          target="_blank"
        >
          View Source on Github
        </a>
        <span> / </span>
        <a href="mailto:contact@yanzhang05.in" target="_blank">
          Need any help?
        </a>
        <span> / </span>
        <a href="https://twitter.com/Nyanzhang05" target="_blank">
          Say Hi on Twitter
        </a>
        <span> / </span>
        <a href="https://yanzhang05.in" target="_blank">
          Read My Blog
        </a>
      </p>
      <p>
        &copy; 2017 <strong>Veggy</strong> - Organic Green Store
      </p>
    </footer>
  );
};

export default Footer;
