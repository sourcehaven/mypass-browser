!function(){var e,t,r,n,i,o,a,s,u,f,c,l,h,p,d,g,y,m,v,b,w="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{};function E(e,t,r,n,i,o,a){try{var s=e[o](a),u=s.value}catch(e){r(e);return}s.done?t(u):Promise.resolve(u).then(n,i)}function A(e){return function(){var t=this,r=arguments;return new Promise(function(n,i){var o=e.apply(t,r);function a(e){E(o,n,i,a,s,"next",e)}function s(e){E(o,n,i,a,s,"throw",e)}a(void 0)})}}function R(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=Array(t);r<t;r++)n[r]=e[r];return n}function O(e,t){if(e){if("string"==typeof e)return R(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);if("Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return R(e,t)}}function x(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r,n,i=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=i){var o=[],a=!0,s=!1;try{for(i=i.call(e);!(a=(r=i.next()).done)&&(o.push(r.value),!t||o.length!==t);a=!0);}catch(e){s=!0,n=e}finally{try{a||null==i.return||i.return()}finally{if(s)throw n}}return o}}(e,t)||O(e,t)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** *//* global Reflect, Promise, SuppressedError, Symbol */function S(e){return e&&"undefined"!=typeof Symbol&&e.constructor===Symbol?"symbol":typeof e}function B(e,t){var r,n,i,o,a=function(e){return function(t){return s([e,t])}},s=function(a){if(r)throw TypeError("Generator is already executing.");for(;o&&(o=0,a[0]&&(u=0)),u;)try{if(r=1,n&&(i=2&a[0]?n.return:a[0]?n.throw||((i=n.return)&&i.call(n),0):n.next)&&!(i=i.call(n,a[1])).done)return i;switch(n=0,i&&(a=[2&a[0],i.value]),a[0]){case 0:case 1:i=a;break;case 4:return u.label++,{value:a[1],done:!1};case 5:u.label++,n=a[1],a=[0];continue;case 7:a=u.ops.pop(),u.trys.pop();continue;default:if(!(i=(i=u.trys).length>0&&i[i.length-1])&&(6===a[0]||2===a[0])){u=0;continue}if(3===a[0]&&(!i||a[1]>i[0]&&a[1]<i[3])){u.label=a[1];break}if(6===a[0]&&u.label<i[1]){u.label=i[1],i=a;break}if(i&&u.label<i[2]){u.label=i[2],u.ops.push(a);break}i[2]&&u.ops.pop(),u.trys.pop();continue}a=t.call(e,u)}catch(e){a=[6,e],n=0}finally{r=i=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}},u={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o}function T(e,t){return function(){return e.apply(t,arguments)}}"function"==typeof SuppressedError&&SuppressedError;// utils is a library of generic helper functions non-specific to axios
var U=Object.prototype.toString,C=Object.getPrototypeOf,j=(e=Object.create(null),function(t){var r=U.call(t);return e[r]||(e[r]=r.slice(8,-1).toLowerCase())}),N=function(e){return e=e.toLowerCase(),function(t){return j(t)===e}},I=function(e){return function(t){return(void 0===t?"undefined":S(t))===e}},$=Array.isArray,_=I("undefined"),k=N("ArrayBuffer"),L=I("string"),P=I("function"),z=I("number"),F=function(e){return null!==e&&"object"==typeof e},D=function(e){if("object"!==j(e))return!1;var t=C(e);return(null===t||t===Object.prototype||null===Object.getPrototypeOf(t))&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)},M=N("Date"),q=N("File"),H=N("Blob"),J=N("FileList"),K=N("URLSearchParams");/**
 * Iterate over an Array or an Object invoking a function for each item.
 *
 * If `obj` is an Array callback will be called passing
 * the value, index, and complete array for each item.
 *
 * If 'obj' is an Object callback will be called passing
 * the value, key, and complete object for each property.
 *
 * @param {Object|Array} obj The object to iterate
 * @param {Function} fn The callback to invoke for each item
 *
 * @param {Boolean} [allOwnKeys = false]
 * @returns {any}
 */function W(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},n=r.allOwnKeys;// Don't bother if no value provided
if(null!=e){if("object"!=typeof e&&/*eslint no-param-reassign:0*/(e=[e]),$(e))for(i=0,o=e.length;i<o;i++)t.call(null,e[i],i,e);else{// Iterate over object keys
var i,o,a,s=void 0!==n&&n?Object.getOwnPropertyNames(e):Object.keys(e),u=s.length;for(i=0;i<u;i++)a=s[i],t.call(null,e[a],a,e)}}}function V(e,t){t=t.toLowerCase();for(var r,n=Object.keys(e),i=n.length;i-- >0;)if(t===(r=n[i]).toLowerCase())return r;return null}var G=/*eslint no-undef:0*/"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:w,Y=function(e){return!_(e)&&e!==G},Q=(t="undefined"!=typeof Uint8Array&&C(Uint8Array),function(e){return t&&e instanceof t}),X=N("HTMLFormElement"),Z=(r=Object.prototype.hasOwnProperty,function(e,t){return r.call(e,t)}),ee=N("RegExp"),et=function(e,t){var r=Object.getOwnPropertyDescriptors(e),n={};W(r,function(r,i){var o;!1!==(o=t(r,i,e))&&(n[i]=o||r)}),Object.defineProperties(e,n)},er="abcdefghijklmnopqrstuvwxyz",en="0123456789",ei={DIGIT:en,ALPHA:er,ALPHA_DIGIT:er+er.toUpperCase()+en},eo=N("AsyncFunction"),ea={isArray:$,isArrayBuffer:k,isBuffer:/**
 * Determine if a value is a Buffer
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a Buffer, otherwise false
 */function(e){return null!==e&&!_(e)&&null!==e.constructor&&!_(e.constructor)&&P(e.constructor.isBuffer)&&e.constructor.isBuffer(e)},isFormData:function(e){var t;return e&&("function"==typeof FormData&&e instanceof FormData||P(e.append)&&("formdata"===(t=j(e))||// detect form-data instance
"object"===t&&P(e.toString)&&"[object FormData]"===e.toString()))},isArrayBufferView:/**
 * Determine if a value is a view on an ArrayBuffer
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
 */function(e){return"undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&k(e.buffer)},isString:L,isNumber:z,isBoolean:function(e){return!0===e||!1===e},isObject:F,isPlainObject:D,isUndefined:_,isDate:M,isFile:q,isBlob:H,isRegExp:ee,isFunction:P,isStream:function(e){return F(e)&&P(e.pipe)},isURLSearchParams:K,isTypedArray:Q,isFileList:J,forEach:W,merge:/**
 * Accepts varargs expecting each argument to be an object, then
 * immutably merges the properties of each object and returns result.
 *
 * When multiple objects contain the same key the later object in
 * the arguments list will take precedence.
 *
 * Example:
 *
 * ```js
 * var result = merge({foo: 123}, {foo: 456});
 * console.log(result.foo); // outputs 456
 * ```
 *
 * @param {Object} obj1 Object to merge
 *
 * @returns {Object} Result of all merge properties
 */function e(){for(var t=(Y(this)&&this||{}).caseless,r={},n=function(n,i){var o=t&&V(r,i)||i;D(r[o])&&D(n)?r[o]=e(r[o],n):D(n)?r[o]=e({},n):$(n)?r[o]=n.slice():r[o]=n},i=0,o=arguments.length;i<o;i++)arguments[i]&&W(arguments[i],n);return r},extend:function(e,t,r){var n=(arguments.length>3&&void 0!==arguments[3]?arguments[3]:{}).allOwnKeys;return W(t,function(t,n){r&&P(t)?e[n]=T(t,r):e[n]=t},{allOwnKeys:n}),e},trim:function(e){return e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"")},stripBOM:function(e){return 65279===e.charCodeAt(0)&&(e=e.slice(1)),e},inherits:function(e,t,r,n){e.prototype=Object.create(t.prototype,n),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),r&&Object.assign(e.prototype,r)},toFlatObject:function(e,t,r,n){var i,o,a,s={};// eslint-disable-next-line no-eq-null,eqeqeq
if(t=t||{},null==e)return t;do{for(o=(i=Object.getOwnPropertyNames(e)).length;o-- >0;)a=i[o],(!n||n(a,e,t))&&!s[a]&&(t[a]=e[a],s[a]=!0);e=!1!==r&&C(e)}while(e&&(!r||r(e,t))&&e!==Object.prototype)return t},kindOf:j,kindOfTest:N,endsWith:function(e,t,r){e=String(e),(void 0===r||r>e.length)&&(r=e.length),r-=t.length;var n=e.indexOf(t,r);return -1!==n&&n===r},toArray:function(e){if(!e)return null;if($(e))return e;var t=e.length;if(!z(t))return null;for(var r=Array(t);t-- >0;)r[t]=e[t];return r},forEachEntry:function(e,t){for(var r,n=(e&&e[Symbol.iterator]).call(e);(r=n.next())&&!r.done;){var i=r.value;t.call(e,i[0],i[1])}},matchAll:function(e,t){for(var r,n=[];null!==(r=e.exec(t));)n.push(r);return n},isHTMLForm:X,hasOwnProperty:Z,hasOwnProp:Z,reduceDescriptors:et,freezeMethods:function(e){et(e,function(t,r){// skip restricted props in strict mode
if(P(e)&&-1!==["arguments","caller","callee"].indexOf(r))return!1;if(P(e[r])){if(t.enumerable=!1,"writable"in t){t.writable=!1;return}t.set||(t.set=function(){throw Error("Can not rewrite read-only method '"+r+"'")})}})},toObjectSet:function(e,t){var r={};return function(e){e.forEach(function(e){r[e]=!0})}($(e)?e:String(e).split(t)),r},toCamelCase:function(e){return e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(e,t,r){return t.toUpperCase()+r})},noop:function(){},toFiniteNumber:function(e,t){return Number.isFinite(e=+e)?e:t},findKey:V,global:G,isContextDefined:Y,ALPHABET:ei,generateString:function(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:16,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:ei.ALPHA_DIGIT,r="",n=t.length;e--;)r+=t[Math.random()*n|0];return r},isSpecCompliantForm:/**
 * If the thing is a FormData object, return true, otherwise return false.
 *
 * @param {unknown} thing - The thing to check.
 *
 * @returns {boolean}
 */function(e){return!!(e&&P(e.append)&&"FormData"===e[Symbol.toStringTag]&&e[Symbol.iterator])},toJSONObject:function(e){var t=Array(10),r=function(e,n){if(F(e)){if(t.indexOf(e)>=0)return;if(!("toJSON"in e)){t[n]=e;var i=$(e)?[]:{};return W(e,function(e,t){var o=r(e,n+1);_(o)||(i[t]=o)}),t[n]=void 0,i}}return e};return r(e,0)},isAsyncFn:eo,isThenable:function(e){return e&&(F(e)||P(e))&&P(e.then)&&P(e.catch)}};function es(e,t){if(!(e instanceof t))throw TypeError("Cannot call a class as a function")}function eu(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function ef(e,t,r){return t&&eu(e.prototype,t),r&&eu(e,r),e}/**
 * Create an Error with the specified message, config, error code, request and response.
 *
 * @param {string} message The error message.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [config] The config.
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 *
 * @returns {Error} The created error.
 */function ec(e,t,r,n,i){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=Error().stack,this.message=e,this.name="AxiosError",t&&(this.code=t),r&&(this.config=r),n&&(this.request=n),i&&(this.response=i)}ea.inherits(ec,Error,{toJSON:function(){return{// Standard
message:this.message,name:this.name,// Microsoft
description:this.description,number:this.number,// Mozilla
fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,// Axios
config:ea.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});var el=ec.prototype,eh={};/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 *//* eslint-disable no-proto */function ep(e){if(void 0===e)throw ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function ed(e,t){return(ed=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function eg(e){return(eg=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(function(e){eh[e]={value:e}}),Object.defineProperties(ec,eh),Object.defineProperty(el,"isAxiosError",{value:!0}),// eslint-disable-next-line func-names
ec.from=function(e,t,r,n,i,o){var a=Object.create(el);return ea.toFlatObject(e,a,function(e){return e!==Error.prototype},function(e){return"isAxiosError"!==e}),ec.call(a,e.message,t,r,n,i),a.cause=e,a.name=e.name,o&&Object.assign(a,o),a},h=function(e){// go through the array every three bytes, we'll deal with trailing stuff later
for(var t,r=e.length,n=r%3// if we have 1 byte left, pad 2 bytes
,i=[],o=0,a=r-n;o<a;o+=16383// must be multiple of 3
)i.push(function(e,t,r){for(var n,i=[],o=t;o<r;o+=3)i.push(ey[(n=(e[o]<<16&16711680)+(e[o+1]<<8&65280)+(255&e[o+2]))>>18&63]+ey[n>>12&63]+ey[n>>6&63]+ey[63&n]);return i.join("")}(e,o,o+16383>a?a:o+16383));return 1===n?i.push(ey[(t=e[r-1])>>2]+ey[t<<4&63]+"=="):2===n&&i.push(ey[(t=(e[r-2]<<8)+e[r-1])>>10]+ey[t>>4&63]+ey[t<<2&63]+"="),i.join("")};for(var ey=[],em=[],ev="undefined"!=typeof Uint8Array?Uint8Array:Array,eb="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",ew=0,eE=eb.length;ew<eE;++ew)ey[ew]=eb[ew],em[eb.charCodeAt(ew)]=ew;// Support decoding URL-safe base64 strings, as Node.js does.
// See: https://en.wikipedia.org/wiki/Base64#URL_applications
em["-".charCodeAt(0)]=62,em["_".charCodeAt(0)]=63,p=function(e,t,r,n,i){var o,a,s=8*i-n-1,u=(1<<s)-1,f=u>>1,c=-7,l=r?i-1:0,h=r?-1:1,p=e[t+l];for(l+=h,o=p&(1<<-c)-1,p>>=-c,c+=s;c>0;o=256*o+e[t+l],l+=h,c-=8);for(a=o&(1<<-c)-1,o>>=-c,c+=n;c>0;a=256*a+e[t+l],l+=h,c-=8);if(0===o)o=1-f;else{if(o===u)return a?NaN:(p?-1:1)*(1/0);a+=Math.pow(2,n),o-=f}return(p?-1:1)*a*Math.pow(2,o-n)},d=function(e,t,r,n,i,o){var a,s,u,f=8*o-i-1,c=(1<<f)-1,l=c>>1,h=23===i?5960464477539062e-23:0,p=n?0:o-1,d=n?1:-1,g=t<0||0===t&&1/t<0?1:0;for(isNaN(t=Math.abs(t))||t===1/0?(s=isNaN(t)?1:0,a=c):(a=Math.floor(Math.log(t)/Math.LN2),t*(u=Math.pow(2,-a))<1&&(a--,u*=2),a+l>=1?t+=h/u:t+=h*Math.pow(2,1-l),t*u>=2&&(a++,u/=2),a+l>=c?(s=0,a=c):a+l>=1?(s=(t*u-1)*Math.pow(2,i),a+=l):(s=t*Math.pow(2,l-1)*Math.pow(2,i),a=0));i>=8;e[r+p]=255&s,p+=d,s/=256,i-=8);for(a=a<<i|s,f+=i;f>0;e[r+p]=255&a,p+=d,a/=256,f-=8);e[r+p-d]|=128*g};var eA="function"==typeof Symbol&&"function"// eslint-disable-line dot-notation
==typeof Symbol.for?Symbol.for("nodejs.util.inspect.custom")// eslint-disable-line dot-notation
:null;function eR(e){if(e>2147483647)throw RangeError('The value "'+e+'" is invalid for option "size"');// Return an augmented `Uint8Array` instance
var t=new Uint8Array(e);return Object.setPrototypeOf(t,eO.prototype),t}/**
 * The Buffer constructor returns instances of `Uint8Array` that have their
 * prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of
 * `Uint8Array`, so the returned instances will have all the node `Buffer` methods
 * and the `Uint8Array` methods. Square bracket notation works as expected -- it
 * returns a single octet.
 *
 * The `Uint8Array` prototype remains unmodified.
 */function eO(e,t,r){// Common case.
if("number"==typeof e){if("string"==typeof t)throw TypeError('The "string" argument must be of type string. Received type number');return eB(e)}return ex(e,t,r)}function ex(e,t,r){if("string"==typeof e)return function(e,t){if(("string"!=typeof t||""===t)&&(t="utf8"),!eO.isEncoding(t))throw TypeError("Unknown encoding: "+t);var r=0|ej(e,t),n=eR(r),i=n.write(e,t);return i!==r&&// cause everything after the first invalid character to be ignored. (e.g.
// 'abxxcd' will be treated as 'ab')
(n=n.slice(0,i)),n}(e,t);if(ArrayBuffer.isView(e))return function(e){if(e0(e,Uint8Array)){var t=new Uint8Array(e);return eU(t.buffer,t.byteOffset,t.byteLength)}return eT(e)}(e);if(null==e)throw TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+(void 0===e?"undefined":S(e)));if(e0(e,ArrayBuffer)||e&&e0(e.buffer,ArrayBuffer)||"undefined"!=typeof SharedArrayBuffer&&(e0(e,SharedArrayBuffer)||e&&e0(e.buffer,SharedArrayBuffer)))return eU(e,t,r);if("number"==typeof e)throw TypeError('The "value" argument must not be of type number. Received type number');var n=e.valueOf&&e.valueOf();if(null!=n&&n!==e)return eO.from(n,t,r);var i=function(e){if(eO.isBuffer(e)){var t,r=0|eC(e.length),n=eR(r);return 0===n.length||e.copy(n,0,0,r),n}return void 0!==e.length?"number"!=typeof e.length||(t=e.length)!=t// eslint-disable-line no-self-compare
?eR(0):eT(e):"Buffer"===e.type&&Array.isArray(e.data)?eT(e.data):void 0}(e);if(i)return i;if("undefined"!=typeof Symbol&&null!=Symbol.toPrimitive&&"function"==typeof e[Symbol.toPrimitive])return eO.from(e[Symbol.toPrimitive]("string"),t,r);throw TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+(void 0===e?"undefined":S(e)))}function eS(e){if("number"!=typeof e)throw TypeError('"size" argument must be of type number');if(e<0)throw RangeError('The value "'+e+'" is invalid for option "size"')}function eB(e){return eS(e),eR(e<0?0:0|eC(e))}function eT(e){for(var t=e.length<0?0:0|eC(e.length),r=eR(t),n=0;n<t;n+=1)r[n]=255&e[n];return r}function eU(e,t,r){var n;if(t<0||e.byteLength<t)throw RangeError('"offset" is outside of buffer bounds');if(e.byteLength<t+(r||0))throw RangeError('"length" is outside of buffer bounds');return(// Return an augmented `Uint8Array` instance
Object.setPrototypeOf(n=void 0===t&&void 0===r?new Uint8Array(e):void 0===r?new Uint8Array(e,t):new Uint8Array(e,t,r),eO.prototype),n)}function eC(e){// Note: cannot use `length < K_MAX_LENGTH` here because that fails when
// length is NaN (which is otherwise coerced to zero.)
if(e>=2147483647)throw RangeError("Attempt to allocate Buffer larger than maximum size: 0x7fffffff bytes");return 0|e}function ej(e,t){if(eO.isBuffer(e))return e.length;if(ArrayBuffer.isView(e)||e0(e,ArrayBuffer))return e.byteLength;if("string"!=typeof e)throw TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+(void 0===e?"undefined":S(e)));var r=e.length,n=arguments.length>2&&!0===arguments[2];if(!n&&0===r)return 0;for(// Use a for loop to avoid recursion
var i=!1;;)switch(t){case"ascii":case"latin1":case"binary":return r;case"utf8":case"utf-8":return eQ(e).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return 2*r;case"hex":return r>>>1;case"base64":return eX(e).length;default:if(i)return n?-1:eQ(e).length// assume utf8
;t=(""+t).toLowerCase(),i=!0}}function eN(e,t,r){var n,i,o=!1;// Return early if start > this.length. Done here to prevent potential uint32
// coercion fail below.
if((void 0===t||t<0)&&(t=0),t>this.length||((void 0===r||r>this.length)&&(r=this.length),r<=0||// Force coercion to uint32. This will also coerce falsey/NaN values to 0.
(r>>>=0)<=(t>>>=0)))return"";for(e||(e="utf8");;)switch(e){case"hex":return function(e,t,r){var n=e.length;(!t||t<0)&&(t=0),(!r||r<0||r>n)&&(r=n);for(var i="",o=t;o<r;++o)i+=e1[e[o]];return i}(this,t,r);case"utf8":case"utf-8":return ek(this,t,r);case"ascii":return function(e,t,r){var n="";r=Math.min(e.length,r);for(var i=t;i<r;++i)n+=String.fromCharCode(127&e[i]);return n}(this,t,r);case"latin1":case"binary":return function(e,t,r){var n="";r=Math.min(e.length,r);for(var i=t;i<r;++i)n+=String.fromCharCode(e[i]);return n}(this,t,r);case"base64":return n=t,i=r,0===n&&i===this.length?h(this):h(this.slice(n,i));case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return function(e,t,r){// If bytes.length is odd, the last 8 bits must be ignored (same as node.js)
for(var n=e.slice(t,r),i="",o=0;o<n.length-1;o+=2)i+=String.fromCharCode(n[o]+256*n[o+1]);return i}(this,t,r);default:if(o)throw TypeError("Unknown encoding: "+e);e=(e+"").toLowerCase(),o=!0}}function eI(e,t,r){var n=e[t];e[t]=e[r],e[r]=n}// Finds either the first index of `val` in `buffer` at offset >= `byteOffset`,
// OR the last index of `val` in `buffer` at offset <= `byteOffset`.
//
// Arguments:
// - buffer - a Buffer to search
// - val - a string, Buffer, or number
// - byteOffset - an index into `buffer`; will be clamped to an int32
// - encoding - an optional encoding, relevant is val is a string
// - dir - true for indexOf, false for lastIndexOf
function e$(e,t,r,n,i){var o;// Empty buffer means no match
if(0===e.length)return -1;if("string"==typeof r?(n=r,r=0):r>2147483647?r=2147483647:r<-2147483648&&(r=-2147483648),(o=r=+r// Coerce to Number.
)!=o&&(r=i?0:e.length-1),r<0&&(r=e.length+r),r>=e.length){if(i)return -1;r=e.length-1}else if(r<0){if(!i)return -1;r=0}// Finally, search either indexOf (if dir is true) or lastIndexOf
if("string"==typeof t&&(t=eO.from(t,n)),eO.isBuffer(t))return(// Special case: looking for empty string/buffer always fails
0===t.length?-1:e_(e,t,r,n,i));if("number"==typeof t)return(t&=255// Search for a byte value [0-255]
,"function"==typeof Uint8Array.prototype.indexOf)?i?Uint8Array.prototype.indexOf.call(e,t,r):Uint8Array.prototype.lastIndexOf.call(e,t,r):e_(e,[t],r,n,i);throw TypeError("val must be string, number or Buffer")}function e_(e,t,r,n,i){var o,a=function(e,t){return 1===s?e[t]:e.readUInt16BE(t*s)},s=1,u=e.length,f=t.length;if(void 0!==n&&("ucs2"===(n=String(n).toLowerCase())||"ucs-2"===n||"utf16le"===n||"utf-16le"===n)){if(e.length<2||t.length<2)return -1;s=2,u/=2,f/=2,r/=2}if(i){var c=-1;for(o=r;o<u;o++)if(a(e,o)===a(t,-1===c?0:o-c)){if(-1===c&&(c=o),o-c+1===f)return c*s}else -1!==c&&(o-=o-c),c=-1}else for(r+f>u&&(r=u-f),o=r;o>=0;o--){for(var l=!0,h=0;h<f;h++)if(a(e,o+h)!==a(t,h)){l=!1;break}if(l)return o}return -1}function ek(e,t,r){r=Math.min(e.length,r);for(var n=[],i=t;i<r;){var o=e[i],a=null,s=o>239?4:o>223?3:o>191?2:1;if(i+s<=r){var u=void 0,f=void 0,c=void 0,l=void 0;switch(s){case 1:o<128&&(a=o);break;case 2:(192&(u=e[i+1]))==128&&(l=(31&o)<<6|63&u)>127&&(a=l);break;case 3:u=e[i+1],f=e[i+2],(192&u)==128&&(192&f)==128&&(l=(15&o)<<12|(63&u)<<6|63&f)>2047&&(l<55296||l>57343)&&(a=l);break;case 4:u=e[i+1],f=e[i+2],c=e[i+3],(192&u)==128&&(192&f)==128&&(192&c)==128&&(l=(15&o)<<18|(63&u)<<12|(63&f)<<6|63&c)>65535&&l<1114112&&(a=l)}}null===a?(// we did not generate a valid codePoint so insert a
// replacement char (U+FFFD) and advance only 1 byte
a=65533,s=1):a>65535&&(// encode to utf16 (surrogate pair dance)
a-=65536,n.push(a>>>10&1023|55296),a=56320|1023&a),n.push(a),i+=s}return function(e){var t=e.length;if(t<=4096)return String.fromCharCode.apply(String,e)// avoid extra slice()
;for(// Decode in chunks to avoid "call stack size exceeded".
var r="",n=0;n<t;)r+=String.fromCharCode.apply(String,e.slice(n,n+=4096));return r}(n)}/*
 * Need to make sure that buffer isn't trying to write out of bounds.
 */function eL(e,t,r){if(e%1!=0||e<0)throw RangeError("offset is not uint");if(e+t>r)throw RangeError("Trying to access beyond buffer length")}function eP(e,t,r,n,i,o){if(!eO.isBuffer(e))throw TypeError('"buffer" argument must be a Buffer instance');if(t>i||t<o)throw RangeError('"value" argument is out of bounds');if(r+n>e.length)throw RangeError("Index out of range")}function ez(e,t,r,n,i){eW(t,n,i,e,r,7);var o=Number(t&BigInt(4294967295));e[r++]=o,o>>=8,e[r++]=o,o>>=8,e[r++]=o,o>>=8,e[r++]=o;var a=Number(t>>BigInt(32)&BigInt(4294967295));return e[r++]=a,a>>=8,e[r++]=a,a>>=8,e[r++]=a,a>>=8,e[r++]=a,r}function eF(e,t,r,n,i){eW(t,n,i,e,r,7);var o=Number(t&BigInt(4294967295));e[r+7]=o,o>>=8,e[r+6]=o,o>>=8,e[r+5]=o,o>>=8,e[r+4]=o;var a=Number(t>>BigInt(32)&BigInt(4294967295));return e[r+3]=a,a>>=8,e[r+2]=a,a>>=8,e[r+1]=a,a>>=8,e[r]=a,r+8}function eD(e,t,r,n,i,o){if(r+n>e.length||r<0)throw RangeError("Index out of range")}function eM(e,t,r,n,i){return t=+t,r>>>=0,i||eD(e,t,r,4,34028234663852886e22,-34028234663852886e22),d(e,t,r,n,23,4),r+4}function eq(e,t,r,n,i){return t=+t,r>>>=0,i||eD(e,t,r,8,17976931348623157e292,-17976931348623157e292),d(e,t,r,n,52,8),r+8}/**
 * If `Buffer.TYPED_ARRAY_SUPPORT`:
 *   === true    Use Uint8Array implementation (fastest)
 *   === false   Print warning and recommend using `buffer` v4.x which has an Object
 *               implementation (most compatible, even IE6)
 *
 * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
 * Opera 11.6+, iOS 4.2+.
 *
 * We report that the browser does not support typed arrays if the are not subclassable
 * using __proto__. Firefox 4-29 lacks support for adding new properties to `Uint8Array`
 * (See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438). IE 10 lacks support
 * for __proto__ and has a buggy typed array implementation.
 */eO.TYPED_ARRAY_SUPPORT=function(){// Can typed array instances can be augmented?
try{var e=new Uint8Array(1),t={foo:function(){return 42}};return Object.setPrototypeOf(t,Uint8Array.prototype),Object.setPrototypeOf(e,t),42===e.foo()}catch(e){return!1}}(),eO.TYPED_ARRAY_SUPPORT||"undefined"==typeof console||"function"!=typeof console.error||console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."),Object.defineProperty(eO.prototype,"parent",{enumerable:!0,get:function(){if(eO.isBuffer(this))return this.buffer}}),Object.defineProperty(eO.prototype,"offset",{enumerable:!0,get:function(){if(eO.isBuffer(this))return this.byteOffset}}),eO.poolSize=8192// not used by this implementation
,/**
 * Functionally equivalent to Buffer(arg, encoding) but throws a TypeError
 * if value is a number.
 * Buffer.from(str[, encoding])
 * Buffer.from(array)
 * Buffer.from(buffer)
 * Buffer.from(arrayBuffer[, byteOffset[, length]])
 **/eO.from=function(e,t,r){return ex(e,t,r)},// Note: Change prototype *after* Buffer.from is defined to workaround Chrome bug:
// https://github.com/feross/buffer/pull/148
Object.setPrototypeOf(eO.prototype,Uint8Array.prototype),Object.setPrototypeOf(eO,Uint8Array),/**
 * Creates a new filled Buffer instance.
 * alloc(size[, fill[, encoding]])
 **/eO.alloc=function(e,t,r){return(eS(e),e<=0)?eR(e):void 0!==t?"string"==typeof r?eR(e).fill(t,r):eR(e).fill(t):eR(e)},/**
 * Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.
 * */eO.allocUnsafe=function(e){return eB(e)},/**
 * Equivalent to SlowBuffer(num), by default creates a non-zero-filled Buffer instance.
 */eO.allocUnsafeSlow=function(e){return eB(e)},eO.isBuffer=function(e){return null!=e&&!0===e._isBuffer&&e!==eO.prototype// so Buffer.isBuffer(Buffer.prototype) will be false
},eO.compare=function(e,t){if(e0(e,Uint8Array)&&(e=eO.from(e,e.offset,e.byteLength)),e0(t,Uint8Array)&&(t=eO.from(t,t.offset,t.byteLength)),!eO.isBuffer(e)||!eO.isBuffer(t))throw TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(e===t)return 0;for(var r=e.length,n=t.length,i=0,o=Math.min(r,n);i<o;++i)if(e[i]!==t[i]){r=e[i],n=t[i];break}return r<n?-1:n<r?1:0},eO.isEncoding=function(e){switch(String(e).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},eO.concat=function(e,t){if(!Array.isArray(e))throw TypeError('"list" argument must be an Array of Buffers');if(0===e.length)return eO.alloc(0);if(void 0===t)for(r=0,t=0;r<e.length;++r)t+=e[r].length;var r,n=eO.allocUnsafe(t),i=0;for(r=0;r<e.length;++r){var o=e[r];if(e0(o,Uint8Array))i+o.length>n.length?(eO.isBuffer(o)||(o=eO.from(o)),o.copy(n,i)):Uint8Array.prototype.set.call(n,o,i);else if(eO.isBuffer(o))o.copy(n,i);else throw TypeError('"list" argument must be an Array of Buffers');i+=o.length}return n},eO.byteLength=ej,// This property is used by `Buffer.isBuffer` (and the `is-buffer` npm package)
// to detect a Buffer instance. It's not possible to use `instanceof Buffer`
// reliably in a browserify context because there could be multiple different
// copies of the 'buffer' package in use. This method works even for Buffer
// instances that were created from another copy of the `buffer` package.
// See: https://github.com/feross/buffer/issues/154
eO.prototype._isBuffer=!0,eO.prototype.swap16=function(){var e=this.length;if(e%2!=0)throw RangeError("Buffer size must be a multiple of 16-bits");for(var t=0;t<e;t+=2)eI(this,t,t+1);return this},eO.prototype.swap32=function(){var e=this.length;if(e%4!=0)throw RangeError("Buffer size must be a multiple of 32-bits");for(var t=0;t<e;t+=4)eI(this,t,t+3),eI(this,t+1,t+2);return this},eO.prototype.swap64=function(){var e=this.length;if(e%8!=0)throw RangeError("Buffer size must be a multiple of 64-bits");for(var t=0;t<e;t+=8)eI(this,t,t+7),eI(this,t+1,t+6),eI(this,t+2,t+5),eI(this,t+3,t+4);return this},eO.prototype.toString=function(){var e=this.length;return 0===e?"":0==arguments.length?ek(this,0,e):eN.apply(this,arguments)},eO.prototype.toLocaleString=eO.prototype.toString,eO.prototype.equals=function(e){if(!eO.isBuffer(e))throw TypeError("Argument must be a Buffer");return this===e||0===eO.compare(this,e)},eO.prototype.inspect=function(){var e="";return e=this.toString("hex",0,50).replace(/(.{2})/g,"$1 ").trim(),this.length>50&&(e+=" ... "),"<Buffer "+e+">"},eA&&(eO.prototype[eA]=eO.prototype.inspect),eO.prototype.compare=function(e,t,r,n,i){if(e0(e,Uint8Array)&&(e=eO.from(e,e.offset,e.byteLength)),!eO.isBuffer(e))throw TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+(void 0===e?"undefined":S(e)));if(void 0===t&&(t=0),void 0===r&&(r=e?e.length:0),void 0===n&&(n=0),void 0===i&&(i=this.length),t<0||r>e.length||n<0||i>this.length)throw RangeError("out of range index");if(n>=i&&t>=r)return 0;if(n>=i)return -1;if(t>=r)return 1;if(t>>>=0,r>>>=0,n>>>=0,i>>>=0,this===e)return 0;for(var o=i-n,a=r-t,s=Math.min(o,a),u=this.slice(n,i),f=e.slice(t,r),c=0;c<s;++c)if(u[c]!==f[c]){o=u[c],a=f[c];break}return o<a?-1:a<o?1:0},eO.prototype.includes=function(e,t,r){return -1!==this.indexOf(e,t,r)},eO.prototype.indexOf=function(e,t,r){return e$(this,e,t,r,!0)},eO.prototype.lastIndexOf=function(e,t,r){return e$(this,e,t,r,!1)},eO.prototype.write=function(e,t,r,n){// Buffer#write(string)
if(void 0===t)n="utf8",r=this.length,t=0;else if(void 0===r&&"string"==typeof t)n=t,r=this.length,t=0;else if(isFinite(t))t>>>=0,isFinite(r)?(r>>>=0,void 0===n&&(n="utf8")):(n=r,r=void 0);else throw Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");var i,o,a,s,u,f,c,l,h=this.length-t;if((void 0===r||r>h)&&(r=h),e.length>0&&(r<0||t<0)||t>this.length)throw RangeError("Attempt to write outside buffer bounds");n||(n="utf8");for(var p=!1;;)switch(n){case"hex":return function(e,t,r,n){r=Number(r)||0;var i,o=e.length-r;n?(n=Number(n))>o&&(n=o):n=o;var a=t.length;for(n>a/2&&(n=a/2),i=0;i<n;++i){var s=parseInt(t.substr(2*i,2),16);if(s!=s)break;e[r+i]=s}return i}(this,e,t,r);case"utf8":case"utf-8":return i=t,o=r,eZ(eQ(e,this.length-i),this,i,o);case"ascii":case"latin1":case"binary":return a=t,s=r,eZ(function(e){for(var t=[],r=0;r<e.length;++r)t.push(255&e.charCodeAt(r));return t}(e),this,a,s);case"base64":// Warning: maxLength not taken into account in base64Write
return u=t,f=r,eZ(eX(e),this,u,f);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return c=t,l=r,eZ(function(e,t){for(var r,n,i=[],o=0;o<e.length&&!((t-=2)<0);++o)n=(r=e.charCodeAt(o))>>8,i.push(r%256),i.push(n);return i}(e,this.length-c),this,c,l);default:if(p)throw TypeError("Unknown encoding: "+n);n=(""+n).toLowerCase(),p=!0}},eO.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}},eO.prototype.slice=function(e,t){var r=this.length;e=~~e,t=void 0===t?r:~~t,e<0?(e+=r)<0&&(e=0):e>r&&(e=r),t<0?(t+=r)<0&&(t=0):t>r&&(t=r),t<e&&(t=e);var n=this.subarray(e,t);return(// Return an augmented `Uint8Array` instance
Object.setPrototypeOf(n,eO.prototype),n)},eO.prototype.readUintLE=eO.prototype.readUIntLE=function(e,t,r){e>>>=0,t>>>=0,r||eL(e,t,this.length);for(var n=this[e],i=1,o=0;++o<t&&(i*=256);)n+=this[e+o]*i;return n},eO.prototype.readUintBE=eO.prototype.readUIntBE=function(e,t,r){e>>>=0,t>>>=0,r||eL(e,t,this.length);for(var n=this[e+--t],i=1;t>0&&(i*=256);)n+=this[e+--t]*i;return n},eO.prototype.readUint8=eO.prototype.readUInt8=function(e,t){return e>>>=0,t||eL(e,1,this.length),this[e]},eO.prototype.readUint16LE=eO.prototype.readUInt16LE=function(e,t){return e>>>=0,t||eL(e,2,this.length),this[e]|this[e+1]<<8},eO.prototype.readUint16BE=eO.prototype.readUInt16BE=function(e,t){return e>>>=0,t||eL(e,2,this.length),this[e]<<8|this[e+1]},eO.prototype.readUint32LE=eO.prototype.readUInt32LE=function(e,t){return e>>>=0,t||eL(e,4,this.length),(this[e]|this[e+1]<<8|this[e+2]<<16)+16777216*this[e+3]},eO.prototype.readUint32BE=eO.prototype.readUInt32BE=function(e,t){return e>>>=0,t||eL(e,4,this.length),16777216*this[e]+(this[e+1]<<16|this[e+2]<<8|this[e+3])},eO.prototype.readBigUInt64LE=e2(function(e){eV(e>>>=0,"offset");var t=this[e],r=this[e+7];(void 0===t||void 0===r)&&eG(e,this.length-8);var n=t+256*this[++e]+65536*this[++e]+16777216*this[++e],i=this[++e]+256*this[++e]+65536*this[++e]+16777216*r;return BigInt(n)+(BigInt(i)<<BigInt(32))}),eO.prototype.readBigUInt64BE=e2(function(e){eV(e>>>=0,"offset");var t=this[e],r=this[e+7];(void 0===t||void 0===r)&&eG(e,this.length-8);var n=16777216*t+65536*this[++e]+256*this[++e]+this[++e],i=16777216*this[++e]+65536*this[++e]+256*this[++e]+r;return(BigInt(n)<<BigInt(32))+BigInt(i)}),eO.prototype.readIntLE=function(e,t,r){e>>>=0,t>>>=0,r||eL(e,t,this.length);for(var n=this[e],i=1,o=0;++o<t&&(i*=256);)n+=this[e+o]*i;return n>=(i*=128)&&(n-=Math.pow(2,8*t)),n},eO.prototype.readIntBE=function(e,t,r){e>>>=0,t>>>=0,r||eL(e,t,this.length);for(var n=t,i=1,o=this[e+--n];n>0&&(i*=256);)o+=this[e+--n]*i;return o>=(i*=128)&&(o-=Math.pow(2,8*t)),o},eO.prototype.readInt8=function(e,t){return(e>>>=0,t||eL(e,1,this.length),128&this[e])?-((255-this[e]+1)*1):this[e]},eO.prototype.readInt16LE=function(e,t){e>>>=0,t||eL(e,2,this.length);var r=this[e]|this[e+1]<<8;return 32768&r?4294901760|r:r},eO.prototype.readInt16BE=function(e,t){e>>>=0,t||eL(e,2,this.length);var r=this[e+1]|this[e]<<8;return 32768&r?4294901760|r:r},eO.prototype.readInt32LE=function(e,t){return e>>>=0,t||eL(e,4,this.length),this[e]|this[e+1]<<8|this[e+2]<<16|this[e+3]<<24},eO.prototype.readInt32BE=function(e,t){return e>>>=0,t||eL(e,4,this.length),this[e]<<24|this[e+1]<<16|this[e+2]<<8|this[e+3]},eO.prototype.readBigInt64LE=e2(function(e){eV(e>>>=0,"offset");var t=this[e],r=this[e+7];return(void 0===t||void 0===r)&&eG(e,this.length-8),(BigInt(this[e+4]+256*this[e+5]+65536*this[e+6]+(r<<24// Overflow
))<<BigInt(32))+BigInt(t+256*this[++e]+65536*this[++e]+16777216*this[++e])}),eO.prototype.readBigInt64BE=e2(function(e){eV(e>>>=0,"offset");var t=this[e],r=this[e+7];return(void 0===t||void 0===r)&&eG(e,this.length-8),(BigInt((t<<24)+// Overflow
65536*this[++e]+256*this[++e]+this[++e])<<BigInt(32))+BigInt(16777216*this[++e]+65536*this[++e]+256*this[++e]+r)}),eO.prototype.readFloatLE=function(e,t){return e>>>=0,t||eL(e,4,this.length),p(this,e,!0,23,4)},eO.prototype.readFloatBE=function(e,t){return e>>>=0,t||eL(e,4,this.length),p(this,e,!1,23,4)},eO.prototype.readDoubleLE=function(e,t){return e>>>=0,t||eL(e,8,this.length),p(this,e,!0,52,8)},eO.prototype.readDoubleBE=function(e,t){return e>>>=0,t||eL(e,8,this.length),p(this,e,!1,52,8)},eO.prototype.writeUintLE=eO.prototype.writeUIntLE=function(e,t,r,n){if(e=+e,t>>>=0,r>>>=0,!n){var i=Math.pow(2,8*r)-1;eP(this,e,t,r,i,0)}var o=1,a=0;for(this[t]=255&e;++a<r&&(o*=256);)this[t+a]=e/o&255;return t+r},eO.prototype.writeUintBE=eO.prototype.writeUIntBE=function(e,t,r,n){if(e=+e,t>>>=0,r>>>=0,!n){var i=Math.pow(2,8*r)-1;eP(this,e,t,r,i,0)}var o=r-1,a=1;for(this[t+o]=255&e;--o>=0&&(a*=256);)this[t+o]=e/a&255;return t+r},eO.prototype.writeUint8=eO.prototype.writeUInt8=function(e,t,r){return e=+e,t>>>=0,r||eP(this,e,t,1,255,0),this[t]=255&e,t+1},eO.prototype.writeUint16LE=eO.prototype.writeUInt16LE=function(e,t,r){return e=+e,t>>>=0,r||eP(this,e,t,2,65535,0),this[t]=255&e,this[t+1]=e>>>8,t+2},eO.prototype.writeUint16BE=eO.prototype.writeUInt16BE=function(e,t,r){return e=+e,t>>>=0,r||eP(this,e,t,2,65535,0),this[t]=e>>>8,this[t+1]=255&e,t+2},eO.prototype.writeUint32LE=eO.prototype.writeUInt32LE=function(e,t,r){return e=+e,t>>>=0,r||eP(this,e,t,4,4294967295,0),this[t+3]=e>>>24,this[t+2]=e>>>16,this[t+1]=e>>>8,this[t]=255&e,t+4},eO.prototype.writeUint32BE=eO.prototype.writeUInt32BE=function(e,t,r){return e=+e,t>>>=0,r||eP(this,e,t,4,4294967295,0),this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=255&e,t+4},eO.prototype.writeBigUInt64LE=e2(function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return ez(this,e,t,BigInt(0),BigInt("0xffffffffffffffff"))}),eO.prototype.writeBigUInt64BE=e2(function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return eF(this,e,t,BigInt(0),BigInt("0xffffffffffffffff"))}),eO.prototype.writeIntLE=function(e,t,r,n){if(e=+e,t>>>=0,!n){var i=Math.pow(2,8*r-1);eP(this,e,t,r,i-1,-i)}var o=0,a=1,s=0;for(this[t]=255&e;++o<r&&(a*=256);)e<0&&0===s&&0!==this[t+o-1]&&(s=1),this[t+o]=(e/a>>0)-s&255;return t+r},eO.prototype.writeIntBE=function(e,t,r,n){if(e=+e,t>>>=0,!n){var i=Math.pow(2,8*r-1);eP(this,e,t,r,i-1,-i)}var o=r-1,a=1,s=0;for(this[t+o]=255&e;--o>=0&&(a*=256);)e<0&&0===s&&0!==this[t+o+1]&&(s=1),this[t+o]=(e/a>>0)-s&255;return t+r},eO.prototype.writeInt8=function(e,t,r){return e=+e,t>>>=0,r||eP(this,e,t,1,127,-128),e<0&&(e=255+e+1),this[t]=255&e,t+1},eO.prototype.writeInt16LE=function(e,t,r){return e=+e,t>>>=0,r||eP(this,e,t,2,32767,-32768),this[t]=255&e,this[t+1]=e>>>8,t+2},eO.prototype.writeInt16BE=function(e,t,r){return e=+e,t>>>=0,r||eP(this,e,t,2,32767,-32768),this[t]=e>>>8,this[t+1]=255&e,t+2},eO.prototype.writeInt32LE=function(e,t,r){return e=+e,t>>>=0,r||eP(this,e,t,4,2147483647,-2147483648),this[t]=255&e,this[t+1]=e>>>8,this[t+2]=e>>>16,this[t+3]=e>>>24,t+4},eO.prototype.writeInt32BE=function(e,t,r){return e=+e,t>>>=0,r||eP(this,e,t,4,2147483647,-2147483648),e<0&&(e=4294967295+e+1),this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=255&e,t+4},eO.prototype.writeBigInt64LE=e2(function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return ez(this,e,t,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))}),eO.prototype.writeBigInt64BE=e2(function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return eF(this,e,t,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))}),eO.prototype.writeFloatLE=function(e,t,r){return eM(this,e,t,!0,r)},eO.prototype.writeFloatBE=function(e,t,r){return eM(this,e,t,!1,r)},eO.prototype.writeDoubleLE=function(e,t,r){return eq(this,e,t,!0,r)},eO.prototype.writeDoubleBE=function(e,t,r){return eq(this,e,t,!1,r)},// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
eO.prototype.copy=function(e,t,r,n){if(!eO.isBuffer(e))throw TypeError("argument should be a Buffer");// Copy 0 bytes; we're done
if(r||(r=0),n||0===n||(n=this.length),t>=e.length&&(t=e.length),t||(t=0),n>0&&n<r&&(n=r),n===r||0===e.length||0===this.length)return 0;// Fatal error conditions
if(t<0)throw RangeError("targetStart out of bounds");if(r<0||r>=this.length)throw RangeError("Index out of range");if(n<0)throw RangeError("sourceEnd out of bounds");n>this.length&&(n=this.length),e.length-t<n-r&&(n=e.length-t+r);var i=n-r;return this===e&&"function"==typeof Uint8Array.prototype.copyWithin?this.copyWithin(t,r,n):Uint8Array.prototype.set.call(e,this.subarray(r,n),t),i},// Usage:
//    buffer.fill(number[, offset[, end]])
//    buffer.fill(buffer[, offset[, end]])
//    buffer.fill(string[, offset[, end]][, encoding])
eO.prototype.fill=function(e,t,r,n){// Handle string cases:
if("string"==typeof e){if("string"==typeof t?(n=t,t=0,r=this.length):"string"==typeof r&&(n=r,r=this.length),void 0!==n&&"string"!=typeof n)throw TypeError("encoding must be a string");if("string"==typeof n&&!eO.isEncoding(n))throw TypeError("Unknown encoding: "+n);if(1===e.length){var i,o=e.charCodeAt(0);("utf8"===n&&o<128||"latin1"===n)&&(e=o)}}else"number"==typeof e?e&=255:"boolean"==typeof e&&(e=Number(e));// Invalid ranges are not set to a default, so can range check early.
if(t<0||this.length<t||this.length<r)throw RangeError("Out of range index");if(r<=t)return this;if(t>>>=0,r=void 0===r?this.length:r>>>0,e||(e=0),"number"==typeof e)for(i=t;i<r;++i)this[i]=e;else{var a=eO.isBuffer(e)?e:eO.from(e,n),s=a.length;if(0===s)throw TypeError('The value "'+e+'" is invalid for argument "value"');for(i=0;i<r-t;++i)this[i+t]=a[i%s]}return this};// CUSTOM ERRORS
// =============
// Simplified versions from Node, changed for Buffer-only usage
var eH={};function eJ(e,t,r){eH[e]=/*#__PURE__*/function(r){!function(e,t){if("function"!=typeof t&&null!==t)throw TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&ed(e,t)}(o,r);var n,i=(n=function(){if("undefined"==typeof Reflect||!Reflect.construct||Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}(),function(){var e,t,r=eg(o);if(n){var i=eg(this).constructor;t=Reflect.construct(r,arguments,i)}else t=r.apply(this,arguments);return(e=t)&&("object"===S(e)||"function"==typeof e)?e:ep(this)});function o(){var r;return es(this,o),Object.defineProperty(ep(r=i.call(this)),"message",{value:t.apply(ep(r),arguments),writable:!0,configurable:!0}),// Add the error code to the name to include it in the stack trace.
r.name="".concat(r.name," [").concat(e,"]"),// Access the stack to generate the error message including the error code
// from the name.
r.stack// eslint-disable-line no-unused-expressions
,// Reset the name to the actual name.
delete r.name,r}return ef(o,[{key:"code",get:function(){return e},set:function(e){Object.defineProperty(this,"code",{configurable:!0,enumerable:!0,value:e,writable:!0})}},{key:"toString",value:function(){return"".concat(this.name," [").concat(e,"]: ").concat(this.message)}}]),o}(r)}function eK(e){for(var t="",r=e.length,n="-"===e[0]?1:0;r>=n+4;r-=3)t="_".concat(e.slice(r-3,r)).concat(t);return"".concat(e.slice(0,r)).concat(t)}function eW(e,t,r,n,i,o){if(e>r||e<t){var a,s=(void 0===t?"undefined":S(t))==="bigint"?"n":"";throw a=o>3?0===t||t===BigInt(0)?">= 0".concat(s," and < 2").concat(s," ** ").concat((o+1)*8).concat(s):">= -(2".concat(s," ** ").concat((o+1)*8-1).concat(s,") and < 2 ** ")+"".concat((o+1)*8-1).concat(s):">= ".concat(t).concat(s," and <= ").concat(r).concat(s),new eH.ERR_OUT_OF_RANGE("value",a,e)}eV(i,"offset"),(void 0===n[i]||void 0===n[i+o])&&eG(i,n.length-(o+1))}function eV(e,t){if("number"!=typeof e)throw new eH.ERR_INVALID_ARG_TYPE(t,"number",e)}function eG(e,t,r){if(Math.floor(e)!==e)throw eV(e,r),new eH.ERR_OUT_OF_RANGE(r||"offset","an integer",e);if(t<0)throw new eH.ERR_BUFFER_OUT_OF_BOUNDS;throw new eH.ERR_OUT_OF_RANGE(r||"offset",">= ".concat(r?1:0," and <= ").concat(t),e)}eJ("ERR_BUFFER_OUT_OF_BOUNDS",function(e){return e?"".concat(e," is outside of buffer bounds"):"Attempt to access memory outside buffer bounds"},RangeError),eJ("ERR_INVALID_ARG_TYPE",function(e,t){return'The "'.concat(e,'" argument must be of type number. Received type ').concat(void 0===t?"undefined":S(t))},TypeError),eJ("ERR_OUT_OF_RANGE",function(e,t,r){var n='The value of "'.concat(e,'" is out of range.'),i=r;return Number.isInteger(r)&&Math.abs(r)>4294967296?i=eK(String(r)):(void 0===r?"undefined":S(r))==="bigint"&&(i=String(r),(r>Math.pow(BigInt(2),BigInt(32))||r<-Math.pow(BigInt(2),BigInt(32)))&&(i=eK(i)),i+="n"),n+=" It must be ".concat(t,". Received ").concat(i)},RangeError);// HELPER FUNCTIONS
// ================
var eY=/[^+/0-9A-Za-z-_]/g;function eQ(e,t){t=t||1/0;for(var r,n=e.length,i=null,o=[],a=0;a<n;++a){// is surrogate component
if((r=e.charCodeAt(a))>55295&&r<57344){// last char was a lead
if(!i){// no lead yet
if(r>56319||a+1===n){// unexpected trail
(t-=3)>-1&&o.push(239,191,189);continue}// valid lead
i=r;continue}// 2 leads in a row
if(r<56320){(t-=3)>-1&&o.push(239,191,189),i=r;continue}// valid surrogate pair
r=(i-55296<<10|r-56320)+65536}else i&&(t-=3)>-1&&o.push(239,191,189);// encode utf8
if(i=null,r<128){if((t-=1)<0)break;o.push(r)}else if(r<2048){if((t-=2)<0)break;o.push(r>>6|192,63&r|128)}else if(r<65536){if((t-=3)<0)break;o.push(r>>12|224,r>>6&63|128,63&r|128)}else if(r<1114112){if((t-=4)<0)break;o.push(r>>18|240,r>>12&63|128,r>>6&63|128,63&r|128)}else throw Error("Invalid code point")}return o}function eX(e){return function(e){var t,r,n=function(e){var t=e.length;if(t%4>0)throw Error("Invalid string. Length must be a multiple of 4");// Trim off extra bytes after placeholder bytes are found
// See: https://github.com/beatgammit/base64-js/issues/42
var r=e.indexOf("=");-1===r&&(r=t);var n=r===t?0:4-r%4;return[r,n]}(e),i=n[0],o=n[1],a=new ev((i+o)*3/4-o),s=0,u=o>0?i-4:i;for(r=0;r<u;r+=4)t=em[e.charCodeAt(r)]<<18|em[e.charCodeAt(r+1)]<<12|em[e.charCodeAt(r+2)]<<6|em[e.charCodeAt(r+3)],a[s++]=t>>16&255,a[s++]=t>>8&255,a[s++]=255&t;return 2===o&&(t=em[e.charCodeAt(r)]<<2|em[e.charCodeAt(r+1)]>>4,a[s++]=255&t),1===o&&(t=em[e.charCodeAt(r)]<<10|em[e.charCodeAt(r+1)]<<4|em[e.charCodeAt(r+2)]>>2,a[s++]=t>>8&255,a[s++]=255&t),a}(function(e){// Node converts strings with length < 2 to ''
if(// Node strips out invalid characters like \n and \t from the string, base64-js does not
(e=// Node takes equal signs as end of the Base64 encoding
(e=e.split("=")[0]).trim().replace(eY,"")).length<2)return"";// Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
for(;e.length%4!=0;)e+="=";return e}(e))}function eZ(e,t,r,n){var i;for(i=0;i<n&&!(i+r>=t.length)&&!(i>=e.length);++i)t[i+r]=e[i];return i}// ArrayBuffer or Uint8Array objects from other contexts (i.e. iframes) do not pass
// the `instanceof` check but they should be treated as of that type.
// See: https://github.com/feross/buffer/issues/166
function e0(e,t){return e instanceof t||null!=e&&null!=e.constructor&&null!=e.constructor.name&&e.constructor.name===t.name}// Create lookup table for `toString('hex')`
// See: https://github.com/feross/buffer/issues/219
var e1=function(){for(var e="0123456789abcdef",t=Array(256),r=0;r<16;++r)for(var n=16*r,i=0;i<16;++i)t[n+i]=e[r]+e[i];return t}();// Return not function with Error if BigInt not supported
function e2(e){return"undefined"==typeof BigInt?e6:e}function e6(){throw Error("BigInt not supported")}/**
 * Determines if the given thing is a array or js object.
 *
 * @param {string} thing - The object or array to be visited.
 *
 * @returns {boolean}
 */function e4(e){return ea.isPlainObject(e)||ea.isArray(e)}/**
 * It removes the brackets from the end of a string
 *
 * @param {string} key - The key of the parameter.
 *
 * @returns {string} the key without the brackets.
 */function e5(e){return ea.endsWith(e,"[]")?e.slice(0,-2):e}/**
 * It takes a path, a key, and a boolean, and returns a string
 *
 * @param {string} path - The path to the current key.
 * @param {string} key - The key of the current object being iterated over.
 * @param {string} dots - If true, the key will be rendered with dots instead of brackets.
 *
 * @returns {string} The path to the current key.
 */function e3(e,t,r){return e?e.concat(t).map(function(e,t){return(// eslint-disable-next-line no-param-reassign
e=e5(e),!r&&t?"["+e+"]":e)}).join(r?".":""):t}var e8=ea.toFlatObject(ea,{},null,function(e){return/^is[A-Z]/.test(e)}),e7=/**
 * Convert a data object to FormData
 *
 * @param {Object} obj
 * @param {?Object} [formData]
 * @param {?Object} [options]
 * @param {Function} [options.visitor]
 * @param {Boolean} [options.metaTokens = true]
 * @param {Boolean} [options.dots = false]
 * @param {?Boolean} [options.indexes = false]
 *
 * @returns {Object}
 **//**
 * It converts an object into a FormData object
 *
 * @param {Object<any, any>} obj - The object to convert to form data.
 * @param {string} formData - The FormData object to append to.
 * @param {Object<string, any>} options
 *
 * @returns
 */function(e,t,r){var n=function(e){if(null===e)return"";if(ea.isDate(e))return e.toISOString();if(!f&&ea.isBlob(e))throw new ec("Blob is not supported. Use a Buffer instead.");return ea.isArrayBuffer(e)||ea.isTypedArray(e)?f&&"function"==typeof Blob?new Blob([e]):eO.from(e):e},i=/**
   * Default visitor.
   *
   * @param {*} value
   * @param {String|Number} key
   * @param {Array<String|Number>} path
   * @this {FormData}
   *
   * @returns {boolean} return true to visit the each prop of the value recursively
   */function(e,r,i){var a,f=e;if(e&&!i&&"object"==typeof e){if(ea.endsWith(r,"{}"))// eslint-disable-next-line no-param-reassign
r=o?r:r.slice(0,-2),// eslint-disable-next-line no-param-reassign
e=JSON.stringify(e);else if(ea.isArray(e)&&(a=e,ea.isArray(a)&&!a.some(e4))||(ea.isFileList(e)||ea.endsWith(r,"[]"))&&(f=ea.toArray(e)))return(// eslint-disable-next-line no-param-reassign
r=e5(r),f.forEach(function(e,i){ea.isUndefined(e)||null===e||t.append(!0===u?e3([r],i,s):null===u?r:r+"[]",n(e))}),!1)}return!!e4(e)||(t.append(e3(i,r,s),n(e)),!1)};if(!ea.isObject(e))throw TypeError("target must be an object");// eslint-disable-next-line no-param-reassign
t=t||new FormData;var o=// eslint-disable-next-line no-param-reassign
(r=ea.toFlatObject(r,{metaTokens:!0,dots:!1,indexes:!1},!1,function(e,t){// eslint-disable-next-line no-eq-null,eqeqeq
return!ea.isUndefined(t[e])})).metaTokens,a=r.visitor||i,s=r.dots,u=r.indexes,f=(r.Blob||"undefined"!=typeof Blob&&Blob)&&ea.isSpecCompliantForm(t);if(!ea.isFunction(a))throw TypeError("visitor must be a function");var c=[],l=Object.assign(e8,{defaultVisitor:i,convertValue:n,isVisitable:e4});if(!ea.isObject(e))throw TypeError("data must be an object");return!function e(r,n){if(!ea.isUndefined(r)){if(-1!==c.indexOf(r))throw Error("Circular reference detected in "+n.join("."));c.push(r),ea.forEach(r,function(r,i){!0===(!(ea.isUndefined(r)||null===r)&&a.call(t,r,ea.isString(i)?i.trim():i,n,l))&&e(r,n?n.concat(i):[i])}),c.pop()}}(e),t};/**
 * It encodes a string by replacing all characters that are not in the unreserved set with
 * their percent-encoded equivalents
 *
 * @param {string} str - The string to encode.
 *
 * @returns {string} The encoded string.
 */function e9(e){var t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\x00"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(e){return t[e]})}/**
 * It takes a params object and converts it to a FormData object
 *
 * @param {Object<string, any>} params - The parameters to be converted to a FormData object.
 * @param {Object<string, any>} options - The options object passed to the Axios constructor.
 *
 * @returns {void}
 */function te(e,t){this._pairs=[],e&&e7(e,this,t)}var tt=te.prototype;/**
 * It replaces all instances of the characters `:`, `$`, `,`, `+`, `[`, and `]` with their
 * URI encoded counterparts
 *
 * @param {string} val The value to be encoded.
 *
 * @returns {string} The encoded value.
 */function tr(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function tn(e,t,r){/*eslint no-param-reassign:0*/if(!t)return e;var n,i=r&&r.encode||tr,o=r&&r.serialize;if(n=o?o(t,r):ea.isURLSearchParams(t)?t.toString():new te(t,r).toString(i)){var a=e.indexOf("#");-1!==a&&(e=e.slice(0,a)),e+=(-1===e.indexOf("?")?"?":"&")+n}return e}tt.append=function(e,t){this._pairs.push([e,t])},tt.toString=function(e){var t=e?function(t){return e.call(this,t,e9)}:e9;return this._pairs.map(function(e){return t(e[0])+"="+t(e[1])},"").join("&")};var ti=/*#__PURE__*/function(){function e(){es(this,e),this.handlers=[]}return ef(e,[{/**
   * Add a new interceptor to the stack
   *
   * @param {Function} fulfilled The function to handle `then` for a `Promise`
   * @param {Function} rejected The function to handle `reject` for a `Promise`
   *
   * @return {Number} An ID used to remove interceptor later
   */key:"use",value:function(e,t,r){return this.handlers.push({fulfilled:e,rejected:t,synchronous:!!r&&r.synchronous,runWhen:r?r.runWhen:null}),this.handlers.length-1}},{/**
   * Remove an interceptor from the stack
   *
   * @param {Number} id The ID that was returned by `use`
   *
   * @returns {Boolean} `true` if the interceptor was removed, `false` otherwise
   */key:"eject",value:function(e){this.handlers[e]&&(this.handlers[e]=null)}},{/**
   * Clear all interceptors from the stack
   *
   * @returns {void}
   */key:"clear",value:function(){this.handlers&&(this.handlers=[])}},{/**
   * Iterate over all the registered interceptors
   *
   * This method is particularly useful for skipping over any
   * interceptors that may have become `null` calling `eject`.
   *
   * @param {Function} fn The function to call for each interceptor
   *
   * @returns {void}
   */key:"forEach",value:function(e){ea.forEach(this.handlers,function(t){null!==t&&e(t)})}}]),e}(),to={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},ta={classes:{URLSearchParams:"undefined"!=typeof URLSearchParams?URLSearchParams:te,FormData:"undefined"!=typeof FormData?FormData:null,Blob:"undefined"!=typeof Blob?Blob:null},isStandardBrowserEnv:("undefined"==typeof navigator||"ReactNative"!==(n=navigator.product)&&"NativeScript"!==n&&"NS"!==n)&&"undefined"!=typeof window&&"undefined"!=typeof document,isStandardBrowserWebWorkerEnv:"undefined"!=typeof WorkerGlobalScope&&// eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope&&"function"==typeof self.importScripts,protocols:["http","https","file","blob","url","data"]},ts=/**
 * It takes a FormData object and returns a JavaScript object
 *
 * @param {string} formData The FormData object to convert to JSON.
 *
 * @returns {Object<string, any> | null} The converted object.
 */function(e){if(ea.isFormData(e)&&ea.isFunction(e.entries)){var t={};return ea.forEachEntry(e,function(e,r){!function e(t,r,n,i){var o=t[i++],a=Number.isFinite(+o),s=i>=t.length;return(o=!o&&ea.isArray(n)?n.length:o,s)?ea.hasOwnProp(n,o)?n[o]=[n[o],r]:n[o]=r:(n[o]&&ea.isObject(n[o])||(n[o]=[]),e(t,r,n[o],i)&&ea.isArray(n[o])&&(n[o]=/**
 * Convert an array to an object.
 *
 * @param {Array<any>} arr - The array to convert to an object.
 *
 * @returns An object with the same keys and values as the array.
 */function(e){var t,r,n={},i=Object.keys(e),o=i.length;for(t=0;t<o;t++)n[r=i[t]]=e[r];return n}(n[o]))),!a}(ea.matchAll(/\w+|\[(\w*)]/g,e).map(function(e){return"[]"===e[0]?"":e[1]||e[0]}),r,t,0)}),t}return null},tu={transitional:to,adapter:ta.isNode?"http":"xhr",transformRequest:[function(e,t){var r,n,i,o=t.getContentType()||"",a=o.indexOf("application/json")>-1,s=ea.isObject(e);if(s&&ea.isHTMLForm(e)&&(e=new FormData(e)),ea.isFormData(e))return a&&a?JSON.stringify(ts(e)):e;if(ea.isArrayBuffer(e)||ea.isBuffer(e)||ea.isStream(e)||ea.isFile(e)||ea.isBlob(e))return e;if(ea.isArrayBufferView(e))return e.buffer;if(ea.isURLSearchParams(e))return t.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),e.toString();if(s){if(o.indexOf("application/x-www-form-urlencoded")>-1)return(r=e,n=this.formSerializer,e7(r,new ta.classes.URLSearchParams,Object.assign({visitor:function(e,t,r,n){return ta.isNode&&ea.isBuffer(e)?(this.append(t,e.toString("base64")),!1):n.defaultVisitor.apply(this,arguments)}},n))).toString();if((i=ea.isFileList(e))||o.indexOf("multipart/form-data")>-1){var u=this.env&&this.env.FormData;return e7(i?{"files[]":e}:e,u&&new u,this.formSerializer)}}return s||a?(t.setContentType("application/json",!1),/**
 * It takes a string, tries to parse it, and if it fails, it returns the stringified version
 * of the input
 *
 * @param {any} rawValue - The value to be stringified.
 * @param {Function} parser - A function that parses a string into a JavaScript object.
 * @param {Function} encoder - A function that takes a value and returns a string.
 *
 * @returns {string} A stringified version of the rawValue.
 */function(e,t,r){if(ea.isString(e))try{return(0,JSON.parse)(e),ea.trim(e)}catch(e){if("SyntaxError"!==e.name)throw e}return(0,JSON.stringify)(e)}(e)):e}],transformResponse:[function(e){var t=this.transitional||tu.transitional,r=t&&t.forcedJSONParsing,n="json"===this.responseType;if(e&&ea.isString(e)&&(r&&!this.responseType||n)){var i=t&&t.silentJSONParsing;try{return JSON.parse(e)}catch(e){if(!i&&n){if("SyntaxError"===e.name)throw ec.from(e,ec.ERR_BAD_RESPONSE,this,null,this.response);throw e}}}return e}],/**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:ta.classes.FormData,Blob:ta.classes.Blob},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};ea.forEach(["delete","get","head","post","put","patch"],function(e){tu.headers[e]={}});// RawAxiosHeaders whose duplicates are ignored by node
// c.f. https://nodejs.org/api/http.html#http_message_headers
var tf=ea.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),/**
 * Parse headers into an object
 *
 * ```
 * Date: Wed, 27 Aug 2014 08:58:49 GMT
 * Content-Type: application/json
 * Connection: keep-alive
 * Transfer-Encoding: chunked
 * ```
 *
 * @param {String} rawHeaders Headers needing to be parsed
 *
 * @returns {Object} Headers parsed into an object
 */tc=function(e){var t,r,n,i={};return e&&e.split("\n").forEach(function(e){n=e.indexOf(":"),t=e.substring(0,n).trim().toLowerCase(),r=e.substring(n+1).trim(),!t||i[t]&&tf[t]||("set-cookie"===t?i[t]?i[t].push(r):i[t]=[r]:i[t]=i[t]?i[t]+", "+r:r)}),i},tl=Symbol("internals");function th(e){return e&&String(e).trim().toLowerCase()}function tp(e){return!1===e||null==e?e:ea.isArray(e)?e.map(tp):String(e)}function td(e,t,r,n,i){if(ea.isFunction(n))return n.call(this,t,r);if(i&&(t=r),ea.isString(t)){if(ea.isString(n))return -1!==t.indexOf(n);if(ea.isRegExp(n))return n.test(t)}}var tg=/*#__PURE__*/function(){function e(t){es(this,e),t&&this.set(t)}return ef(e,[{key:"set",value:function(e,t,r){var n,i=function(e,t,r){var n=th(t);if(!n)throw Error("header name must be a non-empty string");var i=ea.findKey(o,n);i&&void 0!==o[i]&&!0!==r&&(void 0!==r||!1===o[i])||(o[i||t]=tp(e))},o=this,a=function(e,t){return ea.forEach(e,function(e,r){return i(e,r,t)})};return ea.isPlainObject(e)||e instanceof this.constructor?a(e,t):ea.isString(e)&&(e=e.trim())&&(n=e,!/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(n.trim()))?a(tc(e),t):null!=e&&i(t,e,r),this}},{key:"get",value:function(e,t){if(e=th(e)){var r=ea.findKey(this,e);if(r){var n=this[r];if(!t)return n;if(!0===t)return function(e){for(var t,r=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;t=n.exec(e);)r[t[1]]=t[2];return r}(n);if(ea.isFunction(t))return t.call(this,n,r);if(ea.isRegExp(t))return t.exec(n);throw TypeError("parser must be boolean|regexp|function")}}}},{key:"has",value:function(e,t){if(e=th(e)){var r=ea.findKey(this,e);return!!(r&&void 0!==this[r]&&(!t||td(this,this[r],r,t)))}return!1}},{key:"delete",value:function(e,t){var r=function(e){if(e=th(e)){var r=ea.findKey(n,e);r&&(!t||td(n,n[r],r,t))&&(delete n[r],i=!0)}},n=this,i=!1;return ea.isArray(e)?e.forEach(r):r(e),i}},{key:"clear",value:function(e){for(var t=Object.keys(this),r=t.length,n=!1;r--;){var i=t[r];(!e||td(this,this[i],i,e,!0))&&(delete this[i],n=!0)}return n}},{key:"normalize",value:function(e){var t=this,r={};return ea.forEach(this,function(n,i){var o=ea.findKey(r,i);if(o){t[o]=tp(n),delete t[i];return}var a=e?i.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,function(e,t,r){return t.toUpperCase()+r}):String(i).trim();a!==i&&delete t[i],t[a]=tp(n),r[a]=!0}),this}},{key:"concat",value:function(){for(var e,t=arguments.length,r=Array(t),n=0;n<t;n++)r[n]=arguments[n];return(e=this.constructor).concat.apply(e,[this].concat(function(e){if(Array.isArray(e))return R(e)}(r)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(r)||O(r)||function(){throw TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()))}},{key:"toJSON",value:function(e){var t=Object.create(null);return ea.forEach(this,function(r,n){null!=r&&!1!==r&&(t[n]=e&&ea.isArray(r)?r.join(", "):r)}),t}},{key:Symbol.iterator,value:function(){return Object.entries(this.toJSON())[Symbol.iterator]()}},{key:"toString",value:function(){return Object.entries(this.toJSON()).map(function(e){var t=x(e,2);return t[0]+": "+t[1]}).join("\n")}},{key:Symbol.toStringTag,get:function(){return"AxiosHeaders"}}],[{key:"from",value:function(e){return e instanceof this?e:new this(e)}},{key:"concat",value:function(e){for(var t=arguments.length,r=Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n];var i=new this(e);return r.forEach(function(e){return i.set(e)}),i}},{key:"accessor",value:function(e){var t=function(e){var t,i=th(e);r[i]||(t=ea.toCamelCase(" "+e),["get","set","has"].forEach(function(r){Object.defineProperty(n,r+t,{value:function(t,n,i){return this[r].call(this,e,t,n,i)},configurable:!0})}),r[i]=!0)},r=(this[tl]=this[tl]={accessors:{}}).accessors,n=this.prototype;return ea.isArray(e)?e.forEach(t):t(e),this}}]),e}();function ty(e,t){var r=this||tu,n=t||r,i=tg.from(n.headers),o=n.data;return ea.forEach(e,function(e){o=e.call(r,o,i.normalize(),t?t.status:void 0)}),i.normalize(),o}function tm(e){return!!(e&&e.__CANCEL__)}/**
 * A `CanceledError` is an object that is thrown when an operation is canceled.
 *
 * @param {string=} message The message.
 * @param {Object=} config The config.
 * @param {Object=} request The request.
 *
 * @returns {CanceledError} The created error.
 */function tv(e,t,r){ec.call(this,null==e?"canceled":e,ec.ERR_CANCELED,t,r),this.name="CanceledError"}function tb(e,t,r){var n=r.config.validateStatus;!r.status||!n||n(r.status)?e(r):t(new ec("Request failed with status code "+r.status,[ec.ERR_BAD_REQUEST,ec.ERR_BAD_RESPONSE][Math.floor(r.status/100)-4],r.config,r.request,r))}tg.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]),ea.reduceDescriptors(tg.prototype,function(e,t){var r=e.value,n=t[0].toUpperCase()+t.slice(1);return{get:function(){return r},set:function(e){this[n]=e}}}),ea.freezeMethods(tg),ea.inherits(tv,ec,{__CANCEL__:!0});var tw=ta.isStandardBrowserEnv?{write:function(e,t,r,n,i,o){var a=[];a.push(e+"="+encodeURIComponent(t)),ea.isNumber(r)&&a.push("expires="+new Date(r).toGMTString()),ea.isString(n)&&a.push("path="+n),ea.isString(i)&&a.push("domain="+i),!0===o&&a.push("secure"),document.cookie=a.join("; ")},read:function(e){var t=document.cookie.match(RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove:function(e){this.write(e,"",Date.now()-864e5)}}:{write:function(){},read:function(){return null},remove:function(){}};function tE(e,t){return e&&!/^([a-z][a-z\d+\-.]*:)?\/\//i.test(t)?t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e:t}var tA=ta.isStandardBrowserEnv?(o=/**
    * Parse a URL to discover it's components
    *
    * @param {String} url The URL to be parsed
    * @returns {Object}
    */function(e){var t=e;// urlParsingNode provides the UrlUtils interface - http://url.spec.whatwg.org/#urlutils
return a&&(// IE needs attribute set twice to normalize properties
s.setAttribute("href",t),t=s.href),s.setAttribute("href",t),{href:s.href,protocol:s.protocol?s.protocol.replace(/:$/,""):"",host:s.host,search:s.search?s.search.replace(/^\?/,""):"",hash:s.hash?s.hash.replace(/^#/,""):"",hostname:s.hostname,port:s.port,pathname:"/"===s.pathname.charAt(0)?s.pathname:"/"+s.pathname}},a=/(msie|trident)/i.test(navigator.userAgent),s=document.createElement("a"),i=o(window.location.href),function(e){var t=ea.isString(e)?o(e):e;return t.protocol===i.protocol&&t.host===i.host}):function(){return!0},tR=/**
 * Calculate data maxRate
 * @param {Number} [samplesCount= 10]
 * @param {Number} [min= 1000]
 * @returns {Function}
 */function(e,t){var r,n=Array(e=e||10),i=Array(e),o=0,a=0;return t=void 0!==t?t:1e3,function(s){var u=Date.now(),f=i[a];r||(r=u),n[o]=s,i[o]=u;for(var c=a,l=0;c!==o;)l+=n[c++],c%=e;if((o=(o+1)%e)===a&&(a=(a+1)%e),!(u-r<t)){var h=f&&u-f;return h?Math.round(1e3*l/h):void 0}}};function tO(e,t){var r=0,n=tR(50,250);return function(i){var o=i.loaded,a=i.lengthComputable?i.total:void 0,s=o-r,u=n(s),f=o<=a;r=o;var c={loaded:o,total:a,progress:a?o/a:void 0,bytes:s,rate:u||void 0,estimated:u&&a&&f?(a-o)/u:void 0,event:i};c[t?"download":"upload"]=!0,e(c)}}var tx={http:null,xhr:"undefined"!=typeof XMLHttpRequest&&function(e){return new Promise(function(t,r){var n,i,o=function(){e.cancelToken&&e.cancelToken.unsubscribe(i),e.signal&&e.signal.removeEventListener("abort",i)},a=function(){if(c){// Prepare the response
var n=tg.from("getAllResponseHeaders"in c&&c.getAllResponseHeaders());tb(function(e){t(e),o()},function(e){r(e),o()},{data:f&&"text"!==f&&"json"!==f?c.response:c.responseText,status:c.status,statusText:c.statusText,headers:n,config:e,request:c}),// Clean up request
c=null}},s=e.data,u=tg.from(e.headers).normalize(),f=e.responseType;ea.isFormData(s)&&(ta.isStandardBrowserEnv||ta.isStandardBrowserWebWorkerEnv?u.setContentType(!1):u.setContentType("multipart/form-data;",!1));var c=new XMLHttpRequest;// HTTP basic authentication
if(e.auth){var l=e.auth.username||"",h=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";u.set("Authorization","Basic "+btoa(l+":"+h))}var p=tE(e.baseURL,e.url);// Add xsrf header
// This is only done if running in a standard browser environment.
// Specifically not if we're in a web worker, or react-native.
if(c.open(e.method.toUpperCase(),tn(p,e.params,e.paramsSerializer),!0),// Set the request timeout in MS
c.timeout=e.timeout,"onloadend"in c?c.onloadend=a:c.onreadystatechange=function(){c&&4===c.readyState&&(0!==c.status||c.responseURL&&0===c.responseURL.indexOf("file:"))&&// readystate handler is calling before onerror or ontimeout handlers,
// so we should call onloadend on the next 'tick'
setTimeout(a)},// Handle browser request cancellation (as opposed to a manual cancellation)
c.onabort=function(){c&&(r(new ec("Request aborted",ec.ECONNABORTED,e,c)),// Clean up request
c=null)},// Handle low level network errors
c.onerror=function(){// Real errors are hidden from us by the browser
// onerror should only fire if it's a network error
r(new ec("Network Error",ec.ERR_NETWORK,e,c)),// Clean up request
c=null},// Handle timeout
c.ontimeout=function(){var t=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded",n=e.transitional||to;e.timeoutErrorMessage&&(t=e.timeoutErrorMessage),r(new ec(t,n.clarifyTimeoutError?ec.ETIMEDOUT:ec.ECONNABORTED,e,c)),// Clean up request
c=null},ta.isStandardBrowserEnv){// Add xsrf header
var d=(e.withCredentials||tA(p))&&e.xsrfCookieName&&tw.read(e.xsrfCookieName);d&&u.set(e.xsrfHeaderName,d)}// Remove Content-Type if data is undefined
void 0===s&&u.setContentType(null),"setRequestHeader"in c&&ea.forEach(u.toJSON(),function(e,t){c.setRequestHeader(t,e)}),ea.isUndefined(e.withCredentials)||(c.withCredentials=!!e.withCredentials),f&&"json"!==f&&(c.responseType=e.responseType),"function"==typeof e.onDownloadProgress&&c.addEventListener("progress",tO(e.onDownloadProgress,!0)),"function"==typeof e.onUploadProgress&&c.upload&&c.upload.addEventListener("progress",tO(e.onUploadProgress)),(e.cancelToken||e.signal)&&(// Handle cancellation
// eslint-disable-next-line func-names
i=function(t){c&&(r(!t||t.type?new tv(null,e,c):t),c.abort(),c=null)},e.cancelToken&&e.cancelToken.subscribe(i),e.signal&&(e.signal.aborted?i():e.signal.addEventListener("abort",i)));var g=(n=/^([-+\w]{1,25})(:?\/\/|:)/.exec(p))&&n[1]||"";if(g&&-1===ta.protocols.indexOf(g)){r(new ec("Unsupported protocol "+g+":",ec.ERR_BAD_REQUEST,e));return}// Send the request
c.send(s||null)})}};ea.forEach(tx,function(e,t){if(e){try{Object.defineProperty(e,"name",{value:t})}catch(e){// eslint-disable-next-line no-empty
}Object.defineProperty(e,"adapterName",{value:t})}});var tS={getAdapter:function(e){for(var t,r,n=(e=ea.isArray(e)?e:[e]).length,i=0;i<n&&(t=e[i],!(r=ea.isString(t)?tx[t.toLowerCase()]:t));i++);if(!r){if(!1===r)throw new ec("Adapter ".concat(t," is not supported by the environment"),"ERR_NOT_SUPPORT");throw Error(ea.hasOwnProp(tx,t)?"Adapter '".concat(t,"' is not available in the build"):"Unknown adapter '".concat(t,"'"))}if(!ea.isFunction(r))throw TypeError("adapter is not a function");return r},adapters:tx};/**
 * Throws a `CanceledError` if cancellation has been requested.
 *
 * @param {Object} config The config that is to be used for the request
 *
 * @returns {void}
 */function tB(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new tv(null,e)}function tT(e){return tB(e),e.headers=tg.from(e.headers),// Transform request data
e.data=ty.call(e,e.transformRequest),-1!==["post","put","patch"].indexOf(e.method)&&e.headers.setContentType("application/x-www-form-urlencoded",!1),tS.getAdapter(e.adapter||tu.adapter)(e).then(function(t){return tB(e),// Transform response data
t.data=ty.call(e,e.transformResponse,t),t.headers=tg.from(t.headers),t},function(t){return!tm(t)&&(tB(e),t&&t.response&&(t.response.data=ty.call(e,e.transformResponse,t.response),t.response.headers=tg.from(t.response.headers))),Promise.reject(t)})}var tU=function(e){return e instanceof tg?e.toJSON():e};function tC(e,t){var r=function(e,t,r){return ea.isPlainObject(e)&&ea.isPlainObject(t)?ea.merge.call({caseless:r},e,t):ea.isPlainObject(t)?ea.merge({},t):ea.isArray(t)?t.slice():t},n=function(e,t,n){return ea.isUndefined(t)?ea.isUndefined(e)?void 0:r(void 0,e,n):r(e,t,n)},i=function(e,t){if(!ea.isUndefined(t))return r(void 0,t)},o=function(e,t){return ea.isUndefined(t)?ea.isUndefined(e)?void 0:r(void 0,e):r(void 0,t)},a=function(n,i,o){return o in t?r(n,i):o in e?r(void 0,n):void 0};// eslint-disable-next-line no-param-reassign
t=t||{};var s={},u={url:i,method:i,data:i,baseURL:o,transformRequest:o,transformResponse:o,paramsSerializer:o,timeout:o,timeoutMessage:o,withCredentials:o,adapter:o,responseType:o,xsrfCookieName:o,xsrfHeaderName:o,onUploadProgress:o,onDownloadProgress:o,decompress:o,maxContentLength:o,maxBodyLength:o,beforeRedirect:o,transport:o,httpAgent:o,httpsAgent:o,cancelToken:o,socketPath:o,responseEncoding:o,validateStatus:a,headers:function(e,t){return n(tU(e),tU(t),!0)}};return ea.forEach(Object.keys(Object.assign({},e,t)),function(r){var i=u[r]||n,o=i(e[r],t[r],r);ea.isUndefined(o)&&i!==a||(s[r]=o)}),s}var tj="1.5.0",tN={};// eslint-disable-next-line func-names
["object","boolean","number","function","string","symbol"].forEach(function(e,t){tN[e]=function(r){return(void 0===r?"undefined":S(r))===e||"a"+(t<1?"n ":" ")+e}});var tI={};/**
 * Transitional option validator
 *
 * @param {function|boolean?} validator - set to false if the transitional option has been removed
 * @param {string?} version - deprecated version / removed since version
 * @param {string?} message - some message with additional info
 *
 * @returns {function}
 */tN.transitional=function(e,t,r){var n=function(e,t){return"[Axios v"+tj+"] Transitional option '"+e+"'"+t+(r?". "+r:"")};// eslint-disable-next-line func-names
return function(r,i,o){if(!1===e)throw new ec(n(i," has been removed"+(t?" in "+t:"")),ec.ERR_DEPRECATED);return t&&!tI[i]&&(tI[i]=!0,// eslint-disable-next-line no-console
console.warn(n(i," has been deprecated since v"+t+" and will be removed in the near future"))),!e||e(r,i,o)}};var t$={assertOptions:/**
 * Assert object's properties type
 *
 * @param {object} options
 * @param {object} schema
 * @param {boolean?} allowUnknown
 *
 * @returns {object}
 */function(e,t,r){if("object"!=typeof e)throw new ec("options must be an object",ec.ERR_BAD_OPTION_VALUE);for(var n=Object.keys(e),i=n.length;i-- >0;){var o=n[i],a=t[o];if(a){var s=e[o],u=void 0===s||a(s,o,e);if(!0!==u)throw new ec("option "+o+" must be "+u,ec.ERR_BAD_OPTION_VALUE);continue}if(!0!==r)throw new ec("Unknown option "+o,ec.ERR_BAD_OPTION)}},validators:tN},t_=t$.validators,tk=/*#__PURE__*/function(){function e(t){es(this,e),this.defaults=t,this.interceptors={request:new ti,response:new ti}}return ef(e,[{/**
   * Dispatch a request
   *
   * @param {String|Object} configOrUrl The config specific for this request (merged with this.defaults)
   * @param {?Object} config
   *
   * @returns {Promise} The Promise to be fulfilled
   */key:"request",value:function(e,t){"string"==typeof e?(t=t||{}).url=e:t=e||{};var r,n,i=(t=tC(this.defaults,t)).transitional,o=t.paramsSerializer,a=t.headers;void 0!==i&&t$.assertOptions(i,{silentJSONParsing:t_.transitional(t_.boolean),forcedJSONParsing:t_.transitional(t_.boolean),clarifyTimeoutError:t_.transitional(t_.boolean)},!1),null!=o&&(ea.isFunction(o)?t.paramsSerializer={serialize:o}:t$.assertOptions(o,{encode:t_.function,serialize:t_.function},!0)),// Set config.method
t.method=(t.method||this.defaults.method||"get").toLowerCase();// Flatten headers
var s=a&&ea.merge(a.common,a[t.method]);a&&ea.forEach(["delete","get","head","post","put","patch","common"],function(e){delete a[e]}),t.headers=tg.concat(s,a);// filter out skipped interceptors
var u=[],f=!0;this.interceptors.request.forEach(function(e){("function"!=typeof e.runWhen||!1!==e.runWhen(t))&&(f=f&&e.synchronous,u.unshift(e.fulfilled,e.rejected))});var c=[];this.interceptors.response.forEach(function(e){c.push(e.fulfilled,e.rejected)});var l=0;if(!f){var h=[tT.bind(this),void 0];for(h.unshift.apply(h,u),h.push.apply(h,c),n=h.length,r=Promise.resolve(t);l<n;)r=r.then(h[l++],h[l++]);return r}n=u.length;var p=t;for(l=0;l<n;){var d=u[l++],g=u[l++];try{p=d(p)}catch(e){g.call(this,e);break}}try{r=tT.call(this,p)}catch(e){return Promise.reject(e)}for(l=0,n=c.length;l<n;)r=r.then(c[l++],c[l++]);return r}},{key:"getUri",value:function(e){return tn(tE((e=tC(this.defaults,e)).baseURL,e.url),e.params,e.paramsSerializer)}}]),e}();ea.forEach(["delete","get","head","options"],function(e){/*eslint func-names:0*/tk.prototype[e]=function(t,r){return this.request(tC(r||{},{method:e,url:t,data:(r||{}).data}))}}),ea.forEach(["post","put","patch"],function(e){var t=/*eslint func-names:0*/function(t){return function(r,n,i){return this.request(tC(i||{},{method:e,headers:t?{"Content-Type":"multipart/form-data"}:{},url:r,data:n}))}};tk.prototype[e]=t(),tk.prototype[e+"Form"]=t(!0)});/**
 * A `CancelToken` is an object that can be used to request cancellation of an operation.
 *
 * @param {Function} executor The executor function.
 *
 * @returns {CancelToken}
 */var tL=/*#__PURE__*/function(){function e(t){if(es(this,e),"function"!=typeof t)throw TypeError("executor must be a function.");this.promise=new Promise(function(e){r=e});var r,n=this;// eslint-disable-next-line func-names
this.promise.then(function(e){if(n._listeners){for(var t=n._listeners.length;t-- >0;)n._listeners[t](e);n._listeners=null}}),// eslint-disable-next-line func-names
this.promise.then=function(e){// eslint-disable-next-line func-names
var t,r=new Promise(function(e){n.subscribe(e),t=e}).then(e);return r.cancel=function(){n.unsubscribe(t)},r},t(function(e,t,i){n.reason||(n.reason=new tv(e,t,i),r(n.reason))})}return ef(e,[{/**
   * Throws a `CanceledError` if cancellation has been requested.
   */key:"throwIfRequested",value:function(){if(this.reason)throw this.reason}},{/**
   * Subscribe to the cancel signal
   */key:"subscribe",value:function(e){if(this.reason){e(this.reason);return}this._listeners?this._listeners.push(e):this._listeners=[e]}},{/**
   * Unsubscribe from the cancel signal
   */key:"unsubscribe",value:function(e){if(this._listeners){var t=this._listeners.indexOf(e);-1!==t&&this._listeners.splice(t,1)}}}],[{key:"source",value:/**
   * Returns an object that contains a new `CancelToken` and a function that, when called,
   * cancels the `CancelToken`.
   */function(){var t;return{token:new e(function(e){t=e}),cancel:t}}}]),e}(),tP={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(tP).forEach(function(e){var t=x(e,2),r=t[0];tP[t[1]]=r});// Create the default instance to be exported
var tz=/**
 * Create an instance of Axios
 *
 * @param {Object} defaultConfig The default config for the instance
 *
 * @returns {Axios} A new instance of Axios
 */function e(t){var r=new tk(t),n=T(tk.prototype.request,r);return ea.extend(n,tk.prototype,r,{allOwnKeys:!0}),ea.extend(n,r,null,{allOwnKeys:!0}),// Factory for creating new instances
n.create=function(r){return e(tC(t,r))},n}(tu);function tF(){return(tF=A(function(e){var t,r,n;return B(this,function(i){switch(i.label){case 0:return r=[function(e,t){return tD.apply(this,arguments)}(t=/**
 * This function will create a Request object based on configuration's axios
 */function(e){var t=new Headers(e.headers);// HTTP basic authentication
if(e.auth){var r=e.auth.username||"",n=e.auth.password?decodeURI(encodeURIComponent(e.auth.password)):"";t.set("Authorization","Basic ".concat(btoa(r+":"+n)))}var i=e.method.toUpperCase(),o={headers:t,method:i};"GET"!==i&&"HEAD"!==i&&(o.body=e.data,ea.isFormData(o.body)&&ea.isStandardBrowserEnv()&&t.delete("Content-Type")),e.mode&&(o.mode=e.mode),e.cache&&(o.cache=e.cache),e.integrity&&(o.integrity=e.integrity),e.redirect&&(o.redirect=e.redirect),e.referrer&&(o.referrer=e.referrer),ea.isUndefined(e.withCredentials)||(o.credentials=e.withCredentials?"include":"omit");var a=tn(tE(e.baseURL,e.url),e.params,e.paramsSerializer);// Expected browser to throw error if there is any wrong configuration value
return new Request(a,o)}(e),e)],e.timeout&&e.timeout>0&&r.push(new Promise(function(r){setTimeout(function(){r(tM(e.timeoutErrorMessage?e.timeoutErrorMessage:"timeout of "+e.timeout+"ms exceeded",e,"ECONNABORTED",t))},e.timeout)})),[4,Promise.race(r)];case 1:return n=i.sent(),[2,new Promise(function(t,r){n instanceof Error?r(n):"[object Function]"===Object.prototype.toString.call(e.settle)?e.settle(t,r,n):tb(t,r,n)})]}})})).apply(this,arguments)}function tD(){return(tD=A(function(e,t){var r,n;return B(this,function(i){switch(i.label){case 0:return i.trys.push([0,2,,3]),[4,fetch(e)];case 1:return r=i.sent(),[3,3];case 2:return i.sent(),[2,tM("Network Error",t,"ERR_NETWORK",e)];case 3:if(n={ok:r.ok,status:r.status,statusText:r.statusText,headers:new Headers(r.headers),config:t,request:e},!(r.status>=200&&204!==r.status))return[3,14];switch(t.responseType){case"arraybuffer":return[3,4];case"blob":return[3,6];case"json":return[3,8];case"formData":return[3,10]}return[3,12];case 4:return[4,r.arrayBuffer()];case 5:case 7:case 9:case 11:case 13:return n.data=i.sent(),[3,14];case 6:return[4,r.blob()];case 8:return[4,r.json()];case 10:return[4,r.formData()];case 12:return[4,r.text()];case 14:return[2,n]}})})).apply(this,arguments)}/**
 * Note:
 * 
 *   From version >= 0.27.0, createError function is replaced by AxiosError class.
 *   So I copy the old createError function here for backward compatible.
 * 
 * 
 * 
 * Create an Error with the specified message, config, error code, request and response.
 *
 * @param {string} message The error message.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The created error.
 */function tM(e,t,r,n,i){var o;return tz.AxiosError&&"function"==typeof tz.AxiosError?new tz.AxiosError(e,tz.AxiosError[r],t,n,i):((o=Error(e)).config=t,r&&(o.code=r),o.request=n,o.response=i,o.isAxiosError=!0,o.toJSON=function(){return{// Standard
message:this.message,name:this.name,// Microsoft
description:this.description,number:this.number,// Mozilla
fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,// Axios
config:this.config,code:this.code,status:this.response&&this.response.status?this.response.status:null}},o)}// Expose Axios class to allow class inheritance
tz.Axios=tk,// Expose Cancel & CancelToken
tz.CanceledError=tv,tz.CancelToken=tL,tz.isCancel=tm,tz.VERSION=tj,tz.toFormData=e7,// Expose AxiosError class
tz.AxiosError=ec,// alias for CanceledError for backward compatibility
tz.Cancel=tz.CanceledError,// Expose all/spread
tz.all=function(e){return Promise.all(e)},tz.spread=function(e){return function(t){return e.apply(null,t)}},// Expose isAxiosError
tz.isAxiosError=function(e){return ea.isObject(e)&&!0===e.isAxiosError},// Expose mergeConfig
tz.mergeConfig=tC,tz.AxiosHeaders=tg,tz.formToJSON=function(e){return ts(ea.isHTMLForm(e)?new FormData(e):e)},tz.getAdapter=tS.getAdapter,tz.HttpStatusCode=tP,tz.default=tz,tz.Axios,tz.AxiosError,tz.CanceledError,tz.isCancel,tz.CancelToken,tz.VERSION,tz.all,tz.Cancel,tz.isAxiosError,tz.spread,tz.toFormData,tz.AxiosHeaders,tz.HttpStatusCode,tz.formToJSON,tz.getAdapter,tz.mergeConfig;var tq={};Object.defineProperty(tq,"configure",{get:function(){return ru},set:void 0,enumerable:!0,configurable:!0});var tH={};/*!
 * inflection
 * Copyright(c) 2011 Ben Lin <ben@dreamerslab.com>
 * MIT Licensed
 *
 * @fileoverview
 * A port of inflection-js to node.js module.
 */Object.defineProperty(tH,"__esModule",{value:!0}),tH.transform=tH.ordinalize=tH.foreignKey=tH.classify=tH.tableize=tH.demodulize=tH.titleize=tH.dasherize=tH.capitalize=tH.humanize=tH.underscore=tH.camelize=tH.inflect=tH.singularize=tH.pluralize=void 0;/**
 * @description This is a list of nouns that use the same form for both singular and plural.
 *              This list should remain entirely in lower case to correctly match Strings.
 */var tJ=[// 'access',
"accommodation","adulthood","advertising","advice","aggression","aid","air","aircraft","alcohol","anger","applause","arithmetic",// 'art',
"assistance","athletics",// 'attention',
"bacon","baggage",// 'ballet',
// 'beauty',
"beef",// 'beer',
// 'behavior',
"biology",// 'billiards',
"blood","botany",// 'bowels',
"bread",// 'business',
"butter","carbon","cardboard","cash","chalk","chaos","chess","crossroads","countryside",// 'damage',
"dancing",// 'danger',
"deer",// 'delight',
// 'dessert',
"dignity","dirt",// 'distribution',
"dust","economics","education","electricity",// 'employment',
// 'energy',
"engineering","enjoyment",// 'entertainment',
"envy","equipment","ethics","evidence","evolution",// 'failure',
// 'faith',
"fame","fiction",// 'fish',
"flour","flu","food",// 'freedom',
// 'fruit',
"fuel","fun",// 'funeral',
"furniture","gallows","garbage","garlic",// 'gas',
"genetics",// 'glass',
"gold","golf","gossip",// 'grass',
"gratitude","grief",// 'ground',
"guilt","gymnastics",// 'hair',
"happiness","hardware","harm","hate","hatred","health","heat",// 'height',
"help","homework","honesty","honey","hospitality","housework","humour","hunger","hydrogen","ice","importance","inflation","information",// 'injustice',
"innocence",// 'intelligence',
"iron","irony","jam",// 'jealousy',
// 'jelly',
"jewelry",// 'joy',
"judo",// 'juice',
// 'justice',
"karate",// 'kindness',
"knowledge",// 'labour',
"lack",// 'land',
"laughter","lava","leather","leisure","lightning","linguine","linguini","linguistics","literature","litter","livestock","logic","loneliness",// 'love',
"luck","luggage","macaroni","machinery","magic",// 'mail',
"management","mankind","marble","mathematics","mayonnaise","measles",// 'meat',
// 'metal',
"methane","milk","minus","money",// 'moose',
"mud","music","mumps","nature","news","nitrogen","nonsense","nurture","nutrition","obedience","obesity",// 'oil',
"oxygen",// 'paper',
// 'passion',
"pasta","patience",// 'permission',
"physics","poetry","pollution","poverty",// 'power',
"pride",// 'production',
// 'progress',
// 'pronunciation',
"psychology","publicity","punctuation",// 'quality',
// 'quantity',
"quartz","racism",// 'rain',
// 'recreation',
"relaxation","reliability","research","respect","revenge","rice","rubbish","rum","safety",// 'salad',
// 'salt',
// 'sand',
// 'satire',
"scenery","seafood","seaside","series","shame","sheep","shopping",// 'silence',
"sleep",// 'slang'
"smoke","smoking","snow","soap","software","soil",// 'sorrow',
// 'soup',
"spaghetti",// 'speed',
"species",// 'spelling',
// 'sport',
"steam",// 'strength',
"stuff","stupidity",// 'success',
// 'sugar',
"sunshine","symmetry",// 'tea',
"tennis","thirst","thunder","timber",// 'time',
// 'toast',
// 'tolerance',
// 'trade',
"traffic","transportation",// 'travel',
"trust",// 'understanding',
"underwear","unemployment","unity",// 'usage',
"validity","veal","vegetation","vegetarianism","vengeance","violence",// 'vision',
"vitality","warmth",// 'water',
"wealth","weather",// 'weight',
"welfare","wheat",// 'whiskey',
// 'width',
"wildlife",// 'wine',
"wisdom",// 'wood',
// 'wool',
// 'work',
// 'yeast',
"yoga","zinc","zoology"],tK={plural:{men:RegExp("^(m|wom)en$","gi"),people:/(pe)ople$/gi,children:/(child)ren$/gi,tia:/([ti])a$/gi,analyses:RegExp("((a)naly|(b)a|(d)iagno|(p)arenthe|(p)rogno|(s)ynop|(t)he)ses$","gi"),databases:/(database)s$/gi,drives:/(drive)s$/gi,hives:RegExp("(hi|ti)ves$","gi"),curves:/(curve)s$/gi,lrves:/([lr])ves$/gi,aves:/([a])ves$/gi,foves:RegExp("([^fo])ves$","gi"),movies:/(m)ovies$/gi,aeiouyies:RegExp("([^aeiouy]|qu)ies$","gi"),series:/(s)eries$/gi,xes:RegExp("(x|ch|ss|sh)es$","gi"),mice:RegExp("([m|l])ice$","gi"),buses:/(bus)es$/gi,oes:/(o)es$/gi,shoes:/(shoe)s$/gi,crises:RegExp("(cris|ax|test)es$","gi"),octopuses:RegExp("(octop|vir)uses$","gi"),aliases:RegExp("(alias|canvas|status|campus)es$","gi"),summonses:RegExp("^(summons|bonus)es$","gi"),oxen:RegExp("^(ox)en","gi"),matrices:/(matr)ices$/gi,vertices:RegExp("(vert|ind)ices$","gi"),feet:RegExp("^feet$","gi"),teeth:RegExp("^teeth$","gi"),geese:RegExp("^geese$","gi"),quizzes:/(quiz)zes$/gi,whereases:RegExp("^(whereas)es$","gi"),criteria:RegExp("^(criteri)a$","gi"),genera:RegExp("^genera$","gi"),ss:/ss$/gi,s:/s$/gi},singular:{man:RegExp("^(m|wom)an$","gi"),person:/(pe)rson$/gi,child:/(child)$/gi,drive:/(drive)$/gi,ox:RegExp("^(ox)$","gi"),axis:RegExp("(ax|test)is$","gi"),octopus:RegExp("(octop|vir)us$","gi"),alias:RegExp("(alias|status|canvas|campus)$","gi"),summons:RegExp("^(summons|bonus)$","gi"),bus:/(bu)s$/gi,buffalo:RegExp("(buffal|tomat|potat)o$","gi"),tium:/([ti])um$/gi,sis:/sis$/gi,ffe:RegExp("(?:([^f])fe|([lr])f)$","gi"),hive:RegExp("(hi|ti)ve$","gi"),aeiouyy:RegExp("([^aeiouy]|qu)y$","gi"),x:RegExp("(x|ch|ss|sh)$","gi"),matrix:/(matr)ix$/gi,vertex:RegExp("(vert|ind)ex$","gi"),mouse:RegExp("([m|l])ouse$","gi"),foot:RegExp("^foot$","gi"),tooth:RegExp("^tooth$","gi"),goose:RegExp("^goose$","gi"),quiz:/(quiz)$/gi,whereas:RegExp("^(whereas)$","gi"),criterion:RegExp("^(criteri)on$","gi"),genus:RegExp("^genus$","gi"),s:/s$/gi,common:/$/gi}},tW=[// do not replace if its already a plural word
[tK.plural.men],[tK.plural.people],[tK.plural.children],[tK.plural.tia],[tK.plural.analyses],[tK.plural.databases],[tK.plural.drives],[tK.plural.hives],[tK.plural.curves],[tK.plural.lrves],[tK.plural.foves],[tK.plural.aeiouyies],[tK.plural.series],[tK.plural.movies],[tK.plural.xes],[tK.plural.mice],[tK.plural.buses],[tK.plural.oes],[tK.plural.shoes],[tK.plural.crises],[tK.plural.octopuses],[tK.plural.aliases],[tK.plural.summonses],[tK.plural.oxen],[tK.plural.matrices],[tK.plural.feet],[tK.plural.teeth],[tK.plural.geese],[tK.plural.quizzes],[tK.plural.whereases],[tK.plural.criteria],[tK.plural.genera],// original rule
[tK.singular.man,"$1en"],[tK.singular.person,"$1ople"],[tK.singular.child,"$1ren"],[tK.singular.drive,"$1s"],[tK.singular.ox,"$1en"],[tK.singular.axis,"$1es"],[tK.singular.octopus,"$1uses"],[tK.singular.alias,"$1es"],[tK.singular.summons,"$1es"],[tK.singular.bus,"$1ses"],[tK.singular.buffalo,"$1oes"],[tK.singular.tium,"$1a"],[tK.singular.sis,"ses"],[tK.singular.ffe,"$1$2ves"],[tK.singular.hive,"$1ves"],[tK.singular.aeiouyy,"$1ies"],[tK.singular.matrix,"$1ices"],[tK.singular.vertex,"$1ices"],[tK.singular.x,"$1es"],[tK.singular.mouse,"$1ice"],[tK.singular.foot,"feet"],[tK.singular.tooth,"teeth"],[tK.singular.goose,"geese"],[tK.singular.quiz,"$1zes"],[tK.singular.whereas,"$1es"],[tK.singular.criterion,"$1a"],[tK.singular.genus,"genera"],[tK.singular.s,"s"],[tK.singular.common,"s"]],tV=[// do not replace if its already a singular word
[tK.singular.man],[tK.singular.person],[tK.singular.child],[tK.singular.drive],[tK.singular.ox],[tK.singular.axis],[tK.singular.octopus],[tK.singular.alias],[tK.singular.summons],[tK.singular.bus],[tK.singular.buffalo],[tK.singular.tium],[tK.singular.sis],[tK.singular.ffe],[tK.singular.hive],[tK.singular.aeiouyy],[tK.singular.x],[tK.singular.matrix],[tK.singular.mouse],[tK.singular.foot],[tK.singular.tooth],[tK.singular.goose],[tK.singular.quiz],[tK.singular.whereas],[tK.singular.criterion],[tK.singular.genus],// original rule
[tK.plural.men,"$1an"],[tK.plural.people,"$1rson"],[tK.plural.children,"$1"],[tK.plural.databases,"$1"],[tK.plural.drives,"$1"],[tK.plural.genera,"genus"],[tK.plural.criteria,"$1on"],[tK.plural.tia,"$1um"],[tK.plural.analyses,"$1$2sis"],[tK.plural.hives,"$1ve"],[tK.plural.curves,"$1"],[tK.plural.lrves,"$1f"],[tK.plural.aves,"$1ve"],[tK.plural.foves,"$1fe"],[tK.plural.movies,"$1ovie"],[tK.plural.aeiouyies,"$1y"],[tK.plural.series,"$1eries"],[tK.plural.xes,"$1"],[tK.plural.mice,"$1ouse"],[tK.plural.buses,"$1"],[tK.plural.oes,"$1"],[tK.plural.shoes,"$1"],[tK.plural.crises,"$1is"],[tK.plural.octopuses,"$1us"],[tK.plural.aliases,"$1"],[tK.plural.summonses,"$1"],[tK.plural.oxen,"$1"],[tK.plural.matrices,"$1ix"],[tK.plural.vertices,"$1ex"],[tK.plural.feet,"foot"],[tK.plural.teeth,"tooth"],[tK.plural.geese,"goose"],[tK.plural.quizzes,"$1"],[tK.plural.whereases,"$1"],[tK.plural.ss,"ss"],[tK.plural.s,""]],tG=["and","or","nor","a","an","the","so","but","to","of","at","by","from","into","on","onto","off","out","in","over","with","for"],tY=RegExp("(_ids|_id)$","g"),tQ=/_/g,tX=RegExp("[ _]","g"),tZ=/([A-Z])/g,t0=RegExp("^_");/**
 * A helper method that applies rules based replacement to a String.
 * @param str String to modify and return based on the passed rules.
 * @param rules Regexp to match paired with String to use for replacement
 * @param skip Strings to skip if they match
 * @param override String to return as though this method succeeded (used to conform to APIs)
 * @returns Return passed String modified by passed rules.
 * @example
 *
 *     applyRules( 'cows', singular_rules ); // === 'cow'
 */function t1(e,t,r,n){if(n)return n;if(r.includes(e.toLocaleLowerCase()))return e;var i=!0,o=!1,a=void 0;try{for(var s,u=t[Symbol.iterator]();!(i=(s=u.next()).done);i=!0){var f=s.value;if(e.match(f[0])){if(void 0!==f[1])return e.replace(f[0],f[1]);break}}}catch(e){o=!0,a=e}finally{try{i||null==u.return||u.return()}finally{if(o)throw a}}return e}/**
 * This function adds pluralization support to every String object.
 * @param str The subject string.
 * @param plural Overrides normal output with said String.(optional)
 * @returns Singular English language nouns are returned in plural form.
 * @example
 *
 *     const inflection = require( 'inflection' );
 *
 *     inflection.pluralize( 'person' ); // === 'people'
 *     inflection.pluralize( 'octopus' ); // === 'octopuses'
 *     inflection.pluralize( 'Hat' ); // === 'Hats'
 *     inflection.pluralize( 'person', 'guys' ); // === 'guys'
 */function t2(e,t){return t1(e,tW,tJ,t)}/**
 * This function adds singularization support to every String object.
 * @param str The subject string.
 * @param singular Overrides normal output with said String.(optional)
 * @returns Plural English language nouns are returned in singular form.
 * @example
 *
 *     const inflection = require( 'inflection' );
 *
 *     inflection.singularize( 'people' ); // === 'person'
 *     inflection.singularize( 'octopuses' ); // === 'octopus'
 *     inflection.singularize( 'Hats' ); // === 'Hat'
 *     inflection.singularize( 'guys', 'person' ); // === 'person'
 */function t6(e,t){return t1(e,tV,tJ,t)}/**
 * This function adds camelization support to every String object.
 * @param str The subject string.
 * @param lowFirstLetter Default is to capitalize the first letter of the results.(optional)
 *                                 Passing true will lowercase it.
 * @returns Lower case underscored words will be returned in camel case.
 *                  additionally '/' is translated to '::'
 * @example
 *
 *     const inflection = require( 'inflection' );
 *
 *     inflection.camelize( 'message_properties' ); // === 'MessageProperties'
 *     inflection.camelize( 'message_properties', true ); // === 'messageProperties'
 */function t4(e,t){for(var r,n,i,o,a=e.split("/"),s=a.length,u=0;u<s;u++){for(r=a[u].split("_"),n=0,i=r.length;n<i;n++)0!==n&&(r[n]=r[n].toLowerCase()),o=r[n].charAt(0),o=t&&0===u&&0===n?o.toLowerCase():o.toUpperCase(),r[n]=o+r[n].substring(1);a[u]=r.join("")}return a.join("::")}/**
 * This function adds underscore support to every String object.
 * @param str The subject string.
 * @param allUpperCase Default is to lowercase and add underscore prefix.(optional)
 *                  Passing true will return as entered.
 * @returns Camel cased words are returned as lower cased and underscored.
 *                  additionally '::' is translated to '/'.
 * @example
 *
 *     const inflection = require( 'inflection' );
 *
 *     inflection.underscore( 'MessageProperties' ); // === 'message_properties'
 *     inflection.underscore( 'messageProperties' ); // === 'message_properties'
 *     inflection.underscore( 'MP', true ); // === 'MP'
 */function t5(e,t){if(t&&e===e.toUpperCase())return e;for(var r=e.split("::"),n=r.length,i=0;i<n;i++)r[i]=r[i].replace(tZ,"_$1"),r[i]=r[i].replace(t0,"");return r.join("/").toLowerCase()}/**
 * This function adds humanize support to every String object.
 * @param str The subject string.
 * @param lowFirstLetter Default is to capitalize the first letter of the results.(optional)
 *                                 Passing true will lowercase it.
 * @returns Lower case underscored words will be returned in humanized form.
 * @example
 *
 *     const inflection = require( 'inflection' );
 *
 *     inflection.humanize( 'message_properties' ); // === 'Message properties'
 *     inflection.humanize( 'message_properties', true ); // === 'message properties'
 */function t3(e,t){return e=(e=(e=e.toLowerCase()).replace(tY,"")).replace(tQ," "),t||(e=t8(e)),e}/**
 * This function adds capitalization support to every String object.
 * @param str The subject string.
 * @returns All characters will be lower case and the first will be upper.
 * @example
 *
 *     const inflection = require( 'inflection' );
 *
 *     inflection.capitalize( 'message_properties' ); // === 'Message_properties'
 *     inflection.capitalize( 'message properties', true ); // === 'Message properties'
 */function t8(e){return(e=e.toLowerCase()).substring(0,1).toUpperCase()+e.substring(1)}/**
 * This function replaces underscores with dashes in the string.
 * @param str The subject string.
 * @returns Replaces all spaces or underscores with dashes.
 * @example
 *
 *     const inflection = require( 'inflection' );
 *
 *     inflection.dasherize( 'message_properties' ); // === 'message-properties'
 *     inflection.dasherize( 'Message Properties' ); // === 'Message-Properties'
 */function t7(e){return e.replace(tX,"-")}/**
 * This function adds titleize support to every String object.
 * @param str The subject string.
 * @returns Capitalizes words as you would for a book title.
 * @example
 *
 *     const inflection = require( 'inflection' );
 *
 *     inflection.titleize( 'message_properties' ); // === 'Message Properties'
 *     inflection.titleize( 'message properties to keep' ); // === 'Message Properties to Keep'
 */function t9(e){for(var t,r,n=(e=e.toLowerCase().replace(tQ," ")).split(" "),i=n.length,o=0;o<i;o++){r=(t=n[o].split("-")).length;for(var a=0;a<r;a++)0>tG.indexOf(t[a].toLowerCase())&&(t[a]=t8(t[a]));n[o]=t.join("-")}return e=(e=n.join(" ")).substring(0,1).toUpperCase()+e.substring(1)}/**
 * This function adds demodulize support to every String object.
 * @param str The subject string.
 * @returns Removes module names leaving only class names.(Ruby style)
 * @example
 *
 *     const inflection = require( 'inflection' );
 *
 *     inflection.demodulize( 'Message::Bus::Properties' ); // === 'Properties'
 */function re(e){var t=e.split("::");return t[t.length-1]}/**
 * This function adds tableize support to every String object.
 * @param str The subject string.
 * @returns Return camel cased words into their underscored plural form.
 * @example
 *
 *     const inflection = require( 'inflection' );
 *
 *     inflection.tableize( 'MessageBusProperty' ); // === 'message_bus_properties'
 */function rt(e){return e=t2(e=t5(e))}/**
 * This function adds classification support to every String object.
 * @param str The subject string.
 * @returns Underscored plural nouns become the camel cased singular form.
 * @example
 *
 *     const inflection = require( 'inflection' );
 *
 *     inflection.classify( 'message_bus_properties' ); // === 'MessageBusProperty'
 */function rr(e){return e=t6(e=t4(e))}/**
   * This function adds foreign key support to every String object.
   * @param str The subject string.
   * @param dropIdUbar Default is to seperate id with an underbar at the end of the class name,
                                 you can pass true to skip it.(optional)
   * @returns Underscored plural nouns become the camel cased singular form.
   * @example
   *
   *     const inflection = require( 'inflection' );
   *
   *     inflection.foreign_key( 'MessageBusProperty' ); // === 'message_bus_property_id'
   *     inflection.foreign_key( 'MessageBusProperty', true ); // === 'message_bus_propertyid'
   */function rn(e,t){return e=t5(e=re(e))+(t?"":"_")+"id"}/**
 * This function adds ordinalize support to every String object.
 * @param str The subject string.
 * @returns Return all found numbers their sequence like '22nd'.
 * @example
 *
 *     const inflection = require( 'inflection' );
 *
 *     inflection.ordinalize( 'the 1 pitch' ); // === 'the 1st pitch'
 */function ri(e){for(var t=e.split(" "),r=t.length,n=0;n<r;n++)if(!isNaN(parseInt(t[n],10))){var i=t[n].substring(t[n].length-2),o=t[n].substring(t[n].length-1),a="th";"11"!=i&&"12"!=i&&"13"!=i&&("1"===o?a="st":"2"===o?a="nd":"3"===o&&(a="rd")),t[n]+=a}return t.join(" ")}tH.pluralize=t2,tH.singularize=t6,tH.inflect=/**
 * This function will pluralize or singularlize a String appropriately based on a number value
 * @param str The subject string.
 * @param count The number to base pluralization off of.
 * @param singular Overrides normal output with said String.(optional)
 * @param plural Overrides normal output with said String.(optional)
 * @returns English language nouns are returned in the plural or singular form based on the count.
 * @example
 *
 *     const inflection = require( 'inflection' );
 *
 *     inflection.inflect( 'people' 1 ); // === 'person'
 *     inflection.inflect( 'octopuses' 1 ); // === 'octopus'
 *     inflection.inflect( 'Hats' 1 ); // === 'Hat'
 *     inflection.inflect( 'guys', 1 , 'person' ); // === 'person'
 *     inflection.inflect( 'inches', 1.5 ); // === 'inches'
 *     inflection.inflect( 'person', 2 ); // === 'people'
 *     inflection.inflect( 'octopus', 2 ); // === 'octopuses'
 *     inflection.inflect( 'Hat', 2 ); // === 'Hats'
 *     inflection.inflect( 'person', 2, null, 'guys' ); // === 'guys'
 */function(e,t,r,n){return isNaN(t)?e:1===t?t1(e,tV,tJ,r):t1(e,tW,tJ,n)},tH.camelize=t4,tH.underscore=t5,tH.humanize=t3,tH.capitalize=t8,tH.dasherize=t7,tH.titleize=t9,tH.demodulize=re,tH.tableize=rt,tH.classify=rr,tH.foreignKey=rn,tH.ordinalize=ri;var ro={pluralize:t2,singularize:t6,camelize:t4,underscore:t5,humanize:t3,capitalize:t8,dasherize:t7,titleize:t9,demodulize:re,tableize:rt,classify:rr,foreignKey:rn,ordinalize:ri};tH.transform=/**
 * This function performs multiple inflection methods on a string
 * @param str The subject string.
 * @param arr An array of inflection methods.
 * @returns
 * @example
 *
 *     const inflection = require( 'inflection' );
 *
 *     inflection.transform( 'all job', [ 'pluralize', 'capitalize', 'dasherize' ]); // === 'All-jobs'
 */function(e,t){for(var r=t.length,n=0;n<r;n++){var i=ro[t[n]];i&&(e=i(e))}return e};var ra=void 0,rs=function(e,t){for(var r in e)t.apply(ra,[r,e[r],e]),null!=e[r]&&"object"==typeof e[r]&&rs(e[r],t)},ru=function(){var e,t,r,n,i=tz.create();return(// default header configs
i.defaults.headers.common["Access-Control-Allow-Origin"]="*",// request interceptor for configuring authorization headers
i.interceptors.request.use((e=A(function(e){var t,r,n;return B(this,function(i){switch(i.label){case 0:if(!(null==e?void 0:e.validateStatus))return[3,6];if(!(e.url&&"/api/auth/login"===e.url))return[3,2];return[4,y()];case 1:return t=i.sent(),e.headers.Authorization="Bearer ".concat(t),[2,e];case 2:if(!(e.url&&"/api/auth/refresh"===e.url))return[3,4];return[4,y()];case 3:return r=i.sent(),e.headers.Authorization="Bearer ".concat(r),[2,e];case 4:return[4,g()];case 5:n=i.sent(),e.headers.Authorization="Bearer ".concat(n),i.label=6;case 6:return[2,e]}})}),function(t){return e.apply(this,arguments)})),// camelCase to snake_case converter interceptor (backend api uses snake_case)
i.interceptors.request.use((t=A(function(e){var t;return B(this,function(r){return t=function(e,t,r){if("string"==typeof e){var n=(0,tH.underscore)(e);r[n]=t,n!==e&&delete r[e]}else r[e]=t},(null==e?void 0:e.validateStatus)&&rs(e.data,t),[2,e]})}),function(e){return t.apply(this,arguments)})),// snake_case to camelCase converter interceptor (backend api uses snake_case)
i.interceptors.response.use((r=A(function(e){var t,r;return B(this,function(n){return r=function(e,t,r){if("string"==typeof e){var n=(0,tH.camelize)(e,!0);r[n]=t,n!==e&&delete r[e]}else r[e]=t},(null===(t=e.config)||void 0===t?void 0:t.validateStatus)&&rs(e.data,r),[2,e]})}),function(e){return r.apply(this,arguments)}),(n=A(function(e){var t,r,n,o,a,s,u;return B(this,function(f){switch(f.label){case 0:if(!(null==(t=e.config)?void 0:t.validateStatus))return[3,7];if(!(((null===(r=e.response)||void 0===r?void 0:r.status)===401||(null===(n=e.response)||void 0===n?void 0:n.status)===422)&&"/api/auth/refresh"===t.url))return[3,2];return console.log("Login to continue using the api."),[4,b()];case 1:return f.sent(),[2,Promise.reject(e)];case 2:if(!(401===e.response.status&&!t._retry))return[3,7];return t._retry=!0,console.log("Requesting new non-fresh access token."),[4,i.post("/api/auth/refresh")];case 3:if(!(o=f.sent()))return[2,Promise.reject(e)];return s=(a=o.data).accessToken,u=a.refreshToken,[4,m(s)];case 4:return f.sent(),[4,v(u)];case 5:// originalRequest.headers.Authorization = `Bearer ${accessToken}`;
if(f.sent(),(null==t?void 0:t.data)!=null)try{t.data=JSON.parse(t.data)}catch(e){}return[4,i(t)];case 6:return[2,f.sent()];case 7:return[2,Promise.reject(e)]}})}),function(e){return n.apply(this,arguments)})),i)};A(function(){return B(this,function(e){switch(e.label){case 0:return[4,rl.get("/api/auth/login")];case 1:if(204!==e.sent().status)throw b(),Error("Login failed.");return[2]}})}),A(function(e){var t,r,n,i;return B(this,function(o){switch(o.label){case 0:return[4,rl.post("/api/auth/login",e)];case 1:if(201!==(t=o.sent()).status)throw Error("Login failed.");return n=(r=t.data).accessToken,i=r.refreshToken,m(n),v(i),[2]}})}),A(function(){var e;return B(this,function(t){switch(t.label){case 0:return[4,rl.delete("/api/auth/logout",{headers:{Authorization:"Bearer ".concat(y())},validateStatus:null})];case 1:return e=t.sent(),[4,rl.delete("/api/auth/logout",{headers:{Authorization:"Bearer ".concat(g())},validateStatus:null})];case 2:if(204!==t.sent().status&&204!==e.status)throw Error("Logout failed.");return b(),[2]}})}),A(function(e){var t,r,n,i,o,a,s,u,f;return B(this,function(c){switch(c.label){case 0:return[4,rl.post("/api/db/vault/select",e,{headers:{"Content-Type":"application/json"}})];case 1:if(200!==(t=c.sent()).status)throw Error("Querying vault entry by id ".concat(e.id," failed."));return n=(r=t.data).userId,i=r.username,o=r.title,a=r.website,s=r.notes,u=r.folder,f=r.createdAt,[2,{userId:n,username:i,title:o,website:a,notes:s,folder:u,createdAt:f,deletedAt:r.deletedAt,active:r.active,deleted:r.deleted}]}})}),A(function(e){var t;return B(this,function(r){switch(r.label){case 0:return null==e&&(e={}),[4,rl.post("/api/db/vault/select",e,{headers:{"Content-Type":"application/json"}})];case 1:if(200!==(t=r.sent()).status)throw Error("Querying vault entries failed.");return[2,t.data.map(function(e){return{userId:e.userId,username:e.username,title:e.title,website:e.website,notes:e.notes,folder:e.folder,createdAt:e.createdAt,deletedAt:e.deletedAt,active:e.active,deleted:e.deleted}})]}})});var rf="authentication:accessToken",rc="authentication:refreshToken";g=A(function(){return B(this,function(e){switch(e.label){case 0:return[4,chrome.storage.local.get(rf)];case 1:return[2,e.sent()[rf]]}})}),y=A(function(){return B(this,function(e){switch(e.label){case 0:return[4,chrome.storage.local.get(rc)];case 1:return[2,e.sent()[rf]]}})}),u=A(function(e){return B(this,function(t){switch(t.label){case 0:return[4,chrome.storage.local.set({ACCESS_TOKEN:e})];case 1:return[2,t.sent()]}})}),m=function(e){return u.apply(this,arguments)},f=A(function(e){return B(this,function(t){switch(t.label){case 0:return[4,chrome.storage.local.set({REFRESH_TOKEN:e})];case 1:return[2,t.sent()]}})}),v=function(e){return f.apply(this,arguments)},b=A(function(){return B(this,function(e){switch(e.label){case 0:return[4,chrome.storage.local.remove([rf,rc])];case 1:return e.sent(),[2]}})});var rl=(0,tq.configure)();rl.defaults.adapter=function(e){return tF.apply(this,arguments)};var rh={host:"http://127.0.0.1",port:5757};A(function(){var e;return B(this,function(t){switch(t.label){case 0:return e={active:!0,lastFocusedWindow:!0},[4,chrome.tabs.query(e)];case 1:return[2,x.apply(void 0,[t.sent(),1])[0]]}})});var rp=function(){return Array.from(document.getElementsByTagName("input")).filter(function(e){return"password"===e.type})},rd=function(){var e=Array.from(document.getElementsByTagName("input")).filter(function(e){return"password"===e.type}),t=!0,r=!1,n=void 0;try{for(var i,o=e[Symbol.iterator]();!(t=(i=o.next()).done);t=!0)i.value.value="Hello There!"}catch(e){r=!0,n=e}finally{try{t||null==o.return||o.return()}finally{if(r)throw n}}};chrome.tabs.onUpdated.addListener((c=A(function(e,t,r){var n,i,o;return B(this,function(t){switch(t.label){case 0:if(null===(n=r.url)||void 0===n?void 0:n.startsWith("chrome://"))return[2];return[4,chrome.scripting.executeScript({target:{tabId:e},func:rp})];case 1:if(null==(o=null===(i=t.sent()[0])||void 0===i?void 0:i.result)||0===o.length)return console.log("No user input fields available."),[2];return[4,chrome.scripting.executeScript({target:{tabId:e},func:rd})];case 2:return t.sent(),console.log(o),console.log(o.map(function(e){return e.value})),[2]}})}),function(e,t,r){return c.apply(this,arguments)})),chrome.tabs.onActivated.addListener((l=A(function(e){var t;return B(this,function(e){switch(e.label){case 0:return t="".concat(rh.host,":").concat(rh.port,"/api/teapot"),[4,rl.get(t)];case 1:return console.log(e.sent()),[2]}})}),function(e){return l.apply(this,arguments)}))}();//# sourceMappingURL=background.js.map

//# sourceMappingURL=background.js.map
