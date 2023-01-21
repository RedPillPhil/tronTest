var connectWalletButton = document.getElementById("connect-wallet-button");

connectWalletButton.addEventListener("click", function() {
    if(typeof window.tronWeb === 'undefined'){
        alert("Please install TRONLink");
    }else{
        tronWeb = new TronWeb({
            fullNode: "https://api.trongrid.io",
            solidityNode: "https://api.trongrid.io",
            eventServer: "https://api.trongrid.io"
        });
        tronWeb.on('addressChanged', function(address) {
            if(address === null) {
                alert("Please connect your TRONLink wallet");
                tronWeb.tronLink.requestLogin();
            }else{
                document.getElementById("address").innerHTML= address;
            }
        });
    }
});
