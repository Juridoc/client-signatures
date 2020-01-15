/*!
 * Copyright (C) 2018-2019 Juridoc
 */
import * as Class from '@singleware/class';
import * as RestDB from '@singleware/restdb';
import * as Profiles from '@juridoc/client-profiles';
import * as Documents from '@juridoc/client-documents';
import * as Files from '@juridoc/client-files';
import * as Types from './types';
import * as Internals from './internals';
/**
 * Signature entity class.
 */
export declare class Entity extends Class.Null {
    /**
     * Signature Id.
     */
    id: string;
    /**
     * Account Id.
     */
    accountId: string;
    /**
     * Profile entity.
     */
    profile: Profiles.Entity;
    /**
     * Context Id.
     */
    contextId: string;
    /**
     * Context entity (as a document).
     */
    contextAsDocument: Documents.Entity;
    /**
     * File Id.
     */
    fileId: string;
    /**
     * File entity.
     */
    file: Files.Entity;
    /**
     * Log Id.
     */
    logId?: string;
    /**
     * Log entity.
     */
    log?: Files.Entity;
    /**
     * External Id.
     */
    externalId?: string;
    /**
     * Signers list.
     */
    signers: Internals.Signer[];
    /**
     * Creation date.
     */
    createdAt: Date;
    /**
     * Update date.
     */
    updatedAt?: Date;
    /**
     * Start date.
     */
    startedAt?: Date;
    /**
     * Finish date.
     */
    finishedAt?: Date;
    /**
     * Signature status.
     */
    status: Types.Status;
    /**
     * Signature provider.
     */
    provider: Types.Provider;
    /**
     * Expiration in days.
     */
    expiration?: number;
    /**
     * Subject.
     */
    subject?: string;
    /**
     * Message.
     */
    message?: string;
    /**
     * Last error response.
     */
    lastError?: RestDB.Entity | null;
}
