import React from "react";
import HeroSection from "./components/HeroSection";

const About = () => {
  const data = {
    name: "RuralRoots",
    data: "At Rural Roots, we believe in the power of communities and the stories embedded in every corner of our villages. Founded with a passion for preserving local traditions and supporting rural economies, Rural Roots is more than just an online store; it's a platform that fosters a sense of togetherness. Our commitment extends beyond commerce; we aim to create a virtual space that celebrates the diversity, resilience, and creativity of rural life. Whether you're a local artisan, farmer, or someone seeking a slice of countryside charm, Rural Roots is your destination for authentic, handpicked products that reflect the heart and soul of our villages. Join us in cultivating a community-driven marketplace that connects people, preserves heritage, and grows together. Welcome to Rural Roots, where the journey is as enriching as the destination."
  };

  return <HeroSection myData={data} />;
};

export default About;