function calculateBills(){
    var callCount = 0;
  	var smsCount = 0;
    var callCost = 2.75;
    var smsCost = 0.65;
    var totalBill;
     
   
    function setTotal(bill){

        var str = bill.replace(/ /g,'')
  	    var input = str.split(','); 

        for(var i = 0; i < input.length; i++) {
            if(input[i] === "call") {
                callCount++;
            } else if(input[i] === "sms"){
                smsCount++;
            }
        }
        totalBill = (smsCount * smsCost) + (callCount * callCost)
     return ('R' + totalBill.toFixed(2));

    }
    function getTotalCallCost(){
        return totalBill;
    }

    function getTotalSmsCost(){
        return totalBill;
    }
    function getTotalCost(){
        return totalBill;
    }
    
    function totalClassName(){
        if (getTotalCost() >= 30){
            return 'critical';
        }
        else if (getTotalCost() >= 20){
            return 'warning';
        }
    }
    return {               
        setTotal,
        getTotalCost,
        getTotalCallCost,
        getTotalSmsCost,
        totalClassName
    }
}