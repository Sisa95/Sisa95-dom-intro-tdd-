describe('Calculate bill with Factory function', function(){
    it('Should be return a total amount of R7.45 from a string of "call, sms,sms, call, sms" ', function(){
        let calculateBill = calculateBills();
        
        calculateBill.setTotal("call, sms, sms,call, sms");
        assert.equal(7.45,calculateBill.getTotalCost());
    });

    it('Should return a total amount of R2.60 from a string of "sms, sms, sms, sms" ', function(){
        let calculateBill = calculateBills();
        
        calculateBill.setTotal("sms,sms,sms, sms");
        assert.equal(2.60,calculateBill.getTotalSmsCost());
    });

    it('Should return a total amount of R8.25 from a string of "call, call, call" ', function(){
        let calculateBill = calculateBills();
        
        calculateBill.setTotal("call,call , call");
        assert.equal(8.25,calculateBill.getTotalCallCost());
    });

    describe('Checking warning and critical amounts', function(){
        it("It should return a class of warning when warning amount has been exceeded", function(){
            let calculateBill = calculateBills();
            
            calculateBill.setTotal("call,call,call,sms, call,call,call,sms,sms,call");
            assert.equal('warning',calculateBill.totalClassName());
        });
        it("It should return a class of 'critical' when critical level has been exceeded", function(){
            let calculateBill = calculateBills();
            
            calculateBill.setTotal("call,call,call,sms, call,call,call,sms,sms,call,call,call,call,sms,sms");
            assert.equal('critical',calculateBill.totalClassName());
        });
    });

});