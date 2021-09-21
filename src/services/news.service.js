const httpStatus = require('http-status');
const { News } = require('../models');
const ApiError = require('../utils/ApiError');

const createNews = async () => {
    const news = {
        title: title,
        created: created,
        author: author,
        category: category,
        content: content,
        image: image,
        comments: comments,
    }
    if (await news) {
        throw new ApiError(httpStatus.BAD_REQUEST, 'News already exited');
    } else {
        return News.create(news);
    }
};

const getNews = async (news) => {
    if (await news) {
        return news;
    } else {
        return ApiError(httpStatus.BAD_REQUEST, 'News is not exit');
    }
}

const getNewsById = async (newsId) => {
    return News.findById(newsId);
}

const updateNews = async (newsId,updateBody) => {
    const news = await getNewsById(newsId);
    if (!news) {
        throw new ApiError(httpStatus.NOT_FOUND, 'News is not found');
    } 
    Object.assign(news, updateBody);
  await news.save();
  return news;
}

const deleteNews = async (newsId) => {
    const news = await getNewsById(newsId);
  if (!news) {
    throw new ApiError(httpStatus.NOT_FOUND, 'News not found');
  }
  await news.remove();
  return news;
}


module.exports = {
    getNews,
    getNewsById,
    createNews,
    updateNews,
    deleteNews
}