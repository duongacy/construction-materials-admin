'use strict';

/**
 * learning-post service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::learning-post.learning-post');
