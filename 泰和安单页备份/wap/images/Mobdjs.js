// JavaScript Document

function show_student_time2(){
var LSTR_ndate=new Date();
var LSTR_Year=LSTR_ndate.getFullYear();
var LSTR_Month=LSTR_ndate.getMonth()+1;
var LSTR_Date=LSTR_ndate.getDate()+1;
var be_Date=LSTR_ndate.getDate();
var span_dt_sj03 = document.getElementById("span_dt_sj03")
var span_dt_dt2 = document.getElementById("span_dt_dt2")
var span_dt_dt3 = document.getElementById("span_dt_dt3")
span_dt_sj03.innerHTML=LSTR_Month+'��'+be_Date
window.setTimeout("show_student_time2()", 1000);
BirthDay=new Date(LSTR_Year,LSTR_Month-1,LSTR_Date+1);//�ĳ���ļ�ʱ����
today=new Date();
timeold=(BirthDay.getTime()-today.getTime());
sectimeold=timeold/1000
secondsold=Math.floor(sectimeold);
msPerDay=24*60*60*1000
e_daysold=timeold/msPerDay
daysold=Math.floor(e_daysold);
e_hrsold=(e_daysold-daysold)*24;
hrsold=Math.floor(e_hrsold);
e_minsold=(e_hrsold-hrsold)*60;
minsold=Math.floor((e_hrsold-hrsold)*60);
seconds=Math.floor((e_minsold-minsold)*60);
span_dt_dt2.innerHTML=hrsold+"Сʱ"+minsold+"��"+seconds+"��" ;
span_dt_dt3.innerHTML=hrsold+"Сʱ"+minsold+"��"+seconds+"��" ;
}
function show_student_time3(){
var LSTR_ndate=new Date();
var LSTR_Year=LSTR_ndate.getFullYear();
var LSTR_Month=LSTR_ndate.getMonth()+1;
var LSTR_Date=LSTR_ndate.getDate()+1;
var be_Date=LSTR_ndate.getDate();
var span_dc_sj03 = document.getElementById("span_dc_sj03")
var span_dc_dt2 = document.getElementById("span_dc_dt2")
var span_dc_dt3 = document.getElementById("span_dc_dt3")
span_dc_sj03.innerHTML=LSTR_Month+'��'+be_Date
window.setTimeout("show_student_time3()", 1000);
BirthDay=new Date(LSTR_Year,LSTR_Month-1,LSTR_Date+1);//�ĳ���ļ�ʱ����
today=new Date();
timeold=(BirthDay.getTime()-today.getTime());
sectimeold=timeold/1000
secondsold=Math.floor(sectimeold);
msPerDay=24*60*60*1000
e_daysold=timeold/msPerDay
daysold=Math.floor(e_daysold);
e_hrsold=(e_daysold-daysold)*24;
hrsold=Math.floor(e_hrsold);
e_minsold=(e_hrsold-hrsold)*60;
minsold=Math.floor((e_hrsold-hrsold)*60);
seconds=Math.floor((e_minsold-minsold)*60);
span_dc_dt2.innerHTML=hrsold+"Сʱ"+minsold+"��"+seconds+"��" ;
span_dc_dt3.innerHTML=hrsold+"Сʱ"+minsold+"��"+seconds+"��" ;
} 
            