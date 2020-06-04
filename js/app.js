$(document).ready(function()
{
    // $("#txt_pass").keyup(function()
    // {
    //     var txt = document.getElementById("txt_pass").value.length;
    //     if (txt == 5) 
    //     {
    //         $(".progress").append('<div class="progress-bar bg-danger" role="progressbar" style="width: 15%"></div>');
    //     }
    //     else if (txt == 9) 
    //     {
    //         $(".progress").append('<div class="progress-bar bg-warning" role="progressbar" style="width: 35%"></div>');
    //     }
    //     else if (txt > 13) 
    //     {
    //         $(".progress").append('<div class="progress-bar bg-success" role="progressbar" style="width: 50%"></div>');
    //     }
    //     else if (txt < 9)
    //     {
    //         $( ".bg-warning" ).remove();
    //     }
    // });
    $("#registro").onclick(function()
    {
        swal("Good job!", "You clicked the button!", "success");
    });
});