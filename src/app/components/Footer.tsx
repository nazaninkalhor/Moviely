import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="footer bg-red-900 text-white p-10 mt-16">
      <aside>
        <Link
          href="/"
          className="btn btn-ghost text-2xl sm:text-4xl text-white font-extrabold "
        >
          Moviely
        </Link>
        <p className="ms-5">
          Cinema For Everyone!
          <br />
          Created With Passion and Love
        </p>
      </aside>
      <nav>
        <h6 className="footer-title">Services</h6>
        <a className="link link-hover">Branding</a>
        <a className="link link-hover">Design</a>
        <a className="link link-hover">Marketing</a>
        <a className="link link-hover">Advertisement</a>
      </nav>
      <nav>
        <h6 className="footer-title">Company</h6>
        <a className="link link-hover">About us</a>
        <a className="link link-hover">Contact</a>
        <a className="link link-hover">Jobs</a>
        <a className="link link-hover">Press kit</a>
      </nav>
      <nav>
        <h6 className="footer-title">Legal</h6>
        <a className="link link-hover">Terms of use</a>
        <a className="link link-hover">Privacy policy</a>
        <a className="link link-hover">Cookie policy</a>
      </nav>
    </footer>
  );
};

export default Footer;
