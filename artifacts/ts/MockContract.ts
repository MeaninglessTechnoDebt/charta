export const MockContract = 
{
  "contractName": "MockContract",
  "abi": [
    {
      "constant": true,
      "inputs": [
        {
          "name": "functionName",
          "type": "string"
        },
        {
          "name": "argsSignature",
          "type": "bytes32"
        }
      ],
      "name": "getMockReturnValue",
      "outputs": [
        {
          "name": "_mockReturnValue",
          "type": "bytes32"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "functionName",
          "type": "string"
        },
        {
          "name": "argsSignature",
          "type": "bytes32"
        },
        {
          "name": "returnValue",
          "type": "bytes32"
        }
      ],
      "name": "mockReturnValue",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [],
      "name": "reset",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ],
  "bytecode": "0x",
  "deployedBytecode": "0x",
  "sourceMap": "",
  "deployedSourceMap": "",
  "source": "/*\n\n  Copyright 2017 Dharma Labs Inc.\n\n  Licensed under the Apache License, Version 2.0 (the \"License\");\n  you may not use this file except in compliance with the License.\n  You may obtain a copy of the License at\n\n    http://www.apache.org/licenses/LICENSE-2.0\n\n  Unless required by applicable law or agreed to in writing, software\n  distributed under the License is distributed on an \"AS IS\" BASIS,\n  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n  See the License for the specific language governing permissions and\n  limitations under the License.\n\n*/\n\npragma solidity 0.4.18;\n\n\ncontract MockContract {\n    bytes32 internal constant DEFAULT_SIGNATURE_ARGS = bytes32(0);\n\n    // We use bytes32 as our generic base type from and to which we cast all other types\n    mapping (string => bytes32[]) internal functionCallSignatures;\n    mapping (string => mapping (bytes32 => bytes32)) internal mockedReturnValue;\n    mapping (string => mapping (bytes32 => bool)) internal functionCalls;\n\n    function mockReturnValue(\n        string functionName,\n        bytes32 argsSignature,\n        bytes32 returnValue\n    ) public {\n        functionCallSignatures[functionName].push(argsSignature);\n        mockedReturnValue[functionName][argsSignature] = returnValue;\n    }\n\n    function getMockReturnValue(string functionName, bytes32 argsSignature)\n        public\n        view\n        returns (bytes32 _mockReturnValue)\n    {\n        return mockedReturnValue[functionName][argsSignature];\n    }\n\n    function reset() public {\n        for (uint i = 0; i < 10; i++) {\n            string memory functionName = getFunctionList()[i];\n\n            if (bytes(functionName).length != 0) {\n                for (uint j = 0; j < functionCallSignatures[functionName].length; j++) {\n                    bytes32 callSignature = functionCallSignatures[functionName][j];\n                    delete functionCalls[functionName][callSignature];\n                    delete mockedReturnValue[functionName][callSignature];\n                }\n\n                delete functionCallSignatures[functionName];\n            }\n        }\n    }\n\n    function functionCalledWithArgs(string functionName, bytes32 args)\n        internal\n    {\n        functionCalls[functionName][args] = true;\n        functionCallSignatures[functionName].push(args);\n    }\n\n    function wasFunctionCalledWithArgs(string functionName, bytes32 args)\n        internal\n        view\n        returns (bool wasCalled)\n    {\n        return functionCalls[functionName][args];\n    }\n\n    function getFunctionList() internal returns (string[10] functionNames);\n}\n",
  "sourcePath": "/Users/nadavhollander/Documents/Dharma/Development/charta/contracts/test/mocks/MockContract.sol",
  "ast": {
    "attributes": {
      "absolutePath": "/Users/nadavhollander/Documents/Dharma/Development/charta/contracts/test/mocks/MockContract.sol",
      "exportedSymbols": {
        "MockContract": [
          4521
        ]
      }
    },
    "children": [
      {
        "attributes": {
          "literals": [
            "solidity",
            "0.4",
            ".18"
          ]
        },
        "id": 4338,
        "name": "PragmaDirective",
        "src": "584:23:12"
      },
      {
        "attributes": {
          "baseContracts": [
            null
          ],
          "contractDependencies": [
            null
          ],
          "contractKind": "contract",
          "documentation": null,
          "fullyImplemented": false,
          "linearizedBaseContracts": [
            4521
          ],
          "name": "MockContract",
          "scope": 4522
        },
        "children": [
          {
            "attributes": {
              "constant": true,
              "name": "DEFAULT_SIGNATURE_ARGS",
              "scope": 4521,
              "stateVariable": true,
              "storageLocation": "default",
              "type": "bytes32",
              "visibility": "internal"
            },
            "children": [
              {
                "attributes": {
                  "name": "bytes32",
                  "type": "bytes32"
                },
                "id": 4339,
                "name": "ElementaryTypeName",
                "src": "638:7:12"
              },
              {
                "attributes": {
                  "argumentTypes": null,
                  "isConstant": false,
                  "isLValue": false,
                  "isPure": true,
                  "isStructConstructorCall": false,
                  "lValueRequested": false,
                  "names": [
                    null
                  ],
                  "type": "bytes32",
                  "type_conversion": true
                },
                "children": [
                  {
                    "attributes": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_rational_0_by_1",
                          "typeString": "int_const 0"
                        }
                      ],
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "lValueRequested": false,
                      "type": "type(bytes32)",
                      "value": "bytes32"
                    },
                    "id": 4340,
                    "name": "ElementaryTypeNameExpression",
                    "src": "689:7:12"
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
                    "id": 4341,
                    "name": "Literal",
                    "src": "697:1:12"
                  }
                ],
                "id": 4342,
                "name": "FunctionCall",
                "src": "689:10:12"
              }
            ],
            "id": 4343,
            "name": "VariableDeclaration",
            "src": "638:61:12"
          },
          {
            "attributes": {
              "constant": false,
              "name": "functionCallSignatures",
              "scope": 4521,
              "stateVariable": true,
              "storageLocation": "default",
              "type": "mapping(string memory => bytes32[] storage ref)",
              "value": null,
              "visibility": "internal"
            },
            "children": [
              {
                "attributes": {
                  "type": "mapping(string memory => bytes32[] storage ref)"
                },
                "children": [
                  {
                    "attributes": {
                      "name": "string",
                      "type": "string storage pointer"
                    },
                    "id": 4344,
                    "name": "ElementaryTypeName",
                    "src": "804:6:12"
                  },
                  {
                    "attributes": {
                      "length": null,
                      "type": "bytes32[] storage pointer"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "bytes32",
                          "type": "bytes32"
                        },
                        "id": 4345,
                        "name": "ElementaryTypeName",
                        "src": "814:7:12"
                      }
                    ],
                    "id": 4346,
                    "name": "ArrayTypeName",
                    "src": "814:9:12"
                  }
                ],
                "id": 4347,
                "name": "Mapping",
                "src": "795:29:12"
              }
            ],
            "id": 4348,
            "name": "VariableDeclaration",
            "src": "795:61:12"
          },
          {
            "attributes": {
              "constant": false,
              "name": "mockedReturnValue",
              "scope": 4521,
              "stateVariable": true,
              "storageLocation": "default",
              "type": "mapping(string memory => mapping(bytes32 => bytes32))",
              "value": null,
              "visibility": "internal"
            },
            "children": [
              {
                "attributes": {
                  "type": "mapping(string memory => mapping(bytes32 => bytes32))"
                },
                "children": [
                  {
                    "attributes": {
                      "name": "string",
                      "type": "string storage pointer"
                    },
                    "id": 4349,
                    "name": "ElementaryTypeName",
                    "src": "871:6:12"
                  },
                  {
                    "attributes": {
                      "type": "mapping(bytes32 => bytes32)"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "bytes32",
                          "type": "bytes32"
                        },
                        "id": 4350,
                        "name": "ElementaryTypeName",
                        "src": "890:7:12"
                      },
                      {
                        "attributes": {
                          "name": "bytes32",
                          "type": "bytes32"
                        },
                        "id": 4351,
                        "name": "ElementaryTypeName",
                        "src": "901:7:12"
                      }
                    ],
                    "id": 4352,
                    "name": "Mapping",
                    "src": "881:28:12"
                  }
                ],
                "id": 4353,
                "name": "Mapping",
                "src": "862:48:12"
              }
            ],
            "id": 4354,
            "name": "VariableDeclaration",
            "src": "862:75:12"
          },
          {
            "attributes": {
              "constant": false,
              "name": "functionCalls",
              "scope": 4521,
              "stateVariable": true,
              "storageLocation": "default",
              "type": "mapping(string memory => mapping(bytes32 => bool))",
              "value": null,
              "visibility": "internal"
            },
            "children": [
              {
                "attributes": {
                  "type": "mapping(string memory => mapping(bytes32 => bool))"
                },
                "children": [
                  {
                    "attributes": {
                      "name": "string",
                      "type": "string storage pointer"
                    },
                    "id": 4355,
                    "name": "ElementaryTypeName",
                    "src": "952:6:12"
                  },
                  {
                    "attributes": {
                      "type": "mapping(bytes32 => bool)"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "bytes32",
                          "type": "bytes32"
                        },
                        "id": 4356,
                        "name": "ElementaryTypeName",
                        "src": "971:7:12"
                      },
                      {
                        "attributes": {
                          "name": "bool",
                          "type": "bool"
                        },
                        "id": 4357,
                        "name": "ElementaryTypeName",
                        "src": "982:4:12"
                      }
                    ],
                    "id": 4358,
                    "name": "Mapping",
                    "src": "962:25:12"
                  }
                ],
                "id": 4359,
                "name": "Mapping",
                "src": "943:45:12"
              }
            ],
            "id": 4360,
            "name": "VariableDeclaration",
            "src": "943:68:12"
          },
          {
            "attributes": {
              "constant": false,
              "implemented": true,
              "isConstructor": false,
              "modifiers": [
                null
              ],
              "name": "mockReturnValue",
              "payable": false,
              "scope": 4521,
              "stateMutability": "nonpayable",
              "superFunction": null,
              "visibility": "public"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "functionName",
                      "scope": 4385,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "string memory",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "string",
                          "type": "string storage pointer"
                        },
                        "id": 4361,
                        "name": "ElementaryTypeName",
                        "src": "1052:6:12"
                      }
                    ],
                    "id": 4362,
                    "name": "VariableDeclaration",
                    "src": "1052:19:12"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "argsSignature",
                      "scope": 4385,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "bytes32",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "bytes32",
                          "type": "bytes32"
                        },
                        "id": 4363,
                        "name": "ElementaryTypeName",
                        "src": "1081:7:12"
                      }
                    ],
                    "id": 4364,
                    "name": "VariableDeclaration",
                    "src": "1081:21:12"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "returnValue",
                      "scope": 4385,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "bytes32",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "bytes32",
                          "type": "bytes32"
                        },
                        "id": 4365,
                        "name": "ElementaryTypeName",
                        "src": "1112:7:12"
                      }
                    ],
                    "id": 4366,
                    "name": "VariableDeclaration",
                    "src": "1112:19:12"
                  }
                ],
                "id": 4367,
                "name": "ParameterList",
                "src": "1042:95:12"
              },
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 4368,
                "name": "ParameterList",
                "src": "1145:0:12"
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
                          "type": "uint256",
                          "type_conversion": false
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_bytes32",
                                  "typeString": "bytes32"
                                }
                              ],
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "member_name": "push",
                              "referencedDeclaration": null,
                              "type": "function (bytes32) returns (uint256)"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "isConstant": false,
                                  "isLValue": true,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "type": "bytes32[] storage ref"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 4348,
                                      "type": "mapping(string memory => bytes32[] storage ref)",
                                      "value": "functionCallSignatures"
                                    },
                                    "id": 4369,
                                    "name": "Identifier",
                                    "src": "1155:22:12"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 4362,
                                      "type": "string memory",
                                      "value": "functionName"
                                    },
                                    "id": 4370,
                                    "name": "Identifier",
                                    "src": "1178:12:12"
                                  }
                                ],
                                "id": 4371,
                                "name": "IndexAccess",
                                "src": "1155:36:12"
                              }
                            ],
                            "id": 4372,
                            "name": "MemberAccess",
                            "src": "1155:41:12"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 4364,
                              "type": "bytes32",
                              "value": "argsSignature"
                            },
                            "id": 4373,
                            "name": "Identifier",
                            "src": "1197:13:12"
                          }
                        ],
                        "id": 4374,
                        "name": "FunctionCall",
                        "src": "1155:56:12"
                      }
                    ],
                    "id": 4375,
                    "name": "ExpressionStatement",
                    "src": "1155:56:12"
                  },
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "operator": "=",
                          "type": "bytes32"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": true,
                              "type": "bytes32"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "isConstant": false,
                                  "isLValue": true,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "type": "mapping(bytes32 => bytes32)"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 4354,
                                      "type": "mapping(string memory => mapping(bytes32 => bytes32))",
                                      "value": "mockedReturnValue"
                                    },
                                    "id": 4376,
                                    "name": "Identifier",
                                    "src": "1221:17:12"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 4362,
                                      "type": "string memory",
                                      "value": "functionName"
                                    },
                                    "id": 4377,
                                    "name": "Identifier",
                                    "src": "1239:12:12"
                                  }
                                ],
                                "id": 4379,
                                "name": "IndexAccess",
                                "src": "1221:31:12"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 4364,
                                  "type": "bytes32",
                                  "value": "argsSignature"
                                },
                                "id": 4378,
                                "name": "Identifier",
                                "src": "1253:13:12"
                              }
                            ],
                            "id": 4380,
                            "name": "IndexAccess",
                            "src": "1221:46:12"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 4366,
                              "type": "bytes32",
                              "value": "returnValue"
                            },
                            "id": 4381,
                            "name": "Identifier",
                            "src": "1270:11:12"
                          }
                        ],
                        "id": 4382,
                        "name": "Assignment",
                        "src": "1221:60:12"
                      }
                    ],
                    "id": 4383,
                    "name": "ExpressionStatement",
                    "src": "1221:60:12"
                  }
                ],
                "id": 4384,
                "name": "Block",
                "src": "1145:143:12"
              }
            ],
            "id": 4385,
            "name": "FunctionDefinition",
            "src": "1018:270:12"
          },
          {
            "attributes": {
              "constant": true,
              "implemented": true,
              "isConstructor": false,
              "modifiers": [
                null
              ],
              "name": "getMockReturnValue",
              "payable": false,
              "scope": 4521,
              "stateMutability": "view",
              "superFunction": null,
              "visibility": "public"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "functionName",
                      "scope": 4401,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "string memory",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "string",
                          "type": "string storage pointer"
                        },
                        "id": 4386,
                        "name": "ElementaryTypeName",
                        "src": "1322:6:12"
                      }
                    ],
                    "id": 4387,
                    "name": "VariableDeclaration",
                    "src": "1322:19:12"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "argsSignature",
                      "scope": 4401,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "bytes32",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "bytes32",
                          "type": "bytes32"
                        },
                        "id": 4388,
                        "name": "ElementaryTypeName",
                        "src": "1343:7:12"
                      }
                    ],
                    "id": 4389,
                    "name": "VariableDeclaration",
                    "src": "1343:21:12"
                  }
                ],
                "id": 4390,
                "name": "ParameterList",
                "src": "1321:44:12"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_mockReturnValue",
                      "scope": 4401,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "bytes32",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "bytes32",
                          "type": "bytes32"
                        },
                        "id": 4391,
                        "name": "ElementaryTypeName",
                        "src": "1411:7:12"
                      }
                    ],
                    "id": 4392,
                    "name": "VariableDeclaration",
                    "src": "1411:24:12"
                  }
                ],
                "id": 4393,
                "name": "ParameterList",
                "src": "1410:26:12"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "functionReturnParameters": 4393
                    },
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "type": "bytes32"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "type": "mapping(bytes32 => bytes32)"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 4354,
                                  "type": "mapping(string memory => mapping(bytes32 => bytes32))",
                                  "value": "mockedReturnValue"
                                },
                                "id": 4394,
                                "name": "Identifier",
                                "src": "1458:17:12"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 4387,
                                  "type": "string memory",
                                  "value": "functionName"
                                },
                                "id": 4395,
                                "name": "Identifier",
                                "src": "1476:12:12"
                              }
                            ],
                            "id": 4396,
                            "name": "IndexAccess",
                            "src": "1458:31:12"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 4389,
                              "type": "bytes32",
                              "value": "argsSignature"
                            },
                            "id": 4397,
                            "name": "Identifier",
                            "src": "1490:13:12"
                          }
                        ],
                        "id": 4398,
                        "name": "IndexAccess",
                        "src": "1458:46:12"
                      }
                    ],
                    "id": 4399,
                    "name": "Return",
                    "src": "1451:53:12"
                  }
                ],
                "id": 4400,
                "name": "Block",
                "src": "1441:70:12"
              }
            ],
            "id": 4401,
            "name": "FunctionDefinition",
            "src": "1294:217:12"
          },
          {
            "attributes": {
              "constant": false,
              "implemented": true,
              "isConstructor": false,
              "modifiers": [
                null
              ],
              "name": "reset",
              "payable": false,
              "scope": 4521,
              "stateMutability": "nonpayable",
              "superFunction": null,
              "visibility": "public"
            },
            "children": [
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 4402,
                "name": "ParameterList",
                "src": "1531:2:12"
              },
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 4403,
                "name": "ParameterList",
                "src": "1541:0:12"
              },
              {
                "children": [
                  {
                    "children": [
                      {
                        "attributes": {
                          "assignments": [
                            4405
                          ]
                        },
                        "children": [
                          {
                            "attributes": {
                              "constant": false,
                              "name": "i",
                              "scope": 4474,
                              "stateVariable": false,
                              "storageLocation": "default",
                              "type": "uint256",
                              "value": null,
                              "visibility": "internal"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "name": "uint",
                                  "type": "uint256"
                                },
                                "id": 4404,
                                "name": "ElementaryTypeName",
                                "src": "1556:4:12"
                              }
                            ],
                            "id": 4405,
                            "name": "VariableDeclaration",
                            "src": "1556:6:12"
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
                            "id": 4406,
                            "name": "Literal",
                            "src": "1565:1:12"
                          }
                        ],
                        "id": 4407,
                        "name": "VariableDeclarationStatement",
                        "src": "1556:10:12"
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
                          "operator": "<",
                          "type": "bool"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 4405,
                              "type": "uint256",
                              "value": "i"
                            },
                            "id": 4408,
                            "name": "Identifier",
                            "src": "1568:1:12"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "hexvalue": "3130",
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "subdenomination": null,
                              "token": "number",
                              "type": "int_const 10",
                              "value": "10"
                            },
                            "id": 4409,
                            "name": "Literal",
                            "src": "1572:2:12"
                          }
                        ],
                        "id": 4410,
                        "name": "BinaryOperation",
                        "src": "1568:6:12"
                      },
                      {
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "operator": "++",
                              "prefix": false,
                              "type": "uint256"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 4405,
                                  "type": "uint256",
                                  "value": "i"
                                },
                                "id": 4411,
                                "name": "Identifier",
                                "src": "1576:1:12"
                              }
                            ],
                            "id": 4412,
                            "name": "UnaryOperation",
                            "src": "1576:3:12"
                          }
                        ],
                        "id": 4413,
                        "name": "ExpressionStatement",
                        "src": "1576:3:12"
                      },
                      {
                        "children": [
                          {
                            "attributes": {
                              "assignments": [
                                4415
                              ]
                            },
                            "children": [
                              {
                                "attributes": {
                                  "constant": false,
                                  "name": "functionName",
                                  "scope": 4474,
                                  "stateVariable": false,
                                  "storageLocation": "memory",
                                  "type": "string memory",
                                  "value": null,
                                  "visibility": "internal"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "name": "string",
                                      "type": "string storage pointer"
                                    },
                                    "id": 4414,
                                    "name": "ElementaryTypeName",
                                    "src": "1595:6:12"
                                  }
                                ],
                                "id": 4415,
                                "name": "VariableDeclaration",
                                "src": "1595:26:12"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "isConstant": false,
                                  "isLValue": true,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "type": "string memory"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "arguments": [
                                        null
                                      ],
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": false,
                                      "isStructConstructorCall": false,
                                      "lValueRequested": false,
                                      "names": [
                                        null
                                      ],
                                      "type": "string memory[10] memory",
                                      "type_conversion": false
                                    },
                                    "children": [
                                      {
                                        "attributes": {
                                          "argumentTypes": [
                                            null
                                          ],
                                          "overloadedDeclarations": [
                                            null
                                          ],
                                          "referencedDeclaration": 4520,
                                          "type": "function () returns (string memory[10] memory)",
                                          "value": "getFunctionList"
                                        },
                                        "id": 4416,
                                        "name": "Identifier",
                                        "src": "1624:15:12"
                                      }
                                    ],
                                    "id": 4417,
                                    "name": "FunctionCall",
                                    "src": "1624:17:12"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 4405,
                                      "type": "uint256",
                                      "value": "i"
                                    },
                                    "id": 4418,
                                    "name": "Identifier",
                                    "src": "1642:1:12"
                                  }
                                ],
                                "id": 4419,
                                "name": "IndexAccess",
                                "src": "1624:20:12"
                              }
                            ],
                            "id": 4420,
                            "name": "VariableDeclarationStatement",
                            "src": "1595:49:12"
                          },
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
                                  "operator": "!=",
                                  "type": "bool"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": false,
                                      "lValueRequested": false,
                                      "member_name": "length",
                                      "referencedDeclaration": null,
                                      "type": "uint256"
                                    },
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
                                          "type": "bytes memory",
                                          "type_conversion": true
                                        },
                                        "children": [
                                          {
                                            "attributes": {
                                              "argumentTypes": [
                                                {
                                                  "typeIdentifier": "t_string_memory_ptr",
                                                  "typeString": "string memory"
                                                }
                                              ],
                                              "isConstant": false,
                                              "isLValue": false,
                                              "isPure": true,
                                              "lValueRequested": false,
                                              "type": "type(bytes storage pointer)",
                                              "value": "bytes"
                                            },
                                            "id": 4421,
                                            "name": "ElementaryTypeNameExpression",
                                            "src": "1663:5:12"
                                          },
                                          {
                                            "attributes": {
                                              "argumentTypes": null,
                                              "overloadedDeclarations": [
                                                null
                                              ],
                                              "referencedDeclaration": 4415,
                                              "type": "string memory",
                                              "value": "functionName"
                                            },
                                            "id": 4422,
                                            "name": "Identifier",
                                            "src": "1669:12:12"
                                          }
                                        ],
                                        "id": 4423,
                                        "name": "FunctionCall",
                                        "src": "1663:19:12"
                                      }
                                    ],
                                    "id": 4424,
                                    "name": "MemberAccess",
                                    "src": "1663:26:12"
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
                                    "id": 4425,
                                    "name": "Literal",
                                    "src": "1693:1:12"
                                  }
                                ],
                                "id": 4426,
                                "name": "BinaryOperation",
                                "src": "1663:31:12"
                              },
                              {
                                "children": [
                                  {
                                    "children": [
                                      {
                                        "attributes": {
                                          "assignments": [
                                            4428
                                          ]
                                        },
                                        "children": [
                                          {
                                            "attributes": {
                                              "constant": false,
                                              "name": "j",
                                              "scope": 4474,
                                              "stateVariable": false,
                                              "storageLocation": "default",
                                              "type": "uint256",
                                              "value": null,
                                              "visibility": "internal"
                                            },
                                            "children": [
                                              {
                                                "attributes": {
                                                  "name": "uint",
                                                  "type": "uint256"
                                                },
                                                "id": 4427,
                                                "name": "ElementaryTypeName",
                                                "src": "1719:4:12"
                                              }
                                            ],
                                            "id": 4428,
                                            "name": "VariableDeclaration",
                                            "src": "1719:6:12"
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
                                            "id": 4429,
                                            "name": "Literal",
                                            "src": "1728:1:12"
                                          }
                                        ],
                                        "id": 4430,
                                        "name": "VariableDeclarationStatement",
                                        "src": "1719:10:12"
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
                                          "operator": "<",
                                          "type": "bool"
                                        },
                                        "children": [
                                          {
                                            "attributes": {
                                              "argumentTypes": null,
                                              "overloadedDeclarations": [
                                                null
                                              ],
                                              "referencedDeclaration": 4428,
                                              "type": "uint256",
                                              "value": "j"
                                            },
                                            "id": 4431,
                                            "name": "Identifier",
                                            "src": "1731:1:12"
                                          },
                                          {
                                            "attributes": {
                                              "argumentTypes": null,
                                              "isConstant": false,
                                              "isLValue": true,
                                              "isPure": false,
                                              "lValueRequested": false,
                                              "member_name": "length",
                                              "referencedDeclaration": null,
                                              "type": "uint256"
                                            },
                                            "children": [
                                              {
                                                "attributes": {
                                                  "argumentTypes": null,
                                                  "isConstant": false,
                                                  "isLValue": true,
                                                  "isPure": false,
                                                  "lValueRequested": false,
                                                  "type": "bytes32[] storage ref"
                                                },
                                                "children": [
                                                  {
                                                    "attributes": {
                                                      "argumentTypes": null,
                                                      "overloadedDeclarations": [
                                                        null
                                                      ],
                                                      "referencedDeclaration": 4348,
                                                      "type": "mapping(string memory => bytes32[] storage ref)",
                                                      "value": "functionCallSignatures"
                                                    },
                                                    "id": 4432,
                                                    "name": "Identifier",
                                                    "src": "1735:22:12"
                                                  },
                                                  {
                                                    "attributes": {
                                                      "argumentTypes": null,
                                                      "overloadedDeclarations": [
                                                        null
                                                      ],
                                                      "referencedDeclaration": 4415,
                                                      "type": "string memory",
                                                      "value": "functionName"
                                                    },
                                                    "id": 4433,
                                                    "name": "Identifier",
                                                    "src": "1758:12:12"
                                                  }
                                                ],
                                                "id": 4434,
                                                "name": "IndexAccess",
                                                "src": "1735:36:12"
                                              }
                                            ],
                                            "id": 4435,
                                            "name": "MemberAccess",
                                            "src": "1735:43:12"
                                          }
                                        ],
                                        "id": 4436,
                                        "name": "BinaryOperation",
                                        "src": "1731:47:12"
                                      },
                                      {
                                        "children": [
                                          {
                                            "attributes": {
                                              "argumentTypes": null,
                                              "isConstant": false,
                                              "isLValue": false,
                                              "isPure": false,
                                              "lValueRequested": false,
                                              "operator": "++",
                                              "prefix": false,
                                              "type": "uint256"
                                            },
                                            "children": [
                                              {
                                                "attributes": {
                                                  "argumentTypes": null,
                                                  "overloadedDeclarations": [
                                                    null
                                                  ],
                                                  "referencedDeclaration": 4428,
                                                  "type": "uint256",
                                                  "value": "j"
                                                },
                                                "id": 4437,
                                                "name": "Identifier",
                                                "src": "1780:1:12"
                                              }
                                            ],
                                            "id": 4438,
                                            "name": "UnaryOperation",
                                            "src": "1780:3:12"
                                          }
                                        ],
                                        "id": 4439,
                                        "name": "ExpressionStatement",
                                        "src": "1780:3:12"
                                      },
                                      {
                                        "children": [
                                          {
                                            "attributes": {
                                              "assignments": [
                                                4441
                                              ]
                                            },
                                            "children": [
                                              {
                                                "attributes": {
                                                  "constant": false,
                                                  "name": "callSignature",
                                                  "scope": 4474,
                                                  "stateVariable": false,
                                                  "storageLocation": "default",
                                                  "type": "bytes32",
                                                  "value": null,
                                                  "visibility": "internal"
                                                },
                                                "children": [
                                                  {
                                                    "attributes": {
                                                      "name": "bytes32",
                                                      "type": "bytes32"
                                                    },
                                                    "id": 4440,
                                                    "name": "ElementaryTypeName",
                                                    "src": "1807:7:12"
                                                  }
                                                ],
                                                "id": 4441,
                                                "name": "VariableDeclaration",
                                                "src": "1807:21:12"
                                              },
                                              {
                                                "attributes": {
                                                  "argumentTypes": null,
                                                  "isConstant": false,
                                                  "isLValue": true,
                                                  "isPure": false,
                                                  "lValueRequested": false,
                                                  "type": "bytes32"
                                                },
                                                "children": [
                                                  {
                                                    "attributes": {
                                                      "argumentTypes": null,
                                                      "isConstant": false,
                                                      "isLValue": true,
                                                      "isPure": false,
                                                      "lValueRequested": false,
                                                      "type": "bytes32[] storage ref"
                                                    },
                                                    "children": [
                                                      {
                                                        "attributes": {
                                                          "argumentTypes": null,
                                                          "overloadedDeclarations": [
                                                            null
                                                          ],
                                                          "referencedDeclaration": 4348,
                                                          "type": "mapping(string memory => bytes32[] storage ref)",
                                                          "value": "functionCallSignatures"
                                                        },
                                                        "id": 4442,
                                                        "name": "Identifier",
                                                        "src": "1831:22:12"
                                                      },
                                                      {
                                                        "attributes": {
                                                          "argumentTypes": null,
                                                          "overloadedDeclarations": [
                                                            null
                                                          ],
                                                          "referencedDeclaration": 4415,
                                                          "type": "string memory",
                                                          "value": "functionName"
                                                        },
                                                        "id": 4443,
                                                        "name": "Identifier",
                                                        "src": "1854:12:12"
                                                      }
                                                    ],
                                                    "id": 4444,
                                                    "name": "IndexAccess",
                                                    "src": "1831:36:12"
                                                  },
                                                  {
                                                    "attributes": {
                                                      "argumentTypes": null,
                                                      "overloadedDeclarations": [
                                                        null
                                                      ],
                                                      "referencedDeclaration": 4428,
                                                      "type": "uint256",
                                                      "value": "j"
                                                    },
                                                    "id": 4445,
                                                    "name": "Identifier",
                                                    "src": "1868:1:12"
                                                  }
                                                ],
                                                "id": 4446,
                                                "name": "IndexAccess",
                                                "src": "1831:39:12"
                                              }
                                            ],
                                            "id": 4447,
                                            "name": "VariableDeclarationStatement",
                                            "src": "1807:63:12"
                                          },
                                          {
                                            "children": [
                                              {
                                                "attributes": {
                                                  "argumentTypes": null,
                                                  "isConstant": false,
                                                  "isLValue": false,
                                                  "isPure": false,
                                                  "lValueRequested": false,
                                                  "operator": "delete",
                                                  "prefix": true,
                                                  "type": "tuple()"
                                                },
                                                "children": [
                                                  {
                                                    "attributes": {
                                                      "argumentTypes": null,
                                                      "isConstant": false,
                                                      "isLValue": true,
                                                      "isPure": false,
                                                      "lValueRequested": true,
                                                      "type": "bool"
                                                    },
                                                    "children": [
                                                      {
                                                        "attributes": {
                                                          "argumentTypes": null,
                                                          "isConstant": false,
                                                          "isLValue": true,
                                                          "isPure": false,
                                                          "lValueRequested": false,
                                                          "type": "mapping(bytes32 => bool)"
                                                        },
                                                        "children": [
                                                          {
                                                            "attributes": {
                                                              "argumentTypes": null,
                                                              "overloadedDeclarations": [
                                                                null
                                                              ],
                                                              "referencedDeclaration": 4360,
                                                              "type": "mapping(string memory => mapping(bytes32 => bool))",
                                                              "value": "functionCalls"
                                                            },
                                                            "id": 4448,
                                                            "name": "Identifier",
                                                            "src": "1899:13:12"
                                                          },
                                                          {
                                                            "attributes": {
                                                              "argumentTypes": null,
                                                              "overloadedDeclarations": [
                                                                null
                                                              ],
                                                              "referencedDeclaration": 4415,
                                                              "type": "string memory",
                                                              "value": "functionName"
                                                            },
                                                            "id": 4449,
                                                            "name": "Identifier",
                                                            "src": "1913:12:12"
                                                          }
                                                        ],
                                                        "id": 4450,
                                                        "name": "IndexAccess",
                                                        "src": "1899:27:12"
                                                      },
                                                      {
                                                        "attributes": {
                                                          "argumentTypes": null,
                                                          "overloadedDeclarations": [
                                                            null
                                                          ],
                                                          "referencedDeclaration": 4441,
                                                          "type": "bytes32",
                                                          "value": "callSignature"
                                                        },
                                                        "id": 4451,
                                                        "name": "Identifier",
                                                        "src": "1927:13:12"
                                                      }
                                                    ],
                                                    "id": 4452,
                                                    "name": "IndexAccess",
                                                    "src": "1899:42:12"
                                                  }
                                                ],
                                                "id": 4453,
                                                "name": "UnaryOperation",
                                                "src": "1892:49:12"
                                              }
                                            ],
                                            "id": 4454,
                                            "name": "ExpressionStatement",
                                            "src": "1892:49:12"
                                          },
                                          {
                                            "children": [
                                              {
                                                "attributes": {
                                                  "argumentTypes": null,
                                                  "isConstant": false,
                                                  "isLValue": false,
                                                  "isPure": false,
                                                  "lValueRequested": false,
                                                  "operator": "delete",
                                                  "prefix": true,
                                                  "type": "tuple()"
                                                },
                                                "children": [
                                                  {
                                                    "attributes": {
                                                      "argumentTypes": null,
                                                      "isConstant": false,
                                                      "isLValue": true,
                                                      "isPure": false,
                                                      "lValueRequested": true,
                                                      "type": "bytes32"
                                                    },
                                                    "children": [
                                                      {
                                                        "attributes": {
                                                          "argumentTypes": null,
                                                          "isConstant": false,
                                                          "isLValue": true,
                                                          "isPure": false,
                                                          "lValueRequested": false,
                                                          "type": "mapping(bytes32 => bytes32)"
                                                        },
                                                        "children": [
                                                          {
                                                            "attributes": {
                                                              "argumentTypes": null,
                                                              "overloadedDeclarations": [
                                                                null
                                                              ],
                                                              "referencedDeclaration": 4354,
                                                              "type": "mapping(string memory => mapping(bytes32 => bytes32))",
                                                              "value": "mockedReturnValue"
                                                            },
                                                            "id": 4455,
                                                            "name": "Identifier",
                                                            "src": "1970:17:12"
                                                          },
                                                          {
                                                            "attributes": {
                                                              "argumentTypes": null,
                                                              "overloadedDeclarations": [
                                                                null
                                                              ],
                                                              "referencedDeclaration": 4415,
                                                              "type": "string memory",
                                                              "value": "functionName"
                                                            },
                                                            "id": 4456,
                                                            "name": "Identifier",
                                                            "src": "1988:12:12"
                                                          }
                                                        ],
                                                        "id": 4457,
                                                        "name": "IndexAccess",
                                                        "src": "1970:31:12"
                                                      },
                                                      {
                                                        "attributes": {
                                                          "argumentTypes": null,
                                                          "overloadedDeclarations": [
                                                            null
                                                          ],
                                                          "referencedDeclaration": 4441,
                                                          "type": "bytes32",
                                                          "value": "callSignature"
                                                        },
                                                        "id": 4458,
                                                        "name": "Identifier",
                                                        "src": "2002:13:12"
                                                      }
                                                    ],
                                                    "id": 4459,
                                                    "name": "IndexAccess",
                                                    "src": "1970:46:12"
                                                  }
                                                ],
                                                "id": 4460,
                                                "name": "UnaryOperation",
                                                "src": "1963:53:12"
                                              }
                                            ],
                                            "id": 4461,
                                            "name": "ExpressionStatement",
                                            "src": "1963:53:12"
                                          }
                                        ],
                                        "id": 4462,
                                        "name": "Block",
                                        "src": "1785:250:12"
                                      }
                                    ],
                                    "id": 4463,
                                    "name": "ForStatement",
                                    "src": "1714:321:12"
                                  },
                                  {
                                    "children": [
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "isConstant": false,
                                          "isLValue": false,
                                          "isPure": false,
                                          "lValueRequested": false,
                                          "operator": "delete",
                                          "prefix": true,
                                          "type": "tuple()"
                                        },
                                        "children": [
                                          {
                                            "attributes": {
                                              "argumentTypes": null,
                                              "isConstant": false,
                                              "isLValue": true,
                                              "isPure": false,
                                              "lValueRequested": true,
                                              "type": "bytes32[] storage ref"
                                            },
                                            "children": [
                                              {
                                                "attributes": {
                                                  "argumentTypes": null,
                                                  "overloadedDeclarations": [
                                                    null
                                                  ],
                                                  "referencedDeclaration": 4348,
                                                  "type": "mapping(string memory => bytes32[] storage ref)",
                                                  "value": "functionCallSignatures"
                                                },
                                                "id": 4464,
                                                "name": "Identifier",
                                                "src": "2060:22:12"
                                              },
                                              {
                                                "attributes": {
                                                  "argumentTypes": null,
                                                  "overloadedDeclarations": [
                                                    null
                                                  ],
                                                  "referencedDeclaration": 4415,
                                                  "type": "string memory",
                                                  "value": "functionName"
                                                },
                                                "id": 4465,
                                                "name": "Identifier",
                                                "src": "2083:12:12"
                                              }
                                            ],
                                            "id": 4466,
                                            "name": "IndexAccess",
                                            "src": "2060:36:12"
                                          }
                                        ],
                                        "id": 4467,
                                        "name": "UnaryOperation",
                                        "src": "2053:43:12"
                                      }
                                    ],
                                    "id": 4468,
                                    "name": "ExpressionStatement",
                                    "src": "2053:43:12"
                                  }
                                ],
                                "id": 4469,
                                "name": "Block",
                                "src": "1696:415:12"
                              }
                            ],
                            "id": 4470,
                            "name": "IfStatement",
                            "src": "1659:452:12"
                          }
                        ],
                        "id": 4471,
                        "name": "Block",
                        "src": "1581:540:12"
                      }
                    ],
                    "id": 4472,
                    "name": "ForStatement",
                    "src": "1551:570:12"
                  }
                ],
                "id": 4473,
                "name": "Block",
                "src": "1541:586:12"
              }
            ],
            "id": 4474,
            "name": "FunctionDefinition",
            "src": "1517:610:12"
          },
          {
            "attributes": {
              "constant": false,
              "implemented": true,
              "isConstructor": false,
              "modifiers": [
                null
              ],
              "name": "functionCalledWithArgs",
              "payable": false,
              "scope": 4521,
              "stateMutability": "nonpayable",
              "superFunction": null,
              "visibility": "internal"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "functionName",
                      "scope": 4497,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "string memory",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "string",
                          "type": "string storage pointer"
                        },
                        "id": 4475,
                        "name": "ElementaryTypeName",
                        "src": "2165:6:12"
                      }
                    ],
                    "id": 4476,
                    "name": "VariableDeclaration",
                    "src": "2165:19:12"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "args",
                      "scope": 4497,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "bytes32",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "bytes32",
                          "type": "bytes32"
                        },
                        "id": 4477,
                        "name": "ElementaryTypeName",
                        "src": "2186:7:12"
                      }
                    ],
                    "id": 4478,
                    "name": "VariableDeclaration",
                    "src": "2186:12:12"
                  }
                ],
                "id": 4479,
                "name": "ParameterList",
                "src": "2164:35:12"
              },
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 4480,
                "name": "ParameterList",
                "src": "2221:0:12"
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
                          "lValueRequested": false,
                          "operator": "=",
                          "type": "bool"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": true,
                              "type": "bool"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "isConstant": false,
                                  "isLValue": true,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "type": "mapping(bytes32 => bool)"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 4360,
                                      "type": "mapping(string memory => mapping(bytes32 => bool))",
                                      "value": "functionCalls"
                                    },
                                    "id": 4481,
                                    "name": "Identifier",
                                    "src": "2231:13:12"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 4476,
                                      "type": "string memory",
                                      "value": "functionName"
                                    },
                                    "id": 4482,
                                    "name": "Identifier",
                                    "src": "2245:12:12"
                                  }
                                ],
                                "id": 4484,
                                "name": "IndexAccess",
                                "src": "2231:27:12"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 4478,
                                  "type": "bytes32",
                                  "value": "args"
                                },
                                "id": 4483,
                                "name": "Identifier",
                                "src": "2259:4:12"
                              }
                            ],
                            "id": 4485,
                            "name": "IndexAccess",
                            "src": "2231:33:12"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "hexvalue": "74727565",
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "subdenomination": null,
                              "token": "bool",
                              "type": "bool",
                              "value": "true"
                            },
                            "id": 4486,
                            "name": "Literal",
                            "src": "2267:4:12"
                          }
                        ],
                        "id": 4487,
                        "name": "Assignment",
                        "src": "2231:40:12"
                      }
                    ],
                    "id": 4488,
                    "name": "ExpressionStatement",
                    "src": "2231:40:12"
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
                          "type": "uint256",
                          "type_conversion": false
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_bytes32",
                                  "typeString": "bytes32"
                                }
                              ],
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "member_name": "push",
                              "referencedDeclaration": null,
                              "type": "function (bytes32) returns (uint256)"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "isConstant": false,
                                  "isLValue": true,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "type": "bytes32[] storage ref"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 4348,
                                      "type": "mapping(string memory => bytes32[] storage ref)",
                                      "value": "functionCallSignatures"
                                    },
                                    "id": 4489,
                                    "name": "Identifier",
                                    "src": "2281:22:12"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 4476,
                                      "type": "string memory",
                                      "value": "functionName"
                                    },
                                    "id": 4490,
                                    "name": "Identifier",
                                    "src": "2304:12:12"
                                  }
                                ],
                                "id": 4491,
                                "name": "IndexAccess",
                                "src": "2281:36:12"
                              }
                            ],
                            "id": 4492,
                            "name": "MemberAccess",
                            "src": "2281:41:12"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 4478,
                              "type": "bytes32",
                              "value": "args"
                            },
                            "id": 4493,
                            "name": "Identifier",
                            "src": "2323:4:12"
                          }
                        ],
                        "id": 4494,
                        "name": "FunctionCall",
                        "src": "2281:47:12"
                      }
                    ],
                    "id": 4495,
                    "name": "ExpressionStatement",
                    "src": "2281:47:12"
                  }
                ],
                "id": 4496,
                "name": "Block",
                "src": "2221:114:12"
              }
            ],
            "id": 4497,
            "name": "FunctionDefinition",
            "src": "2133:202:12"
          },
          {
            "attributes": {
              "constant": true,
              "implemented": true,
              "isConstructor": false,
              "modifiers": [
                null
              ],
              "name": "wasFunctionCalledWithArgs",
              "payable": false,
              "scope": 4521,
              "stateMutability": "view",
              "superFunction": null,
              "visibility": "internal"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "functionName",
                      "scope": 4513,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "string memory",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "string",
                          "type": "string storage pointer"
                        },
                        "id": 4498,
                        "name": "ElementaryTypeName",
                        "src": "2376:6:12"
                      }
                    ],
                    "id": 4499,
                    "name": "VariableDeclaration",
                    "src": "2376:19:12"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "args",
                      "scope": 4513,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "bytes32",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "bytes32",
                          "type": "bytes32"
                        },
                        "id": 4500,
                        "name": "ElementaryTypeName",
                        "src": "2397:7:12"
                      }
                    ],
                    "id": 4501,
                    "name": "VariableDeclaration",
                    "src": "2397:12:12"
                  }
                ],
                "id": 4502,
                "name": "ParameterList",
                "src": "2375:35:12"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "wasCalled",
                      "scope": 4513,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "bool",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "bool",
                          "type": "bool"
                        },
                        "id": 4503,
                        "name": "ElementaryTypeName",
                        "src": "2458:4:12"
                      }
                    ],
                    "id": 4504,
                    "name": "VariableDeclaration",
                    "src": "2458:14:12"
                  }
                ],
                "id": 4505,
                "name": "ParameterList",
                "src": "2457:16:12"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "functionReturnParameters": 4505
                    },
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "type": "bool"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "type": "mapping(bytes32 => bool)"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 4360,
                                  "type": "mapping(string memory => mapping(bytes32 => bool))",
                                  "value": "functionCalls"
                                },
                                "id": 4506,
                                "name": "Identifier",
                                "src": "2495:13:12"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 4499,
                                  "type": "string memory",
                                  "value": "functionName"
                                },
                                "id": 4507,
                                "name": "Identifier",
                                "src": "2509:12:12"
                              }
                            ],
                            "id": 4508,
                            "name": "IndexAccess",
                            "src": "2495:27:12"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 4501,
                              "type": "bytes32",
                              "value": "args"
                            },
                            "id": 4509,
                            "name": "Identifier",
                            "src": "2523:4:12"
                          }
                        ],
                        "id": 4510,
                        "name": "IndexAccess",
                        "src": "2495:33:12"
                      }
                    ],
                    "id": 4511,
                    "name": "Return",
                    "src": "2488:40:12"
                  }
                ],
                "id": 4512,
                "name": "Block",
                "src": "2478:57:12"
              }
            ],
            "id": 4513,
            "name": "FunctionDefinition",
            "src": "2341:194:12"
          },
          {
            "attributes": {
              "body": null,
              "constant": false,
              "implemented": false,
              "isConstructor": false,
              "modifiers": [
                null
              ],
              "name": "getFunctionList",
              "payable": false,
              "scope": 4521,
              "stateMutability": "nonpayable",
              "superFunction": null,
              "visibility": "internal"
            },
            "children": [
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 4514,
                "name": "ParameterList",
                "src": "2565:2:12"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "functionNames",
                      "scope": 4520,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "string memory[10] memory",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "type": "string storage ref[10] storage pointer"
                        },
                        "children": [
                          {
                            "attributes": {
                              "name": "string",
                              "type": "string storage pointer"
                            },
                            "id": 4515,
                            "name": "ElementaryTypeName",
                            "src": "2586:6:12"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "hexvalue": "3130",
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "subdenomination": null,
                              "token": "number",
                              "type": "int_const 10",
                              "value": "10"
                            },
                            "id": 4516,
                            "name": "Literal",
                            "src": "2593:2:12"
                          }
                        ],
                        "id": 4517,
                        "name": "ArrayTypeName",
                        "src": "2586:10:12"
                      }
                    ],
                    "id": 4518,
                    "name": "VariableDeclaration",
                    "src": "2586:24:12"
                  }
                ],
                "id": 4519,
                "name": "ParameterList",
                "src": "2585:26:12"
              }
            ],
            "id": 4520,
            "name": "FunctionDefinition",
            "src": "2541:71:12"
          }
        ],
        "id": 4521,
        "name": "ContractDefinition",
        "src": "610:2004:12"
      }
    ],
    "id": 4522,
    "name": "SourceUnit",
    "src": "584:2031:12"
  },
  "compiler": {
    "name": "solc",
    "version": "0.4.18+commit.9cf6e910.Emscripten.clang"
  },
  "networks": {},
  "schemaVersion": "1.0.1",
  "updatedAt": "2018-04-05T21:27:03.110Z"
}