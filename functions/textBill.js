function textBills(){
    var smsCount = 0;
    var callCount = 0;
    var smsCost = 0.65;
    var callCost = 2.75;
    var total_Bill = 0;

    function setBillType(bill){
        if(bill === "call") {
            callCount += callCost;
    
        } else if(bill === "sms"){
            smsCount += smsCost;
        }
        
        total_Bill = callCount + smsCount;
    }
    function getCallCost(){
        return callCount;
    }
    function getSmsCost(){
        return smsCount;
    }

    function getTotalCost(){
        return callCount + smsCount;
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
        setBillType,
        getCallCost,
        getSmsCost,
        getTotalCost,
        totalClassName
    }
}