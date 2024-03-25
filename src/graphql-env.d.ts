/* eslint-disable */
/* prettier-ignore */

/** An IntrospectionQuery representation of your schema.
 *
 * @remarks
 * This is an introspection of your schema saved as a file by GraphQLSP.
 * It will automatically be used by `gql.tada` to infer the types of your GraphQL documents.
 * If you need to reuse this data or update your `scalars`, update `tadaOutputLocation` to
 * instead save to a .ts instead of a .d.ts file.
 */
export type introspection = {
  "__schema": {
    "queryType": {
      "name": "QueryRoot"
    },
    "mutationType": {
      "name": "MutationRoot"
    },
    "subscriptionType": null,
    "types": [
      {
        "kind": "SCALAR",
        "name": "Boolean"
      },
      {
        "kind": "ENUM",
        "name": "BrokerType",
        "enumValues": [
          {
            "name": "EXANTE"
          },
          {
            "name": "FREEDOMFINANCE"
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "CreateFiscalTransaction",
        "inputFields": [
          {
            "name": "portfolioId",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "UUID",
                "ofType": null
              }
            }
          },
          {
            "name": "brokerage",
            "type": {
              "kind": "ENUM",
              "name": "BrokerType",
              "ofType": null
            }
          },
          {
            "name": "dateTime",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "NaiveDateTime",
                "ofType": null
              }
            }
          },
          {
            "name": "ticker",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "amount",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "INPUT_OBJECT",
                "name": "MoneyInput",
                "ofType": null
              }
            }
          },
          {
            "name": "transactionType",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "ENUM",
                "name": "CreateableFiscalTransactionType",
                "ofType": null
              }
            }
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "CreatePortfolio",
        "inputFields": [
          {
            "name": "title",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "CreateTradeOperation",
        "inputFields": [
          {
            "name": "portfolioId",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "UUID",
                "ofType": null
              }
            }
          },
          {
            "name": "ticker",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          },
          {
            "name": "side",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "ENUM",
                "name": "TradeOperationSide",
                "ofType": null
              }
            }
          },
          {
            "name": "price",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "INPUT_OBJECT",
                "name": "MoneyInput",
                "ofType": null
              }
            }
          },
          {
            "name": "quantity",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
              }
            }
          },
          {
            "name": "summ",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "INPUT_OBJECT",
                "name": "MoneyInput",
                "ofType": null
              }
            }
          },
          {
            "name": "isin",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "dateTime",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "NaiveDateTime",
                "ofType": null
              }
            }
          },
          {
            "name": "brokerage",
            "type": {
              "kind": "ENUM",
              "name": "BrokerType",
              "ofType": null
            }
          }
        ]
      },
      {
        "kind": "ENUM",
        "name": "CreateableFiscalTransactionType",
        "enumValues": [
          {
            "name": "TAX"
          },
          {
            "name": "DIVIDEND"
          },
          {
            "name": "FUNDING_WITHDRAWAL"
          },
          {
            "name": "COMISSION"
          }
        ]
      },
      {
        "kind": "SCALAR",
        "name": "Decimal"
      },
      {
        "kind": "SCALAR",
        "name": "Float"
      },
      {
        "kind": "SCALAR",
        "name": "ID"
      },
      {
        "kind": "SCALAR",
        "name": "Int"
      },
      {
        "kind": "OBJECT",
        "name": "Me",
        "fields": [
          {
            "name": "email",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "Money",
        "fields": [
          {
            "name": "amount",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Decimal",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "currency",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "MoneyInput",
        "inputFields": [
          {
            "name": "amount",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Decimal",
                "ofType": null
              }
            }
          },
          {
            "name": "currency",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "MutationRoot",
        "fields": [
          {
            "name": "createPortfolio",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "Portfolio",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "data",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "CreatePortfolio",
                    "ofType": null
                  }
                }
              }
            ]
          },
          {
            "name": "deletePortfolio",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "UUID",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "id",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "UUID",
                    "ofType": null
                  }
                }
              }
            ]
          },
          {
            "name": "uploadReport",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "ReportUploadResult",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "portfolioId",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "UUID",
                    "ofType": null
                  }
                }
              },
              {
                "name": "brokerage",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "ENUM",
                    "name": "BrokerType",
                    "ofType": null
                  }
                }
              },
              {
                "name": "upload",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Upload",
                    "ofType": null
                  }
                }
              }
            ]
          },
          {
            "name": "createFiscalTransaction",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "UUID",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "createRequest",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "CreateFiscalTransaction",
                    "ofType": null
                  }
                }
              }
            ]
          },
          {
            "name": "deleteFiscalTransaction",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "id",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "UUID",
                    "ofType": null
                  }
                }
              }
            ]
          },
          {
            "name": "createTradeOperationg",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "UUID",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "createRequest",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "CreateTradeOperation",
                    "ofType": null
                  }
                }
              }
            ]
          },
          {
            "name": "deleteTradeOperationg",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "id",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "UUID",
                    "ofType": null
                  }
                }
              }
            ]
          }
        ],
        "interfaces": []
      },
      {
        "kind": "SCALAR",
        "name": "NaiveDateTime"
      },
      {
        "kind": "OBJECT",
        "name": "Portfolio",
        "fields": [
          {
            "name": "id",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "UUID",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "title",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "brokerages",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "ENUM",
                    "name": "BrokerType",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          },
          {
            "name": "amountOfUserTransactions",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "totalReturnPercentage",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Decimal",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "totalReturnValue",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "Money",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "annualIncome",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "Money",
                "ofType": null
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "QueryRoot",
        "fields": [
          {
            "name": "me",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "Me",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "portfolios",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "Portfolio",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          },
          {
            "name": "userTransactions",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "UserTransaction",
                    "ofType": null
                  }
                }
              }
            },
            "args": [
              {
                "name": "portfolioId",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "UUID",
                    "ofType": null
                  }
                }
              }
            ]
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "ReportUploadResult",
        "fields": [
          {
            "name": "id",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "UUID",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "fiscalTransactions",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "tradeOperations",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "SCALAR",
        "name": "String"
      },
      {
        "kind": "ENUM",
        "name": "TradeOperationSide",
        "enumValues": [
          {
            "name": "BUY"
          },
          {
            "name": "SELL"
          }
        ]
      },
      {
        "kind": "SCALAR",
        "name": "UUID"
      },
      {
        "kind": "SCALAR",
        "name": "Upload"
      },
      {
        "kind": "OBJECT",
        "name": "UserTransaction",
        "fields": [
          {
            "name": "userTransactionType",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "ENUM",
                "name": "UserTransactionType",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "brokerage",
            "type": {
              "kind": "ENUM",
              "name": "BrokerType",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "summ",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "Money",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "ticker",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "price",
            "type": {
              "kind": "OBJECT",
              "name": "Money",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "quantity",
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "tradeSide",
            "type": {
              "kind": "ENUM",
              "name": "UserTransactionTradeSide",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "tradeOperationId",
            "type": {
              "kind": "SCALAR",
              "name": "UUID",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "fiscalTransactionId",
            "type": {
              "kind": "SCALAR",
              "name": "UUID",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "unrecognizedType",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "dateTime",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "NaiveDateTime",
                "ofType": null
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "ENUM",
        "name": "UserTransactionTradeSide",
        "enumValues": [
          {
            "name": "BUY"
          },
          {
            "name": "SELL"
          }
        ]
      },
      {
        "kind": "ENUM",
        "name": "UserTransactionType",
        "enumValues": [
          {
            "name": "TRADE"
          },
          {
            "name": "UNRECOGNIZED"
          },
          {
            "name": "TAX"
          },
          {
            "name": "DIVIDEND"
          },
          {
            "name": "COMISSION"
          },
          {
            "name": "FUNDING_WITHDRAWAL"
          },
          {
            "name": "REVERTED_DIVIDEND"
          }
        ]
      }
    ],
    "directives": []
  }
};

import * as gqlTada from 'gql.tada';

declare module 'gql.tada' {
  interface setupSchema {
    introspection: introspection
  }
}