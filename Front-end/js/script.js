$(document).ready(function() {
    
    
    $("#optionSignIn").click(function(){
        $("#selectMethod").fadeOut(1500);
        $("#signIn").fadeIn(1500);
    });
    
    $("#email").change(validate).keyup(validate);

    function validate() {

        var textBox = $(this);
        var str = textBox.val();


        if(str === null || str === "" || str === undefined){
            $("#emailImg").attr("src","images/logo.png");

            textBox.addClass("empty");       

            textBox.removeClass("error");
            textBox.removeClass("valid");

        } else if (/\S+@\S+\.\S+/.test(textBox.val())) {
            $("#emailImg").attr("src","images/accept.png");

            textBox.addClass("valid");        
            textBox.removeClass("error");

        } else {
            $("#emailImg").attr("src","images/deny.png");

            textBox.addClass("error");        
            textBox.removeClass("valid");

        }   
    }


    resultsFun = function () {
        
        var fname = $('#fname').val();
        var lname = $('#lname').val();
        var email = $('#email').val();
        var dob = $('#dob').val();
        var gen = $("input[name='gender']:checked").val();
        var pass1 = $('#pass1').val();
        var pass2 = $('#pass2').val();
        
        console.log(pass1 + "  " + pass2);
            
        if(pass1 !== pass2)
            alert("Passwords do not match!");
            $('#pass1').addClass("error");        
            $('#pass2').addClass("error");        
            
        // Test first name
        if(testString(fname)) {
            localStorage.setItem('fname', fname);
            $('#fname').css({ "border": 'transparent 1px solid'});
            $('#fname').removeClass("error");        
            $('#fname').addClass("valid");
            
            
        } else {
            $('#fname').addClass("error");        
            $('#fname').removeClass("valid");
        }
        
        // Test second name
        if(testString(lname)) {
            localStorage.setItem('lname', lname);
            $('#lname').css({ "border": 'transparent 1px solid'});
            $('#lname').removeClass("error");        
            $('#lname').addClass("valid");
        } else {
            $('#lname').addClass("error");        
            $('#lname').removeClass("valid");
        }
        
        // Test email name        
        if(testEmail(email)) {
            localStorage.setItem('email', email);
            $('#email').css({ "border": 'transparent 1px solid'});
            $('#email').removeClass("error");        
            $('#email').addClass("valid");
        } else {
            $('#email').addClass("error");        
            $('#email').removeClass("valid");
        }        
        
        
        // Test date name        
        if(testDate(dob)) {
            localStorage.setItem('dob', dob);
            $('#dob').css({ "border": 'transparent 1px solid'});
            $('#dob').removeClass("error");        
            $('#dob').addClass("valid");
        } else {
            $('#dob').addClass("error");        
            $('#dob').removeClass("valid");
        }  
        
        // Test date name        
        if(testString(gen)) {
            localStorage.setItem('gen', gen);
            $('#gen').css({ "border": 'transparent 1px solid'});
            $('#gen').removeClass("error");        
            $('#gen').addClass("valid");
        } else {
            $('#gen').addClass("error");        
            $('#gen').removeClass("valid");
        }  
        
        alert("Variables have been placed to localStorage");    

        showVariables();
    }
    
    
    
    function testString(str) {
        
        if(/^[a-zA-Z]+$/.test(str)) 
            return true;            
        
        else 
            return false;            
        
    }
    
    function testEmail(str) {
        
        if(/\S+@\S+\.\S+/.test(str)) 
            return true;            
        
        else 
            return false;            
        
    }
        
    function testDate(str) {
        
        if(/^(?=.*?[1-9])[0-9()-]+$/.test(str))
            return true;
        else
            return false;

    }        
    
    //<!--- Displaying items within the text area -->
    //<!--- Chaning the color of the input string -->
    //<!--- And also placing them within the input fields -->
    showVariables = function () {

        if(localStorage.getItem('fname') !== null)
            $('#output').text("The details shown below have been recorded \n \n " + 
                "Name: " + localStorage.getItem('fname') + "\n" + 
                "Surname: " + localStorage.getItem('lname') + "\n" + 
                "Email: " + localStorage.getItem('email') + "\n" + 
                "Date of birth: " + localStorage.getItem('dob') + "\n" +
                "Gender: " + localStorage.getItem('gen') + "\n" 
            );
    }
});
