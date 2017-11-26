let fs = require('fs');
let Web3 = require('web3');
let solc = require('solc');
// let web3 = new Web3();

let web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:8545'));

let source = fs.readFileSync('contracts/izum.sol', 'utf8');
// let source = "pragma solidity ^0.4.18;\n" +
//     "contract Izum {\n" +
//     "//    uint8 constant N = 4;\n" +
//     "    mapping (contract_addr => bool) owners;\n" +
//     "    mapping (contract_addr => string[]) certificates;\n" +
//     "    function Izum() public {\n" +
//     "        owners[msg.sender] = true;\n" +
//     "    }\n" +
//     "    modifier onlyOwners() {\n" +
//     "       require(owners[msg.sender]);\n" +
//     "       _;\n" +
//     "    }\n" +
//     "    function addOwner(contract_addr new_owner) onlyOwners() public {\n" +
//     "        owners[new_owner] = true;\n" +
//     "    }\n" +
//     "    function addCertificate (contract_addr client, string cert) onlyOwners() public {\n" +
//     "        certificates[client].push(cert);\n" +
//     "    }\n" +
//     "    function getCertificates (contract_addr client, uint8 i) constant public returns (string) {\n" +
//     "        return certificates[client][i];\n" +
//     "    }\n" +
//     "}";

let compiled = solc.compile(source);
meta = JSON.parse(compiled.contracts[':Izum'].metadata);
abi = meta['output']['abi'];

let contract_addr = "0xff6253eadd71d39ff383ea93c4b4bf4e5d8acac2";
web3.setProvider(new web3.providers.HttpProvider("http://localhost:8545"));

let contract = web3.eth.contract(abi).at(contract_addr);

const SEPARATOR = "&";
// let fields_str = field_list.join(SEPARATOR);
// let field_list = fields_str.split(SEPARATOR);

const getAllRecords = (client_addr) => {
    let records = [];
    let number = contract.getCertificatesNumber(client_addr);
    for (let i = 0; i < number; ++i) {
        let fields_str = contract.getCertificates(client_addr, i);

        let field_list = fields_str.split(SEPARATOR);
        records.push(field_list);
    }
    return records;
};

const addRecord = (client_addr, field_list, authority_addr) => {
    let fields_str = field_list.join(SEPARATOR);
    // let data = contract.addCertificate.getData(client_addr, fields_str);
    // web3.eth.sendTransaction({to:contract_addr, from: authority_addr, data: data});
    contract.addCertificate.sendTransaction(client_addr, fields_str, {from: authority_addr, gas: 4000000})
};

const info_by_addr = {
    web3.eth.accounts[0] : "МФТИ (ГУ)",
}

const initialize = () => {

;

const test = () => {
    let authority_addr = web3.eth.accounts[0];
    let client_addr = web3.eth.accounts[4];

    addRecord(client_addr, ["МФТИ", "Бакалавр", "06.2014-06.2018", "ФИВТ, Кафедра Анализа Данных"], authority_addr);
    addRecord(client_addr, ["МГУ", "Аспирантура", "06.2010-06.2012", "ВМК, Кафедра Филологии"], authority_addr);

    // console.log("first_record: ", contract.getCertificates(client_addr, 0));

    console.log(getAllRecords(client_addr));
};

test();
