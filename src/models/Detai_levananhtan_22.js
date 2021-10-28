const { boolean } = require('joi');
const mongoose = require('mongoose');
const { input } = require('../config/logger');
const { toJSON, paginate } = require('./plugins');

const detaiSchema = mongoose.Schema(
  {
    MaDT: {
      type: String,
      required: true,
      trim: true,
      maxLength: 20,
    },
    TenDT: {
      type: String,
      required: true,
      trim: true,
     maxLength: 30,
    },
    KinhPhi: {
      type: input,
    },
    NoiThuctap: {
        type: String,
        required: true,
        trim: true,
        maxLength:: 30,
    }
  },
  {
    timestamps: true,
  }
);

// add plugin that converts mongoose to json
studentSchema.plugin(toJSON);
studentSchema.plugin(paginate);

const Detai = mongoose.model('Student', detaiSchema);

module.exports = Detai;