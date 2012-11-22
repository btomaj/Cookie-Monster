/*jslint browser: true, plusplus: true */
function cookie(name) {
    "use strict";

    var c,
        i;

    if (typeof name === 'object' && name !== null) {
        c = name.name + '=' + name.value + ';';
        if (name.expires) {
            c = c + ' expires=' + name.expires + ';';
        }
        c = c + ' path=' + (name.path || '/');
        if (name.domain) {
            c = c + ' domain=' + name.domain;
        }
        document.cookie = c;
    } else {
        c = document.cookie.split(';');

        i = c.length;
        while (i--) {
            if (c[i].indexOf(name + '=') + 1) {
                return c[i].replace(name + '=', '');
            }
        }
    }
}
