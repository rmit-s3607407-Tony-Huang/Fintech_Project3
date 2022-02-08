# Logistics Tracking using Blockchain

We're a shipping company, providing global tracking services for our customers using blockchain.

We have 3 different users to interact with this dapp.

* Admins
    The admin has control of the contract, and will be able to whitelist courier and user address, while also being able to log and track shipping information
* Courier
    The courier has the ability to log shipping information using ipfs onto the blockchain
* Users
    The user will be able track the item only.

Each user group will have a certain limitation on the functionality available to them, to ensure privacy of information.
# Front End Webpage
The landing page requires the user to be logged into metamask to interact with the smart contract.

![](Images/Webpage_Screenshots/Landing_Page.PNG)

If the account is not recognized by the smart contract, it will give an error
![](Images/Webpage_Screenshots/Landing_Page_error.PNG)

## Admin Functionality
The admin has full functionality and is able to perform the following actions.

### Add Couriers
![](Images/Webpage_Screenshots/Admin_Page_add_courier.PNG)

### View Couriers
![](Images/Webpage_Screenshots/Admin_Page_view_courier.PNG)

### Add Customers
![](Images/Webpage_Screenshots/Admin_Page_add_customer.PNG)

### View Customers
![](Images/Webpage_Screenshots/Admin_Page_view_customers.PNG)

### Add Parcels
![](Images/Webpage_Screenshots/Admin_Page_add_parcel.PNG)

### View Parcels
![](Images/Webpage_Screenshots/Admin_Page_view_parcel.png)

### Update Tracking
![](Images/Webpage_Screenshots/Admin_Page_Update_tracking.png)

### Track Parcel
![](Images/Webpage_Screenshots/Admin_Page_track_parcel1.png)


## Courier Functionality
The courier functions are similar to the admin, but they cannot add or view couriers or add customer.

![](Images/Webpage_Screenshots/Courier_page.png)


## Customer Functionality
The customer can only view and track their own parcels.

![](Images/Webpage_Screenshots/Customer_page_view.png)
![](Images/Webpage_Screenshots/customer_tracking_true.png)
![](Images/Webpage_Screenshots/customer_tracking_false.png)