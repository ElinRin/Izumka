pragma solidity ^0.4.18;

contract Izum {
//    uint8 constant N = 4;

    mapping (address => bool) owners;

    mapping (address => string[]) certificates;

//    struct Certificate {
//        string organization;
//        string qualification;
//        string date;
//        string comment;
//    }
//    mapping (address => Certificate[]) certificates;

    function Izum() public {
        owners[msg.sender] = true;
    }

    modifier onlyOwners() {
    	require(owners[msg.sender]);
    	_;
    }

    function addOwner(address new_owner) onlyOwners() public {
        owners[new_owner] = true;
    }

    function addCertificate (address client, string cert) onlyOwners() public {
        certificates[client].push(cert);
    }

    function getCertificates (address client, uint8 i) constant public returns (string) {
        return certificates[client][i];
    }

//    function getCertificates (address client) constant public returns (string) {
//        return certificates[client][0].date;
//    }

}