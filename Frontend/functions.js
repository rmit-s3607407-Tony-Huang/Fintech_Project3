const contract_address = "0x3135e6D60d8cd1C8A4c13ebB01aaCC0Ef2ab7CAD";
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
    dApp.showAddress();
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
    //   document.getElementById("logoutButton").classList.remove("hidden");
    },

  addCourier: function(){
    document.getElementById('addCourier').setAttribute("class", "list-group-item list-group-item-action active");
    document.getElementById('viewCourier').setAttribute("class", "list-group-item list-group-item-action");
    document.getElementById('addCustomer').setAttribute("class", "list-group-item list-group-item-action");
    document.getElementById('viewCustomer').setAttribute("class", "list-group-item list-group-item-action");
    document.getElementById('addParcel').setAttribute("class", "list-group-item list-group-item-action");
    document.getElementById('viewParcel').setAttribute("class", "list-group-item list-group-item-action");
    document.getElementById('registerParcel').setAttribute("class", "list-group-item list-group-item-action");
    document.getElementById('updateTracking').setAttribute("class", "list-group-item list-group-item-action");
    document.getElementById('trackParcel').setAttribute("class", "list-group-item list-group-item-action");

    // document.getElementById('addCourierContent').setAttribute("class", "col-sm-8");
    // document.getElementById('viewCourierContent').setAttribute("class", "col-sm-8 collapse");
    // document.getElementById('addCustomerContent').setAttribute("class", "col-sm-8 collapse");
    // document.getElementById('viewCustomerContent').setAttribute("class", "col-sm-8 collapse");
    // document.getElementById('addParcelContent').setAttribute("class", "col-sm-8 collapse");
    // document.getElementById('viewParcelContent').setAttribute("class", "col-sm-8 collapse");
    // document.getElementById('registerParcelContent').setAttribute("class", "col-sm-8 collapse");
    // document.getElementById('updateTrackingContent').setAttribute("class", "col-sm-8 collapse");
    // document.getElementById('trackParcelContent').setAttribute("class", "col-sm-8 collapse");

  },

  viewCourier: function(){
    document.getElementById('addCourier').setAttribute("class", "list-group-item list-group-item-action");
    document.getElementById('viewCourier').setAttribute("class", "list-group-item list-group-item-action active");
    document.getElementById('addCustomer').setAttribute("class", "list-group-item list-group-item-action");
    document.getElementById('viewCustomer').setAttribute("class", "list-group-item list-group-item-action");
    document.getElementById('addParcel').setAttribute("class", "list-group-item list-group-item-action");
    document.getElementById('viewParcel').setAttribute("class", "list-group-item list-group-item-action");
    document.getElementById('registerParcel').setAttribute("class", "list-group-item list-group-item-action");
    document.getElementById('updateTracking').setAttribute("class", "list-group-item list-group-item-action");
    document.getElementById('trackParcel').setAttribute("class", "list-group-item list-group-item-action");
    
    // document.getElementById('addCourierContent').setAttribute("class", "col-sm-8 collapse");
    // document.getElementById('viewCourierContent').setAttribute("class", "col-sm-8");
    // document.getElementById('addCustomerContent').setAttribute("class", "col-sm-8 collapse");
    // document.getElementById('viewCustomerContent').setAttribute("class", "col-sm-8 collapse");
    // document.getElementById('addParcelContent').setAttribute("class", "col-sm-8 collapse");
    // document.getElementById('viewParcelContent').setAttribute("class", "col-sm-8 collapse");
    // document.getElementById('registerParcelContent').setAttribute("class", "col-sm-8 collapse");
    // document.getElementById('updateTrackingContent').setAttribute("class", "col-sm-8 collapse");
    // document.getElementById('trackParcelContent').setAttribute("class", "col-sm-8 collapse");
  },

  addCustomer: function(){
    document.getElementById('addCourier').setAttribute("class", "list-group-item list-group-item-action");
    document.getElementById('viewCourier').setAttribute("class", "list-group-item list-group-item-action");
    document.getElementById('addCustomer').setAttribute("class", "list-group-item list-group-item-action active");
    document.getElementById('viewCustomer').setAttribute("class", "list-group-item list-group-item-action");
    document.getElementById('addParcel').setAttribute("class", "list-group-item list-group-item-action");
    document.getElementById('viewParcel').setAttribute("class", "list-group-item list-group-item-action");
    document.getElementById('registerParcel').setAttribute("class", "list-group-item list-group-item-action");
    document.getElementById('updateTracking').setAttribute("class", "list-group-item list-group-item-action");
    document.getElementById('trackParcel').setAttribute("class", "list-group-item list-group-item-action");
  },

  viewCustomer: function(){
    document.getElementById('addCourier').setAttribute("class", "list-group-item list-group-item-action");
    document.getElementById('viewCourier').setAttribute("class", "list-group-item list-group-item-action");
    document.getElementById('addCustomer').setAttribute("class", "list-group-item list-group-item-action");
    document.getElementById('viewCustomer').setAttribute("class", "list-group-item list-group-item-action active");
    document.getElementById('addParcel').setAttribute("class", "list-group-item list-group-item-action");
    document.getElementById('viewParcel').setAttribute("class", "list-group-item list-group-item-action");
    document.getElementById('registerParcel').setAttribute("class", "list-group-item list-group-item-action");
    document.getElementById('updateTracking').setAttribute("class", "list-group-item list-group-item-action");
    document.getElementById('trackParcel').setAttribute("class", "list-group-item list-group-item-action");
  },

  addParcel: function(){
    document.getElementById('addCourier').setAttribute("class", "list-group-item list-group-item-action");
    document.getElementById('viewCourier').setAttribute("class", "list-group-item list-group-item-action");
    document.getElementById('addCustomer').setAttribute("class", "list-group-item list-group-item-action");
    document.getElementById('viewCustomer').setAttribute("class", "list-group-item list-group-item-action");
    document.getElementById('addParcel').setAttribute("class", "list-group-item list-group-item-action active");
    document.getElementById('viewParcel').setAttribute("class", "list-group-item list-group-item-action");
    document.getElementById('registerParcel').setAttribute("class", "list-group-item list-group-item-action");
    document.getElementById('updateTracking').setAttribute("class", "list-group-item list-group-item-action");
    document.getElementById('trackParcel').setAttribute("class", "list-group-item list-group-item-action");
  },

  viewParcel: function(){
    document.getElementById('addCourier').setAttribute("class", "list-group-item list-group-item-action");
    document.getElementById('viewCourier').setAttribute("class", "list-group-item list-group-item-action");
    document.getElementById('addCustomer').setAttribute("class", "list-group-item list-group-item-action");
    document.getElementById('viewCustomer').setAttribute("class", "list-group-item list-group-item-action");
    document.getElementById('addParcel').setAttribute("class", "list-group-item list-group-item-action");
    document.getElementById('viewParcel').setAttribute("class", "list-group-item list-group-item-action active");
    document.getElementById('registerParcel').setAttribute("class", "list-group-item list-group-item-action");
    document.getElementById('updateTracking').setAttribute("class", "list-group-item list-group-item-action");
    document.getElementById('trackParcel').setAttribute("class", "list-group-item list-group-item-action");
  },

  registerParcel: function(){
    document.getElementById('addCourier').setAttribute("class", "list-group-item list-group-item-action");
    document.getElementById('viewCourier').setAttribute("class", "list-group-item list-group-item-action");
    document.getElementById('addCustomer').setAttribute("class", "list-group-item list-group-item-action");
    document.getElementById('viewCustomer').setAttribute("class", "list-group-item list-group-item-action");
    document.getElementById('addParcel').setAttribute("class", "list-group-item list-group-item-action");
    document.getElementById('viewParcel').setAttribute("class", "list-group-item list-group-item-action");
    document.getElementById('registerParcel').setAttribute("class", "list-group-item list-group-item-action active");
    document.getElementById('updateTracking').setAttribute("class", "list-group-item list-group-item-action");
    document.getElementById('trackParcel').setAttribute("class", "list-group-item list-group-item-action");
  },

  updateTracking: function(){
    document.getElementById('addCourier').setAttribute("class", "list-group-item list-group-item-action");
    document.getElementById('viewCourier').setAttribute("class", "list-group-item list-group-item-action");
    document.getElementById('addCustomer').setAttribute("class", "list-group-item list-group-item-action");
    document.getElementById('viewCustomer').setAttribute("class", "list-group-item list-group-item-action");
    document.getElementById('addParcel').setAttribute("class", "list-group-item list-group-item-action");
    document.getElementById('viewParcel').setAttribute("class", "list-group-item list-group-item-action");
    document.getElementById('registerParcel').setAttribute("class", "list-group-item list-group-item-action");
    document.getElementById('updateTracking').setAttribute("class", "list-group-item list-group-item-action active");
    document.getElementById('trackParcel').setAttribute("class", "list-group-item list-group-item-action");
  },

  trackParcel: function(){
    document.getElementById('addCourier').setAttribute("class", "list-group-item list-group-item-action");
    document.getElementById('viewCourier').setAttribute("class", "list-group-item list-group-item-action");
    document.getElementById('addCustomer').setAttribute("class", "list-group-item list-group-item-action");
    document.getElementById('viewCustomer').setAttribute("class", "list-group-item list-group-item-action");
    document.getElementById('addParcel').setAttribute("class", "list-group-item list-group-item-action");
    document.getElementById('viewParcel').setAttribute("class", "list-group-item list-group-item-action");
    document.getElementById('registerParcel').setAttribute("class", "list-group-item list-group-item-action");
    document.getElementById('updateTracking').setAttribute("class", "list-group-item list-group-item-action");
    document.getElementById('trackParcel').setAttribute("class", "list-group-item list-group-item-action active");
  },

  isAdmin: async function(address){
    if (!this.ethEnabled()) {
        alert("Please install MetaMask to use this dApp!");
      }
    this.trackingABI = await (await fetch("./tracking.json")).json();
    this.contract = new window.web3.eth.Contract(
        this.trackingABI,
        contract_address,
    );
    const isAdmin = await this.contract.methods.isAdmin(address).call()
    console.log(isAdmin);
  },

  isCourier: async function(address){
    if (!this.ethEnabled()) {
        alert("Please install MetaMask to use this dApp!");
      }
    this.trackingABI = await (await fetch("./tracking.json")).json();
    this.contract = new window.web3.eth.Contract(
        this.trackingABI,
        contract_address,
    );
    const isCourier = await this.contract.methods.isCourier(address).call()
    console.log(isCourier);
  },

  isCustomer: async function(address){
    if (!this.ethEnabled()) {
        alert("Please install MetaMask to use this dApp!");
      }
    this.trackingABI = await (await fetch("./tracking.json")).json();
    this.contract = new window.web3.eth.Contract(
        this.trackingABI,
        contract_address,
    );
    const isCustomer = await this.contract.methods.isCustomer(address).call()
    console.log(isCustomer);
  },

  getCourierId: async function(){
    if (!this.ethEnabled()) {
        alert("Please install MetaMask to use this dApp!");
      }
    this.trackingABI = await (await fetch("./tracking.json")).json();
    this.contract = new window.web3.eth.Contract(
        this.trackingABI,
        contract_address,
    );

    const courierId = await this.contract.methods.courierId().call();
    console.log(courierId);
    window.localStorage.setItem("courierId",courierId);
  },

  getCouriers: async function(id){
    if (!this.ethEnabled()) {
        alert("Please install MetaMask to use this dApp!");
      }
    this.trackingABI = await (await fetch("./tracking.json")).json();
    this.contract = new window.web3.eth.Contract(
        this.trackingABI,
        contract_address,
    );
    const courierId = await this.contract.methods.couriers(id).call();
    console.log(courierId);
    // window.localStorage.setItem("courierId",courierId);
  },

  addCourier: async function(){
    if (!this.ethEnabled()) {
        alert("Please install MetaMask to use this dApp!");
      }
    this.trackingABI = await (await fetch("./tracking.json")).json();
    this.contract = new window.web3.eth.Contract(
        this.trackingABI,
        contract_address,
    );
    await this.contract.methods.addCourier(document.getElementById('addCourierLabel').value).send({from: sessionStorage.userAddress}).on('receipt', function(receipt){console.log(receipt)});
  },

//   parcelTracking: async function() {

// 	let caller1;
// 	document.querySelector("#caller1").addEventListener('input', (event) => {
// 		caller1 = event.target.value;
// 	})
// 	let courier;
// 	document.querySelector("#courier").addEventListener('input', (event) => {
// 		courier = event.target.value;
// 	})

// 	document.querySelector("#buttonAddCourier").addEventListener('click', () => {
// 		this.contract.methods.addCourier(courier).send({from: caller1}).on(
// 			'receipt', function(receipt){
// 				alert("Successfully courier added")
// 			}
// 		)
// 	})

// 	let caller2;
// 	document.querySelector("#caller2").addEventListener('input', (event) => {
// 		caller2 = event.target.value;
// 	})
// 	let customer;
// 	document.querySelector("#customer").addEventListener('input', (event) => {
// 		customer = event.target.value;
// 	})

// 	document.querySelector("#buttonAddCustomer").addEventListener('click', () => {
// 		this.contract.methods.addCustomer(customer).send({from: caller2}).on(
// 			'receipt', function(receipt){
// 				alert("Successfully customer added")
// 			}
// 		)
// 	})

// 	let caller3;
// 	document.querySelector("#caller3").addEventListener('input', (event) => {
// 		caller3 = event.target.value;
// 	})
// 	let parcelUri;
// 	document.querySelector("#parcelUri").addEventListener('input', (event) => {
// 		parcelUri = event.target.value;
// 	})
// 	let roleId1;
// 	document.querySelector("#roleId1").addEventListener('input', (event) => {
// 		roleId1 = event.target.value;
// 	})

	
// 	document.querySelector("#registerParcel").addEventListener('click', () => {
// 		this.contract.methods.registerParcel(parcelUri, roleId1).send({from: caller3}).on(
// 			'receipt', function(receipt) {
// 				alert("Successfully parcel registered")
// 			}
// 		)
// 	})

// 	let caller4;
// 	document.querySelector("#caller4").addEventListener('input', (event) => {
// 		caller4 = event.target.value;
// 	})
// 	let parcelId1;
// 	document.querySelector("#parcelId1").addEventListener('input', (event) => {
// 		parcelId1 = event.target.value;
// 	})
// 	let statusUri;
// 	document.querySelector("#statusUri").addEventListener('input', (event) => {
// 		statusUri = event.target.value;
// 	})
// 	let roleId2;
// 	document.querySelector("#roleId2").addEventListener('input', (event) => {
// 		roleId2 = event.target.value;
// 	})

// 	document.querySelector("#updateStatus").addEventListener('click', () => {
// 		this.contract.methods.trackingUpdated(parcelId1, statusUri, roleId2).send({from: caller4}).on(
// 			'receipt', function(receipt){
// 				alert("Successfully tracking status updated")
// 			}
// 		)
// 	})

// 	let caller5;
// 	document.querySelector("#caller5").addEventListener('input', (event) => {
// 		caller5 = event.target.value;
// 	})
// 	let parcelId2;
// 	document.querySelector("#parcelId2").addEventListener('input', (event) => {
// 		parcelId2 = event.target.value;
// 	})
// 	let roleId3;
// 	document.querySelector("#roleId3").addEventListener('input', (event) => {
// 		roleId3 = event.target.value;
// 	})

// 	document.querySelector("#viewStatus").addEventListener('click', () => {
// 		this.contract.methods.trackParcel(parcelId2, roleId3).send({from: caller5}).on(
// 			'receipt', function(receipt){
// 				alert("Successfully tracking status updated")
// 			}
// 		)
// 	})


//   },

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

// dApp.main();
