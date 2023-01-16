let btn_alipay = document.querySelector(".alipay");
let btn_wechat = document.querySelector(".wechat");

let res = document.querySelector(".res");

function alipay() {
    load(res, "<span class=\"tip\">加载中...</span><img class=\"payi\" src=\"" + config['alipay'] + "\">");
}
function wechat() {
    load(res, "<span class=\"tip\">加载中...</span><img class=\"payi\" src=\"" + config['wechat'] + "\">");
    
}
function afdian() {
    window.open(config['afdian']);
}

function load(node, html) {
    node.innerHTML = html;
    var imgNode = node.querySelector(".payi");
    imgNode.style = "display:none";
    imgNode.onload = function () {
        if (imgNode.complete) {
            imgNode.style = "";
            node.querySelector(".tip").style = "display:none";
            return;
        }
    }
}