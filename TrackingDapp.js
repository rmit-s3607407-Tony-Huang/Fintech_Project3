const contract_address = "0x4a8fC50e45Ff56A36Ea2A414Eafcb0dEeB3A6069";

const dApp = {
  
  ethEnabled: function() {
    if (window.ethereum) {
      window.web3 = new Web3(window.ethereum);
      window.ethereum.enable();
	 
      return true;
    }
    return false;
  },
  updateUI: function() {
    const renderItem = (parcelId, parcelUri, icon_class, {name, description, image}) => `
        <li>
          <div class="collapsible-header"><i class="${icon_class}"></i>Tracking Number ${parcelId}: ${name}</div>
          <div class="collapsible-body">
            <h6>Description</h6>
            <p>${description}</p>
            <img src="https://gateway.pinata.cloud/ipfs/${image.replace("ipfs://", "")}" style="width: 60%" />
            <p><a href="${parcelUri}">Reference URI</a></p>
          </div>
        </li>
    `;

    // fetch json metadata from IPFS (name, description, image, etc)
    const fetchMetadata = (parcelUri) => fetch(`https://gateway.pinata.cloud/ipfs/${parcelUri.replace("ipfs://", "")}`, { mode: "cors" }).then((resp) => resp.json());

    // fetch the Tracking Events from the contract and append them to the UI list
    this.contract.events.parcelRegistered({fromBlock: 0}, (err, event) => {
      const { parcelId, parcelUri } = event.returnValues;

      fetchMetadata(parcelUri)
      .then((json) => {
        $("#dapp-uploadParcel").append(renderItem(parcelId, parcelUri, "far fa-uploadParcel", json));
      });
    });
	console.log(parcelUri);
    // fetch the OpenSource Events from the contract and append them to the UI list
    // this.contract.events.OpenSource({fromBlock: 0}, (err, event) => {
    //   const { copyright_id, reference_uri } = event.returnValues;

    //   fetchMetadata(reference_uri)
    //   .then((json) => {
    //     $("#dapp-opensource").append(renderItem(copyright_id, reference_uri, "fab fa-osi", json));
    //   });
    //});
  },

  registerParcel: async function() {
    const name = $("#dapp-uploadParcel-name").val();
    const description = $("#dapp-uploadParcel-description").val();
    const image = document.querySelector('input[type="file"]');

    // const pinata_api_key = $("#dapp-pinata-api-key").val();
    // const pinata_secret_api_key = $("#dapp-pinata-secret-api-key").val();
	const pinata_api_key = "c60c20f848f8490bc51b";
	const pinata_secret_api_key = "66435784d425667f5cc6e8331ab540683bc96ea6253e46ab7ae14431534ccef1";

	console.log(name,description,image, pinata_api_key, pinata_secret_api_key);

    if (!pinata_api_key || !pinata_secret_api_key || !name || !description || !image) {
      M.toast({ html: "Please fill out then entire form!" });
      return;
    }

    const image_data = new FormData();
    image_data.append("file", image.files[0]);
    image_data.append("pinataOptions", JSON.stringify({cidVersion: 1}));

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
      const image_uri = `ipfs://${image_hash.IpfsHash}`;

      console.log(image_uri);

      M.toast({ html: `Success. Image located at ${image_uri}.` });
      M.toast({ html: "Uploading JSON..." });

      const reference_json = JSON.stringify({
        pinataContent: { name, description, image: image_uri },
        pinataOptions: {cidVersion: 1}
      });

      const json_upload_response = await fetch("https://api.pinata.cloud/pinning/pinJSONToIPFS", {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
          pinata_api_key,
          pinata_secret_api_key
        },
        body: reference_json
      });

      const reference_hash = await json_upload_response.json();
      const parcelUri = `ipfs://${reference_hash.IpfsHash}`;

      M.toast({ html: `Success. Reference URI located at ${parcelUri}.` });
      M.toast({ html: "Sending to blockchain..." });

	  console.log(parcelUri);

      if ($("#dapp-uploadParcel-toggle").prop("checked")) {
		this.contract.methods.trackParcel(parcelUri).send({from: this.accounts[0]})
        .on("receipt", (receipt) => {
          M.toast({ html: "Transaction Mined! Refreshing UI..." });
          location.reload();
        });
      } else {
        this.contract.methods.trackParcel(parcelUri).send({from: this.accounts[0]})
        .on("receipt", (receipt) => {
          M.toast({ html: "Transaction Mined! Refreshing UI..." });
          location.reload();
        });
      }

     } catch (e) {
       alert("ERROR:", JSON.stringify(e));
     }
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
      { defaultAccount: this.accounts[0] }
    );
    console.log("Contract object", this.contract);

	this.updateUI();
	this.parcelTracking();
	

  }
};

dApp.main();





