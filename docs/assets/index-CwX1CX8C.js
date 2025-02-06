(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const ma="173",fi={ROTATE:0,DOLLY:1,PAN:2},oi={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Bl=1,Vo=1,Hl=2,an=3,Sn=0,Te=1,Ye=2,qn=0,di=1,Fa=2,Oa=3,Ba=4,Vl=5,Un=100,Gl=101,kl=102,Wl=103,Xl=104,Yl=200,Zl=201,Kl=202,jl=203,Er=204,Tr=205,Jl=206,$l=207,Ql=208,t1=209,e1=210,n1=211,i1=212,s1=213,r1=214,br=0,Ar=1,wr=2,vi=3,Rr=4,Cr=5,Pr=6,Lr=7,Go=0,a1=1,o1=2,Mn=0,l1=1,c1=2,h1=3,u1=4,f1=5,d1=6,p1=7,ko=300,qi=301,Mi=302,Dr=303,zr=304,Ns=306,Ur=1e3,Nn=1001,Ir=1002,ke=1003,m1=1004,$i=1005,Ze=1006,ks=1007,Fn=1008,hn=1009,Wo=1010,Xo=1011,Hi=1012,_a=1013,On=1014,on=1015,Wi=1016,xa=1017,ga=1018,Si=1020,Yo=35902,Zo=1021,Ko=1022,Ge=1023,jo=1024,Jo=1025,pi=1026,yi=1027,$o=1028,va=1029,Qo=1030,qa=1031,Ma=1033,Es=33776,Ts=33777,bs=33778,As=33779,Nr=35840,Fr=35841,Or=35842,Br=35843,Hr=36196,Vr=37492,Gr=37496,kr=37808,Wr=37809,Xr=37810,Yr=37811,Zr=37812,Kr=37813,jr=37814,Jr=37815,$r=37816,Qr=37817,ta=37818,ea=37819,na=37820,ia=37821,ws=36492,sa=36494,ra=36495,tl=36283,aa=36284,oa=36285,la=36286,_1=3200,x1=3201,el=0,g1=1,vn="",ze="srgb",Ei="srgb-linear",Ls="linear",Qt="srgb",Xn=7680,Ha=519,v1=512,q1=513,M1=514,nl=515,S1=516,y1=517,E1=518,T1=519,Va=35044,Ga="300 es",ln=2e3,Ds=2001;class kn{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){const n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){const n=this._listeners;if(n===void 0)return;const s=n[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const n=e[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}}const xe=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Rs=Math.PI/180,ca=180/Math.PI;function wi(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(xe[i&255]+xe[i>>8&255]+xe[i>>16&255]+xe[i>>24&255]+"-"+xe[t&255]+xe[t>>8&255]+"-"+xe[t>>16&15|64]+xe[t>>24&255]+"-"+xe[e&63|128]+xe[e>>8&255]+"-"+xe[e>>16&255]+xe[e>>24&255]+xe[n&255]+xe[n>>8&255]+xe[n>>16&255]+xe[n>>24&255]).toLowerCase()}function Bt(i,t,e){return Math.max(t,Math.min(e,i))}function b1(i,t){return(i%t+t)%t}function Ws(i,t,e){return(1-e)*i+e*t}function Li(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function ye(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const A1={DEG2RAD:Rs};class it{constructor(t=0,e=0){it.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Bt(this.x,t.x,e.x),this.y=Bt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Bt(this.x,t,e),this.y=Bt(this.y,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Bt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Bt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Nt{constructor(t,e,n,s,r,a,o,l,c){Nt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c)}set(t,e,n,s,r,a,o,l,c){const h=this.elements;return h[0]=t,h[1]=s,h[2]=o,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],f=n[7],d=n[2],p=n[5],_=n[8],g=s[0],m=s[3],u=s[6],b=s[1],S=s[4],M=s[7],P=s[2],w=s[5],A=s[8];return r[0]=a*g+o*b+l*P,r[3]=a*m+o*S+l*w,r[6]=a*u+o*M+l*A,r[1]=c*g+h*b+f*P,r[4]=c*m+h*S+f*w,r[7]=c*u+h*M+f*A,r[2]=d*g+p*b+_*P,r[5]=d*m+p*S+_*w,r[8]=d*u+p*M+_*A,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return e*a*h-e*o*c-n*r*h+n*o*l+s*r*c-s*a*l}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],f=h*a-o*c,d=o*l-h*r,p=c*r-a*l,_=e*f+n*d+s*p;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/_;return t[0]=f*g,t[1]=(s*c-h*n)*g,t[2]=(o*n-s*a)*g,t[3]=d*g,t[4]=(h*e-s*l)*g,t[5]=(s*r-o*e)*g,t[6]=p*g,t[7]=(n*l-c*e)*g,t[8]=(a*e-n*r)*g,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-s*c,s*l,-s*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(Xs.makeScale(t,e)),this}rotate(t){return this.premultiply(Xs.makeRotation(-t)),this}translate(t,e){return this.premultiply(Xs.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Xs=new Nt;function il(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function zs(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function w1(){const i=zs("canvas");return i.style.display="block",i}const ka={};function ai(i){i in ka||(ka[i]=!0,console.warn(i))}function R1(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function C1(i){const t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function P1(i){const t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const Wa=new Nt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Xa=new Nt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function L1(){const i={enabled:!0,workingColorSpace:Ei,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===Qt&&(s.r=cn(s.r),s.g=cn(s.g),s.b=cn(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===Qt&&(s.r=mi(s.r),s.g=mi(s.g),s.b=mi(s.b))),s},fromWorkingColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},toWorkingColorSpace:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===vn?Ls:this.spaces[s].transfer},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Ei]:{primaries:t,whitePoint:n,transfer:Ls,toXYZ:Wa,fromXYZ:Xa,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:ze},outputColorSpaceConfig:{drawingBufferColorSpace:ze}},[ze]:{primaries:t,whitePoint:n,transfer:Qt,toXYZ:Wa,fromXYZ:Xa,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:ze}}}),i}const Yt=L1();function cn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function mi(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Yn;class D1{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Yn===void 0&&(Yn=zs("canvas")),Yn.width=t.width,Yn.height=t.height;const n=Yn.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Yn}return e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=zs("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=cn(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(cn(e[n]/255)*255):e[n]=cn(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let z1=0;class sl{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:z1++}),this.uuid=wi(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Ys(s[a].image)):r.push(Ys(s[a]))}else r=Ys(s);n.url=r}return e||(t.images[this.uuid]=n),n}}function Ys(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?D1.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let U1=0;class be extends kn{constructor(t=be.DEFAULT_IMAGE,e=be.DEFAULT_MAPPING,n=Nn,s=Nn,r=Ze,a=Fn,o=Ge,l=hn,c=be.DEFAULT_ANISOTROPY,h=vn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:U1++}),this.uuid=wi(),this.name="",this.source=new sl(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new it(0,0),this.repeat=new it(1,1),this.center=new it(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Nt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==ko)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Ur:t.x=t.x-Math.floor(t.x);break;case Nn:t.x=t.x<0?0:1;break;case Ir:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Ur:t.y=t.y-Math.floor(t.y);break;case Nn:t.y=t.y<0?0:1;break;case Ir:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}be.DEFAULT_IMAGE=null;be.DEFAULT_MAPPING=ko;be.DEFAULT_ANISOTROPY=1;class ae{constructor(t=0,e=0,n=0,s=1){ae.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r;const l=t.elements,c=l[0],h=l[4],f=l[8],d=l[1],p=l[5],_=l[9],g=l[2],m=l[6],u=l[10];if(Math.abs(h-d)<.01&&Math.abs(f-g)<.01&&Math.abs(_-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(f+g)<.1&&Math.abs(_+m)<.1&&Math.abs(c+p+u-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const S=(c+1)/2,M=(p+1)/2,P=(u+1)/2,w=(h+d)/4,A=(f+g)/4,C=(_+m)/4;return S>M&&S>P?S<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(S),s=w/n,r=A/n):M>P?M<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(M),n=w/s,r=C/s):P<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(P),n=A/r,s=C/r),this.set(n,s,r,e),this}let b=Math.sqrt((m-_)*(m-_)+(f-g)*(f-g)+(d-h)*(d-h));return Math.abs(b)<.001&&(b=1),this.x=(m-_)/b,this.y=(f-g)/b,this.z=(d-h)/b,this.w=Math.acos((c+p+u-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Bt(this.x,t.x,e.x),this.y=Bt(this.y,t.y,e.y),this.z=Bt(this.z,t.z,e.z),this.w=Bt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Bt(this.x,t,e),this.y=Bt(this.y,t,e),this.z=Bt(this.z,t,e),this.w=Bt(this.w,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Bt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class I1 extends kn{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new ae(0,0,t,e),this.scissorTest=!1,this.viewport=new ae(0,0,t,e);const s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ze,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new be(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const e=Object.assign({},t.texture.image);return this.texture.source=new sl(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Bn extends I1{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class rl extends be{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=ke,this.minFilter=ke,this.wrapR=Nn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class N1 extends be{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=ke,this.minFilter=ke,this.wrapR=Nn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Hn{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let l=n[s+0],c=n[s+1],h=n[s+2],f=n[s+3];const d=r[a+0],p=r[a+1],_=r[a+2],g=r[a+3];if(o===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=f;return}if(o===1){t[e+0]=d,t[e+1]=p,t[e+2]=_,t[e+3]=g;return}if(f!==g||l!==d||c!==p||h!==_){let m=1-o;const u=l*d+c*p+h*_+f*g,b=u>=0?1:-1,S=1-u*u;if(S>Number.EPSILON){const P=Math.sqrt(S),w=Math.atan2(P,u*b);m=Math.sin(m*w)/P,o=Math.sin(o*w)/P}const M=o*b;if(l=l*m+d*M,c=c*m+p*M,h=h*m+_*M,f=f*m+g*M,m===1-o){const P=1/Math.sqrt(l*l+c*c+h*h+f*f);l*=P,c*=P,h*=P,f*=P}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=f}static multiplyQuaternionsFlat(t,e,n,s,r,a){const o=n[s],l=n[s+1],c=n[s+2],h=n[s+3],f=r[a],d=r[a+1],p=r[a+2],_=r[a+3];return t[e]=o*_+h*f+l*p-c*d,t[e+1]=l*_+h*d+c*f-o*p,t[e+2]=c*_+h*p+o*d-l*f,t[e+3]=h*_-o*f-l*d-c*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(s/2),f=o(r/2),d=l(n/2),p=l(s/2),_=l(r/2);switch(a){case"XYZ":this._x=d*h*f+c*p*_,this._y=c*p*f-d*h*_,this._z=c*h*_+d*p*f,this._w=c*h*f-d*p*_;break;case"YXZ":this._x=d*h*f+c*p*_,this._y=c*p*f-d*h*_,this._z=c*h*_-d*p*f,this._w=c*h*f+d*p*_;break;case"ZXY":this._x=d*h*f-c*p*_,this._y=c*p*f+d*h*_,this._z=c*h*_+d*p*f,this._w=c*h*f-d*p*_;break;case"ZYX":this._x=d*h*f-c*p*_,this._y=c*p*f+d*h*_,this._z=c*h*_-d*p*f,this._w=c*h*f+d*p*_;break;case"YZX":this._x=d*h*f+c*p*_,this._y=c*p*f+d*h*_,this._z=c*h*_-d*p*f,this._w=c*h*f-d*p*_;break;case"XZY":this._x=d*h*f-c*p*_,this._y=c*p*f-d*h*_,this._z=c*h*_+d*p*f,this._w=c*h*f+d*p*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],h=e[6],f=e[10],d=n+o+f;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(h-l)*p,this._y=(r-c)*p,this._z=(a-s)*p}else if(n>o&&n>f){const p=2*Math.sqrt(1+n-o-f);this._w=(h-l)/p,this._x=.25*p,this._y=(s+a)/p,this._z=(r+c)/p}else if(o>f){const p=2*Math.sqrt(1+o-n-f);this._w=(r-c)/p,this._x=(s+a)/p,this._y=.25*p,this._z=(l+h)/p}else{const p=2*Math.sqrt(1+f-n-o);this._w=(a-s)/p,this._x=(r+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Bt(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-s*o,this._w=a*h-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,s=this._y,r=this._z,a=this._w;let o=a*t._w+n*t._x+s*t._y+r*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;const l=1-o*o;if(l<=Number.EPSILON){const p=1-e;return this._w=p*a+e*this._w,this._x=p*n+e*this._x,this._y=p*s+e*this._y,this._z=p*r+e*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,o),f=Math.sin((1-e)*h)/c,d=Math.sin(e*h)/c;return this._w=a*f+this._w*d,this._x=n*f+this._x*d,this._y=s*f+this._y*d,this._z=r*f+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class z{constructor(t=0,e=0,n=0){z.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Ya.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Ya.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*s-o*n),h=2*(o*e-r*s),f=2*(r*n-a*e);return this.x=e+l*c+a*f-o*h,this.y=n+l*h+o*c-r*f,this.z=s+l*f+r*h-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Bt(this.x,t.x,e.x),this.y=Bt(this.y,t.y,e.y),this.z=Bt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Bt(this.x,t,e),this.y=Bt(this.y,t,e),this.z=Bt(this.z,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Bt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Zs.copy(this).projectOnVector(t),this.sub(Zs)}reflect(t){return this.sub(Zs.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Bt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Zs=new z,Ya=new Hn;class En{constructor(t=new z(1/0,1/0,1/0),e=new z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Oe.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Oe.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=Oe.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,Oe):Oe.fromBufferAttribute(r,a),Oe.applyMatrix4(t.matrixWorld),this.expandByPoint(Oe);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Qi.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Qi.copy(n.boundingBox)),Qi.applyMatrix4(t.matrixWorld),this.union(Qi)}const s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Oe),Oe.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Di),ts.subVectors(this.max,Di),Zn.subVectors(t.a,Di),Kn.subVectors(t.b,Di),jn.subVectors(t.c,Di),fn.subVectors(Kn,Zn),dn.subVectors(jn,Kn),wn.subVectors(Zn,jn);let e=[0,-fn.z,fn.y,0,-dn.z,dn.y,0,-wn.z,wn.y,fn.z,0,-fn.x,dn.z,0,-dn.x,wn.z,0,-wn.x,-fn.y,fn.x,0,-dn.y,dn.x,0,-wn.y,wn.x,0];return!Ks(e,Zn,Kn,jn,ts)||(e=[1,0,0,0,1,0,0,0,1],!Ks(e,Zn,Kn,jn,ts))?!1:(es.crossVectors(fn,dn),e=[es.x,es.y,es.z],Ks(e,Zn,Kn,jn,ts))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Oe).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Oe).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Qe[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Qe[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Qe[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Qe[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Qe[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Qe[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Qe[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Qe[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Qe),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Qe=[new z,new z,new z,new z,new z,new z,new z,new z],Oe=new z,Qi=new En,Zn=new z,Kn=new z,jn=new z,fn=new z,dn=new z,wn=new z,Di=new z,ts=new z,es=new z,Rn=new z;function Ks(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){Rn.fromArray(i,r);const o=s.x*Math.abs(Rn.x)+s.y*Math.abs(Rn.y)+s.z*Math.abs(Rn.z),l=t.dot(Rn),c=e.dot(Rn),h=n.dot(Rn);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const F1=new En,zi=new z,js=new z;class Sa{constructor(t=new z,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):F1.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;zi.subVectors(t,this.center);const e=zi.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(zi,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(js.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(zi.copy(t.center).add(js)),this.expandByPoint(zi.copy(t.center).sub(js))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const tn=new z,Js=new z,ns=new z,pn=new z,$s=new z,is=new z,Qs=new z;class al{constructor(t=new z,e=new z(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,tn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=tn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(tn.copy(this.origin).addScaledVector(this.direction,e),tn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Js.copy(t).add(e).multiplyScalar(.5),ns.copy(e).sub(t).normalize(),pn.copy(this.origin).sub(Js);const r=t.distanceTo(e)*.5,a=-this.direction.dot(ns),o=pn.dot(this.direction),l=-pn.dot(ns),c=pn.lengthSq(),h=Math.abs(1-a*a);let f,d,p,_;if(h>0)if(f=a*l-o,d=a*o-l,_=r*h,f>=0)if(d>=-_)if(d<=_){const g=1/h;f*=g,d*=g,p=f*(f+a*d+2*o)+d*(a*f+d+2*l)+c}else d=r,f=Math.max(0,-(a*d+o)),p=-f*f+d*(d+2*l)+c;else d=-r,f=Math.max(0,-(a*d+o)),p=-f*f+d*(d+2*l)+c;else d<=-_?(f=Math.max(0,-(-a*r+o)),d=f>0?-r:Math.min(Math.max(-r,-l),r),p=-f*f+d*(d+2*l)+c):d<=_?(f=0,d=Math.min(Math.max(-r,-l),r),p=d*(d+2*l)+c):(f=Math.max(0,-(a*r+o)),d=f>0?r:Math.min(Math.max(-r,-l),r),p=-f*f+d*(d+2*l)+c);else d=a>0?-r:r,f=Math.max(0,-(a*d+o)),p=-f*f+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(Js).addScaledVector(ns,d),p}intersectSphere(t,e){tn.subVectors(t.center,this.origin);const n=tn.dot(this.direction),s=tn.dot(tn)-n*n,r=t.radius*t.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,l;const c=1/this.direction.x,h=1/this.direction.y,f=1/this.direction.z,d=this.origin;return c>=0?(n=(t.min.x-d.x)*c,s=(t.max.x-d.x)*c):(n=(t.max.x-d.x)*c,s=(t.min.x-d.x)*c),h>=0?(r=(t.min.y-d.y)*h,a=(t.max.y-d.y)*h):(r=(t.max.y-d.y)*h,a=(t.min.y-d.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),f>=0?(o=(t.min.z-d.z)*f,l=(t.max.z-d.z)*f):(o=(t.max.z-d.z)*f,l=(t.min.z-d.z)*f),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,tn)!==null}intersectTriangle(t,e,n,s,r){$s.subVectors(e,t),is.subVectors(n,t),Qs.crossVectors($s,is);let a=this.direction.dot(Qs),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;pn.subVectors(this.origin,t);const l=o*this.direction.dot(is.crossVectors(pn,is));if(l<0)return null;const c=o*this.direction.dot($s.cross(pn));if(c<0||l+c>a)return null;const h=-o*pn.dot(Qs);return h<0?null:this.at(h/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class oe{constructor(t,e,n,s,r,a,o,l,c,h,f,d,p,_,g,m){oe.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c,h,f,d,p,_,g,m)}set(t,e,n,s,r,a,o,l,c,h,f,d,p,_,g,m){const u=this.elements;return u[0]=t,u[4]=e,u[8]=n,u[12]=s,u[1]=r,u[5]=a,u[9]=o,u[13]=l,u[2]=c,u[6]=h,u[10]=f,u[14]=d,u[3]=p,u[7]=_,u[11]=g,u[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new oe().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,s=1/Jn.setFromMatrixColumn(t,0).length(),r=1/Jn.setFromMatrixColumn(t,1).length(),a=1/Jn.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),f=Math.sin(r);if(t.order==="XYZ"){const d=a*h,p=a*f,_=o*h,g=o*f;e[0]=l*h,e[4]=-l*f,e[8]=c,e[1]=p+_*c,e[5]=d-g*c,e[9]=-o*l,e[2]=g-d*c,e[6]=_+p*c,e[10]=a*l}else if(t.order==="YXZ"){const d=l*h,p=l*f,_=c*h,g=c*f;e[0]=d+g*o,e[4]=_*o-p,e[8]=a*c,e[1]=a*f,e[5]=a*h,e[9]=-o,e[2]=p*o-_,e[6]=g+d*o,e[10]=a*l}else if(t.order==="ZXY"){const d=l*h,p=l*f,_=c*h,g=c*f;e[0]=d-g*o,e[4]=-a*f,e[8]=_+p*o,e[1]=p+_*o,e[5]=a*h,e[9]=g-d*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){const d=a*h,p=a*f,_=o*h,g=o*f;e[0]=l*h,e[4]=_*c-p,e[8]=d*c+g,e[1]=l*f,e[5]=g*c+d,e[9]=p*c-_,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){const d=a*l,p=a*c,_=o*l,g=o*c;e[0]=l*h,e[4]=g-d*f,e[8]=_*f+p,e[1]=f,e[5]=a*h,e[9]=-o*h,e[2]=-c*h,e[6]=p*f+_,e[10]=d-g*f}else if(t.order==="XZY"){const d=a*l,p=a*c,_=o*l,g=o*c;e[0]=l*h,e[4]=-f,e[8]=c*h,e[1]=d*f+g,e[5]=a*h,e[9]=p*f-_,e[2]=_*f-p,e[6]=o*h,e[10]=g*f+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(O1,t,B1)}lookAt(t,e,n){const s=this.elements;return we.subVectors(t,e),we.lengthSq()===0&&(we.z=1),we.normalize(),mn.crossVectors(n,we),mn.lengthSq()===0&&(Math.abs(n.z)===1?we.x+=1e-4:we.z+=1e-4,we.normalize(),mn.crossVectors(n,we)),mn.normalize(),ss.crossVectors(we,mn),s[0]=mn.x,s[4]=ss.x,s[8]=we.x,s[1]=mn.y,s[5]=ss.y,s[9]=we.y,s[2]=mn.z,s[6]=ss.z,s[10]=we.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],f=n[5],d=n[9],p=n[13],_=n[2],g=n[6],m=n[10],u=n[14],b=n[3],S=n[7],M=n[11],P=n[15],w=s[0],A=s[4],C=s[8],E=s[12],q=s[1],R=s[5],X=s[9],O=s[13],Y=s[2],Z=s[6],V=s[10],j=s[14],B=s[3],ot=s[7],mt=s[11],St=s[15];return r[0]=a*w+o*q+l*Y+c*B,r[4]=a*A+o*R+l*Z+c*ot,r[8]=a*C+o*X+l*V+c*mt,r[12]=a*E+o*O+l*j+c*St,r[1]=h*w+f*q+d*Y+p*B,r[5]=h*A+f*R+d*Z+p*ot,r[9]=h*C+f*X+d*V+p*mt,r[13]=h*E+f*O+d*j+p*St,r[2]=_*w+g*q+m*Y+u*B,r[6]=_*A+g*R+m*Z+u*ot,r[10]=_*C+g*X+m*V+u*mt,r[14]=_*E+g*O+m*j+u*St,r[3]=b*w+S*q+M*Y+P*B,r[7]=b*A+S*R+M*Z+P*ot,r[11]=b*C+S*X+M*V+P*mt,r[15]=b*E+S*O+M*j+P*St,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],h=t[2],f=t[6],d=t[10],p=t[14],_=t[3],g=t[7],m=t[11],u=t[15];return _*(+r*l*f-s*c*f-r*o*d+n*c*d+s*o*p-n*l*p)+g*(+e*l*p-e*c*d+r*a*d-s*a*p+s*c*h-r*l*h)+m*(+e*c*f-e*o*p-r*a*f+n*a*p+r*o*h-n*c*h)+u*(-s*o*h-e*l*f+e*o*d+s*a*f-n*a*d+n*l*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],f=t[9],d=t[10],p=t[11],_=t[12],g=t[13],m=t[14],u=t[15],b=f*m*c-g*d*c+g*l*p-o*m*p-f*l*u+o*d*u,S=_*d*c-h*m*c-_*l*p+a*m*p+h*l*u-a*d*u,M=h*g*c-_*f*c+_*o*p-a*g*p-h*o*u+a*f*u,P=_*f*l-h*g*l-_*o*d+a*g*d+h*o*m-a*f*m,w=e*b+n*S+s*M+r*P;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/w;return t[0]=b*A,t[1]=(g*d*r-f*m*r-g*s*p+n*m*p+f*s*u-n*d*u)*A,t[2]=(o*m*r-g*l*r+g*s*c-n*m*c-o*s*u+n*l*u)*A,t[3]=(f*l*r-o*d*r-f*s*c+n*d*c+o*s*p-n*l*p)*A,t[4]=S*A,t[5]=(h*m*r-_*d*r+_*s*p-e*m*p-h*s*u+e*d*u)*A,t[6]=(_*l*r-a*m*r-_*s*c+e*m*c+a*s*u-e*l*u)*A,t[7]=(a*d*r-h*l*r+h*s*c-e*d*c-a*s*p+e*l*p)*A,t[8]=M*A,t[9]=(_*f*r-h*g*r-_*n*p+e*g*p+h*n*u-e*f*u)*A,t[10]=(a*g*r-_*o*r+_*n*c-e*g*c-a*n*u+e*o*u)*A,t[11]=(h*o*r-a*f*r-h*n*c+e*f*c+a*n*p-e*o*p)*A,t[12]=P*A,t[13]=(h*g*s-_*f*s+_*n*d-e*g*d-h*n*m+e*f*m)*A,t[14]=(_*o*s-a*g*s-_*n*l+e*g*l+a*n*m-e*o*m)*A,t[15]=(a*f*s-h*o*s+h*n*l-e*f*l-a*n*d+e*o*d)*A,this}scale(t){const e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,l=t.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+n,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,h=a+a,f=o+o,d=r*c,p=r*h,_=r*f,g=a*h,m=a*f,u=o*f,b=l*c,S=l*h,M=l*f,P=n.x,w=n.y,A=n.z;return s[0]=(1-(g+u))*P,s[1]=(p+M)*P,s[2]=(_-S)*P,s[3]=0,s[4]=(p-M)*w,s[5]=(1-(d+u))*w,s[6]=(m+b)*w,s[7]=0,s[8]=(_+S)*A,s[9]=(m-b)*A,s[10]=(1-(d+g))*A,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;let r=Jn.set(s[0],s[1],s[2]).length();const a=Jn.set(s[4],s[5],s[6]).length(),o=Jn.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],Be.copy(this);const c=1/r,h=1/a,f=1/o;return Be.elements[0]*=c,Be.elements[1]*=c,Be.elements[2]*=c,Be.elements[4]*=h,Be.elements[5]*=h,Be.elements[6]*=h,Be.elements[8]*=f,Be.elements[9]*=f,Be.elements[10]*=f,e.setFromRotationMatrix(Be),n.x=r,n.y=a,n.z=o,this}makePerspective(t,e,n,s,r,a,o=ln){const l=this.elements,c=2*r/(e-t),h=2*r/(n-s),f=(e+t)/(e-t),d=(n+s)/(n-s);let p,_;if(o===ln)p=-(a+r)/(a-r),_=-2*a*r/(a-r);else if(o===Ds)p=-a/(a-r),_=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=ln){const l=this.elements,c=1/(e-t),h=1/(n-s),f=1/(a-r),d=(e+t)*c,p=(n+s)*h;let _,g;if(o===ln)_=(a+r)*f,g=-2*f;else if(o===Ds)_=r*f,g=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=g,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Jn=new z,Be=new oe,O1=new z(0,0,0),B1=new z(1,1,1),mn=new z,ss=new z,we=new z,Za=new oe,Ka=new Hn;class je{constructor(t=0,e=0,n=0,s=je.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],f=s[2],d=s[6],p=s[10];switch(e){case"XYZ":this._y=Math.asin(Bt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Bt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(Bt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Bt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Bt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-Bt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Za.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Za,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Ka.setFromEuler(this),this.setFromQuaternion(Ka,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}je.DEFAULT_ORDER="XYZ";class ol{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let H1=0;const ja=new z,$n=new Hn,en=new oe,rs=new z,Ui=new z,V1=new z,G1=new Hn,Ja=new z(1,0,0),$a=new z(0,1,0),Qa=new z(0,0,1),to={type:"added"},k1={type:"removed"},Qn={type:"childadded",child:null},tr={type:"childremoved",child:null};class Me extends kn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:H1++}),this.uuid=wi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Me.DEFAULT_UP.clone();const t=new z,e=new je,n=new Hn,s=new z(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new oe},normalMatrix:{value:new Nt}}),this.matrix=new oe,this.matrixWorld=new oe,this.matrixAutoUpdate=Me.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Me.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ol,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return $n.setFromAxisAngle(t,e),this.quaternion.multiply($n),this}rotateOnWorldAxis(t,e){return $n.setFromAxisAngle(t,e),this.quaternion.premultiply($n),this}rotateX(t){return this.rotateOnAxis(Ja,t)}rotateY(t){return this.rotateOnAxis($a,t)}rotateZ(t){return this.rotateOnAxis(Qa,t)}translateOnAxis(t,e){return ja.copy(t).applyQuaternion(this.quaternion),this.position.add(ja.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Ja,t)}translateY(t){return this.translateOnAxis($a,t)}translateZ(t){return this.translateOnAxis(Qa,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(en.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?rs.copy(t):rs.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),Ui.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?en.lookAt(Ui,rs,this.up):en.lookAt(rs,Ui,this.up),this.quaternion.setFromRotationMatrix(en),s&&(en.extractRotation(s.matrixWorld),$n.setFromRotationMatrix(en),this.quaternion.premultiply($n.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(to),Qn.child=t,this.dispatchEvent(Qn),Qn.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(k1),tr.child=t,this.dispatchEvent(tr),tr.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),en.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),en.multiply(t.parent.matrixWorld)),t.applyMatrix4(en),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(to),Qn.child=t,this.dispatchEvent(Qn),Qn.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ui,t,V1),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ui,G1,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const f=l[c];r(t.shapes,f)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];s.animations.push(r(t.animations,l))}}if(e){const o=a(t.geometries),l=a(t.materials),c=a(t.textures),h=a(t.images),f=a(t.shapes),d=a(t.skeletons),p=a(t.animations),_=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),f.length>0&&(n.shapes=f),d.length>0&&(n.skeletons=d),p.length>0&&(n.animations=p),_.length>0&&(n.nodes=_)}return n.object=s,n;function a(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}}Me.DEFAULT_UP=new z(0,1,0);Me.DEFAULT_MATRIX_AUTO_UPDATE=!0;Me.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const He=new z,nn=new z,er=new z,sn=new z,ti=new z,ei=new z,eo=new z,nr=new z,ir=new z,sr=new z,rr=new ae,ar=new ae,or=new ae;class Ve{constructor(t=new z,e=new z,n=new z){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),He.subVectors(t,e),s.cross(He);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){He.subVectors(s,e),nn.subVectors(n,e),er.subVectors(t,e);const a=He.dot(He),o=He.dot(nn),l=He.dot(er),c=nn.dot(nn),h=nn.dot(er),f=a*c-o*o;if(f===0)return r.set(0,0,0),null;const d=1/f,p=(c*l-o*h)*d,_=(a*h-o*l)*d;return r.set(1-p-_,_,p)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,sn)===null?!1:sn.x>=0&&sn.y>=0&&sn.x+sn.y<=1}static getInterpolation(t,e,n,s,r,a,o,l){return this.getBarycoord(t,e,n,s,sn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,sn.x),l.addScaledVector(a,sn.y),l.addScaledVector(o,sn.z),l)}static getInterpolatedAttribute(t,e,n,s,r,a){return rr.setScalar(0),ar.setScalar(0),or.setScalar(0),rr.fromBufferAttribute(t,e),ar.fromBufferAttribute(t,n),or.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(rr,r.x),a.addScaledVector(ar,r.y),a.addScaledVector(or,r.z),a}static isFrontFacing(t,e,n,s){return He.subVectors(n,e),nn.subVectors(t,e),He.cross(nn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return He.subVectors(this.c,this.b),nn.subVectors(this.a,this.b),He.cross(nn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Ve.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Ve.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return Ve.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return Ve.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Ve.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,r=this.c;let a,o;ti.subVectors(s,n),ei.subVectors(r,n),nr.subVectors(t,n);const l=ti.dot(nr),c=ei.dot(nr);if(l<=0&&c<=0)return e.copy(n);ir.subVectors(t,s);const h=ti.dot(ir),f=ei.dot(ir);if(h>=0&&f<=h)return e.copy(s);const d=l*f-h*c;if(d<=0&&l>=0&&h<=0)return a=l/(l-h),e.copy(n).addScaledVector(ti,a);sr.subVectors(t,r);const p=ti.dot(sr),_=ei.dot(sr);if(_>=0&&p<=_)return e.copy(r);const g=p*c-l*_;if(g<=0&&c>=0&&_<=0)return o=c/(c-_),e.copy(n).addScaledVector(ei,o);const m=h*_-p*f;if(m<=0&&f-h>=0&&p-_>=0)return eo.subVectors(r,s),o=(f-h)/(f-h+(p-_)),e.copy(s).addScaledVector(eo,o);const u=1/(m+g+d);return a=g*u,o=d*u,e.copy(n).addScaledVector(ti,a).addScaledVector(ei,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const ll={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},_n={h:0,s:0,l:0},as={h:0,s:0,l:0};function lr(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class Wt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=ze){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Yt.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=Yt.workingColorSpace){return this.r=t,this.g=e,this.b=n,Yt.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=Yt.workingColorSpace){if(t=b1(t,1),e=Bt(e,0,1),n=Bt(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=lr(a,r,t+1/3),this.g=lr(a,r,t),this.b=lr(a,r,t-1/3)}return Yt.toWorkingColorSpace(this,s),this}setStyle(t,e=ze){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=ze){const n=ll[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=cn(t.r),this.g=cn(t.g),this.b=cn(t.b),this}copyLinearToSRGB(t){return this.r=mi(t.r),this.g=mi(t.g),this.b=mi(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=ze){return Yt.fromWorkingColorSpace(ge.copy(this),t),Math.round(Bt(ge.r*255,0,255))*65536+Math.round(Bt(ge.g*255,0,255))*256+Math.round(Bt(ge.b*255,0,255))}getHexString(t=ze){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Yt.workingColorSpace){Yt.fromWorkingColorSpace(ge.copy(this),e);const n=ge.r,s=ge.g,r=ge.b,a=Math.max(n,s,r),o=Math.min(n,s,r);let l,c;const h=(o+a)/2;if(o===a)l=0,c=0;else{const f=a-o;switch(c=h<=.5?f/(a+o):f/(2-a-o),a){case n:l=(s-r)/f+(s<r?6:0);break;case s:l=(r-n)/f+2;break;case r:l=(n-s)/f+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=Yt.workingColorSpace){return Yt.fromWorkingColorSpace(ge.copy(this),e),t.r=ge.r,t.g=ge.g,t.b=ge.b,t}getStyle(t=ze){Yt.fromWorkingColorSpace(ge.copy(this),t);const e=ge.r,n=ge.g,s=ge.b;return t!==ze?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(_n),this.setHSL(_n.h+t,_n.s+e,_n.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(_n),t.getHSL(as);const n=Ws(_n.h,as.h,e),s=Ws(_n.s,as.s,e),r=Ws(_n.l,as.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const ge=new Wt;Wt.NAMES=ll;let W1=0;class Xi extends kn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:W1++}),this.uuid=wi(),this.name="",this.type="Material",this.blending=di,this.side=Sn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Er,this.blendDst=Tr,this.blendEquation=Un,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Wt(0,0,0),this.blendAlpha=0,this.depthFunc=vi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ha,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Xn,this.stencilZFail=Xn,this.stencilZPass=Xn,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==di&&(n.blending=this.blending),this.side!==Sn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Er&&(n.blendSrc=this.blendSrc),this.blendDst!==Tr&&(n.blendDst=this.blendDst),this.blendEquation!==Un&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==vi&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ha&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Xn&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Xn&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Xn&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(e){const r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Yi extends Xi{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Wt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new je,this.combine=Go,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const ce=new z,os=new it;let X1=0;class Ke{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:X1++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Va,this.updateRanges=[],this.gpuType=on,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)os.fromBufferAttribute(this,e),os.applyMatrix3(t),this.setXY(e,os.x,os.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)ce.fromBufferAttribute(this,e),ce.applyMatrix3(t),this.setXYZ(e,ce.x,ce.y,ce.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)ce.fromBufferAttribute(this,e),ce.applyMatrix4(t),this.setXYZ(e,ce.x,ce.y,ce.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)ce.fromBufferAttribute(this,e),ce.applyNormalMatrix(t),this.setXYZ(e,ce.x,ce.y,ce.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)ce.fromBufferAttribute(this,e),ce.transformDirection(t),this.setXYZ(e,ce.x,ce.y,ce.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Li(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=ye(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Li(e,this.array)),e}setX(t,e){return this.normalized&&(e=ye(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Li(e,this.array)),e}setY(t,e){return this.normalized&&(e=ye(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Li(e,this.array)),e}setZ(t,e){return this.normalized&&(e=ye(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Li(e,this.array)),e}setW(t,e){return this.normalized&&(e=ye(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=ye(e,this.array),n=ye(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=ye(e,this.array),n=ye(n,this.array),s=ye(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=ye(e,this.array),n=ye(n,this.array),s=ye(s,this.array),r=ye(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Va&&(t.usage=this.usage),t}}class cl extends Ke{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class hl extends Ke{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class Ie extends Ke{constructor(t,e,n){super(new Float32Array(t),e,n)}}let Y1=0;const De=new oe,cr=new Me,ni=new z,Re=new En,Ii=new En,de=new z;class un extends kn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Y1++}),this.uuid=wi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(il(t)?hl:cl)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Nt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return De.makeRotationFromQuaternion(t),this.applyMatrix4(De),this}rotateX(t){return De.makeRotationX(t),this.applyMatrix4(De),this}rotateY(t){return De.makeRotationY(t),this.applyMatrix4(De),this}rotateZ(t){return De.makeRotationZ(t),this.applyMatrix4(De),this}translate(t,e,n){return De.makeTranslation(t,e,n),this.applyMatrix4(De),this}scale(t,e,n){return De.makeScale(t,e,n),this.applyMatrix4(De),this}lookAt(t){return cr.lookAt(t),cr.updateMatrix(),this.applyMatrix4(cr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ni).negate(),this.translate(ni.x,ni.y,ni.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let s=0,r=t.length;s<r;s++){const a=t[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Ie(n,3))}else{const n=Math.min(t.length,e.count);for(let s=0;s<n;s++){const r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new En);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new z(-1/0,-1/0,-1/0),new z(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const r=e[n];Re.setFromBufferAttribute(r),this.morphTargetsRelative?(de.addVectors(this.boundingBox.min,Re.min),this.boundingBox.expandByPoint(de),de.addVectors(this.boundingBox.max,Re.max),this.boundingBox.expandByPoint(de)):(this.boundingBox.expandByPoint(Re.min),this.boundingBox.expandByPoint(Re.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Sa);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new z,1/0);return}if(t){const n=this.boundingSphere.center;if(Re.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){const o=e[r];Ii.setFromBufferAttribute(o),this.morphTargetsRelative?(de.addVectors(Re.min,Ii.min),Re.expandByPoint(de),de.addVectors(Re.max,Ii.max),Re.expandByPoint(de)):(Re.expandByPoint(Ii.min),Re.expandByPoint(Ii.max))}Re.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)de.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(de));if(e)for(let r=0,a=e.length;r<a;r++){const o=e[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)de.fromBufferAttribute(o,c),l&&(ni.fromBufferAttribute(t,c),de.add(ni)),s=Math.max(s,n.distanceToSquared(de))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ke(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let C=0;C<n.count;C++)o[C]=new z,l[C]=new z;const c=new z,h=new z,f=new z,d=new it,p=new it,_=new it,g=new z,m=new z;function u(C,E,q){c.fromBufferAttribute(n,C),h.fromBufferAttribute(n,E),f.fromBufferAttribute(n,q),d.fromBufferAttribute(r,C),p.fromBufferAttribute(r,E),_.fromBufferAttribute(r,q),h.sub(c),f.sub(c),p.sub(d),_.sub(d);const R=1/(p.x*_.y-_.x*p.y);isFinite(R)&&(g.copy(h).multiplyScalar(_.y).addScaledVector(f,-p.y).multiplyScalar(R),m.copy(f).multiplyScalar(p.x).addScaledVector(h,-_.x).multiplyScalar(R),o[C].add(g),o[E].add(g),o[q].add(g),l[C].add(m),l[E].add(m),l[q].add(m))}let b=this.groups;b.length===0&&(b=[{start:0,count:t.count}]);for(let C=0,E=b.length;C<E;++C){const q=b[C],R=q.start,X=q.count;for(let O=R,Y=R+X;O<Y;O+=3)u(t.getX(O+0),t.getX(O+1),t.getX(O+2))}const S=new z,M=new z,P=new z,w=new z;function A(C){P.fromBufferAttribute(s,C),w.copy(P);const E=o[C];S.copy(E),S.sub(P.multiplyScalar(P.dot(E))).normalize(),M.crossVectors(w,E);const R=M.dot(l[C])<0?-1:1;a.setXYZW(C,S.x,S.y,S.z,R)}for(let C=0,E=b.length;C<E;++C){const q=b[C],R=q.start,X=q.count;for(let O=R,Y=R+X;O<Y;O+=3)A(t.getX(O+0)),A(t.getX(O+1)),A(t.getX(O+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Ke(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,p=n.count;d<p;d++)n.setXYZ(d,0,0,0);const s=new z,r=new z,a=new z,o=new z,l=new z,c=new z,h=new z,f=new z;if(t)for(let d=0,p=t.count;d<p;d+=3){const _=t.getX(d+0),g=t.getX(d+1),m=t.getX(d+2);s.fromBufferAttribute(e,_),r.fromBufferAttribute(e,g),a.fromBufferAttribute(e,m),h.subVectors(a,r),f.subVectors(s,r),h.cross(f),o.fromBufferAttribute(n,_),l.fromBufferAttribute(n,g),c.fromBufferAttribute(n,m),o.add(h),l.add(h),c.add(h),n.setXYZ(_,o.x,o.y,o.z),n.setXYZ(g,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,p=e.count;d<p;d+=3)s.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),a.fromBufferAttribute(e,d+2),h.subVectors(a,r),f.subVectors(s,r),h.cross(f),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)de.fromBufferAttribute(t,e),de.normalize(),t.setXYZ(e,de.x,de.y,de.z)}toNonIndexed(){function t(o,l){const c=o.array,h=o.itemSize,f=o.normalized,d=new c.constructor(l.length*h);let p=0,_=0;for(let g=0,m=l.length;g<m;g++){o.isInterleavedBufferAttribute?p=l[g]*o.data.stride+o.offset:p=l[g]*h;for(let u=0;u<h;u++)d[_++]=c[p++]}return new Ke(d,h,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new un,n=this.index.array,s=this.attributes;for(const o in s){const l=s[o],c=t(l,n);e.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let h=0,f=c.length;h<f;h++){const d=c[h],p=t(d,n);l.push(p)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let f=0,d=c.length;f<d;f++){const p=c[f];h.push(p.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const s=t.attributes;for(const c in s){const h=s[c];this.setAttribute(c,h.clone(e))}const r=t.morphAttributes;for(const c in r){const h=[],f=r[c];for(let d=0,p=f.length;d<p;d++)h.push(f[d].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let c=0,h=a.length;c<h;c++){const f=a[c];this.addGroup(f.start,f.count,f.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const no=new oe,Cn=new al,ls=new Sa,io=new z,cs=new z,hs=new z,us=new z,hr=new z,fs=new z,so=new z,ds=new z;class pe extends Me{constructor(t=new un,e=new Yi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const o=this.morphTargetInfluences;if(r&&o){fs.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=o[l],f=r[l];h!==0&&(hr.fromBufferAttribute(f,t),a?fs.addScaledVector(hr,h):fs.addScaledVector(hr.sub(e),h))}e.add(fs)}return e}raycast(t,e){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ls.copy(n.boundingSphere),ls.applyMatrix4(r),Cn.copy(t.ray).recast(t.near),!(ls.containsPoint(Cn.origin)===!1&&(Cn.intersectSphere(ls,io)===null||Cn.origin.distanceToSquared(io)>(t.far-t.near)**2))&&(no.copy(r).invert(),Cn.copy(t.ray).applyMatrix4(no),!(n.boundingBox!==null&&Cn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Cn)))}_computeIntersections(t,e,n){let s;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,f=r.attributes.normal,d=r.groups,p=r.drawRange;if(o!==null)if(Array.isArray(a))for(let _=0,g=d.length;_<g;_++){const m=d[_],u=a[m.materialIndex],b=Math.max(m.start,p.start),S=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let M=b,P=S;M<P;M+=3){const w=o.getX(M),A=o.getX(M+1),C=o.getX(M+2);s=ps(this,u,t,n,c,h,f,w,A,C),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const _=Math.max(0,p.start),g=Math.min(o.count,p.start+p.count);for(let m=_,u=g;m<u;m+=3){const b=o.getX(m),S=o.getX(m+1),M=o.getX(m+2);s=ps(this,a,t,n,c,h,f,b,S,M),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let _=0,g=d.length;_<g;_++){const m=d[_],u=a[m.materialIndex],b=Math.max(m.start,p.start),S=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let M=b,P=S;M<P;M+=3){const w=M,A=M+1,C=M+2;s=ps(this,u,t,n,c,h,f,w,A,C),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const _=Math.max(0,p.start),g=Math.min(l.count,p.start+p.count);for(let m=_,u=g;m<u;m+=3){const b=m,S=m+1,M=m+2;s=ps(this,a,t,n,c,h,f,b,S,M),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}}function Z1(i,t,e,n,s,r,a,o){let l;if(t.side===Te?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,t.side===Sn,o),l===null)return null;ds.copy(o),ds.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(ds);return c<e.near||c>e.far?null:{distance:c,point:ds.clone(),object:i}}function ps(i,t,e,n,s,r,a,o,l,c){i.getVertexPosition(o,cs),i.getVertexPosition(l,hs),i.getVertexPosition(c,us);const h=Z1(i,t,e,n,cs,hs,us,so);if(h){const f=new z;Ve.getBarycoord(so,cs,hs,us,f),s&&(h.uv=Ve.getInterpolatedAttribute(s,o,l,c,f,new it)),r&&(h.uv1=Ve.getInterpolatedAttribute(r,o,l,c,f,new it)),a&&(h.normal=Ve.getInterpolatedAttribute(a,o,l,c,f,new z),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const d={a:o,b:l,c,normal:new z,materialIndex:0};Ve.getNormal(cs,hs,us,d.normal),h.face=d,h.barycoord=f}return h}class Tn extends un{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],h=[],f=[];let d=0,p=0;_("z","y","x",-1,-1,n,e,t,a,r,0),_("z","y","x",1,-1,n,e,-t,a,r,1),_("x","z","y",1,1,t,n,e,s,a,2),_("x","z","y",1,-1,t,n,-e,s,a,3),_("x","y","z",1,-1,t,e,n,s,r,4),_("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new Ie(c,3)),this.setAttribute("normal",new Ie(h,3)),this.setAttribute("uv",new Ie(f,2));function _(g,m,u,b,S,M,P,w,A,C,E){const q=M/A,R=P/C,X=M/2,O=P/2,Y=w/2,Z=A+1,V=C+1;let j=0,B=0;const ot=new z;for(let mt=0;mt<V;mt++){const St=mt*R-O;for(let Ut=0;Ut<Z;Ut++){const Kt=Ut*q-X;ot[g]=Kt*b,ot[m]=St*S,ot[u]=Y,c.push(ot.x,ot.y,ot.z),ot[g]=0,ot[m]=0,ot[u]=w>0?1:-1,h.push(ot.x,ot.y,ot.z),f.push(Ut/A),f.push(1-mt/C),j+=1}}for(let mt=0;mt<C;mt++)for(let St=0;St<A;St++){const Ut=d+St+Z*mt,Kt=d+St+Z*(mt+1),W=d+(St+1)+Z*(mt+1),rt=d+(St+1)+Z*mt;l.push(Ut,Kt,rt),l.push(Kt,W,rt),B+=6}o.addGroup(p,B,E),p+=B,d+=j}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Tn(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Ti(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function qe(i){const t={};for(let e=0;e<i.length;e++){const n=Ti(i[e]);for(const s in n)t[s]=n[s]}return t}function K1(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function ul(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Yt.workingColorSpace}const j1={clone:Ti,merge:qe};var J1=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,$1=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class yn extends Xi{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=J1,this.fragmentShader=$1,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ti(t.uniforms),this.uniformsGroups=K1(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class fl extends Me{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new oe,this.projectionMatrix=new oe,this.projectionMatrixInverse=new oe,this.coordinateSystem=ln}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const xn=new z,ro=new it,ao=new it;class Ue extends fl{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=ca*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Rs*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return ca*2*Math.atan(Math.tan(Rs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){xn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(xn.x,xn.y).multiplyScalar(-t/xn.z),xn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(xn.x,xn.y).multiplyScalar(-t/xn.z)}getViewSize(t,e){return this.getViewBounds(t,ro,ao),e.subVectors(ao,ro)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Rs*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,e-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const ii=-90,si=1;class Q1 extends Me{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Ue(ii,si,t,e);s.layers=this.layers,this.add(s);const r=new Ue(ii,si,t,e);r.layers=this.layers,this.add(r);const a=new Ue(ii,si,t,e);a.layers=this.layers,this.add(a);const o=new Ue(ii,si,t,e);o.layers=this.layers,this.add(o);const l=new Ue(ii,si,t,e);l.layers=this.layers,this.add(l);const c=new Ue(ii,si,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,l]=e;for(const c of e)this.remove(c);if(t===ln)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Ds)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,c,h]=this.children,f=t.getRenderTarget(),d=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),_=t.xr.enabled;t.xr.enabled=!1;const g=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,a),t.setRenderTarget(n,2,s),t.render(e,o),t.setRenderTarget(n,3,s),t.render(e,l),t.setRenderTarget(n,4,s),t.render(e,c),n.texture.generateMipmaps=g,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(f,d,p),t.xr.enabled=_,n.texture.needsPMREMUpdate=!0}}class dl extends be{constructor(t,e,n,s,r,a,o,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:qi,super(t,e,n,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class tc extends Bn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new dl(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Ze}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new Tn(5,5,5),r=new yn({name:"CubemapFromEquirect",uniforms:Ti(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Te,blending:qn});r.uniforms.tEquirect.value=e;const a=new pe(s,r),o=e.minFilter;return e.minFilter===Fn&&(e.minFilter=Ze),new Q1(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,n,s){const r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}}class li extends Me{constructor(){super(),this.isGroup=!0,this.type="Group"}}const ec={type:"move"};class ur{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new li,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new li,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new li,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new z),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(const g of t.hand.values()){const m=e.getJointPose(g,n),u=this._getHandJoint(c,g);m!==null&&(u.matrix.fromArray(m.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=m.radius),u.visible=m!==null}const h=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],d=h.position.distanceTo(f.position),p=.02,_=.005;c.inputState.pinching&&d>p+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=p-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(ec)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new li;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}class nc extends Me{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new je,this.environmentIntensity=1,this.environmentRotation=new je,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}const fr=new z,ic=new z,sc=new Nt;class gn{constructor(t=new z(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=fr.subVectors(n,e).cross(ic.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(fr),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||sc.getNormalMatrix(t),s=this.coplanarPoint(fr).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Pn=new Sa,ms=new z;class pl{constructor(t=new gn,e=new gn,n=new gn,s=new gn,r=new gn,a=new gn){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=ln){const n=this.planes,s=t.elements,r=s[0],a=s[1],o=s[2],l=s[3],c=s[4],h=s[5],f=s[6],d=s[7],p=s[8],_=s[9],g=s[10],m=s[11],u=s[12],b=s[13],S=s[14],M=s[15];if(n[0].setComponents(l-r,d-c,m-p,M-u).normalize(),n[1].setComponents(l+r,d+c,m+p,M+u).normalize(),n[2].setComponents(l+a,d+h,m+_,M+b).normalize(),n[3].setComponents(l-a,d-h,m-_,M-b).normalize(),n[4].setComponents(l-o,d-f,m-g,M-S).normalize(),e===ln)n[5].setComponents(l+o,d+f,m+g,M+S).normalize();else if(e===Ds)n[5].setComponents(o,f,g,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Pn.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Pn.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Pn)}intersectsSprite(t){return Pn.center.set(0,0,0),Pn.radius=.7071067811865476,Pn.applyMatrix4(t.matrixWorld),this.intersectsSphere(Pn)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(ms.x=s.normal.x>0?t.max.x:t.min.x,ms.y=s.normal.y>0?t.max.y:t.min.y,ms.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(ms)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class ml extends be{constructor(t,e,n,s,r,a,o,l,c,h=pi){if(h!==pi&&h!==yi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===pi&&(n=On),n===void 0&&h===yi&&(n=Si),super(null,s,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:ke,this.minFilter=l!==void 0?l:ke,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class Je{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,s=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const n=this.getLengths();let s=0;const r=n.length;let a;e?a=e:a=t*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=n[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===a)return s/(r-1);const h=n[s],d=n[s+1]-h,p=(a-h)/d;return(s+p)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);const a=this.getPoint(s),o=this.getPoint(r),l=e||(a.isVector2?new it:new z);return l.copy(o).sub(a).normalize(),l}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){const n=new z,s=[],r=[],a=[],o=new z,l=new oe;for(let p=0;p<=t;p++){const _=p/t;s[p]=this.getTangentAt(_,new z)}r[0]=new z,a[0]=new z;let c=Number.MAX_VALUE;const h=Math.abs(s[0].x),f=Math.abs(s[0].y),d=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),f<=c&&(c=f,n.set(0,1,0)),d<=c&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let p=1;p<=t;p++){if(r[p]=r[p-1].clone(),a[p]=a[p-1].clone(),o.crossVectors(s[p-1],s[p]),o.length()>Number.EPSILON){o.normalize();const _=Math.acos(Bt(s[p-1].dot(s[p]),-1,1));r[p].applyMatrix4(l.makeRotationAxis(o,_))}a[p].crossVectors(s[p],r[p])}if(e===!0){let p=Math.acos(Bt(r[0].dot(r[t]),-1,1));p/=t,s[0].dot(o.crossVectors(r[0],r[t]))>0&&(p=-p);for(let _=1;_<=t;_++)r[_].applyMatrix4(l.makeRotationAxis(s[_],p*_)),a[_].crossVectors(s[_],r[_])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class ya extends Je{constructor(t=0,e=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(t,e=new it){const n=e,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);const o=this.aStartAngle+t*r;let l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const h=Math.cos(this.aRotation),f=Math.sin(this.aRotation),d=l-this.aX,p=c-this.aY;l=d*h-p*f+this.aX,c=d*f+p*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class rc extends ya{constructor(t,e,n,s,r,a){super(t,e,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}}function Ea(){let i=0,t=0,e=0,n=0;function s(r,a,o,l){i=r,t=o,e=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,h,f){let d=(a-r)/c-(o-r)/(c+h)+(o-a)/h,p=(o-a)/h-(l-a)/(h+f)+(l-o)/f;d*=h,p*=h,s(a,o,d,p)},calc:function(r){const a=r*r,o=a*r;return i+t*r+e*a+n*o}}}const _s=new z,dr=new Ea,pr=new Ea,mr=new Ea;class ac extends Je{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new z){const n=e,s=this.points,r=s.length,a=(r-(this.closed?0:1))*t;let o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,h;this.closed||o>0?c=s[(o-1)%r]:(_s.subVectors(s[0],s[1]).add(s[0]),c=_s);const f=s[o%r],d=s[(o+1)%r];if(this.closed||o+2<r?h=s[(o+2)%r]:(_s.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=_s),this.curveType==="centripetal"||this.curveType==="chordal"){const p=this.curveType==="chordal"?.5:.25;let _=Math.pow(c.distanceToSquared(f),p),g=Math.pow(f.distanceToSquared(d),p),m=Math.pow(d.distanceToSquared(h),p);g<1e-4&&(g=1),_<1e-4&&(_=g),m<1e-4&&(m=g),dr.initNonuniformCatmullRom(c.x,f.x,d.x,h.x,_,g,m),pr.initNonuniformCatmullRom(c.y,f.y,d.y,h.y,_,g,m),mr.initNonuniformCatmullRom(c.z,f.z,d.z,h.z,_,g,m)}else this.curveType==="catmullrom"&&(dr.initCatmullRom(c.x,f.x,d.x,h.x,this.tension),pr.initCatmullRom(c.y,f.y,d.y,h.y,this.tension),mr.initCatmullRom(c.z,f.z,d.z,h.z,this.tension));return n.set(dr.calc(l),pr.calc(l),mr.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new z().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function oo(i,t,e,n,s){const r=(n-t)*.5,a=(s-e)*.5,o=i*i,l=i*o;return(2*e-2*n+r+a)*l+(-3*e+3*n-2*r-a)*o+r*i+e}function oc(i,t){const e=1-i;return e*e*t}function lc(i,t){return 2*(1-i)*i*t}function cc(i,t){return i*i*t}function Oi(i,t,e,n){return oc(i,t)+lc(i,e)+cc(i,n)}function hc(i,t){const e=1-i;return e*e*e*t}function uc(i,t){const e=1-i;return 3*e*e*i*t}function fc(i,t){return 3*(1-i)*i*i*t}function dc(i,t){return i*i*i*t}function Bi(i,t,e,n,s){return hc(i,t)+uc(i,e)+fc(i,n)+dc(i,s)}class _l extends Je{constructor(t=new it,e=new it,n=new it,s=new it){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new it){const n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Bi(t,s.x,r.x,a.x,o.x),Bi(t,s.y,r.y,a.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class pc extends Je{constructor(t=new z,e=new z,n=new z,s=new z){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new z){const n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Bi(t,s.x,r.x,a.x,o.x),Bi(t,s.y,r.y,a.y,o.y),Bi(t,s.z,r.z,a.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class xl extends Je{constructor(t=new it,e=new it){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new it){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new it){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class mc extends Je{constructor(t=new z,e=new z){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new z){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new z){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class gl extends Je{constructor(t=new it,e=new it,n=new it){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new it){const n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(Oi(t,s.x,r.x,a.x),Oi(t,s.y,r.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class _c extends Je{constructor(t=new z,e=new z,n=new z){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new z){const n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(Oi(t,s.x,r.x,a.x),Oi(t,s.y,r.y,a.y),Oi(t,s.z,r.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class vl extends Je{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new it){const n=e,s=this.points,r=(s.length-1)*t,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],c=s[a],h=s[a>s.length-2?s.length-1:a+1],f=s[a>s.length-3?s.length-1:a+2];return n.set(oo(o,l.x,c.x,h.x,f.x),oo(o,l.y,c.y,h.y,f.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new it().fromArray(s))}return this}}var ha=Object.freeze({__proto__:null,ArcCurve:rc,CatmullRomCurve3:ac,CubicBezierCurve:_l,CubicBezierCurve3:pc,EllipseCurve:ya,LineCurve:xl,LineCurve3:mc,QuadraticBezierCurve:gl,QuadraticBezierCurve3:_c,SplineCurve:vl});class xc extends Je{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new ha[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=n){const a=s[r]-n,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,e)}r++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let s=0,r=this.curves;s<r.length;s++){const a=r[s],o=a.isEllipseCurve?t*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,l=a.getPoints(o);for(let c=0;c<l.length;c++){const h=l[c];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(new ha[s.type]().fromJSON(s))}return this}}class Us extends xc{constructor(t){super(),this.type="Path",this.currentPoint=new it,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new xl(this.currentPoint.clone(),new it(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){const r=new gl(this.currentPoint.clone(),new it(t,e),new it(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,a){const o=new _l(this.currentPoint.clone(),new it(t,e),new it(n,s),new it(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new vl(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,a){const o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+o,e+l,n,s,r,a),this}absarc(t,e,n,s,r,a){return this.absellipse(t,e,n,n,s,r,a),this}ellipse(t,e,n,s,r,a,o,l){const c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,n,s,r,a,o,l),this}absellipse(t,e,n,s,r,a,o,l){const c=new ya(t,e,n,s,r,a,o,l);if(this.curves.length>0){const f=c.getPoint(0);f.equals(this.currentPoint)||this.lineTo(f.x,f.y)}this.curves.push(c);const h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class Ta extends un{constructor(t=[new it(0,-.5),new it(.5,0),new it(0,.5)],e=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:s},e=Math.floor(e),s=Bt(s,0,Math.PI*2);const r=[],a=[],o=[],l=[],c=[],h=1/e,f=new z,d=new it,p=new z,_=new z,g=new z;let m=0,u=0;for(let b=0;b<=t.length-1;b++)switch(b){case 0:m=t[b+1].x-t[b].x,u=t[b+1].y-t[b].y,p.x=u*1,p.y=-m,p.z=u*0,g.copy(p),p.normalize(),l.push(p.x,p.y,p.z);break;case t.length-1:l.push(g.x,g.y,g.z);break;default:m=t[b+1].x-t[b].x,u=t[b+1].y-t[b].y,p.x=u*1,p.y=-m,p.z=u*0,_.copy(p),p.x+=g.x,p.y+=g.y,p.z+=g.z,p.normalize(),l.push(p.x,p.y,p.z),g.copy(_)}for(let b=0;b<=e;b++){const S=n+b*h*s,M=Math.sin(S),P=Math.cos(S);for(let w=0;w<=t.length-1;w++){f.x=t[w].x*M,f.y=t[w].y,f.z=t[w].x*P,a.push(f.x,f.y,f.z),d.x=b/e,d.y=w/(t.length-1),o.push(d.x,d.y);const A=l[3*w+0]*M,C=l[3*w+1],E=l[3*w+0]*P;c.push(A,C,E)}}for(let b=0;b<e;b++)for(let S=0;S<t.length-1;S++){const M=S+b*t.length,P=M,w=M+t.length,A=M+t.length+1,C=M+1;r.push(P,w,C),r.push(A,C,w)}this.setIndex(r),this.setAttribute("position",new Ie(a,3)),this.setAttribute("uv",new Ie(o,2)),this.setAttribute("normal",new Ie(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ta(t.points,t.segments,t.phiStart,t.phiLength)}}class Fs extends Ta{constructor(t=1,e=1,n=4,s=8){const r=new Us;r.absarc(0,-e/2,t,Math.PI*1.5,0),r.absarc(0,e/2,t,0,Math.PI*.5),super(r.getPoints(n),s),this.type="CapsuleGeometry",this.parameters={radius:t,length:e,capSegments:n,radialSegments:s}}static fromJSON(t){return new Fs(t.radius,t.length,t.capSegments,t.radialSegments)}}class Cs extends Us{constructor(t){super(t),this.uuid=wi(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(new Us().fromJSON(s))}return this}}const gc={triangulate:function(i,t,e=2){const n=t&&t.length,s=n?t[0]*e:i.length;let r=ql(i,0,s,e,!0);const a=[];if(!r||r.next===r.prev)return a;let o,l,c,h,f,d,p;if(n&&(r=yc(i,t,r,e)),i.length>80*e){o=c=i[0],l=h=i[1];for(let _=e;_<s;_+=e)f=i[_],d=i[_+1],f<o&&(o=f),d<l&&(l=d),f>c&&(c=f),d>h&&(h=d);p=Math.max(c-o,h-l),p=p!==0?32767/p:0}return Vi(r,a,e,o,l,p,0),a}};function ql(i,t,e,n,s){let r,a;if(s===zc(i,t,e,n)>0)for(r=t;r<e;r+=n)a=lo(r,i[r],i[r+1],a);else for(r=e-n;r>=t;r-=n)a=lo(r,i[r],i[r+1],a);return a&&Os(a,a.next)&&(ki(a),a=a.next),a}function Vn(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(Os(e,e.next)||ie(e.prev,e,e.next)===0)){if(ki(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Vi(i,t,e,n,s,r,a){if(!i)return;!a&&r&&wc(i,n,s,r);let o=i,l,c;for(;i.prev!==i.next;){if(l=i.prev,c=i.next,r?qc(i,n,s,r):vc(i)){t.push(l.i/e|0),t.push(i.i/e|0),t.push(c.i/e|0),ki(i),i=c.next,o=c.next;continue}if(i=c,i===o){a?a===1?(i=Mc(Vn(i),t,e),Vi(i,t,e,n,s,r,2)):a===2&&Sc(i,t,e,n,s,r):Vi(Vn(i),t,e,n,s,r,1);break}}}function vc(i){const t=i.prev,e=i,n=i.next;if(ie(t,e,n)>=0)return!1;const s=t.x,r=e.x,a=n.x,o=t.y,l=e.y,c=n.y,h=s<r?s<a?s:a:r<a?r:a,f=o<l?o<c?o:c:l<c?l:c,d=s>r?s>a?s:a:r>a?r:a,p=o>l?o>c?o:c:l>c?l:c;let _=n.next;for(;_!==t;){if(_.x>=h&&_.x<=d&&_.y>=f&&_.y<=p&&ci(s,o,r,l,a,c,_.x,_.y)&&ie(_.prev,_,_.next)>=0)return!1;_=_.next}return!0}function qc(i,t,e,n){const s=i.prev,r=i,a=i.next;if(ie(s,r,a)>=0)return!1;const o=s.x,l=r.x,c=a.x,h=s.y,f=r.y,d=a.y,p=o<l?o<c?o:c:l<c?l:c,_=h<f?h<d?h:d:f<d?f:d,g=o>l?o>c?o:c:l>c?l:c,m=h>f?h>d?h:d:f>d?f:d,u=ua(p,_,t,e,n),b=ua(g,m,t,e,n);let S=i.prevZ,M=i.nextZ;for(;S&&S.z>=u&&M&&M.z<=b;){if(S.x>=p&&S.x<=g&&S.y>=_&&S.y<=m&&S!==s&&S!==a&&ci(o,h,l,f,c,d,S.x,S.y)&&ie(S.prev,S,S.next)>=0||(S=S.prevZ,M.x>=p&&M.x<=g&&M.y>=_&&M.y<=m&&M!==s&&M!==a&&ci(o,h,l,f,c,d,M.x,M.y)&&ie(M.prev,M,M.next)>=0))return!1;M=M.nextZ}for(;S&&S.z>=u;){if(S.x>=p&&S.x<=g&&S.y>=_&&S.y<=m&&S!==s&&S!==a&&ci(o,h,l,f,c,d,S.x,S.y)&&ie(S.prev,S,S.next)>=0)return!1;S=S.prevZ}for(;M&&M.z<=b;){if(M.x>=p&&M.x<=g&&M.y>=_&&M.y<=m&&M!==s&&M!==a&&ci(o,h,l,f,c,d,M.x,M.y)&&ie(M.prev,M,M.next)>=0)return!1;M=M.nextZ}return!0}function Mc(i,t,e){let n=i;do{const s=n.prev,r=n.next.next;!Os(s,r)&&Ml(s,n,n.next,r)&&Gi(s,r)&&Gi(r,s)&&(t.push(s.i/e|0),t.push(n.i/e|0),t.push(r.i/e|0),ki(n),ki(n.next),n=i=r),n=n.next}while(n!==i);return Vn(n)}function Sc(i,t,e,n,s,r){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&Pc(a,o)){let l=Sl(a,o);a=Vn(a,a.next),l=Vn(l,l.next),Vi(a,t,e,n,s,r,0),Vi(l,t,e,n,s,r,0);return}o=o.next}a=a.next}while(a!==i)}function yc(i,t,e,n){const s=[];let r,a,o,l,c;for(r=0,a=t.length;r<a;r++)o=t[r]*n,l=r<a-1?t[r+1]*n:i.length,c=ql(i,o,l,n,!1),c===c.next&&(c.steiner=!0),s.push(Cc(c));for(s.sort(Ec),r=0;r<s.length;r++)e=Tc(s[r],e);return e}function Ec(i,t){return i.x-t.x}function Tc(i,t){const e=bc(i,t);if(!e)return t;const n=Sl(e,i);return Vn(n,n.next),Vn(e,e.next)}function bc(i,t){let e=t,n=-1/0,s;const r=i.x,a=i.y;do{if(a<=e.y&&a>=e.next.y&&e.next.y!==e.y){const d=e.x+(a-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(d<=r&&d>n&&(n=d,s=e.x<e.next.x?e:e.next,d===r))return s}e=e.next}while(e!==t);if(!s)return null;const o=s,l=s.x,c=s.y;let h=1/0,f;e=s;do r>=e.x&&e.x>=l&&r!==e.x&&ci(a<c?r:n,a,l,c,a<c?n:r,a,e.x,e.y)&&(f=Math.abs(a-e.y)/(r-e.x),Gi(e,i)&&(f<h||f===h&&(e.x>s.x||e.x===s.x&&Ac(s,e)))&&(s=e,h=f)),e=e.next;while(e!==o);return s}function Ac(i,t){return ie(i.prev,i,t.prev)<0&&ie(t.next,i,i.next)<0}function wc(i,t,e,n){let s=i;do s.z===0&&(s.z=ua(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,Rc(s)}function Rc(i){let t,e,n,s,r,a,o,l,c=1;do{for(e=i,i=null,r=null,a=0;e;){for(a++,n=e,o=0,t=0;t<c&&(o++,n=n.nextZ,!!n);t++);for(l=c;o>0||l>0&&n;)o!==0&&(l===0||!n||e.z<=n.z)?(s=e,e=e.nextZ,o--):(s=n,n=n.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;e=n}r.nextZ=null,c*=2}while(a>1);return i}function ua(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function Cc(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function ci(i,t,e,n,s,r,a,o){return(s-a)*(t-o)>=(i-a)*(r-o)&&(i-a)*(n-o)>=(e-a)*(t-o)&&(e-a)*(r-o)>=(s-a)*(n-o)}function Pc(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!Lc(i,t)&&(Gi(i,t)&&Gi(t,i)&&Dc(i,t)&&(ie(i.prev,i,t.prev)||ie(i,t.prev,t))||Os(i,t)&&ie(i.prev,i,i.next)>0&&ie(t.prev,t,t.next)>0)}function ie(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function Os(i,t){return i.x===t.x&&i.y===t.y}function Ml(i,t,e,n){const s=gs(ie(i,t,e)),r=gs(ie(i,t,n)),a=gs(ie(e,n,i)),o=gs(ie(e,n,t));return!!(s!==r&&a!==o||s===0&&xs(i,e,t)||r===0&&xs(i,n,t)||a===0&&xs(e,i,n)||o===0&&xs(e,t,n))}function xs(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function gs(i){return i>0?1:i<0?-1:0}function Lc(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&Ml(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function Gi(i,t){return ie(i.prev,i,i.next)<0?ie(i,t,i.next)>=0&&ie(i,i.prev,t)>=0:ie(i,t,i.prev)<0||ie(i,i.next,t)<0}function Dc(i,t){let e=i,n=!1;const s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function Sl(i,t){const e=new fa(i.i,i.x,i.y),n=new fa(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function lo(i,t,e,n){const s=new fa(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function ki(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function fa(i,t,e){this.i=i,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function zc(i,t,e,n){let s=0;for(let r=t,a=e-n;r<e;r+=n)s+=(i[a]-i[r])*(i[r+1]+i[a+1]),a=r;return s}class _i{static area(t){const e=t.length;let n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return _i.area(t)<0}static triangulateShape(t,e){const n=[],s=[],r=[];co(t),ho(n,t);let a=t.length;e.forEach(co);for(let l=0;l<e.length;l++)s.push(a),a+=e[l].length,ho(n,e[l]);const o=gc.triangulate(n,s);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}}function co(i){const t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function ho(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}class ba extends un{constructor(t=new Cs([new it(.5,.5),new it(-.5,.5),new it(-.5,-.5),new it(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const n=this,s=[],r=[];for(let o=0,l=t.length;o<l;o++){const c=t[o];a(c)}this.setAttribute("position",new Ie(s,3)),this.setAttribute("uv",new Ie(r,2)),this.computeVertexNormals();function a(o){const l=[],c=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,f=e.depth!==void 0?e.depth:1;let d=e.bevelEnabled!==void 0?e.bevelEnabled:!0,p=e.bevelThickness!==void 0?e.bevelThickness:.2,_=e.bevelSize!==void 0?e.bevelSize:p-.1,g=e.bevelOffset!==void 0?e.bevelOffset:0,m=e.bevelSegments!==void 0?e.bevelSegments:3;const u=e.extrudePath,b=e.UVGenerator!==void 0?e.UVGenerator:Uc;let S,M=!1,P,w,A,C;u&&(S=u.getSpacedPoints(h),M=!0,d=!1,P=u.computeFrenetFrames(h,!1),w=new z,A=new z,C=new z),d||(m=0,p=0,_=0,g=0);const E=o.extractPoints(c);let q=E.shape;const R=E.holes;if(!_i.isClockWise(q)){q=q.reverse();for(let Q=0,$=R.length;Q<$;Q++){const T=R[Q];_i.isClockWise(T)&&(R[Q]=T.reverse())}}const O=_i.triangulateShape(q,R),Y=q;for(let Q=0,$=R.length;Q<$;Q++){const T=R[Q];q=q.concat(T)}function Z(Q,$,T){return $||console.error("THREE.ExtrudeGeometry: vec does not exist"),Q.clone().addScaledVector($,T)}const V=q.length,j=O.length;function B(Q,$,T){let Tt,tt,xt;const st=Q.x-$.x,Pt=Q.y-$.y,ft=T.x-Q.x,y=T.y-Q.y,x=st*st+Pt*Pt,I=st*y-Pt*ft;if(Math.abs(I)>Number.EPSILON){const G=Math.sqrt(x),J=Math.sqrt(ft*ft+y*y),k=$.x-Pt/G,Et=$.y+st/G,ct=T.x-y/J,_t=T.y+ft/J,Ht=((ct-k)*y-(_t-Et)*ft)/(st*y-Pt*ft);Tt=k+st*Ht-Q.x,tt=Et+Pt*Ht-Q.y;const nt=Tt*Tt+tt*tt;if(nt<=2)return new it(Tt,tt);xt=Math.sqrt(nt/2)}else{let G=!1;st>Number.EPSILON?ft>Number.EPSILON&&(G=!0):st<-Number.EPSILON?ft<-Number.EPSILON&&(G=!0):Math.sign(Pt)===Math.sign(y)&&(G=!0),G?(Tt=-Pt,tt=st,xt=Math.sqrt(x)):(Tt=st,tt=Pt,xt=Math.sqrt(x/2))}return new it(Tt/xt,tt/xt)}const ot=[];for(let Q=0,$=Y.length,T=$-1,Tt=Q+1;Q<$;Q++,T++,Tt++)T===$&&(T=0),Tt===$&&(Tt=0),ot[Q]=B(Y[Q],Y[T],Y[Tt]);const mt=[];let St,Ut=ot.concat();for(let Q=0,$=R.length;Q<$;Q++){const T=R[Q];St=[];for(let Tt=0,tt=T.length,xt=tt-1,st=Tt+1;Tt<tt;Tt++,xt++,st++)xt===tt&&(xt=0),st===tt&&(st=0),St[Tt]=B(T[Tt],T[xt],T[st]);mt.push(St),Ut=Ut.concat(St)}for(let Q=0;Q<m;Q++){const $=Q/m,T=p*Math.cos($*Math.PI/2),Tt=_*Math.sin($*Math.PI/2)+g;for(let tt=0,xt=Y.length;tt<xt;tt++){const st=Z(Y[tt],ot[tt],Tt);at(st.x,st.y,-T)}for(let tt=0,xt=R.length;tt<xt;tt++){const st=R[tt];St=mt[tt];for(let Pt=0,ft=st.length;Pt<ft;Pt++){const y=Z(st[Pt],St[Pt],Tt);at(y.x,y.y,-T)}}}const Kt=_+g;for(let Q=0;Q<V;Q++){const $=d?Z(q[Q],Ut[Q],Kt):q[Q];M?(A.copy(P.normals[0]).multiplyScalar($.x),w.copy(P.binormals[0]).multiplyScalar($.y),C.copy(S[0]).add(A).add(w),at(C.x,C.y,C.z)):at($.x,$.y,0)}for(let Q=1;Q<=h;Q++)for(let $=0;$<V;$++){const T=d?Z(q[$],Ut[$],Kt):q[$];M?(A.copy(P.normals[Q]).multiplyScalar(T.x),w.copy(P.binormals[Q]).multiplyScalar(T.y),C.copy(S[Q]).add(A).add(w),at(C.x,C.y,C.z)):at(T.x,T.y,f/h*Q)}for(let Q=m-1;Q>=0;Q--){const $=Q/m,T=p*Math.cos($*Math.PI/2),Tt=_*Math.sin($*Math.PI/2)+g;for(let tt=0,xt=Y.length;tt<xt;tt++){const st=Z(Y[tt],ot[tt],Tt);at(st.x,st.y,f+T)}for(let tt=0,xt=R.length;tt<xt;tt++){const st=R[tt];St=mt[tt];for(let Pt=0,ft=st.length;Pt<ft;Pt++){const y=Z(st[Pt],St[Pt],Tt);M?at(y.x,y.y+S[h-1].y,S[h-1].x+T):at(y.x,y.y,f+T)}}}W(),rt();function W(){const Q=s.length/3;if(d){let $=0,T=V*$;for(let Tt=0;Tt<j;Tt++){const tt=O[Tt];At(tt[2]+T,tt[1]+T,tt[0]+T)}$=h+m*2,T=V*$;for(let Tt=0;Tt<j;Tt++){const tt=O[Tt];At(tt[0]+T,tt[1]+T,tt[2]+T)}}else{for(let $=0;$<j;$++){const T=O[$];At(T[2],T[1],T[0])}for(let $=0;$<j;$++){const T=O[$];At(T[0]+V*h,T[1]+V*h,T[2]+V*h)}}n.addGroup(Q,s.length/3-Q,0)}function rt(){const Q=s.length/3;let $=0;yt(Y,$),$+=Y.length;for(let T=0,Tt=R.length;T<Tt;T++){const tt=R[T];yt(tt,$),$+=tt.length}n.addGroup(Q,s.length/3-Q,1)}function yt(Q,$){let T=Q.length;for(;--T>=0;){const Tt=T;let tt=T-1;tt<0&&(tt=Q.length-1);for(let xt=0,st=h+m*2;xt<st;xt++){const Pt=V*xt,ft=V*(xt+1),y=$+Tt+Pt,x=$+tt+Pt,I=$+tt+ft,G=$+Tt+ft;Gt(y,x,I,G)}}}function at(Q,$,T){l.push(Q),l.push($),l.push(T)}function At(Q,$,T){bt(Q),bt($),bt(T);const Tt=s.length/3,tt=b.generateTopUV(n,s,Tt-3,Tt-2,Tt-1);Zt(tt[0]),Zt(tt[1]),Zt(tt[2])}function Gt(Q,$,T,Tt){bt(Q),bt($),bt(Tt),bt($),bt(T),bt(Tt);const tt=s.length/3,xt=b.generateSideWallUV(n,s,tt-6,tt-3,tt-2,tt-1);Zt(xt[0]),Zt(xt[1]),Zt(xt[3]),Zt(xt[1]),Zt(xt[2]),Zt(xt[3])}function bt(Q){s.push(l[Q*3+0]),s.push(l[Q*3+1]),s.push(l[Q*3+2])}function Zt(Q){r.push(Q.x),r.push(Q.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return Ic(e,n,t)}static fromJSON(t,e){const n=[];for(let r=0,a=t.shapes.length;r<a;r++){const o=e[t.shapes[r]];n.push(o)}const s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new ha[s.type]().fromJSON(s)),new ba(n,t.options)}}const Uc={generateTopUV:function(i,t,e,n,s){const r=t[e*3],a=t[e*3+1],o=t[n*3],l=t[n*3+1],c=t[s*3],h=t[s*3+1];return[new it(r,a),new it(o,l),new it(c,h)]},generateSideWallUV:function(i,t,e,n,s,r){const a=t[e*3],o=t[e*3+1],l=t[e*3+2],c=t[n*3],h=t[n*3+1],f=t[n*3+2],d=t[s*3],p=t[s*3+1],_=t[s*3+2],g=t[r*3],m=t[r*3+1],u=t[r*3+2];return Math.abs(o-h)<Math.abs(a-c)?[new it(a,1-l),new it(c,1-f),new it(d,1-_),new it(g,1-u)]:[new it(o,1-l),new it(h,1-f),new it(p,1-_),new it(m,1-u)]}};function Ic(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){const r=i[n];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class Zi extends un{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const r=t/2,a=e/2,o=Math.floor(n),l=Math.floor(s),c=o+1,h=l+1,f=t/o,d=e/l,p=[],_=[],g=[],m=[];for(let u=0;u<h;u++){const b=u*d-a;for(let S=0;S<c;S++){const M=S*f-r;_.push(M,-b,0),g.push(0,0,1),m.push(S/o),m.push(1-u/l)}}for(let u=0;u<l;u++)for(let b=0;b<o;b++){const S=b+c*u,M=b+c*(u+1),P=b+1+c*(u+1),w=b+1+c*u;p.push(S,M,w),p.push(M,P,w)}this.setIndex(p),this.setAttribute("position",new Ie(_,3)),this.setAttribute("normal",new Ie(g,3)),this.setAttribute("uv",new Ie(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Zi(t.width,t.height,t.widthSegments,t.heightSegments)}}class Ki extends Xi{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Wt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Wt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=el,this.normalScale=new it(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new je,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Nc extends Xi{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=_1,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Fc extends Xi{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const uo={enabled:!1,files:{},add:function(i,t){this.enabled!==!1&&(this.files[i]=t)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class Oc{constructor(t,e,n){const s=this;let r=!1,a=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,f){return c.push(h,f),this},this.removeHandler=function(h){const f=c.indexOf(h);return f!==-1&&c.splice(f,2),this},this.getHandler=function(h){for(let f=0,d=c.length;f<d;f+=2){const p=c[f],_=c[f+1];if(p.global&&(p.lastIndex=0),p.test(h))return _}return null}}}const Bc=new Oc;class Aa{constructor(t){this.manager=t!==void 0?t:Bc,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}Aa.DEFAULT_MATERIAL_NAME="__DEFAULT";const rn={};class Hc extends Error{constructor(t,e){super(t),this.response=e}}class Vc extends Aa{constructor(t){super(t)}load(t,e,n,s){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=uo.get(t);if(r!==void 0)return this.manager.itemStart(t),setTimeout(()=>{e&&e(r),this.manager.itemEnd(t)},0),r;if(rn[t]!==void 0){rn[t].push({onLoad:e,onProgress:n,onError:s});return}rn[t]=[],rn[t].push({onLoad:e,onProgress:n,onError:s});const a=new Request(t,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),o=this.mimeType,l=this.responseType;fetch(a).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const h=rn[t],f=c.body.getReader(),d=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),p=d?parseInt(d):0,_=p!==0;let g=0;const m=new ReadableStream({start(u){b();function b(){f.read().then(({done:S,value:M})=>{if(S)u.close();else{g+=M.byteLength;const P=new ProgressEvent("progress",{lengthComputable:_,loaded:g,total:p});for(let w=0,A=h.length;w<A;w++){const C=h[w];C.onProgress&&C.onProgress(P)}u.enqueue(M),b()}},S=>{u.error(S)})}}});return new Response(m)}else throw new Hc(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,o));case"json":return c.json();default:if(o===void 0)return c.text();{const f=/charset="?([^;"\s]*)"?/i.exec(o),d=f&&f[1]?f[1].toLowerCase():void 0,p=new TextDecoder(d);return c.arrayBuffer().then(_=>p.decode(_))}}}).then(c=>{uo.add(t,c);const h=rn[t];delete rn[t];for(let f=0,d=h.length;f<d;f++){const p=h[f];p.onLoad&&p.onLoad(c)}}).catch(c=>{const h=rn[t];if(h===void 0)throw this.manager.itemError(t),c;delete rn[t];for(let f=0,d=h.length;f<d;f++){const p=h[f];p.onError&&p.onError(c)}this.manager.itemError(t)}).finally(()=>{this.manager.itemEnd(t)}),this.manager.itemStart(t)}setResponseType(t){return this.responseType=t,this}setMimeType(t){return this.mimeType=t,this}}class Gc extends Me{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Wt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class kc extends Gc{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Me.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Wt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}class Wc extends fl{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-t,a=n+t,o=s+e,l=s-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class Xc extends Ue{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t,this.index=0}}class fo{constructor(t=1,e=0,n=0){return this.radius=t,this.phi=e,this.theta=n,this}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Bt(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(Bt(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class Yc{constructor(){this.type="ShapePath",this.color=new Wt,this.subPaths=[],this.currentPath=null}moveTo(t,e){return this.currentPath=new Us,this.subPaths.push(this.currentPath),this.currentPath.moveTo(t,e),this}lineTo(t,e){return this.currentPath.lineTo(t,e),this}quadraticCurveTo(t,e,n,s){return this.currentPath.quadraticCurveTo(t,e,n,s),this}bezierCurveTo(t,e,n,s,r,a){return this.currentPath.bezierCurveTo(t,e,n,s,r,a),this}splineThru(t){return this.currentPath.splineThru(t),this}toShapes(t){function e(u){const b=[];for(let S=0,M=u.length;S<M;S++){const P=u[S],w=new Cs;w.curves=P.curves,b.push(w)}return b}function n(u,b){const S=b.length;let M=!1;for(let P=S-1,w=0;w<S;P=w++){let A=b[P],C=b[w],E=C.x-A.x,q=C.y-A.y;if(Math.abs(q)>Number.EPSILON){if(q<0&&(A=b[w],E=-E,C=b[P],q=-q),u.y<A.y||u.y>C.y)continue;if(u.y===A.y){if(u.x===A.x)return!0}else{const R=q*(u.x-A.x)-E*(u.y-A.y);if(R===0)return!0;if(R<0)continue;M=!M}}else{if(u.y!==A.y)continue;if(C.x<=u.x&&u.x<=A.x||A.x<=u.x&&u.x<=C.x)return!0}}return M}const s=_i.isClockWise,r=this.subPaths;if(r.length===0)return[];let a,o,l;const c=[];if(r.length===1)return o=r[0],l=new Cs,l.curves=o.curves,c.push(l),c;let h=!s(r[0].getPoints());h=t?!h:h;const f=[],d=[];let p=[],_=0,g;d[_]=void 0,p[_]=[];for(let u=0,b=r.length;u<b;u++)o=r[u],g=o.getPoints(),a=s(g),a=t?!a:a,a?(!h&&d[_]&&_++,d[_]={s:new Cs,p:g},d[_].s.curves=o.curves,h&&_++,p[_]=[]):p[_].push({h:o,p:g[0]});if(!d[0])return e(r);if(d.length>1){let u=!1,b=0;for(let S=0,M=d.length;S<M;S++)f[S]=[];for(let S=0,M=d.length;S<M;S++){const P=p[S];for(let w=0;w<P.length;w++){const A=P[w];let C=!0;for(let E=0;E<d.length;E++)n(A.p,d[E].p)&&(S!==E&&b++,C?(C=!1,f[E].push(A)):u=!0);C&&f[S].push(A)}}b>0&&u===!1&&(p=f)}let m;for(let u=0,b=d.length;u<b;u++){l=d[u].s,c.push(l),m=p[u];for(let S=0,M=m.length;S<M;S++)l.holes.push(m[S].h)}return c}}class Zc extends kn{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}function po(i,t,e,n){const s=Kc(n);switch(e){case Zo:return i*t;case jo:return i*t;case Jo:return i*t*2;case $o:return i*t/s.components*s.byteLength;case va:return i*t/s.components*s.byteLength;case Qo:return i*t*2/s.components*s.byteLength;case qa:return i*t*2/s.components*s.byteLength;case Ko:return i*t*3/s.components*s.byteLength;case Ge:return i*t*4/s.components*s.byteLength;case Ma:return i*t*4/s.components*s.byteLength;case Es:case Ts:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case bs:case As:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Fr:case Br:return Math.max(i,16)*Math.max(t,8)/4;case Nr:case Or:return Math.max(i,8)*Math.max(t,8)/2;case Hr:case Vr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Gr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case kr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Wr:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Xr:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Yr:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Zr:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Kr:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case jr:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Jr:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case $r:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Qr:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case ta:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case ea:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case na:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case ia:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case ws:case sa:case ra:return Math.ceil(i/4)*Math.ceil(t/4)*16;case tl:case aa:return Math.ceil(i/4)*Math.ceil(t/4)*8;case oa:case la:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Kc(i){switch(i){case hn:case Wo:return{byteLength:1,components:1};case Hi:case Xo:case Wi:return{byteLength:2,components:1};case xa:case ga:return{byteLength:2,components:4};case On:case _a:case on:return{byteLength:4,components:1};case Yo:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ma}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ma);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function yl(){let i=null,t=!1,e=null,n=null;function s(r,a){e(r,a),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function jc(i){const t=new WeakMap;function e(o,l){const c=o.array,h=o.usage,f=c.byteLength,d=i.createBuffer();i.bindBuffer(l,d),i.bufferData(l,c,h),o.onUploadCallback();let p;if(c instanceof Float32Array)p=i.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=i.SHORT;else if(c instanceof Uint32Array)p=i.UNSIGNED_INT;else if(c instanceof Int32Array)p=i.INT;else if(c instanceof Int8Array)p=i.BYTE;else if(c instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:f}}function n(o,l,c){const h=l.array,f=l.updateRanges;if(i.bindBuffer(c,o),f.length===0)i.bufferSubData(c,0,h);else{f.sort((p,_)=>p.start-_.start);let d=0;for(let p=1;p<f.length;p++){const _=f[d],g=f[p];g.start<=_.start+_.count+1?_.count=Math.max(_.count,g.start+g.count-_.start):(++d,f[d]=g)}f.length=d+1;for(let p=0,_=f.length;p<_;p++){const g=f[p];i.bufferSubData(c,g.start*h.BYTES_PER_ELEMENT,h,g.start,g.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=t.get(o);l&&(i.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var Jc=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,$c=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Qc=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,th=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,eh=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,nh=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,ih=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,sh=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,rh=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,ah=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,oh=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,lh=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,ch=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,hh=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,uh=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,fh=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,dh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,ph=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,mh=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,_h=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,xh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,gh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,vh=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,qh=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Mh=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Sh=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,yh=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Eh=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Th=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,bh=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Ah="gl_FragColor = linearToOutputTexel( gl_FragColor );",wh=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Rh=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Ch=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Ph=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Lh=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Dh=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,zh=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Uh=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Ih=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Nh=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Fh=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Oh=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Bh=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Hh=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Vh=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Gh=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,kh=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Wh=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Xh=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Yh=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Zh=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Kh=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,jh=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Jh=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,$h=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Qh=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,t3=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,e3=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,n3=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,i3=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,s3=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,r3=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,a3=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,o3=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,l3=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,c3=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,h3=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,u3=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,f3=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,d3=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,p3=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,m3=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,_3=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,x3=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,g3=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,v3=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,q3=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,M3=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,S3=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,y3=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,E3=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,T3=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,b3=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,A3=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,w3=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,R3=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,C3=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,P3=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,L3=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,D3=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,z3=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,U3=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,I3=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,N3=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,F3=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,O3=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,B3=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,H3=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,V3=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,G3=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,k3=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,W3=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,X3=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Y3=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Z3=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,K3=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const j3=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,J3=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,$3=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Q3=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,t0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,e0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,n0=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,i0=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,s0=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,r0=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,a0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,o0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,l0=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,c0=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,h0=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,u0=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,f0=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,d0=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,p0=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,m0=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,_0=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,x0=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,g0=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,v0=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,q0=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,M0=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,S0=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,y0=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,E0=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,T0=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,b0=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,A0=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,w0=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,R0=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ot={alphahash_fragment:Jc,alphahash_pars_fragment:$c,alphamap_fragment:Qc,alphamap_pars_fragment:th,alphatest_fragment:eh,alphatest_pars_fragment:nh,aomap_fragment:ih,aomap_pars_fragment:sh,batching_pars_vertex:rh,batching_vertex:ah,begin_vertex:oh,beginnormal_vertex:lh,bsdfs:ch,iridescence_fragment:hh,bumpmap_pars_fragment:uh,clipping_planes_fragment:fh,clipping_planes_pars_fragment:dh,clipping_planes_pars_vertex:ph,clipping_planes_vertex:mh,color_fragment:_h,color_pars_fragment:xh,color_pars_vertex:gh,color_vertex:vh,common:qh,cube_uv_reflection_fragment:Mh,defaultnormal_vertex:Sh,displacementmap_pars_vertex:yh,displacementmap_vertex:Eh,emissivemap_fragment:Th,emissivemap_pars_fragment:bh,colorspace_fragment:Ah,colorspace_pars_fragment:wh,envmap_fragment:Rh,envmap_common_pars_fragment:Ch,envmap_pars_fragment:Ph,envmap_pars_vertex:Lh,envmap_physical_pars_fragment:Gh,envmap_vertex:Dh,fog_vertex:zh,fog_pars_vertex:Uh,fog_fragment:Ih,fog_pars_fragment:Nh,gradientmap_pars_fragment:Fh,lightmap_pars_fragment:Oh,lights_lambert_fragment:Bh,lights_lambert_pars_fragment:Hh,lights_pars_begin:Vh,lights_toon_fragment:kh,lights_toon_pars_fragment:Wh,lights_phong_fragment:Xh,lights_phong_pars_fragment:Yh,lights_physical_fragment:Zh,lights_physical_pars_fragment:Kh,lights_fragment_begin:jh,lights_fragment_maps:Jh,lights_fragment_end:$h,logdepthbuf_fragment:Qh,logdepthbuf_pars_fragment:t3,logdepthbuf_pars_vertex:e3,logdepthbuf_vertex:n3,map_fragment:i3,map_pars_fragment:s3,map_particle_fragment:r3,map_particle_pars_fragment:a3,metalnessmap_fragment:o3,metalnessmap_pars_fragment:l3,morphinstance_vertex:c3,morphcolor_vertex:h3,morphnormal_vertex:u3,morphtarget_pars_vertex:f3,morphtarget_vertex:d3,normal_fragment_begin:p3,normal_fragment_maps:m3,normal_pars_fragment:_3,normal_pars_vertex:x3,normal_vertex:g3,normalmap_pars_fragment:v3,clearcoat_normal_fragment_begin:q3,clearcoat_normal_fragment_maps:M3,clearcoat_pars_fragment:S3,iridescence_pars_fragment:y3,opaque_fragment:E3,packing:T3,premultiplied_alpha_fragment:b3,project_vertex:A3,dithering_fragment:w3,dithering_pars_fragment:R3,roughnessmap_fragment:C3,roughnessmap_pars_fragment:P3,shadowmap_pars_fragment:L3,shadowmap_pars_vertex:D3,shadowmap_vertex:z3,shadowmask_pars_fragment:U3,skinbase_vertex:I3,skinning_pars_vertex:N3,skinning_vertex:F3,skinnormal_vertex:O3,specularmap_fragment:B3,specularmap_pars_fragment:H3,tonemapping_fragment:V3,tonemapping_pars_fragment:G3,transmission_fragment:k3,transmission_pars_fragment:W3,uv_pars_fragment:X3,uv_pars_vertex:Y3,uv_vertex:Z3,worldpos_vertex:K3,background_vert:j3,background_frag:J3,backgroundCube_vert:$3,backgroundCube_frag:Q3,cube_vert:t0,cube_frag:e0,depth_vert:n0,depth_frag:i0,distanceRGBA_vert:s0,distanceRGBA_frag:r0,equirect_vert:a0,equirect_frag:o0,linedashed_vert:l0,linedashed_frag:c0,meshbasic_vert:h0,meshbasic_frag:u0,meshlambert_vert:f0,meshlambert_frag:d0,meshmatcap_vert:p0,meshmatcap_frag:m0,meshnormal_vert:_0,meshnormal_frag:x0,meshphong_vert:g0,meshphong_frag:v0,meshphysical_vert:q0,meshphysical_frag:M0,meshtoon_vert:S0,meshtoon_frag:y0,points_vert:E0,points_frag:T0,shadow_vert:b0,shadow_frag:A0,sprite_vert:w0,sprite_frag:R0},lt={common:{diffuse:{value:new Wt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Nt},alphaMap:{value:null},alphaMapTransform:{value:new Nt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Nt}},envmap:{envMap:{value:null},envMapRotation:{value:new Nt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Nt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Nt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Nt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Nt},normalScale:{value:new it(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Nt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Nt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Nt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Nt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Wt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Wt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Nt},alphaTest:{value:0},uvTransform:{value:new Nt}},sprite:{diffuse:{value:new Wt(16777215)},opacity:{value:1},center:{value:new it(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Nt},alphaMap:{value:null},alphaMapTransform:{value:new Nt},alphaTest:{value:0}}},Xe={basic:{uniforms:qe([lt.common,lt.specularmap,lt.envmap,lt.aomap,lt.lightmap,lt.fog]),vertexShader:Ot.meshbasic_vert,fragmentShader:Ot.meshbasic_frag},lambert:{uniforms:qe([lt.common,lt.specularmap,lt.envmap,lt.aomap,lt.lightmap,lt.emissivemap,lt.bumpmap,lt.normalmap,lt.displacementmap,lt.fog,lt.lights,{emissive:{value:new Wt(0)}}]),vertexShader:Ot.meshlambert_vert,fragmentShader:Ot.meshlambert_frag},phong:{uniforms:qe([lt.common,lt.specularmap,lt.envmap,lt.aomap,lt.lightmap,lt.emissivemap,lt.bumpmap,lt.normalmap,lt.displacementmap,lt.fog,lt.lights,{emissive:{value:new Wt(0)},specular:{value:new Wt(1118481)},shininess:{value:30}}]),vertexShader:Ot.meshphong_vert,fragmentShader:Ot.meshphong_frag},standard:{uniforms:qe([lt.common,lt.envmap,lt.aomap,lt.lightmap,lt.emissivemap,lt.bumpmap,lt.normalmap,lt.displacementmap,lt.roughnessmap,lt.metalnessmap,lt.fog,lt.lights,{emissive:{value:new Wt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ot.meshphysical_vert,fragmentShader:Ot.meshphysical_frag},toon:{uniforms:qe([lt.common,lt.aomap,lt.lightmap,lt.emissivemap,lt.bumpmap,lt.normalmap,lt.displacementmap,lt.gradientmap,lt.fog,lt.lights,{emissive:{value:new Wt(0)}}]),vertexShader:Ot.meshtoon_vert,fragmentShader:Ot.meshtoon_frag},matcap:{uniforms:qe([lt.common,lt.bumpmap,lt.normalmap,lt.displacementmap,lt.fog,{matcap:{value:null}}]),vertexShader:Ot.meshmatcap_vert,fragmentShader:Ot.meshmatcap_frag},points:{uniforms:qe([lt.points,lt.fog]),vertexShader:Ot.points_vert,fragmentShader:Ot.points_frag},dashed:{uniforms:qe([lt.common,lt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ot.linedashed_vert,fragmentShader:Ot.linedashed_frag},depth:{uniforms:qe([lt.common,lt.displacementmap]),vertexShader:Ot.depth_vert,fragmentShader:Ot.depth_frag},normal:{uniforms:qe([lt.common,lt.bumpmap,lt.normalmap,lt.displacementmap,{opacity:{value:1}}]),vertexShader:Ot.meshnormal_vert,fragmentShader:Ot.meshnormal_frag},sprite:{uniforms:qe([lt.sprite,lt.fog]),vertexShader:Ot.sprite_vert,fragmentShader:Ot.sprite_frag},background:{uniforms:{uvTransform:{value:new Nt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ot.background_vert,fragmentShader:Ot.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Nt}},vertexShader:Ot.backgroundCube_vert,fragmentShader:Ot.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ot.cube_vert,fragmentShader:Ot.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ot.equirect_vert,fragmentShader:Ot.equirect_frag},distanceRGBA:{uniforms:qe([lt.common,lt.displacementmap,{referencePosition:{value:new z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ot.distanceRGBA_vert,fragmentShader:Ot.distanceRGBA_frag},shadow:{uniforms:qe([lt.lights,lt.fog,{color:{value:new Wt(0)},opacity:{value:1}}]),vertexShader:Ot.shadow_vert,fragmentShader:Ot.shadow_frag}};Xe.physical={uniforms:qe([Xe.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Nt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Nt},clearcoatNormalScale:{value:new it(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Nt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Nt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Nt},sheen:{value:0},sheenColor:{value:new Wt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Nt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Nt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Nt},transmissionSamplerSize:{value:new it},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Nt},attenuationDistance:{value:0},attenuationColor:{value:new Wt(0)},specularColor:{value:new Wt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Nt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Nt},anisotropyVector:{value:new it},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Nt}}]),vertexShader:Ot.meshphysical_vert,fragmentShader:Ot.meshphysical_frag};const vs={r:0,b:0,g:0},Ln=new je,C0=new oe;function P0(i,t,e,n,s,r,a){const o=new Wt(0);let l=r===!0?0:1,c,h,f=null,d=0,p=null;function _(S){let M=S.isScene===!0?S.background:null;return M&&M.isTexture&&(M=(S.backgroundBlurriness>0?e:t).get(M)),M}function g(S){let M=!1;const P=_(S);P===null?u(o,l):P&&P.isColor&&(u(P,1),M=!0);const w=i.xr.getEnvironmentBlendMode();w==="additive"?n.buffers.color.setClear(0,0,0,1,a):w==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||M)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(S,M){const P=_(M);P&&(P.isCubeTexture||P.mapping===Ns)?(h===void 0&&(h=new pe(new Tn(1,1,1),new yn({name:"BackgroundCubeMaterial",uniforms:Ti(Xe.backgroundCube.uniforms),vertexShader:Xe.backgroundCube.vertexShader,fragmentShader:Xe.backgroundCube.fragmentShader,side:Te,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(w,A,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),Ln.copy(M.backgroundRotation),Ln.x*=-1,Ln.y*=-1,Ln.z*=-1,P.isCubeTexture&&P.isRenderTargetTexture===!1&&(Ln.y*=-1,Ln.z*=-1),h.material.uniforms.envMap.value=P,h.material.uniforms.flipEnvMap.value=P.isCubeTexture&&P.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(C0.makeRotationFromEuler(Ln)),h.material.toneMapped=Yt.getTransfer(P.colorSpace)!==Qt,(f!==P||d!==P.version||p!==i.toneMapping)&&(h.material.needsUpdate=!0,f=P,d=P.version,p=i.toneMapping),h.layers.enableAll(),S.unshift(h,h.geometry,h.material,0,0,null)):P&&P.isTexture&&(c===void 0&&(c=new pe(new Zi(2,2),new yn({name:"BackgroundMaterial",uniforms:Ti(Xe.background.uniforms),vertexShader:Xe.background.vertexShader,fragmentShader:Xe.background.fragmentShader,side:Sn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=P,c.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,c.material.toneMapped=Yt.getTransfer(P.colorSpace)!==Qt,P.matrixAutoUpdate===!0&&P.updateMatrix(),c.material.uniforms.uvTransform.value.copy(P.matrix),(f!==P||d!==P.version||p!==i.toneMapping)&&(c.material.needsUpdate=!0,f=P,d=P.version,p=i.toneMapping),c.layers.enableAll(),S.unshift(c,c.geometry,c.material,0,0,null))}function u(S,M){S.getRGB(vs,ul(i)),n.buffers.color.setClear(vs.r,vs.g,vs.b,M,a)}function b(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(S,M=1){o.set(S),l=M,u(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(S){l=S,u(o,l)},render:g,addToRenderList:m,dispose:b}}function L0(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null);let r=s,a=!1;function o(q,R,X,O,Y){let Z=!1;const V=f(O,X,R);r!==V&&(r=V,c(r.object)),Z=p(q,O,X,Y),Z&&_(q,O,X,Y),Y!==null&&t.update(Y,i.ELEMENT_ARRAY_BUFFER),(Z||a)&&(a=!1,M(q,R,X,O),Y!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(Y).buffer))}function l(){return i.createVertexArray()}function c(q){return i.bindVertexArray(q)}function h(q){return i.deleteVertexArray(q)}function f(q,R,X){const O=X.wireframe===!0;let Y=n[q.id];Y===void 0&&(Y={},n[q.id]=Y);let Z=Y[R.id];Z===void 0&&(Z={},Y[R.id]=Z);let V=Z[O];return V===void 0&&(V=d(l()),Z[O]=V),V}function d(q){const R=[],X=[],O=[];for(let Y=0;Y<e;Y++)R[Y]=0,X[Y]=0,O[Y]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:R,enabledAttributes:X,attributeDivisors:O,object:q,attributes:{},index:null}}function p(q,R,X,O){const Y=r.attributes,Z=R.attributes;let V=0;const j=X.getAttributes();for(const B in j)if(j[B].location>=0){const mt=Y[B];let St=Z[B];if(St===void 0&&(B==="instanceMatrix"&&q.instanceMatrix&&(St=q.instanceMatrix),B==="instanceColor"&&q.instanceColor&&(St=q.instanceColor)),mt===void 0||mt.attribute!==St||St&&mt.data!==St.data)return!0;V++}return r.attributesNum!==V||r.index!==O}function _(q,R,X,O){const Y={},Z=R.attributes;let V=0;const j=X.getAttributes();for(const B in j)if(j[B].location>=0){let mt=Z[B];mt===void 0&&(B==="instanceMatrix"&&q.instanceMatrix&&(mt=q.instanceMatrix),B==="instanceColor"&&q.instanceColor&&(mt=q.instanceColor));const St={};St.attribute=mt,mt&&mt.data&&(St.data=mt.data),Y[B]=St,V++}r.attributes=Y,r.attributesNum=V,r.index=O}function g(){const q=r.newAttributes;for(let R=0,X=q.length;R<X;R++)q[R]=0}function m(q){u(q,0)}function u(q,R){const X=r.newAttributes,O=r.enabledAttributes,Y=r.attributeDivisors;X[q]=1,O[q]===0&&(i.enableVertexAttribArray(q),O[q]=1),Y[q]!==R&&(i.vertexAttribDivisor(q,R),Y[q]=R)}function b(){const q=r.newAttributes,R=r.enabledAttributes;for(let X=0,O=R.length;X<O;X++)R[X]!==q[X]&&(i.disableVertexAttribArray(X),R[X]=0)}function S(q,R,X,O,Y,Z,V){V===!0?i.vertexAttribIPointer(q,R,X,Y,Z):i.vertexAttribPointer(q,R,X,O,Y,Z)}function M(q,R,X,O){g();const Y=O.attributes,Z=X.getAttributes(),V=R.defaultAttributeValues;for(const j in Z){const B=Z[j];if(B.location>=0){let ot=Y[j];if(ot===void 0&&(j==="instanceMatrix"&&q.instanceMatrix&&(ot=q.instanceMatrix),j==="instanceColor"&&q.instanceColor&&(ot=q.instanceColor)),ot!==void 0){const mt=ot.normalized,St=ot.itemSize,Ut=t.get(ot);if(Ut===void 0)continue;const Kt=Ut.buffer,W=Ut.type,rt=Ut.bytesPerElement,yt=W===i.INT||W===i.UNSIGNED_INT||ot.gpuType===_a;if(ot.isInterleavedBufferAttribute){const at=ot.data,At=at.stride,Gt=ot.offset;if(at.isInstancedInterleavedBuffer){for(let bt=0;bt<B.locationSize;bt++)u(B.location+bt,at.meshPerAttribute);q.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=at.meshPerAttribute*at.count)}else for(let bt=0;bt<B.locationSize;bt++)m(B.location+bt);i.bindBuffer(i.ARRAY_BUFFER,Kt);for(let bt=0;bt<B.locationSize;bt++)S(B.location+bt,St/B.locationSize,W,mt,At*rt,(Gt+St/B.locationSize*bt)*rt,yt)}else{if(ot.isInstancedBufferAttribute){for(let at=0;at<B.locationSize;at++)u(B.location+at,ot.meshPerAttribute);q.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=ot.meshPerAttribute*ot.count)}else for(let at=0;at<B.locationSize;at++)m(B.location+at);i.bindBuffer(i.ARRAY_BUFFER,Kt);for(let at=0;at<B.locationSize;at++)S(B.location+at,St/B.locationSize,W,mt,St*rt,St/B.locationSize*at*rt,yt)}}else if(V!==void 0){const mt=V[j];if(mt!==void 0)switch(mt.length){case 2:i.vertexAttrib2fv(B.location,mt);break;case 3:i.vertexAttrib3fv(B.location,mt);break;case 4:i.vertexAttrib4fv(B.location,mt);break;default:i.vertexAttrib1fv(B.location,mt)}}}}b()}function P(){C();for(const q in n){const R=n[q];for(const X in R){const O=R[X];for(const Y in O)h(O[Y].object),delete O[Y];delete R[X]}delete n[q]}}function w(q){if(n[q.id]===void 0)return;const R=n[q.id];for(const X in R){const O=R[X];for(const Y in O)h(O[Y].object),delete O[Y];delete R[X]}delete n[q.id]}function A(q){for(const R in n){const X=n[R];if(X[q.id]===void 0)continue;const O=X[q.id];for(const Y in O)h(O[Y].object),delete O[Y];delete X[q.id]}}function C(){E(),a=!0,r!==s&&(r=s,c(r.object))}function E(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:C,resetDefaultState:E,dispose:P,releaseStatesOfGeometry:w,releaseStatesOfProgram:A,initAttributes:g,enableAttribute:m,disableUnusedAttributes:b}}function D0(i,t,e){let n;function s(c){n=c}function r(c,h){i.drawArrays(n,c,h),e.update(h,n,1)}function a(c,h,f){f!==0&&(i.drawArraysInstanced(n,c,h,f),e.update(h,n,f))}function o(c,h,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,f);let p=0;for(let _=0;_<f;_++)p+=h[_];e.update(p,n,1)}function l(c,h,f,d){if(f===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let _=0;_<c.length;_++)a(c[_],h[_],d[_]);else{p.multiDrawArraysInstancedWEBGL(n,c,0,h,0,d,0,f);let _=0;for(let g=0;g<f;g++)_+=h[g]*d[g];e.update(_,n,1)}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function z0(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const A=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(A){return!(A!==Ge&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(A){const C=A===Wi&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(A!==hn&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==on&&!C)}function l(A){if(A==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const f=e.logarithmicDepthBuffer===!0,d=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),u=i.getParameter(i.MAX_VERTEX_ATTRIBS),b=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),S=i.getParameter(i.MAX_VARYING_VECTORS),M=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),P=_>0,w=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:f,reverseDepthBuffer:d,maxTextures:p,maxVertexTextures:_,maxTextureSize:g,maxCubemapSize:m,maxAttributes:u,maxVertexUniforms:b,maxVaryings:S,maxFragmentUniforms:M,vertexTextures:P,maxSamples:w}}function U0(i){const t=this;let e=null,n=0,s=!1,r=!1;const a=new gn,o=new Nt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d){const p=f.length!==0||d||n!==0||s;return s=d,n=f.length,p},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,d){e=h(f,d,0)},this.setState=function(f,d,p){const _=f.clippingPlanes,g=f.clipIntersection,m=f.clipShadows,u=i.get(f);if(!s||_===null||_.length===0||r&&!m)r?h(null):c();else{const b=r?0:n,S=b*4;let M=u.clippingState||null;l.value=M,M=h(_,d,S,p);for(let P=0;P!==S;++P)M[P]=e[P];u.clippingState=M,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=b}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(f,d,p,_){const g=f!==null?f.length:0;let m=null;if(g!==0){if(m=l.value,_!==!0||m===null){const u=p+g*4,b=d.matrixWorldInverse;o.getNormalMatrix(b),(m===null||m.length<u)&&(m=new Float32Array(u));for(let S=0,M=p;S!==g;++S,M+=4)a.copy(f[S]).applyMatrix4(b,o),a.normal.toArray(m,M),m[M+3]=a.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=g,t.numIntersection=0,m}}function I0(i){let t=new WeakMap;function e(a,o){return o===Dr?a.mapping=qi:o===zr&&(a.mapping=Mi),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===Dr||o===zr)if(t.has(a)){const l=t.get(a).texture;return e(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new tc(l.height);return c.fromEquirectangularTexture(i,a),t.set(a,c),a.addEventListener("dispose",s),e(c.texture,a.mapping)}else return null}}return a}function s(a){const o=a.target;o.removeEventListener("dispose",s);const l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}const hi=4,mo=[.125,.215,.35,.446,.526,.582],In=20,_r=new Wc,_o=new Wt;let xr=null,gr=0,vr=0,qr=!1;const zn=(1+Math.sqrt(5))/2,ri=1/zn,xo=[new z(-zn,ri,0),new z(zn,ri,0),new z(-ri,0,zn),new z(ri,0,zn),new z(0,zn,-ri),new z(0,zn,ri),new z(-1,1,-1),new z(1,1,-1),new z(-1,1,1),new z(1,1,1)];class go{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){xr=this._renderer.getRenderTarget(),gr=this._renderer.getActiveCubeFace(),vr=this._renderer.getActiveMipmapLevel(),qr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Mo(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=qo(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(xr,gr,vr),this._renderer.xr.enabled=qr,t.scissorTest=!1,qs(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===qi||t.mapping===Mi?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),xr=this._renderer.getRenderTarget(),gr=this._renderer.getActiveCubeFace(),vr=this._renderer.getActiveMipmapLevel(),qr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Ze,minFilter:Ze,generateMipmaps:!1,type:Wi,format:Ge,colorSpace:Ei,depthBuffer:!1},s=vo(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=vo(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=N0(r)),this._blurMaterial=F0(r,t,e)}return s}_compileMaterial(t){const e=new pe(this._lodPlanes[0],t);this._renderer.compile(e,_r)}_sceneToCubeUV(t,e,n,s){const o=new Ue(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,f=h.autoClear,d=h.toneMapping;h.getClearColor(_o),h.toneMapping=Mn,h.autoClear=!1;const p=new Yi({name:"PMREM.Background",side:Te,depthWrite:!1,depthTest:!1}),_=new pe(new Tn,p);let g=!1;const m=t.background;m?m.isColor&&(p.color.copy(m),t.background=null,g=!0):(p.color.copy(_o),g=!0);for(let u=0;u<6;u++){const b=u%3;b===0?(o.up.set(0,l[u],0),o.lookAt(c[u],0,0)):b===1?(o.up.set(0,0,l[u]),o.lookAt(0,c[u],0)):(o.up.set(0,l[u],0),o.lookAt(0,0,c[u]));const S=this._cubeSize;qs(s,b*S,u>2?S:0,S,S),h.setRenderTarget(s),g&&h.render(_,o),h.render(t,o)}_.geometry.dispose(),_.material.dispose(),h.toneMapping=d,h.autoClear=f,t.background=m}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===qi||t.mapping===Mi;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Mo()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=qo());const r=s?this._cubemapMaterial:this._equirectMaterial,a=new pe(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=t;const l=this._cubeSize;qs(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(a,_r)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=xo[(s-r-1)%xo.length];this._blur(t,r-1,r,a,o)}e.autoClear=n}_blur(t,e,n,s,r){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,s,"latitudinal",r),this._halfBlur(a,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,f=new pe(this._lodPlanes[s],c),d=c.uniforms,p=this._sizeLods[n]-1,_=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*In-1),g=r/_,m=isFinite(r)?1+Math.floor(h*g):In;m>In&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${In}`);const u=[];let b=0;for(let A=0;A<In;++A){const C=A/g,E=Math.exp(-C*C/2);u.push(E),A===0?b+=E:A<m&&(b+=2*E)}for(let A=0;A<u.length;A++)u[A]=u[A]/b;d.envMap.value=t.texture,d.samples.value=m,d.weights.value=u,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:S}=this;d.dTheta.value=_,d.mipInt.value=S-n;const M=this._sizeLods[s],P=3*M*(s>S-hi?s-S+hi:0),w=4*(this._cubeSize-M);qs(e,P,w,3*M,2*M),l.setRenderTarget(e),l.render(f,_r)}}function N0(i){const t=[],e=[],n=[];let s=i;const r=i-hi+1+mo.length;for(let a=0;a<r;a++){const o=Math.pow(2,s);e.push(o);let l=1/o;a>i-hi?l=mo[a-i+hi-1]:a===0&&(l=0),n.push(l);const c=1/(o-2),h=-c,f=1+c,d=[h,h,f,h,f,f,h,h,f,f,h,f],p=6,_=6,g=3,m=2,u=1,b=new Float32Array(g*_*p),S=new Float32Array(m*_*p),M=new Float32Array(u*_*p);for(let w=0;w<p;w++){const A=w%3*2/3-1,C=w>2?0:-1,E=[A,C,0,A+2/3,C,0,A+2/3,C+1,0,A,C,0,A+2/3,C+1,0,A,C+1,0];b.set(E,g*_*w),S.set(d,m*_*w);const q=[w,w,w,w,w,w];M.set(q,u*_*w)}const P=new un;P.setAttribute("position",new Ke(b,g)),P.setAttribute("uv",new Ke(S,m)),P.setAttribute("faceIndex",new Ke(M,u)),t.push(P),s>hi&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function vo(i,t,e){const n=new Bn(i,t,e);return n.texture.mapping=Ns,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function qs(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function F0(i,t,e){const n=new Float32Array(In),s=new z(0,1,0);return new yn({name:"SphericalGaussianBlur",defines:{n:In,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:wa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:qn,depthTest:!1,depthWrite:!1})}function qo(){return new yn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:wa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:qn,depthTest:!1,depthWrite:!1})}function Mo(){return new yn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:wa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:qn,depthTest:!1,depthWrite:!1})}function wa(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function O0(i){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===Dr||l===zr,h=l===qi||l===Mi;if(c||h){let f=t.get(o);const d=f!==void 0?f.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return e===null&&(e=new go(i)),f=c?e.fromEquirectangular(o,f):e.fromCubemap(o,f),f.texture.pmremVersion=o.pmremVersion,t.set(o,f),f.texture;if(f!==void 0)return f.texture;{const p=o.image;return c&&p&&p.height>0||h&&p&&s(p)?(e===null&&(e=new go(i)),f=c?e.fromEquirectangular(o):e.fromCubemap(o),f.texture.pmremVersion=o.pmremVersion,t.set(o,f),o.addEventListener("dispose",r),f.texture):null}}}return o}function s(o){let l=0;const c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function r(o){const l=o.target;l.removeEventListener("dispose",r);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function B0(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&ai("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function H0(i,t,e,n){const s={},r=new WeakMap;function a(f){const d=f.target;d.index!==null&&t.remove(d.index);for(const _ in d.attributes)t.remove(d.attributes[_]);d.removeEventListener("dispose",a),delete s[d.id];const p=r.get(d);p&&(t.remove(p),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function o(f,d){return s[d.id]===!0||(d.addEventListener("dispose",a),s[d.id]=!0,e.memory.geometries++),d}function l(f){const d=f.attributes;for(const p in d)t.update(d[p],i.ARRAY_BUFFER)}function c(f){const d=[],p=f.index,_=f.attributes.position;let g=0;if(p!==null){const b=p.array;g=p.version;for(let S=0,M=b.length;S<M;S+=3){const P=b[S+0],w=b[S+1],A=b[S+2];d.push(P,w,w,A,A,P)}}else if(_!==void 0){const b=_.array;g=_.version;for(let S=0,M=b.length/3-1;S<M;S+=3){const P=S+0,w=S+1,A=S+2;d.push(P,w,w,A,A,P)}}else return;const m=new(il(d)?hl:cl)(d,1);m.version=g;const u=r.get(f);u&&t.remove(u),r.set(f,m)}function h(f){const d=r.get(f);if(d){const p=f.index;p!==null&&d.version<p.version&&c(f)}else c(f);return r.get(f)}return{get:o,update:l,getWireframeAttribute:h}}function V0(i,t,e){let n;function s(d){n=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function l(d,p){i.drawElements(n,p,r,d*a),e.update(p,n,1)}function c(d,p,_){_!==0&&(i.drawElementsInstanced(n,p,r,d*a,_),e.update(p,n,_))}function h(d,p,_){if(_===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,r,d,0,_);let m=0;for(let u=0;u<_;u++)m+=p[u];e.update(m,n,1)}function f(d,p,_,g){if(_===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let u=0;u<d.length;u++)c(d[u]/a,p[u],g[u]);else{m.multiDrawElementsInstancedWEBGL(n,p,0,r,d,0,g,0,_);let u=0;for(let b=0;b<_;b++)u+=p[b]*g[b];e.update(u,n,1)}}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=f}function G0(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function k0(i,t,e){const n=new WeakMap,s=new ae;function r(a,o,l){const c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=h!==void 0?h.length:0;let d=n.get(o);if(d===void 0||d.count!==f){let q=function(){C.dispose(),n.delete(o),o.removeEventListener("dispose",q)};var p=q;d!==void 0&&d.texture.dispose();const _=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,u=o.morphAttributes.position||[],b=o.morphAttributes.normal||[],S=o.morphAttributes.color||[];let M=0;_===!0&&(M=1),g===!0&&(M=2),m===!0&&(M=3);let P=o.attributes.position.count*M,w=1;P>t.maxTextureSize&&(w=Math.ceil(P/t.maxTextureSize),P=t.maxTextureSize);const A=new Float32Array(P*w*4*f),C=new rl(A,P,w,f);C.type=on,C.needsUpdate=!0;const E=M*4;for(let R=0;R<f;R++){const X=u[R],O=b[R],Y=S[R],Z=P*w*4*R;for(let V=0;V<X.count;V++){const j=V*E;_===!0&&(s.fromBufferAttribute(X,V),A[Z+j+0]=s.x,A[Z+j+1]=s.y,A[Z+j+2]=s.z,A[Z+j+3]=0),g===!0&&(s.fromBufferAttribute(O,V),A[Z+j+4]=s.x,A[Z+j+5]=s.y,A[Z+j+6]=s.z,A[Z+j+7]=0),m===!0&&(s.fromBufferAttribute(Y,V),A[Z+j+8]=s.x,A[Z+j+9]=s.y,A[Z+j+10]=s.z,A[Z+j+11]=Y.itemSize===4?s.w:1)}}d={count:f,texture:C,size:new it(P,w)},n.set(o,d),o.addEventListener("dispose",q)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let _=0;for(let m=0;m<c.length;m++)_+=c[m];const g=o.morphTargetsRelative?1:1-_;l.getUniforms().setValue(i,"morphTargetBaseInfluence",g),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",d.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function W0(i,t,e,n){let s=new WeakMap;function r(l){const c=n.render.frame,h=l.geometry,f=t.get(l,h);if(s.get(f)!==c&&(t.update(f),s.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==c&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;s.get(d)!==c&&(d.update(),s.set(d,c))}return f}function a(){s=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:a}}const El=new be,So=new ml(1,1),Tl=new rl,bl=new N1,Al=new dl,yo=[],Eo=[],To=new Float32Array(16),bo=new Float32Array(9),Ao=new Float32Array(4);function Ri(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let r=yo[s];if(r===void 0&&(r=new Float32Array(s),yo[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function ue(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function fe(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Bs(i,t){let e=Eo[t];e===void 0&&(e=new Int32Array(t),Eo[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function X0(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Y0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ue(e,t))return;i.uniform2fv(this.addr,t),fe(e,t)}}function Z0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(ue(e,t))return;i.uniform3fv(this.addr,t),fe(e,t)}}function K0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ue(e,t))return;i.uniform4fv(this.addr,t),fe(e,t)}}function j0(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(ue(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),fe(e,t)}else{if(ue(e,n))return;Ao.set(n),i.uniformMatrix2fv(this.addr,!1,Ao),fe(e,n)}}function J0(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(ue(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),fe(e,t)}else{if(ue(e,n))return;bo.set(n),i.uniformMatrix3fv(this.addr,!1,bo),fe(e,n)}}function $0(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(ue(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),fe(e,t)}else{if(ue(e,n))return;To.set(n),i.uniformMatrix4fv(this.addr,!1,To),fe(e,n)}}function Q0(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function t2(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ue(e,t))return;i.uniform2iv(this.addr,t),fe(e,t)}}function e2(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ue(e,t))return;i.uniform3iv(this.addr,t),fe(e,t)}}function n2(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ue(e,t))return;i.uniform4iv(this.addr,t),fe(e,t)}}function i2(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function s2(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ue(e,t))return;i.uniform2uiv(this.addr,t),fe(e,t)}}function r2(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ue(e,t))return;i.uniform3uiv(this.addr,t),fe(e,t)}}function a2(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ue(e,t))return;i.uniform4uiv(this.addr,t),fe(e,t)}}function o2(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(So.compareFunction=nl,r=So):r=El,e.setTexture2D(t||r,s)}function l2(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||bl,s)}function c2(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||Al,s)}function h2(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Tl,s)}function u2(i){switch(i){case 5126:return X0;case 35664:return Y0;case 35665:return Z0;case 35666:return K0;case 35674:return j0;case 35675:return J0;case 35676:return $0;case 5124:case 35670:return Q0;case 35667:case 35671:return t2;case 35668:case 35672:return e2;case 35669:case 35673:return n2;case 5125:return i2;case 36294:return s2;case 36295:return r2;case 36296:return a2;case 35678:case 36198:case 36298:case 36306:case 35682:return o2;case 35679:case 36299:case 36307:return l2;case 35680:case 36300:case 36308:case 36293:return c2;case 36289:case 36303:case 36311:case 36292:return h2}}function f2(i,t){i.uniform1fv(this.addr,t)}function d2(i,t){const e=Ri(t,this.size,2);i.uniform2fv(this.addr,e)}function p2(i,t){const e=Ri(t,this.size,3);i.uniform3fv(this.addr,e)}function m2(i,t){const e=Ri(t,this.size,4);i.uniform4fv(this.addr,e)}function _2(i,t){const e=Ri(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function x2(i,t){const e=Ri(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function g2(i,t){const e=Ri(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function v2(i,t){i.uniform1iv(this.addr,t)}function q2(i,t){i.uniform2iv(this.addr,t)}function M2(i,t){i.uniform3iv(this.addr,t)}function S2(i,t){i.uniform4iv(this.addr,t)}function y2(i,t){i.uniform1uiv(this.addr,t)}function E2(i,t){i.uniform2uiv(this.addr,t)}function T2(i,t){i.uniform3uiv(this.addr,t)}function b2(i,t){i.uniform4uiv(this.addr,t)}function A2(i,t,e){const n=this.cache,s=t.length,r=Bs(e,s);ue(n,r)||(i.uniform1iv(this.addr,r),fe(n,r));for(let a=0;a!==s;++a)e.setTexture2D(t[a]||El,r[a])}function w2(i,t,e){const n=this.cache,s=t.length,r=Bs(e,s);ue(n,r)||(i.uniform1iv(this.addr,r),fe(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||bl,r[a])}function R2(i,t,e){const n=this.cache,s=t.length,r=Bs(e,s);ue(n,r)||(i.uniform1iv(this.addr,r),fe(n,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||Al,r[a])}function C2(i,t,e){const n=this.cache,s=t.length,r=Bs(e,s);ue(n,r)||(i.uniform1iv(this.addr,r),fe(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||Tl,r[a])}function P2(i){switch(i){case 5126:return f2;case 35664:return d2;case 35665:return p2;case 35666:return m2;case 35674:return _2;case 35675:return x2;case 35676:return g2;case 5124:case 35670:return v2;case 35667:case 35671:return q2;case 35668:case 35672:return M2;case 35669:case 35673:return S2;case 5125:return y2;case 36294:return E2;case 36295:return T2;case 36296:return b2;case 35678:case 36198:case 36298:case 36306:case 35682:return A2;case 35679:case 36299:case 36307:return w2;case 35680:case 36300:case 36308:case 36293:return R2;case 36289:case 36303:case 36311:case 36292:return C2}}class L2{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=u2(e.type)}}class D2{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=P2(e.type)}}class z2{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(t,e[o.id],n)}}}const Mr=/(\w+)(\])?(\[|\.)?/g;function wo(i,t){i.seq.push(t),i.map[t.id]=t}function U2(i,t,e){const n=i.name,s=n.length;for(Mr.lastIndex=0;;){const r=Mr.exec(n),a=Mr.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){wo(e,c===void 0?new L2(o,i,t):new D2(o,i,t));break}else{let f=e.map[o];f===void 0&&(f=new z2(o),wo(e,f)),e=f}}}class Ps{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=t.getActiveUniform(e,s),a=t.getUniformLocation(e,r.name);U2(r,a,this)}}setValue(t,e,n,s){const r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){const o=e[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,r=t.length;s!==r;++s){const a=t[s];a.id in e&&n.push(a)}return n}}function Ro(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const I2=37297;let N2=0;function F2(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){const o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}const Co=new Nt;function O2(i){Yt._getMatrix(Co,Yt.workingColorSpace,i);const t=`mat3( ${Co.elements.map(e=>e.toFixed(4))} )`;switch(Yt.getTransfer(i)){case Ls:return[t,"LinearTransferOETF"];case Qt:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Po(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const a=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+F2(i.getShaderSource(t),a)}else return s}function B2(i,t){const e=O2(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function H2(i,t){let e;switch(t){case l1:e="Linear";break;case c1:e="Reinhard";break;case h1:e="Cineon";break;case u1:e="ACESFilmic";break;case d1:e="AgX";break;case p1:e="Neutral";break;case f1:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Ms=new z;function V2(){Yt.getLuminanceCoefficients(Ms);const i=Ms.x.toFixed(4),t=Ms.y.toFixed(4),e=Ms.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function G2(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ni).join(`
`)}function k2(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function W2(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(t,s),a=r.name;let o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function Ni(i){return i!==""}function Lo(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Do(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const X2=/^[ \t]*#include +<([\w\d./]+)>/gm;function da(i){return i.replace(X2,Z2)}const Y2=new Map;function Z2(i,t){let e=Ot[t];if(e===void 0){const n=Y2.get(t);if(n!==void 0)e=Ot[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return da(e)}const K2=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function zo(i){return i.replace(K2,j2)}function j2(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Uo(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function J2(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Vo?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===Hl?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===an&&(t="SHADOWMAP_TYPE_VSM"),t}function $2(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case qi:case Mi:t="ENVMAP_TYPE_CUBE";break;case Ns:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Q2(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Mi:t="ENVMAP_MODE_REFRACTION";break}return t}function t4(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Go:t="ENVMAP_BLENDING_MULTIPLY";break;case a1:t="ENVMAP_BLENDING_MIX";break;case o1:t="ENVMAP_BLENDING_ADD";break}return t}function e4(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function n4(i,t,e,n){const s=i.getContext(),r=e.defines;let a=e.vertexShader,o=e.fragmentShader;const l=J2(e),c=$2(e),h=Q2(e),f=t4(e),d=e4(e),p=G2(e),_=k2(r),g=s.createProgram();let m,u,b=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(Ni).join(`
`),m.length>0&&(m+=`
`),u=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(Ni).join(`
`),u.length>0&&(u+=`
`)):(m=[Uo(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ni).join(`
`),u=[Uo(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+f:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Mn?"#define TONE_MAPPING":"",e.toneMapping!==Mn?Ot.tonemapping_pars_fragment:"",e.toneMapping!==Mn?H2("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Ot.colorspace_pars_fragment,B2("linearToOutputTexel",e.outputColorSpace),V2(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Ni).join(`
`)),a=da(a),a=Lo(a,e),a=Do(a,e),o=da(o),o=Lo(o,e),o=Do(o,e),a=zo(a),o=zo(o),e.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,u=["#define varying in",e.glslVersion===Ga?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Ga?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+u);const S=b+m+a,M=b+u+o,P=Ro(s,s.VERTEX_SHADER,S),w=Ro(s,s.FRAGMENT_SHADER,M);s.attachShader(g,P),s.attachShader(g,w),e.index0AttributeName!==void 0?s.bindAttribLocation(g,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(g,0,"position"),s.linkProgram(g);function A(R){if(i.debug.checkShaderErrors){const X=s.getProgramInfoLog(g).trim(),O=s.getShaderInfoLog(P).trim(),Y=s.getShaderInfoLog(w).trim();let Z=!0,V=!0;if(s.getProgramParameter(g,s.LINK_STATUS)===!1)if(Z=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,g,P,w);else{const j=Po(s,P,"vertex"),B=Po(s,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(g,s.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+X+`
`+j+`
`+B)}else X!==""?console.warn("THREE.WebGLProgram: Program Info Log:",X):(O===""||Y==="")&&(V=!1);V&&(R.diagnostics={runnable:Z,programLog:X,vertexShader:{log:O,prefix:m},fragmentShader:{log:Y,prefix:u}})}s.deleteShader(P),s.deleteShader(w),C=new Ps(s,g),E=W2(s,g)}let C;this.getUniforms=function(){return C===void 0&&A(this),C};let E;this.getAttributes=function(){return E===void 0&&A(this),E};let q=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return q===!1&&(q=s.getProgramParameter(g,I2)),q},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(g),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=N2++,this.cacheKey=t,this.usedTimes=1,this.program=g,this.vertexShader=P,this.fragmentShader=w,this}let i4=0;class s4{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new r4(t),e.set(t,n)),n}}class r4{constructor(t){this.id=i4++,this.code=t,this.usedTimes=0}}function a4(i,t,e,n,s,r,a){const o=new ol,l=new s4,c=new Set,h=[],f=s.logarithmicDepthBuffer,d=s.vertexTextures;let p=s.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(E){return c.add(E),E===0?"uv":`uv${E}`}function m(E,q,R,X,O){const Y=X.fog,Z=O.geometry,V=E.isMeshStandardMaterial?X.environment:null,j=(E.isMeshStandardMaterial?e:t).get(E.envMap||V),B=j&&j.mapping===Ns?j.image.height:null,ot=_[E.type];E.precision!==null&&(p=s.getMaxPrecision(E.precision),p!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",p,"instead."));const mt=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,St=mt!==void 0?mt.length:0;let Ut=0;Z.morphAttributes.position!==void 0&&(Ut=1),Z.morphAttributes.normal!==void 0&&(Ut=2),Z.morphAttributes.color!==void 0&&(Ut=3);let Kt,W,rt,yt;if(ot){const $t=Xe[ot];Kt=$t.vertexShader,W=$t.fragmentShader}else Kt=E.vertexShader,W=E.fragmentShader,l.update(E),rt=l.getVertexShaderID(E),yt=l.getFragmentShaderID(E);const at=i.getRenderTarget(),At=i.state.buffers.depth.getReversed(),Gt=O.isInstancedMesh===!0,bt=O.isBatchedMesh===!0,Zt=!!E.map,Q=!!E.matcap,$=!!j,T=!!E.aoMap,Tt=!!E.lightMap,tt=!!E.bumpMap,xt=!!E.normalMap,st=!!E.displacementMap,Pt=!!E.emissiveMap,ft=!!E.metalnessMap,y=!!E.roughnessMap,x=E.anisotropy>0,I=E.clearcoat>0,G=E.dispersion>0,J=E.iridescence>0,k=E.sheen>0,Et=E.transmission>0,ct=x&&!!E.anisotropyMap,_t=I&&!!E.clearcoatMap,Ht=I&&!!E.clearcoatNormalMap,nt=I&&!!E.clearcoatRoughnessMap,vt=J&&!!E.iridescenceMap,Ct=J&&!!E.iridescenceThicknessMap,Lt=k&&!!E.sheenColorMap,qt=k&&!!E.sheenRoughnessMap,Vt=!!E.specularMap,Ft=!!E.specularColorMap,ee=!!E.specularIntensityMap,L=Et&&!!E.transmissionMap,ht=Et&&!!E.thicknessMap,H=!!E.gradientMap,K=!!E.alphaMap,pt=E.alphaTest>0,dt=!!E.alphaHash,It=!!E.extensions;let se=Mn;E.toneMapped&&(at===null||at.isXRRenderTarget===!0)&&(se=i.toneMapping);const _e={shaderID:ot,shaderType:E.type,shaderName:E.name,vertexShader:Kt,fragmentShader:W,defines:E.defines,customVertexShaderID:rt,customFragmentShaderID:yt,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:p,batching:bt,batchingColor:bt&&O._colorsTexture!==null,instancing:Gt,instancingColor:Gt&&O.instanceColor!==null,instancingMorph:Gt&&O.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:at===null?i.outputColorSpace:at.isXRRenderTarget===!0?at.texture.colorSpace:Ei,alphaToCoverage:!!E.alphaToCoverage,map:Zt,matcap:Q,envMap:$,envMapMode:$&&j.mapping,envMapCubeUVHeight:B,aoMap:T,lightMap:Tt,bumpMap:tt,normalMap:xt,displacementMap:d&&st,emissiveMap:Pt,normalMapObjectSpace:xt&&E.normalMapType===g1,normalMapTangentSpace:xt&&E.normalMapType===el,metalnessMap:ft,roughnessMap:y,anisotropy:x,anisotropyMap:ct,clearcoat:I,clearcoatMap:_t,clearcoatNormalMap:Ht,clearcoatRoughnessMap:nt,dispersion:G,iridescence:J,iridescenceMap:vt,iridescenceThicknessMap:Ct,sheen:k,sheenColorMap:Lt,sheenRoughnessMap:qt,specularMap:Vt,specularColorMap:Ft,specularIntensityMap:ee,transmission:Et,transmissionMap:L,thicknessMap:ht,gradientMap:H,opaque:E.transparent===!1&&E.blending===di&&E.alphaToCoverage===!1,alphaMap:K,alphaTest:pt,alphaHash:dt,combine:E.combine,mapUv:Zt&&g(E.map.channel),aoMapUv:T&&g(E.aoMap.channel),lightMapUv:Tt&&g(E.lightMap.channel),bumpMapUv:tt&&g(E.bumpMap.channel),normalMapUv:xt&&g(E.normalMap.channel),displacementMapUv:st&&g(E.displacementMap.channel),emissiveMapUv:Pt&&g(E.emissiveMap.channel),metalnessMapUv:ft&&g(E.metalnessMap.channel),roughnessMapUv:y&&g(E.roughnessMap.channel),anisotropyMapUv:ct&&g(E.anisotropyMap.channel),clearcoatMapUv:_t&&g(E.clearcoatMap.channel),clearcoatNormalMapUv:Ht&&g(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:nt&&g(E.clearcoatRoughnessMap.channel),iridescenceMapUv:vt&&g(E.iridescenceMap.channel),iridescenceThicknessMapUv:Ct&&g(E.iridescenceThicknessMap.channel),sheenColorMapUv:Lt&&g(E.sheenColorMap.channel),sheenRoughnessMapUv:qt&&g(E.sheenRoughnessMap.channel),specularMapUv:Vt&&g(E.specularMap.channel),specularColorMapUv:Ft&&g(E.specularColorMap.channel),specularIntensityMapUv:ee&&g(E.specularIntensityMap.channel),transmissionMapUv:L&&g(E.transmissionMap.channel),thicknessMapUv:ht&&g(E.thicknessMap.channel),alphaMapUv:K&&g(E.alphaMap.channel),vertexTangents:!!Z.attributes.tangent&&(xt||x),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,pointsUvs:O.isPoints===!0&&!!Z.attributes.uv&&(Zt||K),fog:!!Y,useFog:E.fog===!0,fogExp2:!!Y&&Y.isFogExp2,flatShading:E.flatShading===!0,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:f,reverseDepthBuffer:At,skinning:O.isSkinnedMesh===!0,morphTargets:Z.morphAttributes.position!==void 0,morphNormals:Z.morphAttributes.normal!==void 0,morphColors:Z.morphAttributes.color!==void 0,morphTargetsCount:St,morphTextureStride:Ut,numDirLights:q.directional.length,numPointLights:q.point.length,numSpotLights:q.spot.length,numSpotLightMaps:q.spotLightMap.length,numRectAreaLights:q.rectArea.length,numHemiLights:q.hemi.length,numDirLightShadows:q.directionalShadowMap.length,numPointLightShadows:q.pointShadowMap.length,numSpotLightShadows:q.spotShadowMap.length,numSpotLightShadowsWithMaps:q.numSpotLightShadowsWithMaps,numLightProbes:q.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:E.dithering,shadowMapEnabled:i.shadowMap.enabled&&R.length>0,shadowMapType:i.shadowMap.type,toneMapping:se,decodeVideoTexture:Zt&&E.map.isVideoTexture===!0&&Yt.getTransfer(E.map.colorSpace)===Qt,decodeVideoTextureEmissive:Pt&&E.emissiveMap.isVideoTexture===!0&&Yt.getTransfer(E.emissiveMap.colorSpace)===Qt,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===Ye,flipSided:E.side===Te,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:It&&E.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(It&&E.extensions.multiDraw===!0||bt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return _e.vertexUv1s=c.has(1),_e.vertexUv2s=c.has(2),_e.vertexUv3s=c.has(3),c.clear(),_e}function u(E){const q=[];if(E.shaderID?q.push(E.shaderID):(q.push(E.customVertexShaderID),q.push(E.customFragmentShaderID)),E.defines!==void 0)for(const R in E.defines)q.push(R),q.push(E.defines[R]);return E.isRawShaderMaterial===!1&&(b(q,E),S(q,E),q.push(i.outputColorSpace)),q.push(E.customProgramCacheKey),q.join()}function b(E,q){E.push(q.precision),E.push(q.outputColorSpace),E.push(q.envMapMode),E.push(q.envMapCubeUVHeight),E.push(q.mapUv),E.push(q.alphaMapUv),E.push(q.lightMapUv),E.push(q.aoMapUv),E.push(q.bumpMapUv),E.push(q.normalMapUv),E.push(q.displacementMapUv),E.push(q.emissiveMapUv),E.push(q.metalnessMapUv),E.push(q.roughnessMapUv),E.push(q.anisotropyMapUv),E.push(q.clearcoatMapUv),E.push(q.clearcoatNormalMapUv),E.push(q.clearcoatRoughnessMapUv),E.push(q.iridescenceMapUv),E.push(q.iridescenceThicknessMapUv),E.push(q.sheenColorMapUv),E.push(q.sheenRoughnessMapUv),E.push(q.specularMapUv),E.push(q.specularColorMapUv),E.push(q.specularIntensityMapUv),E.push(q.transmissionMapUv),E.push(q.thicknessMapUv),E.push(q.combine),E.push(q.fogExp2),E.push(q.sizeAttenuation),E.push(q.morphTargetsCount),E.push(q.morphAttributeCount),E.push(q.numDirLights),E.push(q.numPointLights),E.push(q.numSpotLights),E.push(q.numSpotLightMaps),E.push(q.numHemiLights),E.push(q.numRectAreaLights),E.push(q.numDirLightShadows),E.push(q.numPointLightShadows),E.push(q.numSpotLightShadows),E.push(q.numSpotLightShadowsWithMaps),E.push(q.numLightProbes),E.push(q.shadowMapType),E.push(q.toneMapping),E.push(q.numClippingPlanes),E.push(q.numClipIntersection),E.push(q.depthPacking)}function S(E,q){o.disableAll(),q.supportsVertexTextures&&o.enable(0),q.instancing&&o.enable(1),q.instancingColor&&o.enable(2),q.instancingMorph&&o.enable(3),q.matcap&&o.enable(4),q.envMap&&o.enable(5),q.normalMapObjectSpace&&o.enable(6),q.normalMapTangentSpace&&o.enable(7),q.clearcoat&&o.enable(8),q.iridescence&&o.enable(9),q.alphaTest&&o.enable(10),q.vertexColors&&o.enable(11),q.vertexAlphas&&o.enable(12),q.vertexUv1s&&o.enable(13),q.vertexUv2s&&o.enable(14),q.vertexUv3s&&o.enable(15),q.vertexTangents&&o.enable(16),q.anisotropy&&o.enable(17),q.alphaHash&&o.enable(18),q.batching&&o.enable(19),q.dispersion&&o.enable(20),q.batchingColor&&o.enable(21),E.push(o.mask),o.disableAll(),q.fog&&o.enable(0),q.useFog&&o.enable(1),q.flatShading&&o.enable(2),q.logarithmicDepthBuffer&&o.enable(3),q.reverseDepthBuffer&&o.enable(4),q.skinning&&o.enable(5),q.morphTargets&&o.enable(6),q.morphNormals&&o.enable(7),q.morphColors&&o.enable(8),q.premultipliedAlpha&&o.enable(9),q.shadowMapEnabled&&o.enable(10),q.doubleSided&&o.enable(11),q.flipSided&&o.enable(12),q.useDepthPacking&&o.enable(13),q.dithering&&o.enable(14),q.transmission&&o.enable(15),q.sheen&&o.enable(16),q.opaque&&o.enable(17),q.pointsUvs&&o.enable(18),q.decodeVideoTexture&&o.enable(19),q.decodeVideoTextureEmissive&&o.enable(20),q.alphaToCoverage&&o.enable(21),E.push(o.mask)}function M(E){const q=_[E.type];let R;if(q){const X=Xe[q];R=j1.clone(X.uniforms)}else R=E.uniforms;return R}function P(E,q){let R;for(let X=0,O=h.length;X<O;X++){const Y=h[X];if(Y.cacheKey===q){R=Y,++R.usedTimes;break}}return R===void 0&&(R=new n4(i,q,E,r),h.push(R)),R}function w(E){if(--E.usedTimes===0){const q=h.indexOf(E);h[q]=h[h.length-1],h.pop(),E.destroy()}}function A(E){l.remove(E)}function C(){l.dispose()}return{getParameters:m,getProgramCacheKey:u,getUniforms:M,acquireProgram:P,releaseProgram:w,releaseShaderCache:A,programs:h,dispose:C}}function o4(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function l4(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function Io(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function No(){const i=[];let t=0;const e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(f,d,p,_,g,m){let u=i[t];return u===void 0?(u={id:f.id,object:f,geometry:d,material:p,groupOrder:_,renderOrder:f.renderOrder,z:g,group:m},i[t]=u):(u.id=f.id,u.object=f,u.geometry=d,u.material=p,u.groupOrder=_,u.renderOrder=f.renderOrder,u.z=g,u.group=m),t++,u}function o(f,d,p,_,g,m){const u=a(f,d,p,_,g,m);p.transmission>0?n.push(u):p.transparent===!0?s.push(u):e.push(u)}function l(f,d,p,_,g,m){const u=a(f,d,p,_,g,m);p.transmission>0?n.unshift(u):p.transparent===!0?s.unshift(u):e.unshift(u)}function c(f,d){e.length>1&&e.sort(f||l4),n.length>1&&n.sort(d||Io),s.length>1&&s.sort(d||Io)}function h(){for(let f=t,d=i.length;f<d;f++){const p=i[f];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:o,unshift:l,finish:h,sort:c}}function c4(){let i=new WeakMap;function t(n,s){const r=i.get(n);let a;return r===void 0?(a=new No,i.set(n,[a])):s>=r.length?(a=new No,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function h4(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new z,color:new Wt};break;case"SpotLight":e={position:new z,direction:new z,color:new Wt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new z,color:new Wt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new z,skyColor:new Wt,groundColor:new Wt};break;case"RectAreaLight":e={color:new Wt,position:new z,halfWidth:new z,halfHeight:new z};break}return i[t.id]=e,e}}}function u4(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new it};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new it};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new it,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let f4=0;function d4(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function p4(i){const t=new h4,e=u4(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new z);const s=new z,r=new oe,a=new oe;function o(c){let h=0,f=0,d=0;for(let E=0;E<9;E++)n.probe[E].set(0,0,0);let p=0,_=0,g=0,m=0,u=0,b=0,S=0,M=0,P=0,w=0,A=0;c.sort(d4);for(let E=0,q=c.length;E<q;E++){const R=c[E],X=R.color,O=R.intensity,Y=R.distance,Z=R.shadow&&R.shadow.map?R.shadow.map.texture:null;if(R.isAmbientLight)h+=X.r*O,f+=X.g*O,d+=X.b*O;else if(R.isLightProbe){for(let V=0;V<9;V++)n.probe[V].addScaledVector(R.sh.coefficients[V],O);A++}else if(R.isDirectionalLight){const V=t.get(R);if(V.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){const j=R.shadow,B=e.get(R);B.shadowIntensity=j.intensity,B.shadowBias=j.bias,B.shadowNormalBias=j.normalBias,B.shadowRadius=j.radius,B.shadowMapSize=j.mapSize,n.directionalShadow[p]=B,n.directionalShadowMap[p]=Z,n.directionalShadowMatrix[p]=R.shadow.matrix,b++}n.directional[p]=V,p++}else if(R.isSpotLight){const V=t.get(R);V.position.setFromMatrixPosition(R.matrixWorld),V.color.copy(X).multiplyScalar(O),V.distance=Y,V.coneCos=Math.cos(R.angle),V.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),V.decay=R.decay,n.spot[g]=V;const j=R.shadow;if(R.map&&(n.spotLightMap[P]=R.map,P++,j.updateMatrices(R),R.castShadow&&w++),n.spotLightMatrix[g]=j.matrix,R.castShadow){const B=e.get(R);B.shadowIntensity=j.intensity,B.shadowBias=j.bias,B.shadowNormalBias=j.normalBias,B.shadowRadius=j.radius,B.shadowMapSize=j.mapSize,n.spotShadow[g]=B,n.spotShadowMap[g]=Z,M++}g++}else if(R.isRectAreaLight){const V=t.get(R);V.color.copy(X).multiplyScalar(O),V.halfWidth.set(R.width*.5,0,0),V.halfHeight.set(0,R.height*.5,0),n.rectArea[m]=V,m++}else if(R.isPointLight){const V=t.get(R);if(V.color.copy(R.color).multiplyScalar(R.intensity),V.distance=R.distance,V.decay=R.decay,R.castShadow){const j=R.shadow,B=e.get(R);B.shadowIntensity=j.intensity,B.shadowBias=j.bias,B.shadowNormalBias=j.normalBias,B.shadowRadius=j.radius,B.shadowMapSize=j.mapSize,B.shadowCameraNear=j.camera.near,B.shadowCameraFar=j.camera.far,n.pointShadow[_]=B,n.pointShadowMap[_]=Z,n.pointShadowMatrix[_]=R.shadow.matrix,S++}n.point[_]=V,_++}else if(R.isHemisphereLight){const V=t.get(R);V.skyColor.copy(R.color).multiplyScalar(O),V.groundColor.copy(R.groundColor).multiplyScalar(O),n.hemi[u]=V,u++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=lt.LTC_FLOAT_1,n.rectAreaLTC2=lt.LTC_FLOAT_2):(n.rectAreaLTC1=lt.LTC_HALF_1,n.rectAreaLTC2=lt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=f,n.ambient[2]=d;const C=n.hash;(C.directionalLength!==p||C.pointLength!==_||C.spotLength!==g||C.rectAreaLength!==m||C.hemiLength!==u||C.numDirectionalShadows!==b||C.numPointShadows!==S||C.numSpotShadows!==M||C.numSpotMaps!==P||C.numLightProbes!==A)&&(n.directional.length=p,n.spot.length=g,n.rectArea.length=m,n.point.length=_,n.hemi.length=u,n.directionalShadow.length=b,n.directionalShadowMap.length=b,n.pointShadow.length=S,n.pointShadowMap.length=S,n.spotShadow.length=M,n.spotShadowMap.length=M,n.directionalShadowMatrix.length=b,n.pointShadowMatrix.length=S,n.spotLightMatrix.length=M+P-w,n.spotLightMap.length=P,n.numSpotLightShadowsWithMaps=w,n.numLightProbes=A,C.directionalLength=p,C.pointLength=_,C.spotLength=g,C.rectAreaLength=m,C.hemiLength=u,C.numDirectionalShadows=b,C.numPointShadows=S,C.numSpotShadows=M,C.numSpotMaps=P,C.numLightProbes=A,n.version=f4++)}function l(c,h){let f=0,d=0,p=0,_=0,g=0;const m=h.matrixWorldInverse;for(let u=0,b=c.length;u<b;u++){const S=c[u];if(S.isDirectionalLight){const M=n.directional[f];M.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(m),f++}else if(S.isSpotLight){const M=n.spot[p];M.position.setFromMatrixPosition(S.matrixWorld),M.position.applyMatrix4(m),M.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(m),p++}else if(S.isRectAreaLight){const M=n.rectArea[_];M.position.setFromMatrixPosition(S.matrixWorld),M.position.applyMatrix4(m),a.identity(),r.copy(S.matrixWorld),r.premultiply(m),a.extractRotation(r),M.halfWidth.set(S.width*.5,0,0),M.halfHeight.set(0,S.height*.5,0),M.halfWidth.applyMatrix4(a),M.halfHeight.applyMatrix4(a),_++}else if(S.isPointLight){const M=n.point[d];M.position.setFromMatrixPosition(S.matrixWorld),M.position.applyMatrix4(m),d++}else if(S.isHemisphereLight){const M=n.hemi[g];M.direction.setFromMatrixPosition(S.matrixWorld),M.direction.transformDirection(m),g++}}}return{setup:o,setupView:l,state:n}}function Fo(i){const t=new p4(i),e=[],n=[];function s(h){c.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function a(h){n.push(h)}function o(){t.setup(e)}function l(h){t.setupView(e,h)}const c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function m4(i){let t=new WeakMap;function e(s,r=0){const a=t.get(s);let o;return a===void 0?(o=new Fo(i),t.set(s,[o])):r>=a.length?(o=new Fo(i),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}const _4=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,x4=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function g4(i,t,e){let n=new pl;const s=new it,r=new it,a=new ae,o=new Nc({depthPacking:x1}),l=new Fc,c={},h=e.maxTextureSize,f={[Sn]:Te,[Te]:Sn,[Ye]:Ye},d=new yn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new it},radius:{value:4}},vertexShader:_4,fragmentShader:x4}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const _=new un;_.setAttribute("position",new Ke(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new pe(_,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Vo;let u=this.type;this.render=function(w,A,C){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;const E=i.getRenderTarget(),q=i.getActiveCubeFace(),R=i.getActiveMipmapLevel(),X=i.state;X.setBlending(qn),X.buffers.color.setClear(1,1,1,1),X.buffers.depth.setTest(!0),X.setScissorTest(!1);const O=u!==an&&this.type===an,Y=u===an&&this.type!==an;for(let Z=0,V=w.length;Z<V;Z++){const j=w[Z],B=j.shadow;if(B===void 0){console.warn("THREE.WebGLShadowMap:",j,"has no shadow.");continue}if(B.autoUpdate===!1&&B.needsUpdate===!1)continue;s.copy(B.mapSize);const ot=B.getFrameExtents();if(s.multiply(ot),r.copy(B.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/ot.x),s.x=r.x*ot.x,B.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/ot.y),s.y=r.y*ot.y,B.mapSize.y=r.y)),B.map===null||O===!0||Y===!0){const St=this.type!==an?{minFilter:ke,magFilter:ke}:{};B.map!==null&&B.map.dispose(),B.map=new Bn(s.x,s.y,St),B.map.texture.name=j.name+".shadowMap",B.camera.updateProjectionMatrix()}i.setRenderTarget(B.map),i.clear();const mt=B.getViewportCount();for(let St=0;St<mt;St++){const Ut=B.getViewport(St);a.set(r.x*Ut.x,r.y*Ut.y,r.x*Ut.z,r.y*Ut.w),X.viewport(a),B.updateMatrices(j,St),n=B.getFrustum(),M(A,C,B.camera,j,this.type)}B.isPointLightShadow!==!0&&this.type===an&&b(B,C),B.needsUpdate=!1}u=this.type,m.needsUpdate=!1,i.setRenderTarget(E,q,R)};function b(w,A){const C=t.update(g);d.defines.VSM_SAMPLES!==w.blurSamples&&(d.defines.VSM_SAMPLES=w.blurSamples,p.defines.VSM_SAMPLES=w.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new Bn(s.x,s.y)),d.uniforms.shadow_pass.value=w.map.texture,d.uniforms.resolution.value=w.mapSize,d.uniforms.radius.value=w.radius,i.setRenderTarget(w.mapPass),i.clear(),i.renderBufferDirect(A,null,C,d,g,null),p.uniforms.shadow_pass.value=w.mapPass.texture,p.uniforms.resolution.value=w.mapSize,p.uniforms.radius.value=w.radius,i.setRenderTarget(w.map),i.clear(),i.renderBufferDirect(A,null,C,p,g,null)}function S(w,A,C,E){let q=null;const R=C.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(R!==void 0)q=R;else if(q=C.isPointLight===!0?l:o,i.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){const X=q.uuid,O=A.uuid;let Y=c[X];Y===void 0&&(Y={},c[X]=Y);let Z=Y[O];Z===void 0&&(Z=q.clone(),Y[O]=Z,A.addEventListener("dispose",P)),q=Z}if(q.visible=A.visible,q.wireframe=A.wireframe,E===an?q.side=A.shadowSide!==null?A.shadowSide:A.side:q.side=A.shadowSide!==null?A.shadowSide:f[A.side],q.alphaMap=A.alphaMap,q.alphaTest=A.alphaTest,q.map=A.map,q.clipShadows=A.clipShadows,q.clippingPlanes=A.clippingPlanes,q.clipIntersection=A.clipIntersection,q.displacementMap=A.displacementMap,q.displacementScale=A.displacementScale,q.displacementBias=A.displacementBias,q.wireframeLinewidth=A.wireframeLinewidth,q.linewidth=A.linewidth,C.isPointLight===!0&&q.isMeshDistanceMaterial===!0){const X=i.properties.get(q);X.light=C}return q}function M(w,A,C,E,q){if(w.visible===!1)return;if(w.layers.test(A.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&q===an)&&(!w.frustumCulled||n.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,w.matrixWorld);const O=t.update(w),Y=w.material;if(Array.isArray(Y)){const Z=O.groups;for(let V=0,j=Z.length;V<j;V++){const B=Z[V],ot=Y[B.materialIndex];if(ot&&ot.visible){const mt=S(w,ot,E,q);w.onBeforeShadow(i,w,A,C,O,mt,B),i.renderBufferDirect(C,null,O,mt,w,B),w.onAfterShadow(i,w,A,C,O,mt,B)}}}else if(Y.visible){const Z=S(w,Y,E,q);w.onBeforeShadow(i,w,A,C,O,Z,null),i.renderBufferDirect(C,null,O,Z,w,null),w.onAfterShadow(i,w,A,C,O,Z,null)}}const X=w.children;for(let O=0,Y=X.length;O<Y;O++)M(X[O],A,C,E,q)}function P(w){w.target.removeEventListener("dispose",P);for(const C in c){const E=c[C],q=w.target.uuid;q in E&&(E[q].dispose(),delete E[q])}}}const v4={[br]:Ar,[wr]:Pr,[Rr]:Lr,[vi]:Cr,[Ar]:br,[Pr]:wr,[Lr]:Rr,[Cr]:vi};function q4(i,t){function e(){let L=!1;const ht=new ae;let H=null;const K=new ae(0,0,0,0);return{setMask:function(pt){H!==pt&&!L&&(i.colorMask(pt,pt,pt,pt),H=pt)},setLocked:function(pt){L=pt},setClear:function(pt,dt,It,se,_e){_e===!0&&(pt*=se,dt*=se,It*=se),ht.set(pt,dt,It,se),K.equals(ht)===!1&&(i.clearColor(pt,dt,It,se),K.copy(ht))},reset:function(){L=!1,H=null,K.set(-1,0,0,0)}}}function n(){let L=!1,ht=!1,H=null,K=null,pt=null;return{setReversed:function(dt){if(ht!==dt){const It=t.get("EXT_clip_control");ht?It.clipControlEXT(It.LOWER_LEFT_EXT,It.ZERO_TO_ONE_EXT):It.clipControlEXT(It.LOWER_LEFT_EXT,It.NEGATIVE_ONE_TO_ONE_EXT);const se=pt;pt=null,this.setClear(se)}ht=dt},getReversed:function(){return ht},setTest:function(dt){dt?at(i.DEPTH_TEST):At(i.DEPTH_TEST)},setMask:function(dt){H!==dt&&!L&&(i.depthMask(dt),H=dt)},setFunc:function(dt){if(ht&&(dt=v4[dt]),K!==dt){switch(dt){case br:i.depthFunc(i.NEVER);break;case Ar:i.depthFunc(i.ALWAYS);break;case wr:i.depthFunc(i.LESS);break;case vi:i.depthFunc(i.LEQUAL);break;case Rr:i.depthFunc(i.EQUAL);break;case Cr:i.depthFunc(i.GEQUAL);break;case Pr:i.depthFunc(i.GREATER);break;case Lr:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}K=dt}},setLocked:function(dt){L=dt},setClear:function(dt){pt!==dt&&(ht&&(dt=1-dt),i.clearDepth(dt),pt=dt)},reset:function(){L=!1,H=null,K=null,pt=null,ht=!1}}}function s(){let L=!1,ht=null,H=null,K=null,pt=null,dt=null,It=null,se=null,_e=null;return{setTest:function($t){L||($t?at(i.STENCIL_TEST):At(i.STENCIL_TEST))},setMask:function($t){ht!==$t&&!L&&(i.stencilMask($t),ht=$t)},setFunc:function($t,Ne,$e){(H!==$t||K!==Ne||pt!==$e)&&(i.stencilFunc($t,Ne,$e),H=$t,K=Ne,pt=$e)},setOp:function($t,Ne,$e){(dt!==$t||It!==Ne||se!==$e)&&(i.stencilOp($t,Ne,$e),dt=$t,It=Ne,se=$e)},setLocked:function($t){L=$t},setClear:function($t){_e!==$t&&(i.clearStencil($t),_e=$t)},reset:function(){L=!1,ht=null,H=null,K=null,pt=null,dt=null,It=null,se=null,_e=null}}}const r=new e,a=new n,o=new s,l=new WeakMap,c=new WeakMap;let h={},f={},d=new WeakMap,p=[],_=null,g=!1,m=null,u=null,b=null,S=null,M=null,P=null,w=null,A=new Wt(0,0,0),C=0,E=!1,q=null,R=null,X=null,O=null,Y=null;const Z=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let V=!1,j=0;const B=i.getParameter(i.VERSION);B.indexOf("WebGL")!==-1?(j=parseFloat(/^WebGL (\d)/.exec(B)[1]),V=j>=1):B.indexOf("OpenGL ES")!==-1&&(j=parseFloat(/^OpenGL ES (\d)/.exec(B)[1]),V=j>=2);let ot=null,mt={};const St=i.getParameter(i.SCISSOR_BOX),Ut=i.getParameter(i.VIEWPORT),Kt=new ae().fromArray(St),W=new ae().fromArray(Ut);function rt(L,ht,H,K){const pt=new Uint8Array(4),dt=i.createTexture();i.bindTexture(L,dt),i.texParameteri(L,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(L,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let It=0;It<H;It++)L===i.TEXTURE_3D||L===i.TEXTURE_2D_ARRAY?i.texImage3D(ht,0,i.RGBA,1,1,K,0,i.RGBA,i.UNSIGNED_BYTE,pt):i.texImage2D(ht+It,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,pt);return dt}const yt={};yt[i.TEXTURE_2D]=rt(i.TEXTURE_2D,i.TEXTURE_2D,1),yt[i.TEXTURE_CUBE_MAP]=rt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),yt[i.TEXTURE_2D_ARRAY]=rt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),yt[i.TEXTURE_3D]=rt(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),at(i.DEPTH_TEST),a.setFunc(vi),tt(!1),xt(Bl),at(i.CULL_FACE),T(qn);function at(L){h[L]!==!0&&(i.enable(L),h[L]=!0)}function At(L){h[L]!==!1&&(i.disable(L),h[L]=!1)}function Gt(L,ht){return f[L]!==ht?(i.bindFramebuffer(L,ht),f[L]=ht,L===i.DRAW_FRAMEBUFFER&&(f[i.FRAMEBUFFER]=ht),L===i.FRAMEBUFFER&&(f[i.DRAW_FRAMEBUFFER]=ht),!0):!1}function bt(L,ht){let H=p,K=!1;if(L){H=d.get(ht),H===void 0&&(H=[],d.set(ht,H));const pt=L.textures;if(H.length!==pt.length||H[0]!==i.COLOR_ATTACHMENT0){for(let dt=0,It=pt.length;dt<It;dt++)H[dt]=i.COLOR_ATTACHMENT0+dt;H.length=pt.length,K=!0}}else H[0]!==i.BACK&&(H[0]=i.BACK,K=!0);K&&i.drawBuffers(H)}function Zt(L){return _!==L?(i.useProgram(L),_=L,!0):!1}const Q={[Un]:i.FUNC_ADD,[Gl]:i.FUNC_SUBTRACT,[kl]:i.FUNC_REVERSE_SUBTRACT};Q[Wl]=i.MIN,Q[Xl]=i.MAX;const $={[Yl]:i.ZERO,[Zl]:i.ONE,[Kl]:i.SRC_COLOR,[Er]:i.SRC_ALPHA,[e1]:i.SRC_ALPHA_SATURATE,[Ql]:i.DST_COLOR,[Jl]:i.DST_ALPHA,[jl]:i.ONE_MINUS_SRC_COLOR,[Tr]:i.ONE_MINUS_SRC_ALPHA,[t1]:i.ONE_MINUS_DST_COLOR,[$l]:i.ONE_MINUS_DST_ALPHA,[n1]:i.CONSTANT_COLOR,[i1]:i.ONE_MINUS_CONSTANT_COLOR,[s1]:i.CONSTANT_ALPHA,[r1]:i.ONE_MINUS_CONSTANT_ALPHA};function T(L,ht,H,K,pt,dt,It,se,_e,$t){if(L===qn){g===!0&&(At(i.BLEND),g=!1);return}if(g===!1&&(at(i.BLEND),g=!0),L!==Vl){if(L!==m||$t!==E){if((u!==Un||M!==Un)&&(i.blendEquation(i.FUNC_ADD),u=Un,M=Un),$t)switch(L){case di:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Fa:i.blendFunc(i.ONE,i.ONE);break;case Oa:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Ba:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case di:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Fa:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Oa:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Ba:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}b=null,S=null,P=null,w=null,A.set(0,0,0),C=0,m=L,E=$t}return}pt=pt||ht,dt=dt||H,It=It||K,(ht!==u||pt!==M)&&(i.blendEquationSeparate(Q[ht],Q[pt]),u=ht,M=pt),(H!==b||K!==S||dt!==P||It!==w)&&(i.blendFuncSeparate($[H],$[K],$[dt],$[It]),b=H,S=K,P=dt,w=It),(se.equals(A)===!1||_e!==C)&&(i.blendColor(se.r,se.g,se.b,_e),A.copy(se),C=_e),m=L,E=!1}function Tt(L,ht){L.side===Ye?At(i.CULL_FACE):at(i.CULL_FACE);let H=L.side===Te;ht&&(H=!H),tt(H),L.blending===di&&L.transparent===!1?T(qn):T(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),a.setFunc(L.depthFunc),a.setTest(L.depthTest),a.setMask(L.depthWrite),r.setMask(L.colorWrite);const K=L.stencilWrite;o.setTest(K),K&&(o.setMask(L.stencilWriteMask),o.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),o.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),Pt(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?at(i.SAMPLE_ALPHA_TO_COVERAGE):At(i.SAMPLE_ALPHA_TO_COVERAGE)}function tt(L){q!==L&&(L?i.frontFace(i.CW):i.frontFace(i.CCW),q=L)}function xt(L){at(i.CULL_FACE),L!==R&&i.cullFace(i.BACK),R=L}function st(L){L!==X&&(V&&i.lineWidth(L),X=L)}function Pt(L,ht,H){L?(at(i.POLYGON_OFFSET_FILL),(O!==ht||Y!==H)&&(i.polygonOffset(ht,H),O=ht,Y=H)):At(i.POLYGON_OFFSET_FILL)}function ft(L){L?at(i.SCISSOR_TEST):At(i.SCISSOR_TEST)}function y(L){L===void 0&&(L=i.TEXTURE0+Z-1),ot!==L&&(i.activeTexture(L),ot=L)}function x(L,ht,H){H===void 0&&(ot===null?H=i.TEXTURE0+Z-1:H=ot);let K=mt[H];K===void 0&&(K={type:void 0,texture:void 0},mt[H]=K),(K.type!==L||K.texture!==ht)&&(ot!==H&&(i.activeTexture(H),ot=H),i.bindTexture(L,ht||yt[L]),K.type=L,K.texture=ht)}function I(){const L=mt[ot];L!==void 0&&L.type!==void 0&&(i.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function G(){try{i.compressedTexImage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function J(){try{i.compressedTexImage3D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function k(){try{i.texSubImage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Et(){try{i.texSubImage3D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ct(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function _t(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Ht(){try{i.texStorage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function nt(){try{i.texStorage3D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function vt(){try{i.texImage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Ct(){try{i.texImage3D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Lt(L){Kt.equals(L)===!1&&(i.scissor(L.x,L.y,L.z,L.w),Kt.copy(L))}function qt(L){W.equals(L)===!1&&(i.viewport(L.x,L.y,L.z,L.w),W.copy(L))}function Vt(L,ht){let H=c.get(ht);H===void 0&&(H=new WeakMap,c.set(ht,H));let K=H.get(L);K===void 0&&(K=i.getUniformBlockIndex(ht,L.name),H.set(L,K))}function Ft(L,ht){const K=c.get(ht).get(L);l.get(ht)!==K&&(i.uniformBlockBinding(ht,K,L.__bindingPointIndex),l.set(ht,K))}function ee(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},ot=null,mt={},f={},d=new WeakMap,p=[],_=null,g=!1,m=null,u=null,b=null,S=null,M=null,P=null,w=null,A=new Wt(0,0,0),C=0,E=!1,q=null,R=null,X=null,O=null,Y=null,Kt.set(0,0,i.canvas.width,i.canvas.height),W.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:at,disable:At,bindFramebuffer:Gt,drawBuffers:bt,useProgram:Zt,setBlending:T,setMaterial:Tt,setFlipSided:tt,setCullFace:xt,setLineWidth:st,setPolygonOffset:Pt,setScissorTest:ft,activeTexture:y,bindTexture:x,unbindTexture:I,compressedTexImage2D:G,compressedTexImage3D:J,texImage2D:vt,texImage3D:Ct,updateUBOMapping:Vt,uniformBlockBinding:Ft,texStorage2D:Ht,texStorage3D:nt,texSubImage2D:k,texSubImage3D:Et,compressedTexSubImage2D:ct,compressedTexSubImage3D:_t,scissor:Lt,viewport:qt,reset:ee}}function M4(i,t,e,n,s,r,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new it,h=new WeakMap;let f;const d=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(y,x){return p?new OffscreenCanvas(y,x):zs("canvas")}function g(y,x,I){let G=1;const J=ft(y);if((J.width>I||J.height>I)&&(G=I/Math.max(J.width,J.height)),G<1)if(typeof HTMLImageElement<"u"&&y instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&y instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&y instanceof ImageBitmap||typeof VideoFrame<"u"&&y instanceof VideoFrame){const k=Math.floor(G*J.width),Et=Math.floor(G*J.height);f===void 0&&(f=_(k,Et));const ct=x?_(k,Et):f;return ct.width=k,ct.height=Et,ct.getContext("2d").drawImage(y,0,0,k,Et),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+J.width+"x"+J.height+") to ("+k+"x"+Et+")."),ct}else return"data"in y&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+J.width+"x"+J.height+")."),y;return y}function m(y){return y.generateMipmaps}function u(y){i.generateMipmap(y)}function b(y){return y.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:y.isWebGL3DRenderTarget?i.TEXTURE_3D:y.isWebGLArrayRenderTarget||y.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function S(y,x,I,G,J=!1){if(y!==null){if(i[y]!==void 0)return i[y];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+y+"'")}let k=x;if(x===i.RED&&(I===i.FLOAT&&(k=i.R32F),I===i.HALF_FLOAT&&(k=i.R16F),I===i.UNSIGNED_BYTE&&(k=i.R8)),x===i.RED_INTEGER&&(I===i.UNSIGNED_BYTE&&(k=i.R8UI),I===i.UNSIGNED_SHORT&&(k=i.R16UI),I===i.UNSIGNED_INT&&(k=i.R32UI),I===i.BYTE&&(k=i.R8I),I===i.SHORT&&(k=i.R16I),I===i.INT&&(k=i.R32I)),x===i.RG&&(I===i.FLOAT&&(k=i.RG32F),I===i.HALF_FLOAT&&(k=i.RG16F),I===i.UNSIGNED_BYTE&&(k=i.RG8)),x===i.RG_INTEGER&&(I===i.UNSIGNED_BYTE&&(k=i.RG8UI),I===i.UNSIGNED_SHORT&&(k=i.RG16UI),I===i.UNSIGNED_INT&&(k=i.RG32UI),I===i.BYTE&&(k=i.RG8I),I===i.SHORT&&(k=i.RG16I),I===i.INT&&(k=i.RG32I)),x===i.RGB_INTEGER&&(I===i.UNSIGNED_BYTE&&(k=i.RGB8UI),I===i.UNSIGNED_SHORT&&(k=i.RGB16UI),I===i.UNSIGNED_INT&&(k=i.RGB32UI),I===i.BYTE&&(k=i.RGB8I),I===i.SHORT&&(k=i.RGB16I),I===i.INT&&(k=i.RGB32I)),x===i.RGBA_INTEGER&&(I===i.UNSIGNED_BYTE&&(k=i.RGBA8UI),I===i.UNSIGNED_SHORT&&(k=i.RGBA16UI),I===i.UNSIGNED_INT&&(k=i.RGBA32UI),I===i.BYTE&&(k=i.RGBA8I),I===i.SHORT&&(k=i.RGBA16I),I===i.INT&&(k=i.RGBA32I)),x===i.RGB&&I===i.UNSIGNED_INT_5_9_9_9_REV&&(k=i.RGB9_E5),x===i.RGBA){const Et=J?Ls:Yt.getTransfer(G);I===i.FLOAT&&(k=i.RGBA32F),I===i.HALF_FLOAT&&(k=i.RGBA16F),I===i.UNSIGNED_BYTE&&(k=Et===Qt?i.SRGB8_ALPHA8:i.RGBA8),I===i.UNSIGNED_SHORT_4_4_4_4&&(k=i.RGBA4),I===i.UNSIGNED_SHORT_5_5_5_1&&(k=i.RGB5_A1)}return(k===i.R16F||k===i.R32F||k===i.RG16F||k===i.RG32F||k===i.RGBA16F||k===i.RGBA32F)&&t.get("EXT_color_buffer_float"),k}function M(y,x){let I;return y?x===null||x===On||x===Si?I=i.DEPTH24_STENCIL8:x===on?I=i.DEPTH32F_STENCIL8:x===Hi&&(I=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===On||x===Si?I=i.DEPTH_COMPONENT24:x===on?I=i.DEPTH_COMPONENT32F:x===Hi&&(I=i.DEPTH_COMPONENT16),I}function P(y,x){return m(y)===!0||y.isFramebufferTexture&&y.minFilter!==ke&&y.minFilter!==Ze?Math.log2(Math.max(x.width,x.height))+1:y.mipmaps!==void 0&&y.mipmaps.length>0?y.mipmaps.length:y.isCompressedTexture&&Array.isArray(y.image)?x.mipmaps.length:1}function w(y){const x=y.target;x.removeEventListener("dispose",w),C(x),x.isVideoTexture&&h.delete(x)}function A(y){const x=y.target;x.removeEventListener("dispose",A),q(x)}function C(y){const x=n.get(y);if(x.__webglInit===void 0)return;const I=y.source,G=d.get(I);if(G){const J=G[x.__cacheKey];J.usedTimes--,J.usedTimes===0&&E(y),Object.keys(G).length===0&&d.delete(I)}n.remove(y)}function E(y){const x=n.get(y);i.deleteTexture(x.__webglTexture);const I=y.source,G=d.get(I);delete G[x.__cacheKey],a.memory.textures--}function q(y){const x=n.get(y);if(y.depthTexture&&(y.depthTexture.dispose(),n.remove(y.depthTexture)),y.isWebGLCubeRenderTarget)for(let G=0;G<6;G++){if(Array.isArray(x.__webglFramebuffer[G]))for(let J=0;J<x.__webglFramebuffer[G].length;J++)i.deleteFramebuffer(x.__webglFramebuffer[G][J]);else i.deleteFramebuffer(x.__webglFramebuffer[G]);x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer[G])}else{if(Array.isArray(x.__webglFramebuffer))for(let G=0;G<x.__webglFramebuffer.length;G++)i.deleteFramebuffer(x.__webglFramebuffer[G]);else i.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&i.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let G=0;G<x.__webglColorRenderbuffer.length;G++)x.__webglColorRenderbuffer[G]&&i.deleteRenderbuffer(x.__webglColorRenderbuffer[G]);x.__webglDepthRenderbuffer&&i.deleteRenderbuffer(x.__webglDepthRenderbuffer)}const I=y.textures;for(let G=0,J=I.length;G<J;G++){const k=n.get(I[G]);k.__webglTexture&&(i.deleteTexture(k.__webglTexture),a.memory.textures--),n.remove(I[G])}n.remove(y)}let R=0;function X(){R=0}function O(){const y=R;return y>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+y+" texture units while this GPU supports only "+s.maxTextures),R+=1,y}function Y(y){const x=[];return x.push(y.wrapS),x.push(y.wrapT),x.push(y.wrapR||0),x.push(y.magFilter),x.push(y.minFilter),x.push(y.anisotropy),x.push(y.internalFormat),x.push(y.format),x.push(y.type),x.push(y.generateMipmaps),x.push(y.premultiplyAlpha),x.push(y.flipY),x.push(y.unpackAlignment),x.push(y.colorSpace),x.join()}function Z(y,x){const I=n.get(y);if(y.isVideoTexture&&st(y),y.isRenderTargetTexture===!1&&y.version>0&&I.__version!==y.version){const G=y.image;if(G===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(G.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{W(I,y,x);return}}e.bindTexture(i.TEXTURE_2D,I.__webglTexture,i.TEXTURE0+x)}function V(y,x){const I=n.get(y);if(y.version>0&&I.__version!==y.version){W(I,y,x);return}e.bindTexture(i.TEXTURE_2D_ARRAY,I.__webglTexture,i.TEXTURE0+x)}function j(y,x){const I=n.get(y);if(y.version>0&&I.__version!==y.version){W(I,y,x);return}e.bindTexture(i.TEXTURE_3D,I.__webglTexture,i.TEXTURE0+x)}function B(y,x){const I=n.get(y);if(y.version>0&&I.__version!==y.version){rt(I,y,x);return}e.bindTexture(i.TEXTURE_CUBE_MAP,I.__webglTexture,i.TEXTURE0+x)}const ot={[Ur]:i.REPEAT,[Nn]:i.CLAMP_TO_EDGE,[Ir]:i.MIRRORED_REPEAT},mt={[ke]:i.NEAREST,[m1]:i.NEAREST_MIPMAP_NEAREST,[$i]:i.NEAREST_MIPMAP_LINEAR,[Ze]:i.LINEAR,[ks]:i.LINEAR_MIPMAP_NEAREST,[Fn]:i.LINEAR_MIPMAP_LINEAR},St={[v1]:i.NEVER,[T1]:i.ALWAYS,[q1]:i.LESS,[nl]:i.LEQUAL,[M1]:i.EQUAL,[E1]:i.GEQUAL,[S1]:i.GREATER,[y1]:i.NOTEQUAL};function Ut(y,x){if(x.type===on&&t.has("OES_texture_float_linear")===!1&&(x.magFilter===Ze||x.magFilter===ks||x.magFilter===$i||x.magFilter===Fn||x.minFilter===Ze||x.minFilter===ks||x.minFilter===$i||x.minFilter===Fn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(y,i.TEXTURE_WRAP_S,ot[x.wrapS]),i.texParameteri(y,i.TEXTURE_WRAP_T,ot[x.wrapT]),(y===i.TEXTURE_3D||y===i.TEXTURE_2D_ARRAY)&&i.texParameteri(y,i.TEXTURE_WRAP_R,ot[x.wrapR]),i.texParameteri(y,i.TEXTURE_MAG_FILTER,mt[x.magFilter]),i.texParameteri(y,i.TEXTURE_MIN_FILTER,mt[x.minFilter]),x.compareFunction&&(i.texParameteri(y,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(y,i.TEXTURE_COMPARE_FUNC,St[x.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===ke||x.minFilter!==$i&&x.minFilter!==Fn||x.type===on&&t.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||n.get(x).__currentAnisotropy){const I=t.get("EXT_texture_filter_anisotropic");i.texParameterf(y,I.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,s.getMaxAnisotropy())),n.get(x).__currentAnisotropy=x.anisotropy}}}function Kt(y,x){let I=!1;y.__webglInit===void 0&&(y.__webglInit=!0,x.addEventListener("dispose",w));const G=x.source;let J=d.get(G);J===void 0&&(J={},d.set(G,J));const k=Y(x);if(k!==y.__cacheKey){J[k]===void 0&&(J[k]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,I=!0),J[k].usedTimes++;const Et=J[y.__cacheKey];Et!==void 0&&(J[y.__cacheKey].usedTimes--,Et.usedTimes===0&&E(x)),y.__cacheKey=k,y.__webglTexture=J[k].texture}return I}function W(y,x,I){let G=i.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(G=i.TEXTURE_2D_ARRAY),x.isData3DTexture&&(G=i.TEXTURE_3D);const J=Kt(y,x),k=x.source;e.bindTexture(G,y.__webglTexture,i.TEXTURE0+I);const Et=n.get(k);if(k.version!==Et.__version||J===!0){e.activeTexture(i.TEXTURE0+I);const ct=Yt.getPrimaries(Yt.workingColorSpace),_t=x.colorSpace===vn?null:Yt.getPrimaries(x.colorSpace),Ht=x.colorSpace===vn||ct===_t?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ht);let nt=g(x.image,!1,s.maxTextureSize);nt=Pt(x,nt);const vt=r.convert(x.format,x.colorSpace),Ct=r.convert(x.type);let Lt=S(x.internalFormat,vt,Ct,x.colorSpace,x.isVideoTexture);Ut(G,x);let qt;const Vt=x.mipmaps,Ft=x.isVideoTexture!==!0,ee=Et.__version===void 0||J===!0,L=k.dataReady,ht=P(x,nt);if(x.isDepthTexture)Lt=M(x.format===yi,x.type),ee&&(Ft?e.texStorage2D(i.TEXTURE_2D,1,Lt,nt.width,nt.height):e.texImage2D(i.TEXTURE_2D,0,Lt,nt.width,nt.height,0,vt,Ct,null));else if(x.isDataTexture)if(Vt.length>0){Ft&&ee&&e.texStorage2D(i.TEXTURE_2D,ht,Lt,Vt[0].width,Vt[0].height);for(let H=0,K=Vt.length;H<K;H++)qt=Vt[H],Ft?L&&e.texSubImage2D(i.TEXTURE_2D,H,0,0,qt.width,qt.height,vt,Ct,qt.data):e.texImage2D(i.TEXTURE_2D,H,Lt,qt.width,qt.height,0,vt,Ct,qt.data);x.generateMipmaps=!1}else Ft?(ee&&e.texStorage2D(i.TEXTURE_2D,ht,Lt,nt.width,nt.height),L&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,nt.width,nt.height,vt,Ct,nt.data)):e.texImage2D(i.TEXTURE_2D,0,Lt,nt.width,nt.height,0,vt,Ct,nt.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){Ft&&ee&&e.texStorage3D(i.TEXTURE_2D_ARRAY,ht,Lt,Vt[0].width,Vt[0].height,nt.depth);for(let H=0,K=Vt.length;H<K;H++)if(qt=Vt[H],x.format!==Ge)if(vt!==null)if(Ft){if(L)if(x.layerUpdates.size>0){const pt=po(qt.width,qt.height,x.format,x.type);for(const dt of x.layerUpdates){const It=qt.data.subarray(dt*pt/qt.data.BYTES_PER_ELEMENT,(dt+1)*pt/qt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,H,0,0,dt,qt.width,qt.height,1,vt,It)}x.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,H,0,0,0,qt.width,qt.height,nt.depth,vt,qt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,H,Lt,qt.width,qt.height,nt.depth,0,qt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ft?L&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,H,0,0,0,qt.width,qt.height,nt.depth,vt,Ct,qt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,H,Lt,qt.width,qt.height,nt.depth,0,vt,Ct,qt.data)}else{Ft&&ee&&e.texStorage2D(i.TEXTURE_2D,ht,Lt,Vt[0].width,Vt[0].height);for(let H=0,K=Vt.length;H<K;H++)qt=Vt[H],x.format!==Ge?vt!==null?Ft?L&&e.compressedTexSubImage2D(i.TEXTURE_2D,H,0,0,qt.width,qt.height,vt,qt.data):e.compressedTexImage2D(i.TEXTURE_2D,H,Lt,qt.width,qt.height,0,qt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ft?L&&e.texSubImage2D(i.TEXTURE_2D,H,0,0,qt.width,qt.height,vt,Ct,qt.data):e.texImage2D(i.TEXTURE_2D,H,Lt,qt.width,qt.height,0,vt,Ct,qt.data)}else if(x.isDataArrayTexture)if(Ft){if(ee&&e.texStorage3D(i.TEXTURE_2D_ARRAY,ht,Lt,nt.width,nt.height,nt.depth),L)if(x.layerUpdates.size>0){const H=po(nt.width,nt.height,x.format,x.type);for(const K of x.layerUpdates){const pt=nt.data.subarray(K*H/nt.data.BYTES_PER_ELEMENT,(K+1)*H/nt.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,K,nt.width,nt.height,1,vt,Ct,pt)}x.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,nt.width,nt.height,nt.depth,vt,Ct,nt.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Lt,nt.width,nt.height,nt.depth,0,vt,Ct,nt.data);else if(x.isData3DTexture)Ft?(ee&&e.texStorage3D(i.TEXTURE_3D,ht,Lt,nt.width,nt.height,nt.depth),L&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,nt.width,nt.height,nt.depth,vt,Ct,nt.data)):e.texImage3D(i.TEXTURE_3D,0,Lt,nt.width,nt.height,nt.depth,0,vt,Ct,nt.data);else if(x.isFramebufferTexture){if(ee)if(Ft)e.texStorage2D(i.TEXTURE_2D,ht,Lt,nt.width,nt.height);else{let H=nt.width,K=nt.height;for(let pt=0;pt<ht;pt++)e.texImage2D(i.TEXTURE_2D,pt,Lt,H,K,0,vt,Ct,null),H>>=1,K>>=1}}else if(Vt.length>0){if(Ft&&ee){const H=ft(Vt[0]);e.texStorage2D(i.TEXTURE_2D,ht,Lt,H.width,H.height)}for(let H=0,K=Vt.length;H<K;H++)qt=Vt[H],Ft?L&&e.texSubImage2D(i.TEXTURE_2D,H,0,0,vt,Ct,qt):e.texImage2D(i.TEXTURE_2D,H,Lt,vt,Ct,qt);x.generateMipmaps=!1}else if(Ft){if(ee){const H=ft(nt);e.texStorage2D(i.TEXTURE_2D,ht,Lt,H.width,H.height)}L&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,vt,Ct,nt)}else e.texImage2D(i.TEXTURE_2D,0,Lt,vt,Ct,nt);m(x)&&u(G),Et.__version=k.version,x.onUpdate&&x.onUpdate(x)}y.__version=x.version}function rt(y,x,I){if(x.image.length!==6)return;const G=Kt(y,x),J=x.source;e.bindTexture(i.TEXTURE_CUBE_MAP,y.__webglTexture,i.TEXTURE0+I);const k=n.get(J);if(J.version!==k.__version||G===!0){e.activeTexture(i.TEXTURE0+I);const Et=Yt.getPrimaries(Yt.workingColorSpace),ct=x.colorSpace===vn?null:Yt.getPrimaries(x.colorSpace),_t=x.colorSpace===vn||Et===ct?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,_t);const Ht=x.isCompressedTexture||x.image[0].isCompressedTexture,nt=x.image[0]&&x.image[0].isDataTexture,vt=[];for(let K=0;K<6;K++)!Ht&&!nt?vt[K]=g(x.image[K],!0,s.maxCubemapSize):vt[K]=nt?x.image[K].image:x.image[K],vt[K]=Pt(x,vt[K]);const Ct=vt[0],Lt=r.convert(x.format,x.colorSpace),qt=r.convert(x.type),Vt=S(x.internalFormat,Lt,qt,x.colorSpace),Ft=x.isVideoTexture!==!0,ee=k.__version===void 0||G===!0,L=J.dataReady;let ht=P(x,Ct);Ut(i.TEXTURE_CUBE_MAP,x);let H;if(Ht){Ft&&ee&&e.texStorage2D(i.TEXTURE_CUBE_MAP,ht,Vt,Ct.width,Ct.height);for(let K=0;K<6;K++){H=vt[K].mipmaps;for(let pt=0;pt<H.length;pt++){const dt=H[pt];x.format!==Ge?Lt!==null?Ft?L&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,pt,0,0,dt.width,dt.height,Lt,dt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,pt,Vt,dt.width,dt.height,0,dt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ft?L&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,pt,0,0,dt.width,dt.height,Lt,qt,dt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,pt,Vt,dt.width,dt.height,0,Lt,qt,dt.data)}}}else{if(H=x.mipmaps,Ft&&ee){H.length>0&&ht++;const K=ft(vt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,ht,Vt,K.width,K.height)}for(let K=0;K<6;K++)if(nt){Ft?L&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,vt[K].width,vt[K].height,Lt,qt,vt[K].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,Vt,vt[K].width,vt[K].height,0,Lt,qt,vt[K].data);for(let pt=0;pt<H.length;pt++){const It=H[pt].image[K].image;Ft?L&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,pt+1,0,0,It.width,It.height,Lt,qt,It.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,pt+1,Vt,It.width,It.height,0,Lt,qt,It.data)}}else{Ft?L&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,Lt,qt,vt[K]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,Vt,Lt,qt,vt[K]);for(let pt=0;pt<H.length;pt++){const dt=H[pt];Ft?L&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,pt+1,0,0,Lt,qt,dt.image[K]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,pt+1,Vt,Lt,qt,dt.image[K])}}}m(x)&&u(i.TEXTURE_CUBE_MAP),k.__version=J.version,x.onUpdate&&x.onUpdate(x)}y.__version=x.version}function yt(y,x,I,G,J,k){const Et=r.convert(I.format,I.colorSpace),ct=r.convert(I.type),_t=S(I.internalFormat,Et,ct,I.colorSpace),Ht=n.get(x),nt=n.get(I);if(nt.__renderTarget=x,!Ht.__hasExternalTextures){const vt=Math.max(1,x.width>>k),Ct=Math.max(1,x.height>>k);J===i.TEXTURE_3D||J===i.TEXTURE_2D_ARRAY?e.texImage3D(J,k,_t,vt,Ct,x.depth,0,Et,ct,null):e.texImage2D(J,k,_t,vt,Ct,0,Et,ct,null)}e.bindFramebuffer(i.FRAMEBUFFER,y),xt(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,G,J,nt.__webglTexture,0,tt(x)):(J===i.TEXTURE_2D||J>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,G,J,nt.__webglTexture,k),e.bindFramebuffer(i.FRAMEBUFFER,null)}function at(y,x,I){if(i.bindRenderbuffer(i.RENDERBUFFER,y),x.depthBuffer){const G=x.depthTexture,J=G&&G.isDepthTexture?G.type:null,k=M(x.stencilBuffer,J),Et=x.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ct=tt(x);xt(x)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ct,k,x.width,x.height):I?i.renderbufferStorageMultisample(i.RENDERBUFFER,ct,k,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,k,x.width,x.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Et,i.RENDERBUFFER,y)}else{const G=x.textures;for(let J=0;J<G.length;J++){const k=G[J],Et=r.convert(k.format,k.colorSpace),ct=r.convert(k.type),_t=S(k.internalFormat,Et,ct,k.colorSpace),Ht=tt(x);I&&xt(x)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ht,_t,x.width,x.height):xt(x)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ht,_t,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,_t,x.width,x.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function At(y,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,y),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const G=n.get(x.depthTexture);G.__renderTarget=x,(!G.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),Z(x.depthTexture,0);const J=G.__webglTexture,k=tt(x);if(x.depthTexture.format===pi)xt(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,J,0,k):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,J,0);else if(x.depthTexture.format===yi)xt(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,J,0,k):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,J,0);else throw new Error("Unknown depthTexture format")}function Gt(y){const x=n.get(y),I=y.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==y.depthTexture){const G=y.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),G){const J=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,G.removeEventListener("dispose",J)};G.addEventListener("dispose",J),x.__depthDisposeCallback=J}x.__boundDepthTexture=G}if(y.depthTexture&&!x.__autoAllocateDepthBuffer){if(I)throw new Error("target.depthTexture not supported in Cube render targets");At(x.__webglFramebuffer,y)}else if(I){x.__webglDepthbuffer=[];for(let G=0;G<6;G++)if(e.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[G]),x.__webglDepthbuffer[G]===void 0)x.__webglDepthbuffer[G]=i.createRenderbuffer(),at(x.__webglDepthbuffer[G],y,!1);else{const J=y.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,k=x.__webglDepthbuffer[G];i.bindRenderbuffer(i.RENDERBUFFER,k),i.framebufferRenderbuffer(i.FRAMEBUFFER,J,i.RENDERBUFFER,k)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=i.createRenderbuffer(),at(x.__webglDepthbuffer,y,!1);else{const G=y.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,J=x.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,J),i.framebufferRenderbuffer(i.FRAMEBUFFER,G,i.RENDERBUFFER,J)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function bt(y,x,I){const G=n.get(y);x!==void 0&&yt(G.__webglFramebuffer,y,y.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),I!==void 0&&Gt(y)}function Zt(y){const x=y.texture,I=n.get(y),G=n.get(x);y.addEventListener("dispose",A);const J=y.textures,k=y.isWebGLCubeRenderTarget===!0,Et=J.length>1;if(Et||(G.__webglTexture===void 0&&(G.__webglTexture=i.createTexture()),G.__version=x.version,a.memory.textures++),k){I.__webglFramebuffer=[];for(let ct=0;ct<6;ct++)if(x.mipmaps&&x.mipmaps.length>0){I.__webglFramebuffer[ct]=[];for(let _t=0;_t<x.mipmaps.length;_t++)I.__webglFramebuffer[ct][_t]=i.createFramebuffer()}else I.__webglFramebuffer[ct]=i.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){I.__webglFramebuffer=[];for(let ct=0;ct<x.mipmaps.length;ct++)I.__webglFramebuffer[ct]=i.createFramebuffer()}else I.__webglFramebuffer=i.createFramebuffer();if(Et)for(let ct=0,_t=J.length;ct<_t;ct++){const Ht=n.get(J[ct]);Ht.__webglTexture===void 0&&(Ht.__webglTexture=i.createTexture(),a.memory.textures++)}if(y.samples>0&&xt(y)===!1){I.__webglMultisampledFramebuffer=i.createFramebuffer(),I.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,I.__webglMultisampledFramebuffer);for(let ct=0;ct<J.length;ct++){const _t=J[ct];I.__webglColorRenderbuffer[ct]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,I.__webglColorRenderbuffer[ct]);const Ht=r.convert(_t.format,_t.colorSpace),nt=r.convert(_t.type),vt=S(_t.internalFormat,Ht,nt,_t.colorSpace,y.isXRRenderTarget===!0),Ct=tt(y);i.renderbufferStorageMultisample(i.RENDERBUFFER,Ct,vt,y.width,y.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ct,i.RENDERBUFFER,I.__webglColorRenderbuffer[ct])}i.bindRenderbuffer(i.RENDERBUFFER,null),y.depthBuffer&&(I.__webglDepthRenderbuffer=i.createRenderbuffer(),at(I.__webglDepthRenderbuffer,y,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(k){e.bindTexture(i.TEXTURE_CUBE_MAP,G.__webglTexture),Ut(i.TEXTURE_CUBE_MAP,x);for(let ct=0;ct<6;ct++)if(x.mipmaps&&x.mipmaps.length>0)for(let _t=0;_t<x.mipmaps.length;_t++)yt(I.__webglFramebuffer[ct][_t],y,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,_t);else yt(I.__webglFramebuffer[ct],y,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0);m(x)&&u(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Et){for(let ct=0,_t=J.length;ct<_t;ct++){const Ht=J[ct],nt=n.get(Ht);e.bindTexture(i.TEXTURE_2D,nt.__webglTexture),Ut(i.TEXTURE_2D,Ht),yt(I.__webglFramebuffer,y,Ht,i.COLOR_ATTACHMENT0+ct,i.TEXTURE_2D,0),m(Ht)&&u(i.TEXTURE_2D)}e.unbindTexture()}else{let ct=i.TEXTURE_2D;if((y.isWebGL3DRenderTarget||y.isWebGLArrayRenderTarget)&&(ct=y.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(ct,G.__webglTexture),Ut(ct,x),x.mipmaps&&x.mipmaps.length>0)for(let _t=0;_t<x.mipmaps.length;_t++)yt(I.__webglFramebuffer[_t],y,x,i.COLOR_ATTACHMENT0,ct,_t);else yt(I.__webglFramebuffer,y,x,i.COLOR_ATTACHMENT0,ct,0);m(x)&&u(ct),e.unbindTexture()}y.depthBuffer&&Gt(y)}function Q(y){const x=y.textures;for(let I=0,G=x.length;I<G;I++){const J=x[I];if(m(J)){const k=b(y),Et=n.get(J).__webglTexture;e.bindTexture(k,Et),u(k),e.unbindTexture()}}}const $=[],T=[];function Tt(y){if(y.samples>0){if(xt(y)===!1){const x=y.textures,I=y.width,G=y.height;let J=i.COLOR_BUFFER_BIT;const k=y.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Et=n.get(y),ct=x.length>1;if(ct)for(let _t=0;_t<x.length;_t++)e.bindFramebuffer(i.FRAMEBUFFER,Et.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+_t,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,Et.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+_t,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,Et.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Et.__webglFramebuffer);for(let _t=0;_t<x.length;_t++){if(y.resolveDepthBuffer&&(y.depthBuffer&&(J|=i.DEPTH_BUFFER_BIT),y.stencilBuffer&&y.resolveStencilBuffer&&(J|=i.STENCIL_BUFFER_BIT)),ct){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Et.__webglColorRenderbuffer[_t]);const Ht=n.get(x[_t]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Ht,0)}i.blitFramebuffer(0,0,I,G,0,0,I,G,J,i.NEAREST),l===!0&&($.length=0,T.length=0,$.push(i.COLOR_ATTACHMENT0+_t),y.depthBuffer&&y.resolveDepthBuffer===!1&&($.push(k),T.push(k),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,T)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,$))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ct)for(let _t=0;_t<x.length;_t++){e.bindFramebuffer(i.FRAMEBUFFER,Et.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+_t,i.RENDERBUFFER,Et.__webglColorRenderbuffer[_t]);const Ht=n.get(x[_t]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,Et.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+_t,i.TEXTURE_2D,Ht,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Et.__webglMultisampledFramebuffer)}else if(y.depthBuffer&&y.resolveDepthBuffer===!1&&l){const x=y.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[x])}}}function tt(y){return Math.min(s.maxSamples,y.samples)}function xt(y){const x=n.get(y);return y.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function st(y){const x=a.render.frame;h.get(y)!==x&&(h.set(y,x),y.update())}function Pt(y,x){const I=y.colorSpace,G=y.format,J=y.type;return y.isCompressedTexture===!0||y.isVideoTexture===!0||I!==Ei&&I!==vn&&(Yt.getTransfer(I)===Qt?(G!==Ge||J!==hn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",I)),x}function ft(y){return typeof HTMLImageElement<"u"&&y instanceof HTMLImageElement?(c.width=y.naturalWidth||y.width,c.height=y.naturalHeight||y.height):typeof VideoFrame<"u"&&y instanceof VideoFrame?(c.width=y.displayWidth,c.height=y.displayHeight):(c.width=y.width,c.height=y.height),c}this.allocateTextureUnit=O,this.resetTextureUnits=X,this.setTexture2D=Z,this.setTexture2DArray=V,this.setTexture3D=j,this.setTextureCube=B,this.rebindTextures=bt,this.setupRenderTarget=Zt,this.updateRenderTargetMipmap=Q,this.updateMultisampleRenderTarget=Tt,this.setupDepthRenderbuffer=Gt,this.setupFrameBufferTexture=yt,this.useMultisampledRTT=xt}function S4(i,t){function e(n,s=vn){let r;const a=Yt.getTransfer(s);if(n===hn)return i.UNSIGNED_BYTE;if(n===xa)return i.UNSIGNED_SHORT_4_4_4_4;if(n===ga)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Yo)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Wo)return i.BYTE;if(n===Xo)return i.SHORT;if(n===Hi)return i.UNSIGNED_SHORT;if(n===_a)return i.INT;if(n===On)return i.UNSIGNED_INT;if(n===on)return i.FLOAT;if(n===Wi)return i.HALF_FLOAT;if(n===Zo)return i.ALPHA;if(n===Ko)return i.RGB;if(n===Ge)return i.RGBA;if(n===jo)return i.LUMINANCE;if(n===Jo)return i.LUMINANCE_ALPHA;if(n===pi)return i.DEPTH_COMPONENT;if(n===yi)return i.DEPTH_STENCIL;if(n===$o)return i.RED;if(n===va)return i.RED_INTEGER;if(n===Qo)return i.RG;if(n===qa)return i.RG_INTEGER;if(n===Ma)return i.RGBA_INTEGER;if(n===Es||n===Ts||n===bs||n===As)if(a===Qt)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Es)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Ts)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===bs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===As)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Es)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Ts)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===bs)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===As)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Nr||n===Fr||n===Or||n===Br)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Nr)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Fr)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Or)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Br)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Hr||n===Vr||n===Gr)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Hr||n===Vr)return a===Qt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Gr)return a===Qt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===kr||n===Wr||n===Xr||n===Yr||n===Zr||n===Kr||n===jr||n===Jr||n===$r||n===Qr||n===ta||n===ea||n===na||n===ia)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===kr)return a===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Wr)return a===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Xr)return a===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Yr)return a===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Zr)return a===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Kr)return a===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===jr)return a===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Jr)return a===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===$r)return a===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Qr)return a===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===ta)return a===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===ea)return a===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===na)return a===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===ia)return a===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===ws||n===sa||n===ra)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===ws)return a===Qt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===sa)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===ra)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===tl||n===aa||n===oa||n===la)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===ws)return r.COMPRESSED_RED_RGTC1_EXT;if(n===aa)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===oa)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===la)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Si?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}const y4=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,E4=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class T4{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const s=new be,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new yn({vertexShader:y4,fragmentShader:E4,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new pe(new Zi(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class b4 extends kn{constructor(t,e){super();const n=this;let s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,f=null,d=null,p=null,_=null;const g=new T4,m=e.getContextAttributes();let u=null,b=null;const S=[],M=[],P=new it;let w=null;const A=new Ue;A.viewport=new ae;const C=new Ue;C.viewport=new ae;const E=[A,C],q=new Xc;let R=null,X=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(W){let rt=S[W];return rt===void 0&&(rt=new ur,S[W]=rt),rt.getTargetRaySpace()},this.getControllerGrip=function(W){let rt=S[W];return rt===void 0&&(rt=new ur,S[W]=rt),rt.getGripSpace()},this.getHand=function(W){let rt=S[W];return rt===void 0&&(rt=new ur,S[W]=rt),rt.getHandSpace()};function O(W){const rt=M.indexOf(W.inputSource);if(rt===-1)return;const yt=S[rt];yt!==void 0&&(yt.update(W.inputSource,W.frame,c||a),yt.dispatchEvent({type:W.type,data:W.inputSource}))}function Y(){s.removeEventListener("select",O),s.removeEventListener("selectstart",O),s.removeEventListener("selectend",O),s.removeEventListener("squeeze",O),s.removeEventListener("squeezestart",O),s.removeEventListener("squeezeend",O),s.removeEventListener("end",Y),s.removeEventListener("inputsourceschange",Z);for(let W=0;W<S.length;W++){const rt=M[W];rt!==null&&(M[W]=null,S[W].disconnect(rt))}R=null,X=null,g.reset(),t.setRenderTarget(u),p=null,d=null,f=null,s=null,b=null,Kt.stop(),n.isPresenting=!1,t.setPixelRatio(w),t.setSize(P.width,P.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(W){r=W,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(W){o=W,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(W){c=W},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return f},this.getFrame=function(){return _},this.getSession=function(){return s},this.setSession=async function(W){if(s=W,s!==null){if(u=t.getRenderTarget(),s.addEventListener("select",O),s.addEventListener("selectstart",O),s.addEventListener("selectend",O),s.addEventListener("squeeze",O),s.addEventListener("squeezestart",O),s.addEventListener("squeezeend",O),s.addEventListener("end",Y),s.addEventListener("inputsourceschange",Z),m.xrCompatible!==!0&&await e.makeXRCompatible(),w=t.getPixelRatio(),t.getSize(P),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let yt=null,at=null,At=null;m.depth&&(At=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,yt=m.stencil?yi:pi,at=m.stencil?Si:On);const Gt={colorFormat:e.RGBA8,depthFormat:At,scaleFactor:r};f=new XRWebGLBinding(s,e),d=f.createProjectionLayer(Gt),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),b=new Bn(d.textureWidth,d.textureHeight,{format:Ge,type:hn,depthTexture:new ml(d.textureWidth,d.textureHeight,at,void 0,void 0,void 0,void 0,void 0,void 0,yt),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}else{const yt={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,e,yt),s.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),b=new Bn(p.framebufferWidth,p.framebufferHeight,{format:Ge,type:hn,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}b.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),Kt.setContext(s),Kt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function Z(W){for(let rt=0;rt<W.removed.length;rt++){const yt=W.removed[rt],at=M.indexOf(yt);at>=0&&(M[at]=null,S[at].disconnect(yt))}for(let rt=0;rt<W.added.length;rt++){const yt=W.added[rt];let at=M.indexOf(yt);if(at===-1){for(let Gt=0;Gt<S.length;Gt++)if(Gt>=M.length){M.push(yt),at=Gt;break}else if(M[Gt]===null){M[Gt]=yt,at=Gt;break}if(at===-1)break}const At=S[at];At&&At.connect(yt)}}const V=new z,j=new z;function B(W,rt,yt){V.setFromMatrixPosition(rt.matrixWorld),j.setFromMatrixPosition(yt.matrixWorld);const at=V.distanceTo(j),At=rt.projectionMatrix.elements,Gt=yt.projectionMatrix.elements,bt=At[14]/(At[10]-1),Zt=At[14]/(At[10]+1),Q=(At[9]+1)/At[5],$=(At[9]-1)/At[5],T=(At[8]-1)/At[0],Tt=(Gt[8]+1)/Gt[0],tt=bt*T,xt=bt*Tt,st=at/(-T+Tt),Pt=st*-T;if(rt.matrixWorld.decompose(W.position,W.quaternion,W.scale),W.translateX(Pt),W.translateZ(st),W.matrixWorld.compose(W.position,W.quaternion,W.scale),W.matrixWorldInverse.copy(W.matrixWorld).invert(),At[10]===-1)W.projectionMatrix.copy(rt.projectionMatrix),W.projectionMatrixInverse.copy(rt.projectionMatrixInverse);else{const ft=bt+st,y=Zt+st,x=tt-Pt,I=xt+(at-Pt),G=Q*Zt/y*ft,J=$*Zt/y*ft;W.projectionMatrix.makePerspective(x,I,G,J,ft,y),W.projectionMatrixInverse.copy(W.projectionMatrix).invert()}}function ot(W,rt){rt===null?W.matrixWorld.copy(W.matrix):W.matrixWorld.multiplyMatrices(rt.matrixWorld,W.matrix),W.matrixWorldInverse.copy(W.matrixWorld).invert()}this.updateCamera=function(W){if(s===null)return;let rt=W.near,yt=W.far;g.texture!==null&&(g.depthNear>0&&(rt=g.depthNear),g.depthFar>0&&(yt=g.depthFar)),q.near=C.near=A.near=rt,q.far=C.far=A.far=yt,(R!==q.near||X!==q.far)&&(s.updateRenderState({depthNear:q.near,depthFar:q.far}),R=q.near,X=q.far),A.layers.mask=W.layers.mask|2,C.layers.mask=W.layers.mask|4,q.layers.mask=A.layers.mask|C.layers.mask;const at=W.parent,At=q.cameras;ot(q,at);for(let Gt=0;Gt<At.length;Gt++)ot(At[Gt],at);At.length===2?B(q,A,C):q.projectionMatrix.copy(A.projectionMatrix),mt(W,q,at)};function mt(W,rt,yt){yt===null?W.matrix.copy(rt.matrixWorld):(W.matrix.copy(yt.matrixWorld),W.matrix.invert(),W.matrix.multiply(rt.matrixWorld)),W.matrix.decompose(W.position,W.quaternion,W.scale),W.updateMatrixWorld(!0),W.projectionMatrix.copy(rt.projectionMatrix),W.projectionMatrixInverse.copy(rt.projectionMatrixInverse),W.isPerspectiveCamera&&(W.fov=ca*2*Math.atan(1/W.projectionMatrix.elements[5]),W.zoom=1)}this.getCamera=function(){return q},this.getFoveation=function(){if(!(d===null&&p===null))return l},this.setFoveation=function(W){l=W,d!==null&&(d.fixedFoveation=W),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=W)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(q)};let St=null;function Ut(W,rt){if(h=rt.getViewerPose(c||a),_=rt,h!==null){const yt=h.views;p!==null&&(t.setRenderTargetFramebuffer(b,p.framebuffer),t.setRenderTarget(b));let at=!1;yt.length!==q.cameras.length&&(q.cameras.length=0,at=!0);for(let bt=0;bt<yt.length;bt++){const Zt=yt[bt];let Q=null;if(p!==null)Q=p.getViewport(Zt);else{const T=f.getViewSubImage(d,Zt);Q=T.viewport,bt===0&&(t.setRenderTargetTextures(b,T.colorTexture,d.ignoreDepthValues?void 0:T.depthStencilTexture),t.setRenderTarget(b))}let $=E[bt];$===void 0&&($=new Ue,$.layers.enable(bt),$.viewport=new ae,E[bt]=$),$.matrix.fromArray(Zt.transform.matrix),$.matrix.decompose($.position,$.quaternion,$.scale),$.projectionMatrix.fromArray(Zt.projectionMatrix),$.projectionMatrixInverse.copy($.projectionMatrix).invert(),$.viewport.set(Q.x,Q.y,Q.width,Q.height),bt===0&&(q.matrix.copy($.matrix),q.matrix.decompose(q.position,q.quaternion,q.scale)),at===!0&&q.cameras.push($)}const At=s.enabledFeatures;if(At&&At.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&f){const bt=f.getDepthInformation(yt[0]);bt&&bt.isValid&&bt.texture&&g.init(t,bt,s.renderState)}}for(let yt=0;yt<S.length;yt++){const at=M[yt],At=S[yt];at!==null&&At!==void 0&&At.update(at,rt,c||a)}St&&St(W,rt),rt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:rt}),_=null}const Kt=new yl;Kt.setAnimationLoop(Ut),this.setAnimationLoop=function(W){St=W},this.dispose=function(){}}}const Dn=new je,A4=new oe;function w4(i,t){function e(m,u){m.matrixAutoUpdate===!0&&m.updateMatrix(),u.value.copy(m.matrix)}function n(m,u){u.color.getRGB(m.fogColor.value,ul(i)),u.isFog?(m.fogNear.value=u.near,m.fogFar.value=u.far):u.isFogExp2&&(m.fogDensity.value=u.density)}function s(m,u,b,S,M){u.isMeshBasicMaterial||u.isMeshLambertMaterial?r(m,u):u.isMeshToonMaterial?(r(m,u),f(m,u)):u.isMeshPhongMaterial?(r(m,u),h(m,u)):u.isMeshStandardMaterial?(r(m,u),d(m,u),u.isMeshPhysicalMaterial&&p(m,u,M)):u.isMeshMatcapMaterial?(r(m,u),_(m,u)):u.isMeshDepthMaterial?r(m,u):u.isMeshDistanceMaterial?(r(m,u),g(m,u)):u.isMeshNormalMaterial?r(m,u):u.isLineBasicMaterial?(a(m,u),u.isLineDashedMaterial&&o(m,u)):u.isPointsMaterial?l(m,u,b,S):u.isSpriteMaterial?c(m,u):u.isShadowMaterial?(m.color.value.copy(u.color),m.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function r(m,u){m.opacity.value=u.opacity,u.color&&m.diffuse.value.copy(u.color),u.emissive&&m.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(m.map.value=u.map,e(u.map,m.mapTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,e(u.alphaMap,m.alphaMapTransform)),u.bumpMap&&(m.bumpMap.value=u.bumpMap,e(u.bumpMap,m.bumpMapTransform),m.bumpScale.value=u.bumpScale,u.side===Te&&(m.bumpScale.value*=-1)),u.normalMap&&(m.normalMap.value=u.normalMap,e(u.normalMap,m.normalMapTransform),m.normalScale.value.copy(u.normalScale),u.side===Te&&m.normalScale.value.negate()),u.displacementMap&&(m.displacementMap.value=u.displacementMap,e(u.displacementMap,m.displacementMapTransform),m.displacementScale.value=u.displacementScale,m.displacementBias.value=u.displacementBias),u.emissiveMap&&(m.emissiveMap.value=u.emissiveMap,e(u.emissiveMap,m.emissiveMapTransform)),u.specularMap&&(m.specularMap.value=u.specularMap,e(u.specularMap,m.specularMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest);const b=t.get(u),S=b.envMap,M=b.envMapRotation;S&&(m.envMap.value=S,Dn.copy(M),Dn.x*=-1,Dn.y*=-1,Dn.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(Dn.y*=-1,Dn.z*=-1),m.envMapRotation.value.setFromMatrix4(A4.makeRotationFromEuler(Dn)),m.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=u.reflectivity,m.ior.value=u.ior,m.refractionRatio.value=u.refractionRatio),u.lightMap&&(m.lightMap.value=u.lightMap,m.lightMapIntensity.value=u.lightMapIntensity,e(u.lightMap,m.lightMapTransform)),u.aoMap&&(m.aoMap.value=u.aoMap,m.aoMapIntensity.value=u.aoMapIntensity,e(u.aoMap,m.aoMapTransform))}function a(m,u){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,u.map&&(m.map.value=u.map,e(u.map,m.mapTransform))}function o(m,u){m.dashSize.value=u.dashSize,m.totalSize.value=u.dashSize+u.gapSize,m.scale.value=u.scale}function l(m,u,b,S){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,m.size.value=u.size*b,m.scale.value=S*.5,u.map&&(m.map.value=u.map,e(u.map,m.uvTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,e(u.alphaMap,m.alphaMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest)}function c(m,u){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,m.rotation.value=u.rotation,u.map&&(m.map.value=u.map,e(u.map,m.mapTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,e(u.alphaMap,m.alphaMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest)}function h(m,u){m.specular.value.copy(u.specular),m.shininess.value=Math.max(u.shininess,1e-4)}function f(m,u){u.gradientMap&&(m.gradientMap.value=u.gradientMap)}function d(m,u){m.metalness.value=u.metalness,u.metalnessMap&&(m.metalnessMap.value=u.metalnessMap,e(u.metalnessMap,m.metalnessMapTransform)),m.roughness.value=u.roughness,u.roughnessMap&&(m.roughnessMap.value=u.roughnessMap,e(u.roughnessMap,m.roughnessMapTransform)),u.envMap&&(m.envMapIntensity.value=u.envMapIntensity)}function p(m,u,b){m.ior.value=u.ior,u.sheen>0&&(m.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),m.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(m.sheenColorMap.value=u.sheenColorMap,e(u.sheenColorMap,m.sheenColorMapTransform)),u.sheenRoughnessMap&&(m.sheenRoughnessMap.value=u.sheenRoughnessMap,e(u.sheenRoughnessMap,m.sheenRoughnessMapTransform))),u.clearcoat>0&&(m.clearcoat.value=u.clearcoat,m.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(m.clearcoatMap.value=u.clearcoatMap,e(u.clearcoatMap,m.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,e(u.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(m.clearcoatNormalMap.value=u.clearcoatNormalMap,e(u.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===Te&&m.clearcoatNormalScale.value.negate())),u.dispersion>0&&(m.dispersion.value=u.dispersion),u.iridescence>0&&(m.iridescence.value=u.iridescence,m.iridescenceIOR.value=u.iridescenceIOR,m.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(m.iridescenceMap.value=u.iridescenceMap,e(u.iridescenceMap,m.iridescenceMapTransform)),u.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=u.iridescenceThicknessMap,e(u.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),u.transmission>0&&(m.transmission.value=u.transmission,m.transmissionSamplerMap.value=b.texture,m.transmissionSamplerSize.value.set(b.width,b.height),u.transmissionMap&&(m.transmissionMap.value=u.transmissionMap,e(u.transmissionMap,m.transmissionMapTransform)),m.thickness.value=u.thickness,u.thicknessMap&&(m.thicknessMap.value=u.thicknessMap,e(u.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=u.attenuationDistance,m.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(m.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(m.anisotropyMap.value=u.anisotropyMap,e(u.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=u.specularIntensity,m.specularColor.value.copy(u.specularColor),u.specularColorMap&&(m.specularColorMap.value=u.specularColorMap,e(u.specularColorMap,m.specularColorMapTransform)),u.specularIntensityMap&&(m.specularIntensityMap.value=u.specularIntensityMap,e(u.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,u){u.matcap&&(m.matcap.value=u.matcap)}function g(m,u){const b=t.get(u).light;m.referencePosition.value.setFromMatrixPosition(b.matrixWorld),m.nearDistance.value=b.shadow.camera.near,m.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function R4(i,t,e,n){let s={},r={},a=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(b,S){const M=S.program;n.uniformBlockBinding(b,M)}function c(b,S){let M=s[b.id];M===void 0&&(_(b),M=h(b),s[b.id]=M,b.addEventListener("dispose",m));const P=S.program;n.updateUBOMapping(b,P);const w=t.render.frame;r[b.id]!==w&&(d(b),r[b.id]=w)}function h(b){const S=f();b.__bindingPointIndex=S;const M=i.createBuffer(),P=b.__size,w=b.usage;return i.bindBuffer(i.UNIFORM_BUFFER,M),i.bufferData(i.UNIFORM_BUFFER,P,w),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,S,M),M}function f(){for(let b=0;b<o;b++)if(a.indexOf(b)===-1)return a.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(b){const S=s[b.id],M=b.uniforms,P=b.__cache;i.bindBuffer(i.UNIFORM_BUFFER,S);for(let w=0,A=M.length;w<A;w++){const C=Array.isArray(M[w])?M[w]:[M[w]];for(let E=0,q=C.length;E<q;E++){const R=C[E];if(p(R,w,E,P)===!0){const X=R.__offset,O=Array.isArray(R.value)?R.value:[R.value];let Y=0;for(let Z=0;Z<O.length;Z++){const V=O[Z],j=g(V);typeof V=="number"||typeof V=="boolean"?(R.__data[0]=V,i.bufferSubData(i.UNIFORM_BUFFER,X+Y,R.__data)):V.isMatrix3?(R.__data[0]=V.elements[0],R.__data[1]=V.elements[1],R.__data[2]=V.elements[2],R.__data[3]=0,R.__data[4]=V.elements[3],R.__data[5]=V.elements[4],R.__data[6]=V.elements[5],R.__data[7]=0,R.__data[8]=V.elements[6],R.__data[9]=V.elements[7],R.__data[10]=V.elements[8],R.__data[11]=0):(V.toArray(R.__data,Y),Y+=j.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,X,R.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(b,S,M,P){const w=b.value,A=S+"_"+M;if(P[A]===void 0)return typeof w=="number"||typeof w=="boolean"?P[A]=w:P[A]=w.clone(),!0;{const C=P[A];if(typeof w=="number"||typeof w=="boolean"){if(C!==w)return P[A]=w,!0}else if(C.equals(w)===!1)return C.copy(w),!0}return!1}function _(b){const S=b.uniforms;let M=0;const P=16;for(let A=0,C=S.length;A<C;A++){const E=Array.isArray(S[A])?S[A]:[S[A]];for(let q=0,R=E.length;q<R;q++){const X=E[q],O=Array.isArray(X.value)?X.value:[X.value];for(let Y=0,Z=O.length;Y<Z;Y++){const V=O[Y],j=g(V),B=M%P,ot=B%j.boundary,mt=B+ot;M+=ot,mt!==0&&P-mt<j.storage&&(M+=P-mt),X.__data=new Float32Array(j.storage/Float32Array.BYTES_PER_ELEMENT),X.__offset=M,M+=j.storage}}}const w=M%P;return w>0&&(M+=P-w),b.__size=M,b.__cache={},this}function g(b){const S={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(S.boundary=4,S.storage=4):b.isVector2?(S.boundary=8,S.storage=8):b.isVector3||b.isColor?(S.boundary=16,S.storage=12):b.isVector4?(S.boundary=16,S.storage=16):b.isMatrix3?(S.boundary=48,S.storage=48):b.isMatrix4?(S.boundary=64,S.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),S}function m(b){const S=b.target;S.removeEventListener("dispose",m);const M=a.indexOf(S.__bindingPointIndex);a.splice(M,1),i.deleteBuffer(s[S.id]),delete s[S.id],delete r[S.id]}function u(){for(const b in s)i.deleteBuffer(s[b]);a=[],s={},r={}}return{bind:l,update:c,dispose:u}}class C4{constructor(t={}){const{canvas:e=w1(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:f=!1,reverseDepthBuffer:d=!1}=t;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=a;const _=new Uint32Array(4),g=new Int32Array(4);let m=null,u=null;const b=[],S=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=ze,this.toneMapping=Mn,this.toneMappingExposure=1;const M=this;let P=!1,w=0,A=0,C=null,E=-1,q=null;const R=new ae,X=new ae;let O=null;const Y=new Wt(0);let Z=0,V=e.width,j=e.height,B=1,ot=null,mt=null;const St=new ae(0,0,V,j),Ut=new ae(0,0,V,j);let Kt=!1;const W=new pl;let rt=!1,yt=!1;this.transmissionResolutionScale=1;const at=new oe,At=new oe,Gt=new z,bt=new ae,Zt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Q=!1;function $(){return C===null?B:1}let T=n;function Tt(v,D){return e.getContext(v,D)}try{const v={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:f};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${ma}`),e.addEventListener("webglcontextlost",K,!1),e.addEventListener("webglcontextrestored",pt,!1),e.addEventListener("webglcontextcreationerror",dt,!1),T===null){const D="webgl2";if(T=Tt(D,v),T===null)throw Tt(D)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(v){throw console.error("THREE.WebGLRenderer: "+v.message),v}let tt,xt,st,Pt,ft,y,x,I,G,J,k,Et,ct,_t,Ht,nt,vt,Ct,Lt,qt,Vt,Ft,ee,L;function ht(){tt=new B0(T),tt.init(),Ft=new S4(T,tt),xt=new z0(T,tt,t,Ft),st=new q4(T,tt),xt.reverseDepthBuffer&&d&&st.buffers.depth.setReversed(!0),Pt=new G0(T),ft=new o4,y=new M4(T,tt,st,ft,xt,Ft,Pt),x=new I0(M),I=new O0(M),G=new jc(T),ee=new L0(T,G),J=new H0(T,G,Pt,ee),k=new W0(T,J,G,Pt),Lt=new k0(T,xt,y),nt=new U0(ft),Et=new a4(M,x,I,tt,xt,ee,nt),ct=new w4(M,ft),_t=new c4,Ht=new m4(tt),Ct=new P0(M,x,I,st,k,p,l),vt=new g4(M,k,xt),L=new R4(T,Pt,xt,st),qt=new D0(T,tt,Pt),Vt=new V0(T,tt,Pt),Pt.programs=Et.programs,M.capabilities=xt,M.extensions=tt,M.properties=ft,M.renderLists=_t,M.shadowMap=vt,M.state=st,M.info=Pt}ht();const H=new b4(M,T);this.xr=H,this.getContext=function(){return T},this.getContextAttributes=function(){return T.getContextAttributes()},this.forceContextLoss=function(){const v=tt.get("WEBGL_lose_context");v&&v.loseContext()},this.forceContextRestore=function(){const v=tt.get("WEBGL_lose_context");v&&v.restoreContext()},this.getPixelRatio=function(){return B},this.setPixelRatio=function(v){v!==void 0&&(B=v,this.setSize(V,j,!1))},this.getSize=function(v){return v.set(V,j)},this.setSize=function(v,D,N=!0){if(H.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}V=v,j=D,e.width=Math.floor(v*B),e.height=Math.floor(D*B),N===!0&&(e.style.width=v+"px",e.style.height=D+"px"),this.setViewport(0,0,v,D)},this.getDrawingBufferSize=function(v){return v.set(V*B,j*B).floor()},this.setDrawingBufferSize=function(v,D,N){V=v,j=D,B=N,e.width=Math.floor(v*N),e.height=Math.floor(D*N),this.setViewport(0,0,v,D)},this.getCurrentViewport=function(v){return v.copy(R)},this.getViewport=function(v){return v.copy(St)},this.setViewport=function(v,D,N,F){v.isVector4?St.set(v.x,v.y,v.z,v.w):St.set(v,D,N,F),st.viewport(R.copy(St).multiplyScalar(B).round())},this.getScissor=function(v){return v.copy(Ut)},this.setScissor=function(v,D,N,F){v.isVector4?Ut.set(v.x,v.y,v.z,v.w):Ut.set(v,D,N,F),st.scissor(X.copy(Ut).multiplyScalar(B).round())},this.getScissorTest=function(){return Kt},this.setScissorTest=function(v){st.setScissorTest(Kt=v)},this.setOpaqueSort=function(v){ot=v},this.setTransparentSort=function(v){mt=v},this.getClearColor=function(v){return v.copy(Ct.getClearColor())},this.setClearColor=function(){Ct.setClearColor.apply(Ct,arguments)},this.getClearAlpha=function(){return Ct.getClearAlpha()},this.setClearAlpha=function(){Ct.setClearAlpha.apply(Ct,arguments)},this.clear=function(v=!0,D=!0,N=!0){let F=0;if(v){let U=!1;if(C!==null){const et=C.texture.format;U=et===Ma||et===qa||et===va}if(U){const et=C.texture.type,ut=et===hn||et===On||et===Hi||et===Si||et===xa||et===ga,gt=Ct.getClearColor(),Mt=Ct.getClearAlpha(),Dt=gt.r,zt=gt.g,wt=gt.b;ut?(_[0]=Dt,_[1]=zt,_[2]=wt,_[3]=Mt,T.clearBufferuiv(T.COLOR,0,_)):(g[0]=Dt,g[1]=zt,g[2]=wt,g[3]=Mt,T.clearBufferiv(T.COLOR,0,g))}else F|=T.COLOR_BUFFER_BIT}D&&(F|=T.DEPTH_BUFFER_BIT),N&&(F|=T.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),T.clear(F)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",K,!1),e.removeEventListener("webglcontextrestored",pt,!1),e.removeEventListener("webglcontextcreationerror",dt,!1),Ct.dispose(),_t.dispose(),Ht.dispose(),ft.dispose(),x.dispose(),I.dispose(),k.dispose(),ee.dispose(),L.dispose(),Et.dispose(),H.dispose(),H.removeEventListener("sessionstart",Pa),H.removeEventListener("sessionend",La),bn.stop()};function K(v){v.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),P=!0}function pt(){console.log("THREE.WebGLRenderer: Context Restored."),P=!1;const v=Pt.autoReset,D=vt.enabled,N=vt.autoUpdate,F=vt.needsUpdate,U=vt.type;ht(),Pt.autoReset=v,vt.enabled=D,vt.autoUpdate=N,vt.needsUpdate=F,vt.type=U}function dt(v){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",v.statusMessage)}function It(v){const D=v.target;D.removeEventListener("dispose",It),se(D)}function se(v){_e(v),ft.remove(v)}function _e(v){const D=ft.get(v).programs;D!==void 0&&(D.forEach(function(N){Et.releaseProgram(N)}),v.isShaderMaterial&&Et.releaseShaderCache(v))}this.renderBufferDirect=function(v,D,N,F,U,et){D===null&&(D=Zt);const ut=U.isMesh&&U.matrixWorld.determinant()<0,gt=zl(v,D,N,F,U);st.setMaterial(F,ut);let Mt=N.index,Dt=1;if(F.wireframe===!0){if(Mt=J.getWireframeAttribute(N),Mt===void 0)return;Dt=2}const zt=N.drawRange,wt=N.attributes.position;let kt=zt.start*Dt,jt=(zt.start+zt.count)*Dt;et!==null&&(kt=Math.max(kt,et.start*Dt),jt=Math.min(jt,(et.start+et.count)*Dt)),Mt!==null?(kt=Math.max(kt,0),jt=Math.min(jt,Mt.count)):wt!=null&&(kt=Math.max(kt,0),jt=Math.min(jt,wt.count));const le=jt-kt;if(le<0||le===1/0)return;ee.setup(U,F,gt,N,Mt);let re,Xt=qt;if(Mt!==null&&(re=G.get(Mt),Xt=Vt,Xt.setIndex(re)),U.isMesh)F.wireframe===!0?(st.setLineWidth(F.wireframeLinewidth*$()),Xt.setMode(T.LINES)):Xt.setMode(T.TRIANGLES);else if(U.isLine){let Rt=F.linewidth;Rt===void 0&&(Rt=1),st.setLineWidth(Rt*$()),U.isLineSegments?Xt.setMode(T.LINES):U.isLineLoop?Xt.setMode(T.LINE_LOOP):Xt.setMode(T.LINE_STRIP)}else U.isPoints?Xt.setMode(T.POINTS):U.isSprite&&Xt.setMode(T.TRIANGLES);if(U.isBatchedMesh)if(U._multiDrawInstances!==null)Xt.renderMultiDrawInstances(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount,U._multiDrawInstances);else if(tt.get("WEBGL_multi_draw"))Xt.renderMultiDraw(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount);else{const Rt=U._multiDrawStarts,me=U._multiDrawCounts,Jt=U._multiDrawCount,Fe=Mt?G.get(Mt).bytesPerElement:1,Wn=ft.get(F).currentProgram.getUniforms();for(let Ae=0;Ae<Jt;Ae++)Wn.setValue(T,"_gl_DrawID",Ae),Xt.render(Rt[Ae]/Fe,me[Ae])}else if(U.isInstancedMesh)Xt.renderInstances(kt,le,U.count);else if(N.isInstancedBufferGeometry){const Rt=N._maxInstanceCount!==void 0?N._maxInstanceCount:1/0,me=Math.min(N.instanceCount,Rt);Xt.renderInstances(kt,le,me)}else Xt.render(kt,le)};function $t(v,D,N){v.transparent===!0&&v.side===Ye&&v.forceSinglePass===!1?(v.side=Te,v.needsUpdate=!0,Ji(v,D,N),v.side=Sn,v.needsUpdate=!0,Ji(v,D,N),v.side=Ye):Ji(v,D,N)}this.compile=function(v,D,N=null){N===null&&(N=v),u=Ht.get(N),u.init(D),S.push(u),N.traverseVisible(function(U){U.isLight&&U.layers.test(D.layers)&&(u.pushLight(U),U.castShadow&&u.pushShadow(U))}),v!==N&&v.traverseVisible(function(U){U.isLight&&U.layers.test(D.layers)&&(u.pushLight(U),U.castShadow&&u.pushShadow(U))}),u.setupLights();const F=new Set;return v.traverse(function(U){if(!(U.isMesh||U.isPoints||U.isLine||U.isSprite))return;const et=U.material;if(et)if(Array.isArray(et))for(let ut=0;ut<et.length;ut++){const gt=et[ut];$t(gt,N,U),F.add(gt)}else $t(et,N,U),F.add(et)}),S.pop(),u=null,F},this.compileAsync=function(v,D,N=null){const F=this.compile(v,D,N);return new Promise(U=>{function et(){if(F.forEach(function(ut){ft.get(ut).currentProgram.isReady()&&F.delete(ut)}),F.size===0){U(v);return}setTimeout(et,10)}tt.get("KHR_parallel_shader_compile")!==null?et():setTimeout(et,10)})};let Ne=null;function $e(v){Ne&&Ne(v)}function Pa(){bn.stop()}function La(){bn.start()}const bn=new yl;bn.setAnimationLoop($e),typeof self<"u"&&bn.setContext(self),this.setAnimationLoop=function(v){Ne=v,H.setAnimationLoop(v),v===null?bn.stop():bn.start()},H.addEventListener("sessionstart",Pa),H.addEventListener("sessionend",La),this.render=function(v,D){if(D!==void 0&&D.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;if(v.matrixWorldAutoUpdate===!0&&v.updateMatrixWorld(),D.parent===null&&D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),H.enabled===!0&&H.isPresenting===!0&&(H.cameraAutoUpdate===!0&&H.updateCamera(D),D=H.getCamera()),v.isScene===!0&&v.onBeforeRender(M,v,D,C),u=Ht.get(v,S.length),u.init(D),S.push(u),At.multiplyMatrices(D.projectionMatrix,D.matrixWorldInverse),W.setFromProjectionMatrix(At),yt=this.localClippingEnabled,rt=nt.init(this.clippingPlanes,yt),m=_t.get(v,b.length),m.init(),b.push(m),H.enabled===!0&&H.isPresenting===!0){const et=M.xr.getDepthSensingMesh();et!==null&&Vs(et,D,-1/0,M.sortObjects)}Vs(v,D,0,M.sortObjects),m.finish(),M.sortObjects===!0&&m.sort(ot,mt),Q=H.enabled===!1||H.isPresenting===!1||H.hasDepthSensing()===!1,Q&&Ct.addToRenderList(m,v),this.info.render.frame++,rt===!0&&nt.beginShadows();const N=u.state.shadowsArray;vt.render(N,v,D),rt===!0&&nt.endShadows(),this.info.autoReset===!0&&this.info.reset();const F=m.opaque,U=m.transmissive;if(u.setupLights(),D.isArrayCamera){const et=D.cameras;if(U.length>0)for(let ut=0,gt=et.length;ut<gt;ut++){const Mt=et[ut];za(F,U,v,Mt)}Q&&Ct.render(v);for(let ut=0,gt=et.length;ut<gt;ut++){const Mt=et[ut];Da(m,v,Mt,Mt.viewport)}}else U.length>0&&za(F,U,v,D),Q&&Ct.render(v),Da(m,v,D);C!==null&&A===0&&(y.updateMultisampleRenderTarget(C),y.updateRenderTargetMipmap(C)),v.isScene===!0&&v.onAfterRender(M,v,D),ee.resetDefaultState(),E=-1,q=null,S.pop(),S.length>0?(u=S[S.length-1],rt===!0&&nt.setGlobalState(M.clippingPlanes,u.state.camera)):u=null,b.pop(),b.length>0?m=b[b.length-1]:m=null};function Vs(v,D,N,F){if(v.visible===!1)return;if(v.layers.test(D.layers)){if(v.isGroup)N=v.renderOrder;else if(v.isLOD)v.autoUpdate===!0&&v.update(D);else if(v.isLight)u.pushLight(v),v.castShadow&&u.pushShadow(v);else if(v.isSprite){if(!v.frustumCulled||W.intersectsSprite(v)){F&&bt.setFromMatrixPosition(v.matrixWorld).applyMatrix4(At);const ut=k.update(v),gt=v.material;gt.visible&&m.push(v,ut,gt,N,bt.z,null)}}else if((v.isMesh||v.isLine||v.isPoints)&&(!v.frustumCulled||W.intersectsObject(v))){const ut=k.update(v),gt=v.material;if(F&&(v.boundingSphere!==void 0?(v.boundingSphere===null&&v.computeBoundingSphere(),bt.copy(v.boundingSphere.center)):(ut.boundingSphere===null&&ut.computeBoundingSphere(),bt.copy(ut.boundingSphere.center)),bt.applyMatrix4(v.matrixWorld).applyMatrix4(At)),Array.isArray(gt)){const Mt=ut.groups;for(let Dt=0,zt=Mt.length;Dt<zt;Dt++){const wt=Mt[Dt],kt=gt[wt.materialIndex];kt&&kt.visible&&m.push(v,ut,kt,N,bt.z,wt)}}else gt.visible&&m.push(v,ut,gt,N,bt.z,null)}}const et=v.children;for(let ut=0,gt=et.length;ut<gt;ut++)Vs(et[ut],D,N,F)}function Da(v,D,N,F){const U=v.opaque,et=v.transmissive,ut=v.transparent;u.setupLightsView(N),rt===!0&&nt.setGlobalState(M.clippingPlanes,N),F&&st.viewport(R.copy(F)),U.length>0&&ji(U,D,N),et.length>0&&ji(et,D,N),ut.length>0&&ji(ut,D,N),st.buffers.depth.setTest(!0),st.buffers.depth.setMask(!0),st.buffers.color.setMask(!0),st.setPolygonOffset(!1)}function za(v,D,N,F){if((N.isScene===!0?N.overrideMaterial:null)!==null)return;u.state.transmissionRenderTarget[F.id]===void 0&&(u.state.transmissionRenderTarget[F.id]=new Bn(1,1,{generateMipmaps:!0,type:tt.has("EXT_color_buffer_half_float")||tt.has("EXT_color_buffer_float")?Wi:hn,minFilter:Fn,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Yt.workingColorSpace}));const et=u.state.transmissionRenderTarget[F.id],ut=F.viewport||R;et.setSize(ut.z*M.transmissionResolutionScale,ut.w*M.transmissionResolutionScale);const gt=M.getRenderTarget();M.setRenderTarget(et),M.getClearColor(Y),Z=M.getClearAlpha(),Z<1&&M.setClearColor(16777215,.5),M.clear(),Q&&Ct.render(N);const Mt=M.toneMapping;M.toneMapping=Mn;const Dt=F.viewport;if(F.viewport!==void 0&&(F.viewport=void 0),u.setupLightsView(F),rt===!0&&nt.setGlobalState(M.clippingPlanes,F),ji(v,N,F),y.updateMultisampleRenderTarget(et),y.updateRenderTargetMipmap(et),tt.has("WEBGL_multisampled_render_to_texture")===!1){let zt=!1;for(let wt=0,kt=D.length;wt<kt;wt++){const jt=D[wt],le=jt.object,re=jt.geometry,Xt=jt.material,Rt=jt.group;if(Xt.side===Ye&&le.layers.test(F.layers)){const me=Xt.side;Xt.side=Te,Xt.needsUpdate=!0,Ua(le,N,F,re,Xt,Rt),Xt.side=me,Xt.needsUpdate=!0,zt=!0}}zt===!0&&(y.updateMultisampleRenderTarget(et),y.updateRenderTargetMipmap(et))}M.setRenderTarget(gt),M.setClearColor(Y,Z),Dt!==void 0&&(F.viewport=Dt),M.toneMapping=Mt}function ji(v,D,N){const F=D.isScene===!0?D.overrideMaterial:null;for(let U=0,et=v.length;U<et;U++){const ut=v[U],gt=ut.object,Mt=ut.geometry,Dt=F===null?ut.material:F,zt=ut.group;gt.layers.test(N.layers)&&Ua(gt,D,N,Mt,Dt,zt)}}function Ua(v,D,N,F,U,et){v.onBeforeRender(M,D,N,F,U,et),v.modelViewMatrix.multiplyMatrices(N.matrixWorldInverse,v.matrixWorld),v.normalMatrix.getNormalMatrix(v.modelViewMatrix),U.onBeforeRender(M,D,N,F,v,et),U.transparent===!0&&U.side===Ye&&U.forceSinglePass===!1?(U.side=Te,U.needsUpdate=!0,M.renderBufferDirect(N,D,F,U,v,et),U.side=Sn,U.needsUpdate=!0,M.renderBufferDirect(N,D,F,U,v,et),U.side=Ye):M.renderBufferDirect(N,D,F,U,v,et),v.onAfterRender(M,D,N,F,U,et)}function Ji(v,D,N){D.isScene!==!0&&(D=Zt);const F=ft.get(v),U=u.state.lights,et=u.state.shadowsArray,ut=U.state.version,gt=Et.getParameters(v,U.state,et,D,N),Mt=Et.getProgramCacheKey(gt);let Dt=F.programs;F.environment=v.isMeshStandardMaterial?D.environment:null,F.fog=D.fog,F.envMap=(v.isMeshStandardMaterial?I:x).get(v.envMap||F.environment),F.envMapRotation=F.environment!==null&&v.envMap===null?D.environmentRotation:v.envMapRotation,Dt===void 0&&(v.addEventListener("dispose",It),Dt=new Map,F.programs=Dt);let zt=Dt.get(Mt);if(zt!==void 0){if(F.currentProgram===zt&&F.lightsStateVersion===ut)return Na(v,gt),zt}else gt.uniforms=Et.getUniforms(v),v.onBeforeCompile(gt,M),zt=Et.acquireProgram(gt,Mt),Dt.set(Mt,zt),F.uniforms=gt.uniforms;const wt=F.uniforms;return(!v.isShaderMaterial&&!v.isRawShaderMaterial||v.clipping===!0)&&(wt.clippingPlanes=nt.uniform),Na(v,gt),F.needsLights=Il(v),F.lightsStateVersion=ut,F.needsLights&&(wt.ambientLightColor.value=U.state.ambient,wt.lightProbe.value=U.state.probe,wt.directionalLights.value=U.state.directional,wt.directionalLightShadows.value=U.state.directionalShadow,wt.spotLights.value=U.state.spot,wt.spotLightShadows.value=U.state.spotShadow,wt.rectAreaLights.value=U.state.rectArea,wt.ltc_1.value=U.state.rectAreaLTC1,wt.ltc_2.value=U.state.rectAreaLTC2,wt.pointLights.value=U.state.point,wt.pointLightShadows.value=U.state.pointShadow,wt.hemisphereLights.value=U.state.hemi,wt.directionalShadowMap.value=U.state.directionalShadowMap,wt.directionalShadowMatrix.value=U.state.directionalShadowMatrix,wt.spotShadowMap.value=U.state.spotShadowMap,wt.spotLightMatrix.value=U.state.spotLightMatrix,wt.spotLightMap.value=U.state.spotLightMap,wt.pointShadowMap.value=U.state.pointShadowMap,wt.pointShadowMatrix.value=U.state.pointShadowMatrix),F.currentProgram=zt,F.uniformsList=null,zt}function Ia(v){if(v.uniformsList===null){const D=v.currentProgram.getUniforms();v.uniformsList=Ps.seqWithValue(D.seq,v.uniforms)}return v.uniformsList}function Na(v,D){const N=ft.get(v);N.outputColorSpace=D.outputColorSpace,N.batching=D.batching,N.batchingColor=D.batchingColor,N.instancing=D.instancing,N.instancingColor=D.instancingColor,N.instancingMorph=D.instancingMorph,N.skinning=D.skinning,N.morphTargets=D.morphTargets,N.morphNormals=D.morphNormals,N.morphColors=D.morphColors,N.morphTargetsCount=D.morphTargetsCount,N.numClippingPlanes=D.numClippingPlanes,N.numIntersection=D.numClipIntersection,N.vertexAlphas=D.vertexAlphas,N.vertexTangents=D.vertexTangents,N.toneMapping=D.toneMapping}function zl(v,D,N,F,U){D.isScene!==!0&&(D=Zt),y.resetTextureUnits();const et=D.fog,ut=F.isMeshStandardMaterial?D.environment:null,gt=C===null?M.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:Ei,Mt=(F.isMeshStandardMaterial?I:x).get(F.envMap||ut),Dt=F.vertexColors===!0&&!!N.attributes.color&&N.attributes.color.itemSize===4,zt=!!N.attributes.tangent&&(!!F.normalMap||F.anisotropy>0),wt=!!N.morphAttributes.position,kt=!!N.morphAttributes.normal,jt=!!N.morphAttributes.color;let le=Mn;F.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(le=M.toneMapping);const re=N.morphAttributes.position||N.morphAttributes.normal||N.morphAttributes.color,Xt=re!==void 0?re.length:0,Rt=ft.get(F),me=u.state.lights;if(rt===!0&&(yt===!0||v!==q)){const ve=v===q&&F.id===E;nt.setState(F,v,ve)}let Jt=!1;F.version===Rt.__version?(Rt.needsLights&&Rt.lightsStateVersion!==me.state.version||Rt.outputColorSpace!==gt||U.isBatchedMesh&&Rt.batching===!1||!U.isBatchedMesh&&Rt.batching===!0||U.isBatchedMesh&&Rt.batchingColor===!0&&U.colorTexture===null||U.isBatchedMesh&&Rt.batchingColor===!1&&U.colorTexture!==null||U.isInstancedMesh&&Rt.instancing===!1||!U.isInstancedMesh&&Rt.instancing===!0||U.isSkinnedMesh&&Rt.skinning===!1||!U.isSkinnedMesh&&Rt.skinning===!0||U.isInstancedMesh&&Rt.instancingColor===!0&&U.instanceColor===null||U.isInstancedMesh&&Rt.instancingColor===!1&&U.instanceColor!==null||U.isInstancedMesh&&Rt.instancingMorph===!0&&U.morphTexture===null||U.isInstancedMesh&&Rt.instancingMorph===!1&&U.morphTexture!==null||Rt.envMap!==Mt||F.fog===!0&&Rt.fog!==et||Rt.numClippingPlanes!==void 0&&(Rt.numClippingPlanes!==nt.numPlanes||Rt.numIntersection!==nt.numIntersection)||Rt.vertexAlphas!==Dt||Rt.vertexTangents!==zt||Rt.morphTargets!==wt||Rt.morphNormals!==kt||Rt.morphColors!==jt||Rt.toneMapping!==le||Rt.morphTargetsCount!==Xt)&&(Jt=!0):(Jt=!0,Rt.__version=F.version);let Fe=Rt.currentProgram;Jt===!0&&(Fe=Ji(F,D,U));let Wn=!1,Ae=!1,Pi=!1;const ne=Fe.getUniforms(),Pe=Rt.uniforms;if(st.useProgram(Fe.program)&&(Wn=!0,Ae=!0,Pi=!0),F.id!==E&&(E=F.id,Ae=!0),Wn||q!==v){st.buffers.depth.getReversed()?(at.copy(v.projectionMatrix),C1(at),P1(at),ne.setValue(T,"projectionMatrix",at)):ne.setValue(T,"projectionMatrix",v.projectionMatrix),ne.setValue(T,"viewMatrix",v.matrixWorldInverse);const Se=ne.map.cameraPosition;Se!==void 0&&Se.setValue(T,Gt.setFromMatrixPosition(v.matrixWorld)),xt.logarithmicDepthBuffer&&ne.setValue(T,"logDepthBufFC",2/(Math.log(v.far+1)/Math.LN2)),(F.isMeshPhongMaterial||F.isMeshToonMaterial||F.isMeshLambertMaterial||F.isMeshBasicMaterial||F.isMeshStandardMaterial||F.isShaderMaterial)&&ne.setValue(T,"isOrthographic",v.isOrthographicCamera===!0),q!==v&&(q=v,Ae=!0,Pi=!0)}if(U.isSkinnedMesh){ne.setOptional(T,U,"bindMatrix"),ne.setOptional(T,U,"bindMatrixInverse");const ve=U.skeleton;ve&&(ve.boneTexture===null&&ve.computeBoneTexture(),ne.setValue(T,"boneTexture",ve.boneTexture,y))}U.isBatchedMesh&&(ne.setOptional(T,U,"batchingTexture"),ne.setValue(T,"batchingTexture",U._matricesTexture,y),ne.setOptional(T,U,"batchingIdTexture"),ne.setValue(T,"batchingIdTexture",U._indirectTexture,y),ne.setOptional(T,U,"batchingColorTexture"),U._colorsTexture!==null&&ne.setValue(T,"batchingColorTexture",U._colorsTexture,y));const Le=N.morphAttributes;if((Le.position!==void 0||Le.normal!==void 0||Le.color!==void 0)&&Lt.update(U,N,Fe),(Ae||Rt.receiveShadow!==U.receiveShadow)&&(Rt.receiveShadow=U.receiveShadow,ne.setValue(T,"receiveShadow",U.receiveShadow)),F.isMeshGouraudMaterial&&F.envMap!==null&&(Pe.envMap.value=Mt,Pe.flipEnvMap.value=Mt.isCubeTexture&&Mt.isRenderTargetTexture===!1?-1:1),F.isMeshStandardMaterial&&F.envMap===null&&D.environment!==null&&(Pe.envMapIntensity.value=D.environmentIntensity),Ae&&(ne.setValue(T,"toneMappingExposure",M.toneMappingExposure),Rt.needsLights&&Ul(Pe,Pi),et&&F.fog===!0&&ct.refreshFogUniforms(Pe,et),ct.refreshMaterialUniforms(Pe,F,B,j,u.state.transmissionRenderTarget[v.id]),Ps.upload(T,Ia(Rt),Pe,y)),F.isShaderMaterial&&F.uniformsNeedUpdate===!0&&(Ps.upload(T,Ia(Rt),Pe,y),F.uniformsNeedUpdate=!1),F.isSpriteMaterial&&ne.setValue(T,"center",U.center),ne.setValue(T,"modelViewMatrix",U.modelViewMatrix),ne.setValue(T,"normalMatrix",U.normalMatrix),ne.setValue(T,"modelMatrix",U.matrixWorld),F.isShaderMaterial||F.isRawShaderMaterial){const ve=F.uniformsGroups;for(let Se=0,Gs=ve.length;Se<Gs;Se++){const An=ve[Se];L.update(An,Fe),L.bind(An,Fe)}}return Fe}function Ul(v,D){v.ambientLightColor.needsUpdate=D,v.lightProbe.needsUpdate=D,v.directionalLights.needsUpdate=D,v.directionalLightShadows.needsUpdate=D,v.pointLights.needsUpdate=D,v.pointLightShadows.needsUpdate=D,v.spotLights.needsUpdate=D,v.spotLightShadows.needsUpdate=D,v.rectAreaLights.needsUpdate=D,v.hemisphereLights.needsUpdate=D}function Il(v){return v.isMeshLambertMaterial||v.isMeshToonMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isShadowMaterial||v.isShaderMaterial&&v.lights===!0}this.getActiveCubeFace=function(){return w},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(v,D,N){ft.get(v.texture).__webglTexture=D,ft.get(v.depthTexture).__webglTexture=N;const F=ft.get(v);F.__hasExternalTextures=!0,F.__autoAllocateDepthBuffer=N===void 0,F.__autoAllocateDepthBuffer||tt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),F.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(v,D){const N=ft.get(v);N.__webglFramebuffer=D,N.__useDefaultFramebuffer=D===void 0};const Nl=T.createFramebuffer();this.setRenderTarget=function(v,D=0,N=0){C=v,w=D,A=N;let F=!0,U=null,et=!1,ut=!1;if(v){const Mt=ft.get(v);if(Mt.__useDefaultFramebuffer!==void 0)st.bindFramebuffer(T.FRAMEBUFFER,null),F=!1;else if(Mt.__webglFramebuffer===void 0)y.setupRenderTarget(v);else if(Mt.__hasExternalTextures)y.rebindTextures(v,ft.get(v.texture).__webglTexture,ft.get(v.depthTexture).__webglTexture);else if(v.depthBuffer){const wt=v.depthTexture;if(Mt.__boundDepthTexture!==wt){if(wt!==null&&ft.has(wt)&&(v.width!==wt.image.width||v.height!==wt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");y.setupDepthRenderbuffer(v)}}const Dt=v.texture;(Dt.isData3DTexture||Dt.isDataArrayTexture||Dt.isCompressedArrayTexture)&&(ut=!0);const zt=ft.get(v).__webglFramebuffer;v.isWebGLCubeRenderTarget?(Array.isArray(zt[D])?U=zt[D][N]:U=zt[D],et=!0):v.samples>0&&y.useMultisampledRTT(v)===!1?U=ft.get(v).__webglMultisampledFramebuffer:Array.isArray(zt)?U=zt[N]:U=zt,R.copy(v.viewport),X.copy(v.scissor),O=v.scissorTest}else R.copy(St).multiplyScalar(B).floor(),X.copy(Ut).multiplyScalar(B).floor(),O=Kt;if(N!==0&&(U=Nl),st.bindFramebuffer(T.FRAMEBUFFER,U)&&F&&st.drawBuffers(v,U),st.viewport(R),st.scissor(X),st.setScissorTest(O),et){const Mt=ft.get(v.texture);T.framebufferTexture2D(T.FRAMEBUFFER,T.COLOR_ATTACHMENT0,T.TEXTURE_CUBE_MAP_POSITIVE_X+D,Mt.__webglTexture,N)}else if(ut){const Mt=ft.get(v.texture),Dt=D;T.framebufferTextureLayer(T.FRAMEBUFFER,T.COLOR_ATTACHMENT0,Mt.__webglTexture,N,Dt)}else if(v!==null&&N!==0){const Mt=ft.get(v.texture);T.framebufferTexture2D(T.FRAMEBUFFER,T.COLOR_ATTACHMENT0,T.TEXTURE_2D,Mt.__webglTexture,N)}E=-1},this.readRenderTargetPixels=function(v,D,N,F,U,et,ut){if(!(v&&v.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let gt=ft.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&ut!==void 0&&(gt=gt[ut]),gt){st.bindFramebuffer(T.FRAMEBUFFER,gt);try{const Mt=v.texture,Dt=Mt.format,zt=Mt.type;if(!xt.textureFormatReadable(Dt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!xt.textureTypeReadable(zt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}D>=0&&D<=v.width-F&&N>=0&&N<=v.height-U&&T.readPixels(D,N,F,U,Ft.convert(Dt),Ft.convert(zt),et)}finally{const Mt=C!==null?ft.get(C).__webglFramebuffer:null;st.bindFramebuffer(T.FRAMEBUFFER,Mt)}}},this.readRenderTargetPixelsAsync=async function(v,D,N,F,U,et,ut){if(!(v&&v.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let gt=ft.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&ut!==void 0&&(gt=gt[ut]),gt){const Mt=v.texture,Dt=Mt.format,zt=Mt.type;if(!xt.textureFormatReadable(Dt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!xt.textureTypeReadable(zt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(D>=0&&D<=v.width-F&&N>=0&&N<=v.height-U){st.bindFramebuffer(T.FRAMEBUFFER,gt);const wt=T.createBuffer();T.bindBuffer(T.PIXEL_PACK_BUFFER,wt),T.bufferData(T.PIXEL_PACK_BUFFER,et.byteLength,T.STREAM_READ),T.readPixels(D,N,F,U,Ft.convert(Dt),Ft.convert(zt),0);const kt=C!==null?ft.get(C).__webglFramebuffer:null;st.bindFramebuffer(T.FRAMEBUFFER,kt);const jt=T.fenceSync(T.SYNC_GPU_COMMANDS_COMPLETE,0);return T.flush(),await R1(T,jt,4),T.bindBuffer(T.PIXEL_PACK_BUFFER,wt),T.getBufferSubData(T.PIXEL_PACK_BUFFER,0,et),T.deleteBuffer(wt),T.deleteSync(jt),et}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(v,D=null,N=0){v.isTexture!==!0&&(ai("WebGLRenderer: copyFramebufferToTexture function signature has changed."),D=arguments[0]||null,v=arguments[1]);const F=Math.pow(2,-N),U=Math.floor(v.image.width*F),et=Math.floor(v.image.height*F),ut=D!==null?D.x:0,gt=D!==null?D.y:0;y.setTexture2D(v,0),T.copyTexSubImage2D(T.TEXTURE_2D,N,0,0,ut,gt,U,et),st.unbindTexture()};const Fl=T.createFramebuffer(),Ol=T.createFramebuffer();this.copyTextureToTexture=function(v,D,N=null,F=null,U=0,et=null){v.isTexture!==!0&&(ai("WebGLRenderer: copyTextureToTexture function signature has changed."),F=arguments[0]||null,v=arguments[1],D=arguments[2],et=arguments[3]||0,N=null),et===null&&(U!==0?(ai("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),et=U,U=0):et=0);let ut,gt,Mt,Dt,zt,wt,kt,jt,le;const re=v.isCompressedTexture?v.mipmaps[et]:v.image;if(N!==null)ut=N.max.x-N.min.x,gt=N.max.y-N.min.y,Mt=N.isBox3?N.max.z-N.min.z:1,Dt=N.min.x,zt=N.min.y,wt=N.isBox3?N.min.z:0;else{const Le=Math.pow(2,-U);ut=Math.floor(re.width*Le),gt=Math.floor(re.height*Le),v.isDataArrayTexture?Mt=re.depth:v.isData3DTexture?Mt=Math.floor(re.depth*Le):Mt=1,Dt=0,zt=0,wt=0}F!==null?(kt=F.x,jt=F.y,le=F.z):(kt=0,jt=0,le=0);const Xt=Ft.convert(D.format),Rt=Ft.convert(D.type);let me;D.isData3DTexture?(y.setTexture3D(D,0),me=T.TEXTURE_3D):D.isDataArrayTexture||D.isCompressedArrayTexture?(y.setTexture2DArray(D,0),me=T.TEXTURE_2D_ARRAY):(y.setTexture2D(D,0),me=T.TEXTURE_2D),T.pixelStorei(T.UNPACK_FLIP_Y_WEBGL,D.flipY),T.pixelStorei(T.UNPACK_PREMULTIPLY_ALPHA_WEBGL,D.premultiplyAlpha),T.pixelStorei(T.UNPACK_ALIGNMENT,D.unpackAlignment);const Jt=T.getParameter(T.UNPACK_ROW_LENGTH),Fe=T.getParameter(T.UNPACK_IMAGE_HEIGHT),Wn=T.getParameter(T.UNPACK_SKIP_PIXELS),Ae=T.getParameter(T.UNPACK_SKIP_ROWS),Pi=T.getParameter(T.UNPACK_SKIP_IMAGES);T.pixelStorei(T.UNPACK_ROW_LENGTH,re.width),T.pixelStorei(T.UNPACK_IMAGE_HEIGHT,re.height),T.pixelStorei(T.UNPACK_SKIP_PIXELS,Dt),T.pixelStorei(T.UNPACK_SKIP_ROWS,zt),T.pixelStorei(T.UNPACK_SKIP_IMAGES,wt);const ne=v.isDataArrayTexture||v.isData3DTexture,Pe=D.isDataArrayTexture||D.isData3DTexture;if(v.isDepthTexture){const Le=ft.get(v),ve=ft.get(D),Se=ft.get(Le.__renderTarget),Gs=ft.get(ve.__renderTarget);st.bindFramebuffer(T.READ_FRAMEBUFFER,Se.__webglFramebuffer),st.bindFramebuffer(T.DRAW_FRAMEBUFFER,Gs.__webglFramebuffer);for(let An=0;An<Mt;An++)ne&&(T.framebufferTextureLayer(T.READ_FRAMEBUFFER,T.COLOR_ATTACHMENT0,ft.get(v).__webglTexture,U,wt+An),T.framebufferTextureLayer(T.DRAW_FRAMEBUFFER,T.COLOR_ATTACHMENT0,ft.get(D).__webglTexture,et,le+An)),T.blitFramebuffer(Dt,zt,ut,gt,kt,jt,ut,gt,T.DEPTH_BUFFER_BIT,T.NEAREST);st.bindFramebuffer(T.READ_FRAMEBUFFER,null),st.bindFramebuffer(T.DRAW_FRAMEBUFFER,null)}else if(U!==0||v.isRenderTargetTexture||ft.has(v)){const Le=ft.get(v),ve=ft.get(D);st.bindFramebuffer(T.READ_FRAMEBUFFER,Fl),st.bindFramebuffer(T.DRAW_FRAMEBUFFER,Ol);for(let Se=0;Se<Mt;Se++)ne?T.framebufferTextureLayer(T.READ_FRAMEBUFFER,T.COLOR_ATTACHMENT0,Le.__webglTexture,U,wt+Se):T.framebufferTexture2D(T.READ_FRAMEBUFFER,T.COLOR_ATTACHMENT0,T.TEXTURE_2D,Le.__webglTexture,U),Pe?T.framebufferTextureLayer(T.DRAW_FRAMEBUFFER,T.COLOR_ATTACHMENT0,ve.__webglTexture,et,le+Se):T.framebufferTexture2D(T.DRAW_FRAMEBUFFER,T.COLOR_ATTACHMENT0,T.TEXTURE_2D,ve.__webglTexture,et),U!==0?T.blitFramebuffer(Dt,zt,ut,gt,kt,jt,ut,gt,T.COLOR_BUFFER_BIT,T.NEAREST):Pe?T.copyTexSubImage3D(me,et,kt,jt,le+Se,Dt,zt,ut,gt):T.copyTexSubImage2D(me,et,kt,jt,Dt,zt,ut,gt);st.bindFramebuffer(T.READ_FRAMEBUFFER,null),st.bindFramebuffer(T.DRAW_FRAMEBUFFER,null)}else Pe?v.isDataTexture||v.isData3DTexture?T.texSubImage3D(me,et,kt,jt,le,ut,gt,Mt,Xt,Rt,re.data):D.isCompressedArrayTexture?T.compressedTexSubImage3D(me,et,kt,jt,le,ut,gt,Mt,Xt,re.data):T.texSubImage3D(me,et,kt,jt,le,ut,gt,Mt,Xt,Rt,re):v.isDataTexture?T.texSubImage2D(T.TEXTURE_2D,et,kt,jt,ut,gt,Xt,Rt,re.data):v.isCompressedTexture?T.compressedTexSubImage2D(T.TEXTURE_2D,et,kt,jt,re.width,re.height,Xt,re.data):T.texSubImage2D(T.TEXTURE_2D,et,kt,jt,ut,gt,Xt,Rt,re);T.pixelStorei(T.UNPACK_ROW_LENGTH,Jt),T.pixelStorei(T.UNPACK_IMAGE_HEIGHT,Fe),T.pixelStorei(T.UNPACK_SKIP_PIXELS,Wn),T.pixelStorei(T.UNPACK_SKIP_ROWS,Ae),T.pixelStorei(T.UNPACK_SKIP_IMAGES,Pi),et===0&&D.generateMipmaps&&T.generateMipmap(me),st.unbindTexture()},this.copyTextureToTexture3D=function(v,D,N=null,F=null,U=0){return v.isTexture!==!0&&(ai("WebGLRenderer: copyTextureToTexture3D function signature has changed."),N=arguments[0]||null,F=arguments[1]||null,v=arguments[2],D=arguments[3],U=arguments[4]||0),ai('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(v,D,N,F,U)},this.initRenderTarget=function(v){ft.get(v).__webglFramebuffer===void 0&&y.setupRenderTarget(v)},this.initTexture=function(v){v.isCubeTexture?y.setTextureCube(v,0):v.isData3DTexture?y.setTexture3D(v,0):v.isDataArrayTexture||v.isCompressedArrayTexture?y.setTexture2DArray(v,0):y.setTexture2D(v,0),st.unbindTexture()},this.resetState=function(){w=0,A=0,C=null,st.reset(),ee.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ln}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=Yt._getDrawingBufferColorSpace(t),e.unpackColorSpace=Yt._getUnpackColorSpace()}}class P4 extends pe{constructor(){super(),this.geometry=new Fs(.05,.2),this.material=new Yi({color:3355443}),this.geometry.computeBoundingBox()}}class L4 extends pe{constructor(t){super(),this.projectiles=t,this.geometry=new Fs(.4,1,4,8),this.material=new Ki({color:10092458}),this.rateOfFire=3,this.damage=1,this.numberOfGuns=1,this.isShooting=!1,this.geometry.computeBoundingBox(),this.gunIntervals={},window.addEventListener("mousemove",e=>{this.position.x=e.clientX/window.innerWidth*10-5})}shootGun(t=0){clearInterval(this.gunIntervals[t]),this.gunIntervals[t]=setInterval(()=>{if(!this.isShooting)return;const e=this.numberOfGuns>1?t/(this.numberOfGuns-1)-1/2:0,n=new P4;n.position.set(this.position.x+e,-4,.5),this.projectiles.add(n)},1e3/this.rateOfFire)}shoot(t=0){this.isShooting=!0,setTimeout(()=>{this.shootGun(t),t<this.numberOfGuns-1&&this.shoot(t+1)},1e3/this.rateOfFire/this.numberOfGuns)}stopShooting(){this.isShooting=!1}powerUp(t){console.log(t),this.rateOfFire+=t.rateOfFire,this.damage+=t.damage,this.numberOfGuns+=t.numberOfGuns,this.isShooting&&this.shoot()}getDps(){return this.damage*this.rateOfFire}}class pa extends ba{constructor(t,e={}){const n=e.font;if(n===void 0)super();else{const s=n.generateShapes(t,e.size);e.depth===void 0&&(e.depth=50),e.bevelThickness===void 0&&(e.bevelThickness=10),e.bevelSize===void 0&&(e.bevelSize=8),e.bevelEnabled===void 0&&(e.bevelEnabled=!1),super(s,e)}this.type="TextGeometry"}}class wl extends pe{constructor(t){super(),this.points=t,this.hits=t}hit(t=1){return this.hits-=t,this.hits>0}}const xi={SPEED:0,MULTIPLIER:1,POWER:2},D4={[xi.SPEED]:2738756,[xi.MULTIPLIER]:13113111,[xi.POWER]:13168408};class z4 extends wl{constructor(t){super(-10),this.type=Math.floor(Math.random()*3),this.geometry=new Tn(3,.2,3),this.material=new Ki({color:11184691,opacity:.4,transparent:!0}),this.font=t,this.textMesh,this.createText(),this.geometry.computeBoundingBox()}createText(){const t=new pa(this.hits.toString(),{font:this.font,size:1,depth:.2}),e=new Yi({color:D4[this.type]});t.computeBoundingBox();const n=-.5*(t.boundingBox.max.x-t.boundingBox.min.x);this.textMesh=new pe(t,e),this.textMesh.position.x=n,this.textMesh.position.z=.25,this.textMesh.rotation.x=Math.PI/2,this.add(this.textMesh)}hit(){return this.remove(this.textMesh),this.createText(),super.hit(-1)}getBonus(){return{rateOfFire:this.type===xi.SPEED?1:0,damage:this.type===xi.POWER?1:0,numberOfGuns:this.type===xi.MULTIPLIER?1:0}}}class U4 extends Aa{constructor(t){super(t)}load(t,e,n,s){const r=this,a=new Vc(this.manager);a.setPath(this.path),a.setRequestHeader(this.requestHeader),a.setWithCredentials(this.withCredentials),a.load(t,function(o){const l=r.parse(JSON.parse(o));e&&e(l)},n,s)}parse(t){return new I4(t)}}class I4{constructor(t){this.isFont=!0,this.type="Font",this.data=t}generateShapes(t,e=100){const n=[],s=N4(t,e,this.data);for(let r=0,a=s.length;r<a;r++)n.push(...s[r].toShapes());return n}}function N4(i,t,e){const n=Array.from(i),s=t/e.resolution,r=(e.boundingBox.yMax-e.boundingBox.yMin+e.underlineThickness)*s,a=[];let o=0,l=0;for(let c=0;c<n.length;c++){const h=n[c];if(h===`
`)o=0,l-=r;else{const f=F4(h,s,o,l,e);o+=f.offsetX,a.push(f.path)}}return a}function F4(i,t,e,n,s){const r=s.glyphs[i]||s.glyphs["?"];if(!r){console.error('THREE.Font: character "'+i+'" does not exists in font family '+s.familyName+".");return}const a=new Yc;let o,l,c,h,f,d,p,_;if(r.o){const g=r._cachedOutline||(r._cachedOutline=r.o.split(" "));for(let m=0,u=g.length;m<u;)switch(g[m++]){case"m":o=g[m++]*t+e,l=g[m++]*t+n,a.moveTo(o,l);break;case"l":o=g[m++]*t+e,l=g[m++]*t+n,a.lineTo(o,l);break;case"q":c=g[m++]*t+e,h=g[m++]*t+n,f=g[m++]*t+e,d=g[m++]*t+n,a.quadraticCurveTo(f,d,c,h);break;case"b":c=g[m++]*t+e,h=g[m++]*t+n,f=g[m++]*t+e,d=g[m++]*t+n,p=g[m++]*t+e,_=g[m++]*t+n,a.bezierCurveTo(f,d,p,_,c,h);break}}return{offsetX:r.ha*t,path:a}}const O4=JSON.parse('{"0":{"ha":804,"x_min":58,"x_max":746,"o":"m 746 583 l 746 404 q 656 95 746 203 q 403 -14 566 -14 l 403 -14 q 148 96 238 -14 q 58 404 58 205 l 58 404 l 58 584 q 148 892 58 784 q 401 1001 237 1001 q 656 892 566 1001 q 746 583 746 783 l 746 583 z m 517 369 l 517 613 q 490 772 517 720 q 401 825 462 825 l 401 825 q 316 776 342 825 q 287 628 289 727 l 287 628 l 287 376 q 315 214 287 265 q 403 163 342 163 l 403 163 q 489 213 461 163 q 517 369 517 262 l 517 369 z "},"1":{"ha":804,"x_min":113,"x_max":567,"o":"m 567 987 l 567 0 l 338 0 l 338 730 l 113 664 l 113 838 l 546 987 l 567 987 z "},"2":{"ha":804,"x_min":40,"x_max":749,"o":"m 749 176 l 749 0 l 60 0 l 60 149 l 378 483 q 495 695 495 616 l 495 695 q 467 792 495 759 q 387 825 439 825 l 387 825 q 302 781 334 825 q 269 670 269 736 l 269 670 l 40 670 q 85 838 40 761 q 212 958 131 915 q 392 1002 292 1002 l 392 1002 q 638 928 552 1002 q 725 715 725 854 l 725 715 q 703 602 725 657 q 636 486 682 547 q 488 323 590 425 l 488 323 l 361 176 l 749 176 z "},"3":{"ha":804,"x_min":32,"x_max":749,"o":"m 269 419 l 269 589 l 377 589 q 505 715 505 589 l 505 715 q 475 794 505 764 q 389 825 444 825 l 389 825 q 310 799 343 825 q 276 733 276 772 l 276 733 l 47 733 q 91 872 47 811 q 211 967 134 933 q 380 1002 288 1002 l 380 1002 q 640 926 545 1002 q 734 720 734 851 l 734 720 q 695 599 734 656 q 581 507 656 543 l 581 507 q 705 421 660 479 q 749 277 749 363 l 749 277 q 648 66 749 145 q 380 -14 546 -14 l 380 -14 q 200 23 283 -14 q 75 126 117 60 q 32 275 32 191 l 32 275 l 262 275 q 298 196 262 229 q 389 163 335 163 l 389 163 q 485 196 449 163 q 521 282 521 230 l 521 282 q 484 388 521 357 q 380 419 446 419 l 380 419 l 269 419 z "},"4":{"ha":804,"x_min":40,"x_max":764,"o":"m 664 987 l 664 386 l 764 386 l 764 210 l 664 210 l 664 0 l 435 0 l 435 210 l 54 210 l 40 349 l 435 985 l 435 987 l 664 987 z m 421 667 l 258 386 l 435 386 l 435 690 l 421 667 z "},"5":{"ha":804,"x_min":54,"x_max":745,"o":"m 256 440 l 74 483 l 134 987 l 711 987 l 711 810 l 320 810 l 298 614 q 362 639 322 628 q 439 650 401 650 l 439 650 q 666 563 587 650 q 745 318 745 475 l 745 318 q 702 146 745 223 q 583 28 660 69 q 402 -14 507 -14 l 402 -14 q 228 25 309 -14 q 100 130 146 63 q 55 281 54 197 l 55 281 l 284 281 q 319 195 288 227 q 401 163 350 163 l 401 163 q 516 334 516 163 l 516 334 q 375 492 516 492 l 375 492 q 256 440 295 492 l 256 440 z "},"6":{"ha":804,"x_min":56,"x_max":766,"o":"m 578 1002 l 612 1002 l 612 822 l 602 822 q 392 761 474 822 q 290 590 309 699 l 290 590 q 486 666 368 666 l 486 666 q 690 572 614 666 q 766 327 766 479 l 766 327 q 721 154 766 233 q 597 31 677 75 q 420 -14 517 -14 l 420 -14 q 233 34 315 -14 q 104 171 150 82 q 56 376 58 260 l 56 376 l 56 467 q 122 742 56 620 q 309 932 187 863 q 578 1002 430 1002 l 578 1002 z m 406 491 l 406 491 q 330 470 361 491 q 285 418 300 449 l 285 418 l 285 350 q 414 163 285 163 l 414 163 q 502 210 467 163 q 536 327 536 256 l 536 327 q 501 445 536 399 q 406 491 465 491 z "},"7":{"ha":804,"x_min":35,"x_max":747,"o":"m 747 987 l 747 865 l 378 0 l 136 0 l 506 811 l 35 811 l 35 987 l 747 987 z "},"8":{"ha":804,"x_min":57,"x_max":746,"o":"m 726 724 l 726 724 q 691 597 726 652 q 593 509 655 542 l 593 509 q 705 414 663 474 q 746 272 746 354 l 746 272 q 655 63 746 140 q 404 -14 564 -14 l 404 -14 q 150 63 243 -14 q 57 272 57 140 l 57 272 q 98 412 57 351 q 213 509 138 473 l 213 509 q 114 597 150 542 q 78 724 78 652 l 78 724 q 165 927 78 852 q 401 1002 253 1002 l 401 1002 q 639 927 551 1002 q 726 724 726 852 z m 517 290 l 517 290 q 485 384 517 351 q 402 417 454 417 q 319 384 351 417 q 287 290 287 351 l 287 290 q 319 197 287 231 q 404 163 351 163 l 404 163 q 486 197 454 163 q 517 290 517 231 z m 401 825 l 401 825 q 331 795 355 825 q 307 711 307 765 l 307 711 q 332 626 307 659 q 404 593 356 593 l 404 593 q 474 626 450 593 q 497 711 497 659 q 473 795 497 764 q 401 825 449 825 z "},"9":{"ha":804,"x_min":54,"x_max":743,"o":"m 511 382 l 511 382 q 345 315 437 315 l 345 315 q 132 406 211 315 q 54 649 54 497 l 54 649 q 98 825 54 744 q 221 954 142 907 q 397 1002 301 1002 l 397 1002 q 574 952 495 1002 q 697 813 653 903 q 743 606 741 724 l 743 606 l 743 519 q 679 235 743 355 q 496 51 614 115 q 219 -14 377 -14 l 219 -14 l 205 -14 l 205 170 l 248 170 q 511 382 484 182 z m 407 480 l 407 480 q 514 545 481 480 l 514 545 l 514 640 q 482 780 514 734 q 396 825 450 825 l 396 825 q 315 774 348 825 q 283 649 283 722 l 283 649 q 316 526 283 572 q 407 480 349 480 z "},"\\u0000":{"ha":0,"x_min":null,"x_max":null,"o":""},"\\r":{"ha":346,"x_min":null,"x_max":null,"o":""}," ":{"ha":346,"x_min":null,"x_max":null,"o":""},"!":{"ha":383,"x_min":70,"x_max":323,"o":"m 320 987 l 291 313 l 106 313 l 77 987 l 320 987 z m 70 102 l 70 102 q 106 185 70 153 q 197 217 142 217 q 287 185 251 217 q 323 102 323 153 q 287 20 323 52 q 197 -12 251 -12 q 106 20 142 -12 q 70 102 70 52 z "},"\\"":{"ha":440,"x_min":17,"x_max":411,"o":"m 173 1042 l 173 948 l 144 657 l 17 657 l 17 1042 l 173 1042 z m 411 1042 l 411 948 l 382 657 l 256 657 l 256 1042 l 411 1042 z "},"#":{"ha":807,"x_min":20,"x_max":777,"o":"m 370 0 l 415 278 l 306 278 l 260 0 l 125 0 l 171 278 l 20 278 l 20 402 l 191 402 l 221 581 l 71 581 l 71 705 l 241 705 l 288 987 l 422 987 l 376 705 l 486 705 l 532 987 l 667 987 l 621 705 l 777 705 l 777 581 l 600 581 l 570 402 l 726 402 l 726 278 l 550 278 l 505 0 l 370 0 z m 356 581 l 326 402 l 435 402 l 465 581 l 356 581 z "},"$":{"ha":804,"x_min":56,"x_max":749,"o":"m 515 262 l 515 262 q 489 346 515 315 q 396 404 463 376 q 273 458 330 431 q 176 523 217 486 q 114 608 136 559 q 92 724 92 656 l 92 724 q 170 913 92 839 q 376 1000 247 987 l 376 1000 l 376 1143 l 484 1143 l 484 997 q 679 895 608 979 q 749 682 749 811 l 749 682 l 520 682 q 493 791 520 753 q 416 829 466 829 l 416 829 q 346 801 371 829 q 321 723 321 772 l 321 723 q 350 643 321 673 q 441 587 378 614 q 561 531 505 560 q 657 466 616 503 q 721 380 698 429 q 744 263 744 332 l 744 263 q 670 74 744 147 q 470 -12 597 1 l 470 -12 l 470 -148 l 362 -148 l 362 -11 q 135 91 214 5 q 56 317 56 176 l 56 317 l 285 317 q 319 199 285 239 q 416 159 353 159 l 416 159 q 489 186 463 159 q 515 262 515 214 z "},"%":{"ha":1031,"x_min":61,"x_max":970,"o":"m 61 749 l 61 798 q 121 945 61 889 q 281 1002 180 1002 l 281 1002 q 441 946 382 1002 q 500 794 500 890 l 500 794 l 500 745 q 441 598 500 654 q 282 543 382 543 l 282 543 q 122 598 182 543 q 61 749 61 653 l 61 749 z m 208 796 l 208 745 q 228 688 208 710 q 282 666 248 666 l 282 666 q 353 757 353 666 l 353 757 l 353 798 q 334 856 353 833 q 281 878 315 878 l 281 878 q 228 856 248 878 q 208 796 208 834 l 208 796 z m 530 193 l 530 242 q 590 390 530 334 q 750 446 650 446 l 750 446 q 911 391 851 446 q 970 237 970 336 l 970 237 l 970 190 q 911 42 970 98 q 751 -14 852 -14 l 751 -14 q 591 42 652 -14 q 530 193 530 97 l 530 193 z m 677 245 l 677 190 q 699 134 677 158 q 751 110 720 110 l 751 110 q 823 172 817 110 l 823 172 l 823 242 q 804 300 823 278 q 750 322 784 322 l 750 322 q 698 301 718 322 q 677 245 678 281 l 677 245 z m 808 846 l 326 74 l 219 127 l 701 899 l 808 846 z "},"&":{"ha":936,"x_min":38,"x_max":912,"o":"m 209 519 l 211 520 q 148 629 171 577 q 125 735 125 680 l 125 735 q 203 928 125 854 q 405 1002 280 1002 l 405 1002 q 590 933 517 1002 q 663 764 663 865 l 663 764 q 524 541 663 638 l 524 541 l 473 505 l 625 330 q 662 494 662 405 l 662 494 l 854 494 q 762 173 854 294 l 762 173 l 912 0 l 657 0 l 611 52 q 495 2 554 18 q 361 -14 435 -14 l 361 -14 q 126 63 214 -14 q 38 265 38 140 l 38 265 q 73 389 38 334 q 209 519 108 445 l 209 519 z m 376 162 l 376 162 q 490 190 435 162 l 490 190 l 312 392 l 306 388 q 267 281 267 340 l 267 281 q 298 197 267 231 q 376 162 330 162 z m 323 738 l 323 738 q 374 623 323 690 l 374 623 l 420 651 q 465 693 451 671 q 479 748 479 715 l 479 748 q 458 802 479 779 q 404 825 436 825 l 404 825 q 345 801 366 825 q 323 738 323 777 z "},"\'":{"ha":214,"x_min":29,"x_max":192,"o":"m 192 1042 l 192 932 l 170 652 l 29 652 l 29 1042 l 192 1042 z "},"(":{"ha":490,"x_min":81,"x_max":463,"o":"m 81 371 l 81 401 q 125 709 81 567 q 247 951 170 852 q 420 1089 325 1050 l 420 1089 l 463 977 q 316 759 368 907 q 264 411 264 610 l 264 411 l 264 381 q 316 27 264 177 q 463 -193 368 -123 l 463 -193 l 420 -305 q 247 -166 326 -267 q 125 74 168 -66 q 81 371 83 214 l 81 371 z "},")":{"ha":489,"x_min":27,"x_max":425,"o":"m 425 412 l 425 382 q 378 80 425 223 q 249 -166 331 -63 q 71 -305 166 -269 l 71 -305 l 27 -193 q 173 24 121 -122 q 227 361 224 171 l 227 361 l 227 403 q 175 757 227 607 q 27 977 123 907 l 27 977 l 71 1089 q 247 951 165 1052 q 376 709 329 850 q 425 412 423 568 l 425 412 z "},"*":{"ha":646,"x_min":18,"x_max":643,"o":"m 84 464 l 239 648 l 18 709 l 62 838 l 278 749 l 261 987 l 406 987 l 389 744 l 599 831 l 643 701 l 419 640 l 568 460 l 450 380 l 326 580 l 201 387 l 84 464 z "},"+":{"ha":742,"x_min":31,"x_max":707,"o":"m 476 818 l 476 560 l 707 560 l 707 364 l 476 364 l 476 99 l 262 99 l 262 364 l 31 364 l 31 560 l 262 560 l 262 818 l 476 818 z "},",":{"ha":374,"x_min":29,"x_max":285,"o":"m 144 -266 l 144 -266 l 29 -212 l 52 -165 q 102 3 100 -77 l 102 3 l 102 172 l 285 172 l 284 25 q 244 -134 283 -53 q 144 -266 205 -214 z "},"-":{"ha":625,"x_min":103,"x_max":511,"o":"m 511 514 l 511 337 l 103 337 l 103 514 l 511 514 z "},".":{"ha":420,"x_min":79,"x_max":332,"o":"m 205 222 l 205 222 q 296 190 260 222 q 332 107 332 157 q 296 25 332 57 q 205 -7 260 -7 l 205 -7 q 115 25 151 -7 q 79 107 79 58 q 115 189 79 157 q 205 222 151 222 z "},"/":{"ha":488,"x_min":-20,"x_max":480,"o":"m 480 987 l 142 -85 l -20 -85 l 317 987 l 480 987 z "},":":{"ha":417,"x_min":80,"x_max":332,"o":"m 206 222 l 206 222 q 296 190 260 222 q 332 107 332 157 q 296 25 332 57 q 206 -7 260 -7 l 206 -7 q 116 25 151 -7 q 80 107 80 58 q 116 189 80 157 q 206 222 151 222 z m 206 763 l 206 763 q 296 731 260 763 q 332 648 332 699 q 296 566 332 598 q 206 534 260 534 l 206 534 q 116 566 151 534 q 80 648 80 599 q 116 730 80 698 q 206 763 151 763 z "},";":{"ha":400,"x_min":46,"x_max":326,"o":"m 199 763 l 199 763 q 290 731 254 763 q 326 648 326 699 q 290 566 326 598 q 199 534 254 534 l 199 534 q 109 566 144 534 q 73 648 73 599 q 109 730 73 698 q 199 763 144 763 z m 161 -266 l 161 -266 l 46 -212 l 69 -165 q 119 3 117 -77 l 119 3 l 119 172 l 302 172 l 301 25 q 261 -134 300 -53 q 161 -266 222 -214 z "},"<":{"ha":708,"x_min":31,"x_max":631,"o":"m 631 541 l 260 413 l 631 288 l 631 80 l 31 324 l 31 505 l 631 749 l 631 541 z "},"=":{"ha":813,"x_min":87,"x_max":715,"o":"m 715 666 l 715 490 l 87 490 l 87 666 l 715 666 z m 715 368 l 715 192 l 87 192 l 87 368 l 715 368 z "},">":{"ha":712,"x_min":75,"x_max":671,"o":"m 75 287 l 444 415 l 75 541 l 75 748 l 671 504 l 671 323 l 75 79 l 75 287 z "},"?":{"ha":707,"x_min":21,"x_max":660,"o":"m 427 313 l 233 313 q 256 469 233 412 q 328 568 278 526 q 405 645 378 610 q 431 722 431 680 l 431 722 q 342 825 431 825 l 342 825 q 277 795 302 825 q 250 714 252 765 l 250 714 l 21 714 q 106 925 22 850 q 342 1001 191 1001 l 342 1001 q 577 931 494 1001 q 660 732 660 861 l 660 732 q 637 630 660 676 q 566 536 615 584 l 566 536 l 488 463 q 441 398 454 431 q 427 313 429 364 l 427 313 z m 205 106 l 205 106 q 242 189 205 157 q 332 221 278 221 q 423 189 387 221 q 459 106 459 157 q 423 24 459 56 q 332 -8 387 -8 q 242 24 278 -8 q 205 106 205 56 z "},"@":{"ha":1244,"x_min":40,"x_max":1198,"o":"m 1191 373 l 1191 373 q 1103 91 1184 196 q 886 -14 1021 -14 l 886 -14 q 787 10 830 -14 q 721 78 745 34 l 721 78 q 543 -12 654 -12 l 543 -12 q 429 27 477 -12 q 357 136 380 65 q 343 296 334 206 l 343 296 q 452 568 363 465 q 670 671 541 671 l 670 671 q 842 625 770 671 l 842 625 l 884 597 l 850 199 q 915 104 838 104 l 915 104 q 1011 178 972 104 q 1055 366 1050 252 l 1055 366 q 961 716 1066 593 q 652 840 855 840 l 652 840 q 421 773 522 840 q 262 586 321 707 q 196 311 203 465 l 196 311 q 291 -53 185 73 q 608 -178 397 -178 l 608 -178 q 729 -165 665 -178 q 833 -134 793 -152 l 833 -134 l 858 -247 q 746 -291 817 -274 q 606 -307 676 -307 l 606 -307 q 293 -236 420 -307 q 102 -26 165 -165 q 47 311 40 113 l 47 311 q 133 646 55 498 q 348 875 212 794 q 654 956 484 956 q 949 885 825 956 q 1136 682 1074 814 q 1191 373 1198 549 z m 513 296 l 513 296 q 527 162 505 208 q 595 117 548 117 l 595 117 q 654 146 627 117 q 699 227 681 174 l 699 227 l 726 536 q 684 542 705 542 l 684 542 q 567 483 608 542 q 513 296 526 423 z "},"A":{"ha":946,"x_min":-2,"x_max":949,"o":"m 693 0 l 635 184 l 309 184 l 252 0 l -2 0 l 360 987 l 584 987 l 949 0 l 693 0 z m 472 711 l 366 368 l 578 368 l 472 711 z "},"B":{"ha":896,"x_min":75,"x_max":840,"o":"m 475 0 l 75 0 l 75 987 l 429 987 q 719 918 620 987 q 819 715 819 848 l 819 715 q 783 584 819 638 q 680 504 748 530 l 680 504 q 798 428 757 484 q 840 292 840 372 l 840 292 q 748 74 840 147 q 475 0 656 1 l 475 0 z m 479 420 l 313 420 l 313 183 l 469 183 q 568 213 533 183 q 602 296 602 242 l 602 296 q 479 420 602 419 l 479 420 z m 313 804 l 313 576 l 437 576 q 548 604 515 576 q 581 686 581 632 l 581 686 q 545 776 581 749 q 429 804 509 804 l 429 804 l 313 804 z "},"C":{"ha":911,"x_min":47,"x_max":876,"o":"m 637 334 l 873 334 q 818 152 869 231 q 675 30 767 73 q 465 -14 583 -14 l 465 -14 q 159 113 271 -14 q 47 471 47 240 l 47 471 l 47 520 q 97 774 47 665 q 243 942 148 883 q 463 1002 338 1002 l 463 1002 q 751 907 642 1002 q 876 646 861 812 l 876 646 l 638 646 q 593 776 635 736 q 463 815 550 815 l 463 815 q 332 749 374 815 q 289 536 291 682 l 289 536 l 289 467 q 329 241 289 309 q 465 173 368 173 l 465 173 q 591 212 547 173 q 637 334 634 250 l 637 334 z "},"D":{"ha":898,"x_min":75,"x_max":850,"o":"m 399 0 l 75 0 l 75 987 l 393 987 q 628 928 524 987 q 791 761 732 869 q 850 518 850 652 l 850 518 l 850 473 q 793 230 850 337 q 632 61 736 122 q 399 0 528 1 l 399 0 z m 393 804 l 313 804 l 313 183 l 395 183 q 553 256 498 183 q 608 473 608 329 l 608 473 l 608 515 q 553 731 608 659 q 393 804 498 804 l 393 804 z "},"E":{"ha":777,"x_min":75,"x_max":756,"o":"m 687 595 l 687 418 l 313 418 l 313 183 l 755 183 l 755 0 l 75 0 l 75 987 l 756 987 l 756 804 l 313 804 l 313 595 l 687 595 z "},"F":{"ha":760,"x_min":75,"x_max":735,"o":"m 696 576 l 696 393 l 313 393 l 313 0 l 75 0 l 75 987 l 735 987 l 735 804 l 313 804 l 313 576 l 696 576 z "},"G":{"ha":947,"x_min":56,"x_max":883,"o":"m 883 528 l 883 122 q 722 24 828 61 q 490 -14 616 -14 l 490 -14 q 180 105 296 -14 q 56 435 64 224 l 56 435 l 56 521 q 107 775 56 667 q 255 943 159 884 q 477 1002 351 1002 l 477 1002 q 763 917 661 1002 q 882 665 865 833 l 882 665 l 653 665 q 600 783 641 748 q 485 819 559 819 l 485 819 q 347 743 395 819 q 297 526 298 667 l 297 526 l 297 466 q 348 244 297 318 q 507 170 398 170 l 507 170 q 645 211 600 170 l 645 211 l 645 364 l 479 364 l 479 528 l 883 528 z "},"H":{"ha":976,"x_min":75,"x_max":900,"o":"m 900 987 l 900 0 l 663 0 l 663 412 l 313 412 l 313 0 l 75 0 l 75 987 l 313 987 l 313 595 l 663 595 l 663 987 l 900 987 z "},"I":{"ha":419,"x_min":91,"x_max":328,"o":"m 328 987 l 328 0 l 91 0 l 91 987 l 328 987 z "},"J":{"ha":781,"x_min":24,"x_max":705,"o":"m 468 310 l 468 987 l 705 987 l 705 310 q 662 142 705 216 q 539 27 618 68 q 365 -14 461 -14 l 365 -14 q 114 68 203 -14 q 24 298 24 149 l 24 298 l 263 298 q 287 200 263 231 q 365 170 310 170 l 365 170 q 441 207 414 170 q 468 310 468 243 l 468 310 z "},"K":{"ha":888,"x_min":75,"x_max":903,"o":"m 621 0 l 410 368 l 313 260 l 313 0 l 75 0 l 75 987 l 313 987 l 313 552 l 395 677 l 608 987 l 903 987 l 569 551 l 903 0 l 621 0 z "},"L":{"ha":753,"x_min":75,"x_max":727,"o":"m 313 987 l 313 183 l 727 183 l 727 0 l 75 0 l 75 987 l 313 987 z "},"M":{"ha":1217,"x_min":75,"x_max":1141,"o":"m 75 987 l 387 987 l 608 300 l 827 987 l 1141 987 l 1141 0 l 902 0 l 902 231 l 925 703 l 686 0 l 529 0 l 290 703 l 313 231 l 313 0 l 75 0 l 75 987 z "},"N":{"ha":975,"x_min":75,"x_max":899,"o":"m 899 987 l 899 0 l 663 0 l 313 614 l 313 0 l 75 0 l 75 987 l 313 987 l 662 373 l 662 987 l 899 987 z "},"O":{"ha":959,"x_min":47,"x_max":911,"o":"m 911 519 l 911 473 q 857 218 911 329 q 705 46 804 106 q 480 -14 606 -14 q 256 44 354 -14 q 104 210 159 102 q 47 458 50 318 l 47 458 l 47 513 q 100 769 47 659 q 253 941 153 880 q 479 1001 352 1001 l 479 1001 q 703 941 604 1001 q 856 771 801 882 q 911 519 910 661 l 911 519 z m 669 469 l 669 515 q 620 738 669 662 q 479 814 570 814 l 479 814 q 290 546 300 814 l 290 546 l 289 473 q 337 250 289 328 q 480 172 385 172 l 480 172 q 619 249 570 172 q 669 469 668 326 l 669 469 z "},"P":{"ha":904,"x_min":75,"x_max":852,"o":"m 465 335 l 313 335 l 313 0 l 75 0 l 75 987 l 469 987 q 669 946 582 987 q 804 827 756 904 q 852 652 852 750 l 852 652 q 748 421 852 508 q 465 335 645 335 l 465 335 z m 313 804 l 313 519 l 469 519 q 574 553 538 519 q 610 651 610 588 l 610 651 q 573 762 610 720 q 471 804 536 803 l 471 804 l 313 804 z "},"Q":{"ha":959,"x_min":49,"x_max":912,"o":"m 912 519 l 912 473 q 867 234 912 336 q 741 71 821 132 l 741 71 l 901 -56 l 753 -180 l 541 -9 q 481 -14 511 -14 l 481 -14 q 258 45 355 -14 q 105 212 160 103 q 49 461 51 320 l 49 461 l 49 513 q 102 770 49 659 q 254 941 155 880 q 480 1001 353 1001 l 480 1001 q 704 941 606 1001 q 857 771 802 882 q 912 519 911 661 l 912 519 z m 670 469 l 670 515 q 621 738 670 662 q 480 814 572 814 l 480 814 q 338 739 386 814 q 290 519 291 664 l 290 519 l 290 473 q 338 250 290 328 q 481 172 387 172 l 481 172 q 621 249 572 172 q 670 469 669 326 l 670 469 z "},"R":{"ha":906,"x_min":75,"x_max":871,"o":"m 616 0 l 441 349 l 313 349 l 313 0 l 75 0 l 75 987 l 463 987 q 738 909 639 987 q 837 689 837 831 l 837 689 q 795 518 837 586 q 665 408 753 450 l 665 408 l 871 10 l 871 0 l 616 0 z m 313 804 l 313 532 l 463 532 q 565 568 531 532 q 600 667 600 604 q 565 767 600 731 q 463 804 530 804 l 463 804 l 313 804 z "},"S":{"ha":869,"x_min":43,"x_max":822,"o":"m 584 262 l 584 262 q 547 344 584 315 q 417 404 510 373 q 265 465 324 435 l 265 465 q 73 724 73 559 l 73 724 q 121 868 73 806 q 256 966 169 931 q 453 1001 344 1001 l 453 1001 q 644 963 559 1001 q 775 855 728 925 q 822 694 822 785 l 822 694 l 585 694 q 548 788 585 755 q 448 821 511 821 l 448 821 q 347 793 384 821 q 310 722 310 765 l 310 722 q 351 653 310 684 q 494 589 391 622 q 662 518 596 556 l 662 518 q 822 264 822 426 l 822 264 q 724 60 822 134 q 456 -14 627 -14 l 456 -14 q 239 30 336 -14 q 93 148 142 73 q 43 320 43 222 l 43 320 l 282 320 q 323 203 282 241 q 456 165 364 165 l 456 165 q 550 191 515 165 q 584 262 584 216 z "},"T":{"ha":876,"x_min":24,"x_max":850,"o":"m 850 987 l 850 804 l 553 804 l 553 0 l 315 0 l 315 804 l 24 804 l 24 987 l 850 987 z "},"U":{"ha":923,"x_min":71,"x_max":849,"o":"m 611 987 l 849 987 l 849 341 q 802 151 849 231 q 668 28 755 71 q 461 -14 581 -14 l 461 -14 q 177 80 281 -14 q 71 336 73 174 l 71 336 l 71 987 l 311 987 l 311 332 q 461 170 315 170 l 461 170 q 573 210 535 170 q 611 342 611 251 l 611 342 l 611 987 z "},"V":{"ha":918,"x_min":-2,"x_max":920,"o":"m 262 987 l 458 269 l 654 987 l 920 987 l 588 0 l 328 0 l -2 987 l 262 987 z "},"W":{"ha":1207,"x_min":14,"x_max":1189,"o":"m 702 987 l 840 368 l 953 987 l 1189 987 l 979 0 l 732 0 l 600 563 l 471 0 l 224 0 l 14 987 l 251 987 l 364 368 l 500 987 l 702 987 z "},"X":{"ha":886,"x_min":3,"x_max":884,"o":"m 281 987 l 443 659 l 604 987 l 876 987 l 600 498 l 884 0 l 609 0 l 443 334 l 277 0 l 3 0 l 286 498 l 10 987 l 281 987 z "},"Y":{"ha":872,"x_min":-2,"x_max":875,"o":"m 254 987 l 436 559 l 618 987 l 875 987 l 557 355 l 557 0 l 315 0 l 315 355 l -2 987 l 254 987 z "},"Z":{"ha":847,"x_min":42,"x_max":814,"o":"m 809 865 l 342 183 l 814 183 l 814 0 l 45 0 l 45 125 l 515 804 l 42 804 l 42 987 l 809 987 l 809 865 z "},"[":{"ha":391,"x_min":73,"x_max":382,"o":"m 382 1157 l 382 990 l 302 990 l 302 -71 l 382 -71 l 382 -237 l 73 -237 l 73 1157 l 382 1157 z "},"\\\\":{"ha":592,"x_min":-14,"x_max":637,"o":"m 397 -85 l -14 987 l 224 987 l 637 -85 l 397 -85 z "},"]":{"ha":391,"x_min":9,"x_max":319,"o":"m 9 990 l 9 1157 l 319 1157 l 319 -237 l 9 -237 l 9 -71 l 90 -71 l 90 990 l 9 990 z "},"^":{"ha":621,"x_min":24,"x_max":600,"o":"m 427 494 l 312 802 l 196 494 l 24 494 l 227 987 l 396 987 l 600 494 l 427 494 z "},"_":{"ha":613,"x_min":0,"x_max":612,"o":"m 612 0 l 612 -170 l 0 -170 l 0 0 l 612 0 z "},"`":{"ha":471,"x_min":37,"x_max":414,"o":"m 278 1042 l 414 829 l 228 829 l 37 1042 l 278 1042 z "},"a":{"ha":737,"x_min":31,"x_max":706,"o":"m 706 0 l 477 0 q 456 66 465 22 l 456 66 q 279 -14 393 -14 l 279 -14 q 103 49 176 -14 q 31 207 31 112 l 31 207 q 119 387 31 326 q 375 448 207 448 l 375 448 l 446 448 l 446 487 q 358 588 446 588 l 358 588 q 277 508 277 588 l 277 508 l 48 508 q 139 681 48 614 q 370 747 229 747 q 591 679 510 747 q 675 491 673 610 l 675 491 l 675 166 q 706 12 676 65 l 706 12 l 706 0 z m 334 149 l 334 149 q 405 168 377 149 q 446 209 433 186 l 446 209 l 446 326 l 379 326 q 260 219 260 326 l 260 219 q 281 169 260 188 q 334 149 302 149 z "},"b":{"ha":782,"x_min":66,"x_max":745,"o":"m 745 372 l 745 361 q 671 83 745 180 q 460 -14 596 -14 l 460 -14 q 280 75 349 -14 l 280 75 l 271 0 l 66 0 l 66 1042 l 294 1042 l 294 675 q 459 747 358 747 l 459 747 q 671 649 596 747 q 745 372 745 551 l 745 372 z m 516 375 l 516 375 q 488 526 516 481 q 401 571 460 571 l 401 571 q 294 512 324 571 l 294 512 l 294 220 q 403 162 323 162 l 403 162 q 505 241 484 162 l 505 241 q 516 375 516 279 z "},"c":{"ha":722,"x_min":35,"x_max":689,"o":"m 374 163 l 374 163 q 449 189 422 163 q 475 262 475 215 l 475 262 l 689 262 q 603 64 689 141 q 380 -14 516 -14 l 380 -14 q 127 87 220 -14 q 35 365 35 187 l 35 365 l 35 374 q 76 571 35 486 q 195 702 117 656 q 378 747 272 747 l 378 747 q 605 668 521 747 q 689 453 689 589 l 689 453 l 475 453 q 447 541 475 510 q 372 571 419 571 l 372 571 q 269 458 283 571 l 269 458 q 264 359 264 422 l 264 359 q 290 205 264 248 q 374 163 317 163 z "},"d":{"ha":781,"x_min":35,"x_max":715,"o":"m 35 372 l 35 372 q 111 647 35 547 q 321 747 186 747 l 321 747 q 486 670 419 747 l 486 670 l 486 1042 l 715 1042 l 715 0 l 510 0 l 498 79 q 319 -14 428 -14 l 319 -14 q 112 87 189 -14 q 35 372 35 187 z m 264 400 l 264 358 q 378 163 264 163 l 378 163 q 486 227 454 163 l 486 227 l 486 506 q 379 571 455 571 l 379 571 q 264 400 273 571 l 264 400 z "},"e":{"ha":756,"x_min":41,"x_max":728,"o":"m 419 -14 l 419 -14 q 146 87 250 -14 q 41 349 41 188 l 41 349 l 41 368 q 83 567 41 481 q 205 700 125 653 q 395 747 285 747 l 395 747 q 639 651 549 747 q 728 384 728 555 l 728 384 l 728 295 l 274 295 q 328 198 286 233 q 435 163 369 163 l 435 163 q 604 239 543 163 l 604 239 l 709 115 q 588 21 666 56 q 419 -14 509 -14 z m 393 571 l 393 571 q 274 438 293 571 l 274 438 l 505 438 l 505 456 q 477 541 506 511 q 393 571 448 571 z "},"f":{"ha":503,"x_min":8,"x_max":504,"o":"m 344 0 l 115 0 l 115 575 l 8 575 l 8 734 l 115 734 l 115 792 q 189 987 115 918 q 396 1056 262 1056 l 396 1056 q 503 1042 445 1056 l 503 1042 l 504 873 q 448 880 483 880 l 448 880 q 344 790 344 880 l 344 790 l 344 734 l 487 734 l 487 575 l 344 575 l 344 0 z "},"g":{"ha":799,"x_min":37,"x_max":733,"o":"m 37 364 l 37 372 q 74 569 37 484 q 179 701 111 654 q 338 747 248 747 l 338 747 q 517 670 453 747 l 517 670 l 526 734 l 733 734 l 733 28 q 688 -141 733 -69 q 557 -251 643 -212 q 359 -289 472 -289 l 359 -289 q 203 -258 279 -289 q 87 -179 127 -228 l 87 -179 l 183 -45 q 351 -120 247 -120 l 351 -120 q 503 36 503 -120 l 503 36 l 503 59 q 337 -14 437 -14 l 337 -14 q 120 89 203 -14 q 37 364 37 192 l 37 364 z m 267 358 l 267 358 q 300 215 267 268 q 395 163 334 163 l 395 163 q 503 212 469 163 l 503 212 l 503 521 q 397 571 470 571 l 397 571 q 301 516 336 571 q 267 358 267 462 z "},"h":{"ha":784,"x_min":59,"x_max":721,"o":"m 288 1042 l 288 655 q 475 747 361 747 l 475 747 q 658 675 596 747 q 721 463 720 604 l 721 463 l 721 0 l 492 0 l 492 458 q 468 544 492 516 q 387 571 444 571 l 387 571 q 288 526 317 571 l 288 526 l 288 0 l 59 0 l 59 1042 l 288 1042 z "},"i":{"ha":382,"x_min":62,"x_max":316,"o":"m 305 734 l 305 0 l 76 0 l 76 734 l 305 734 z m 62 923 l 62 923 q 98 1003 62 972 q 189 1034 133 1034 q 281 1003 245 1034 q 316 923 316 972 q 281 843 316 874 q 189 812 245 812 q 98 843 133 812 q 62 923 62 874 z "},"j":{"ha":375,"x_min":-79,"x_max":317,"o":"m 81 734 l 310 734 l 310 -25 q 235 -226 309 -155 q 29 -296 161 -296 l 29 -296 q -79 -285 -28 -296 l -79 -285 l -79 -112 q -14 -118 -39 -118 l -14 -118 q 81 -24 81 -118 l 81 -24 l 81 734 z m 64 923 l 64 923 q 99 1003 64 972 q 191 1034 134 1034 q 282 1003 247 1034 q 317 923 317 972 q 282 843 317 874 q 191 812 247 812 q 99 843 134 812 q 64 923 64 874 z "},"k":{"ha":760,"x_min":66,"x_max":781,"o":"m 519 0 l 359 273 l 294 209 l 294 0 l 66 0 l 66 1042 l 294 1042 l 294 489 l 317 519 l 490 734 l 764 734 l 507 432 l 781 0 l 519 0 z "},"l":{"ha":382,"x_min":76,"x_max":305,"o":"m 305 1042 l 305 0 l 76 0 l 76 1042 l 305 1042 z "},"m":{"ha":1196,"x_min":66,"x_max":1130,"o":"m 66 734 l 280 734 l 288 648 q 497 747 366 747 l 497 747 q 685 637 636 747 l 685 637 q 901 747 760 747 l 901 747 q 1130 477 1124 747 l 1130 477 l 1130 0 l 901 0 l 901 463 q 882 545 901 519 q 812 571 863 571 l 812 571 q 711 511 745 571 l 711 511 l 712 501 l 712 0 l 483 0 l 483 462 q 465 545 483 519 q 395 571 446 571 l 395 571 q 294 511 329 571 l 294 511 l 294 0 l 66 0 l 66 734 z "},"n":{"ha":783,"x_min":60,"x_max":721,"o":"m 60 734 l 274 734 l 281 648 q 491 747 357 747 l 491 747 q 662 679 606 747 q 721 473 719 610 l 721 473 l 721 0 l 492 0 l 492 463 q 469 545 492 519 q 388 571 447 571 l 388 571 q 288 518 321 571 l 288 518 l 288 0 l 60 0 l 60 734 z "},"o":{"ha":780,"x_min":35,"x_max":743,"o":"m 36 335 l 35 374 q 78 569 35 484 q 201 701 121 655 q 389 747 281 747 l 389 747 q 648 645 553 747 q 743 368 743 543 l 743 368 l 743 359 q 648 87 743 188 q 390 -14 553 -14 l 390 -14 q 138 80 233 -14 q 36 335 43 174 l 36 335 z m 264 401 l 264 359 q 296 210 264 258 q 390 163 328 163 l 390 163 q 515 351 512 163 l 515 351 l 515 374 q 389 571 515 571 l 389 571 q 264 401 274 571 l 264 401 z "},"p":{"ha":782,"x_min":66,"x_max":745,"o":"m 745 372 l 745 361 q 668 89 745 191 q 460 -14 591 -14 l 460 -14 q 294 60 359 -14 l 294 60 l 294 -282 l 66 -282 l 66 734 l 279 734 l 286 666 q 459 747 352 747 l 459 747 q 670 647 595 747 q 745 372 745 547 l 745 372 z m 517 351 l 517 376 q 403 571 517 571 l 403 571 q 294 513 321 571 l 294 513 l 294 224 q 404 163 324 163 l 404 163 q 517 351 513 163 l 517 351 z "},"q":{"ha":781,"x_min":35,"x_max":715,"o":"m 35 374 l 35 374 q 111 648 35 549 q 321 747 187 747 l 321 747 q 501 655 433 747 l 501 655 l 517 734 l 715 734 l 715 -282 l 486 -282 l 486 61 q 319 -14 420 -14 l 319 -14 q 112 87 189 -14 q 35 374 35 188 z m 264 401 l 264 360 q 378 163 264 163 l 378 163 q 486 222 456 163 l 486 222 l 486 513 q 379 571 458 571 l 379 571 q 264 401 273 571 l 264 401 z "},"r":{"ha":526,"x_min":66,"x_max":512,"o":"m 512 739 l 508 527 l 433 532 q 294 465 325 532 l 294 465 l 294 0 l 66 0 l 66 734 l 280 734 l 288 640 q 448 747 345 747 l 448 747 q 512 739 485 747 l 512 739 z "},"s":{"ha":711,"x_min":24,"x_max":670,"o":"m 448 206 l 448 206 q 418 253 448 235 q 302 290 387 271 q 161 339 216 309 q 76 414 105 370 q 47 515 47 458 l 47 515 q 130 682 47 616 q 349 747 214 747 l 349 747 q 582 682 494 747 q 670 509 670 616 l 670 509 l 441 509 q 348 597 441 597 l 348 597 q 288 577 312 597 q 263 527 263 557 l 263 527 q 293 477 263 496 q 388 446 323 458 q 503 417 454 434 l 503 417 q 669 213 669 360 l 669 213 q 579 50 669 113 q 349 -14 490 -14 l 349 -14 q 180 20 254 -14 q 65 113 106 54 q 24 235 24 171 l 24 235 l 237 235 q 271 161 239 184 q 355 138 304 138 l 355 138 q 425 157 401 138 q 448 206 448 176 z "},"t":{"ha":477,"x_min":8,"x_max":461,"o":"m 102 916 l 330 916 l 330 734 l 451 734 l 451 575 l 330 575 l 330 239 q 345 182 330 198 q 404 165 360 165 l 404 165 q 461 170 438 165 l 461 170 l 461 6 q 332 -14 399 -14 l 332 -14 q 158 42 214 -14 q 102 211 102 98 l 102 211 l 102 575 l 8 575 l 8 734 l 102 734 l 102 916 z "},"u":{"ha":783,"x_min":60,"x_max":722,"o":"m 508 0 l 501 79 q 305 -14 429 -14 l 305 -14 q 122 57 184 -14 q 60 258 60 127 l 60 258 l 60 734 l 289 734 l 289 257 q 380 163 289 163 l 380 163 q 492 219 459 163 l 492 219 l 492 734 l 722 734 l 722 0 l 508 0 z "},"v":{"ha":718,"x_min":1,"x_max":713,"o":"m 243 734 l 357 272 l 473 734 l 713 734 l 474 0 l 241 0 l 1 734 l 243 734 z "},"w":{"ha":1008,"x_min":15,"x_max":991,"o":"m 583 734 l 698 301 l 772 734 l 991 734 l 818 0 l 625 0 l 503 435 l 381 0 l 188 0 l 15 734 l 234 734 l 307 291 l 423 734 l 583 734 z "},"x":{"ha":715,"x_min":7,"x_max":715,"o":"m 258 734 l 361 532 l 468 734 l 705 734 l 512 376 l 715 0 l 476 0 l 361 217 l 248 0 l 7 0 l 211 376 l 18 734 l 258 734 z "},"y":{"ha":720,"x_min":-3,"x_max":724,"o":"m 241 734 l 357 320 l 479 734 l 724 734 l 425 -123 l 412 -154 q 187 -296 349 -296 l 187 -296 q 93 -283 142 -296 l 93 -283 l 93 -119 l 123 -119 q 196 -105 171 -119 q 234 -56 222 -92 l 234 -56 l 252 -7 l -3 734 l 241 734 z "},"z":{"ha":715,"x_min":45,"x_max":668,"o":"m 661 610 l 334 176 l 668 176 l 668 0 l 45 0 l 45 127 l 370 557 l 59 557 l 59 734 l 661 734 l 661 610 z "},"{":{"ha":451,"x_min":27,"x_max":424,"o":"m 424 -124 l 381 -244 q 137 71 137 -176 l 137 71 l 137 205 q 27 342 137 342 l 27 342 l 27 496 q 137 634 137 496 l 137 634 l 137 777 q 200 974 139 899 q 381 1083 262 1049 l 381 1083 l 424 964 q 335 781 338 931 l 335 781 l 335 634 q 210 420 335 482 l 210 420 q 335 205 335 357 l 335 205 l 335 58 q 424 -124 338 -92 l 424 -124 z "},"|":{"ha":355,"x_min":117,"x_max":241,"o":"m 241 987 l 241 -183 l 117 -183 l 117 987 l 241 987 z "},"}":{"ha":451,"x_min":28,"x_max":425,"o":"m 71 -244 l 28 -124 q 117 58 113 -92 l 117 58 l 117 205 q 243 420 117 358 l 243 420 q 117 634 117 481 l 117 634 l 117 781 q 28 964 113 931 l 28 964 l 71 1083 q 253 972 192 1049 q 315 770 314 895 l 315 770 l 315 634 q 425 496 315 496 l 425 496 l 425 342 q 315 206 315 342 l 315 206 l 315 62 q 71 -244 310 -177 l 71 -244 z "},"~":{"ha":878,"x_min":64,"x_max":812,"o":"m 648 543 l 812 542 q 750 329 812 409 q 585 249 688 249 l 585 249 q 493 269 534 249 q 400 339 452 288 q 304 391 349 391 l 304 391 q 248 357 271 391 q 225 275 225 324 l 225 275 l 64 277 q 124 489 64 410 q 289 567 185 567 l 289 567 q 383 547 340 567 q 476 476 426 527 q 570 426 527 426 l 570 426 q 626 459 604 426 q 648 543 648 493 l 648 543 z "},"¡":{"ha":417,"x_min":83,"x_max":337,"o":"m 87 -252 l 116 422 l 301 422 l 330 -252 l 87 -252 z m 337 633 l 337 633 q 301 550 337 583 q 210 518 264 518 q 120 550 156 518 q 83 633 83 583 q 120 715 83 683 q 210 747 156 747 q 301 715 264 747 q 337 633 337 683 z "},"¢":{"ha":820,"x_min":66,"x_max":720,"o":"m 406 163 l 406 163 q 480 189 454 163 q 506 262 507 215 l 506 262 l 720 262 q 654 84 720 156 q 481 -7 589 12 l 481 -7 l 481 -166 l 346 -166 l 346 -9 q 141 107 215 10 q 66 362 66 205 l 66 362 l 66 374 q 140 625 66 526 q 346 743 214 724 l 346 743 l 346 894 l 481 894 l 481 741 q 657 645 593 722 q 720 453 720 569 l 720 453 l 506 453 q 478 541 506 510 q 404 571 450 571 l 404 571 q 300 458 315 571 l 300 458 q 295 359 295 422 l 295 359 q 321 205 295 248 q 406 163 348 163 z "},"£":{"ha":833,"x_min":70,"x_max":800,"o":"m 622 380 l 421 380 l 425 304 q 385 183 425 227 l 385 183 l 797 183 l 797 0 l 72 0 l 72 183 l 142 183 q 182 253 180 193 l 182 253 l 183 289 l 180 380 l 70 380 l 70 557 l 174 557 l 170 705 q 253 922 170 844 q 478 1000 336 1000 l 478 1000 q 715 922 630 1000 q 800 711 800 844 l 800 711 l 576 711 q 484 817 576 817 l 484 817 q 429 790 450 817 q 408 705 408 762 l 408 705 l 414 557 l 622 557 l 622 380 z "},"¤":{"ha":947,"x_min":47,"x_max":905,"o":"m 809 -18 l 720 73 q 475 -14 612 -14 l 475 -14 q 230 72 337 -14 l 230 72 l 142 -18 l 47 80 l 138 173 q 71 412 71 279 l 71 412 q 144 660 71 551 l 144 660 l 47 760 l 142 857 l 239 759 q 475 837 344 837 l 475 837 q 711 758 606 837 l 711 758 l 809 858 l 905 760 l 805 657 q 878 412 878 549 l 878 412 q 811 176 878 281 l 811 176 l 905 80 l 809 -18 z m 197 412 l 197 412 q 233 264 197 332 q 334 157 270 196 q 475 117 399 117 l 475 117 q 614 157 550 117 q 715 264 679 196 q 752 412 752 332 l 752 412 q 715 561 752 493 q 614 668 678 629 q 475 707 550 707 l 475 707 q 335 668 399 707 q 234 561 271 629 q 197 412 197 493 z "},"¥":{"ha":751,"x_min":6,"x_max":745,"o":"m 249 987 l 376 635 l 503 987 l 745 987 l 537 503 l 676 503 l 676 374 l 492 374 l 492 307 l 676 307 l 676 178 l 492 178 l 492 0 l 254 0 l 254 178 l 49 178 l 49 307 l 254 307 l 254 374 l 49 374 l 49 503 l 214 503 l 6 987 l 249 987 z "},"¦":{"ha":355,"x_min":81,"x_max":279,"o":"m 279 -183 l 81 -183 l 81 356 l 279 356 l 279 -183 z m 279 987 l 279 473 l 81 473 l 81 987 l 279 987 z "},"§":{"ha":882,"x_min":64,"x_max":811,"o":"m 811 339 l 811 339 q 706 157 811 219 l 706 157 q 800 -41 800 87 l 800 -41 q 704 -229 800 -161 q 439 -296 608 -296 l 439 -296 q 161 -224 258 -296 q 64 -17 64 -151 l 64 -17 l 293 -17 q 327 -94 293 -68 q 439 -119 361 -119 l 439 -119 q 570 -42 570 -119 l 570 -42 q 531 22 570 -3 q 371 80 492 46 q 188 151 250 114 q 95 238 126 188 q 64 358 64 289 l 64 358 q 170 541 64 477 l 170 541 q 75 739 75 613 l 75 739 q 173 929 75 857 q 437 1001 271 1001 l 437 1001 q 702 925 606 1001 q 798 713 798 849 l 798 713 l 569 713 q 534 794 569 764 q 437 825 499 825 l 437 825 q 338 802 372 825 q 304 741 304 780 l 304 741 q 342 673 304 696 q 479 624 380 650 q 637 574 578 599 q 733 515 695 549 q 791 439 772 482 q 811 339 811 396 z m 405 442 l 405 442 q 326 467 363 453 l 326 467 q 292 385 292 439 l 292 385 q 322 315 292 339 q 468 255 353 291 l 468 255 l 548 232 q 586 313 586 262 l 586 313 q 549 382 586 355 q 405 442 511 409 z "},"¨":{"ha":687,"x_min":64,"x_max":621,"o":"m 64 926 l 64 926 q 94 989 64 963 q 167 1016 123 1016 q 240 989 210 1016 q 269 926 269 963 q 240 862 269 888 q 167 836 210 836 q 94 862 123 836 q 64 926 64 888 z m 416 926 l 416 926 q 446 989 416 963 q 519 1016 475 1016 q 592 989 562 1016 q 621 926 621 963 q 592 862 621 888 q 519 836 562 836 q 446 862 475 836 q 416 926 416 888 z "},"©":{"ha":1090,"x_min":58,"x_max":1021,"o":"m 651 404 l 757 404 q 697 246 757 301 q 530 191 638 191 q 357 263 421 191 q 293 458 293 336 l 293 458 l 293 534 q 358 725 293 652 q 530 797 422 797 l 530 797 q 699 741 640 797 q 758 584 758 685 l 758 584 l 652 584 q 621 677 652 649 q 530 705 589 705 l 530 705 q 433 660 467 705 q 398 537 399 614 l 398 537 l 398 454 q 433 329 398 374 q 530 283 467 283 l 530 283 q 621 310 590 283 q 651 404 651 338 l 651 404 z m 140 494 l 140 494 q 191 286 140 382 q 334 130 241 189 q 539 71 427 71 l 539 71 q 743 130 650 71 q 886 285 836 188 q 937 494 937 382 q 886 704 937 607 q 743 858 836 800 q 539 916 650 916 l 539 916 q 339 861 431 916 q 193 707 246 805 q 140 494 140 610 z m 58 494 l 58 494 q 121 749 58 631 q 297 933 184 866 q 539 1001 409 1001 q 782 933 669 1001 q 957 749 894 866 q 1021 494 1021 631 l 1021 494 q 956 238 1021 356 q 780 54 892 121 q 539 -14 669 -14 l 539 -14 q 297 54 408 -14 q 121 239 185 122 q 58 494 58 357 z "},"ª":{"ha":613,"x_min":90,"x_max":527,"o":"m 527 478 l 407 478 q 395 524 400 496 l 395 524 q 259 469 343 469 l 259 469 q 135 510 179 469 q 90 623 90 552 l 90 623 q 147 739 90 698 q 321 780 204 780 l 321 780 l 391 780 l 391 814 q 312 901 391 901 l 312 901 q 243 883 268 901 q 218 833 218 866 l 218 833 l 101 843 q 160 957 101 913 q 312 1001 220 1001 l 312 1001 q 456 952 404 1001 q 509 813 509 903 l 509 813 l 509 599 q 527 478 509 533 l 527 478 z m 288 566 l 288 566 q 344 579 315 566 q 391 608 372 591 l 391 608 l 391 701 l 319 701 q 238 680 267 700 q 209 626 209 659 l 209 626 q 288 566 209 566 z "},"«":{"ha":715,"x_min":44,"x_max":648,"o":"m 368 621 l 211 349 l 368 79 l 229 79 l 44 343 l 44 356 l 229 621 l 368 621 z m 648 621 l 491 349 l 648 79 l 509 79 l 324 343 l 324 356 l 509 621 l 648 621 z "},"¬":{"ha":762,"x_min":85,"x_max":651,"o":"m 651 546 l 651 254 l 515 254 l 515 430 l 85 430 l 85 546 l 651 546 z "},"®":{"ha":1090,"x_min":58,"x_max":1021,"o":"m 58 494 l 58 494 q 121 749 58 631 q 297 933 184 866 q 539 1001 409 1001 q 782 933 669 1001 q 957 749 894 866 q 1021 494 1021 631 l 1021 494 q 956 238 1021 356 q 780 54 892 121 q 539 -14 669 -14 l 539 -14 q 297 54 408 -14 q 121 239 185 122 q 58 494 58 357 z m 140 494 l 140 494 q 191 286 140 382 q 334 130 241 189 q 539 71 427 71 l 539 71 q 743 130 650 71 q 886 285 836 188 q 937 494 937 382 q 886 704 937 607 q 743 858 836 800 q 539 916 650 916 l 539 916 q 339 861 431 916 q 193 707 246 805 q 140 494 140 610 z m 549 443 l 441 443 l 441 214 l 339 214 l 339 791 l 530 791 q 692 743 634 791 q 750 612 750 696 l 750 612 q 677 496 750 537 l 677 496 q 732 437 717 475 q 748 343 748 399 q 750 264 748 287 q 760 225 753 241 l 760 225 l 760 214 l 654 214 q 646 346 646 237 l 646 346 q 623 420 646 397 q 549 443 601 443 l 549 443 z m 441 701 l 441 534 l 528 534 q 614 555 580 534 q 648 612 648 576 l 648 612 q 624 680 648 660 q 537 701 600 700 l 537 701 l 441 701 z "},"¯":{"ha":722,"x_min":123,"x_max":593,"o":"m 593 989 l 593 871 l 123 871 l 123 989 l 593 989 z "},"°":{"ha":551,"x_min":85,"x_max":462,"o":"m 85 810 l 85 810 q 141 945 85 890 q 275 1001 198 1001 l 275 1001 q 407 945 351 1001 q 462 810 462 890 l 462 810 q 407 677 462 732 q 275 623 353 623 l 275 623 q 141 677 197 623 q 85 810 85 732 z m 275 726 l 275 726 q 334 751 311 726 q 357 810 357 775 q 334 871 357 846 q 275 897 311 897 q 215 872 239 897 q 190 810 190 846 q 215 750 190 774 q 275 726 241 726 z "},"±":{"ha":747,"x_min":57,"x_max":678,"o":"m 467 877 l 467 661 l 678 661 l 678 477 l 467 477 l 467 241 l 267 241 l 267 477 l 57 477 l 57 661 l 267 661 l 267 877 l 467 877 z m 664 180 l 664 1 l 68 1 l 68 180 l 664 180 z "},"²":{"ha":521,"x_min":35,"x_max":473,"o":"m 473 571 l 473 452 l 47 452 l 47 552 l 241 724 q 291 782 275 753 q 308 825 308 811 l 308 825 q 250 876 308 876 l 250 876 q 204 856 221 876 q 187 806 187 836 l 187 806 l 35 806 q 93 941 35 886 q 243 996 151 996 l 243 996 q 404 951 347 996 q 460 825 460 907 l 460 825 q 431 731 460 774 q 304 617 402 689 l 304 617 l 249 571 l 473 571 z "},"³":{"ha":521,"x_min":28,"x_max":479,"o":"m 188 677 l 188 774 l 248 774 q 316 829 316 774 l 316 829 q 299 864 316 851 q 251 876 281 876 l 251 876 q 209 867 227 876 q 191 842 191 859 l 191 842 l 39 842 q 96 953 39 911 q 246 996 154 996 l 246 996 q 409 954 351 996 q 468 842 468 912 l 468 842 q 374 727 468 760 l 374 727 q 479 603 479 699 l 479 603 q 415 489 479 532 q 246 445 351 445 l 246 445 q 88 492 148 445 q 28 616 28 538 l 28 616 l 182 616 q 202 580 182 596 q 257 564 222 564 l 257 564 q 310 581 295 564 q 326 619 326 598 l 326 619 q 252 677 326 677 l 252 677 l 188 677 z "},"´":{"ha":469,"x_min":61,"x_max":436,"o":"m 61 829 l 195 1042 l 436 1042 l 248 829 l 61 829 z "},"µ":{"ha":890,"x_min":90,"x_max":781,"o":"m 90 734 l 319 734 l 319 305 q 343 199 319 233 q 429 165 368 165 l 429 165 q 552 227 516 165 l 552 227 l 552 734 l 781 734 l 781 0 l 566 0 l 562 36 q 420 -14 502 -14 l 420 -14 q 319 9 362 -14 l 319 9 l 319 -282 l 90 -282 l 90 734 z "},"¶":{"ha":679,"x_min":56,"x_max":601,"o":"m 601 0 l 446 0 l 446 353 l 391 353 q 145 439 235 353 q 56 670 56 525 l 56 670 q 146 901 56 814 q 392 987 236 987 l 392 987 l 601 987 l 601 0 z "},"·":{"ha":446,"x_min":94,"x_max":346,"o":"m 220 579 l 220 579 q 310 547 275 579 q 346 465 346 514 q 310 382 346 415 q 220 350 275 350 l 220 350 q 130 382 165 350 q 94 465 94 414 q 130 547 94 515 q 220 579 165 579 z "},"¸":{"ha":386,"x_min":58,"x_max":348,"o":"m 79 7 l 253 7 l 246 -35 q 348 -152 348 -54 l 348 -152 q 281 -275 348 -231 q 94 -320 214 -320 l 94 -320 l 90 -194 q 149 -142 149 -194 l 149 -142 q 128 -106 149 -116 q 58 -92 106 -96 l 58 -92 l 79 7 z "},"¹":{"ha":521,"x_min":97,"x_max":368,"o":"m 368 985 l 368 452 l 216 452 l 216 814 l 97 789 l 97 903 l 355 985 l 368 985 z "},"º":{"ha":636,"x_min":79,"x_max":549,"o":"m 79 711 l 79 760 q 144 935 79 869 q 314 1001 209 1001 q 484 935 419 1001 q 549 757 549 869 l 549 757 l 549 708 q 486 534 549 600 q 315 468 422 468 l 315 468 q 144 534 208 468 q 79 711 79 601 l 79 711 z m 198 758 l 198 708 q 230 604 198 642 q 315 567 261 567 l 315 567 q 399 604 368 567 q 431 706 430 640 l 431 706 l 431 760 q 399 863 431 826 q 314 901 368 901 l 314 901 q 230 864 261 901 q 198 758 198 827 l 198 758 z "},"»":{"ha":715,"x_min":52,"x_max":657,"o":"m 52 620 l 193 620 l 377 355 l 377 342 l 193 78 l 52 78 l 210 349 l 52 620 z m 332 620 l 473 620 l 657 355 l 657 342 l 473 78 l 332 78 l 490 349 l 332 620 z "},"¼":{"ha":985,"x_min":77,"x_max":927,"o":"m 347 983 l 347 450 l 196 450 l 196 812 l 77 787 l 77 901 l 334 983 l 347 983 z m 795 851 l 313 79 l 207 133 l 689 905 l 795 851 z m 873 535 l 873 227 l 927 227 l 927 106 l 873 106 l 873 0 l 721 0 l 721 106 l 495 106 l 485 205 l 721 535 l 873 535 z m 710 341 l 627 227 l 721 227 l 721 357 l 710 341 z "},"½":{"ha":1042,"x_min":60,"x_max":997,"o":"m 768 851 l 286 79 l 180 133 l 662 905 l 768 851 z m 331 989 l 331 456 l 180 456 l 180 817 l 60 793 l 60 906 l 318 989 l 331 989 z m 997 119 l 997 0 l 571 0 l 571 100 l 765 271 q 815 330 799 301 q 832 372 832 359 l 832 372 q 774 424 832 424 l 774 424 q 728 404 745 424 q 711 354 711 383 l 711 354 l 559 354 q 617 489 559 434 q 767 543 675 543 l 767 543 q 928 499 871 543 q 984 372 984 455 l 984 372 q 955 279 984 321 q 828 165 926 237 l 828 165 l 773 119 l 997 119 z "},"¾":{"ha":1145,"x_min":58,"x_max":1061,"o":"m 919 851 l 437 79 l 330 133 l 812 905 l 919 851 z m 1008 535 l 1008 227 l 1061 227 l 1061 106 l 1008 106 l 1008 0 l 855 0 l 855 106 l 629 106 l 619 205 l 855 535 l 1008 535 z m 844 341 l 762 227 l 855 227 l 855 357 l 844 341 z m 218 677 l 218 774 l 277 774 q 346 829 346 774 l 346 829 q 329 864 346 851 q 281 876 311 876 l 281 876 q 239 867 257 876 q 220 842 220 859 l 220 842 l 68 842 q 126 953 68 911 q 276 996 184 996 l 276 996 q 439 954 380 996 q 498 842 498 912 l 498 842 q 404 727 498 760 l 404 727 q 509 603 509 699 l 509 603 q 445 489 509 532 q 276 445 381 445 l 276 445 q 118 492 178 445 q 58 616 58 538 l 58 616 l 212 616 q 232 580 212 596 q 287 564 252 564 l 287 564 q 340 581 325 564 q 355 619 355 598 l 355 619 q 281 677 355 677 l 281 677 l 218 677 z "},"¿":{"ha":707,"x_min":50,"x_max":688,"o":"m 283 427 l 477 427 q 456 271 477 326 q 387 175 435 216 l 387 175 l 342 134 q 279 7 279 73 l 279 7 q 301 -63 279 -41 q 360 -85 324 -85 l 360 -85 q 431 -56 406 -85 q 458 26 456 -27 l 458 26 l 688 26 q 601 -186 685 -111 q 366 -261 517 -261 l 366 -261 q 132 -191 214 -261 q 50 7 50 -121 l 50 7 q 75 114 50 64 q 163 222 101 163 l 163 222 l 221 275 q 279 378 273 319 l 279 378 l 283 427 z m 386 519 l 386 519 q 295 551 332 519 q 259 633 259 583 q 295 716 259 684 q 386 748 332 748 l 386 748 q 477 715 441 748 q 513 633 513 682 q 477 552 513 585 q 386 519 441 519 z "},"Æ":{"ha":1306,"x_min":11,"x_max":1255,"o":"m 1255 179 l 1255 0 l 647 0 l 637 223 l 378 223 l 275 0 l 11 0 l 509 987 l 1214 987 l 1214 808 l 842 808 l 850 594 l 1159 594 l 1159 415 l 858 415 l 868 179 l 1255 179 z m 616 736 l 463 406 l 630 406 l 616 736 z "},"×":{"ha":734,"x_min":36,"x_max":695,"o":"m 167 134 l 36 258 l 239 465 l 36 673 l 167 797 l 366 594 l 564 797 l 695 673 l 492 465 l 695 258 l 564 134 l 366 336 l 167 134 z "},"Ø":{"ha":956,"x_min":55,"x_max":918,"o":"m 918 508 l 918 473 q 865 218 918 329 q 712 46 811 106 q 488 -14 614 -14 l 488 -14 q 290 31 378 -14 l 290 31 l 235 -64 l 94 -64 l 190 102 q 55 479 55 237 l 55 479 l 55 513 q 108 770 55 659 q 260 941 161 880 q 486 1001 359 1001 l 486 1001 q 681 958 593 1001 l 681 958 l 722 1029 l 863 1029 l 781 886 q 918 508 918 751 l 918 508 z m 676 469 l 676 515 q 656 670 676 605 l 656 670 l 388 203 q 488 172 429 172 l 488 172 q 627 249 578 172 q 676 469 675 326 l 676 469 z m 296 519 l 296 473 q 315 319 296 383 l 315 319 l 582 785 q 486 814 541 814 l 486 814 q 345 739 392 814 q 296 519 297 664 l 296 519 z "},"Þ":{"ha":859,"x_min":79,"x_max":823,"o":"m 79 987 l 309 987 l 309 812 l 448 812 q 649 773 564 812 q 779 664 734 734 q 823 500 823 593 l 823 500 q 723 274 823 359 q 448 189 622 190 l 448 189 l 309 189 l 309 0 l 79 0 l 79 987 z m 444 636 l 309 636 l 309 365 l 443 365 q 553 400 513 365 q 593 499 593 435 l 593 499 q 553 600 593 564 q 444 636 513 636 l 444 636 z "},"ß":{"ha":902,"x_min":91,"x_max":862,"o":"m 320 742 l 320 0 l 91 0 l 91 745 q 181 977 91 895 q 439 1059 272 1059 l 439 1059 q 656 988 572 1059 q 739 801 739 918 l 739 801 q 707 677 739 728 q 675 566 675 625 l 675 566 q 691 523 675 545 q 765 445 708 500 l 765 445 q 862 250 862 351 l 862 250 q 778 55 862 123 q 538 -14 693 -14 l 538 -14 q 436 -4 488 -14 q 357 21 385 5 l 357 21 l 397 193 q 540 163 454 163 l 540 163 q 607 185 581 163 q 634 248 634 207 l 634 248 q 617 300 634 275 q 546 371 600 324 q 469 461 492 418 q 446 554 446 504 l 446 554 q 478 681 446 624 q 510 791 510 738 l 510 791 q 483 857 510 831 q 414 883 456 883 l 414 883 q 342 848 364 883 q 320 742 320 812 l 320 742 z "},"æ":{"ha":1173,"x_min":41,"x_max":1143,"o":"m 840 -14 l 840 -14 q 582 77 677 -14 l 582 77 q 471 9 537 33 q 328 -14 404 -14 l 328 -14 q 117 48 193 -14 q 41 220 41 111 l 41 220 q 129 385 41 327 q 390 444 217 444 l 390 444 l 486 444 l 486 475 q 463 546 486 520 q 396 571 440 571 l 396 571 q 321 551 347 571 q 296 502 296 531 l 296 502 l 67 515 q 158 682 67 617 q 399 747 249 747 l 399 747 q 615 686 536 747 l 615 686 q 832 747 701 749 l 832 747 q 1059 657 976 747 q 1143 413 1143 567 l 1143 413 l 1143 295 l 709 295 q 760 196 719 229 q 871 163 802 163 l 871 163 q 1022 190 956 163 l 1022 190 l 1064 208 l 1119 68 q 996 10 1074 33 q 840 -14 918 -14 z m 372 144 l 372 144 q 486 186 432 144 l 486 186 l 486 306 l 392 306 q 304 281 339 305 q 270 217 270 256 l 270 217 q 372 144 270 144 z m 832 571 l 832 571 q 747 538 777 571 q 710 438 718 505 l 710 438 l 920 438 l 920 456 q 897 541 920 511 q 832 571 875 571 z "},"ð":{"ha":790,"x_min":43,"x_max":762,"o":"m 671 940 l 585 887 q 762 441 762 711 l 762 441 l 762 402 q 714 186 762 282 q 582 38 666 90 q 394 -14 498 -14 l 394 -14 q 213 30 294 -14 q 88 149 132 73 q 43 317 43 225 l 43 317 q 125 564 43 475 q 351 652 206 652 l 351 652 q 506 610 437 652 l 506 610 q 400 773 473 704 l 400 773 l 279 699 l 227 779 l 319 836 q 153 905 245 880 l 153 905 l 227 1071 q 508 951 387 1038 l 508 951 l 618 1020 l 671 940 z m 397 163 l 397 163 q 496 219 460 163 q 532 378 532 275 l 532 378 l 532 444 q 401 488 488 488 l 401 488 q 303 443 334 488 q 273 317 273 397 l 273 317 q 307 205 273 248 q 397 163 340 163 z "},"÷":{"ha":791,"x_min":40,"x_max":748,"o":"m 748 547 l 748 382 l 40 382 l 40 547 l 748 547 z m 267 736 l 267 736 q 302 816 267 785 q 393 848 336 848 q 485 816 450 848 q 519 736 519 785 q 485 657 519 688 q 393 625 450 625 q 302 657 336 625 q 267 736 267 688 z m 267 188 l 267 188 q 302 268 267 236 q 393 299 336 299 q 485 268 450 299 q 519 188 519 236 q 485 108 519 140 q 393 77 450 77 q 302 108 336 77 q 267 188 267 140 z "},"ø":{"ha":781,"x_min":35,"x_max":743,"o":"m 35 374 l 35 374 q 78 569 35 484 q 201 701 121 655 q 389 747 281 747 l 389 747 q 509 730 452 747 l 509 730 l 555 827 l 675 827 l 606 683 q 743 359 743 583 l 743 359 q 648 87 743 188 q 390 -14 553 -14 l 390 -14 q 274 1 327 -14 l 274 1 l 226 -98 l 106 -98 l 176 47 q 35 374 35 147 z m 264 401 l 264 359 q 276 253 264 294 l 276 253 l 428 565 q 389 571 410 571 l 389 571 q 264 401 274 571 l 264 401 z m 515 351 l 515 374 q 503 473 515 431 l 503 473 l 355 167 q 390 163 370 163 l 390 163 q 515 351 512 163 l 515 351 z "},"þ":{"ha":779,"x_min":64,"x_max":743,"o":"m 743 373 l 743 361 q 667 89 743 191 q 459 -14 591 -14 l 459 -14 q 294 59 357 -14 l 294 59 l 294 -282 l 64 -282 l 64 1042 l 294 1042 l 294 676 q 458 747 357 747 l 458 747 q 667 649 591 747 q 743 373 743 550 l 743 373 z m 515 350 l 515 376 q 401 571 515 571 l 401 571 q 294 514 322 571 l 294 514 l 294 222 q 402 163 323 163 l 402 163 q 515 350 511 163 l 515 350 z "},"đ":{"ha":896,"x_min":35,"x_max":810,"o":"m 810 954 l 810 824 l 715 824 l 715 0 l 510 0 l 498 79 q 319 -14 428 -14 l 319 -14 q 112 87 189 -14 q 35 372 35 187 l 35 372 q 111 647 35 547 q 321 747 186 747 l 321 747 q 486 670 419 747 l 486 670 l 486 824 l 315 824 l 315 954 l 486 954 l 486 1042 l 715 1042 l 715 954 l 810 954 z m 264 400 l 264 358 q 378 163 264 163 l 378 163 q 486 227 454 163 l 486 227 l 486 506 q 379 571 455 571 l 379 571 q 264 400 273 571 l 264 400 z "},"Ħ":{"ha":1012,"x_min":22,"x_max":996,"o":"m 917 987 l 917 843 l 996 843 l 996 719 l 917 719 l 917 0 l 680 0 l 680 412 l 330 412 l 330 0 l 92 0 l 92 719 l 22 719 l 22 843 l 92 843 l 92 987 l 330 987 l 330 843 l 680 843 l 680 987 l 917 987 z m 330 719 l 330 595 l 680 595 l 680 719 l 330 719 z "},"ı":{"ha":396,"x_min":83,"x_max":313,"o":"m 313 734 l 313 0 l 83 0 l 83 734 l 313 734 z "},"ĸ":{"ha":842,"x_min":80,"x_max":821,"o":"m 526 0 l 390 256 l 309 256 l 309 0 l 80 0 l 80 734 l 309 734 l 309 470 l 370 470 l 522 734 l 815 734 l 583 391 l 821 0 l 526 0 z "},"Ł":{"ha":787,"x_min":17,"x_max":762,"o":"m 347 987 l 347 620 l 479 656 l 479 535 l 347 499 l 347 183 l 762 183 l 762 0 l 109 0 l 109 433 l 17 408 l 17 529 l 109 554 l 109 987 l 347 987 z "},"ł":{"ha":449,"x_min":18,"x_max":427,"o":"m 335 1042 l 335 627 l 427 656 l 427 534 l 335 505 l 335 0 l 106 0 l 106 434 l 18 407 l 18 529 l 106 556 l 106 1042 l 335 1042 z "},"Ŋ":{"ha":985,"x_min":77,"x_max":907,"o":"m 669 987 l 907 987 l 907 -3 q 832 -220 907 -144 q 624 -296 758 -296 l 624 -296 q 512 -285 564 -296 l 512 -285 l 522 -105 q 590 -113 554 -113 l 590 -113 q 669 0 669 -113 l 669 0 l 314 615 l 314 0 l 77 0 l 77 987 l 314 987 l 669 373 l 669 987 z "},"ŋ":{"ha":781,"x_min":61,"x_max":722,"o":"m 61 734 l 276 734 l 285 629 q 492 747 363 747 l 492 747 q 662 673 605 747 q 722 452 720 598 l 722 452 l 722 -10 q 649 -222 722 -147 q 444 -296 576 -296 l 444 -296 q 336 -285 385 -296 l 336 -285 l 345 -112 q 413 -120 379 -120 l 413 -120 q 492 -8 492 -120 l 492 -8 l 492 442 q 472 539 492 508 q 405 571 451 571 l 405 571 q 290 521 331 571 l 290 521 l 290 0 l 61 0 l 61 734 z "},"Œ":{"ha":1352,"x_min":62,"x_max":1302,"o":"m 1301 183 l 1301 0 l 685 0 q 490 -14 572 -14 l 490 -14 q 268 37 366 -14 q 116 181 170 88 q 62 390 62 273 l 62 390 l 62 597 q 116 807 62 714 q 267 950 170 900 q 488 1001 365 1001 l 488 1001 q 685 987 572 1001 l 685 987 l 1302 987 l 1302 804 l 859 804 l 859 595 l 1233 595 l 1233 418 l 859 418 l 859 183 l 1301 183 z m 490 163 l 490 163 q 621 171 558 163 l 621 171 l 621 816 q 488 825 551 825 l 488 825 q 344 768 397 825 q 292 598 292 712 l 292 598 l 292 391 q 345 220 292 277 q 490 163 398 163 z "},"œ":{"ha":1251,"x_min":51,"x_max":1196,"o":"m 52 335 l 51 374 q 94 570 51 485 q 217 701 137 655 q 405 747 297 747 l 405 747 q 647 663 553 747 l 647 663 q 878 747 736 749 l 878 747 q 1112 658 1027 747 q 1196 412 1196 569 l 1196 412 l 1196 295 l 772 295 q 824 197 784 232 q 926 163 865 163 l 926 163 q 1076 187 1012 163 l 1076 187 l 1128 208 l 1182 68 q 1056 9 1134 33 q 895 -14 979 -14 l 895 -14 q 651 73 748 -14 l 651 73 q 406 -14 557 -14 l 406 -14 q 154 80 250 -14 q 52 335 59 174 l 52 335 z m 280 401 l 279 359 q 406 163 279 163 l 406 163 q 532 349 528 163 l 532 349 l 532 374 q 405 571 532 571 l 405 571 q 280 401 290 571 l 280 401 z m 878 571 l 878 571 q 771 438 787 571 l 771 438 l 973 438 l 973 456 q 878 571 973 571 z "},"ſ":{"ha":366,"x_min":64,"x_max":467,"o":"m 293 0 l 64 0 l 64 792 q 139 987 64 919 q 354 1056 214 1056 l 354 1056 q 467 1042 399 1056 l 467 1042 l 451 873 q 382 880 418 880 l 382 880 q 293 790 293 880 l 293 790 l 293 0 z "},"Ə":{"ha":970,"x_min":47,"x_max":911,"o":"m 479 -14 l 479 -14 q 160 110 274 -14 q 47 459 47 234 l 47 459 l 47 574 l 673 574 q 601 743 666 686 q 416 800 536 800 l 416 800 q 142 761 271 800 l 142 761 l 109 952 q 249 985 151 969 q 432 1002 347 1002 l 432 1002 q 783 881 655 1002 q 911 545 911 760 l 911 545 l 911 434 q 856 204 911 307 q 701 44 800 102 q 479 -14 601 -14 z m 479 187 l 479 187 q 608 239 558 187 q 671 387 659 290 l 671 387 l 283 387 l 283 366 q 334 235 283 282 q 479 187 384 187 z "},"ƒ":{"ha":514,"x_min":-28,"x_max":517,"o":"m 488 734 l 488 575 l 343 575 l 342 -26 q 273 -225 341 -155 q 80 -296 205 -296 l 80 -296 q -28 -285 20 -296 l -28 -285 l -18 -112 q 41 -120 6 -120 l 41 -120 q 97 -99 81 -120 q 113 -26 113 -78 l 113 -26 l 113 575 l 7 575 l 7 734 l 113 734 l 113 792 q 189 987 113 919 q 404 1056 264 1056 l 404 1056 q 517 1042 450 1056 l 517 1042 l 500 873 q 432 880 469 880 l 432 880 q 343 790 343 880 l 343 790 l 343 734 l 488 734 z "},"Ơ":{"ha":986,"x_min":49,"x_max":1006,"o":"m 913 516 l 913 473 q 859 217 913 328 q 706 46 805 106 q 481 -14 608 -14 q 258 45 355 -14 q 105 212 160 103 q 49 461 51 320 l 49 461 l 49 513 q 102 770 49 659 q 254 941 155 880 q 480 1001 353 1001 l 480 1001 q 658 966 577 1001 q 797 864 739 930 l 797 864 q 851 920 833 877 q 868 1055 868 963 l 868 1055 l 1006 1055 q 861 764 1006 818 l 861 764 q 913 516 912 656 l 913 516 z m 671 469 l 671 515 q 621 738 671 662 q 480 814 572 814 l 480 814 q 292 546 302 814 l 292 546 l 291 473 q 339 250 291 328 q 481 172 387 172 l 481 172 q 621 249 572 172 q 671 469 670 326 l 671 469 z "},"ơ":{"ha":812,"x_min":34,"x_max":815,"o":"m 35 335 l 34 374 q 77 569 34 484 q 199 701 119 655 q 387 747 279 747 l 387 747 q 648 644 554 747 l 648 644 q 690 798 690 684 l 690 798 l 815 798 q 703 562 815 622 l 703 562 q 742 359 742 477 l 742 359 q 647 87 742 188 q 389 -14 551 -14 l 389 -14 q 137 80 231 -14 q 35 335 42 174 l 35 335 z m 263 401 l 262 359 q 294 210 262 258 q 389 163 326 163 l 389 163 q 513 351 511 163 l 513 351 l 513 374 q 387 571 513 571 l 387 571 q 263 401 273 571 l 263 401 z "},"Ư":{"ha":1000,"x_min":71,"x_max":1115,"o":"m 611 987 l 849 987 l 849 830 q 926 852 899 833 q 964 906 953 871 q 976 1042 976 941 l 976 1042 l 1115 1042 q 1051 798 1115 871 q 849 719 987 724 l 849 719 l 849 341 q 802 151 849 231 q 668 28 755 71 q 461 -14 581 -14 l 461 -14 q 177 80 281 -14 q 71 336 73 174 l 71 336 l 71 987 l 311 987 l 311 332 q 461 170 315 170 l 461 170 q 573 210 535 170 q 611 342 611 251 l 611 342 l 611 987 z "},"ư":{"ha":835,"x_min":60,"x_max":915,"o":"m 791 801 l 915 801 q 868 618 915 679 q 722 541 821 557 l 722 541 l 722 0 l 508 0 l 501 79 q 305 -14 429 -14 l 305 -14 q 122 57 184 -14 q 60 258 60 127 l 60 258 l 60 734 l 289 734 l 289 257 q 380 163 289 163 l 380 163 q 492 219 459 163 l 492 219 l 492 734 l 722 734 l 722 644 q 775 693 760 659 q 791 801 791 728 l 791 801 z "},"ȷ":{"ha":410,"x_min":-62,"x_max":323,"o":"m 94 734 l 323 734 l 323 -9 q 250 -222 323 -147 q 45 -296 176 -296 l 45 -296 q -62 -285 -13 -296 l -62 -285 l -52 -112 q 14 -120 -18 -120 l 14 -120 q 94 -7 94 -120 l 94 -7 l 94 734 z "},"ə":{"ha":734,"x_min":45,"x_max":703,"o":"m 347 748 l 347 748 q 603 649 504 748 q 703 385 703 549 l 703 385 l 703 366 q 611 89 703 193 q 363 -13 520 -14 l 363 -13 q 130 76 214 -13 q 45 323 45 165 l 45 323 l 45 439 l 469 439 q 417 536 457 501 q 315 572 377 572 l 315 572 q 165 547 229 572 l 165 547 l 113 526 l 59 666 q 185 725 107 702 q 347 748 262 748 z m 363 163 l 363 163 q 470 296 454 163 l 470 296 l 268 296 l 268 279 q 363 163 268 163 z "},"ˆ":{"ha":701,"x_min":66,"x_max":638,"o":"m 416 1042 l 638 851 l 638 842 l 458 842 l 350 935 l 242 842 l 66 842 l 66 854 l 285 1042 l 416 1042 z "},"˚":{"ha":457,"x_min":80,"x_max":385,"o":"m 80 878 l 80 878 q 124 976 80 936 q 233 1015 169 1015 l 233 1015 q 340 976 296 1015 q 385 878 385 936 l 385 878 q 341 781 385 820 q 233 743 297 743 l 233 743 q 124 781 168 743 q 80 878 80 820 z m 233 807 l 233 807 q 284 827 265 807 q 302 878 302 848 q 284 928 302 907 q 233 949 265 949 l 233 949 q 181 928 199 949 q 162 878 162 907 q 181 827 162 848 q 233 807 199 807 z "},"˜":{"ha":669,"x_min":76,"x_max":600,"o":"m 474 1046 l 600 1039 q 555 908 600 962 q 444 854 510 854 l 444 854 q 344 882 399 854 q 255 911 289 911 l 255 911 q 218 896 233 911 q 203 850 203 881 l 203 850 l 76 857 q 121 987 76 932 q 232 1042 166 1042 l 232 1042 q 321 1017 266 1042 q 390 989 376 992 q 421 985 405 985 l 421 985 q 458 1000 443 985 q 474 1046 474 1015 l 474 1046 z "}," ":{"ha":708,"x_min":null,"x_max":null,"o":""}," ":{"ha":283,"x_min":null,"x_max":null,"o":""},"​":{"ha":0,"x_min":null,"x_max":null,"o":""},"–":{"ha":859,"x_min":100,"x_max":815,"o":"m 815 571 l 815 392 l 100 392 l 100 571 l 815 571 z "},"—":{"ha":1045,"x_min":59,"x_max":1013,"o":"m 1013 571 l 1013 392 l 59 392 l 59 571 l 1013 571 z "},"‘":{"ha":347,"x_min":73,"x_max":298,"o":"m 197 1069 l 197 1069 l 298 1015 q 240 827 242 914 l 240 827 l 240 707 l 73 707 l 73 819 q 110 951 74 880 q 197 1069 146 1022 z "},"’":{"ha":337,"x_min":45,"x_max":269,"o":"m 145 678 l 145 678 l 45 732 q 102 924 101 830 l 102 924 l 102 1042 l 269 1042 l 269 931 q 233 797 269 868 q 145 678 197 725 z "},"‚":{"ha":377,"x_min":56,"x_max":281,"o":"m 157 -210 l 157 -210 l 56 -156 q 106 34 105 -71 l 106 34 l 106 169 l 281 169 l 281 40 q 244 -93 280 -22 q 157 -210 208 -163 z "},"“":{"ha":593,"x_min":78,"x_max":541,"o":"m 202 1069 l 202 1069 l 302 1015 q 245 827 247 914 l 245 827 l 245 707 l 78 707 l 78 819 q 115 951 79 880 q 202 1069 151 1022 z m 440 1069 l 440 1069 l 541 1015 q 483 827 485 914 l 483 827 l 483 707 l 316 707 l 316 819 q 353 951 317 880 q 440 1069 389 1022 z "},"”":{"ha":597,"x_min":54,"x_max":524,"o":"m 155 678 l 155 678 l 54 732 q 112 924 111 830 l 112 924 l 112 1042 l 279 1042 l 279 931 q 242 797 279 868 q 155 678 206 725 z m 400 678 l 400 678 l 300 732 q 357 924 356 830 l 357 924 l 357 1042 l 524 1042 l 524 931 q 488 797 524 868 q 400 678 452 725 z "},"„":{"ha":594,"x_min":56,"x_max":527,"o":"m 164 -224 l 164 -224 l 56 -170 q 106 33 105 -79 l 106 33 l 106 182 l 281 182 l 281 42 q 248 -99 281 -24 q 164 -224 216 -174 z m 402 -224 l 402 -224 l 294 -170 q 351 32 349 -66 l 351 32 l 351 182 l 527 182 l 526 38 q 490 -100 525 -27 q 402 -224 454 -174 z "},"†":{"ha":738,"x_min":34,"x_max":705,"o":"m 705 734 l 705 551 l 482 551 l 482 0 l 254 0 l 254 551 l 34 551 l 34 734 l 254 734 l 254 987 l 482 987 l 482 734 l 705 734 z "},"•":{"ha":513,"x_min":91,"x_max":435,"o":"m 91 489 l 91 517 q 138 635 91 590 q 262 681 186 681 l 262 681 q 387 637 340 681 q 435 521 433 593 l 435 521 l 435 492 q 388 375 435 420 q 263 331 341 331 l 263 331 q 139 375 186 331 q 91 489 92 418 l 91 489 z "},"…":{"ha":1076,"x_min":87,"x_max":1002,"o":"m 213 222 l 213 222 q 303 190 267 222 q 339 107 339 157 q 303 25 339 57 q 213 -7 267 -7 l 213 -7 q 122 25 158 -7 q 87 107 87 58 q 122 189 87 157 q 213 222 158 222 z m 545 222 l 545 222 q 635 190 599 222 q 671 107 671 157 q 635 25 671 57 q 545 -7 599 -7 l 545 -7 q 454 25 490 -7 q 418 107 418 58 q 454 189 418 157 q 545 222 490 222 z m 876 222 l 876 222 q 966 190 930 222 q 1002 107 1002 157 q 966 25 1002 57 q 876 -7 930 -7 l 876 -7 q 785 25 821 -7 q 749 107 749 58 q 785 189 749 157 q 876 222 821 222 z "},"‹":{"ha":441,"x_min":73,"x_max":397,"o":"m 397 621 l 240 349 l 397 79 l 258 79 l 73 343 l 73 356 l 258 621 l 397 621 z "},"›":{"ha":420,"x_min":52,"x_max":376,"o":"m 52 620 l 192 620 l 376 355 l 376 342 l 192 78 l 52 78 l 209 349 l 52 620 z "},"⁄":{"ha":612,"x_min":10,"x_max":599,"o":"m 599 846 l 117 74 l 10 127 l 492 899 l 599 846 z "},"⁴":{"ha":521,"x_min":37,"x_max":479,"o":"m 425 987 l 425 680 l 479 680 l 479 559 l 425 559 l 425 452 l 273 452 l 273 559 l 47 559 l 37 657 l 273 987 l 425 987 z m 262 793 l 179 680 l 273 680 l 273 809 l 262 793 z "},"₤":{"ha":833,"x_min":72,"x_max":800,"o":"m 587 433 l 587 317 l 424 317 l 425 304 q 385 183 425 227 l 385 183 l 797 183 l 797 0 l 72 0 l 72 183 l 142 183 q 182 253 180 193 l 182 253 l 183 289 l 182 317 l 74 317 l 74 433 l 178 433 l 176 502 l 74 502 l 74 616 l 173 616 l 170 705 q 253 922 170 844 q 478 1000 336 1000 l 478 1000 q 715 922 630 1000 q 800 711 800 844 l 800 711 l 576 711 q 484 817 576 817 l 484 817 q 408 705 408 817 l 408 705 l 411 616 l 587 616 l 587 502 l 416 502 l 419 433 l 587 433 z "},"₦":{"ha":1143,"x_min":28,"x_max":1115,"o":"m 983 987 l 983 680 l 1115 680 l 1115 572 l 983 572 l 983 456 l 1115 456 l 1115 348 l 983 348 l 983 0 l 746 0 l 548 348 l 397 348 l 397 0 l 159 0 l 159 348 l 28 348 l 28 456 l 159 456 l 159 572 l 28 572 l 28 680 l 159 680 l 159 987 l 397 987 l 571 680 l 746 680 l 746 987 l 983 987 z m 633 572 l 699 456 l 746 456 l 746 572 l 633 572 z m 397 572 l 397 456 l 486 456 l 421 572 l 397 572 z "},"₧":{"ha":1223,"x_min":88,"x_max":1158,"o":"m 1147 734 l 1147 575 l 1026 575 l 1026 239 q 1042 181 1026 197 q 1101 165 1057 165 l 1101 165 q 1158 170 1135 165 l 1158 170 l 1158 6 q 1029 -14 1096 -14 l 1029 -14 q 854 42 911 -14 q 798 211 798 98 l 798 211 l 798 575 l 743 575 q 616 402 713 465 q 372 338 519 338 l 372 338 l 332 338 l 332 0 l 88 0 l 88 987 l 373 987 q 626 920 526 987 q 749 734 726 852 l 749 734 l 798 734 l 798 916 l 1026 916 l 1026 734 l 1147 734 z m 332 794 l 332 532 l 373 532 q 474 570 438 532 q 511 669 511 609 l 511 669 q 475 758 511 723 q 377 794 440 793 l 377 794 l 332 794 z "},"₨":{"ha":1526,"x_min":75,"x_max":1484,"o":"m 616 0 l 441 349 l 313 349 l 313 0 l 75 0 l 75 987 l 463 987 q 738 909 639 987 q 837 689 837 831 l 837 689 q 795 518 837 586 q 665 408 753 450 l 665 408 l 871 10 l 871 0 l 616 0 z m 313 804 l 313 532 l 463 532 q 565 568 531 532 q 600 667 600 604 q 565 767 600 731 q 463 804 530 804 l 463 804 l 313 804 z m 1262 206 l 1262 206 q 1232 253 1262 235 q 1116 290 1201 271 q 975 339 1030 309 q 890 414 919 370 q 861 515 861 458 l 861 515 q 944 682 861 616 q 1162 747 1027 747 l 1162 747 q 1396 682 1308 747 q 1484 509 1484 616 l 1484 509 l 1255 509 q 1162 597 1255 597 l 1162 597 q 1101 577 1126 597 q 1077 527 1077 557 l 1077 527 q 1107 477 1077 496 q 1202 446 1137 458 q 1317 417 1267 434 l 1317 417 q 1482 213 1482 360 l 1482 213 q 1393 50 1482 113 q 1162 -14 1304 -14 l 1162 -14 q 994 20 1068 -14 q 879 113 920 54 q 838 235 838 171 l 838 235 l 1051 235 q 1085 161 1053 184 q 1168 138 1118 138 l 1168 138 q 1239 157 1215 138 q 1262 206 1262 176 z "},"₩":{"ha":1175,"x_min":28,"x_max":1147,"o":"m 684 987 l 705 829 l 814 829 l 835 987 l 1070 987 l 1041 829 l 1147 829 l 1147 721 l 1021 721 l 1007 646 l 1147 646 l 1147 538 l 987 538 l 888 0 l 642 0 l 584 380 l 526 0 l 281 0 l 180 538 l 28 538 l 28 646 l 161 646 l 146 721 l 28 721 l 28 829 l 127 829 l 98 987 l 334 987 l 355 829 l 462 829 l 484 987 l 684 987 z m 721 721 l 731 646 l 791 646 l 800 721 l 721 721 z m 368 721 l 378 646 l 437 646 l 447 721 l 368 721 z m 777 538 l 747 538 l 762 423 l 777 538 z m 422 538 l 392 538 l 406 424 l 422 538 z "},"₪":{"ha":1278,"x_min":66,"x_max":1211,"o":"m 66 734 l 637 734 q 794 707 736 734 q 879 621 852 680 q 906 452 906 562 l 906 452 l 906 251 l 676 251 l 676 463 q 610 555 673 546 l 610 555 l 573 557 l 294 557 l 294 0 l 66 0 l 66 734 z m 741 0 l 372 0 l 372 484 l 600 484 l 600 176 l 866 176 l 911 178 q 982 271 979 186 l 982 271 l 982 734 l 1211 734 l 1211 279 q 1153 139 1211 202 q 983 38 1095 77 q 741 0 871 0 l 741 0 z "},"€":{"ha":804,"x_min":58,"x_max":754,"o":"m 620 453 l 620 345 l 408 345 q 457 212 412 255 q 606 170 502 170 l 606 170 q 725 190 673 170 l 725 190 l 754 7 q 576 -13 664 -13 l 576 -13 q 284 82 393 -13 q 170 345 175 177 l 170 345 l 58 345 l 58 453 l 170 453 l 170 536 l 58 536 l 58 644 l 172 644 q 298 906 184 812 q 597 1000 411 1000 l 597 1000 q 754 979 669 1000 l 754 979 l 725 796 q 612 817 672 817 l 612 817 q 469 775 518 817 q 410 644 419 732 l 410 644 l 620 644 l 620 536 l 408 536 l 408 453 l 620 453 z "},"₱":{"ha":1045,"x_min":28,"x_max":1017,"o":"m 526 335 l 370 335 l 370 0 l 132 0 l 132 526 l 28 526 l 28 634 l 132 634 l 132 672 l 28 672 l 28 781 l 132 781 l 132 987 l 526 987 q 749 933 654 987 q 884 781 844 880 l 884 781 l 1017 781 l 1017 672 l 908 672 l 909 652 l 908 634 l 1017 634 l 1017 526 l 884 526 q 753 386 845 437 q 526 335 662 335 l 526 335 z m 667 634 l 668 651 l 667 672 l 370 672 l 370 634 l 667 634 z m 370 804 l 370 781 l 609 781 q 529 804 576 803 l 529 804 l 370 804 z m 580 526 l 580 526 l 370 526 l 370 519 l 526 519 q 580 526 557 519 z "},"₹":{"ha":736,"x_min":26,"x_max":709,"o":"m 709 987 l 671 845 l 534 845 q 572 736 564 797 l 572 736 l 708 736 l 671 594 l 571 594 q 499 440 555 500 q 338 349 442 380 l 338 349 l 613 10 l 613 0 l 358 0 l 47 372 l 46 503 l 206 503 q 332 594 303 505 l 332 594 l 26 594 l 64 736 l 326 736 q 210 804 296 801 l 210 804 l 27 804 l 71 987 l 709 987 z "},"₺":{"ha":845,"x_min":28,"x_max":798,"o":"m 557 516 l 798 516 l 798 471 q 742 216 798 327 q 589 46 687 105 q 363 -14 490 -14 l 363 -14 q 131 0 239 -14 l 131 0 l 131 434 l 28 406 l 28 556 l 131 585 l 131 658 l 28 629 l 28 780 l 131 808 l 131 987 l 368 987 l 368 876 l 479 907 l 479 756 l 368 725 l 368 652 l 479 683 l 479 532 l 368 501 l 368 172 q 508 249 460 174 q 557 469 556 323 l 557 469 l 557 516 z "},"₼":{"ha":964,"x_min":38,"x_max":926,"o":"m 596 734 l 596 582 q 836 418 747 543 q 926 116 924 294 l 926 116 l 926 0 l 697 0 l 697 106 q 596 382 697 302 l 596 382 l 596 0 l 368 0 l 368 383 q 267 105 267 307 l 267 105 l 267 0 l 38 0 l 38 115 q 79 332 39 234 q 194 494 119 429 q 368 583 268 558 l 368 583 l 368 734 l 596 734 z "},"₽":{"ha":1008,"x_min":43,"x_max":955,"o":"m 628 298 l 628 115 l 416 115 l 416 0 l 178 0 l 178 115 l 43 115 l 43 298 l 178 298 l 178 335 l 43 335 l 43 519 l 178 519 l 178 987 l 570 987 q 771 946 683 987 q 907 828 859 905 q 955 656 955 752 l 955 656 q 849 421 955 507 q 565 335 744 335 l 565 335 l 416 335 l 416 298 l 628 298 z m 416 803 l 416 519 l 562 519 q 713 654 713 519 l 713 654 q 675 762 713 721 q 572 803 637 802 l 572 803 l 416 803 z "},"ℓ":{"ha":698,"x_min":5,"x_max":659,"o":"m 514 197 l 514 -14 q 225 65 325 -14 q 125 295 125 145 l 125 295 l 125 304 q 5 297 61 297 l 5 297 l 5 424 q 125 433 65 424 l 125 433 l 125 672 q 200 914 125 827 q 407 1002 275 1002 l 407 1002 q 589 935 520 1002 q 659 756 659 869 l 659 756 l 659 730 q 578 534 659 633 q 370 375 497 435 l 370 375 l 370 349 q 405 233 370 268 q 514 197 440 197 l 514 197 z m 370 709 l 370 538 q 460 734 460 621 l 460 734 l 460 759 q 447 800 460 783 q 414 818 433 818 l 414 818 q 370 709 370 818 l 370 709 z "},"™":{"ha":880,"x_min":84,"x_max":800,"o":"m 701 619 l 701 848 l 635 619 l 578 619 l 513 850 l 513 619 l 413 619 l 413 987 l 535 987 l 607 745 l 686 987 l 800 987 l 800 619 l 701 619 z m 368 987 l 368 909 l 286 909 l 286 622 l 172 622 l 172 909 l 84 909 l 84 987 l 368 987 z "},"−":{"ha":760,"x_min":92,"x_max":688,"o":"m 688 571 l 688 392 l 92 392 l 92 571 l 688 571 z "},"\uFEFF":{"ha":0,"x_min":null,"x_max":null,"o":""},"�":{"ha":1425,"x_min":62,"x_max":1361,"o":"m 62 436 l 711 1097 l 1361 436 l 711 -225 l 62 436 z m 630 273 l 767 273 q 777 332 767 312 q 812 368 787 351 l 812 368 q 893 440 862 394 q 924 536 924 486 l 924 536 q 868 674 924 623 q 710 725 811 725 l 710 725 q 558 678 612 725 q 503 545 504 631 l 503 545 l 640 545 q 661 597 642 579 q 710 614 681 614 l 710 614 q 768 593 749 614 q 787 536 787 571 l 787 536 q 724 431 787 471 l 724 431 q 646 355 662 387 q 630 273 630 324 l 630 273 z m 767 96 l 767 211 l 630 211 l 630 96 l 767 96 z m 716 -376 l 716 -374 l 719 -374 l 719 -376 l 716 -376 z m 715 1464 l 715 1467 l 718 1467 l 718 1464 l 715 1464 z "}," ":{"ha":346,"x_min":null,"x_max":null,"o":""},"­":{"ha":625,"x_min":103,"x_max":511,"o":"m 511 514 l 511 337 l 103 337 l 103 514 l 511 514 z "},"Đ":{"ha":918,"x_min":-20,"x_max":871,"o":"m 420 0 l 95 0 l 95 431 l -20 431 l -20 560 l 95 560 l 95 987 l 413 987 q 648 928 544 987 q 811 761 753 869 q 871 518 870 652 l 871 518 l 871 473 q 813 230 871 337 q 652 61 756 122 q 420 0 548 1 l 420 0 z m 475 560 l 475 431 l 333 431 l 333 183 l 416 183 q 573 256 518 183 q 628 473 628 329 l 628 473 l 628 515 q 573 731 628 659 q 413 804 518 804 l 413 804 l 333 804 l 333 560 l 475 560 z "},"Ð":{"ha":918,"x_min":-20,"x_max":871,"o":"m 420 0 l 95 0 l 95 431 l -20 431 l -20 560 l 95 560 l 95 987 l 413 987 q 648 928 544 987 q 811 761 753 869 q 871 518 870 652 l 871 518 l 871 473 q 813 230 871 337 q 652 61 756 122 q 420 0 548 1 l 420 0 z m 475 560 l 475 431 l 333 431 l 333 183 l 416 183 q 573 256 518 183 q 628 473 628 329 l 628 473 l 628 515 q 573 731 628 659 q 413 804 518 804 l 413 804 l 333 804 l 333 560 l 475 560 z "},"ħ":{"ha":804,"x_min":-41,"x_max":741,"o":"m 454 951 l 454 821 l 308 821 l 308 655 q 495 747 381 747 l 495 747 q 678 675 616 747 q 741 463 740 604 l 741 463 l 741 0 l 512 0 l 512 458 q 488 544 512 516 q 408 571 465 571 l 408 571 q 308 526 337 571 l 308 526 l 308 0 l 79 0 l 79 821 l -41 821 l -41 951 l 79 951 l 79 1042 l 308 1042 l 308 951 l 454 951 z "},"Ŧ":{"ha":876,"x_min":24,"x_max":850,"o":"m 662 620 l 662 490 l 553 490 l 553 0 l 315 0 l 315 490 l 167 490 l 167 620 l 315 620 l 315 804 l 24 804 l 24 987 l 850 987 l 850 804 l 553 804 l 553 620 l 662 620 z "},"ŧ":{"ha":477,"x_min":-24,"x_max":471,"o":"m 102 916 l 330 916 l 330 734 l 451 734 l 451 575 l 330 575 l 330 473 l 471 473 l 471 344 l 330 344 l 330 239 q 345 182 330 198 q 404 165 360 165 l 404 165 q 461 170 438 165 l 461 170 l 461 6 q 332 -14 399 -14 l 332 -14 q 160 40 217 -14 q 102 203 104 94 l 102 203 l 102 344 l -24 344 l -24 473 l 102 473 l 102 575 l 8 575 l 8 734 l 102 734 l 102 916 z "},"À":{"ha":946,"x_min":-2,"x_max":949,"o":"m 693 0 l 635 184 l 309 184 l 252 0 l -2 0 l 360 987 l 584 987 l 949 0 l 693 0 z m 472 711 l 366 368 l 578 368 l 472 711 z m 448 1252 l 583 1039 l 397 1039 l 206 1252 l 448 1252 z "},"Á":{"ha":946,"x_min":-2,"x_max":949,"o":"m 693 0 l 635 184 l 309 184 l 252 0 l -2 0 l 360 987 l 584 987 l 949 0 l 693 0 z m 472 711 l 366 368 l 578 368 l 472 711 z m 370 1039 l 503 1252 l 745 1252 l 556 1039 l 370 1039 z "},"Â":{"ha":946,"x_min":-2,"x_max":949,"o":"m 693 0 l 635 184 l 309 184 l 252 0 l -2 0 l 360 987 l 584 987 l 949 0 l 693 0 z m 472 711 l 366 368 l 578 368 l 472 711 z m 540 1252 l 762 1061 l 762 1053 l 582 1053 l 474 1145 l 366 1053 l 190 1053 l 190 1064 l 409 1252 l 540 1252 z "},"Ã":{"ha":946,"x_min":-2,"x_max":949,"o":"m 693 0 l 635 184 l 309 184 l 252 0 l -2 0 l 360 987 l 584 987 l 949 0 l 693 0 z m 472 711 l 366 368 l 578 368 l 472 711 z m 610 1253 l 736 1246 q 691 1115 736 1168 q 579 1061 646 1061 l 579 1061 q 479 1089 534 1061 q 391 1118 425 1118 l 391 1118 q 354 1103 369 1118 q 338 1057 338 1088 l 338 1057 l 212 1063 q 257 1194 212 1139 q 368 1249 302 1249 l 368 1249 q 456 1224 401 1249 q 526 1196 511 1199 q 557 1192 541 1192 l 557 1192 q 594 1207 578 1192 q 610 1253 610 1222 l 610 1253 z "},"Ä":{"ha":946,"x_min":-2,"x_max":949,"o":"m 693 0 l 635 184 l 309 184 l 252 0 l -2 0 l 360 987 l 584 987 l 949 0 l 693 0 z m 472 711 l 366 368 l 578 368 l 472 711 z m 195 1136 l 195 1136 q 224 1200 195 1173 q 297 1226 254 1226 q 370 1200 340 1226 q 399 1136 399 1173 q 370 1072 399 1099 q 297 1046 340 1046 q 224 1072 254 1046 q 195 1136 195 1099 z m 547 1136 l 547 1136 q 576 1200 547 1173 q 649 1226 606 1226 q 722 1200 692 1226 q 751 1136 751 1173 q 722 1072 751 1099 q 649 1046 692 1046 q 576 1072 606 1046 q 547 1136 547 1099 z "},"Å":{"ha":946,"x_min":-2,"x_max":949,"o":"m 693 0 l 635 184 l 309 184 l 252 0 l -2 0 l 360 987 l 584 987 l 949 0 l 693 0 z m 472 711 l 366 368 l 578 368 l 472 711 z m 323 1173 l 323 1173 q 368 1271 323 1231 q 476 1310 412 1310 l 476 1310 q 584 1271 539 1310 q 628 1173 628 1231 l 628 1173 q 584 1076 628 1115 q 476 1038 541 1038 l 476 1038 q 367 1076 411 1038 q 323 1173 323 1115 z m 476 1102 l 476 1102 q 527 1122 509 1102 q 546 1173 546 1143 q 527 1223 546 1202 q 476 1244 509 1244 l 476 1244 q 424 1223 443 1244 q 406 1173 406 1202 q 424 1122 406 1143 q 476 1102 443 1102 z "},"Ǻ":{"ha":946,"x_min":-2,"x_max":949,"o":"m 693 0 l 635 184 l 309 184 l 252 0 l -2 0 l 360 987 l 584 987 l 949 0 l 693 0 z m 472 711 l 366 368 l 578 368 l 472 711 z m 414 1223 l 557 1369 l 755 1369 l 557 1223 l 414 1223 z m 473 938 l 473 938 q 368 975 409 938 q 326 1067 326 1012 q 369 1160 326 1122 q 473 1198 411 1198 q 576 1160 534 1198 q 618 1067 618 1122 q 577 975 618 1012 q 473 938 536 938 z m 411 1067 l 411 1067 q 429 1023 411 1040 q 473 1006 446 1006 l 473 1006 q 516 1023 500 1006 q 532 1067 532 1040 l 532 1067 q 516 1112 532 1095 q 473 1129 500 1129 l 473 1129 q 429 1112 446 1129 q 411 1067 411 1095 z "},"Ç":{"ha":911,"x_min":47,"x_max":876,"o":"m 637 334 l 873 334 q 818 152 869 231 q 675 30 767 73 q 465 -14 583 -14 l 465 -14 q 159 113 271 -14 q 47 471 47 240 l 47 471 l 47 520 q 97 774 47 665 q 243 942 148 883 q 463 1002 338 1002 l 463 1002 q 751 907 642 1002 q 876 646 861 812 l 876 646 l 638 646 q 593 776 635 736 q 463 815 550 815 l 463 815 q 332 749 374 815 q 289 536 291 682 l 289 536 l 289 467 q 329 241 289 309 q 465 173 368 173 l 465 173 q 591 212 547 173 q 637 334 634 250 l 637 334 z m 381 7 l 555 7 l 548 -35 q 650 -152 650 -54 l 650 -152 q 583 -275 650 -231 q 396 -320 515 -320 l 396 -320 l 391 -194 q 451 -142 451 -194 l 451 -142 q 430 -106 451 -116 q 360 -92 408 -96 l 360 -92 l 381 7 z "},"È":{"ha":777,"x_min":75,"x_max":756,"o":"m 687 595 l 687 418 l 313 418 l 313 183 l 755 183 l 755 0 l 75 0 l 75 987 l 756 987 l 756 804 l 313 804 l 313 595 l 687 595 z m 410 1252 l 545 1039 l 359 1039 l 168 1252 l 410 1252 z "},"É":{"ha":777,"x_min":75,"x_max":756,"o":"m 687 595 l 687 418 l 313 418 l 313 183 l 755 183 l 755 0 l 75 0 l 75 987 l 756 987 l 756 804 l 313 804 l 313 595 l 687 595 z m 332 1039 l 465 1252 l 707 1252 l 518 1039 l 332 1039 z "},"Ê":{"ha":777,"x_min":75,"x_max":756,"o":"m 687 595 l 687 418 l 313 418 l 313 183 l 755 183 l 755 0 l 75 0 l 75 987 l 756 987 l 756 804 l 313 804 l 313 595 l 687 595 z m 502 1252 l 724 1061 l 724 1053 l 544 1053 l 436 1145 l 328 1053 l 152 1053 l 152 1064 l 371 1252 l 502 1252 z "},"Ë":{"ha":777,"x_min":75,"x_max":756,"o":"m 687 595 l 687 418 l 313 418 l 313 183 l 755 183 l 755 0 l 75 0 l 75 987 l 756 987 l 756 804 l 313 804 l 313 595 l 687 595 z m 157 1136 l 157 1136 q 186 1200 157 1173 q 259 1226 216 1226 q 332 1200 302 1226 q 361 1136 361 1173 q 332 1072 361 1099 q 259 1046 302 1046 q 186 1072 216 1046 q 157 1136 157 1099 z m 509 1136 l 509 1136 q 538 1200 509 1173 q 611 1226 568 1226 q 684 1200 654 1226 q 713 1136 713 1173 q 684 1072 713 1099 q 611 1046 654 1046 q 538 1072 568 1046 q 509 1136 509 1099 z "},"Ì":{"ha":419,"x_min":-58,"x_max":328,"o":"m 328 987 l 328 0 l 91 0 l 91 987 l 328 987 z m 183 1252 l 319 1039 l 133 1039 l -58 1252 l 183 1252 z "},"Í":{"ha":419,"x_min":91,"x_max":479,"o":"m 328 987 l 328 0 l 91 0 l 91 987 l 328 987 z m 104 1039 l 238 1252 l 479 1252 l 291 1039 l 104 1039 z "},"Î":{"ha":419,"x_min":-75,"x_max":498,"o":"m 328 987 l 328 0 l 91 0 l 91 987 l 328 987 z m 275 1252 l 498 1061 l 498 1053 l 317 1053 l 210 1145 l 102 1053 l -75 1053 l -75 1064 l 144 1252 l 275 1252 z "},"Ï":{"ha":419,"x_min":-70,"x_max":487,"o":"m 328 987 l 328 0 l 91 0 l 91 987 l 328 987 z m -70 1136 l -70 1136 q -40 1200 -70 1173 q 33 1226 -11 1226 q 105 1200 76 1226 q 135 1136 135 1173 q 105 1072 135 1099 q 33 1046 76 1046 q -40 1072 -11 1046 q -70 1136 -70 1099 z m 282 1136 l 282 1136 q 312 1200 282 1173 q 385 1226 341 1226 q 457 1200 428 1226 q 487 1136 487 1173 q 457 1072 487 1099 q 385 1046 428 1046 q 312 1072 341 1046 q 282 1136 282 1099 z "},"Ñ":{"ha":975,"x_min":75,"x_max":899,"o":"m 899 987 l 899 0 l 663 0 l 313 614 l 313 0 l 75 0 l 75 987 l 313 987 l 662 373 l 662 987 l 899 987 z m 628 1253 l 754 1246 q 709 1115 754 1168 q 597 1061 664 1061 l 597 1061 q 498 1089 553 1061 q 409 1118 443 1118 l 409 1118 q 372 1103 387 1118 q 357 1057 357 1088 l 357 1057 l 230 1063 q 275 1194 230 1139 q 386 1249 320 1249 l 386 1249 q 475 1224 420 1249 q 544 1196 530 1199 q 575 1192 559 1192 l 575 1192 q 612 1207 597 1192 q 628 1253 628 1222 l 628 1253 z "},"Ò":{"ha":959,"x_min":47,"x_max":911,"o":"m 911 519 l 911 473 q 857 218 911 329 q 705 46 804 106 q 480 -14 606 -14 q 256 44 354 -14 q 104 210 159 102 q 47 458 50 318 l 47 458 l 47 513 q 100 769 47 659 q 253 941 153 880 q 479 1001 352 1001 l 479 1001 q 703 941 604 1001 q 856 771 801 882 q 911 519 910 661 l 911 519 z m 669 469 l 669 515 q 620 738 669 662 q 479 814 570 814 l 479 814 q 290 546 300 814 l 290 546 l 289 473 q 337 250 289 328 q 480 172 385 172 l 480 172 q 619 249 570 172 q 669 469 668 326 l 669 469 z m 451 1252 l 587 1039 l 401 1039 l 210 1252 l 451 1252 z "},"Ó":{"ha":959,"x_min":47,"x_max":911,"o":"m 911 519 l 911 473 q 857 218 911 329 q 705 46 804 106 q 480 -14 606 -14 q 256 44 354 -14 q 104 210 159 102 q 47 458 50 318 l 47 458 l 47 513 q 100 769 47 659 q 253 941 153 880 q 479 1001 352 1001 l 479 1001 q 703 941 604 1001 q 856 771 801 882 q 911 519 910 661 l 911 519 z m 669 469 l 669 515 q 620 738 669 662 q 479 814 570 814 l 479 814 q 290 546 300 814 l 290 546 l 289 473 q 337 250 289 328 q 480 172 385 172 l 480 172 q 619 249 570 172 q 669 469 668 326 l 669 469 z m 373 1039 l 507 1252 l 748 1252 l 559 1039 l 373 1039 z "},"Ô":{"ha":959,"x_min":47,"x_max":911,"o":"m 911 519 l 911 473 q 857 218 911 329 q 705 46 804 106 q 480 -14 606 -14 q 256 44 354 -14 q 104 210 159 102 q 47 458 50 318 l 47 458 l 47 513 q 100 769 47 659 q 253 941 153 880 q 479 1001 352 1001 l 479 1001 q 703 941 604 1001 q 856 771 801 882 q 911 519 910 661 l 911 519 z m 669 469 l 669 515 q 620 738 669 662 q 479 814 570 814 l 479 814 q 290 546 300 814 l 290 546 l 289 473 q 337 250 289 328 q 480 172 385 172 l 480 172 q 619 249 570 172 q 669 469 668 326 l 669 469 z m 543 1252 l 766 1061 l 766 1053 l 585 1053 l 477 1145 l 370 1053 l 193 1053 l 193 1064 l 412 1252 l 543 1252 z "},"Õ":{"ha":959,"x_min":47,"x_max":911,"o":"m 911 519 l 911 473 q 857 218 911 329 q 705 46 804 106 q 480 -14 606 -14 q 256 44 354 -14 q 104 210 159 102 q 47 458 50 318 l 47 458 l 47 513 q 100 769 47 659 q 253 941 153 880 q 479 1001 352 1001 l 479 1001 q 703 941 604 1001 q 856 771 801 882 q 911 519 910 661 l 911 519 z m 669 469 l 669 515 q 620 738 669 662 q 479 814 570 814 l 479 814 q 290 546 300 814 l 290 546 l 289 473 q 337 250 289 328 q 480 172 385 172 l 480 172 q 619 249 570 172 q 669 469 668 326 l 669 469 z m 613 1253 l 739 1246 q 694 1115 739 1168 q 583 1061 649 1061 l 583 1061 q 483 1089 538 1061 q 394 1118 428 1118 l 394 1118 q 357 1103 372 1118 q 342 1057 342 1088 l 342 1057 l 215 1063 q 260 1194 215 1139 q 371 1249 305 1249 l 371 1249 q 460 1224 405 1249 q 529 1196 515 1199 q 560 1192 544 1192 l 560 1192 q 597 1207 582 1192 q 613 1253 613 1222 l 613 1253 z "},"Ö":{"ha":959,"x_min":47,"x_max":911,"o":"m 911 519 l 911 473 q 857 218 911 329 q 705 46 804 106 q 480 -14 606 -14 q 256 44 354 -14 q 104 210 159 102 q 47 458 50 318 l 47 458 l 47 513 q 100 769 47 659 q 253 941 153 880 q 479 1001 352 1001 l 479 1001 q 703 941 604 1001 q 856 771 801 882 q 911 519 910 661 l 911 519 z m 669 469 l 669 515 q 620 738 669 662 q 479 814 570 814 l 479 814 q 290 546 300 814 l 290 546 l 289 473 q 337 250 289 328 q 480 172 385 172 l 480 172 q 619 249 570 172 q 669 469 668 326 l 669 469 z m 198 1136 l 198 1136 q 228 1200 198 1173 q 300 1226 257 1226 q 373 1200 344 1226 q 403 1136 403 1173 q 373 1072 403 1099 q 300 1046 344 1046 q 228 1072 257 1046 q 198 1136 198 1099 z m 550 1136 l 550 1136 q 579 1200 550 1173 q 652 1226 609 1226 q 725 1200 696 1226 q 755 1136 755 1173 q 725 1072 755 1099 q 652 1046 696 1046 q 579 1072 609 1046 q 550 1136 550 1099 z "},"Ù":{"ha":923,"x_min":71,"x_max":849,"o":"m 611 987 l 849 987 l 849 341 q 802 151 849 231 q 668 28 755 71 q 461 -14 581 -14 l 461 -14 q 177 80 281 -14 q 71 336 73 174 l 71 336 l 71 987 l 311 987 l 311 332 q 461 170 315 170 l 461 170 q 573 210 535 170 q 611 342 611 251 l 611 342 l 611 987 z m 431 1252 l 566 1039 l 380 1039 l 189 1252 l 431 1252 z "},"Ú":{"ha":923,"x_min":71,"x_max":849,"o":"m 611 987 l 849 987 l 849 341 q 802 151 849 231 q 668 28 755 71 q 461 -14 581 -14 l 461 -14 q 177 80 281 -14 q 71 336 73 174 l 71 336 l 71 987 l 311 987 l 311 332 q 461 170 315 170 l 461 170 q 573 210 535 170 q 611 342 611 251 l 611 342 l 611 987 z m 353 1039 l 486 1252 l 728 1252 l 539 1039 l 353 1039 z "},"Û":{"ha":923,"x_min":71,"x_max":849,"o":"m 611 987 l 849 987 l 849 341 q 802 151 849 231 q 668 28 755 71 q 461 -14 581 -14 l 461 -14 q 177 80 281 -14 q 71 336 73 174 l 71 336 l 71 987 l 311 987 l 311 332 q 461 170 315 170 l 461 170 q 573 210 535 170 q 611 342 611 251 l 611 342 l 611 987 z m 523 1252 l 745 1061 l 745 1053 l 565 1053 l 457 1145 l 349 1053 l 173 1053 l 173 1064 l 392 1252 l 523 1252 z "},"Ü":{"ha":923,"x_min":71,"x_max":849,"o":"m 611 987 l 849 987 l 849 341 q 802 151 849 231 q 668 28 755 71 q 461 -14 581 -14 l 461 -14 q 177 80 281 -14 q 71 336 73 174 l 71 336 l 71 987 l 311 987 l 311 332 q 461 170 315 170 l 461 170 q 573 210 535 170 q 611 342 611 251 l 611 342 l 611 987 z m 178 1136 l 178 1136 q 207 1200 178 1173 q 280 1226 237 1226 q 353 1200 323 1226 q 382 1136 382 1173 q 353 1072 382 1099 q 280 1046 323 1046 q 207 1072 237 1046 q 178 1136 178 1099 z m 530 1136 l 530 1136 q 559 1200 530 1173 q 632 1226 589 1226 q 705 1200 675 1226 q 734 1136 734 1173 q 705 1072 734 1099 q 632 1046 675 1046 q 559 1072 589 1046 q 530 1136 530 1099 z "},"Ý":{"ha":872,"x_min":-2,"x_max":875,"o":"m 254 987 l 436 559 l 618 987 l 875 987 l 557 355 l 557 0 l 315 0 l 315 355 l -2 987 l 254 987 z m 332 1039 l 465 1252 l 707 1252 l 518 1039 l 332 1039 z "},"à":{"ha":737,"x_min":31,"x_max":706,"o":"m 706 0 l 477 0 q 456 66 465 22 l 456 66 q 279 -14 393 -14 l 279 -14 q 103 49 176 -14 q 31 207 31 112 l 31 207 q 119 387 31 326 q 375 448 207 448 l 375 448 l 446 448 l 446 487 q 358 588 446 588 l 358 588 q 277 508 277 588 l 277 508 l 48 508 q 139 681 48 614 q 370 747 229 747 q 591 679 510 747 q 675 491 673 610 l 675 491 l 675 166 q 706 12 676 65 l 706 12 l 706 0 z m 334 149 l 334 149 q 405 168 377 149 q 446 209 433 186 l 446 209 l 446 326 l 379 326 q 260 219 260 326 l 260 219 q 281 169 260 188 q 334 149 302 149 z m 336 1042 l 471 829 l 286 829 l 94 1042 l 336 1042 z "},"á":{"ha":737,"x_min":31,"x_max":706,"o":"m 706 0 l 477 0 q 456 66 465 22 l 456 66 q 279 -14 393 -14 l 279 -14 q 103 49 176 -14 q 31 207 31 112 l 31 207 q 119 387 31 326 q 375 448 207 448 l 375 448 l 446 448 l 446 487 q 358 588 446 588 l 358 588 q 277 508 277 588 l 277 508 l 48 508 q 139 681 48 614 q 370 747 229 747 q 591 679 510 747 q 675 491 673 610 l 675 491 l 675 166 q 706 12 676 65 l 706 12 l 706 0 z m 334 149 l 334 149 q 405 168 377 149 q 446 209 433 186 l 446 209 l 446 326 l 379 326 q 260 219 260 326 l 260 219 q 281 169 260 188 q 334 149 302 149 z m 258 829 l 391 1042 l 633 1042 l 444 829 l 258 829 z "},"â":{"ha":737,"x_min":31,"x_max":706,"o":"m 706 0 l 477 0 q 456 66 465 22 l 456 66 q 279 -14 393 -14 l 279 -14 q 103 49 176 -14 q 31 207 31 112 l 31 207 q 119 387 31 326 q 375 448 207 448 l 375 448 l 446 448 l 446 487 q 358 588 446 588 l 358 588 q 277 508 277 588 l 277 508 l 48 508 q 139 681 48 614 q 370 747 229 747 q 591 679 510 747 q 675 491 673 610 l 675 491 l 675 166 q 706 12 676 65 l 706 12 l 706 0 z m 334 149 l 334 149 q 405 168 377 149 q 446 209 433 186 l 446 209 l 446 326 l 379 326 q 260 219 260 326 l 260 219 q 281 169 260 188 q 334 149 302 149 z m 428 1042 l 650 851 l 650 842 l 470 842 l 362 935 l 254 842 l 78 842 l 78 854 l 297 1042 l 428 1042 z "},"ã":{"ha":737,"x_min":31,"x_max":706,"o":"m 706 0 l 477 0 q 456 66 465 22 l 456 66 q 279 -14 393 -14 l 279 -14 q 103 49 176 -14 q 31 207 31 112 l 31 207 q 119 387 31 326 q 375 448 207 448 l 375 448 l 446 448 l 446 487 q 358 588 446 588 l 358 588 q 277 508 277 588 l 277 508 l 48 508 q 139 681 48 614 q 370 747 229 747 q 591 679 510 747 q 675 491 673 610 l 675 491 l 675 166 q 706 12 676 65 l 706 12 l 706 0 z m 334 149 l 334 149 q 405 168 377 149 q 446 209 433 186 l 446 209 l 446 326 l 379 326 q 260 219 260 326 l 260 219 q 281 169 260 188 q 334 149 302 149 z m 498 1044 l 624 1036 q 579 905 624 959 q 467 851 534 851 l 467 851 q 368 880 422 851 q 279 908 313 908 l 279 908 q 242 893 257 908 q 227 847 227 878 l 227 847 l 100 854 q 145 984 100 929 q 256 1039 190 1039 l 256 1039 q 345 1014 290 1039 q 414 986 399 989 q 445 983 429 983 l 445 983 q 482 998 467 983 q 498 1044 498 1013 l 498 1044 z "},"ä":{"ha":737,"x_min":31,"x_max":706,"o":"m 706 0 l 477 0 q 456 66 465 22 l 456 66 q 279 -14 393 -14 l 279 -14 q 103 49 176 -14 q 31 207 31 112 l 31 207 q 119 387 31 326 q 375 448 207 448 l 375 448 l 446 448 l 446 487 q 358 588 446 588 l 358 588 q 277 508 277 588 l 277 508 l 48 508 q 139 681 48 614 q 370 747 229 747 q 591 679 510 747 q 675 491 673 610 l 675 491 l 675 166 q 706 12 676 65 l 706 12 l 706 0 z m 334 149 l 334 149 q 405 168 377 149 q 446 209 433 186 l 446 209 l 446 326 l 379 326 q 260 219 260 326 l 260 219 q 281 169 260 188 q 334 149 302 149 z m 83 926 l 83 926 q 112 989 83 963 q 185 1016 142 1016 q 258 989 229 1016 q 288 926 288 963 q 258 862 288 888 q 185 836 229 836 q 112 862 142 836 q 83 926 83 888 z m 435 926 l 435 926 q 464 989 435 963 q 537 1016 494 1016 q 610 989 581 1016 q 640 926 640 963 q 610 862 640 888 q 537 836 581 836 q 464 862 494 836 q 435 926 435 888 z "},"å":{"ha":737,"x_min":31,"x_max":706,"o":"m 706 0 l 477 0 q 456 66 465 22 l 456 66 q 279 -14 393 -14 l 279 -14 q 103 49 176 -14 q 31 207 31 112 l 31 207 q 119 387 31 326 q 375 448 207 448 l 375 448 l 446 448 l 446 487 q 358 588 446 588 l 358 588 q 277 508 277 588 l 277 508 l 48 508 q 139 681 48 614 q 370 747 229 747 q 591 679 510 747 q 675 491 673 610 l 675 491 l 675 166 q 706 12 676 65 l 706 12 l 706 0 z m 334 149 l 334 149 q 405 168 377 149 q 446 209 433 186 l 446 209 l 446 326 l 379 326 q 260 219 260 326 l 260 219 q 281 169 260 188 q 334 149 302 149 z m 212 962 l 212 962 q 256 1060 212 1021 q 364 1100 300 1100 l 364 1100 q 472 1060 427 1100 q 516 962 516 1021 l 516 962 q 472 866 516 905 q 364 827 429 827 l 364 827 q 255 866 299 827 q 212 962 212 905 z m 364 892 l 364 892 q 415 912 397 892 q 434 962 434 932 q 415 1013 434 992 q 364 1034 397 1034 l 364 1034 q 312 1013 331 1034 q 294 962 294 992 q 312 912 294 932 q 364 892 331 892 z "},"ǻ":{"ha":737,"x_min":31,"x_max":706,"o":"m 706 0 l 477 0 q 456 66 465 22 l 456 66 q 279 -14 393 -14 l 279 -14 q 103 49 176 -14 q 31 207 31 112 l 31 207 q 119 387 31 326 q 375 448 207 448 l 375 448 l 446 448 l 446 487 q 358 588 446 588 l 358 588 q 277 508 277 588 l 277 508 l 48 508 q 139 681 48 614 q 370 747 229 747 q 591 679 510 747 q 675 491 673 610 l 675 491 l 675 166 q 706 12 676 65 l 706 12 l 706 0 z m 334 149 l 334 149 q 405 168 377 149 q 446 209 433 186 l 446 209 l 446 326 l 379 326 q 260 219 260 326 l 260 219 q 281 169 260 188 q 334 149 302 149 z m 302 1013 l 445 1160 l 644 1160 l 446 1013 l 302 1013 z m 361 728 l 361 728 q 256 765 297 728 q 214 857 214 802 q 257 950 214 912 q 361 988 299 988 q 464 950 422 988 q 506 857 506 912 q 465 765 506 802 q 361 728 424 728 z m 299 857 l 299 857 q 317 813 299 830 q 361 796 334 796 l 361 796 q 404 813 388 796 q 420 857 420 830 l 420 857 q 404 903 420 886 q 361 920 388 920 l 361 920 q 317 903 334 920 q 299 857 299 886 z "},"ç":{"ha":722,"x_min":35,"x_max":689,"o":"m 374 163 l 374 163 q 449 189 422 163 q 475 262 475 215 l 475 262 l 689 262 q 603 64 689 141 q 380 -14 516 -14 l 380 -14 q 127 87 220 -14 q 35 365 35 187 l 35 365 l 35 374 q 76 571 35 486 q 195 702 117 656 q 378 747 272 747 l 378 747 q 605 668 521 747 q 689 453 689 589 l 689 453 l 475 453 q 447 541 475 510 q 372 571 419 571 l 372 571 q 269 458 283 571 l 269 458 q 264 359 264 422 l 264 359 q 290 205 264 248 q 374 163 317 163 z m 300 7 l 473 7 l 467 -35 q 568 -152 568 -54 l 568 -152 q 501 -275 568 -231 q 315 -320 434 -320 l 315 -320 l 310 -194 q 370 -142 370 -194 l 370 -142 q 348 -106 370 -116 q 279 -92 327 -96 l 279 -92 l 300 7 z "},"è":{"ha":756,"x_min":41,"x_max":728,"o":"m 419 -14 l 419 -14 q 146 87 250 -14 q 41 349 41 188 l 41 349 l 41 368 q 83 567 41 481 q 205 700 125 653 q 395 747 285 747 l 395 747 q 639 651 549 747 q 728 384 728 555 l 728 384 l 728 295 l 274 295 q 328 198 286 233 q 435 163 369 163 l 435 163 q 604 239 543 163 l 604 239 l 709 115 q 588 21 666 56 q 419 -14 509 -14 z m 393 571 l 393 571 q 274 438 293 571 l 274 438 l 505 438 l 505 456 q 477 541 506 511 q 393 571 448 571 z m 335 1042 l 471 829 l 285 829 l 94 1042 l 335 1042 z "},"é":{"ha":756,"x_min":41,"x_max":728,"o":"m 419 -14 l 419 -14 q 146 87 250 -14 q 41 349 41 188 l 41 349 l 41 368 q 83 567 41 481 q 205 700 125 653 q 395 747 285 747 l 395 747 q 639 651 549 747 q 728 384 728 555 l 728 384 l 728 295 l 274 295 q 328 198 286 233 q 435 163 369 163 l 435 163 q 604 239 543 163 l 604 239 l 709 115 q 588 21 666 56 q 419 -14 509 -14 z m 393 571 l 393 571 q 274 438 293 571 l 274 438 l 505 438 l 505 456 q 477 541 506 511 q 393 571 448 571 z m 257 829 l 391 1042 l 632 1042 l 444 829 l 257 829 z "},"ê":{"ha":756,"x_min":41,"x_max":728,"o":"m 419 -14 l 419 -14 q 146 87 250 -14 q 41 349 41 188 l 41 349 l 41 368 q 83 567 41 481 q 205 700 125 653 q 395 747 285 747 l 395 747 q 639 651 549 747 q 728 384 728 555 l 728 384 l 728 295 l 274 295 q 328 198 286 233 q 435 163 369 163 l 435 163 q 604 239 543 163 l 604 239 l 709 115 q 588 21 666 56 q 419 -14 509 -14 z m 393 571 l 393 571 q 274 438 293 571 l 274 438 l 505 438 l 505 456 q 477 541 506 511 q 393 571 448 571 z m 427 1042 l 650 852 l 650 843 l 469 843 l 361 935 l 254 843 l 77 843 l 77 854 l 296 1042 l 427 1042 z "},"ë":{"ha":756,"x_min":41,"x_max":728,"o":"m 419 -14 l 419 -14 q 146 87 250 -14 q 41 349 41 188 l 41 349 l 41 368 q 83 567 41 481 q 205 700 125 653 q 395 747 285 747 l 395 747 q 639 651 549 747 q 728 384 728 555 l 728 384 l 728 295 l 274 295 q 328 198 286 233 q 435 163 369 163 l 435 163 q 604 239 543 163 l 604 239 l 709 115 q 588 21 666 56 q 419 -14 509 -14 z m 393 571 l 393 571 q 274 438 293 571 l 274 438 l 505 438 l 505 456 q 477 541 506 511 q 393 571 448 571 z m 82 926 l 82 926 q 112 990 82 964 q 184 1017 141 1017 q 257 990 228 1017 q 287 926 287 964 q 257 863 287 889 q 184 836 228 836 q 112 863 141 836 q 82 926 82 889 z m 434 926 l 434 926 q 464 990 434 964 q 536 1017 493 1017 q 609 990 580 1017 q 639 926 639 964 q 609 863 639 889 q 536 836 580 836 q 464 863 493 836 q 434 926 434 889 z "},"ì":{"ha":396,"x_min":-68,"x_max":313,"o":"m 313 734 l 313 0 l 83 0 l 83 734 l 313 734 z m 173 1028 l 309 815 l 123 815 l -68 1028 l 173 1028 z "},"í":{"ha":396,"x_min":83,"x_max":469,"o":"m 313 734 l 313 0 l 83 0 l 83 734 l 313 734 z m 94 815 l 228 1028 l 469 1028 l 281 815 l 94 815 z "},"î":{"ha":396,"x_min":-85,"x_max":488,"o":"m 313 734 l 313 0 l 83 0 l 83 734 l 313 734 z m 265 1028 l 488 838 l 488 829 l 307 829 l 199 921 l 92 829 l -85 829 l -85 840 l 134 1028 l 265 1028 z "},"ï":{"ha":396,"x_min":-80,"x_max":477,"o":"m 313 734 l 313 0 l 83 0 l 83 734 l 313 734 z m -80 912 l -80 912 q -51 976 -80 949 q 22 1002 -21 1002 q 95 976 66 1002 q 125 912 125 949 q 95 848 125 875 q 22 822 66 822 q -51 848 -21 822 q -80 912 -80 875 z m 272 912 l 272 912 q 301 976 272 949 q 374 1002 331 1002 q 447 976 418 1002 q 477 912 477 949 q 447 848 477 875 q 374 822 418 822 q 301 848 331 822 q 272 912 272 875 z "},"ñ":{"ha":783,"x_min":60,"x_max":721,"o":"m 60 734 l 274 734 l 281 648 q 491 747 357 747 l 491 747 q 662 679 606 747 q 721 473 719 610 l 721 473 l 721 0 l 492 0 l 492 463 q 469 545 492 519 q 388 571 447 571 l 388 571 q 288 518 321 571 l 288 518 l 288 0 l 60 0 l 60 734 z m 527 1044 l 653 1036 q 608 905 653 959 q 496 851 563 851 l 496 851 q 397 880 452 851 q 308 908 342 908 l 308 908 q 271 893 286 908 q 256 847 256 878 l 256 847 l 129 854 q 174 984 129 929 q 285 1039 219 1039 l 285 1039 q 374 1014 319 1039 q 443 986 429 989 q 474 983 458 983 l 474 983 q 511 998 496 983 q 527 1044 527 1013 l 527 1044 z "},"ò":{"ha":780,"x_min":35,"x_max":743,"o":"m 36 335 l 35 374 q 78 569 35 484 q 201 701 121 655 q 389 747 281 747 l 389 747 q 648 645 553 747 q 743 368 743 543 l 743 368 l 743 359 q 648 87 743 188 q 390 -14 553 -14 l 390 -14 q 138 80 233 -14 q 36 335 43 174 l 36 335 z m 264 401 l 264 359 q 296 210 264 258 q 390 163 328 163 l 390 163 q 515 351 512 163 l 515 351 l 515 374 q 389 571 515 571 l 389 571 q 264 401 274 571 l 264 401 z m 364 1042 l 500 829 l 314 829 l 123 1042 l 364 1042 z "},"ó":{"ha":780,"x_min":35,"x_max":743,"o":"m 36 335 l 35 374 q 78 569 35 484 q 201 701 121 655 q 389 747 281 747 l 389 747 q 648 645 553 747 q 743 368 743 543 l 743 368 l 743 359 q 648 87 743 188 q 390 -14 553 -14 l 390 -14 q 138 80 233 -14 q 36 335 43 174 l 36 335 z m 264 401 l 264 359 q 296 210 264 258 q 390 163 328 163 l 390 163 q 515 351 512 163 l 515 351 l 515 374 q 389 571 515 571 l 389 571 q 264 401 274 571 l 264 401 z m 286 829 l 420 1042 l 661 1042 l 473 829 l 286 829 z "},"ô":{"ha":780,"x_min":35,"x_max":743,"o":"m 36 335 l 35 374 q 78 569 35 484 q 201 701 121 655 q 389 747 281 747 l 389 747 q 648 645 553 747 q 743 368 743 543 l 743 368 l 743 359 q 648 87 743 188 q 390 -14 553 -14 l 390 -14 q 138 80 233 -14 q 36 335 43 174 l 36 335 z m 264 401 l 264 359 q 296 210 264 258 q 390 163 328 163 l 390 163 q 515 351 512 163 l 515 351 l 515 374 q 389 571 515 571 l 389 571 q 264 401 274 571 l 264 401 z m 456 1042 l 679 851 l 679 842 l 498 842 l 391 935 l 283 842 l 106 842 l 106 854 l 326 1042 l 456 1042 z "},"õ":{"ha":780,"x_min":35,"x_max":743,"o":"m 36 335 l 35 374 q 78 569 35 484 q 201 701 121 655 q 389 747 281 747 l 389 747 q 648 645 553 747 q 743 368 743 543 l 743 368 l 743 359 q 648 87 743 188 q 390 -14 553 -14 l 390 -14 q 138 80 233 -14 q 36 335 43 174 l 36 335 z m 264 401 l 264 359 q 296 210 264 258 q 390 163 328 163 l 390 163 q 515 351 512 163 l 515 351 l 515 374 q 389 571 515 571 l 389 571 q 264 401 274 571 l 264 401 z m 526 1044 l 652 1036 q 607 905 652 959 q 496 851 562 851 l 496 851 q 396 880 451 851 q 307 908 341 908 l 307 908 q 270 893 286 908 q 255 847 255 878 l 255 847 l 128 854 q 173 984 128 929 q 284 1039 218 1039 l 284 1039 q 373 1014 318 1039 q 443 986 428 989 q 473 983 457 983 l 473 983 q 511 998 495 983 q 526 1044 526 1013 l 526 1044 z "},"ö":{"ha":780,"x_min":35,"x_max":743,"o":"m 36 335 l 35 374 q 78 569 35 484 q 201 701 121 655 q 389 747 281 747 l 389 747 q 648 645 553 747 q 743 368 743 543 l 743 368 l 743 359 q 648 87 743 188 q 390 -14 553 -14 l 390 -14 q 138 80 233 -14 q 36 335 43 174 l 36 335 z m 264 401 l 264 359 q 296 210 264 258 q 390 163 328 163 l 390 163 q 515 351 512 163 l 515 351 l 515 374 q 389 571 515 571 l 389 571 q 264 401 274 571 l 264 401 z m 111 926 l 111 926 q 141 989 111 963 q 214 1016 170 1016 q 287 989 257 1016 q 316 926 316 963 q 287 862 316 888 q 214 836 257 836 q 141 862 170 836 q 111 926 111 888 z m 463 926 l 463 926 q 493 989 463 963 q 566 1016 522 1016 q 638 989 609 1016 q 668 926 668 963 q 638 862 668 888 q 566 836 609 836 q 493 862 522 836 q 463 926 463 888 z "},"ù":{"ha":783,"x_min":60,"x_max":722,"o":"m 508 0 l 501 79 q 305 -14 429 -14 l 305 -14 q 122 57 184 -14 q 60 258 60 127 l 60 258 l 60 734 l 289 734 l 289 257 q 380 163 289 163 l 380 163 q 492 219 459 163 l 492 219 l 492 734 l 722 734 l 722 0 l 508 0 z m 364 1042 l 500 829 l 314 829 l 123 1042 l 364 1042 z "},"ú":{"ha":783,"x_min":60,"x_max":722,"o":"m 508 0 l 501 79 q 305 -14 429 -14 l 305 -14 q 122 57 184 -14 q 60 258 60 127 l 60 258 l 60 734 l 289 734 l 289 257 q 380 163 289 163 l 380 163 q 492 219 459 163 l 492 219 l 492 734 l 722 734 l 722 0 l 508 0 z m 286 829 l 420 1042 l 661 1042 l 473 829 l 286 829 z "},"û":{"ha":783,"x_min":60,"x_max":722,"o":"m 508 0 l 501 79 q 305 -14 429 -14 l 305 -14 q 122 57 184 -14 q 60 258 60 127 l 60 258 l 60 734 l 289 734 l 289 257 q 380 163 289 163 l 380 163 q 492 219 459 163 l 492 219 l 492 734 l 722 734 l 722 0 l 508 0 z m 456 1042 l 679 851 l 679 842 l 498 842 l 391 935 l 283 842 l 106 842 l 106 854 l 326 1042 l 456 1042 z "},"ü":{"ha":783,"x_min":60,"x_max":722,"o":"m 508 0 l 501 79 q 305 -14 429 -14 l 305 -14 q 122 57 184 -14 q 60 258 60 127 l 60 258 l 60 734 l 289 734 l 289 257 q 380 163 289 163 l 380 163 q 492 219 459 163 l 492 219 l 492 734 l 722 734 l 722 0 l 508 0 z m 111 926 l 111 926 q 141 989 111 963 q 214 1016 170 1016 q 287 989 257 1016 q 316 926 316 963 q 287 862 316 888 q 214 836 257 836 q 141 862 170 836 q 111 926 111 888 z m 463 926 l 463 926 q 493 989 463 963 q 566 1016 522 1016 q 638 989 609 1016 q 668 926 668 963 q 638 862 668 888 q 566 836 609 836 q 493 862 522 836 q 463 926 463 888 z "},"ý":{"ha":720,"x_min":-3,"x_max":724,"o":"m 241 734 l 357 320 l 479 734 l 724 734 l 425 -123 l 412 -154 q 187 -296 349 -296 l 187 -296 q 93 -283 142 -296 l 93 -283 l 93 -119 l 123 -119 q 196 -105 171 -119 q 234 -56 222 -92 l 234 -56 l 252 -7 l -3 734 l 241 734 z m 254 829 l 387 1042 l 629 1042 l 440 829 l 254 829 z "},"ÿ":{"ha":720,"x_min":-3,"x_max":724,"o":"m 241 734 l 357 320 l 479 734 l 724 734 l 425 -123 l 412 -154 q 187 -296 349 -296 l 187 -296 q 93 -283 142 -296 l 93 -283 l 93 -119 l 123 -119 q 196 -105 171 -119 q 234 -56 222 -92 l 234 -56 l 252 -7 l -3 734 l 241 734 z m 79 926 l 79 926 q 108 989 79 963 q 181 1016 138 1016 q 254 989 224 1016 q 283 926 283 963 q 254 862 283 888 q 181 836 224 836 q 108 862 138 836 q 79 926 79 888 z m 431 926 l 431 926 q 460 989 431 963 q 533 1016 490 1016 q 606 989 576 1016 q 635 926 635 963 q 606 862 635 888 q 533 836 576 836 q 460 862 490 836 q 431 926 431 888 z "},"Ā":{"ha":946,"x_min":-2,"x_max":949,"o":"m 693 0 l 635 184 l 309 184 l 252 0 l -2 0 l 360 987 l 584 987 l 949 0 l 693 0 z m 472 711 l 366 368 l 578 368 l 472 711 z m 709 1195 l 709 1078 l 239 1078 l 239 1195 l 709 1195 z "},"ā":{"ha":737,"x_min":31,"x_max":706,"o":"m 706 0 l 477 0 q 456 66 465 22 l 456 66 q 279 -14 393 -14 l 279 -14 q 103 49 176 -14 q 31 207 31 112 l 31 207 q 119 387 31 326 q 375 448 207 448 l 375 448 l 446 448 l 446 487 q 358 588 446 588 l 358 588 q 277 508 277 588 l 277 508 l 48 508 q 139 681 48 614 q 370 747 229 747 q 591 679 510 747 q 675 491 673 610 l 675 491 l 675 166 q 706 12 676 65 l 706 12 l 706 0 z m 334 149 l 334 149 q 405 168 377 149 q 446 209 433 186 l 446 209 l 446 326 l 379 326 q 260 219 260 326 l 260 219 q 281 169 260 188 q 334 149 302 149 z m 597 985 l 597 868 l 127 868 l 127 985 l 597 985 z "},"Ă":{"ha":946,"x_min":-2,"x_max":949,"o":"m 693 0 l 635 184 l 309 184 l 252 0 l -2 0 l 360 987 l 584 987 l 949 0 l 693 0 z m 472 711 l 366 368 l 578 368 l 472 711 z m 569 1253 l 726 1253 q 657 1103 726 1160 q 475 1045 589 1045 q 292 1103 361 1045 q 224 1253 224 1160 l 224 1253 l 379 1253 q 405 1190 379 1213 q 475 1167 430 1167 q 544 1189 519 1167 q 569 1253 569 1211 l 569 1253 z "},"ă":{"ha":737,"x_min":31,"x_max":706,"o":"m 706 0 l 477 0 q 456 66 465 22 l 456 66 q 279 -14 393 -14 l 279 -14 q 103 49 176 -14 q 31 207 31 112 l 31 207 q 119 387 31 326 q 375 448 207 448 l 375 448 l 446 448 l 446 487 q 358 588 446 588 l 358 588 q 277 508 277 588 l 277 508 l 48 508 q 139 681 48 614 q 370 747 229 747 q 591 679 510 747 q 675 491 673 610 l 675 491 l 675 166 q 706 12 676 65 l 706 12 l 706 0 z m 334 149 l 334 149 q 405 168 377 149 q 446 209 433 186 l 446 209 l 446 326 l 379 326 q 260 219 260 326 l 260 219 q 281 169 260 188 q 334 149 302 149 z m 457 1043 l 614 1043 q 545 892 614 950 q 363 835 477 835 q 180 892 249 835 q 112 1043 112 950 l 112 1043 l 267 1043 q 293 980 267 1002 q 363 957 318 957 q 432 979 408 957 q 457 1043 457 1001 l 457 1043 z "},"Ą":{"ha":946,"x_min":-2,"x_max":949,"o":"m 360 987 l 584 987 l 949 0 l 876 0 q 801 -51 823 -26 q 778 -109 778 -75 l 778 -109 q 819 -151 778 -151 l 819 -151 q 865 -139 839 -151 l 865 -139 l 891 -253 q 779 -283 842 -283 l 779 -283 q 659 -243 704 -283 q 614 -138 614 -204 l 614 -138 q 691 7 614 -50 l 691 7 l 635 184 l 309 184 l 252 0 l -2 0 l 360 987 z m 472 711 l 366 368 l 578 368 l 472 711 z "},"ą":{"ha":737,"x_min":31,"x_max":706,"o":"m 476 2 l 476 2 q 456 66 463 28 l 456 66 q 279 -14 393 -14 l 279 -14 q 103 49 176 -14 q 31 207 31 112 l 31 207 q 119 387 31 326 q 375 448 207 448 l 375 448 l 446 448 l 446 487 q 358 588 446 588 l 358 588 q 277 508 277 588 l 277 508 l 48 508 q 139 681 48 614 q 370 747 229 747 q 591 679 510 747 q 675 491 673 610 l 675 491 l 675 166 q 706 12 676 65 l 706 12 l 706 0 l 669 0 q 593 -51 616 -26 q 570 -109 570 -75 l 570 -109 q 611 -151 570 -151 l 611 -151 q 658 -139 631 -151 l 658 -139 l 684 -253 q 571 -283 634 -283 l 571 -283 q 451 -243 496 -283 q 406 -138 406 -204 l 406 -138 q 476 2 406 -52 z m 334 149 l 334 149 q 405 168 377 149 q 446 209 433 186 l 446 209 l 446 326 l 379 326 q 260 219 260 326 l 260 219 q 281 169 260 188 q 334 149 302 149 z "},"Ć":{"ha":911,"x_min":47,"x_max":876,"o":"m 637 334 l 873 334 q 818 152 869 231 q 675 30 767 73 q 465 -14 583 -14 l 465 -14 q 159 113 271 -14 q 47 471 47 240 l 47 471 l 47 520 q 97 774 47 665 q 243 942 148 883 q 463 1002 338 1002 l 463 1002 q 751 907 642 1002 q 876 646 861 812 l 876 646 l 638 646 q 593 776 635 736 q 463 815 550 815 l 463 815 q 332 749 374 815 q 289 536 291 682 l 289 536 l 289 467 q 329 241 289 309 q 465 173 368 173 l 465 173 q 591 212 547 173 q 637 334 634 250 l 637 334 z m 365 1039 l 498 1252 l 740 1252 l 551 1039 l 365 1039 z "},"ć":{"ha":722,"x_min":35,"x_max":689,"o":"m 374 163 l 374 163 q 449 189 422 163 q 475 262 475 215 l 475 262 l 689 262 q 603 64 689 141 q 380 -14 516 -14 l 380 -14 q 127 87 220 -14 q 35 365 35 187 l 35 365 l 35 374 q 76 571 35 486 q 195 702 117 656 q 378 747 272 747 l 378 747 q 605 668 521 747 q 689 453 689 589 l 689 453 l 475 453 q 447 541 475 510 q 372 571 419 571 l 372 571 q 269 458 283 571 l 269 458 q 264 359 264 422 l 264 359 q 290 205 264 248 q 374 163 317 163 z m 259 829 l 393 1042 l 634 1042 l 446 829 l 259 829 z "},"Ĉ":{"ha":911,"x_min":47,"x_max":876,"o":"m 637 334 l 873 334 q 818 152 869 231 q 675 30 767 73 q 465 -14 583 -14 l 465 -14 q 159 113 271 -14 q 47 471 47 240 l 47 471 l 47 520 q 97 774 47 665 q 243 942 148 883 q 463 1002 338 1002 l 463 1002 q 751 907 642 1002 q 876 646 861 812 l 876 646 l 638 646 q 593 776 635 736 q 463 815 550 815 l 463 815 q 332 749 374 815 q 289 536 291 682 l 289 536 l 289 467 q 329 241 289 309 q 465 173 368 173 l 465 173 q 591 212 547 173 q 637 334 634 250 l 637 334 z m 535 1252 l 758 1061 l 758 1053 l 577 1053 l 469 1145 l 361 1053 l 185 1053 l 185 1064 l 404 1252 l 535 1252 z "},"ĉ":{"ha":722,"x_min":35,"x_max":689,"o":"m 374 163 l 374 163 q 449 189 422 163 q 475 262 475 215 l 475 262 l 689 262 q 603 64 689 141 q 380 -14 516 -14 l 380 -14 q 127 87 220 -14 q 35 365 35 187 l 35 365 l 35 374 q 76 571 35 486 q 195 702 117 656 q 378 747 272 747 l 378 747 q 605 668 521 747 q 689 453 689 589 l 689 453 l 475 453 q 447 541 475 510 q 372 571 419 571 l 372 571 q 269 458 283 571 l 269 458 q 264 359 264 422 l 264 359 q 290 205 264 248 q 374 163 317 163 z m 429 1042 l 652 851 l 652 842 l 471 842 l 363 935 l 256 842 l 79 842 l 79 854 l 298 1042 l 429 1042 z "},"Ċ":{"ha":911,"x_min":47,"x_max":876,"o":"m 637 334 l 873 334 q 818 152 869 231 q 675 30 767 73 q 465 -14 583 -14 l 465 -14 q 159 113 271 -14 q 47 471 47 240 l 47 471 l 47 520 q 97 774 47 665 q 243 942 148 883 q 463 1002 338 1002 l 463 1002 q 751 907 642 1002 q 876 646 861 812 l 876 646 l 638 646 q 593 776 635 736 q 463 815 550 815 l 463 815 q 332 749 374 815 q 289 536 291 682 l 289 536 l 289 467 q 329 241 289 309 q 465 173 368 173 l 465 173 q 591 212 547 173 q 637 334 634 250 l 637 334 z m 356 1160 l 356 1160 q 388 1232 356 1204 q 469 1260 420 1260 l 469 1260 q 549 1232 517 1260 q 581 1160 581 1204 l 581 1160 q 549 1089 581 1117 q 469 1061 517 1061 l 469 1061 q 388 1089 420 1061 q 356 1160 356 1117 z "},"ċ":{"ha":722,"x_min":35,"x_max":689,"o":"m 374 163 l 374 163 q 449 189 422 163 q 475 262 475 215 l 475 262 l 689 262 q 603 64 689 141 q 380 -14 516 -14 l 380 -14 q 127 87 220 -14 q 35 365 35 187 l 35 365 l 35 374 q 76 571 35 486 q 195 702 117 656 q 378 747 272 747 l 378 747 q 605 668 521 747 q 689 453 689 589 l 689 453 l 475 453 q 447 541 475 510 q 372 571 419 571 l 372 571 q 269 458 283 571 l 269 458 q 264 359 264 422 l 264 359 q 290 205 264 248 q 374 163 317 163 z m 250 950 l 250 950 q 282 1022 250 994 q 363 1050 314 1050 l 363 1050 q 443 1022 411 1050 q 475 950 475 994 l 475 950 q 443 879 475 907 q 363 851 411 851 l 363 851 q 282 879 314 851 q 250 950 250 907 z "},"Č":{"ha":911,"x_min":47,"x_max":876,"o":"m 637 334 l 873 334 q 818 152 869 231 q 675 30 767 73 q 465 -14 583 -14 l 465 -14 q 159 113 271 -14 q 47 471 47 240 l 47 471 l 47 520 q 97 774 47 665 q 243 942 148 883 q 463 1002 338 1002 l 463 1002 q 751 907 642 1002 q 876 646 861 812 l 876 646 l 638 646 q 593 776 635 736 q 463 815 550 815 l 463 815 q 332 749 374 815 q 289 536 291 682 l 289 536 l 289 467 q 329 241 289 309 q 465 173 368 173 l 465 173 q 591 212 547 173 q 637 334 634 250 l 637 334 z m 370 1253 l 469 1162 l 569 1253 l 764 1253 l 764 1245 l 543 1053 l 395 1053 l 173 1246 l 173 1253 l 370 1253 z "},"č":{"ha":722,"x_min":35,"x_max":689,"o":"m 374 163 l 374 163 q 449 189 422 163 q 475 262 475 215 l 475 262 l 689 262 q 603 64 689 141 q 380 -14 516 -14 l 380 -14 q 127 87 220 -14 q 35 365 35 187 l 35 365 l 35 374 q 76 571 35 486 q 195 702 117 656 q 378 747 272 747 l 378 747 q 605 668 521 747 q 689 453 689 589 l 689 453 l 475 453 q 447 541 475 510 q 372 571 419 571 l 372 571 q 269 458 283 571 l 269 458 q 264 359 264 422 l 264 359 q 290 205 264 248 q 374 163 317 163 z m 264 1042 l 363 951 l 463 1042 l 658 1042 l 658 1035 l 437 843 l 290 843 l 67 1036 l 67 1042 l 264 1042 z "},"Ď":{"ha":898,"x_min":31,"x_max":850,"o":"m 399 0 l 75 0 l 75 987 l 393 987 q 628 928 524 987 q 791 761 732 869 q 850 518 850 652 l 850 518 l 850 473 q 793 230 850 337 q 632 61 736 122 q 399 0 528 1 l 399 0 z m 393 804 l 313 804 l 313 183 l 395 183 q 553 256 498 183 q 608 473 608 329 l 608 473 l 608 515 q 553 731 608 659 q 393 804 498 804 l 393 804 z m 227 1253 l 327 1162 l 427 1253 l 621 1253 l 621 1245 l 400 1053 l 253 1053 l 31 1246 l 31 1253 l 227 1253 z "},"ď":{"ha":883,"x_min":35,"x_max":979,"o":"m 35 372 l 35 372 q 111 647 35 547 q 321 747 186 747 l 321 747 q 486 670 419 747 l 486 670 l 486 1042 l 715 1042 l 715 0 l 510 0 l 498 79 q 319 -14 428 -14 l 319 -14 q 112 87 189 -14 q 35 372 35 187 z m 264 400 l 264 358 q 378 163 264 163 l 378 163 q 486 227 454 163 l 486 227 l 486 506 q 379 571 455 571 l 379 571 q 264 400 273 571 l 264 400 z m 883 750 l 883 750 l 775 804 l 793 836 q 827 982 827 899 l 827 982 l 827 1042 l 979 1042 l 979 992 q 952 866 979 934 q 883 750 926 799 z "},"Ē":{"ha":777,"x_min":75,"x_max":756,"o":"m 687 595 l 687 418 l 313 418 l 313 183 l 755 183 l 755 0 l 75 0 l 75 987 l 756 987 l 756 804 l 313 804 l 313 595 l 687 595 z m 671 1195 l 671 1078 l 201 1078 l 201 1195 l 671 1195 z "},"ē":{"ha":756,"x_min":41,"x_max":728,"o":"m 419 -14 l 419 -14 q 146 87 250 -14 q 41 349 41 188 l 41 349 l 41 368 q 83 567 41 481 q 205 700 125 653 q 395 747 285 747 l 395 747 q 639 651 549 747 q 728 384 728 555 l 728 384 l 728 295 l 274 295 q 328 198 286 233 q 435 163 369 163 l 435 163 q 604 239 543 163 l 604 239 l 709 115 q 588 21 666 56 q 419 -14 509 -14 z m 393 571 l 393 571 q 274 438 293 571 l 274 438 l 505 438 l 505 456 q 477 541 506 511 q 393 571 448 571 z m 597 986 l 597 869 l 126 869 l 126 986 l 597 986 z "},"Ĕ":{"ha":777,"x_min":75,"x_max":756,"o":"m 687 595 l 687 418 l 313 418 l 313 183 l 755 183 l 755 0 l 75 0 l 75 987 l 756 987 l 756 804 l 313 804 l 313 595 l 687 595 z m 531 1253 l 688 1253 q 619 1103 688 1160 q 437 1045 551 1045 q 254 1103 323 1045 q 186 1253 186 1160 l 186 1253 l 341 1253 q 367 1190 341 1213 q 437 1167 392 1167 q 506 1189 481 1167 q 531 1253 531 1211 l 531 1253 z "},"ĕ":{"ha":756,"x_min":41,"x_max":728,"o":"m 419 -14 l 419 -14 q 146 87 250 -14 q 41 349 41 188 l 41 349 l 41 368 q 83 567 41 481 q 205 700 125 653 q 395 747 285 747 l 395 747 q 639 651 549 747 q 728 384 728 555 l 728 384 l 728 295 l 274 295 q 328 198 286 233 q 435 163 369 163 l 435 163 q 604 239 543 163 l 604 239 l 709 115 q 588 21 666 56 q 419 -14 509 -14 z m 393 571 l 393 571 q 274 438 293 571 l 274 438 l 505 438 l 505 456 q 477 541 506 511 q 393 571 448 571 z m 456 1044 l 613 1044 q 545 893 613 951 q 362 836 476 836 q 180 893 248 836 q 111 1044 111 951 l 111 1044 l 267 1044 q 292 980 267 1003 q 362 958 317 958 q 432 980 407 958 q 456 1044 456 1002 l 456 1044 z "},"Ė":{"ha":777,"x_min":75,"x_max":756,"o":"m 687 595 l 687 418 l 313 418 l 313 183 l 755 183 l 755 0 l 75 0 l 75 987 l 756 987 l 756 804 l 313 804 l 313 595 l 687 595 z m 323 1160 l 323 1160 q 355 1232 323 1204 q 435 1260 387 1260 l 435 1260 q 515 1232 484 1260 q 547 1160 547 1204 l 547 1160 q 515 1089 547 1117 q 435 1061 484 1061 l 435 1061 q 355 1089 387 1061 q 323 1160 323 1117 z "},"ė":{"ha":756,"x_min":41,"x_max":728,"o":"m 419 -14 l 419 -14 q 146 87 250 -14 q 41 349 41 188 l 41 349 l 41 368 q 83 567 41 481 q 205 700 125 653 q 395 747 285 747 l 395 747 q 639 651 549 747 q 728 384 728 555 l 728 384 l 728 295 l 274 295 q 328 198 286 233 q 435 163 369 163 l 435 163 q 604 239 543 163 l 604 239 l 709 115 q 588 21 666 56 q 419 -14 509 -14 z m 393 571 l 393 571 q 274 438 293 571 l 274 438 l 505 438 l 505 456 q 477 541 506 511 q 393 571 448 571 z m 248 951 l 248 951 q 280 1023 248 995 q 361 1050 312 1050 l 361 1050 q 441 1023 409 1050 q 473 951 473 995 l 473 951 q 441 880 473 907 q 361 852 409 852 l 361 852 q 280 880 312 852 q 248 951 248 907 z "},"Ę":{"ha":777,"x_min":75,"x_max":756,"o":"m 687 595 l 687 418 l 313 418 l 313 183 l 755 183 l 755 0 l 623 0 q 547 -51 570 -26 q 524 -109 524 -75 l 524 -109 q 565 -151 524 -151 l 565 -151 q 612 -139 585 -151 l 612 -139 l 637 -253 q 525 -283 588 -283 l 525 -283 q 405 -243 450 -283 q 360 -138 360 -204 l 360 -138 q 428 0 360 -54 l 428 0 l 75 0 l 75 987 l 756 987 l 756 804 l 313 804 l 313 595 l 687 595 z "},"ę":{"ha":756,"x_min":41,"x_max":728,"o":"m 604 239 l 709 115 q 595 24 670 60 l 595 24 l 597 24 q 521 -27 544 -3 q 498 -85 498 -51 l 498 -85 q 539 -127 498 -127 l 539 -127 q 586 -115 559 -127 l 586 -115 l 612 -229 q 499 -259 562 -259 l 499 -259 q 379 -220 425 -259 q 334 -114 334 -180 l 334 -114 q 368 -11 334 -52 l 368 -11 q 131 102 220 5 q 41 348 41 200 l 41 348 l 41 368 q 83 567 41 481 q 205 700 125 653 q 395 747 285 747 l 395 747 q 639 651 549 747 q 728 384 728 555 l 728 384 l 728 295 l 274 295 q 328 198 286 233 q 435 163 369 163 l 435 163 q 604 239 543 163 l 604 239 z m 393 571 l 393 571 q 274 438 293 571 l 274 438 l 505 438 l 505 456 q 477 541 506 511 q 393 571 448 571 z "},"Ě":{"ha":777,"x_min":75,"x_max":756,"o":"m 687 595 l 687 418 l 313 418 l 313 183 l 755 183 l 755 0 l 75 0 l 75 987 l 756 987 l 756 804 l 313 804 l 313 595 l 687 595 z m 336 1253 l 436 1162 l 536 1253 l 730 1253 l 730 1245 l 509 1053 l 362 1053 l 140 1246 l 140 1253 l 336 1253 z "},"ě":{"ha":756,"x_min":41,"x_max":728,"o":"m 419 -14 l 419 -14 q 146 87 250 -14 q 41 349 41 188 l 41 349 l 41 368 q 83 567 41 481 q 205 700 125 653 q 395 747 285 747 l 395 747 q 639 651 549 747 q 728 384 728 555 l 728 384 l 728 295 l 274 295 q 328 198 286 233 q 435 163 369 163 l 435 163 q 604 239 543 163 l 604 239 l 709 115 q 588 21 666 56 q 419 -14 509 -14 z m 393 571 l 393 571 q 274 438 293 571 l 274 438 l 505 438 l 505 456 q 477 541 506 511 q 393 571 448 571 z m 262 1043 l 361 952 l 461 1043 l 656 1043 l 656 1036 l 435 844 l 288 844 l 65 1037 l 65 1043 l 262 1043 z "},"Ĝ":{"ha":947,"x_min":56,"x_max":883,"o":"m 883 528 l 883 122 q 722 24 828 61 q 490 -14 616 -14 l 490 -14 q 180 105 296 -14 q 56 435 64 224 l 56 435 l 56 521 q 107 775 56 667 q 255 943 159 884 q 477 1002 351 1002 l 477 1002 q 763 917 661 1002 q 882 665 865 833 l 882 665 l 653 665 q 600 783 641 748 q 485 819 559 819 l 485 819 q 347 743 395 819 q 297 526 298 667 l 297 526 l 297 466 q 348 244 297 318 q 507 170 398 170 l 507 170 q 645 211 600 170 l 645 211 l 645 364 l 479 364 l 479 528 l 883 528 z m 547 1252 l 769 1061 l 769 1053 l 589 1053 l 481 1145 l 373 1053 l 197 1053 l 197 1064 l 416 1252 l 547 1252 z "},"ĝ":{"ha":799,"x_min":37,"x_max":733,"o":"m 37 364 l 37 372 q 74 569 37 484 q 179 701 111 654 q 338 747 248 747 l 338 747 q 517 670 453 747 l 517 670 l 526 734 l 733 734 l 733 28 q 688 -141 733 -69 q 557 -251 643 -212 q 359 -289 472 -289 l 359 -289 q 203 -258 279 -289 q 87 -179 127 -228 l 87 -179 l 183 -45 q 351 -120 247 -120 l 351 -120 q 503 36 503 -120 l 503 36 l 503 59 q 337 -14 437 -14 l 337 -14 q 120 89 203 -14 q 37 364 37 192 l 37 364 z m 267 358 l 267 358 q 300 215 267 268 q 395 163 334 163 l 395 163 q 503 212 469 163 l 503 212 l 503 521 q 397 571 470 571 l 397 571 q 301 516 336 571 q 267 358 267 462 z m 441 1042 l 663 851 l 663 842 l 483 842 l 375 935 l 267 842 l 91 842 l 91 854 l 310 1042 l 441 1042 z "},"Ğ":{"ha":947,"x_min":56,"x_max":883,"o":"m 883 528 l 883 122 q 722 24 828 61 q 490 -14 616 -14 l 490 -14 q 180 105 296 -14 q 56 435 64 224 l 56 435 l 56 521 q 107 775 56 667 q 255 943 159 884 q 477 1002 351 1002 l 477 1002 q 763 917 661 1002 q 882 665 865 833 l 882 665 l 653 665 q 600 783 641 748 q 485 819 559 819 l 485 819 q 347 743 395 819 q 297 526 298 667 l 297 526 l 297 466 q 348 244 297 318 q 507 170 398 170 l 507 170 q 645 211 600 170 l 645 211 l 645 364 l 479 364 l 479 528 l 883 528 z m 576 1253 l 732 1253 q 664 1103 732 1160 q 481 1045 595 1045 q 299 1103 368 1045 q 231 1253 231 1160 l 231 1253 l 386 1253 q 411 1190 386 1213 q 481 1167 437 1167 q 551 1189 526 1167 q 576 1253 576 1211 l 576 1253 z "},"ğ":{"ha":799,"x_min":37,"x_max":733,"o":"m 37 364 l 37 372 q 74 569 37 484 q 179 701 111 654 q 338 747 248 747 l 338 747 q 517 670 453 747 l 517 670 l 526 734 l 733 734 l 733 28 q 688 -141 733 -69 q 557 -251 643 -212 q 359 -289 472 -289 l 359 -289 q 203 -258 279 -289 q 87 -179 127 -228 l 87 -179 l 183 -45 q 351 -120 247 -120 l 351 -120 q 503 36 503 -120 l 503 36 l 503 59 q 337 -14 437 -14 l 337 -14 q 120 89 203 -14 q 37 364 37 192 l 37 364 z m 267 358 l 267 358 q 300 215 267 268 q 395 163 334 163 l 395 163 q 503 212 469 163 l 503 212 l 503 521 q 397 571 470 571 l 397 571 q 301 516 336 571 q 267 358 267 462 z m 470 1043 l 627 1043 q 558 892 627 950 q 376 835 490 835 q 193 892 262 835 q 125 1043 125 950 l 125 1043 l 280 1043 q 306 980 280 1002 q 376 957 331 957 q 445 979 420 957 q 470 1043 470 1001 l 470 1043 z "},"Ġ":{"ha":947,"x_min":56,"x_max":883,"o":"m 883 528 l 883 122 q 722 24 828 61 q 490 -14 616 -14 l 490 -14 q 180 105 296 -14 q 56 435 64 224 l 56 435 l 56 521 q 107 775 56 667 q 255 943 159 884 q 477 1002 351 1002 l 477 1002 q 763 917 661 1002 q 882 665 865 833 l 882 665 l 653 665 q 600 783 641 748 q 485 819 559 819 l 485 819 q 347 743 395 819 q 297 526 298 667 l 297 526 l 297 466 q 348 244 297 318 q 507 170 398 170 l 507 170 q 645 211 600 170 l 645 211 l 645 364 l 479 364 l 479 528 l 883 528 z m 368 1160 l 368 1160 q 399 1232 368 1204 q 480 1260 431 1260 l 480 1260 q 560 1232 528 1260 q 592 1160 592 1204 l 592 1160 q 560 1089 592 1117 q 480 1061 528 1061 l 480 1061 q 399 1089 431 1061 q 368 1160 368 1117 z "},"ġ":{"ha":799,"x_min":37,"x_max":733,"o":"m 37 364 l 37 372 q 74 569 37 484 q 179 701 111 654 q 338 747 248 747 l 338 747 q 517 670 453 747 l 517 670 l 526 734 l 733 734 l 733 28 q 688 -141 733 -69 q 557 -251 643 -212 q 359 -289 472 -289 l 359 -289 q 203 -258 279 -289 q 87 -179 127 -228 l 87 -179 l 183 -45 q 351 -120 247 -120 l 351 -120 q 503 36 503 -120 l 503 36 l 503 59 q 337 -14 437 -14 l 337 -14 q 120 89 203 -14 q 37 364 37 192 l 37 364 z m 267 358 l 267 358 q 300 215 267 268 q 395 163 334 163 l 395 163 q 503 212 469 163 l 503 212 l 503 521 q 397 571 470 571 l 397 571 q 301 516 336 571 q 267 358 267 462 z m 262 950 l 262 950 q 294 1022 262 994 q 374 1050 326 1050 l 374 1050 q 454 1022 422 1050 q 486 950 486 994 l 486 950 q 454 879 486 907 q 374 851 422 851 l 374 851 q 294 879 326 851 q 262 950 262 907 z "},"Ģ":{"ha":947,"x_min":56,"x_max":883,"o":"m 883 528 l 883 122 q 722 24 828 61 q 490 -14 616 -14 l 490 -14 q 180 105 296 -14 q 56 435 64 224 l 56 435 l 56 521 q 107 775 56 667 q 255 943 159 884 q 477 1002 351 1002 l 477 1002 q 763 917 661 1002 q 882 665 865 833 l 882 665 l 653 665 q 600 783 641 748 q 485 819 559 819 l 485 819 q 347 743 395 819 q 297 526 298 667 l 297 526 l 297 466 q 348 244 297 318 q 507 170 398 170 l 507 170 q 645 211 600 170 l 645 211 l 645 364 l 479 364 l 479 528 l 883 528 z m 474 -349 l 474 -349 l 366 -295 l 384 -264 q 418 -117 418 -200 l 418 -117 l 418 -57 l 570 -57 l 570 -107 q 543 -233 570 -165 q 474 -349 517 -300 z "},"ģ":{"ha":799,"x_min":37,"x_max":733,"o":"m 37 364 l 37 372 q 74 569 37 484 q 179 701 111 654 q 338 747 248 747 l 338 747 q 517 670 453 747 l 517 670 l 526 734 l 733 734 l 733 28 q 688 -141 733 -69 q 557 -251 643 -212 q 359 -289 472 -289 l 359 -289 q 203 -258 279 -289 q 87 -179 127 -228 l 87 -179 l 183 -45 q 351 -120 247 -120 l 351 -120 q 503 36 503 -120 l 503 36 l 503 59 q 337 -14 437 -14 l 337 -14 q 120 89 203 -14 q 37 364 37 192 l 37 364 z m 267 358 l 267 358 q 300 215 267 268 q 395 163 334 163 l 395 163 q 503 212 469 163 l 503 212 l 503 521 q 397 571 470 571 l 397 571 q 301 516 336 571 q 267 358 267 462 z m 387 1173 l 387 1173 l 501 1124 q 454 952 456 1029 l 454 952 l 452 855 l 292 855 l 292 937 q 387 1173 292 1116 z "},"Ĥ":{"ha":976,"x_min":75,"x_max":900,"o":"m 900 987 l 900 0 l 663 0 l 663 412 l 313 412 l 313 0 l 75 0 l 75 987 l 313 987 l 313 595 l 663 595 l 663 987 l 900 987 z m 559 1252 l 781 1061 l 781 1053 l 601 1053 l 493 1145 l 385 1053 l 209 1053 l 209 1064 l 428 1252 l 559 1252 z "},"ĥ":{"ha":784,"x_min":59,"x_max":721,"o":"m 288 1042 l 288 655 q 475 747 361 747 l 475 747 q 658 675 596 747 q 721 463 720 604 l 721 463 l 721 0 l 492 0 l 492 458 q 468 544 492 516 q 387 571 444 571 l 387 571 q 288 526 317 571 l 288 526 l 288 0 l 59 0 l 59 1042 l 288 1042 z m 429 1315 l 651 1124 l 651 1116 l 471 1116 l 363 1208 l 255 1116 l 79 1116 l 79 1127 l 298 1315 l 429 1315 z "},"Ĩ":{"ha":419,"x_min":-53,"x_max":471,"o":"m 328 987 l 328 0 l 91 0 l 91 987 l 328 987 z m 345 1253 l 471 1246 q 426 1115 471 1168 q 315 1061 381 1061 l 315 1061 q 215 1089 270 1061 q 126 1118 160 1118 l 126 1118 q 89 1103 104 1118 q 74 1057 74 1088 l 74 1057 l -53 1063 q -8 1194 -53 1139 q 103 1249 37 1249 l 103 1249 q 192 1224 137 1249 q 261 1196 247 1199 q 292 1192 276 1192 l 292 1192 q 330 1207 314 1192 q 345 1253 345 1222 l 345 1253 z "},"ĩ":{"ha":396,"x_min":-63,"x_max":461,"o":"m 313 734 l 313 0 l 83 0 l 83 734 l 313 734 z m 335 1029 l 461 1022 q 416 891 461 945 q 304 837 371 837 l 304 837 q 205 865 260 837 q 116 894 150 894 l 116 894 q 79 879 94 894 q 64 833 64 864 l 64 833 l -63 840 q -18 970 -63 915 q 93 1025 27 1025 l 93 1025 q 182 1000 127 1025 q 251 972 237 975 q 282 968 266 968 l 282 968 q 319 983 304 968 q 335 1029 335 998 l 335 1029 z "},"Ī":{"ha":419,"x_min":-26,"x_max":445,"o":"m 328 987 l 328 0 l 91 0 l 91 987 l 328 987 z m 445 1195 l 445 1078 l -26 1078 l -26 1195 l 445 1195 z "},"ī":{"ha":396,"x_min":-36,"x_max":435,"o":"m 313 734 l 313 0 l 83 0 l 83 734 l 313 734 z m 435 971 l 435 854 l -36 854 l -36 971 l 435 971 z "},"Ĭ":{"ha":419,"x_min":-41,"x_max":461,"o":"m 328 987 l 328 0 l 91 0 l 91 987 l 328 987 z m 304 1253 l 461 1253 q 393 1103 461 1160 q 210 1045 324 1045 q 28 1103 96 1045 q -41 1253 -41 1160 l -41 1253 l 115 1253 q 140 1190 115 1213 q 210 1167 165 1167 q 280 1189 255 1167 q 304 1253 304 1211 l 304 1253 z "},"ĭ":{"ha":396,"x_min":-51,"x_max":451,"o":"m 313 734 l 313 0 l 83 0 l 83 734 l 313 734 z m 294 1029 l 451 1029 q 382 879 451 937 q 200 821 314 821 q 18 879 86 821 q -51 1029 -51 937 l -51 1029 l 104 1029 q 130 966 104 989 q 200 943 155 943 q 270 965 245 943 q 294 1029 294 987 l 294 1029 z "},"Į":{"ha":419,"x_min":17,"x_max":328,"o":"m 328 987 l 328 0 l 91 0 l 91 987 l 328 987 z m 153 41 l 279 0 q 204 -51 227 -26 q 181 -109 181 -75 l 181 -109 q 222 -151 181 -151 l 222 -151 q 269 -139 242 -151 l 269 -139 l 294 -253 q 182 -283 245 -283 l 182 -283 q 62 -243 107 -283 q 17 -138 17 -204 l 17 -138 q 153 41 17 -20 l 153 41 z "},"į":{"ha":382,"x_min":5,"x_max":316,"o":"m 305 734 l 305 0 l 76 0 l 76 734 l 305 734 z m 62 923 l 62 923 q 98 1003 62 972 q 189 1034 133 1034 q 281 1003 245 1034 q 316 923 316 972 q 281 843 316 874 q 189 812 245 812 q 98 843 133 812 q 62 923 62 874 z m 142 41 l 268 0 q 192 -51 215 -26 q 170 -109 170 -75 l 170 -109 q 210 -151 170 -151 l 210 -151 q 257 -139 231 -151 l 257 -139 l 283 -253 q 170 -283 233 -283 l 170 -283 q 51 -243 96 -283 q 5 -138 5 -204 l 5 -138 q 142 41 5 -20 l 142 41 z "},"İ":{"ha":419,"x_min":91,"x_max":328,"o":"m 328 987 l 328 0 l 91 0 l 91 987 l 328 987 z m 96 1160 l 96 1160 q 127 1232 96 1204 q 208 1260 159 1260 l 208 1260 q 288 1232 256 1260 q 320 1160 320 1204 l 320 1160 q 288 1089 320 1117 q 208 1061 256 1061 l 208 1061 q 127 1089 159 1061 q 96 1160 96 1117 z "},"Ĳ":{"ha":1200,"x_min":91,"x_max":1124,"o":"m 328 987 l 328 0 l 91 0 l 91 987 l 328 987 z m 887 310 l 887 987 l 1124 987 l 1124 310 q 1081 142 1124 216 q 959 27 1037 68 q 784 -14 880 -14 l 784 -14 q 533 68 623 -14 q 444 298 444 149 l 444 298 l 682 298 q 706 200 682 231 q 784 170 729 170 l 784 170 q 860 207 833 170 q 887 310 887 243 l 887 310 z "},"ĳ":{"ha":757,"x_min":62,"x_max":699,"o":"m 305 734 l 305 0 l 76 0 l 76 734 l 305 734 z m 62 923 l 62 923 q 98 1003 62 972 q 189 1034 133 1034 q 281 1003 245 1034 q 316 923 316 972 q 281 843 316 874 q 189 812 245 812 q 98 843 133 812 q 62 923 62 874 z m 463 734 l 692 734 l 692 -25 q 617 -226 691 -155 q 411 -296 543 -296 l 411 -296 q 303 -285 354 -296 l 303 -285 l 303 -112 q 368 -118 342 -118 l 368 -118 q 463 -24 463 -118 l 463 -24 l 463 734 z m 446 923 l 446 923 q 481 1003 446 972 q 572 1034 516 1034 q 664 1003 629 1034 q 699 923 699 972 q 664 843 699 874 q 572 812 629 812 q 481 843 516 812 q 446 923 446 874 z "},"Ĵ":{"ha":781,"x_min":24,"x_max":871,"o":"m 468 310 l 468 987 l 705 987 l 705 310 q 662 142 705 216 q 539 27 618 68 q 365 -14 461 -14 l 365 -14 q 114 68 203 -14 q 24 298 24 149 l 24 298 l 263 298 q 287 200 263 231 q 365 170 310 170 l 365 170 q 441 207 414 170 q 468 310 468 243 l 468 310 z m 648 1252 l 871 1061 l 871 1053 l 690 1053 l 583 1145 l 475 1053 l 298 1053 l 298 1064 l 517 1252 l 648 1252 z "},"ĵ":{"ha":410,"x_min":-97,"x_max":475,"o":"m 94 734 l 323 734 l 323 -9 q 250 -222 323 -147 q 45 -296 176 -296 l 45 -296 q -62 -285 -13 -296 l -62 -285 l -52 -112 q 14 -120 -18 -120 l 14 -120 q 94 -7 94 -120 l 94 -7 l 94 734 z m 253 1028 l 475 838 l 475 829 l 295 829 l 187 921 l 79 829 l -97 829 l -97 840 l 122 1028 l 253 1028 z "},"Ķ":{"ha":888,"x_min":75,"x_max":903,"o":"m 621 0 l 410 368 l 313 260 l 313 0 l 75 0 l 75 987 l 313 987 l 313 552 l 395 677 l 608 987 l 903 987 l 569 551 l 903 0 l 621 0 z m 420 -313 l 420 -313 l 313 -259 l 330 -228 q 364 -81 364 -164 l 364 -81 l 364 -21 l 517 -21 l 517 -71 q 490 -197 516 -130 q 420 -313 463 -264 z "},"ķ":{"ha":760,"x_min":66,"x_max":781,"o":"m 519 0 l 359 273 l 294 209 l 294 0 l 66 0 l 66 1042 l 294 1042 l 294 489 l 317 519 l 490 734 l 764 734 l 507 432 l 781 0 l 519 0 z m 376 -328 l 376 -328 l 269 -274 l 286 -243 q 320 -96 320 -179 l 320 -96 l 320 -36 l 473 -36 l 473 -86 q 446 -212 472 -144 q 376 -328 419 -279 z "},"Ĺ":{"ha":753,"x_min":75,"x_max":727,"o":"m 313 987 l 313 183 l 727 183 l 727 0 l 75 0 l 75 987 l 313 987 z m 97 1039 l 231 1252 l 472 1252 l 283 1039 l 97 1039 z "},"ĺ":{"ha":382,"x_min":76,"x_max":461,"o":"m 305 1042 l 305 0 l 76 0 l 76 1042 l 305 1042 z m 86 1091 l 220 1304 l 461 1304 l 273 1091 l 86 1091 z "},"Ļ":{"ha":753,"x_min":75,"x_max":727,"o":"m 313 987 l 313 183 l 727 183 l 727 0 l 75 0 l 75 987 l 313 987 z m 384 -342 l 384 -342 l 276 -288 l 294 -257 q 328 -111 328 -193 l 328 -111 l 328 -50 l 480 -50 l 480 -100 q 453 -226 479 -159 q 384 -342 427 -294 z "},"ļ":{"ha":382,"x_min":65,"x_max":305,"o":"m 305 1042 l 305 0 l 76 0 l 76 1042 l 305 1042 z m 173 -342 l 173 -342 l 65 -288 l 83 -257 q 117 -111 117 -193 l 117 -111 l 117 -50 l 269 -50 l 269 -100 q 242 -226 269 -159 q 173 -342 216 -294 z "},"Ľ":{"ha":753,"x_min":75,"x_max":727,"o":"m 313 987 l 313 183 l 727 183 l 727 0 l 75 0 l 75 987 l 313 987 z m 548 696 l 548 696 l 440 750 l 458 781 q 492 928 492 845 l 492 928 l 492 988 l 644 988 l 644 938 q 617 812 644 880 q 548 696 591 745 z "},"ľ":{"ha":484,"x_min":76,"x_max":559,"o":"m 305 1042 l 305 0 l 76 0 l 76 1042 l 305 1042 z m 463 750 l 463 750 l 355 804 l 373 836 q 407 982 407 899 l 407 982 l 407 1042 l 559 1042 l 559 992 q 532 866 559 934 q 463 750 506 799 z "},"Ŀ":{"ha":753,"x_min":75,"x_max":727,"o":"m 313 987 l 313 183 l 727 183 l 727 0 l 75 0 l 75 987 l 313 987 z m 405 570 l 405 570 q 437 642 405 614 q 517 669 469 669 l 517 669 q 597 642 566 669 q 629 570 629 614 l 629 570 q 597 498 629 526 q 517 471 566 471 l 517 471 q 437 498 469 471 q 405 570 405 526 z "},"ŀ":{"ha":531,"x_min":76,"x_max":592,"o":"m 305 1042 l 305 0 l 76 0 l 76 1042 l 305 1042 z m 368 523 l 368 523 q 399 595 368 567 q 480 623 431 623 l 480 623 q 560 595 528 623 q 592 523 592 567 l 592 523 q 560 452 592 479 q 480 424 528 424 l 480 424 q 399 452 431 424 q 368 523 368 479 z "},"Ń":{"ha":975,"x_min":75,"x_max":899,"o":"m 899 987 l 899 0 l 663 0 l 313 614 l 313 0 l 75 0 l 75 987 l 313 987 l 662 373 l 662 987 l 899 987 z m 388 1039 l 522 1252 l 763 1252 l 574 1039 l 388 1039 z "},"ń":{"ha":783,"x_min":60,"x_max":721,"o":"m 60 734 l 274 734 l 281 648 q 491 747 357 747 l 491 747 q 662 679 606 747 q 721 473 719 610 l 721 473 l 721 0 l 492 0 l 492 463 q 469 545 492 519 q 388 571 447 571 l 388 571 q 288 518 321 571 l 288 518 l 288 0 l 60 0 l 60 734 z m 287 829 l 420 1042 l 662 1042 l 473 829 l 287 829 z "},"Ņ":{"ha":975,"x_min":75,"x_max":899,"o":"m 899 987 l 899 0 l 663 0 l 313 614 l 313 0 l 75 0 l 75 987 l 313 987 l 662 373 l 662 987 l 899 987 z m 475 -349 l 475 -349 l 367 -295 l 385 -264 q 418 -117 418 -200 l 418 -117 l 418 -57 l 571 -57 l 571 -107 q 544 -233 570 -165 q 475 -349 517 -300 z "},"ņ":{"ha":783,"x_min":60,"x_max":721,"o":"m 60 734 l 274 734 l 281 648 q 491 747 357 747 l 491 747 q 662 679 606 747 q 721 473 719 610 l 721 473 l 721 0 l 492 0 l 492 463 q 469 545 492 519 q 388 571 447 571 l 388 571 q 288 518 321 571 l 288 518 l 288 0 l 60 0 l 60 734 z m 375 -342 l 375 -342 l 267 -288 l 285 -257 q 319 -111 319 -193 l 319 -111 l 319 -50 l 471 -50 l 471 -100 q 444 -226 471 -159 q 375 -342 418 -294 z "},"Ň":{"ha":975,"x_min":75,"x_max":899,"o":"m 899 987 l 899 0 l 663 0 l 313 614 l 313 0 l 75 0 l 75 987 l 313 987 l 662 373 l 662 987 l 899 987 z m 393 1253 l 492 1162 l 592 1253 l 787 1253 l 787 1245 l 566 1053 l 418 1053 l 196 1246 l 196 1253 l 393 1253 z "},"ň":{"ha":783,"x_min":60,"x_max":721,"o":"m 60 734 l 274 734 l 281 648 q 491 747 357 747 l 491 747 q 662 679 606 747 q 721 473 719 610 l 721 473 l 721 0 l 492 0 l 492 463 q 469 545 492 519 q 388 571 447 571 l 388 571 q 288 518 321 571 l 288 518 l 288 0 l 60 0 l 60 734 z m 292 1042 l 391 951 l 491 1042 l 686 1042 l 686 1035 l 465 843 l 317 843 l 95 1036 l 95 1042 l 292 1042 z "},"ŉ":{"ha":783,"x_min":-89,"x_max":721,"o":"m 60 734 l 274 734 l 281 648 q 491 747 357 747 l 491 747 q 662 679 606 747 q 721 473 719 610 l 721 473 l 721 0 l 492 0 l 492 463 q 469 545 492 519 q 388 571 447 571 l 388 571 q 288 518 321 571 l 288 518 l 288 0 l 60 0 l 60 734 z m 19 749 l 19 749 l -89 803 l -71 834 q -37 981 -37 898 l -37 981 l -37 1041 l 115 1041 l 115 991 q 88 865 115 932 q 19 749 62 798 z "},"Ō":{"ha":959,"x_min":47,"x_max":911,"o":"m 911 519 l 911 473 q 857 218 911 329 q 705 46 804 106 q 480 -14 606 -14 q 256 44 354 -14 q 104 210 159 102 q 47 458 50 318 l 47 458 l 47 513 q 100 769 47 659 q 253 941 153 880 q 479 1001 352 1001 l 479 1001 q 703 941 604 1001 q 856 771 801 882 q 911 519 910 661 l 911 519 z m 669 469 l 669 515 q 620 738 669 662 q 479 814 570 814 l 479 814 q 290 546 300 814 l 290 546 l 289 473 q 337 250 289 328 q 480 172 385 172 l 480 172 q 619 249 570 172 q 669 469 668 326 l 669 469 z m 713 1195 l 713 1078 l 242 1078 l 242 1195 l 713 1195 z "},"ō":{"ha":780,"x_min":35,"x_max":743,"o":"m 36 335 l 35 374 q 78 569 35 484 q 201 701 121 655 q 389 747 281 747 l 389 747 q 648 645 553 747 q 743 368 743 543 l 743 368 l 743 359 q 648 87 743 188 q 390 -14 553 -14 l 390 -14 q 138 80 233 -14 q 36 335 43 174 l 36 335 z m 264 401 l 264 359 q 296 210 264 258 q 390 163 328 163 l 390 163 q 515 351 512 163 l 515 351 l 515 374 q 389 571 515 571 l 389 571 q 264 401 274 571 l 264 401 z m 626 985 l 626 868 l 155 868 l 155 985 l 626 985 z "},"Ŏ":{"ha":959,"x_min":47,"x_max":911,"o":"m 911 519 l 911 473 q 857 218 911 329 q 705 46 804 106 q 480 -14 606 -14 q 256 44 354 -14 q 104 210 159 102 q 47 458 50 318 l 47 458 l 47 513 q 100 769 47 659 q 253 941 153 880 q 479 1001 352 1001 l 479 1001 q 703 941 604 1001 q 856 771 801 882 q 911 519 910 661 l 911 519 z m 669 469 l 669 515 q 620 738 669 662 q 479 814 570 814 l 479 814 q 290 546 300 814 l 290 546 l 289 473 q 337 250 289 328 q 480 172 385 172 l 480 172 q 619 249 570 172 q 669 469 668 326 l 669 469 z m 572 1253 l 729 1253 q 661 1103 729 1160 q 478 1045 592 1045 q 296 1103 364 1045 q 227 1253 227 1160 l 227 1253 l 382 1253 q 408 1190 382 1213 q 478 1167 433 1167 q 548 1189 523 1167 q 572 1253 572 1211 l 572 1253 z "},"ŏ":{"ha":780,"x_min":35,"x_max":743,"o":"m 36 335 l 35 374 q 78 569 35 484 q 201 701 121 655 q 389 747 281 747 l 389 747 q 648 645 553 747 q 743 368 743 543 l 743 368 l 743 359 q 648 87 743 188 q 390 -14 553 -14 l 390 -14 q 138 80 233 -14 q 36 335 43 174 l 36 335 z m 264 401 l 264 359 q 296 210 264 258 q 390 163 328 163 l 390 163 q 515 351 512 163 l 515 351 l 515 374 q 389 571 515 571 l 389 571 q 264 401 274 571 l 264 401 z m 486 1043 l 642 1043 q 574 892 642 950 q 391 835 505 835 q 209 892 277 835 q 140 1043 140 950 l 140 1043 l 296 1043 q 321 980 296 1002 q 391 957 347 957 q 461 979 436 957 q 486 1043 486 1001 l 486 1043 z "},"Ő":{"ha":959,"x_min":47,"x_max":911,"o":"m 911 519 l 911 473 q 857 218 911 329 q 705 46 804 106 q 480 -14 606 -14 q 256 44 354 -14 q 104 210 159 102 q 47 458 50 318 l 47 458 l 47 513 q 100 769 47 659 q 253 941 153 880 q 479 1001 352 1001 l 479 1001 q 703 941 604 1001 q 856 771 801 882 q 911 519 910 661 l 911 519 z m 669 469 l 669 515 q 620 738 669 662 q 479 814 570 814 l 479 814 q 290 546 300 814 l 290 546 l 289 473 q 337 250 289 328 q 480 172 385 172 l 480 172 q 619 249 570 172 q 669 469 668 326 l 669 469 z m 516 1048 l 669 1251 l 857 1251 l 677 1048 l 516 1048 z m 252 1048 l 387 1251 l 576 1251 l 415 1048 l 252 1048 z "},"ő":{"ha":780,"x_min":35,"x_max":770,"o":"m 36 335 l 35 374 q 78 569 35 484 q 201 701 121 655 q 389 747 281 747 l 389 747 q 648 645 553 747 q 743 368 743 543 l 743 368 l 743 359 q 648 87 743 188 q 390 -14 553 -14 l 390 -14 q 138 80 233 -14 q 36 335 43 174 l 36 335 z m 264 401 l 264 359 q 296 210 264 258 q 390 163 328 163 l 390 163 q 515 351 512 163 l 515 351 l 515 374 q 389 571 515 571 l 389 571 q 264 401 274 571 l 264 401 z m 429 838 l 582 1041 l 770 1041 l 590 838 l 429 838 z m 165 838 l 300 1041 l 490 1041 l 328 838 l 165 838 z "},"Ŕ":{"ha":906,"x_min":75,"x_max":871,"o":"m 616 0 l 441 349 l 313 349 l 313 0 l 75 0 l 75 987 l 463 987 q 738 909 639 987 q 837 689 837 831 l 837 689 q 795 518 837 586 q 665 408 753 450 l 665 408 l 871 10 l 871 0 l 616 0 z m 313 804 l 313 532 l 463 532 q 565 568 531 532 q 600 667 600 604 q 565 767 600 731 q 463 804 530 804 l 463 804 l 313 804 z m 297 1039 l 431 1252 l 672 1252 l 484 1039 l 297 1039 z "},"ŕ":{"ha":526,"x_min":66,"x_max":550,"o":"m 512 739 l 508 527 l 433 532 q 294 465 325 532 l 294 465 l 294 0 l 66 0 l 66 734 l 280 734 l 288 640 q 448 747 345 747 l 448 747 q 512 739 485 747 l 512 739 z m 175 829 l 309 1042 l 550 1042 l 361 829 l 175 829 z "},"Ŗ":{"ha":906,"x_min":75,"x_max":871,"o":"m 616 0 l 441 349 l 313 349 l 313 0 l 75 0 l 75 987 l 463 987 q 738 909 639 987 q 837 689 837 831 l 837 689 q 795 518 837 586 q 665 408 753 450 l 665 408 l 871 10 l 871 0 l 616 0 z m 313 804 l 313 532 l 463 532 q 565 568 531 532 q 600 667 600 604 q 565 767 600 731 q 463 804 530 804 l 463 804 l 313 804 z m 398 -342 l 398 -342 l 290 -288 l 308 -257 q 342 -111 342 -193 l 342 -111 l 342 -50 l 494 -50 l 494 -100 q 467 -226 494 -159 q 398 -342 441 -294 z "},"ŗ":{"ha":526,"x_min":54,"x_max":512,"o":"m 512 739 l 508 527 l 433 532 q 294 465 325 532 l 294 465 l 294 0 l 66 0 l 66 734 l 280 734 l 288 640 q 448 747 345 747 l 448 747 q 512 739 485 747 l 512 739 z m 162 -342 l 162 -342 l 54 -288 l 72 -257 q 106 -111 106 -193 l 106 -111 l 106 -50 l 258 -50 l 258 -100 q 231 -226 258 -159 q 162 -342 205 -294 z "},"Ř":{"ha":906,"x_min":75,"x_max":871,"o":"m 616 0 l 441 349 l 313 349 l 313 0 l 75 0 l 75 987 l 463 987 q 738 909 639 987 q 837 689 837 831 l 837 689 q 795 518 837 586 q 665 408 753 450 l 665 408 l 871 10 l 871 0 l 616 0 z m 313 804 l 313 532 l 463 532 q 565 568 531 532 q 600 667 600 604 q 565 767 600 731 q 463 804 530 804 l 463 804 l 313 804 z m 302 1253 l 401 1162 l 501 1253 l 696 1253 l 696 1245 l 475 1053 l 328 1053 l 105 1246 l 105 1253 l 302 1253 z "},"ř":{"ha":526,"x_min":-16,"x_max":574,"o":"m 512 739 l 508 527 l 433 532 q 294 465 325 532 l 294 465 l 294 0 l 66 0 l 66 734 l 280 734 l 288 640 q 448 747 345 747 l 448 747 q 512 739 485 747 l 512 739 z m 180 1042 l 280 951 l 380 1042 l 574 1042 l 574 1035 l 353 843 l 206 843 l -16 1036 l -16 1042 l 180 1042 z "},"Ś":{"ha":869,"x_min":43,"x_max":822,"o":"m 584 262 l 584 262 q 547 344 584 315 q 417 404 510 373 q 265 465 324 435 l 265 465 q 73 724 73 559 l 73 724 q 121 868 73 806 q 256 966 169 931 q 453 1001 344 1001 l 453 1001 q 644 963 559 1001 q 775 855 728 925 q 822 694 822 785 l 822 694 l 585 694 q 548 788 585 755 q 448 821 511 821 l 448 821 q 347 793 384 821 q 310 722 310 765 l 310 722 q 351 653 310 684 q 494 589 391 622 q 662 518 596 556 l 662 518 q 822 264 822 426 l 822 264 q 724 60 822 134 q 456 -14 627 -14 l 456 -14 q 239 30 336 -14 q 93 148 142 73 q 43 320 43 222 l 43 320 l 282 320 q 323 203 282 241 q 456 165 364 165 l 456 165 q 550 191 515 165 q 584 262 584 216 z m 345 1039 l 478 1252 l 720 1252 l 531 1039 l 345 1039 z "},"ś":{"ha":711,"x_min":24,"x_max":670,"o":"m 448 206 l 448 206 q 418 253 448 235 q 302 290 387 271 q 161 339 216 309 q 76 414 105 370 q 47 515 47 458 l 47 515 q 130 682 47 616 q 349 747 214 747 l 349 747 q 582 682 494 747 q 670 509 670 616 l 670 509 l 441 509 q 348 597 441 597 l 348 597 q 288 577 312 597 q 263 527 263 557 l 263 527 q 293 477 263 496 q 388 446 323 458 q 503 417 454 434 l 503 417 q 669 213 669 360 l 669 213 q 579 50 669 113 q 349 -14 490 -14 l 349 -14 q 180 20 254 -14 q 65 113 106 54 q 24 235 24 171 l 24 235 l 237 235 q 271 161 239 184 q 355 138 304 138 l 355 138 q 425 157 401 138 q 448 206 448 176 z m 240 829 l 374 1042 l 615 1042 l 427 829 l 240 829 z "},"Ŝ":{"ha":869,"x_min":43,"x_max":822,"o":"m 584 262 l 584 262 q 547 344 584 315 q 417 404 510 373 q 265 465 324 435 l 265 465 q 73 724 73 559 l 73 724 q 121 868 73 806 q 256 966 169 931 q 453 1001 344 1001 l 453 1001 q 644 963 559 1001 q 775 855 728 925 q 822 694 822 785 l 822 694 l 585 694 q 548 788 585 755 q 448 821 511 821 l 448 821 q 347 793 384 821 q 310 722 310 765 l 310 722 q 351 653 310 684 q 494 589 391 622 q 662 518 596 556 l 662 518 q 822 264 822 426 l 822 264 q 724 60 822 134 q 456 -14 627 -14 l 456 -14 q 239 30 336 -14 q 93 148 142 73 q 43 320 43 222 l 43 320 l 282 320 q 323 203 282 241 q 456 165 364 165 l 456 165 q 550 191 515 165 q 584 262 584 216 z m 515 1252 l 737 1061 l 737 1053 l 557 1053 l 449 1145 l 341 1053 l 165 1053 l 165 1064 l 384 1252 l 515 1252 z "},"ŝ":{"ha":711,"x_min":24,"x_max":670,"o":"m 448 206 l 448 206 q 418 253 448 235 q 302 290 387 271 q 161 339 216 309 q 76 414 105 370 q 47 515 47 458 l 47 515 q 130 682 47 616 q 349 747 214 747 l 349 747 q 582 682 494 747 q 670 509 670 616 l 670 509 l 441 509 q 348 597 441 597 l 348 597 q 288 577 312 597 q 263 527 263 557 l 263 527 q 293 477 263 496 q 388 446 323 458 q 503 417 454 434 l 503 417 q 669 213 669 360 l 669 213 q 579 50 669 113 q 349 -14 490 -14 l 349 -14 q 180 20 254 -14 q 65 113 106 54 q 24 235 24 171 l 24 235 l 237 235 q 271 161 239 184 q 355 138 304 138 l 355 138 q 425 157 401 138 q 448 206 448 176 z m 411 1042 l 633 851 l 633 842 l 453 842 l 345 935 l 237 842 l 61 842 l 61 854 l 280 1042 l 411 1042 z "},"Ş":{"ha":869,"x_min":43,"x_max":822,"o":"m 584 262 l 584 262 q 547 344 584 315 q 417 404 510 373 q 265 465 324 435 l 265 465 q 73 724 73 559 l 73 724 q 121 868 73 806 q 256 966 169 931 q 453 1001 344 1001 l 453 1001 q 644 963 559 1001 q 775 855 728 925 q 822 694 822 785 l 822 694 l 585 694 q 548 788 585 755 q 448 821 511 821 l 448 821 q 347 793 384 821 q 310 722 310 765 l 310 722 q 351 653 310 684 q 494 589 391 622 q 662 518 596 556 l 662 518 q 822 264 822 426 l 822 264 q 724 60 822 134 q 456 -14 627 -14 l 456 -14 q 239 30 336 -14 q 93 148 142 73 q 43 320 43 222 l 43 320 l 282 320 q 323 203 282 241 q 456 165 364 165 l 456 165 q 550 191 515 165 q 584 262 584 216 z m 363 7 l 537 7 l 530 -35 q 632 -152 632 -54 l 632 -152 q 565 -275 632 -231 q 378 -320 498 -320 l 378 -320 l 374 -194 q 433 -142 433 -194 l 433 -142 q 412 -106 433 -116 q 342 -92 391 -96 l 342 -92 l 363 7 z "},"ş":{"ha":711,"x_min":24,"x_max":670,"o":"m 448 206 l 448 206 q 418 253 448 235 q 302 290 387 271 q 161 339 216 309 q 76 414 105 370 q 47 515 47 458 l 47 515 q 130 682 47 616 q 349 747 214 747 l 349 747 q 582 682 494 747 q 670 509 670 616 l 670 509 l 441 509 q 348 597 441 597 l 348 597 q 288 577 312 597 q 263 527 263 557 l 263 527 q 293 477 263 496 q 388 446 323 458 q 503 417 454 434 l 503 417 q 669 213 669 360 l 669 213 q 579 50 669 113 q 349 -14 490 -14 l 349 -14 q 180 20 254 -14 q 65 113 106 54 q 24 235 24 171 l 24 235 l 237 235 q 271 161 239 184 q 355 138 304 138 l 355 138 q 425 157 401 138 q 448 206 448 176 z m 260 1 l 433 1 l 427 -41 q 528 -158 528 -60 l 528 -158 q 461 -281 528 -237 q 275 -326 394 -326 l 275 -326 l 270 -200 q 330 -148 330 -200 l 330 -148 q 308 -112 330 -122 q 239 -98 287 -102 l 239 -98 l 260 1 z "},"Ș":{"ha":869,"x_min":43,"x_max":822,"o":"m 584 262 l 584 262 q 547 344 584 315 q 417 404 510 373 q 265 465 324 435 l 265 465 q 73 724 73 559 l 73 724 q 121 868 73 806 q 256 966 169 931 q 453 1001 344 1001 l 453 1001 q 644 963 559 1001 q 775 855 728 925 q 822 694 822 785 l 822 694 l 585 694 q 548 788 585 755 q 448 821 511 821 l 448 821 q 347 793 384 821 q 310 722 310 765 l 310 722 q 351 653 310 684 q 494 589 391 622 q 662 518 596 556 l 662 518 q 822 264 822 426 l 822 264 q 724 60 822 134 q 456 -14 627 -14 l 456 -14 q 239 30 336 -14 q 93 148 142 73 q 43 320 43 222 l 43 320 l 282 320 q 323 203 282 241 q 456 165 364 165 l 456 165 q 550 191 515 165 q 584 262 584 216 z m 431 -349 l 431 -349 l 323 -295 l 340 -264 q 374 -117 374 -200 l 374 -117 l 374 -57 l 527 -57 l 527 -107 q 500 -233 526 -165 q 431 -349 473 -300 z "},"ș":{"ha":711,"x_min":24,"x_max":670,"o":"m 448 206 l 448 206 q 418 253 448 235 q 302 290 387 271 q 161 339 216 309 q 76 414 105 370 q 47 515 47 458 l 47 515 q 130 682 47 616 q 349 747 214 747 l 349 747 q 582 682 494 747 q 670 509 670 616 l 670 509 l 441 509 q 348 597 441 597 l 348 597 q 288 577 312 597 q 263 527 263 557 l 263 527 q 293 477 263 496 q 388 446 323 458 q 503 417 454 434 l 503 417 q 669 213 669 360 l 669 213 q 579 50 669 113 q 349 -14 490 -14 l 349 -14 q 180 20 254 -14 q 65 113 106 54 q 24 235 24 171 l 24 235 l 237 235 q 271 161 239 184 q 355 138 304 138 l 355 138 q 425 157 401 138 q 448 206 448 176 z m 327 -356 l 327 -356 l 219 -302 l 237 -271 q 271 -124 271 -207 l 271 -124 l 271 -64 l 423 -64 l 423 -114 q 396 -240 422 -172 q 327 -356 370 -307 z "},"Š":{"ha":869,"x_min":43,"x_max":822,"o":"m 584 262 l 584 262 q 547 344 584 315 q 417 404 510 373 q 265 465 324 435 l 265 465 q 73 724 73 559 l 73 724 q 121 868 73 806 q 256 966 169 931 q 453 1001 344 1001 l 453 1001 q 644 963 559 1001 q 775 855 728 925 q 822 694 822 785 l 822 694 l 585 694 q 548 788 585 755 q 448 821 511 821 l 448 821 q 347 793 384 821 q 310 722 310 765 l 310 722 q 351 653 310 684 q 494 589 391 622 q 662 518 596 556 l 662 518 q 822 264 822 426 l 822 264 q 724 60 822 134 q 456 -14 627 -14 l 456 -14 q 239 30 336 -14 q 93 148 142 73 q 43 320 43 222 l 43 320 l 282 320 q 323 203 282 241 q 456 165 364 165 l 456 165 q 550 191 515 165 q 584 262 584 216 z m 349 1253 l 449 1162 l 549 1253 l 743 1253 l 743 1245 l 522 1053 l 375 1053 l 153 1246 l 153 1253 l 349 1253 z "},"š":{"ha":711,"x_min":24,"x_max":670,"o":"m 448 206 l 448 206 q 418 253 448 235 q 302 290 387 271 q 161 339 216 309 q 76 414 105 370 q 47 515 47 458 l 47 515 q 130 682 47 616 q 349 747 214 747 l 349 747 q 582 682 494 747 q 670 509 670 616 l 670 509 l 441 509 q 348 597 441 597 l 348 597 q 288 577 312 597 q 263 527 263 557 l 263 527 q 293 477 263 496 q 388 446 323 458 q 503 417 454 434 l 503 417 q 669 213 669 360 l 669 213 q 579 50 669 113 q 349 -14 490 -14 l 349 -14 q 180 20 254 -14 q 65 113 106 54 q 24 235 24 171 l 24 235 l 237 235 q 271 161 239 184 q 355 138 304 138 l 355 138 q 425 157 401 138 q 448 206 448 176 z m 245 1042 l 345 951 l 444 1042 l 639 1042 l 639 1035 l 418 843 l 271 843 l 48 1036 l 48 1042 l 245 1042 z "},"Ț":{"ha":876,"x_min":24,"x_max":850,"o":"m 850 987 l 850 804 l 553 804 l 553 0 l 315 0 l 315 804 l 24 804 l 24 987 l 850 987 z m 414 -342 l 414 -342 l 306 -288 l 323 -257 q 357 -111 357 -193 l 357 -111 l 357 -50 l 510 -50 l 510 -100 q 483 -226 509 -159 q 414 -342 456 -294 z "},"ț":{"ha":477,"x_min":8,"x_max":461,"o":"m 102 916 l 330 916 l 330 734 l 451 734 l 451 575 l 330 575 l 330 239 q 345 182 330 198 q 404 165 360 165 l 404 165 q 461 170 438 165 l 461 170 l 461 6 q 332 -14 399 -14 l 332 -14 q 158 42 214 -14 q 102 211 102 98 l 102 211 l 102 575 l 8 575 l 8 734 l 102 734 l 102 916 z m 268 -349 l 268 -349 l 160 -295 l 178 -264 q 212 -117 212 -200 l 212 -117 l 212 -57 l 364 -57 l 364 -107 q 337 -233 363 -165 q 268 -349 311 -300 z "},"Ţ":{"ha":876,"x_min":24,"x_max":850,"o":"m 850 987 l 850 804 l 553 804 l 553 0 l 315 0 l 315 804 l 24 804 l 24 987 l 850 987 z m 347 14 l 520 14 l 513 -28 q 615 -145 615 -47 l 615 -145 q 548 -269 615 -224 q 361 -313 481 -313 l 361 -313 l 357 -187 q 416 -135 416 -187 l 416 -135 q 395 -99 416 -109 q 326 -85 374 -89 l 326 -85 l 347 14 z "},"ţ":{"ha":477,"x_min":8,"x_max":469,"o":"m 102 916 l 330 916 l 330 734 l 451 734 l 451 575 l 330 575 l 330 239 q 345 182 330 198 q 404 165 360 165 l 404 165 q 461 170 438 165 l 461 170 l 461 6 q 332 -14 399 -14 l 332 -14 q 158 42 214 -14 q 102 211 102 98 l 102 211 l 102 575 l 8 575 l 8 734 l 102 734 l 102 916 z m 201 7 l 374 7 l 368 -35 q 469 -152 469 -54 l 469 -152 q 402 -275 469 -231 q 216 -320 335 -320 l 216 -320 l 211 -194 q 271 -142 271 -194 l 271 -142 q 249 -106 271 -116 q 180 -92 228 -96 l 180 -92 l 201 7 z "},"Ť":{"ha":876,"x_min":24,"x_max":850,"o":"m 850 987 l 850 804 l 553 804 l 553 0 l 315 0 l 315 804 l 24 804 l 24 987 l 850 987 z m 332 1253 l 431 1162 l 531 1253 l 726 1253 l 726 1245 l 505 1053 l 357 1053 l 135 1246 l 135 1253 l 332 1253 z "},"ť":{"ha":504,"x_min":8,"x_max":606,"o":"m 102 916 l 330 916 l 330 734 l 451 734 l 451 575 l 330 575 l 330 239 q 345 182 330 198 q 404 165 360 165 l 404 165 q 461 170 438 165 l 461 170 l 461 6 q 332 -14 399 -14 l 332 -14 q 158 42 214 -14 q 102 211 102 98 l 102 211 l 102 575 l 8 575 l 8 734 l 102 734 l 102 916 z m 509 840 l 509 840 l 401 894 l 419 925 q 453 1072 453 989 l 453 1072 l 453 1132 l 606 1132 l 606 1082 q 578 956 605 1023 q 509 840 552 888 z "},"Ũ":{"ha":923,"x_min":71,"x_max":849,"o":"m 611 987 l 849 987 l 849 341 q 802 151 849 231 q 668 28 755 71 q 461 -14 581 -14 l 461 -14 q 177 80 281 -14 q 71 336 73 174 l 71 336 l 71 987 l 311 987 l 311 332 q 461 170 315 170 l 461 170 q 573 210 535 170 q 611 342 611 251 l 611 342 l 611 987 z m 593 1253 l 719 1246 q 674 1115 719 1168 q 562 1061 629 1061 l 562 1061 q 463 1089 517 1061 q 374 1118 408 1118 l 374 1118 q 337 1103 352 1118 q 321 1057 321 1088 l 321 1057 l 195 1063 q 240 1194 195 1139 q 351 1249 285 1249 l 351 1249 q 439 1224 385 1249 q 509 1196 494 1199 q 540 1192 524 1192 l 540 1192 q 577 1207 562 1192 q 593 1253 593 1222 l 593 1253 z "},"ũ":{"ha":783,"x_min":60,"x_max":722,"o":"m 508 0 l 501 79 q 305 -14 429 -14 l 305 -14 q 122 57 184 -14 q 60 258 60 127 l 60 258 l 60 734 l 289 734 l 289 257 q 380 163 289 163 l 380 163 q 492 219 459 163 l 492 219 l 492 734 l 722 734 l 722 0 l 508 0 z m 526 1044 l 652 1036 q 607 905 652 959 q 496 851 562 851 l 496 851 q 396 880 451 851 q 307 908 341 908 l 307 908 q 270 893 286 908 q 255 847 255 878 l 255 847 l 128 854 q 173 984 128 929 q 284 1039 218 1039 l 284 1039 q 373 1014 318 1039 q 443 986 428 989 q 473 983 457 983 l 473 983 q 511 998 495 983 q 526 1044 526 1013 l 526 1044 z "},"Ū":{"ha":923,"x_min":71,"x_max":849,"o":"m 611 987 l 849 987 l 849 341 q 802 151 849 231 q 668 28 755 71 q 461 -14 581 -14 l 461 -14 q 177 80 281 -14 q 71 336 73 174 l 71 336 l 71 987 l 311 987 l 311 332 q 461 170 315 170 l 461 170 q 573 210 535 170 q 611 342 611 251 l 611 342 l 611 987 z m 692 1195 l 692 1078 l 222 1078 l 222 1195 l 692 1195 z "},"ū":{"ha":783,"x_min":60,"x_max":722,"o":"m 508 0 l 501 79 q 305 -14 429 -14 l 305 -14 q 122 57 184 -14 q 60 258 60 127 l 60 258 l 60 734 l 289 734 l 289 257 q 380 163 289 163 l 380 163 q 492 219 459 163 l 492 219 l 492 734 l 722 734 l 722 0 l 508 0 z m 626 985 l 626 868 l 155 868 l 155 985 l 626 985 z "},"Ŭ":{"ha":923,"x_min":71,"x_max":849,"o":"m 611 987 l 849 987 l 849 341 q 802 151 849 231 q 668 28 755 71 q 461 -14 581 -14 l 461 -14 q 177 80 281 -14 q 71 336 73 174 l 71 336 l 71 987 l 311 987 l 311 332 q 461 170 315 170 l 461 170 q 573 210 535 170 q 611 342 611 251 l 611 342 l 611 987 z m 552 1253 l 709 1253 q 640 1103 709 1160 q 458 1045 572 1045 q 275 1103 344 1045 q 207 1253 207 1160 l 207 1253 l 362 1253 q 388 1190 362 1213 q 458 1167 413 1167 q 527 1189 503 1167 q 552 1253 552 1211 l 552 1253 z "},"ŭ":{"ha":783,"x_min":60,"x_max":722,"o":"m 508 0 l 501 79 q 305 -14 429 -14 l 305 -14 q 122 57 184 -14 q 60 258 60 127 l 60 258 l 60 734 l 289 734 l 289 257 q 380 163 289 163 l 380 163 q 492 219 459 163 l 492 219 l 492 734 l 722 734 l 722 0 l 508 0 z m 486 1043 l 642 1043 q 574 892 642 950 q 391 835 505 835 q 209 892 277 835 q 140 1043 140 950 l 140 1043 l 296 1043 q 321 980 296 1002 q 391 957 347 957 q 461 979 436 957 q 486 1043 486 1001 l 486 1043 z "},"Ů":{"ha":923,"x_min":71,"x_max":849,"o":"m 611 987 l 849 987 l 849 341 q 802 151 849 231 q 668 28 755 71 q 461 -14 581 -14 l 461 -14 q 177 80 281 -14 q 71 336 73 174 l 71 336 l 71 987 l 311 987 l 311 332 q 461 170 315 170 l 461 170 q 573 210 535 170 q 611 342 611 251 l 611 342 l 611 987 z m 307 1173 l 307 1173 q 351 1271 307 1231 q 459 1310 395 1310 l 459 1310 q 567 1271 522 1310 q 611 1173 611 1231 l 611 1173 q 567 1076 611 1115 q 459 1038 524 1038 l 459 1038 q 350 1076 394 1038 q 307 1173 307 1115 z m 459 1102 l 459 1102 q 510 1122 492 1102 q 529 1173 529 1143 q 510 1223 529 1202 q 459 1244 492 1244 l 459 1244 q 407 1223 426 1244 q 389 1173 389 1202 q 407 1122 389 1143 q 459 1102 426 1102 z "},"ů":{"ha":783,"x_min":60,"x_max":722,"o":"m 508 0 l 501 79 q 305 -14 429 -14 l 305 -14 q 122 57 184 -14 q 60 258 60 127 l 60 258 l 60 734 l 289 734 l 289 257 q 380 163 289 163 l 380 163 q 492 219 459 163 l 492 219 l 492 734 l 722 734 l 722 0 l 508 0 z m 240 962 l 240 962 q 284 1060 240 1021 q 393 1100 329 1100 l 393 1100 q 500 1060 456 1100 q 545 962 545 1021 l 545 962 q 501 866 545 905 q 393 827 457 827 l 393 827 q 284 866 328 827 q 240 962 240 905 z m 393 892 l 393 892 q 444 912 425 892 q 463 962 463 932 q 444 1013 463 992 q 393 1034 425 1034 l 393 1034 q 341 1013 359 1034 q 322 962 322 992 q 341 912 322 932 q 393 892 359 892 z "},"Ű":{"ha":923,"x_min":71,"x_max":849,"o":"m 611 987 l 849 987 l 849 341 q 802 151 849 231 q 668 28 755 71 q 461 -14 581 -14 l 461 -14 q 177 80 281 -14 q 71 336 73 174 l 71 336 l 71 987 l 311 987 l 311 332 q 461 170 315 170 l 461 170 q 573 210 535 170 q 611 342 611 251 l 611 342 l 611 987 z m 496 1048 l 648 1251 l 837 1251 l 656 1048 l 496 1048 z m 232 1048 l 366 1251 l 556 1251 l 395 1048 l 232 1048 z "},"ű":{"ha":783,"x_min":60,"x_max":770,"o":"m 508 0 l 501 79 q 305 -14 429 -14 l 305 -14 q 122 57 184 -14 q 60 258 60 127 l 60 258 l 60 734 l 289 734 l 289 257 q 380 163 289 163 l 380 163 q 492 219 459 163 l 492 219 l 492 734 l 722 734 l 722 0 l 508 0 z m 429 838 l 582 1041 l 770 1041 l 590 838 l 429 838 z m 165 838 l 300 1041 l 490 1041 l 328 838 l 165 838 z "},"Ų":{"ha":923,"x_min":71,"x_max":849,"o":"m 611 987 l 849 987 l 849 341 q 710 52 848 146 l 710 52 l 713 52 q 637 1 660 25 q 614 -58 614 -23 l 614 -58 q 655 -100 614 -100 l 655 -100 q 702 -87 675 -100 l 702 -87 l 728 -201 q 615 -231 678 -231 l 615 -231 q 495 -192 541 -231 q 450 -86 450 -153 l 450 -86 q 465 -14 450 -46 l 465 -14 q 175 82 279 -14 q 71 345 71 177 l 71 345 l 71 987 l 311 987 l 311 332 q 461 170 315 170 l 461 170 q 573 210 535 170 q 611 342 611 251 l 611 342 l 611 987 z "},"ų":{"ha":783,"x_min":60,"x_max":722,"o":"m 722 0 l 693 0 q 617 -51 640 -26 q 595 -109 595 -75 l 595 -109 q 635 -151 595 -151 l 635 -151 q 682 -139 656 -151 l 682 -139 l 708 -253 q 595 -283 659 -283 l 595 -283 q 476 -243 521 -283 q 431 -138 431 -204 l 431 -138 q 507 7 431 -49 l 507 7 l 501 79 q 305 -14 429 -14 l 305 -14 q 122 57 184 -14 q 60 258 60 127 l 60 258 l 60 734 l 289 734 l 289 257 q 380 163 289 163 l 380 163 q 492 219 459 163 l 492 219 l 492 734 l 722 734 l 722 0 z "},"Ŵ":{"ha":1207,"x_min":14,"x_max":1189,"o":"m 702 987 l 840 368 l 953 987 l 1189 987 l 979 0 l 732 0 l 600 563 l 471 0 l 224 0 l 14 987 l 251 987 l 364 368 l 500 987 l 702 987 z m 671 1252 l 893 1061 l 893 1053 l 713 1053 l 605 1145 l 497 1053 l 321 1053 l 321 1064 l 540 1252 l 671 1252 z "},"ŵ":{"ha":1008,"x_min":15,"x_max":991,"o":"m 583 734 l 698 301 l 772 734 l 991 734 l 818 0 l 625 0 l 503 435 l 381 0 l 188 0 l 15 734 l 234 734 l 307 291 l 423 734 l 583 734 z m 569 1042 l 791 851 l 791 842 l 611 842 l 503 935 l 395 842 l 219 842 l 219 854 l 438 1042 l 569 1042 z "},"Ŷ":{"ha":872,"x_min":-2,"x_max":875,"o":"m 254 987 l 436 559 l 618 987 l 875 987 l 557 355 l 557 0 l 315 0 l 315 355 l -2 987 l 254 987 z m 502 1252 l 724 1061 l 724 1053 l 544 1053 l 436 1145 l 328 1053 l 152 1053 l 152 1064 l 371 1252 l 502 1252 z "},"ŷ":{"ha":720,"x_min":-3,"x_max":724,"o":"m 241 734 l 357 320 l 479 734 l 724 734 l 425 -123 l 412 -154 q 187 -296 349 -296 l 187 -296 q 93 -283 142 -296 l 93 -283 l 93 -119 l 123 -119 q 196 -105 171 -119 q 234 -56 222 -92 l 234 -56 l 252 -7 l -3 734 l 241 734 z m 424 1042 l 646 851 l 646 842 l 466 842 l 358 935 l 250 842 l 74 842 l 74 854 l 293 1042 l 424 1042 z "},"Ÿ":{"ha":872,"x_min":-2,"x_max":875,"o":"m 254 987 l 436 559 l 618 987 l 875 987 l 557 355 l 557 0 l 315 0 l 315 355 l -2 987 l 254 987 z m 157 1136 l 157 1136 q 186 1200 157 1173 q 259 1226 216 1226 q 332 1200 302 1226 q 361 1136 361 1173 q 332 1072 361 1099 q 259 1046 302 1046 q 186 1072 216 1046 q 157 1136 157 1099 z m 509 1136 l 509 1136 q 538 1200 509 1173 q 611 1226 568 1226 q 684 1200 654 1226 q 713 1136 713 1173 q 684 1072 713 1099 q 611 1046 654 1046 q 538 1072 568 1046 q 509 1136 509 1099 z "},"Ź":{"ha":847,"x_min":42,"x_max":814,"o":"m 809 865 l 342 183 l 814 183 l 814 0 l 45 0 l 45 125 l 515 804 l 42 804 l 42 987 l 809 987 l 809 865 z m 327 1039 l 460 1252 l 702 1252 l 513 1039 l 327 1039 z "},"ź":{"ha":715,"x_min":45,"x_max":668,"o":"m 661 610 l 334 176 l 668 176 l 668 0 l 45 0 l 45 127 l 370 557 l 59 557 l 59 734 l 661 734 l 661 610 z m 252 829 l 386 1042 l 627 1042 l 439 829 l 252 829 z "},"Ż":{"ha":847,"x_min":42,"x_max":814,"o":"m 809 865 l 342 183 l 814 183 l 814 0 l 45 0 l 45 125 l 515 804 l 42 804 l 42 987 l 809 987 l 809 865 z m 318 1160 l 318 1160 q 350 1232 318 1204 q 431 1260 382 1260 l 431 1260 q 511 1232 479 1260 q 543 1160 543 1204 l 543 1160 q 511 1089 543 1117 q 431 1061 479 1061 l 431 1061 q 350 1089 382 1061 q 318 1160 318 1117 z "},"ż":{"ha":715,"x_min":45,"x_max":668,"o":"m 661 610 l 334 176 l 668 176 l 668 0 l 45 0 l 45 127 l 370 557 l 59 557 l 59 734 l 661 734 l 661 610 z m 243 950 l 243 950 q 275 1022 243 994 q 356 1050 307 1050 l 356 1050 q 436 1022 404 1050 q 468 950 468 994 l 468 950 q 436 879 468 907 q 356 851 404 851 l 356 851 q 275 879 307 851 q 243 950 243 907 z "},"Ž":{"ha":847,"x_min":42,"x_max":814,"o":"m 809 865 l 342 183 l 814 183 l 814 0 l 45 0 l 45 125 l 515 804 l 42 804 l 42 987 l 809 987 l 809 865 z m 332 1253 l 431 1162 l 531 1253 l 726 1253 l 726 1245 l 505 1053 l 357 1053 l 135 1246 l 135 1253 l 332 1253 z "},"ž":{"ha":715,"x_min":45,"x_max":668,"o":"m 661 610 l 334 176 l 668 176 l 668 0 l 45 0 l 45 127 l 370 557 l 59 557 l 59 734 l 661 734 l 661 610 z m 257 1042 l 357 951 l 456 1042 l 651 1042 l 651 1035 l 430 843 l 283 843 l 60 1036 l 60 1042 l 257 1042 z "},"Ǽ":{"ha":1306,"x_min":11,"x_max":1255,"o":"m 1255 179 l 1255 0 l 647 0 l 637 223 l 378 223 l 275 0 l 11 0 l 509 987 l 1214 987 l 1214 808 l 842 808 l 850 594 l 1159 594 l 1159 415 l 858 415 l 868 179 l 1255 179 z m 616 736 l 463 406 l 630 406 l 616 736 z m 528 1047 l 662 1260 l 903 1260 l 715 1047 l 528 1047 z "},"ǽ":{"ha":1173,"x_min":41,"x_max":1143,"o":"m 840 -14 l 840 -14 q 582 77 677 -14 l 582 77 q 471 9 537 33 q 328 -14 404 -14 l 328 -14 q 117 48 193 -14 q 41 220 41 111 l 41 220 q 129 385 41 327 q 390 444 217 444 l 390 444 l 486 444 l 486 475 q 463 546 486 520 q 396 571 440 571 l 396 571 q 321 551 347 571 q 296 502 296 531 l 296 502 l 67 515 q 158 682 67 617 q 399 747 249 747 l 399 747 q 615 686 536 747 l 615 686 q 832 747 701 749 l 832 747 q 1059 657 976 747 q 1143 413 1143 567 l 1143 413 l 1143 295 l 709 295 q 760 196 719 229 q 871 163 802 163 l 871 163 q 1022 190 956 163 l 1022 190 l 1064 208 l 1119 68 q 996 10 1074 33 q 840 -14 918 -14 z m 372 144 l 372 144 q 486 186 432 144 l 486 186 l 486 306 l 392 306 q 304 281 339 305 q 270 217 270 256 l 270 217 q 372 144 270 144 z m 832 571 l 832 571 q 747 538 777 571 q 710 438 718 505 l 710 438 l 920 438 l 920 456 q 897 541 920 511 q 832 571 875 571 z m 481 829 l 614 1042 l 856 1042 l 667 829 l 481 829 z "},"Ǿ":{"ha":956,"x_min":55,"x_max":918,"o":"m 918 508 l 918 473 q 865 218 918 329 q 712 46 811 106 q 488 -14 614 -14 l 488 -14 q 290 31 378 -14 l 290 31 l 235 -64 l 94 -64 l 190 102 q 55 479 55 237 l 55 479 l 55 513 q 108 770 55 659 q 260 941 161 880 q 486 1001 359 1001 l 486 1001 q 681 958 593 1001 l 681 958 l 722 1029 l 863 1029 l 781 886 q 918 508 918 751 l 918 508 z m 676 469 l 676 515 q 656 670 676 605 l 656 670 l 388 203 q 488 172 429 172 l 488 172 q 627 249 578 172 q 676 469 675 326 l 676 469 z m 296 519 l 296 473 q 315 319 296 383 l 315 319 l 582 785 q 486 814 541 814 l 486 814 q 345 739 392 814 q 296 519 297 664 l 296 519 z m 381 1089 l 515 1302 l 756 1302 l 568 1089 l 381 1089 z "},"ǿ":{"ha":781,"x_min":35,"x_max":743,"o":"m 35 374 l 35 374 q 78 569 35 484 q 201 701 121 655 q 389 747 281 747 l 389 747 q 509 730 452 747 l 509 730 l 555 827 l 675 827 l 606 683 q 743 359 743 583 l 743 359 q 648 87 743 188 q 390 -14 553 -14 l 390 -14 q 274 1 327 -14 l 274 1 l 226 -98 l 106 -98 l 176 47 q 35 374 35 147 z m 264 401 l 264 359 q 276 253 264 294 l 276 253 l 428 565 q 389 571 410 571 l 389 571 q 264 401 274 571 l 264 401 z m 515 351 l 515 374 q 503 473 515 431 l 503 473 l 355 167 q 390 163 370 163 l 390 163 q 515 351 512 163 l 515 351 z m 260 825 l 394 1038 l 635 1038 l 447 825 l 260 825 z "},"Ẁ":{"ha":1207,"x_min":14,"x_max":1189,"o":"m 702 987 l 840 368 l 953 987 l 1189 987 l 979 0 l 732 0 l 600 563 l 471 0 l 224 0 l 14 987 l 251 987 l 364 368 l 500 987 l 702 987 z m 578 1252 l 714 1039 l 528 1039 l 337 1252 l 578 1252 z "},"ẁ":{"ha":1008,"x_min":15,"x_max":991,"o":"m 583 734 l 698 301 l 772 734 l 991 734 l 818 0 l 625 0 l 503 435 l 381 0 l 188 0 l 15 734 l 234 734 l 307 291 l 423 734 l 583 734 z m 477 1042 l 612 829 l 427 829 l 235 1042 l 477 1042 z "},"Ẃ":{"ha":1207,"x_min":14,"x_max":1189,"o":"m 702 987 l 840 368 l 953 987 l 1189 987 l 979 0 l 732 0 l 600 563 l 471 0 l 224 0 l 14 987 l 251 987 l 364 368 l 500 987 l 702 987 z m 500 1039 l 634 1252 l 876 1252 l 687 1039 l 500 1039 z "},"ẃ":{"ha":1008,"x_min":15,"x_max":991,"o":"m 583 734 l 698 301 l 772 734 l 991 734 l 818 0 l 625 0 l 503 435 l 381 0 l 188 0 l 15 734 l 234 734 l 307 291 l 423 734 l 583 734 z m 399 829 l 532 1042 l 774 1042 l 585 829 l 399 829 z "},"Ẅ":{"ha":1207,"x_min":14,"x_max":1189,"o":"m 702 987 l 840 368 l 953 987 l 1189 987 l 979 0 l 732 0 l 600 563 l 471 0 l 224 0 l 14 987 l 251 987 l 364 368 l 500 987 l 702 987 z m 326 1136 l 326 1136 q 355 1200 326 1173 q 428 1226 385 1226 q 501 1200 471 1226 q 530 1136 530 1173 q 501 1072 530 1099 q 428 1046 471 1046 q 355 1072 385 1046 q 326 1136 326 1099 z m 677 1136 l 677 1136 q 707 1200 677 1173 q 780 1226 736 1226 q 853 1200 823 1226 q 882 1136 882 1173 q 853 1072 882 1099 q 780 1046 823 1046 q 707 1072 736 1046 q 677 1136 677 1099 z "},"ẅ":{"ha":1008,"x_min":15,"x_max":991,"o":"m 583 734 l 698 301 l 772 734 l 991 734 l 818 0 l 625 0 l 503 435 l 381 0 l 188 0 l 15 734 l 234 734 l 307 291 l 423 734 l 583 734 z m 224 926 l 224 926 q 253 989 224 963 q 326 1016 283 1016 q 399 989 370 1016 q 429 926 429 963 q 399 862 429 888 q 326 836 370 836 q 253 862 283 836 q 224 926 224 888 z m 576 926 l 576 926 q 605 989 576 963 q 678 1016 635 1016 q 751 989 722 1016 q 781 926 781 963 q 751 862 781 888 q 678 836 722 836 q 605 862 635 836 q 576 926 576 888 z "},"Ỳ":{"ha":872,"x_min":-2,"x_max":875,"o":"m 254 987 l 436 559 l 618 987 l 875 987 l 557 355 l 557 0 l 315 0 l 315 355 l -2 987 l 254 987 z m 410 1252 l 545 1039 l 359 1039 l 168 1252 l 410 1252 z "},"ỳ":{"ha":720,"x_min":-3,"x_max":724,"o":"m 241 734 l 357 320 l 479 734 l 724 734 l 425 -123 l 412 -154 q 187 -296 349 -296 l 187 -296 q 93 -283 142 -296 l 93 -283 l 93 -119 l 123 -119 q 196 -105 171 -119 q 234 -56 222 -92 l 234 -56 l 252 -7 l -3 734 l 241 734 z m 332 1042 l 467 829 l 281 829 l 90 1042 l 332 1042 z "},"′":{"ha":214,"x_min":29,"x_max":192,"o":"m 192 1042 l 192 932 l 170 652 l 29 652 l 29 1042 l 192 1042 z "},"″":{"ha":440,"x_min":17,"x_max":411,"o":"m 173 1042 l 173 948 l 144 657 l 17 657 l 17 1042 l 173 1042 z m 411 1042 l 411 948 l 382 657 l 256 657 l 256 1042 l 411 1042 z "},"ǰ":{"ha":410,"x_min":-109,"x_max":481,"o":"m 94 734 l 323 734 l 323 -9 q 250 -222 323 -147 q 45 -296 176 -296 l 45 -296 q -62 -285 -13 -296 l -62 -285 l -52 -112 q 14 -120 -18 -120 l 14 -120 q 94 -7 94 -120 l 94 -7 l 94 734 z m 87 1029 l 187 938 l 287 1029 l 481 1029 l 481 1021 l 260 829 l 113 829 l -109 1023 l -109 1029 l 87 1029 z "},"ʼ":{"ha":337,"x_min":45,"x_max":269,"o":"m 145 678 l 145 678 l 45 732 q 102 924 101 830 l 102 924 l 102 1042 l 269 1042 l 269 931 q 233 797 269 868 q 145 678 197 725 z "},"Ḿ":{"ha":1217,"x_min":75,"x_max":1141,"o":"m 75 987 l 387 987 l 608 300 l 827 987 l 1141 987 l 1141 0 l 902 0 l 902 231 l 925 703 l 686 0 l 529 0 l 290 703 l 313 231 l 313 0 l 75 0 l 75 987 z m 501 1039 l 635 1252 l 876 1252 l 688 1039 l 501 1039 z "},"ḿ":{"ha":1196,"x_min":66,"x_max":1130,"o":"m 66 734 l 280 734 l 288 648 q 497 747 366 747 l 497 747 q 685 637 636 747 l 685 637 q 901 747 760 747 l 901 747 q 1130 477 1124 747 l 1130 477 l 1130 0 l 901 0 l 901 463 q 882 545 901 519 q 812 571 863 571 l 812 571 q 711 511 745 571 l 711 511 l 712 501 l 712 0 l 483 0 l 483 462 q 465 545 483 519 q 395 571 446 571 l 395 571 q 294 511 329 571 l 294 511 l 294 0 l 66 0 l 66 734 z m 508 829 l 642 1042 l 883 1042 l 694 829 l 508 829 z "},"Ḁ":{"ha":946,"x_min":-2,"x_max":949,"o":"m 693 0 l 635 184 l 309 184 l 252 0 l -2 0 l 360 987 l 584 987 l 949 0 l 693 0 z m 472 711 l 366 368 l 578 368 l 472 711 z m 342 -146 l 342 -146 q 381 -63 342 -96 q 474 -29 420 -29 q 566 -63 528 -29 q 604 -146 604 -96 q 567 -229 604 -197 q 474 -262 530 -262 l 474 -262 q 380 -229 418 -262 q 342 -146 342 -196 z m 427 -146 l 427 -146 q 440 -181 427 -168 q 474 -194 454 -194 l 474 -194 q 506 -181 494 -194 q 518 -146 518 -168 l 518 -146 q 506 -111 518 -125 q 474 -98 494 -98 l 474 -98 q 440 -111 454 -98 q 427 -146 427 -125 z "},"ḁ":{"ha":737,"x_min":31,"x_max":706,"o":"m 706 0 l 477 0 q 456 66 465 22 l 456 66 q 279 -14 393 -14 l 279 -14 q 103 49 176 -14 q 31 207 31 112 l 31 207 q 119 387 31 326 q 375 448 207 448 l 375 448 l 446 448 l 446 487 q 358 588 446 588 l 358 588 q 277 508 277 588 l 277 508 l 48 508 q 139 681 48 614 q 370 747 229 747 q 591 679 510 747 q 675 491 673 610 l 675 491 l 675 166 q 706 12 676 65 l 706 12 l 706 0 z m 334 149 l 334 149 q 405 168 377 149 q 446 209 433 186 l 446 209 l 446 326 l 379 326 q 260 219 260 326 l 260 219 q 281 169 260 188 q 334 149 302 149 z m 180 -138 l 180 -138 q 218 -54 180 -87 q 311 -20 257 -20 q 403 -54 366 -20 q 441 -138 441 -87 q 404 -220 441 -188 q 311 -253 368 -253 l 311 -253 q 218 -220 256 -253 q 180 -138 180 -187 z m 264 -138 l 264 -138 q 278 -172 264 -159 q 311 -185 291 -185 l 311 -185 q 343 -172 331 -185 q 355 -138 355 -159 l 355 -138 q 343 -102 355 -116 q 311 -89 331 -89 l 311 -89 q 278 -102 291 -89 q 264 -138 264 -116 z "},"Ỵ":{"ha":872,"x_min":-2,"x_max":875,"o":"m 254 987 l 436 559 l 618 987 l 875 987 l 557 355 l 557 0 l 315 0 l 315 355 l -2 987 l 254 987 z m 308 -124 l 308 -124 q 344 -52 308 -80 q 435 -23 380 -23 q 525 -52 489 -23 q 562 -124 562 -80 q 525 -197 562 -168 q 435 -225 489 -225 q 344 -197 380 -225 q 308 -124 308 -168 z "},"ỵ":{"ha":720,"x_min":-3,"x_max":724,"o":"m 241 734 l 357 320 l 479 734 l 724 734 l 425 -123 l 412 -154 q 187 -296 349 -296 l 187 -296 q 93 -283 142 -296 l 93 -283 l 93 -119 l 123 -119 q 196 -105 171 -119 q 234 -56 222 -92 l 234 -56 l 252 -7 l -3 734 l 241 734 z m 444 -218 l 444 -218 q 480 -145 444 -174 q 571 -117 517 -117 q 662 -145 625 -117 q 698 -218 698 -174 q 662 -290 698 -262 q 571 -319 625 -319 q 480 -290 517 -319 q 444 -218 444 -262 z "},"Ỷ":{"ha":872,"x_min":-2,"x_max":875,"o":"m 254 987 l 436 559 l 618 987 l 875 987 l 557 355 l 557 0 l 315 0 l 315 355 l -2 987 l 254 987 z m 522 1069 l 347 1069 l 332 1155 q 425 1198 425 1159 l 425 1198 q 334 1242 425 1242 l 334 1242 l 338 1341 q 551 1305 479 1341 q 623 1207 623 1270 l 623 1207 q 596 1144 623 1169 q 522 1112 569 1118 l 522 1112 l 522 1069 z "},"ỷ":{"ha":720,"x_min":-3,"x_max":724,"o":"m 241 734 l 357 320 l 479 734 l 724 734 l 425 -123 l 412 -154 q 187 -296 349 -296 l 187 -296 q 93 -283 142 -296 l 93 -283 l 93 -119 l 123 -119 q 196 -105 171 -119 q 234 -56 222 -92 l 234 -56 l 252 -7 l -3 734 l 241 734 z m 444 860 l 269 860 l 254 945 q 347 988 347 949 l 347 988 q 256 1033 347 1033 l 256 1033 l 260 1131 q 473 1096 401 1131 q 545 998 545 1061 l 545 998 q 518 934 545 960 q 444 902 491 909 l 444 902 l 444 860 z "},"Ỹ":{"ha":872,"x_min":-2,"x_max":875,"o":"m 254 987 l 436 559 l 618 987 l 875 987 l 557 355 l 557 0 l 315 0 l 315 355 l -2 987 l 254 987 z m 572 1253 l 698 1246 q 653 1115 698 1168 q 541 1061 608 1061 l 541 1061 q 441 1089 496 1061 q 353 1118 387 1118 l 353 1118 q 316 1103 331 1118 q 300 1057 300 1088 l 300 1057 l 174 1063 q 219 1194 174 1139 q 330 1249 264 1249 l 330 1249 q 418 1224 363 1249 q 488 1196 473 1199 q 519 1192 503 1192 l 519 1192 q 556 1207 541 1192 q 572 1253 572 1222 l 572 1253 z "},"ỹ":{"ha":720,"x_min":-3,"x_max":724,"o":"m 241 734 l 357 320 l 479 734 l 724 734 l 425 -123 l 412 -154 q 187 -296 349 -296 l 187 -296 q 93 -283 142 -296 l 93 -283 l 93 -119 l 123 -119 q 196 -105 171 -119 q 234 -56 222 -92 l 234 -56 l 252 -7 l -3 734 l 241 734 z m 494 1044 l 620 1036 q 575 905 620 959 q 463 851 530 851 l 463 851 q 363 880 418 851 q 275 908 309 908 l 275 908 q 238 893 253 908 q 222 847 222 878 l 222 847 l 96 854 q 141 984 96 929 q 252 1039 186 1039 l 252 1039 q 340 1014 286 1039 q 410 986 395 989 q 441 983 425 983 l 441 983 q 478 998 463 983 q 494 1044 494 1013 l 494 1044 z "},"₫":{"ha":802,"x_min":35,"x_max":810,"o":"m 35 372 l 35 372 q 111 647 35 547 q 321 747 186 747 l 321 747 q 486 670 419 747 l 486 670 l 486 1042 l 715 1042 l 715 0 l 510 0 l 498 79 q 319 -14 428 -14 l 319 -14 q 112 87 189 -14 q 35 372 35 187 z m 264 400 l 264 358 q 378 163 264 163 l 378 163 q 486 227 454 163 l 486 227 l 486 506 q 379 571 455 571 l 379 571 q 264 400 273 571 l 264 400 z m 810 954 l 810 824 l 315 824 l 315 954 l 810 954 z m 709 -89 l 709 -259 l 97 -259 l 97 -89 l 709 -89 z "},"₣":{"ha":760,"x_min":-19,"x_max":735,"o":"m 696 576 l 696 393 l 313 393 l 313 0 l 75 0 l 75 987 l 735 987 l 735 804 l 313 804 l 313 576 l 696 576 z m 476 266 l 476 136 l -19 136 l -19 266 l 476 266 z "}}'),B4=1289,H4=-339,V4=-102,G4=68,k4={yMin:-376,xMin:-1001,yMax:1467,xMax:1683},W4=1e3,X4={copyright:{en:"Copyright 2011 Google Inc. All Rights Reserved."},fontFamily:{en:"Roboto Black"},fontSubfamily:{en:"Regular"},uniqueID:{en:"Roboto Black"},fullName:{en:"Roboto Black"},version:{en:"Version 2.137; 2017"},postScriptName:{en:"Roboto-Black"},licenseURL:{en:"http://www.apache.org/licenses/LICENSE-2.0"}},Y4="900",Z4="normal",K4={glyphs:O4,ascender:B4,descender:H4,underlinePosition:V4,underlineThickness:G4,boundingBox:k4,resolution:W4,original_font_information:X4,cssFontWeight:Y4,cssFontStyle:Z4},Oo={type:"change"},Ra={type:"start"},Rl={type:"end"},Ss=new al,Bo=new gn,j4=Math.cos(70*A1.DEG2RAD),he=new z,Ee=2*Math.PI,te={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Sr=1e-6;class J4 extends Zc{constructor(t,e=null){super(t,e),this.state=te.NONE,this.enabled=!0,this.target=new z,this.cursor=new z,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:fi.ROTATE,MIDDLE:fi.DOLLY,RIGHT:fi.PAN},this.touches={ONE:oi.ROTATE,TWO:oi.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new z,this._lastQuaternion=new Hn,this._lastTargetPosition=new z,this._quat=new Hn().setFromUnitVectors(t.up,new z(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new fo,this._sphericalDelta=new fo,this._scale=1,this._panOffset=new z,this._rotateStart=new it,this._rotateEnd=new it,this._rotateDelta=new it,this._panStart=new it,this._panEnd=new it,this._panDelta=new it,this._dollyStart=new it,this._dollyEnd=new it,this._dollyDelta=new it,this._dollyDirection=new z,this._mouse=new it,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=Q4.bind(this),this._onPointerDown=$4.bind(this),this._onPointerUp=tu.bind(this),this._onContextMenu=ou.bind(this),this._onMouseWheel=iu.bind(this),this._onKeyDown=su.bind(this),this._onTouchStart=ru.bind(this),this._onTouchMove=au.bind(this),this._onMouseDown=eu.bind(this),this._onMouseMove=nu.bind(this),this._interceptControlDown=lu.bind(this),this._interceptControlUp=cu.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Oo),this.update(),this.state=te.NONE}update(t=null){const e=this.object.position;he.copy(e).sub(this.target),he.applyQuaternion(this._quat),this._spherical.setFromVector3(he),this.autoRotate&&this.state===te.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(n)&&isFinite(s)&&(n<-Math.PI?n+=Ee:n>Math.PI&&(n-=Ee),s<-Math.PI?s+=Ee:s>Math.PI&&(s-=Ee),n<=s?this._spherical.theta=Math.max(n,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+s)/2?Math.max(n,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=a!=this._spherical.radius}if(he.setFromSpherical(this._spherical),he.applyQuaternion(this._quatInverse),e.copy(this.target).add(he),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){const o=he.length();a=this._clampDistance(o*this._scale);const l=o-a;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){const o=new z(this._mouse.x,this._mouse.y,0);o.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;const c=new z(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(o),this.object.updateMatrixWorld(),a=he.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(Ss.origin.copy(this.object.position),Ss.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Ss.direction))<j4?this.object.lookAt(this.target):(Bo.setFromNormalAndCoplanarPoint(this.object.up,this.target),Ss.intersectPlane(Bo,this.target))))}else if(this.object.isOrthographicCamera){const a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>Sr||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Sr||this._lastTargetPosition.distanceToSquared(this.target)>Sr?(this.dispatchEvent(Oo),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?Ee/60*this.autoRotateSpeed*t:Ee/60/60*this.autoRotateSpeed}_getZoomScale(t){const e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){he.setFromMatrixColumn(e,0),he.multiplyScalar(-t),this._panOffset.add(he)}_panUp(t,e){this.screenSpacePanning===!0?he.setFromMatrixColumn(e,1):(he.setFromMatrixColumn(e,0),he.crossVectors(this.object.up,he)),he.multiplyScalar(t),this._panOffset.add(he)}_pan(t,e){const n=this.domElement;if(this.object.isPerspectiveCamera){const s=this.object.position;he.copy(s).sub(this.target);let r=he.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*r/n.clientHeight,this.object.matrix),this._panUp(2*e*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),s=t-n.left,r=e-n.top,a=n.width,o=n.height;this._mouse.x=s/a*2-1,this._mouse.y=-(r/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(Ee*this._rotateDelta.x/e.clientHeight),this._rotateUp(Ee*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(Ee*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-Ee*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(Ee*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-Ee*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._rotateStart.set(n,s)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panStart.set(n,s)}}_handleTouchStartDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(n*n+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const n=this._getSecondPointerPosition(t),s=.5*(t.pageX+n.x),r=.5*(t.pageY+n.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(Ee*this._rotateDelta.x/e.clientHeight),this._rotateUp(Ee*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panEnd.set(n,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(n*n+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const a=(t.pageX+e.x)*.5,o=(t.pageY+e.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new it,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){const e=t.deltaMode,n={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}function $4(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i)))}function Q4(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function tu(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Rl),this.state=te.NONE;break;case 1:const t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function eu(i){let t;switch(i.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case fi.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=te.DOLLY;break;case fi.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=te.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=te.ROTATE}break;case fi.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=te.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=te.PAN}break;default:this.state=te.NONE}this.state!==te.NONE&&this.dispatchEvent(Ra)}function nu(i){switch(this.state){case te.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case te.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case te.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function iu(i){this.enabled===!1||this.enableZoom===!1||this.state!==te.NONE||(i.preventDefault(),this.dispatchEvent(Ra),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(Rl))}function su(i){this.enabled!==!1&&this._handleKeyDown(i)}function ru(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case oi.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=te.TOUCH_ROTATE;break;case oi.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=te.TOUCH_PAN;break;default:this.state=te.NONE}break;case 2:switch(this.touches.TWO){case oi.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=te.TOUCH_DOLLY_PAN;break;case oi.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=te.TOUCH_DOLLY_ROTATE;break;default:this.state=te.NONE}break;default:this.state=te.NONE}this.state!==te.NONE&&this.dispatchEvent(Ra)}function au(i){switch(this._trackPointer(i),this.state){case te.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case te.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case te.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case te.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=te.NONE}}function ou(i){this.enabled!==!1&&i.preventDefault()}function lu(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function cu(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}class Cl extends wl{constructor(t){super(11-t);const e=.7+3/t;this.geometry=new Tn(e,e,e),this.material=new Ki({color:65280})}hit(){const t=this.hits/this.points;return this.scale.set(t,t,t),super.hit()}}class hu extends pe{constructor(t){super(),this.font=t,this.score=0,this.dps=0,this.pointsMesh,this.dpsMesh,this.createText()}createText(){const t=new pa(this.score.toString(),{font:this.font,size:2,depth:.2}),e=new Yi({color:9159948});t.computeBoundingBox(),this.pointsMesh=new pe(t,e),this.pointsMesh.position.x=-6-t.boundingBox.max.x,this.pointsMesh.rotation.x=Math.PI/3,this.pointsMesh.rotation.y=Math.PI/5,this.add(this.pointsMesh);const n=new pa(`DPS: ${this.dps.toString()}`,{font:this.font,size:1,depth:.2});t.computeBoundingBox(),this.dpsMesh=new pe(n,e),this.dpsMesh.position.x=6,this.dpsMesh.rotation.x=Math.PI/3,this.dpsMesh.rotation.y=-Math.PI/5,this.add(this.dpsMesh)}update(t,e){this.score+=t,this.dps=e,this.remove(this.pointsMesh),this.remove(this.dpsMesh),this.createText()}}const We=new nc,Gn=new Ue(75,window.innerWidth/window.innerHeight,.1,1e3),Ci=new C4;Ci.setSize(window.innerWidth,window.innerHeight);Ci.setAnimationLoop(gu);document.body.appendChild(Ci.domElement);const uu=new U4,Pl=uu.parse(K4),fu=new Tn(1,1,1),du=new Ki({color:65280}),ui=new Set,bi=new li;We.add(bi);const gi=new li;We.add(gi);new pe(fu,du);const pu=new kc(16777147,526368,1);We.add(pu);const mu=new Zi(10,30),_u=new Ki({color:11184895,side:Ye}),xu=new pe(mu,_u);We.add(xu);const Ce=new L4(gi);We.add(Ce);Ce.rotation.x=Math.PI/2;Ce.position.y=-5;let Fi=0;Gn.position.z=5;Gn.position.y=-7;Gn.lookAt(0,0,0);const Ai=new hu(Pl);We.add(Ai);Ai.position.y=10;Ai.update(0,Ce.getDps());const Ho=new En,ys=new En,Ll=new En;Ll.setFromObject(Ce);const Dl=new J4(Gn,Ci.domElement);Dl.update();function gu(){Dl.update(),Mu(),ui.forEach(i=>{i.position.y-=.03,i.position.y<-15&&(ui.delete(i),We.remove(i))}),gi.children.forEach(i=>{Ho.setFromObject(i),i.position.y+=.07,i.position.y>15&&gi.remove(i),ui.forEach(t=>{if(ys.setFromObject(t),Ho.intersectsBox(ys)){const e=t.hit(Ce.damage);t instanceof Cl&&!e&&(ui.delete(t),We.remove(t),Ai.update(t.points,Ce.getDps())),gi.remove(i)}}),bi.children.forEach(t=>{ys.setFromObject(t),Ll.intersectsBox(ys)&&(console.log(t.type),Ce.powerUp(t.getBonus()),Ai.update(0,Ce.getDps()),bi.remove(t))})}),Ce.position.x+=Fi*.2,yu(),Ci.render(We,Gn),qu.innerHTML=vu()}const vu=()=>We.children.length+bi.children.length+gi.children.length,qu=document.getElementById("console");let Is=[];window.addEventListener("keydown",i=>{i.repeat||Is.push(i.keyCode)});window.addEventListener("keyup",()=>{Is.shift()});const Mu=()=>{if(!Is.length){Fi=0;return}switch(Is[0]){case 39:Fi=1;break;case 37:Fi=-1;break;default:Fi=0}},Hs=()=>{setTimeout(()=>{const i=Math.floor(Math.random()*9)+1;for(let t=0;t<i;t++){const e=new Cl(i);e.position.set(10/i*t-4.25,10,.5),e.geometry.computeBoundingBox(),We.add(e),ui.add(e)}Ca.checked&&(Eu()?Su(Pl):Hs())},3e3)},Su=i=>{setTimeout(()=>{console.log(bi);const t=new z4(i);t.position.y=10,ui.add(t),bi.add(t),Ca.checked&&Hs()},3e3)},yu=()=>{},Ca=document.getElementById("start-game");Ca.addEventListener("click",i=>{i.target.checked?(Hs(),Ce.shoot()):Ce.stopShooting()});Hs();Ce.shoot();let yr=0;const Eu=()=>{const i=Math.floor(Ai.score/50);return console.log(yr,i),yr!==i?(yr=i,!0):!1};window.addEventListener("resize",()=>{Ci.setSize(window.innerWidth,window.innerHeight),Gn.aspect=window.innerWidth/window.innerHeight,Gn.updateProjectionMatrix()});
