(function() {
    'use strict';

    var theme = localStorage['theme'] === 'light' ? 'light' : 'dark';
    var $html;
    var $switcher;

    if(document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

    function init() {
        $html = document.querySelector('html');
        $switcher = document.querySelector('#theme-switcher');

        $switcher.addEventListener('click', function(e) {
            localStorage['theme'] = theme = invert(theme);
            switchTheme(theme);
        });

        if(theme === 'light') {
            switchTheme(theme);
        }
        $switcher.classList.add('enabled');
    }

    function switchTheme(theme) {
        if(theme === 'light') {
            $html.classList.add('light');
            $switcher.classList.add('theme-switcher--to-dark');
            $switcher.classList.remove('theme-switcher--to-light');
            $switcher.querySelector('.theme-switcher--js-type').textContent = 'dark';
        } else {
            $html.classList.remove('light');
            $switcher.classList.remove('theme-switcher--to-dark');
            $switcher.classList.add('theme-switcher--to-light');
            $switcher.querySelector('.theme-switcher--js-type').textContent = 'light';
        }

        if(typeof DISQUS !== 'undefined') {
            DISQUS.reset({ reload: true });
        }
    }

    function invert(theme) {
        return theme === 'light' ? 'dark' : 'light';
    }
})();
