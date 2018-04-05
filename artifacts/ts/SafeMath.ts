export const SafeMath = 
{
  "contractName": "SafeMath",
  "abi": [],
  "bytecode": "0x60606040523415600e57600080fd5b603580601b6000396000f3006060604052600080fd00a165627a7a723058207e5c56aa9a56d72ec3a12fa314c290f06a91296db137205626beb89689b737a00029",
  "deployedBytecode": "0x6060604052600080fd00a165627a7a723058207e5c56aa9a56d72ec3a12fa314c290f06a91296db137205626beb89689b737a00029",
  "sourceMap": "117:1021:17:-;;;;;;;;;;;;;;;;;",
  "deployedSourceMap": "117:1021:17:-;;;;;",
  "source": "pragma solidity ^0.4.18;\n\n\n/**\n * @title SafeMath\n * @dev Math operations with safety checks that throw on error\n */\nlibrary SafeMath {\n\n  /**\n  * @dev Multiplies two numbers, throws on overflow.\n  */\n  function mul(uint256 a, uint256 b) internal pure returns (uint256) {\n    if (a == 0) {\n      return 0;\n    }\n    uint256 c = a * b;\n    assert(c / a == b);\n    return c;\n  }\n\n  /**\n  * @dev Integer division of two numbers, truncating the quotient.\n  */\n  function div(uint256 a, uint256 b) internal pure returns (uint256) {\n    // assert(b > 0); // Solidity automatically throws when dividing by 0\n    uint256 c = a / b;\n    // assert(a == b * c + a % b); // There is no case in which this doesn't hold\n    return c;\n  }\n\n  /**\n  * @dev Subtracts two numbers, throws on overflow (i.e. if subtrahend is greater than minuend).\n  */\n  function sub(uint256 a, uint256 b) internal pure returns (uint256) {\n    assert(b <= a);\n    return a - b;\n  }\n\n  /**\n  * @dev Adds two numbers, throws on overflow.\n  */\n  function add(uint256 a, uint256 b) internal pure returns (uint256) {\n    uint256 c = a + b;\n    assert(c >= a);\n    return c;\n  }\n}\n",
  "sourcePath": "zeppelin-solidity/contracts/math/SafeMath.sol",
  "ast": {
    "attributes": {
      "absolutePath": "zeppelin-solidity/contracts/math/SafeMath.sol",
      "exportedSymbols": {
        "SafeMath": [
          5253
        ]
      }
    },
    "children": [
      {
        "attributes": {
          "literals": [
            "solidity",
            "^",
            "0.4",
            ".18"
          ]
        },
        "id": 5157,
        "name": "PragmaDirective",
        "src": "0:24:17"
      },
      {
        "attributes": {
          "baseContracts": [
            null
          ],
          "contractDependencies": [
            null
          ],
          "contractKind": "library",
          "documentation": "@title SafeMath\n@dev Math operations with safety checks that throw on error",
          "fullyImplemented": true,
          "linearizedBaseContracts": [
            5253
          ],
          "name": "SafeMath",
          "scope": 5254
        },
        "children": [
          {
            "attributes": {
              "constant": true,
              "implemented": true,
              "isConstructor": false,
              "modifiers": [
                null
              ],
              "name": "mul",
              "payable": false,
              "scope": 5253,
              "stateMutability": "pure",
              "superFunction": null,
              "visibility": "internal"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "a",
                      "scope": 5190,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "uint256",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "uint256",
                          "type": "uint256"
                        },
                        "id": 5158,
                        "name": "ElementaryTypeName",
                        "src": "216:7:17"
                      }
                    ],
                    "id": 5159,
                    "name": "VariableDeclaration",
                    "src": "216:9:17"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "b",
                      "scope": 5190,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "uint256",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "uint256",
                          "type": "uint256"
                        },
                        "id": 5160,
                        "name": "ElementaryTypeName",
                        "src": "227:7:17"
                      }
                    ],
                    "id": 5161,
                    "name": "VariableDeclaration",
                    "src": "227:9:17"
                  }
                ],
                "id": 5162,
                "name": "ParameterList",
                "src": "215:22:17"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "",
                      "scope": 5190,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "uint256",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "uint256",
                          "type": "uint256"
                        },
                        "id": 5163,
                        "name": "ElementaryTypeName",
                        "src": "261:7:17"
                      }
                    ],
                    "id": 5164,
                    "name": "VariableDeclaration",
                    "src": "261:7:17"
                  }
                ],
                "id": 5165,
                "name": "ParameterList",
                "src": "260:9:17"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "falseBody": null
                    },
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "operator": "==",
                          "type": "bool"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 5159,
                              "type": "uint256",
                              "value": "a"
                            },
                            "id": 5166,
                            "name": "Identifier",
                            "src": "280:1:17"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "hexvalue": "30",
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "subdenomination": null,
                              "token": "number",
                              "type": "int_const 0",
                              "value": "0"
                            },
                            "id": 5167,
                            "name": "Literal",
                            "src": "285:1:17"
                          }
                        ],
                        "id": 5168,
                        "name": "BinaryOperation",
                        "src": "280:6:17"
                      },
                      {
                        "children": [
                          {
                            "attributes": {
                              "functionReturnParameters": 5165
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "hexvalue": "30",
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "lValueRequested": false,
                                  "subdenomination": null,
                                  "token": "number",
                                  "type": "int_const 0",
                                  "value": "0"
                                },
                                "id": 5169,
                                "name": "Literal",
                                "src": "303:1:17"
                              }
                            ],
                            "id": 5170,
                            "name": "Return",
                            "src": "296:8:17"
                          }
                        ],
                        "id": 5171,
                        "name": "Block",
                        "src": "288:23:17"
                      }
                    ],
                    "id": 5172,
                    "name": "IfStatement",
                    "src": "276:35:17"
                  },
                  {
                    "attributes": {
                      "assignments": [
                        5174
                      ]
                    },
                    "children": [
                      {
                        "attributes": {
                          "constant": false,
                          "name": "c",
                          "scope": 5190,
                          "stateVariable": false,
                          "storageLocation": "default",
                          "type": "uint256",
                          "value": null,
                          "visibility": "internal"
                        },
                        "children": [
                          {
                            "attributes": {
                              "name": "uint256",
                              "type": "uint256"
                            },
                            "id": 5173,
                            "name": "ElementaryTypeName",
                            "src": "316:7:17"
                          }
                        ],
                        "id": 5174,
                        "name": "VariableDeclaration",
                        "src": "316:9:17"
                      },
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "operator": "*",
                          "type": "uint256"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 5159,
                              "type": "uint256",
                              "value": "a"
                            },
                            "id": 5175,
                            "name": "Identifier",
                            "src": "328:1:17"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 5161,
                              "type": "uint256",
                              "value": "b"
                            },
                            "id": 5176,
                            "name": "Identifier",
                            "src": "332:1:17"
                          }
                        ],
                        "id": 5177,
                        "name": "BinaryOperation",
                        "src": "328:5:17"
                      }
                    ],
                    "id": 5178,
                    "name": "VariableDeclarationStatement",
                    "src": "316:17:17"
                  },
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "isStructConstructorCall": false,
                          "lValueRequested": false,
                          "names": [
                            null
                          ],
                          "type": "tuple()",
                          "type_conversion": false
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_bool",
                                  "typeString": "bool"
                                }
                              ],
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 6545,
                              "type": "function (bool) pure",
                              "value": "assert"
                            },
                            "id": 5179,
                            "name": "Identifier",
                            "src": "339:6:17"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "commonType": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              },
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "operator": "==",
                              "type": "bool"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "commonType": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  },
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "operator": "/",
                                  "type": "uint256"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 5174,
                                      "type": "uint256",
                                      "value": "c"
                                    },
                                    "id": 5180,
                                    "name": "Identifier",
                                    "src": "346:1:17"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 5159,
                                      "type": "uint256",
                                      "value": "a"
                                    },
                                    "id": 5181,
                                    "name": "Identifier",
                                    "src": "350:1:17"
                                  }
                                ],
                                "id": 5182,
                                "name": "BinaryOperation",
                                "src": "346:5:17"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 5161,
                                  "type": "uint256",
                                  "value": "b"
                                },
                                "id": 5183,
                                "name": "Identifier",
                                "src": "355:1:17"
                              }
                            ],
                            "id": 5184,
                            "name": "BinaryOperation",
                            "src": "346:10:17"
                          }
                        ],
                        "id": 5185,
                        "name": "FunctionCall",
                        "src": "339:18:17"
                      }
                    ],
                    "id": 5186,
                    "name": "ExpressionStatement",
                    "src": "339:18:17"
                  },
                  {
                    "attributes": {
                      "functionReturnParameters": 5165
                    },
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "overloadedDeclarations": [
                            null
                          ],
                          "referencedDeclaration": 5174,
                          "type": "uint256",
                          "value": "c"
                        },
                        "id": 5187,
                        "name": "Identifier",
                        "src": "370:1:17"
                      }
                    ],
                    "id": 5188,
                    "name": "Return",
                    "src": "363:8:17"
                  }
                ],
                "id": 5189,
                "name": "Block",
                "src": "270:106:17"
              }
            ],
            "id": 5190,
            "name": "FunctionDefinition",
            "src": "203:173:17"
          },
          {
            "attributes": {
              "constant": true,
              "implemented": true,
              "isConstructor": false,
              "modifiers": [
                null
              ],
              "name": "div",
              "payable": false,
              "scope": 5253,
              "stateMutability": "pure",
              "superFunction": null,
              "visibility": "internal"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "a",
                      "scope": 5208,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "uint256",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "uint256",
                          "type": "uint256"
                        },
                        "id": 5191,
                        "name": "ElementaryTypeName",
                        "src": "471:7:17"
                      }
                    ],
                    "id": 5192,
                    "name": "VariableDeclaration",
                    "src": "471:9:17"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "b",
                      "scope": 5208,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "uint256",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "uint256",
                          "type": "uint256"
                        },
                        "id": 5193,
                        "name": "ElementaryTypeName",
                        "src": "482:7:17"
                      }
                    ],
                    "id": 5194,
                    "name": "VariableDeclaration",
                    "src": "482:9:17"
                  }
                ],
                "id": 5195,
                "name": "ParameterList",
                "src": "470:22:17"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "",
                      "scope": 5208,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "uint256",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "uint256",
                          "type": "uint256"
                        },
                        "id": 5196,
                        "name": "ElementaryTypeName",
                        "src": "516:7:17"
                      }
                    ],
                    "id": 5197,
                    "name": "VariableDeclaration",
                    "src": "516:7:17"
                  }
                ],
                "id": 5198,
                "name": "ParameterList",
                "src": "515:9:17"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "assignments": [
                        5200
                      ]
                    },
                    "children": [
                      {
                        "attributes": {
                          "constant": false,
                          "name": "c",
                          "scope": 5208,
                          "stateVariable": false,
                          "storageLocation": "default",
                          "type": "uint256",
                          "value": null,
                          "visibility": "internal"
                        },
                        "children": [
                          {
                            "attributes": {
                              "name": "uint256",
                              "type": "uint256"
                            },
                            "id": 5199,
                            "name": "ElementaryTypeName",
                            "src": "605:7:17"
                          }
                        ],
                        "id": 5200,
                        "name": "VariableDeclaration",
                        "src": "605:9:17"
                      },
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "operator": "/",
                          "type": "uint256"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 5192,
                              "type": "uint256",
                              "value": "a"
                            },
                            "id": 5201,
                            "name": "Identifier",
                            "src": "617:1:17"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 5194,
                              "type": "uint256",
                              "value": "b"
                            },
                            "id": 5202,
                            "name": "Identifier",
                            "src": "621:1:17"
                          }
                        ],
                        "id": 5203,
                        "name": "BinaryOperation",
                        "src": "617:5:17"
                      }
                    ],
                    "id": 5204,
                    "name": "VariableDeclarationStatement",
                    "src": "605:17:17"
                  },
                  {
                    "attributes": {
                      "functionReturnParameters": 5198
                    },
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "overloadedDeclarations": [
                            null
                          ],
                          "referencedDeclaration": 5200,
                          "type": "uint256",
                          "value": "c"
                        },
                        "id": 5205,
                        "name": "Identifier",
                        "src": "717:1:17"
                      }
                    ],
                    "id": 5206,
                    "name": "Return",
                    "src": "710:8:17"
                  }
                ],
                "id": 5207,
                "name": "Block",
                "src": "525:198:17"
              }
            ],
            "id": 5208,
            "name": "FunctionDefinition",
            "src": "458:265:17"
          },
          {
            "attributes": {
              "constant": true,
              "implemented": true,
              "isConstructor": false,
              "modifiers": [
                null
              ],
              "name": "sub",
              "payable": false,
              "scope": 5253,
              "stateMutability": "pure",
              "superFunction": null,
              "visibility": "internal"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "a",
                      "scope": 5228,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "uint256",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "uint256",
                          "type": "uint256"
                        },
                        "id": 5209,
                        "name": "ElementaryTypeName",
                        "src": "848:7:17"
                      }
                    ],
                    "id": 5210,
                    "name": "VariableDeclaration",
                    "src": "848:9:17"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "b",
                      "scope": 5228,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "uint256",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "uint256",
                          "type": "uint256"
                        },
                        "id": 5211,
                        "name": "ElementaryTypeName",
                        "src": "859:7:17"
                      }
                    ],
                    "id": 5212,
                    "name": "VariableDeclaration",
                    "src": "859:9:17"
                  }
                ],
                "id": 5213,
                "name": "ParameterList",
                "src": "847:22:17"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "",
                      "scope": 5228,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "uint256",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "uint256",
                          "type": "uint256"
                        },
                        "id": 5214,
                        "name": "ElementaryTypeName",
                        "src": "893:7:17"
                      }
                    ],
                    "id": 5215,
                    "name": "VariableDeclaration",
                    "src": "893:7:17"
                  }
                ],
                "id": 5216,
                "name": "ParameterList",
                "src": "892:9:17"
              },
              {
                "children": [
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "isStructConstructorCall": false,
                          "lValueRequested": false,
                          "names": [
                            null
                          ],
                          "type": "tuple()",
                          "type_conversion": false
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_bool",
                                  "typeString": "bool"
                                }
                              ],
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 6545,
                              "type": "function (bool) pure",
                              "value": "assert"
                            },
                            "id": 5217,
                            "name": "Identifier",
                            "src": "908:6:17"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "commonType": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              },
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "operator": "<=",
                              "type": "bool"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 5212,
                                  "type": "uint256",
                                  "value": "b"
                                },
                                "id": 5218,
                                "name": "Identifier",
                                "src": "915:1:17"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 5210,
                                  "type": "uint256",
                                  "value": "a"
                                },
                                "id": 5219,
                                "name": "Identifier",
                                "src": "920:1:17"
                              }
                            ],
                            "id": 5220,
                            "name": "BinaryOperation",
                            "src": "915:6:17"
                          }
                        ],
                        "id": 5221,
                        "name": "FunctionCall",
                        "src": "908:14:17"
                      }
                    ],
                    "id": 5222,
                    "name": "ExpressionStatement",
                    "src": "908:14:17"
                  },
                  {
                    "attributes": {
                      "functionReturnParameters": 5216
                    },
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "operator": "-",
                          "type": "uint256"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 5210,
                              "type": "uint256",
                              "value": "a"
                            },
                            "id": 5223,
                            "name": "Identifier",
                            "src": "935:1:17"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 5212,
                              "type": "uint256",
                              "value": "b"
                            },
                            "id": 5224,
                            "name": "Identifier",
                            "src": "939:1:17"
                          }
                        ],
                        "id": 5225,
                        "name": "BinaryOperation",
                        "src": "935:5:17"
                      }
                    ],
                    "id": 5226,
                    "name": "Return",
                    "src": "928:12:17"
                  }
                ],
                "id": 5227,
                "name": "Block",
                "src": "902:43:17"
              }
            ],
            "id": 5228,
            "name": "FunctionDefinition",
            "src": "835:110:17"
          },
          {
            "attributes": {
              "constant": true,
              "implemented": true,
              "isConstructor": false,
              "modifiers": [
                null
              ],
              "name": "add",
              "payable": false,
              "scope": 5253,
              "stateMutability": "pure",
              "superFunction": null,
              "visibility": "internal"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "a",
                      "scope": 5252,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "uint256",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "uint256",
                          "type": "uint256"
                        },
                        "id": 5229,
                        "name": "ElementaryTypeName",
                        "src": "1020:7:17"
                      }
                    ],
                    "id": 5230,
                    "name": "VariableDeclaration",
                    "src": "1020:9:17"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "b",
                      "scope": 5252,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "uint256",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "uint256",
                          "type": "uint256"
                        },
                        "id": 5231,
                        "name": "ElementaryTypeName",
                        "src": "1031:7:17"
                      }
                    ],
                    "id": 5232,
                    "name": "VariableDeclaration",
                    "src": "1031:9:17"
                  }
                ],
                "id": 5233,
                "name": "ParameterList",
                "src": "1019:22:17"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "",
                      "scope": 5252,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "uint256",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "uint256",
                          "type": "uint256"
                        },
                        "id": 5234,
                        "name": "ElementaryTypeName",
                        "src": "1065:7:17"
                      }
                    ],
                    "id": 5235,
                    "name": "VariableDeclaration",
                    "src": "1065:7:17"
                  }
                ],
                "id": 5236,
                "name": "ParameterList",
                "src": "1064:9:17"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "assignments": [
                        5238
                      ]
                    },
                    "children": [
                      {
                        "attributes": {
                          "constant": false,
                          "name": "c",
                          "scope": 5252,
                          "stateVariable": false,
                          "storageLocation": "default",
                          "type": "uint256",
                          "value": null,
                          "visibility": "internal"
                        },
                        "children": [
                          {
                            "attributes": {
                              "name": "uint256",
                              "type": "uint256"
                            },
                            "id": 5237,
                            "name": "ElementaryTypeName",
                            "src": "1080:7:17"
                          }
                        ],
                        "id": 5238,
                        "name": "VariableDeclaration",
                        "src": "1080:9:17"
                      },
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "operator": "+",
                          "type": "uint256"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 5230,
                              "type": "uint256",
                              "value": "a"
                            },
                            "id": 5239,
                            "name": "Identifier",
                            "src": "1092:1:17"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 5232,
                              "type": "uint256",
                              "value": "b"
                            },
                            "id": 5240,
                            "name": "Identifier",
                            "src": "1096:1:17"
                          }
                        ],
                        "id": 5241,
                        "name": "BinaryOperation",
                        "src": "1092:5:17"
                      }
                    ],
                    "id": 5242,
                    "name": "VariableDeclarationStatement",
                    "src": "1080:17:17"
                  },
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "isStructConstructorCall": false,
                          "lValueRequested": false,
                          "names": [
                            null
                          ],
                          "type": "tuple()",
                          "type_conversion": false
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_bool",
                                  "typeString": "bool"
                                }
                              ],
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 6545,
                              "type": "function (bool) pure",
                              "value": "assert"
                            },
                            "id": 5243,
                            "name": "Identifier",
                            "src": "1103:6:17"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "commonType": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              },
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "operator": ">=",
                              "type": "bool"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 5238,
                                  "type": "uint256",
                                  "value": "c"
                                },
                                "id": 5244,
                                "name": "Identifier",
                                "src": "1110:1:17"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 5230,
                                  "type": "uint256",
                                  "value": "a"
                                },
                                "id": 5245,
                                "name": "Identifier",
                                "src": "1115:1:17"
                              }
                            ],
                            "id": 5246,
                            "name": "BinaryOperation",
                            "src": "1110:6:17"
                          }
                        ],
                        "id": 5247,
                        "name": "FunctionCall",
                        "src": "1103:14:17"
                      }
                    ],
                    "id": 5248,
                    "name": "ExpressionStatement",
                    "src": "1103:14:17"
                  },
                  {
                    "attributes": {
                      "functionReturnParameters": 5236
                    },
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "overloadedDeclarations": [
                            null
                          ],
                          "referencedDeclaration": 5238,
                          "type": "uint256",
                          "value": "c"
                        },
                        "id": 5249,
                        "name": "Identifier",
                        "src": "1130:1:17"
                      }
                    ],
                    "id": 5250,
                    "name": "Return",
                    "src": "1123:8:17"
                  }
                ],
                "id": 5251,
                "name": "Block",
                "src": "1074:62:17"
              }
            ],
            "id": 5252,
            "name": "FunctionDefinition",
            "src": "1007:129:17"
          }
        ],
        "id": 5253,
        "name": "ContractDefinition",
        "src": "117:1021:17"
      }
    ],
    "id": 5254,
    "name": "SourceUnit",
    "src": "0:1139:17"
  },
  "compiler": {
    "name": "solc",
    "version": "0.4.18+commit.9cf6e910.Emscripten.clang"
  },
  "networks": {},
  "schemaVersion": "1.0.1",
  "updatedAt": "2018-04-05T21:27:03.116Z"
}