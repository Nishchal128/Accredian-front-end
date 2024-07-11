import React, { useState, useRef } from "react";
import "./Main.css";
import { FaUserPlus, FaGift, FaWallet } from "react-icons/fa";

const Main = () => {
  const referSectionRef = useRef(null);
  const benefitsSectionRef = useRef(null);
  const faqsSectionRef = useRef(null);
  const supportSectionRef = useRef(null);

  const [activeState, setActiveState] = useState("Refer");
  const [modalOpen, setModalOpen] = useState(false);
  const [referrerName, setReferrerName] = useState("");
  const [referrerEmail, setReferrerEmail] = useState("");
  const [refereeName, setRefereeName] = useState("");
  const [refereeEmail, setRefereeEmail] = useState("");
  const [formErrors, setFormErrors] = useState({});

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    // Reset form fields and errors on modal close
    setReferrerName("");
    setReferrerEmail("");
    setRefereeName("");
    setRefereeEmail("");
    setFormErrors({});
  };

  const handleReferralSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const response = await fetch('https://accredian-back-end.onrender.com/api/referral', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          referrerName,
          referrerEmail,
          refereeName,
          refereeEmail,
        }),
      });
  
      if (!response.ok) {
        const errorData = await response.json();
        console.error('Error submitting referral:', errorData);
        throw new Error(errorData.error || 'Failed to submit referral.');
      }
  
      // Handle successful submission
      console.log('Referral submitted successfully!');
      // Optionally, show a success message to the user
      closeModal();
    } catch (error) {
      console.error('Error submitting referral:', error);
      // Handle error state or display error message to the user
      alert('Failed to submit referral. Please try again.');
    }
  };
  
  const [openQuestion, setOpenQuestion] = useState(null);

  const toggleQuestion = (question) => {
    setOpenQuestion(openQuestion === question ? null : question);
  };

  const products = [
    {
      category: "PRODUCT MANAGEMENT",
      title: "Professional Certificate Program in Product Management",
      referrerBonus: "₹7,000",
      refereeBonus: "₹29,000",
    },
    {
      category: "STRATEGY & LEADERSHIP",
      title: "PG Certificate Program in Strategic Product Management",
      referrerBonus: "₹9,000",
      refereeBonus: "₹11,000",
    },
    {
      category: "STRATEGY & LEADERSHIP",
      title: "PG Certificate Program in Strategic Product Management",
      referrerBonus: "₹9,000",
      refereeBonus: "₹11,000",
    },
    {
      category: "STRATEGY & LEADERSHIP",
      title: "PG Certificate Program in Strategic Product Management",
      referrerBonus: "₹9,000",
      refereeBonus: "₹11,000",
    },
    {
      category: "STRATEGY & LEADERSHIP",
      title: "PG Certificate Program in Strategic Product Management",
      referrerBonus: "₹9,000",
      refereeBonus: "₹11,000",
    },
  ];

  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };

  const handleStateChange = (state) => {
    setActiveState(state);
    switch (state) {
      case "Refer":
        scrollToSection(referSectionRef);
        break;
      case "Benefits":
        scrollToSection(benefitsSectionRef);
        break;
      case "FAQs":
        scrollToSection(faqsSectionRef);
        break;
      case "Support":
        scrollToSection(supportSectionRef);
        break;
      default:
        break;
    }
  };

  return (
    <main>
      <div className="navigation-bar">
        <button
          className={activeState === "Refer" ? "active" : ""}
          onClick={() => handleStateChange("Refer")}
        >
          Refer
        </button>
        <button
          className={activeState === "Benefits" ? "active" : ""}
          onClick={() => handleStateChange("Benefits")}
        >
          Benefits
        </button>
        <button
          className={activeState === "FAQs" ? "active" : ""}
          onClick={() => handleStateChange("FAQs")}
        >
          FAQs
        </button>
        <button
          className={activeState === "Support" ? "active" : ""}
          onClick={() => handleStateChange("Support")}
        >
          Support
        </button>
      </div>

      <div className="main-content">
      <div className="promo">
        <h1 style={{ color: "#fff" }}>Let's Learn & Earn</h1>
        <p style={{ color: "#fff" }}>Get a chance to win up to Rs. 15,000</p>
        <button onClick={openModal}>Refer Now</button>
      </div>

      {modalOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>
              &times;
            </span>
            <h2>Refer a Course</h2>
            <form onSubmit={handleReferralSubmit}>
              <div className="form-group">
                <label htmlFor="referrerName">Your Name:</label>
                <input
                  type="text"
                  id="referrerName"
                  value={referrerName}
                  onChange={(e) => setReferrerName(e.target.value)}
                  className={formErrors.referrerName ? "error" : ""}
                  required
                />
                {formErrors.referrerName && (
                  <span className="error-message">
                    {formErrors.referrerName}
                  </span>
                )}
              </div>
              <div className="form-group">
                <label htmlFor="referrerEmail">Your Email:</label>
                <input
                  type="email"
                  id="referrerEmail"
                  value={referrerEmail}
                  onChange={(e) => setReferrerEmail(e.target.value)}
                  className={formErrors.referrerEmail ? "error" : ""}
                  required
                />
                {formErrors.referrerEmail && (
                  <span className="error-message">
                    {formErrors.referrerEmail}
                  </span>
                )}
              </div>
              <div className="form-group">
                <label htmlFor="refereeName">Friend's Name:</label>
                <input
                  type="text"
                  id="refereeName"
                  value={refereeName}
                  onChange={(e) => setRefereeName(e.target.value)}
                  className={formErrors.refereeName ? "error" : ""}
                  required
                />
                {formErrors.refereeName && (
                  <span className="error-message">
                    {formErrors.refereeName}
                  </span>
                )}
              </div>
              <div className="form-group">
                <label htmlFor="refereeEmail">Friend's Email:</label>
                <input
                  type="email"
                  id="refereeEmail"
                  value={refereeEmail}
                  onChange={(e) => setRefereeEmail(e.target.value)}
                  className={formErrors.refereeEmail ? "error" : ""}
                  required
                />
                {formErrors.refereeEmail && (
                  <span className="error-message">
                    {formErrors.refereeEmail}
                  </span>
                )}
              </div>
              <button type="submit">Submit Referral</button>
            </form>
          </div>
        </div>
      )}
    </div>

      <div ref={referSectionRef} className="state-content">
        <div className="refer">
          <div className="container">
            <h1>
              How Do I <span className="highlight">Refer?</span>
            </h1>
            <div className="referral-steps">
              <div className="step">
                <div className="icon">
                  <FaUserPlus size={50} />
                </div>
                <p>
                  Submit referrals easily via our website's referral section.
                </p>
              </div>
              <div className="step">
                <div className="icon">
                  <FaGift size={50} />
                </div>
                <p>
                  Earn rewards once your referral joins an Acredian program.
                </p>
              </div>
              <div className="step">
                <div className="icon">
                  <FaWallet size={50} />
                </div>
                <p>
                  Both parties receive a bonus 30 days after program enrollment.
                </p>
              </div>
            </div>
            <button className="refer-button">Refer Now</button>
          </div>
        </div>
      </div>

      <div ref={benefitsSectionRef} className="state-content">
        <div className="product-list">
          <h2>What Are The Referral Benefits?</h2>
          <table>
            <thead>
              <tr>
                <th>ALL PROGRAMS</th>
                <th>Referrer Bonus</th>
                <th>Referee Bonus</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr key={product.title}>
                  <td>{product.category}</td>
                  <td>{product.referrerBonus}</td>
                  <td>{product.refereeBonus}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="button-container">
            <button>Show More</button>
            <button>Refer Now</button>
          </div>
        </div>{" "}
      </div>

      <div ref={faqsSectionRef} className="state-content">
        <div className="faq-container">
          <h1>Frequently Asked Questions</h1>
          <div className="faq-section">
            <button
              onClick={() => toggleQuestion("eligibility")}
              className="faq-button"
            >
              Eligibility
            </button>
            {openQuestion === "eligibility" && (
              <div className="faq-content">
                <h3>
                  Do I need to have prior Product Management and Project
                  Management experience to enroll in the program?
                </h3>
                <p>
                  No, the program is designed to be inclusive of all levels of
                  experience. All topics will be covered from the basics, making
                  it suitable for individuals from any field of work.
                </p>
              </div>
            )}
          </div>
          <div className="faq-section">
            <button
              onClick={() => toggleQuestion("howToUse")}
              className="faq-button"
            >
              How To Use?
            </button>
            {openQuestion === "howToUse" && (
              <div className="faq-content">
                <h3>How do I access the program materials?</h3>
                <p>
                  Once you enroll in the program, you will receive an email with
                  login details to access our online portal. From there, you can
                  navigate to the course materials and start learning at your
                  own pace.
                </p>
              </div>
            )}
          </div>
          <div className="faq-section">
            <button
              onClick={() => toggleQuestion("terms")}
              className="faq-button"
            >
              Terms & Conditions
            </button>
            {openQuestion === "terms" && (
              <div className="faq-content">
                <h3>What are the terms and conditions of the program?</h3>
                <p>
                  By enrolling in the program, you agree to our terms and
                  conditions, which include adherence to our code of conduct,
                  non-disclosure of proprietary materials, and timely completion
                  of course requirements.
                </p>
              </div>
            )}
          </div>
          <div className="contact-section">
            <p>Want to delve deeper into the program?</p>
            <p>
              Share your details to receive expert insights from our program
              team!
            </p>
            <button className="contact-button">Get in touch</button>
          </div>
        </div>{" "}
      </div>

      <div
        ref={supportSectionRef}
        className="state-content"
        style={{
          padding: "20px",
          backgroundColor: "#f9f9f9",
          border: "1px solid #ccc",
          borderRadius: "5px",
          textAlign: "left",
        }}
      >
        <h1>Support</h1>
        <p>
          Our support team is dedicated to assisting you with any questions or
          issues you may have. Whether it's technical support, account
          inquiries, or general assistance, we're here to help. Please feel free
          to contact us through the following channels:
        </p>
        <ul>
          <li>Email: support@example.com</li>
          <li>Phone: +1 (123) 456-7890</li>
          <li>Live Chat: Available on our website during business hours</li>
        </ul>
        <p>
          For urgent matters outside of business hours, please leave us a
          message, and we'll get back to you as soon as possible. Your
          satisfaction is our priority, and we strive to provide effective
          support to ensure a smooth experience with our services.
        </p>
      </div>
    </main>
  );
};

export default Main;
