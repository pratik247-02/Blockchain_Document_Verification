const contractAddress = "0xD22A191fED42EAd601D6673D53E1C821F1a69F44";
const contractABI = [
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_address",
        "type": "address"
      },
      {
        "internalType": "string",
        "name": "_child_name",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "_child_father_name",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "_child_mother_name",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "_birth_date",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "_birth_location",
        "type": "string"
      }
    ],
    "name": "addChildDetails",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_address",
        "type": "address"
      },
      {
        "internalType": "string",
        "name": "_student_name",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "_date_of_birth",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "_date_of_graduation",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "_degree",
        "type": "string"
      }
    ],
    "name": "addGraduationDetails",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "childRecords",
    "outputs": [
      {
        "internalType": "string",
        "name": "child_name",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "child_father_name",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "child_mother_name",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "birth_date",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "birth_location",
        "type": "string"
      },
      {
        "internalType": "address",
        "name": "issuedFrom",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_address",
        "type": "address"
      }
    ],
    "name": "getChildCount",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_address",
        "type": "address"
      }
    ],
    "name": "getGraduateCount",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "graduateRecords",
    "outputs": [
      {
        "internalType": "string",
        "name": "student_name",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "date_of_birth",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "date_of_graduation",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "degree",
        "type": "string"
      },
      {
        "internalType": "address",
        "name": "issued_from",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_address",
        "type": "address"
      },
      {
        "internalType": "string",
        "name": "_child_name",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "_birth_date",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "_birth_location",
        "type": "string"
      }
    ],
    "name": "verifyChildDetails",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_address",
        "type": "address"
      },
      {
        "internalType": "string",
        "name": "_student_name",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "_date_of_birth",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "_date_of_graduation",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "_degree",
        "type": "string"
      }
    ],
    "name": "verifyGraduationDetails",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  }
];

export {contractABI, contractAddress};