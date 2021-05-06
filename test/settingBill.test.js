describe('Settings bill with factory function', function () {
    it('It should be able to set call cost', function () {
        let settingsBill = SettingsBill();

        settingsBill.setCallCost(2.40);
        assert.equal(2.40, settingsBill.getCallCost());

        let settingsBill2 = SettingsBill();

        settingsBill2.setCallCost(0.99);
        assert.equal(0.99, settingsBill2.getCallCost());

        let settingsBill3 = SettingsBill();

        settingsBill3.setCallCost(0.99);
        assert.equal(0.99, settingsBill3.getCallCost());
    });
    it('It should be able to set sms cost', function () {
        let settingsBill = SettingsBill();
        settingsBill.setSmsCost(1.25);
        assert.equal(1.25, settingsBill.getSmsCost());

        let settingsBill2 = SettingsBill();

        settingsBill2.setSmsCost(0.15);
        assert.equal(0.15, settingsBill2.getSmsCost());

        let settingsBill3 = SettingsBill();

        settingsBill3.setCallCost(2.99);
        assert.equal(2.99, settingsBill3.getCallCost());
    });
    it('It should be able to set the warning amount', function () {
        let settingsWarningLevel = SettingsBill();
        settingsWarningLevel.setWarningLevel(22);
        assert.equal(22, settingsWarningLevel.getWarningLevel());

        let settingsWarningLevel2 = SettingsBill();
        settingsWarningLevel2.setWarningLevel(20);
        assert.equal(20, settingsWarningLevel2.getWarningLevel());

        let settingsWarningLevel3 = SettingsBill();
        settingsWarningLevel3.setWarningLevel(42);
        assert.equal(42, settingsWarningLevel3.getWarningLevel());
    });
    it('It should be able to set the critical amount', function () {
        let settingsCriticalLevel = SettingsBill();

        settingsCriticalLevel.setCriticalLevel(50);
        assert.equal(50, settingsCriticalLevel.getCriticalLevel());

        let settingsCriticalLevel2 = SettingsBill();

        settingsCriticalLevel2.setCriticalLevel(55);
        assert.equal(55, settingsCriticalLevel2.getCriticalLevel());
    });
});
describe('bill settings', function () {
    it('It should be able to use the call cost set', function () {

        let settingsBill = SettingsBill();
        settingsBill.setCallCost(2.25);
        settingsBill.setSmsCost(0.75);
        settingsBill.setWarningLevel(5)
        settingsBill.setCriticalLevel(10);
        settingsBill.makeCall();
        settingsBill.makeCall();
        settingsBill.makeCall();

        assert.equal(6.75,settingsBill.getTotalCost());
        assert.equal(6.75,settingsBill.getTotalCallCost());
        assert.equal(0.00,settingsBill.getTotalSmsCost()); 

    });
    it("It should be able to send 5 SMSes at a cost of 1.25 each", function () {

        let settingsBill = SettingsBill();
        settingsBill.setCallCost(2.40);
        settingsBill.setSmsCost(1.25);
        settingsBill.setWarningLevel(5)
        settingsBill.setCriticalLevel(10);
        settingsBill.sendSms(); 
        settingsBill.sendSms(); 
        settingsBill.sendSms(); 
        settingsBill.sendSms();
        settingsBill.sendSms();       

        assert.equal(6.25,settingsBill.getTotalCost());
        assert.equal(0.00,settingsBill.getTotalCallCost());
        assert.equal(6.25,settingsBill.getTotalSmsCost()); 

    });

    it("should be able to send the SMSes and make a calls", function () {

        let settingsBill = SettingsBill();
        settingsBill.setCallCost(2.20);
        settingsBill.setSmsCost(1.00);
        settingsBill.setWarningLevel(5)
        settingsBill.setCriticalLevel(10);
        settingsBill.sendSms();
        settingsBill.sendSms(); 
        settingsBill.makeCall() 
        settingsBill.makeCall()       

        assert.equal(6.40,settingsBill.getTotalCost());
        assert.equal(4.40,settingsBill.getTotalCallCost());
        assert.equal(2.00,settingsBill.getTotalSmsCost());        
    });   
    describe('Checking warning and critical amounts', function(){
        it("It should return a class of warning when warning amount has been exceeded",function(){
            let settingsBill = SettingsBill();
            
            settingsBill.setCallCost(2.40);
            settingsBill.setSmsCost(0.99);
            settingsBill.setWarningLevel(7.5)
            settingsBill.setCriticalLevel(15);
            settingsBill.makeCall(); 
            settingsBill.makeCall(); 
            settingsBill.makeCall(); 
            settingsBill.makeCall(); 
            settingsBill.makeCall();

            assert.equal('warning',settingsBill.totalClassName());
        });
    
        it("It should return a class of \"critical\" when critical amount has been exceeded",function(){
            let settingsBill = SettingsBill();
            
            settingsBill.setCallCost(1.35);
            settingsBill.setSmsCost(0.85);
            settingsBill.setWarningLevel(5)
            settingsBill.setCriticalLevel(10);
            settingsBill.sendSms();
            settingsBill.makeCall(); 
            settingsBill.makeCall(); 
            settingsBill.makeCall(); 
            settingsBill.makeCall(); 
            settingsBill.makeCall(); 
            settingsBill.makeCall(); 
            settingsBill.makeCall(); 
            settingsBill.makeCall(); 
    
            assert.equal('critical',settingsBill.totalClassName());
        });
        it("it should stop calculating when the critical amount has been exceeded",function(){
            let settingsBill = SettingsBill();
            
            settingsBill.setCallCost(2.50);
            settingsBill.setSmsCost(0.85);
            settingsBill.setWarningLevel(8)
            settingsBill.setCriticalLevel(12.5);
      
            settingsBill.makeCall(); 
            settingsBill.makeCall(); 
            settingsBill.makeCall(); 
            settingsBill.makeCall(); 
            settingsBill.makeCall();  
    
            assert.equal('critical',settingsBill.totalClassName());
            assert.equal(12.5,settingsBill.getTotalCallCost());

            
        });
        it("should allow the warning and critical amount to be changed and the class names to change when the new values are greater than the previously set value ",function(){
            let settingsBill = SettingsBill();
            
            settingsBill.setCallCost(2.40);
            settingsBill.setSmsCost(1.00);
            settingsBill.setWarningLevel(8)
            settingsBill.setCriticalLevel(10);
      
            settingsBill.makeCall(); 
            settingsBill.makeCall(); 
            settingsBill.makeCall(); 
            settingsBill.makeCall(); 
            settingsBill.makeCall(); 
            settingsBill.setCriticalLevel(22);
            assert.equal('warning',settingsBill.totalClassName());
            settingsBill.makeCall(); 
            settingsBill.makeCall();
            settingsBill.makeCall();
            assert.equal(19.20,settingsBill.getTotalCallCost());

        });
    });
});