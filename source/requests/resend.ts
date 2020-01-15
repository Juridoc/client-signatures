/*!
 * Copyright (C) 2018-2019 Juridoc
 */
import * as Class from '@singleware/class';
import * as RestDB from '@singleware/restdb';

/**
 * Signatures, resend request.
 */
@RestDB.Schema.Entity('signatures/{id}/resend')
@Class.Describe()
export class Resend extends Class.Null {}
