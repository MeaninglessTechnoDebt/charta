export const ERC721Basic = 
{
  "contractName": "ERC721Basic",
  "abi": [
    {
      "constant": true,
      "inputs": [
        {
          "name": "_tokenId",
          "type": "uint256"
        }
      ],
      "name": "getApproved",
      "outputs": [
        {
          "name": "_operator",
          "type": "address"
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
          "name": "_to",
          "type": "address"
        },
        {
          "name": "_tokenId",
          "type": "uint256"
        }
      ],
      "name": "approve",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_from",
          "type": "address"
        },
        {
          "name": "_to",
          "type": "address"
        },
        {
          "name": "_tokenId",
          "type": "uint256"
        }
      ],
      "name": "transferFrom",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_from",
          "type": "address"
        },
        {
          "name": "_to",
          "type": "address"
        },
        {
          "name": "_tokenId",
          "type": "uint256"
        }
      ],
      "name": "safeTransferFrom",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "_tokenId",
          "type": "uint256"
        }
      ],
      "name": "exists",
      "outputs": [
        {
          "name": "_exists",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "_tokenId",
          "type": "uint256"
        }
      ],
      "name": "ownerOf",
      "outputs": [
        {
          "name": "_owner",
          "type": "address"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "_owner",
          "type": "address"
        }
      ],
      "name": "balanceOf",
      "outputs": [
        {
          "name": "_balance",
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
          "name": "_operator",
          "type": "address"
        },
        {
          "name": "_approved",
          "type": "bool"
        }
      ],
      "name": "setApprovalForAll",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_from",
          "type": "address"
        },
        {
          "name": "_to",
          "type": "address"
        },
        {
          "name": "_tokenId",
          "type": "uint256"
        },
        {
          "name": "_data",
          "type": "bytes"
        }
      ],
      "name": "safeTransferFrom",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "_owner",
          "type": "address"
        },
        {
          "name": "_operator",
          "type": "address"
        }
      ],
      "name": "isApprovedForAll",
      "outputs": [
        {
          "name": "",
          "type": "bool"
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
          "name": "_from",
          "type": "address"
        },
        {
          "indexed": true,
          "name": "_to",
          "type": "address"
        },
        {
          "indexed": false,
          "name": "_tokenId",
          "type": "uint256"
        }
      ],
      "name": "Transfer",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "name": "_owner",
          "type": "address"
        },
        {
          "indexed": true,
          "name": "_approved",
          "type": "address"
        },
        {
          "indexed": false,
          "name": "_tokenId",
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
          "name": "_owner",
          "type": "address"
        },
        {
          "indexed": true,
          "name": "_operator",
          "type": "address"
        },
        {
          "indexed": false,
          "name": "_approved",
          "type": "bool"
        }
      ],
      "name": "ApprovalForAll",
      "type": "event"
    }
  ],
  "bytecode": "0x",
  "deployedBytecode": "0x",
  "sourceMap": "",
  "deployedSourceMap": "",
  "source": "pragma solidity ^0.4.18;\n\n/**\n * @title ERC721 Non-Fungible Token Standard basic interface\n * @dev see https://github.com/ethereum/EIPs/blob/master/EIPS/eip-721.md\n */\ncontract ERC721Basic {\n  event Transfer(address indexed _from, address indexed _to, uint256 _tokenId);\n  event Approval(address indexed _owner, address indexed _approved, uint256 _tokenId);\n  event ApprovalForAll(address indexed _owner, address indexed _operator, bool _approved);  \n\n  function balanceOf(address _owner) public view returns (uint256 _balance);\n  function ownerOf(uint256 _tokenId) public view returns (address _owner);\n  function exists(uint256 _tokenId) public view returns (bool _exists);\n  \n  function approve(address _to, uint256 _tokenId) public;\n  function getApproved(uint256 _tokenId) public view returns (address _operator);\n  \n  function setApprovalForAll(address _operator, bool _approved) public;\n  function isApprovedForAll(address _owner, address _operator) public view returns (bool);\n\n  function transferFrom(address _from, address _to, uint256 _tokenId) public;\n  function safeTransferFrom(address _from, address _to, uint256 _tokenId) public;  \n  function safeTransferFrom(address _from, address _to, uint256 _tokenId, bytes _data) public;\n}\n",
  "sourcePath": "zeppelin-solidity/contracts/token/ERC721/ERC721Basic.sol",
  "ast": {
    "attributes": {
      "absolutePath": "zeppelin-solidity/contracts/token/ERC721/ERC721Basic.sol",
      "exportedSymbols": {
        "ERC721Basic": [
          14101
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
        "id": 13996,
        "name": "PragmaDirective",
        "src": "0:24:45"
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
          "documentation": "@title ERC721 Non-Fungible Token Standard basic interface\n@dev see https://github.com/ethereum/EIPs/blob/master/EIPS/eip-721.md",
          "fullyImplemented": false,
          "linearizedBaseContracts": [
            14101
          ],
          "name": "ERC721Basic",
          "scope": 14102
        },
        "children": [
          {
            "attributes": {
              "anonymous": false,
              "name": "Transfer"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "indexed": true,
                      "name": "_from",
                      "scope": 14004,
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
                        "id": 13997,
                        "name": "ElementaryTypeName",
                        "src": "208:7:45"
                      }
                    ],
                    "id": 13998,
                    "name": "VariableDeclaration",
                    "src": "208:21:45"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "indexed": true,
                      "name": "_to",
                      "scope": 14004,
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
                        "id": 13999,
                        "name": "ElementaryTypeName",
                        "src": "231:7:45"
                      }
                    ],
                    "id": 14000,
                    "name": "VariableDeclaration",
                    "src": "231:19:45"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "indexed": false,
                      "name": "_tokenId",
                      "scope": 14004,
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
                        "id": 14001,
                        "name": "ElementaryTypeName",
                        "src": "252:7:45"
                      }
                    ],
                    "id": 14002,
                    "name": "VariableDeclaration",
                    "src": "252:16:45"
                  }
                ],
                "id": 14003,
                "name": "ParameterList",
                "src": "207:62:45"
              }
            ],
            "id": 14004,
            "name": "EventDefinition",
            "src": "193:77:45"
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
                      "name": "_owner",
                      "scope": 14012,
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
                        "id": 14005,
                        "name": "ElementaryTypeName",
                        "src": "288:7:45"
                      }
                    ],
                    "id": 14006,
                    "name": "VariableDeclaration",
                    "src": "288:22:45"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "indexed": true,
                      "name": "_approved",
                      "scope": 14012,
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
                        "id": 14007,
                        "name": "ElementaryTypeName",
                        "src": "312:7:45"
                      }
                    ],
                    "id": 14008,
                    "name": "VariableDeclaration",
                    "src": "312:25:45"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "indexed": false,
                      "name": "_tokenId",
                      "scope": 14012,
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
                        "id": 14009,
                        "name": "ElementaryTypeName",
                        "src": "339:7:45"
                      }
                    ],
                    "id": 14010,
                    "name": "VariableDeclaration",
                    "src": "339:16:45"
                  }
                ],
                "id": 14011,
                "name": "ParameterList",
                "src": "287:69:45"
              }
            ],
            "id": 14012,
            "name": "EventDefinition",
            "src": "273:84:45"
          },
          {
            "attributes": {
              "anonymous": false,
              "name": "ApprovalForAll"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "indexed": true,
                      "name": "_owner",
                      "scope": 14020,
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
                        "id": 14013,
                        "name": "ElementaryTypeName",
                        "src": "381:7:45"
                      }
                    ],
                    "id": 14014,
                    "name": "VariableDeclaration",
                    "src": "381:22:45"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "indexed": true,
                      "name": "_operator",
                      "scope": 14020,
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
                        "id": 14015,
                        "name": "ElementaryTypeName",
                        "src": "405:7:45"
                      }
                    ],
                    "id": 14016,
                    "name": "VariableDeclaration",
                    "src": "405:25:45"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "indexed": false,
                      "name": "_approved",
                      "scope": 14020,
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
                        "id": 14017,
                        "name": "ElementaryTypeName",
                        "src": "432:4:45"
                      }
                    ],
                    "id": 14018,
                    "name": "VariableDeclaration",
                    "src": "432:14:45"
                  }
                ],
                "id": 14019,
                "name": "ParameterList",
                "src": "380:67:45"
              }
            ],
            "id": 14020,
            "name": "EventDefinition",
            "src": "360:88:45"
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
              "name": "balanceOf",
              "payable": false,
              "scope": 14101,
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
                      "name": "_owner",
                      "scope": 14027,
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
                        "id": 14021,
                        "name": "ElementaryTypeName",
                        "src": "473:7:45"
                      }
                    ],
                    "id": 14022,
                    "name": "VariableDeclaration",
                    "src": "473:14:45"
                  }
                ],
                "id": 14023,
                "name": "ParameterList",
                "src": "472:16:45"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_balance",
                      "scope": 14027,
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
                        "id": 14024,
                        "name": "ElementaryTypeName",
                        "src": "510:7:45"
                      }
                    ],
                    "id": 14025,
                    "name": "VariableDeclaration",
                    "src": "510:16:45"
                  }
                ],
                "id": 14026,
                "name": "ParameterList",
                "src": "509:18:45"
              }
            ],
            "id": 14027,
            "name": "FunctionDefinition",
            "src": "454:74:45"
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
              "name": "ownerOf",
              "payable": false,
              "scope": 14101,
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
                      "name": "_tokenId",
                      "scope": 14034,
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
                        "id": 14028,
                        "name": "ElementaryTypeName",
                        "src": "548:7:45"
                      }
                    ],
                    "id": 14029,
                    "name": "VariableDeclaration",
                    "src": "548:16:45"
                  }
                ],
                "id": 14030,
                "name": "ParameterList",
                "src": "547:18:45"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_owner",
                      "scope": 14034,
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
                        "id": 14031,
                        "name": "ElementaryTypeName",
                        "src": "587:7:45"
                      }
                    ],
                    "id": 14032,
                    "name": "VariableDeclaration",
                    "src": "587:14:45"
                  }
                ],
                "id": 14033,
                "name": "ParameterList",
                "src": "586:16:45"
              }
            ],
            "id": 14034,
            "name": "FunctionDefinition",
            "src": "531:72:45"
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
              "name": "exists",
              "payable": false,
              "scope": 14101,
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
                      "name": "_tokenId",
                      "scope": 14041,
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
                        "id": 14035,
                        "name": "ElementaryTypeName",
                        "src": "622:7:45"
                      }
                    ],
                    "id": 14036,
                    "name": "VariableDeclaration",
                    "src": "622:16:45"
                  }
                ],
                "id": 14037,
                "name": "ParameterList",
                "src": "621:18:45"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_exists",
                      "scope": 14041,
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
                        "id": 14038,
                        "name": "ElementaryTypeName",
                        "src": "661:4:45"
                      }
                    ],
                    "id": 14039,
                    "name": "VariableDeclaration",
                    "src": "661:12:45"
                  }
                ],
                "id": 14040,
                "name": "ParameterList",
                "src": "660:14:45"
              }
            ],
            "id": 14041,
            "name": "FunctionDefinition",
            "src": "606:69:45"
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
              "scope": 14101,
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
                      "name": "_to",
                      "scope": 14048,
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
                        "id": 14042,
                        "name": "ElementaryTypeName",
                        "src": "698:7:45"
                      }
                    ],
                    "id": 14043,
                    "name": "VariableDeclaration",
                    "src": "698:11:45"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_tokenId",
                      "scope": 14048,
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
                        "id": 14044,
                        "name": "ElementaryTypeName",
                        "src": "711:7:45"
                      }
                    ],
                    "id": 14045,
                    "name": "VariableDeclaration",
                    "src": "711:16:45"
                  }
                ],
                "id": 14046,
                "name": "ParameterList",
                "src": "697:31:45"
              },
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 14047,
                "name": "ParameterList",
                "src": "735:0:45"
              }
            ],
            "id": 14048,
            "name": "FunctionDefinition",
            "src": "681:55:45"
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
              "name": "getApproved",
              "payable": false,
              "scope": 14101,
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
                      "name": "_tokenId",
                      "scope": 14055,
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
                        "id": 14049,
                        "name": "ElementaryTypeName",
                        "src": "760:7:45"
                      }
                    ],
                    "id": 14050,
                    "name": "VariableDeclaration",
                    "src": "760:16:45"
                  }
                ],
                "id": 14051,
                "name": "ParameterList",
                "src": "759:18:45"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_operator",
                      "scope": 14055,
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
                        "id": 14052,
                        "name": "ElementaryTypeName",
                        "src": "799:7:45"
                      }
                    ],
                    "id": 14053,
                    "name": "VariableDeclaration",
                    "src": "799:17:45"
                  }
                ],
                "id": 14054,
                "name": "ParameterList",
                "src": "798:19:45"
              }
            ],
            "id": 14055,
            "name": "FunctionDefinition",
            "src": "739:79:45"
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
              "name": "setApprovalForAll",
              "payable": false,
              "scope": 14101,
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
                      "name": "_operator",
                      "scope": 14062,
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
                        "id": 14056,
                        "name": "ElementaryTypeName",
                        "src": "851:7:45"
                      }
                    ],
                    "id": 14057,
                    "name": "VariableDeclaration",
                    "src": "851:17:45"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_approved",
                      "scope": 14062,
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
                        "id": 14058,
                        "name": "ElementaryTypeName",
                        "src": "870:4:45"
                      }
                    ],
                    "id": 14059,
                    "name": "VariableDeclaration",
                    "src": "870:14:45"
                  }
                ],
                "id": 14060,
                "name": "ParameterList",
                "src": "850:35:45"
              },
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 14061,
                "name": "ParameterList",
                "src": "892:0:45"
              }
            ],
            "id": 14062,
            "name": "FunctionDefinition",
            "src": "824:69:45"
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
              "name": "isApprovedForAll",
              "payable": false,
              "scope": 14101,
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
                      "name": "_owner",
                      "scope": 14071,
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
                        "id": 14063,
                        "name": "ElementaryTypeName",
                        "src": "922:7:45"
                      }
                    ],
                    "id": 14064,
                    "name": "VariableDeclaration",
                    "src": "922:14:45"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_operator",
                      "scope": 14071,
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
                        "id": 14065,
                        "name": "ElementaryTypeName",
                        "src": "938:7:45"
                      }
                    ],
                    "id": 14066,
                    "name": "VariableDeclaration",
                    "src": "938:17:45"
                  }
                ],
                "id": 14067,
                "name": "ParameterList",
                "src": "921:35:45"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "",
                      "scope": 14071,
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
                        "id": 14068,
                        "name": "ElementaryTypeName",
                        "src": "978:4:45"
                      }
                    ],
                    "id": 14069,
                    "name": "VariableDeclaration",
                    "src": "978:4:45"
                  }
                ],
                "id": 14070,
                "name": "ParameterList",
                "src": "977:6:45"
              }
            ],
            "id": 14071,
            "name": "FunctionDefinition",
            "src": "896:88:45"
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
              "scope": 14101,
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
                      "name": "_from",
                      "scope": 14080,
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
                        "id": 14072,
                        "name": "ElementaryTypeName",
                        "src": "1010:7:45"
                      }
                    ],
                    "id": 14073,
                    "name": "VariableDeclaration",
                    "src": "1010:13:45"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_to",
                      "scope": 14080,
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
                        "id": 14074,
                        "name": "ElementaryTypeName",
                        "src": "1025:7:45"
                      }
                    ],
                    "id": 14075,
                    "name": "VariableDeclaration",
                    "src": "1025:11:45"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_tokenId",
                      "scope": 14080,
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
                        "id": 14076,
                        "name": "ElementaryTypeName",
                        "src": "1038:7:45"
                      }
                    ],
                    "id": 14077,
                    "name": "VariableDeclaration",
                    "src": "1038:16:45"
                  }
                ],
                "id": 14078,
                "name": "ParameterList",
                "src": "1009:46:45"
              },
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 14079,
                "name": "ParameterList",
                "src": "1062:0:45"
              }
            ],
            "id": 14080,
            "name": "FunctionDefinition",
            "src": "988:75:45"
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
              "name": "safeTransferFrom",
              "payable": false,
              "scope": 14101,
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
                      "name": "_from",
                      "scope": 14089,
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
                        "id": 14081,
                        "name": "ElementaryTypeName",
                        "src": "1092:7:45"
                      }
                    ],
                    "id": 14082,
                    "name": "VariableDeclaration",
                    "src": "1092:13:45"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_to",
                      "scope": 14089,
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
                        "id": 14083,
                        "name": "ElementaryTypeName",
                        "src": "1107:7:45"
                      }
                    ],
                    "id": 14084,
                    "name": "VariableDeclaration",
                    "src": "1107:11:45"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_tokenId",
                      "scope": 14089,
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
                        "id": 14085,
                        "name": "ElementaryTypeName",
                        "src": "1120:7:45"
                      }
                    ],
                    "id": 14086,
                    "name": "VariableDeclaration",
                    "src": "1120:16:45"
                  }
                ],
                "id": 14087,
                "name": "ParameterList",
                "src": "1091:46:45"
              },
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 14088,
                "name": "ParameterList",
                "src": "1144:0:45"
              }
            ],
            "id": 14089,
            "name": "FunctionDefinition",
            "src": "1066:79:45"
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
              "name": "safeTransferFrom",
              "payable": false,
              "scope": 14101,
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
                      "name": "_from",
                      "scope": 14100,
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
                        "id": 14090,
                        "name": "ElementaryTypeName",
                        "src": "1176:7:45"
                      }
                    ],
                    "id": 14091,
                    "name": "VariableDeclaration",
                    "src": "1176:13:45"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_to",
                      "scope": 14100,
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
                        "id": 14092,
                        "name": "ElementaryTypeName",
                        "src": "1191:7:45"
                      }
                    ],
                    "id": 14093,
                    "name": "VariableDeclaration",
                    "src": "1191:11:45"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_tokenId",
                      "scope": 14100,
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
                        "id": 14094,
                        "name": "ElementaryTypeName",
                        "src": "1204:7:45"
                      }
                    ],
                    "id": 14095,
                    "name": "VariableDeclaration",
                    "src": "1204:16:45"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_data",
                      "scope": 14100,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "bytes memory",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "bytes",
                          "type": "bytes storage pointer"
                        },
                        "id": 14096,
                        "name": "ElementaryTypeName",
                        "src": "1222:5:45"
                      }
                    ],
                    "id": 14097,
                    "name": "VariableDeclaration",
                    "src": "1222:11:45"
                  }
                ],
                "id": 14098,
                "name": "ParameterList",
                "src": "1175:59:45"
              },
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 14099,
                "name": "ParameterList",
                "src": "1241:0:45"
              }
            ],
            "id": 14100,
            "name": "FunctionDefinition",
            "src": "1150:92:45"
          }
        ],
        "id": 14101,
        "name": "ContractDefinition",
        "src": "168:1076:45"
      }
    ],
    "id": 14102,
    "name": "SourceUnit",
    "src": "0:1245:45"
  },
  "compiler": {
    "name": "solc",
    "version": "0.4.18+commit.9cf6e910.Emscripten.clang"
  },
  "networks": {},
  "schemaVersion": "1.0.1",
  "updatedAt": "2018-09-07T18:09:37.715Z"
}