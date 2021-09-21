const Joi = require('joi');
const { objectId } = require('./custom.validation');

const getNews = {
    body: Joi.object().keys({
        title: Joi.string().case('upper').required(),
        created: Joi.date().format('YYYY-MM-DD').utc(),
        author: Joi.string().case('upper').require(),
        category: Joi.string().unique().required(),
        content: Joi.string().required(),
        image:Joi.image().minDimensions(100, 50),
        comments: Joi.string(),
        sortBy: Joi.string(),
        limit: Joi.number().integer(),
        page: Joi.number().integer(),
    }),
};

const getNewsById = {
    params: Joi.object().keys({
        newsId: Joi.string().custom(objectId),
    }),
};

const createNews = {
    body: Joi.object().keys({
        title: Joi.string().case('upper').required(),
        created: Joi.date().format('YYYY-MM-DD').utc(),
        author: Joi.string().case('upper').require(),
        category: Joi.string().unique().required(),
        content: Joi.string().required(),
        image:Joi.image().minDimensions(100, 50),
        comments: Joi.string(),
       
      }),
};

const updateNews = {
    params: Joi.object().keys({
        newsId: Joi.string().custom(objectId),
    }),
    body: Joi.object()
        .keys({
        
            title: Joi.string().case('upper').required(),
            created: Joi.date().format('YYYY-MM-DD').utc(),
            author: Joi.string().case('upper').require(),
            category: Joi.string().unique().required(),
            content: Joi.string().required(),
            image:Joi.image().minDimensions(100, 50),
            comments: Joi.string(),
       
    })
};

const deleteNews = {
    params: Joi.object().keys({
        newsId: Joi.string().custom(objectId),
    }),
};

module.exports = {
        getNews,
        getNewsById,
        createNews,
        updateNews,
        deleteNews
}
