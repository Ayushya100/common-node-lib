'use strict';

import dotenv from 'dotenv';

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
