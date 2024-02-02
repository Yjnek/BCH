// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

import "hardhat/console.sol";

contract Journal {

    struct Voiture {
        string id;
        address owner;
        string[] journal;
    }

    mapping(string => Voiture) public parc;

    constructor() {}

    function createCar(string memory _immatriculation) public {
        Voiture memory voiture = Voiture(_immatriculation, address(0), new string[](0));
        console.log("La voiture avec l'immatriculation %s a ete enregistree.", _immatriculation);
        parc[_immatriculation] = voiture;
    }

    function assurer(address mecanicien, address assureur) public {
        //ici je ne suis pas sur de qui va executer la fonction, soit l assureur paye directement un mecano, soit le client le fait et l assureur rembourse.
    }

    function reparerVoiture(string memory immatriculation, uint256 prix, string memory message) public {
        //require(parc[immatriculation].owner.balance >= prix);
        parc[immatriculation].journal.push(message);
        console.log("la voiture %s a recu une nouvelle entree dans son journal.", immatriculation);
    }

    function acheterVoiture(string memory immatriculation, address vendeur, uint256 prix) public {
        //require(address(this).balance > prix, "Pas assez de monnaie");
        parc[immatriculation].owner = address(this);
        //payable(vendeur).transfer(prix);
    }

    function seeOwnerShip(string memory immatriculation) public view returns (address) {
        return parc[immatriculation].owner;
    }

    function getVoiture(string memory immatriculation) public view returns (Voiture memory) {
        return parc[immatriculation];
    }
}