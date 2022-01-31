const contract_address = "0x1Dc80859afAeb604428205727E0661aA9407ca9c";
let statusUri;

const dApp = {
  ethEnabled: function() {
    if (window.ethereum) {
      window.web3 = new Web3(window.ethereum);
      window.ethereum.enable();
      return true;
    }
    return false;
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
        //   window.userAddress = selectedAccount;

        //   window.localStorage.setItem("userAddress", selectedAccount);
        //   system.log(window.userAddress)
        //   dApp.showAddress();
          dApp.adminPage()
        } catch (error) {
          console.error(error);
        }
      } else {
        alert("No ETH brower extension detected.");
      }
  },

  logout: function(){
    sessionStorage.userAddress = null;
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


  isAdmin: async function(address){
    const isAdmin = await this.contract.methods.isAdmin(address).call()
    console.log(isAdmin);
  },

  isCourier: async function(address){
    const isCourier = await this.contract.methods.isCourier(address).call()
    console.log(isCourier);
  },

  isCustomer: async function(address){
    const isCustomer = await this.contract.methods.isCustomer(address).call()
    console.log(isCustomer);
  },

  getCourierId: async function(){
    const courierId = await this.contract.methods.courierId().call();
    console.log(courierId);
    window.localStorage.setItem("courierId",courierId);
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
        cell.innerHTML = await this.contract.methods.couriers(i).call();;
    };
  },

  addCustomer: async function(){
    var customerAddress = document.getElementById('addCustomerLabel').value;
    var response = await this.contract.methods.addCustomer(customerAddress).send({from:sessionStorage.userAddress}).then(function(receipt){
      console.log(receipt);
      document.getElementById('addCustomerResponse').innerHTML = 'Address added successfully.';
    });

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
    });

  },

  viewParcel: async function(){
    const parcelId = await this.contract.methods.parcelId().call();
    
    // console.log(parcelAddress);
    // console.log(parcelAddress['customerAddress']);
    // console.log(await Object.values(this.contract.methods.parcel(1).call()));

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

  updateTrackingAdmin: async function(){
    var parcelID = document.getElementById('updateTrackingIDLabel').value;
    var trackingDetails = document.getElementById('updateTrackingDetailsLabel').value;
    var imageURL = null;
    console.log(trackingDetails);

    // var response = await this.contract.methods.updateStatus(parcelID, trackingDetails, 'imageurl', 0).send({from:sessionStorage.userAddress}).then(function(receipt){
    //   console.log(receipt);
    //   document.getElementById('updateTrackingResponse').innerHTML = 'Parcel successfully updated.';
    // });
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
          cell.innerHTML =  `<img src="https://gateway.pinata.cloud/ipfs/bafkreicmictvqf3etercz7klkqyuihxqlqio2phbykf7tmhitlpnkpqdaq" style="width: 500px" />`;
        }
        else{
          const renderItem = (imageURL) => `<img src="https://gateway.pinata.cloud/ipfs/${imageURL}" style="width: 500px" />`;
          cell.innerHTML = renderItem(Object.values(events)[i]['returnValues']['imageURL'])
        }

       
      }
    }
  },


  getEvents: async function(){  
    const events = await this.contract.getPastEvents('Status', {
      fromBlock :0
    });
    console.log(events);

  },



  addCourierStyle: function(){
    document.getElementById('addCourier').setAttribute("class", "list-group-item list-group-item-action active");
    document.getElementById('viewCourier').setAttribute("class", "list-group-item list-group-item-action");
    document.getElementById('addCustomer').setAttribute("class", "list-group-item list-group-item-action");
    document.getElementById('viewCustomer').setAttribute("class", "list-group-item list-group-item-action");
    document.getElementById('addParcel').setAttribute("class", "list-group-item list-group-item-action");
    document.getElementById('viewParcel').setAttribute("class", "list-group-item list-group-item-action");
    // document.getElementById('registerParcel').setAttribute("class", "list-group-item list-group-item-action");
    document.getElementById('updateTracking').setAttribute("class", "list-group-item list-group-item-action");
    document.getElementById('trackParcel').setAttribute("class", "list-group-item list-group-item-action");

    document.getElementById('addCourierContent').setAttribute("class", "col");
    document.getElementById('viewCourierContent').setAttribute("class", "col collapse");
    document.getElementById('addCustomerContent').setAttribute("class", "col collapse");
    document.getElementById('viewCustomerContent').setAttribute("class", "col collapse");
    document.getElementById('addParcelContent').setAttribute("class", "col collapse");
    document.getElementById('viewParcelContent').setAttribute("class", "col collapse");
    // document.getElementById('registerParcelContent').setAttribute("class", "col collapse");
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
    // document.getElementById('registerParcel').setAttribute("class", "list-group-item list-group-item-action");
    document.getElementById('updateTracking').setAttribute("class", "list-group-item list-group-item-action");
    document.getElementById('trackParcel').setAttribute("class", "list-group-item list-group-item-action");
    
    document.getElementById('addCourierContent').setAttribute("class", "col collapse");
    document.getElementById('viewCourierContent').setAttribute("class", "col");
    document.getElementById('addCustomerContent').setAttribute("class", "col collapse");
    document.getElementById('viewCustomerContent').setAttribute("class", "col collapse");
    document.getElementById('addParcelContent').setAttribute("class", "col collapse");
    document.getElementById('viewParcelContent').setAttribute("class", "col collapse");
    // document.getElementById('registerParcelContent').setAttribute("class", "col collapse");
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
    // document.getElementById('registerParcel').setAttribute("class", "list-group-item list-group-item-action");
    document.getElementById('updateTracking').setAttribute("class", "list-group-item list-group-item-action");
    document.getElementById('trackParcel').setAttribute("class", "list-group-item list-group-item-action");

    document.getElementById('addCourierContent').setAttribute("class", "col collapse");
    document.getElementById('viewCourierContent').setAttribute("class", "col collapse");
    document.getElementById('addCustomerContent').setAttribute("class", "col");
    document.getElementById('viewCustomerContent').setAttribute("class", "col collapse");
    document.getElementById('addParcelContent').setAttribute("class", "col collapse");
    document.getElementById('viewParcelContent').setAttribute("class", "col collapse");
    // document.getElementById('registerParcelContent').setAttribute("class", "col collapse");
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
    // document.getElementById('registerParcel').setAttribute("class", "list-group-item list-group-item-action");
    document.getElementById('updateTracking').setAttribute("class", "list-group-item list-group-item-action");
    document.getElementById('trackParcel').setAttribute("class", "list-group-item list-group-item-action");

    document.getElementById('addCourierContent').setAttribute("class", "col collapse");
    document.getElementById('viewCourierContent').setAttribute("class", "col collapse");
    document.getElementById('addCustomerContent').setAttribute("class", "col collapse");
    document.getElementById('viewCustomerContent').setAttribute("class", "col");
    document.getElementById('addParcelContent').setAttribute("class", "col collapse");
    document.getElementById('viewParcelContent').setAttribute("class", "col collapse");
    // document.getElementById('registerParcelContent').setAttribute("class", "col collapse");
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
    // document.getElementById('registerParcel').setAttribute("class", "list-group-item list-group-item-action");
    document.getElementById('updateTracking').setAttribute("class", "list-group-item list-group-item-action");
    document.getElementById('trackParcel').setAttribute("class", "list-group-item list-group-item-action");

    document.getElementById('addCourierContent').setAttribute("class", "col collapse");
    document.getElementById('viewCourierContent').setAttribute("class", "col collapse");
    document.getElementById('addCustomerContent').setAttribute("class", "col collapse");
    document.getElementById('viewCustomerContent').setAttribute("class", "col collapse");
    document.getElementById('addParcelContent').setAttribute("class", "col");
    document.getElementById('viewParcelContent').setAttribute("class", "col collapse");
    // document.getElementById('registerParcelContent').setAttribute("class", "col collapse");
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
    // document.getElementById('registerParcel').setAttribute("class", "list-group-item list-group-item-action");
    document.getElementById('updateTracking').setAttribute("class", "list-group-item list-group-item-action");
    document.getElementById('trackParcel').setAttribute("class", "list-group-item list-group-item-action");

    document.getElementById('addCourierContent').setAttribute("class", "col collapse");
    document.getElementById('viewCourierContent').setAttribute("class", "col collapse");
    document.getElementById('addCustomerContent').setAttribute("class", "col collapse");
    document.getElementById('viewCustomerContent').setAttribute("class", "col collapse");
    document.getElementById('addParcelContent').setAttribute("class", "col collapse");
    document.getElementById('viewParcelContent').setAttribute("class", "col");
    // document.getElementById('registerParcelContent').setAttribute("class", "col collapse");
    document.getElementById('updateTrackingContent').setAttribute("class", "col collapse");
    document.getElementById('trackParcelContent').setAttribute("class", "col collapse");

    dApp.viewParcel()
  },

  // registerParcelStyle: function(){
  //   document.getElementById('addCourier').setAttribute("class", "list-group-item list-group-item-action");
  //   document.getElementById('viewCourier').setAttribute("class", "list-group-item list-group-item-action");
  //   document.getElementById('addCustomer').setAttribute("class", "list-group-item list-group-item-action");
  //   document.getElementById('viewCustomer').setAttribute("class", "list-group-item list-group-item-action");
  //   document.getElementById('addParcel').setAttribute("class", "list-group-item list-group-item-action");
  //   document.getElementById('viewParcel').setAttribute("class", "list-group-item list-group-item-action");
  //   document.getElementById('registerParcel').setAttribute("class", "list-group-item list-group-item-action active");
  //   document.getElementById('updateTracking').setAttribute("class", "list-group-item list-group-item-action");
  //   document.getElementById('trackParcel').setAttribute("class", "list-group-item list-group-item-action");

  //   document.getElementById('addCourierContent').setAttribute("class", "col collapse");
  //   document.getElementById('viewCourierContent').setAttribute("class", "col collapse");
  //   document.getElementById('addCustomerContent').setAttribute("class", "col collapse");
  //   document.getElementById('viewCustomerContent').setAttribute("class", "col collapse");
  //   document.getElementById('addParcelContent').setAttribute("class", "col collapse");
  //   document.getElementById('viewParcelContent').setAttribute("class", "col collapse");
  //   document.getElementById('registerParcelContent').setAttribute("class", "col");
  //   document.getElementById('updateTrackingContent').setAttribute("class", "col collapse");
  //   document.getElementById('trackParcelContent').setAttribute("class", "col collapse");
  // },

  updateTrackingStyle: function(){
    document.getElementById('addCourier').setAttribute("class", "list-group-item list-group-item-action");
    document.getElementById('viewCourier').setAttribute("class", "list-group-item list-group-item-action");
    document.getElementById('addCustomer').setAttribute("class", "list-group-item list-group-item-action");
    document.getElementById('viewCustomer').setAttribute("class", "list-group-item list-group-item-action");
    document.getElementById('addParcel').setAttribute("class", "list-group-item list-group-item-action");
    document.getElementById('viewParcel').setAttribute("class", "list-group-item list-group-item-action");
    // document.getElementById('registerParcel').setAttribute("class", "list-group-item list-group-item-action");
    document.getElementById('updateTracking').setAttribute("class", "list-group-item list-group-item-action active");
    document.getElementById('trackParcel').setAttribute("class", "list-group-item list-group-item-action");

    document.getElementById('addCourierContent').setAttribute("class", "col collapse");
    document.getElementById('viewCourierContent').setAttribute("class", "col collapse");
    document.getElementById('addCustomerContent').setAttribute("class", "col collapse");
    document.getElementById('viewCustomerContent').setAttribute("class", "col collapse");
    document.getElementById('addParcelContent').setAttribute("class", "col collapse");
    document.getElementById('viewParcelContent').setAttribute("class", "col collapse");
    // document.getElementById('registerParcelContent').setAttribute("class", "col collapse");
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
    // document.getElementById('registerParcel').setAttribute("class", "list-group-item list-group-item-action");
    document.getElementById('updateTracking').setAttribute("class", "list-group-item list-group-item-action");
    document.getElementById('trackParcel').setAttribute("class", "list-group-item list-group-item-action active");

    document.getElementById('addCourierContent').setAttribute("class", "col collapse");
    document.getElementById('viewCourierContent').setAttribute("class", "col collapse");
    document.getElementById('addCustomerContent').setAttribute("class", "col collapse");
    document.getElementById('viewCustomerContent').setAttribute("class", "col collapse");
    document.getElementById('addParcelContent').setAttribute("class", "col collapse");
    document.getElementById('viewParcelContent').setAttribute("class", "col collapse");
    // document.getElementById('registerParcelContent').setAttribute("class", "col collapse");
    document.getElementById('updateTrackingContent').setAttribute("class", "col collapse");
    document.getElementById('trackParcelContent').setAttribute("class", "col");
  },

  main: async function() {
    if (!this.ethEnabled()) {
      alert("Please install MetaMask to use this dApp!");
    }

    this.accounts = await window.web3.eth.getAccounts();

    this.trackingABI = await (await fetch("./tracking.json")).json();

    this.contract = new window.web3.eth.Contract(
      this.trackingABI,
      contract_address,
     // { defaultAccount: this.accounts[0] }
    );
    console.log("Contract object", this.contract);

	// this.parcelTracking();
  }
};


dApp.main();
