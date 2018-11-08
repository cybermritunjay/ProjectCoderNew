$(document).ready(function() {

    var coding_images = $("#coding-images img");
    var code_count = 0;

    function changeImage(x) {
        setTimeout(function(x) {
            if (x < 14) {
                coding_images[x].style.display = "none";
                coding_images[x + 1].style.display = "inline-block";
                x++;
            } else {
                coding_images[x].style.display = "none";
                coding_images[0].style.display = "inline-block";
                x = 0;
            }

            changeImage(x);
        }, 300, x);
    }
    changeImage(code_count);

    $('#lang-support').carousel({
        interval: 2000
    });
});