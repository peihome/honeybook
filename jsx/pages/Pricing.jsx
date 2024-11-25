// Created by: Surya Prakash N - 8924019

import React, { useState } from "react";
import "../../public/css/pricing.css";

const PricingPage = () => {
  const [billingCycle, setBillingCycle] = useState("yearly");

  const toggleBilling = (cycle) => {
    setBillingCycle(cycle);
  };

  return (
    <div class="paddingTop5">
      {/* Header Section */}
      <div className="header">
        <h1>Plans that grow with your business</h1>
        <p>
          All plans start with a 7-day free trial and are a tax-deductible
          business write-off.
        </p>
        <button className="btn btn-purple" aria-label="Start free trial">
          Start free trial
        </button>
        <button className="btn btn-white" aria-label="Buy now">
          Buy now
        </button>
      </div>

      {/* Billing Toggle */}
      <div className="toggle">
        <button
          className={billingCycle === "monthly" ? "active" : ""}
          onClick={() => toggleBilling("monthly")}
          aria-label="Switch to monthly billing"
        >
          Monthly
        </button>
        <button
          className={billingCycle === "yearly" ? "active" : ""}
          onClick={() => toggleBilling("yearly")}
          aria-label="Switch to yearly billing"
        >
          Yearly (2 months free)
        </button>
      </div>

      {/* Pricing Cards */}
      <div className="pricing-section">
        {/* Starter Plan */}
        <div className="card">
          <h2>Starter</h2>
          <p className="price">
            ${billingCycle === "yearly" ? "16" : "20"}/month
          </p>
          <p>Start with everything you need to create</p>
          <ul>
            <li>Unlimited clients and projects</li>
            <li>Basic features</li>
          </ul>
          <button aria-label="Choose Starter Plan">Choose Starter</button>
        </div>

        {/* Essentials Plan */}
        <div className="card">
          <h2>Essentials</h2>
          <p className="price">
            ${billingCycle === "yearly" ? "32" : "38"}/month
          </p>
          <p>Grow with added productivity and automation tools.</p>
          <ul>
            <li>Scheduler</li>
            <li>Automation</li>
          </ul>
          <button aria-label="Choose Essentials Plan">Choose Essentials</button>
        </div>

        {/* Premium Plan */}
        <div className="card">
          <h2>Premium</h2>
          <p className="price">
            ${billingCycle === "yearly" ? "66" : "75"}/month
          </p>
          <p>Scale up with priority support for the whole team.</p>
          <ul>
            <li>Unlimited team members</li>
            <li>Priority support</li>
          </ul>
          <button aria-label="Choose Premium Plan">Choose Premium</button>
        </div>
      </div>
    </div>
  );
};

export default PricingPage;
