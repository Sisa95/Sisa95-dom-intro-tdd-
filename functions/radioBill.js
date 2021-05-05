function RadioBills(){
    
    var callCount_RB =0;
    var smsCount_RB = 0;
    var totalBill_RB = 0;

    var call_Cost = 2.75;
    var sms_Cost = 0.65;
    
    function selectRadioBill(str){
      
        if(str === "call") {
            callCount_RB += call_Cost;    
        } else if(str === "sms"){
            smsCount_RB += sms_Cost;
        }

        totalBill_RB = callCount_RB + smsCount_RB;
    }
    function getCallCount_RB(){
        return callCount_RB * call_Cost;
    }
    function getSmsCount_RB(){
        return smsCount_RB * sms_Cost;
    }

    function getTotalBill_RB(){
        return totalBill_RB = smsCount_RB  + callCount_RB;
    }

    function totalClassName(){
        if (getTotalCost() >= 50){
            return 'critical';
        }
        else if (getTotalCost() >= 30){
            return 'warning';
        }
    }
    return {
        selectRadioBill,
        getTotalBill_RB,
        totalClassName,
        getCallCount_RB,
        getSmsCount_RB
    }
}