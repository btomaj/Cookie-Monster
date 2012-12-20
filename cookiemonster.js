/*jslint browser: true, plusplus: true, indent: 4, maxlen: 80 */
/**
 * @preserve Cookie Monster
 * github.com/btomaj/cookie-monster
 *
 * Accepts one parameter that can be a string or an object.
 * - A string instructs Cookie Monster to retrieve the value of the cookie with
 *   the given name.
 * - An object instructs Cookie Monster to set a cookie. The object should
 *   implement interface Cookie.
 *
 * To delete a cookie simply set the cookie again with a date in the past; for
 * example using 'new Date(0).toGMTString();'.
 *
 * interface Cookie {
 *      name {String} The name of the cookie.
 *      value {String} The value of the cookie.
 *      [expires] {String} The GMT/UTC formatted expiry date. Creates session
 *          cookie if omitted.
 *      [path] {String} The URL path at which the cookie can be accessed.
 *      [domain] {String} The domain at which the cookie can be accessed.
 *      [secure] {Boolean} Determines that the cookie can only be accessed in a
 *          HTTPS session.
 *      [httponly] {Boolean} Determines that the cookie is only accessible
 *          through HTTP headers.
 * }
 *
 * See http://en.wikipedia.org/wiki/HTTP_cookie#Cookie_attributes and RFC 6265 
 * (http://tools.ietf.org/html/rfc6265#section-4.1.2.1) for more information on
 * how to use each property.
 */
function cookieMonster(name) {
    "use strict";

    var cookie,
        i;

    if (typeof name === 'object' && name !== null) { // set
        cookie = name.name + '=' + name.value + ';';
        if (name.expires) {
            cookie = cookie + ' Expires=' + name.expires + ';';
        }
        if (name.path) {
            cookie = cookie + ' Path=' + name.path + ';';
        }
        if (name.domain) {
            cookie = cookie + ' Domain=' + name.domain + ';';
        }
        if (name.secure) {
            cookie += ' Secure;';
        }
        if (name.httponly) {
            cookie += ' HttpOnly;';
        }
        document.cookie = cookie;
    } else { // get
        cookie = document.cookie.split('; ');

        i = cookie.length;
        while (i--) {
            if (cookie[i].indexOf(name + '=') + 1) {
                return cookie[i].replace(name + '=', '');
            }
        }
    }
}
