import React, { useState } from "react";
import { images } from "../../constants";

const Home = () => {
  const [answersVisible, setAnswersVisible] = useState({});

  function toggleAnswer(qaId) {
    setAnswersVisible({
      ...answersVisible,
      [qaId]: !answersVisible[qaId],
    });
  }

  return (
    <div>
      <header className="header">
        <div className="header-container">
          <div className="logo-container">
            <a href="">
              <img src={images.logoNo} alt="" />
            </a>
          </div>
          <div className="links-container">
            <a href="/" className="link">
              Home
            </a>
            <a href="/" className="link">
              About
            </a>
            <a href="/" className="link">
              Pricing
            </a>
            <a href="/" className="link">
              Testimonials
            </a>
            <a href="/" className="link">
              Contact
            </a>
          </div>
          <div className="button-container">
            <a
              className="login-button"
              href="app.klassekartgenerator.no"
              target="_blank"
            >
              Log in
            </a>
          </div>
        </div>
      </header>

      <section class="hero">
        <div class="container">
          <div class="hero-content">
            <h1 class="hero-title">
              Seat Map Made <span className="orange">Easy</span>
            </h1>
            <p class="hero-text">
              Say goodbye to the headache of creating classroom seating
              arrangements with our seat map generator. With just a few clicks,
              you have a fully generated map with all your conditions met.
            </p>
            <button class="hero-button">Get Started</button>
          </div>
          <div class="hero-image">
            <img src="https://via.placeholder.com/600x400" alt="Hero Image" />
          </div>
        </div>
      </section>

      <section className="features-section">
        <h2 className="features-title">
          About The <span className="orange">Generator</span>
        </h2>
        <div className="features-container">
          <div className="feature">
            <div className="feature-icon">
              <img src={images.easyToUse} alt="" />
            </div>
            <h3 className="feature-header">Simple and easy</h3>
            <p className="feature-text">
              Our Seat Map Generator is the perfect solution for creating a
              classroom seat map in just minutes. We have designed it with a
              particular focus on user-friendliness and intuitive design. This
              means that anyone can use it with ease, regardless of their
              technical expertise.
            </p>
          </div>
          <div className="feature">
            <div className="feature-icon">
              <img src={images.algorithm} alt="" />
            </div>
            <h3 className="feature-header">We have thought of everything</h3>
            <p className="feature-text">
              Our algorithm allows you to specify who should or should not sit
              together, who should sit in front or back of the classroom, who
              should sit in a specific place, and it allows you to assign
              everyone a new partner and seat from previous maps.
            </p>
          </div>
          <div className="feature">
            <div className="feature-icon">
              <img src={images.privacy} alt="" />
            </div>
            <h3 className="feature-header">Data privacy</h3>
            <p className="feature-text">
              We only store students' first names. All data is stored on
              European servers, which are subject to EU data protection
              regulations. Our policies and procedures have been thoroughly
              vetted and assessed by leading industry experts, and we
              continually review and update them.
            </p>
          </div>
        </div>
      </section>

      <section class="reasons">
        <div class="reasons-container">
          <div class="reason">
            <div class="reason-text">
              <h3 class="reason-title">Save Time</h3>
              <p class="reason-description">
                On average, to make a manual map takes around 30 minutes. To use
                the generator takes less than 2 minutes. You simply select one
                of your classes, choose your conditions, and there you have a
                generated map, fully customizable and exportable.
              </p>
            </div>
          </div>
          <div class="reason">
            <div class="reason-text">
              <h3 class="reason-title">Save Money</h3>
              <p class="reason-description">
                A new map is on average made every 3-4 weeks. A teacher in
                Norway has an average salary of €30 per hour. To make seat maps
                manually costs your school on average €400 per teacher per year.
                Saved time is saved money!
              </p>
            </div>
          </div>
          <div class="reason">
            <div class="reason-text">
              <h3 class="reason-title">Save Energy</h3>
              <p class="reason-description">
                Being a teacher can be stressful enough. Save your patience to
                where it is needed, don't waste it on paperwork.
              </p>
            </div>
          </div>
          <div class="reason-image">
            <img
              src="https://via.placeholder.com/400x600"
              alt="Reasons Image"
            />
          </div>
        </div>
      </section>

      <section className="pricing-section">
        <div className="container">
          <h2 class="pricing-title">
            Our <span className="orange">Pricing</span> Plan
          </h2>
          <div className="pricing-plan">
            <h2 className="plan-title">School Plan</h2>
            <p className="plan-description">
              Schools up to 100 teachers should opt for this plan. For schools
              over 100 teachers, kindly get in touch with us.
            </p>
            <h3 className="plan-cost">
              €300<span className="plan-cost-period"> /year</span>
            </h3>
            <p className="plan-description">Per year or semester payment</p>
            <p className="plan-title-included">What's included:</p>
            <ul className="plan-details">
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  viewBox="0 0 28 8"
                >
                  <path
                    fill="rgb(255, 120, 1)"
                    fill-rule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clip-rule="evenodd"
                  />
                </svg>
                <span>All conditions and arrangements</span>
              </li>
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  viewBox="0 0 28 8"
                >
                  <path
                    fill="rgb(255, 120, 1)"
                    fill-rule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clip-rule="evenodd"
                  />
                </svg>
                <span>Unlimited classes and maps</span>
              </li>
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  viewBox="0 0 28 8"
                >
                  <path
                    fill="rgb(255, 120, 1)"
                    fill-rule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clip-rule="evenodd"
                  />
                </svg>

                <span>Save your classes and conditions</span>
              </li>
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  viewBox="0 0 28 8"
                >
                  <path
                    fill="rgb(255, 120, 1)"
                    fill-rule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clip-rule="evenodd"
                  />
                </svg>
                <span>See other teachers' maps</span>
              </li>
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  viewBox="0 0 28 8"
                >
                  <path
                    fill="rgb(255, 120, 1)"
                    fill-rule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clip-rule="evenodd"
                  />
                </svg>
                <span>Reports and school stats</span>
              </li>
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  viewBox="0 0 28 8"
                >
                  <path
                    fill="rgb(255, 120, 1)"
                    fill-rule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clip-rule="evenodd"
                  />
                </svg>
                <span>Excellent support</span>
              </li>
            </ul>
            <br />
            <a
              href="app.klassekartgenerator.no"
              target="_blank"
              className="start-now-button"
            >
              Start Now
            </a>
          </div>

          <div className="pricing-plan">
            <h2 className="plan-title">Demo</h2>
            <p className="plan-description">
              Our demo version is meant for testing purposes only. It will not
              save you a significant amount of time.
            </p>
            <h3 className="plan-cost">€0</h3>
            <p className="plan-title-included">What's included:</p>
            <ul className="plan-details">
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  viewBox="0 0 28 8"
                >
                  <path
                    fill="rgb(255, 120, 1)"
                    fill-rule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clip-rule="evenodd"
                  />
                </svg>
                <span>All conditions and arrangements</span>
              </li>
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  viewBox="0 0 28 8"
                >
                  <path
                    fill="red"
                    fill-rule="evenodd"
                    d="M15.414 5.586a1 1 0 00-1.414 0L10 8.586l-4.586-3.586a1 1 0 00-1.414 1.414L8.586 10l-4.586 4.586a1 1 0 001.414 1.414L10 11.414l4.586 4.586a1 1 0 001.414-1.414L11.414 10l4.586-4.586z"
                    clip-rule="evenodd"
                  />
                </svg>
                <span>Unlimited classes and maps</span>
              </li>
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  viewBox="0 0 28 8"
                >
                  <path
                    fill="red"
                    fill-rule="evenodd"
                    d="M15.414 5.586a1 1 0 00-1.414 0L10 8.586l-4.586-3.586a1 1 0 00-1.414 1.414L8.586 10l-4.586 4.586a1 1 0 001.414 1.414L10 11.414l4.586 4.586a1 1 0 001.414-1.414L11.414 10l4.586-4.586z"
                    clip-rule="evenodd"
                  />
                </svg>

                <span>Save your classes and conditions</span>
              </li>
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  viewBox="0 0 28 8"
                >
                  <path
                    fill="red"
                    fill-rule="evenodd"
                    d="M15.414 5.586a1 1 0 00-1.414 0L10 8.586l-4.586-3.586a1 1 0 00-1.414 1.414L8.586 10l-4.586 4.586a1 1 0 001.414 1.414L10 11.414l4.586 4.586a1 1 0 001.414-1.414L11.414 10l4.586-4.586z"
                    clip-rule="evenodd"
                  />
                </svg>
                <span>See other teachers' maps</span>
              </li>
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  viewBox="0 0 28 8"
                >
                  <path
                    fill="red"
                    fill-rule="evenodd"
                    d="M15.414 5.586a1 1 0 00-1.414 0L10 8.586l-4.586-3.586a1 1 0 00-1.414 1.414L8.586 10l-4.586 4.586a1 1 0 001.414 1.414L10 11.414l4.586 4.586a1 1 0 001.414-1.414L11.414 10l4.586-4.586z"
                    clip-rule="evenodd"
                  />
                </svg>
                <span>Reports and school stats</span>
              </li>
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  viewBox="0 0 28 8"
                >
                  <path
                    fill="rgb(255, 120, 1)"
                    fill-rule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clip-rule="evenodd"
                  />
                </svg>
                <span>Excellent support</span>
              </li>
            </ul>
            <br />
            <a
              href="app.klassekartgenerator.no"
              target="_blank"
              className="start-now-button"
            >
              Try Demo
            </a>
          </div>
        </div>
      </section>

      <section className="testimonials-section">
        <h2 className="testimonials-title">
          What The <span className="orange">Schools</span> Say
        </h2>
        <div className="container">
          <div className="testimonial">
            <img
              src="https://via.placeholder.com/150"
              alt="Testimonial image"
              className="testimonial-image"
            />
            <p className="testimonial-text">
              "One of the standout features of the app is its ability to
              accommodate a wide range of classroom sizes and seating
              arrangements. Whether you're dealing with a 1 and 1 or 3 and 3
              configuration, the app provides a variety of customization options
              to help you create the perfect seating plan for your needs."
            </p>
            <p className="testimonial-name">John Smith</p>
          </div>
          <div className="testimonial">
            <img
              src="https://via.placeholder.com/150"
              alt="Testimonial image"
              className="testimonial-image"
            />
            <p className="testimonial-text">
              "After testing the app, I found it to be a highly useful tool for
              schools looking to create custom seating arrangements for their
              classrooms or other events. The app is user-friendly and
              intuitive, with a simple interface that makes it easy for teachers
              and administrators to create detailed seating plans in a matter of
              minutes."
            </p>
            <p className="testimonial-name">Jane Doe</p>
          </div>
        </div>
      </section>

      <section className="qa-section">
        <h2 className="qa-title">
          Frequently asked <span className="orange">Q&A</span>
        </h2>
        <div className="container">
          <div className="qa" onClick={() => toggleAnswer("qa1")}>
            <h3 className="qa-question">What is the Seat Map Generator?</h3>
            <div
              className="qa-answer"
              style={{ display: answersVisible["qa1"] ? "block" : "none" }}
            >
              <p>
                We accept all major credit cards, including Visa, MasterCard,
                and American Express. We also accept PayPal and bank transfers.
              </p>
            </div>
            <button
              className={`qa-button ${answersVisible["qa1"] ? "active" : ""}`}
            >
              {answersVisible["qa1"] ? "-" : "+"}
            </button>
          </div>
          <div className="qa" onClick={() => toggleAnswer("qa2")}>
            <h3 className="qa-question">How does the app work?</h3>
            <div
              className="qa-answer"
              style={{ display: answersVisible["qa2"] ? "block" : "none" }}
            >
              <p>
                We have a 30-day return policy. If you are not satisfied with
                your purchase, you can return it for a full refund.
              </p>
            </div>
            <button
              className={`qa-button ${answersVisible["qa2"] ? "active" : ""}`}
            >
              {answersVisible["qa2"] ? "-" : "+"}
            </button>
          </div>
          <div className="qa" onClick={() => toggleAnswer("qa3")}>
            <h3 className="qa-question">
              What are the benefits of the generator?
            </h3>
            <div
              className="qa-answer"
              style={{ display: answersVisible["qa3"] ? "block" : "none" }}
            >
              <p>
                You can cancel your subscription at any time by logging into
                your account and going to the subscription section. Click the
                "Cancel Subscription" button and follow the prompts.
              </p>
            </div>
            <button
              className={`qa-button ${answersVisible["qa3"] ? "active" : ""}`}
            >
              {answersVisible["qa3"] ? "-" : "+"}
            </button>
          </div>
          <div className="qa" onClick={() => toggleAnswer("qa4")}>
            <h3 className="qa-question">
              How does the test phase and payment work?
            </h3>
            <div
              className="qa-answer"
              style={{ display: answersVisible["qa4"] ? "block" : "none" }}
            >
              <p>
                You can cancel your subscription at any time by logging into
                your account and going to the subscription section. Click the
                "Cancel Subscription" button and follow the prompts.
              </p>
            </div>
            <button
              className={`qa-button ${answersVisible["qa4"] ? "active" : ""}`}
            >
              {answersVisible["qa4"] ? "-" : "+"}
            </button>
          </div>
        </div>
      </section>

      <section class="article-section">
        <h2 class="section-heading">
          Latest <span className="orange">Articles</span>
        </h2>
        <div class="container">
          <div class="article-preview">
            <a href="#">
              <img src="https://via.placeholder.com/300x200" alt="Article 1" />
              <h3 class="article-title">
                10 Best Travel Destinations in Europe
              </h3>
            </a>
          </div>
          <div class="article-preview">
            <a href="#">
              <img src="https://via.placeholder.com/300x200" alt="Article 2" />
              <h3 class="article-title">
                The Benefits of Yoga for Stress Relief
              </h3>
            </a>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="footer-container">
          <div className="footer-copy">
            © 2023 Klassekartgenerator |{" "}
            <a
              href="https://w2.brreg.no/enhet/sok/detalj.jsp?orgnr=824325952"
              className="footer-business"
            >
              Magnus Heide ENK
            </a>
            . All rights reserved.
          </div>
          <div className="footer-links-container">
            <a href="/" className="footer-link">
              Terms of Service
            </a>
            <a href="/" className="footer-link">
              Privacy Policy
            </a>
            <a href="/" className="footer-link">
              Contact Us
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
