﻿/*! Copyright (c) 2018 Siemens AG. Licensed under the MIT License. */

import { CoreType } from "./types";
import { User } from "./user";

/**
 * Type alias for RFC4122 V4 UUIDs represented as strings.
 */
export type Uuid = string;

/**
 * The base type of all objects in the Coaty object model.
 * Application-specific object types extend either CoatyObject
 * directly or any of its derived core types.
 */
export interface CoatyObject {

    /** 
     * The concrete type name of the object.
     * The name should be in a canonical form following the naming 
     * convention for Java packages to avoid name collisions.
     * All framework core types use the form
     * `coaty.<InterfaceName>`, e.g.
     * `coaty.CoatyObject` (see constants in `CoreTypes` class).
     */
    objectType: string;

    /**
     * The framework core type of the object, i.e. the name of the
     * interface that defines the object's shape.
     */
    coreType: CoreType;

    /**
     * Unique ID of the object
     */
    objectId: Uuid;

    /**
     * The name/description of the object
     */
    name: string;

    /**
     * Unique ID of parent/superordinate object (optional)
     */
    parentObjectId?: Uuid;

    /**
     * Unique ID of user/worker whom this object has been assigned to (optional)
     */
    assigneeUserId?: Uuid;

    /**
     * External ID associated with this object (optional)
     */
    externalId?: string;

    /**
     * Unique ID of Location object that this object has been 
     * associated with (optional).
     */
    locationId?: Uuid;

    /**
     * Marks an object that is no longer in use. The concrete definition meaning
     * of this property is defined by the application. The property value is
     * optional and should default to false.
     */
    isDeactivated?: boolean;
}

/**
 * Represents a Coaty container component, i.e. a controller or the communication
 * manager.
 */
export interface Component extends CoatyObject {

    coreType: "Component";
}

/**
 * Used to advertise configuration changes to interested Coaty
 * container components.
 */
export interface Config extends CoatyObject {

    coreType: "Config";

    /**
     * The object ID of the target object of this configuration
     */
    targetId: Uuid;

    /**
     * Whether to associate a user with the runtime (optional)
     */
    shouldAssociateUser?: boolean;

    /**
     * The user that should be associated with the runtime (optional).
     * The value is only interpreted if the value of `shouldAssociateUser`
     * property is true.
     */
    associatedUser?: User;
}
