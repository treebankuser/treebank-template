(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{11:function(e){e.exports={title:"Treebank Publication Template",subtitle:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",copyright:"The Perseids Project 2019",report:"https://github.com/perseids-publications/treebank-template/issues",github:"https://github.com/perseids-publications/treebank-template/",twitter:"https://twitter.com/PerseidsProject",collections:[{title:"Collection 1",publications:[{path:"on-the-murder-of-eratosthenes",author:"Lysias",work:"On the Murder of Eratosthenes",editors:"Vanessa Gorman",sections:[{locus:"1-50",path:"on-the-murder-of-eratosthenes-1-50",xml:"lysias-1-1-50.xml",link:"https://www.example.com",notes:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",chunks:{start:1,end:134}}]},{path:"on-the-crown",author:"Demosthenes",work:"On the Crown",editors:"Vanessa Gorman",sections:[{locus:"1-50",path:"on-the-crown-1-50",xml:"demosthenes-18-1-50.xml",notes:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",chunks:{start:1,end:160}},{locus:"51-100",path:"on-the-crown-51-100",xml:"demosthenes-18-51-100.xml",chunks:{start:1,end:149}}]}]},{title:"Collection 2",publications:[{path:"histories",author:"Herodotus",work:"The Histories",editors:"Vanessa Gorman",sections:[{locus:"40-59",path:"histories-40-59",xml:"herodotus-1-40-59.xml",chunks:{start:1,end:100}},{locus:"60-79",path:"histories-60-79",xml:"herodotus-1-60-79.xml",chunks:{start:1,end:166}},{locus:"80-99",path:"histories-80-99",xml:"herodotus-1-80-99.xml",notes:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",chunks:{start:1,end:185}}]}]}]}},18:function(e,t,a){e.exports=a(39)},28:function(e,t,a){},32:function(e,t,a){},34:function(e,t,a){},36:function(e,t,a){},39:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(15),c=a.n(o),i=(a(24),a(26),a(28),a(6)),l=a(41),s=a(43),u=a(42),m=a(11),h=a(1),d=Object(h.shape)({start:h.number.isRequired,end:h.number.isRequired}),p=Object(h.shape)({locus:h.string.isRequired,path:h.string.isRequired,xml:h.string.isRequired,link:h.string,notes:h.string,chunks:d.isRequired}),b=Object(h.shape)({path:h.string.isRequired,author:h.string.isRequired,work:h.string.isRequired,editors:h.string.isRequired,sections:Object(h.arrayOf)(p).isRequired}),g=Object(h.shape)({title:Object(h.oneOfType)([h.string,h.element]).isRequired,publications:Object(h.arrayOf)(b).isRequired}),f=(Object(h.shape)({title:Object(h.oneOfType)([h.string,h.element]).isRequired,subtitle:h.string.isRequired,copyright:h.string,report:h.string,github:h.string,twitter:h.string,collections:Object(h.arrayOf)(g).isRequired}),Object(h.shape)({params:Object(h.shape)({chunk:h.string.isRequired}).isRequired}),Object(h.shape)({params:Object(h.shape)({publication:h.string.isRequired}).isRequired}),a(32),function(e){var t=e.title,a=e.subtitle;return r.a.createElement("div",{className:"jumbotron jumbotron-fluid jumbotron-small bg-dark"},r.a.createElement("div",{className:"container text-light"},r.a.createElement("h1",{className:"display-4"},t),a&&function(e){return r.a.createElement("p",null,r.a.createElement("span",null,e))}(a)))}),v=function(e){var t=e.path,a=e.author,n=e.work,o=e.editors,c=e.sections;return r.a.createElement("tr",{className:"d-flex",key:t},r.a.createElement("th",{className:"col-md-3 d-none d-md-block",scope:"row"},a),r.a.createElement("td",{className:"col-md-4 d-none d-md-block"},n),r.a.createElement("td",{className:"col-8 col-sm-6 d-block d-md-none"},r.a.createElement("strong",null,a),",",r.a.createElement("em",null,n)),r.a.createElement("td",{className:"col-sm-3 col-lg-4 d-none d-sm-block"},o),r.a.createElement("td",{className:"col-4 col-sm-3 col-md-2 col-lg-1"},c.map(function(e){return function(e){var t=e.locus,a=e.path,n=e.chunks.start;return r.a.createElement(r.a.Fragment,{key:a},r.a.createElement("a",{href:"".concat(a,"/").concat(n)},t),r.a.createElement("br",null))}(e)})))},E=function(e){var t=e.title,a=e.publications;return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row pb-3"},r.a.createElement("div",{className:"col-12"},t&&r.a.createElement("h2",null,t),r.a.createElement("table",{className:"table"},r.a.createElement("thead",{className:"thead-light"},r.a.createElement("tr",{className:"d-flex"},r.a.createElement("th",{className:"col-md-3 d-none d-md-block",scope:"col"},"Author"),r.a.createElement("th",{className:"col-8 col-sm-6 col-md-4",scope:"col"},"Work"),r.a.createElement("th",{className:"col-sm-3 col-lg-4 d-none d-sm-block",scope:"col"},"Editors"),r.a.createElement("th",{className:"col-4 col-sm-3 col-md-2 col-lg-1",scope:"col"},"Locus"))),r.a.createElement("tbody",null,a.map(function(e){return v(e)}))))))},k=function(e){var t=e.config,a=t.title,n=t.subtitle,o=t.collections;return r.a.createElement(r.a.Fragment,null,r.a.createElement(i.PerseidsHeader,null,a),r.a.createElement(f,{title:a,subtitle:n}),o.map(function(e){return function(e){var t=e.title,a=e.publications;return r.a.createElement(E,{key:t,title:t,publications:a})}(e)}))},w=a(4),O=a(5),y=a(9),j=a(7),x=a(10),N={main:{debug:!1,showKeys:!1,chunkParam:"chunk",auxConfPath:"https://services.perseids.org/arethusa-configs",retrievers:{TreebankRetriever:{resource:"Gardener",docIdentifier:"treebank",preselector:"w"}},plugins:["text","morph","relation","depTree"],layouts:[{name:"widget",template:"js/templates/widget.html"}]},notifier:{duration:"10",maxMessages:7},navigator:{chunkSize:1},navbar:!1,resources:{Gardener:{route:"".concat("/treebank-template","/xml/:doc"),params:["doc"]},lexInvFusekiEndpoint:{route:"http://fuseki.perseids.org/fuseki/ds/query?format=json"},morphologyServiceLat:{route:"http://services.perseids.org/bsp/morphologyservice/analysis/word?lang=lat&engine=morpheuslat"},newMorphologyServiceLat:{route:"http://morph.perseids.org/analysis/word?lang=lat&engine=morpheuslat"},morphologyServiceGrc:{route:"http://services.perseids.org/bsp/morphologyservice/analysis/word?lang=grc&engine=morpheusgrc"},newMorphologyServiceGrc:{route:"http://morph.perseids.org/analysis/word?lang=grc&engine=morpheusgrc"},morphologyServicePer:{route:"http://localhost/extapi/morphologyservice/analysis/word?lang=per&engine=hazm"},citeMapper:{route:"http://services.perseids.org/cite_mapper/find_cite"},sgGrammar:{route:"http://services.perseids.org/sg/:doc.html"}},plugins:{text:{main:!0,template:"js/templates/text_with_context.html"},depTree:{main:!0,contextMenu:!1,contextMenuTemplate:"js/arethusa.dep_tree/templates/context_menu.html",template:"js/templates/dep_tree.html"},morph:{noRetrieval:"online",contextMenu:!0,contextMenuTemplate:"js/arethusa.morph/templates/context_menu.html"},relation:{advancedMode:!0,relations:{}}},keyCapture:{regex:{greek:{"\u03b1":"[\u03b1\u1f01\u1f05\u1f03\u1f07\u1f00\u1f04\u1f02\u1f06\u03ac\u1f70\u1fb6\u1f81\u1f85\u1f83\u1f87\u1f80\u1f84\u1f82\u1f86\u1fb4\u1fb2\u1fb7\u1fb3]","\u03b5":"[\u03b5\u03ad\u1f72\u1f10\u1f11\u1f14\u1f12\u1f15\u1f13]","\u03b7":"[\u03b7\u1f21\u1f25\u1f23\u1f27\u1f20\u1f24\u1f22\u1f26\u03ae\u1f74\u1fc6\u1f91\u1f95\u1f93\u1f97\u1f90\u1f94\u1f92\u1f96\u1fc4\u1fc2\u1fc7\u1fc3]","\u03b9":"[\u03b9\u1f31\u1f35\u1f33\u1f37\u1f30\u1f34\u1f32\u1f36\u03af\u1f76\u1fd6]","\u03bf":"[\u03bf\u03cc\u1f78\u1f40\u1f41\u1f44\u1f42\u1f45\u1f43]","\u03c5":"[\u03c5\u1f51\u1f55\u1f53\u1f57\u1f50\u1f54\u1f52\u1f56\u03cd\u1f7a\u1fe6]","\u03c9":"[\u03c9\u1f61\u1f65\u1f63\u1f67\u1f60\u1f64\u1f62\u1f66\u03ce\u1f7c\u1ff6\u1fa1\u1fa5\u1fa3\u1fa7\u1fa0\u1fa4\u1fa2\u1fa6\u1ff4\u1ff2\u1ff7\u1ff3]"}},keys:{}}},q=(a(34),function(){function e(){Object(w.a)(this,e),this.elementId="treebank_container",this.remoteUrl="".concat("/treebank-template","/arethusa/"),this.appConf=N,this.render=this.render.bind(this)}return Object(O.a)(e,[{key:"render",value:function(e,t){var a=window,n=a.arethusaGoto,r=a.Arethusa,o=a.$;this.widget?this.doc===e&&this.chunk!==t&&(n(t),function(e){e("#toast-container").remove()}(o)):(this.widget=new r,this.widget.on(this.elementId).from(this.remoteUrl).with(this.appConf).start({doc:e,chunk:t})),this.doc=e,this.chunk=t}}]),e}()),R=a(17),L=a(12),P=(a(36),function(e){function t(e){var a;return Object(w.a)(this,t),(a=Object(y.a)(this,Object(j.a)(t).call(this,e))).state={isOpen:!1},a.toggleOpen=a.toggleOpen.bind(Object(L.a)(Object(L.a)(a))),a}return Object(x.a)(t,e),Object(O.a)(t,[{key:"getLines",value:function(){for(var e=this.props.chunks,t=e.start,a=e.end,n=[],r=t;r<=a;++r)n.push(r);return n}},{key:"getFbcnl",value:function(){var e,t,a=this.props,n=a.chunks,r=n.start,o=n.end,c=a.match.params.chunk,i=Number(c);return[r,(e=r,t=i-1,e>t?e:t),i,function(e,t){return e<t?e:t}(o,i+1),o]}},{key:"toggleOpen",value:function(){this.setState(function(e){return{isOpen:!e.isOpen}})}},{key:"render",value:function(){var e=this,t=this.state.isOpen,a=this.getFbcnl(),n=Object(R.a)(a,5),o=n[0],c=n[1],i=n[2],l=n[3],s=n[4],u=this.getLines();return r.a.createElement("nav",{className:"navbar navbar-expand navbar-dark bg-dark"},r.a.createElement("div",{className:"collapse navbar-collapse justify-content-center",id:"navbarsExample10"},r.a.createElement("ul",{className:"navbar-nav"},r.a.createElement("li",{className:"nav-item"},r.a.createElement("a",{className:"nav-link text-light",href:"./".concat(o)},"\xab First")),r.a.createElement("li",{className:"nav-item"},r.a.createElement("a",{className:"nav-link text-light",href:"./".concat(c)},"\u2039 Back")),r.a.createElement("li",{className:"nav-item dropdown"},r.a.createElement("button",{className:"btn btn-link nav-link text-light dropdown-toggle",type:"button","aria-haspopup":"true","aria-expanded":t,onClick:this.toggleOpen,style:{cursor:"pointer"}},i),r.a.createElement("div",{className:"dropdown-menu dropdown-scroll ".concat(t?"show":"")},u.map(function(t){return r.a.createElement("a",{className:"dropdown-item",key:t,href:t,onClick:e.toggleOpen},t)}))),r.a.createElement("li",{className:"nav-item"},r.a.createElement("a",{className:"nav-link text-light",href:"./".concat(l)},"Next \u203a")),r.a.createElement("li",null,r.a.createElement("a",{className:"nav-link text-light",href:"./".concat(s)},"Last \xbb")))))}}]),t}(n.Component)),C=function(e){function t(){return Object(w.a)(this,t),Object(y.a)(this,Object(j.a)(t).apply(this,arguments))}return Object(x.a)(t,e),Object(O.a)(t,[{key:"componentDidMount",value:function(){this.renderArethusa()}},{key:"componentDidUpdate",value:function(){this.renderArethusa()}},{key:"renderArethusa",value:function(){var e=this.props,t=e.xml,a=e.match.params.chunk;(0,e.arethusa.render)(t,a)}},{key:"render",value:function(){var e=this.props,t=e.chunks,a=e.match;return r.a.createElement(r.a.Fragment,null,r.a.createElement(P,{match:a,chunks:t}),r.a.createElement("div",{className:"__artsa"},r.a.createElement("div",{id:"treebank_container",style:{position:"relative"}})))}}]),t}(n.Component),F=function(e,t){return r.a.createElement("tr",null,r.a.createElement("th",{scope:"col"},e),r.a.createElement("td",null,t))},T=function(e){function t(e){var a;return Object(w.a)(this,t),(a=Object(y.a)(this,Object(j.a)(t).call(this,e))).arethusa=new q,a}return Object(x.a)(t,e),Object(O.a)(t,[{key:"render",value:function(){var e=this.props,t=e.publicationPath,a=e.author,n=e.work,o=e.editors,c=e.locus,l=e.link,s=e.notes,u=e.xml,m=e.chunks,h=e.match;return r.a.createElement(r.a.Fragment,null,r.a.createElement(i.PerseidsHeader,null,r.a.createElement("span",null,r.a.createElement("i",null,n)),r.a.createElement("ul",{className:"navbar-nav ml-auto"},r.a.createElement("li",{className:"nav-item"},r.a.createElement("a",{className:"nav-link",href:"".concat("/treebank-template","/")},"Home")))),r.a.createElement("div",{className:"container pt-3"},r.a.createElement("h2",null,r.a.createElement("span",null,a,",",r.a.createElement("i",null," ",n," "),c)),r.a.createElement("table",{className:"table"},r.a.createElement("tbody",null,a&&F("Author",a),n&&F("Work",n),c&&function(e,t,a){return r.a.createElement("tr",null,r.a.createElement("th",{scope:"col"},e),r.a.createElement("td",{style:{width:"100%"}},t," ",r.a.createElement("a",{href:"../".concat(a)},"(See all)")))}("Locus",c,t),o&&F("Editors",o),l&&function(e,t){return r.a.createElement("tr",null,r.a.createElement("th",{scope:"col"},e),r.a.createElement("td",null,r.a.createElement("a",{href:t},t)))}("Link",l),s&&F("Notes",s))),r.a.createElement("div",{style:{minHeight:"350px"}},r.a.createElement(C,{xml:u,chunks:m,match:h,arethusa:this.arethusa})),r.a.createElement("div",{className:"pt-1 pb-4 text-right"},r.a.createElement("a",{href:"".concat("/treebank-template","/xml/").concat(u),target:"_black"},"View XML"))))}}]),t}(n.Component);T.defaultProps={link:void 0,notes:void 0};var _=T,M=function(e){function t(e){var a;Object(w.a)(this,t),a=Object(y.a)(this,Object(j.a)(t).call(this,e));var n=e.config,r={};return n.collections.forEach(function(e){e.publications.forEach(function(e){var t=e.author,a=e.work,n=e.editors,o=e.path;e.sections.forEach(function(e){var c=e.path,i=e.locus,l=e.link,s=e.notes,u=e.xml,m=e.chunks;r[c]={publicationPath:o,author:t,work:a,editors:n,locus:i,link:l,notes:s,xml:u,chunks:m}})})}),a.argsLookup=r,a}return Object(x.a)(t,e),Object(O.a)(t,[{key:"render",value:function(){var e=this.props.match,t=e.params.publication,a=this.argsLookup[t];return r.a.createElement(_,Object.assign({},a,{match:e}))}}]),t}(n.Component),A=function(e){var t=e.config,a=t.title,n=t.subtitle,o=t.collections;return r.a.createElement(r.a.Fragment,null,r.a.createElement(i.PerseidsHeader,null,a,r.a.createElement("ul",{className:"navbar-nav ml-auto"},r.a.createElement("li",{className:"nav-item"},r.a.createElement("a",{className:"nav-link",href:"".concat("/treebank-template","/")},"Home")))),r.a.createElement(f,{title:a,subtitle:n}),o.map(function(e){return function(e){var t=e.title,a=e.publications;return r.a.createElement(E,{key:t,title:t,publications:a})}(e)}))},S=function(e){function t(e){var a;Object(w.a)(this,t),a=Object(y.a)(this,Object(j.a)(t).call(this,e));var n=e.config,o={},c=n.title,i=n.subtitle,l=n.report,s=n.github,u=n.twitter;return n.collections.forEach(function(e){e.publications.forEach(function(e){var t=e.path,a=e.author,n=e.work;o[t]={title:c,subtitle:i,report:l,github:s,twitter:u,collections:[{title:r.a.createElement(r.a.Fragment,null,a,",",r.a.createElement("i",null,n)),publications:[e]}]}})}),a.argsLookup=o,a}return Object(x.a)(t,e),Object(O.a)(t,[{key:"render",value:function(){var e=this.props.match.params.publication,t=this.argsLookup[e];return r.a.createElement(A,{config:t})}}]),t}(n.Component),H=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(i.PerseidsHeader,null,r.a.createElement("span",null,"Not Found"),r.a.createElement("ul",{className:"navbar-nav ml-auto"},r.a.createElement("li",{className:"nav-item"},r.a.createElement("a",{className:"nav-link",href:"".concat("/treebank-template","/")},"Home")))),r.a.createElement("div",{className:"container pt-5"},r.a.createElement("div",{className:"row col-12 pt-5 pb-3"},r.a.createElement("div",{className:"col-12 text-center"},r.a.createElement("h1",null,"Error 404"))),r.a.createElement("div",{className:"row col-12 pb-3"},r.a.createElement("div",{className:"col-12 text-center"},r.a.createElement("h2",null,"Publication not found"))),r.a.createElement("div",{className:"row col-12 pb-3"},r.a.createElement("div",{className:"col-12 text-center"},r.a.createElement("h2",null,r.a.createElement("a",{href:"".concat("/treebank-template","/")},"Return to homepage"))))))},G=m.copyright,W=m.report,U=m.github,I=m.twitter,V=function(){return r.a.createElement(l.a,{basename:"/treebank-template"},r.a.createElement(r.a.Fragment,null,r.a.createElement(s.a,null,r.a.createElement(u.a,{exact:!0,path:"/",component:function(){return r.a.createElement(k,{config:m})}}),r.a.createElement(u.a,{exact:!0,path:"/:publication/",render:function(e){return r.a.createElement(S,Object.assign({},e,{config:m}))}}),r.a.createElement(u.a,{exact:!0,path:"/:publication/:chunk",render:function(e){return r.a.createElement(M,Object.assign({},e,{config:m}))}}),r.a.createElement(u.a,{component:H})),r.a.createElement(i.PerseidsFooter,{copyright:G,report:W,github:U,twitter:I})))},B=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function D(e,t){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See http://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}c.a.render(r.a.createElement(V,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/treebank-template",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var t="".concat("/treebank-template","/service-worker.js");B?(function(e,t){fetch(e).then(function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):D(e,t)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(t,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit http://bit.ly/CRA-PWA")})):D(t,e)})}}()}},[[18,2,1]]]);
//# sourceMappingURL=main.7ba69244.chunk.js.map