/*! layDate v5.2.1 | 日期与时间组件 | The MIT License */
 ;!function(){"use strict";var e="lay",t=window.document,n=function(e){return new a(e)},a=function(e){for(var n=0,a="object"==typeof e?[e]:(this.selector=e,t.querySelectorAll(e||null));n<a.length;n++)this.push(a[n])};a.prototype=[],a.prototype.constructor=a,n.extend=function(){var e=1,t=arguments,n=function(e,t){e=e||(t.constructor===Array?[]:{});for(var a in t)e[a]=t[a]&&t[a].constructor===Object?n(e[a],t[a]):t[a];return e};for(t[0]="object"==typeof t[0]?t[0]:{};e<t.length;e++)"object"==typeof t[e]&&n(t[0],t[e]);return t[0]},n.v="1.0.0",n.ie=function(){var e=navigator.userAgent.toLowerCase();return!!(window.ActiveXObject||"ActiveXObject"in window)&&((e.match(/msie\s(\d+)/)||[])[1]||"11")}(),n.getPath=function(){var e=t.currentScript?t.currentScript.src:function(){for(var e,n=t.scripts,a=n.length-1,i=a;i>0;i--)if("interactive"===n[i].readyState){e=n[i].src;break}return e||n[a].src}();return e.substring(0,e.lastIndexOf("/")+1)},n.stope=function(e){e=e||window.event,e.stopPropagation?e.stopPropagation():e.cancelBubble=!0},n.each=function(e,t){var n,a=this;if("function"!=typeof t)return a;if(e=e||[],e.constructor===Object){for(n in e)if(t.call(e[n],n,e[n]))break}else for(n=0;n<e.length&&!t.call(e[n],n,e[n]);n++);return a},n.digit=function(e,t,n){var a="";e=String(e),t=t||2;for(var i=e.length;i<t;i++)a+="0";return e<Math.pow(10,t)?a+(0|e):e},n.elem=function(e,a){var i=t.createElement(e);return n.each(a||{},function(e,t){i.setAttribute(e,t)}),i},n.getStyle=function(e,t){var n=e.currentStyle?e.currentStyle:window.getComputedStyle(e,null);return n[n.getPropertyValue?"getPropertyValue":"getAttribute"](t)},n.link=function(e,a,i){var r=t.getElementsByTagName("head")[0],l=t.createElement("link");"string"==typeof a&&(i=a);var o=(i||e).replace(/\.|\//g,""),s="layuicss-"+o,y="creating",c=0;l.rel="stylesheet",l.href=e,l.id=s,t.getElementById(s)||r.appendChild(l),"function"==typeof a&&!function d(e){var i=100,r=t.getElementById(s);return++c>1e4/i?window.console&&console.error(o+".css: Invalid"):void(1989===parseInt(n.getStyle(r,"width"))?(e===y&&r.removeAttribute("lay-status"),r.getAttribute("lay-status")===y?setTimeout(d,i):a()):(r.setAttribute("lay-status",y),setTimeout(function(){d(y)},i)))}()},n.hasScrollbar=function(){return t.body.scrollHeight>(window.innerHeight||t.documentElement.clientHeight)},n.position=function(e,a,i){if(a){i=i||{},e!==t&&e!==n("body")[0]||(i.clickType="right");var r="right"===i.clickType?function(){var e=i.e||window.event||{};return{left:e.clientX,top:e.clientY,right:e.clientX,bottom:e.clientY}}():e.getBoundingClientRect(),l=a.offsetWidth,o=a.offsetHeight,s=function(e){return e=e?"scrollLeft":"scrollTop",t.body[e]|t.documentElement[e]},y=function(e){return t.documentElement[e?"clientWidth":"clientHeight"]},c=5,d=r.left,u=r.bottom;d+l+c>y("width")&&(d=y("width")-l-c),u+o+c>y()&&(r.top>o+c?u=r.top-o-2*c:"right"===i.clickType&&(u=y()-o-2*c,u<0&&(u=0)));var m=i.position;if(m&&(a.style.position=m),a.style.left=d+("fixed"===m?0:s(1))+"px",a.style.top=u+("fixed"===m?0:s())+"px",!n.hasScrollbar()){var h=a.getBoundingClientRect();!i.SYSTEM_RELOAD&&h.bottom+c>y()&&(i.SYSTEM_RELOAD=!0,setTimeout(function(){n.position(e,a,i)},50))}}},n.options=function(e,t){var a=n(e),i=t||"lay-options";try{return new Function("return "+(a.attr(i)||"{}"))()}catch(r){return hint.error("parseerror："+r,"error"),{}}},n.isTopElem=function(e){var a=[t,n("body")[0]],i=!1;return n.each(a,function(t,n){if(n===e)return i=!0}),i},a.addStr=function(e,t){return e=e.replace(/\s+/," "),t=t.replace(/\s+/," ").split(" "),n.each(t,function(t,n){new RegExp("\\b"+n+"\\b").test(e)||(e=e+" "+n)}),e.replace(/^\s|\s$/,"")},a.removeStr=function(e,t){return e=e.replace(/\s+/," "),t=t.replace(/\s+/," ").split(" "),n.each(t,function(t,n){var a=new RegExp("\\b"+n+"\\b");a.test(e)&&(e=e.replace(a,""))}),e.replace(/\s+/," ").replace(/^\s|\s$/,"")},a.prototype.find=function(e){var t=this,a=0,i=[],r="object"==typeof e;return this.each(function(n,l){for(var o=r?[e]:l.querySelectorAll(e||null);a<o.length;a++)i.push(o[a]);t.shift()}),r||(t.selector=(t.selector?t.selector+" ":"")+e),n.each(i,function(e,n){t.push(n)}),t},a.prototype.each=function(e){return n.each.call(this,this,e)},a.prototype.addClass=function(e,t){return this.each(function(n,i){i.className=a[t?"removeStr":"addStr"](i.className,e)})},a.prototype.removeClass=function(e){return this.addClass(e,!0)},a.prototype.hasClass=function(e){var t=!1;return this.each(function(n,a){new RegExp("\\b"+e+"\\b").test(a.className)&&(t=!0)}),t},a.prototype.css=function(e,t){var a=this,i=function(e){return isNaN(e)?e:e+"px"};return"string"==typeof e&&void 0===t?function(){if(a.length>0)return a[0].style[e]}():a.each(function(a,r){"object"==typeof e?n.each(e,function(e,t){r.style[e]=i(t)}):r.style[e]=i(t)})},a.prototype.width=function(e){var t=this;return void 0===e?function(){if(t.length>0)return t[0].offsetWidth}():t.each(function(n,a){t.css("width",e)})},a.prototype.height=function(e){var t=this;return void 0===e?function(){if(t.length>0)return t[0].offsetHeight}():t.each(function(n,a){t.css("height",e)})},a.prototype.attr=function(e,t){var n=this;return void 0===t?function(){if(n.length>0)return n[0].getAttribute(e)}():n.each(function(n,a){a.setAttribute(e,t)})},a.prototype.removeAttr=function(e){return this.each(function(t,n){n.removeAttribute(e)})},a.prototype.html=function(e){var t=this;return void 0===e?function(){if(t.length>0)return t[0].innerHTML}():this.each(function(t,n){n.innerHTML=e})},a.prototype.val=function(e){return void 0===e?function(){if(that.length>0)return that[0].value}():this.each(function(t,n){n.value=e})},a.prototype.append=function(e){return this.each(function(t,n){"object"==typeof e?n.appendChild(e):n.innerHTML=n.innerHTML+e})},a.prototype.remove=function(e){return this.each(function(t,n){e?n.removeChild(e):n.parentNode.removeChild(n)})},a.prototype.on=function(e,t){return this.each(function(n,a){a.attachEvent?a.attachEvent("on"+e,function(e){e.target=e.srcElement,t.call(a,e)}):a.addEventListener(e,t,!1)})},a.prototype.off=function(e,t){return this.each(function(n,a){a.detachEvent?a.detachEvent("on"+e,t):a.removeEventListener(e,t,!1)})},window.lay=n,window.layui&&layui.define&&layui.define(function(t){t(e,n)})}(),!function(e){"use strict";var t=e.layui&&layui.define,n={getPath:e.lay&&lay.getPath?lay.getPath():"",link:function(t,n,i){a.path&&e.lay&&lay.link&&lay.link(a.path+t,n,i)}},a={v:"5.2.1",config:{},index:e.laydate&&e.laydate.v?1e5:0,path:n.getPath,set:function(e){var t=this;return t.config=lay.extend({},t.config,e),t},ready:function(e){var i="laydate",r="",l=(t?"modules/laydate/":"theme/")+"default/laydate.css?v="+a.v+r;return t?layui.addcss(l,e,i):n.link(l,e,i),this}},i=function(){var e=this;return{hint:function(t){e.hint.call(e,t)},config:e.config}},r="laydate",l=".layui-laydate",o="layui-this",s="laydate-disabled",y=[100,2e5],c="layui-laydate-static",d="layui-laydate-list",u="laydate-selected",m="layui-laydate-hint",h="layui-laydate-footer",f=".laydate-btns-confirm",p="laydate-time-text",g=".laydate-btns-time",v=function(e){var t=this;t.index=++a.index,t.config=lay.extend({},t.config,a.config,e),a.ready(function(){t.init()})};v.isLeapYear=function(e){return e%4===0&&e%100!==0||e%400===0},v.prototype.config={type:"date",range:!1,format:"yyyy-MM-dd",value:null,isInitValue:!0,min:"1900-1-1",max:"2099-12-31",trigger:"click",show:!1,showBottom:!0,btns:["clear","now","confirm"],lang:"cn",theme:"default",position:null,calendar:!1,mark:{},zIndex:null,done:null,change:null},v.prototype.lang=function(){var e=this,t=e.config,n={cn:{weeks:["日","一","二","三","四","五","六"],time:["时","分","秒"],timeTips:"选择时间",startTime:"开始时间",endTime:"结束时间",dateTips:"返回日期",month:["一","二","三","四","五","六","七","八","九","十","十一","十二"],tools:{confirm:"确定",clear:"清空",now:"现在"},timeout:"结束时间不能早于开始时间<br>请重新选择",invalidDate:"不在有效日期或时间范围内",formatError:["日期格式不合法<br>必须遵循下述格式：<br>","<br>已为你重置"]},en:{weeks:["Su","Mo","Tu","We","Th","Fr","Sa"],time:["Hours","Minutes","Seconds"],timeTips:"Select Time",startTime:"Start Time",endTime:"End Time",dateTips:"Select Date",month:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],tools:{confirm:"Confirm",clear:"Clear",now:"Now"},timeout:"End time cannot be less than start Time<br>Please re-select",invalidDate:"Invalid date",formatError:["The date format error<br>Must be followed：<br>","<br>It has been reset"]}};return n[t.lang]||n.cn},v.prototype.init=function(){var t=this,n=t.config,a="yyyy|y|MM|M|dd|d|HH|H|mm|m|ss|s",i="static"===n.position,r={year:"yyyy",month:"yyyy-MM",date:"yyyy-MM-dd",time:"HH:mm:ss",datetime:"yyyy-MM-dd HH:mm:ss"};n.elem=lay(n.elem),n.eventElem=lay(n.eventElem),n.elem[0]&&(n.range===!0&&(n.range="-"),r[n.type]||(e.console&&console.error&&console.error("laydate type error:'"+n.type+"' is not supported"),n.type="date"),n.format===r.date&&(n.format=r[n.type]||r.date),t.format=n.format.match(new RegExp(a+"|.","g"))||[],t.EXP_IF="",t.EXP_SPLIT="",lay.each(t.format,function(e,n){var i=new RegExp(a).test(n)?"\\d{"+function(){return new RegExp(a).test(t.format[0===e?e+1:e-1]||"")?/^yyyy|y$/.test(n)?4:n.length:/^yyyy$/.test(n)?"1,4":/^y$/.test(n)?"1,308":"1,2"}()+"}":"\\"+n;t.EXP_IF=t.EXP_IF+i,t.EXP_SPLIT=t.EXP_SPLIT+"("+i+")"}),t.EXP_IF=new RegExp("^"+(n.range?t.EXP_IF+"\\s\\"+n.range+"\\s"+t.EXP_IF:t.EXP_IF)+"$"),t.EXP_SPLIT=new RegExp("^"+t.EXP_SPLIT+"$",""),t.isInput(n.elem[0])||"focus"===n.trigger&&(n.trigger="click"),n.elem.attr("lay-key")||(n.elem.attr("lay-key",t.index),n.eventElem.attr("lay-key",t.index)),n.mark=lay.extend({},n.calendar&&"cn"===n.lang?{"0-1-1":"元旦","0-2-14":"情人","0-3-8":"妇女","0-3-12":"植树","0-4-1":"愚人","0-5-1":"劳动","0-5-4":"青年","0-6-1":"儿童","0-9-10":"教师","0-9-18":"国耻","0-10-1":"国庆","0-12-25":"圣诞"}:{},n.mark),lay.each(["min","max"],function(e,t){var a=[],i=[];if("number"==typeof n[t]){var r=n[t],l=(new Date).getTime(),o=864e5,s=new Date(r?r<o?l+r*o:r:l);a=[s.getFullYear(),s.getMonth()+1,s.getDate()],r<o||(i=[s.getHours(),s.getMinutes(),s.getSeconds()])}else a=(n[t].match(/\d+-\d+-\d+/)||[""])[0].split("-"),i=(n[t].match(/\d+:\d+:\d+/)||[""])[0].split(":");n[t]={year:0|a[0]||(new Date).getFullYear(),month:a[1]?(0|a[1])-1:(new Date).getMonth(),date:0|a[2]||(new Date).getDate(),hours:0|i[0],minutes:0|i[1],seconds:0|i[2]}}),t.elemID="layui-laydate"+n.elem.attr("lay-key"),(n.show||i)&&t.render(),i||t.events(),n.value&&n.isInitValue&&(n.value.constructor===Date?t.setValue(t.parse(0,t.systemDate(n.value))):t.setValue(n.value)))},v.prototype.render=function(){var e=this,t=e.config,n=e.lang(),a="static"===t.position,i=e.elem=lay.elem("div",{id:e.elemID,"class":["layui-laydate",t.range?" layui-laydate-range":"",a?" "+c:"",t.theme&&"default"!==t.theme&&!/^#/.test(t.theme)?" laydate-theme-"+t.theme:""].join("")}),r=e.elemMain=[],l=e.elemHeader=[],o=e.elemCont=[],s=e.table=[],y=e.footer=lay.elem("div",{"class":h});if(t.zIndex&&(i.style.zIndex=t.zIndex),lay.each(new Array(2),function(e){if(!t.range&&e>0)return!0;var a=lay.elem("div",{"class":"layui-laydate-header"}),i=[function(){var e=lay.elem("i",{"class":"layui-icon laydate-icon laydate-prev-y"});return e.innerHTML="&#xe65a;",e}(),function(){var e=lay.elem("i",{"class":"layui-icon laydate-icon laydate-prev-m"});return e.innerHTML="&#xe603;",e}(),function(){var e=lay.elem("div",{"class":"laydate-set-ym"}),t=lay.elem("span"),n=lay.elem("span");return e.appendChild(t),e.appendChild(n),e}(),function(){var e=lay.elem("i",{"class":"layui-icon laydate-icon laydate-next-m"});return e.innerHTML="&#xe602;",e}(),function(){var e=lay.elem("i",{"class":"layui-icon laydate-icon laydate-next-y"});return e.innerHTML="&#xe65b;",e}()],y=lay.elem("div",{"class":"layui-laydate-content"}),c=lay.elem("table"),d=lay.elem("thead"),u=lay.elem("tr");lay.each(i,function(e,t){a.appendChild(t)}),d.appendChild(u),lay.each(new Array(6),function(e){var t=c.insertRow(0);lay.each(new Array(7),function(a){if(0===e){var i=lay.elem("th");i.innerHTML=n.weeks[a],u.appendChild(i)}t.insertCell(a)})}),c.insertBefore(d,c.children[0]),y.appendChild(c),r[e]=lay.elem("div",{"class":"layui-laydate-main laydate-main-list-"+e}),r[e].appendChild(a),r[e].appendChild(y),l.push(i),o.push(y),s.push(c)}),lay(y).html(function(){var e=[],i=[];return"datetime"===t.type&&e.push('<span lay-type="datetime" class="laydate-btns-time">'+n.timeTips+"</span>"),lay.each(t.btns,function(e,r){var l=n.tools[r]||"btn";t.range&&"now"===r||(a&&"clear"===r&&(l="cn"===t.lang?"重置":"Reset"),i.push('<span lay-type="'+r+'" class="laydate-btns-'+r+'">'+l+"</span>"))}),e.push('<div class="laydate-footer-btns">'+i.join("")+"</div>"),e.join("")}()),lay.each(r,function(e,t){i.appendChild(t)}),t.showBottom&&i.appendChild(y),/^#/.test(t.theme)){var d=lay.elem("style"),u=["#{{id}} .layui-laydate-header{background-color:{{theme}};}","#{{id}} .layui-this{background-color:{{theme}} !important;}"].join("").replace(/{{id}}/g,e.elemID).replace(/{{theme}}/g,t.theme);"styleSheet"in d?(d.setAttribute("type","text/css"),d.styleSheet.cssText=u):d.innerHTML=u,lay(i).addClass("laydate-theme-molv"),i.appendChild(d)}e.remove(v.thisElemDate),a?t.elem.append(i):(document.body.appendChild(i),e.position()),e.checkDate().calendar(null,0,"init"),e.changeEvent(),v.thisElemDate=e.elemID,"function"==typeof t.ready&&t.ready(lay.extend({},t.dateTime,{month:t.dateTime.month+1}))},v.prototype.remove=function(e){var t=this,n=(t.config,lay("#"+(e||t.elemID)));return n[0]?(n.hasClass(c)||t.checkDate(function(){n.remove(),delete t.endDate}),t):t},v.prototype.position=function(){var e=this,t=e.config;return lay.position(e.bindElem||t.elem[0],e.elem,{position:t.position}),e},v.prototype.hint=function(e){var t=this,n=(t.config,lay.elem("div",{"class":m}));t.elem&&(n.innerHTML=e||"",lay(t.elem).find("."+m).remove(),t.elem.appendChild(n),clearTimeout(t.hinTimer),t.hinTimer=setTimeout(function(){lay(t.elem).find("."+m).remove()},3e3))},v.prototype.getAsYM=function(e,t,n){return n?t--:t++,t<0&&(t=11,e--),t>11&&(t=0,e++),[e,t]},v.prototype.systemDate=function(e){var t=e||new Date;return{year:t.getFullYear(),month:t.getMonth(),date:t.getDate(),hours:e?e.getHours():0,minutes:e?e.getMinutes():0,seconds:e?e.getSeconds():0}},v.prototype.checkDate=function(e){var t,n,i=this,r=(new Date,i.config),l=i.lang(),o=r.dateTime=r.dateTime||i.systemDate(),s=i.bindElem||r.elem[0],c=(i.isInput(s)?"val":"html",i.isInput(s)?s.value:"static"===r.position?"":s.innerHTML),d=function(e){e.year>y[1]&&(e.year=y[1],n=!0),e.month>11&&(e.month=11,n=!0),e.hours>23&&(e.hours=0,n=!0),e.minutes>59&&(e.minutes=0,e.hours++,n=!0),e.seconds>59&&(e.seconds=0,e.minutes++,n=!0),t=a.getEndDate(e.month+1,e.year),e.date>t&&(e.date=t,n=!0)},u=function(e,t,a){var l=["startTime","endTime"];t=(t.match(i.EXP_SPLIT)||[]).slice(1),a=a||0,r.range&&(i[l[a]]=i[l[a]]||{}),lay.each(i.format,function(o,s){var c=parseFloat(t[o]);t[o].length<s.length&&(n=!0),/yyyy|y/.test(s)?(c<y[0]&&(c=y[0],n=!0),e.year=c):/MM|M/.test(s)?(c<1&&(c=1,n=!0),e.month=c-1):/dd|d/.test(s)?(c<1&&(c=1,n=!0),e.date=c):/HH|H/.test(s)?(c<1&&(c=0,n=!0),e.hours=c,r.range&&(i[l[a]].hours=c)):/mm|m/.test(s)?(c<1&&(c=0,n=!0),e.minutes=c,r.range&&(i[l[a]].minutes=c)):/ss|s/.test(s)&&(c<1&&(c=0,n=!0),e.seconds=c,r.range&&(i[l[a]].seconds=c))}),d(e)};return"limit"===e?(d(o),i):(c=c||r.value,"string"==typeof c&&(c=c.replace(/\s+/g," ").replace(/^\s|\s$/g,"")),r.range&&(i.endDate=i.endDate||lay.extend({},o,function(){var e={},t=i.getAsYM(o.year,o.month);return"year"===r.type?e.year=o.year+1:"time"!==r.type&&(e.year=t[0],e.month=t[1]),e}())),"string"==typeof c&&c?i.EXP_IF.test(c)?r.range?(c=c.split(" "+r.range+" "),lay.each([r.dateTime,i.endDate],function(e,t){u(t,c[e],e)})):u(o,c):(i.hint(l.formatError[0]+(r.range?r.format+" "+r.range+" "+r.format:r.format)+l.formatError[1]),n=!0):c&&c.constructor===Date?r.dateTime=i.systemDate(c):(r.dateTime=i.systemDate(),delete i.startTime,delete i.endTime),d(o),n&&c&&i.setValue(r.range?i.endDate?i.parse():"":i.parse()),e&&e(),i)},v.prototype.mark=function(e,t){var n,a=this,i=a.config;return lay.each(i.mark,function(e,a){var i=e.split("-");i[0]!=t[0]&&0!=i[0]||i[1]!=t[1]&&0!=i[1]||i[2]!=t[2]||(n=a||t[2])}),n&&e.html('<span class="laydate-day-mark">'+n+"</span>"),a},v.prototype.limit=function(e,t,n,a){var i,r=this,l=r.config,o={},y=l[n>41?"endDate":"dateTime"],c=lay.extend({},y,t||{});return lay.each({now:c,min:l.min,max:l.max},function(e,t){o[e]=r.newDate(lay.extend({year:t.year,month:t.month,date:t.date},function(){var e={};return lay.each(a,function(n,a){e[a]=t[a]}),e}())).getTime()}),i=o.now<o.min||o.now>o.max,e&&e[i?"addClass":"removeClass"](s),i},v.prototype.thisDateTime=function(e){var t=this,n=t.config;return e?t.endDate:n.dateTime},v.prototype.calendar=function(e,t,n){var i,r,l,s=this,c=s.config,t=t?1:0,d=e||s.thisDateTime(t),u=new Date,m=s.lang(),h="date"!==c.type&&"datetime"!==c.type,p=lay(s.table[t]).find("td"),g=lay(s.elemHeader[t][2]).find("span");return d.year<y[0]&&(d.year=y[0],s.hint(m.invalidDate)),d.year>y[1]&&(d.year=y[1],s.hint(m.invalidDate)),s.firstDate||(s.firstDate=lay.extend({},d)),u.setFullYear(d.year,d.month,1),i=u.getDay(),r=a.getEndDate(d.month||12,d.year),l=a.getEndDate(d.month+1,d.year),lay.each(p,function(e,t){var n=[d.year,d.month],a=0;t=lay(t),t.removeAttr("class"),e<i?(a=r-i+e,t.addClass("laydate-day-prev"),n=s.getAsYM(d.year,d.month,"sub")):e>=i&&e<l+i?(a=e-i,a+1===d.date&&t.addClass(o)):(a=e-l-i,t.addClass("laydate-day-next"),n=s.getAsYM(d.year,d.month)),n[1]++,n[2]=a+1,t.attr("lay-ymd",n.join("-")).html(n[2]),s.mark(t,n).limit(t,{year:n[0],month:n[1]-1,date:n[2]},e)}),lay(g[0]).attr("lay-ym",d.year+"-"+(d.month+1)),lay(g[1]).attr("lay-ym",d.year+"-"+(d.month+1)),"cn"===c.lang?(lay(g[0]).attr("lay-type","year").html(d.year+"年"),lay(g[1]).attr("lay-type","month").html(d.month+1+"月")):(lay(g[0]).attr("lay-type","month").html(m.month[d.month]),lay(g[1]).attr("lay-type","year").html(d.year)),h&&(c.range?e&&(s.listYM=[[c.dateTime.year,c.dateTime.month+1],[s.endDate.year,s.endDate.month+1]],s.list(c.type,0).list(c.type,1),"time"===c.type?s.setBtnStatus("时间",lay.extend({},s.systemDate(),s.startTime),lay.extend({},s.systemDate(),s.endTime)):s.setBtnStatus(!0)):(s.listYM=[[d.year,d.month+1]],s.list(c.type,0))),c.range&&"init"===n&&!e&&s.calendar(s.endDate,1),c.range||s.limit(lay(s.footer).find(f),null,0,["hours","minutes","seconds"]),s.setBtnStatus(),s.stampRange(t,p),s},v.prototype.list=function(e,t){var n=this,a=n.config,i=a.dateTime,r=n.lang(),l=a.range&&"date"!==a.type&&"datetime"!==a.type,y=lay.elem("ul",{"class":d+" "+{year:"laydate-year-list",month:"laydate-month-list",time:"laydate-time-list"}[e]}),c=n.elemHeader[t],u=lay(c[2]).find("span"),m=n.elemCont[t||0],h=lay(m).find("."+d)[0],v="cn"===a.lang,T=v?"年":"",D=n.listYM[t]||{},w=["hours","minutes","seconds"],b=["startTime","endTime"][t];if(D[0]<1&&(D[0]=1),"year"===e){var x,C=x=D[0]-7;C<1&&(C=x=1),lay.each(new Array(15),function(e){var i=lay.elem("li",{"lay-ym":x}),r={year:x};x==D[0]&&lay(i).addClass(o),i.innerHTML=x+T,y.appendChild(i),x<n.firstDate.year?(r.month=a.min.month,r.date=a.min.date):x>=n.firstDate.year&&(r.month=a.max.month,r.date=a.max.date),n.limit(lay(i),r,t),x++}),lay(u[v?0:1]).attr("lay-ym",x-8+"-"+D[1]).html(C+T+" - "+(x-1+T))}else if("month"===e)lay.each(new Array(12),function(e){var i=lay.elem("li",{"lay-ym":e}),l={year:D[0],month:e};e+1==D[1]&&lay(i).addClass(o),i.innerHTML=r.month[e]+(v?"月":""),y.appendChild(i),D[0]<n.firstDate.year?l.date=a.min.date:D[0]>=n.firstDate.year&&(l.date=a.max.date),n.limit(lay(i),l,t)}),lay(u[v?0:1]).attr("lay-ym",D[0]+"-"+D[1]).html(D[0]+T);else if("time"===e){var M=function(){lay(y).find("ol").each(function(e,a){lay(a).find("li").each(function(a,i){n.limit(lay(i),[{hours:a},{hours:n[b].hours,minutes:a},{hours:n[b].hours,minutes:n[b].minutes,seconds:a}][e],t,[["hours"],["hours","minutes"],["hours","minutes","seconds"]][e])})}),a.range||n.limit(lay(n.footer).find(f),n[b],0,["hours","minutes","seconds"])};a.range?n[b]||(n[b]={hours:0,minutes:0,seconds:0}):n[b]=i,lay.each([24,60,60],function(e,t){var a=lay.elem("li"),i=["<p>"+r.time[e]+"</p><ol>"];lay.each(new Array(t),function(t){i.push("<li"+(n[b][w[e]]===t?' class="'+o+'"':"")+">"+lay.digit(t,2)+"</li>")}),a.innerHTML=i.join("")+"</ol>",y.appendChild(a)}),M()}if(h&&m.removeChild(h),m.appendChild(y),"year"===e||"month"===e)lay(n.elemMain[t]).addClass("laydate-ym-show"),lay(y).find("li").on("click",function(){var r=0|lay(this).attr("lay-ym");if(!lay(this).hasClass(s)){0===t?(i[e]=r,n.limit(lay(n.footer).find(f),null,0)):n.endDate[e]=r;var c="year"===a.type||"month"===a.type;c?(lay(y).find("."+o).removeClass(o),lay(this).addClass(o),"month"===a.type&&"year"===e&&(n.listYM[t][0]=r,l&&(t?i.year=r:n.endDate.year=r),n.list("month",t))):(n.checkDate("limit").calendar(null,t),n.closeList()),n.setBtnStatus(),a.range||(("month"===a.type&&"month"===e||"year"===a.type&&"year"===e)&&n.setValue(n.parse()).remove().done(),n.done(null,"change")),lay(n.footer).find(g).removeClass(s)}});else{var E=lay.elem("span",{"class":p}),k=function(){lay(y).find("ol").each(function(e){var t=this,a=lay(t).find("li");t.scrollTop=30*(n[b][w[e]]-2),t.scrollTop<=0&&a.each(function(e,n){if(!lay(this).hasClass(s))return t.scrollTop=30*(e-2),!0})})},S=lay(c[2]).find("."+p);k(),E.innerHTML=a.range?[r.startTime,r.endTime][t]:r.timeTips,lay(n.elemMain[t]).addClass("laydate-time-show"),S[0]&&S.remove(),c[2].appendChild(E),lay(y).find("ol").each(function(e){var t=this;lay(t).find("li").on("click",function(){var r=0|this.innerHTML;lay(this).hasClass(s)||(a.range?n[b][w[e]]=r:i[w[e]]=r,lay(t).find("."+o).removeClass(o),lay(this).addClass(o),M(),k(),(n.endDate||"time"===a.type)&&n.done(null,"change"),n.setBtnStatus())})})}return n},v.prototype.listYM=[],v.prototype.closeList=function(){var e=this;e.config;lay.each(e.elemCont,function(t,n){lay(this).find("."+d).remove(),lay(e.elemMain[t]).removeClass("laydate-ym-show laydate-time-show")}),lay(e.elem).find("."+p).remove()},v.prototype.setBtnStatus=function(e,t,n){var a,i=this,r=i.config,l=i.lang(),o=lay(i.footer).find(f);r.range&&"time"!==r.type&&(t=t||r.dateTime,n=n||i.endDate,a=i.newDate(t).getTime()>i.newDate(n).getTime(),i.limit(null,t)||i.limit(null,n)?o.addClass(s):o[a?"addClass":"removeClass"](s),e&&a&&i.hint("string"==typeof e?l.timeout.replace(/日期/g,e):l.timeout))},v.prototype.parse=function(e,t){var n=this,a=n.config,i=t||(e?lay.extend({},n.endDate,n.endTime):a.range?lay.extend({},a.dateTime,n.startTime):a.dateTime),r=n.format.concat();return lay.each(r,function(e,t){/yyyy|y/.test(t)?r[e]=lay.digit(i.year,t.length):/MM|M/.test(t)?r[e]=lay.digit(i.month+1,t.length):/dd|d/.test(t)?r[e]=lay.digit(i.date,t.length):/HH|H/.test(t)?r[e]=lay.digit(i.hours,t.length):/mm|m/.test(t)?r[e]=lay.digit(i.minutes,t.length):/ss|s/.test(t)&&(r[e]=lay.digit(i.seconds,t.length))}),a.range&&!e?r.join("")+" "+a.range+" "+n.parse(1):r.join("")},v.prototype.newDate=function(e){return e=e||{},new Date(e.year||1,e.month||0,e.date||1,e.hours||0,e.minutes||0,e.seconds||0)},v.prototype.setValue=function(e){var t=this,n=t.config,a=t.bindElem||n.elem[0],i=t.isInput(a)?"val":"html";return"static"===n.position||lay(a)[i](e||""),this},v.prototype.stampRange=function(e,t){var n,a,i=this,r=i.config;r.range&&(n=i.newDate(r.dateTime).getTime(),a=i.newDate(i.endDate).getTime(),lay.each(t,function(t,r){var l=lay(r).attr("lay-ymd").split("-"),o=i.newDate({year:l[0],month:l[1]-1,date:l[2]}).getTime();0==e?o>n&&lay(r).addClass(u):o<a&&lay(r).addClass(u)}))},v.prototype.done=function(e,t){var n=this,a=n.config,i=lay.extend({},lay.extend(a.dateTime,n.startTime)),r=lay.extend({},lay.extend(n.endDate,n.endTime));return lay.each([i,r],function(e,t){"month"in t&&lay.extend(t,{month:t.month+1})}),e=e||[n.parse(),i,r],"function"==typeof a[t||"done"]&&a[t||"done"].apply(a,e),n},v.prototype.choose=function(e,t){var n=this,a=n.config,i=n.thisDateTime(t),r=(lay(n.elem).find("td"),e.attr("lay-ymd").split("-"));r={year:0|r[0],month:(0|r[1])-1,date:0|r[2]},e.hasClass(s)||(lay.extend(i,r),a.range?(lay.each(["startTime","endTime"],function(e,t){n[t]=n[t]||{hours:0,minutes:0,seconds:0}}),n.calendar(null,t)):"static"===a.position?n.calendar().done().done(null,"change"):"date"===a.type?n.setValue(n.parse()).remove().done():"datetime"===a.type&&n.calendar().done(null,"change"))},v.prototype.tool=function(e,t){var n=this,a=n.config,i=n.lang(),r=a.dateTime,l="static"===a.position,o={datetime:function(){lay(e).hasClass(s)||(n.list("time",0),a.range&&n.list("time",1),lay(e).attr("lay-type","date").html(n.lang().dateTips))},date:function(){n.closeList(),lay(e).attr("lay-type","datetime").html(n.lang().timeTips)},clear:function(){n.setValue("").remove(),l&&(lay.extend(r,n.firstDate),n.calendar()),a.range&&(delete n.endDate,delete n.startTime,delete n.endTime),n.done(["",{},{}])},now:function(){var e=new Date;lay.extend(r,n.systemDate(),{hours:e.getHours(),minutes:e.getMinutes(),seconds:e.getSeconds()}),n.setValue(n.parse()).remove(),l&&n.calendar(),n.done()},confirm:function(){if(a.range){if(lay(e).hasClass(s))return n.hint("time"===a.type?i.timeout.replace(/日期/g,"时间"):i.timeout)}else if(lay(e).hasClass(s))return n.hint(i.invalidDate);n.done(),n.setValue(n.parse()).remove()}};o[t]&&o[t]()},v.prototype.change=function(e){var t=this,n=t.config,a=t.thisDateTime(e),i=n.range&&("year"===n.type||"month"===n.type),r=t.elemCont[e||0],l=t.listYM[e],o=function(o){var s=lay(r).find(".laydate-year-list")[0],y=lay(r).find(".laydate-month-list")[0];return s&&(l[0]=o?l[0]-15:l[0]+15,t.list("year",e)),y&&(o?l[0]--:l[0]++,t.list("month",e)),(s||y)&&(lay.extend(a,{year:l[0]}),i&&(a.year=l[0]),n.range||t.done(null,"change"),n.range||t.limit(lay(t.footer).find(f),{year:l[0]})),t.setBtnStatus(),s||y};return{prevYear:function(){o("sub")||(a.year--,t.checkDate("limit").calendar(null,e),n.range||t.done(null,"change"))},prevMonth:function(){var i=t.getAsYM(a.year,a.month,"sub");lay.extend(a,{year:i[0],month:i[1]}),t.checkDate("limit").calendar(null,e),n.range||t.done(null,"change")},nextMonth:function(){var i=t.getAsYM(a.year,a.month);lay.extend(a,{year:i[0],month:i[1]}),t.checkDate("limit").calendar(null,e),n.range||t.done(null,"change")},nextYear:function(){o()||(a.year++,t.checkDate("limit").calendar(null,e),n.range||t.done(null,"change"))}}},v.prototype.changeEvent=function(){var e=this;e.config;lay(e.elem).on("click",function(e){lay.stope(e)}),lay.each(e.elemHeader,function(t,n){lay(n[0]).on("click",function(n){e.change(t).prevYear()}),lay(n[1]).on("click",function(n){e.change(t).prevMonth()}),lay(n[2]).find("span").on("click",function(n){var a=lay(this),i=a.attr("lay-ym"),r=a.attr("lay-type");i&&(i=i.split("-"),e.listYM[t]=[0|i[0],0|i[1]],e.list(r,t),lay(e.footer).find(g).addClass(s))}),lay(n[3]).on("click",function(n){e.change(t).nextMonth()}),lay(n[4]).on("click",function(n){e.change(t).nextYear()})}),lay.each(e.table,function(t,n){var a=lay(n).find("td");a.on("click",function(){e.choose(lay(this),t)})}),lay(e.footer).find("span").on("click",function(){var t=lay(this).attr("lay-type");e.tool(this,t)})},v.prototype.isInput=function(e){return/input|textarea/.test(e.tagName.toLocaleLowerCase())},v.prototype.events=function(){var t=this,n=t.config,a=function(e,a){e.on(n.trigger,function(){a&&(t.bindElem=this),t.render()})};n.elem[0]&&!n.elem[0].eventHandler&&(a(n.elem,"bind"),a(n.eventElem),lay(document).on("click",function(e){e.target!==n.elem[0]&&e.target!==n.eventElem[0]&&e.target!==lay(n.closeStop)[0]&&t.remove()}).on("keydown",function(e){13===e.keyCode&&lay("#"+t.elemID)[0]&&t.elemID===v.thisElemDate&&(e.preventDefault(),lay(t.footer).find(f)[0].click())}),lay(e).on("resize",function(){return!(!t.elem||!lay(l)[0])&&void t.position()}),n.elem[0].eventHandler=!0)},a.render=function(e){var t=new v(e);return i.call(t)},a.getEndDate=function(e,t){var n=new Date;return n.setFullYear(t||n.getFullYear(),e||n.getMonth()+1,1),new Date(n.getTime()-864e5).getDate()},t?(a.ready(),layui.define("lay",function(e){a.path=layui.cache.dir,e(r,a)})):"function"==typeof define&&define.amd?define(function(){return a}):function(){a.ready(),e.laydate=a}()}(window);