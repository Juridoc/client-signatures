/*!
 * Copyright (C) 2018-2019 Juridoc
 */
import * as Class from '@singleware/class';
import * as RestDB from '@singleware/restdb';

/**
 * Signatures, cancel request.
 */
@RestDB.Schema.Entity('signatures/{id}/cancel')
@Class.Describe()
export class Cancel extends Class.Null {}
