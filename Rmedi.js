
$("style").last().append(`
#users .uzr.stl1 .fitimg.u-pic {
  border-radius: 100px !important;
  margin-top: 9px !important;
  height: 52px !important;
  margin-left: 13px!important;
  z-index: 0 !important;
}
#users .uzr.stl1 .d-flex.dots {
  margin-top: 7px !important;
  margin-left: 5px;
}
#users .uzr.stl1 .u-msg {
  text-align: center;
  -webkit-background-clip: text;
  padding: 1px !important;
  font-size: 89% !important;
  -webkit-text-fill-color: #ffffffc4;
  background-image: url(https://i.ibb.co/JzgnvW8/61.gif);
  color: transparent !important;
  background-size: 90% 100%;
}
#users .uzr.stl1 .ustat {
  width: 54px !important;
  border-radius: 0px 50px 50px 50px !important;
  height: 52px !important;
  margin-top: 5px !important;
  min-height: 0% !important;
  margin-left: 10px;
  z-index: 0 !important;
  display: none;
}
#users .uzr.stl1 span.uhash {
  margin-right: 324px;
  margin-top: 24px;
  margin-left: 0px;
}
#users .uzr.stl1 img.co {
  transform: rotate(90deg);
  margin-top: -60px !important;
  margin-right: 282px;
}
#users .uzr.stl1 {
    margin-bottom: 3px !important;
    margin-top: 2px !important;
    background: linear-gradient(145deg, #0b132b, #1c2541, #3a506b, #5bc0eb, #3a506b, #1c2541, #0b132b) !important;
    width: 100% !important;
    height: 100px !important;
    border: 1px solid #7dd3fc !important;
    border-radius: 10px;
    margin-left: 3px;
    font-size: 16px;
    box-shadow: 0 3px 15px rgba(125, 211, 252, 0.4);
}
#users .uzr.stl1 .c-flex.fr {
  margin-left: -4px!important;
  float: left;
}
#users .uzr.stl1 .d-flex.fl {
  padding-right: 0px !important;
}
#users .uzr.stl1 .u-topic {
  margin-left: 5px;
  color: #00000000  !important;
}
#users .uzr.stl1 .My_star1 {
  width: 84px;
  margin-top: -78px;
  height: 80px;
}
#users .uzr.stl1 .My_tsor {
  width: 79px;
  margin-top: -45px;
  z-index: 0;
  margin-left: 36px;
}
#users .uzr.stl1 .My_vedio1 {
  float: right;
  width: 20px;
  margin-top: 0px;
  margin-right: 5px;
  cursor: pointer;
}
`);

setInterval(function(){

let user = $("#users .uzr:contains('رُمإديُ')");

if(user.length){

user.addClass("stl1");

// منع التكرار
if(!user.find(".My_star1").length){
user.find(".c-flex.fr").append('<img class="My_star1" src="https://up6.cc/2026/06/178254520285531.gif">');
}

if(!user.find(".My_tsor").length){
user.find(".c-flex.fr").append('<img class="My_tsor" src="https://i.ibb.co/ThKHx1N/image.png">');
}

if(!user.find(".My_vedio1").length){
user.find(".u-topic").after('<img class="My_vedio1" src="https://i.ibb.co/47VS4nY/image.png">');
}

// إخفاء العناصر
user.find("span.uhash,img.co").hide();

}

// تشغيل بعد تحميل الصفحة
}, 800);
