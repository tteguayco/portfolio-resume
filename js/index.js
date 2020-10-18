
const AUTHOR_BIRTHDAY = '05/12/1995';   // MM/DD/YYYY

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

function setCopyrightYear() {
    var year = new Date().getFullYear();
    $('#copyright-year').text(year);
}

function setAuthorAge() {
    var birthday = new Date(AUTHOR_BIRTHDAY);
    var ageMs = Date.now() - birthday.getTime();
    var ageDate = new Date(ageMs);
    var age = Math.abs(ageDate.getUTCFullYear() - 1970);
    $('#author-age').text(age);
}

$(document).ready(function() {
    listenToSkillBarsFill();
    setCopyrightYear();
    setAuthorAge();
});
