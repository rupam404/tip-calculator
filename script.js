let calculate = document.querySelector('#calculate');





calculate.addEventListener('click', () => {
    let totalBill = document.getElementById("totalBill").value;
    let tipPercent = document.getElementById("tipPercent").value;
    let split = document.getElementById("split").value;

  
    
    if(totalBill === '' || tipPercent === 0 || split === 0 || totalBill < 0 || tipPercent < 0 || split < 0 ){
        alert('Please Enter Valid Inputs');
        location.reload();
       
    }


    
    let total = (totalBill * tipPercent) / split;
    total = total.toFixed(2);
    
    document.getElementById("tip").innerHTML = total;

    

})