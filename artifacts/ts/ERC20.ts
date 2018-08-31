export const ERC20 = 
{
  "contractName": "ERC20",
  "abi": [
    {
      "constant": false,
      "inputs": [
        {
          "name": "spender",
          "type": "address"
        },
        {
          "name": "value",
          "type": "uint256"
        }
      ],
      "name": "approve",
      "outputs": [
        {
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "totalSupply",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
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
          "name": "from",
          "type": "address"
        },
        {
          "name": "to",
          "type": "address"
        },
        {
          "name": "value",
          "type": "uint256"
        }
      ],
      "name": "transferFrom",
      "outputs": [
        {
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "who",
          "type": "address"
        }
      ],
      "name": "balanceOf",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
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
          "name": "to",
          "type": "address"
        },
        {
          "name": "value",
          "type": "uint256"
        }
      ],
      "name": "transfer",
      "outputs": [
        {
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "owner",
          "type": "address"
        },
        {
          "name": "spender",
          "type": "address"
        }
      ],
      "name": "allowance",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "name": "owner",
          "type": "address"
        },
        {
          "indexed": true,
          "name": "spender",
          "type": "address"
        },
        {
          "indexed": false,
          "name": "value",
          "type": "uint256"
        }
      ],
      "name": "Approval",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "name": "from",
          "type": "address"
        },
        {
          "indexed": true,
          "name": "to",
          "type": "address"
        },
        {
          "indexed": false,
          "name": "value",
          "type": "uint256"
        }
      ],
      "name": "Transfer",
      "type": "event"
    }
  ],
  "bytecode": "0x",
  "deployedBytecode": "0x",
  "sourceMap": "",
  "deployedSourceMap": "",
  "source": "pragma solidity ^0.4.18;\n\nimport \"./ERC20Basic.sol\";\n\n\n/**\n * @title ERC20 interface\n * @dev see https://github.com/ethereum/EIPs/issues/20\n */\ncontract ERC20 is ERC20Basic {\n  function allowance(address owner, address spender) public view returns (uint256);\n  function transferFrom(address from, address to, uint256 value) public returns (bool);\n  function approve(address spender, uint256 value) public returns (bool);\n  event Approval(address indexed owner, address indexed spender, uint256 value);\n}\n",
  "sourcePath": "zeppelin-solidity/contracts/token/ERC20/ERC20.sol",
  "ast": {
    "attributes": {
      "absolutePath": "zeppelin-solidity/contracts/token/ERC20/ERC20.sol",
      "exportedSymbols": {
        "ERC20": [
          13541
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
        "id": 13500,
        "name": "PragmaDirective",
        "src": "0:24:39"
      },
      {
        "attributes": {
          "SourceUnit": 13574,
          "absolutePath": "zeppelin-solidity/contracts/token/ERC20/ERC20Basic.sol",
          "file": "./ERC20Basic.sol",
          "scope": 13542,
          "symbolAliases": [
            null
          ],
          "unitAlias": ""
        },
        "id": 13501,
        "name": "ImportDirective",
        "src": "26:26:39"
      },
      {
        "attributes": {
          "contractDependencies": [
            13573
          ],
          "contractKind": "contract",
          "documentation": "@title ERC20 interface\n@dev see https://github.com/ethereum/EIPs/issues/20",
          "fullyImplemented": false,
          "linearizedBaseContracts": [
            13541,
            13573
          ],
          "name": "ERC20",
          "scope": 13542
        },
        "children": [
          {
            "attributes": {
              "arguments": [
                null
              ]
            },
            "children": [
              {
                "attributes": {
                  "contractScope": null,
                  "name": "ERC20Basic",
                  "referencedDeclaration": 13573,
                  "type": "contract ERC20Basic"
                },
                "id": 13502,
                "name": "UserDefinedTypeName",
                "src": "162:10:39"
              }
            ],
            "id": 13503,
            "name": "InheritanceSpecifier",
            "src": "162:10:39"
          },
          {
            "attributes": {
              "body": null,
              "constant": true,
              "implemented": false,
              "isConstructor": false,
              "modifiers": [
                null
              ],
              "name": "allowance",
              "payable": false,
              "scope": 13541,
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
                      "name": "owner",
                      "scope": 13512,
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
                        "id": 13504,
                        "name": "ElementaryTypeName",
                        "src": "196:7:39"
                      }
                    ],
                    "id": 13505,
                    "name": "VariableDeclaration",
                    "src": "196:13:39"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "spender",
                      "scope": 13512,
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
                        "id": 13506,
                        "name": "ElementaryTypeName",
                        "src": "211:7:39"
                      }
                    ],
                    "id": 13507,
                    "name": "VariableDeclaration",
                    "src": "211:15:39"
                  }
                ],
                "id": 13508,
                "name": "ParameterList",
                "src": "195:32:39"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "",
                      "scope": 13512,
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
                        "id": 13509,
                        "name": "ElementaryTypeName",
                        "src": "249:7:39"
                      }
                    ],
                    "id": 13510,
                    "name": "VariableDeclaration",
                    "src": "249:7:39"
                  }
                ],
                "id": 13511,
                "name": "ParameterList",
                "src": "248:9:39"
              }
            ],
            "id": 13512,
            "name": "FunctionDefinition",
            "src": "177:81:39"
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
              "name": "transferFrom",
              "payable": false,
              "scope": 13541,
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
                      "name": "from",
                      "scope": 13523,
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
                        "id": 13513,
                        "name": "ElementaryTypeName",
                        "src": "283:7:39"
                      }
                    ],
                    "id": 13514,
                    "name": "VariableDeclaration",
                    "src": "283:12:39"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "to",
                      "scope": 13523,
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
                        "id": 13515,
                        "name": "ElementaryTypeName",
                        "src": "297:7:39"
                      }
                    ],
                    "id": 13516,
                    "name": "VariableDeclaration",
                    "src": "297:10:39"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "value",
                      "scope": 13523,
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
                        "id": 13517,
                        "name": "ElementaryTypeName",
                        "src": "309:7:39"
                      }
                    ],
                    "id": 13518,
                    "name": "VariableDeclaration",
                    "src": "309:13:39"
                  }
                ],
                "id": 13519,
                "name": "ParameterList",
                "src": "282:41:39"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "",
                      "scope": 13523,
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
                        "id": 13520,
                        "name": "ElementaryTypeName",
                        "src": "340:4:39"
                      }
                    ],
                    "id": 13521,
                    "name": "VariableDeclaration",
                    "src": "340:4:39"
                  }
                ],
                "id": 13522,
                "name": "ParameterList",
                "src": "339:6:39"
              }
            ],
            "id": 13523,
            "name": "FunctionDefinition",
            "src": "261:85:39"
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
              "name": "approve",
              "payable": false,
              "scope": 13541,
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
                      "name": "spender",
                      "scope": 13532,
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
                        "id": 13524,
                        "name": "ElementaryTypeName",
                        "src": "366:7:39"
                      }
                    ],
                    "id": 13525,
                    "name": "VariableDeclaration",
                    "src": "366:15:39"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "value",
                      "scope": 13532,
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
                        "id": 13526,
                        "name": "ElementaryTypeName",
                        "src": "383:7:39"
                      }
                    ],
                    "id": 13527,
                    "name": "VariableDeclaration",
                    "src": "383:13:39"
                  }
                ],
                "id": 13528,
                "name": "ParameterList",
                "src": "365:32:39"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "",
                      "scope": 13532,
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
                        "id": 13529,
                        "name": "ElementaryTypeName",
                        "src": "414:4:39"
                      }
                    ],
                    "id": 13530,
                    "name": "VariableDeclaration",
                    "src": "414:4:39"
                  }
                ],
                "id": 13531,
                "name": "ParameterList",
                "src": "413:6:39"
              }
            ],
            "id": 13532,
            "name": "FunctionDefinition",
            "src": "349:71:39"
          },
          {
            "attributes": {
              "anonymous": false,
              "name": "Approval"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "indexed": true,
                      "name": "owner",
                      "scope": 13540,
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
                        "id": 13533,
                        "name": "ElementaryTypeName",
                        "src": "438:7:39"
                      }
                    ],
                    "id": 13534,
                    "name": "VariableDeclaration",
                    "src": "438:21:39"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "indexed": true,
                      "name": "spender",
                      "scope": 13540,
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
                        "id": 13535,
                        "name": "ElementaryTypeName",
                        "src": "461:7:39"
                      }
                    ],
                    "id": 13536,
                    "name": "VariableDeclaration",
                    "src": "461:23:39"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "indexed": false,
                      "name": "value",
                      "scope": 13540,
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
                        "id": 13537,
                        "name": "ElementaryTypeName",
                        "src": "486:7:39"
                      }
                    ],
                    "id": 13538,
                    "name": "VariableDeclaration",
                    "src": "486:13:39"
                  }
                ],
                "id": 13539,
                "name": "ParameterList",
                "src": "437:63:39"
              }
            ],
            "id": 13540,
            "name": "EventDefinition",
            "src": "423:78:39"
          }
        ],
        "id": 13541,
        "name": "ContractDefinition",
        "src": "144:359:39"
      }
    ],
    "id": 13542,
    "name": "SourceUnit",
    "src": "0:504:39"
  },
  "compiler": {
    "name": "solc",
    "version": "0.4.18+commit.9cf6e910.Emscripten.clang"
  },
  "networks": {},
  "schemaVersion": "1.0.1",
  "updatedAt": "2018-08-31T00:08:12.314Z"
}