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

let contract_addr = "0x17bea72120aaaf3cc5f4a9792c8cbc43d9783217";
web3.setProvider(new web3.providers.HttpProvider("http://localhost:8545"));

let contract = web3.eth.contract(abi).at(contract_addr);

const SEPARATOR = "&";
// let fields_str = field_list.join(SEPARATOR);
// let field_list = fields_str.split(SEPARATOR);

const getAllRecords = (eth_addr) => {
    let records = [];
    let number = contract.getCertificatesNumber(eth_addr);
    for (let i = 0; i < number; ++i) {
        let fields_str = contract.getCertificates(eth_addr, i);
        console.log("log: ", fields_str);

        let field_list = fields_str.split(SEPARATOR);
        records.push(field_list);
    }
    return records;
};

const addRecord = (client_addr, field_list, authority_addr) => {
    let fields_str = field_list.join(SEPARATOR);
    // let data = contract.addCertificate.getData(client_addr, fields_str);
    // web3.eth.sendTransaction({to:contract_addr, from: authority_addr, data: data});
    contract.addCertificate.sendTransaction(client_addr, fields_str, {from: authority_addr})
};

const test = () => {
    let client_addr = "0x16086437cec89335c945045235881da4da816f57";
    let client_addr = "0x16086437cec89335c945045235881da4da816f57";
    addRecord(addr, ["МФТИ", "Бакалавр", "06.2014-06.2018", "ФИВТ, Кафедра Анализа Данных"]);
    addRecord(addr, ["МГУ", "Аспирантура", "06.2010-06.2012", "ВМК, Кафедра Филологии"]);

    console.log(getAllRecords(addr));
};

test();
