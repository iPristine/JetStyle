!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:r})},n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="//an.yandex.ru/partner-code-bundles/7288/",n(n.s=774)}({103:function(e,t,n){"use strict";function r(e,t,n,r){var o=(t-r)/(e-n),i=t-o*e;return function(e){return o*e+i}}function o(e,t,n){return Math.max(t,Math.min(e,n))}t.__esModule=!0,t.getLinearFunction=r,t.getLimitedLinearFunction=function(e,t,n,i){var s=r(e,t,n,i);return function(e){return o(s(e),t,i)}},t.getLimit=o},108:function(e,t,n){"use strict";t.__esModule=!0,t.traverseBreadth=function(e,t){for(var n=e.slice();n.length;){var r=t(n.shift());if(!r)return;n.push.apply(n,r)}}},117:function(e,t,n){"use strict";t.__esModule=!0,t.SERVER_USER_GROUP="37";var r=function(){return parseInt(t.SERVER_USER_GROUP,10)},o=4;function i(e){return Math.floor(Number(new Date)/1e3/3600*(1/e))%100||0}t.getUserGroup=function(e){return void 0===e&&(e=o),(r()+i(e))%100}},132:function(e,t,n){"use strict";t.__esModule=!0,t.get=function(e,t){for(var r=0,o=t.split(".");r<o.length;r++){var i=o[r];if(!n(52)(e)){e=void 0;break}e=e[i]}return e}},133:function(e,t,n){"use strict";t.__esModule=!0,t.set=function(e,t,r){if(!n(52)(e))return e;for(var o=e,i=t.split("."),s=i.pop(),c=0,a=i;c<a.length;c++){var u=a[c],d=e[u];e=n(52)(d)?d:e[u]={}}return e[s]=r,o}},134:function(e,t,n){"use strict";t.__esModule=!0,t.listToArray=function(e){if(!e)return[];for(var t=[],n=0;n<e.length;n++)t.push(e[n]);return t}},137:function(e,t,n){"use strict";var r=function(){return(r=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)};t.__esModule=!0,t.setCookie=function(e,t,n,r){void 0===r&&(r={}),r.expires instanceof Date&&(r.expires=r.expires.toUTCString()),void 0===r.path&&(r.path="/");var o="";for(var i in r)r[i]&&(o+="; "+i,!0!==r[i]&&(o+="="+r[i]));try{var s=encodeURIComponent(String(t))+"="+encodeURIComponent(String(n));return e.cookie=s+o}catch(e){return}},t.getCookie=function(e,t){var n=[];try{n=e.cookie?e.cookie.split("; "):[]}catch(e){}for(var r,o=/(%[0-9A-Z]{2})+/g,i=0;i<n.length;i++){var s=n[i].split("="),c=s.slice(1).join("=");try{var a=s[0].replace(o,decodeURIComponent);if(c.replace(o,decodeURIComponent),t===a){r=decodeURIComponent(c);break}}catch(e){return}}return r},t.deleteCookie=function(e,n,o){t.setCookie(e,n,"",r({},o,{expires:new Date(0)}))}},15:function(e,t,n){"use strict";t.__esModule=!0,t.noop=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t]}},166:function(e,t,n){"use strict";t.__esModule=!0;var r={21753:50,27219:50,101833:50,122989:50,70350:50,250894:10};t.isAllowedRepeatAds=function(e,t){if(e in r){var o=r[e];return"boolean"==typeof o?o:r[e]=n(22).isPercent(o)}return t}},173:function(e,t,n){"use strict";t.__esModule=!0,t.getOrCreateItem=function(e,t,n){var r=e.getItem(t);return r||(r=n(t),e.setItem(t,r)),r}},175:function(e,t,n){"use strict";t.__esModule=!0;var r=function(){function e(e){this.coin=this.flipCoin(),this.versions=n(22).prepare(e),this.defaultVersion=n(22).findDefault(e)}return e.prototype.flipCoin=function(){return Math.random()},e.prototype.getId=function(){return this.get("id")},e.prototype.getExtra=function(){return this.get("extra")},e.prototype.getDefaultExtra=function(){return this.defaultVersion&&this.defaultVersion.extra?this.defaultVersion.extra:null},e.prototype.getDefaultId=function(){return this.defaultVersion&&this.defaultVersion.id?this.defaultVersion.id:null},e.prototype.get=function(e){var t=this.choose();return t&&t.hasOwnProperty(e)?t[e]:null},e.prototype.choose=function(){for(var e=null,t=0;t<this.versions.length;t++)if(this.coin<this.versions[t].threshold){e=this.versions[t];break}return e},e}();t.Experiment=r},188:function(e,t,n){"use strict";t.__esModule=!0,t.hasObjectCreate=function(e){void 0===e&&(e=window);var t=e.Object;return Boolean(t.create)},t.hasAtoB=function(e){return void 0===e&&(e=window),Boolean(e.atob)},t.hasES5ArrayMethods=function(e){void 0===e&&(e=window);var t=e.Array,n=t.prototype;return Boolean(n&&n.every&&n.filter&&n.forEach&&n.indexOf&&n.lastIndexOf&&n.map&&n.some&&n.reduce&&n.reduceRight&&t.isArray)},t.hasES5FunctionMethods=function(e){void 0===e&&(e=window);var t=e.Function.prototype;return Boolean(t&&t.bind)},t.hasES5ObjectMethods=function(e){void 0===e&&(e=window);var t=e.Object;return Boolean(t.keys&&t.create&&t.getPrototypeOf&&t.getOwnPropertyNames&&t.isSealed&&t.isFrozen&&t.isExtensible&&t.getOwnPropertyDescriptor&&t.defineProperty&&t.defineProperties&&t.seal&&t.freeze&&t.preventExtensions)},t.hasES5StringMethods=function(e){void 0===e&&(e=window);var t=e.String;return Boolean(t.prototype&&t.prototype.trim)},t.isES5Supported=function(e){return void 0===e&&(e=window),Boolean(n(208).getHasObjectDefineProperty(e)&&t.hasObjectCreate(e)&&t.hasAtoB(e)&&t.hasES5ArrayMethods(e)&&t.hasES5FunctionMethods(e)&&t.hasES5ObjectMethods(e)&&t.hasES5StringMethods(e))};var r=function(e,t){void 0===t&&(t=window);for(var r=n(779).getTestDiv(t),o=0,i=n(213).cssPrefixes;o<i.length;o++){var s=i[o];if(r.style.cssText="display: "+s+e,r.style.length>0)return!0}return!1};t.isFlexboxCurrentSupported=function(e){return void 0===e&&(e=window),r("flex",e)},t.isFlexbox2011Supported=function(e){return void 0===e&&(e=window),r("flexbox",e)},t.isFlexbox2009Supported=function(e){return void 0===e&&(e=window),r("box",e)}},208:function(e,t,n){"use strict";t.__esModule=!0,t.getHasObjectDefineProperty=function(e){void 0===e&&(e=window);var t=e.Object;try{var n={};return t.defineProperty(n,"sentinel",{}),"sentinel"in n}catch(e){return!1}}},213:function(e,t,n){"use strict";t.__esModule=!0,t.prefixes=["","webkit","moz","o","ms"],t.cssPrefixes=["","-webkit-","-ms-","-moz-","-o-"]},215:function(e,t,n){"use strict";t.__esModule=!0;var r=n(43).once(function(){return n(216).getCrossFrameDataSource(self,"Ya.pcodeCrossFrameData",function(){return new(n(87).ObjectStorage)({})})});t.getCrossFrameStorage=function(e){return n(173).getOrCreateItem(r(),e,function(){return new(n(87).ObjectStorage)({})})}},216:function(e,t,n){"use strict";t.__esModule=!0,t.getCrossFrameDataSource=function(e,t,r){var o;return n(108).traverseBreadth([e.top],function(e){if(!(o=n(7).callSafe(function(){return n(132).get(e,t)})))return n(7).callSafe(function(){return n(134).listToArray(e.frames)})||[]}),o||(o=r()),n(133).set(e,t,o),o}},218:function(e,t,n){"use strict";t.__esModule=!0,t.ignoreHosts=[/mail\.ru/i,/devmail\.ru/i]},219:function(e,t,n){"use strict";t.__esModule=!0;var r=function(){function e(e){this.experiments=[];for(var t=0;t<e.length;t++)this.experiments.push(new(n(175).Experiment)(e[t]))}return e.prototype.isCurrentVersion=function(e){for(var t=0;t<this.experiments.length;t++)if(this.experiments[t].getId()===e)return!0;return!1},e}();t.LongExperiment=r},22:function(e,t,n){"use strict";t.__esModule=!0;var r=2;function o(e){return i(e/100)}function i(e){return Number(e.toFixed(r))}t.prepare=function(e){for(var t,n=[],r=0,s=0;s<e.length;s++)r=t=i(o(e[s].percent)+r),n.push({id:e[s].id,extra:e[s].extra,threshold:t});return n},t.toFraction=o,t.fixPrecision=i,t.findDefault=function(e){for(var t=null,n=0;n<e.length;n++)(!t||t.percent<e[n].percent)&&(t=e[n]);return t},t.isPercent=function(e){return Math.random()<o(e)}},25:function(e,t,n){"use strict";t.__esModule=!0,t.filter=function(e,t,n){for(var r=[],o=0;o<e.length;o++){var i=e[o];t.call(n,i,o,e)&&r.push(i)}return r}},26:function(e,t,n){"use strict";t.__esModule=!0,t.isFunction=function(e){return"[object Function]"==={}.toString.call(e)}},31:function(e,t,n){"use strict";function r(){return window.Ya||(window.Ya=s())}function o(){var e=r();return e.Context||(e.Context=i())}t.__esModule=!0,t.setGlobalVariable=function(e,t){o()[e]=t},t.getGlobalVariable=function(e){return o()[e]},t.getYa=r,t.getYaContext=o;var i=function(){return{isAllowedRepeatAds:n(166).isAllowedRepeatAds,_callbacks:[],_asyncIdCounter:0,_asyncModeOn:!1,initTime:Number(new Date),longExp:{getId:function(){return""}},LOG_DIRECT:n(22).isPercent(1),_init:n(7).protect("Ya.Context._callbacks",function(){for(var e=o(),t=0;t<e._callbacks.length;t++)n(7).protect("Ya.Context._callbacks_call",e._callbacks[t])();e._callbacks=[]})}},s=function(){return{Direct:{insertInto:function(e,t,n,r){var i=o();i._asyncModeOn||(i._asyncModeOn=!0),i.AdvManager.renderDirect(e,t,n,r)}},Context:i()}}},34:function(e,t,n){"use strict";t.__esModule=!0;var r="__longExperiment",o=location.host,i=n(25).filter(n(218).ignoreHosts,function(e){return e.test(o)}).length>0,s=n(44).some([/^\w+:\/\/[^?\/]*avito/,/^\w+:\/\/[^?\/]*brozen[-\w]*\.yandex\.ru/,/^\w+:\/\/[^?\/]*yandex[.\w]+\/(pogoda|weather|hava)/,/^\w+:\/\/[^?\/]*netbynet\.wi-fi\.ru/],function(e){return e.test(location.href)}),c=n(103).getLimitedLinearFunction(1535328e6,10,15362784e5,100),a=[[{id:n(4).experimentIds.r320x50.ENABLED,percent:100},{id:n(4).experimentIds.r320x50.DISABLED,percent:0}],[{id:n(4).experimentIds.r320x50.HSL_ENABLED,percent:50},{id:n(4).experimentIds.r320x50.HSL_DISABLED,percent:50}],[{id:n(4).experimentIds.media240x400.OLD_240x400_CLICK_ENABLED,percent:50},{id:n(4).experimentIds.media240x400.OLD_240x400_CLICK_DISABLED,percent:50}],[{id:n(4).experimentIds.media240x400.MEDIA_240x400_SHOW_ENABLED,percent:50},{id:n(4).experimentIds.media240x400.MEDIA_240x400_SHOW_DISABLED,percent:50}],[{id:n(4).experimentIds.media240x400.MEDIA_240x400_BUTTON_ENABLED,percent:50},{id:n(4).experimentIds.media240x400.MEDIA_240x400_BUTTON_DISABLED,percent:50}],[{id:n(4).experimentIds.media240x400.MEDIA_240x400_FAST_ANIMATION_ENABLED,percent:50},{id:n(4).experimentIds.media240x400.MEDIA_240x400_FAST_ANIMATION_DISABLED,percent:50}],[{id:n(4).experimentIds.media240x400.MEDIA_240x400_IGNORE_SETTINGS_ENABLED,percent:50},{id:n(4).experimentIds.media240x400.MEDIA_240x400_IGNORE_SETTINGS_DISABLED,percent:50}],[{id:n(4).experimentIds.rmp.RMP_CONTROL,percent:50},{id:n(4).experimentIds.rmp.RMP_ABILITIES,percent:50}],[{id:n(4).experimentIds.storeButton.ENABLED,percent:50},{id:n(4).experimentIds.storeButton.DISABLED,percent:50}],[{id:n(4).experimentIds.ssSkipToken.ENABLED,percent:s?96:0},{id:n(4).experimentIds.ssSkipToken.WIDE_LOG,percent:1},{id:n(4).experimentIds.ssSkipToken.CLIENT,percent:1},{id:n(4).experimentIds.ssSkipToken.SERVER_MANUAL,percent:1},{id:n(4).experimentIds.ssSkipToken.SERVER_AUTO,percent:1}],[{id:n(4).experimentIds.scrollSlider.ENABLED,percent:1},{id:n(4).experimentIds.scrollSlider.DISABLED,percent:1}],[{id:n(4).experimentIds.horizontalPhoneButton.ENABLED,percent:50},{id:n(4).experimentIds.horizontalPhoneButton.DISABLED,percent:50}],[{id:n(4).experimentIds.intersectionVisibility.FIX,percent:c(Number(new Date))}],[{id:n(4).experimentIds.smartCrop.ALLOWED,percent:0},{id:n(4).experimentIds.smartCrop.ENABLED,percent:2},{id:n(4).experimentIds.smartCrop.DISABLED,percent:2}],[{id:n(4).experimentIds.similarButton.ENABLED,percent:100}]];t.initLongExperiment=function(){var e=new(n(219).LongExperiment)(a);n(31).setGlobalVariable(r,e)},t.isLongExperiment=function(e){if(i)return!1;var t=n(31).getGlobalVariable(r);return!!t&&t.isCurrentVersion(e)}},358:function(e,t,n){"use strict";var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};t.__esModule=!0,t.isHomePage=function(e){return-1!==e.location.hostname.indexOf("yandex")&&"object"===r(e.home)&&Boolean(e.home["export"])}},359:function(e,t,n){"use strict";t.__esModule=!0,t.murmurhash=function(e,t){var n,r,o,i;void 0===t&&(t=710033937);var s=3&e.length;n=e.length-s;var c=t,a=3432918353,u=461845907;for(i=0;i<n;)o=255&e.charCodeAt(i)|(255&e.charCodeAt(++i))<<8|(255&e.charCodeAt(++i))<<16|(255&e.charCodeAt(++i))<<24,++i,c=27492+(65535&(r=5*(65535&(c=(c^=o=(65535&(o=(o=(65535&o)*a+(((o>>>16)*a&65535)<<16)&4294967295)<<15|o>>>17))*u+(((o>>>16)*u&65535)<<16)&4294967295)<<13|c>>>19))+((5*(c>>>16)&65535)<<16)&4294967295))+((58964+(r>>>16)&65535)<<16);switch(o=0,s){case 3:o^=(255&e.charCodeAt(i+2))<<16;case 2:o^=(255&e.charCodeAt(i+1))<<8;case 1:c^=o=(65535&(o=(o=(65535&(o^=255&e.charCodeAt(i)))*a+(((o>>>16)*a&65535)<<16)&4294967295)<<15|o>>>17))*u+(((o>>>16)*u&65535)<<16)&4294967295}return c^=e.length,c=2246822507*(65535&(c^=c>>>16))+((2246822507*(c>>>16)&65535)<<16)&4294967295,c=3266489909*(65535&(c^=c>>>13))+((3266489909*(c>>>16)&65535)<<16)&4294967295,(c^=c>>>16)>>>0}},4:function(e,t,n){"use strict";t.__esModule=!0,t.experimentIds={media240x400:{OLD_240x400_CLICK_ENABLED:"OLD_240x400_CLICK_ENABLED",OLD_240x400_CLICK_DISABLED:"OLD_240x400_CLICK_DISABLED",MEDIA_240x400_BUTTON_ENABLED:"MEDIA_240x400_BUTTON_ENABLED",MEDIA_240x400_BUTTON_DISABLED:"MEDIA_240x400_BUTTON_DISABLED",MEDIA_240x400_FAST_ANIMATION_ENABLED:"MEDIA_240x400_FAST_ANIMATION_ENABLED",MEDIA_240x400_FAST_ANIMATION_DISABLED:"MEDIA_240x400_FAST_ANIMATION_DISABLED",MEDIA_240x400_IGNORE_SETTINGS_ENABLED:"MEDIA_240x400_IGNORE_SETTINGS_ENABLED",MEDIA_240x400_IGNORE_SETTINGS_DISABLED:"MEDIA_240x400_IGNORE_SETTINGS_DISABLED",MEDIA_240x400_SHOW_ENABLED:"MEDIA_240x400_SHOW_ENABLED",MEDIA_240x400_SHOW_DISABLED:"MEDIA_240x400_SHOW_DISABLED"},r320x50:{ENABLED:"R_320x50_ENABLED",DISABLED:"R_320x50_DISABLED",HSL_ENABLED:"R_320x50_HSL_ENABLED",HSL_DISABLED:"R_320x50_HSL_DISABLED"},vertical:{VERTICAL_MOBILE_ENABLED:"VERTICAL_MOBILE_ENABLED",VERTICAL_MOBILE_DISABLED:"VERTICAL_MOBILE_DISABLED"},rmp:{RMP_CONTROL:"RMP_CONTROL",RMP_ABILITIES:"RMP_ABILITIES"},stub:{STUB_CONTROL:"STUB_CONTROL",STUB_DOMAIN:"STUB_DOMAIN",STUB_WITH_SCALE:"STUB_WITH_SCALE",STUB_WITHOUT_SCALE:"STUB_WITHOUT_SCALE"},storeButton:{ENABLED:"STORE_BUTTON_ENABLED",DISABLED:"STORE_BUTTON_DISABLED"},ssSkipToken:{ENABLED:"SS_SKIP_TOKEN_ENABLED",WIDE_LOG:"SS_SKIP_TOKEN_WIDE_LOG",CLIENT:"SS_SKIP_TOKEN_CLIENT",SERVER_MANUAL:"SS_SKIP_TOKEN_SERVER_MANUAL",SERVER_AUTO:"SS_SKIP_TOKEN_SERVER_AUTO"},scrollSlider:{ENABLED:"SCROLL_SLIDER_ENABLED",DISABLED:"SCROLL_SLIDER_DISABLED"},horizontalPhoneButton:{ENABLED:"HORIZONTAL_PHONE_ENABLED",DISABLED:"HORIZONTAL_PHONE_DISABLED"},intersectionVisibility:{FIX:"INTERSECTION_VISIBILITY_ENABLED"},smartCrop:{ALLOWED:"SMART_CROP_ALLOWED",ENABLED:"SMART_CROP_ENABLED",DISABLED:"SMART_CROP_DISABLED"},similarButton:{ENABLED:"SIMILAR_BUTTON_ENABLED"}}},43:function(e,t,n){"use strict";t.__esModule=!0,t.once=function(e){var t=function(){var n=e.apply(this,arguments);return t=function(){return n},n};return function(){return t.apply(this,arguments)}}},44:function(e,t,n){"use strict";t.__esModule=!0,t.some=function(e,t){for(var n=0;n<e.length;n++)if(t(e[n],n,e))return!0;return!1}},46:function(e,t,n){"use strict";var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};t.__esModule=!0,t.isObject=function(e){var t=void 0===e?"undefined":r(e);return Boolean(e)&&("object"===t||"function"===t)}},52:function(e,t,n){"use strict";e.exports=n(46).isObject},64:function(e,t,n){"use strict";t.__esModule=!0;var r=function(e){for(var t=e.paramReg,n=e.location,r=void 0===n?window.location:n,o=e.valueTransform,i=void 0===o?function(e){return e}:o,s=[r.search,r.hash],c=0;c<s.length;c++){var a=s[c].match(t);if(a&&a[1]){var u=i(a[1]);if(void 0!==u)return u;break}}return""},o=function(e,t){var n=new RegExp(e+"=(\\d+)");return r({paramReg:n,location:t,valueTransform:function(e){return parseInt(e,10)||void 0}})};t.getAdditionalBanners=function(e){return void 0===e&&(e=window.location),r({paramReg:/additional-banners=(\d+(?:,\d+)*)/,location:e})},t.additionalBanners=t.getAdditionalBanners(),t.getUrlCodeVersions=function(e){return void 0===e&&(e=window.location),{pcode:o("pcodever",e)||void 0,media:o("mcodever",e)||void 0}},t.urlCodeVersions=t.getUrlCodeVersions()},7:function(e,t,n){"use strict";t.__esModule=!0,t.callSafe=function(e){try{return e()}catch(e){return}},t.protect=function(e,r,o,i){return function(){try{return r.apply(o||this,arguments)}catch(r){if(n(26).isFunction(i)&&i(r),!0===r.preventProtect)throw r;t.protect.log(r,e)}}},t.protect.log=function(e,t){console.log("LOG:"+t+":"+e)},t.protect.setTimeout=function(e,n,r,o){return window.setTimeout(t.protect("timeout",e,r,o),n)}},72:function(e,t,n){"use strict";t.__esModule=!0,t.getHead=function(e){var t=e.document,n=t.getElementsByTagName("head")[0];return n||(n=t.createElement("head"),t.documentElement.appendChild(n)),n}},774:function(e,t,n){"use strict";function r(){var e=n(775);return(0,n(358).isHomePage)(window)&&(e.code=[{id:6706,percent:100,extra:{match:6706,confirm:"//st.yandexadexchange.net/confirm_r_6706.html"}}]),e}!function(e,t,o){var i=r(),s=e.Ya=e.Ya||{},c=(0,n(215).getCrossFrameStorage)("pcode"),a=c.getItem("versionInfo");if(s.codeVer=a&&a.codeVer,s.codeVer===o){s.loaderVer=i.loader;var u=new(n(776).UserGroupExperiment)(i.code),d=n(64).urlCodeVersions.pcode;5428===d&&(d=5699);var _=t.location.hostname;/^(([a-z0-9-]+\.)?)+devmail\.ru$/i.test(_)&&(d=u.getDefaultId()),d?s.codeVer=d:(s.codeVer=u.getId(),n(778).isLegacyBrowser&&(s.codeVer=5935,s.matchVer=5935,s.confirmUrl="//st.yandexadexchange.net/confirm_r_5935.html")),s._exp=u,c.setItem("versionInfo",{codeVer:s.codeVer,loaderVer:s.loaderVer,exp:s._exp,relHostname:s.relHostname})}else s.codeVer=a.codeVer,s.loaderVer=a.loaderVer,s._exp=a.exp,s.relHostname=a.relHostname;s.Context||(s.Context={isAllowedRepeatAds:n(166).isAllowedRepeatAds,_callbacks:[],_asyncIdCounter:0,_asyncModeOn:Boolean(t.currentScript&&t.currentScript.async),initTime:Number(new Date),longExp:{getId:function(){return""}},LOG_DIRECT:(0,n(22).isPercent)(1)},(0,n(34).initLongExperiment)(),s.Direct={insertInto:function(e,t,n,r){s.Context._asyncModeOn||(s.Context._asyncModeOn=!0),s.Context.AdvManager?s.Context.AdvManager.renderDirect(e,t,n,r):s.Context._callbacks.push(function(){s.Context.AdvManager.renderDirect(e,t,n,r)})}});for(var l=["yandex_context_callbacks","yandexContextAsyncCallbacks"],p=0;p<l.length;p++){var f=A(l[p]);if(f){s.Context._asyncModeOn||(s.Context._asyncModeOn=!0);for(var E=0;E<f.length;E++)s.Context._callbacks.push(f[E])}}if(e["yandexContextSyncCallbacks"])for(var x=A("yandexContextSyncCallbacks"),m=0;m<x.length;m++)s.Context._callbacks.push(x[m]);if(e.yandex_ad_format){var I={};D(I,["ad_format","site_bg_color","font_size","font_family","stat_id","no_sitelinks","search_text","search_page_number","lang"]),D(I,["type","border_type","bg_color","border_radius","border_color","header_bg_color","title_color","text_color","url_color","hover_color","sitelinks_color","links_underline","limit","place","favicon","title_font_size","grab","c11n","geo_lat","geo_long","width","height"],I.ad_format);var h=I.place;h&&t.getElementById(h)||(h="Ya_sync_"+s.Context._asyncIdCounter++,t.write('<div id="'+h+'"></div>'));var S=v("partner_id");s.Context._callbacks.push(function(){s.Context.AdvManager.renderDirect(S,h,I)})}function A(t){var n=e[t];return e[t]=o,n}function v(e,t){return A("yandex_"+(t?t+"_":"")+e)}function D(e,t,n){for(var r=0;r<t.length;r++)e[t[r]]=v(t[r],n)}var g=t.currentScript&&t.currentScript.src||"",y=(0,n(780).getBundleUrl)(e,s,g);if(t.getElementById(y)&&s.Context._init)s.Context._init();else if(s.Context._asyncModeOn||(t.write('<script type="text/javascript" src="'+y+'" id="'+y+'"><\/script>'),t.getElementById(y)||(s.Context._asyncModeOn=!0)),s.Context._asyncModeOn){var L=(0,n(72).getHead)(e),B=t.createElement("script");B.id=y,B.src=y,L.appendChild(B)}}(window,window.document)},775:function(e,t){e.exports={loader:1545733708792,code:[{id:7286,percent:5,extra:{match:7286,confirm:"//st.yandexadexchange.net/confirm_r_7286.html"}},{id:7285,percent:5,extra:{match:7285,confirm:"//st.yandexadexchange.net/confirm_r_7285.html"}},{id:7284,percent:10,extra:{match:7284,confirm:"//st.yandexadexchange.net/confirm_r_7284.html"}},{id:7283,percent:10,extra:{match:7283,confirm:"//st.yandexadexchange.net/confirm_r_7283.html"}},{id:7287,percent:70,extra:{match:7287,confirm:"//st.yandexadexchange.net/confirm_r_7287.html"}}]}},776:function(e,t,n){"use strict";var r,o,i=(r=function(e,t){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)});t.__esModule=!0,function(e){e[e["Server"]=0]="Server",e[e["Cookie"]=1]="Cookie",e[e["Random"]=2]="Random"}(o=t.CoinType||(t.CoinType={}));var s=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return i(t,e),t.prototype.flipCoin=function(){this.coinType=o.Random,this.userGroupCoin=Math.random();var e={serv:-1,serv1:-1,serv2:-1,serv3:-1,serv4:-1,serv5:-1,cookie:-1,coin:this.userGroupCoin},r=n(137).getCookie(document,"yandexuid");if(Boolean(r)){var i=n(22).toFraction(n(359).murmurhash(r||"",t.getSalt())%100);this.coinType=o.Cookie,this.userGroupCoin=i,e.cookie=i}var s=n(117).getUserGroup(4);if(!isNaN(s)){var c=n(22).toFraction(s);this.coinType=o.Server,this.userGroupCoin=c,e.serv=c,e.serv1=n(22).toFraction(n(117).getUserGroup(1)),e.serv2=n(22).toFraction(n(117).getUserGroup(2)),e.serv3=n(22).toFraction(n(117).getUserGroup(3)),e.serv4=n(22).toFraction(n(117).getUserGroup(4)),e.serv5=n(22).toFraction(n(117).getUserGroup(5))}return t.logCoin(e),this.userGroupCoin},t.prototype.getUserGroupCoin=function(){return{coin:this.userGroupCoin,type:this.coinType}},t.getSalt=function(){var e=new Date,t=e.getFullYear()+"-"+e.getMonth()+"-"+e.getDate();return n(359).murmurhash(t)},t.logCoin=function(e){try{n(22).isPercent(1)&&n(777).post({url:"https://an.yandex.ru/jstracer",data:JSON.stringify(e)})}catch(e){}},t}(n(175).Experiment);t.UserGroupExperiment=s},777:function(e,t,n){"use strict";t.__esModule=!0,t.post=function(e){var t=e.url,r=e.data,o=e.onError,i=void 0===o?n(15).noop:o,s=e.onSuccess,c=void 0===s?n(15).noop:s,a=e.xhr,u=new(void 0===a?XMLHttpRequest:a);u.open("POST",t,!0),u.onerror=i,u.onreadystatechange=function(){4===u.readyState&&c(u)},u.send(r)}},778:function(e,t,n){"use strict";t.__esModule=!0;var r=window,o=n(188).isFlexbox2011Supported(r)||n(188).isFlexbox2009Supported(r),i=!n(188).isFlexboxCurrentSupported(r)&&o;t.isLegacyBrowser=!n(188).isES5Supported(r)||i},779:function(e,t,n){"use strict";var r;t.__esModule=!0,t.getTestDiv=function(e){return void 0===e&&(e=window),r||(r=e.document.createElement("div")),r}},780:function(e,t,n){"use strict";t.__esModule=!0,t.getBundleUrl=function(e,t,r){if(r.indexOf("/yastatic.net/")>-1){var o=void 0;return o=n(88).isTurboPage(e)?"context_static_turbo.js":n(358).isHomePage(e)?"context_static_home.js":n(781).isImagesPage(e)?"context_static_images.js":"context_static.js","https://yastatic.net/partner-code-bundles/"+t.codeVer+"/"+o}return n(782).isMailRuMailPage(e)?"https://yastatic.net/partner-code-bundles/"+t.codeVer+"/context_static_mailru_mail.js":n(783).isMailRuOkPage(e)?"https://yastatic.net/partner-code-bundles/"+t.codeVer+"/context_static_mailru_ok.js":"https://an.yandex.ru/resource/context_static_r_<%= CODE_VER %>.js".replace("<%= CODE_VER %>",String(t.codeVer))}},781:function(e,t,n){"use strict";var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};t.__esModule=!0,t.isImagesPage=function(e){return-1!==e.location.hostname.indexOf("yandex")&&"object"===r(e.Ya.Images)}},782:function(e,t,n){"use strict";t.__esModule=!0,t.isMailRuMailPage=function(e){return void 0===e&&(e=window),Boolean(e.YA_MAILRU_MAIL)}},783:function(e,t,n){"use strict";t.__esModule=!0,t.isMailRuOkPage=function(e){return void 0===e&&(e=window),Boolean(e.YA_MAILRU_OK)}},87:function(e,t,n){"use strict";t.__esModule=!0;var r=function(){function e(e){this.obj=e}return e.prototype.getItem=function(e){return this.obj[e]},e.prototype.setItem=function(e,t){this.obj[e]=t},e}();t.ObjectStorage=r},88:function(e,t,n){"use strict";t.__esModule=!0,t.isTurboPage=function(e){return void 0===e&&(e=window),Boolean(e.YA_TURBO_PAGES)}}});