
function changeSelectedBtnSection(clickedSectionBtn) {
    $(".portfolio-section-btn").removeClass("portfolio-active-section");
    clickedSectionBtn.addClass("portfolio-active-section");
}

function moveToNewSection(clickedSectionBtn) {
    sectionIdToShow = clickedSectionBtn.attr("value");

    // Disable all sectionIdToShow
    $(".portfolio-section").removeClass("portfolio-section-enabled");
    $(".portfolio-section").hide();

    // Enable the selected section
    //$("#" + sectionIdToShow).addClass("portfolio-section-enabled");
    $("#" + sectionIdToShow).fadeIn("slow");
}

$(document).ready(function() {

    $(".portfolio-section-btn").click(function() {
        clickedSectionBtn = $(this);

        moveToNewSection(clickedSectionBtn);
        changeSelectedBtnSection(clickedSectionBtn);
    });
});
