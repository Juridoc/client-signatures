/*!
 * Copyright (C) 2018-2019 Juridoc
 */
import * as Class from '@singleware/class';
import * as Types from '../types';
import { Level } from './level';
/**
 * Signature stack, internal entity class.
 */
export declare class Stack extends Class.Null {
    /**
     * Stack status.
     */
    status: Types.Stack.Status;
    /**
     * Stack levels.
     */
    levels: Level[];
}
