require('./style.scss');

(function () {
    document.body.addEventListener('click', function (e) {
        if (e.target.classList.contains('onoffswitch') || e.target.classList.contains('onoffswitch__button')) {
            let themedItems = document.querySelectorAll('.theme_color_project-default, .theme_color_project-inverse');
            themedItems.forEach((themedItem) => {
                if (themedItem.classList.contains('theme_color_project-default')) {
                    themedItem.classList.remove('theme_color_project-default');
                    themedItem.classList.add('theme_color_project-inverse');
                } else {
                    themedItem.classList.remove('theme_color_project-inverse');
                    themedItem.classList.add('theme_color_project-default');
                }
            });
        }
    })
})();
