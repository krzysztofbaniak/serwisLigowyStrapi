/**
 * post controller
 */

import { factories } from '@strapi/strapi'

export default factories.createCoreController('api::post.post', {
    async create(ctx) {
        const user = ctx.state.user;
        const post = await super.create(ctx);
        return await strapi.entityService.update("api::post.post", post.data.id, {
            data: {
                owner: user.id
            }
        });
    }
});