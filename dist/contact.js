webpackJsonp([17],{96:function(e,t,a){t=e.exports=a(7)(),t.push([e.id,".contactCon___3iUSd{width:1060px;margin:0 auto;margin-bottom:40px;display:box;display:-webkit-box;display:flex;display:-ms-flexbox;display:-webkit-flex;-webkit-box-orient:horizontal;flex-direction:row;-o-flex-direction:row;-ms-flex-direction:row;-moz-flex-direction:row;-webkit-flex-direction:row;flex-wrap:nowrap;-o-flex-wrap:nowrap;-ms-flex-wrap:nowrap;-moz-flex-wrap:nowrap;-webkit-flex-wrap:nowrap;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;-o-justify-content:space-between;-ms-justify-content:space-between;-moz-justify-content:space-between;-webkit-justify-content:space-between}.contactLeft___1HXkX{display:block;width:260px;padding-left:20px;background:#f0f0f0;box-shadow:5px 7px 5px #dedede;margin-top:40px;padding-bottom:20px}.contactLeft___1HXkX p{line-height:38px;font-size:16px;padding-right:20px}.contactRight___1jIVh{display:block;width:698px;margin-top:42px}.map___1gHIm{width:690px;height:450px;border:4px solid #c3c3c3;margin-top:20px}.mapDes___3mXC7{margin-top:16px}.mapDes___3mXC7 p{line-height:26px;font-size:14px;color:#333}.title___2dz5g{font-size:20px;color:#333;margin:10px 0;font-weight:600}.weiboHref___1IO70{display:inline-block;padding:0 6px;height:38px;line-height:38px;background:#fff;font-size:16px;color:#333;border:1px solid #d1d1d1;padding-left:40px;background-color:#fff;background-repeat:no-repeat;background-position:10px;background-size:26px 22px;margin-top:20px}.erweima___xO9W1{margin-top:.18rem}.erweima___xO9W1 img{width:220px;height:220px}.erweides___31PLY{text-align:center;font-size:.2rem}",""]),t.locals={contactCon:"contactCon___3iUSd",contactCon:"contactCon___3iUSd",contactLeft:"contactLeft___1HXkX",contactLeft:"contactLeft___1HXkX",contactRight:"contactRight___1jIVh",contactRight:"contactRight___1jIVh",map:"map___1gHIm",map:"map___1gHIm",mapDes:"mapDes___3mXC7",mapDes:"mapDes___3mXC7",title:"title___2dz5g",title:"title___2dz5g",weiboHref:"weiboHref___1IO70",weiboHref:"weiboHref___1IO70",erweima:"erweima___xO9W1",erweima:"erweima___xO9W1",erweides:"erweides___31PLY",erweides:"erweides___31PLY"}},323:function(e,t,a){var n=a(96);"string"==typeof n&&(n=[[e.id,n,""]]);var o=a(8)(n,{});n.locals&&(e.exports=n.locals),n.locals||e.hot.accept(96,function(){var t=a(96);"string"==typeof t&&(t=[[e.id,t,""]]),o(t)}),e.hot.dispose(function(){o()})},524:function(e,t,a){(function(e){"use strict";function t(e){return e&&e.__esModule?e:{"default":e}}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==("undefined"==typeof t?"undefined":i(t))&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+("undefined"==typeof t?"undefined":i(t)));e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function r(e){return function(t){return E(k(t,e),e)}}var i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},c=a(6),p=t(c),f=a(4),d=t(f),u=a(1),s=t(u),m=a(5),_=t(m),w=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),b=a(323),x=t(b),g=a(28),h=t(g),y={Contact:{displayName:"Contact"},_component:{},_component2:{}},E=(0,_["default"])({filename:"E:/hotyq/src/routes/Contact/components/Contact.js",components:y,locals:[e],imports:[s["default"]]}),k=(0,d["default"])({filename:"E:/hotyq/src/routes/Contact/components/Contact.js",components:y,locals:[],imports:[s["default"],p["default"]]}),v=r("Contact")(function(e){function t(){return n(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return l(t,e),w(t,[{key:"render",value:function(){var e=["红演圈（北京）网络科技有限公司","地址：北京市朝阳区酒仙桥中路878东区2层","总机：010-57799869"],t=["红蜜家","地址：北京市朝阳区百子湾黄木厂路1号院1号楼底商","总机：400-960-9099"];return s["default"].createElement("div",{className:x["default"].contact},s["default"].createElement("div",{className:x["default"].contactCon},s["default"].createElement("div",{className:x["default"].contactLeft},s["default"].createElement(C,null)),s["default"].createElement("div",{className:x["default"].contactRight},s["default"].createElement(j,{id:"div1",txt:e}),s["default"].createElement(j,{id:"div2",txt:t}))),s["default"].createElement(h["default"],null))}},{key:"componentDidMount",value:function(){window.scrollTo(0,0),addBaiduAnchor(),setTimeout(function(){var e=new BMap.Map("div1"),t=new BMap.Point(116.500748,39.982352);e.centerAndZoom(t,15);var a=new BMap.Marker(t);e.addOverlay(a),e.enableScrollWheelZoom(),e.enableContinuousZoom();var n=new BMap.Map("div2"),o=new BMap.Point(116.472269,39.906142),l=new BMap.Marker(o);n.addOverlay(l),n.centerAndZoom(o,15),n.enableScrollWheelZoom()},30)}}]),t}(u.Component)),C=r("_component")(s["default"].createClass({displayName:"HotyqDes",render:function(){return s["default"].createElement("div",null,s["default"].createElement("p",{className:x["default"].title},"商务合作"),s["default"].createElement("p",null,"TEL：010-57799869－8182"),s["default"].createElement("p",null,"Mail：BD@hotyq.com"),s["default"].createElement("p",{className:x["default"].title},"客服"),s["default"].createElement("p",null,"TEL：010-57799869－8183"),s["default"].createElement("p",null,"Mail：kf@hotyq.com"),s["default"].createElement("p",null,"QQ：2284680653"),s["default"].createElement("p",{className:x["default"].title},"红蜜客服"),s["default"].createElement("p",null,"400-960-9099"),s["default"].createElement("p",{className:x["default"].title},"媒体账号"),s["default"].createElement("a",{href:"http://weibo.com/hotyq",className:x["default"].weiboHref,target:"_blank",style:{backgroundImage:"url("+imgUrl+"/hotFanWeiBo.jpg)"}},"红演圈微博"),s["default"].createElement("a",{href:"http://weibo.com/p/1005055958399021",target:"_blank",className:x["default"].weiboHref,style:{backgroundImage:"url("+imgUrl+"/hotFanWeiBo.jpg)"}},"红蜜家微博"),s["default"].createElement("div",{className:x["default"].erweima},s["default"].createElement("img",{src:imgUrl+"/hotFanWeiXin.jpg"}),s["default"].createElement("p",{className:x["default"].erweides},"扫描二维码关注红演圈微信")),s["default"].createElement("div",{className:x["default"].erweima},s["default"].createElement("img",{src:imgUrl+"/hotmi_home.png"}),s["default"].createElement("p",{className:x["default"].erweides},"扫描二维码关注红蜜家微信")))}})),j=r("_component2")(s["default"].createClass({displayName:"HotyqMap",render:function(){return s["default"].createElement("div",null,s["default"].createElement("div",{id:this.props.id,className:x["default"].map}),s["default"].createElement("div",{className:x["default"].mapDes},this.props.txt.map(function(e,t){return s["default"].createElement("p",{key:t},e)})))}}));e.exports=v}).call(t,a(3)(e))}});