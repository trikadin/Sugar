var k=true,l=null,m=false;function aa(a){return function(){return a}}var p=Object,q=Array,r=RegExp,s=Date,t=String,v=Number,w=Math,ba=typeof global!=="undefined"?global:this,ca=p.defineProperty&&p.defineProperties,x="Array,Boolean,Date,Function,Number,String,RegExp".split(","),da=y(x[0]),ea=y(x[1]),fa=y(x[2]),z=y(x[3]),A=y(x[4]),B=y(x[5]),C=y(x[6]);function y(a){return function(b){return ga(b,a)}}function ga(a,b){return p.prototype.toString.call(a)==="[object "+b+"]"}
function ha(a){if(!a.SugarMethods){ia(a,"SugarMethods",{});D(a,m,m,{restore:function(){var b=arguments.length===0,c=E(arguments);H(a.SugarMethods,function(d,e){if(b||c.indexOf(d)>-1)ia(e.ya?a.prototype:a,d,e.method)})},extend:function(b,c,d){D(a,d!==m,c,b)}})}}function D(a,b,c,d){var e=b?a.prototype:a,g;ha(a);H(d,function(f,i){g=e[f];if(typeof c==="function")i=ja(e[f],i,c);if(c!==m||!e[f])ia(e,f,i);a.SugarMethods[f]={ya:b,method:i,Ga:g}})}
function I(a,b,c,d,e){var g={};d=B(d)?d.split(","):d;d.forEach(function(f,i){e(g,f,i)});D(a,b,c,g)}function ja(a,b,c){return function(){return a&&(c===k||!c.apply(this,arguments))?a.apply(this,arguments):b.apply(this,arguments)}}function ia(a,b,c){if(ca)p.defineProperty(a,b,{value:c,configurable:k,enumerable:m,writable:k});else a[b]=c}function E(a,b){var c=[],d=0;for(d=0;d<a.length;d++){c.push(a[d]);b&&b.call(a,a[d],d)}return c}function J(a){return a!==void 0}function K(a){return a===void 0}
function ka(a){return a&&typeof a==="object"}function la(a){return!!a&&ga(a,"Object")&&t(a.constructor)===t(p)}function ma(a,b){return p.hasOwnProperty.call(a,b)}function H(a,b){for(var c in a)if(ma(a,c))if(b.call(a,c,a[c])===m)break}function na(a,b){H(b,function(c){a[c]=b[c]});return a}function M(a){na(this,a)}M.prototype.constructor=p;function N(a,b,c,d){var e=[];a=parseInt(a);for(var g=d<0;!g&&a<=b||g&&a>=b;){e.push(a);c&&c.call(this,a);a+=d||1}return e}
function O(a,b,c){c=w[c||"round"];var d=w.pow(10,w.abs(b||0));if(b<0)d=1/d;return c(a*d)/d}function P(a,b){return O(a,b,"floor")}function Q(a,b,c,d){d=w.abs(a).toString(d||10);d=oa(b-d.replace(/\.\d+/,"").length,"0")+d;if(c||a<0)d=(a<0?"-":"+")+d;return d}function pa(a){if(a>=11&&a<=13)return"th";else switch(a%10){case 1:return"st";case 2:return"nd";case 3:return"rd";default:return"th"}}
function qa(){return"\t\n\u000b\u000c\r \u00a0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u2028\u2029\u3000\ufeff"}function oa(a,b){return q(w.max(0,J(a)?a:1)+1).join(b||"")}function ra(a,b){var c=a.toString().match(/[^/]*$/)[0];if(b)c=(c+b).split("").sort().join("").replace(/([gimy])\1+/g,"$1");return c}function R(a){B(a)||(a=t(a));return a.replace(/([\\/'*+?|()\[\]{}.^$])/g,"\\$1")}
function S(a,b){var c,d,e,g,f,i,h=typeof a;if(h==="string")return a;d=p.prototype.toString.call(a);c=d==="[object Object]";e=d==="[object Array]";if(a!=l&&c||e){b||(b=[]);if(b.length>1)for(f=b.length;f--;)if(b[f]===a)return"CYC";b.push(a);c=t(a.constructor);g=e?a:p.keys(a).sort();for(f=0;f<g.length;f++){i=e?f:g[f];c+=i+S(a[i],b)}b.pop()}else c=1/a===-Infinity?"-0":t(a&&a.valueOf());return h+d+c}
function sa(a,b,c){var d=[],e=a.length,g=b[b.length-1]!==m,f;E(b,function(i){if(ea(i))return m;if(g){i%=e;if(i<0)i=e+i}f=c?a.charAt(i)||"":a[i];d.push(f)});return d.length<2?d[0]:d}function ta(a,b){I(b,k,m,a,function(c,d){c[d+(d==="equal"?"s":"")]=function(){return p[d].apply(l,[this].concat(E(arguments)))}})}ha(p);H(x,function(a,b){ha(ba[b])});
