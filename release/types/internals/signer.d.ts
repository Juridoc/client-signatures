/*!
 * Copyright (C) 2018-2019 Juridoc
 */
import * as Class from '@singleware/class';
import * as Contacts from '@juridoc/client-contacts';
/**
 * Signature signer, internal entity class.
 */
export declare class Signer extends Class.Null {
    /**
     * Signer contact Id.
     */
    contactId: string;
    /**
     * Signer contact entity.
     */
    contact: Contacts.Entity;
    /**
     * Signer email.
     */
    email: string;
    /**
     * Sign date.
     */
    signedAt?: Date;
    /**
     * View date.
     */
    viewedAt?: Date;
    /**
     * Download date.
     */
    downloadedAt?: Date;
    /**
     * Bounce date.
     */
    bouncedAt?: Date;
}
