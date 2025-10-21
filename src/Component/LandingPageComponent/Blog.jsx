import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { FaUser } from "react-icons/fa";
import { FaComments } from "react-icons/fa";

function Blog() {
  const blogPosts = [
    {
      img: "single_blog_1.png",
      title: "Google inks pact for new 35-storey office",
      text: "That dominion stars lights dominion divide years for fourth have don't stars is that he earth it first without heaven in place seed it second morning saying.",
    },
    {
      img: "single_blog_2.png",
      title: "Startup raises $5M for AI-powered fitness tracking",
      text: "A revolutionary idea for fitness tracking that changes how people interact with technology and their personal well-being.",
    },
    {
      img: "single_blog_4.png",
      title: "How to maintain healthy routines during work-from-home",
      text: "Work from home has changed our lifestyles. Here's how you can stay productive and healthy at the same time.",
    },
    {
      img: "single_blog_5.png",
      title: "Top 10 wellness tips for 2025",
      text: "Discover the latest health and wellness trends for 2025 that can transform your daily habits and overall well-being.",
    },
  ];

  const recentPosts = [
    { img: "post_1.png", title: "From life was you fish...", time: "January 12, 2019" },
    { img: "post_2.png", title: "The Amazing Hubble", time: "02 Hours ago" },
    { img: "post_3.png", title: "Astronomy Or Astrology", time: "03 Hours ago" },
    { img: "post_4.png", title: "Asteroids telescope", time: "01 Hours ago" },
  ];

  return (
    <>
      <div className="div-about">
        <Navbar />
        <div className="container text-center mt-3">
          <h1 className="about-heading fw-bold">Our Blog</h1>
        </div>
      </div>

      <div className="container my-5">
        <div className="row g-4">
          {/* Blog Main Content */}
          <div className="col-lg-8">
            {blogPosts.map((post, i) => (
              <div className="card border-0 shadow-sm mb-5 blog-post" key={i}>
                <div className="position-relative overflow-hidden">
                  <img
                    src={post.img}
                    className="card-img-top rounded"
                    alt={`Blog ${i + 1}`}
                  />
                </div>
                  <div className="date-badge text-center">
                    <strong>15</strong><br/>
                    <small>Jan</small>
                  </div>
                <div className="card-body bg-white">
                  <h5 className="card-title fw-bold">
                    {post.title}
                  </h5>
                  <p className="card-text text-muted">{post.text}</p>
                  <div className="d-flex align-items-center text-muted small">
                    <span className="me-3">
                      <FaUser /> Travel, Lifestyle
                    </span>
                    <span>
                      <FaComments /> 03 Comments
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Sidebar */}
          <div className="col-lg-4">
            {/* Search Box */}
            <div className="card border-0 shadow-sm p-3 mb-4">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search Keyword"
                />
                <button className="btn btn-danger">SEARCH</button>
              </div>
            </div>

            {/* Categories */}
            <div className="card border-0 shadow-sm p-3 mb-4">
              <h6 className="fw-bold mb-3">Category</h6>
              <ul className="list-unstyled mb-0">
                <li><a href="#" className="text-decoration-none text-dark">Restaurant food (37)</a></li>
                <li><a href="#" className="text-decoration-none text-dark">Travel news (10)</a></li>
                <li><a href="#" className="text-decoration-none text-dark">Modern technology (03)</a></li>
                <li><a href="#" className="text-decoration-none text-dark">Product (11)</a></li>
                <li><a href="#" className="text-decoration-none text-dark">Inspiration (21)</a></li>
                <li><a href="#" className="text-decoration-none text-dark">Health Care (21)</a></li>
              </ul>
            </div>

            {/* Recent Posts */}
            <div className="shadow-sm p-3 mb-4">
              <h6 className="fw-bold mb-3 recent-title">Recent Posts</h6>
              <div className="recent-posts-list">
                {recentPosts.map((post, i) => (
                  <div key={i} className="d-flex mb-3 recent-post align-items-start">
                    <img
                      src={post.img}
                      alt="Post"
                      width="70"
                      className="rounded"
                    />
                    <div className="ms-3">
                      <p className="mb-1 fw-semibold small">{post.title}</p>
                      <small className="text-muted">{post.time}</small>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Subscribe Box */}
            <div className="card border-0 shadow-lg p-3">
              <h6 className="fw-bold mb-3">Subscribe</h6>
              <div className="input-group">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter Email"
                />
                <button className="btn btn-danger">SUBSCRIBE</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Blog;
