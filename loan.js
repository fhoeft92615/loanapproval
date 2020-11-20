$(document).ready(
    function (){
        $("#submit").click(calculateUserInput);

        function calculateUserInput(event) {
            event.preventDefault();

            //get input from boxes and parse to number data type
            var userSalary = $("#salary").val();
            var userCredit = $("#creditScore").val();
            var userEmployment = $("#monthsEmployed").val();

            //requiring valid salary
            if (userSalary > 400000 || userSalary < 0){
                alert("Invalid salary entry!")
            }

            //requiring valid credit score
            if (userCredit > 850 || userCredit < 300){
                alert("Invalid credit score!")
            }

            //requiring valid employment
            if (userEmployment > 600 || userEmployment < 0){
                alert("Invalid employment entry!")
            }

            //loan approvals
            if (userSalary >= 40000 && userCredit >= 600)
                $("#calculateUserInput").text(`Congratulations, Loan Approved!`);

            if (userSalary >= 40000 && userCredit < 600 && userEmployment > 12)
                $("#calculateUserInput").text(`Congratulations, Loan Approved!`);

            if (userSalary < 40000 && userCredit >= 600 && userEmployment > 12)
                $("#calculateUserInput").text(`Congratulations, Loan Approved!`);

            //loan denials
            if (userSalary >= 40000 && userCredit < 600 && userEmployment <= 12)
                $("#calculateUserInput").text(`Loan Denied`);

            if (userSalary < 40000 && userCredit >= 600 && userEmployment <= 12)
                $("#calculateUserInput").text(`Loan Denied`);

            if (userSalary < 40000 && userCredit < 600)
                $("#calculateUserInput").text(`Loan Denied`)
        }
    }
)