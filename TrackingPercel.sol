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

    event renderCourierId(address _courier, uint _courierId);

    function addCourier (address courier) public onlyAdmin {   // Add couriers
        couriers[courierId] = courier;
        emit renderCourierId(courier, courierId);
        courierId ++;
    }

    event renderCustomerId(address _customer, uint _customerId);

    function addCustomer (address customer) public onlyAdmin {  // Add customers
        customers[customerId] = customer;
        emit renderCustomerId(customer, customerId);
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

    // Store parcel and tracking information in IPFS file
    struct TrackingInfo {  
        string parcelUri;
        string statusUri;
    }

    uint parcelId;
    mapping (uint => TrackingInfo) public parcel;   // Manage parcels by id

    event parcelRegistered (uint parcelId, string parcelUri);

    // Register new parcel (add uri for parcel)
    function registerParcel (string memory _parcelUri, uint role_id) public onlyCourierOrAdmin (role_id) {   
        parcel[parcelId].parcelUri = _parcelUri;
        emit parcelRegistered (parcelId, _parcelUri);
        parcelId ++;

    }

    event statusUpdated (uint parcelId, string statusUri);

    // Update tracking status (add uri for status)
    function trackingUpdated (uint _parcelId, string memory _statusUri, uint role_id) public onlyCourierOrAdmin (role_id) {
        parcel[_parcelId].statusUri = _statusUri;
        emit statusUpdated (_parcelId, _statusUri);
    }

    event track (string _parcel, string _status);

    // Tack shipping status
    function trackParcel (uint _parcelId, uint role_id) public onlyCourierOrCustomerOrAdmin (role_id) {
        emit track (parcel[_parcelId].parcelUri, parcel[_parcelId].statusUri);
    }

}