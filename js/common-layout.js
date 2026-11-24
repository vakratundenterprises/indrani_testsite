
$(function () {

    // Load Common Header
    $("#common-header").load("components/header.html", function () {

        // Highlight active navigation menu
        let currentPage = window.location.pathname.split("/").pop();

        if (!currentPage) {
            currentPage = "index.html";
        }

        $("#common-header .navbar-nav .nav-link").each(function () {
            let linkPage = $(this).attr("href");

            $(this).removeClass("active");

            if (linkPage === currentPage) {
                $(this).addClass("active");
            }
        });

    });

    // Load Common Footer
    $("#common-footer").load("components/footer.html");

});
