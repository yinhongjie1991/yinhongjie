
var marquee = new Array(
    "<p><span>[最新购买]：</span>张**（130****3260）在9分钟前订购了 初瘦餐：<font color='#FF0000'>√</font></p>",
    "<p><span>[最新购买]：</span>李**（136****7163）在3分钟前订购了 调理装： <font color='#FF0000'>√</font></p>",
    "<p><span>[最新购买]：</span>赵**（139****1955）在5分钟前订购了 易瘦体质装：<font color='#FF0000'>√</font></p>",
    "<p><span>[最新购买]：</span>刘**（180****6999）在2分钟前订购了 终极塑身装： <font color='#FF0000'>√</font></p>",
    "<p><span>[最新购买]：</span>张**（151****2588）在10分钟前订购了体验装： <font color='#FF0000'>√</font></p>",
    "<p><span>[最新购买]：</span>王**（133****4096）在6分钟前订购了 显瘦餐： <font color='#FF0000'>√</font></p>"
);
var wfgdaa = 0;
var wfgdbb = 1;
function marqueeL(){
	if(wfgdaa>(marquee.length-1))
	wfgdaa = 0;
	if(wfgdbb>(marquee.length-1))
	wfgdaa = 0;
	wfgdbb = wfgdaa +1;
	var marHTML = marquee[wfgdaa]+marquee[wfgdbb];
	document.getElementById("wffahuo").innerHTML = marHTML;
	wfgdaa +=1;
	wfgdbb +=1;
}
window.setInterval("marqueeL()", 3000);
/*///////////////////////////////////////// WFORDERJSEND /////////////////////////////////////////*/