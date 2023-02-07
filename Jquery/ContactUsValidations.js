$(document).ready(
    function () {

        $("#submitContact").click(
            function () {
                var email = $("#email").val();
                var firstname = $("#fname").val();
                var lastname = $("#lname").val();
                var pattern = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
                var weak = /^([A-Za-z0-9]+)(@* \** _* -*)$/;
                var strong = /^[A-Za-z0-9]$/;
                

                ////////////////first name ///////////////////////////////////////////
                if (firstname == "") {
                    $("#fnError").html("**Enter First name *");
                    $("#fnError").css({ "color": "red", "width": "100px", "fontSize": "13px", "float": "inline-start" });
                    
                }
                else if (firstname.length < 2) {
                    $("#fnError").html("**name should be greater then 2 character and smaller then 10 *");
                    $("#fnError").css({ "color": "red", "width": "100px", "fontSize": "13px", "float": "inline-start" });
                }
                else {
                    $("#fnError").html("");
                }

                ////////////////last name ///////////////////////////////////////////
                if (lastname == "") {
                    $("#lnError").html("**Enter last name *");
                    $("#lnError").css({ "color": "red", "width": "100px", "fontSize": "13px", "float": "inline-start" });
                }
                else if (lastname.length < 2) {
                    $("#lnError").html("**name should be greater then 2 character and smaller then 10 *");
                    $("#lnError").css({ "color": "red", "width": "100px", "fontSize": "13px", "float": "inline-start" });
                }
                else {
                    $("#lnError").html("");
                }

                //////////////////////email///////////////////////////////
                if (email == "") {

                    $("#showError").html("**Enter email *");
                    $("#showError").css({ "color": "red", "width": "100px", "fontSize": "13px", "float": "inline-start" });
                }
                else if (!pattern.test(email)) {
                    $("#showError").html("**wrong email*");
                    $("#showError").css({ "color": "red", "width": "100px", "fontSize": "13px", "float": "center" });
                }
                else if (pattern.test(email)) {
                    $("#showError").html("");

                }
            });

    });