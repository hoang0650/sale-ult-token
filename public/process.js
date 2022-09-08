const web3 = new Web3(window.ethereum);

$(document).ready(function(){
    $("#connect").click(function(){
        
        connectWallet().then(function(data){
            console.log(data)
        });
    });
});

async function connectWallet(){
    const accounts = ethereum.request({ method: 'eth_requestAccounts'});
    return accounts;
}