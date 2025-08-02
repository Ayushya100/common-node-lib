'use strict';

import dotenv from 'dotenv';

import {
  buildApiError,
  buildApiResponse,
  logger,
  convertIdToPrettyString,
  convertPrettyStringToId,
  convertToNativeTimeZone,
  RequestContext
} from './src/utils/index.js';
import { errorHandler, verifyUserId, verifyScope, verifyRole, userContext, verifyToken } from './src/middlewares/index.js';

dotenv.config({
    path: './env'
});

export {
    errorHandler,
    verifyUserId,
    verifyScope,
    verifyRole,
    userContext,
    verifyToken
};
