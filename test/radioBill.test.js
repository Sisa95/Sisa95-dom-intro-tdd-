describe ('Calculate radio bill function using Factory Function', function(){
    it('Should return the call total R2.75 and overall total R2.75 when call is selected', function () {

        let radioBill = RadioBills();
        radioBill.selectRadioBill('call');        
    
        assert.equal(2.75,radioBill.getTotalBill_RB());  
        assert.equal(2.75, radioBill.getCallCount_RB()) ;
        assert.equal(0,radioBill.getSmsCount_RB())       
    
    });
    it("Should return the sms total R0.75 and overall total R0.75 when sms is selected" , function () {
    
        let radioBill = RadioBills(); 
        radioBill.selectRadioBill('sms');      
        assert.equal(0.75,radioBill.getTotalBill_RB());
        assert.equal(0, radioBill.getCallCount_RB()) ;
        assert.equal(0.75,radioBill.getSmsCount_RB());
        
    });
    
    it("Should return a total of R0.00 for call, sms total and overall total when no button is selected", function () {
    
        let radioBill = RadioBills();    
         
        radioBill.selectRadioBill(''); 
        radioBill.selectRadioBill('');       
        assert.equal(0,radioBill.getTotalBill_RB());
        assert.equal(0, radioBill.getCallCount_RB()) ;
        assert.equal(0,radioBill.getSmsCount_RB());              

    }); 
    
    it("Should return the call total R2.75 ,sms total R0.75 and overall total R3.50 when call and sms are selected", function () {
    
        let radioBill = RadioBills();    
         
        radioBill.selectRadioBill('sms'); 
        radioBill.selectRadioBill('call');       
        assert.equal(3.50,radioBill.getTotalBill_RB());
        assert.equal(2.75, radioBill.getCallCount_RB()) ;
        assert.equal(0.75,radioBill.getSmsCount_RB());              

    });   
    describe('Checking warning and critical amounts', function(){
        it("It should return a class of warning when warning amount has been exceeded",function(){
            let radioBill = RadioBills();           
            
            
            radioBill.selectRadioBill('call'); 
            radioBill.selectRadioBill('call');
            radioBill.selectRadioBill('call');
            radioBill.selectRadioBill('call');
            radioBill.selectRadioBill('call');
            radioBill.selectRadioBill('call');
            radioBill.selectRadioBill('call');
            radioBill.selectRadioBill('call');
            radioBill.selectRadioBill('call');
            radioBill.selectRadioBill('call');
            radioBill.selectRadioBill('call');                 
            assert.equal('warning',radioBill.totalClassName());
            
        });
    
        it("It should return a class of \"critical\" when critical amount has been exceeded",function(){
            let radioBill = RadioBills(); 
            radioBill.selectRadioBill('call'); 
            radioBill.selectRadioBill('call');
            radioBill.selectRadioBill('call');
            radioBill.selectRadioBill('call');
            radioBill.selectRadioBill('call');
            radioBill.selectRadioBill('call');
            radioBill.selectRadioBill('call');
            radioBill.selectRadioBill('call');
            radioBill.selectRadioBill('call');
            radioBill.selectRadioBill('call');
            radioBill.selectRadioBill('call');
            radioBill.selectRadioBill('call'); 
            radioBill.selectRadioBill('call'); 
            radioBill.selectRadioBill('call');
            radioBill.selectRadioBill('call');
            radioBill.selectRadioBill('call');
            radioBill.selectRadioBill('call'); 
            radioBill.selectRadioBill('call'); 
            radioBill.selectRadioBill('call');
            radioBill.selectRadioBill('call');
            radioBill.selectRadioBill('call');
            radioBill.selectRadioBill('call');
            radioBill.selectRadioBill('call');
            radioBill.selectRadioBill('call');
            assert.equal('critical',radioBill.totalClassName());
        });
    });
});