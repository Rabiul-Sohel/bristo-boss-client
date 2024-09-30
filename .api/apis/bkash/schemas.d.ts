declare const B2CPaymentUsingPost: {
    readonly body: {
        readonly type: "object";
        readonly required: readonly ["amount", "currency", "merchantInvoiceNumber", "receiverMSISDN"];
        readonly properties: {
            readonly amount: {
                readonly type: "string";
                readonly description: "Amount";
            };
            readonly currency: {
                readonly type: "string";
                readonly description: "Currency(BDT)";
            };
            readonly merchantInvoiceNumber: {
                readonly type: "string";
                readonly description: "Merchant Invoice Number";
            };
            readonly receiverMSISDN: {
                readonly type: "string";
                readonly description: "Receiver MSISDN";
            };
        };
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly Authorization: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
                readonly "X-APP-Key": {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
            };
            readonly required: readonly ["Authorization", "X-APP-Key"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly completedTime: {
                    readonly type: "string";
                };
                readonly trxID: {
                    readonly type: "string";
                };
                readonly transactionStatus: {
                    readonly type: "string";
                };
                readonly amount: {
                    readonly type: "string";
                };
                readonly currency: {
                    readonly type: "string";
                };
                readonly merchantInvoiceNumber: {
                    readonly type: "string";
                };
                readonly receiverMSISDN: {
                    readonly type: "string";
                };
                readonly b2cFee: {
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const CapturePaymentUsingPost: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly paymentID: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
            };
            readonly required: readonly ["paymentID"];
        }, {
            readonly type: "object";
            readonly properties: {
                readonly Authorization: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
                readonly "X-APP-Key": {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
            };
            readonly required: readonly ["Authorization", "X-APP-Key"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly paymentID: {
                    readonly type: "string";
                };
                readonly createTime: {
                    readonly type: "string";
                };
                readonly updateTime: {
                    readonly type: "string";
                };
                readonly trxID: {
                    readonly type: "string";
                };
                readonly transactionStatus: {
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const CreatePaymentUsingPost: {
    readonly body: {
        readonly type: "object";
        readonly required: readonly ["amount", "currency", "intent", "merchantInvoiceNumber"];
        readonly properties: {
            readonly amount: {
                readonly type: "string";
                readonly description: "Amount";
            };
            readonly currency: {
                readonly type: "string";
                readonly description: "Currency(BDT)";
            };
            readonly intent: {
                readonly type: "string";
                readonly description: "Intent(sale/authorization)";
            };
            readonly merchantInvoiceNumber: {
                readonly type: "string";
                readonly description: "Merchant Invoice Number";
            };
            readonly merchantAssociationInfo: {
                readonly type: "string";
                readonly description: "Merchant Association Info";
            };
        };
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly Authorization: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
                readonly "X-APP-Key": {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
            };
            readonly required: readonly ["Authorization", "X-APP-Key"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly paymentID: {
                    readonly type: "string";
                };
                readonly createTime: {
                    readonly type: "string";
                };
                readonly orgLogo: {
                    readonly type: "string";
                };
                readonly orgName: {
                    readonly type: "string";
                };
                readonly transactionStatus: {
                    readonly type: "string";
                };
                readonly amount: {
                    readonly type: "string";
                };
                readonly currency: {
                    readonly type: "string";
                };
                readonly intent: {
                    readonly type: "string";
                };
                readonly merchantInvoiceNumber: {
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const ExecutePaymentUsingPost: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly paymentID: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
            };
            readonly required: readonly ["paymentID"];
        }, {
            readonly type: "object";
            readonly properties: {
                readonly Authorization: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
                readonly "X-APP-Key": {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
            };
            readonly required: readonly ["Authorization", "X-APP-Key"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly paymentID: {
                    readonly type: "string";
                };
                readonly createTime: {
                    readonly type: "string";
                };
                readonly updateTime: {
                    readonly type: "string";
                };
                readonly trxID: {
                    readonly type: "string";
                };
                readonly transactionStatus: {
                    readonly type: "string";
                };
                readonly amount: {
                    readonly type: "string";
                };
                readonly currency: {
                    readonly type: "string";
                };
                readonly intent: {
                    readonly type: "string";
                };
                readonly merchantInvoiceNumber: {
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetTokenUsingPost: {
    readonly body: {
        readonly type: "object";
        readonly required: readonly ["app_key", "app_secret"];
        readonly properties: {
            readonly app_key: {
                readonly type: "string";
                readonly description: "App Key";
            };
            readonly app_secret: {
                readonly type: "string";
                readonly description: "App Secret";
            };
        };
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly username: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
                readonly password: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
            };
            readonly required: readonly ["username", "password"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly expires_in: {
                    readonly type: "string";
                };
                readonly id_token: {
                    readonly type: "string";
                };
                readonly refresh_token: {
                    readonly type: "string";
                };
                readonly token_type: {
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const IntraAccountTransferUsingPost: {
    readonly body: {
        readonly type: "object";
        readonly required: readonly ["amount", "currency", "transferType"];
        readonly properties: {
            readonly amount: {
                readonly type: "string";
                readonly description: "Amount";
            };
            readonly currency: {
                readonly type: "string";
                readonly description: "Currency(BDT)";
            };
            readonly transferType: {
                readonly type: "string";
                readonly description: "TransferType(Collection2Disbursement/Disbursement2Collection)";
            };
        };
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly Authorization: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
                readonly "X-APP-Key": {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
            };
            readonly required: readonly ["Authorization", "X-APP-Key"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly amount: {
                    readonly type: "string";
                };
                readonly completedTime: {
                    readonly type: "string";
                };
                readonly currency: {
                    readonly type: "string";
                };
                readonly transactionStatus: {
                    readonly type: "string";
                };
                readonly transferType: {
                    readonly type: "string";
                };
                readonly trxID: {
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const PostCheckoutPaymentRefund: {
    readonly body: {
        readonly type: "object";
        readonly required: readonly ["paymentId", "trxID"];
        readonly properties: {
            readonly amount: {
                readonly type: "string";
                readonly description: "Amount";
            };
            readonly paymentId: {
                readonly type: "string";
                readonly description: "paymentId";
            };
            readonly trxID: {
                readonly type: "string";
                readonly description: "trxID";
            };
            readonly sku: {
                readonly type: "string";
                readonly description: "sku";
            };
            readonly reason: {
                readonly type: "string";
                readonly description: "reason";
            };
        };
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly Authorization: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
                readonly "X-APP-Key": {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
            };
            readonly required: readonly ["Authorization", "X-APP-Key"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly completedTime: {
                    readonly type: "string";
                };
                readonly originalTrxID: {
                    readonly type: "string";
                };
                readonly refundTrxID: {
                    readonly type: "string";
                };
                readonly transactionStatus: {
                    readonly type: "string";
                };
                readonly amount: {
                    readonly type: "string";
                };
                readonly currency: {
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const QueryOrganizationBalanceUsingGet: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly Authorization: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
                readonly "X-APP-Key": {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
            };
            readonly required: readonly ["Authorization", "X-APP-Key"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly organizationBalance: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly accountHolderName: {
                                readonly type: "string";
                            };
                            readonly accountStatus: {
                                readonly type: "string";
                            };
                            readonly accountTypeName: {
                                readonly type: "string";
                            };
                            readonly availableBalance: {
                                readonly type: "string";
                            };
                            readonly currency: {
                                readonly type: "string";
                            };
                            readonly currentBalance: {
                                readonly type: "string";
                            };
                            readonly updateTime: {
                                readonly type: "string";
                            };
                        };
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const QueryPaymentUsingGet: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly paymentID: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
            };
            readonly required: readonly ["paymentID"];
        }, {
            readonly type: "object";
            readonly properties: {
                readonly Authorization: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
                readonly "X-APP-Key": {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
            };
            readonly required: readonly ["Authorization", "X-APP-Key"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly paymentID: {
                    readonly type: "string";
                };
                readonly createTime: {
                    readonly type: "string";
                };
                readonly updateTime: {
                    readonly type: "string";
                };
                readonly trxID: {
                    readonly type: "string";
                };
                readonly transactionStatus: {
                    readonly type: "string";
                };
                readonly amount: {
                    readonly type: "string";
                };
                readonly currency: {
                    readonly type: "string";
                };
                readonly intent: {
                    readonly type: "string";
                };
                readonly merchantInvoiceNumber: {
                    readonly type: "string";
                };
                readonly refundAmount: {
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const RefreshTokenUsingPost: {
    readonly body: {
        readonly type: "object";
        readonly required: readonly ["app_key", "app_secret", "refresh_token"];
        readonly properties: {
            readonly app_key: {
                readonly type: "string";
                readonly description: "App Key";
            };
            readonly app_secret: {
                readonly type: "string";
                readonly description: "App Secret";
            };
            readonly refresh_token: {
                readonly type: "string";
                readonly description: "Refresh Token";
            };
        };
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly username: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
                readonly password: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
            };
            readonly required: readonly ["username", "password"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly expires_in: {
                    readonly type: "string";
                };
                readonly id_token: {
                    readonly type: "string";
                };
                readonly refresh_token: {
                    readonly type: "string";
                };
                readonly token_type: {
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const SearchTransactionUsingGet: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly trxID: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
            };
            readonly required: readonly ["trxID"];
        }, {
            readonly type: "object";
            readonly properties: {
                readonly Authorization: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
                readonly "X-APP-Key": {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
            };
            readonly required: readonly ["Authorization", "X-APP-Key"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly amount: {
                    readonly type: "string";
                };
                readonly completedTime: {
                    readonly type: "string";
                };
                readonly currency: {
                    readonly type: "string";
                };
                readonly customerMsisdn: {
                    readonly type: "string";
                };
                readonly initiationTime: {
                    readonly type: "string";
                };
                readonly organizationShortCode: {
                    readonly type: "string";
                };
                readonly transactionReference: {
                    readonly type: "string";
                };
                readonly transactionStatus: {
                    readonly type: "string";
                };
                readonly transactionType: {
                    readonly type: "string";
                };
                readonly trxID: {
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const VoidPaymentUsingPost: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly paymentID: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
            };
            readonly required: readonly ["paymentID"];
        }, {
            readonly type: "object";
            readonly properties: {
                readonly Authorization: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
                readonly "X-APP-Key": {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
            };
            readonly required: readonly ["Authorization", "X-APP-Key"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly paymentID: {
                    readonly type: "string";
                };
                readonly createTime: {
                    readonly type: "string";
                };
                readonly updateTime: {
                    readonly type: "string";
                };
                readonly trxID: {
                    readonly type: "string";
                };
                readonly transactionStatus: {
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
export { B2CPaymentUsingPost, CapturePaymentUsingPost, CreatePaymentUsingPost, ExecutePaymentUsingPost, GetTokenUsingPost, IntraAccountTransferUsingPost, PostCheckoutPaymentRefund, QueryOrganizationBalanceUsingGet, QueryPaymentUsingGet, RefreshTokenUsingPost, SearchTransactionUsingGet, VoidPaymentUsingPost };
