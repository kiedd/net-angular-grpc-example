/* tslint:disable */
/* eslint-disable */
// @ts-nocheck
//
// THIS IS A GENERATED FILE
// DO NOT MODIFY IT! YOUR CHANGES WILL BE LOST
import { Inject, Injectable, Optional } from '@angular/core';
import {
  GrpcCallType,
  GrpcClient,
  GrpcClientFactory,
  GrpcEvent,
  GrpcMetadata
} from '@ngx-grpc/common';
import {
  GRPC_CLIENT_FACTORY,
  GrpcHandler,
  takeMessages,
  throwStatusErrors
} from '@ngx-grpc/core';
import { Observable } from 'rxjs';
import * as thisProto from './user.pb';
import * as googleProtobuf000 from '@ngx-grpc/well-known-types';
import { GRPC_USER_API_CLIENT_SETTINGS } from './user.pbconf';
/**
 * Service client implementation for user.UserApi
 */
@Injectable({ providedIn: 'any' })
export class UserApiClient {
  private client: GrpcClient<any>;

  /**
   * Raw RPC implementation for each service client method.
   * The raw methods provide more control on the incoming data and events. E.g. they can be useful to read status `OK` metadata.
   * Attention: these methods do not throw errors when non-zero status codes are received.
   */
  $raw = {
    /**
     * Unary call: /user.UserApi/Create
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<googleProtobuf000.Empty>>
     */
    create: (
      requestData: thisProto.CreateUserCommand,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<googleProtobuf000.Empty>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/user.UserApi/Create',
        requestData,
        requestMetadata,
        requestClass: thisProto.CreateUserCommand,
        responseClass: googleProtobuf000.Empty
      });
    },
    /**
     * Unary call: /user.UserApi/Get
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.UsersReply>>
     */
    get: (
      requestData: googleProtobuf000.Empty,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.UsersReply>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/user.UserApi/Get',
        requestData,
        requestMetadata,
        requestClass: googleProtobuf000.Empty,
        responseClass: thisProto.UsersReply
      });
    }
  };

  constructor(
    @Optional() @Inject(GRPC_USER_API_CLIENT_SETTINGS) settings: any,
    @Inject(GRPC_CLIENT_FACTORY) clientFactory: GrpcClientFactory<any>,
    private handler: GrpcHandler
  ) {
    this.client = clientFactory.createClient('user.UserApi', settings);
  }

  /**
   * Unary call @/user.UserApi/Create
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<googleProtobuf000.Empty>
   */
  create(
    requestData: thisProto.CreateUserCommand,
    requestMetadata = new GrpcMetadata()
  ): Observable<googleProtobuf000.Empty> {
    return this.$raw
      .create(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/user.UserApi/Get
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.UsersReply>
   */
  get(
    requestData: googleProtobuf000.Empty,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.UsersReply> {
    return this.$raw
      .get(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }
}
