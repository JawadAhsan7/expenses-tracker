import { Schema, model } from 'mongoose';
import { USER_ROLES } from '../utils.js/constants';

const schema = new Schema({
  firstName: String,
  lastName: String,
  email: String,
  password: String,
  role: {
    type: String,
    enum: Object.values(USER_ROLES)
  }
});

export default model('User', schema);