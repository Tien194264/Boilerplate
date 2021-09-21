const mongoose = require('mongoose');
const { toJSON, paginate } = require('./plugins');
const { roles } = require('../config/roles');


const newsSchema = mongoose.Schema({
   
    title: {
        type: 'String',
        required: true,
        trim: true,
        uppercase: true,
        minLengthen: 10,
        maxLengthen: 100,
    },
    created: {
        type: 'Date',
        required: true,
    },
    author: {
        type: 'String',
        required: true,
        trim: true,
        uppercase: true,
    },
    category: {
        type: 'String',
        required: true,
    },
    content: {
        type: 'String',
        required: true,
        trim: true,
        minLengthen: 100,

    },
    image: {
        type: 'String',
        trim: true,
    },
    comments: {
        type: 'String',
        trim: true,

    },
    role: {
        type: String,
        enum: roles,
        default: 'user',
      },
},
    
    {
        timestamps: true,
    }
);

newsSchema.plugin(toJSON);
newsSchema.plugin(paginate);



const News = mongoose.model('News', newsSchema);

module.exports = News;