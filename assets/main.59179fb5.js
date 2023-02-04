var ne=Object.defineProperty,re=Object.defineProperties;var oe=Object.getOwnPropertyDescriptors;var O=Object.getOwnPropertySymbols;var se=Object.prototype.hasOwnProperty,ie=Object.prototype.propertyIsEnumerable;var j=(t,e,n)=>e in t?ne(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,q=(t,e)=>{for(var n in e||(e={}))se.call(e,n)&&j(t,n,e[n]);if(O)for(var n of O(e))ie.call(e,n)&&j(t,n,e[n]);return t},N=(t,e)=>re(t,oe(e));class L{constructor(e){this.properties=e!=null?e:[]}get(e){const n=this.properties.filter(r=>r.name===e).map(r=>r.value);if(n.length>1)throw new Error('Expected only one property to be named "'+e+'"');if(n.length!==0)return n[0]}getString(e){return this.getByType(e,"string")}getNumber(e){return this.getByType(e,"number")}getBoolean(e){return this.getByType(e,"boolean")}getByType(e,n){const r=this.get(e);if(r!==void 0){if(typeof r!==n)throw new Error('Expected property "'+e+'" to have type "'+n+'"');return r}}mustGetString(e){return this.mustGetByType(e,"string")}mustGetNumber(e){return this.mustGetByType(e,"number")}mustGetBoolean(e){return this.mustGetByType(e,"boolean")}mustGetByType(e,n){const r=this.get(e);if(r===void 0)throw new Error('Property "'+e+'" is missing');if(typeof r!==n)throw new Error('Expected property "'+e+'" to have type "'+n+'"');return r}getType(e){const n=this.properties.filter(r=>r.name===e).map(r=>r.type);if(n.length>1)throw new Error('Expected only one property to be named "'+e+'"');if(n.length!==0)return n[0]}}const k="https://unpkg.com/@workadventure/scripting-api-extra@1.3.2/dist";class ae{constructor(e){this.name=e.name,this.x=e.x,this.y=e.y,this.properties=new L(e.properties)}get isReadable(){const e=this.properties.getString("readableBy");return e?WA.player.tags.includes(e):!0}get isWritable(){const e=this.properties.getString("writableBy");return e?WA.player.tags.includes(e):!0}}function K(t){const e=t?"#"+t.join():"";WA.nav.openCoWebSite(k+"/configuration.html"+e)}async function ue(t,e){const n=await WA.room.getTiledMap(),r=new Map;return F(n.layers,r,t,e),r}function F(t,e,n,r){for(const o of t)if(o.type==="objectgroup"){for(const s of o.objects)if(s.type==="variable"){if(!!n&&o.name!==n||!!r&&!r.includes(s.name))continue;e.set(s.name,new ae(s))}}else o.type==="group"&&F(o.layers,e,n,r)}let G;async function x(){return G===void 0&&(G=le()),G}async function le(){return ce(await WA.room.getTiledMap())}function ce(t){const e=new Map;return J(t.layers,"",e),e}function J(t,e,n){for(const r of t)r.type==="group"?J(r.layers,e+r.name+"/",n):(r.name=e+r.name,n.set(r.name,r))}function pe(t){let e=1/0,n=1/0,r=0,o=0;const s=t.data;if(typeof s=="string")throw new Error("Unsupported tile layer data stored as string instead of CSV");for(let i=0;i<t.height;i++)for(let u=0;u<t.width;u++)s[u+i*t.width]!==0&&(e=Math.min(e,u),o=Math.max(o,u),n=Math.min(n,i),r=Math.max(r,i));return{top:n,left:e,right:o+1,bottom:r+1}}function Q(t){let e=1/0,n=1/0,r=0,o=0;for(const s of t){const i=pe(s);i.left<e&&(e=i.left),i.top<n&&(n=i.top),i.right>o&&(o=i.right),i.bottom>r&&(r=i.bottom)}return{top:n,left:e,right:o,bottom:r}}/*!
 * mustache.js - Logic-less {{mustache}} templates with JavaScript
 * http://github.com/janl/mustache.js
 */var fe=Object.prototype.toString,C=Array.isArray||function(e){return fe.call(e)==="[object Array]"};function U(t){return typeof t=="function"}function he(t){return C(t)?"array":typeof t}function I(t){return t.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&")}function Z(t,e){return t!=null&&typeof t=="object"&&e in t}function de(t,e){return t!=null&&typeof t!="object"&&t.hasOwnProperty&&t.hasOwnProperty(e)}var ge=RegExp.prototype.test;function ye(t,e){return ge.call(t,e)}var me=/\S/;function we(t){return!ye(me,t)}var ve={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;","`":"&#x60;","=":"&#x3D;"};function be(t){return String(t).replace(/[&<>"'`=\/]/g,function(n){return ve[n]})}var Ae=/\s*/,We=/\s+/,$=/\s*=/,Se=/\s*\}/,Ce=/#|\^|\/|>|\{|&|=|!/;function Be(t,e){if(!t)return[];var n=!1,r=[],o=[],s=[],i=!1,u=!1,a="",c=0;function h(){if(i&&!u)for(;s.length;)delete o[s.pop()];else s=[];i=!1,u=!1}var g,m,f;function A(b){if(typeof b=="string"&&(b=b.split(We,2)),!C(b)||b.length!==2)throw new Error("Invalid tags: "+b);g=new RegExp(I(b[0])+"\\s*"),m=new RegExp("\\s*"+I(b[1])),f=new RegExp("\\s*"+I("}"+b[1]))}A(e||w.tags);for(var l=new E(t),p,d,v,B,M,W;!l.eos();){if(p=l.pos,v=l.scanUntil(g),v)for(var R=0,te=v.length;R<te;++R)B=v.charAt(R),we(B)?(s.push(o.length),a+=B):(u=!0,n=!0,a+=" "),o.push(["text",B,p,p+1]),p+=1,B===`
`&&(h(),a="",c=0,n=!1);if(!l.scan(g))break;if(i=!0,d=l.scan(Ce)||"name",l.scan(Ae),d==="="?(v=l.scanUntil($),l.scan($),l.scanUntil(m)):d==="{"?(v=l.scanUntil(f),l.scan(Se),l.scanUntil(m),d="&"):v=l.scanUntil(m),!l.scan(m))throw new Error("Unclosed tag at "+l.pos);if(d==">"?M=[d,v,p,l.pos,a,c,n]:M=[d,v,p,l.pos],c++,o.push(M),d==="#"||d==="^")r.push(M);else if(d==="/"){if(W=r.pop(),!W)throw new Error('Unopened section "'+v+'" at '+p);if(W[1]!==v)throw new Error('Unclosed section "'+W[1]+'" at '+p)}else d==="name"||d==="{"||d==="&"?u=!0:d==="="&&A(v)}if(h(),W=r.pop(),W)throw new Error('Unclosed section "'+W[1]+'" at '+l.pos);return Pe(Le(o))}function Le(t){for(var e=[],n,r,o=0,s=t.length;o<s;++o)n=t[o],n&&(n[0]==="text"&&r&&r[0]==="text"?(r[1]+=n[1],r[3]=n[3]):(e.push(n),r=n));return e}function Pe(t){for(var e=[],n=e,r=[],o,s,i=0,u=t.length;i<u;++i)switch(o=t[i],o[0]){case"#":case"^":n.push(o),r.push(o),n=o[4]=[];break;case"/":s=r.pop(),s[5]=o[2],n=r.length>0?r[r.length-1][4]:e;break;default:n.push(o)}return e}function E(t){this.string=t,this.tail=t,this.pos=0}E.prototype.eos=function(){return this.tail===""};E.prototype.scan=function(e){var n=this.tail.match(e);if(!n||n.index!==0)return"";var r=n[0];return this.tail=this.tail.substring(r.length),this.pos+=r.length,r};E.prototype.scanUntil=function(e){var n=this.tail.search(e),r;switch(n){case-1:r=this.tail,this.tail="";break;case 0:r="";break;default:r=this.tail.substring(0,n),this.tail=this.tail.substring(n)}return this.pos+=r.length,r};function S(t,e){this.view=t,this.cache={".":this.view},this.parent=e}S.prototype.push=function(e){return new S(e,this)};S.prototype.lookup=function(e){var n=this.cache,r;if(n.hasOwnProperty(e))r=n[e];else{for(var o=this,s,i,u,a=!1;o;){if(e.indexOf(".")>0)for(s=o.view,i=e.split("."),u=0;s!=null&&u<i.length;)u===i.length-1&&(a=Z(s,i[u])||de(s,i[u])),s=s[i[u++]];else s=o.view[e],a=Z(o.view,e);if(a){r=s;break}o=o.parent}n[e]=r}return U(r)&&(r=r.call(this.view)),r};function y(){this.templateCache={_cache:{},set:function(e,n){this._cache[e]=n},get:function(e){return this._cache[e]},clear:function(){this._cache={}}}}y.prototype.clearCache=function(){typeof this.templateCache!="undefined"&&this.templateCache.clear()};y.prototype.parse=function(e,n){var r=this.templateCache,o=e+":"+(n||w.tags).join(":"),s=typeof r!="undefined",i=s?r.get(o):void 0;return i==null&&(i=Be(e,n),s&&r.set(o,i)),i};y.prototype.render=function(e,n,r,o){var s=this.getConfigTags(o),i=this.parse(e,s),u=n instanceof S?n:new S(n,void 0);return this.renderTokens(i,u,r,e,o)};y.prototype.renderTokens=function(e,n,r,o,s){for(var i="",u,a,c,h=0,g=e.length;h<g;++h)c=void 0,u=e[h],a=u[0],a==="#"?c=this.renderSection(u,n,r,o,s):a==="^"?c=this.renderInverted(u,n,r,o,s):a===">"?c=this.renderPartial(u,n,r,s):a==="&"?c=this.unescapedValue(u,n):a==="name"?c=this.escapedValue(u,n,s):a==="text"&&(c=this.rawValue(u)),c!==void 0&&(i+=c);return i};y.prototype.renderSection=function(e,n,r,o,s){var i=this,u="",a=n.lookup(e[1]);function c(m){return i.render(m,n,r,s)}if(!!a){if(C(a))for(var h=0,g=a.length;h<g;++h)u+=this.renderTokens(e[4],n.push(a[h]),r,o,s);else if(typeof a=="object"||typeof a=="string"||typeof a=="number")u+=this.renderTokens(e[4],n.push(a),r,o,s);else if(U(a)){if(typeof o!="string")throw new Error("Cannot use higher-order sections without the original template");a=a.call(n.view,o.slice(e[3],e[5]),c),a!=null&&(u+=a)}else u+=this.renderTokens(e[4],n,r,o,s);return u}};y.prototype.renderInverted=function(e,n,r,o,s){var i=n.lookup(e[1]);if(!i||C(i)&&i.length===0)return this.renderTokens(e[4],n,r,o,s)};y.prototype.indentPartial=function(e,n,r){for(var o=n.replace(/[^ \t]/g,""),s=e.split(`
`),i=0;i<s.length;i++)s[i].length&&(i>0||!r)&&(s[i]=o+s[i]);return s.join(`
`)};y.prototype.renderPartial=function(e,n,r,o){if(!!r){var s=this.getConfigTags(o),i=U(r)?r(e[1]):r[e[1]];if(i!=null){var u=e[6],a=e[5],c=e[4],h=i;a==0&&c&&(h=this.indentPartial(i,c,u));var g=this.parse(h,s);return this.renderTokens(g,n,r,h,o)}}};y.prototype.unescapedValue=function(e,n){var r=n.lookup(e[1]);if(r!=null)return r};y.prototype.escapedValue=function(e,n,r){var o=this.getConfigEscape(r)||w.escape,s=n.lookup(e[1]);if(s!=null)return typeof s=="number"&&o===w.escape?String(s):o(s)};y.prototype.rawValue=function(e){return e[1]};y.prototype.getConfigTags=function(e){return C(e)?e:e&&typeof e=="object"?e.tags:void 0};y.prototype.getConfigEscape=function(e){if(e&&typeof e=="object"&&!C(e))return e.escape};var w={name:"mustache.js",version:"4.2.0",tags:["{{","}}"],clearCache:void 0,escape:void 0,parse:void 0,render:void 0,Scanner:void 0,Context:void 0,Writer:void 0,set templateCache(t){P.templateCache=t},get templateCache(){return P.templateCache}},P=new y;w.clearCache=function(){return P.clearCache()};w.parse=function(e,n){return P.parse(e,n)};w.render=function(e,n,r,o){if(typeof e!="string")throw new TypeError('Invalid template! Template should be a "string" but "'+he(e)+'" was given as the first argument for mustache#render(template, view, partials)');return P.render(e,n,r,o)};w.escape=be;w.Scanner=E;w.Context=S;w.Writer=y;class Ee{constructor(e,n){this.template=e,this.state=n,this.ast=w.parse(e)}getValue(){return this.value===void 0&&(this.value=w.render(this.template,this.state)),this.value}onChange(e){const n=[];for(const r of this.getUsedVariables().values())n.push(this.state.onVariableChange(r).subscribe(()=>{const o=w.render(this.template,this.state);o!==this.value&&(this.value=o,e(this.value))}));return{unsubscribe:()=>{for(const r of n)r.unsubscribe()}}}isPureString(){return this.ast.length===0||this.ast.length===1&&this.ast[0][0]==="text"}getUsedVariables(){const e=new Set;return this.recursiveGetUsedVariables(this.ast,e),e}recursiveGetUsedVariables(e,n){for(const r of e){const o=r[0],s=r[1],i=r[4];["name","&","#","^"].includes(o)&&n.add(s),i!==void 0&&typeof i!="string"&&this.recursiveGetUsedVariables(i,n)}}}async function Me(){var t;const e=await x();for(const[n,r]of e.entries()){const o=(t=r.properties)!==null&&t!==void 0?t:[];for(const s of o){if(s.type==="int"||s.type==="bool"||s.type==="object"||typeof s.value!="string")continue;const i=new Ee(s.value,WA.state);if(i.isPureString())continue;const u=i.getValue();H(n,s.name,u),i.onChange(a=>{H(n,s.name,a)})}}}function H(t,e,n){WA.room.setProperty(t,e,n),e==="visible"&&(n?WA.room.showLayer(t):WA.room.hideLayer(t))}let V,_=0,D=0;function X(t){if(WA.state[t.name]){let e=t.properties.mustGetString("openLayer");for(const n of e.split(`
`))WA.room.showLayer(n);e=t.properties.mustGetString("closeLayer");for(const n of e.split(`
`))WA.room.hideLayer(n)}else{let e=t.properties.mustGetString("openLayer");for(const n of e.split(`
`))WA.room.hideLayer(n);e=t.properties.mustGetString("closeLayer");for(const n of e.split(`
`))WA.room.showLayer(n)}}function Te(t){const e=t.properties.getString("openSound"),n=t.properties.getNumber("soundRadius");let r=1;if(n){const o=ee(t.properties.mustGetString("openLayer").split(`
`));if(o>n)return;r=1-o/n}e&&WA.sound.loadSound(e).play({volume:r})}function ke(t){const e=t.properties.getString("closeSound"),n=t.properties.getNumber("soundRadius");let r=1;if(n){const o=ee(t.properties.mustGetString("closeLayer").split(`
`));if(o>n)return;r=1-o/n}e&&WA.sound.loadSound(e).play({volume:r})}function z(t){return t.map(e=>V.get(e)).filter(e=>(e==null?void 0:e.type)==="tilelayer")}function ee(t){const e=z(t),n=Q(e),r=((n.right-n.left)/2+n.left)*32,o=((n.bottom-n.top)/2+n.top)*32;return Math.sqrt(Math.pow(_-r,2)+Math.pow(D-o,2))}function xe(t){WA.state.onVariableChange(t.name).subscribe(()=>{WA.state[t.name]?Te(t):ke(t),X(t)}),X(t)}function Re(t,e,n,r){const o=t.name;let s,i,u=!1;const a=n.getString("tag");let c=!0;a&&!WA.player.tags.includes(a)&&(c=!1);const h=!!a;function g(){var l;s&&s.remove(),s=WA.ui.displayActionMessage({message:(l=n.getString("closeTriggerMessage"))!==null&&l!==void 0?l:"Press SPACE to close the door",callback:()=>{WA.state[e.name]=!1,m()}})}function m(){var l;s&&s.remove(),s=WA.ui.displayActionMessage({message:(l=n.getString("openTriggerMessage"))!==null&&l!==void 0?l:"Press SPACE to open the door",callback:()=>{WA.state[e.name]=!0,g()}})}function f(l){const p=Q(z(e.properties.mustGetString("closeLayer").split(`
`)));i=WA.room.website.create({name:"doorKeypad"+l,url:r+"/keypad.html#"+encodeURIComponent(l),position:{x:p.right*32,y:p.top*32,width:32*3,height:32*4},allowApi:!0})}function A(){i&&(WA.room.website.delete(i.name),i=void 0)}WA.room.onEnterLayer(o).subscribe(()=>{if(u=!0,n.getBoolean("autoOpen")&&c){WA.state[e.name]=!0;return}if(!WA.state[e.name]&&(h&&!c||!h)&&(n.getString("code")||n.getString("codeVariable"))){f(o);return}!c||(WA.state[e.name]?g():m())}),WA.room.onLeaveLayer(o).subscribe(()=>{u=!1,n.getBoolean("autoClose")&&(WA.state[e.name]=!1),s&&s.remove(),A()}),WA.state.onVariableChange(e.name).subscribe(()=>{u&&(!n.getBoolean("autoClose")&&WA.state[e.name]===!0&&g(),i&&WA.state[e.name]===!0&&A(),!n.getBoolean("autoOpen")&&WA.state[e.name]===!1&&m())})}function Ge(t){const e=t.properties.mustGetString("bellSound"),n=t.properties.getNumber("soundRadius");let r=1;if(n){const o=Math.sqrt(Math.pow(t.x-_,2)+Math.pow(t.y-D,2));if(o>n)return;r=1-o/n}WA.sound.loadSound(e).play({volume:r})}function Ie(t){WA.state[t.name]===void 0&&(WA.state[t.name]=0),WA.state.onVariableChange(t.name).subscribe(()=>{WA.state[t.name]&&Ge(t)})}function Ve(t,e,n){let r;const o=e.getString("bellPopup");WA.room.onEnterLayer(n).subscribe(()=>{var s;o?r=WA.ui.openPopup(o,"",[{label:(s=e.getString("bellButtonText"))!==null&&s!==void 0?s:"Ring",callback:()=>{WA.state[t]=WA.state[t]+1}}]):WA.state[t]=WA.state[t]+1}),WA.room.onLeaveLayer(n).subscribe(()=>{r&&(r.close(),r=void 0)})}async function Ue(t){t=t!=null?t:k;const e=await ue();V=await x();for(const n of e.values())n.properties.get("door")&&xe(n),n.properties.get("bell")&&Ie(n);for(const n of V.values()){const r=new L(n.properties),o=r.getString("doorVariable");if(o&&n.type==="tilelayer"){const i=e.get(o);if(i===void 0)throw new Error('Cannot find variable "'+o+'" referred in the "doorVariable" property of layer "'+n.name+'"');Re(n,i,r,t)}const s=r.getString("bellVariable");s&&Ve(s,r,n.name)}WA.player.onPlayerMove(n=>{_=n.x,D=n.y})}function _e(t,e){const n=t.getString("bindVariable");if(n){const r=t.get("enterValue"),o=t.get("leaveValue"),s=t.getString("triggerMessage"),i=t.getString("tag");De(n,e,r,o,s,i)}}function De(t,e,n,r,o,s){s&&!WA.player.tags.includes(s)||(n!==void 0&&WA.room.onEnterLayer(e).subscribe(()=>{o||(WA.state[t]=n)}),r!==void 0&&WA.room.onLeaveLayer(e).subscribe(()=>{WA.state[t]=r}))}async function Oe(){const t=await x();for(const e of t.values()){const n=new L(e.properties);_e(n,e.name)}}let Y;async function je(t){const e=await WA.room.getTiledMap();t=t!=null?t:k,Y=await x();const n=e.layers.find(r=>r.name==="configuration");if(n){const o=new L(n.properties).getString("tag");(!o||WA.player.tags.includes(o))&&WA.ui.registerMenuCommand("Configure the room",()=>{WA.nav.openCoWebSite(t+"/configuration.html",!0)});for(const s of Y.values()){const i=new L(s.properties),u=i.getString("openConfig");u&&s.type==="tilelayer"&&qe(u.split(","),s.name,i)}}}function qe(t,e,n){let r;const o=n.getString("openConfigAdminTag");let s=!0;o&&!WA.player.tags.includes(o)&&(s=!1);function i(){var a;r&&r.remove(),r=WA.ui.displayActionMessage({message:(a=n.getString("openConfigTriggerMessage"))!==null&&a!==void 0?a:"Press SPACE or touch here to configure",callback:()=>K(t)})}function u(){WA.nav.closeCoWebSite()}WA.room.onEnterLayer(e).subscribe(()=>{const a=n.getString("openConfigTrigger");s&&(a&&a==="onaction"?i():K(t))}),WA.room.onLeaveLayer(e).subscribe(()=>{r&&r.remove(),u()})}const Ne=[{lowerBound:0,uppperBound:.5,config:{width:250,height:390,scale:1}},{lowerBound:.5,uppperBound:.8,config:{width:224,height:350,scale:.9}},{lowerBound:.8,uppperBound:1.25,config:{width:132,height:211,scale:.53}},{lowerBound:1.25,uppperBound:2.28,config:{width:64,height:99,scale:.25}},{lowerBound:1.25,config:{width:39,height:63,scale:.16}}],Ke=[{lowerBound:0,uppperBound:1,config:{width:427,height:270,scale:1}},{lowerBound:1,uppperBound:1.9,config:{width:300,height:188,scale:.7}},{lowerBound:1.9,uppperBound:3.5,config:{width:150,height:94,scale:.35}},{lowerBound:3.5,uppperBound:5,config:{width:93,height:58,scale:.21}},{lowerBound:4,config:{width:75,height:46,scale:.17}}];async function Ze(){var t;const e=WA.player.state.tutorialDone,n=/Mobi|Android/i.test(navigator.userAgent),o=await((t=(await WA.room.getTiledMap()).properties)===null||t===void 0?void 0:t.find(i=>i.name==="tutorial")),s=o&&o.value;if(!e&&s){$e(n);let i=await WA.player.getPosition(),u;const a=await WA.room.website.get("tutorial"),c=()=>{const A=i.x+a.x+a.width>u.x+u.width,l=i.x+a.x<u.x,p=i.y+a.y+a.height>u.y+u.height,d=i.y+a.y<u.y;A?a.x=-a.width-1.5*16:l&&(a.x=1.5*16),p?a.y=-a.height:d&&(a.y=16)},h=f=>{a.width=f.width,a.height=f.height,a.scale=f.scale},g=f=>{const l=(n?Ne:Ke).filter(p=>{if(p.lowerBound&&p.uppperBound)return p.lowerBound<f&&f<=p.uppperBound;if(p.lowerBound&&!p.uppperBound)return p.lowerBound<f;if(!p.lowerBound&&p.uppperBound)return f<=p.uppperBound;throw new Error(`Zoom level of: ${f} could not fit in any of the desktopConfig's ranges.`)});h(l[0].config)},m=()=>{if(u===void 0)return;const f=u.zoom;g(f),c()};WA.player.onPlayerMove(f=>{i=f,m()}),WA.camera.onCameraUpdate().subscribe(f=>{u=f,m()}),WA.player.state.tutorialDone=!0}}function $e(t){let e={allow:"",name:"tutorial",url:k+"/tutorial.html",position:{height:224,width:407,x:16,y:-112},visible:!0,allowApi:!0,origin:"player",scale:.9};t&&(e=N(q({},e),{position:{x:32,y:-225,height:390,width:250},scale:1})),WA.room.website.create(e)}function He(){return WA.onInit().then(()=>{Ue().catch(t=>console.error(t)),Oe().catch(t=>console.error(t)),je().catch(t=>console.error(t)),Me().catch(t=>console.error(t)),Ze().catch(t=>console.error(t))}).catch(t=>console.error(t))}console.log("Script started successfully");let T;WA.onInit().then(()=>{console.log("Scripting API ready"),console.log("Player tags: ",WA.player.tags),WA.room.onEnterLayer("clockZone").subscribe(()=>{const t=new Date,e=t.getHours()+":"+t.getMinutes();T=WA.ui.openPopup("clockPopup","It's "+e,[])}),WA.room.onEnterLayer("floor").subscribe(()=>{WA.room.hideLayer("roof"),WA.room.hideLayer("signs"),WA.room.hideLayer("walls-bg-front")}),WA.room.onLeaveLayer("floor").subscribe(()=>{WA.room.showLayer("roof"),WA.room.showLayer("signs"),WA.room.showLayer("walls-bg-front")}),WA.room.onEnterLayer("room_walls_remove").subscribe(()=>{WA.room.hideLayer("facade")}),WA.room.onLeaveLayer("room_walls_remove").subscribe(()=>{WA.room.showLayer("facade")}),WA.room.onLeaveLayer("clockZone").subscribe(Xe),He().then(()=>{console.log("Scripting API Extra ready")}).catch(t=>console.error(t))}).catch(t=>console.error(t));function Xe(){T!==void 0&&(T.close(),T=void 0)}
