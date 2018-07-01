!function(e){function t(t){for(var n,o,i=t[0],u=t[1],c=t[2],f=0,d=[];f<i.length;f++)o=i[f],l[o]&&d.push(l[o][0]),l[o]=0;for(n in u)Object.prototype.hasOwnProperty.call(u,n)&&(e[n]=u[n]);for(s&&s(t);d.length;)d.shift()();return r.push.apply(r,c||[]),a()}function a(){for(var e,t=0;t<r.length;t++){for(var a=r[t],n=!0,i=1;i<a.length;i++){var u=a[i];0!==l[u]&&(n=!1)}n&&(r.splice(t--,1),e=o(o.s=a[0]))}return e}var n={},l={0:0},r=[];function o(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=e,o.c=n,o.d=function(e,t,a){o.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:a})},o.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="";var i=window.webpackJsonp=window.webpackJsonp||[],u=i.push.bind(i);i.push=t,i=i.slice();for(var c=0;c<i.length;c++)t(i[c]);var s=u;r.push([18,1]),a()}([,,,function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,l=a(13),r=(n=l)&&n.__esModule?n:{default:n};t.default=(0,r.default)()},,,,,,,function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,l=a(0),r=(n=l)&&n.__esModule?n:{default:n};t.default=function(e){return r.default.createElement("section",{id:"works-page"})}},function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,l=a(0),r=(n=l)&&n.__esModule?n:{default:n};t.default=function(e){return r.default.createElement("section",{id:"contact-page"})}},function(e,t,a){"use strict";var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};Object.defineProperty(t,"__esModule",{value:!0});var l=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),r=a(0),o=u(r),i=u(a(3));function u(e){return e&&e.__esModule?e:{default:e}}function c(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==(void 0===t?"undefined":n(t))&&"function"!=typeof t?e:t}var s=function(e){function t(){var e,a,n;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var l=arguments.length,r=Array(l),i=0;i<l;i++)r[i]=arguments[i];return a=n=c(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(r))),n.aboutReveal=function(e){return{origin:e,duration:1300,delay:100,distance:"200px",scale:1,easing:"ease",opacity:0}},n.createSkills=function(){for(var e=[],t=0;t<7;t++){var a=[],n=["HTML & CSS","SASS","Javascript","React","Node.js","Webpack","Gulp"],l=[];a.push(o.default.createElement("div",{className:"skill-item",key:t},o.default.createElement("div",{className:"skill-img"},o.default.createElement("img",{alt:n[t],src:"/assets/img/skills/"+t+".png.gz"})),o.default.createElement("div",{className:"skill-info"},o.default.createElement("div",{className:"skill-name"},n[t]),o.default.createElement("br",null),o.default.createElement("div",{className:"skill-description"},["Standard Markup Language | Cascading Style Sheets","CSS Extension Language","High-level Programming Language ","JavaScript Library ","JavaScript Web Server","JavaScript Module Bundler","JavaScript Toolkit"][t])))),l.push(o.default.createElement("div",{className:"bar",key:t},o.default.createElement("div",{className:"bar-inside",style:{width:[80,65,69,67,70,79,60][t]+"%"}}))),e.push(o.default.createElement("div",{className:"skill",key:t},a,l))}return e},c(n,a)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+(void 0===t?"undefined":n(t)));e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,r.Component),l(t,[{key:"componentDidMount",value:function(){i.default.reveal(".about-me-side",this.aboutReveal("top")),i.default.reveal(".service-side",this.aboutReveal("left")),i.default.reveal(".skills-side",this.aboutReveal("right")),i.default.reveal(".skill",{duration:1500},300),i.default.reveal(".service",{duration:1500},300),i.default.reveal(".port",{duration:3e3},300)}},{key:"render",value:function(){return o.default.createElement("section",{className:"section-page",id:"about-page"},o.default.createElement("div",{className:"about-me-side item"},o.default.createElement("h1",null,"About Me"),o.default.createElement("hr",null),o.default.createElement("div",{className:"about-info"},o.default.createElement("h2",null,"I'm a front end developer based in the heart of ",o.default.createElement("br",null),o.default.createElement("span",null,"New York City"),"."),o.default.createElement("p",null,"Hello, my name is Alex Ortiz. I'm in love with the concept of thoughts being turned into a reality. Whether it'd be a website design, or a photo, turning these storms of thought into a functional form makes me smile like nothing else."))),o.default.createElement("div",{className:"service-side item"},o.default.createElement("h1",null,"Services"),o.default.createElement("hr",null),o.default.createElement("div",{className:"service-grid"},o.default.createElement("div",{className:"service"},o.default.createElement("div",{className:"service-head"},o.default.createElement("span",null,"RESPONSIVE")," CODE"),o.default.createElement("div",{className:"login-icon"},o.default.createElement("i",{className:"fa fa-expand","aria-hidden":"true"})),o.default.createElement("p",null,"I bring compatibility across all devices, big or small, mobile or full desktop using the latest grid systems.")),o.default.createElement("div",{className:"service"},o.default.createElement("div",{className:"service-head"},o.default.createElement("span",null,"FRONT-END")," DEVELOPMENT"),o.default.createElement("div",{className:"login-icon"},o.default.createElement("i",{className:"fa fa-laptop","aria-hidden":"true"})),o.default.createElement("p",null,"I build next-generation web products using best-in practice technologies & frameworks.")),o.default.createElement("div",{className:"service"},o.default.createElement("div",{className:"service-head"},o.default.createElement("span",null,"UI/UX")," DESIGN"),o.default.createElement("div",{className:"login-icon"},o.default.createElement("i",{className:"fa fa-magic","aria-hidden":"true"})),o.default.createElement("p",null,"I love shaping your product from research to interaction to pixels, thus defining how easy a product is to use.")))),o.default.createElement("div",{className:"skills-side item"},o.default.createElement("h1",null,"Skills"),o.default.createElement("hr",null)," ",this.createSkills(),o.default.createElement("div",{className:"skill"},o.default.createElement("p",null,"Other skills include...",o.default.createElement("img",{alt:"Jquery",src:"/assets/img/skills/7.png.gz"}),o.default.createElement("img",{alt:"Photoshop",src:"/assets/img/skills/8.png.gz"}),o.default.createElement("img",{alt:"Lightroom",src:"/assets/img/skills/9.png.gz"})))))}}]),t}();t.default=s},,function(e,t,a){"use strict";var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};Object.defineProperty(t,"__esModule",{value:!0});var l=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),r=a(0),o=u(r),i=u(a(3));function u(e){return e&&e.__esModule?e:{default:e}}var c=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==(void 0===t?"undefined":n(t))&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+(void 0===t?"undefined":n(t)));e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,r.Component),l(t,[{key:"componentDidMount",value:function(){i.default.reveal(".portrait",{origin:"top",duration:1250,delay:250,distance:"200px",scale:1,easing:"ease",opacity:0}),i.default.reveal(".name",{origin:"top",duration:1e3,delay:150,distance:"200px",scale:1,easing:"ease",opacity:0}),i.default.reveal(".text",{origin:"bottom",duration:1e3,delay:150,distance:"200px",scale:1,easing:"ease",opacity:0})}},{key:"render",value:function(){return o.default.createElement("section",{className:"section-page",id:"home-page"},o.default.createElement("div",{className:"home-container"},o.default.createElement("div",{className:"portrait"},o.default.createElement("img",{src:"/assets/img/portrait.jpg.gz",alt:"Highschool Prom"})),o.default.createElement("div",{className:"name"},"Alex Ortiz"),o.default.createElement("div",{className:"text"},"I’m a ",o.default.createElement("span",null,"frontend developer"),", ",o.default.createElement("span",null,"photographer"),", and a ",o.default.createElement("span",null,"passionate learner")," that strives to maximize their capacity and capability of productive and functional code."),o.default.createElement("div",{className:"pageSwitcher"},o.default.createElement("a",{href:"#about-page"},o.default.createElement("div",{className:"switcher-particle"},o.default.createElement("span",null))))))}}]),t}();t.default=c},function(e,t,a){"use strict";var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};Object.defineProperty(t,"__esModule",{value:!0});var l=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),r=a(0),o=d(r),i=d(a(14)),u=d(a(12)),c=d(a(11)),s=d(a(10)),f=d(a(1));function d(e){return e&&e.__esModule?e:{default:e}}var m=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==(void 0===t?"undefined":n(t))&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+(void 0===t?"undefined":n(t)));e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,r.Component),l(t,[{key:"componentDidMount",value:function(){var e=(0,f.default)("html, body");(0,f.default)('a[href^="#"]').click(function(){var t=f.default.attr(this,"href");return e.animate({scrollTop:(0,f.default)(t).offset().top},500,function(){window.location.hash=t}),!1})}},{key:"render",value:function(){return o.default.createElement("div",{className:"main"},o.default.createElement(i.default,null),o.default.createElement(u.default,null),o.default.createElement(s.default,null),o.default.createElement(c.default,null))}}]),t}();t.default=m},function(e,t,a){"use strict";var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};Object.defineProperty(t,"__esModule",{value:!0});var l=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),r=a(0),o=u(r),i=u(a(1));function u(e){return e&&e.__esModule?e:{default:e}}var c=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==(void 0===t?"undefined":n(t))&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+(void 0===t?"undefined":n(t)));e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,r.Component),l(t,[{key:"componentDidMount",value:function(){(0,i.default)(window).scroll(function(){(0,i.default)(window).scrollTop()>=100?(0,i.default)(".header").addClass("blackheader"):(0,i.default)(".header").removeClass("blackheader")}),(0,i.default)(window).on("load resize scroll click",function(){var e=(0,i.default)("#about-page").offset().top,t=(0,i.default)(window).scrollTop();(0,i.default)(window).width()<1055||t>e/2?(0,i.default)(".header").addClass("smallheader"):(0,i.default)(".header").removeClass("smallheader")}),(0,i.default)(".mobile-a").on("click",function(){(0,i.default)("#mobile").prop("checked",!1)})}},{key:"render",value:function(){return o.default.createElement("header",{className:"header"},o.default.createElement("div",{className:"logo"},o.default.createElement("a",{href:"#home-page"},o.default.createElement("img",{alt:"logo",id:"logo",src:"/assets/img/logo.png.gz"}))),o.default.createElement("div",{className:"menu"},o.default.createElement("a",{href:"#home-page",id:"home"},"Home"),o.default.createElement("a",{href:"#about-page",id:"about"},"About"),o.default.createElement("a",{href:"#works-page",id:"works"},"Works"),o.default.createElement("a",{href:"#contact-page",id:"contacts"},"Contact")),o.default.createElement("div",{className:"social"},o.default.createElement("input",{id:"mobile",type:"checkbox"}),o.default.createElement("label",{htmlFor:"mobile"},o.default.createElement("span",null),o.default.createElement("span",null),o.default.createElement("span",null)),o.default.createElement("nav",null,o.default.createElement("ul",null,o.default.createElement("li",null,o.default.createElement("a",{className:"mobile-a",href:"#home-page"},"Home")),o.default.createElement("li",null,o.default.createElement("a",{className:"mobile-a",href:"#about-page"},"About")),o.default.createElement("li",null,o.default.createElement("a",{className:"mobile-a",href:"#works-page"},"Works")),o.default.createElement("li",null,o.default.createElement("a",{className:"mobile-a",href:"#contact-page"},"Contact")))),o.default.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://github.com/aleodev",id:"github"},o.default.createElement("img",{alt:"github",id:"socialmedia",src:"/assets/img/social/github.png.gz"})),o.default.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://twitter.com/Alexodev_",id:"twitter"},o.default.createElement("img",{alt:"twitter",id:"socialmedia",src:"/assets/img/social/twitter.png.gz"})),o.default.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://instagram.com/",id:"instagram"},o.default.createElement("img",{alt:"instagram",id:"socialmedia",src:"/assets/img/social/instagram.png.gz"}))))}}]),t}();t.default=c},function(e,t,a){"use strict";var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};Object.defineProperty(t,"__esModule",{value:!0});var l=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),r=a(0),o=s(r),i=s(a(16)),u=s(a(15)),c=s(a(1));function s(e){return e&&e.__esModule?e:{default:e}}var f=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==(void 0===t?"undefined":n(t))&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+(void 0===t?"undefined":n(t)));e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,r.Component),l(t,[{key:"componentDidMount",value:function(){(0,c.default)("#site").delay(100).animate({opacity:1},700),(0,c.default)(".header").delay(200).animate({opacity:1},700)}},{key:"render",value:function(){return o.default.createElement("div",{id:"site"},o.default.createElement(i.default,null),o.default.createElement("div",{className:"wrapper"},o.default.createElement(u.default,null)))}}]),t}();t.default=f},function(e,t,a){"use strict";var n=o(a(0)),l=o(a(4)),r=o(a(17));function o(e){return e&&e.__esModule?e:{default:e}}l.default.render(n.default.createElement(r.default,null),document.getElementById("root"))}]);