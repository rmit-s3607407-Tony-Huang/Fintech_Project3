const contract_address = "0x31c8c933e999BAd0E0c47366818866AF783502c4";

const dApp = {
  
  ethEnabled: function() {
    if (window.ethereum) {
      window.web3 = new Web3(window.ethereum);
      window.ethereum.enable();
	 
      return true;
    }
    return false;
  },

  parcelTracking: async function() {
	
	const ethereum = window.ethereum;
	let walletAddress = ethereum.selectedAddress;

	let courier;
	document.querySelector("#courier").addEventListener('input', (event) => {
		courier = event.target.value;
	})

	document.querySelector("#buttonAddCourier").addEventListener('click', () => {
		this.contract.methods.addCourier(courier).send({from: walletAddress}).on(
			'receipt', function(receipt){
				alert("Successfully courier added")
			}
		)
	})

	let customer;
	document.querySelector("#customer").addEventListener('input', (event) => {
		customer = event.target.value;
	})

	document.querySelector("#buttonAddCustomer").addEventListener('click', () => {
		this.contract.methods.addCustomer(customer).send({from: walletAddress}).on(
			'receipt', function(receipt){
				alert("Successfully customer added")
			}
		)
	})

	let parcelUri;
	document.querySelector("#parcelUri").addEventListener('input', (event) => {
		parcelUri = event.target.value;
	})
	let roleId1;
	document.querySelector("#roleId1").addEventListener('input', (event) => {
		roleId1 = event.target.value;
	})

	
	document.querySelector("#registerParcel").addEventListener('click', () => {
		this.contract.methods.registerParcel(parcelUri, roleId1).send({from: walletAddress}).on(
			'receipt', function(receipt) {
				alert("Successfully parcel registered")
			}
		)
	})


	let parcelId1;
	document.querySelector("#parcelId1").addEventListener('input', (event) => {
		parcelId1 = event.target.value;
	})
	let statusUri;
	document.querySelector("#statusUri").addEventListener('input', (event) => {
		statusUri = event.target.value;
	})
	let roleId2;
	document.querySelector("#roleId2").addEventListener('input', (event) => {
		roleId2 = event.target.value;
	})

	document.querySelector("#updateStatus").addEventListener('click', () => {
		this.contract.methods.trackingUpdated(parcelId1, statusUri, roleId2).send({from: walletAddress}).on(
			'receipt', function(receipt){
				alert("Successfully tracking status updated")
			}
		)
	})

	
	let parcelId2;
	document.querySelector("#parcelId2").addEventListener('input', (event) => {
		parcelId2 = event.target.value;
	})
	let roleId3;
	document.querySelector("#roleId3").addEventListener('input', (event) => {
		roleId3 = event.target.value;
	})

	document.querySelector("#viewStatus").addEventListener('click', () => {
		this.contract.methods.trackParcel(parcelId2, roleId3).send({from: this.walletAddress}).on(
			'receipt', function(receipt){
				alert("Successfully tracking status updated")
			}
		)
	})


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

	this.parcelTracking();

  }
};

dApp.main();





