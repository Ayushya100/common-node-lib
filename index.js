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
import { exec, trxRunner } from './src/db/index.js';

dotenv.config({
    path: './env'
});

export {
  buildApiError,
  buildApiResponse,
  logger,
  convertIdToPrettyString,
  convertPrettyStringToId,
  convertToNativeTimeZone,
  RequestContext,
  errorHandler,
  verifyUserId,
  verifyScope,
  verifyRole,
  userContext,
  verifyToken,
  exec,
  trxRunner
};
