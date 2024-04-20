import type { Schema, Attribute } from '@strapi/strapi';

export interface AboutUsHeroSection extends Schema.Component {
  collectionName: 'components_about_us_hero_sections';
  info: {
    displayName: 'HeroSection';
    description: '';
  };
  attributes: {
    title: Attribute.Text & Attribute.Required;
    description: Attribute.Text & Attribute.Required;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'about-us.hero-section': AboutUsHeroSection;
    }
  }
}
