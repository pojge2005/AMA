"use client";

import { useState } from "react";
import { galleryCategories } from "@/data/site";

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState("All");

  return (
    <section className="section gallery-section" id="gallery">
      <div className="section-heading">
        <p className="eyebrow">Moments from AMA</p>
        <h2>Academy Gallery</h2>
        <p>
          Photographs, training moments, camps, championships and certificates
          will be added here as approved media becomes available.
        </p>
      </div>

      <div className="gallery-filters" aria-label="Gallery categories">
        {galleryCategories.map((category) => (
          <button
            className={activeCategory === category ? "filter active" : "filter"}
            key={category}
            onClick={() => setActiveCategory(category)}
            type="button"
          >
            {category}
          </button>
        ))}
      </div>

      <div className="gallery-empty">
        <span className="gallery-mark" aria-hidden="true">AMA</span>
        <p className="eyebrow">{activeCategory === "All" ? "Gallery coming soon" : activeCategory}</p>
        <h3>Academy moments will appear here.</h3>
        <p>
          The gallery is ready for academy photographs and event materials.
          Images will be published after they are supplied and approved.
        </p>
      </div>
    </section>
  );
}
