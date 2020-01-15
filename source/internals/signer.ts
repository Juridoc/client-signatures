/*!
 * Copyright (C) 2018-2019 Juridoc
 */
import * as Class from '@singleware/class';
import * as RestDB from '@singleware/restdb';

import * as Contacts from '@juridoc/client-contacts';

/**
 * Signature signer, internal entity class.
 */
@RestDB.Schema.Entity('signatures/signer')
@Class.Describe()
export class Signer extends Class.Null {
  /**
   * Signer contact Id.
   */
  @RestDB.Schema.Required()
  @RestDB.Schema.Id()
  @Class.Public()
  public contactId!: string;

  /**
   * Signer contact entity.
   */
  @RestDB.Schema.Required()
  @RestDB.Schema.Object(() => Contacts.Entity, [
    'id',
    'pictureId',
    'name',
    'personal.firstName',
    'personal.lastName',
    'professional.denomination'
  ])
  @Class.Public()
  public contact!: Contacts.Entity;

  /**
   * Signer email.
   */
  @RestDB.Schema.Required()
  @RestDB.Schema.String()
  @Class.Public()
  public email!: string;

  /**
   * Sign date.
   */
  @RestDB.Schema.Date()
  @Class.Public()
  public signedAt?: Date;

  /**
   * View date.
   */
  @RestDB.Schema.Date()
  @Class.Public()
  public viewedAt?: Date;

  /**
   * Download date.
   */
  @RestDB.Schema.Date()
  @Class.Public()
  public downloadedAt?: Date;

  /**
   * Bounce date.
   */
  @RestDB.Schema.Date()
  @Class.Public()
  public bouncedAt?: Date;
}
