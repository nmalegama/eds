window.cudatalayer = {};

/*
(function (datalayer) {
    'use strict';

    datalayer.pushEloquaPersonId = function () {
        var eloquaPersonId = $.cookie('ELOQUA');
        if (eloquaPersonId !== undefined) {
            eloquaPersonId = eloquaPersonId.split('=').pop();
            window.dataLayer.push({
                'event': 'e_eloquaPersonId',
                'eloquaPersonId': eloquaPersonId
            });
        }
    }

    datalayer.pushAdobeVisitorId = function () {
        if (typeof s !== 'undefined') {
            window.dataLayer.push({
                'event': 'e_adobeVisitorId',
                'adobeVisitorId': s.marketingCloudVisitorID
            });
        }
    };

    datalayer.pushLeadIds = function (seahawkLeadId, eloquaLeadId) {
        if (seahawkLeadId && eloquaLeadId) {
            window.dataLayer.push({
                'event': 'e_eloquaLeadId',
                'eloquaLeadId': eloquaLeadId,
                'seahawkLeadId': seahawkLeadId
            });
        }
    };

    datalayer.createCookie = function (name, value, secs, cookieDomain) {
        var domain = "";
        var expires = "";
        if (secs) {
            var date = new Date();
            date.setTime(date.getTime() + Math.ceil(secs * 1000));
            var expires = " expires=" + date.toGMTString() + ";";
        }
        if (typeof (cookieDomain) != 'undefined')
            domain = " domain=" + cookieDomain + "; ";
        document.cookie = name + "=" + value + ";" + expires + domain + "path=/";
    };

    datalayer.init = function () {
        window.dataLayer = window.dataLayer || [];

        // As Adobe launch script is being loaded asynchronously, we have to wait for it the whole page to load,
        // as there is no known event for load of adobe launch. Can be removed if adobe launch is not required
        // or there is some specific event for the launch script load.
        // Also for CU PMLP we are loading jquery with defer, so to avoid race condition, calling 
        // pushEloquaPersonId when everything loads
        window.addEventListener('load', function() {
            datalayer.pushAdobeVisitorId();
            datalayer.pushEloquaPersonId();
        });

        console.log('Datalayer Initialized!');
    };

    datalayer.init();
})(cudatalayer); 
*/
