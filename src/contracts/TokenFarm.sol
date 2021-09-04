pragma solidity >0.5.0;
import "./DappToken.sol";
import "./DaiToken.sol";
//Step1: Deploy Dai
//Step2: Deploy DAPP
//Step3: Deploy Token Farm
contract TokenFarm{
    //All code goes here ..
    string public name = "Dapp Token Farm";    
    DappToken public dappToken;
    DaiToken public daiToken;

    constructor(DappToken _dappToken, DaiToken _daiToken) public{
        dappToken = _dappToken;
        daiToken = _daiToken;

    }

}