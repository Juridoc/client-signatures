/*!
 * Copyright (C) 2018-2019 Juridoc
 */
import * as Class from '@singleware/class';
import * as RestDB from '@singleware/restdb';
import * as Core from '@juridoc/client-core';
import * as Requests from './requests';
import { Entity } from './entity';
/**
 * Signatures mapper class.
 */
export declare class Mapper extends Class.Null {
    /**
     * Client instance.
     */
    private client;
    /**
     * Mapper instance.
     */
    private mapper;
    /**
     * Get the error entity from the last operation.
     */
    get error(): Core.Entities.Error | undefined;
    /**
     * Resend the signature that corresponds to the specified Id based on the given resend request.
     * @param id Signature Id.
     * @param request Resend request.
     * @returns Returns a promise to get true when the signature was resent, false otherwise.
     * @throws Throws an error when the signature wasn't resent.
     */
    resend(id: string, request: Requests.Resend): Promise<boolean>;
    /**
     * Cancel the signature that corresponds to the specified Id based on the given resend request.
     * @param id Signature Id.
     * @param request Cancel request.
     * @returns Returns a promise to get true when the signature was cancelled, false otherwise.
     * @throws Throws an error when the signature wasn't cancelled.
     */
    cancel(id: string, request: Requests.Cancel): Promise<boolean>;
    /**
     * Load the signature that corresponds to the specified signature Id.
     * @param id Signature Id.
     * @param fields Fields to be selected.
     * @returns Returns a promise to get the signature entity.
     * @throws Throws an error when the signature wasn't found.
     */
    load(id: string, fields?: string[]): Promise<Entity>;
    /**
     * List all signatures that corresponds to the specified filter.
     * @param query Query filter.
     * @param fields Fields to be selected.
     * @returns Returns a promise to get the signature list or undefined when an error occurs.
     */
    list(query: RestDB.Query, fields?: string[]): Promise<Entity[] | undefined>;
    /**
     * Count all signatures that corresponds to the specified filter.
     * @param query Query filter.
     * @returns Returns a promise to get the number of signatures or undefined when an error occurs.
     */
    count(query: RestDB.Query): Promise<number | undefined>;
}
