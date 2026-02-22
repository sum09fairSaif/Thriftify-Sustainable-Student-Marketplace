import type { CSSProperties } from "react";
import "./MainLanding.css";

const imageAssets = import.meta.glob("../Assets/Images/*", {
  eager: true,
  import: "default",
}) as Record<string, string>;

const svgAssets = import.meta.glob("../Assets/svgs/*", {
  eager: true,
  import: "default",
}) as Record<string, string>;

const image = (name: string) => imageAssets[`../Assets/Images/${name}`] ?? "";
const svg = (name: string) => svgAssets[`../Assets/svgs/${name}`] ?? "";

const MainLanding = () => {
  return (
    <>
      <header>
        <div className="landing-container">
          <nav>
            <div className="logo">
              <img src={image("main-website-logo.png")} alt="Thriftify logo" />
            </div>
            <ul className="nav-links">
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#browse">Browse</a>
              </li>
              <li>
                <a href="#categories">Categories</a>
              </li>
              <li>
                <a href="#sell-your-items">Sell Your Items</a>
              </li>
              <li>
                <a href="your-profile">Your Profile</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <section id="hero">
        <div className="landing-container">
          <div className="hero-content">
            <h1>
              Thrift Smart,
              <br />
              Shop Online!
            </h1>
            <button type="button" className="btn">
              Start Shopping
            </button>
          </div>
        </div>
      </section>

      <br />
      <br />

      <section id="featured">
        <div className="featured-container">
          <h1>~ Featured Items ~</h1>
          <div className="cards">
            <div className="card">
              <div className="card-media">
                <img src={image("headphone.jpg")} alt="" />
              </div>
              <div className="card-body">
                <h3>Headphone</h3>
                <h6>Price: $39.99</h6>
              </div>
            </div>
            <div className="card">
              <div className="card-media">
                <img src={image("apple-watch.jpg")} alt="" />
              </div>
              <div className="card-body">
                <h3>Apple Watch</h3>
                <h6>Price: $109.99</h6>
              </div>
            </div>
            <div className="card">
              <div className="card-media">
                <img src={image("dark-green-crocs.jpg")} alt="" />
              </div>
              <div className="card-body">
                <h3>Dark Green Crocs for Kids</h3>
                <h6>Price: $3.99</h6>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="categories">
        <div className="categories-container">
          <h4>~ Shop by Category ~</h4>
          <ul className="category-list">
            <li>
              <a href="#books">
                <img src={image("books-icon.png")} alt="Books" />
                <span>Books</span>
              </a>
            </li>
            <li>
              <a href="#clothes">
                <img src={image("clothes-icon.png")} alt="Clothes" />
                <span>Clothes</span>
              </a>
            </li>
            <li>
              <a href="#accessories">
                <img src={image("accessories-icon.png")} alt="Accessories" />
                <span>Accessories</span>
              </a>
            </li>
          </ul>
        </div>
      </section>

      <br />
      <br />
      <br />

      <section id="sell-your-items">
        <form>
          <h3>Sell Your Items</h3>
          <div className="image-upload-placeholder">
            <label htmlFor="title">Title</label>
          </div>
          <div className="form-inputs-and-submit" />
        </form>
      </section>

      <br />
      <br />
      <br />

      <footer>
        <div className="footer-container">
          <div className="footer-contact">
            <h4>Contact us:</h4>
            <ul className="contact-list">
              <li>
                <img src={svg("telephone.svg")} alt="Phone icon" />
                <a href="tel:9999999999">999-999-9999</a>
              </li>
              <li>
                <img src={svg("email.svg")} alt="Email icon" />
                <a href="mailto:thriftify@support.org">thriftify@support.org</a>
              </li>
            </ul>
          </div>
          <div className="footer-social">
            <h4>Follow us on:</h4>
            <ul className="social-list">
              <li>
                <a href="#">
                  <img src={svg("instagram.svg")} alt="Instagram" />
                </a>
              </li>
              <li>
                <a href="#">
                  <img src={svg("facebook.svg")} alt="Facebook" />
                </a>
              </li>
              <li>
                <a href="#">
                  <img src={svg("linkedin.svg")} alt="LinkedIn" />
                </a>
              </li>
              <li>
                <a href="#">
                  <img src={svg("x-twitter.svg")} alt="X" />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="trademark">
          <p className="copyright">� 2025 Thriftify. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
};

export default MainLanding;
