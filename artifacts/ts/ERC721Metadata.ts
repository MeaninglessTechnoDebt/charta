export const ERC721Metadata = 
{
  "contractName": "ERC721Metadata",
  "abi": [
    {
      "constant": true,
      "inputs": [],
      "name": "name",
      "outputs": [
        {
          "name": "_name",
          "type": "string"
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
      "constant": true,
      "inputs": [],
      "name": "symbol",
      "outputs": [
        {
          "name": "_symbol",
          "type": "string"
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
          "name": "_tokenId",
          "type": "uint256"
        }
      ],
      "name": "tokenURI",
      "outputs": [
        {
          "name": "",
          "type": "string"
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
  "source": "pragma solidity ^0.4.18;\n\nimport \"./ERC721Basic.sol\";\n\n/**\n * @title ERC-721 Non-Fungible Token Standard, optional enumeration extension\n * @dev See https://github.com/ethereum/EIPs/blob/master/EIPS/eip-721.md\n */\ncontract ERC721Enumerable is ERC721Basic {\n  function totalSupply() public view returns (uint256);\n  function tokenOfOwnerByIndex(address _owner, uint256 _index) public view returns (uint256 _tokenId);\n  function tokenByIndex(uint256 _index) public view returns (uint256);\n}\n\n/**\n * @title ERC-721 Non-Fungible Token Standard, optional metadata extension\n * @dev See https://github.com/ethereum/EIPs/blob/master/EIPS/eip-721.md\n */\ncontract ERC721Metadata is ERC721Basic {\n  function name() public view returns (string _name);\n  function symbol() public view returns (string _symbol);\n  function tokenURI(uint256 _tokenId) public view returns (string);\n}\n\n/**\n * @title ERC-721 Non-Fungible Token Standard, full implementation interface\n * @dev See https://github.com/ethereum/EIPs/blob/master/EIPS/eip-721.md\n */\ncontract ERC721 is ERC721Basic, ERC721Enumerable, ERC721Metadata {\n}\n",
  "sourcePath": "zeppelin-solidity/contracts/token/ERC721/ERC721.sol",
  "ast": {
    "attributes": {
      "absolutePath": "zeppelin-solidity/contracts/token/ERC721/ERC721.sol",
      "exportedSymbols": {
        "ERC721": [
          9381
        ],
        "ERC721Enumerable": [
          9354
        ],
        "ERC721Metadata": [
          9374
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
        "id": 9329,
        "name": "PragmaDirective",
        "src": "0:24:39"
      },
      {
        "attributes": {
          "SourceUnit": 9489,
          "absolutePath": "zeppelin-solidity/contracts/token/ERC721/ERC721Basic.sol",
          "file": "./ERC721Basic.sol",
          "scope": 9382,
          "symbolAliases": [
            null
          ],
          "unitAlias": ""
        },
        "id": 9330,
        "name": "ImportDirective",
        "src": "26:27:39"
      },
      {
        "attributes": {
          "contractDependencies": [
            9488
          ],
          "contractKind": "contract",
          "documentation": "@title ERC-721 Non-Fungible Token Standard, optional enumeration extension\n@dev See https://github.com/ethereum/EIPs/blob/master/EIPS/eip-721.md",
          "fullyImplemented": false,
          "linearizedBaseContracts": [
            9354,
            9488
          ],
          "name": "ERC721Enumerable",
          "scope": 9382
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
                  "name": "ERC721Basic",
                  "referencedDeclaration": 9488,
                  "type": "contract ERC721Basic"
                },
                "id": 9331,
                "name": "UserDefinedTypeName",
                "src": "243:11:39"
              }
            ],
            "id": 9332,
            "name": "InheritanceSpecifier",
            "src": "243:11:39"
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
              "name": "totalSupply",
              "payable": false,
              "scope": 9354,
              "stateMutability": "view",
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
                "id": 9333,
                "name": "ParameterList",
                "src": "279:2:39"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "",
                      "scope": 9337,
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
                        "id": 9334,
                        "name": "ElementaryTypeName",
                        "src": "303:7:39"
                      }
                    ],
                    "id": 9335,
                    "name": "VariableDeclaration",
                    "src": "303:7:39"
                  }
                ],
                "id": 9336,
                "name": "ParameterList",
                "src": "302:9:39"
              }
            ],
            "id": 9337,
            "name": "FunctionDefinition",
            "src": "259:53:39"
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
              "name": "tokenOfOwnerByIndex",
              "payable": false,
              "scope": 9354,
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
                      "scope": 9346,
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
                        "id": 9338,
                        "name": "ElementaryTypeName",
                        "src": "344:7:39"
                      }
                    ],
                    "id": 9339,
                    "name": "VariableDeclaration",
                    "src": "344:14:39"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_index",
                      "scope": 9346,
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
                        "id": 9340,
                        "name": "ElementaryTypeName",
                        "src": "360:7:39"
                      }
                    ],
                    "id": 9341,
                    "name": "VariableDeclaration",
                    "src": "360:14:39"
                  }
                ],
                "id": 9342,
                "name": "ParameterList",
                "src": "343:32:39"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_tokenId",
                      "scope": 9346,
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
                        "id": 9343,
                        "name": "ElementaryTypeName",
                        "src": "397:7:39"
                      }
                    ],
                    "id": 9344,
                    "name": "VariableDeclaration",
                    "src": "397:16:39"
                  }
                ],
                "id": 9345,
                "name": "ParameterList",
                "src": "396:18:39"
              }
            ],
            "id": 9346,
            "name": "FunctionDefinition",
            "src": "315:100:39"
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
              "name": "tokenByIndex",
              "payable": false,
              "scope": 9354,
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
                      "name": "_index",
                      "scope": 9353,
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
                        "id": 9347,
                        "name": "ElementaryTypeName",
                        "src": "440:7:39"
                      }
                    ],
                    "id": 9348,
                    "name": "VariableDeclaration",
                    "src": "440:14:39"
                  }
                ],
                "id": 9349,
                "name": "ParameterList",
                "src": "439:16:39"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "",
                      "scope": 9353,
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
                        "id": 9350,
                        "name": "ElementaryTypeName",
                        "src": "477:7:39"
                      }
                    ],
                    "id": 9351,
                    "name": "VariableDeclaration",
                    "src": "477:7:39"
                  }
                ],
                "id": 9352,
                "name": "ParameterList",
                "src": "476:9:39"
              }
            ],
            "id": 9353,
            "name": "FunctionDefinition",
            "src": "418:68:39"
          }
        ],
        "id": 9354,
        "name": "ContractDefinition",
        "src": "214:274:39"
      },
      {
        "attributes": {
          "contractDependencies": [
            9488
          ],
          "contractKind": "contract",
          "documentation": "@title ERC-721 Non-Fungible Token Standard, optional metadata extension\n@dev See https://github.com/ethereum/EIPs/blob/master/EIPS/eip-721.md",
          "fullyImplemented": false,
          "linearizedBaseContracts": [
            9374,
            9488
          ],
          "name": "ERC721Metadata",
          "scope": 9382
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
                  "name": "ERC721Basic",
                  "referencedDeclaration": 9488,
                  "type": "contract ERC721Basic"
                },
                "id": 9355,
                "name": "UserDefinedTypeName",
                "src": "673:11:39"
              }
            ],
            "id": 9356,
            "name": "InheritanceSpecifier",
            "src": "673:11:39"
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
              "name": "name",
              "payable": false,
              "scope": 9374,
              "stateMutability": "view",
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
                "id": 9357,
                "name": "ParameterList",
                "src": "702:2:39"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_name",
                      "scope": 9361,
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
                        "id": 9358,
                        "name": "ElementaryTypeName",
                        "src": "726:6:39"
                      }
                    ],
                    "id": 9359,
                    "name": "VariableDeclaration",
                    "src": "726:12:39"
                  }
                ],
                "id": 9360,
                "name": "ParameterList",
                "src": "725:14:39"
              }
            ],
            "id": 9361,
            "name": "FunctionDefinition",
            "src": "689:51:39"
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
              "name": "symbol",
              "payable": false,
              "scope": 9374,
              "stateMutability": "view",
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
                "id": 9362,
                "name": "ParameterList",
                "src": "758:2:39"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_symbol",
                      "scope": 9366,
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
                        "id": 9363,
                        "name": "ElementaryTypeName",
                        "src": "782:6:39"
                      }
                    ],
                    "id": 9364,
                    "name": "VariableDeclaration",
                    "src": "782:14:39"
                  }
                ],
                "id": 9365,
                "name": "ParameterList",
                "src": "781:16:39"
              }
            ],
            "id": 9366,
            "name": "FunctionDefinition",
            "src": "743:55:39"
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
              "name": "tokenURI",
              "payable": false,
              "scope": 9374,
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
                      "scope": 9373,
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
                        "id": 9367,
                        "name": "ElementaryTypeName",
                        "src": "819:7:39"
                      }
                    ],
                    "id": 9368,
                    "name": "VariableDeclaration",
                    "src": "819:16:39"
                  }
                ],
                "id": 9369,
                "name": "ParameterList",
                "src": "818:18:39"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "",
                      "scope": 9373,
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
                        "id": 9370,
                        "name": "ElementaryTypeName",
                        "src": "858:6:39"
                      }
                    ],
                    "id": 9371,
                    "name": "VariableDeclaration",
                    "src": "858:6:39"
                  }
                ],
                "id": 9372,
                "name": "ParameterList",
                "src": "857:8:39"
              }
            ],
            "id": 9373,
            "name": "FunctionDefinition",
            "src": "801:65:39"
          }
        ],
        "id": 9374,
        "name": "ContractDefinition",
        "src": "646:222:39"
      },
      {
        "attributes": {
          "contractDependencies": [
            9354,
            9374,
            9488
          ],
          "contractKind": "contract",
          "documentation": "@title ERC-721 Non-Fungible Token Standard, full implementation interface\n@dev See https://github.com/ethereum/EIPs/blob/master/EIPS/eip-721.md",
          "fullyImplemented": false,
          "linearizedBaseContracts": [
            9381,
            9374,
            9354,
            9488
          ],
          "name": "ERC721",
          "nodes": [
            null
          ],
          "scope": 9382
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
                  "name": "ERC721Basic",
                  "referencedDeclaration": 9488,
                  "type": "contract ERC721Basic"
                },
                "id": 9375,
                "name": "UserDefinedTypeName",
                "src": "1047:11:39"
              }
            ],
            "id": 9376,
            "name": "InheritanceSpecifier",
            "src": "1047:11:39"
          },
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
                  "name": "ERC721Enumerable",
                  "referencedDeclaration": 9354,
                  "type": "contract ERC721Enumerable"
                },
                "id": 9377,
                "name": "UserDefinedTypeName",
                "src": "1060:16:39"
              }
            ],
            "id": 9378,
            "name": "InheritanceSpecifier",
            "src": "1060:16:39"
          },
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
                  "name": "ERC721Metadata",
                  "referencedDeclaration": 9374,
                  "type": "contract ERC721Metadata"
                },
                "id": 9379,
                "name": "UserDefinedTypeName",
                "src": "1078:14:39"
              }
            ],
            "id": 9380,
            "name": "InheritanceSpecifier",
            "src": "1078:14:39"
          }
        ],
        "id": 9381,
        "name": "ContractDefinition",
        "src": "1028:68:39"
      }
    ],
    "id": 9382,
    "name": "SourceUnit",
    "src": "0:1097:39"
  },
  "compiler": {
    "name": "solc",
    "version": "0.4.18+commit.9cf6e910.Emscripten.clang"
  },
  "networks": {},
  "schemaVersion": "1.0.1",
  "updatedAt": "2018-05-21T18:00:40.706Z"
}