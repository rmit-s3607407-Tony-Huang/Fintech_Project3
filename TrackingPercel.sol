pragma solidity ^0.5.0;

contract Tracking {
    address admin;
    
    constructor () public {
        admin = msg.sender;  // Admin is the owner of contract
    }


    mapping (uint => address) public couriers;
    mapping (uint => address) public customers;

    uint courierId;
    uint customerId;

    modifier onlyAdmin () {
        require (msg.sender == admin);
        _;
    }

    function addCourier (address courier) public onlyAdmin {   // Add couriers
        couriers[courierId] = courier;
        courierId ++;
    }

    function addCustomer (address customer) public onlyAdmin {  // Add customers
        customers[customerId] = customer;
        customerId ++;
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

    // Store percel and tracking information in IPFS file
    struct TrackingInfo {  
        string percelUri;
        string statusUri;
    }

    uint percelId;
    mapping (uint => TrackingInfo) public percel;   // Manage percels by id

    event percelRegistered (uint percelId, string percelUri);

    // Register new percel (add uri for percel)
    function registerPercel (string memory _percelUri, uint role_id) public onlyCourierOrAdmin (role_id) {   
        percel[percelId].percelUri = _percelUri;
        emit percelRegistered (percelId, _percelUri);
        percelId ++;

    }

    event statusUpdated (uint percelId, string statusUri);

    // Update tracking status (add uri for status)
    function trackingUpdated (uint _percelId, string memory _statusUri, uint role_id) public onlyCourierOrAdmin (role_id) {
        percel[_percelId].statusUri = _statusUri;
        emit statusUpdated (_percelId, _statusUri);
    }

    event track (string _percel, string _status);

    // Tack shipping status
    function trackPercel (uint _percelId, uint role_id) public onlyCourierOrCustomerOrAdmin (role_id) {
        emit track (percel[_percelId].percelUri, percel[_percelId].statusUri);
    }

}