(function(){function c(a){this.t=a}function l(a,b){for(var e=b.split(".");e.length;){if(!(e[0]in a))return!1;a=a[e.shift()]}return a}function d(a,b){return a.replace(h,function(e,a,i,f,c,h,k,m){var f=l(b,f),j="",g;if(!f)return"!"==i?d(c,b):k?d(m,b):"";if(!i)return d(h,b);if("@"==i){e=b._key;a=b._val;for(g in f)f.hasOwnProperty(g)&&(b._key=g,b._val=f[g],j+=d(c,b));b._key=e;b._val=a;return j}}).replace(k,function(a,c,d){return(a=l(b,d))||0===a?"%"==c?(new Option(a)).innerHTML.replace(/"/g,"&quot;"):
a:""})}var h=/\{\{(([@!]?)(.+?))\}\}(([\s\S]+?)(\{\{:\1\}\}([\s\S]+?))?)\{\{\/\1\}\}/g,k=/\{\{([=%])(.+?)\}\}/g;c.prototype.render=function(a){return d(this.t,a)};GrowthMessage.t=c})();
var GrowthMessage;
(function (GrowthMessage) {
    var App = (function () {
        function App() {
        }
        return App;
    })();
    GrowthMessage.App = App;
})(GrowthMessage || (GrowthMessage = {}));
var GrowthMessage;
(function (GrowthMessage) {
    var Config = (function () {
        function Config() {
            this.data = {
                "created": "2015-05-09T10:56:06+0000",
                "eventId": "Event:P5C3vzoLOEijnlVj:Default:Open",
                "frequency": 1,
                "segmentId": "Segment:P5C3vzoLOEijnlVj:Default:All",
                "cap": 100,
                "archived": null,
                "version": 3,
                "id": "PBHNxGGXDvZwmF7C",
                "type": "image",
                "task": {
                    "created": "2015-04-29T20:44:17+0000",
                    "applicationId": "P5C3vzoLOEijnlVj",
                    "disabled": false,
                    "availableFrom": "2015-03-31T20:43:42+0000",
                    "availableTo": "2015-05-30T20:43:42+0000",
                    "updated": "2015-05-13T05:37:22+0000",
                    "description": "",
                    "name": "テンプレート",
                    "id": "PBHNxFzRAJCbeJzS",
                    "messages": null
                },
                "buttons": [
                    {
                        "created": "2015-05-09T10:56:07+0000",
                        "type": "image",
                        "message": null,
                        "intent": {
                            "extra": {
                                "view": "view_x",
                                "action": "open_view"
                            },
                            "created": "2015-05-09T10:56:00+0000",
                            "applicationId": "P5C3vzoLOEijnlVj",
                            "description": "",
                            "name": "ビューXを開く",
                            "id": "PCBT6eyyGDmbSaqV",
                            "type": "custom"
                        },
                        "picture": {
                            "url": "http://growthmessage.s3-ap-northeast-1.amazonaws.com/pictures/PBHNrmKWXffI7J8K.png",
                            "created": "2015-04-29T20:43:56+0000",
                            "applicationId": "P5C3vzoLOEijnlVj",
                            "deleted": null,
                            "updated": "2015-04-29T20:43:56+0000",
                            "width": 600,
                            "height": 100,
                            "name": "message_button_a.png",
                            "id": "PBHNrmKWXffI7J8K",
                            "extension": "png"
                        },
                        "id": "PCBT8NakhmGVdzT7"
                    },
                    {
                        "created": "2015-05-09T10:56:07+0000",
                        "type": "image",
                        "message": null,
                        "intent": {
                            "created": "2015-04-01T01:45:47+0000",
                            "applicationId": "P5C3vzoLOEijnlVj",
                            "description": "何もしません",
                            "name": "なし",
                            "id": "P8Z2cC64j2m6Oq5b",
                            "type": "noop"
                        },
                        "picture": {
                            "url": "http://growthmessage.s3-ap-northeast-1.amazonaws.com/pictures/PBHNt1hv4yoK6y7e.png",
                            "created": "2015-04-29T20:44:01+0000",
                            "applicationId": "P5C3vzoLOEijnlVj",
                            "deleted": null,
                            "updated": "2015-04-29T20:44:01+0000",
                            "width": 600,
                            "height": 100,
                            "name": "message_button_b.png",
                            "id": "PBHNt1hv4yoK6y7e",
                            "extension": "png"
                        },
                        "id": "PCBT8O10MQLnp8Yp"
                    },
                    {
                        "created": "2015-05-09T10:56:07+0000",
                        "type": "close",
                        "message": null,
                        "intent": {
                            "created": "2015-04-01T01:45:47+0000",
                            "applicationId": "P5C3vzoLOEijnlVj",
                            "description": "何もしません",
                            "name": "なし",
                            "id": "P8Z2cC64j2m6Oq5b",
                            "type": "noop"
                        },
                        "picture": {
                            "url": "http://growthmessage.s3-ap-northeast-1.amazonaws.com/pictures/PAWVlWykDsEOVzbD.png",
                            "created": "2015-04-21T20:20:31+0000",
                            "applicationId": "P5C3vzoLOEijnlVj",
                            "deleted": null,
                            "updated": "2015-04-21T20:20:31+0000",
                            "width": 50,
                            "height": 50,
                            "name": "close_button.png",
                            "id": "PAWVlWykDsEOVzbD",
                            "extension": "png"
                        },
                        "id": "PCBT8ODjEYEX8Fec"
                    }
                ],
                "picture": {
                    "url": "http://growthmessage.s3-ap-northeast-1.amazonaws.com/pictures/PBHNqPsEgKW52TQC.png",
                    "created": "2015-04-29T20:43:51+0000",
                    "applicationId": "P5C3vzoLOEijnlVj",
                    "deleted": null,
                    "updated": "2015-04-29T20:43:51+0000",
                    "width": 600,
                    "height": 730,
                    "name": "message_background.png",
                    "id": "PBHNqPsEgKW52TQC",
                    "extension": "png"
                }
            };
        }
        return Config;
    })();
    GrowthMessage.Config = Config;
})(GrowthMessage || (GrowthMessage = {}));
var GrowthMessage;
(function (GrowthMessage) {
    var Dialog = (function () {
        function Dialog() {
        }
        return Dialog;
    })();
    GrowthMessage.Dialog = Dialog;
})(GrowthMessage || (GrowthMessage = {}));
var GrowthMessage;
(function (GrowthMessage) {
    var Module = (function () {
        function Module() {
        }
        Module.prototype.exports = function (name, src) {
            this[name] = src;
        };
        Module.prototype.require = function (name) {
            return this[name];
        };
        return Module;
    })();
    GrowthMessage.module = new Module();
})(GrowthMessage || (GrowthMessage = {}));
var GrowthMessage;
(function (GrowthMessage) {
    var Overlay = (function () {
        function Overlay() {
        }
        return Overlay;
    })();
    GrowthMessage.Overlay = Overlay;
})(GrowthMessage || (GrowthMessage = {}));
var GrowthMessage;
(function (GrowthMessage) {
    var UserAgent = (function () {
        function UserAgent() {
        }
        return UserAgent;
    })();
    GrowthMessage.UserAgent = UserAgent;
})(GrowthMessage || (GrowthMessage = {}));
//# sourceMappingURL=growthmessage.js.map
if(GrowthMessage.module){
GrowthMessage.module.exports('dialog-image', '<div class="growthmessage-dialog-image">
    
</div>
');
GrowthMessage.module.exports('dialog-text', '<div class="growthmessage-dialog-text">
    
</div>
');
}