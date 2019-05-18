$(document).ready(function () {
    createCategory();

    $('#category').on('click', 'li', function () {
        weapon = $(this).data('name')
        targetId = '#' + weapon;
        // location.href = targetId;
        $('#weapon section').hide();
        $(targetId).show();
    });


    $('#weapon section#chargeBlade').show();
});
