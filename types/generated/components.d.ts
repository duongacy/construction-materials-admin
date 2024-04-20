import type { Schema, Attribute } from '@strapi/strapi';

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

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'about-us.stat': AboutUsStat;
      'about-us.value': AboutUsValue;
    }
  }
}
