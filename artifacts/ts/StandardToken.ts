export const StandardToken = 
{
  "contractName": "StandardToken",
  "abi": [
    {
      "constant": false,
      "inputs": [
        {
          "name": "_spender",
          "type": "address"
        },
        {
          "name": "_value",
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
          "name": "_from",
          "type": "address"
        },
        {
          "name": "_to",
          "type": "address"
        },
        {
          "name": "_value",
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
      "constant": false,
      "inputs": [
        {
          "name": "_spender",
          "type": "address"
        },
        {
          "name": "_subtractedValue",
          "type": "uint256"
        }
      ],
      "name": "decreaseApproval",
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
          "name": "_owner",
          "type": "address"
        }
      ],
      "name": "balanceOf",
      "outputs": [
        {
          "name": "balance",
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
          "name": "_to",
          "type": "address"
        },
        {
          "name": "_value",
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
      "constant": false,
      "inputs": [
        {
          "name": "_spender",
          "type": "address"
        },
        {
          "name": "_addedValue",
          "type": "uint256"
        }
      ],
      "name": "increaseApproval",
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
          "name": "_owner",
          "type": "address"
        },
        {
          "name": "_spender",
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
  "bytecode": "0x6060604052341561000f57600080fd5b610fea8061001e6000396000f30060606040526004361061008e576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff168063095ea7b31461009357806318160ddd146100ed57806323b872dd14610116578063661884631461018f57806370a08231146101e9578063a9059cbb14610236578063d73dd62314610290578063dd62ed3e146102ea575b600080fd5b341561009e57600080fd5b6100d3600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091908035906020019091905050610356565b604051808215151515815260200191505060405180910390f35b34156100f857600080fd5b610100610448565b6040518082815260200191505060405180910390f35b341561012157600080fd5b610175600480803573ffffffffffffffffffffffffffffffffffffffff1690602001909190803573ffffffffffffffffffffffffffffffffffffffff16906020019091908035906020019091905050610452565b604051808215151515815260200191505060405180910390f35b341561019a57600080fd5b6101cf600480803573ffffffffffffffffffffffffffffffffffffffff1690602001909190803590602001909190505061080c565b604051808215151515815260200191505060405180910390f35b34156101f457600080fd5b610220600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091905050610a9d565b6040518082815260200191505060405180910390f35b341561024157600080fd5b610276600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091908035906020019091905050610ae5565b604051808215151515815260200191505060405180910390f35b341561029b57600080fd5b6102d0600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091908035906020019091905050610d04565b604051808215151515815260200191505060405180910390f35b34156102f557600080fd5b610340600480803573ffffffffffffffffffffffffffffffffffffffff1690602001909190803573ffffffffffffffffffffffffffffffffffffffff16906020019091905050610f00565b6040518082815260200191505060405180910390f35b600081600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508273ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925846040518082815260200191505060405180910390a36001905092915050565b6000600154905090565b60008073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415151561048f57600080fd5b6000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205482111515156104dc57600080fd5b600260008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054821115151561056757600080fd5b6105b8826000808773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054610f8790919063ffffffff16565b6000808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190555061064b826000808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054610fa090919063ffffffff16565b6000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190555061071c82600260008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054610f8790919063ffffffff16565b600260008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040518082815260200191505060405180910390a3600190509392505050565b600080600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205490508083111561091d576000600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055506109b1565b6109308382610f8790919063ffffffff16565b600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055505b8373ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008873ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546040518082815260200191505060405180910390a3600191505092915050565b60008060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b60008073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614151515610b2257600080fd5b6000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020548211151515610b6f57600080fd5b610bc0826000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054610f8790919063ffffffff16565b6000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550610c53826000808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054610fa090919063ffffffff16565b6000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508273ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040518082815260200191505060405180910390a36001905092915050565b6000610d9582600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054610fa090919063ffffffff16565b600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508273ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546040518082815260200191505060405180910390a36001905092915050565b6000600260008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905092915050565b6000828211151515610f9557fe5b818303905092915050565b6000808284019050838110151515610fb457fe5b80915050929150505600a165627a7a723058202fd2ce582d5e79b88bbbab1e1d860be60c89586d34ff94ba9b168579ea6253530029",
  "deployedBytecode": "0x60606040526004361061008e576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff168063095ea7b31461009357806318160ddd146100ed57806323b872dd14610116578063661884631461018f57806370a08231146101e9578063a9059cbb14610236578063d73dd62314610290578063dd62ed3e146102ea575b600080fd5b341561009e57600080fd5b6100d3600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091908035906020019091905050610356565b604051808215151515815260200191505060405180910390f35b34156100f857600080fd5b610100610448565b6040518082815260200191505060405180910390f35b341561012157600080fd5b610175600480803573ffffffffffffffffffffffffffffffffffffffff1690602001909190803573ffffffffffffffffffffffffffffffffffffffff16906020019091908035906020019091905050610452565b604051808215151515815260200191505060405180910390f35b341561019a57600080fd5b6101cf600480803573ffffffffffffffffffffffffffffffffffffffff1690602001909190803590602001909190505061080c565b604051808215151515815260200191505060405180910390f35b34156101f457600080fd5b610220600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091905050610a9d565b6040518082815260200191505060405180910390f35b341561024157600080fd5b610276600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091908035906020019091905050610ae5565b604051808215151515815260200191505060405180910390f35b341561029b57600080fd5b6102d0600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091908035906020019091905050610d04565b604051808215151515815260200191505060405180910390f35b34156102f557600080fd5b610340600480803573ffffffffffffffffffffffffffffffffffffffff1690602001909190803573ffffffffffffffffffffffffffffffffffffffff16906020019091905050610f00565b6040518082815260200191505060405180910390f35b600081600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508273ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925846040518082815260200191505060405180910390a36001905092915050565b6000600154905090565b60008073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415151561048f57600080fd5b6000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205482111515156104dc57600080fd5b600260008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054821115151561056757600080fd5b6105b8826000808773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054610f8790919063ffffffff16565b6000808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190555061064b826000808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054610fa090919063ffffffff16565b6000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190555061071c82600260008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054610f8790919063ffffffff16565b600260008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040518082815260200191505060405180910390a3600190509392505050565b600080600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205490508083111561091d576000600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055506109b1565b6109308382610f8790919063ffffffff16565b600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055505b8373ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008873ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546040518082815260200191505060405180910390a3600191505092915050565b60008060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b60008073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614151515610b2257600080fd5b6000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020548211151515610b6f57600080fd5b610bc0826000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054610f8790919063ffffffff16565b6000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550610c53826000808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054610fa090919063ffffffff16565b6000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508273ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040518082815260200191505060405180910390a36001905092915050565b6000610d9582600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054610fa090919063ffffffff16565b600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508273ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546040518082815260200191505060405180910390a36001905092915050565b6000600260008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905092915050565b6000828211151515610f9557fe5b818303905092915050565b6000808284019050838110151515610fb457fe5b80915050929150505600a165627a7a723058202fd2ce582d5e79b88bbbab1e1d860be60c89586d34ff94ba9b168579ea6253530029",
  "sourceMap": "344:3659:42:-;;;;;;;;;;;;;;;;;",
  "deployedSourceMap": "344:3659:42:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1798:183;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;371:83:38;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;736:439:42;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;3602:398;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1189:107:38;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;608:379;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2883:257:42;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2300:126;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1798:183;1865:4;1909:6;1877:7;:19;1885:10;1877:19;;;;;;;;;;;;;;;:29;1897:8;1877:29;;;;;;;;;;;;;;;:38;;;;1942:8;1921:38;;1930:10;1921:38;;;1952:6;1921:38;;;;;;;;;;;;;;;;;;1972:4;1965:11;;1798:183;;;;:::o;371:83:38:-;415:7;437:12;;430:19;;371:83;:::o;736:439:42:-;818:4;853:1;838:17;;:3;:17;;;;830:26;;;;;;;;880:8;:15;889:5;880:15;;;;;;;;;;;;;;;;870:6;:25;;862:34;;;;;;;;920:7;:14;928:5;920:14;;;;;;;;;;;;;;;:26;935:10;920:26;;;;;;;;;;;;;;;;910:6;:36;;902:45;;;;;;;;972:27;992:6;972:8;:15;981:5;972:15;;;;;;;;;;;;;;;;:19;;:27;;;;:::i;:::-;954:8;:15;963:5;954:15;;;;;;;;;;;;;;;:45;;;;1021:25;1039:6;1021:8;:13;1030:3;1021:13;;;;;;;;;;;;;;;;:17;;:25;;;;:::i;:::-;1005:8;:13;1014:3;1005:13;;;;;;;;;;;;;;;:41;;;;1081:38;1112:6;1081:7;:14;1089:5;1081:14;;;;;;;;;;;;;;;:26;1096:10;1081:26;;;;;;;;;;;;;;;;:30;;:38;;;;:::i;:::-;1052:7;:14;1060:5;1052:14;;;;;;;;;;;;;;;:26;1067:10;1052:26;;;;;;;;;;;;;;;:67;;;;1141:3;1125:28;;1134:5;1125:28;;;1146:6;1125:28;;;;;;;;;;;;;;;;;;1166:4;1159:11;;736:439;;;;;:::o;3602:398::-;3685:4;3697:13;3713:7;:19;3721:10;3713:19;;;;;;;;;;;;;;;:29;3733:8;3713:29;;;;;;;;;;;;;;;;3697:45;;3771:8;3752:16;:27;3748:164;;;3821:1;3789:7;:19;3797:10;3789:19;;;;;;;;;;;;;;;:29;3809:8;3789:29;;;;;;;;;;;;;;;:33;;;;3748:164;;;3875:30;3888:16;3875:8;:12;;:30;;;;:::i;:::-;3843:7;:19;3851:10;3843:19;;;;;;;;;;;;;;;:29;3863:8;3843:29;;;;;;;;;;;;;;;:62;;;;3748:164;3938:8;3917:61;;3926:10;3917:61;;;3948:7;:19;3956:10;3948:19;;;;;;;;;;;;;;;:29;3968:8;3948:29;;;;;;;;;;;;;;;;3917:61;;;;;;;;;;;;;;;;;;3991:4;3984:11;;3602:398;;;;;:::o;1189:107:38:-;1245:15;1275:8;:16;1284:6;1275:16;;;;;;;;;;;;;;;;1268:23;;1189:107;;;:::o;608:379::-;671:4;706:1;691:17;;:3;:17;;;;683:26;;;;;;;;733:8;:20;742:10;733:20;;;;;;;;;;;;;;;;723:6;:30;;715:39;;;;;;;;847:32;872:6;847:8;:20;856:10;847:20;;;;;;;;;;;;;;;;:24;;:32;;;;:::i;:::-;824:8;:20;833:10;824:20;;;;;;;;;;;;;;;:55;;;;901:25;919:6;901:8;:13;910:3;901:13;;;;;;;;;;;;;;;;:17;;:25;;;;:::i;:::-;885:8;:13;894:3;885:13;;;;;;;;;;;;;;;:41;;;;953:3;932:33;;941:10;932:33;;;958:6;932:33;;;;;;;;;;;;;;;;;;978:4;971:11;;608:379;;;;:::o;2883:257:42:-;2961:4;3005:46;3039:11;3005:7;:19;3013:10;3005:19;;;;;;;;;;;;;;;:29;3025:8;3005:29;;;;;;;;;;;;;;;;:33;;:46;;;;:::i;:::-;2973:7;:19;2981:10;2973:19;;;;;;;;;;;;;;;:29;2993:8;2973:29;;;;;;;;;;;;;;;:78;;;;3078:8;3057:61;;3066:10;3057:61;;;3088:7;:19;3096:10;3088:19;;;;;;;;;;;;;;;:29;3108:8;3088:29;;;;;;;;;;;;;;;;3057:61;;;;;;;;;;;;;;;;;;3131:4;3124:11;;2883:257;;;;:::o;2300:126::-;2374:7;2396;:15;2404:6;2396:15;;;;;;;;;;;;;;;:25;2412:8;2396:25;;;;;;;;;;;;;;;;2389:32;;2300:126;;;;:::o;835:110:36:-;893:7;920:1;915;:6;;908:14;;;;;;939:1;935;:5;928:12;;835:110;;;;:::o;1007:129::-;1065:7;1080:9;1096:1;1092;:5;1080:17;;1115:1;1110;:6;;1103:14;;;;;;1130:1;1123:8;;1007:129;;;;;:::o",
  "source": "pragma solidity ^0.4.18;\n\nimport \"./BasicToken.sol\";\nimport \"./ERC20.sol\";\n\n\n/**\n * @title Standard ERC20 token\n *\n * @dev Implementation of the basic standard token.\n * @dev https://github.com/ethereum/EIPs/issues/20\n * @dev Based on code by FirstBlood: https://github.com/Firstbloodio/token/blob/master/smart_contract/FirstBloodToken.sol\n */\ncontract StandardToken is ERC20, BasicToken {\n\n  mapping (address => mapping (address => uint256)) internal allowed;\n\n\n  /**\n   * @dev Transfer tokens from one address to another\n   * @param _from address The address which you want to send tokens from\n   * @param _to address The address which you want to transfer to\n   * @param _value uint256 the amount of tokens to be transferred\n   */\n  function transferFrom(address _from, address _to, uint256 _value) public returns (bool) {\n    require(_to != address(0));\n    require(_value <= balances[_from]);\n    require(_value <= allowed[_from][msg.sender]);\n\n    balances[_from] = balances[_from].sub(_value);\n    balances[_to] = balances[_to].add(_value);\n    allowed[_from][msg.sender] = allowed[_from][msg.sender].sub(_value);\n    Transfer(_from, _to, _value);\n    return true;\n  }\n\n  /**\n   * @dev Approve the passed address to spend the specified amount of tokens on behalf of msg.sender.\n   *\n   * Beware that changing an allowance with this method brings the risk that someone may use both the old\n   * and the new allowance by unfortunate transaction ordering. One possible solution to mitigate this\n   * race condition is to first reduce the spender's allowance to 0 and set the desired value afterwards:\n   * https://github.com/ethereum/EIPs/issues/20#issuecomment-263524729\n   * @param _spender The address which will spend the funds.\n   * @param _value The amount of tokens to be spent.\n   */\n  function approve(address _spender, uint256 _value) public returns (bool) {\n    allowed[msg.sender][_spender] = _value;\n    Approval(msg.sender, _spender, _value);\n    return true;\n  }\n\n  /**\n   * @dev Function to check the amount of tokens that an owner allowed to a spender.\n   * @param _owner address The address which owns the funds.\n   * @param _spender address The address which will spend the funds.\n   * @return A uint256 specifying the amount of tokens still available for the spender.\n   */\n  function allowance(address _owner, address _spender) public view returns (uint256) {\n    return allowed[_owner][_spender];\n  }\n\n  /**\n   * @dev Increase the amount of tokens that an owner allowed to a spender.\n   *\n   * approve should be called when allowed[_spender] == 0. To increment\n   * allowed value is better to use this function to avoid 2 calls (and wait until\n   * the first transaction is mined)\n   * From MonolithDAO Token.sol\n   * @param _spender The address which will spend the funds.\n   * @param _addedValue The amount of tokens to increase the allowance by.\n   */\n  function increaseApproval(address _spender, uint _addedValue) public returns (bool) {\n    allowed[msg.sender][_spender] = allowed[msg.sender][_spender].add(_addedValue);\n    Approval(msg.sender, _spender, allowed[msg.sender][_spender]);\n    return true;\n  }\n\n  /**\n   * @dev Decrease the amount of tokens that an owner allowed to a spender.\n   *\n   * approve should be called when allowed[_spender] == 0. To decrement\n   * allowed value is better to use this function to avoid 2 calls (and wait until\n   * the first transaction is mined)\n   * From MonolithDAO Token.sol\n   * @param _spender The address which will spend the funds.\n   * @param _subtractedValue The amount of tokens to decrease the allowance by.\n   */\n  function decreaseApproval(address _spender, uint _subtractedValue) public returns (bool) {\n    uint oldValue = allowed[msg.sender][_spender];\n    if (_subtractedValue > oldValue) {\n      allowed[msg.sender][_spender] = 0;\n    } else {\n      allowed[msg.sender][_spender] = oldValue.sub(_subtractedValue);\n    }\n    Approval(msg.sender, _spender, allowed[msg.sender][_spender]);\n    return true;\n  }\n\n}\n",
  "sourcePath": "zeppelin-solidity/contracts/token/ERC20/StandardToken.sol",
  "ast": {
    "attributes": {
      "absolutePath": "zeppelin-solidity/contracts/token/ERC20/StandardToken.sol",
      "exportedSymbols": {
        "StandardToken": [
          13914
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
        "id": 13670,
        "name": "PragmaDirective",
        "src": "0:24:42"
      },
      {
        "attributes": {
          "SourceUnit": 13499,
          "absolutePath": "zeppelin-solidity/contracts/token/ERC20/BasicToken.sol",
          "file": "./BasicToken.sol",
          "scope": 13915,
          "symbolAliases": [
            null
          ],
          "unitAlias": ""
        },
        "id": 13671,
        "name": "ImportDirective",
        "src": "26:26:42"
      },
      {
        "attributes": {
          "SourceUnit": 13542,
          "absolutePath": "zeppelin-solidity/contracts/token/ERC20/ERC20.sol",
          "file": "./ERC20.sol",
          "scope": 13915,
          "symbolAliases": [
            null
          ],
          "unitAlias": ""
        },
        "id": 13672,
        "name": "ImportDirective",
        "src": "53:21:42"
      },
      {
        "attributes": {
          "contractDependencies": [
            13498,
            13541,
            13573
          ],
          "contractKind": "contract",
          "documentation": "@title Standard ERC20 token\n * @dev Implementation of the basic standard token.\n@dev https://github.com/ethereum/EIPs/issues/20\n@dev Based on code by FirstBlood: https://github.com/Firstbloodio/token/blob/master/smart_contract/FirstBloodToken.sol",
          "fullyImplemented": true,
          "linearizedBaseContracts": [
            13914,
            13498,
            13541,
            13573
          ],
          "name": "StandardToken",
          "scope": 13915
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
                  "name": "ERC20",
                  "referencedDeclaration": 13541,
                  "type": "contract ERC20"
                },
                "id": 13673,
                "name": "UserDefinedTypeName",
                "src": "370:5:42"
              }
            ],
            "id": 13674,
            "name": "InheritanceSpecifier",
            "src": "370:5:42"
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
                  "name": "BasicToken",
                  "referencedDeclaration": 13498,
                  "type": "contract BasicToken"
                },
                "id": 13675,
                "name": "UserDefinedTypeName",
                "src": "377:10:42"
              }
            ],
            "id": 13676,
            "name": "InheritanceSpecifier",
            "src": "377:10:42"
          },
          {
            "attributes": {
              "constant": false,
              "name": "allowed",
              "scope": 13914,
              "stateVariable": true,
              "storageLocation": "default",
              "type": "mapping(address => mapping(address => uint256))",
              "value": null,
              "visibility": "internal"
            },
            "children": [
              {
                "attributes": {
                  "type": "mapping(address => mapping(address => uint256))"
                },
                "children": [
                  {
                    "attributes": {
                      "name": "address",
                      "type": "address"
                    },
                    "id": 13677,
                    "name": "ElementaryTypeName",
                    "src": "402:7:42"
                  },
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
                        "id": 13678,
                        "name": "ElementaryTypeName",
                        "src": "422:7:42"
                      },
                      {
                        "attributes": {
                          "name": "uint256",
                          "type": "uint256"
                        },
                        "id": 13679,
                        "name": "ElementaryTypeName",
                        "src": "433:7:42"
                      }
                    ],
                    "id": 13680,
                    "name": "Mapping",
                    "src": "413:28:42"
                  }
                ],
                "id": 13681,
                "name": "Mapping",
                "src": "393:49:42"
              }
            ],
            "id": 13682,
            "name": "VariableDeclaration",
            "src": "393:66:42"
          },
          {
            "attributes": {
              "constant": false,
              "implemented": true,
              "isConstructor": false,
              "modifiers": [
                null
              ],
              "name": "transferFrom",
              "payable": false,
              "scope": 13914,
              "stateMutability": "nonpayable",
              "superFunction": 13523,
              "visibility": "public"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_from",
                      "scope": 13768,
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
                        "id": 13683,
                        "name": "ElementaryTypeName",
                        "src": "758:7:42"
                      }
                    ],
                    "id": 13684,
                    "name": "VariableDeclaration",
                    "src": "758:13:42"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_to",
                      "scope": 13768,
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
                        "id": 13685,
                        "name": "ElementaryTypeName",
                        "src": "773:7:42"
                      }
                    ],
                    "id": 13686,
                    "name": "VariableDeclaration",
                    "src": "773:11:42"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_value",
                      "scope": 13768,
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
                        "id": 13687,
                        "name": "ElementaryTypeName",
                        "src": "786:7:42"
                      }
                    ],
                    "id": 13688,
                    "name": "VariableDeclaration",
                    "src": "786:14:42"
                  }
                ],
                "id": 13689,
                "name": "ParameterList",
                "src": "757:44:42"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "",
                      "scope": 13768,
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
                        "id": 13690,
                        "name": "ElementaryTypeName",
                        "src": "818:4:42"
                      }
                    ],
                    "id": 13691,
                    "name": "VariableDeclaration",
                    "src": "818:4:42"
                  }
                ],
                "id": 13692,
                "name": "ParameterList",
                "src": "817:6:42"
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
                              "referencedDeclaration": 15087,
                              "type": "function (bool) pure",
                              "value": "require"
                            },
                            "id": 13693,
                            "name": "Identifier",
                            "src": "830:7:42"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "commonType": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
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
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 13686,
                                  "type": "address",
                                  "value": "_to"
                                },
                                "id": 13694,
                                "name": "Identifier",
                                "src": "838:3:42"
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
                                  "type": "address",
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
                                      "type": "type(address)",
                                      "value": "address"
                                    },
                                    "id": 13695,
                                    "name": "ElementaryTypeNameExpression",
                                    "src": "845:7:42"
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
                                    "id": 13696,
                                    "name": "Literal",
                                    "src": "853:1:42"
                                  }
                                ],
                                "id": 13697,
                                "name": "FunctionCall",
                                "src": "845:10:42"
                              }
                            ],
                            "id": 13698,
                            "name": "BinaryOperation",
                            "src": "838:17:42"
                          }
                        ],
                        "id": 13699,
                        "name": "FunctionCall",
                        "src": "830:26:42"
                      }
                    ],
                    "id": 13700,
                    "name": "ExpressionStatement",
                    "src": "830:26:42"
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
                              "referencedDeclaration": 15087,
                              "type": "function (bool) pure",
                              "value": "require"
                            },
                            "id": 13701,
                            "name": "Identifier",
                            "src": "862:7:42"
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
                                  "referencedDeclaration": 13688,
                                  "type": "uint256",
                                  "value": "_value"
                                },
                                "id": 13702,
                                "name": "Identifier",
                                "src": "870:6:42"
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
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 13415,
                                      "type": "mapping(address => uint256)",
                                      "value": "balances"
                                    },
                                    "id": 13703,
                                    "name": "Identifier",
                                    "src": "880:8:42"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 13684,
                                      "type": "address",
                                      "value": "_from"
                                    },
                                    "id": 13704,
                                    "name": "Identifier",
                                    "src": "889:5:42"
                                  }
                                ],
                                "id": 13705,
                                "name": "IndexAccess",
                                "src": "880:15:42"
                              }
                            ],
                            "id": 13706,
                            "name": "BinaryOperation",
                            "src": "870:25:42"
                          }
                        ],
                        "id": 13707,
                        "name": "FunctionCall",
                        "src": "862:34:42"
                      }
                    ],
                    "id": 13708,
                    "name": "ExpressionStatement",
                    "src": "862:34:42"
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
                              "referencedDeclaration": 15087,
                              "type": "function (bool) pure",
                              "value": "require"
                            },
                            "id": 13709,
                            "name": "Identifier",
                            "src": "902:7:42"
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
                                  "referencedDeclaration": 13688,
                                  "type": "uint256",
                                  "value": "_value"
                                },
                                "id": 13710,
                                "name": "Identifier",
                                "src": "910:6:42"
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
                                      "type": "mapping(address => uint256)"
                                    },
                                    "children": [
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "overloadedDeclarations": [
                                            null
                                          ],
                                          "referencedDeclaration": 13682,
                                          "type": "mapping(address => mapping(address => uint256))",
                                          "value": "allowed"
                                        },
                                        "id": 13711,
                                        "name": "Identifier",
                                        "src": "920:7:42"
                                      },
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "overloadedDeclarations": [
                                            null
                                          ],
                                          "referencedDeclaration": 13684,
                                          "type": "address",
                                          "value": "_from"
                                        },
                                        "id": 13712,
                                        "name": "Identifier",
                                        "src": "928:5:42"
                                      }
                                    ],
                                    "id": 13713,
                                    "name": "IndexAccess",
                                    "src": "920:14:42"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": false,
                                      "lValueRequested": false,
                                      "member_name": "sender",
                                      "referencedDeclaration": null,
                                      "type": "address"
                                    },
                                    "children": [
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "overloadedDeclarations": [
                                            null
                                          ],
                                          "referencedDeclaration": 15084,
                                          "type": "msg",
                                          "value": "msg"
                                        },
                                        "id": 13714,
                                        "name": "Identifier",
                                        "src": "935:3:42"
                                      }
                                    ],
                                    "id": 13715,
                                    "name": "MemberAccess",
                                    "src": "935:10:42"
                                  }
                                ],
                                "id": 13716,
                                "name": "IndexAccess",
                                "src": "920:26:42"
                              }
                            ],
                            "id": 13717,
                            "name": "BinaryOperation",
                            "src": "910:36:42"
                          }
                        ],
                        "id": 13718,
                        "name": "FunctionCall",
                        "src": "902:45:42"
                      }
                    ],
                    "id": 13719,
                    "name": "ExpressionStatement",
                    "src": "902:45:42"
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
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 13415,
                                  "type": "mapping(address => uint256)",
                                  "value": "balances"
                                },
                                "id": 13720,
                                "name": "Identifier",
                                "src": "954:8:42"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 13684,
                                  "type": "address",
                                  "value": "_from"
                                },
                                "id": 13721,
                                "name": "Identifier",
                                "src": "963:5:42"
                              }
                            ],
                            "id": 13722,
                            "name": "IndexAccess",
                            "src": "954:15:42"
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
                              "type": "uint256",
                              "type_conversion": false
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": [
                                    {
                                      "typeIdentifier": "t_uint256",
                                      "typeString": "uint256"
                                    }
                                  ],
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "member_name": "sub",
                                  "referencedDeclaration": 13321,
                                  "type": "function (uint256,uint256) pure returns (uint256)"
                                },
                                "children": [
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
                                          "overloadedDeclarations": [
                                            null
                                          ],
                                          "referencedDeclaration": 13415,
                                          "type": "mapping(address => uint256)",
                                          "value": "balances"
                                        },
                                        "id": 13723,
                                        "name": "Identifier",
                                        "src": "972:8:42"
                                      },
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "overloadedDeclarations": [
                                            null
                                          ],
                                          "referencedDeclaration": 13684,
                                          "type": "address",
                                          "value": "_from"
                                        },
                                        "id": 13724,
                                        "name": "Identifier",
                                        "src": "981:5:42"
                                      }
                                    ],
                                    "id": 13725,
                                    "name": "IndexAccess",
                                    "src": "972:15:42"
                                  }
                                ],
                                "id": 13726,
                                "name": "MemberAccess",
                                "src": "972:19:42"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 13688,
                                  "type": "uint256",
                                  "value": "_value"
                                },
                                "id": 13727,
                                "name": "Identifier",
                                "src": "992:6:42"
                              }
                            ],
                            "id": 13728,
                            "name": "FunctionCall",
                            "src": "972:27:42"
                          }
                        ],
                        "id": 13729,
                        "name": "Assignment",
                        "src": "954:45:42"
                      }
                    ],
                    "id": 13730,
                    "name": "ExpressionStatement",
                    "src": "954:45:42"
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
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 13415,
                                  "type": "mapping(address => uint256)",
                                  "value": "balances"
                                },
                                "id": 13731,
                                "name": "Identifier",
                                "src": "1005:8:42"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 13686,
                                  "type": "address",
                                  "value": "_to"
                                },
                                "id": 13732,
                                "name": "Identifier",
                                "src": "1014:3:42"
                              }
                            ],
                            "id": 13733,
                            "name": "IndexAccess",
                            "src": "1005:13:42"
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
                              "type": "uint256",
                              "type_conversion": false
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": [
                                    {
                                      "typeIdentifier": "t_uint256",
                                      "typeString": "uint256"
                                    }
                                  ],
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "member_name": "add",
                                  "referencedDeclaration": 13345,
                                  "type": "function (uint256,uint256) pure returns (uint256)"
                                },
                                "children": [
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
                                          "overloadedDeclarations": [
                                            null
                                          ],
                                          "referencedDeclaration": 13415,
                                          "type": "mapping(address => uint256)",
                                          "value": "balances"
                                        },
                                        "id": 13734,
                                        "name": "Identifier",
                                        "src": "1021:8:42"
                                      },
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "overloadedDeclarations": [
                                            null
                                          ],
                                          "referencedDeclaration": 13686,
                                          "type": "address",
                                          "value": "_to"
                                        },
                                        "id": 13735,
                                        "name": "Identifier",
                                        "src": "1030:3:42"
                                      }
                                    ],
                                    "id": 13736,
                                    "name": "IndexAccess",
                                    "src": "1021:13:42"
                                  }
                                ],
                                "id": 13737,
                                "name": "MemberAccess",
                                "src": "1021:17:42"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 13688,
                                  "type": "uint256",
                                  "value": "_value"
                                },
                                "id": 13738,
                                "name": "Identifier",
                                "src": "1039:6:42"
                              }
                            ],
                            "id": 13739,
                            "name": "FunctionCall",
                            "src": "1021:25:42"
                          }
                        ],
                        "id": 13740,
                        "name": "Assignment",
                        "src": "1005:41:42"
                      }
                    ],
                    "id": 13741,
                    "name": "ExpressionStatement",
                    "src": "1005:41:42"
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
                                  "type": "mapping(address => uint256)"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 13682,
                                      "type": "mapping(address => mapping(address => uint256))",
                                      "value": "allowed"
                                    },
                                    "id": 13742,
                                    "name": "Identifier",
                                    "src": "1052:7:42"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 13684,
                                      "type": "address",
                                      "value": "_from"
                                    },
                                    "id": 13743,
                                    "name": "Identifier",
                                    "src": "1060:5:42"
                                  }
                                ],
                                "id": 13746,
                                "name": "IndexAccess",
                                "src": "1052:14:42"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "member_name": "sender",
                                  "referencedDeclaration": null,
                                  "type": "address"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 15084,
                                      "type": "msg",
                                      "value": "msg"
                                    },
                                    "id": 13744,
                                    "name": "Identifier",
                                    "src": "1067:3:42"
                                  }
                                ],
                                "id": 13745,
                                "name": "MemberAccess",
                                "src": "1067:10:42"
                              }
                            ],
                            "id": 13747,
                            "name": "IndexAccess",
                            "src": "1052:26:42"
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
                              "type": "uint256",
                              "type_conversion": false
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": [
                                    {
                                      "typeIdentifier": "t_uint256",
                                      "typeString": "uint256"
                                    }
                                  ],
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "member_name": "sub",
                                  "referencedDeclaration": 13321,
                                  "type": "function (uint256,uint256) pure returns (uint256)"
                                },
                                "children": [
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
                                          "type": "mapping(address => uint256)"
                                        },
                                        "children": [
                                          {
                                            "attributes": {
                                              "argumentTypes": null,
                                              "overloadedDeclarations": [
                                                null
                                              ],
                                              "referencedDeclaration": 13682,
                                              "type": "mapping(address => mapping(address => uint256))",
                                              "value": "allowed"
                                            },
                                            "id": 13748,
                                            "name": "Identifier",
                                            "src": "1081:7:42"
                                          },
                                          {
                                            "attributes": {
                                              "argumentTypes": null,
                                              "overloadedDeclarations": [
                                                null
                                              ],
                                              "referencedDeclaration": 13684,
                                              "type": "address",
                                              "value": "_from"
                                            },
                                            "id": 13749,
                                            "name": "Identifier",
                                            "src": "1089:5:42"
                                          }
                                        ],
                                        "id": 13750,
                                        "name": "IndexAccess",
                                        "src": "1081:14:42"
                                      },
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "isConstant": false,
                                          "isLValue": false,
                                          "isPure": false,
                                          "lValueRequested": false,
                                          "member_name": "sender",
                                          "referencedDeclaration": null,
                                          "type": "address"
                                        },
                                        "children": [
                                          {
                                            "attributes": {
                                              "argumentTypes": null,
                                              "overloadedDeclarations": [
                                                null
                                              ],
                                              "referencedDeclaration": 15084,
                                              "type": "msg",
                                              "value": "msg"
                                            },
                                            "id": 13751,
                                            "name": "Identifier",
                                            "src": "1096:3:42"
                                          }
                                        ],
                                        "id": 13752,
                                        "name": "MemberAccess",
                                        "src": "1096:10:42"
                                      }
                                    ],
                                    "id": 13753,
                                    "name": "IndexAccess",
                                    "src": "1081:26:42"
                                  }
                                ],
                                "id": 13754,
                                "name": "MemberAccess",
                                "src": "1081:30:42"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 13688,
                                  "type": "uint256",
                                  "value": "_value"
                                },
                                "id": 13755,
                                "name": "Identifier",
                                "src": "1112:6:42"
                              }
                            ],
                            "id": 13756,
                            "name": "FunctionCall",
                            "src": "1081:38:42"
                          }
                        ],
                        "id": 13757,
                        "name": "Assignment",
                        "src": "1052:67:42"
                      }
                    ],
                    "id": 13758,
                    "name": "ExpressionStatement",
                    "src": "1052:67:42"
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
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                },
                                {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                },
                                {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              ],
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 13572,
                              "type": "function (address,address,uint256)",
                              "value": "Transfer"
                            },
                            "id": 13759,
                            "name": "Identifier",
                            "src": "1125:8:42"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 13684,
                              "type": "address",
                              "value": "_from"
                            },
                            "id": 13760,
                            "name": "Identifier",
                            "src": "1134:5:42"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 13686,
                              "type": "address",
                              "value": "_to"
                            },
                            "id": 13761,
                            "name": "Identifier",
                            "src": "1141:3:42"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 13688,
                              "type": "uint256",
                              "value": "_value"
                            },
                            "id": 13762,
                            "name": "Identifier",
                            "src": "1146:6:42"
                          }
                        ],
                        "id": 13763,
                        "name": "FunctionCall",
                        "src": "1125:28:42"
                      }
                    ],
                    "id": 13764,
                    "name": "ExpressionStatement",
                    "src": "1125:28:42"
                  },
                  {
                    "attributes": {
                      "functionReturnParameters": 13692
                    },
                    "children": [
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
                        "id": 13765,
                        "name": "Literal",
                        "src": "1166:4:42"
                      }
                    ],
                    "id": 13766,
                    "name": "Return",
                    "src": "1159:11:42"
                  }
                ],
                "id": 13767,
                "name": "Block",
                "src": "824:351:42"
              }
            ],
            "id": 13768,
            "name": "FunctionDefinition",
            "src": "736:439:42"
          },
          {
            "attributes": {
              "constant": false,
              "implemented": true,
              "isConstructor": false,
              "modifiers": [
                null
              ],
              "name": "approve",
              "payable": false,
              "scope": 13914,
              "stateMutability": "nonpayable",
              "superFunction": 13532,
              "visibility": "public"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_spender",
                      "scope": 13796,
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
                        "id": 13769,
                        "name": "ElementaryTypeName",
                        "src": "1815:7:42"
                      }
                    ],
                    "id": 13770,
                    "name": "VariableDeclaration",
                    "src": "1815:16:42"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_value",
                      "scope": 13796,
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
                        "id": 13771,
                        "name": "ElementaryTypeName",
                        "src": "1833:7:42"
                      }
                    ],
                    "id": 13772,
                    "name": "VariableDeclaration",
                    "src": "1833:14:42"
                  }
                ],
                "id": 13773,
                "name": "ParameterList",
                "src": "1814:34:42"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "",
                      "scope": 13796,
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
                        "id": 13774,
                        "name": "ElementaryTypeName",
                        "src": "1865:4:42"
                      }
                    ],
                    "id": 13775,
                    "name": "VariableDeclaration",
                    "src": "1865:4:42"
                  }
                ],
                "id": 13776,
                "name": "ParameterList",
                "src": "1864:6:42"
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
                                  "type": "mapping(address => uint256)"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 13682,
                                      "type": "mapping(address => mapping(address => uint256))",
                                      "value": "allowed"
                                    },
                                    "id": 13777,
                                    "name": "Identifier",
                                    "src": "1877:7:42"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": false,
                                      "lValueRequested": false,
                                      "member_name": "sender",
                                      "referencedDeclaration": null,
                                      "type": "address"
                                    },
                                    "children": [
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "overloadedDeclarations": [
                                            null
                                          ],
                                          "referencedDeclaration": 15084,
                                          "type": "msg",
                                          "value": "msg"
                                        },
                                        "id": 13778,
                                        "name": "Identifier",
                                        "src": "1885:3:42"
                                      }
                                    ],
                                    "id": 13779,
                                    "name": "MemberAccess",
                                    "src": "1885:10:42"
                                  }
                                ],
                                "id": 13781,
                                "name": "IndexAccess",
                                "src": "1877:19:42"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 13770,
                                  "type": "address",
                                  "value": "_spender"
                                },
                                "id": 13780,
                                "name": "Identifier",
                                "src": "1897:8:42"
                              }
                            ],
                            "id": 13782,
                            "name": "IndexAccess",
                            "src": "1877:29:42"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 13772,
                              "type": "uint256",
                              "value": "_value"
                            },
                            "id": 13783,
                            "name": "Identifier",
                            "src": "1909:6:42"
                          }
                        ],
                        "id": 13784,
                        "name": "Assignment",
                        "src": "1877:38:42"
                      }
                    ],
                    "id": 13785,
                    "name": "ExpressionStatement",
                    "src": "1877:38:42"
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
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                },
                                {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                },
                                {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              ],
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 13540,
                              "type": "function (address,address,uint256)",
                              "value": "Approval"
                            },
                            "id": 13786,
                            "name": "Identifier",
                            "src": "1921:8:42"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "member_name": "sender",
                              "referencedDeclaration": null,
                              "type": "address"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 15084,
                                  "type": "msg",
                                  "value": "msg"
                                },
                                "id": 13787,
                                "name": "Identifier",
                                "src": "1930:3:42"
                              }
                            ],
                            "id": 13788,
                            "name": "MemberAccess",
                            "src": "1930:10:42"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 13770,
                              "type": "address",
                              "value": "_spender"
                            },
                            "id": 13789,
                            "name": "Identifier",
                            "src": "1942:8:42"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 13772,
                              "type": "uint256",
                              "value": "_value"
                            },
                            "id": 13790,
                            "name": "Identifier",
                            "src": "1952:6:42"
                          }
                        ],
                        "id": 13791,
                        "name": "FunctionCall",
                        "src": "1921:38:42"
                      }
                    ],
                    "id": 13792,
                    "name": "ExpressionStatement",
                    "src": "1921:38:42"
                  },
                  {
                    "attributes": {
                      "functionReturnParameters": 13776
                    },
                    "children": [
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
                        "id": 13793,
                        "name": "Literal",
                        "src": "1972:4:42"
                      }
                    ],
                    "id": 13794,
                    "name": "Return",
                    "src": "1965:11:42"
                  }
                ],
                "id": 13795,
                "name": "Block",
                "src": "1871:110:42"
              }
            ],
            "id": 13796,
            "name": "FunctionDefinition",
            "src": "1798:183:42"
          },
          {
            "attributes": {
              "constant": true,
              "implemented": true,
              "isConstructor": false,
              "modifiers": [
                null
              ],
              "name": "allowance",
              "payable": false,
              "scope": 13914,
              "stateMutability": "view",
              "superFunction": 13512,
              "visibility": "public"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_owner",
                      "scope": 13812,
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
                        "id": 13797,
                        "name": "ElementaryTypeName",
                        "src": "2319:7:42"
                      }
                    ],
                    "id": 13798,
                    "name": "VariableDeclaration",
                    "src": "2319:14:42"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_spender",
                      "scope": 13812,
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
                        "id": 13799,
                        "name": "ElementaryTypeName",
                        "src": "2335:7:42"
                      }
                    ],
                    "id": 13800,
                    "name": "VariableDeclaration",
                    "src": "2335:16:42"
                  }
                ],
                "id": 13801,
                "name": "ParameterList",
                "src": "2318:34:42"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "",
                      "scope": 13812,
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
                        "id": 13802,
                        "name": "ElementaryTypeName",
                        "src": "2374:7:42"
                      }
                    ],
                    "id": 13803,
                    "name": "VariableDeclaration",
                    "src": "2374:7:42"
                  }
                ],
                "id": 13804,
                "name": "ParameterList",
                "src": "2373:9:42"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "functionReturnParameters": 13804
                    },
                    "children": [
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
                              "type": "mapping(address => uint256)"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 13682,
                                  "type": "mapping(address => mapping(address => uint256))",
                                  "value": "allowed"
                                },
                                "id": 13805,
                                "name": "Identifier",
                                "src": "2396:7:42"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 13798,
                                  "type": "address",
                                  "value": "_owner"
                                },
                                "id": 13806,
                                "name": "Identifier",
                                "src": "2404:6:42"
                              }
                            ],
                            "id": 13807,
                            "name": "IndexAccess",
                            "src": "2396:15:42"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 13800,
                              "type": "address",
                              "value": "_spender"
                            },
                            "id": 13808,
                            "name": "Identifier",
                            "src": "2412:8:42"
                          }
                        ],
                        "id": 13809,
                        "name": "IndexAccess",
                        "src": "2396:25:42"
                      }
                    ],
                    "id": 13810,
                    "name": "Return",
                    "src": "2389:32:42"
                  }
                ],
                "id": 13811,
                "name": "Block",
                "src": "2383:43:42"
              }
            ],
            "id": 13812,
            "name": "FunctionDefinition",
            "src": "2300:126:42"
          },
          {
            "attributes": {
              "constant": false,
              "implemented": true,
              "isConstructor": false,
              "modifiers": [
                null
              ],
              "name": "increaseApproval",
              "payable": false,
              "scope": 13914,
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
                      "name": "_spender",
                      "scope": 13853,
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
                        "id": 13813,
                        "name": "ElementaryTypeName",
                        "src": "2909:7:42"
                      }
                    ],
                    "id": 13814,
                    "name": "VariableDeclaration",
                    "src": "2909:16:42"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_addedValue",
                      "scope": 13853,
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
                        "id": 13815,
                        "name": "ElementaryTypeName",
                        "src": "2927:4:42"
                      }
                    ],
                    "id": 13816,
                    "name": "VariableDeclaration",
                    "src": "2927:16:42"
                  }
                ],
                "id": 13817,
                "name": "ParameterList",
                "src": "2908:36:42"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "",
                      "scope": 13853,
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
                        "id": 13818,
                        "name": "ElementaryTypeName",
                        "src": "2961:4:42"
                      }
                    ],
                    "id": 13819,
                    "name": "VariableDeclaration",
                    "src": "2961:4:42"
                  }
                ],
                "id": 13820,
                "name": "ParameterList",
                "src": "2960:6:42"
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
                                  "type": "mapping(address => uint256)"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 13682,
                                      "type": "mapping(address => mapping(address => uint256))",
                                      "value": "allowed"
                                    },
                                    "id": 13821,
                                    "name": "Identifier",
                                    "src": "2973:7:42"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": false,
                                      "lValueRequested": false,
                                      "member_name": "sender",
                                      "referencedDeclaration": null,
                                      "type": "address"
                                    },
                                    "children": [
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "overloadedDeclarations": [
                                            null
                                          ],
                                          "referencedDeclaration": 15084,
                                          "type": "msg",
                                          "value": "msg"
                                        },
                                        "id": 13822,
                                        "name": "Identifier",
                                        "src": "2981:3:42"
                                      }
                                    ],
                                    "id": 13823,
                                    "name": "MemberAccess",
                                    "src": "2981:10:42"
                                  }
                                ],
                                "id": 13825,
                                "name": "IndexAccess",
                                "src": "2973:19:42"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 13814,
                                  "type": "address",
                                  "value": "_spender"
                                },
                                "id": 13824,
                                "name": "Identifier",
                                "src": "2993:8:42"
                              }
                            ],
                            "id": 13826,
                            "name": "IndexAccess",
                            "src": "2973:29:42"
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
                              "type": "uint256",
                              "type_conversion": false
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": [
                                    {
                                      "typeIdentifier": "t_uint256",
                                      "typeString": "uint256"
                                    }
                                  ],
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "member_name": "add",
                                  "referencedDeclaration": 13345,
                                  "type": "function (uint256,uint256) pure returns (uint256)"
                                },
                                "children": [
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
                                          "type": "mapping(address => uint256)"
                                        },
                                        "children": [
                                          {
                                            "attributes": {
                                              "argumentTypes": null,
                                              "overloadedDeclarations": [
                                                null
                                              ],
                                              "referencedDeclaration": 13682,
                                              "type": "mapping(address => mapping(address => uint256))",
                                              "value": "allowed"
                                            },
                                            "id": 13827,
                                            "name": "Identifier",
                                            "src": "3005:7:42"
                                          },
                                          {
                                            "attributes": {
                                              "argumentTypes": null,
                                              "isConstant": false,
                                              "isLValue": false,
                                              "isPure": false,
                                              "lValueRequested": false,
                                              "member_name": "sender",
                                              "referencedDeclaration": null,
                                              "type": "address"
                                            },
                                            "children": [
                                              {
                                                "attributes": {
                                                  "argumentTypes": null,
                                                  "overloadedDeclarations": [
                                                    null
                                                  ],
                                                  "referencedDeclaration": 15084,
                                                  "type": "msg",
                                                  "value": "msg"
                                                },
                                                "id": 13828,
                                                "name": "Identifier",
                                                "src": "3013:3:42"
                                              }
                                            ],
                                            "id": 13829,
                                            "name": "MemberAccess",
                                            "src": "3013:10:42"
                                          }
                                        ],
                                        "id": 13830,
                                        "name": "IndexAccess",
                                        "src": "3005:19:42"
                                      },
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "overloadedDeclarations": [
                                            null
                                          ],
                                          "referencedDeclaration": 13814,
                                          "type": "address",
                                          "value": "_spender"
                                        },
                                        "id": 13831,
                                        "name": "Identifier",
                                        "src": "3025:8:42"
                                      }
                                    ],
                                    "id": 13832,
                                    "name": "IndexAccess",
                                    "src": "3005:29:42"
                                  }
                                ],
                                "id": 13833,
                                "name": "MemberAccess",
                                "src": "3005:33:42"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 13816,
                                  "type": "uint256",
                                  "value": "_addedValue"
                                },
                                "id": 13834,
                                "name": "Identifier",
                                "src": "3039:11:42"
                              }
                            ],
                            "id": 13835,
                            "name": "FunctionCall",
                            "src": "3005:46:42"
                          }
                        ],
                        "id": 13836,
                        "name": "Assignment",
                        "src": "2973:78:42"
                      }
                    ],
                    "id": 13837,
                    "name": "ExpressionStatement",
                    "src": "2973:78:42"
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
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                },
                                {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                },
                                {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              ],
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 13540,
                              "type": "function (address,address,uint256)",
                              "value": "Approval"
                            },
                            "id": 13838,
                            "name": "Identifier",
                            "src": "3057:8:42"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "member_name": "sender",
                              "referencedDeclaration": null,
                              "type": "address"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 15084,
                                  "type": "msg",
                                  "value": "msg"
                                },
                                "id": 13839,
                                "name": "Identifier",
                                "src": "3066:3:42"
                              }
                            ],
                            "id": 13840,
                            "name": "MemberAccess",
                            "src": "3066:10:42"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 13814,
                              "type": "address",
                              "value": "_spender"
                            },
                            "id": 13841,
                            "name": "Identifier",
                            "src": "3078:8:42"
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
                                  "type": "mapping(address => uint256)"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 13682,
                                      "type": "mapping(address => mapping(address => uint256))",
                                      "value": "allowed"
                                    },
                                    "id": 13842,
                                    "name": "Identifier",
                                    "src": "3088:7:42"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": false,
                                      "lValueRequested": false,
                                      "member_name": "sender",
                                      "referencedDeclaration": null,
                                      "type": "address"
                                    },
                                    "children": [
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "overloadedDeclarations": [
                                            null
                                          ],
                                          "referencedDeclaration": 15084,
                                          "type": "msg",
                                          "value": "msg"
                                        },
                                        "id": 13843,
                                        "name": "Identifier",
                                        "src": "3096:3:42"
                                      }
                                    ],
                                    "id": 13844,
                                    "name": "MemberAccess",
                                    "src": "3096:10:42"
                                  }
                                ],
                                "id": 13845,
                                "name": "IndexAccess",
                                "src": "3088:19:42"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 13814,
                                  "type": "address",
                                  "value": "_spender"
                                },
                                "id": 13846,
                                "name": "Identifier",
                                "src": "3108:8:42"
                              }
                            ],
                            "id": 13847,
                            "name": "IndexAccess",
                            "src": "3088:29:42"
                          }
                        ],
                        "id": 13848,
                        "name": "FunctionCall",
                        "src": "3057:61:42"
                      }
                    ],
                    "id": 13849,
                    "name": "ExpressionStatement",
                    "src": "3057:61:42"
                  },
                  {
                    "attributes": {
                      "functionReturnParameters": 13820
                    },
                    "children": [
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
                        "id": 13850,
                        "name": "Literal",
                        "src": "3131:4:42"
                      }
                    ],
                    "id": 13851,
                    "name": "Return",
                    "src": "3124:11:42"
                  }
                ],
                "id": 13852,
                "name": "Block",
                "src": "2967:173:42"
              }
            ],
            "id": 13853,
            "name": "FunctionDefinition",
            "src": "2883:257:42"
          },
          {
            "attributes": {
              "constant": false,
              "implemented": true,
              "isConstructor": false,
              "modifiers": [
                null
              ],
              "name": "decreaseApproval",
              "payable": false,
              "scope": 13914,
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
                      "name": "_spender",
                      "scope": 13913,
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
                        "id": 13854,
                        "name": "ElementaryTypeName",
                        "src": "3628:7:42"
                      }
                    ],
                    "id": 13855,
                    "name": "VariableDeclaration",
                    "src": "3628:16:42"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_subtractedValue",
                      "scope": 13913,
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
                        "id": 13856,
                        "name": "ElementaryTypeName",
                        "src": "3646:4:42"
                      }
                    ],
                    "id": 13857,
                    "name": "VariableDeclaration",
                    "src": "3646:21:42"
                  }
                ],
                "id": 13858,
                "name": "ParameterList",
                "src": "3627:41:42"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "",
                      "scope": 13913,
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
                        "id": 13859,
                        "name": "ElementaryTypeName",
                        "src": "3685:4:42"
                      }
                    ],
                    "id": 13860,
                    "name": "VariableDeclaration",
                    "src": "3685:4:42"
                  }
                ],
                "id": 13861,
                "name": "ParameterList",
                "src": "3684:6:42"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "assignments": [
                        13863
                      ]
                    },
                    "children": [
                      {
                        "attributes": {
                          "constant": false,
                          "name": "oldValue",
                          "scope": 13913,
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
                            "id": 13862,
                            "name": "ElementaryTypeName",
                            "src": "3697:4:42"
                          }
                        ],
                        "id": 13863,
                        "name": "VariableDeclaration",
                        "src": "3697:13:42"
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
                              "type": "mapping(address => uint256)"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 13682,
                                  "type": "mapping(address => mapping(address => uint256))",
                                  "value": "allowed"
                                },
                                "id": 13864,
                                "name": "Identifier",
                                "src": "3713:7:42"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "member_name": "sender",
                                  "referencedDeclaration": null,
                                  "type": "address"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 15084,
                                      "type": "msg",
                                      "value": "msg"
                                    },
                                    "id": 13865,
                                    "name": "Identifier",
                                    "src": "3721:3:42"
                                  }
                                ],
                                "id": 13866,
                                "name": "MemberAccess",
                                "src": "3721:10:42"
                              }
                            ],
                            "id": 13867,
                            "name": "IndexAccess",
                            "src": "3713:19:42"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 13855,
                              "type": "address",
                              "value": "_spender"
                            },
                            "id": 13868,
                            "name": "Identifier",
                            "src": "3733:8:42"
                          }
                        ],
                        "id": 13869,
                        "name": "IndexAccess",
                        "src": "3713:29:42"
                      }
                    ],
                    "id": 13870,
                    "name": "VariableDeclarationStatement",
                    "src": "3697:45:42"
                  },
                  {
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
                          "operator": ">",
                          "type": "bool"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 13857,
                              "type": "uint256",
                              "value": "_subtractedValue"
                            },
                            "id": 13871,
                            "name": "Identifier",
                            "src": "3752:16:42"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 13863,
                              "type": "uint256",
                              "value": "oldValue"
                            },
                            "id": 13872,
                            "name": "Identifier",
                            "src": "3771:8:42"
                          }
                        ],
                        "id": 13873,
                        "name": "BinaryOperation",
                        "src": "3752:27:42"
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
                                          "type": "mapping(address => uint256)"
                                        },
                                        "children": [
                                          {
                                            "attributes": {
                                              "argumentTypes": null,
                                              "overloadedDeclarations": [
                                                null
                                              ],
                                              "referencedDeclaration": 13682,
                                              "type": "mapping(address => mapping(address => uint256))",
                                              "value": "allowed"
                                            },
                                            "id": 13874,
                                            "name": "Identifier",
                                            "src": "3789:7:42"
                                          },
                                          {
                                            "attributes": {
                                              "argumentTypes": null,
                                              "isConstant": false,
                                              "isLValue": false,
                                              "isPure": false,
                                              "lValueRequested": false,
                                              "member_name": "sender",
                                              "referencedDeclaration": null,
                                              "type": "address"
                                            },
                                            "children": [
                                              {
                                                "attributes": {
                                                  "argumentTypes": null,
                                                  "overloadedDeclarations": [
                                                    null
                                                  ],
                                                  "referencedDeclaration": 15084,
                                                  "type": "msg",
                                                  "value": "msg"
                                                },
                                                "id": 13875,
                                                "name": "Identifier",
                                                "src": "3797:3:42"
                                              }
                                            ],
                                            "id": 13876,
                                            "name": "MemberAccess",
                                            "src": "3797:10:42"
                                          }
                                        ],
                                        "id": 13878,
                                        "name": "IndexAccess",
                                        "src": "3789:19:42"
                                      },
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "overloadedDeclarations": [
                                            null
                                          ],
                                          "referencedDeclaration": 13855,
                                          "type": "address",
                                          "value": "_spender"
                                        },
                                        "id": 13877,
                                        "name": "Identifier",
                                        "src": "3809:8:42"
                                      }
                                    ],
                                    "id": 13879,
                                    "name": "IndexAccess",
                                    "src": "3789:29:42"
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
                                    "id": 13880,
                                    "name": "Literal",
                                    "src": "3821:1:42"
                                  }
                                ],
                                "id": 13881,
                                "name": "Assignment",
                                "src": "3789:33:42"
                              }
                            ],
                            "id": 13882,
                            "name": "ExpressionStatement",
                            "src": "3789:33:42"
                          }
                        ],
                        "id": 13883,
                        "name": "Block",
                        "src": "3781:48:42"
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
                                          "type": "mapping(address => uint256)"
                                        },
                                        "children": [
                                          {
                                            "attributes": {
                                              "argumentTypes": null,
                                              "overloadedDeclarations": [
                                                null
                                              ],
                                              "referencedDeclaration": 13682,
                                              "type": "mapping(address => mapping(address => uint256))",
                                              "value": "allowed"
                                            },
                                            "id": 13884,
                                            "name": "Identifier",
                                            "src": "3843:7:42"
                                          },
                                          {
                                            "attributes": {
                                              "argumentTypes": null,
                                              "isConstant": false,
                                              "isLValue": false,
                                              "isPure": false,
                                              "lValueRequested": false,
                                              "member_name": "sender",
                                              "referencedDeclaration": null,
                                              "type": "address"
                                            },
                                            "children": [
                                              {
                                                "attributes": {
                                                  "argumentTypes": null,
                                                  "overloadedDeclarations": [
                                                    null
                                                  ],
                                                  "referencedDeclaration": 15084,
                                                  "type": "msg",
                                                  "value": "msg"
                                                },
                                                "id": 13885,
                                                "name": "Identifier",
                                                "src": "3851:3:42"
                                              }
                                            ],
                                            "id": 13886,
                                            "name": "MemberAccess",
                                            "src": "3851:10:42"
                                          }
                                        ],
                                        "id": 13888,
                                        "name": "IndexAccess",
                                        "src": "3843:19:42"
                                      },
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "overloadedDeclarations": [
                                            null
                                          ],
                                          "referencedDeclaration": 13855,
                                          "type": "address",
                                          "value": "_spender"
                                        },
                                        "id": 13887,
                                        "name": "Identifier",
                                        "src": "3863:8:42"
                                      }
                                    ],
                                    "id": 13889,
                                    "name": "IndexAccess",
                                    "src": "3843:29:42"
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
                                      "type": "uint256",
                                      "type_conversion": false
                                    },
                                    "children": [
                                      {
                                        "attributes": {
                                          "argumentTypes": [
                                            {
                                              "typeIdentifier": "t_uint256",
                                              "typeString": "uint256"
                                            }
                                          ],
                                          "isConstant": false,
                                          "isLValue": false,
                                          "isPure": false,
                                          "lValueRequested": false,
                                          "member_name": "sub",
                                          "referencedDeclaration": 13321,
                                          "type": "function (uint256,uint256) pure returns (uint256)"
                                        },
                                        "children": [
                                          {
                                            "attributes": {
                                              "argumentTypes": null,
                                              "overloadedDeclarations": [
                                                null
                                              ],
                                              "referencedDeclaration": 13863,
                                              "type": "uint256",
                                              "value": "oldValue"
                                            },
                                            "id": 13890,
                                            "name": "Identifier",
                                            "src": "3875:8:42"
                                          }
                                        ],
                                        "id": 13891,
                                        "name": "MemberAccess",
                                        "src": "3875:12:42"
                                      },
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "overloadedDeclarations": [
                                            null
                                          ],
                                          "referencedDeclaration": 13857,
                                          "type": "uint256",
                                          "value": "_subtractedValue"
                                        },
                                        "id": 13892,
                                        "name": "Identifier",
                                        "src": "3888:16:42"
                                      }
                                    ],
                                    "id": 13893,
                                    "name": "FunctionCall",
                                    "src": "3875:30:42"
                                  }
                                ],
                                "id": 13894,
                                "name": "Assignment",
                                "src": "3843:62:42"
                              }
                            ],
                            "id": 13895,
                            "name": "ExpressionStatement",
                            "src": "3843:62:42"
                          }
                        ],
                        "id": 13896,
                        "name": "Block",
                        "src": "3835:77:42"
                      }
                    ],
                    "id": 13897,
                    "name": "IfStatement",
                    "src": "3748:164:42"
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
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                },
                                {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                },
                                {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              ],
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 13540,
                              "type": "function (address,address,uint256)",
                              "value": "Approval"
                            },
                            "id": 13898,
                            "name": "Identifier",
                            "src": "3917:8:42"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "member_name": "sender",
                              "referencedDeclaration": null,
                              "type": "address"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 15084,
                                  "type": "msg",
                                  "value": "msg"
                                },
                                "id": 13899,
                                "name": "Identifier",
                                "src": "3926:3:42"
                              }
                            ],
                            "id": 13900,
                            "name": "MemberAccess",
                            "src": "3926:10:42"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 13855,
                              "type": "address",
                              "value": "_spender"
                            },
                            "id": 13901,
                            "name": "Identifier",
                            "src": "3938:8:42"
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
                                  "type": "mapping(address => uint256)"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 13682,
                                      "type": "mapping(address => mapping(address => uint256))",
                                      "value": "allowed"
                                    },
                                    "id": 13902,
                                    "name": "Identifier",
                                    "src": "3948:7:42"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": false,
                                      "lValueRequested": false,
                                      "member_name": "sender",
                                      "referencedDeclaration": null,
                                      "type": "address"
                                    },
                                    "children": [
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "overloadedDeclarations": [
                                            null
                                          ],
                                          "referencedDeclaration": 15084,
                                          "type": "msg",
                                          "value": "msg"
                                        },
                                        "id": 13903,
                                        "name": "Identifier",
                                        "src": "3956:3:42"
                                      }
                                    ],
                                    "id": 13904,
                                    "name": "MemberAccess",
                                    "src": "3956:10:42"
                                  }
                                ],
                                "id": 13905,
                                "name": "IndexAccess",
                                "src": "3948:19:42"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 13855,
                                  "type": "address",
                                  "value": "_spender"
                                },
                                "id": 13906,
                                "name": "Identifier",
                                "src": "3968:8:42"
                              }
                            ],
                            "id": 13907,
                            "name": "IndexAccess",
                            "src": "3948:29:42"
                          }
                        ],
                        "id": 13908,
                        "name": "FunctionCall",
                        "src": "3917:61:42"
                      }
                    ],
                    "id": 13909,
                    "name": "ExpressionStatement",
                    "src": "3917:61:42"
                  },
                  {
                    "attributes": {
                      "functionReturnParameters": 13861
                    },
                    "children": [
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
                        "id": 13910,
                        "name": "Literal",
                        "src": "3991:4:42"
                      }
                    ],
                    "id": 13911,
                    "name": "Return",
                    "src": "3984:11:42"
                  }
                ],
                "id": 13912,
                "name": "Block",
                "src": "3691:309:42"
              }
            ],
            "id": 13913,
            "name": "FunctionDefinition",
            "src": "3602:398:42"
          }
        ],
        "id": 13914,
        "name": "ContractDefinition",
        "src": "344:3659:42"
      }
    ],
    "id": 13915,
    "name": "SourceUnit",
    "src": "0:4004:42"
  },
  "compiler": {
    "name": "solc",
    "version": "0.4.18+commit.9cf6e910.Emscripten.clang"
  },
  "networks": {},
  "schemaVersion": "1.0.1",
  "updatedAt": "2018-09-07T18:09:37.711Z"
}