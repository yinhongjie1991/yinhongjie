var BDBridge = window.BDBridge || (function(){

    var self;
    var CONFIG = {
        BD_BRIDGE_OPEN : 1,
        BD_BRIDGE_ROOT : "http://qiao.baidu.com/v3/"
    };

    document.cookie = 'VERSION=2,0,0,0';
    
    if ((CONFIG.BD_BRIDGE_OPEN == 1) && (typeof window["BD_BRIDGE_LOADED"] == "undefined")) {
        window["BD_BRIDGE_LOADED"] = 1;
        var script = document.createElement("script");
        script.type="text/javascript";
        script.charset = "UTF-8";
        script.src = CONFIG.BD_BRIDGE_ROOT + "asset/js/bw.js?v=20150303";
        document.getElementsByTagName("head")[0].appendChild(script);
    }
    
    
    return self = {
    
        BD_BRIDGE_OPEN : CONFIG.BD_BRIDGE_OPEN,
        BD_BRIDGE_ROOT : CONFIG.BD_BRIDGE_ROOT,
        BD_BRIDGE_RCV_ROOT : "http://r.qiao.baidu.com/",
        BD_BRIDGE_DATA : {mainid : "120092898", SITE_ID : "370cd091b1d66cee8eabae31bc198335", siteid : "6676150", ucid: "3701275", userName: 'bj-51hyp'},
        OPEN_MODULAR : 11111,
                BD_BRIDGE_SPECIAL :  [] ,
        
                BD_BRIDGE_STYLE_ITEM : 
        [        {
            pageid : "0",
            
           
                        BD_BRIDGE_GROUP:  [ '1' - 0 ] ,
            
            BD_BRIDGE_ICON_CONFIG : {
                iconlvtype : "0" - 0,
                background : {
                    color : "",
                    url   : "http://qiao.baidu.com/style/898/120092898/1/iconbg.jpg",
                    bgcolor : "#3290cd"
                },
                head : {
                    url    : "",
                    width  : "150" - 0,
                    height : "110" - 0
                },
                button : {
                    color : "#f7bd84",
                    url   : "",
                    text  : "#bd4d17"
                },
                flow     : "1" - 0,
                position : "2" - 0,
                special : "3"
            },
            BD_BRIDGE_INVITE_CONFIG : {
                on : "0" - 0,
                show : {
                    pos : "0" - 0,
                    width : "370" - 0,
                    height : "190" - 0,
                    font : "宋体",
                    fontsize : "12",
                    fontcolor : "#000000",
                    type : "1" - 0
                },
                background : {
                    color : "",
                    url   : "http://qiao.baidu.com/style/898/120092898/1/invitebg.jpg"
                },
                head : {
                    show : "1" - 0,
                    size : "1" - 0,
                    url  : ""
                },
                text   : "",
                button : "#f87a1a",
                mode   : "1" - 0,
                special : "0" - 0
            },
            BD_BRIDGE_INVITE : {
                inviteauto : "1" - 0,
                invitemanual : "1" - 0,
                invitetype   : "1" - 0,
                inviterepeat : "1" - 0,
                invitetime   : "30" - 0,
                invitedisaptype : "1" - 0,
                invitedisaptime : "20" - 0
            },
            BD_BRIDGE_WEBIM : {
                webimopentype : "1" - 0,
                webimbgcolor  : "#fcbf00",
                floatposition : "1" - 0,
                floatChatName : "2" - 0,
                floatCustomname : ""
            },
                        BD_BRIDGE_PIGEON_SOUL : {
                disableMess     : "0" - 0,
                messType        : 1,
                messFloatType   : "0" - 0,
                language        : "0" - 0,
                position        : "0" - 0,
                backgroundColor : "#d89f00",
                backgroundUrl       : "http://qiao.baidu.com/v3/res/messbg/01.png", 
                messItemName    : "0",
                messItemPhone   : "1",
                messItemAddress : "0",
                messItemEmail   : "2",
                extraMessItems  :  [] 
            }
        }        ]
        
    }
   


})();
