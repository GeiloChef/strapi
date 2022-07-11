'use strict';

/**
 * introduction-stage service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::introduction-stage.introduction-stage');
