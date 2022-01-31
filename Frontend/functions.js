// const contract_address = "0x2c785d995930FCa772405f3BcE435A18F544c7D7";
const contract_address = "0x10482739e23713dE10219f1dB5Cc401A7D8ffD7B";
let statusUri;

const adminStyles = {
  addCourierStyle: function(){
    document.getElementById('addCourier').setAttribute("class", "list-group-item list-group-item-action active");
    document.getElementById('viewCourier').setAttribute("class", "list-group-item list-group-item-action");
    document.getElementById('addCustomer').setAttribute("class", "list-group-item list-group-item-action");
    document.getElementById('viewCustomer').setAttribute("class", "list-group-item list-group-item-action");
    document.getElementById('addParcel').setAttribute("class", "list-group-item list-group-item-action");
    document.getElementById('viewParcel').setAttribute("class", "list-group-item list-group-item-action");
    document.getElementById('updateTracking').setAttribute("class", "list-group-item list-group-item-action");
    document.getElementById('trackParcel').setAttribute("class", "list-group-item list-group-item-action");

    document.getElementById('addCourierContent').setAttribute("class", "col");
    document.getElementById('viewCourierContent').setAttribute("class", "col collapse");
    document.getElementById('addCustomerContent').setAttribute("class", "col collapse");
    document.getElementById('viewCustomerContent').setAttribute("class", "col collapse");
    document.getElementById('addParcelContent').setAttribute("class", "col collapse");
    document.getElementById('viewParcelContent').setAttribute("class", "col collapse");
    document.getElementById('updateTrackingContent').setAttribute("class", "col collapse");
    document.getElementById('trackParcelContent').setAttribute("class", "col collapse");

  },

  viewCourierStyle: function(){
    document.getElementById('addCourier').setAttribute("class", "list-group-item list-group-item-action");
    document.getElementById('viewCourier').setAttribute("class", "list-group-item list-group-item-action active");
    document.getElementById('addCustomer').setAttribute("class", "list-group-item list-group-item-action");
    document.getElementById('viewCustomer').setAttribute("class", "list-group-item list-group-item-action");
    document.getElementById('addParcel').setAttribute("class", "list-group-item list-group-item-action");
    document.getElementById('viewParcel').setAttribute("class", "list-group-item list-group-item-action");
    document.getElementById('updateTracking').setAttribute("class", "list-group-item list-group-item-action");
    document.getElementById('trackParcel').setAttribute("class", "list-group-item list-group-item-action");
    
    document.getElementById('addCourierContent').setAttribute("class", "col collapse");
    document.getElementById('viewCourierContent').setAttribute("class", "col");
    document.getElementById('addCustomerContent').setAttribute("class", "col collapse");
    document.getElementById('viewCustomerContent').setAttribute("class", "col collapse");
    document.getElementById('addParcelContent').setAttribute("class", "col collapse");
    document.getElementById('viewParcelContent').setAttribute("class", "col collapse");
    document.getElementById('updateTrackingContent').setAttribute("class", "col collapse");
    document.getElementById('trackParcelContent').setAttribute("class", "col collapse");

    dApp.viewCourier();
  },

  addCustomerStyle: function(){
    document.getElementById('addCourier').setAttribute("class", "list-group-item list-group-item-action");
    document.getElementById('viewCourier').setAttribute("class", "list-group-item list-group-item-action");
    document.getElementById('addCustomer').setAttribute("class", "list-group-item list-group-item-action active");
    document.getElementById('viewCustomer').setAttribute("class", "list-group-item list-group-item-action");
    document.getElementById('addParcel').setAttribute("class", "list-group-item list-group-item-action");
    document.getElementById('viewParcel').setAttribute("class", "list-group-item list-group-item-action");
    document.getElementById('updateTracking').setAttribute("class", "list-group-item list-group-item-action");
    document.getElementById('trackParcel').setAttribute("class", "list-group-item list-group-item-action");

    document.getElementById('addCourierContent').setAttribute("class", "col collapse");
    document.getElementById('viewCourierContent').setAttribute("class", "col collapse");
    document.getElementById('addCustomerContent').setAttribute("class", "col");
    document.getElementById('viewCustomerContent').setAttribute("class", "col collapse");
    document.getElementById('addParcelContent').setAttribute("class", "col collapse");
    document.getElementById('viewParcelContent').setAttribute("class", "col collapse");
    document.getElementById('updateTrackingContent').setAttribute("class", "col collapse");
    document.getElementById('trackParcelContent').setAttribute("class", "col collapse");
  },

  viewCustomerStyle: function(){
    document.getElementById('addCourier').setAttribute("class", "list-group-item list-group-item-action");
    document.getElementById('viewCourier').setAttribute("class", "list-group-item list-group-item-action");
    document.getElementById('addCustomer').setAttribute("class", "list-group-item list-group-item-action");
    document.getElementById('viewCustomer').setAttribute("class", "list-group-item list-group-item-action active");
    document.getElementById('addParcel').setAttribute("class", "list-group-item list-group-item-action");
    document.getElementById('viewParcel').setAttribute("class", "list-group-item list-group-item-action");
    document.getElementById('updateTracking').setAttribute("class", "list-group-item list-group-item-action");
    document.getElementById('trackParcel').setAttribute("class", "list-group-item list-group-item-action");

    document.getElementById('addCourierContent').setAttribute("class", "col collapse");
    document.getElementById('viewCourierContent').setAttribute("class", "col collapse");
    document.getElementById('addCustomerContent').setAttribute("class", "col collapse");
    document.getElementById('viewCustomerContent').setAttribute("class", "col");
    document.getElementById('addParcelContent').setAttribute("class", "col collapse");
    document.getElementById('viewParcelContent').setAttribute("class", "col collapse");
    document.getElementById('updateTrackingContent').setAttribute("class", "col collapse");
    document.getElementById('trackParcelContent').setAttribute("class", "col collapse");

    dApp.viewCustomer();
  },

  addParcelStyle: function(){
    document.getElementById('addCourier').setAttribute("class", "list-group-item list-group-item-action");
    document.getElementById('viewCourier').setAttribute("class", "list-group-item list-group-item-action");
    document.getElementById('addCustomer').setAttribute("class", "list-group-item list-group-item-action");
    document.getElementById('viewCustomer').setAttribute("class", "list-group-item list-group-item-action");
    document.getElementById('addParcel').setAttribute("class", "list-group-item list-group-item-action active");
    document.getElementById('viewParcel').setAttribute("class", "list-group-item list-group-item-action");
    document.getElementById('updateTracking').setAttribute("class", "list-group-item list-group-item-action");
    document.getElementById('trackParcel').setAttribute("class", "list-group-item list-group-item-action");

    document.getElementById('addCourierContent').setAttribute("class", "col collapse");
    document.getElementById('viewCourierContent').setAttribute("class", "col collapse");
    document.getElementById('addCustomerContent').setAttribute("class", "col collapse");
    document.getElementById('viewCustomerContent').setAttribute("class", "col collapse");
    document.getElementById('addParcelContent').setAttribute("class", "col");
    document.getElementById('viewParcelContent').setAttribute("class", "col collapse");
    document.getElementById('updateTrackingContent').setAttribute("class", "col collapse");
    document.getElementById('trackParcelContent').setAttribute("class", "col collapse");
  },

  viewParcelStyle: function(){
    document.getElementById('addCourier').setAttribute("class", "list-group-item list-group-item-action");
    document.getElementById('viewCourier').setAttribute("class", "list-group-item list-group-item-action");
    document.getElementById('addCustomer').setAttribute("class", "list-group-item list-group-item-action");
    document.getElementById('viewCustomer').setAttribute("class", "list-group-item list-group-item-action");
    document.getElementById('addParcel').setAttribute("class", "list-group-item list-group-item-action");
    document.getElementById('viewParcel').setAttribute("class", "list-group-item list-group-item-action active");
    document.getElementById('updateTracking').setAttribute("class", "list-group-item list-group-item-action");
    document.getElementById('trackParcel').setAttribute("class", "list-group-item list-group-item-action");

    document.getElementById('addCourierContent').setAttribute("class", "col collapse");
    document.getElementById('viewCourierContent').setAttribute("class", "col collapse");
    document.getElementById('addCustomerContent').setAttribute("class", "col collapse");
    document.getElementById('viewCustomerContent').setAttribute("class", "col collapse");
    document.getElementById('addParcelContent').setAttribute("class", "col collapse");
    document.getElementById('viewParcelContent').setAttribute("class", "col");
    document.getElementById('updateTrackingContent').setAttribute("class", "col collapse");
    document.getElementById('trackParcelContent').setAttribute("class", "col collapse");

    dApp.viewParcel()
  },

  updateTrackingStyle: function(){
    document.getElementById('addCourier').setAttribute("class", "list-group-item list-group-item-action");
    document.getElementById('viewCourier').setAttribute("class", "list-group-item list-group-item-action");
    document.getElementById('addCustomer').setAttribute("class", "list-group-item list-group-item-action");
    document.getElementById('viewCustomer').setAttribute("class", "list-group-item list-group-item-action");
    document.getElementById('addParcel').setAttribute("class", "list-group-item list-group-item-action");
    document.getElementById('viewParcel').setAttribute("class", "list-group-item list-group-item-action");
    document.getElementById('updateTracking').setAttribute("class", "list-group-item list-group-item-action active");
    document.getElementById('trackParcel').setAttribute("class", "list-group-item list-group-item-action");

    document.getElementById('addCourierContent').setAttribute("class", "col collapse");
    document.getElementById('viewCourierContent').setAttribute("class", "col collapse");
    document.getElementById('addCustomerContent').setAttribute("class", "col collapse");
    document.getElementById('viewCustomerContent').setAttribute("class", "col collapse");
    document.getElementById('addParcelContent').setAttribute("class", "col collapse");
    document.getElementById('viewParcelContent').setAttribute("class", "col collapse");
    document.getElementById('updateTrackingContent').setAttribute("class", "col");
    document.getElementById('trackParcelContent').setAttribute("class", "col collapse");
  },

  trackParcelStyle: function(){
    document.getElementById('addCourier').setAttribute("class", "list-group-item list-group-item-action");
    document.getElementById('viewCourier').setAttribute("class", "list-group-item list-group-item-action");
    document.getElementById('addCustomer').setAttribute("class", "list-group-item list-group-item-action");
    document.getElementById('viewCustomer').setAttribute("class", "list-group-item list-group-item-action");
    document.getElementById('addParcel').setAttribute("class", "list-group-item list-group-item-action");
    document.getElementById('viewParcel').setAttribute("class", "list-group-item list-group-item-action");
    document.getElementById('updateTracking').setAttribute("class", "list-group-item list-group-item-action");
    document.getElementById('trackParcel').setAttribute("class", "list-group-item list-group-item-action active");

    document.getElementById('addCourierContent').setAttribute("class", "col collapse");
    document.getElementById('viewCourierContent').setAttribute("class", "col collapse");
    document.getElementById('addCustomerContent').setAttribute("class", "col collapse");
    document.getElementById('viewCustomerContent').setAttribute("class", "col collapse");
    document.getElementById('addParcelContent').setAttribute("class", "col collapse");
    document.getElementById('viewParcelContent').setAttribute("class", "col collapse");
    document.getElementById('updateTrackingContent').setAttribute("class", "col collapse");
    document.getElementById('trackParcelContent').setAttribute("class", "col");
  },
}

const courierStyles = {
  viewCustomerStyle: function(){
    document.getElementById('viewCustomer').setAttribute("class", "list-group-item list-group-item-action active");
    document.getElementById('addParcel').setAttribute("class", "list-group-item list-group-item-action");
    document.getElementById('viewParcel').setAttribute("class", "list-group-item list-group-item-action");
    document.getElementById('updateTracking').setAttribute("class", "list-group-item list-group-item-action");
    document.getElementById('trackParcel').setAttribute("class", "list-group-item list-group-item-action");

    document.getElementById('viewCustomerContent').setAttribute("class", "col");
    document.getElementById('addParcelContent').setAttribute("class", "col collapse");
    document.getElementById('viewParcelContent').setAttribute("class", "col collapse");
    document.getElementById('updateTrackingContent').setAttribute("class", "col collapse");
    document.getElementById('trackParcelContent').setAttribute("class", "col collapse");

    dApp.viewCustomer();
  },

  addParcelStyle: function(){
    document.getElementById('viewCustomer').setAttribute("class", "list-group-item list-group-item-action");
    document.getElementById('addParcel').setAttribute("class", "list-group-item list-group-item-action active");
    document.getElementById('viewParcel').setAttribute("class", "list-group-item list-group-item-action");
    document.getElementById('updateTracking').setAttribute("class", "list-group-item list-group-item-action");
    document.getElementById('trackParcel').setAttribute("class", "list-group-item list-group-item-action");

    document.getElementById('viewCustomerContent').setAttribute("class", "col collapse");
    document.getElementById('addParcelContent').setAttribute("class", "col");
    document.getElementById('viewParcelContent').setAttribute("class", "col collapse");
    document.getElementById('updateTrackingContent').setAttribute("class", "col collapse");
    document.getElementById('trackParcelContent').setAttribute("class", "col collapse");
  },

  viewParcelStyle: function(){
    document.getElementById('viewCustomer').setAttribute("class", "list-group-item list-group-item-action");
    document.getElementById('addParcel').setAttribute("class", "list-group-item list-group-item-action");
    document.getElementById('viewParcel').setAttribute("class", "list-group-item list-group-item-action active");
    document.getElementById('updateTracking').setAttribute("class", "list-group-item list-group-item-action");
    document.getElementById('trackParcel').setAttribute("class", "list-group-item list-group-item-action");

    document.getElementById('viewCustomerContent').setAttribute("class", "col collapse");
    document.getElementById('addParcelContent').setAttribute("class", "col collapse");
    document.getElementById('viewParcelContent').setAttribute("class", "col");
    document.getElementById('updateTrackingContent').setAttribute("class", "col collapse");
    document.getElementById('trackParcelContent').setAttribute("class", "col collapse");

    dApp.viewParcel()
  },

  updateTrackingStyle: function(){
    document.getElementById('viewCustomer').setAttribute("class", "list-group-item list-group-item-action");
    document.getElementById('addParcel').setAttribute("class", "list-group-item list-group-item-action");
    document.getElementById('viewParcel').setAttribute("class", "list-group-item list-group-item-action");
    document.getElementById('updateTracking').setAttribute("class", "list-group-item list-group-item-action active");
    document.getElementById('trackParcel').setAttribute("class", "list-group-item list-group-item-action");

    document.getElementById('viewCustomerContent').setAttribute("class", "col collapse");
    document.getElementById('addParcelContent').setAttribute("class", "col collapse");
    document.getElementById('viewParcelContent').setAttribute("class", "col collapse");
    document.getElementById('updateTrackingContent').setAttribute("class", "col");
    document.getElementById('trackParcelContent').setAttribute("class", "col collapse");
  },

  trackParcelStyle: function(){
    document.getElementById('viewCustomer').setAttribute("class", "list-group-item list-group-item-action");
    document.getElementById('addParcel').setAttribute("class", "list-group-item list-group-item-action");
    document.getElementById('viewParcel').setAttribute("class", "list-group-item list-group-item-action");
    document.getElementById('updateTracking').setAttribute("class", "list-group-item list-group-item-action");
    document.getElementById('trackParcel').setAttribute("class", "list-group-item list-group-item-action active");

    document.getElementById('viewCustomerContent').setAttribute("class", "col collapse");
    document.getElementById('addParcelContent').setAttribute("class", "col collapse");
    document.getElementById('viewParcelContent').setAttribute("class", "col collapse");
    document.getElementById('updateTrackingContent').setAttribute("class", "col collapse");
    document.getElementById('trackParcelContent').setAttribute("class", "col");
  }
}

const customerStyles = {
  viewParcelStyle: function(){

    document.getElementById('viewParcel').setAttribute("class", "list-group-item list-group-item-action active");
    document.getElementById('trackParcel').setAttribute("class", "list-group-item list-group-item-action");

    document.getElementById('viewParcelContent').setAttribute("class", "col");
    document.getElementById('trackParcelContent').setAttribute("class", "col collapse");

    dApp.viewParcelCustomer()
  },

  trackParcelStyle: function(){
    document.getElementById('viewParcel').setAttribute("class", "list-group-item list-group-item-action");
    document.getElementById('trackParcel').setAttribute("class", "list-group-item list-group-item-action active");

    document.getElementById('viewParcelContent').setAttribute("class", "col collapse");
    document.getElementById('trackParcelContent').setAttribute("class", "col");
  }
}

const dApp = {
  ethEnabled: function() {
    if (window.ethereum) {
      window.web3 = new Web3(window.ethereum);
      window.ethereum.enable();
      return true;
    }
    return false;
  },

  isAdmin: async function(address){
    const isAdmin = await this.contract.methods.isAdmin(address).call()
    console.log(isAdmin);
    return isAdmin;
  },

  isCourier: async function(address){
    const isCourier = await this.contract.methods.isCourier(address).call()
    console.log(isCourier);
    return isCourier;
  },

  isCustomer: async function(address){
    const isCustomer = await this.contract.methods.isCustomer(address).call()
    console.log(isCustomer);
    return isCustomer;
  },

  landingPage: function(){
    window.location.href = 'index.html';
  },
  
  adminPage: function(){
    window.location.href = 'admin.html';
  },

  courierPage: function(){
    window.location.href = 'courier.html';
  },

  customerPage: function(){
    window.location.href = 'customer.html';
  },

  accountNotFound: function(){
    document.getElementById("userAddress").innerText = "This address was not found in the contract, Try again!";
  },

  loginWithEth: async function() {
    if (window.web3) {
        try {
          // We use this since ethereum.enable() is deprecated. This method is not
          // available in Web3JS - so we call it directly from metamasks' library
          const selectedAccount = await window.ethereum
            .request({
              method: "eth_requestAccounts",
            })
            .then((accounts) => accounts[0])
            .catch(() => {
              throw Error("No account selected!");
            });
            console.log(selectedAccount)
            sessionStorage.setItem("userAddress", selectedAccount);
          
          if(await dApp.isAdmin(selectedAccount)){
            dApp.adminPage();
          }
          else if(await dApp.isCourier(selectedAccount)){
            dApp.courierPage();
          }
          else if(await dApp.isCustomer(selectedAccount)){
            dApp.customerPage();
          }
          else{
            dApp.accountNotFound()
          }

        //   window.userAddress = selectedAccount;

        //   window.localStorage.setItem("userAddress", selectedAccount);
        //   system.log(window.userAddress)
        //   dApp.showAddress();
          // dApp.adminPage()
        } catch (error) {
          console.error(error);
        }
      } else {
        alert("No ETH brower extension detected.");
      }
  },

  logout: function(){
    sessionStorage.userAddress = null;
    sessionStorage.courierNumber = null;
    sessionStorage.customerNumber = null;
    // window.localStorage.removeItem("userAddress");
    dApp.landingPage();
  },
  
   showAddress: function(){
    if (!sessionStorage.userAddress) {
        document.getElementById("userAddress").innerText = "";
        document.getElementById("logoutButton").classList.add("hidden");
        return false;
      }

      document.getElementById("userAddress").innerText = `${(sessionStorage.userAddress)}`;
    },

  getCourierId: async function(){
    const courierId = await this.contract.methods.courierId().call();
    console.log(courierId);
    window.localStorage.setItem("courierId",courierId);
  },

  getCourierNumber: async function(){
    const courierId = await this.contract.methods.courierId().call();
    for (var i=1; i<=courierId; i++){
      var courierNumber = await this.contract.methods.couriers(i).call();
      console.log(courierNumber);
      if (courierNumber.toLowerCase() == sessionStorage.userAddress){
        console.log(courierNumber);
        sessionStorage.setItem("courierNumber", i);
      }
    }
  },

  getCouriers: async function(id){
    const courierId = await this.contract.methods.couriers(id).call();
    console.log(courierId);
  },

  addCourier: async function(){
    var courierAddress = document.getElementById('addCourierLabel').value;
    var response = await this.contract.methods.addCourier(courierAddress).send({from:sessionStorage.userAddress}).then(function(receipt){
      console.log(receipt);
      document.getElementById('addCourierResponse').innerHTML = 'Address added successfully.';
      setTimeout(function(){document.getElementById('addCourierResponse').innerHTML = ''}, 4000);
    });
  },

  viewCourier: async function(){
    const courierId = await this.contract.methods.courierId().call();

    var table = document.getElementById('viewCourierTable')
    var rows = table.getElementsByTagName("tr").length

    for(var j=rows-1; j>0; j--){
      table.deleteRow(j);
    };

    for (var i=1; i<=courierId; i++){
      var row = table.insertRow()
      var cell = row.insertCell();
        cell.innerHTML = i;
        cell = row.insertCell();
        cell.innerHTML = await this.contract.methods.couriers(i).call();
    };
  },

  addCustomer: async function(){
    var customerAddress = document.getElementById('addCustomerLabel').value;
    var response = await this.contract.methods.addCustomer(customerAddress).send({from:sessionStorage.userAddress}).then(function(receipt){
      console.log(receipt);
      document.getElementById('addCustomerResponse').innerHTML = 'Address added successfully.';
      setTimeout(function(){document.getElementById('addCustomerResponse').innerHTML = ''}, 4000);
    });

  },

  getCustomerNumber: async function(){
    const customerId = await this.contract.methods.customerId().call();
    for (var i=1; i<=customerId; i++){
      var customerNumber = await this.contract.methods.customers(i).call();
      console.log(customerNumber);
      if (customerNumber.toLowerCase() == sessionStorage.userAddress){
        console.log(customerNumber);
        sessionStorage.setItem("customerNumber", i);
      }
    }
  },

  viewCustomer: async function(){
    const customerId = await this.contract.methods.customerId().call();

    var table = document.getElementById('viewCustomerTable')
    var rows = table.getElementsByTagName("tr").length

    for(var j=rows-1; j>0; j--){
      table.deleteRow(j);
    };
    for (var i=1; i<=customerId; i++){
      var row = table.insertRow()
      var cell = row.insertCell();
        cell.innerHTML = i;
        cell = row.insertCell();
        cell.innerHTML = await this.contract.methods.customers(i).call();;
    };
  },

  addParcelAdmin: async function(){
    var customerAddress = document.getElementById('addParcelLabel').value;
    var response = await this.contract.methods.createParcel(customerAddress, 0,'bafkreib7uwuek7za6meleucxd42trdnugd5aob6w3nu2sr2te3item4bua').send({from:sessionStorage.userAddress}).then(function(receipt){
      console.log(receipt);
      document.getElementById('addParcelResponse').innerHTML = 'Parcel linked to customer.';
      setTimeout(function(){document.getElementById('addParcelResponse').innerHTML = ''}, 4000);
    });

  },

  addParcelCourier: async function(){
    await dApp.getCourierNumber();
    var customerAddress = document.getElementById('addParcelLabel').value;
    var response = await this.contract.methods.createParcel(customerAddress, sessionStorage.courierNumber,'bafkreib7uwuek7za6meleucxd42trdnugd5aob6w3nu2sr2te3item4bua').send({from:sessionStorage.userAddress}).then(function(receipt){
      console.log(receipt);
      document.getElementById('addParcelResponse').innerHTML = 'Parcel linked to customer.';
      setTimeout(function(){document.getElementById('addParcelResponse').innerHTML = ''}, 4000);
    });

  },

  getParcel: async function(id){
    const parcelId = await this.contract.methods.parcel(id).call();
    console.log(parcelId['customerAddress']);
  },

  viewParcel: async function(){
    const parcelId = await this.contract.methods.parcelId().call();
    
    var table = document.getElementById('viewParcelTable')
    var rows = table.getElementsByTagName("tr").length

    for(var j=rows-1; j>0; j--){
      table.deleteRow(j);
    };

    for (var i=1; i<=parcelId; i++){
      var parcelAddress = await this.contract.methods.parcel(i).call();
      var row = table.insertRow()
      var cell = row.insertCell();
        cell.innerHTML = i;
        cell = row.insertCell();
        cell.innerHTML = parcelAddress['customerAddress'];
    };
  },

  viewParcelCustomer: async function(){
    const parcelId = await this.contract.methods.parcelId().call();
    
    var table = document.getElementById('viewParcelTable')
    var rows = table.getElementsByTagName("tr").length

    for(var j=rows-1; j>0; j--){
      table.deleteRow(j);
    };

    for (var i=1; i<=parcelId; i++){
      var parcelAddress = await this.contract.methods.parcel(i).call();
      if(parcelAddress['customerAddress'].toLowerCase() == sessionStorage.userAddress){
        var row = table.insertRow()
        var cell = row.insertCell();
        cell.innerHTML = i;
        cell = row.insertCell();
        cell.innerHTML = parcelAddress['customerAddress'];
      }
    };
  },

  updateTrackingAdmin: async function(){
    var parcelID = document.getElementById('updateTrackingIDLabel').value;
    var trackingDetails = document.getElementById('updateTrackingDetailsLabel').value;
    var imageURL = null;
    console.log(trackingDetails);

    const image = document.getElementById('updateTrackingImage');

    const pinata_api_key = "c60c20f848f8490bc51b";
    const pinata_secret_api_key = "66435784d425667f5cc6e8331ab540683bc96ea6253e46ab7ae14431534ccef1";

    console.log(image, pinata_api_key, pinata_secret_api_key);

      if (!image) {
        M.toast({ html: "Please fill out then entire form!" });
        return;
      }

      const image_data = new FormData();
      image_data.append("file", image.files[0]);
      image_data.append("pinataOptions", JSON.stringify({cidVersion: 1}));

      console.log(image_data);

      try {
        M.toast({ html: "Uploading Image to IPFS via Pinata..." });
        const image_upload_response = await fetch("https://api.pinata.cloud/pinning/pinFileToIPFS", {
          method: "POST",
          mode: "cors",
          headers: {
            pinata_api_key,
            pinata_secret_api_key
          },
          body: image_data,
        });

        const image_hash = await image_upload_response.json();
        // console.log(image_hash);
        imageURL = `${image_hash.IpfsHash}`;
      } catch (e) {
        alert("ERROR:", JSON.stringify(e));
      }
      console.log(imageURL);
    var response = await this.contract.methods.updateStatus(parcelID, trackingDetails, imageURL, 0).send({from:sessionStorage.userAddress}).then(function(receipt){
      console.log(receipt);
      document.getElementById('updateTrackingResponse').innerHTML = 'Parcel successfully updated.';
      setTimeout(function(){document.getElementById('updateTrackingResponse').innerHTML = ''}, 4000);
    });
  },


  updateTrackingCourier: async function(){
    await dApp.getCourierNumber();
    var parcelID = document.getElementById('updateTrackingIDLabel').value;
    var trackingDetails = document.getElementById('updateTrackingDetailsLabel').value;
    var imageURL = null;
    console.log(trackingDetails);

    const image = document.getElementById('updateTrackingImage');

    const pinata_api_key = "c60c20f848f8490bc51b";
    const pinata_secret_api_key = "66435784d425667f5cc6e8331ab540683bc96ea6253e46ab7ae14431534ccef1";

    console.log(image, pinata_api_key, pinata_secret_api_key);

      if (!image) {
        M.toast({ html: "Please fill out then entire form!" });
        return;
      }

      const image_data = new FormData();
      image_data.append("file", image.files[0]);
      image_data.append("pinataOptions", JSON.stringify({cidVersion: 1}));

      console.log(image_data);

      try {
        M.toast({ html: "Uploading Image to IPFS via Pinata..." });
        const image_upload_response = await fetch("https://api.pinata.cloud/pinning/pinFileToIPFS", {
          method: "POST",
          mode: "cors",
          headers: {
            pinata_api_key,
            pinata_secret_api_key
          },
          body: image_data,
        });

        const image_hash = await image_upload_response.json();
        // console.log(image_hash);
        imageURL = `${image_hash.IpfsHash}`;
      } catch (e) {
        alert("ERROR:", JSON.stringify(e));
      }
      console.log(imageURL);
    var response = await this.contract.methods.updateStatus(parcelID, trackingDetails, imageURL, sessionStorage.courierNumber).send({from:sessionStorage.userAddress}).then(function(receipt){
      console.log(receipt);
      document.getElementById('updateTrackingResponse').innerHTML = 'Parcel successfully updated.';
      setTimeout(function(){document.getElementById('updateTrackingResponse').innerHTML = ''}, 4000);
    });
  },

  trackParcel: async function(){  
    var table = document.getElementById('trackParcelTable')
    var rows = table.getElementsByTagName("tr").length

    for(var j=rows-1; j>0; j--){
      table.deleteRow(j);
    };

    var parcelID = document.getElementById('trackParcelLabel').value;
    console.log(parcelID);
    
    const events = await this.contract.getPastEvents('Status', {
      fromBlock :0
    });
    console.log(events);
    // console.log(Object.values(events)[0]);

    for (var i=0; i<events.length; i++){
      if (Object.values(events)[i]['returnValues']['parcelId'] == parcelID){
        console.log(Object.values(events)[i]['returnValues']['report']);
        var row = table.insertRow()
        var cell = row.insertCell();
        cell.innerHTML = Object.values(events)[i]['returnValues']['report'];
        cell = row.insertCell();
        if (Object.values(events)[i]['returnValues']['imageURL'] == "undefined"){
          cell.innerHTML =  `<img src="https://gateway.pinata.cloud/ipfs/bafkreicmictvqf3etercz7klkqyuihxqlqio2phbykf7tmhitlpnkpqdaq" style="width: 200px" />`;
        }
        else{
          const renderItem = (imageURL) => `<img src="https://gateway.pinata.cloud/ipfs/${imageURL}" style="width: 500px" />`;
          cell.innerHTML = renderItem(Object.values(events)[i]['returnValues']['imageURL'])
        }
      }
    }
  },


  trackParcelCustomer: async function(){  
    var table = document.getElementById('trackParcelTable')
    var rows = table.getElementsByTagName("tr").length

    for(var j=rows-1; j>0; j--){
      table.deleteRow(j);
    };

    var parcelID = document.getElementById('trackParcelLabel').value;
    console.log(parcelID);
    
    const events = await this.contract.getPastEvents('Status', {
      fromBlock :0
    });
    console.log(events);
    // console.log(Object.values(events)[0]);

    const parcelId = await this.contract.methods.parcel(parcelID).call();
    if(parcelId['customerAddress'].toLowerCase() != sessionStorage.userAddress){
      console.log(parcelId['customerAddress'].toLowerCase());
      console.log(sessionStorage.userAddress);
      document.getElementById('trackParcelResponse').innerHTML = 'You cannot view someone elses parcel!.';
      setTimeout(function(){document.getElementById('trackParcelResponse').innerHTML = ''}, 4000);
    }
    else{
      for (var i=0; i<events.length; i++){
        if (Object.values(events)[i]['returnValues']['parcelId'] == parcelID){
          console.log(Object.values(events)[i]['returnValues']['report']);
          var row = table.insertRow()
          var cell = row.insertCell();
          cell.innerHTML = Object.values(events)[i]['returnValues']['report'];
          cell = row.insertCell();
          if (Object.values(events)[i]['returnValues']['imageURL'] == "undefined"){
            cell.innerHTML =  `<img src="https://gateway.pinata.cloud/ipfs/bafkreicmictvqf3etercz7klkqyuihxqlqio2phbykf7tmhitlpnkpqdaq" style="width: 200px" />`;
          }
          else{
            const renderItem = (imageURL) => `<img src="https://gateway.pinata.cloud/ipfs/${imageURL}" style="width: 500px" />`;
            cell.innerHTML = renderItem(Object.values(events)[i]['returnValues']['imageURL'])
          }
        }
      }
    }
  },

  // removeText: function(id){
  //   document.getElementById(id).innerHTML = '';
  // },


  getEvents: async function(){  
    const events = await this.contract.getPastEvents('Status', {
      fromBlock :0
    });
    console.log(events);
  },

  main: async function() {
    if (!this.ethEnabled()) {
      alert("Please install MetaMask to use this dApp!");
    }

    this.accounts = await window.web3.eth.getAccounts();

    this.trackingABI = await (await fetch("./tracking.json")).json();

    this.contract = await new window.web3.eth.Contract(
      this.trackingABI,
      contract_address,
     // { defaultAccount: this.accounts[0] }
    );
    console.log("Contract object", this.contract);

	// this.parcelTracking();
  }
};


dApp.main();
