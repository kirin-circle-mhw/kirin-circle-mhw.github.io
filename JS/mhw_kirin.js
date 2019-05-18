$(document).ready(function () {
    $('.category_btn').click(function () {
        weapon = $(this).data('name')
        targetId = '#' + weapon;
        // location.href = targetId;
        $('#weapon section').hide();
        $(targetId).show();
    })

    $('#weapon section#chargeBlade').show();
})


function getJsonFile(fileName) {
    var rawFile = new XMLHttpRequest();
    rawFile.overrideMimeType("application/json");
    rawFile.open("GET", fileName, true);
    console.log(rawFile.responseText);
}