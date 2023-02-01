$(document).ready(function() {
    $("header button").click(function() {
        $("form").slideDown();
    })

    $("#cancel-button").click(function() {
        $("form").slideUp();
    })

    $("form").on("submit", function(e) {
        e.preventDefault();
        const newAddressImage = $("#new-image-address").val();
        const newItem = $("<li style='display: none'></li");
        $(`<img src="${newAddressImage}" />`).appendTo(newItem);
        $(`
        <div class="overlay-image-link">
            <a href="${newAddressImage}" title="View full size image" target="_blank">
                View full size image" target
            </a>
        </div>
        `).appendTo(newItem);
        $(newItem).appendTo("ul");
        $(newItem).fadeIn(1000);
        $("#new-image-address").val("");
    })
})