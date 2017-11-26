//const solc = require('solc');
const Web3 = require('web3');
const web3 = new Web3();

import {getAllRecords, addRecord} from './api/utils';

web3.setProvider(new web3.providers.HttpProvider("http://localhost:8545"));

const getAuthorityAddr = (hash) => {
    const authorityAddrDatabase = {
        'AdavancedQualificationCentre': web3.eth.accounts[0]
    };
    return web3.eth.accounts[0];
};

const getFieldList = (data) => {
    // parse data...
    return [];
};

const getUserAccount = (id) => {
    // get from database or storage
    return web3.eth.accounts[9];
};

export const processRequest = (data) => {
    console.log(data);
    const client_addr = data['id'];
    const authority_addr = getAuthorityAddr(data['organisation']);
    const field_list = getFieldList(data);
    addRecord(client_addr, field_list, authority_addr)
};

export const getInfo = (userId) => {
    console.log(userId);
    const userAccount = getUserAccount(userId);
    getAllRecords(userAccount);
};