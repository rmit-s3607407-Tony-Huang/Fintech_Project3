pragma solidity ^0.5.0;
contract Tracking {
    address admin;
    
    constructor () public {
        admin = msg.sender;  // Admin is the owner of contract
    }
    mapping (uint => address) public couriers;
    mapping (uint => address) public customers;
    uint public courierId;
    uint public customerId;
    modifier onlyAdmin () {
        require (msg.sender == admin);
        _;
    }
    function addCourier (address courier) public onlyAdmin{   // Add couriers
        courierId ++;
        couriers[courierId] = courier;
    }
    function addCustomer (address customer) public onlyAdmin {  // Add customers
        customerId ++;
        customers[customerId] = customer;
    }
    function isAdmin(address userAdresss) public view returns(bool) {
        if (userAdresss == admin){
            return true;
        }
        else{
            return false;
        }
    }
    function isCourier(address userAdresss) public view returns(bool) {
        for(uint i = 1; i <= courierId; i++){
            if (userAdresss == couriers[i]){
                return true;
            }
        }
            return false;
    }
    function isCustomer(address userAdresss) public view returns(bool) {
        for(uint i = 1; i <= customerId; i++){
            if (userAdresss == customers[i]){
                return true;
            }
        }
            return false;
    }
    // Restrict function caller to couriers, customers and admin
    modifier onlyCourierOrCustomerOrAdmin (uint _id) {
        require (msg.sender == couriers[_id] || msg.sender == customers[_id] || msg.sender == admin);
        _;
    }
    // Restrict function caller to couriers and admin
    modifier onlyCourierOrAdmin (uint _id) {
        require (msg.sender == couriers[_id] || msg.sender == admin);
        _;
    }
    uint public parcelId;
    struct parcelInfo {
        address customerAddress;
        uint statusId;
    }
    mapping (uint => parcelInfo) public parcel;
    event Status(uint parcelId, string report, string imageURL);
    function createParcel(address customerAddress, uint role_id, string memory imageURL) public onlyCourierOrAdmin(role_id){
        parcelId++;
        parcel[parcelId] = parcelInfo(customerAddress, 0);
        emit Status(parcelId, "Parcel added to blockchain.", imageURL);
    }
    function updateStatus (uint _parcelId, string memory report, string memory imageURL, uint role_id) public onlyCourierOrAdmin (role_id){
        parcel[_parcelId].statusId ++;
        emit Status(_parcelId, report, imageURL);
    }
}