function SettingsBill() {
    var theCallCost = 0;
    var theSmsCost = 0;
    var Call_Cost = 0;
    var Sms_Cost = 0;
    
    var warningAmount = 0;
    var criticalAmount = 0;
    
    function setCallCost(callCost) {
        theCallCost = callCost;
    }
    function getCallCost() {
        return theCallCost;
    }
    function setSmsCost(smsCost) {
        theSmsCost = smsCost;
    }
    function getSmsCost() {
        return theSmsCost;
    }
    function setWarningLevel(warningLevel) {
        warningAmount = warningLevel;
    }
    function getWarningLevel() {
        return warningAmount;
    }
    function setCriticalLevel(criticalLevel) {
        criticalAmount = criticalLevel;
    }
    function getCriticalLevel() {
        return criticalAmount;
    }
    function criticalAmountExceeded(){
        return getTotalCost() >= getCriticalLevel();
    }
    function makeCall(){
        if(!criticalAmountExceeded()){
            Call_Cost += theCallCost;
        }
    }
    function getTotalCost(){
        return Call_Cost + Sms_Cost;
    }
    function sendSms(){
        if(!criticalAmountExceeded()){
            Sms_Cost += theSmsCost;
        }
    }
    function getTotalCallCost(){
        return Call_Cost; 
    }
    function getTotalSmsCost(){
        return Sms_Cost;
    }
    function totalClassName(){
        if (criticalAmountExceeded()){
            return 'critical';
        }
        else if (getTotalCost() >= getWarningLevel()){
            return 'warning';
        }
    }
   
    return {
        setCallCost,
        getCallCost,
        setSmsCost,
        getSmsCost,
        setWarningLevel,
        getWarningLevel,
        setCriticalLevel,
        getCriticalLevel,
        makeCall,
        getTotalCost,
        getTotalCallCost,
        getTotalSmsCost,
        sendSms,
        totalClassName,
        criticalAmountExceeded
    }
}