/*!
 * Copyright (C) 2018-2019 Juridoc
 */
import * as Class from '@singleware/class';
import * as RestDB from '@singleware/restdb';

import * as Types from '../types';

import { Level } from './level';

/**
 * Signature stack, internal entity class.
 */
@RestDB.Schema.Entity('signatures/stack')
@Class.Describe()
export class Stack extends Class.Null {
  /**
   * Stack status.
   */
  @RestDB.Schema.Required()
  @RestDB.Schema.Enumeration(Object.values(Types.Stack.Status))
  @Class.Public()
  public status!: Types.Stack.Status;

  /**
   * Stack levels.
   */
  @RestDB.Schema.Required()
  @RestDB.Schema.Array(Level)
  @Class.Public()
  public levels!: Level[];
}
