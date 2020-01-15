/*!
 * Copyright (C) 2018-2019 Juridoc
 */
import * as Class from '@singleware/class';
import * as Injection from '@singleware/injection';
import * as RestDB from '@singleware/restdb';

import * as Core from '@juridoc/client-core';

import * as Requests from './requests';

import { Entity } from './entity';

/**
 * Signatures mapper class.
 */
@Injection.Describe({ singleton: true, name: 'signatures' })
@Class.Describe()
export class Mapper extends Class.Null {
  /**
   * Client instance.
   */
  @Injection.Inject(Core.Client)
  @Class.Private()
  private client!: Core.Client;

  /**
   * Mapper instance.
   */
  @Class.Private()
  private mapper = new RestDB.Mapper<Entity>(this.client, Entity);

  /**
   * Get the error entity from the last operation.
   */
  @Class.Public()
  public get error(): Core.Entities.Error | undefined {
    return this.client.error;
  }

  /**
   * Resend the signature that corresponds to the specified Id based on the given resend request.
   * @param id Signature Id.
   * @param request Resend request.
   * @returns Returns a promise to get true when the signature was resent, false otherwise.
   * @throws Throws an error when the signature wasn't resent.
   */
  @Class.Public()
  public async resend(id: string, request: Requests.Resend): Promise<boolean> {
    return (await this.mapper.updateByIdEx(Requests.Resend, id, request))!;
  }

  /**
   * Cancel the signature that corresponds to the specified Id based on the given resend request.
   * @param id Signature Id.
   * @param request Cancel request.
   * @returns Returns a promise to get true when the signature was cancelled, false otherwise.
   * @throws Throws an error when the signature wasn't cancelled.
   */
  @Class.Public()
  public async cancel(id: string, request: Requests.Cancel): Promise<boolean> {
    return (await this.mapper.updateByIdEx(Requests.Cancel, id, request))!;
  }

  /**
   * Load the signature that corresponds to the specified signature Id.
   * @param id Signature Id.
   * @param fields Fields to be selected.
   * @returns Returns a promise to get the signature entity.
   * @throws Throws an error when the signature wasn't found.
   */
  @Class.Public()
  public async load(id: string, fields?: string[]): Promise<Entity> {
    return (await this.mapper.findById(id, fields))!;
  }

  /**
   * List all signatures that corresponds to the specified filter.
   * @param query Query filter.
   * @param fields Fields to be selected.
   * @returns Returns a promise to get the signature list or undefined when an error occurs.
   */
  @Class.Public()
  public async list(query: RestDB.Query, fields?: string[]): Promise<Entity[] | undefined> {
    return await this.mapper.find(query, fields);
  }

  /**
   * Count all signatures that corresponds to the specified filter.
   * @param query Query filter.
   * @returns Returns a promise to get the number of signatures or undefined when an error occurs.
   */
  @Class.Public()
  public async count(query: RestDB.Query): Promise<number | undefined> {
    return await this.mapper.count(query);
  }
}
