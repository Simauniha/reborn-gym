import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { FaUser } from "react-icons/fa";
import { FaComments } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";

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

      {/* <div className="container my-5"> */}

        <div className="row g-4 my-5">

          <div className="col-sm-2"></div>

          <div className="col-sm-8">
            {/* Blog Main Content */}
           
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
                    <strong>15</strong><br />
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


            {/*Sidebar */}

            <div className="card border-0 shadow-sm p-4 mb-4 text-center search-box">
              {/* Search Bar */}
              <div className="input-group mb-3">
                <input
                  type="text"
                  className="form-control search-input"
                  placeholder="Search Keyword"
                />
                <button className="btn search-btn">
                  <FaSearch />
                </button>
              </div>

              {/* Bordered Search Button */}
              <button className="btn w-100 py-2 fw-semibold search-border-btn">
                SEARCH
              </button>
            </div>

            {/* Categories */}
            <div className="category-box p-4 mb-4">
              <h6 className="fw-bold mb-3 category-title">Category</h6>
              <ul className="list-unstyled mb-0 category-list">
                <li><a href="#">Restaurant food (37)</a></li>
                <li><a href="#">Travel news (10)</a></li>
                <li><a href="#">Modern technology (03)</a></li>
                <li><a href="#">Product (11)</a></li>
                <li><a href="#">Inspiration (21)</a></li>
                <li><a href="#">Health Care (21)</a></li>
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

            {/* tag clouds */}
            <div className="card border-0 shadow-sm p-4 mb-4 tag_clouds">
              <h6 className="fw-bold mb-3">Tag Clouds</h6>
              <hr style={{ opacity: 0.2 }} />

              <div className="tag-cloud d-flex flex-wrap gap-2">
                {["project", "love", "technology", "travel", "restaurant", "life style", "design", "illustration"].map((tag, index) => (
                  <a href="#" key={index} className="tag-item text-decoration-none">
                    {tag}
                  </a>
                ))}
              </div>
            </div>

            {/* Instagram Feeds */}
            <div className="card border-0 shadow-sm p-4 mb-4 instagram-card">
              <h6 className="fw-bold mb-3">Instagram Feeds</h6>
              <hr className="divider" />

              <div className="instagram-feeds">
                <img src="single_blog_2.png" alt="feed1" />
                <img src="single_blog_1.png" alt="feed2" />
                <img src="post_2.png" alt="feed3" />
                <img src="post_3.png" alt="feed4" />
                <img src="single_blog_5.png" alt="feed5" />
                <img src="single_blog_4.png" alt="feed6" />
              </div>
            </div>



            {/* Subscribe Box */}
            <div className="card border-0 shadow-lg p-3 subsribe">
              <h6 className="fw-bold mb-3">Newsletter</h6>
              <div className="pt-3 pb-3">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter Email"
                />
                <button className="btn w-100 py-2 fw-semibold search-border-btn mt-3">
                  SEARCH
                </button>
              </div>
            </div>

          </div>

          <div className="col-sm-2"></div>

        </div>
      {/* </div> */}

      <Footer />
    </>
  );
}

export default Blog;
