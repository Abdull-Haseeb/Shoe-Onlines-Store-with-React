import React from "react";
import Product from "./Main/Product";
import CTA from "./Main/CTA";
import Hero from "./Main/Hero";
import InstaPost from "./Main/InstaPost";
import Service from "./Main/Service";
import Special from "./Main/Special";
import Collection from "./Main/Collection";
export default function Main() {
  return (
    <div>
      <Hero />
      <Collection />
      <Product />
      <CTA />
      <Special />
      <Service />
      <InstaPost />
    </div>
  );
}
