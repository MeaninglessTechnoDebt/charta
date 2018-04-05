export const PermissionsLib = 
{
  "contractName": "PermissionsLib",
  "abi": [],
  "bytecode": "0x60606040523415600e57600080fd5b603580601b6000396000f3006060604052600080fd00a165627a7a72305820c354ce7b74c3d2f71d288e1e04a33cbf1ca35c1d7dcdd13bafeacebea2bedd460029",
  "deployedBytecode": "0x6060604052600080fd00a165627a7a72305820c354ce7b74c3d2f71d288e1e04a33cbf1ca35c1d7dcdd13bafeacebea2bedd460029",
  "sourceMap": "610:2090:10:-;;;;;;;;;;;;;;;;;",
  "deployedSourceMap": "610:2090:10:-;;;;;",
  "source": "/*\n\n  Copyright 2017 Dharma Labs Inc.\n\n  Licensed under the Apache License, Version 2.0 (the \"License\");\n  you may not use this file except in compliance with the License.\n  You may obtain a copy of the License at\n\n    http://www.apache.org/licenses/LICENSE-2.0\n\n  Unless required by applicable law or agreed to in writing, software\n  distributed under the License is distributed on an \"AS IS\" BASIS,\n  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n  See the License for the specific language governing permissions and\n  limitations under the License.\n\n*/\n\npragma solidity 0.4.18;\n\n\nlibrary PermissionsLib {\n    struct Permissions {\n        mapping (address => bool) authorized;\n        mapping (address => uint) agentToIndex; // ensures O(1) look-up\n        address[] authorizedAgents;\n    }\n\n    function authorize(Permissions storage self, address agent)\n        internal\n    {\n        require(isNotAuthorized(self, agent));\n\n        self.authorized[agent] = true;\n        self.authorizedAgents.push(agent);\n        self.agentToIndex[agent] = self.authorizedAgents.length - 1;\n    }\n\n    function revokeAuthorization(Permissions storage self, address agent)\n        internal\n    {\n        /* We only want to do work in the case where the agent whose\n        authorization is being revoked had authorization permissions in the\n        first place. */\n        require(isAuthorized(self, agent));\n\n        uint indexOfAgentToRevoke = self.agentToIndex[agent];\n        uint indexOfAgentToMove = self.authorizedAgents.length - 1;\n        address agentToMove = self.authorizedAgents[indexOfAgentToMove];\n\n        // Revoke the agent's authorization.\n        delete self.authorized[agent];\n\n        // Remove the agent from our collection of authorized agents.\n        self.authorizedAgents[indexOfAgentToRevoke] = agentToMove;\n\n        // Update our indices to reflect the above changes.\n        self.agentToIndex[agentToMove] = indexOfAgentToRevoke;\n        delete self.agentToIndex[agent];\n\n        // Clean up memory that's no longer being used.\n        delete self.authorizedAgents[indexOfAgentToMove];\n        self.authorizedAgents.length -= 1;\n    }\n\n    function isAuthorized(Permissions storage self, address agent)\n        internal\n        view\n        returns (bool)\n    {\n        return self.authorized[agent];\n    }\n\n    function isNotAuthorized(Permissions storage self, address agent)\n        internal\n        view\n        returns (bool)\n    {\n        return !isAuthorized(self, agent);\n    }\n\n    function getAuthorizedAgents(Permissions storage self)\n        internal\n        view\n        returns (address[])\n    {\n        return self.authorizedAgents;\n    }\n}\n",
  "sourcePath": "/Users/nadavhollander/Documents/Dharma/Development/charta/contracts/libraries/PermissionsLib.sol",
  "ast": {
    "attributes": {
      "absolutePath": "/Users/nadavhollander/Documents/Dharma/Development/charta/contracts/libraries/PermissionsLib.sol",
      "exportedSymbols": {
        "PermissionsLib": [
          3947
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
        "id": 3769,
        "name": "PragmaDirective",
        "src": "584:23:10"
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
          "documentation": null,
          "fullyImplemented": true,
          "linearizedBaseContracts": [
            3947
          ],
          "name": "PermissionsLib",
          "scope": 3948
        },
        "children": [
          {
            "attributes": {
              "canonicalName": "PermissionsLib.Permissions",
              "name": "Permissions",
              "scope": 3947,
              "visibility": "public"
            },
            "children": [
              {
                "attributes": {
                  "constant": false,
                  "name": "authorized",
                  "scope": 3781,
                  "stateVariable": false,
                  "storageLocation": "default",
                  "type": "mapping(address => bool)",
                  "value": null,
                  "visibility": "internal"
                },
                "children": [
                  {
                    "attributes": {
                      "type": "mapping(address => bool)"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "address",
                          "type": "address"
                        },
                        "id": 3770,
                        "name": "ElementaryTypeName",
                        "src": "677:7:10"
                      },
                      {
                        "attributes": {
                          "name": "bool",
                          "type": "bool"
                        },
                        "id": 3771,
                        "name": "ElementaryTypeName",
                        "src": "688:4:10"
                      }
                    ],
                    "id": 3772,
                    "name": "Mapping",
                    "src": "668:25:10"
                  }
                ],
                "id": 3773,
                "name": "VariableDeclaration",
                "src": "668:36:10"
              },
              {
                "attributes": {
                  "constant": false,
                  "name": "agentToIndex",
                  "scope": 3781,
                  "stateVariable": false,
                  "storageLocation": "default",
                  "type": "mapping(address => uint256)",
                  "value": null,
                  "visibility": "internal"
                },
                "children": [
                  {
                    "attributes": {
                      "type": "mapping(address => uint256)"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "address",
                          "type": "address"
                        },
                        "id": 3774,
                        "name": "ElementaryTypeName",
                        "src": "723:7:10"
                      },
                      {
                        "attributes": {
                          "name": "uint",
                          "type": "uint256"
                        },
                        "id": 3775,
                        "name": "ElementaryTypeName",
                        "src": "734:4:10"
                      }
                    ],
                    "id": 3776,
                    "name": "Mapping",
                    "src": "714:25:10"
                  }
                ],
                "id": 3777,
                "name": "VariableDeclaration",
                "src": "714:38:10"
              },
              {
                "attributes": {
                  "constant": false,
                  "name": "authorizedAgents",
                  "scope": 3781,
                  "stateVariable": false,
                  "storageLocation": "default",
                  "type": "address[] storage pointer",
                  "value": null,
                  "visibility": "internal"
                },
                "children": [
                  {
                    "attributes": {
                      "length": null,
                      "type": "address[] storage pointer"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "address",
                          "type": "address"
                        },
                        "id": 3778,
                        "name": "ElementaryTypeName",
                        "src": "786:7:10"
                      }
                    ],
                    "id": 3779,
                    "name": "ArrayTypeName",
                    "src": "786:9:10"
                  }
                ],
                "id": 3780,
                "name": "VariableDeclaration",
                "src": "786:26:10"
              }
            ],
            "id": 3781,
            "name": "StructDefinition",
            "src": "639:180:10"
          },
          {
            "attributes": {
              "constant": false,
              "implemented": true,
              "isConstructor": false,
              "modifiers": [
                null
              ],
              "name": "authorize",
              "payable": false,
              "scope": 3947,
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
                      "name": "self",
                      "scope": 3824,
                      "stateVariable": false,
                      "storageLocation": "storage",
                      "type": "struct PermissionsLib.Permissions storage pointer",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "contractScope": null,
                          "name": "Permissions",
                          "referencedDeclaration": 3781,
                          "type": "struct PermissionsLib.Permissions storage pointer"
                        },
                        "id": 3782,
                        "name": "UserDefinedTypeName",
                        "src": "844:11:10"
                      }
                    ],
                    "id": 3783,
                    "name": "VariableDeclaration",
                    "src": "844:24:10"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "agent",
                      "scope": 3824,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "address",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "address",
                          "type": "address"
                        },
                        "id": 3784,
                        "name": "ElementaryTypeName",
                        "src": "870:7:10"
                      }
                    ],
                    "id": 3785,
                    "name": "VariableDeclaration",
                    "src": "870:13:10"
                  }
                ],
                "id": 3786,
                "name": "ParameterList",
                "src": "843:41:10"
              },
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 3787,
                "name": "ParameterList",
                "src": "906:0:10"
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
                              "referencedDeclaration": 6557,
                              "type": "function (bool) pure",
                              "value": "require"
                            },
                            "id": 3788,
                            "name": "Identifier",
                            "src": "916:7:10"
                          },
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
                              "type": "bool",
                              "type_conversion": false
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": [
                                    {
                                      "typeIdentifier": "t_struct$_Permissions_$3781_storage_ptr",
                                      "typeString": "struct PermissionsLib.Permissions storage pointer"
                                    },
                                    {
                                      "typeIdentifier": "t_address",
                                      "typeString": "address"
                                    }
                                  ],
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 3934,
                                  "type": "function (struct PermissionsLib.Permissions storage pointer,address) view returns (bool)",
                                  "value": "isNotAuthorized"
                                },
                                "id": 3789,
                                "name": "Identifier",
                                "src": "924:15:10"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 3783,
                                  "type": "struct PermissionsLib.Permissions storage pointer",
                                  "value": "self"
                                },
                                "id": 3790,
                                "name": "Identifier",
                                "src": "940:4:10"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 3785,
                                  "type": "address",
                                  "value": "agent"
                                },
                                "id": 3791,
                                "name": "Identifier",
                                "src": "946:5:10"
                              }
                            ],
                            "id": 3792,
                            "name": "FunctionCall",
                            "src": "924:28:10"
                          }
                        ],
                        "id": 3793,
                        "name": "FunctionCall",
                        "src": "916:37:10"
                      }
                    ],
                    "id": 3794,
                    "name": "ExpressionStatement",
                    "src": "916:37:10"
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
                                  "member_name": "authorized",
                                  "referencedDeclaration": 3773,
                                  "type": "mapping(address => bool)"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 3783,
                                      "type": "struct PermissionsLib.Permissions storage pointer",
                                      "value": "self"
                                    },
                                    "id": 3795,
                                    "name": "Identifier",
                                    "src": "964:4:10"
                                  }
                                ],
                                "id": 3798,
                                "name": "MemberAccess",
                                "src": "964:15:10"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 3785,
                                  "type": "address",
                                  "value": "agent"
                                },
                                "id": 3797,
                                "name": "Identifier",
                                "src": "980:5:10"
                              }
                            ],
                            "id": 3799,
                            "name": "IndexAccess",
                            "src": "964:22:10"
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
                            "id": 3800,
                            "name": "Literal",
                            "src": "989:4:10"
                          }
                        ],
                        "id": 3801,
                        "name": "Assignment",
                        "src": "964:29:10"
                      }
                    ],
                    "id": 3802,
                    "name": "ExpressionStatement",
                    "src": "964:29:10"
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
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                }
                              ],
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "member_name": "push",
                              "referencedDeclaration": null,
                              "type": "function (address) returns (uint256)"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "isConstant": false,
                                  "isLValue": true,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "member_name": "authorizedAgents",
                                  "referencedDeclaration": 3780,
                                  "type": "address[] storage ref"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 3783,
                                      "type": "struct PermissionsLib.Permissions storage pointer",
                                      "value": "self"
                                    },
                                    "id": 3803,
                                    "name": "Identifier",
                                    "src": "1003:4:10"
                                  }
                                ],
                                "id": 3806,
                                "name": "MemberAccess",
                                "src": "1003:21:10"
                              }
                            ],
                            "id": 3807,
                            "name": "MemberAccess",
                            "src": "1003:26:10"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 3785,
                              "type": "address",
                              "value": "agent"
                            },
                            "id": 3808,
                            "name": "Identifier",
                            "src": "1030:5:10"
                          }
                        ],
                        "id": 3809,
                        "name": "FunctionCall",
                        "src": "1003:33:10"
                      }
                    ],
                    "id": 3810,
                    "name": "ExpressionStatement",
                    "src": "1003:33:10"
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
                          "type": "uint256"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": true,
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
                                  "member_name": "agentToIndex",
                                  "referencedDeclaration": 3777,
                                  "type": "mapping(address => uint256)"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 3783,
                                      "type": "struct PermissionsLib.Permissions storage pointer",
                                      "value": "self"
                                    },
                                    "id": 3811,
                                    "name": "Identifier",
                                    "src": "1046:4:10"
                                  }
                                ],
                                "id": 3814,
                                "name": "MemberAccess",
                                "src": "1046:17:10"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 3785,
                                  "type": "address",
                                  "value": "agent"
                                },
                                "id": 3813,
                                "name": "Identifier",
                                "src": "1064:5:10"
                              }
                            ],
                            "id": 3815,
                            "name": "IndexAccess",
                            "src": "1046:24:10"
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
                              "operator": "-",
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
                                      "member_name": "authorizedAgents",
                                      "referencedDeclaration": 3780,
                                      "type": "address[] storage ref"
                                    },
                                    "children": [
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "overloadedDeclarations": [
                                            null
                                          ],
                                          "referencedDeclaration": 3783,
                                          "type": "struct PermissionsLib.Permissions storage pointer",
                                          "value": "self"
                                        },
                                        "id": 3816,
                                        "name": "Identifier",
                                        "src": "1073:4:10"
                                      }
                                    ],
                                    "id": 3817,
                                    "name": "MemberAccess",
                                    "src": "1073:21:10"
                                  }
                                ],
                                "id": 3818,
                                "name": "MemberAccess",
                                "src": "1073:28:10"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "hexvalue": "31",
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "lValueRequested": false,
                                  "subdenomination": null,
                                  "token": "number",
                                  "type": "int_const 1",
                                  "value": "1"
                                },
                                "id": 3819,
                                "name": "Literal",
                                "src": "1104:1:10"
                              }
                            ],
                            "id": 3820,
                            "name": "BinaryOperation",
                            "src": "1073:32:10"
                          }
                        ],
                        "id": 3821,
                        "name": "Assignment",
                        "src": "1046:59:10"
                      }
                    ],
                    "id": 3822,
                    "name": "ExpressionStatement",
                    "src": "1046:59:10"
                  }
                ],
                "id": 3823,
                "name": "Block",
                "src": "906:206:10"
              }
            ],
            "id": 3824,
            "name": "FunctionDefinition",
            "src": "825:287:10"
          },
          {
            "attributes": {
              "constant": false,
              "implemented": true,
              "isConstructor": false,
              "modifiers": [
                null
              ],
              "name": "revokeAuthorization",
              "payable": false,
              "scope": 3947,
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
                      "name": "self",
                      "scope": 3903,
                      "stateVariable": false,
                      "storageLocation": "storage",
                      "type": "struct PermissionsLib.Permissions storage pointer",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "contractScope": null,
                          "name": "Permissions",
                          "referencedDeclaration": 3781,
                          "type": "struct PermissionsLib.Permissions storage pointer"
                        },
                        "id": 3825,
                        "name": "UserDefinedTypeName",
                        "src": "1147:11:10"
                      }
                    ],
                    "id": 3826,
                    "name": "VariableDeclaration",
                    "src": "1147:24:10"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "agent",
                      "scope": 3903,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "address",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "address",
                          "type": "address"
                        },
                        "id": 3827,
                        "name": "ElementaryTypeName",
                        "src": "1173:7:10"
                      }
                    ],
                    "id": 3828,
                    "name": "VariableDeclaration",
                    "src": "1173:13:10"
                  }
                ],
                "id": 3829,
                "name": "ParameterList",
                "src": "1146:41:10"
              },
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 3830,
                "name": "ParameterList",
                "src": "1209:0:10"
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
                              "referencedDeclaration": 6557,
                              "type": "function (bool) pure",
                              "value": "require"
                            },
                            "id": 3831,
                            "name": "Identifier",
                            "src": "1388:7:10"
                          },
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
                              "type": "bool",
                              "type_conversion": false
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": [
                                    {
                                      "typeIdentifier": "t_struct$_Permissions_$3781_storage_ptr",
                                      "typeString": "struct PermissionsLib.Permissions storage pointer"
                                    },
                                    {
                                      "typeIdentifier": "t_address",
                                      "typeString": "address"
                                    }
                                  ],
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 3918,
                                  "type": "function (struct PermissionsLib.Permissions storage pointer,address) view returns (bool)",
                                  "value": "isAuthorized"
                                },
                                "id": 3832,
                                "name": "Identifier",
                                "src": "1396:12:10"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 3826,
                                  "type": "struct PermissionsLib.Permissions storage pointer",
                                  "value": "self"
                                },
                                "id": 3833,
                                "name": "Identifier",
                                "src": "1409:4:10"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 3828,
                                  "type": "address",
                                  "value": "agent"
                                },
                                "id": 3834,
                                "name": "Identifier",
                                "src": "1415:5:10"
                              }
                            ],
                            "id": 3835,
                            "name": "FunctionCall",
                            "src": "1396:25:10"
                          }
                        ],
                        "id": 3836,
                        "name": "FunctionCall",
                        "src": "1388:34:10"
                      }
                    ],
                    "id": 3837,
                    "name": "ExpressionStatement",
                    "src": "1388:34:10"
                  },
                  {
                    "attributes": {
                      "assignments": [
                        3839
                      ]
                    },
                    "children": [
                      {
                        "attributes": {
                          "constant": false,
                          "name": "indexOfAgentToRevoke",
                          "scope": 3903,
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
                            "id": 3838,
                            "name": "ElementaryTypeName",
                            "src": "1433:4:10"
                          }
                        ],
                        "id": 3839,
                        "name": "VariableDeclaration",
                        "src": "1433:25:10"
                      },
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
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
                              "member_name": "agentToIndex",
                              "referencedDeclaration": 3777,
                              "type": "mapping(address => uint256)"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 3826,
                                  "type": "struct PermissionsLib.Permissions storage pointer",
                                  "value": "self"
                                },
                                "id": 3840,
                                "name": "Identifier",
                                "src": "1461:4:10"
                              }
                            ],
                            "id": 3841,
                            "name": "MemberAccess",
                            "src": "1461:17:10"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 3828,
                              "type": "address",
                              "value": "agent"
                            },
                            "id": 3842,
                            "name": "Identifier",
                            "src": "1479:5:10"
                          }
                        ],
                        "id": 3843,
                        "name": "IndexAccess",
                        "src": "1461:24:10"
                      }
                    ],
                    "id": 3844,
                    "name": "VariableDeclarationStatement",
                    "src": "1433:52:10"
                  },
                  {
                    "attributes": {
                      "assignments": [
                        3846
                      ]
                    },
                    "children": [
                      {
                        "attributes": {
                          "constant": false,
                          "name": "indexOfAgentToMove",
                          "scope": 3903,
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
                            "id": 3845,
                            "name": "ElementaryTypeName",
                            "src": "1495:4:10"
                          }
                        ],
                        "id": 3846,
                        "name": "VariableDeclaration",
                        "src": "1495:23:10"
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
                          "operator": "-",
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
                                  "member_name": "authorizedAgents",
                                  "referencedDeclaration": 3780,
                                  "type": "address[] storage ref"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 3826,
                                      "type": "struct PermissionsLib.Permissions storage pointer",
                                      "value": "self"
                                    },
                                    "id": 3847,
                                    "name": "Identifier",
                                    "src": "1521:4:10"
                                  }
                                ],
                                "id": 3848,
                                "name": "MemberAccess",
                                "src": "1521:21:10"
                              }
                            ],
                            "id": 3849,
                            "name": "MemberAccess",
                            "src": "1521:28:10"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "hexvalue": "31",
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "subdenomination": null,
                              "token": "number",
                              "type": "int_const 1",
                              "value": "1"
                            },
                            "id": 3850,
                            "name": "Literal",
                            "src": "1552:1:10"
                          }
                        ],
                        "id": 3851,
                        "name": "BinaryOperation",
                        "src": "1521:32:10"
                      }
                    ],
                    "id": 3852,
                    "name": "VariableDeclarationStatement",
                    "src": "1495:58:10"
                  },
                  {
                    "attributes": {
                      "assignments": [
                        3854
                      ]
                    },
                    "children": [
                      {
                        "attributes": {
                          "constant": false,
                          "name": "agentToMove",
                          "scope": 3903,
                          "stateVariable": false,
                          "storageLocation": "default",
                          "type": "address",
                          "value": null,
                          "visibility": "internal"
                        },
                        "children": [
                          {
                            "attributes": {
                              "name": "address",
                              "type": "address"
                            },
                            "id": 3853,
                            "name": "ElementaryTypeName",
                            "src": "1563:7:10"
                          }
                        ],
                        "id": 3854,
                        "name": "VariableDeclaration",
                        "src": "1563:19:10"
                      },
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "type": "address"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "member_name": "authorizedAgents",
                              "referencedDeclaration": 3780,
                              "type": "address[] storage ref"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 3826,
                                  "type": "struct PermissionsLib.Permissions storage pointer",
                                  "value": "self"
                                },
                                "id": 3855,
                                "name": "Identifier",
                                "src": "1585:4:10"
                              }
                            ],
                            "id": 3856,
                            "name": "MemberAccess",
                            "src": "1585:21:10"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 3846,
                              "type": "uint256",
                              "value": "indexOfAgentToMove"
                            },
                            "id": 3857,
                            "name": "Identifier",
                            "src": "1607:18:10"
                          }
                        ],
                        "id": 3858,
                        "name": "IndexAccess",
                        "src": "1585:41:10"
                      }
                    ],
                    "id": 3859,
                    "name": "VariableDeclarationStatement",
                    "src": "1563:63:10"
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
                                  "member_name": "authorized",
                                  "referencedDeclaration": 3773,
                                  "type": "mapping(address => bool)"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 3826,
                                      "type": "struct PermissionsLib.Permissions storage pointer",
                                      "value": "self"
                                    },
                                    "id": 3860,
                                    "name": "Identifier",
                                    "src": "1689:4:10"
                                  }
                                ],
                                "id": 3861,
                                "name": "MemberAccess",
                                "src": "1689:15:10"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 3828,
                                  "type": "address",
                                  "value": "agent"
                                },
                                "id": 3862,
                                "name": "Identifier",
                                "src": "1705:5:10"
                              }
                            ],
                            "id": 3863,
                            "name": "IndexAccess",
                            "src": "1689:22:10"
                          }
                        ],
                        "id": 3864,
                        "name": "UnaryOperation",
                        "src": "1682:29:10"
                      }
                    ],
                    "id": 3865,
                    "name": "ExpressionStatement",
                    "src": "1682:29:10"
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
                          "type": "address"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": true,
                              "type": "address"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "isConstant": false,
                                  "isLValue": true,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "member_name": "authorizedAgents",
                                  "referencedDeclaration": 3780,
                                  "type": "address[] storage ref"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 3826,
                                      "type": "struct PermissionsLib.Permissions storage pointer",
                                      "value": "self"
                                    },
                                    "id": 3866,
                                    "name": "Identifier",
                                    "src": "1792:4:10"
                                  }
                                ],
                                "id": 3869,
                                "name": "MemberAccess",
                                "src": "1792:21:10"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 3839,
                                  "type": "uint256",
                                  "value": "indexOfAgentToRevoke"
                                },
                                "id": 3868,
                                "name": "Identifier",
                                "src": "1814:20:10"
                              }
                            ],
                            "id": 3870,
                            "name": "IndexAccess",
                            "src": "1792:43:10"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 3854,
                              "type": "address",
                              "value": "agentToMove"
                            },
                            "id": 3871,
                            "name": "Identifier",
                            "src": "1838:11:10"
                          }
                        ],
                        "id": 3872,
                        "name": "Assignment",
                        "src": "1792:57:10"
                      }
                    ],
                    "id": 3873,
                    "name": "ExpressionStatement",
                    "src": "1792:57:10"
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
                          "type": "uint256"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": true,
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
                                  "member_name": "agentToIndex",
                                  "referencedDeclaration": 3777,
                                  "type": "mapping(address => uint256)"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 3826,
                                      "type": "struct PermissionsLib.Permissions storage pointer",
                                      "value": "self"
                                    },
                                    "id": 3874,
                                    "name": "Identifier",
                                    "src": "1920:4:10"
                                  }
                                ],
                                "id": 3877,
                                "name": "MemberAccess",
                                "src": "1920:17:10"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 3854,
                                  "type": "address",
                                  "value": "agentToMove"
                                },
                                "id": 3876,
                                "name": "Identifier",
                                "src": "1938:11:10"
                              }
                            ],
                            "id": 3878,
                            "name": "IndexAccess",
                            "src": "1920:30:10"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 3839,
                              "type": "uint256",
                              "value": "indexOfAgentToRevoke"
                            },
                            "id": 3879,
                            "name": "Identifier",
                            "src": "1953:20:10"
                          }
                        ],
                        "id": 3880,
                        "name": "Assignment",
                        "src": "1920:53:10"
                      }
                    ],
                    "id": 3881,
                    "name": "ExpressionStatement",
                    "src": "1920:53:10"
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
                                  "member_name": "agentToIndex",
                                  "referencedDeclaration": 3777,
                                  "type": "mapping(address => uint256)"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 3826,
                                      "type": "struct PermissionsLib.Permissions storage pointer",
                                      "value": "self"
                                    },
                                    "id": 3882,
                                    "name": "Identifier",
                                    "src": "1990:4:10"
                                  }
                                ],
                                "id": 3883,
                                "name": "MemberAccess",
                                "src": "1990:17:10"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 3828,
                                  "type": "address",
                                  "value": "agent"
                                },
                                "id": 3884,
                                "name": "Identifier",
                                "src": "2008:5:10"
                              }
                            ],
                            "id": 3885,
                            "name": "IndexAccess",
                            "src": "1990:24:10"
                          }
                        ],
                        "id": 3886,
                        "name": "UnaryOperation",
                        "src": "1983:31:10"
                      }
                    ],
                    "id": 3887,
                    "name": "ExpressionStatement",
                    "src": "1983:31:10"
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
                              "type": "address"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "isConstant": false,
                                  "isLValue": true,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "member_name": "authorizedAgents",
                                  "referencedDeclaration": 3780,
                                  "type": "address[] storage ref"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 3826,
                                      "type": "struct PermissionsLib.Permissions storage pointer",
                                      "value": "self"
                                    },
                                    "id": 3888,
                                    "name": "Identifier",
                                    "src": "2088:4:10"
                                  }
                                ],
                                "id": 3889,
                                "name": "MemberAccess",
                                "src": "2088:21:10"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 3846,
                                  "type": "uint256",
                                  "value": "indexOfAgentToMove"
                                },
                                "id": 3890,
                                "name": "Identifier",
                                "src": "2110:18:10"
                              }
                            ],
                            "id": 3891,
                            "name": "IndexAccess",
                            "src": "2088:41:10"
                          }
                        ],
                        "id": 3892,
                        "name": "UnaryOperation",
                        "src": "2081:48:10"
                      }
                    ],
                    "id": 3893,
                    "name": "ExpressionStatement",
                    "src": "2081:48:10"
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
                          "operator": "-=",
                          "type": "uint256"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": true,
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
                                  "member_name": "authorizedAgents",
                                  "referencedDeclaration": 3780,
                                  "type": "address[] storage ref"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 3826,
                                      "type": "struct PermissionsLib.Permissions storage pointer",
                                      "value": "self"
                                    },
                                    "id": 3894,
                                    "name": "Identifier",
                                    "src": "2139:4:10"
                                  }
                                ],
                                "id": 3897,
                                "name": "MemberAccess",
                                "src": "2139:21:10"
                              }
                            ],
                            "id": 3898,
                            "name": "MemberAccess",
                            "src": "2139:28:10"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "hexvalue": "31",
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "subdenomination": null,
                              "token": "number",
                              "type": "int_const 1",
                              "value": "1"
                            },
                            "id": 3899,
                            "name": "Literal",
                            "src": "2171:1:10"
                          }
                        ],
                        "id": 3900,
                        "name": "Assignment",
                        "src": "2139:33:10"
                      }
                    ],
                    "id": 3901,
                    "name": "ExpressionStatement",
                    "src": "2139:33:10"
                  }
                ],
                "id": 3902,
                "name": "Block",
                "src": "1209:970:10"
              }
            ],
            "id": 3903,
            "name": "FunctionDefinition",
            "src": "1118:1061:10"
          },
          {
            "attributes": {
              "constant": true,
              "implemented": true,
              "isConstructor": false,
              "modifiers": [
                null
              ],
              "name": "isAuthorized",
              "payable": false,
              "scope": 3947,
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
                      "name": "self",
                      "scope": 3918,
                      "stateVariable": false,
                      "storageLocation": "storage",
                      "type": "struct PermissionsLib.Permissions storage pointer",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "contractScope": null,
                          "name": "Permissions",
                          "referencedDeclaration": 3781,
                          "type": "struct PermissionsLib.Permissions storage pointer"
                        },
                        "id": 3904,
                        "name": "UserDefinedTypeName",
                        "src": "2207:11:10"
                      }
                    ],
                    "id": 3905,
                    "name": "VariableDeclaration",
                    "src": "2207:24:10"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "agent",
                      "scope": 3918,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "address",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "address",
                          "type": "address"
                        },
                        "id": 3906,
                        "name": "ElementaryTypeName",
                        "src": "2233:7:10"
                      }
                    ],
                    "id": 3907,
                    "name": "VariableDeclaration",
                    "src": "2233:13:10"
                  }
                ],
                "id": 3908,
                "name": "ParameterList",
                "src": "2206:41:10"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "",
                      "scope": 3918,
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
                        "id": 3909,
                        "name": "ElementaryTypeName",
                        "src": "2295:4:10"
                      }
                    ],
                    "id": 3910,
                    "name": "VariableDeclaration",
                    "src": "2295:4:10"
                  }
                ],
                "id": 3911,
                "name": "ParameterList",
                "src": "2294:6:10"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "functionReturnParameters": 3911
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
                              "member_name": "authorized",
                              "referencedDeclaration": 3773,
                              "type": "mapping(address => bool)"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 3905,
                                  "type": "struct PermissionsLib.Permissions storage pointer",
                                  "value": "self"
                                },
                                "id": 3912,
                                "name": "Identifier",
                                "src": "2322:4:10"
                              }
                            ],
                            "id": 3913,
                            "name": "MemberAccess",
                            "src": "2322:15:10"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 3907,
                              "type": "address",
                              "value": "agent"
                            },
                            "id": 3914,
                            "name": "Identifier",
                            "src": "2338:5:10"
                          }
                        ],
                        "id": 3915,
                        "name": "IndexAccess",
                        "src": "2322:22:10"
                      }
                    ],
                    "id": 3916,
                    "name": "Return",
                    "src": "2315:29:10"
                  }
                ],
                "id": 3917,
                "name": "Block",
                "src": "2305:46:10"
              }
            ],
            "id": 3918,
            "name": "FunctionDefinition",
            "src": "2185:166:10"
          },
          {
            "attributes": {
              "constant": true,
              "implemented": true,
              "isConstructor": false,
              "modifiers": [
                null
              ],
              "name": "isNotAuthorized",
              "payable": false,
              "scope": 3947,
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
                      "name": "self",
                      "scope": 3934,
                      "stateVariable": false,
                      "storageLocation": "storage",
                      "type": "struct PermissionsLib.Permissions storage pointer",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "contractScope": null,
                          "name": "Permissions",
                          "referencedDeclaration": 3781,
                          "type": "struct PermissionsLib.Permissions storage pointer"
                        },
                        "id": 3919,
                        "name": "UserDefinedTypeName",
                        "src": "2382:11:10"
                      }
                    ],
                    "id": 3920,
                    "name": "VariableDeclaration",
                    "src": "2382:24:10"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "agent",
                      "scope": 3934,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "address",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "address",
                          "type": "address"
                        },
                        "id": 3921,
                        "name": "ElementaryTypeName",
                        "src": "2408:7:10"
                      }
                    ],
                    "id": 3922,
                    "name": "VariableDeclaration",
                    "src": "2408:13:10"
                  }
                ],
                "id": 3923,
                "name": "ParameterList",
                "src": "2381:41:10"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "",
                      "scope": 3934,
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
                        "id": 3924,
                        "name": "ElementaryTypeName",
                        "src": "2470:4:10"
                      }
                    ],
                    "id": 3925,
                    "name": "VariableDeclaration",
                    "src": "2470:4:10"
                  }
                ],
                "id": 3926,
                "name": "ParameterList",
                "src": "2469:6:10"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "functionReturnParameters": 3926
                    },
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "operator": "!",
                          "prefix": true,
                          "type": "bool"
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
                              "type": "bool",
                              "type_conversion": false
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": [
                                    {
                                      "typeIdentifier": "t_struct$_Permissions_$3781_storage_ptr",
                                      "typeString": "struct PermissionsLib.Permissions storage pointer"
                                    },
                                    {
                                      "typeIdentifier": "t_address",
                                      "typeString": "address"
                                    }
                                  ],
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 3918,
                                  "type": "function (struct PermissionsLib.Permissions storage pointer,address) view returns (bool)",
                                  "value": "isAuthorized"
                                },
                                "id": 3927,
                                "name": "Identifier",
                                "src": "2498:12:10"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 3920,
                                  "type": "struct PermissionsLib.Permissions storage pointer",
                                  "value": "self"
                                },
                                "id": 3928,
                                "name": "Identifier",
                                "src": "2511:4:10"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 3922,
                                  "type": "address",
                                  "value": "agent"
                                },
                                "id": 3929,
                                "name": "Identifier",
                                "src": "2517:5:10"
                              }
                            ],
                            "id": 3930,
                            "name": "FunctionCall",
                            "src": "2498:25:10"
                          }
                        ],
                        "id": 3931,
                        "name": "UnaryOperation",
                        "src": "2497:26:10"
                      }
                    ],
                    "id": 3932,
                    "name": "Return",
                    "src": "2490:33:10"
                  }
                ],
                "id": 3933,
                "name": "Block",
                "src": "2480:50:10"
              }
            ],
            "id": 3934,
            "name": "FunctionDefinition",
            "src": "2357:173:10"
          },
          {
            "attributes": {
              "constant": true,
              "implemented": true,
              "isConstructor": false,
              "modifiers": [
                null
              ],
              "name": "getAuthorizedAgents",
              "payable": false,
              "scope": 3947,
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
                      "name": "self",
                      "scope": 3946,
                      "stateVariable": false,
                      "storageLocation": "storage",
                      "type": "struct PermissionsLib.Permissions storage pointer",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "contractScope": null,
                          "name": "Permissions",
                          "referencedDeclaration": 3781,
                          "type": "struct PermissionsLib.Permissions storage pointer"
                        },
                        "id": 3935,
                        "name": "UserDefinedTypeName",
                        "src": "2565:11:10"
                      }
                    ],
                    "id": 3936,
                    "name": "VariableDeclaration",
                    "src": "2565:24:10"
                  }
                ],
                "id": 3937,
                "name": "ParameterList",
                "src": "2564:26:10"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "",
                      "scope": 3946,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "address[] memory",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "length": null,
                          "type": "address[] storage pointer"
                        },
                        "children": [
                          {
                            "attributes": {
                              "name": "address",
                              "type": "address"
                            },
                            "id": 3938,
                            "name": "ElementaryTypeName",
                            "src": "2638:7:10"
                          }
                        ],
                        "id": 3939,
                        "name": "ArrayTypeName",
                        "src": "2638:9:10"
                      }
                    ],
                    "id": 3940,
                    "name": "VariableDeclaration",
                    "src": "2638:9:10"
                  }
                ],
                "id": 3941,
                "name": "ParameterList",
                "src": "2637:11:10"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "functionReturnParameters": 3941
                    },
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "member_name": "authorizedAgents",
                          "referencedDeclaration": 3780,
                          "type": "address[] storage ref"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 3936,
                              "type": "struct PermissionsLib.Permissions storage pointer",
                              "value": "self"
                            },
                            "id": 3942,
                            "name": "Identifier",
                            "src": "2670:4:10"
                          }
                        ],
                        "id": 3943,
                        "name": "MemberAccess",
                        "src": "2670:21:10"
                      }
                    ],
                    "id": 3944,
                    "name": "Return",
                    "src": "2663:28:10"
                  }
                ],
                "id": 3945,
                "name": "Block",
                "src": "2653:45:10"
              }
            ],
            "id": 3946,
            "name": "FunctionDefinition",
            "src": "2536:162:10"
          }
        ],
        "id": 3947,
        "name": "ContractDefinition",
        "src": "610:2090:10"
      }
    ],
    "id": 3948,
    "name": "SourceUnit",
    "src": "584:2117:10"
  },
  "compiler": {
    "name": "solc",
    "version": "0.4.18+commit.9cf6e910.Emscripten.clang"
  },
  "networks": {
    "42": {
      "events": {},
      "links": {},
      "address": "0x2d78228e288f7e13c91ef233201ec27b4a14f7a7"
    },
    "70": {
      "events": {},
      "links": {},
      "address": "0xc13d026d7e4e6c2864240aa1f26bb436c6271338"
    }
  },
  "schemaVersion": "1.0.1",
  "updatedAt": "2018-04-05T21:29:41.192Z"
}