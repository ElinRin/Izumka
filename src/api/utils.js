let fs = require('fs');
let Web3 = require('web3');
let solc = require('solc');
// let web3 = new Web3();

let web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:8545'));

let source = fs.readFileSync('contracts/izum.sol', 'utf8');
// let source = "pragma solidity ^0.4.18;\n" +
//     "contract Izum {\n" +
//     "//    uint8 constant N = 4;\n" +
//     "    mapping (address => bool) owners;\n" +
//     "    mapping (address => string[]) certificates;\n" +
//     "    function Izum() public {\n" +
//     "        owners[msg.sender] = true;\n" +
//     "    }\n" +
//     "    modifier onlyOwners() {\n" +
//     "       require(owners[msg.sender]);\n" +
//     "       _;\n" +
//     "    }\n" +
//     "    function addOwner(address new_owner) onlyOwners() public {\n" +
//     "        owners[new_owner] = true;\n" +
//     "    }\n" +
//     "    function addCertificate (address client, string cert) onlyOwners() public {\n" +
//     "        certificates[client].push(cert);\n" +
//     "    }\n" +
//     "    function getCertificates (address client, uint8 i) constant public returns (string) {\n" +
//     "        return certificates[client][i];\n" +
//     "    }\n" +
//     "}";

let compiled = solc.compile(source);
meta = JSON.parse(compiled.contracts[':Izum'].metadata);
abi = meta['output']['abi'];

let address = "0x17bea72120aaaf3cc5f4a9792c8cbc43d9783217";
web3.setProvider(new web3.providers.HttpProvider(local));

let contract = web3.eth.contract(abi).at(address);

let result = contract.getCertificates(12, 0);


const getAllRecords = (eth_id) => {
};

//
// export const getDataApi = async (request) => {
    // if (typeof request === 'undefined') {
    //     request = '0x123';
    // }
    //
    //