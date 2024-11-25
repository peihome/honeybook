// src/pages/Templates.jsx
import React, { useState } from "react";

const Templates = () => {
  const featuredTemplates = [
    {
      id: 1,
      name: "Project Creation Template",
      description:
        "Kickstart your projects effortlessly with this creation template.",
      image: "/img/create.png",
      isFree: true,
    },
    {
      id: 2,
      name: "Workflow Enhancement Template",
      description:
        "Optimize your processes with our workflow enhancement template.",
      image: "/img/honey.png",
      isFree: true,
    },
    {
      id: 3,
      name: "Comprehensive Kickstart Guide",
      description:
        "Begin your projects right with our comprehensive kickstart guide.",
      image: "/img/kick.png",
      isFree: true,
    },
  ];

  const featuredTemplates2 = [
    {
      id: 4,
      name: "Marketing Proposal Template",
      description: "Craft compelling marketing proposals with ease.",
      image: "/img/marketer.png",
      isFree: true,
    },
    {
      id: 5,
      name: "Simplified Planning Template",
      description: "Streamline your planning with this easy-to-use template.",
      image: "/img/simple.png",
      isFree: true,
    },
    {
      id: 6,
      name: "Client Onboarding Template",
      description: "Enhance client onboarding with our detailed template.",
      image: "/img/onboarding.png",
      isFree: true,
    },
  ];

  const featuredTemplates3 = [
    {
      id: 7,
      name: "Graphic Design Portfolio",
      description: "Showcase your creative work with a professional portfolio.",
      image: "/img/graphicdesign.png",
      isFree: true,
    },
    {
      id: 8,
      name: "Designer Profile Template",
      description: "Present your skills effectively with our profile template.",
      image: "/img/graphicdesigner.png",
      isFree: true,
    },
    {
      id: 9,
      name: "Project Kickoff Template",
      description: "Ensure smooth project starts with our kickoff template.",
      image: "/img/kick.png",
      isFree: true,
    },
  ];

  const featuredTemplates4 = [
    {
      id: 10,
      name: "Creative Brief Template",
      description:
        "Communicate project visions with our creative brief template.",
      image: "/img/graphicdesign.png",
      isFree: true,
    },
    {
      id: 11,
      name: "Portfolio Presentation Template",
      description:
        "Display your work beautifully with this presentation template.",
      image: "/img/graphicdesigner.png",
      isFree: true,
    },
    {
      id: 12,
      name: "Startup Kickstart Guide",
      description: "Launch your startup successfully with our kickstart guide.",
      image: "/img/kick.png",
      isFree: true,
    },
  ];

  const additionalSections = [
    {
      title: "Contracts",
      templates: featuredTemplates2,
    },
    {
      title: "Invoices",
      templates: featuredTemplates3,
    },
    {
      title: "Showit",
      templates: featuredTemplates4,
    },
  ];

  const features = [
    {
      icon: "https://cdn.prod.website-files.com/66446d581b0f310645a31c0a/66bcbbf36acaa43f4eae893f_Subtract.avif",
      title: "Business management",
      description: "Manage projects, clients, and team in one place.",
    },
    {
      icon: "https://cdn.prod.website-files.com/66446d581b0f310645a31c0a/66bcbbf5de2cc53ba03b8ef0_Group%201000002851.avif",
      title: "Scheduling",
      description: "Automate scheduling and free up more time.",
    },
    {
      icon: "https://cdn.prod.website-files.com/66446d581b0f310645a31c0a/66bcbbf3cabfe6d1b596d64a_Group%201000002254.avif",
      title: "Finances",
      description: "Track income and expenses seamlessly.",
    },
    {
      icon: "https://cdn.prod.website-files.com/66446d581b0f310645a31c0a/66bcbbf3bd8003eda5f0c954_Frame%201073713849.avif",
      title: "Collaboration",
      description: "Collaborate with your team or clients with ease.",
    },
    {
      icon: "https://cdn.prod.website-files.com/66446d581b0f310645a31c0a/66d85b0317069b7fe1d6ad2b_Group%2048096068.avif",
      title: "Online payments",
      description: "Get paid faster with online invoicing and payments.",
    },
    {
      icon: "https://cdn.prod.website-files.com/66446d581b0f310645a31c0a/66d85b03491db8b19f49776e_Group%2048096347.avif",
      title: "Custom branding",
      description: "Create branded templates to showcase your business.",
    },
  ];

  const faqs = [
    {
      question: "What are HoneyBook templates?",
      answer:
        "HoneyBook templates are pre-designed tools to streamline your projects.",
    },
    {
      question: "How can I use templates in HoneyBook?",
      answer:
        "Simply browse, select, and customize a template to suit your needs.",
    },
    {
      question: "What if I don’t have a HoneyBook account?",
      answer: "You can sign up for a free trial to start using templates.",
    },
    {
      question: "What do I need to get started?",
      answer:
        "All you need is a HoneyBook account to start using our templates.",
    },
    {
      question: "I'm not a designer—can I really do this?",
      answer:
        "Yes! Our templates are designed to be simple and customizable for everyone.",
    },
  ];

  const [openFAQIndex, setOpenFAQIndex] = useState(null);
  const toggleFAQ = (index) => {
    setOpenFAQIndex(openFAQIndex === index ? null : index);
  };

  return (
    <div className="templates-page paddingTop5">
      {/* Hero Section */}
      <header className="hero">
        <h1>Browse templates built to impress your clients</h1>
        <p>
          Discover professionally designed templates to streamline your projects
          and deliver exceptional client experiences.
        </p>
        <input
          type="text"
          placeholder="Search templates..."
          className="search-bar"
        />
        <div className="filters">
          <button>Featured</button>
          <button>Contracts</button>
          <button>Invoices</button>
          <button>Showit</button>
        </div>
      </header>

      {/* Featured Templates */}
      <section className="featured-section">
        <h2>Featured templates</h2>
        <p>
          Discover the latest templates that help you kick-start your projects
          and attract clients.
        </p>
        <div className="template-grid">
          {featuredTemplates.map((template) => (
            <div className="template-card" key={template.id}>
              <img src={template.image} alt={template.name} />
              <h3>{template.name}</h3>
              <p>{template.description}</p>
              <div className="actions">
                <button className="view-button">View Template</button>
                <button className="get-button">Get Template</button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Additional Template Sections */}
      {additionalSections.map((section, index) => (
        <section className="template-section" key={index}>
          <div className="section-header">
            <h2>{section.title}</h2>
            <button className="view-all-button">Browse All &gt;</button>
          </div>
          <div className="template-grid">
            {section.templates.map((template) => (
              <div className="template-card" key={template.id}>
                <img src={template.image} alt={template.name} />
                <h3>{template.name}</h3>
                <p>{template.description}</p>
                <div className="actions">
                  <button className="view-button">View Template</button>
                  <button className="get-button">Get Template</button>
                </div>
              </div>
            ))}
          </div>
        </section>
      ))}

      {/* Features Section */}
      <section className="features-section">
        {features.map((feature, index) => (
          <div className="feature" key={index}>
            <img src={feature.icon} alt={feature.title} />
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        ))}
      </section>

      {/* FAQ Section */}
      <section className="faq-section">
        <h2>Frequently Asked Questions</h2>
        <div className="faq-list">
          {faqs.map((faq, index) => (
            <div
              className={`faq-item ${openFAQIndex === index ? "open" : ""}`}
              key={index}
              onClick={() => toggleFAQ(index)}
            >
              <h3>{faq.question}</h3>
              {openFAQIndex === index && <p>{faq.answer}</p>}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Templates;
