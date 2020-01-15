"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Signer = void 0;
/*!
 * Copyright (C) 2018-2019 Juridoc
 */
const Class = require("@singleware/class");
const RestDB = require("@singleware/restdb");
const Contacts = require("@juridoc/client-contacts");
/**
 * Signature signer, internal entity class.
 */
let Signer = class Signer extends Class.Null {
};
__decorate([
    RestDB.Schema.Required(),
    RestDB.Schema.Id(),
    Class.Public()
], Signer.prototype, "contactId", void 0);
__decorate([
    RestDB.Schema.Required(),
    RestDB.Schema.Object(() => Contacts.Entity, [
        'id',
        'pictureId',
        'name',
        'personal.firstName',
        'personal.lastName',
        'professional.denomination'
    ]),
    Class.Public()
], Signer.prototype, "contact", void 0);
__decorate([
    RestDB.Schema.Required(),
    RestDB.Schema.String(),
    Class.Public()
], Signer.prototype, "email", void 0);
__decorate([
    RestDB.Schema.Date(),
    Class.Public()
], Signer.prototype, "signedAt", void 0);
__decorate([
    RestDB.Schema.Date(),
    Class.Public()
], Signer.prototype, "viewedAt", void 0);
__decorate([
    RestDB.Schema.Date(),
    Class.Public()
], Signer.prototype, "downloadedAt", void 0);
__decorate([
    RestDB.Schema.Date(),
    Class.Public()
], Signer.prototype, "bouncedAt", void 0);
Signer = __decorate([
    RestDB.Schema.Entity('signatures/signer'),
    Class.Describe()
], Signer);
exports.Signer = Signer;
//# sourceMappingURL=signer.js.map