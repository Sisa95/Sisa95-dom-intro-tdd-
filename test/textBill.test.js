describe("Calcatulate text bill function using Factory Function", function(){
   
    it("should be able to return ovarall total and sms total when text is sms", function(){
        let textBill = textBills();

        textBill.setBillType("sms");
        assert.equal(0.65,textBill.getSmsCost());
    });
    it("should be able to return ovarall total and call total when text type is call", function(){
        let textBill = textBills();

        textBill.setBillType("call");
        assert.equal(2.75,textBill.getTotalCost());
    }); 
    it("It should return a total amount of R3.40 when call and sms are entered", function(){
        let textBill = textBills();

        textBill.setBillType("call");
        textBill.setBillType("sms");
        assert.equal(3.40,textBill.getTotalCost());

    });
    it("Should be able to calculate total amount from sms input only", function(){
        let textBill = textBills();

        textBill.setBillType("sms");
        assert.equal(0.65,textBill.getTotalCost());
    }); 
    it("Should return overall total of sms and call", function(){
        let textBill = textBills();
        textBill.setBillType("sms");
        textBill.setBillType("call");
        assert.equal(3.40,textBill.getTotalCost());
    }); 
   
    describe("Checking warning and critical amounts", function(){
        it("It should return a class of warning when warning amount has been exceeded", function(){
            let textBill = textBills();
    
            textBill.setBillType("sms");
            textBill.setBillType("call");
            textBill.setBillType("sms");
            textBill.setBillType("sms");
            textBill.setBillType("sms");
            textBill.setBillType("call");
            textBill.setBillType("call");
            textBill.setBillType("call");
            textBill.setBillType("call");
            textBill.setBillType("call");
            textBill.setBillType("call");
            textBill.setBillType("call");
            textBill.setBillType("call");
            textBill.setBillType("call");
            textBill.setBillType("call");
            
            assert.equal("warning",textBill.totalClassName());
        }); 
        it("It should return a class of \"critical\" when critical level has been exceeded", function(){
            let textBill = textBills();
    
            textBill.setBillType("sms");
            textBill.setBillType("call");
            textBill.setBillType("sms");
            textBill.setBillType("sms");
            textBill.setBillType("sms");
            textBill.setBillType("call");
            textBill.setBillType("call");
            textBill.setBillType("call");
            textBill.setBillType("call");
            textBill.setBillType("call");
            textBill.setBillType("call");
            textBill.setBillType("call");
            textBill.setBillType("call");
            textBill.setBillType("call");
            textBill.setBillType("call");
            textBill.setBillType("sms");
            textBill.setBillType("sms");
            textBill.setBillType("sms");
            textBill.setBillType("call");
            textBill.setBillType("call");
            textBill.setBillType("call");
            textBill.setBillType("call");
            textBill.setBillType("call");
            textBill.setBillType("call");
            textBill.setBillType("call");
            textBill.setBillType("call");
            textBill.setBillType("call");
            textBill.setBillType("call")
            textBill.setBillType("call");
            textBill.setBillType("call");
            textBill.setBillType("call");
            textBill.setBillType("call");
            textBill.setBillType("call");
            textBill.setBillType("call");
            textBill.setBillType("call");
            
            assert.equal("critical",textBill.totalClassName());
        }); 
    });
    
});