(function(t){function e(e){for(var r,o,a=e[0],u=e[1],c=e[2],h=0,l=[];h<a.length;h++)o=a[h],Object.prototype.hasOwnProperty.call(s,o)&&s[o]&&l.push(s[o][0]),s[o]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(t[r]=u[r]);d&&d(e);while(l.length)l.shift()();return n.push.apply(n,c||[]),i()}function i(){for(var t,e=0;e<n.length;e++){for(var i=n[e],r=!0,a=1;a<i.length;a++){var u=i[a];0!==s[u]&&(r=!1)}r&&(n.splice(e--,1),t=o(o.s=i[0]))}return t}var r={},s={app:0},n=[];function o(e){if(r[e])return r[e].exports;var i=r[e]={i:e,l:!1,exports:{}};return t[e].call(i.exports,i,i.exports,o),i.l=!0,i.exports}o.m=t,o.c=r,o.d=function(t,e,i){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(o.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)o.d(i,r,function(e){return t[e]}.bind(null,r));return i},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/web-stories/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],u=a.push.bind(a);a.push=e,a=a.slice();for(var c=0;c<a.length;c++)e(a[c]);var d=u;n.push([0,"chunk-vendors"]),i()})({0:function(t,e,i){t.exports=i("56d7")},"21bb":function(t,e,i){"use strict";i("2dad")},"2dad":function(t,e,i){},"481d":function(t,e,i){"use strict";i("8894")},5337:function(t,e,i){"use strict";i("9344")},"56d7":function(t,e,i){"use strict";i.r(e);i("e260"),i("e6cf"),i("cca6"),i("a79d");var r=i("2b0e"),s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"app"}},[i("router-view")],1)},n=[],o=(i("5c0b"),i("2877")),a={},u=Object(o["a"])(a,s,n,!1,null,null,null),c=u.exports,d=i("8c4f"),h=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"container"},[i("div",{staticClass:"home"},[i("div",{ref:"progress-container",staticClass:"progress-container"},t._l(t.stories,(function(t){return i("div",{key:t.id,staticClass:"progress",class:{active:t.active&&t.gotData,passed:t.passed},style:{"animation-duration":t.duration+"ms"}})})),0),t._l(t.stories,(function(e,r){return i("Story",{directives:[{name:"show",rawName:"v-show",value:t.storyNum===r&&e.gotData,expression:"storyNum === index && story.gotData"}],key:e.id,attrs:{story:e,pause:t.pause},on:{clickDownLeftSide:t.pauseStories,clickUpLeftSide:t.clickLeft,clickDownRightSide:t.pauseStories,clickUpRightSide:t.clickRight,isLoaded:t.imageIsLoaded}})})),t._l(t.stories,(function(e,r){return i("fake-story",{directives:[{name:"show",rawName:"v-show",value:t.storyNum===r&&!e.gotData,expression:"storyNum === index && !story.gotData"}],key:e.id+"-fake",on:{clickDownLeftSide:t.pauseStories,clickUpLeftSide:t.clickLeft,clickDownRightSide:t.pauseStories,clickUpRightSide:t.clickRight}})}))],2)])},l=[],f=i("1da1"),g=(i("96cf"),i("a630"),i("3ca3"),i("d81d"),i("c740"),i("a434"),i("159b"),function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"story"},[i("img",{staticClass:"story-image",style:{"animation-play-state":this.pause?"paused":"running"},attrs:{src:t.story.imageUrl},on:{load:function(e){return t.$emit("isLoaded",t.story.id)}}}),i("div",{staticClass:"left-side",on:{mousedown:function(e){return e.preventDefault(),t.$emit("clickDownLeftSide")},mouseup:function(e){return e.preventDefault(),t.$emit("clickUpLeftSide")},touchstart:function(e){return e.preventDefault(),t.$emit("clickDownLeftSide")},touchend:function(e){return e.preventDefault(),t.$emit("clickUpLeftSide")}}}),i("div",{staticClass:"right-side",on:{mousedown:function(e){return e.preventDefault(),t.$emit("clickDownRightSide")},mouseup:function(e){return e.preventDefault(),t.$emit("clickUpRightSide")},touchstart:function(e){return e.preventDefault(),t.$emit("clickDownRightSide")},touchend:function(e){return e.preventDefault(),t.$emit("clickUpRightSide")}}}),i("div",{staticClass:"story__text"},[t._v(" "+t._s(t.story.text)+" ")])])}),p=[],m={props:{story:Object,pause:Boolean}},y=m,w=(i("5337"),Object(o["a"])(y,g,p,!1,null,"5e295372",null)),b=w.exports,v=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"story"},[i("div",{staticClass:"left-side",on:{mousedown:function(e){return e.preventDefault(),t.$emit("clickDownLeftSide")},mouseup:function(e){return e.preventDefault(),t.$emit("clickUpLeftSide")},touchstart:function(e){return e.preventDefault(),t.$emit("clickDownLeftSide")},touchend:function(e){return e.preventDefault(),t.$emit("clickUpLeftSide")}}}),i("div",{staticClass:"right-side",on:{mousedown:function(e){return e.preventDefault(),t.$emit("clickDownRightSide")},mouseup:function(e){return e.preventDefault(),t.$emit("clickUpRightSide")},touchstart:function(e){return e.preventDefault(),t.$emit("clickDownRightSide")},touchend:function(e){return e.preventDefault(),t.$emit("clickUpRightSide")}}}),i("div",{staticClass:"story__text"},[t._v("Loading...")])])},k=[],x={props:{story:Object,pause:Boolean}},S=x,D=(i("481d"),Object(o["a"])(S,v,k,!1,null,"3c0c1220",null)),j=D.exports,I=(i("d3b7"),i("7db0"),[{id:"84b496feea04306e1bf8ec5ff8e72a60",imageUrl:"https://i.imgur.com/XgJFuRN.jpg",text:"1. Top Things To Do In Ooty",duration:3e3,weight:1},{id:"1cc6936b3c62dfbf138dec9a231d178b",imageUrl:"https://i.imgur.com/Uvo0Rz1.jpg",text:"2. Surrounded by the Nilgiris and stunning lakes and forests, the resort town of Ooty in Tamil Nadu is a popular getaway in South India",duration:4e3,weight:2},{id:"4705c2d04b9ea2a5ce13ef95f529f9f5",imageUrl:"https://i.imgur.com/Z7pPmw3.jpg",text:"3. A fun way to explore this hill station is to hop on a toy train that will take you across the countryside",duration:5e3,weight:3},{id:"727f86e4427f39efcd58ee8e08db05ee",imageUrl:"https://i.imgur.com/fHQjxkO.jpg",text:"4. Once a British Raj summer resort, you can still find Colonial influences in Ooty's many historical buildings such as St. Stephen's Church",duration:3e3,weight:1},{id:"2228d31bf9cf093b8bdd1af6a31abe40",imageUrl:"https://i.imgur.com/yK81VNq.jpg",text:"5. Ooty Lake is a must-visit to enjoy a peaceful boat ride. A major tourist attraction, this artificial lake was constructed in 1824",duration:4e3,weight:2},{id:"2709468982b65ccefca7f8c9b93386fa",imageUrl:"https://i.imgur.com/eyjQqfO.jpg",text:"6. To surround yourself with beauty, head to Ooty's Rose Garden in Vijayanagaram, which is the largest rose garden in India",duration:5e3,weight:3},{id:"7eb2f186e81e3a62f79073922c8f92e5",imageUrl:"https://i.imgur.com/JmDbu3a.jpg",text:"7. If Rose Garden is not enough, then explore the Botanical Garden that houses a wide range of exotic and indigenous plants, shrubs, trees",duration:3e3,weight:1},{id:"8ba13af5525e1f087cb98fe47fe0bcc8",imageUrl:"https://i.imgur.com/WAR0oOy.jpg",text:"8. About 28km away from Ooty town is the stunning Avalanche Lake. Trek around to explore the region and enjoy a picnic by the lake",duration:4e3,weight:2},{id:"4b64ead14354d4d21e8793cc7e6941d0",imageUrl:"https://i.imgur.com/lAZQ7JW.jpg",text:"9. While there are many treats to indulge in, you cannot miss picking a range of delicious hand-made Ooty chocolates",duration:4e3,weight:3},{id:"2f24a80a2110029153151fadbb54f585",imageUrl:"https://i.imgur.com/E8OBfBA.jpg",text:"10. Delhi is home to some of the finest monuments with Islamic architecture like Humayun's Tomb and Qutub Minar",duration:3e3,weight:1},{id:"d139d287966901328fd0e2eec348996b",imageUrl:"https://i.imgur.com/wsBg4T9.jpg",text:"11. Delhi is famous for its street food culture with lip smacking delicacies like aloo tikkis, papdi chaat and many more ",duration:3e3,weight:2},{id:"1217eb1e172df4fefbedd29581696287",imageUrl:"https://i.imgur.com/9gen3pL.jpg",text:"12. Connaught Place is truly the heart of Delhi that still carries old-school charm with famous shops and restaurants around ",duration:4e3,weight:3},{id:"116be6e8523f60ed7c51e56e846df10e",imageUrl:"https://i.imgur.com/vSFWZ4k.jpg",text:"13. Delhi is the perfect example of an urban jungle with a buzzing nightlife that will enthrall you with some foot-tapping music ",duration:5e3,weight:1},{id:"9caaee5aaaff6a014b9c9e8116a15d85",imageUrl:"https://i.imgur.com/s5xDvCJ.jpg",text:"14. The city houses a mix of many sacred spots like the famous Bangla Sahib Gurudwara and Jama Masjid that are worth a visit ",duration:3e3,weight:2},{id:"5bdfce6d231b54499dfced7846de3855",imageUrl:"https://i.imgur.com/zG9lImF.jpg",text:"15. In the midst of a concrete jungle, Delhi is blessed with green hotspots like Lodi Gardens and The Garden Of Five Senses for a nature stroll ",duration:5e3,weight:3}]);function P(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:5,i=1e3*(t+Math.random()*(e-t));return new Promise((function(t){return setTimeout(t,i)}))}function L(t,e){e?console.log("[API-CALL] ".concat(t),e):console.log("[API-CALL] ".concat(t))}function N(){return L("getStoriesMeta"),{length:I.length,idList:I.map((function(t){return t.id})),weightList:I.map((function(t){return t.weight}))}}function O(t){return U.apply(this,arguments)}function U(){return U=Object(f["a"])(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return L("ajaxGetStoryByIdUnstable",{id:e}),t.next=3,P(1,2);case 3:if(!(Math.random()<.5)){t.next=5;break}return t.abrupt("return",!1);case 5:return t.abrupt("return",I.find((function(t){return t.id===e})));case 6:case"end":return t.stop()}}),t)}))),U.apply(this,arguments)}var R={components:{Story:b,FakeStory:j},data:function(){return{weightInfo:{},storiesId:[],stories:[],allProgress:[],currentProgress:{},currentIndex:0,pauseTime:0,storyNum:0,pause:!1}},mounted:function(){var t=this;this.weightInfo=N(),this.getfakeStories(),window.addEventListener("keydown",(function(e){" "!==e.key&&"Spacebar"!==e.key||t.pauseStories()})),window.addEventListener("keyup",(function(e){" "===e.key||"Spacebar"===e.key?t.continueStories():"ArrowLeft"===e.key?(t.stories[t.storyNum].passed=!1,t.stories[t.storyNum].active=!1,t.stories[t.storyNum-1]&&(t.stories[t.storyNum-1].passed=!1),t.currentProgress=0===t.currentIndex?void 0:t.allProgress[t.storyNum-2],t.watchStories()):"ArrowRight"===e.key&&(t.stories[t.storyNum].active=!1,t.stories[t.storyNum].passed=!0,t.currentProgress=t.allProgress[t.storyNum],t.watchStories())})),this.$nextTick((function(){t.allProgress=Array.from(t.$refs["progress-container"].children),t.allProgress.map((function(e){return e.addEventListener("animationend",t.watchStories,!1)})),t.getStory()}))},methods:{getfakeStories:function(){this.storiesId=this.randomStories(6),this.stories=this.storiesId.map((function(t){return{id:t,imageUrl:null,text:"Loading...",duration:3e3,weight:1,active:!1,passed:!1,gotData:!1}}))},getStory:function(){var t=this;return Object(f["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.pauseStories(),e.next=3,t.fetchStory(t.currentIndex);case 3:t.continueStories();case 4:case"end":return e.stop()}}),e)})))()},fetchStory:function(t){var e=this;return Object(f["a"])(regeneratorRuntime.mark((function i(){var r,s,n,o,a,u;return regeneratorRuntime.wrap((function(i){while(1)switch(i.prev=i.next){case 0:if(r=e.storiesId[t],!e.stories[e.stories.findIndex((function(t){return t.id===r}))].gotData){i.next=5;break}i.t0=e.stories[e.stories.findIndex((function(t){return t.id===r}))],i.next=8;break;case 5:return i.next=7,O(r);case 7:i.t0=i.sent;case 8:if(s=i.t0,s){i.next=11;break}return i.abrupt("return",e.fetchStory(t));case 11:e.stories[e.stories.findIndex((function(t){return t.id===r}))].imageUrl=s.imageUrl,e.stories[e.stories.findIndex((function(t){return t.id===r}))].text=s.text,e.stories[e.stories.findIndex((function(t){return t.id===r}))].duration=s.duration,e.stories[e.stories.findIndex((function(t){return t.id===r}))].weight=s.weight,o=function(t){if(!e.stories[e.stories.findIndex((function(i){return i.id===e.storiesId[t]}))].gotData)return n=t,"break";n=!1},a=t;case 17:if(!(a<e.storiesId.length)){i.next=24;break}if(u=o(a),"break"!==u){i.next=21;break}return i.abrupt("break",24);case 21:a++,i.next=17;break;case 24:if(!n){i.next=26;break}return i.abrupt("return",e.fetchStory(n));case 26:case"end":return i.stop()}}),i)})))()},randomStories:function(t){for(var e=this.weightInfo.weightList.reduce((function(t,e){return t+e}),0),i=[],r=0;r<this.weightInfo.idList.length;r++)i.push({weight:this.weightInfo.weightList[r]/e,id:this.weightInfo.idList[r]});for(var s=[],n=0,o=function(t){for(var e=void 0,r=Math.random(),o=0,a=0;a<i.length;a++)if(o+=parseFloat(i[a].weight),o>r*(1-n)){e=i[a].id,n+=i[a].weight;break}i.splice(i.findIndex((function(t){return t.id===e})),1),s.push(e)},a=0;a<t;a++)o(a);return s},pauseStories:function(t){this.pauseTime=(new Date).getTime(),this.pause=!0,this.allProgress.forEach((function(t){t.style["animation-play-state"]="paused"}))},clickRight:function(t){(new Date).getTime()-this.pauseTime<200?(this.stories[this.storyNum].active=!1,this.stories[this.storyNum].passed=!0,this.currentProgress=this.allProgress[this.storyNum]):this.currentProgress=this.allProgress[this.storyNum-1],this.watchStories()},clickLeft:function(t){(new Date).getTime()-this.pauseTime<200?(this.stories[this.storyNum].passed=!1,this.stories[this.storyNum].active=!1,this.stories[this.storyNum-1]&&(this.stories[this.storyNum-1].passed=!1),this.currentProgress=0===this.currentIndex?void 0:this.allProgress[this.storyNum-2]):this.currentProgress=this.allProgress[this.storyNum-1],this.watchStories()},continueStories:function(t){this.currentProgress=this.allProgress[this.storyNum-1],this.watchStories()},watchStories:function(t){this.allProgress.forEach((function(t){t.style["animation-play-state"]="running"})),this.pause=!1,this.currentProgress?(this.currentIndex=this.allProgress.indexOf(this.currentProgress)+1,this.currentIndex<this.allProgress.length?(this.stories[this.currentIndex].gotData||this.getStory(),this.currentProgress=this.allProgress[this.currentIndex],this.storyNum=this.currentIndex,this.stories[this.storyNum-1].active=!1,this.stories[this.storyNum-1].passed=!0,this.stories[this.storyNum].active=!0):this.currentIndex===this.allProgress.length&&(this.stories[this.storyNum].active=!1,this.stories[this.storyNum].passed=!0,this.allProgress.forEach((function(t){t.style["animation-play-state"]="pause"})))):(this.stories[this.currentIndex].gotData||this.getStory(),this.currentProgress=this.allProgress[0],this.storyNum=0,this.stories[0].active=!0)},imageIsLoaded:function(t){this.stories[this.stories.findIndex((function(e){return e.id===t}))].gotData=!0,this.allProgress.forEach((function(t){t.style["animation-play-state"]="running"})),this.pause=!1}}},$=R,_=(i("21bb"),Object(o["a"])($,h,l,!1,null,null,null)),T=_.exports;r["a"].use(d["a"]);var C=[{path:"/",name:"Home",component:T}],A=new d["a"]({routes:C}),E=A,M=i("2f62");r["a"].use(M["a"]);var B=new M["a"].Store({state:{},mutations:{},actions:{},modules:{}});r["a"].config.productionTip=!1,new r["a"]({router:E,store:B,render:function(t){return t(c)}}).$mount("#app")},"5c0b":function(t,e,i){"use strict";i("9c0c")},8894:function(t,e,i){},9344:function(t,e,i){},"9c0c":function(t,e,i){}});
//# sourceMappingURL=app.9b9851d9.js.map