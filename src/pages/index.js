import React from "react";
import {
  AboutSection,
  ArticlesSection,
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
      <Seo title="Gatsby Starter for Portfolio Minimal" />
      <Page useSplashScreenAnimation>
        <HeroSection sectionId="hero" />
        <ArticlesSection sectionId="articles" heading="Latest Articles" sources={['Medium']} />
        <AboutSection sectionId="about" heading="About" />
        <InterestsSection sectionId="details" heading="Technologies I've been working with recently:" />
        <ProjectsSection sectionId="features" heading="Work" />
        <ContactSection sectionId="github" heading="Want to chat, or have something you think I can help with please get in touch." />
      </Page>
    </>
  );
}
