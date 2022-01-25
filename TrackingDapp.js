const contract_address = "0x857F15AEAa6c54eE088Be09E0780951ecD23Eed8";

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
				alert("Successfully courier added");
			}
		)
		this.contract.events.renderCourierId({fromBlock: 0}).on('data', function(event) {
			const selectElement = document.querySelector('#addCourierLog');
			selectElement.innerHTML = event.returnValues["_courierId"]
		})
			
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
		this.contract.events.renderCustomerId({fromBlock: 0}).on('data', function(event) {
			const selectElement = document.querySelector('#addCustomerLog');
			selectElement.innerHTML = event.returnValues["_customerId"]	
		})
		
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
		this.contract.events.parcelRegistered({fromBlock: 0}).on('data', function(event) {
			console.log(event.returnValues["parcelId"])
			const selectElement = document.querySelector('#parcelLog');
			selectElement.innerHTML = event.returnValues["parcelId"];
		})
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
		this.contract.methods.trackParcel(parcelId2, roleId3).send({from: walletAddress}).on(
			'receipt', function(receipt){	
			})
		
		const view = document.querySelector("#view");
		let container = `<div id="container"></div> `;
		view.insertAdjacentHTML('afterend', container);
		container = document.querySelector("#container")
		this.contract.events.track().on('data', function(event) {
			const child = document.createElement('div');
			child.innerHTML = event.returnValues['status'];
			container.appendChild(child);
			console.log(event.returnValues['status']);
		})
		setTimeout(() => {
			container.remove();
		}, 10000)
	
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





