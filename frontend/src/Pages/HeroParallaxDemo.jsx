"use client";
import React from "react";
import { HeroParallax } from "../Component/ui/hero-parallax";


import HEROsECTION3 from'../assets/HEROsECTION3.jpg'
import HEROsECTION4 from'../assets/HEROsECTION4.jpg'
import HEROsECTION5 from'../assets/HEROsECTION5.jpg'
import HEROsECTION6 from'../assets/ HEROsECTION6.jpg'
import HEROsECTION7 from'../assets/ HEROsECTION7.jpg'
import HEROsECTION8 from'../assets/ HEROsECTION8.jpg'

export function HeroParallaxDemo() {
  return <HeroParallax products={products} />;
}
export const products =[
    {
    title: "Skyline Towers",
    link: "..",
    thumbnail:
    HEROsECTION3,
  },
  {
    title: "Indian House",
    link: "https://example.com/riverside-apartments",
    thumbnail:
      HEROsECTION4,
  },
  {
    title: "Indian House",
    link: "https://example.com/downtown-office",
    thumbnail: HEROsECTION5 
  },
  {
    title: "Residential Project",
    link: "https://example.com/modern-bridge",
    thumbnail:
       HEROsECTION3,
  },
  {
    title: "Industrial Factory Setup",
    link: "https://example.com/industrial-factory",
    thumbnail:
     HEROsECTION3,
  },
  {
    title: "Construction site",
    link: "https://example.com/urban-renovation",
    thumbnail:
      HEROsECTION6  },
  {
    title: "Construction site",
    link: "https://example.com/green-building",
    thumbnail:
      HEROsECTION7,
  },
  {
    title: "Construction site",
    link: "https://example.com/luxury-villa",
    thumbnail:
    HEROsECTION8,
  },

]
