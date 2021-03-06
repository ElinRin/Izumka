let fs = require('fs');
let Web3 = require('web3');
let solc = require('solc');
// let web3 = new Web3();

let web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:8545'));

let source = fs.readFileSync('contracts/izum.sol', 'utf8');
let compiled = solc.compile(source);
const meta = JSON.parse(compiled.contracts[':Izum'].metadata);
const abi = meta['output']['abi'];

let contract_addr = "0x7f0b155a7db5163a106bbff7e1d15728480991b0";
web3.setProvider(new web3.providers.HttpProvider("http://localhost:8545"));

let contract = web3.eth.contract(abi).at(contract_addr);

const SEPARATOR = "&";
// let fields_str = field_list.join(SEPARATOR);
// let field_list = fields_str.split(SEPARATOR);

export const getAllRecords = (client_addr) => {
    let records = [];
    let number = contract.getCertificatesNumber(client_addr);
    for (let i = 0; i < number; ++i) {
        let fields_str = contract.getCertificates(client_addr, i);

        let field_list = fields_str.split(SEPARATOR);
        records.push(field_list);
    }
    return records;
};

export const addRecord = (client_addr, field_list, authority_addr) => {
    let fields_str = field_list.join(SEPARATOR);
    // let data = contract.addCertificate.getData(client_addr, fields_str);
    // web3.eth.sendTransaction({to:contract_addr, from: authority_addr, data: data});
    contract.addCertificate.sendTransaction(client_addr, fields_str, {from: authority_addr, gas: 4000000})
};

const test = () => {
    let authority_addr = web3.eth.accounts[0];
    let client_addr = web3.eth.accounts[4];

    addRecord(client_addr, ["МФТИ", "Бакалавр", "06.2014-06.2018", "ФИВТ, Кафедра Анализа Данных"], authority_addr);
    addRecord(client_addr, ["МГУ", "Аспирантура", "06.2010-06.2012", "ВМК, Кафедра Филологии"], authority_addr);

    // console.log("first_record: ", contract.getCertificates(client_addr, 0));

    console.log(getAllRecords(client_addr));
};
