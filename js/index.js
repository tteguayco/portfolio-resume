
function setSkillProgressBars() {

    if ($('.skill-row').visible(true)) {
        $('#sql-skill-bar').addClass('skill-90');
        $('#python-skill-bar').addClass('skill-80');
        $('#c-sharp-skill-bar').addClass('skill-80');
        $('#js-skill-bar').addClass('skill-75');
        $('#html5-skill-bar').addClass('skill-80');
        $('#css-skill-bar').addClass('skill-75');
        $('#git-skill-bar').addClass('skill-80');
        $('#scrapy-skill-bar').addClass('skill-60');
    }
}

function listenToSkillBarsFill() {
    $(window).scroll(function() { setSkillProgressBars(); });
    $(window).on('load', function() { setSkillProgressBars(); });
}

$(document).ready(function() {
    listenToSkillBarsFill();
});
