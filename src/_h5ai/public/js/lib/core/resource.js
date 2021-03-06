const config = require('../config');
const settings = require('./settings');

const includes = (arr, x) => arr.indexOf(x) >= 0;

const imagesHref = settings.publicHref + 'images/';
const uiHref = imagesHref + 'ui/';
const themesHref = imagesHref + 'themes/';
const defaultThemeHref = themesHref + 'default/';
const defaultIcons = ['file', 'folder', 'folder-page', 'folder-parent', 'ar', 'aud', 'bin', 'img', 'txt', 'vid', 'x'];


function image(id) {
    return uiHref + id + '.svg';
}

function icon(id) {
    const baseId = (id || '').split('-')[0];
    const href = config.theme[id] || config.theme[baseId];

    if (href) {
        return themesHref + href;
    }

    if (includes(defaultIcons, id)) {
        return defaultThemeHref + id + '.svg';
    }

    if (includes(defaultIcons, baseId)) {
        return defaultThemeHref + baseId + '.svg';
    }

    return defaultThemeHref + 'file.svg';
}


module.exports = {
    image,
    icon
};
