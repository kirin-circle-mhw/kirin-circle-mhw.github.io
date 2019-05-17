$(document).ready(function () {
    $('.category_btn').click(function () {
        weapon = $(this).data('name')
        targetId = '#' + weapon;
        // location.href = targetId;
        $('#weapon section').hide();
        $(targetId).show();
    })

    $('#weapon section:eq(0)').show();
})