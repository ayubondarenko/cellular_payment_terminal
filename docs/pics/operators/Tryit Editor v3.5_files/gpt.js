(function(){var window=this;var e=this,g=function(a){return"string"==typeof a},aa=function(){},ba=function(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";else if("function"==b&&"undefined"==typeof a.call)return"object";return b};var ca=function(){var a=h,b=k;if(g(a))return g(b)&&1==b.length?a.indexOf(b,0):-1;for(var c=0;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},da=function(a,b){for(var c=a.length,d=g(a)?a.split(""):a,f=0;f<c;f++)f in d&&b.call(void 0,d[f],f,a)},ea=function(a){return Array.prototype.concat.apply([],arguments)};var m=function(){this.a="";this.b=fa};m.prototype.s=!0;m.prototype.j=function(){return this.a};var ha=function(a){return a instanceof m&&a.constructor===m&&a.b===fa?a.a:"type_error:TrustedResourceUrl"},fa={},ia=function(a){var b=new m;b.a=a;return b};var r=function(){this.l="";this.A=ja};r.prototype.s=!0;r.prototype.j=function(){return this.l};var ka=/^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i,ja={},la=function(a){var b=new r;b.l=a;return b};la("about:blank");var t;a:{var ma=e.navigator;if(ma){var na=ma.userAgent;if(na){t=na;break a}}t=""};var oa=function(a){var b=!1,c;return function(){b||(c=a(),b=!0);return c}},pa=function(){var a=aa;return function(){if(a){var b=a;a=null;b()}}};var v=function(a){v[" "](a);return a};v[" "]=aa;var qa=/^[\w+/_-]+[=]{0,2}$/;var ra=function(){if(!e.crypto)return Math.random();try{var a=new Uint32Array(1);e.crypto.getRandomValues(a);return a[0]/65536/65536}catch(b){return Math.random()}},sa=oa(function(){return-1!=t.indexOf("Google Web Preview")||1E-4>Math.random()}),ta=function(){try{a:{var a=e.document.querySelector("script[nonce]");if(a){var b=a.nonce||a.getAttribute("nonce");if(b&&qa.test(b)){var c=b;break a}}c=void 0}return c}catch(d){}};var w=function(){return e.googletag||(e.googletag={})};var x={1:"pagead2.googlesyndication.com",2:"pubads.g.doubleclick.net",3:"securepubads.g.doubleclick.net",173:"pubads.g.doubleclick.net",174:"securepubads.g.doubleclick.net",7:.02,13:1500,23:.001,24:200,27:.01,29:.01,33:"pagead2.googlesyndication.com",37:.01,38:.001,47:0,53:"",58:1,65:.01,66:1E-5,67:0,68:0,69:1,71:.05,73:0,162:0,163:"",76:"",77:.001,78:0,81:.001,83:0,85:0,89:1,90:0,91:0,96:1,99:.01,103:.01,104:"/pagead/js/rum.js",105:.1,106:"1-0-17",107:"1-0-16",113:1,114:1,115:0,116:0,117:1,118:1,120:1,124:.95,208:.001,169:.01,207:.001,125:.05,127:0,129:.05,131:"",156:0,133:0,134:.01,135:.1,137:.001,167:1,138:"",143:.005,168:1E-4,144:.001,187:.01,141:1,157:0,158:.001,150:".google.ru",153:.95,179:.01,170:!1,211:!1,183:0,196:.001,197:.001,152:[],171:.01,172:null,175:"21061661,21061662,21061663,21061664,21061665,21061666,21061667,21061668,22316437,22316438",178:.05,182:1E3,188:0,189:.01,191:1512514930353,192:21510956201635,190:0xa781a7496a3,194:.95,199:0,180:null,209:[],210:{},195:.5,198:1,200:.05,201:0,202:"",203:.01,206:.001,212:.01,213:0};x[6]=function(a,b){try{for(var c=null;c!=a;c=a,a=a.parent)switch(a.location.protocol){case "https:":return!0;case "file:":return!!b;case "http:":return!1}}catch(d){}return!0}(window);x[49]=(new Date).getTime();x[36]=/^true$/.test("false");x[46]=/^true$/.test("false");x[148]=/^true$/.test("false");var ua;a:{if(/^(-?[0-9.]{1,30})$/.test("{{MOD}}")){var va=Number("{{MOD}}");if(!isNaN(va)){ua=va;break a}}ua=-1}x[204]=ua;x[205]=.01;var y=function(){var a={},b;for(b in x)a[b]=x[b];this.a=a};y.prototype.get=function(a){return this.a[a]};y.prototype.set=function(a,b){this.a[a]=b};y.b=void 0;y.a=function(){return y.b?y.b:y.b=new y};var wa=["21060621","21060622","21060833","21060713"],xa=["21061212","21061213","21061214","21061277"],ya=y.a().a,za=w(),Aa=za._vars_,Ba;for(Ba in Aa)ya[Ba]=Aa[Ba];za._vars_=ya;var Ca=function(){return"184"},Da=w();Da.hasOwnProperty("getVersion")||(Da.getVersion=Ca);var Ea=function(a){this.a=a||e.document||document};Ea.prototype.createElement=function(a){return this.a.createElement(String(a))};Ea.prototype.appendChild=function(a,b){a.appendChild(b)};var Fa=function(a,b){a.addEventListener?a.addEventListener("message",b,void 0):a.attachEvent&&a.attachEvent("onmessage",b)};var Ha=function(){var a=e;this.b=a=void 0===a?e:a;this.B="https://securepubads.g.doubleclick.net/static/3p_cookie.html";this.a=2;this.g=[];this.o=!1;a:{var b=[e.top];a=[];for(var c=0,d;d=b[c++];){a.push(d);try{if(d.frames)for(var f=d.frames.length,l=0;l<f&&50>b.length;++l)b.push(d.frames[l])}catch(M){}}b:{try{var n=e.parent;if(n&&n!=e){var p=n;break b}}catch(M){}p=null}(f=p)&&a.unshift(f);a.unshift(e);var q;for(f=0;f<a.length;++f)try{var u=a[f],O=z(u);if(O){this.a=Ga(O);if(2!=this.a)break a;var P;if(P=!q){p=void 0;try{if(p=!!u&&null!=u.location.href)c:{try{v(u.foo);p=!0;break c}catch(M){}p=!1}P=p}catch(M){P=!1}}P&&(q=u)}}catch(M){}this.b=q||this.b}},A=function(a){if(2!=Ia(a)){for(var b=1==Ia(a),c=0;c<a.g.length;c++)try{a.g[c](b)}catch(d){}a.g=[]}},Ja=function(a){var b=z(a.b);b&&2==a.a&&(a.a=Ga(b))},Ia=function(a){Ja(a);return a.a},La=function(a){var b=Ka;b.g.push(a);if(2!=b.a)A(b);else if(b.o||(Fa(b.b,function(a){var c=z(b.b);if(c&&a.source==c&&2==b.a){switch(a.data){case "3p_cookie_yes":b.a=1;break;case "3p_cookie_no":b.a=0}A(b)}}),b.o=!0),z(b.b))A(b);else{a=(new Ea(b.b.document)).createElement("IFRAME");a.src=b.B;a.name="detect_3p_cookie";a.style.visibility="hidden";a.style.display="none";a.onload=function(){Ja(b);A(b)};try{b.b.document.body.appendChild(a)}catch(c){}}},Ma=function(a,b){try{return!(!a.frames||!a.frames[b])}catch(c){return!1}},z=function(a){return a.frames&&a.frames[v("detect_3p_cookie")]||null},Ga=function(a){return Ma(a,"3p_cookie_yes")?1:Ma(a,"3p_cookie_no")?0:2};var B=null;var Na=oa(function(){var a=e.navigator&&e.navigator.userAgent||"";a=a.toLowerCase();return-1!=a.indexOf("firefox/")||-1!=a.indexOf("chrome/")||-1!=a.indexOf("opr/")}),Oa=function(a,b,c){var d="script";d=void 0===d?"":d;var f=a.createElement("link");f.rel="preload";b instanceof m?b=ha(b):b instanceof r?b=b instanceof r&&b.constructor===r&&b.A===ja?b.l:"type_error:SafeUrl":(b instanceof r||(b=b.s?b.j():String(b),ka.test(b)||(b="about:invalid#zClosurez"),b=la(b)),b=b.j());f.href=b;d&&(f.as=d);c&&(f.nonce=c);if(a=a.getElementsByTagName("head")[0])try{a.appendChild(f)}catch(l){}};var Pa=/^\.google\.(com?\.)?[a-z]{2,3}$/,Qa=/\.(cn|com\.bi|do|sl|ba|by|ma)$/,Ra=function(a){return Pa.test(a)&&!Qa.test(a)},Sa=function(a){return a.replace(/[\W]/g,function(a){return"&#"+a.charCodeAt()+";"})},C=e,Ka,Ta=function(a,b){a="https://"+("adservice"+b+"/adsid/integrator."+a);b=["domain="+encodeURIComponent(e.location.hostname)];D[3]>=+new Date&&b.push("adsid="+encodeURIComponent(D[1]));return a+"?"+b.join("&")},D,E,F=function(){C=e;D=C.googleToken=C.googleToken||{};var a=+new Date;D[1]&&D[3]>a&&0<D[2]||(D[1]="",D[2]=-1,D[3]=-1,D[4]="",D[6]="");E=C.googleIMState=C.googleIMState||{};Ra(E[1])||(E[1]=".google.com");"array"==ba(E[5])||(E[5]=[]);"boolean"==typeof E[6]||(E[6]=!1);"array"==ba(E[7])||(E[7]=[]);"number"==typeof E[8]||(E[8]=0)},Ua=function(a){try{a()}catch(b){e.setTimeout(function(){throw b;},0)}},Wa=function(a){"complete"==e.document.readyState||"loaded"==e.document.readyState||e.currentScript&&e.currentScript.async?Va(3):a()},Xa=0,G={f:function(){return 0<E[8]},m:function(){E[8]++},u:function(){0<E[8]&&E[8]--},v:function(){E[8]=0},c:function(){},w:function(){return!1},i:function(){return E[5]},h:Ua},H={f:function(){return E[6]},m:function(){E[6]=!0},u:function(){E[6]=!1},v:function(){E[6]=!1},c:function(){},w:function(){return".google.com"!=E[1]&&2<++Xa},i:function(){return E[7]},h:function(a){Wa(function(){Ua(a)})}},Va=function(a){if(1E-5>Math.random()){e.google_image_requests||(e.google_image_requests=[]);var b=e.document.createElement("img");b.src="https://pagead2.googlesyndication.com/pagead/gen_204?id=imerr&err="+a;e.google_image_requests.push(b)}};G.c=function(){if(!G.f()){var a=e.document,b=function(b){var c=Ta("js",b),d=ta();Oa(a,c,d);b=a.createElement("script");b.type="text/javascript";d&&(b.nonce=d);b.onerror=function(){return e.processGoogleToken({},2)};c=ia(c);b.src=ha(c);try{(a.head||a.body||a.documentElement).appendChild(b),G.m()}catch(p){}},c=E[1];b(c);".google.com"!=c&&b(".google.com");b={};var d=(b.newToken="FBT",b);e.setTimeout(function(){return e.processGoogleToken(d,1)},1E3)}};H.c=function(){if(!H.f()){var a=e.document,b=Ta("sync.js",E[1]);Oa(a,b);b=Sa(b);var c=v("script"),d="",f=ta();f&&(d='nonce="'+Sa(f)+'"');var l="<"+c+' src="'+b+'" '+d+"></"+c+">"+("<"+c+" "+d+'>processGoogleTokenSync({"newToken":"FBS"},5);</'+c+">");Wa(function(){a.write(l);H.m()})}};var Ya=function(a,b){F();var c=C.googleToken[5]||0;a&&(0!=c||D[3]>=+new Date?b.h(a):(b.i().push(a),b.c()));D[3]>=+new Date&&D[2]>=+new Date||b.c()},$a=function(a){e.processGoogleToken=e.processGoogleToken||function(a,c){return Za(G,a,c)};Ya(a,G)},ab=function(a){e.processGoogleTokenSync=e.processGoogleTokenSync||function(a,c){return Za(H,a,c)};Ya(a,H)},bb=function(a){Ka=Ka||new Ha;La(function(b){b&&a()})},Za=function(a,b,c){b=void 0===b?{}:b;c=void 0===c?0:c;var d=b.newToken||"",f="NT"==d,l=parseInt(b.freshLifetimeSecs||"",10),n=parseInt(b.validLifetimeSecs||"",10);f&&!n&&(n=3600);var p=b["1p_jar"]||"";b=b.pucrd||"";F();1==c?a.v():a.u();if(!d&&a.w())Ra(".google.com")&&(E[1]=".google.com"),a.c();else{var q=C.googleToken=C.googleToken||{},u=0==c&&d&&g(d)&&!f&&"number"==typeof l&&0<l&&"number"==typeof n&&0<n&&g(p);f=f&&!a.f()&&(!(D[3]>=+new Date)||"NT"==D[1]);var O=!(D[3]>=+new Date)&&0!=c;if(u||f||O)f=+new Date,l=f+1E3*l,n=f+1E3*n,Va(c),q[5]=c,q[1]=d,q[2]=l,q[3]=n,q[4]=p,q[6]=b,F();if(u||!a.f()){c=a.i();for(d=0;d<c.length;d++)a.h(c[d]);c.length=0}}};var cb=function(){var a=I;if(!a.google_ltobserver){var b=new a.PerformanceObserver(function(b){var c=a.google_lt_queue=a.google_lt_queue||[];da(b.getEntries(),function(a){return c.push(a)})});b.observe({entryTypes:["longtask"]});a.google_ltobserver=b}};var db=[[[2,null,null,[0]]]];var eb={3:[[10,[[21060132],[21060133,[[2,null,null,[1]]]]]],[10,[[21061712],[21061713]]]]};v("partner.googleadservices.com");var fb=v("www.googletagservices.com"),J=!1,gb=!1,K="",L="",hb=y.a().get(46)&&!y.a().get(6);K=hb?"http:":"https:";L=y.a().get(hb?2:3);var jb=function(){var a=ib.scripts;if(a)for(var b=0;b<a.length;b++){var c=a[b];if(-1<c.src.indexOf(fb+"/tag/js/gpt"))return c}return null},N=function(a,b){if(null===B){B="";try{var c="";try{c=e.top.location.hash}catch(f){c=e.location.hash}if(c){var d=c.match(/\bdeid=([\d,]+)/);B=d?d[1]:""}}catch(f){}}if(c=(c=B)&&c.match(new RegExp("\\b("+a.join("|")+")\\b")))a=c[0];else if(b)a:{b=a.length*b;if(!sa()&&(c=Math.random(),c<b)){c=ra();a=a[Math.floor(c*a.length)];break a}a=null}else a=null;return a};var Q=void 0,R=w(),I=R.fifWin||window;Q=Q||I.document;var kb=[],lb=w();lb.hasOwnProperty("cmd")||(lb.cmd=kb);if(R.evalScripts)R.evalScripts();else{var mb=y.a(),nb=N(xa,mb.get(178));nb&&mb.get(152).push(nb);switch(nb){case "21061213":gb=!0;break;case "21061214":J=!0;break;case "21061277":J=gb=!0}var S=y.a().get(138)||N(wa,y.a().get(137))||N(["21061149"],y.a().get(167)),ib=Q,T=N(["21061590","21061591"],.001),U=y.a();U.set(209,db);U.set(210,eb);T&&("21061591"==T?(U.set(173,fb),U.set(174,fb)):U.set(163,T),U.get(152).push(T));-1!=t.indexOf("Mobile")||y.a().set(194,0);var ob=U.get(150);ob&&(F(),Ra(ob)&&(E[1]=ob));S&&U.set(138,S);U.set(172,ib.currentScript||jb());I.PerformanceObserver&&I.PerformanceLongTaskTiming&&cb();var pb,V=I;V=void 0===V?e:V;var qb=V.performance;if(pb=qb&&qb.now?qb.now():null){var rb={label:"1",type:9,value:pb},sb,tb=I;sb=tb.google_js_reporting_queue=tb.google_js_reporting_queue||[];1024>sb.length&&sb.push(rb)}var ub;var W=y.a(),X=W.get(76);if(X)ub=X;else{var Y=["183","181","184"],vb=Y[0]||"184",wb="",xb;if(W.get(131))xb="184";else if(1<Y.length){var Z=["21061722","21061723","21061724"],h=[""];if(1>=h.length||Z.length!=h.length)h=[];var k=N(ea(Z,h),.1);if(k){W.set(53,k);var yb;yb=0<=ca();W.set(170,yb);yb&&(Z=h);var zb=Z[0];if(k!=zb)for(var Ab=1;Ab<Z.length;++Ab)if(k==Z[Ab]){xb=Y[Ab];break}if(k==zb||parseInt(xb,10)<parseInt(vb,10)){var Bb=Y[Z.length-1];wb="?v="+Bb;W.set(163,Bb)}}}X=K+"//"+L+"/gpt/pubads_impl_"+(xb||vb)+".js"+wb;y.a().set(76,X);ub=X}var Cb=ub,Db=Q,Eb=Db.currentScript;if(!("complete"==Db.readyState||"loaded"==Db.readyState||Eb&&Eb.async)){var Fb="gpt-impl-"+Math.random();try{var Gb='<script id="'+Fb+'" src="'+Cb+'">\x3c/script>';J&&Na()&&(Gb+='<link rel="preconnect" href="'+K+"//"+L+'">');Q.write(Gb);R._syncTagged_=!0}catch(a){}if(Q.getElementById(Fb))switch(R._loadStarted_=!0,S){case "21060833":var Hb=pa();bb(Hb);ab(Hb);break;case "21060622":case "21060713":case "21061149":ab(null)}}if(!R._loadStarted_){switch(S){case "21060833":var Ib=pa();bb(Ib);$a(Ib);break;case "21060622":case "21060713":case "21061149":$a(null)}gb&&Oa(Q,Cb);var Jb=Q.createElement("script");Jb.src=Cb;Jb.async=!0;var Kb=Q.head||Q.body||Q.documentElement;Kb.appendChild(Jb);if(J&&Na()){var Lb=Q.createElement("link");Lb.rel="preconnect";Lb.href=K+"//"+L;Kb.appendChild(Lb)}R._loadStarted_=!0}};}).call(this.googletag&&googletag.fifWin?googletag.fifWin.parent:this)
