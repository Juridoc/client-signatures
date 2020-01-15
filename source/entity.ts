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
@RestDB.Schema.Entity('signatures')
@Class.Describe()
export class Entity extends Class.Null {
  /**
   * Signature Id.
   */
  @RestDB.Schema.Primary()
  @RestDB.Schema.Id()
  @Class.Public()
  public id!: string;

  /**
   * Account Id.
   */
  @RestDB.Schema.Required()
  @RestDB.Schema.Id()
  @Class.Public()
  public accountId!: string;

  /**
   * Profile entity.
   */
  @RestDB.Schema.Required()
  @RestDB.Schema.Object(() => Profiles.Entity, [
    'id',
    'contact.id',
    'contact.pictureId',
    'contact.name',
    'contact.personal.firstName',
    'contact.personal.lastName',
    'contact.professional.denomination'
  ])
  @Class.Public()
  public profile!: Profiles.Entity;

  /**
   * Context Id.
   */
  @RestDB.Schema.Required()
  @RestDB.Schema.Id()
  @Class.Public()
  public contextId!: string;

  /**
   * Context entity (as a document).
   */
  @RestDB.Schema.Required()
  @RestDB.Schema.Object(() => Documents.Entity, ['id', 'name'])
  @Class.Public()
  public contextAsDocument!: Documents.Entity;

  /**
   * File Id.
   */
  @RestDB.Schema.Required()
  @RestDB.Schema.Id()
  @Class.Public()
  public fileId!: string;

  /**
   * File entity.
   */
  @RestDB.Schema.Required()
  @RestDB.Schema.Object(() => Files.Entity, ['id', 'name', 'mime'])
  @Class.Public()
  public file!: Files.Entity;

  /**
   * Log Id.
   */
  @RestDB.Schema.Id()
  @Class.Public()
  public logId?: string;

  /**
   * Log entity.
   */
  @RestDB.Schema.Object(() => Files.Entity, ['id', 'name', 'mime'])
  @Class.Public()
  public log?: Files.Entity;

  /**
   * External Id.
   */
  @RestDB.Schema.String()
  @Class.Public()
  public externalId?: string;

  /**
   * Signers list.
   */
  @RestDB.Schema.Required()
  @RestDB.Schema.Array(Internals.Signer)
  @Class.Public()
  public signers!: Internals.Signer[];

  /**
   * Creation date.
   */
  @RestDB.Schema.Required()
  @RestDB.Schema.Date()
  @Class.Public()
  public createdAt!: Date;

  /**
   * Update date.
   */
  @RestDB.Schema.Date()
  @Class.Public()
  public updatedAt?: Date;

  /**
   * Start date.
   */
  @RestDB.Schema.Date()
  @Class.Public()
  public startedAt?: Date;

  /**
   * Finish date.
   */
  @RestDB.Schema.Date()
  @Class.Public()
  public finishedAt?: Date;

  /**
   * Signature status.
   */
  @RestDB.Schema.Required()
  @RestDB.Schema.Enumeration(Object.values(Types.Status))
  @Class.Public()
  public status!: Types.Status;

  /**
   * Signature provider.
   */
  @RestDB.Schema.Required()
  @RestDB.Schema.Enumeration(Object.values(Types.Provider))
  @Class.Public()
  public provider!: Types.Provider;

  /**
   * Expiration in days.
   */
  @RestDB.Schema.String(1, 730)
  @Class.Public()
  public expiration?: number;

  /**
   * Subject.
   */
  @RestDB.Schema.String()
  @Class.Public()
  public subject?: string;

  /**
   * Message.
   */
  @RestDB.Schema.String()
  @Class.Public()
  public message?: string;

  /**
   * Last error response.
   */
  @RestDB.Schema.Object(Object)
  @RestDB.Schema.Null()
  @Class.Public()
  public lastError?: RestDB.Entity | null;
}
