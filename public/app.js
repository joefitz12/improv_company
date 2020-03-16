$("#menu-icon").on("click", function(event){
    if ($(".nav-menu").hasClass("hidden")) {
        $(".nav-menu").show();
        $(".nav-menu").removeClass("hidden");
    }
    else {
        $(".nav-menu").addClass("hidden");
        setTimeout(function () {
            $(".nav-menu").hide();
        }, 250);
    }

    event.stopPropagation();

    $(document).one("click", function(event){
        if(!$(event.target).hasClass("fa-bars")){
            $(".nav-menu").addClass("hidden");
        }
    });

});

$("#contact-form-submit").on("click", function(event){
    event.preventDefault();

    let name = $("#name-input").val();
    let email = $("#email-input").val();
    let message = $("#message-input").val();

    let messageInfo = {
        name,
        email,
        message
    };

    $.ajax({
    url: '/api/message',
    type: 'POST',
    data: messageInfo
    });
    

});

