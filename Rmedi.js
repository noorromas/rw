const nour1_str_users = [
  {
    dec: "رُمإديُ",
    cls: "nour1_str",
    icon: "https://up6.cc/2025/10/176117560609391.gif"
  },
  {
   dec: "دُيُف",
    cls: "dev1_str",
    icon: "https://up6.cc/2025/10/176097914400361.gif"
  },
  {
     dec: "إرُكًدً",
    cls: "arkod1_str",
    icon: "https://up6.cc/2025/10/176115961995851.png"
  },
  {
    dec: "لإفُندُر",
    cls: "nour1rmth_str",
    icon: "https://up6.cc/2025/10/176104681258181.png"
  }
];

const chatObserver = new MutationObserver(mutations => {
  mutations.forEach(mutation => {
    if (mutation.type === "childList") {
      mutation.addedNodes.forEach(node => {
        if (node.nodeType === 1 && node.matches("#d2 .uzr")) {
          nour1_str_users.forEach(user => {
            const nameMatch = $(node).find("div:first-child:contains('" + user.dec + "')");
            if (nameMatch.length) {
              const userDiv = $(node);
              if (!userDiv.hasClass(user.cls)) {
                userDiv.addClass(user.cls);
                if (!userDiv.find(".itar_nour1").length) {
                  userDiv
                    .find(".fitimg.u-pic")
                    .append(
                      `<img style="max-width:77px;margin-top:-12px;margin-left:-14px;" 
                        class="itar_nour1" title="اطاري" src="${user.icon}">`
                    );
                }
              }
            }
          });
        }
      });
    }
  });
});

const targetNodeChat = document.querySelector("#d2");
chatObserver.observe(targetNodeChat, { childList: true, subtree: true });

$("style").last().append(`
/* ====== nour1_str ====== */
#d2 .uzr.nour1_str .u-topic {
  -webkit-text-fill-color: #0000;
}

#d2 .uzr.nour1_str .fitimg.u-pic {
  height: 52px !important;
  border-radius: 100px !important;
  margin-bottom: 3px !important;
  margin-top: 3px !important;
  box-shadow: inset 0 0 0 rgb(0 0 0 / .08), 0 0 6px #000;
  filter: hue-rotate(360deg);
}

#d2 .uzr.nour1_str .u-msg.break {
  margin-left: 5px !important;
  -webkit-background-clip: text;
  -webkit-text-fill-color: #0000;
  background-image: linear-gradient(-225deg, #000 0%, #353535 29%, #f00 67%, #000 100%);
  padding: 0 !important;
  font-size: 100% !important;
  background-size: cover;
}

#d2 .uzr.nour1_str .itar_nour1 {
  width: 94px;
  height: 76px;
  margin-top: -40px;
  cursor: pointer;
  margin-left: -55px;
}

#d2 .uzr.d-flex.mm.nour1_str {
  background-image: url(https://up6.cc/2026/06/178249191949181.png);
  background-size: 100%;
  border: 1px solid #fff;
  box-shadow: inset 0 0 0 rgb(0 0 0 / .08), 0 0 2px #000;
  margin-bottom: 3px !important;
  margin-top: 2px !important;
  background-color: #16202a00 !important;
  border-radius: 0 0 0 0;
}

#d2 .uzr.d-flex.mm.hmsg.nour1_str,
#d2 .uzr.d-flex.mm.pmsgc.nour1_str {
  background-image: url(https://up6.cc/2026/06/178249193481771.png);
  background-size: 100%;
  border: 1px solid #fff;
  box-shadow: inset 0 0 0 rgb(0 0 0 / .08), 0 0 2px #000;
  margin-bottom: 3px !important;
  margin-top: 2px !important;
  background-color: #16202a00 !important;
  border-radius: 0 0 0 0;
}

#room .uzr.nour1_str .btn-primary {
  border-radius: 0 10px 0 10px !important;
  box-shadow: inset 0 0 0 rgb(0 0 0 / .08), 0 0 1px #000;
  border: 1px solid #fff;
  background-image: url(https://up6.cc/2025/10/176117604430991.png);
  background-size: cover;
  color: #484848;
  font-size: 14px !important;
  -webkit-text-fill-color: #000;
  margin-left: 4px !important;
}

/* ====== nour1rmth_str ====== */
#d2 .uzr.nour1rmth_str .u-topic {
  -webkit-text-fill-color: #000000;
}

#d2 .uzr.nour1rmth_str .fitimg.u-pic {
  height: 52px !important;
  border-radius: 100px !important;
  margin-bottom: 3px !important;
  margin-top: 3px !important;
  box-shadow: inset 0 0 0 rgb(0 0 0 / .08), 0 0 6px #000;
  filter: hue-rotate(360deg);
}


#d2 .uzr.nour1rmth_str .itar_nour1rmth {
  width: 94px;
  height: 76px;
  margin-top: -40px;
  cursor: pointer;
  margin-left: -55px;
}

#d2 .uzr.d-flex.mm.nour1rmth_str {
  border-radius: 0 10px 0 10px;
}

#d2 .uzr.d-flex.mm.hmsg.nour1rmth_str,
#d2 .uzr.d-flex.mm.pmsgc.nour1rmth_str {
  background-image: url(https://up6.cc/2025/10/176089922796481.png);
  background-size: 100%;
  border: 1px solid #fff;
  box-shadow: inset 0 0 0 rgb(0 0 0 / .08), 0 0 2px #000;
  margin-bottom: 3px !important;
  margin-top: 2px !important;
  background-color: #16202a00 !important;
  border-radius: 0 0 0 0;
}

#room .uzr.nour1rmth_str .btn-primary {
  border-radius: 0 10px 0 10px !important;
  box-shadow: inset 0 0 0 rgb(0 0 0 / .08), 0 0 1px #000;
  border: 1px solid #fff;
  background-image: url(https://up6.cc/2025/10/176089922796481.png);
  background-size: cover;
  color: #484848;
  font-size: 14px !important;
  -webkit-text-fill-color: #000;
  margin-left: 4px !important;
}
#d2 .uzr.dev1_str .u-topic {
  -webkit-text-fill-color: #0000;
}

#d2 .uzr.dev1_str .fitimg.u-pic {
  height: 52px !important;
  border-radius: 100px !important;
  margin-bottom: 3px !important;
  margin-top: 3px !important;
  box-shadow: inset 0 0 0 rgb(0 0 0 / .08), 0 0 6px #000;
  filter: hue-rotate(360deg);
}

#d2 .uzr.dev1_str .u-msg.break {
  margin-left: 5px !important;
  -webkit-background-clip: text;
  -webkit-text-fill-color: #0000;
  background-image: linear-gradient(-225deg, #3e8ede 0%, #3e8ede 29%, #f00 67%, #000 100%);
  padding: 0 !important;
  font-size: 100% !important;
  background-size: cover;
}

#d2 .uzr.dev1_str .itar_dev1 {
  width: 94px;
  height: 76px;
  margin-top: -40px;
  cursor: pointer;
  margin-left: -55px;
}

#d2 .uzr.d-flex.mm.dev1_str {
  border-radius: 0 10px 0 10px;
}

#d2 .uzr.d-flex.mm.hmsg.dev1_str,
#d2 .uzr.d-flex.mm.pmsgc.dev1_str {
  background-image: url(https://up6.cc/2025/10/176107655178611.png);
  background-size: 100%;
  border: 1px solid #fff;
  box-shadow: inset 0 0 0 rgb(0 0 0 / .08), 0 0 2px #000;
  margin-bottom: 3px !important;
  margin-top: 2px !important;
  background-color: #16202a00 !important;
  border-radius: 0;
}

#room .uzr.dev1_str .btn-primary {
  border-radius: 0 10px 0 10px !important;
  box-shadow: inset 0 0 0 rgb(0 0 0 / .08), 0 0 1px #000;
  border: 1px solid #fff;
  background-image: url(https://up6.cc/2025/10/176107655178611.png);
  background-size: cover;
  color: #484848;
  font-size: 14px !important;
  -webkit-text-fill-color: #000;
  margin-left: 4px !important;
}

#d2 .uzr.arkod1_str .u-topic {
  -webkit-text-fill-color: #0000;
}

#d2 .uzr.arkod1_str .fitimg.u-pic {
  height: 52px !important;
  border-radius: 100px !important;
  margin-bottom: 3px !important;
  margin-top: 3px !important;
  box-shadow: inset 0 0 0 rgb(0 0 0 / .08), 0 0 6px #000;
  filter: hue-rotate(360deg);
}

#d2 .uzr.arkod1_str .u-msg.break {
  margin-left: 5px !important;
  -webkit-background-clip: text;
  -webkit-text-fill-color: #0000;
  background-image: linear-gradient(-225deg, #3e8ede 0%, #004e9b 29%, #3f00ff 67%, #000 100%);
  padding: 0 !important;
  font-size: 100% !important;
  background-size: cover;
}

#d2 .uzr.arkod1_str .itar_dev1 {
  width: 94px;
  height: 76px;
  margin-top: -40px;
  cursor: pointer;
  margin-left: -55px;
}

#d2 .uzr.d-flex.mm.dev1_str {
  border-radius: 0 10px 0 10px;
}

#d2 .uzr.d-flex.mm.hmsg.arkod1_str,
#d2 .uzr.d-flex.mm.pmsgc.arkod1_str {
  background-image: url(https://up6.cc/2025/10/176115975246771.png);
  background-size: 100%;
  border: 1px solid #fff;
  box-shadow: inset 0 0 0 rgb(0 0 0 / .08), 0 0 2px #000;
  margin-bottom: 3px !important;
  margin-top: 2px !important;
  background-color: #16202a00 !important;
  border-radius: 0;
}

#room .uzr.arkod1_str .btn-primary {
  border-radius: 0 10px 0 10px !important;
  box-shadow: inset 0 0 0 rgb(0 0 0 / .08), 0 0 1px #000;
  border: 1px solid #fff;
  background-image: url(https://up6.cc/2025/10/176115975246771.png);
  background-size: cover;
  color: #484848;
  font-size: 14px !important;
  -webkit-text-fill-color: #000;
  margin-left: 4px !important;
}

`);
