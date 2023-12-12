import React from "react";
import {
  AboutSection,
  // ArticlesSection,
  ContactSection,
  HeroSection,
  InterestsSection,
  Page,
  ProjectsSection,
  Seo,
} from "gatsby-theme-portfolio-minimal";

export default function IndexPage() {
  return (
    <>
      <Seo title="Leroy Brown" />
      <Page useSplashScreenAnimation>
        <HeroSection sectionId="hero" />
        {/* <ArticlesSection sectionId="articles" heading="Latest Articles" sources={['Medium']} /> */}
        <AboutSection sectionId="about" heading="About" />
        <InterestsSection sectionId="details" heading="Technologies I've been working with recently:" />
        <ProjectsSection sectionId="features" heading="Work" />
        <ContactSection sectionId="github" heading="Keen for a kōrero or need a hand? Hit me up." />
      </Page>
    </>
  );
}
