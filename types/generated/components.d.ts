import type { Schema, Attribute } from '@strapi/strapi';

export interface AboutUsBlogsSection extends Schema.Component {
  collectionName: 'components_about_us_blogs_sections';
  info: {
    displayName: 'BlogsSection';
    description: '';
  };
  attributes: {
    title: Attribute.Text & Attribute.Required;
    description: Attribute.String & Attribute.Required;
    blogs: Attribute.Relation<
      'about-us.blogs-section',
      'oneToMany',
      'api::blog.blog'
    >;
  };
}

export interface AboutUsHeroSection extends Schema.Component {
  collectionName: 'components_about_us_hero_sections';
  info: {
    displayName: 'HeroSection';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    description: Attribute.String & Attribute.Required;
    backgrounds: Attribute.Media & Attribute.Required;
  };
}

export interface AboutUsImageSection extends Schema.Component {
  collectionName: 'components_about_us_image_sections';
  info: {
    displayName: 'ImageSection';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    description: Attribute.String & Attribute.Required;
    image: Attribute.Media;
  };
}

export interface AboutUsLogosCloudSection extends Schema.Component {
  collectionName: 'components_about_us_logos_cloud_sections';
  info: {
    displayName: 'LogosCloudSection';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    description: Attribute.String & Attribute.Required;
    logos: Attribute.Media & Attribute.Required;
  };
}

export interface AboutUsStat extends Schema.Component {
  collectionName: 'components_about_us_stats';
  info: {
    displayName: 'Stat';
    description: '';
  };
  attributes: {
    value: Attribute.String & Attribute.Required;
    description: Attribute.String & Attribute.Required;
    title: Attribute.String & Attribute.Required;
  };
}

export interface AboutUsStatsSection extends Schema.Component {
  collectionName: 'components_about_us_stats_sections';
  info: {
    displayName: 'StatsSection';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    description: Attribute.Text & Attribute.Required;
    stats: Attribute.Component<'about-us.stat', true>;
  };
}

export interface AboutUsTeamSection extends Schema.Component {
  collectionName: 'components_about_us_team_sections';
  info: {
    displayName: 'TeamSection';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    description: Attribute.String & Attribute.Required;
    members: Attribute.Relation<
      'about-us.team-section',
      'oneToMany',
      'api::member.member'
    >;
  };
}

export interface AboutUsValue extends Schema.Component {
  collectionName: 'components_about_us_values';
  info: {
    displayName: 'Value';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    description: Attribute.String & Attribute.Required;
  };
}

export interface AboutUsValuesSection extends Schema.Component {
  collectionName: 'components_about_us_values_sections';
  info: {
    displayName: 'ValuesSection';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    description: Attribute.String & Attribute.Required;
    values: Attribute.Component<'about-us.value', true>;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'about-us.blogs-section': AboutUsBlogsSection;
      'about-us.hero-section': AboutUsHeroSection;
      'about-us.image-section': AboutUsImageSection;
      'about-us.logos-cloud-section': AboutUsLogosCloudSection;
      'about-us.stat': AboutUsStat;
      'about-us.stats-section': AboutUsStatsSection;
      'about-us.team-section': AboutUsTeamSection;
      'about-us.value': AboutUsValue;
      'about-us.values-section': AboutUsValuesSection;
    }
  }
}
