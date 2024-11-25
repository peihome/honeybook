import React from "react";

const ArticleSection = ({ title, description, articles }) => (
  <div className="article-section">
    <h3>{title}</h3>
    <p>{description}</p>
    <span>{articles} articles</span>
  </div>
);

const Help = () => {
  return (
    <div className="help paddingTop5">
      {/* Inline styles */}
      <style>
        {`
          .help {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            background-color: #f4f4f4;
          }

          .help-header {
            background: linear-gradient(90deg, #0b0b0b, #00b4d8);
            color: white;
            padding: 20px;
            text-align: center;
          }

          .search-container {
            margin-top: 10px;
            display: flex;
            justify-content: center;
          }

          .search-bar {
            padding: 10px;
            width: 300px;
            font-size: 16px;
            border: 1px solid #ccc;
            border-radius: 5px;
          }

          .search-icon {
            font-size: 18px;
            color: #00b4d8;
            margin-left: -35px;
            margin-top: 5px;
          }

          .main-content {
            padding: 20px;
          }

          .payment-questions h2 {
            font-size: 24px;
            color: #333;
          }

          .payment-questions ul {
            list-style-type: none;
            padding: 0;
          }

          .payment-questions ul li {
            font-size: 16px;
            line-height: 1.5;
            margin-bottom: 10px;
            color: #444;
          }

          .article-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 20px;
            margin-top: 20px;
          }

          .article-section {
            background-color: white;
            border: 1px solid #ddd;
            padding: 15px;
            border-radius: 5px;
            box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
          }

          .article-section h3 {
            font-size: 20px; /* Slightly larger for better emphasis */
            color: #333;
          }

          .article-section p {
            font-size: 16px; /* Standard body size */
            line-height: 1.5; /* Increased for readability */
            color: #444;
          }

          .article-section span {
            font-size: 14px; /* Improved metadata size */
            color: #00b4d8;
          }

          .help-footer {
            background: linear-gradient(90deg, #0b0b0b, #00b4d8);
            color: white;
            text-align: center;
            padding: 20px;
          }

          .help-footer nav a {
            color: white;
            margin: 0 10px;
            text-decoration: none;
          }

          .help-footer nav a:hover {
            text-decoration: underline;
          }
        `}
      </style>

      {/* Header */}
      <header className="help-header">
        <h1>Find advice and answers to help you get the most out of HoneyBook.</h1>
        <div className="search-container">
          <input type="text" placeholder="Search for articles..." className="search-bar" />
          <i className="fas fa-search search-icon"></i>
        </div>
      </header>

      {/* Main Content Section */}
      <div className="main-content">
        {/* Payment Questions Section */}
        <section className="payment-questions">
          <h2>Get your payments questions answered</h2>
          <ul>
            <li>Payment processing times, transaction fees, and client payment options</li>
            <li>Set up your account to get paid</li>
            <li>Issue a refund to your clients</li>
            <li>Set up instant deposit for your payments</li>
            <li>I don’t see my payments in my bank account. Where are they?</li>
          </ul>
        </section>

        {/* Main Content Grid */}
        <div className="article-grid">
          <ArticleSection title="Getting Started" description="Set up your account and get started with HoneyBook" articles={25} />
          <ArticleSection title="Training & Video Tutorials" description="Step-by-step video walkthroughs and recorded webinars to help you get the most out of HoneyBook" articles={22} />
          <ArticleSection title="Finance and Payments" description="Learn how to get paid, manage client payments, and about other financial features" articles={35} />
          <ArticleSection title="HoneyBook Balance" description="Learn how to manage your money where you manage your business with a HoneyBook Balance account" articles={28} />
          <ArticleSection title="Workflows" description="Learn about lead and contact forms, automations, emails, and tasks in HoneyBook" articles={84} />
          <ArticleSection title="Client Experience" description="See what your client experiences in HoneyBook when they work with you" articles={19} />
          <ArticleSection title="Project Management" description="Learn about the project management tools available to you to track time, get notified, and lead" articles={66} />
          <ArticleSection title="Files and Templates" description="Get everything you need to know about HoneyBook's smart files and templates" articles={95} />
          <ArticleSection title="Company Management" description="Manage your personal and company-wide account settings in HoneyBook" articles={53} />
          <ArticleSection title="Integrations" description="Use HoneyBook's QuickBooks, Gmail, Calendly, Facebook, and Zapier integrations" articles={32} />
          <ArticleSection title="HoneyBook's Legacy Files" description="Manage invoices, contracts, proposals, brochures, questionnaires, and timelines" articles={6} />
          <ArticleSection title="Partners and Referrals" description="Get the most out of Honeybook's Referral Program" articles={7} />
          <ArticleSection title="Release Notes" description="What's new at HoneyBook each month: features, upgrades, and more" articles={20} />
          <ArticleSection title="Other Articles" description="Everything else you might find helpful to reference or know" articles={11} />
        </div>
      </div>
    </div>
  );
};

export default Help;
