(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=t(i);fetch(i.href,r)}})();/**
 * @license
 * Copyright 2010-2021 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const po="128",dn={ROTATE:0,DOLLY:1,PAN:2},Yt={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Ml=0,Ws=1,bl=2,mo=1,wl=2,ni=3,or=0,Je=1,lr=2,go=1,si=0,ai=1,ns=2,Xs=3,qs=4,Sl=5,Cn=100,El=101,Tl=102,Ys=103,js=104,Al=200,Ll=201,Rl=202,Cl=203,vo=204,xo=205,Pl=206,Il=207,Dl=208,Nl=209,Fl=210,Ol=0,Bl=1,zl=2,is=3,Ul=4,Hl=5,Gl=6,kl=7,cr=0,Vl=1,Wl=2,oi=0,Xl=1,ql=2,Yl=3,jl=4,Zl=5,yo=300,fs=301,ps=302,Zs=303,Js=304,ms=306,gs=307,rs=1e3,wt=1001,ss=1002,lt=1003,$s=1004,Qs=1005,mt=1006,Jl=1007,vs=1008,xs=1009,$l=1010,Ql=1011,Ki=1012,Kl=1013,Qi=1014,jt=1015,er=1016,ec=1017,tc=1018,nc=1019,li=1020,ic=1021,ln=1022,St=1023,rc=1024,sc=1025,Fn=1026,fi=1027,ac=1028,oc=1029,lc=1030,cc=1031,hc=1032,uc=1033,Ks=33776,ea=33777,ta=33778,na=33779,ia=35840,ra=35841,sa=35842,aa=35843,dc=36196,oa=37492,la=37496,fc=37808,pc=37809,mc=37810,gc=37811,vc=37812,xc=37813,yc=37814,_c=37815,Mc=37816,bc=37817,wc=37818,Sc=37819,Ec=37820,Tc=37821,Ac=36492,Lc=37840,Rc=37841,Cc=37842,Pc=37843,Ic=37844,Dc=37845,Nc=37846,Fc=37847,Oc=37848,Bc=37849,zc=37850,Uc=37851,Hc=37852,Gc=37853,kc=2200,Vc=2201,Wc=2202,tr=2300,nr=2301,_r=2302,Pn=2400,In=2401,ir=2402,ys=2500,_o=2501,Xc=0,_i=3e3,Mo=3001,qc=3007,Yc=3002,jc=3003,Zc=3004,Jc=3005,$c=3006,Qc=3200,Kc=3201,zn=0,eh=1,Mr=7680,th=519,pi=35044,rr=35048,ca="300 es";class en{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let r=0,a=i.length;r<a;r++)i[r].call(this,e);e.target=null}}}const et=[];for(let s=0;s<256;s++)et[s]=(s<16?"0":"")+s.toString(16);let bi=1234567;const ci=Math.PI/180,mi=180/Math.PI;function Et(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(et[s&255]+et[s>>8&255]+et[s>>16&255]+et[s>>24&255]+"-"+et[e&255]+et[e>>8&255]+"-"+et[e>>16&15|64]+et[e>>24&255]+"-"+et[t&63|128]+et[t>>8&255]+"-"+et[t>>16&255]+et[t>>24&255]+et[n&255]+et[n>>8&255]+et[n>>16&255]+et[n>>24&255]).toUpperCase()}function ot(s,e,t){return Math.max(e,Math.min(t,s))}function _s(s,e){return(s%e+e)%e}function nh(s,e,t,n,i){return n+(s-e)*(i-n)/(t-e)}function ih(s,e,t){return s!==e?(t-s)/(e-s):0}function hi(s,e,t){return(1-t)*s+t*e}function rh(s,e,t,n){return hi(s,e,1-Math.exp(-t*n))}function sh(s,e=1){return e-Math.abs(_s(s,e*2)-e)}function ah(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function oh(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function lh(s,e){return s+Math.floor(Math.random()*(e-s+1))}function ch(s,e){return s+Math.random()*(e-s)}function hh(s){return s*(.5-Math.random())}function uh(s){return s!==void 0&&(bi=s%2147483647),bi=bi*16807%2147483647,(bi-1)/2147483646}function dh(s){return s*ci}function fh(s){return s*mi}function as(s){return(s&s-1)===0&&s!==0}function bo(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function wo(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function ph(s,e,t,n,i){const r=Math.cos,a=Math.sin,o=r(t/2),l=a(t/2),c=r((e+n)/2),h=a((e+n)/2),u=r((e-n)/2),d=a((e-n)/2),f=r((n-e)/2),m=a((n-e)/2);switch(i){case"XYX":s.set(o*h,l*u,l*d,o*c);break;case"YZY":s.set(l*d,o*h,l*u,o*c);break;case"ZXZ":s.set(l*u,l*d,o*h,o*c);break;case"XZX":s.set(o*h,l*m,l*f,o*c);break;case"YXY":s.set(l*f,o*h,l*m,o*c);break;case"ZYZ":s.set(l*m,l*f,o*h,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}var mh=Object.freeze({__proto__:null,DEG2RAD:ci,RAD2DEG:mi,generateUUID:Et,clamp:ot,euclideanModulo:_s,mapLinear:nh,inverseLerp:ih,lerp:hi,damp:rh,pingpong:sh,smoothstep:ah,smootherstep:oh,randInt:lh,randFloat:ch,randFloatSpread:hh,seededRandom:uh,degToRad:dh,radToDeg:fh,isPowerOfTwo:as,ceilPowerOfTwo:bo,floorPowerOfTwo:wo,setQuaternionFromProperEuler:ph});class Z{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e,t){return t!==void 0?(console.warn("THREE.Vector2: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(e,t)):(this.x+=e.x,this.y+=e.y,this)}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e,t){return t!==void 0?(console.warn("THREE.Vector2: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(e,t)):(this.x-=e.x,this.y-=e.y,this)}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t,n){return n!==void 0&&console.warn("THREE.Vector2: offset has been removed from .fromBufferAttribute()."),this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*i+e.x,this.y=r*i+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}}Z.prototype.isVector2=!0;class tt{constructor(){this.elements=[1,0,0,0,1,0,0,0,1],arguments.length>0&&console.error("THREE.Matrix3: the constructor no longer reads arguments. use .set() instead.")}set(e,t,n,i,r,a,o,l,c){const h=this.elements;return h[0]=e,h[1]=i,h[2]=o,h[3]=t,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],f=n[5],m=n[8],v=i[0],x=i[3],g=i[6],p=i[1],T=i[4],L=i[7],A=i[2],y=i[5],N=i[8];return r[0]=a*v+o*p+l*A,r[3]=a*x+o*T+l*y,r[6]=a*g+o*L+l*N,r[1]=c*v+h*p+u*A,r[4]=c*x+h*T+u*y,r[7]=c*g+h*L+u*N,r[2]=d*v+f*p+m*A,r[5]=d*x+f*T+m*y,r[8]=d*g+f*L+m*N,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*a*h-t*o*c-n*r*h+n*o*l+i*r*c-i*a*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=h*a-o*c,d=o*l-h*r,f=c*r-a*l,m=t*u+n*d+i*f;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/m;return e[0]=u*v,e[1]=(i*c-h*n)*v,e[2]=(o*n-i*a)*v,e[3]=d*v,e[4]=(h*t-i*l)*v,e[5]=(i*r-o*t)*v,e[6]=f*v,e[7]=(n*l-c*t)*v,e[8]=(a*t-n*r)*v,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-i*c,i*l,-i*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=t,n[4]*=t,n[7]*=t,this}rotate(e){const t=Math.cos(e),n=Math.sin(e),i=this.elements,r=i[0],a=i[3],o=i[6],l=i[1],c=i[4],h=i[7];return i[0]=t*r+n*l,i[3]=t*a+n*c,i[6]=t*o+n*h,i[1]=-n*r+t*l,i[4]=-n*a+t*c,i[7]=-n*o+t*h,this}translate(e,t){const n=this.elements;return n[0]+=e*n[2],n[3]+=e*n[5],n[6]+=e*n[8],n[1]+=t*n[2],n[4]+=t*n[5],n[7]+=t*n[8],this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}tt.prototype.isMatrix3=!0;let fn;class Un{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{fn===void 0&&(fn=document.createElementNS("http://www.w3.org/1999/xhtml","canvas")),fn.width=e.width,fn.height=e.height;const n=fn.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=fn}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}}let gh=0;class it extends en{constructor(e=it.DEFAULT_IMAGE,t=it.DEFAULT_MAPPING,n=wt,i=wt,r=mt,a=vs,o=St,l=xs,c=1,h=_i){super(),Object.defineProperty(this,"id",{value:gh++}),this.uuid=Et(),this.name="",this.image=e,this.mipmaps=[],this.mapping=t,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Z(0,0),this.repeat=new Z(1,1),this.center=new Z(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new tt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=h,this.version=0,this.onUpdate=null}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.image=e.image,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};if(this.image!==void 0){const i=this.image;if(i.uuid===void 0&&(i.uuid=Et()),!t&&e.images[i.uuid]===void 0){let r;if(Array.isArray(i)){r=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?r.push(br(i[a].image)):r.push(br(i[a]))}else r=br(i);e.images[i.uuid]={uuid:i.uuid,url:r}}n.image=i.uuid}return t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==yo)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case rs:e.x=e.x-Math.floor(e.x);break;case wt:e.x=e.x<0?0:1;break;case ss:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case rs:e.y=e.y-Math.floor(e.y);break;case wt:e.y=e.y<0?0:1;break;case ss:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&this.version++}}it.DEFAULT_IMAGE=void 0;it.DEFAULT_MAPPING=yo;it.prototype.isTexture=!0;function br(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Un.getDataURL(s):s.data?{data:Array.prototype.slice.call(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}class Oe{constructor(e=0,t=0,n=0,i=1){this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e,t){return t!==void 0?(console.warn("THREE.Vector4: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(e,t)):(this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this)}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e,t){return t!==void 0?(console.warn("THREE.Vector4: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(e,t)):(this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this)}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*i+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*i+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*i+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*i+a[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r;const l=e.elements,c=l[0],h=l[4],u=l[8],d=l[1],f=l[5],m=l[9],v=l[2],x=l[6],g=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-v)<.01&&Math.abs(m-x)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+v)<.1&&Math.abs(m+x)<.1&&Math.abs(c+f+g-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const T=(c+1)/2,L=(f+1)/2,A=(g+1)/2,y=(h+d)/4,N=(u+v)/4,O=(m+x)/4;return T>L&&T>A?T<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(T),i=y/n,r=N/n):L>A?L<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(L),n=y/i,r=O/i):A<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(A),n=N/r,i=O/r),this.set(n,i,r,t),this}let p=Math.sqrt((x-m)*(x-m)+(u-v)*(u-v)+(d-h)*(d-h));return Math.abs(p)<.001&&(p=1),this.x=(x-m)/p,this.y=(u-v)/p,this.z=(d-h)/p,this.w=Math.acos((c+f+g-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t,n){return n!==void 0&&console.warn("THREE.Vector4: offset has been removed from .fromBufferAttribute()."),this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}}Oe.prototype.isVector4=!0;class cn extends en{constructor(e,t,n){super(),this.width=e,this.height=t,this.depth=1,this.scissor=new Oe(0,0,e,t),this.scissorTest=!1,this.viewport=new Oe(0,0,e,t),n=n||{},this.texture=new it(void 0,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.encoding),this.texture.image={},this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=1,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:mt,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null}setTexture(e){e.image={width:this.width,height:this.height,depth:this.depth},this.texture=e}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.depthTexture=e.depthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}cn.prototype.isWebGLRenderTarget=!0;class vh extends cn{constructor(e,t,n){super(e,t,n),this.samples=4}copy(e){return super.copy.call(this,e),this.samples=e.samples,this}}vh.prototype.isWebGLMultisampleRenderTarget=!0;class nt{constructor(e=0,t=0,n=0,i=1){this._x=e,this._y=t,this._z=n,this._w=i}static slerp(e,t,n,i){return console.warn("THREE.Quaternion: Static .slerp() has been deprecated. Use qm.slerpQuaternions( qa, qb, t ) instead."),n.slerpQuaternions(e,t,i)}static slerpFlat(e,t,n,i,r,a,o){let l=n[i+0],c=n[i+1],h=n[i+2],u=n[i+3];const d=r[a+0],f=r[a+1],m=r[a+2],v=r[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u;return}if(o===1){e[t+0]=d,e[t+1]=f,e[t+2]=m,e[t+3]=v;return}if(u!==v||l!==d||c!==f||h!==m){let x=1-o;const g=l*d+c*f+h*m+u*v,p=g>=0?1:-1,T=1-g*g;if(T>Number.EPSILON){const A=Math.sqrt(T),y=Math.atan2(A,g*p);x=Math.sin(x*y)/A,o=Math.sin(o*y)/A}const L=o*p;if(l=l*x+d*L,c=c*x+f*L,h=h*x+m*L,u=u*x+v*L,x===1-o){const A=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=A,c*=A,h*=A,u*=A}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,i,r,a){const o=n[i],l=n[i+1],c=n[i+2],h=n[i+3],u=r[a],d=r[a+1],f=r[a+2],m=r[a+3];return e[t]=o*m+h*u+l*f-c*d,e[t+1]=l*m+h*d+c*u-o*f,e[t+2]=c*m+h*f+o*d-l*u,e[t+3]=h*m-o*u-l*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){if(!(e&&e.isEuler))throw new Error("THREE.Quaternion: .setFromEuler() now expects an Euler rotation rather than a Vector3 and order.");const n=e._x,i=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(i/2),u=o(r/2),d=l(n/2),f=l(i/2),m=l(r/2);switch(a){case"XYZ":this._x=d*h*u+c*f*m,this._y=c*f*u-d*h*m,this._z=c*h*m+d*f*u,this._w=c*h*u-d*f*m;break;case"YXZ":this._x=d*h*u+c*f*m,this._y=c*f*u-d*h*m,this._z=c*h*m-d*f*u,this._w=c*h*u+d*f*m;break;case"ZXY":this._x=d*h*u-c*f*m,this._y=c*f*u+d*h*m,this._z=c*h*m+d*f*u,this._w=c*h*u-d*f*m;break;case"ZYX":this._x=d*h*u-c*f*m,this._y=c*f*u+d*h*m,this._z=c*h*m-d*f*u,this._w=c*h*u+d*f*m;break;case"YZX":this._x=d*h*u+c*f*m,this._y=c*f*u+d*h*m,this._z=c*h*m-d*f*u,this._w=c*h*u-d*f*m;break;case"XZY":this._x=d*h*u-c*f*m,this._y=c*f*u-d*h*m,this._z=c*h*m+d*f*u,this._w=c*h*u+d*f*m;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],h=t[6],u=t[10],d=n+o+u;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(a-i)*f}else if(n>o&&n>u){const f=2*Math.sqrt(1+n-o-u);this._w=(h-l)/f,this._x=.25*f,this._y=(i+a)/f,this._z=(r+c)/f}else if(o>u){const f=2*Math.sqrt(1+o-n-u);this._w=(r-c)/f,this._x=(i+a)/f,this._y=.25*f,this._z=(l+h)/f}else{const f=2*Math.sqrt(1+u-n-o);this._w=(a-i)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ot(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e,t){return t!==void 0?(console.warn("THREE.Quaternion: .multiply() now only accepts one argument. Use .multiplyQuaternions( a, b ) instead."),this.multiplyQuaternions(e,t)):this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+a*o+i*c-r*l,this._y=i*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-i*o,this._w=a*h-n*o-i*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,r=this._z,a=this._w;let o=a*e._w+n*e._x+i*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=i,this._z=r,this;const l=1-o*o;if(l<=Number.EPSILON){const f=1-t;return this._w=f*a+t*this._w,this._x=f*n+t*this._x,this._y=f*i+t*this._y,this._z=f*r+t*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),h=Math.atan2(c,o),u=Math.sin((1-t)*h)/c,d=Math.sin(t*h)/c;return this._w=a*u+this._w*d,this._x=n*u+this._x*d,this._y=i*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){this.copy(e).slerp(t,n)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}}nt.prototype.isQuaternion=!0;class b{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e,t){return t!==void 0?(console.warn("THREE.Vector3: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(e,t)):(this.x+=e.x,this.y+=e.y,this.z+=e.z,this)}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e,t){return t!==void 0?(console.warn("THREE.Vector3: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(e,t)):(this.x-=e.x,this.y-=e.y,this.z-=e.z,this)}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e,t){return t!==void 0?(console.warn("THREE.Vector3: .multiply() now only accepts one argument. Use .multiplyVectors( a, b ) instead."),this.multiplyVectors(e,t)):(this.x*=e.x,this.y*=e.y,this.z*=e.z,this)}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return e&&e.isEuler||console.error("THREE.Vector3: .applyEuler() now expects an Euler rotation rather than a Vector3 and order."),this.applyQuaternion(ha.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(ha.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=l*t+a*i-o*n,h=l*n+o*t-r*i,u=l*i+r*n-a*t,d=-r*t-a*n-o*i;return this.x=c*l+d*-r+h*-o-u*-a,this.y=h*l+d*-a+u*-r-c*-o,this.z=u*l+d*-o+c*-a-h*-r,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e,t){return t!==void 0?(console.warn("THREE.Vector3: .cross() now only accepts one argument. Use .crossVectors( a, b ) instead."),this.crossVectors(e,t)):this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=i*l-r*o,this.y=r*a-n*l,this.z=n*o-i*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return wr.copy(this).projectOnVector(e),this.sub(wr)}reflect(e){return this.sub(wr.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(ot(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t,n){return n!==void 0&&console.warn("THREE.Vector3: offset has been removed from .fromBufferAttribute()."),this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}}b.prototype.isVector3=!0;const wr=new b,ha=new nt;class vt{constructor(e=new b(1/0,1/0,1/0),t=new b(-1/0,-1/0,-1/0)){this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){let t=1/0,n=1/0,i=1/0,r=-1/0,a=-1/0,o=-1/0;for(let l=0,c=e.length;l<c;l+=3){const h=e[l],u=e[l+1],d=e[l+2];h<t&&(t=h),u<n&&(n=u),d<i&&(i=d),h>r&&(r=h),u>a&&(a=u),d>o&&(o=d)}return this.min.set(t,n,i),this.max.set(r,a,o),this}setFromBufferAttribute(e){let t=1/0,n=1/0,i=1/0,r=-1/0,a=-1/0,o=-1/0;for(let l=0,c=e.count;l<c;l++){const h=e.getX(l),u=e.getY(l),d=e.getZ(l);h<t&&(t=h),u<n&&(n=u),d<i&&(i=d),h>r&&(r=h),u>a&&(a=u),d>o&&(o=d)}return this.min.set(t,n,i),this.max.set(r,a,o),this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=qn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e){return this.makeEmpty(),this.expandByObject(e)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return e===void 0&&(console.warn("THREE.Box3: .getCenter() target is now required"),e=new b),this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return e===void 0&&(console.warn("THREE.Box3: .getSize() target is now required"),e=new b),this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e){e.updateWorldMatrix(!1,!1);const t=e.geometry;t!==void 0&&(t.boundingBox===null&&t.computeBoundingBox(),Sr.copy(t.boundingBox),Sr.applyMatrix4(e.matrixWorld),this.union(Sr));const n=e.children;for(let i=0,r=n.length;i<r;i++)this.expandByObject(n[i]);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t===void 0&&(console.warn("THREE.Box3: .getParameter() target is now required"),t=new b),t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,qn),qn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Yn),wi.subVectors(this.max,Yn),pn.subVectors(e.a,Yn),mn.subVectors(e.b,Yn),gn.subVectors(e.c,Yn),Ut.subVectors(mn,pn),Ht.subVectors(gn,mn),an.subVectors(pn,gn);let t=[0,-Ut.z,Ut.y,0,-Ht.z,Ht.y,0,-an.z,an.y,Ut.z,0,-Ut.x,Ht.z,0,-Ht.x,an.z,0,-an.x,-Ut.y,Ut.x,0,-Ht.y,Ht.x,0,-an.y,an.x,0];return!Er(t,pn,mn,gn,wi)||(t=[1,0,0,0,1,0,0,0,1],!Er(t,pn,mn,gn,wi))?!1:(Si.crossVectors(Ut,Ht),t=[Si.x,Si.y,Si.z],Er(t,pn,mn,gn,wi))}clampPoint(e,t){return t===void 0&&(console.warn("THREE.Box3: .clampPoint() target is now required"),t=new b),t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return qn.copy(e).clamp(this.min,this.max).sub(e).length()}getBoundingSphere(e){return e===void 0&&console.error("THREE.Box3: .getBoundingSphere() target is now required"),this.getCenter(e.center),e.radius=this.getSize(qn).length()*.5,e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Nt[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Nt[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Nt[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Nt[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Nt[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Nt[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Nt[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Nt[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Nt),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}vt.prototype.isBox3=!0;const Nt=[new b,new b,new b,new b,new b,new b,new b,new b],qn=new b,Sr=new vt,pn=new b,mn=new b,gn=new b,Ut=new b,Ht=new b,an=new b,Yn=new b,wi=new b,Si=new b,on=new b;function Er(s,e,t,n,i){for(let r=0,a=s.length-3;r<=a;r+=3){on.fromArray(s,r);const o=i.x*Math.abs(on.x)+i.y*Math.abs(on.y)+i.z*Math.abs(on.z),l=e.dot(on),c=t.dot(on),h=n.dot(on);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const xh=new vt,ua=new b,Tr=new b,Ar=new b;class Hn{constructor(e=new b,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):xh.setFromPoints(e).getCenter(n);let i=0;for(let r=0,a=e.length;r<a;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t===void 0&&(console.warn("THREE.Sphere: .clampPoint() target is now required"),t=new b),t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return e===void 0&&(console.warn("THREE.Sphere: .getBoundingBox() target is now required"),e=new vt),this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){Ar.subVectors(e,this.center);const t=Ar.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.add(Ar.multiplyScalar(i/n)),this.radius+=i}return this}union(e){return Tr.subVectors(e.center,this.center).normalize().multiplyScalar(e.radius),this.expandByPoint(ua.copy(e.center).add(Tr)),this.expandByPoint(ua.copy(e.center).sub(Tr)),this}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Ft=new b,Lr=new b,Ei=new b,Gt=new b,Rr=new b,Ti=new b,Cr=new b;class hn{constructor(e=new b,t=new b(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t===void 0&&(console.warn("THREE.Ray: .at() target is now required"),t=new b),t.copy(this.direction).multiplyScalar(e).add(this.origin)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ft)),this}closestPointToPoint(e,t){t===void 0&&(console.warn("THREE.Ray: .closestPointToPoint() target is now required"),t=new b),t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.direction).multiplyScalar(n).add(this.origin)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Ft.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Ft.copy(this.direction).multiplyScalar(t).add(this.origin),Ft.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){Lr.copy(e).add(t).multiplyScalar(.5),Ei.copy(t).sub(e).normalize(),Gt.copy(this.origin).sub(Lr);const r=e.distanceTo(t)*.5,a=-this.direction.dot(Ei),o=Gt.dot(this.direction),l=-Gt.dot(Ei),c=Gt.lengthSq(),h=Math.abs(1-a*a);let u,d,f,m;if(h>0)if(u=a*l-o,d=a*o-l,m=r*h,u>=0)if(d>=-m)if(d<=m){const v=1/h;u*=v,d*=v,f=u*(u+a*d+2*o)+d*(a*u+d+2*l)+c}else d=r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;else d<=-m?(u=Math.max(0,-(-a*r+o)),d=u>0?-r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c):d<=m?(u=0,d=Math.min(Math.max(-r,-l),r),f=d*(d+2*l)+c):(u=Math.max(0,-(a*r+o)),d=u>0?r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c);else d=a>0?-r:r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;return n&&n.copy(this.direction).multiplyScalar(u).add(this.origin),i&&i.copy(Ei).multiplyScalar(d).add(Lr),f}intersectSphere(e,t){Ft.subVectors(e.center,this.origin);const n=Ft.dot(this.direction),i=Ft.dot(Ft)-n*n,r=e.radius*e.radius;if(i>r)return null;const a=Math.sqrt(r-i),o=n-a,l=n+a;return o<0&&l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,a,o,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,i=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,i=(e.min.x-d.x)*c),h>=0?(r=(e.min.y-d.y)*h,a=(e.max.y-d.y)*h):(r=(e.max.y-d.y)*h,a=(e.min.y-d.y)*h),n>a||r>i||((r>n||n!==n)&&(n=r),(a<i||i!==i)&&(i=a),u>=0?(o=(e.min.z-d.z)*u,l=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,l=(e.min.z-d.z)*u),n>l||o>i)||((o>n||n!==n)&&(n=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,Ft)!==null}intersectTriangle(e,t,n,i,r){Rr.subVectors(t,e),Ti.subVectors(n,e),Cr.crossVectors(Rr,Ti);let a=this.direction.dot(Cr),o;if(a>0){if(i)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Gt.subVectors(this.origin,e);const l=o*this.direction.dot(Ti.crossVectors(Gt,Ti));if(l<0)return null;const c=o*this.direction.dot(Rr.cross(Gt));if(c<0||l+c>a)return null;const h=-o*Gt.dot(Cr);return h<0?null:this.at(h/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class pe{constructor(){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],arguments.length>0&&console.error("THREE.Matrix4: the constructor no longer reads arguments. use .set() instead.")}set(e,t,n,i,r,a,o,l,c,h,u,d,f,m,v,x){const g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=i,g[1]=r,g[5]=a,g[9]=o,g[13]=l,g[2]=c,g[6]=h,g[10]=u,g[14]=d,g[3]=f,g[7]=m,g[11]=v,g[15]=x,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new pe().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/vn.setFromMatrixColumn(e,0).length(),r=1/vn.setFromMatrixColumn(e,1).length(),a=1/vn.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){e&&e.isEuler||console.error("THREE.Matrix4: .makeRotationFromEuler() now expects a Euler rotation rather than a Vector3 and order.");const t=this.elements,n=e.x,i=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){const d=a*h,f=a*u,m=o*h,v=o*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=f+m*c,t[5]=d-v*c,t[9]=-o*l,t[2]=v-d*c,t[6]=m+f*c,t[10]=a*l}else if(e.order==="YXZ"){const d=l*h,f=l*u,m=c*h,v=c*u;t[0]=d+v*o,t[4]=m*o-f,t[8]=a*c,t[1]=a*u,t[5]=a*h,t[9]=-o,t[2]=f*o-m,t[6]=v+d*o,t[10]=a*l}else if(e.order==="ZXY"){const d=l*h,f=l*u,m=c*h,v=c*u;t[0]=d-v*o,t[4]=-a*u,t[8]=m+f*o,t[1]=f+m*o,t[5]=a*h,t[9]=v-d*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const d=a*h,f=a*u,m=o*h,v=o*u;t[0]=l*h,t[4]=m*c-f,t[8]=d*c+v,t[1]=l*u,t[5]=v*c+d,t[9]=f*c-m,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const d=a*l,f=a*c,m=o*l,v=o*c;t[0]=l*h,t[4]=v-d*u,t[8]=m*u+f,t[1]=u,t[5]=a*h,t[9]=-o*h,t[2]=-c*h,t[6]=f*u+m,t[10]=d-v*u}else if(e.order==="XZY"){const d=a*l,f=a*c,m=o*l,v=o*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=d*u+v,t[5]=a*h,t[9]=f*u-m,t[2]=m*u-f,t[6]=o*h,t[10]=v*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(yh,e,_h)}lookAt(e,t,n){const i=this.elements;return dt.subVectors(e,t),dt.lengthSq()===0&&(dt.z=1),dt.normalize(),kt.crossVectors(n,dt),kt.lengthSq()===0&&(Math.abs(n.z)===1?dt.x+=1e-4:dt.z+=1e-4,dt.normalize(),kt.crossVectors(n,dt)),kt.normalize(),Ai.crossVectors(dt,kt),i[0]=kt.x,i[4]=Ai.x,i[8]=dt.x,i[1]=kt.y,i[5]=Ai.y,i[9]=dt.y,i[2]=kt.z,i[6]=Ai.z,i[10]=dt.z,this}multiply(e,t){return t!==void 0?(console.warn("THREE.Matrix4: .multiply() now only accepts one argument. Use .multiplyMatrices( a, b ) instead."),this.multiplyMatrices(e,t)):this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],f=n[13],m=n[2],v=n[6],x=n[10],g=n[14],p=n[3],T=n[7],L=n[11],A=n[15],y=i[0],N=i[4],O=i[8],B=i[12],k=i[1],q=i[5],U=i[9],R=i[13],P=i[2],I=i[6],C=i[10],Y=i[14],K=i[3],$=i[7],ae=i[11],se=i[15];return r[0]=a*y+o*k+l*P+c*K,r[4]=a*N+o*q+l*I+c*$,r[8]=a*O+o*U+l*C+c*ae,r[12]=a*B+o*R+l*Y+c*se,r[1]=h*y+u*k+d*P+f*K,r[5]=h*N+u*q+d*I+f*$,r[9]=h*O+u*U+d*C+f*ae,r[13]=h*B+u*R+d*Y+f*se,r[2]=m*y+v*k+x*P+g*K,r[6]=m*N+v*q+x*I+g*$,r[10]=m*O+v*U+x*C+g*ae,r[14]=m*B+v*R+x*Y+g*se,r[3]=p*y+T*k+L*P+A*K,r[7]=p*N+T*q+L*I+A*$,r[11]=p*O+T*U+L*C+A*ae,r[15]=p*B+T*R+L*Y+A*se,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],u=e[6],d=e[10],f=e[14],m=e[3],v=e[7],x=e[11],g=e[15];return m*(+r*l*u-i*c*u-r*o*d+n*c*d+i*o*f-n*l*f)+v*(+t*l*f-t*c*d+r*a*d-i*a*f+i*c*h-r*l*h)+x*(+t*c*u-t*o*f-r*a*u+n*a*f+r*o*h-n*c*h)+g*(-i*o*h-t*l*u+t*o*d+i*a*u-n*a*d+n*l*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=e[9],d=e[10],f=e[11],m=e[12],v=e[13],x=e[14],g=e[15],p=u*x*c-v*d*c+v*l*f-o*x*f-u*l*g+o*d*g,T=m*d*c-h*x*c-m*l*f+a*x*f+h*l*g-a*d*g,L=h*v*c-m*u*c+m*o*f-a*v*f-h*o*g+a*u*g,A=m*u*l-h*v*l-m*o*d+a*v*d+h*o*x-a*u*x,y=t*p+n*T+i*L+r*A;if(y===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const N=1/y;return e[0]=p*N,e[1]=(v*d*r-u*x*r-v*i*f+n*x*f+u*i*g-n*d*g)*N,e[2]=(o*x*r-v*l*r+v*i*c-n*x*c-o*i*g+n*l*g)*N,e[3]=(u*l*r-o*d*r-u*i*c+n*d*c+o*i*f-n*l*f)*N,e[4]=T*N,e[5]=(h*x*r-m*d*r+m*i*f-t*x*f-h*i*g+t*d*g)*N,e[6]=(m*l*r-a*x*r-m*i*c+t*x*c+a*i*g-t*l*g)*N,e[7]=(a*d*r-h*l*r+h*i*c-t*d*c-a*i*f+t*l*f)*N,e[8]=L*N,e[9]=(m*u*r-h*v*r-m*n*f+t*v*f+h*n*g-t*u*g)*N,e[10]=(a*v*r-m*o*r+m*n*c-t*v*c-a*n*g+t*o*g)*N,e[11]=(h*o*r-a*u*r-h*n*c+t*u*c+a*n*f-t*o*f)*N,e[12]=A*N,e[13]=(h*v*i-m*u*i+m*n*d-t*v*d-h*n*x+t*u*x)*N,e[14]=(m*o*i-a*v*i-m*n*l+t*v*l+a*n*x-t*o*x)*N,e[15]=(a*u*i-h*o*i+h*n*l-t*u*l-a*n*d+t*o*d)*N,this}scale(e){const t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),r=1-n,a=e.x,o=e.y,l=e.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-i*l,c*l+i*o,0,c*o+i*l,h*o+n,h*l-i*a,0,c*l-i*o,h*l+i*a,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n){return this.set(1,t,n,0,e,1,n,0,e,t,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,h=a+a,u=o+o,d=r*c,f=r*h,m=r*u,v=a*h,x=a*u,g=o*u,p=l*c,T=l*h,L=l*u,A=n.x,y=n.y,N=n.z;return i[0]=(1-(v+g))*A,i[1]=(f+L)*A,i[2]=(m-T)*A,i[3]=0,i[4]=(f-L)*y,i[5]=(1-(d+g))*y,i[6]=(x+p)*y,i[7]=0,i[8]=(m+T)*N,i[9]=(x-p)*N,i[10]=(1-(d+v))*N,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let r=vn.set(i[0],i[1],i[2]).length();const a=vn.set(i[4],i[5],i[6]).length(),o=vn.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),e.x=i[12],e.y=i[13],e.z=i[14],yt.copy(this);const c=1/r,h=1/a,u=1/o;return yt.elements[0]*=c,yt.elements[1]*=c,yt.elements[2]*=c,yt.elements[4]*=h,yt.elements[5]*=h,yt.elements[6]*=h,yt.elements[8]*=u,yt.elements[9]*=u,yt.elements[10]*=u,t.setFromRotationMatrix(yt),n.x=r,n.y=a,n.z=o,this}makePerspective(e,t,n,i,r,a){a===void 0&&console.warn("THREE.Matrix4: .makePerspective() has been redefined and has a new signature. Please check the docs.");const o=this.elements,l=2*r/(t-e),c=2*r/(n-i),h=(t+e)/(t-e),u=(n+i)/(n-i),d=-(a+r)/(a-r),f=-2*a*r/(a-r);return o[0]=l,o[4]=0,o[8]=h,o[12]=0,o[1]=0,o[5]=c,o[9]=u,o[13]=0,o[2]=0,o[6]=0,o[10]=d,o[14]=f,o[3]=0,o[7]=0,o[11]=-1,o[15]=0,this}makeOrthographic(e,t,n,i,r,a){const o=this.elements,l=1/(t-e),c=1/(n-i),h=1/(a-r),u=(t+e)*l,d=(n+i)*c,f=(a+r)*h;return o[0]=2*l,o[4]=0,o[8]=0,o[12]=-u,o[1]=0,o[5]=2*c,o[9]=0,o[13]=-d,o[2]=0,o[6]=0,o[10]=-2*h,o[14]=-f,o[3]=0,o[7]=0,o[11]=0,o[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}pe.prototype.isMatrix4=!0;const vn=new b,yt=new pe,yh=new b(0,0,0),_h=new b(1,1,1),kt=new b,Ai=new b,dt=new b,da=new pe,fa=new nt;class Gn{constructor(e=0,t=0,n=0,i=Gn.DefaultOrder){this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._order=i||this._order,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t,n){const i=e.elements,r=i[0],a=i[4],o=i[8],l=i[1],c=i[5],h=i[9],u=i[2],d=i[6],f=i[10];switch(t=t||this._order,t){case"XYZ":this._y=Math.asin(ot(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ot(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(ot(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-ot(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(ot(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-ot(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n!==!1&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return da.makeRotationFromQuaternion(e),this.setFromRotationMatrix(da,t,n)}setFromVector3(e,t){return this.set(e.x,e.y,e.z,t||this._order)}reorder(e){return fa.setFromEuler(this),this.setFromQuaternion(fa,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}toVector3(e){return e?e.set(this._x,this._y,this._z):new b(this._x,this._y,this._z)}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}}Gn.prototype.isEuler=!0;Gn.DefaultOrder="XYZ";Gn.RotationOrders=["XYZ","YZX","ZXY","XZY","YXZ","ZYX"];class So{constructor(){this.mask=1}set(e){this.mask=1<<e|0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}}let Mh=0;const pa=new b,xn=new nt,Ot=new pe,Li=new b,jn=new b,bh=new b,wh=new nt,ma=new b(1,0,0),ga=new b(0,1,0),va=new b(0,0,1),Sh={type:"added"},xa={type:"removed"};class Pe extends en{constructor(){super(),Object.defineProperty(this,"id",{value:Mh++}),this.uuid=Et(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Pe.DefaultUp.clone();const e=new b,t=new Gn,n=new nt,i=new b(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new pe},normalMatrix:{value:new tt}}),this.matrix=new pe,this.matrixWorld=new pe,this.matrixAutoUpdate=Pe.DefaultMatrixAutoUpdate,this.matrixWorldNeedsUpdate=!1,this.layers=new So,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return xn.setFromAxisAngle(e,t),this.quaternion.multiply(xn),this}rotateOnWorldAxis(e,t){return xn.setFromAxisAngle(e,t),this.quaternion.premultiply(xn),this}rotateX(e){return this.rotateOnAxis(ma,e)}rotateY(e){return this.rotateOnAxis(ga,e)}rotateZ(e){return this.rotateOnAxis(va,e)}translateOnAxis(e,t){return pa.copy(e).applyQuaternion(this.quaternion),this.position.add(pa.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(ma,e)}translateY(e){return this.translateOnAxis(ga,e)}translateZ(e){return this.translateOnAxis(va,e)}localToWorld(e){return e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return e.applyMatrix4(Ot.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Li.copy(e):Li.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),jn.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ot.lookAt(jn,Li,this.up):Ot.lookAt(Li,jn,this.up),this.quaternion.setFromRotationMatrix(Ot),i&&(Ot.extractRotation(i.matrixWorld),xn.setFromRotationMatrix(Ot),this.quaternion.premultiply(xn.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Sh)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(xa)),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(xa)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),Ot.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ot.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ot),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getWorldPosition(e){return e===void 0&&(console.warn("THREE.Object3D: .getWorldPosition() target is now required"),e=new b),this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return e===void 0&&(console.warn("THREE.Object3D: .getWorldQuaternion() target is now required"),e=new nt),this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(jn,e,bh),e}getWorldScale(e){return e===void 0&&(console.warn("THREE.Object3D: .getWorldScale() target is now required"),e=new b),this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(jn,wh,e),e}getWorldDirection(e){e===void 0&&(console.warn("THREE.Object3D: .getWorldDirection() target is now required"),e=new b),this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{}},n.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),JSON.stringify(this.userData)!=="{}"&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];r(e.shapes,u)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));i.material=o}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];i.animations.push(r(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),u=a(e.shapes),d=a(e.skeletons),f=a(e.animations);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f)}return n.object=i,n;function a(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}Pe.DefaultUp=new b(0,1,0);Pe.DefaultMatrixAutoUpdate=!0;Pe.prototype.isObject3D=!0;const Pr=new b,Eh=new b,Th=new tt;class Lt{constructor(e=new b(1,0,0),t=0){this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=Pr.subVectors(n,t).cross(Eh.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t===void 0&&(console.warn("THREE.Plane: .projectPoint() target is now required"),t=new b),t.copy(this.normal).multiplyScalar(-this.distanceToPoint(e)).add(e)}intersectLine(e,t){t===void 0&&(console.warn("THREE.Plane: .intersectLine() target is now required"),t=new b);const n=e.delta(Pr),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:t.copy(n).multiplyScalar(r).add(e.start)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e===void 0&&(console.warn("THREE.Plane: .coplanarPoint() target is now required"),e=new b),e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Th.getNormalMatrix(e),i=this.coplanarPoint(Pr).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}Lt.prototype.isPlane=!0;const _t=new b,Bt=new b,Ir=new b,zt=new b,yn=new b,_n=new b,ya=new b,Dr=new b,Nr=new b,Fr=new b;class je{constructor(e=new b,t=new b,n=new b){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i===void 0&&(console.warn("THREE.Triangle: .getNormal() target is now required"),i=new b),i.subVectors(n,t),_t.subVectors(e,t),i.cross(_t);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){_t.subVectors(i,t),Bt.subVectors(n,t),Ir.subVectors(e,t);const a=_t.dot(_t),o=_t.dot(Bt),l=_t.dot(Ir),c=Bt.dot(Bt),h=Bt.dot(Ir),u=a*c-o*o;if(r===void 0&&(console.warn("THREE.Triangle: .getBarycoord() target is now required"),r=new b),u===0)return r.set(-2,-1,-1);const d=1/u,f=(c*l-o*h)*d,m=(a*h-o*l)*d;return r.set(1-f-m,m,f)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,zt),zt.x>=0&&zt.y>=0&&zt.x+zt.y<=1}static getUV(e,t,n,i,r,a,o,l){return this.getBarycoord(e,t,n,i,zt),l.set(0,0),l.addScaledVector(r,zt.x),l.addScaledVector(a,zt.y),l.addScaledVector(o,zt.z),l}static isFrontFacing(e,t,n,i){return _t.subVectors(n,t),Bt.subVectors(e,t),_t.cross(Bt).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return _t.subVectors(this.c,this.b),Bt.subVectors(this.a,this.b),_t.cross(Bt).length()*.5}getMidpoint(e){return e===void 0&&(console.warn("THREE.Triangle: .getMidpoint() target is now required"),e=new b),e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return je.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e===void 0&&(console.warn("THREE.Triangle: .getPlane() target is now required"),e=new Lt),e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return je.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,i,r){return je.getUV(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return je.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return je.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){t===void 0&&(console.warn("THREE.Triangle: .closestPointToPoint() target is now required"),t=new b);const n=this.a,i=this.b,r=this.c;let a,o;yn.subVectors(i,n),_n.subVectors(r,n),Dr.subVectors(e,n);const l=yn.dot(Dr),c=_n.dot(Dr);if(l<=0&&c<=0)return t.copy(n);Nr.subVectors(e,i);const h=yn.dot(Nr),u=_n.dot(Nr);if(h>=0&&u<=h)return t.copy(i);const d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return a=l/(l-h),t.copy(n).addScaledVector(yn,a);Fr.subVectors(e,r);const f=yn.dot(Fr),m=_n.dot(Fr);if(m>=0&&f<=m)return t.copy(r);const v=f*c-l*m;if(v<=0&&c>=0&&m<=0)return o=c/(c-m),t.copy(n).addScaledVector(_n,o);const x=h*m-f*u;if(x<=0&&u-h>=0&&f-m>=0)return ya.subVectors(r,i),o=(u-h)/(u-h+(f-m)),t.copy(i).addScaledVector(ya,o);const g=1/(x+v+d);return a=v*g,o=d*g,t.copy(n).addScaledVector(yn,a).addScaledVector(_n,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let Ah=0;function Qe(){Object.defineProperty(this,"id",{value:Ah++}),this.uuid=Et(),this.name="",this.type="Material",this.fog=!0,this.blending=ai,this.side=or,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=vo,this.blendDst=xo,this.blendEquation=Cn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=is,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=th,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Mr,this.stencilZFail=Mr,this.stencilZPass=Mr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaTest=0,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0}Qe.prototype=Object.assign(Object.create(en.prototype),{constructor:Qe,isMaterial:!0,onBuild:function(){},onBeforeCompile:function(){},customProgramCacheKey:function(){return this.onBeforeCompile.toString()},setValues:function(s){if(s!==void 0)for(const e in s){const t=s[e];if(t===void 0){console.warn("THREE.Material: '"+e+"' parameter is undefined.");continue}if(e==="shading"){console.warn("THREE."+this.type+": .shading has been removed. Use the boolean .flatShading instead."),this.flatShading=t===go;continue}const n=this[e];if(n===void 0){console.warn("THREE."+this.type+": '"+e+"' is not a property of this material.");continue}n&&n.isColor?n.set(t):n&&n.isVector3&&t&&t.isVector3?n.copy(t):this[e]=t}},toJSON:function(s){const e=s===void 0||typeof s=="string";e&&(s={textures:{},images:{}});const t={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),this.color&&this.color.isColor&&(t.color=this.color.getHex()),this.roughness!==void 0&&(t.roughness=this.roughness),this.metalness!==void 0&&(t.metalness=this.metalness),this.sheen&&this.sheen.isColor&&(t.sheen=this.sheen.getHex()),this.emissive&&this.emissive.isColor&&(t.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(t.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(t.specular=this.specular.getHex()),this.shininess!==void 0&&(t.shininess=this.shininess),this.clearcoat!==void 0&&(t.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(t.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(t.clearcoatMap=this.clearcoatMap.toJSON(s).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(t.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(s).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(t.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(s).uuid,t.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.map&&this.map.isTexture&&(t.map=this.map.toJSON(s).uuid),this.matcap&&this.matcap.isTexture&&(t.matcap=this.matcap.toJSON(s).uuid),this.alphaMap&&this.alphaMap.isTexture&&(t.alphaMap=this.alphaMap.toJSON(s).uuid),this.lightMap&&this.lightMap.isTexture&&(t.lightMap=this.lightMap.toJSON(s).uuid,t.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(t.aoMap=this.aoMap.toJSON(s).uuid,t.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(t.bumpMap=this.bumpMap.toJSON(s).uuid,t.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(t.normalMap=this.normalMap.toJSON(s).uuid,t.normalMapType=this.normalMapType,t.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(t.displacementMap=this.displacementMap.toJSON(s).uuid,t.displacementScale=this.displacementScale,t.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(t.roughnessMap=this.roughnessMap.toJSON(s).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(t.metalnessMap=this.metalnessMap.toJSON(s).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(t.emissiveMap=this.emissiveMap.toJSON(s).uuid),this.specularMap&&this.specularMap.isTexture&&(t.specularMap=this.specularMap.toJSON(s).uuid),this.envMap&&this.envMap.isTexture&&(t.envMap=this.envMap.toJSON(s).uuid,this.combine!==void 0&&(t.combine=this.combine)),this.envMapIntensity!==void 0&&(t.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(t.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(t.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(t.gradientMap=this.gradientMap.toJSON(s).uuid),this.size!==void 0&&(t.size=this.size),this.shadowSide!==null&&(t.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(t.sizeAttenuation=this.sizeAttenuation),this.blending!==ai&&(t.blending=this.blending),this.side!==or&&(t.side=this.side),this.vertexColors&&(t.vertexColors=!0),this.opacity<1&&(t.opacity=this.opacity),this.transparent===!0&&(t.transparent=this.transparent),t.depthFunc=this.depthFunc,t.depthTest=this.depthTest,t.depthWrite=this.depthWrite,t.colorWrite=this.colorWrite,t.stencilWrite=this.stencilWrite,t.stencilWriteMask=this.stencilWriteMask,t.stencilFunc=this.stencilFunc,t.stencilRef=this.stencilRef,t.stencilFuncMask=this.stencilFuncMask,t.stencilFail=this.stencilFail,t.stencilZFail=this.stencilZFail,t.stencilZPass=this.stencilZPass,this.rotation&&this.rotation!==0&&(t.rotation=this.rotation),this.polygonOffset===!0&&(t.polygonOffset=!0),this.polygonOffsetFactor!==0&&(t.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(t.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth&&this.linewidth!==1&&(t.linewidth=this.linewidth),this.dashSize!==void 0&&(t.dashSize=this.dashSize),this.gapSize!==void 0&&(t.gapSize=this.gapSize),this.scale!==void 0&&(t.scale=this.scale),this.dithering===!0&&(t.dithering=!0),this.alphaTest>0&&(t.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(t.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(t.premultipliedAlpha=this.premultipliedAlpha),this.wireframe===!0&&(t.wireframe=this.wireframe),this.wireframeLinewidth>1&&(t.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(t.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(t.wireframeLinejoin=this.wireframeLinejoin),this.morphTargets===!0&&(t.morphTargets=!0),this.morphNormals===!0&&(t.morphNormals=!0),this.skinning===!0&&(t.skinning=!0),this.flatShading===!0&&(t.flatShading=this.flatShading),this.visible===!1&&(t.visible=!1),this.toneMapped===!1&&(t.toneMapped=!1),JSON.stringify(this.userData)!=="{}"&&(t.userData=this.userData);function n(i){const r=[];for(const a in i){const o=i[a];delete o.metadata,r.push(o)}return r}if(e){const i=n(s.textures),r=n(s.images);i.length>0&&(t.textures=i),r.length>0&&(t.images=r)}return t},clone:function(){return new this.constructor().copy(this)},copy:function(s){this.name=s.name,this.fog=s.fog,this.blending=s.blending,this.side=s.side,this.vertexColors=s.vertexColors,this.opacity=s.opacity,this.transparent=s.transparent,this.blendSrc=s.blendSrc,this.blendDst=s.blendDst,this.blendEquation=s.blendEquation,this.blendSrcAlpha=s.blendSrcAlpha,this.blendDstAlpha=s.blendDstAlpha,this.blendEquationAlpha=s.blendEquationAlpha,this.depthFunc=s.depthFunc,this.depthTest=s.depthTest,this.depthWrite=s.depthWrite,this.stencilWriteMask=s.stencilWriteMask,this.stencilFunc=s.stencilFunc,this.stencilRef=s.stencilRef,this.stencilFuncMask=s.stencilFuncMask,this.stencilFail=s.stencilFail,this.stencilZFail=s.stencilZFail,this.stencilZPass=s.stencilZPass,this.stencilWrite=s.stencilWrite;const e=s.clippingPlanes;let t=null;if(e!==null){const n=e.length;t=new Array(n);for(let i=0;i!==n;++i)t[i]=e[i].clone()}return this.clippingPlanes=t,this.clipIntersection=s.clipIntersection,this.clipShadows=s.clipShadows,this.shadowSide=s.shadowSide,this.colorWrite=s.colorWrite,this.precision=s.precision,this.polygonOffset=s.polygonOffset,this.polygonOffsetFactor=s.polygonOffsetFactor,this.polygonOffsetUnits=s.polygonOffsetUnits,this.dithering=s.dithering,this.alphaTest=s.alphaTest,this.alphaToCoverage=s.alphaToCoverage,this.premultipliedAlpha=s.premultipliedAlpha,this.visible=s.visible,this.toneMapped=s.toneMapped,this.userData=JSON.parse(JSON.stringify(s.userData)),this},dispose:function(){this.dispatchEvent({type:"dispose"})}});Object.defineProperty(Qe.prototype,"needsUpdate",{set:function(s){s===!0&&this.version++}});const Eo={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Mt={h:0,s:0,l:0},Ri={h:0,s:0,l:0};function Or(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}function Br(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function zr(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}class he{constructor(e,t,n){return t===void 0&&n===void 0?this.set(e):this.setRGB(e,t,n)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,this}setRGB(e,t,n){return this.r=e,this.g=t,this.b=n,this}setHSL(e,t,n){if(e=_s(e,1),t=ot(t,0,1),n=ot(n,0,1),t===0)this.r=this.g=this.b=n;else{const i=n<=.5?n*(1+t):n+t-n*t,r=2*n-i;this.r=Or(r,i,e+1/3),this.g=Or(r,i,e),this.b=Or(r,i,e-1/3)}return this}setStyle(e){function t(i){i!==void 0&&parseFloat(i)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let n;if(n=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(e)){let i;const r=n[1],a=n[2];switch(r){case"rgb":case"rgba":if(i=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(255,parseInt(i[1],10))/255,this.g=Math.min(255,parseInt(i[2],10))/255,this.b=Math.min(255,parseInt(i[3],10))/255,t(i[4]),this;if(i=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(100,parseInt(i[1],10))/100,this.g=Math.min(100,parseInt(i[2],10))/100,this.b=Math.min(100,parseInt(i[3],10))/100,t(i[4]),this;break;case"hsl":case"hsla":if(i=/^\s*(\d*\.?\d+)\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a)){const o=parseFloat(i[1])/360,l=parseInt(i[2],10)/100,c=parseInt(i[3],10)/100;return t(i[4]),this.setHSL(o,l,c)}break}}else if(n=/^\#([A-Fa-f\d]+)$/.exec(e)){const i=n[1],r=i.length;if(r===3)return this.r=parseInt(i.charAt(0)+i.charAt(0),16)/255,this.g=parseInt(i.charAt(1)+i.charAt(1),16)/255,this.b=parseInt(i.charAt(2)+i.charAt(2),16)/255,this;if(r===6)return this.r=parseInt(i.charAt(0)+i.charAt(1),16)/255,this.g=parseInt(i.charAt(2)+i.charAt(3),16)/255,this.b=parseInt(i.charAt(4)+i.charAt(5),16)/255,this}return e&&e.length>0?this.setColorName(e):this}setColorName(e){const t=Eo[e.toLowerCase()];return t!==void 0?this.setHex(t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copyGammaToLinear(e,t=2){return this.r=Math.pow(e.r,t),this.g=Math.pow(e.g,t),this.b=Math.pow(e.b,t),this}copyLinearToGamma(e,t=2){const n=t>0?1/t:1;return this.r=Math.pow(e.r,n),this.g=Math.pow(e.g,n),this.b=Math.pow(e.b,n),this}convertGammaToLinear(e){return this.copyGammaToLinear(this,e),this}convertLinearToGamma(e){return this.copyLinearToGamma(this,e),this}copySRGBToLinear(e){return this.r=Br(e.r),this.g=Br(e.g),this.b=Br(e.b),this}copyLinearToSRGB(e){return this.r=zr(e.r),this.g=zr(e.g),this.b=zr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(){return this.r*255<<16^this.g*255<<8^this.b*255<<0}getHexString(){return("000000"+this.getHex().toString(16)).slice(-6)}getHSL(e){e===void 0&&(console.warn("THREE.Color: .getHSL() target is now required"),e={h:0,s:0,l:0});const t=this.r,n=this.g,i=this.b,r=Math.max(t,n,i),a=Math.min(t,n,i);let o,l;const c=(a+r)/2;if(a===r)o=0,l=0;else{const h=r-a;switch(l=c<=.5?h/(r+a):h/(2-r-a),r){case t:o=(n-i)/h+(n<i?6:0);break;case n:o=(i-t)/h+2;break;case i:o=(t-n)/h+4;break}o/=6}return e.h=o,e.s=l,e.l=c,e}getStyle(){return"rgb("+(this.r*255|0)+","+(this.g*255|0)+","+(this.b*255|0)+")"}offsetHSL(e,t,n){return this.getHSL(Mt),Mt.h+=e,Mt.s+=t,Mt.l+=n,this.setHSL(Mt.h,Mt.s,Mt.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Mt),e.getHSL(Ri);const n=hi(Mt.h,Ri.h,t),i=hi(Mt.s,Ri.s,t),r=hi(Mt.l,Ri.l,t);return this.setHSL(n,i,r),this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),e.normalized===!0&&(this.r/=255,this.g/=255,this.b/=255),this}toJSON(){return this.getHex()}}he.NAMES=Eo;he.prototype.isColor=!0;he.prototype.r=1;he.prototype.g=1;he.prototype.b=1;class hr extends Qe{constructor(e){super(),this.type="MeshBasicMaterial",this.color=new he(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=cr,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.skinning=!1,this.morphTargets=!1,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.skinning=e.skinning,this.morphTargets=e.morphTargets,this}}hr.prototype.isMeshBasicMaterial=!0;const He=new b,Ci=new Z;class $e{constructor(e,t,n){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n===!0,this.usage=pi,this.updateRange={offset:0,count:-1},this.version=0,this.onUploadCallback=function(){}}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}copyColorsArray(e){const t=this.array;let n=0;for(let i=0,r=e.length;i<r;i++){let a=e[i];a===void 0&&(console.warn("THREE.BufferAttribute.copyColorsArray(): color is undefined",i),a=new he),t[n++]=a.r,t[n++]=a.g,t[n++]=a.b}return this}copyVector2sArray(e){const t=this.array;let n=0;for(let i=0,r=e.length;i<r;i++){let a=e[i];a===void 0&&(console.warn("THREE.BufferAttribute.copyVector2sArray(): vector is undefined",i),a=new Z),t[n++]=a.x,t[n++]=a.y}return this}copyVector3sArray(e){const t=this.array;let n=0;for(let i=0,r=e.length;i<r;i++){let a=e[i];a===void 0&&(console.warn("THREE.BufferAttribute.copyVector3sArray(): vector is undefined",i),a=new b),t[n++]=a.x,t[n++]=a.y,t[n++]=a.z}return this}copyVector4sArray(e){const t=this.array;let n=0;for(let i=0,r=e.length;i<r;i++){let a=e[i];a===void 0&&(console.warn("THREE.BufferAttribute.copyVector4sArray(): vector is undefined",i),a=new Oe),t[n++]=a.x,t[n++]=a.y,t[n++]=a.z,t[n++]=a.w}return this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Ci.fromBufferAttribute(this,t),Ci.applyMatrix3(e),this.setXY(t,Ci.x,Ci.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)He.fromBufferAttribute(this,t),He.applyMatrix3(e),this.setXYZ(t,He.x,He.y,He.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)He.x=this.getX(t),He.y=this.getY(t),He.z=this.getZ(t),He.applyMatrix4(e),this.setXYZ(t,He.x,He.y,He.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)He.x=this.getX(t),He.y=this.getY(t),He.z=this.getZ(t),He.applyNormalMatrix(e),this.setXYZ(t,He.x,He.y,He.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)He.x=this.getX(t),He.y=this.getY(t),He.z=this.getZ(t),He.transformDirection(e),this.setXYZ(t,He.x,He.y,He.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){return this.array[e*this.itemSize]}setX(e,t){return this.array[e*this.itemSize]=t,this}getY(e){return this.array[e*this.itemSize+1]}setY(e,t){return this.array[e*this.itemSize+1]=t,this}getZ(e){return this.array[e*this.itemSize+2]}setZ(e,t){return this.array[e*this.itemSize+2]=t,this}getW(e){return this.array[e*this.itemSize+3]}setW(e,t){return this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.prototype.slice.call(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==pi&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}}$e.prototype.isBufferAttribute=!0;class To extends $e{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Ao extends $e{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Lh extends $e{constructor(e,t,n){super(new Uint16Array(e),t,n)}}Lh.prototype.isFloat16BufferAttribute=!0;class ke extends $e{constructor(e,t,n){super(new Float32Array(e),t,n)}}function Lo(s){if(s.length===0)return-1/0;let e=s[0];for(let t=1,n=s.length;t<n;++t)s[t]>e&&(e=s[t]);return e}let Rh=0;const At=new pe,Ur=new Pe,Mn=new b,ft=new vt,Zn=new vt,Ze=new b;class Fe extends en{constructor(){super(),Object.defineProperty(this,"id",{value:Rh++}),this.uuid=Et(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Lo(e)>65535?Ao:To)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new tt().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}rotateX(e){return At.makeRotationX(e),this.applyMatrix4(At),this}rotateY(e){return At.makeRotationY(e),this.applyMatrix4(At),this}rotateZ(e){return At.makeRotationZ(e),this.applyMatrix4(At),this}translate(e,t,n){return At.makeTranslation(e,t,n),this.applyMatrix4(At),this}scale(e,t,n){return At.makeScale(e,t,n),this.applyMatrix4(At),this}lookAt(e){return Ur.lookAt(e),Ur.updateMatrix(),this.applyMatrix4(Ur.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Mn).negate(),this.translate(Mn.x,Mn.y,Mn.z),this}setFromPoints(e){const t=[];for(let n=0,i=e.length;n<i;n++){const r=e[n];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new ke(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new vt);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new b(-1/0,-1/0,-1/0),new b(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const r=t[n];ft.setFromBufferAttribute(r),this.morphTargetsRelative?(Ze.addVectors(this.boundingBox.min,ft.min),this.boundingBox.expandByPoint(Ze),Ze.addVectors(this.boundingBox.max,ft.max),this.boundingBox.expandByPoint(Ze)):(this.boundingBox.expandByPoint(ft.min),this.boundingBox.expandByPoint(ft.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Hn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new b,1/0);return}if(e){const n=this.boundingSphere.center;if(ft.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const o=t[r];Zn.setFromBufferAttribute(o),this.morphTargetsRelative?(Ze.addVectors(ft.min,Zn.min),ft.expandByPoint(Ze),Ze.addVectors(ft.max,Zn.max),ft.expandByPoint(Ze)):(ft.expandByPoint(Zn.min),ft.expandByPoint(Zn.max))}ft.getCenter(n);let i=0;for(let r=0,a=e.count;r<a;r++)Ze.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(Ze));if(t)for(let r=0,a=t.length;r<a;r++){const o=t[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Ze.fromBufferAttribute(o,c),l&&(Mn.fromBufferAttribute(e,c),Ze.add(Mn)),i=Math.max(i,n.distanceToSquared(Ze))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeFaceNormals(){}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,i=t.position.array,r=t.normal.array,a=t.uv.array,o=i.length/3;t.tangent===void 0&&this.setAttribute("tangent",new $e(new Float32Array(4*o),4));const l=t.tangent.array,c=[],h=[];for(let k=0;k<o;k++)c[k]=new b,h[k]=new b;const u=new b,d=new b,f=new b,m=new Z,v=new Z,x=new Z,g=new b,p=new b;function T(k,q,U){u.fromArray(i,k*3),d.fromArray(i,q*3),f.fromArray(i,U*3),m.fromArray(a,k*2),v.fromArray(a,q*2),x.fromArray(a,U*2),d.sub(u),f.sub(u),v.sub(m),x.sub(m);const R=1/(v.x*x.y-x.x*v.y);isFinite(R)&&(g.copy(d).multiplyScalar(x.y).addScaledVector(f,-v.y).multiplyScalar(R),p.copy(f).multiplyScalar(v.x).addScaledVector(d,-x.x).multiplyScalar(R),c[k].add(g),c[q].add(g),c[U].add(g),h[k].add(p),h[q].add(p),h[U].add(p))}let L=this.groups;L.length===0&&(L=[{start:0,count:n.length}]);for(let k=0,q=L.length;k<q;++k){const U=L[k],R=U.start,P=U.count;for(let I=R,C=R+P;I<C;I+=3)T(n[I+0],n[I+1],n[I+2])}const A=new b,y=new b,N=new b,O=new b;function B(k){N.fromArray(r,k*3),O.copy(N);const q=c[k];A.copy(q),A.sub(N.multiplyScalar(N.dot(q))).normalize(),y.crossVectors(O,q);const R=y.dot(h[k])<0?-1:1;l[k*4]=A.x,l[k*4+1]=A.y,l[k*4+2]=A.z,l[k*4+3]=R}for(let k=0,q=L.length;k<q;++k){const U=L[k],R=U.start,P=U.count;for(let I=R,C=R+P;I<C;I+=3)B(n[I+0]),B(n[I+1]),B(n[I+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new $e(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);const i=new b,r=new b,a=new b,o=new b,l=new b,c=new b,h=new b,u=new b;if(e)for(let d=0,f=e.count;d<f;d+=3){const m=e.getX(d+0),v=e.getX(d+1),x=e.getX(d+2);i.fromBufferAttribute(t,m),r.fromBufferAttribute(t,v),a.fromBufferAttribute(t,x),h.subVectors(a,r),u.subVectors(i,r),h.cross(u),o.fromBufferAttribute(n,m),l.fromBufferAttribute(n,v),c.fromBufferAttribute(n,x),o.add(h),l.add(h),c.add(h),n.setXYZ(m,o.x,o.y,o.z),n.setXYZ(v,l.x,l.y,l.z),n.setXYZ(x,c.x,c.y,c.z)}else for(let d=0,f=t.count;d<f;d+=3)i.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),h.subVectors(a,r),u.subVectors(i,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}merge(e,t){if(!(e&&e.isBufferGeometry)){console.error("THREE.BufferGeometry.merge(): geometry not an instance of THREE.BufferGeometry.",e);return}t===void 0&&(t=0,console.warn("THREE.BufferGeometry.merge(): Overwriting original geometry, starting at offset=0. Use BufferGeometryUtils.mergeBufferGeometries() for lossless merge."));const n=this.attributes;for(const i in n){if(e.attributes[i]===void 0)continue;const a=n[i].array,o=e.attributes[i],l=o.array,c=o.itemSize*t,h=Math.min(l.length,a.length-c);for(let u=0,d=c;u<h;u++,d++)a[d]=l[u]}return this}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Ze.fromBufferAttribute(e,t),Ze.normalize(),e.setXYZ(t,Ze.x,Ze.y,Ze.z)}toNonIndexed(){function e(o,l){const c=o.array,h=o.itemSize,u=o.normalized,d=new c.constructor(l.length*h);let f=0,m=0;for(let v=0,x=l.length;v<x;v++){f=l[v]*h;for(let g=0;g<h;g++)d[m++]=c[f++]}return new $e(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Fe,n=this.index.array,i=this.attributes;for(const o in i){const l=i[o],c=e(l,n);t.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let h=0,u=c.length;h<u;h++){const d=c[h],f=e(d,n);l.push(f)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){const f=c[u];h.push(f.toJSON(e.data))}h.length>0&&(i[l]=h,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new Fe().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const c in i){const h=i[c];this.setAttribute(c,h.clone(t))}const r=e.morphAttributes;for(const c in r){const h=[],u=r[c];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,h=a.length;c<h;c++){const u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}Fe.prototype.isBufferGeometry=!0;const _a=new pe,bn=new hn,Hr=new Hn,Vt=new b,Wt=new b,Xt=new b,Gr=new b,kr=new b,Vr=new b,Pi=new b,Ii=new b,Di=new b,Ni=new Z,Fi=new Z,Oi=new Z,Wr=new b,Bi=new b;class pt extends Pe{constructor(e=new Fe,t=new hr){super(),this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e){return super.copy(e),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const e=this.geometry;if(e.isBufferGeometry){const t=e.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}else{const t=e.morphTargets;t!==void 0&&t.length>0&&console.error("THREE.Mesh.updateMorphTargets() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.")}}raycast(e,t){const n=this.geometry,i=this.material,r=this.matrixWorld;if(i===void 0||(n.boundingSphere===null&&n.computeBoundingSphere(),Hr.copy(n.boundingSphere),Hr.applyMatrix4(r),e.ray.intersectsSphere(Hr)===!1)||(_a.copy(r).invert(),bn.copy(e.ray).applyMatrix4(_a),n.boundingBox!==null&&bn.intersectsBox(n.boundingBox)===!1))return;let a;if(n.isBufferGeometry){const o=n.index,l=n.attributes.position,c=n.morphAttributes.position,h=n.morphTargetsRelative,u=n.attributes.uv,d=n.attributes.uv2,f=n.groups,m=n.drawRange;if(o!==null)if(Array.isArray(i))for(let v=0,x=f.length;v<x;v++){const g=f[v],p=i[g.materialIndex],T=Math.max(g.start,m.start),L=Math.min(g.start+g.count,m.start+m.count);for(let A=T,y=L;A<y;A+=3){const N=o.getX(A),O=o.getX(A+1),B=o.getX(A+2);a=zi(this,p,e,bn,l,c,h,u,d,N,O,B),a&&(a.faceIndex=Math.floor(A/3),a.face.materialIndex=g.materialIndex,t.push(a))}}else{const v=Math.max(0,m.start),x=Math.min(o.count,m.start+m.count);for(let g=v,p=x;g<p;g+=3){const T=o.getX(g),L=o.getX(g+1),A=o.getX(g+2);a=zi(this,i,e,bn,l,c,h,u,d,T,L,A),a&&(a.faceIndex=Math.floor(g/3),t.push(a))}}else if(l!==void 0)if(Array.isArray(i))for(let v=0,x=f.length;v<x;v++){const g=f[v],p=i[g.materialIndex],T=Math.max(g.start,m.start),L=Math.min(g.start+g.count,m.start+m.count);for(let A=T,y=L;A<y;A+=3){const N=A,O=A+1,B=A+2;a=zi(this,p,e,bn,l,c,h,u,d,N,O,B),a&&(a.faceIndex=Math.floor(A/3),a.face.materialIndex=g.materialIndex,t.push(a))}}else{const v=Math.max(0,m.start),x=Math.min(l.count,m.start+m.count);for(let g=v,p=x;g<p;g+=3){const T=g,L=g+1,A=g+2;a=zi(this,i,e,bn,l,c,h,u,d,T,L,A),a&&(a.faceIndex=Math.floor(g/3),t.push(a))}}}else n.isGeometry&&console.error("THREE.Mesh.raycast() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.")}}pt.prototype.isMesh=!0;function Ch(s,e,t,n,i,r,a,o){let l;if(e.side===Je?l=n.intersectTriangle(a,r,i,!0,o):l=n.intersectTriangle(i,r,a,e.side!==lr,o),l===null)return null;Bi.copy(o),Bi.applyMatrix4(s.matrixWorld);const c=t.ray.origin.distanceTo(Bi);return c<t.near||c>t.far?null:{distance:c,point:Bi.clone(),object:s}}function zi(s,e,t,n,i,r,a,o,l,c,h,u){Vt.fromBufferAttribute(i,c),Wt.fromBufferAttribute(i,h),Xt.fromBufferAttribute(i,u);const d=s.morphTargetInfluences;if(e.morphTargets&&r&&d){Pi.set(0,0,0),Ii.set(0,0,0),Di.set(0,0,0);for(let m=0,v=r.length;m<v;m++){const x=d[m],g=r[m];x!==0&&(Gr.fromBufferAttribute(g,c),kr.fromBufferAttribute(g,h),Vr.fromBufferAttribute(g,u),a?(Pi.addScaledVector(Gr,x),Ii.addScaledVector(kr,x),Di.addScaledVector(Vr,x)):(Pi.addScaledVector(Gr.sub(Vt),x),Ii.addScaledVector(kr.sub(Wt),x),Di.addScaledVector(Vr.sub(Xt),x)))}Vt.add(Pi),Wt.add(Ii),Xt.add(Di)}s.isSkinnedMesh&&e.skinning&&(s.boneTransform(c,Vt),s.boneTransform(h,Wt),s.boneTransform(u,Xt));const f=Ch(s,e,t,n,Vt,Wt,Xt,Wr);if(f){o&&(Ni.fromBufferAttribute(o,c),Fi.fromBufferAttribute(o,h),Oi.fromBufferAttribute(o,u),f.uv=je.getUV(Wr,Vt,Wt,Xt,Ni,Fi,Oi,new Z)),l&&(Ni.fromBufferAttribute(l,c),Fi.fromBufferAttribute(l,h),Oi.fromBufferAttribute(l,u),f.uv2=je.getUV(Wr,Vt,Wt,Xt,Ni,Fi,Oi,new Z));const m={a:c,b:h,c:u,normal:new b,materialIndex:0};je.getNormal(Vt,Wt,Xt,m.normal),f.face=m}return f}class Ms extends Fe{constructor(e=1,t=1,n=1,i=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:a};const o=this;i=Math.floor(i),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],h=[],u=[];let d=0,f=0;m("z","y","x",-1,-1,n,t,e,a,r,0),m("z","y","x",1,-1,n,t,-e,a,r,1),m("x","z","y",1,1,e,n,t,i,a,2),m("x","z","y",1,-1,e,n,-t,i,a,3),m("x","y","z",1,-1,e,t,n,i,r,4),m("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new ke(c,3)),this.setAttribute("normal",new ke(h,3)),this.setAttribute("uv",new ke(u,2));function m(v,x,g,p,T,L,A,y,N,O,B){const k=L/N,q=A/O,U=L/2,R=A/2,P=y/2,I=N+1,C=O+1;let Y=0,K=0;const $=new b;for(let ae=0;ae<C;ae++){const se=ae*q-R;for(let ue=0;ue<I;ue++){const me=ue*k-U;$[v]=me*p,$[x]=se*T,$[g]=P,c.push($.x,$.y,$.z),$[v]=0,$[x]=0,$[g]=y>0?1:-1,h.push($.x,$.y,$.z),u.push(ue/N),u.push(1-ae/O),Y+=1}}for(let ae=0;ae<O;ae++)for(let se=0;se<N;se++){const ue=d+se+I*ae,me=d+se+I*(ae+1),H=d+(se+1)+I*(ae+1),Ie=d+(se+1)+I*ae;l.push(ue,me,Ie),l.push(me,H,Ie),K+=6}o.addGroup(f,K,B),f+=K,d+=Y}}}function On(s){const e={};for(const t in s){e[t]={};for(const n in s[t]){const i=s[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function rt(s){const e={};for(let t=0;t<s.length;t++){const n=On(s[t]);for(const i in n)e[i]=n[i]}return e}const Ph={clone:On,merge:rt};var Ih=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Dh=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class $t extends Qe{constructor(e){super(),this.type="ShaderMaterial",this.defines={},this.uniforms={},this.vertexShader=Ih,this.fragmentShader=Dh,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.skinning=!1,this.morphTargets=!1,this.morphNormals=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&(e.attributes!==void 0&&console.error("THREE.ShaderMaterial: attributes should now be defined in THREE.BufferGeometry instead."),this.setValues(e))}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=On(e.uniforms),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.lights=e.lights,this.clipping=e.clipping,this.skinning=e.skinning,this.morphTargets=e.morphTargets,this.morphNormals=e.morphNormals,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const a=this.uniforms[i].value;a&&a.isTexture?t.uniforms[i]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[i]={type:"m4",value:a.toArray()}:t.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}$t.prototype.isShaderMaterial=!0;class bs extends Pe{constructor(){super(),this.type="Camera",this.matrixWorldInverse=new pe,this.projectionMatrix=new pe,this.projectionMatrixInverse=new pe}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){e===void 0&&(console.warn("THREE.Camera: .getWorldDirection() target is now required"),e=new b),this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}bs.prototype.isCamera=!0;class ut extends bs{constructor(e=50,t=1,n=.1,i=2e3){super(),this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=mi*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ci*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return mi*2*Math.atan(Math.tan(ci*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,i,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(ci*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*i/l,t-=a.offsetY*n/c,i*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}ut.prototype.isPerspectiveCamera=!0;const wn=90,Sn=1;class ws extends Pe{constructor(e,t,n){if(super(),this.type="CubeCamera",n.isWebGLCubeRenderTarget!==!0){console.error("THREE.CubeCamera: The constructor now expects an instance of WebGLCubeRenderTarget as third parameter.");return}this.renderTarget=n;const i=new ut(wn,Sn,e,t);i.layers=this.layers,i.up.set(0,-1,0),i.lookAt(new b(1,0,0)),this.add(i);const r=new ut(wn,Sn,e,t);r.layers=this.layers,r.up.set(0,-1,0),r.lookAt(new b(-1,0,0)),this.add(r);const a=new ut(wn,Sn,e,t);a.layers=this.layers,a.up.set(0,0,1),a.lookAt(new b(0,1,0)),this.add(a);const o=new ut(wn,Sn,e,t);o.layers=this.layers,o.up.set(0,0,-1),o.lookAt(new b(0,-1,0)),this.add(o);const l=new ut(wn,Sn,e,t);l.layers=this.layers,l.up.set(0,-1,0),l.lookAt(new b(0,0,1)),this.add(l);const c=new ut(wn,Sn,e,t);c.layers=this.layers,c.up.set(0,-1,0),c.lookAt(new b(0,0,-1)),this.add(c)}update(e,t){this.parent===null&&this.updateMatrixWorld();const n=this.renderTarget,[i,r,a,o,l,c]=this.children,h=e.xr.enabled,u=e.getRenderTarget();e.xr.enabled=!1;const d=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0),e.render(t,i),e.setRenderTarget(n,1),e.render(t,r),e.setRenderTarget(n,2),e.render(t,a),e.setRenderTarget(n,3),e.render(t,o),e.setRenderTarget(n,4),e.render(t,l),n.texture.generateMipmaps=d,e.setRenderTarget(n,5),e.render(t,c),e.setRenderTarget(u),e.xr.enabled=h}}class ur extends it{constructor(e,t,n,i,r,a,o,l,c,h){e=e!==void 0?e:[],t=t!==void 0?t:fs,o=o!==void 0?o:ln,super(e,t,n,i,r,a,o,l,c,h),this._needsFlipEnvMap=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}ur.prototype.isCubeTexture=!0;class Ro extends cn{constructor(e,t,n){Number.isInteger(t)&&(console.warn("THREE.WebGLCubeRenderTarget: constructor signature is now WebGLCubeRenderTarget( size, options )"),t=n),super(e,e,t),t=t||{},this.texture=new ur(void 0,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.encoding),this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:mt,this.texture._needsFlipEnvMap=!1}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.format=St,this.texture.encoding=t.encoding,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Ms(5,5,5),r=new $t({name:"CubemapFromEquirect",uniforms:On(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Je,blending:si});r.uniforms.tEquirect.value=t;const a=new pt(i,r),o=t.minFilter;return t.minFilter===vs&&(t.minFilter=mt),new ws(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,i){const r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,i);e.setRenderTarget(r)}}Ro.prototype.isWebGLCubeRenderTarget=!0;class Co extends it{constructor(e,t,n,i,r,a,o,l,c,h,u,d){super(null,a,o,l,c,h,i,r,u,d),this.image={data:e||null,width:t||1,height:n||1},this.magFilter=c!==void 0?c:lt,this.minFilter=h!==void 0?h:lt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.needsUpdate=!0}}Co.prototype.isDataTexture=!0;const En=new Hn,Ui=new b;class dr{constructor(e=new Lt,t=new Lt,n=new Lt,i=new Lt,r=new Lt,a=new Lt){this.planes=[e,t,n,i,r,a]}set(e,t,n,i,r,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(i),o[4].copy(r),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e){const t=this.planes,n=e.elements,i=n[0],r=n[1],a=n[2],o=n[3],l=n[4],c=n[5],h=n[6],u=n[7],d=n[8],f=n[9],m=n[10],v=n[11],x=n[12],g=n[13],p=n[14],T=n[15];return t[0].setComponents(o-i,u-l,v-d,T-x).normalize(),t[1].setComponents(o+i,u+l,v+d,T+x).normalize(),t[2].setComponents(o+r,u+c,v+f,T+g).normalize(),t[3].setComponents(o-r,u-c,v-f,T-g).normalize(),t[4].setComponents(o-a,u-h,v-m,T-p).normalize(),t[5].setComponents(o+a,u+h,v+m,T+p).normalize(),this}intersectsObject(e){const t=e.geometry;return t.boundingSphere===null&&t.computeBoundingSphere(),En.copy(t.boundingSphere).applyMatrix4(e.matrixWorld),this.intersectsSphere(En)}intersectsSprite(e){return En.center.set(0,0,0),En.radius=.7071067811865476,En.applyMatrix4(e.matrixWorld),this.intersectsSphere(En)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(Ui.x=i.normal.x>0?e.max.x:e.min.x,Ui.y=i.normal.y>0?e.max.y:e.min.y,Ui.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Ui)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Po(){let s=null,e=!1,t=null,n=null;function i(r,a){t(r,a),n=s.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=s.requestAnimationFrame(i),e=!0)},stop:function(){s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function Nh(s,e){const t=e.isWebGL2,n=new WeakMap;function i(c,h){const u=c.array,d=c.usage,f=s.createBuffer();s.bindBuffer(h,f),s.bufferData(h,u,d),c.onUploadCallback();let m=5126;return u instanceof Float32Array?m=5126:u instanceof Float64Array?console.warn("THREE.WebGLAttributes: Unsupported data buffer format: Float64Array."):u instanceof Uint16Array?c.isFloat16BufferAttribute?t?m=5131:console.warn("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2."):m=5123:u instanceof Int16Array?m=5122:u instanceof Uint32Array?m=5125:u instanceof Int32Array?m=5124:u instanceof Int8Array?m=5120:u instanceof Uint8Array&&(m=5121),{buffer:f,type:m,bytesPerElement:u.BYTES_PER_ELEMENT,version:c.version}}function r(c,h,u){const d=h.array,f=h.updateRange;s.bindBuffer(u,c),f.count===-1?s.bufferSubData(u,0,d):(t?s.bufferSubData(u,f.offset*d.BYTES_PER_ELEMENT,d,f.offset,f.count):s.bufferSubData(u,f.offset*d.BYTES_PER_ELEMENT,d.subarray(f.offset,f.offset+f.count)),f.count=-1)}function a(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function o(c){c.isInterleavedBufferAttribute&&(c=c.data);const h=n.get(c);h&&(s.deleteBuffer(h.buffer),n.delete(c))}function l(c,h){if(c.isGLBufferAttribute){const d=n.get(c);(!d||d.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const u=n.get(c);u===void 0?n.set(c,i(c,h)):u.version<c.version&&(r(u.buffer,c,h),u.version=c.version)}return{get:a,remove:o,update:l}}class Fh extends Fe{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const r=e/2,a=t/2,o=Math.floor(n),l=Math.floor(i),c=o+1,h=l+1,u=e/o,d=t/l,f=[],m=[],v=[],x=[];for(let g=0;g<h;g++){const p=g*d-a;for(let T=0;T<c;T++){const L=T*u-r;m.push(L,-p,0),v.push(0,0,1),x.push(T/o),x.push(1-g/l)}}for(let g=0;g<l;g++)for(let p=0;p<o;p++){const T=p+c*g,L=p+c*(g+1),A=p+1+c*(g+1),y=p+1+c*g;f.push(T,L,y),f.push(L,A,y)}this.setIndex(f),this.setAttribute("position",new ke(m,3)),this.setAttribute("normal",new ke(v,3)),this.setAttribute("uv",new ke(x,2))}}var Oh=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,Bh=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,zh=`#ifdef ALPHATEST
	if ( diffuseColor.a < ALPHATEST ) discard;
#endif`,Uh=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.specularRoughness );
	#endif
#endif`,Hh=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Gh="vec3 transformed = vec3( position );",kh=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Vh=`vec2 integrateSpecularBRDF( const in float dotNV, const in float roughness ) {
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	return vec2( -1.04, 1.04 ) * a004 + r.zw;
}
float punctualLightIntensityToIrradianceFactor( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
#if defined ( PHYSICALLY_CORRECT_LIGHTS )
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
#else
	if( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
		return pow( saturate( -lightDistance / cutoffDistance + 1.0 ), decayExponent );
	}
	return 1.0;
#endif
}
vec3 BRDF_Diffuse_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 specularColor, const in float dotLH ) {
	float fresnel = exp2( ( -5.55473 * dotLH - 6.98316 ) * dotLH );
	return ( 1.0 - specularColor ) * fresnel + specularColor;
}
vec3 F_Schlick_RoughnessDependent( const in vec3 F0, const in float dotNV, const in float roughness ) {
	float fresnel = exp2( ( -5.55473 * dotNV - 6.98316 ) * dotNV );
	vec3 Fr = max( vec3( 1.0 - roughness ), F0 ) - F0;
	return Fr * fresnel + F0;
}
float G_GGX_Smith( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gl = dotNL + sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	float gv = dotNV + sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	return 1.0 / ( gl * gv );
}
float G_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
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
vec3 BRDF_Specular_GGX( const in IncidentLight incidentLight, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float roughness ) {
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( incidentLight.direction + viewDir );
	float dotNL = saturate( dot( normal, incidentLight.direction ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotLH = saturate( dot( incidentLight.direction, halfDir ) );
	vec3 F = F_Schlick( specularColor, dotLH );
	float G = G_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
	return F * ( G * D );
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
vec3 BRDF_Specular_GGX_Environment( const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 brdf = integrateSpecularBRDF( dotNV, roughness );
	return specularColor * brdf.x + brdf.y;
}
void BRDF_Specular_Multiscattering_Environment( const in GeometricContext geometry, const in vec3 specularColor, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
	float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
	vec3 F = F_Schlick_RoughnessDependent( specularColor, dotNV, roughness );
	vec2 brdf = integrateSpecularBRDF( dotNV, roughness );
	vec3 FssEss = F * brdf.x + brdf.y;
	float Ess = brdf.x + brdf.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = specularColor + ( 1.0 - specularColor ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_Specular_BlinnPhong( const in IncidentLight incidentLight, const in GeometricContext geometry, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( incidentLight.direction + geometry.viewDir );
	float dotNH = saturate( dot( geometry.normal, halfDir ) );
	float dotLH = saturate( dot( incidentLight.direction, halfDir ) );
	vec3 F = F_Schlick( specularColor, dotLH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
}
float GGXRoughnessToBlinnExponent( const in float ggxRoughness ) {
	return ( 2.0 / pow2( ggxRoughness + 0.0001 ) - 2.0 );
}
float BlinnExponentToGGXRoughness( const in float blinnExponent ) {
	return sqrt( 2.0 / ( blinnExponent + 2.0 ) );
}
#if defined( USE_SHEEN )
float D_Charlie(float roughness, float NoH) {
	float invAlpha = 1.0 / roughness;
	float cos2h = NoH * NoH;
	float sin2h = max(1.0 - cos2h, 0.0078125);	return (2.0 + invAlpha) * pow(sin2h, invAlpha * 0.5) / (2.0 * PI);
}
float V_Neubelt(float NoV, float NoL) {
	return saturate(1.0 / (4.0 * (NoL + NoV - NoL * NoV)));
}
vec3 BRDF_Specular_Sheen( const in float roughness, const in vec3 L, const in GeometricContext geometry, vec3 specularColor ) {
	vec3 N = geometry.normal;
	vec3 V = geometry.viewDir;
	vec3 H = normalize( V + L );
	float dotNH = saturate( dot( N, H ) );
	return specularColor * D_Charlie( roughness, dotNH ) * V_Neubelt( dot(N, V), dot(N, L) );
}
#endif`,Wh=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vUv );
		vec2 dSTdy = dFdy( vUv );
		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = vec3( dFdx( surf_pos.x ), dFdx( surf_pos.y ), dFdx( surf_pos.z ) );
		vec3 vSigmaY = vec3( dFdy( surf_pos.x ), dFdy( surf_pos.y ), dFdy( surf_pos.z ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Xh=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
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
#endif`,qh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Yh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,jh=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Zh=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Jh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,$h=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Qh=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Kh=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate(a) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement(a) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float average( const in vec3 color ) { return dot( color, vec3( 0.3333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract(sin(sn) * c);
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float max3( vec3 v ) { return max( max( v.x, v.y ), v.z ); }
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
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
vec3 projectOnPlane(in vec3 point, in vec3 pointOnPlane, in vec3 planeNormal ) {
	float distance = dot( planeNormal, point - pointOnPlane );
	return - distance * planeNormal + point;
}
float sideOfPlane( in vec3 point, in vec3 pointOnPlane, in vec3 planeNormal ) {
	return sign( dot( point - pointOnPlane, planeNormal ) );
}
vec3 linePlaneIntersect( in vec3 pointOnLine, in vec3 lineDirection, in vec3 pointOnPlane, in vec3 planeNormal ) {
	return lineDirection * ( dot( planeNormal, pointOnPlane - pointOnLine ) / dot( planeNormal, lineDirection ) ) + pointOnLine;
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float linearToRelativeLuminance( const in vec3 color ) {
	vec3 weights = vec3( 0.2126, 0.7152, 0.0722 );
	return dot( weights, color.rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}`,eu=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_maxMipLevel 8.0
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_maxTileSize 256.0
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
		float texelSize = 1.0 / ( 3.0 * cubeUV_maxTileSize );
		vec2 uv = getUV( direction, face ) * ( faceSize - 1.0 );
		vec2 f = fract( uv );
		uv += 0.5 - f;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		if ( mipInt < cubeUV_maxMipLevel ) {
			uv.y += 2.0 * cubeUV_maxTileSize;
		}
		uv.y += filterInt * 2.0 * cubeUV_minTileSize;
		uv.x += 3.0 * max( 0.0, cubeUV_maxTileSize - 2.0 * faceSize );
		uv *= texelSize;
		vec3 tl = envMapTexelToLinear( texture2D( envMap, uv ) ).rgb;
		uv.x += texelSize;
		vec3 tr = envMapTexelToLinear( texture2D( envMap, uv ) ).rgb;
		uv.y += texelSize;
		vec3 br = envMapTexelToLinear( texture2D( envMap, uv ) ).rgb;
		uv.x -= texelSize;
		vec3 bl = envMapTexelToLinear( texture2D( envMap, uv ) ).rgb;
		vec3 tm = mix( tl, tr, f.x );
		vec3 bm = mix( bl, br, f.x );
		return mix( tm, bm, f.y );
	}
	#define r0 1.0
	#define v0 0.339
	#define m0 - 2.0
	#define r1 0.8
	#define v1 0.276
	#define m1 - 1.0
	#define r4 0.4
	#define v4 0.046
	#define m4 2.0
	#define r5 0.305
	#define v5 0.016
	#define m5 3.0
	#define r6 0.21
	#define v6 0.0038
	#define m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= r1 ) {
			mip = ( r0 - roughness ) * ( m1 - m0 ) / ( r0 - r1 ) + m0;
		} else if ( roughness >= r4 ) {
			mip = ( r1 - roughness ) * ( m4 - m1 ) / ( r1 - r4 ) + m1;
		} else if ( roughness >= r5 ) {
			mip = ( r4 - roughness ) * ( m5 - m4 ) / ( r4 - r5 ) + m4;
		} else if ( roughness >= r6 ) {
			mip = ( r5 - roughness ) * ( m6 - m5 ) / ( r5 - r6 ) + m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), m0, cubeUV_maxMipLevel );
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
#endif`,tu=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,nu=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,iu=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,ru=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	emissiveColor.rgb = emissiveMapTexelToLinear( emissiveColor ).rgb;
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,su=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,au="gl_FragColor = linearToOutputTexel( gl_FragColor );",ou=`
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 GammaToLinear( in vec4 value, in float gammaFactor ) {
	return vec4( pow( value.rgb, vec3( gammaFactor ) ), value.a );
}
vec4 LinearToGamma( in vec4 value, in float gammaFactor ) {
	return vec4( pow( value.rgb, vec3( 1.0 / gammaFactor ) ), value.a );
}
vec4 sRGBToLinear( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 RGBEToLinear( in vec4 value ) {
	return vec4( value.rgb * exp2( value.a * 255.0 - 128.0 ), 1.0 );
}
vec4 LinearToRGBE( in vec4 value ) {
	float maxComponent = max( max( value.r, value.g ), value.b );
	float fExp = clamp( ceil( log2( maxComponent ) ), -128.0, 127.0 );
	return vec4( value.rgb / exp2( fExp ), ( fExp + 128.0 ) / 255.0 );
}
vec4 RGBMToLinear( in vec4 value, in float maxRange ) {
	return vec4( value.rgb * value.a * maxRange, 1.0 );
}
vec4 LinearToRGBM( in vec4 value, in float maxRange ) {
	float maxRGB = max( value.r, max( value.g, value.b ) );
	float M = clamp( maxRGB / maxRange, 0.0, 1.0 );
	M = ceil( M * 255.0 ) / 255.0;
	return vec4( value.rgb / ( M * maxRange ), M );
}
vec4 RGBDToLinear( in vec4 value, in float maxRange ) {
	return vec4( value.rgb * ( ( maxRange / 255.0 ) / value.a ), 1.0 );
}
vec4 LinearToRGBD( in vec4 value, in float maxRange ) {
	float maxRGB = max( value.r, max( value.g, value.b ) );
	float D = max( maxRange / maxRGB, 1.0 );
	D = clamp( floor( D ) / 255.0, 0.0, 1.0 );
	return vec4( value.rgb * ( D * ( 255.0 / maxRange ) ), D );
}
const mat3 cLogLuvM = mat3( 0.2209, 0.3390, 0.4184, 0.1138, 0.6780, 0.7319, 0.0102, 0.1130, 0.2969 );
vec4 LinearToLogLuv( in vec4 value ) {
	vec3 Xp_Y_XYZp = cLogLuvM * value.rgb;
	Xp_Y_XYZp = max( Xp_Y_XYZp, vec3( 1e-6, 1e-6, 1e-6 ) );
	vec4 vResult;
	vResult.xy = Xp_Y_XYZp.xy / Xp_Y_XYZp.z;
	float Le = 2.0 * log2(Xp_Y_XYZp.y) + 127.0;
	vResult.w = fract( Le );
	vResult.z = ( Le - ( floor( vResult.w * 255.0 ) ) / 255.0 ) / 255.0;
	return vResult;
}
const mat3 cLogLuvInverseM = mat3( 6.0014, -2.7008, -1.7996, -1.3320, 3.1029, -5.7721, 0.3008, -1.0882, 5.6268 );
vec4 LogLuvToLinear( in vec4 value ) {
	float Le = value.z * 255.0 + value.w;
	vec3 Xp_Y_XYZp;
	Xp_Y_XYZp.y = exp2( ( Le - 127.0 ) / 2.0 );
	Xp_Y_XYZp.z = Xp_Y_XYZp.y / value.y;
	Xp_Y_XYZp.x = value.x * Xp_Y_XYZp.z;
	vec3 vRGB = cLogLuvInverseM * Xp_Y_XYZp.rgb;
	return vec4( max( vRGB, 0.0 ), 1.0 );
}`,lu=`#ifdef USE_ENVMAP
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
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 envColor = textureCubeUV( envMap, reflectVec, 0.0 );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifndef ENVMAP_TYPE_CUBE_UV
		envColor = envMapTexelToLinear( envColor );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,cu=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform int maxMipLevel;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,hu=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,uu=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) ||defined( PHONG )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,du=`#ifdef USE_ENVMAP
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
#endif`,fu=`#ifdef USE_FOG
	fogDepth = - mvPosition.z;
#endif`,pu=`#ifdef USE_FOG
	varying float fogDepth;
#endif`,mu=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * fogDepth * fogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, fogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,gu=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float fogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,vu=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return texture2D( gradientMap, coord ).rgb;
	#else
		return ( coord.x < 0.7 ) ? vec3( 0.7 ) : vec3( 1.0 );
	#endif
}`,xu=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel= texture2D( lightMap, vUv2 );
	reflectedLight.indirectDiffuse += PI * lightMapTexelToLinear( lightMapTexel ).rgb * lightMapIntensity;
#endif`,yu=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,_u=`vec3 diffuse = vec3( 1.0 );
GeometricContext geometry;
geometry.position = mvPosition.xyz;
geometry.normal = normalize( transformedNormal );
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( -mvPosition.xyz );
GeometricContext backGeometry;
backGeometry.position = geometry.position;
backGeometry.normal = -geometry.normal;
backGeometry.viewDir = geometry.viewDir;
vLightFront = vec3( 0.0 );
vIndirectFront = vec3( 0.0 );
#ifdef DOUBLE_SIDED
	vLightBack = vec3( 0.0 );
	vIndirectBack = vec3( 0.0 );
#endif
IncidentLight directLight;
float dotNL;
vec3 directLightColor_Diffuse;
vIndirectFront += getAmbientLightIrradiance( ambientLightColor );
vIndirectFront += getLightProbeIrradiance( lightProbe, geometry );
#ifdef DOUBLE_SIDED
	vIndirectBack += getAmbientLightIrradiance( ambientLightColor );
	vIndirectBack += getLightProbeIrradiance( lightProbe, backGeometry );
#endif
#if NUM_POINT_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		getPointDirectLightIrradiance( pointLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = PI * directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( -dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_SPOT_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		getSpotDirectLightIrradiance( spotLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = PI * directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( -dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_DIR_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		getDirectionalDirectLightIrradiance( directionalLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = PI * directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( -dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_HEMI_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
		vIndirectFront += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry );
		#ifdef DOUBLE_SIDED
			vIndirectBack += getHemisphereLightIrradiance( hemisphereLights[ i ], backGeometry );
		#endif
	}
	#pragma unroll_loop_end
#endif`,Mu=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
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
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in GeometricContext geometry ) {
	vec3 worldNormal = inverseTransformDirection( geometry.normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	#ifndef PHYSICALLY_CORRECT_LIGHTS
		irradiance *= PI;
	#endif
	return irradiance;
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalDirectLightIrradiance( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight directLight ) {
		directLight.color = directionalLight.color;
		directLight.direction = directionalLight.direction;
		directLight.visible = true;
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
	void getPointDirectLightIrradiance( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight directLight ) {
		vec3 lVector = pointLight.position - geometry.position;
		directLight.direction = normalize( lVector );
		float lightDistance = length( lVector );
		directLight.color = pointLight.color;
		directLight.color *= punctualLightIntensityToIrradianceFactor( lightDistance, pointLight.distance, pointLight.decay );
		directLight.visible = ( directLight.color != vec3( 0.0 ) );
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
	void getSpotDirectLightIrradiance( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight directLight ) {
		vec3 lVector = spotLight.position - geometry.position;
		directLight.direction = normalize( lVector );
		float lightDistance = length( lVector );
		float angleCos = dot( directLight.direction, spotLight.direction );
		if ( angleCos > spotLight.coneCos ) {
			float spotEffect = smoothstep( spotLight.coneCos, spotLight.penumbraCos, angleCos );
			directLight.color = spotLight.color;
			directLight.color *= spotEffect * punctualLightIntensityToIrradianceFactor( lightDistance, spotLight.distance, spotLight.decay );
			directLight.visible = true;
		} else {
			directLight.color = vec3( 0.0 );
			directLight.visible = false;
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
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in GeometricContext geometry ) {
		float dotNL = dot( geometry.normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		#ifndef PHYSICALLY_CORRECT_LIGHTS
			irradiance *= PI;
		#endif
		return irradiance;
	}
#endif`,bu=`#if defined( USE_ENVMAP )
	#ifdef ENVMAP_MODE_REFRACTION
		uniform float refractionRatio;
	#endif
	vec3 getLightProbeIndirectIrradiance( const in GeometricContext geometry, const in int maxMIPLevel ) {
		vec3 worldNormal = inverseTransformDirection( geometry.normal, viewMatrix );
		#ifdef ENVMAP_TYPE_CUBE
			vec3 queryVec = vec3( flipEnvMap * worldNormal.x, worldNormal.yz );
			#ifdef TEXTURE_LOD_EXT
				vec4 envMapColor = textureCubeLodEXT( envMap, queryVec, float( maxMIPLevel ) );
			#else
				vec4 envMapColor = textureCube( envMap, queryVec, float( maxMIPLevel ) );
			#endif
			envMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;
		#elif defined( ENVMAP_TYPE_CUBE_UV )
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
		#else
			vec4 envMapColor = vec4( 0.0 );
		#endif
		return PI * envMapColor.rgb * envMapIntensity;
	}
	float getSpecularMIPLevel( const in float roughness, const in int maxMIPLevel ) {
		float maxMIPLevelScalar = float( maxMIPLevel );
		float sigma = PI * roughness * roughness / ( 1.0 + roughness );
		float desiredMIPLevel = maxMIPLevelScalar + log2( sigma );
		return clamp( desiredMIPLevel, 0.0, maxMIPLevelScalar );
	}
	vec3 getLightProbeIndirectRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in int maxMIPLevel ) {
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( -viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
		#else
			vec3 reflectVec = refract( -viewDir, normal, refractionRatio );
		#endif
		reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
		float specularMIPLevel = getSpecularMIPLevel( roughness, maxMIPLevel );
		#ifdef ENVMAP_TYPE_CUBE
			vec3 queryReflectVec = vec3( flipEnvMap * reflectVec.x, reflectVec.yz );
			#ifdef TEXTURE_LOD_EXT
				vec4 envMapColor = textureCubeLodEXT( envMap, queryReflectVec, specularMIPLevel );
			#else
				vec4 envMapColor = textureCube( envMap, queryReflectVec, specularMIPLevel );
			#endif
			envMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;
		#elif defined( ENVMAP_TYPE_CUBE_UV )
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
		#endif
		return envMapColor.rgb * envMapIntensity;
	}
#endif`,wu=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Su=`varying vec3 vViewPosition;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	#ifndef PHYSICALLY_CORRECT_LIGHTS
		irradiance *= PI;
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon
#define Material_LightProbeLOD( material )	(0)`,Eu=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Tu=`varying vec3 vViewPosition;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifndef PHYSICALLY_CORRECT_LIGHTS
		irradiance *= PI;
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_Specular_BlinnPhong( directLight, geometry, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong
#define Material_LightProbeLOD( material )	(0)`,Au=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.specularRoughness = max( roughnessFactor, 0.0525 );material.specularRoughness += geometryRoughness;
material.specularRoughness = min( material.specularRoughness, 1.0 );
#ifdef REFLECTIVITY
	material.specularColor = mix( vec3( MAXIMUM_SPECULAR_COEFFICIENT * pow2( reflectivity ) ), diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( DEFAULT_SPECULAR_COEFFICIENT ), diffuseColor.rgb, metalnessFactor );
#endif
#ifdef CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheen;
#endif`,Lu=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float specularRoughness;
	vec3 specularColor;
#ifdef CLEARCOAT
	float clearcoat;
	float clearcoatRoughness;
#endif
#ifdef USE_SHEEN
	vec3 sheenColor;
#endif
};
#define MAXIMUM_SPECULAR_COEFFICIENT 0.16
#define DEFAULT_SPECULAR_COEFFICIENT 0.04
float clearcoatDHRApprox( const in float roughness, const in float dotNL ) {
	return DEFAULT_SPECULAR_COEFFICIENT + ( 1.0 - DEFAULT_SPECULAR_COEFFICIENT ) * ( pow( 1.0 - dotNL, 5.0 ) * pow( 1.0 - roughness, 2.0 ) );
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.specularRoughness;
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
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifndef PHYSICALLY_CORRECT_LIGHTS
		irradiance *= PI;
	#endif
	#ifdef CLEARCOAT
		float ccDotNL = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = ccDotNL * directLight.color;
		#ifndef PHYSICALLY_CORRECT_LIGHTS
			ccIrradiance *= PI;
		#endif
		float clearcoatDHR = material.clearcoat * clearcoatDHRApprox( material.clearcoatRoughness, ccDotNL );
		reflectedLight.directSpecular += ccIrradiance * material.clearcoat * BRDF_Specular_GGX( directLight, geometry.viewDir, geometry.clearcoatNormal, vec3( DEFAULT_SPECULAR_COEFFICIENT ), material.clearcoatRoughness );
	#else
		float clearcoatDHR = 0.0;
	#endif
	#ifdef USE_SHEEN
		reflectedLight.directSpecular += ( 1.0 - clearcoatDHR ) * irradiance * BRDF_Specular_Sheen(
			material.specularRoughness,
			directLight.direction,
			geometry,
			material.sheenColor
		);
	#else
		reflectedLight.directSpecular += ( 1.0 - clearcoatDHR ) * irradiance * BRDF_Specular_GGX( directLight, geometry.viewDir, geometry.normal, material.specularColor, material.specularRoughness);
	#endif
	reflectedLight.directDiffuse += ( 1.0 - clearcoatDHR ) * irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef CLEARCOAT
		float ccDotNV = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		reflectedLight.indirectSpecular += clearcoatRadiance * material.clearcoat * BRDF_Specular_GGX_Environment( geometry.viewDir, geometry.clearcoatNormal, vec3( DEFAULT_SPECULAR_COEFFICIENT ), material.clearcoatRoughness );
		float ccDotNL = ccDotNV;
		float clearcoatDHR = material.clearcoat * clearcoatDHRApprox( material.clearcoatRoughness, ccDotNL );
	#else
		float clearcoatDHR = 0.0;
	#endif
	float clearcoatInv = 1.0 - clearcoatDHR;
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	BRDF_Specular_Multiscattering_Environment( geometry, material.specularColor, material.specularRoughness, singleScattering, multiScattering );
	vec3 diffuse = material.diffuseColor * ( 1.0 - ( singleScattering + multiScattering ) );
	reflectedLight.indirectSpecular += clearcoatInv * radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Ru=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
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
		getPointDirectLightIrradiance( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotDirectLightIrradiance( spotLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
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
		getDirectionalDirectLightIrradiance( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Cu=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel= texture2D( lightMap, vUv2 );
		vec3 lightMapIrradiance = lightMapTexelToLinear( lightMapTexel ).rgb * lightMapIntensity;
		#ifndef PHYSICALLY_CORRECT_LIGHTS
			lightMapIrradiance *= PI;
		#endif
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getLightProbeIndirectIrradiance( geometry, maxMipLevel );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getLightProbeIndirectRadiance( geometry.viewDir, geometry.normal, material.specularRoughness, maxMipLevel );
	#ifdef CLEARCOAT
		clearcoatRadiance += getLightProbeIndirectRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness, maxMipLevel );
	#endif
#endif`,Pu=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,Iu=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Du=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Nu=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Fu=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Ou=`#ifdef USE_MAP
	vec4 texelColor = texture2D( map, vUv );
	texelColor = mapTexelToLinear( texelColor );
	diffuseColor *= texelColor;
#endif`,Bu=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,zu=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	vec4 mapTexel = texture2D( map, uv );
	diffuseColor *= mapTexelToLinear( mapTexel );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Uu=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Hu=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Gu=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,ku=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
	objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
	objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
	objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
#endif`,Vu=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifndef USE_MORPHNORMALS
		uniform float morphTargetInfluences[ 8 ];
	#else
		uniform float morphTargetInfluences[ 4 ];
	#endif
#endif`,Wu=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	transformed += morphTarget0 * morphTargetInfluences[ 0 ];
	transformed += morphTarget1 * morphTargetInfluences[ 1 ];
	transformed += morphTarget2 * morphTargetInfluences[ 2 ];
	transformed += morphTarget3 * morphTargetInfluences[ 3 ];
	#ifndef USE_MORPHNORMALS
		transformed += morphTarget4 * morphTargetInfluences[ 4 ];
		transformed += morphTarget5 * morphTargetInfluences[ 5 ];
		transformed += morphTarget6 * morphTargetInfluences[ 6 ];
		transformed += morphTarget7 * morphTargetInfluences[ 7 ];
	#endif
#endif`,Xu=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = vec3( dFdx( vViewPosition.x ), dFdx( vViewPosition.y ), dFdx( vViewPosition.z ) );
	vec3 fdy = vec3( dFdy( vViewPosition.x ), dFdy( vViewPosition.y ), dFdy( vViewPosition.z ) );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	#ifdef USE_TANGENT
		vec3 tangent = normalize( vTangent );
		vec3 bitangent = normalize( vBitangent );
		#ifdef DOUBLE_SIDED
			tangent = tangent * faceDirection;
			bitangent = bitangent * faceDirection;
		#endif
		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )
			mat3 vTBN = mat3( tangent, bitangent, normal );
		#endif
	#endif
#endif
vec3 geometryNormal = normal;`,qu=`#ifdef OBJECTSPACE_NORMALMAP
	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( TANGENTSPACE_NORMALMAP )
	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	#ifdef USE_TANGENT
		normal = normalize( vTBN * mapN );
	#else
		normal = perturbNormal2Arb( -vViewPosition, normal, mapN, faceDirection );
	#endif
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( -vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Yu=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef OBJECTSPACE_NORMALMAP
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {
		vec3 q0 = vec3( dFdx( eye_pos.x ), dFdx( eye_pos.y ), dFdx( eye_pos.z ) );
		vec3 q1 = vec3( dFdy( eye_pos.x ), dFdy( eye_pos.y ), dFdy( eye_pos.z ) );
		vec2 st0 = dFdx( vUv.st );
		vec2 st1 = dFdy( vUv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );
		return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );
	}
#endif`,ju=`#ifdef CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,Zu=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,Ju=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,$u=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ));
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w);
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {
	return linearClipZ * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return (( near + viewZ ) * far ) / (( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * invClipZ - far );
}`,Qu=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Ku=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,ed=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,td=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,nd=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,id=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,rd=`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		varying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
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
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );
		bool inFrustum = all( inFrustumVec );
		bvec2 frustumTestVec = bvec2( inFrustum, shadowCoord.z <= 1.0 );
		bool frustumTest = all( frustumTestVec );
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
		return shadow;
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
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
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
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,sd=`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform mat4 spotShadowMatrix[ NUM_SPOT_LIGHT_SHADOWS ];
		varying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
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
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,ad=`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SPOT_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		vec4 shadowWorldPosition;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
		vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias, 0 );
		vSpotShadowCoord[ i ] = spotShadowMatrix[ i ] * shadowWorldPosition;
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
#endif`,od=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,ld=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,cd=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	#ifdef BONE_TEXTURE
		uniform highp sampler2D boneTexture;
		uniform int boneTextureSize;
		mat4 getBoneMatrix( const in float i ) {
			float j = i * 4.0;
			float x = mod( j, float( boneTextureSize ) );
			float y = floor( j / float( boneTextureSize ) );
			float dx = 1.0 / float( boneTextureSize );
			float dy = 1.0 / float( boneTextureSize );
			y = dy * ( y + 0.5 );
			vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
			vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
			vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
			vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
			mat4 bone = mat4( v1, v2, v3, v4 );
			return bone;
		}
	#else
		uniform mat4 boneMatrices[ MAX_BONES ];
		mat4 getBoneMatrix( const in float i ) {
			mat4 bone = boneMatrices[ int(i) ];
			return bone;
		}
	#endif
#endif`,hd=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,ud=`#ifdef USE_SKINNING
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
#endif`,dd=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,fd=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,pd=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,md=`#ifndef saturate
#define saturate(a) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,gd=`#ifdef USE_TRANSMISSIONMAP
	totalTransmission *= texture2D( transmissionMap, vUv ).r;
#endif`,vd=`#ifdef USE_TRANSMISSIONMAP
	uniform sampler2D transmissionMap;
#endif`,xd=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,yd=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,_d=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,Md=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,bd=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,wd=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,Sd=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP )
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Ed=`uniform sampler2D t2D;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	gl_FragColor = mapTexelToLinear( texColor );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Td=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Ad=`#include <envmap_common_pars_fragment>
uniform float opacity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	vec3 vReflect = vWorldDirection;
	#include <envmap_fragment>
	gl_FragColor = envColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Ld=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Rd=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,Cd=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
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
}`,Pd=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Id=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
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
}`,Dd=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	vec4 texColor = texture2D( tEquirect, sampleUV );
	gl_FragColor = mapTexelToLinear( texColor );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Nd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Fd=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	gl_FragColor = vec4( outgoingLight, diffuseColor.a );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Od=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <color_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Bd=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
	
		vec4 lightMapTexel= texture2D( lightMap, vUv2 );
		reflectedLight.indirectDiffuse += lightMapTexelToLinear( lightMapTexel ).rgb * lightMapIntensity;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	gl_FragColor = vec4( outgoingLight, diffuseColor.a );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,zd=`#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <skinbase_vertex>
	#ifdef USE_ENVMAP
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Ud=`uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
varying vec3 vLightFront;
varying vec3 vIndirectFront;
#ifdef DOUBLE_SIDED
	varying vec3 vLightBack;
	varying vec3 vIndirectBack;
#endif
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <fog_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <emissivemap_fragment>
	#ifdef DOUBLE_SIDED
		reflectedLight.indirectDiffuse += ( gl_FrontFacing ) ? vIndirectFront : vIndirectBack;
	#else
		reflectedLight.indirectDiffuse += vIndirectFront;
	#endif
	#include <lightmap_fragment>
	reflectedLight.indirectDiffuse *= BRDF_Diffuse_Lambert( diffuseColor.rgb );
	#ifdef DOUBLE_SIDED
		reflectedLight.directDiffuse = ( gl_FrontFacing ) ? vLightFront : vLightBack;
	#else
		reflectedLight.directDiffuse = vLightFront;
	#endif
	reflectedLight.directDiffuse *= BRDF_Diffuse_Lambert( diffuseColor.rgb ) * getShadowMask();
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	gl_FragColor = vec4( outgoingLight, diffuseColor.a );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Hd=`#define LAMBERT
varying vec3 vLightFront;
varying vec3 vIndirectFront;
#ifdef DOUBLE_SIDED
	varying vec3 vLightBack;
	varying vec3 vIndirectBack;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <bsdfs>
#include <lights_pars_begin>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <lights_lambert_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Gd=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <fog_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
		matcapColor = matcapTexelToLinear( matcapColor );
	#else
		vec4 matcapColor = vec4( 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	gl_FragColor = vec4( outgoingLight, diffuseColor.a );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,kd=`#define MATCAP
varying vec3 vViewPosition;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#ifndef FLAT_SHADED
		vNormal = normalize( transformedNormal );
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Vd=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	gl_FragColor = vec4( outgoingLight, diffuseColor.a );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Wd=`#define TOON
varying vec3 vViewPosition;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
#endif
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
}`,Xd=`#define PHONG
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
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
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
	gl_FragColor = vec4( outgoingLight, diffuseColor.a );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,qd=`#define PHONG
varying vec3 vViewPosition;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
#endif
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
}`,Yd=`#define STANDARD
#ifdef PHYSICAL
	#define REFLECTIVITY
	#define CLEARCOAT
	#define TRANSMISSION
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef TRANSMISSION
	uniform float transmission;
#endif
#ifdef REFLECTIVITY
	uniform float reflectivity;
#endif
#ifdef CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheen;
#endif
varying vec3 vViewPosition;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <transmissionmap_pars_fragment>
#include <bsdfs>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <lights_physical_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#ifdef TRANSMISSION
		float totalTransmission = transmission;
	#endif
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <transmissionmap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#ifdef TRANSMISSION
		diffuseColor.a *= mix( saturate( 1. - totalTransmission + linearToRelativeLuminance( reflectedLight.directSpecular + reflectedLight.indirectSpecular ) ), 1.0, metalness );
	#endif
	gl_FragColor = vec4( outgoingLight, diffuseColor.a );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,jd=`#define STANDARD
varying vec3 vViewPosition;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif
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
}`,Zd=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif
#include <packing>
#include <uv_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
}`,Jd=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	vViewPosition = - mvPosition.xyz;
#endif
}`,$d=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	gl_FragColor = vec4( outgoingLight, diffuseColor.a );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Qd=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <color_vertex>
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
}`,Kd=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,ef=`#include <common>
#include <fog_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <begin_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,tf=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	gl_FragColor = vec4( outgoingLight, diffuseColor.a );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,nf=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
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
}`;const we={alphamap_fragment:Oh,alphamap_pars_fragment:Bh,alphatest_fragment:zh,aomap_fragment:Uh,aomap_pars_fragment:Hh,begin_vertex:Gh,beginnormal_vertex:kh,bsdfs:Vh,bumpmap_pars_fragment:Wh,clipping_planes_fragment:Xh,clipping_planes_pars_fragment:qh,clipping_planes_pars_vertex:Yh,clipping_planes_vertex:jh,color_fragment:Zh,color_pars_fragment:Jh,color_pars_vertex:$h,color_vertex:Qh,common:Kh,cube_uv_reflection_fragment:eu,defaultnormal_vertex:tu,displacementmap_pars_vertex:nu,displacementmap_vertex:iu,emissivemap_fragment:ru,emissivemap_pars_fragment:su,encodings_fragment:au,encodings_pars_fragment:ou,envmap_fragment:lu,envmap_common_pars_fragment:cu,envmap_pars_fragment:hu,envmap_pars_vertex:uu,envmap_physical_pars_fragment:bu,envmap_vertex:du,fog_vertex:fu,fog_pars_vertex:pu,fog_fragment:mu,fog_pars_fragment:gu,gradientmap_pars_fragment:vu,lightmap_fragment:xu,lightmap_pars_fragment:yu,lights_lambert_vertex:_u,lights_pars_begin:Mu,lights_toon_fragment:wu,lights_toon_pars_fragment:Su,lights_phong_fragment:Eu,lights_phong_pars_fragment:Tu,lights_physical_fragment:Au,lights_physical_pars_fragment:Lu,lights_fragment_begin:Ru,lights_fragment_maps:Cu,lights_fragment_end:Pu,logdepthbuf_fragment:Iu,logdepthbuf_pars_fragment:Du,logdepthbuf_pars_vertex:Nu,logdepthbuf_vertex:Fu,map_fragment:Ou,map_pars_fragment:Bu,map_particle_fragment:zu,map_particle_pars_fragment:Uu,metalnessmap_fragment:Hu,metalnessmap_pars_fragment:Gu,morphnormal_vertex:ku,morphtarget_pars_vertex:Vu,morphtarget_vertex:Wu,normal_fragment_begin:Xu,normal_fragment_maps:qu,normalmap_pars_fragment:Yu,clearcoat_normal_fragment_begin:ju,clearcoat_normal_fragment_maps:Zu,clearcoat_pars_fragment:Ju,packing:$u,premultiplied_alpha_fragment:Qu,project_vertex:Ku,dithering_fragment:ed,dithering_pars_fragment:td,roughnessmap_fragment:nd,roughnessmap_pars_fragment:id,shadowmap_pars_fragment:rd,shadowmap_pars_vertex:sd,shadowmap_vertex:ad,shadowmask_pars_fragment:od,skinbase_vertex:ld,skinning_pars_vertex:cd,skinning_vertex:hd,skinnormal_vertex:ud,specularmap_fragment:dd,specularmap_pars_fragment:fd,tonemapping_fragment:pd,tonemapping_pars_fragment:md,transmissionmap_fragment:gd,transmissionmap_pars_fragment:vd,uv_pars_fragment:xd,uv_pars_vertex:yd,uv_vertex:_d,uv2_pars_fragment:Md,uv2_pars_vertex:bd,uv2_vertex:wd,worldpos_vertex:Sd,background_frag:Ed,background_vert:Td,cube_frag:Ad,cube_vert:Ld,depth_frag:Rd,depth_vert:Cd,distanceRGBA_frag:Pd,distanceRGBA_vert:Id,equirect_frag:Dd,equirect_vert:Nd,linedashed_frag:Fd,linedashed_vert:Od,meshbasic_frag:Bd,meshbasic_vert:zd,meshlambert_frag:Ud,meshlambert_vert:Hd,meshmatcap_frag:Gd,meshmatcap_vert:kd,meshtoon_frag:Vd,meshtoon_vert:Wd,meshphong_frag:Xd,meshphong_vert:qd,meshphysical_frag:Yd,meshphysical_vert:jd,normal_frag:Zd,normal_vert:Jd,points_frag:$d,points_vert:Qd,shadow_frag:Kd,shadow_vert:ef,sprite_frag:tf,sprite_vert:nf},te={common:{diffuse:{value:new he(15658734)},opacity:{value:1},map:{value:null},uvTransform:{value:new tt},uv2Transform:{value:new tt},alphaMap:{value:null}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},refractionRatio:{value:.98},maxMipLevel:{value:0}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new Z(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new he(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotShadowMap:{value:[]},spotShadowMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new he(15658734)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},uvTransform:{value:new tt}},sprite:{diffuse:{value:new he(15658734)},opacity:{value:1},center:{value:new Z(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},uvTransform:{value:new tt}}},Rt={basic:{uniforms:rt([te.common,te.specularmap,te.envmap,te.aomap,te.lightmap,te.fog]),vertexShader:we.meshbasic_vert,fragmentShader:we.meshbasic_frag},lambert:{uniforms:rt([te.common,te.specularmap,te.envmap,te.aomap,te.lightmap,te.emissivemap,te.fog,te.lights,{emissive:{value:new he(0)}}]),vertexShader:we.meshlambert_vert,fragmentShader:we.meshlambert_frag},phong:{uniforms:rt([te.common,te.specularmap,te.envmap,te.aomap,te.lightmap,te.emissivemap,te.bumpmap,te.normalmap,te.displacementmap,te.fog,te.lights,{emissive:{value:new he(0)},specular:{value:new he(1118481)},shininess:{value:30}}]),vertexShader:we.meshphong_vert,fragmentShader:we.meshphong_frag},standard:{uniforms:rt([te.common,te.envmap,te.aomap,te.lightmap,te.emissivemap,te.bumpmap,te.normalmap,te.displacementmap,te.roughnessmap,te.metalnessmap,te.fog,te.lights,{emissive:{value:new he(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:we.meshphysical_vert,fragmentShader:we.meshphysical_frag},toon:{uniforms:rt([te.common,te.aomap,te.lightmap,te.emissivemap,te.bumpmap,te.normalmap,te.displacementmap,te.gradientmap,te.fog,te.lights,{emissive:{value:new he(0)}}]),vertexShader:we.meshtoon_vert,fragmentShader:we.meshtoon_frag},matcap:{uniforms:rt([te.common,te.bumpmap,te.normalmap,te.displacementmap,te.fog,{matcap:{value:null}}]),vertexShader:we.meshmatcap_vert,fragmentShader:we.meshmatcap_frag},points:{uniforms:rt([te.points,te.fog]),vertexShader:we.points_vert,fragmentShader:we.points_frag},dashed:{uniforms:rt([te.common,te.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:we.linedashed_vert,fragmentShader:we.linedashed_frag},depth:{uniforms:rt([te.common,te.displacementmap]),vertexShader:we.depth_vert,fragmentShader:we.depth_frag},normal:{uniforms:rt([te.common,te.bumpmap,te.normalmap,te.displacementmap,{opacity:{value:1}}]),vertexShader:we.normal_vert,fragmentShader:we.normal_frag},sprite:{uniforms:rt([te.sprite,te.fog]),vertexShader:we.sprite_vert,fragmentShader:we.sprite_frag},background:{uniforms:{uvTransform:{value:new tt},t2D:{value:null}},vertexShader:we.background_vert,fragmentShader:we.background_frag},cube:{uniforms:rt([te.envmap,{opacity:{value:1}}]),vertexShader:we.cube_vert,fragmentShader:we.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:we.equirect_vert,fragmentShader:we.equirect_frag},distanceRGBA:{uniforms:rt([te.common,te.displacementmap,{referencePosition:{value:new b},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:we.distanceRGBA_vert,fragmentShader:we.distanceRGBA_frag},shadow:{uniforms:rt([te.lights,te.fog,{color:{value:new he(0)},opacity:{value:1}}]),vertexShader:we.shadow_vert,fragmentShader:we.shadow_frag}};Rt.physical={uniforms:rt([Rt.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new Z(1,1)},clearcoatNormalMap:{value:null},sheen:{value:new he(0)},transmission:{value:0},transmissionMap:{value:null}}]),vertexShader:we.meshphysical_vert,fragmentShader:we.meshphysical_frag};function rf(s,e,t,n,i){const r=new he(0);let a=0,o,l,c=null,h=0,u=null;function d(m,v,x,g){let p=v.isScene===!0?v.background:null;p&&p.isTexture&&(p=e.get(p));const T=s.xr,L=T.getSession&&T.getSession();L&&L.environmentBlendMode==="additive"&&(p=null),p===null?f(r,a):p&&p.isColor&&(f(p,1),g=!0),(s.autoClear||g)&&s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil),p&&(p.isCubeTexture||p.mapping===ms)?(l===void 0&&(l=new pt(new Ms(1,1,1),new $t({name:"BackgroundCubeMaterial",uniforms:On(Rt.cube.uniforms),vertexShader:Rt.cube.vertexShader,fragmentShader:Rt.cube.fragmentShader,side:Je,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(A,y,N){this.matrixWorld.copyPosition(N.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(l)),l.material.uniforms.envMap.value=p,l.material.uniforms.flipEnvMap.value=p.isCubeTexture&&p._needsFlipEnvMap?-1:1,(c!==p||h!==p.version||u!==s.toneMapping)&&(l.material.needsUpdate=!0,c=p,h=p.version,u=s.toneMapping),m.unshift(l,l.geometry,l.material,0,0,null)):p&&p.isTexture&&(o===void 0&&(o=new pt(new Fh(2,2),new $t({name:"BackgroundMaterial",uniforms:On(Rt.background.uniforms),vertexShader:Rt.background.vertexShader,fragmentShader:Rt.background.fragmentShader,side:or,depthTest:!1,depthWrite:!1,fog:!1})),o.geometry.deleteAttribute("normal"),Object.defineProperty(o.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(o)),o.material.uniforms.t2D.value=p,p.matrixAutoUpdate===!0&&p.updateMatrix(),o.material.uniforms.uvTransform.value.copy(p.matrix),(c!==p||h!==p.version||u!==s.toneMapping)&&(o.material.needsUpdate=!0,c=p,h=p.version,u=s.toneMapping),m.unshift(o,o.geometry,o.material,0,0,null))}function f(m,v){t.buffers.color.setClear(m.r,m.g,m.b,v,i)}return{getClearColor:function(){return r},setClearColor:function(m,v=1){r.set(m),a=v,f(r,a)},getClearAlpha:function(){return a},setClearAlpha:function(m){a=m,f(r,a)},render:d}}function sf(s,e,t,n){const i=s.getParameter(34921),r=n.isWebGL2?null:e.get("OES_vertex_array_object"),a=n.isWebGL2||r!==null,o={},l=v(null);let c=l;function h(R,P,I,C,Y){let K=!1;if(a){const $=m(C,I,P);c!==$&&(c=$,d(c.object)),K=x(C,Y),K&&g(C,Y)}else{const $=P.wireframe===!0;(c.geometry!==C.id||c.program!==I.id||c.wireframe!==$)&&(c.geometry=C.id,c.program=I.id,c.wireframe=$,K=!0)}R.isInstancedMesh===!0&&(K=!0),Y!==null&&t.update(Y,34963),K&&(N(R,P,I,C),Y!==null&&s.bindBuffer(34963,t.get(Y).buffer))}function u(){return n.isWebGL2?s.createVertexArray():r.createVertexArrayOES()}function d(R){return n.isWebGL2?s.bindVertexArray(R):r.bindVertexArrayOES(R)}function f(R){return n.isWebGL2?s.deleteVertexArray(R):r.deleteVertexArrayOES(R)}function m(R,P,I){const C=I.wireframe===!0;let Y=o[R.id];Y===void 0&&(Y={},o[R.id]=Y);let K=Y[P.id];K===void 0&&(K={},Y[P.id]=K);let $=K[C];return $===void 0&&($=v(u()),K[C]=$),$}function v(R){const P=[],I=[],C=[];for(let Y=0;Y<i;Y++)P[Y]=0,I[Y]=0,C[Y]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:I,attributeDivisors:C,object:R,attributes:{},index:null}}function x(R,P){const I=c.attributes,C=R.attributes;let Y=0;for(const K in C){const $=I[K],ae=C[K];if($===void 0||$.attribute!==ae||$.data!==ae.data)return!0;Y++}return c.attributesNum!==Y||c.index!==P}function g(R,P){const I={},C=R.attributes;let Y=0;for(const K in C){const $=C[K],ae={};ae.attribute=$,$.data&&(ae.data=$.data),I[K]=ae,Y++}c.attributes=I,c.attributesNum=Y,c.index=P}function p(){const R=c.newAttributes;for(let P=0,I=R.length;P<I;P++)R[P]=0}function T(R){L(R,0)}function L(R,P){const I=c.newAttributes,C=c.enabledAttributes,Y=c.attributeDivisors;I[R]=1,C[R]===0&&(s.enableVertexAttribArray(R),C[R]=1),Y[R]!==P&&((n.isWebGL2?s:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](R,P),Y[R]=P)}function A(){const R=c.newAttributes,P=c.enabledAttributes;for(let I=0,C=P.length;I<C;I++)P[I]!==R[I]&&(s.disableVertexAttribArray(I),P[I]=0)}function y(R,P,I,C,Y,K){n.isWebGL2===!0&&(I===5124||I===5125)?s.vertexAttribIPointer(R,P,I,Y,K):s.vertexAttribPointer(R,P,I,C,Y,K)}function N(R,P,I,C){if(n.isWebGL2===!1&&(R.isInstancedMesh||C.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;p();const Y=C.attributes,K=I.getAttributes(),$=P.defaultAttributeValues;for(const ae in K){const se=K[ae];if(se>=0){const ue=Y[ae];if(ue!==void 0){const me=ue.normalized,H=ue.itemSize,Ie=t.get(ue);if(Ie===void 0)continue;const Se=Ie.buffer,ge=Ie.type,de=Ie.bytesPerElement;if(ue.isInterleavedBufferAttribute){const Ee=ue.data,Me=Ee.stride,be=ue.offset;Ee&&Ee.isInstancedInterleavedBuffer?(L(se,Ee.meshPerAttribute),C._maxInstanceCount===void 0&&(C._maxInstanceCount=Ee.meshPerAttribute*Ee.count)):T(se),s.bindBuffer(34962,Se),y(se,H,ge,me,Me*de,be*de)}else ue.isInstancedBufferAttribute?(L(se,ue.meshPerAttribute),C._maxInstanceCount===void 0&&(C._maxInstanceCount=ue.meshPerAttribute*ue.count)):T(se),s.bindBuffer(34962,Se),y(se,H,ge,me,0,0)}else if(ae==="instanceMatrix"){const me=t.get(R.instanceMatrix);if(me===void 0)continue;const H=me.buffer,Ie=me.type;L(se+0,1),L(se+1,1),L(se+2,1),L(se+3,1),s.bindBuffer(34962,H),s.vertexAttribPointer(se+0,4,Ie,!1,64,0),s.vertexAttribPointer(se+1,4,Ie,!1,64,16),s.vertexAttribPointer(se+2,4,Ie,!1,64,32),s.vertexAttribPointer(se+3,4,Ie,!1,64,48)}else if(ae==="instanceColor"){const me=t.get(R.instanceColor);if(me===void 0)continue;const H=me.buffer,Ie=me.type;L(se,1),s.bindBuffer(34962,H),s.vertexAttribPointer(se,3,Ie,!1,12,0)}else if($!==void 0){const me=$[ae];if(me!==void 0)switch(me.length){case 2:s.vertexAttrib2fv(se,me);break;case 3:s.vertexAttrib3fv(se,me);break;case 4:s.vertexAttrib4fv(se,me);break;default:s.vertexAttrib1fv(se,me)}}}}A()}function O(){q();for(const R in o){const P=o[R];for(const I in P){const C=P[I];for(const Y in C)f(C[Y].object),delete C[Y];delete P[I]}delete o[R]}}function B(R){if(o[R.id]===void 0)return;const P=o[R.id];for(const I in P){const C=P[I];for(const Y in C)f(C[Y].object),delete C[Y];delete P[I]}delete o[R.id]}function k(R){for(const P in o){const I=o[P];if(I[R.id]===void 0)continue;const C=I[R.id];for(const Y in C)f(C[Y].object),delete C[Y];delete I[R.id]}}function q(){U(),c!==l&&(c=l,d(c.object))}function U(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:q,resetDefaultState:U,dispose:O,releaseStatesOfGeometry:B,releaseStatesOfProgram:k,initAttributes:p,enableAttribute:T,disableUnusedAttributes:A}}function af(s,e,t,n){const i=n.isWebGL2;let r;function a(c){r=c}function o(c,h){s.drawArrays(r,c,h),t.update(h,r,1)}function l(c,h,u){if(u===0)return;let d,f;if(i)d=s,f="drawArraysInstanced";else if(d=e.get("ANGLE_instanced_arrays"),f="drawArraysInstancedANGLE",d===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[f](r,c,h,u),t.update(h,r,u)}this.setMode=a,this.render=o,this.renderInstances=l}function of(s,e,t){let n;function i(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const y=e.get("EXT_texture_filter_anisotropic");n=s.getParameter(y.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(y){if(y==="highp"){if(s.getShaderPrecisionFormat(35633,36338).precision>0&&s.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";y="mediump"}return y==="mediump"&&s.getShaderPrecisionFormat(35633,36337).precision>0&&s.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const a=typeof WebGL2RenderingContext<"u"&&s instanceof WebGL2RenderingContext||typeof WebGL2ComputeRenderingContext<"u"&&s instanceof WebGL2ComputeRenderingContext;let o=t.precision!==void 0?t.precision:"highp";const l=r(o);l!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",l,"instead."),o=l);const c=t.logarithmicDepthBuffer===!0,h=s.getParameter(34930),u=s.getParameter(35660),d=s.getParameter(3379),f=s.getParameter(34076),m=s.getParameter(34921),v=s.getParameter(36347),x=s.getParameter(36348),g=s.getParameter(36349),p=u>0,T=a||e.has("OES_texture_float"),L=p&&T,A=a?s.getParameter(36183):0;return{isWebGL2:a,getMaxAnisotropy:i,getMaxPrecision:r,precision:o,logarithmicDepthBuffer:c,maxTextures:h,maxVertexTextures:u,maxTextureSize:d,maxCubemapSize:f,maxAttributes:m,maxVertexUniforms:v,maxVaryings:x,maxFragmentUniforms:g,vertexTextures:p,floatFragmentTextures:T,floatVertexTextures:L,maxSamples:A}}function lf(s){const e=this;let t=null,n=0,i=!1,r=!1;const a=new Lt,o=new tt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d,f){const m=u.length!==0||d||n!==0||i;return i=d,t=h(u,f,0),n=u.length,m},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1,c()},this.setState=function(u,d,f){const m=u.clippingPlanes,v=u.clipIntersection,x=u.clipShadows,g=s.get(u);if(!i||m===null||m.length===0||r&&!x)r?h(null):c();else{const p=r?0:n,T=p*4;let L=g.clippingState||null;l.value=L,L=h(m,d,T,f);for(let A=0;A!==T;++A)L[A]=t[A];g.clippingState=L,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=p}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,d,f,m){const v=u!==null?u.length:0;let x=null;if(v!==0){if(x=l.value,m!==!0||x===null){const g=f+v*4,p=d.matrixWorldInverse;o.getNormalMatrix(p),(x===null||x.length<g)&&(x=new Float32Array(g));for(let T=0,L=f;T!==v;++T,L+=4)a.copy(u[T]).applyMatrix4(p,o),a.normal.toArray(x,L),x[L+3]=a.constant}l.value=x,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,x}}function cf(s){let e=new WeakMap;function t(a,o){return o===Zs?a.mapping=fs:o===Js&&(a.mapping=ps),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===Zs||o===Js)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=s.getRenderTarget(),h=new Ro(l.height/2);return h.fromEquirectangularTexture(s,a),e.set(a,h),s.setRenderTarget(c),a.addEventListener("dispose",i),t(h.texture,a.mapping)}else return null}}return a}function i(a){const o=a.target;o.removeEventListener("dispose",i);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}function hf(s){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float")},get:function(n){const i=t(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function uf(s,e,t,n){const i={},r=new WeakMap;function a(u){const d=u.target;d.index!==null&&e.remove(d.index);for(const m in d.attributes)e.remove(d.attributes[m]);d.removeEventListener("dispose",a),delete i[d.id];const f=r.get(d);f&&(e.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(u,d){return i[d.id]===!0||(d.addEventListener("dispose",a),i[d.id]=!0,t.memory.geometries++),d}function l(u){const d=u.attributes;for(const m in d)e.update(d[m],34962);const f=u.morphAttributes;for(const m in f){const v=f[m];for(let x=0,g=v.length;x<g;x++)e.update(v[x],34962)}}function c(u){const d=[],f=u.index,m=u.attributes.position;let v=0;if(f!==null){const p=f.array;v=f.version;for(let T=0,L=p.length;T<L;T+=3){const A=p[T+0],y=p[T+1],N=p[T+2];d.push(A,y,y,N,N,A)}}else{const p=m.array;v=m.version;for(let T=0,L=p.length/3-1;T<L;T+=3){const A=T+0,y=T+1,N=T+2;d.push(A,y,y,N,N,A)}}const x=new(Lo(d)>65535?Ao:To)(d,1);x.version=v;const g=r.get(u);g&&e.remove(g),r.set(u,x)}function h(u){const d=r.get(u);if(d){const f=u.index;f!==null&&d.version<f.version&&c(u)}else c(u);return r.get(u)}return{get:o,update:l,getWireframeAttribute:h}}function df(s,e,t,n){const i=n.isWebGL2;let r;function a(d){r=d}let o,l;function c(d){o=d.type,l=d.bytesPerElement}function h(d,f){s.drawElements(r,f,o,d*l),t.update(f,r,1)}function u(d,f,m){if(m===0)return;let v,x;if(i)v=s,x="drawElementsInstanced";else if(v=e.get("ANGLE_instanced_arrays"),x="drawElementsInstancedANGLE",v===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}v[x](r,f,o,d*l,m),t.update(f,r,m)}this.setMode=a,this.setIndex=c,this.render=h,this.renderInstances=u}function ff(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case 4:t.triangles+=o*(r/3);break;case 1:t.lines+=o*(r/2);break;case 3:t.lines+=o*(r-1);break;case 2:t.lines+=o*r;break;case 0:t.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function i(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function pf(s,e){return s[0]-e[0]}function mf(s,e){return Math.abs(e[1])-Math.abs(s[1])}function gf(s){const e={},t=new Float32Array(8),n=[];for(let r=0;r<8;r++)n[r]=[r,0];function i(r,a,o,l){const c=r.morphTargetInfluences,h=c===void 0?0:c.length;let u=e[a.id];if(u===void 0){u=[];for(let x=0;x<h;x++)u[x]=[x,0];e[a.id]=u}for(let x=0;x<h;x++){const g=u[x];g[0]=x,g[1]=c[x]}u.sort(mf);for(let x=0;x<8;x++)x<h&&u[x][1]?(n[x][0]=u[x][0],n[x][1]=u[x][1]):(n[x][0]=Number.MAX_SAFE_INTEGER,n[x][1]=0);n.sort(pf);const d=o.morphTargets&&a.morphAttributes.position,f=o.morphNormals&&a.morphAttributes.normal;let m=0;for(let x=0;x<8;x++){const g=n[x],p=g[0],T=g[1];p!==Number.MAX_SAFE_INTEGER&&T?(d&&a.getAttribute("morphTarget"+x)!==d[p]&&a.setAttribute("morphTarget"+x,d[p]),f&&a.getAttribute("morphNormal"+x)!==f[p]&&a.setAttribute("morphNormal"+x,f[p]),t[x]=T,m+=T):(d&&a.hasAttribute("morphTarget"+x)===!0&&a.deleteAttribute("morphTarget"+x),f&&a.hasAttribute("morphNormal"+x)===!0&&a.deleteAttribute("morphNormal"+x),t[x]=0)}const v=a.morphTargetsRelative?1:1-m;l.getUniforms().setValue(s,"morphTargetBaseInfluence",v),l.getUniforms().setValue(s,"morphTargetInfluences",t)}return{update:i}}function vf(s,e,t,n){let i=new WeakMap;function r(l){const c=n.render.frame,h=l.geometry,u=e.get(l,h);return i.get(u)!==c&&(e.update(u),i.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),t.update(l.instanceMatrix,34962),l.instanceColor!==null&&t.update(l.instanceColor,34962)),u}function a(){i=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:a}}class Io extends it{constructor(e=null,t=1,n=1,i=1){super(null),this.image={data:e,width:t,height:n,depth:i},this.magFilter=lt,this.minFilter=lt,this.wrapR=wt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.needsUpdate=!0}}Io.prototype.isDataTexture2DArray=!0;class Do extends it{constructor(e=null,t=1,n=1,i=1){super(null),this.image={data:e,width:t,height:n,depth:i},this.magFilter=lt,this.minFilter=lt,this.wrapR=wt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.needsUpdate=!0}}Do.prototype.isDataTexture3D=!0;const No=new it,xf=new Io,yf=new Do,Fo=new ur,Ma=[],ba=[],wa=new Float32Array(16),Sa=new Float32Array(9),Ea=new Float32Array(4);function kn(s,e,t){const n=s[0];if(n<=0||n>0)return s;const i=e*t;let r=Ma[i];if(r===void 0&&(r=new Float32Array(i),Ma[i]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,s[a].toArray(r,o)}return r}function ct(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function st(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}function Oo(s,e){let t=ba[e];t===void 0&&(t=new Int32Array(e),ba[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}function _f(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function Mf(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ct(t,e))return;s.uniform2fv(this.addr,e),st(t,e)}}function bf(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(ct(t,e))return;s.uniform3fv(this.addr,e),st(t,e)}}function wf(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ct(t,e))return;s.uniform4fv(this.addr,e),st(t,e)}}function Sf(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(ct(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),st(t,e)}else{if(ct(t,n))return;Ea.set(n),s.uniformMatrix2fv(this.addr,!1,Ea),st(t,n)}}function Ef(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(ct(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),st(t,e)}else{if(ct(t,n))return;Sa.set(n),s.uniformMatrix3fv(this.addr,!1,Sa),st(t,n)}}function Tf(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(ct(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),st(t,e)}else{if(ct(t,n))return;wa.set(n),s.uniformMatrix4fv(this.addr,!1,wa),st(t,n)}}function Af(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function Lf(s,e){const t=this.cache;ct(t,e)||(s.uniform2iv(this.addr,e),st(t,e))}function Rf(s,e){const t=this.cache;ct(t,e)||(s.uniform3iv(this.addr,e),st(t,e))}function Cf(s,e){const t=this.cache;ct(t,e)||(s.uniform4iv(this.addr,e),st(t,e))}function Pf(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function If(s,e){const t=this.cache;ct(t,e)||(s.uniform2uiv(this.addr,e),st(t,e))}function Df(s,e){const t=this.cache;ct(t,e)||(s.uniform3uiv(this.addr,e),st(t,e))}function Nf(s,e){const t=this.cache;ct(t,e)||(s.uniform4uiv(this.addr,e),st(t,e))}function Ff(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.safeSetTexture2D(e||No,i)}function Of(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||yf,i)}function Bf(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.safeSetTextureCube(e||Fo,i)}function zf(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||xf,i)}function Uf(s){switch(s){case 5126:return _f;case 35664:return Mf;case 35665:return bf;case 35666:return wf;case 35674:return Sf;case 35675:return Ef;case 35676:return Tf;case 5124:case 35670:return Af;case 35667:case 35671:return Lf;case 35668:case 35672:return Rf;case 35669:case 35673:return Cf;case 5125:return Pf;case 36294:return If;case 36295:return Df;case 36296:return Nf;case 35678:case 36198:case 36298:case 36306:case 35682:return Ff;case 35679:case 36299:case 36307:return Of;case 35680:case 36300:case 36308:case 36293:return Bf;case 36289:case 36303:case 36311:case 36292:return zf}}function Hf(s,e){s.uniform1fv(this.addr,e)}function Gf(s,e){const t=kn(e,this.size,2);s.uniform2fv(this.addr,t)}function kf(s,e){const t=kn(e,this.size,3);s.uniform3fv(this.addr,t)}function Vf(s,e){const t=kn(e,this.size,4);s.uniform4fv(this.addr,t)}function Wf(s,e){const t=kn(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function Xf(s,e){const t=kn(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function qf(s,e){const t=kn(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function Yf(s,e){s.uniform1iv(this.addr,e)}function jf(s,e){s.uniform2iv(this.addr,e)}function Zf(s,e){s.uniform3iv(this.addr,e)}function Jf(s,e){s.uniform4iv(this.addr,e)}function $f(s,e){s.uniform1uiv(this.addr,e)}function Qf(s,e){s.uniform2uiv(this.addr,e)}function Kf(s,e){s.uniform3uiv(this.addr,e)}function ep(s,e){s.uniform4uiv(this.addr,e)}function tp(s,e,t){const n=e.length,i=Oo(t,n);s.uniform1iv(this.addr,i);for(let r=0;r!==n;++r)t.safeSetTexture2D(e[r]||No,i[r])}function np(s,e,t){const n=e.length,i=Oo(t,n);s.uniform1iv(this.addr,i);for(let r=0;r!==n;++r)t.safeSetTextureCube(e[r]||Fo,i[r])}function ip(s){switch(s){case 5126:return Hf;case 35664:return Gf;case 35665:return kf;case 35666:return Vf;case 35674:return Wf;case 35675:return Xf;case 35676:return qf;case 5124:case 35670:return Yf;case 35667:case 35671:return jf;case 35668:case 35672:return Zf;case 35669:case 35673:return Jf;case 5125:return $f;case 36294:return Qf;case 36295:return Kf;case 36296:return ep;case 35678:case 36198:case 36298:case 36306:case 35682:return tp;case 35680:case 36300:case 36308:case 36293:return np}}function rp(s,e,t){this.id=s,this.addr=t,this.cache=[],this.setValue=Uf(e.type)}function Bo(s,e,t){this.id=s,this.addr=t,this.cache=[],this.size=e.size,this.setValue=ip(e.type)}Bo.prototype.updateCache=function(s){const e=this.cache;s instanceof Float32Array&&e.length!==s.length&&(this.cache=new Float32Array(s.length)),st(e,s)};function zo(s){this.id=s,this.seq=[],this.map={}}zo.prototype.setValue=function(s,e,t){const n=this.seq;for(let i=0,r=n.length;i!==r;++i){const a=n[i];a.setValue(s,e[a.id],t)}};const Xr=/(\w+)(\])?(\[|\.)?/g;function Ta(s,e){s.seq.push(e),s.map[e.id]=e}function sp(s,e,t){const n=s.name,i=n.length;for(Xr.lastIndex=0;;){const r=Xr.exec(n),a=Xr.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===i){Ta(t,c===void 0?new rp(o,s,e):new Bo(o,s,e));break}else{let u=t.map[o];u===void 0&&(u=new zo(o),Ta(t,u)),t=u}}}function Zt(s,e){this.seq=[],this.map={};const t=s.getProgramParameter(e,35718);for(let n=0;n<t;++n){const i=s.getActiveUniform(e,n),r=s.getUniformLocation(e,i.name);sp(i,r,this)}}Zt.prototype.setValue=function(s,e,t,n){const i=this.map[e];i!==void 0&&i.setValue(s,t,n)};Zt.prototype.setOptional=function(s,e,t){const n=e[t];n!==void 0&&this.setValue(s,t,n)};Zt.upload=function(s,e,t,n){for(let i=0,r=e.length;i!==r;++i){const a=e[i],o=t[a.id];o.needsUpdate!==!1&&a.setValue(s,o.value,n)}};Zt.seqWithValue=function(s,e){const t=[];for(let n=0,i=s.length;n!==i;++n){const r=s[n];r.id in e&&t.push(r)}return t};function Aa(s,e,t){const n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}let ap=0;function op(s){const e=s.split(`
`);for(let t=0;t<e.length;t++)e[t]=t+1+": "+e[t];return e.join(`
`)}function Uo(s){switch(s){case _i:return["Linear","( value )"];case Mo:return["sRGB","( value )"];case Yc:return["RGBE","( value )"];case Zc:return["RGBM","( value, 7.0 )"];case Jc:return["RGBM","( value, 16.0 )"];case $c:return["RGBD","( value, 256.0 )"];case qc:return["Gamma","( value, float( GAMMA_FACTOR ) )"];case jc:return["LogLuv","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",s),["Linear","( value )"]}}function La(s,e,t){const n=s.getShaderParameter(e,35713),i=s.getShaderInfoLog(e).trim();if(n&&i==="")return"";const r=s.getShaderSource(e);return"THREE.WebGLShader: gl.getShaderInfoLog() "+t+`
`+i+op(r)}function Jn(s,e){const t=Uo(e);return"vec4 "+s+"( vec4 value ) { return "+t[0]+"ToLinear"+t[1]+"; }"}function lp(s,e){const t=Uo(e);return"vec4 "+s+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function cp(s,e){let t;switch(e){case Xl:t="Linear";break;case ql:t="Reinhard";break;case Yl:t="OptimizedCineon";break;case jl:t="ACESFilmic";break;case Zl:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function hp(s){return[s.extensionDerivatives||s.envMapCubeUV||s.bumpMap||s.tangentSpaceNormalMap||s.clearcoatNormalMap||s.flatShading||s.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(s.extensionFragDepth||s.logarithmicDepthBuffer)&&s.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",s.extensionDrawBuffers&&s.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(s.extensionShaderTextureLOD||s.envMap)&&s.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(ii).join(`
`)}function up(s){const e=[];for(const t in s){const n=s[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function dp(s,e){const t={},n=s.getProgramParameter(e,35721);for(let i=0;i<n;i++){const a=s.getActiveAttrib(e,i).name;t[a]=s.getAttribLocation(e,a)}return t}function ii(s){return s!==""}function Ra(s,e){return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Ca(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const fp=/^[ \t]*#include +<([\w\d./]+)>/gm;function os(s){return s.replace(fp,pp)}function pp(s,e){const t=we[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return os(t)}const mp=/#pragma unroll_loop[\s]+?for \( int i \= (\d+)\; i < (\d+)\; i \+\+ \) \{([\s\S]+?)(?=\})\}/g,gp=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Pa(s){return s.replace(gp,Ho).replace(mp,vp)}function vp(s,e,t,n){return console.warn("WebGLProgram: #pragma unroll_loop shader syntax is deprecated. Please use #pragma unroll_loop_start syntax instead."),Ho(s,e,t,n)}function Ho(s,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function Ia(s){let e="precision "+s.precision+` float;
precision `+s.precision+" int;";return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function xp(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===mo?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===wl?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===ni&&(e="SHADOWMAP_TYPE_VSM"),e}function yp(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case fs:case ps:e="ENVMAP_TYPE_CUBE";break;case ms:case gs:e="ENVMAP_TYPE_CUBE_UV";break}return e}function _p(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case ps:case gs:e="ENVMAP_MODE_REFRACTION";break}return e}function Mp(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case cr:e="ENVMAP_BLENDING_MULTIPLY";break;case Vl:e="ENVMAP_BLENDING_MIX";break;case Wl:e="ENVMAP_BLENDING_ADD";break}return e}function bp(s,e,t,n){const i=s.getContext(),r=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=xp(t),c=yp(t),h=_p(t),u=Mp(t),d=s.gammaFactor>0?s.gammaFactor:1,f=t.isWebGL2?"":hp(t),m=up(r),v=i.createProgram();let x,g,p=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(x=[m].filter(ii).join(`
`),x.length>0&&(x+=`
`),g=[f,m].filter(ii).join(`
`),g.length>0&&(g+=`
`)):(x=[Ia(t),"#define SHADER_NAME "+t.shaderName,m,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.supportsVertexTextures?"#define VERTEX_TEXTURES":"","#define GAMMA_FACTOR "+d,"#define MAX_BONES "+t.maxBones,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.displacementMap&&t.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.useVertexTexture?"#define BONE_TEXTURE":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_MORPHTARGETS","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ii).join(`
`),g=[f,Ia(t),"#define SHADER_NAME "+t.shaderName,m,t.alphaTest?"#define ALPHATEST "+t.alphaTest+(t.alphaTest%1?"":".0"):"","#define GAMMA_FACTOR "+d,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.sheen?"#define USE_SHEEN":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"",(t.extensionShaderTextureLOD||t.envMap)&&t.rendererExtensionShaderTextureLod?"#define TEXTURE_LOD_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==oi?"#define TONE_MAPPING":"",t.toneMapping!==oi?we.tonemapping_pars_fragment:"",t.toneMapping!==oi?cp("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",we.encodings_pars_fragment,t.map?Jn("mapTexelToLinear",t.mapEncoding):"",t.matcap?Jn("matcapTexelToLinear",t.matcapEncoding):"",t.envMap?Jn("envMapTexelToLinear",t.envMapEncoding):"",t.emissiveMap?Jn("emissiveMapTexelToLinear",t.emissiveMapEncoding):"",t.lightMap?Jn("lightMapTexelToLinear",t.lightMapEncoding):"",lp("linearToOutputTexel",t.outputEncoding),t.depthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ii).join(`
`)),a=os(a),a=Ra(a,t),a=Ca(a,t),o=os(o),o=Ra(o,t),o=Ca(o,t),a=Pa(a),o=Pa(o),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(p=`#version 300 es
`,x=["#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,g=["#define varying in",t.glslVersion===ca?"":"out highp vec4 pc_fragColor;",t.glslVersion===ca?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);const T=p+x+a,L=p+g+o,A=Aa(i,35633,T),y=Aa(i,35632,L);if(i.attachShader(v,A),i.attachShader(v,y),t.index0AttributeName!==void 0?i.bindAttribLocation(v,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(v,0,"position"),i.linkProgram(v),s.debug.checkShaderErrors){const B=i.getProgramInfoLog(v).trim(),k=i.getShaderInfoLog(A).trim(),q=i.getShaderInfoLog(y).trim();let U=!0,R=!0;if(i.getProgramParameter(v,35714)===!1){U=!1;const P=La(i,A,"vertex"),I=La(i,y,"fragment");console.error("THREE.WebGLProgram: shader error: ",i.getError(),"35715",i.getProgramParameter(v,35715),"gl.getProgramInfoLog",B,P,I)}else B!==""?console.warn("THREE.WebGLProgram: gl.getProgramInfoLog()",B):(k===""||q==="")&&(R=!1);R&&(this.diagnostics={runnable:U,programLog:B,vertexShader:{log:k,prefix:x},fragmentShader:{log:q,prefix:g}})}i.deleteShader(A),i.deleteShader(y);let N;this.getUniforms=function(){return N===void 0&&(N=new Zt(i,v)),N};let O;return this.getAttributes=function(){return O===void 0&&(O=dp(i,v)),O},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(v),this.program=void 0},this.name=t.shaderName,this.id=ap++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=A,this.fragmentShader=y,this}function wp(s,e,t,n,i,r){const a=[],o=n.isWebGL2,l=n.logarithmicDepthBuffer,c=n.floatVertexTextures,h=n.maxVertexUniforms,u=n.vertexTextures;let d=n.precision;const f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"},m=["precision","isWebGL2","supportsVertexTextures","outputEncoding","instancing","instancingColor","map","mapEncoding","matcap","matcapEncoding","envMap","envMapMode","envMapEncoding","envMapCubeUV","lightMap","lightMapEncoding","aoMap","emissiveMap","emissiveMapEncoding","bumpMap","normalMap","objectSpaceNormalMap","tangentSpaceNormalMap","clearcoatMap","clearcoatRoughnessMap","clearcoatNormalMap","displacementMap","specularMap","roughnessMap","metalnessMap","gradientMap","alphaMap","combine","vertexColors","vertexAlphas","vertexTangents","vertexUvs","uvsVertexOnly","fog","useFog","fogExp2","flatShading","sizeAttenuation","logarithmicDepthBuffer","skinning","maxBones","useVertexTexture","morphTargets","morphNormals","premultipliedAlpha","numDirLights","numPointLights","numSpotLights","numHemiLights","numRectAreaLights","numDirLightShadows","numPointLightShadows","numSpotLightShadows","shadowMapEnabled","shadowMapType","toneMapping","physicallyCorrectLights","alphaTest","doubleSided","flipSided","numClippingPlanes","numClipIntersection","depthPacking","dithering","sheen","transmissionMap"];function v(y){const O=y.skeleton.bones;if(c)return 1024;{const k=Math.floor((h-20)/4),q=Math.min(k,O.length);return q<O.length?(console.warn("THREE.WebGLRenderer: Skeleton has "+O.length+" bones. This GPU supports "+q+"."),0):q}}function x(y){let N;return y&&y.isTexture?N=y.encoding:y&&y.isWebGLRenderTarget?(console.warn("THREE.WebGLPrograms.getTextureEncodingFromMap: don't use render targets as textures. Use their .texture property instead."),N=y.texture.encoding):N=_i,N}function g(y,N,O,B,k){const q=B.fog,U=y.isMeshStandardMaterial?B.environment:null,R=e.get(y.envMap||U),P=f[y.type],I=k.isSkinnedMesh?v(k):0;y.precision!==null&&(d=n.getMaxPrecision(y.precision),d!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",d,"instead."));let C,Y;if(P){const ae=Rt[P];C=ae.vertexShader,Y=ae.fragmentShader}else C=y.vertexShader,Y=y.fragmentShader;const K=s.getRenderTarget();return{isWebGL2:o,shaderID:P,shaderName:y.type,vertexShader:C,fragmentShader:Y,defines:y.defines,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:d,instancing:k.isInstancedMesh===!0,instancingColor:k.isInstancedMesh===!0&&k.instanceColor!==null,supportsVertexTextures:u,outputEncoding:K!==null?x(K.texture):s.outputEncoding,map:!!y.map,mapEncoding:x(y.map),matcap:!!y.matcap,matcapEncoding:x(y.matcap),envMap:!!R,envMapMode:R&&R.mapping,envMapEncoding:x(R),envMapCubeUV:!!R&&(R.mapping===ms||R.mapping===gs),lightMap:!!y.lightMap,lightMapEncoding:x(y.lightMap),aoMap:!!y.aoMap,emissiveMap:!!y.emissiveMap,emissiveMapEncoding:x(y.emissiveMap),bumpMap:!!y.bumpMap,normalMap:!!y.normalMap,objectSpaceNormalMap:y.normalMapType===eh,tangentSpaceNormalMap:y.normalMapType===zn,clearcoatMap:!!y.clearcoatMap,clearcoatRoughnessMap:!!y.clearcoatRoughnessMap,clearcoatNormalMap:!!y.clearcoatNormalMap,displacementMap:!!y.displacementMap,roughnessMap:!!y.roughnessMap,metalnessMap:!!y.metalnessMap,specularMap:!!y.specularMap,alphaMap:!!y.alphaMap,gradientMap:!!y.gradientMap,sheen:!!y.sheen,transmissionMap:!!y.transmissionMap,combine:y.combine,vertexTangents:y.normalMap&&y.vertexTangents,vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&k.geometry&&k.geometry.attributes.color&&k.geometry.attributes.color.itemSize===4,vertexUvs:!!y.map||!!y.bumpMap||!!y.normalMap||!!y.specularMap||!!y.alphaMap||!!y.emissiveMap||!!y.roughnessMap||!!y.metalnessMap||!!y.clearcoatMap||!!y.clearcoatRoughnessMap||!!y.clearcoatNormalMap||!!y.displacementMap||!!y.transmissionMap,uvsVertexOnly:!(y.map||y.bumpMap||y.normalMap||y.specularMap||y.alphaMap||y.emissiveMap||y.roughnessMap||y.metalnessMap||y.clearcoatNormalMap||y.transmissionMap)&&!!y.displacementMap,fog:!!q,useFog:y.fog,fogExp2:q&&q.isFogExp2,flatShading:!!y.flatShading,sizeAttenuation:y.sizeAttenuation,logarithmicDepthBuffer:l,skinning:y.skinning&&I>0,maxBones:I,useVertexTexture:c,morphTargets:y.morphTargets,morphNormals:y.morphNormals,numDirLights:N.directional.length,numPointLights:N.point.length,numSpotLights:N.spot.length,numRectAreaLights:N.rectArea.length,numHemiLights:N.hemi.length,numDirLightShadows:N.directionalShadowMap.length,numPointLightShadows:N.pointShadowMap.length,numSpotLightShadows:N.spotShadowMap.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:y.dithering,shadowMapEnabled:s.shadowMap.enabled&&O.length>0,shadowMapType:s.shadowMap.type,toneMapping:y.toneMapped?s.toneMapping:oi,physicallyCorrectLights:s.physicallyCorrectLights,premultipliedAlpha:y.premultipliedAlpha,alphaTest:y.alphaTest,doubleSided:y.side===lr,flipSided:y.side===Je,depthPacking:y.depthPacking!==void 0?y.depthPacking:!1,index0AttributeName:y.index0AttributeName,extensionDerivatives:y.extensions&&y.extensions.derivatives,extensionFragDepth:y.extensions&&y.extensions.fragDepth,extensionDrawBuffers:y.extensions&&y.extensions.drawBuffers,extensionShaderTextureLOD:y.extensions&&y.extensions.shaderTextureLOD,rendererExtensionFragDepth:o||t.has("EXT_frag_depth"),rendererExtensionDrawBuffers:o||t.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:o||t.has("EXT_shader_texture_lod"),customProgramCacheKey:y.customProgramCacheKey()}}function p(y){const N=[];if(y.shaderID?N.push(y.shaderID):(N.push(y.fragmentShader),N.push(y.vertexShader)),y.defines!==void 0)for(const O in y.defines)N.push(O),N.push(y.defines[O]);if(y.isRawShaderMaterial===!1){for(let O=0;O<m.length;O++)N.push(y[m[O]]);N.push(s.outputEncoding),N.push(s.gammaFactor)}return N.push(y.customProgramCacheKey),N.join()}function T(y){const N=f[y.type];let O;if(N){const B=Rt[N];O=Ph.clone(B.uniforms)}else O=y.uniforms;return O}function L(y,N){let O;for(let B=0,k=a.length;B<k;B++){const q=a[B];if(q.cacheKey===N){O=q,++O.usedTimes;break}}return O===void 0&&(O=new bp(s,N,y,i),a.push(O)),O}function A(y){if(--y.usedTimes===0){const N=a.indexOf(y);a[N]=a[a.length-1],a.pop(),y.destroy()}}return{getParameters:g,getProgramCacheKey:p,getUniforms:T,acquireProgram:L,releaseProgram:A,programs:a}}function Sp(){let s=new WeakMap;function e(r){let a=s.get(r);return a===void 0&&(a={},s.set(r,a)),a}function t(r){s.delete(r)}function n(r,a,o){s.get(r)[a]=o}function i(){s=new WeakMap}return{get:e,remove:t,update:n,dispose:i}}function Ep(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.program!==e.program?s.program.id-e.program.id:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function Tp(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function Da(s){const e=[];let t=0;const n=[],i=[],r={id:-1};function a(){t=0,n.length=0,i.length=0}function o(d,f,m,v,x,g){let p=e[t];const T=s.get(m);return p===void 0?(p={id:d.id,object:d,geometry:f,material:m,program:T.program||r,groupOrder:v,renderOrder:d.renderOrder,z:x,group:g},e[t]=p):(p.id=d.id,p.object=d,p.geometry=f,p.material=m,p.program=T.program||r,p.groupOrder=v,p.renderOrder=d.renderOrder,p.z=x,p.group=g),t++,p}function l(d,f,m,v,x,g){const p=o(d,f,m,v,x,g);(m.transparent===!0?i:n).push(p)}function c(d,f,m,v,x,g){const p=o(d,f,m,v,x,g);(m.transparent===!0?i:n).unshift(p)}function h(d,f){n.length>1&&n.sort(d||Ep),i.length>1&&i.sort(f||Tp)}function u(){for(let d=t,f=e.length;d<f;d++){const m=e[d];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.program=null,m.group=null}}return{opaque:n,transparent:i,init:a,push:l,unshift:c,finish:u,sort:h}}function Ap(s){let e=new WeakMap;function t(i,r){let a;return e.has(i)===!1?(a=new Da(s),e.set(i,[a])):r>=e.get(i).length?(a=new Da(s),e.get(i).push(a)):a=e.get(i)[r],a}function n(){e=new WeakMap}return{get:t,dispose:n}}function Lp(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new b,color:new he};break;case"SpotLight":t={position:new b,direction:new b,color:new he,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new b,color:new he,distance:0,decay:0};break;case"HemisphereLight":t={direction:new b,skyColor:new he,groundColor:new he};break;case"RectAreaLight":t={color:new he,position:new b,halfWidth:new b,halfHeight:new b};break}return s[e.id]=t,t}}}function Rp(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Z};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Z};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Z,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let Cp=0;function Pp(s,e){return(e.castShadow?1:0)-(s.castShadow?1:0)}function Ip(s,e){const t=new Lp,n=Rp(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotShadow:[],spotShadowMap:[],spotShadowMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[]};for(let h=0;h<9;h++)i.probe.push(new b);const r=new b,a=new pe,o=new pe;function l(h){let u=0,d=0,f=0;for(let N=0;N<9;N++)i.probe[N].set(0,0,0);let m=0,v=0,x=0,g=0,p=0,T=0,L=0,A=0;h.sort(Pp);for(let N=0,O=h.length;N<O;N++){const B=h[N],k=B.color,q=B.intensity,U=B.distance,R=B.shadow&&B.shadow.map?B.shadow.map.texture:null;if(B.isAmbientLight)u+=k.r*q,d+=k.g*q,f+=k.b*q;else if(B.isLightProbe)for(let P=0;P<9;P++)i.probe[P].addScaledVector(B.sh.coefficients[P],q);else if(B.isDirectionalLight){const P=t.get(B);if(P.color.copy(B.color).multiplyScalar(B.intensity),B.castShadow){const I=B.shadow,C=n.get(B);C.shadowBias=I.bias,C.shadowNormalBias=I.normalBias,C.shadowRadius=I.radius,C.shadowMapSize=I.mapSize,i.directionalShadow[m]=C,i.directionalShadowMap[m]=R,i.directionalShadowMatrix[m]=B.shadow.matrix,T++}i.directional[m]=P,m++}else if(B.isSpotLight){const P=t.get(B);if(P.position.setFromMatrixPosition(B.matrixWorld),P.color.copy(k).multiplyScalar(q),P.distance=U,P.coneCos=Math.cos(B.angle),P.penumbraCos=Math.cos(B.angle*(1-B.penumbra)),P.decay=B.decay,B.castShadow){const I=B.shadow,C=n.get(B);C.shadowBias=I.bias,C.shadowNormalBias=I.normalBias,C.shadowRadius=I.radius,C.shadowMapSize=I.mapSize,i.spotShadow[x]=C,i.spotShadowMap[x]=R,i.spotShadowMatrix[x]=B.shadow.matrix,A++}i.spot[x]=P,x++}else if(B.isRectAreaLight){const P=t.get(B);P.color.copy(k).multiplyScalar(q),P.halfWidth.set(B.width*.5,0,0),P.halfHeight.set(0,B.height*.5,0),i.rectArea[g]=P,g++}else if(B.isPointLight){const P=t.get(B);if(P.color.copy(B.color).multiplyScalar(B.intensity),P.distance=B.distance,P.decay=B.decay,B.castShadow){const I=B.shadow,C=n.get(B);C.shadowBias=I.bias,C.shadowNormalBias=I.normalBias,C.shadowRadius=I.radius,C.shadowMapSize=I.mapSize,C.shadowCameraNear=I.camera.near,C.shadowCameraFar=I.camera.far,i.pointShadow[v]=C,i.pointShadowMap[v]=R,i.pointShadowMatrix[v]=B.shadow.matrix,L++}i.point[v]=P,v++}else if(B.isHemisphereLight){const P=t.get(B);P.skyColor.copy(B.color).multiplyScalar(q),P.groundColor.copy(B.groundColor).multiplyScalar(q),i.hemi[p]=P,p++}}g>0&&(e.isWebGL2||s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=te.LTC_FLOAT_1,i.rectAreaLTC2=te.LTC_FLOAT_2):s.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=te.LTC_HALF_1,i.rectAreaLTC2=te.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=u,i.ambient[1]=d,i.ambient[2]=f;const y=i.hash;(y.directionalLength!==m||y.pointLength!==v||y.spotLength!==x||y.rectAreaLength!==g||y.hemiLength!==p||y.numDirectionalShadows!==T||y.numPointShadows!==L||y.numSpotShadows!==A)&&(i.directional.length=m,i.spot.length=x,i.rectArea.length=g,i.point.length=v,i.hemi.length=p,i.directionalShadow.length=T,i.directionalShadowMap.length=T,i.pointShadow.length=L,i.pointShadowMap.length=L,i.spotShadow.length=A,i.spotShadowMap.length=A,i.directionalShadowMatrix.length=T,i.pointShadowMatrix.length=L,i.spotShadowMatrix.length=A,y.directionalLength=m,y.pointLength=v,y.spotLength=x,y.rectAreaLength=g,y.hemiLength=p,y.numDirectionalShadows=T,y.numPointShadows=L,y.numSpotShadows=A,i.version=Cp++)}function c(h,u){let d=0,f=0,m=0,v=0,x=0;const g=u.matrixWorldInverse;for(let p=0,T=h.length;p<T;p++){const L=h[p];if(L.isDirectionalLight){const A=i.directional[d];A.direction.setFromMatrixPosition(L.matrixWorld),r.setFromMatrixPosition(L.target.matrixWorld),A.direction.sub(r),A.direction.transformDirection(g),d++}else if(L.isSpotLight){const A=i.spot[m];A.position.setFromMatrixPosition(L.matrixWorld),A.position.applyMatrix4(g),A.direction.setFromMatrixPosition(L.matrixWorld),r.setFromMatrixPosition(L.target.matrixWorld),A.direction.sub(r),A.direction.transformDirection(g),m++}else if(L.isRectAreaLight){const A=i.rectArea[v];A.position.setFromMatrixPosition(L.matrixWorld),A.position.applyMatrix4(g),o.identity(),a.copy(L.matrixWorld),a.premultiply(g),o.extractRotation(a),A.halfWidth.set(L.width*.5,0,0),A.halfHeight.set(0,L.height*.5,0),A.halfWidth.applyMatrix4(o),A.halfHeight.applyMatrix4(o),v++}else if(L.isPointLight){const A=i.point[f];A.position.setFromMatrixPosition(L.matrixWorld),A.position.applyMatrix4(g),f++}else if(L.isHemisphereLight){const A=i.hemi[x];A.direction.setFromMatrixPosition(L.matrixWorld),A.direction.transformDirection(g),A.direction.normalize(),x++}}}return{setup:l,setupView:c,state:i}}function Na(s,e){const t=new Ip(s,e),n=[],i=[];function r(){n.length=0,i.length=0}function a(u){n.push(u)}function o(u){i.push(u)}function l(){t.setup(n)}function c(u){t.setupView(n,u)}return{init:r,state:{lightsArray:n,shadowsArray:i,lights:t},setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function Dp(s,e){let t=new WeakMap;function n(r,a=0){let o;return t.has(r)===!1?(o=new Na(s,e),t.set(r,[o])):a>=t.get(r).length?(o=new Na(s,e),t.get(r).push(o)):o=t.get(r)[a],o}function i(){t=new WeakMap}return{get:n,dispose:i}}class Go extends Qe{constructor(e){super(),this.type="MeshDepthMaterial",this.depthPacking=Qc,this.skinning=!1,this.morphTargets=!1,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.skinning=e.skinning,this.morphTargets=e.morphTargets,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}Go.prototype.isMeshDepthMaterial=!0;class ko extends Qe{constructor(e){super(),this.type="MeshDistanceMaterial",this.referencePosition=new b,this.nearDistance=1,this.farDistance=1e3,this.skinning=!1,this.morphTargets=!1,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.fog=!1,this.setValues(e)}copy(e){return super.copy(e),this.referencePosition.copy(e.referencePosition),this.nearDistance=e.nearDistance,this.farDistance=e.farDistance,this.skinning=e.skinning,this.morphTargets=e.morphTargets,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}ko.prototype.isMeshDistanceMaterial=!0;var Np=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	float mean = 0.0;
	float squared_mean = 0.0;
	float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy ) / resolution ) );
	for ( float i = -1.0; i < 1.0 ; i += SAMPLE_RATE) {
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( i, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, i ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean * HALF_SAMPLE_RATE;
	squared_mean = squared_mean * HALF_SAMPLE_RATE;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`,Fp=`void main() {
	gl_Position = vec4( position, 1.0 );
}`;function Vo(s,e,t){let n=new dr;const i=new Z,r=new Z,a=new Oe,o=[],l=[],c={},h=t.maxTextureSize,u={0:Je,1:or,2:lr},d=new $t({defines:{SAMPLE_RATE:2/8,HALF_SAMPLE_RATE:1/8},uniforms:{shadow_pass:{value:null},resolution:{value:new Z},radius:{value:4}},vertexShader:Fp,fragmentShader:Np}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const m=new Fe;m.setAttribute("position",new $e(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new pt(m,d),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=mo,this.render=function(y,N,O){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||y.length===0)return;const B=s.getRenderTarget(),k=s.getActiveCubeFace(),q=s.getActiveMipmapLevel(),U=s.state;U.setBlending(si),U.buffers.color.setClear(1,1,1,1),U.buffers.depth.setTest(!0),U.setScissorTest(!1);for(let R=0,P=y.length;R<P;R++){const I=y[R],C=I.shadow;if(C===void 0){console.warn("THREE.WebGLShadowMap:",I,"has no shadow.");continue}if(C.autoUpdate===!1&&C.needsUpdate===!1)continue;i.copy(C.mapSize);const Y=C.getFrameExtents();if(i.multiply(Y),r.copy(C.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/Y.x),i.x=r.x*Y.x,C.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/Y.y),i.y=r.y*Y.y,C.mapSize.y=r.y)),C.map===null&&!C.isPointLightShadow&&this.type===ni){const $={minFilter:mt,magFilter:mt,format:St};C.map=new cn(i.x,i.y,$),C.map.texture.name=I.name+".shadowMap",C.mapPass=new cn(i.x,i.y,$),C.camera.updateProjectionMatrix()}if(C.map===null){const $={minFilter:lt,magFilter:lt,format:St};C.map=new cn(i.x,i.y,$),C.map.texture.name=I.name+".shadowMap",C.camera.updateProjectionMatrix()}s.setRenderTarget(C.map),s.clear();const K=C.getViewportCount();for(let $=0;$<K;$++){const ae=C.getViewport($);a.set(r.x*ae.x,r.y*ae.y,r.x*ae.z,r.y*ae.w),U.viewport(a),C.updateMatrices(I,$),n=C.getFrustum(),A(N,O,C.camera,I,this.type)}!C.isPointLightShadow&&this.type===ni&&g(C,O),C.needsUpdate=!1}x.needsUpdate=!1,s.setRenderTarget(B,k,q)};function g(y,N){const O=e.update(v);d.uniforms.shadow_pass.value=y.map.texture,d.uniforms.resolution.value=y.mapSize,d.uniforms.radius.value=y.radius,s.setRenderTarget(y.mapPass),s.clear(),s.renderBufferDirect(N,null,O,d,v,null),f.uniforms.shadow_pass.value=y.mapPass.texture,f.uniforms.resolution.value=y.mapSize,f.uniforms.radius.value=y.radius,s.setRenderTarget(y.map),s.clear(),s.renderBufferDirect(N,null,O,f,v,null)}function p(y,N,O){const B=y<<0|N<<1|O<<2;let k=o[B];return k===void 0&&(k=new Go({depthPacking:Kc,morphTargets:y,skinning:N}),o[B]=k),k}function T(y,N,O){const B=y<<0|N<<1|O<<2;let k=l[B];return k===void 0&&(k=new ko({morphTargets:y,skinning:N}),l[B]=k),k}function L(y,N,O,B,k,q,U){let R=null,P=p,I=y.customDepthMaterial;if(B.isPointLight===!0&&(P=T,I=y.customDistanceMaterial),I===void 0){let C=!1;O.morphTargets===!0&&(C=N.morphAttributes&&N.morphAttributes.position&&N.morphAttributes.position.length>0);let Y=!1;y.isSkinnedMesh===!0&&(O.skinning===!0?Y=!0:console.warn("THREE.WebGLShadowMap: THREE.SkinnedMesh with material.skinning set to false:",y));const K=y.isInstancedMesh===!0;R=P(C,Y,K)}else R=I;if(s.localClippingEnabled&&O.clipShadows===!0&&O.clippingPlanes.length!==0){const C=R.uuid,Y=O.uuid;let K=c[C];K===void 0&&(K={},c[C]=K);let $=K[Y];$===void 0&&($=R.clone(),K[Y]=$),R=$}return R.visible=O.visible,R.wireframe=O.wireframe,U===ni?R.side=O.shadowSide!==null?O.shadowSide:O.side:R.side=O.shadowSide!==null?O.shadowSide:u[O.side],R.clipShadows=O.clipShadows,R.clippingPlanes=O.clippingPlanes,R.clipIntersection=O.clipIntersection,R.wireframeLinewidth=O.wireframeLinewidth,R.linewidth=O.linewidth,B.isPointLight===!0&&R.isMeshDistanceMaterial===!0&&(R.referencePosition.setFromMatrixPosition(B.matrixWorld),R.nearDistance=k,R.farDistance=q),R}function A(y,N,O,B,k){if(y.visible===!1)return;if(y.layers.test(N.layers)&&(y.isMesh||y.isLine||y.isPoints)&&(y.castShadow||y.receiveShadow&&k===ni)&&(!y.frustumCulled||n.intersectsObject(y))){y.modelViewMatrix.multiplyMatrices(O.matrixWorldInverse,y.matrixWorld);const R=e.update(y),P=y.material;if(Array.isArray(P)){const I=R.groups;for(let C=0,Y=I.length;C<Y;C++){const K=I[C],$=P[K.materialIndex];if($&&$.visible){const ae=L(y,R,$,B,O.near,O.far,k);s.renderBufferDirect(O,null,R,ae,y,K)}}}else if(P.visible){const I=L(y,R,P,B,O.near,O.far,k);s.renderBufferDirect(O,null,R,I,y,null)}}const U=y.children;for(let R=0,P=U.length;R<P;R++)A(U[R],N,O,B,k)}}function Op(s,e,t){const n=t.isWebGL2;function i(){let S=!1;const X=new Oe;let j=null;const le=new Oe(0,0,0,0);return{setMask:function(W){j!==W&&!S&&(s.colorMask(W,W,W,W),j=W)},setLocked:function(W){S=W},setClear:function(W,fe,Le,Ce,Ke){Ke===!0&&(W*=Ce,fe*=Ce,Le*=Ce),X.set(W,fe,Le,Ce),le.equals(X)===!1&&(s.clearColor(W,fe,Le,Ce),le.copy(X))},reset:function(){S=!1,j=null,le.set(-1,0,0,0)}}}function r(){let S=!1,X=null,j=null,le=null;return{setTest:function(W){W?ue(2929):me(2929)},setMask:function(W){X!==W&&!S&&(s.depthMask(W),X=W)},setFunc:function(W){if(j!==W){if(W)switch(W){case Ol:s.depthFunc(512);break;case Bl:s.depthFunc(519);break;case zl:s.depthFunc(513);break;case is:s.depthFunc(515);break;case Ul:s.depthFunc(514);break;case Hl:s.depthFunc(518);break;case Gl:s.depthFunc(516);break;case kl:s.depthFunc(517);break;default:s.depthFunc(515)}else s.depthFunc(515);j=W}},setLocked:function(W){S=W},setClear:function(W){le!==W&&(s.clearDepth(W),le=W)},reset:function(){S=!1,X=null,j=null,le=null}}}function a(){let S=!1,X=null,j=null,le=null,W=null,fe=null,Le=null,Ce=null,Ke=null;return{setTest:function(We){S||(We?ue(2960):me(2960))},setMask:function(We){X!==We&&!S&&(s.stencilMask(We),X=We)},setFunc:function(We,It,xt){(j!==We||le!==It||W!==xt)&&(s.stencilFunc(We,It,xt),j=We,le=It,W=xt)},setOp:function(We,It,xt){(fe!==We||Le!==It||Ce!==xt)&&(s.stencilOp(We,It,xt),fe=We,Le=It,Ce=xt)},setLocked:function(We){S=We},setClear:function(We){Ke!==We&&(s.clearStencil(We),Ke=We)},reset:function(){S=!1,X=null,j=null,le=null,W=null,fe=null,Le=null,Ce=null,Ke=null}}}const o=new i,l=new r,c=new a;let h={},u=null,d={},f=null,m=!1,v=null,x=null,g=null,p=null,T=null,L=null,A=null,y=!1,N=null,O=null,B=null,k=null,q=null;const U=s.getParameter(35661);let R=!1,P=0;const I=s.getParameter(7938);I.indexOf("WebGL")!==-1?(P=parseFloat(/^WebGL (\d)/.exec(I)[1]),R=P>=1):I.indexOf("OpenGL ES")!==-1&&(P=parseFloat(/^OpenGL ES (\d)/.exec(I)[1]),R=P>=2);let C=null,Y={};const K=new Oe(0,0,s.canvas.width,s.canvas.height),$=new Oe(0,0,s.canvas.width,s.canvas.height);function ae(S,X,j){const le=new Uint8Array(4),W=s.createTexture();s.bindTexture(S,W),s.texParameteri(S,10241,9728),s.texParameteri(S,10240,9728);for(let fe=0;fe<j;fe++)s.texImage2D(X+fe,0,6408,1,1,0,6408,5121,le);return W}const se={};se[3553]=ae(3553,3553,1),se[34067]=ae(34067,34069,6),o.setClear(0,0,0,1),l.setClear(1),c.setClear(0),ue(2929),l.setFunc(is),be(!1),J(Ws),ue(2884),Ee(si);function ue(S){h[S]!==!0&&(s.enable(S),h[S]=!0)}function me(S){h[S]!==!1&&(s.disable(S),h[S]=!1)}function H(S){S!==u&&(s.bindFramebuffer(36160,S),u=S)}function Ie(S,X){X===null&&u!==null&&(X=u),d[S]!==X&&(s.bindFramebuffer(S,X),d[S]=X,n&&(S===36009&&(d[36160]=X),S===36160&&(d[36009]=X)))}function Se(S){return f!==S?(s.useProgram(S),f=S,!0):!1}const ge={[Cn]:32774,[El]:32778,[Tl]:32779};if(n)ge[Ys]=32775,ge[js]=32776;else{const S=e.get("EXT_blend_minmax");S!==null&&(ge[Ys]=S.MIN_EXT,ge[js]=S.MAX_EXT)}const de={[Al]:0,[Ll]:1,[Rl]:768,[vo]:770,[Fl]:776,[Dl]:774,[Pl]:772,[Cl]:769,[xo]:771,[Nl]:775,[Il]:773};function Ee(S,X,j,le,W,fe,Le,Ce){if(S===si){m===!0&&(me(3042),m=!1);return}if(m===!1&&(ue(3042),m=!0),S!==Sl){if(S!==v||Ce!==y){if((x!==Cn||T!==Cn)&&(s.blendEquation(32774),x=Cn,T=Cn),Ce)switch(S){case ai:s.blendFuncSeparate(1,771,1,771);break;case ns:s.blendFunc(1,1);break;case Xs:s.blendFuncSeparate(0,0,769,771);break;case qs:s.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",S);break}else switch(S){case ai:s.blendFuncSeparate(770,771,1,771);break;case ns:s.blendFunc(770,1);break;case Xs:s.blendFunc(0,769);break;case qs:s.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",S);break}g=null,p=null,L=null,A=null,v=S,y=Ce}return}W=W||X,fe=fe||j,Le=Le||le,(X!==x||W!==T)&&(s.blendEquationSeparate(ge[X],ge[W]),x=X,T=W),(j!==g||le!==p||fe!==L||Le!==A)&&(s.blendFuncSeparate(de[j],de[le],de[fe],de[Le]),g=j,p=le,L=fe,A=Le),v=S,y=null}function Me(S,X){S.side===lr?me(2884):ue(2884);let j=S.side===Je;X&&(j=!j),be(j),S.blending===ai&&S.transparent===!1?Ee(si):Ee(S.blending,S.blendEquation,S.blendSrc,S.blendDst,S.blendEquationAlpha,S.blendSrcAlpha,S.blendDstAlpha,S.premultipliedAlpha),l.setFunc(S.depthFunc),l.setTest(S.depthTest),l.setMask(S.depthWrite),o.setMask(S.colorWrite);const le=S.stencilWrite;c.setTest(le),le&&(c.setMask(S.stencilWriteMask),c.setFunc(S.stencilFunc,S.stencilRef,S.stencilFuncMask),c.setOp(S.stencilFail,S.stencilZFail,S.stencilZPass)),ee(S.polygonOffset,S.polygonOffsetFactor,S.polygonOffsetUnits),S.alphaToCoverage===!0?ue(32926):me(32926)}function be(S){N!==S&&(S?s.frontFace(2304):s.frontFace(2305),N=S)}function J(S){S!==Ml?(ue(2884),S!==O&&(S===Ws?s.cullFace(1029):S===bl?s.cullFace(1028):s.cullFace(1032))):me(2884),O=S}function Q(S){S!==B&&(R&&s.lineWidth(S),B=S)}function ee(S,X,j){S?(ue(32823),(k!==X||q!==j)&&(s.polygonOffset(X,j),k=X,q=j)):me(32823)}function ce(S){S?ue(3089):me(3089)}function re(S){S===void 0&&(S=33984+U-1),C!==S&&(s.activeTexture(S),C=S)}function w(S,X){C===null&&re();let j=Y[C];j===void 0&&(j={type:void 0,texture:void 0},Y[C]=j),(j.type!==S||j.texture!==X)&&(s.bindTexture(S,X||se[S]),j.type=S,j.texture=X)}function M(){const S=Y[C];S!==void 0&&S.type!==void 0&&(s.bindTexture(S.type,null),S.type=void 0,S.texture=void 0)}function G(){try{s.compressedTexImage2D.apply(s,arguments)}catch(S){console.error("THREE.WebGLState:",S)}}function V(){try{s.texImage2D.apply(s,arguments)}catch(S){console.error("THREE.WebGLState:",S)}}function ne(){try{s.texImage3D.apply(s,arguments)}catch(S){console.error("THREE.WebGLState:",S)}}function oe(S){K.equals(S)===!1&&(s.scissor(S.x,S.y,S.z,S.w),K.copy(S))}function Te(S){$.equals(S)===!1&&(s.viewport(S.x,S.y,S.z,S.w),$.copy(S))}function E(){s.disable(3042),s.disable(2884),s.disable(2929),s.disable(32823),s.disable(3089),s.disable(2960),s.disable(32926),s.blendEquation(32774),s.blendFunc(1,0),s.blendFuncSeparate(1,0,1,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(513),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(519,0,4294967295),s.stencilOp(7680,7680,7680),s.clearStencil(0),s.cullFace(1029),s.frontFace(2305),s.polygonOffset(0,0),s.activeTexture(33984),s.bindFramebuffer(36160,null),n===!0&&(s.bindFramebuffer(36009,null),s.bindFramebuffer(36008,null)),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),h={},C=null,Y={},u=null,d={},f=null,m=!1,v=null,x=null,g=null,p=null,T=null,L=null,A=null,y=!1,N=null,O=null,B=null,k=null,q=null,K.set(0,0,s.canvas.width,s.canvas.height),$.set(0,0,s.canvas.width,s.canvas.height),o.reset(),l.reset(),c.reset()}return{buffers:{color:o,depth:l,stencil:c},enable:ue,disable:me,bindFramebuffer:Ie,bindXRFramebuffer:H,useProgram:Se,setBlending:Ee,setMaterial:Me,setFlipSided:be,setCullFace:J,setLineWidth:Q,setPolygonOffset:ee,setScissorTest:ce,activeTexture:re,bindTexture:w,unbindTexture:M,compressedTexImage2D:G,texImage2D:V,texImage3D:ne,scissor:oe,viewport:Te,reset:E}}function Bp(s,e,t,n,i,r,a){const o=i.isWebGL2,l=i.maxTextures,c=i.maxCubemapSize,h=i.maxTextureSize,u=i.maxSamples,d=new WeakMap;let f,m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(w,M){return m?new OffscreenCanvas(w,M):document.createElementNS("http://www.w3.org/1999/xhtml","canvas")}function x(w,M,G,V){let ne=1;if((w.width>V||w.height>V)&&(ne=V/Math.max(w.width,w.height)),ne<1||M===!0)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap){const oe=M?wo:Math.floor,Te=oe(ne*w.width),E=oe(ne*w.height);f===void 0&&(f=v(Te,E));const S=G?v(Te,E):f;return S.width=Te,S.height=E,S.getContext("2d").drawImage(w,0,0,Te,E),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+w.width+"x"+w.height+") to ("+Te+"x"+E+")."),S}else return"data"in w&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+w.width+"x"+w.height+")."),w;return w}function g(w){return as(w.width)&&as(w.height)}function p(w){return o?!1:w.wrapS!==wt||w.wrapT!==wt||w.minFilter!==lt&&w.minFilter!==mt}function T(w,M){return w.generateMipmaps&&M&&w.minFilter!==lt&&w.minFilter!==mt}function L(w,M,G,V){s.generateMipmap(w);const ne=n.get(M);ne.__maxMipLevel=Math.log2(Math.max(G,V))}function A(w,M,G){if(o===!1)return M;if(w!==null){if(s[w]!==void 0)return s[w];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let V=M;return M===6403&&(G===5126&&(V=33326),G===5131&&(V=33325),G===5121&&(V=33321)),M===6407&&(G===5126&&(V=34837),G===5131&&(V=34843),G===5121&&(V=32849)),M===6408&&(G===5126&&(V=34836),G===5131&&(V=34842),G===5121&&(V=32856)),(V===33325||V===33326||V===34842||V===34836)&&e.get("EXT_color_buffer_float"),V}function y(w){return w===lt||w===$s||w===Qs?9728:9729}function N(w){const M=w.target;M.removeEventListener("dispose",N),B(M),M.isVideoTexture&&d.delete(M),a.memory.textures--}function O(w){const M=w.target;M.removeEventListener("dispose",O),k(M),a.memory.textures--}function B(w){const M=n.get(w);M.__webglInit!==void 0&&(s.deleteTexture(M.__webglTexture),n.remove(w))}function k(w){const M=w.texture,G=n.get(w),V=n.get(M);if(w){if(V.__webglTexture!==void 0&&s.deleteTexture(V.__webglTexture),w.depthTexture&&w.depthTexture.dispose(),w.isWebGLCubeRenderTarget)for(let ne=0;ne<6;ne++)s.deleteFramebuffer(G.__webglFramebuffer[ne]),G.__webglDepthbuffer&&s.deleteRenderbuffer(G.__webglDepthbuffer[ne]);else s.deleteFramebuffer(G.__webglFramebuffer),G.__webglDepthbuffer&&s.deleteRenderbuffer(G.__webglDepthbuffer),G.__webglMultisampledFramebuffer&&s.deleteFramebuffer(G.__webglMultisampledFramebuffer),G.__webglColorRenderbuffer&&s.deleteRenderbuffer(G.__webglColorRenderbuffer),G.__webglDepthRenderbuffer&&s.deleteRenderbuffer(G.__webglDepthRenderbuffer);n.remove(M),n.remove(w)}}let q=0;function U(){q=0}function R(){const w=q;return w>=l&&console.warn("THREE.WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+l),q+=1,w}function P(w,M){const G=n.get(w);if(w.isVideoTexture&&J(w),w.version>0&&G.__version!==w.version){const V=w.image;if(V===void 0)console.warn("THREE.WebGLRenderer: Texture marked for update but image is undefined");else if(V.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ue(G,w,M);return}}t.activeTexture(33984+M),t.bindTexture(3553,G.__webglTexture)}function I(w,M){const G=n.get(w);if(w.version>0&&G.__version!==w.version){ue(G,w,M);return}t.activeTexture(33984+M),t.bindTexture(35866,G.__webglTexture)}function C(w,M){const G=n.get(w);if(w.version>0&&G.__version!==w.version){ue(G,w,M);return}t.activeTexture(33984+M),t.bindTexture(32879,G.__webglTexture)}function Y(w,M){const G=n.get(w);if(w.version>0&&G.__version!==w.version){me(G,w,M);return}t.activeTexture(33984+M),t.bindTexture(34067,G.__webglTexture)}const K={[rs]:10497,[wt]:33071,[ss]:33648},$={[lt]:9728,[$s]:9984,[Qs]:9986,[mt]:9729,[Jl]:9985,[vs]:9987};function ae(w,M,G){if(G?(s.texParameteri(w,10242,K[M.wrapS]),s.texParameteri(w,10243,K[M.wrapT]),(w===32879||w===35866)&&s.texParameteri(w,32882,K[M.wrapR]),s.texParameteri(w,10240,$[M.magFilter]),s.texParameteri(w,10241,$[M.minFilter])):(s.texParameteri(w,10242,33071),s.texParameteri(w,10243,33071),(w===32879||w===35866)&&s.texParameteri(w,32882,33071),(M.wrapS!==wt||M.wrapT!==wt)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),s.texParameteri(w,10240,y(M.magFilter)),s.texParameteri(w,10241,y(M.minFilter)),M.minFilter!==lt&&M.minFilter!==mt&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const V=e.get("EXT_texture_filter_anisotropic");if(M.type===jt&&e.has("OES_texture_float_linear")===!1||o===!1&&M.type===er&&e.has("OES_texture_half_float_linear")===!1)return;(M.anisotropy>1||n.get(M).__currentAnisotropy)&&(s.texParameterf(w,V.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,i.getMaxAnisotropy())),n.get(M).__currentAnisotropy=M.anisotropy)}}function se(w,M){w.__webglInit===void 0&&(w.__webglInit=!0,M.addEventListener("dispose",N),w.__webglTexture=s.createTexture(),a.memory.textures++)}function ue(w,M,G){let V=3553;M.isDataTexture2DArray&&(V=35866),M.isDataTexture3D&&(V=32879),se(w,M),t.activeTexture(33984+G),t.bindTexture(V,w.__webglTexture),s.pixelStorei(37440,M.flipY),s.pixelStorei(37441,M.premultiplyAlpha),s.pixelStorei(3317,M.unpackAlignment),s.pixelStorei(37443,0);const ne=p(M)&&g(M.image)===!1,oe=x(M.image,ne,!1,h),Te=g(oe)||o,E=r.convert(M.format);let S=r.convert(M.type),X=A(M.internalFormat,E,S);ae(V,M,Te);let j;const le=M.mipmaps;if(M.isDepthTexture)X=6402,o?M.type===jt?X=36012:M.type===Qi?X=33190:M.type===li?X=35056:X=33189:M.type===jt&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),M.format===Fn&&X===6402&&M.type!==Ki&&M.type!==Qi&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),M.type=Ki,S=r.convert(M.type)),M.format===fi&&X===6402&&(X=34041,M.type!==li&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),M.type=li,S=r.convert(M.type))),t.texImage2D(3553,0,X,oe.width,oe.height,0,E,S,null);else if(M.isDataTexture)if(le.length>0&&Te){for(let W=0,fe=le.length;W<fe;W++)j=le[W],t.texImage2D(3553,W,X,j.width,j.height,0,E,S,j.data);M.generateMipmaps=!1,w.__maxMipLevel=le.length-1}else t.texImage2D(3553,0,X,oe.width,oe.height,0,E,S,oe.data),w.__maxMipLevel=0;else if(M.isCompressedTexture){for(let W=0,fe=le.length;W<fe;W++)j=le[W],M.format!==St&&M.format!==ln?E!==null?t.compressedTexImage2D(3553,W,X,j.width,j.height,0,j.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):t.texImage2D(3553,W,X,j.width,j.height,0,E,S,j.data);w.__maxMipLevel=le.length-1}else if(M.isDataTexture2DArray)t.texImage3D(35866,0,X,oe.width,oe.height,oe.depth,0,E,S,oe.data),w.__maxMipLevel=0;else if(M.isDataTexture3D)t.texImage3D(32879,0,X,oe.width,oe.height,oe.depth,0,E,S,oe.data),w.__maxMipLevel=0;else if(le.length>0&&Te){for(let W=0,fe=le.length;W<fe;W++)j=le[W],t.texImage2D(3553,W,X,E,S,j);M.generateMipmaps=!1,w.__maxMipLevel=le.length-1}else t.texImage2D(3553,0,X,E,S,oe),w.__maxMipLevel=0;T(M,Te)&&L(V,M,oe.width,oe.height),w.__version=M.version,M.onUpdate&&M.onUpdate(M)}function me(w,M,G){if(M.image.length!==6)return;se(w,M),t.activeTexture(33984+G),t.bindTexture(34067,w.__webglTexture),s.pixelStorei(37440,M.flipY),s.pixelStorei(37441,M.premultiplyAlpha),s.pixelStorei(3317,M.unpackAlignment),s.pixelStorei(37443,0);const V=M&&(M.isCompressedTexture||M.image[0].isCompressedTexture),ne=M.image[0]&&M.image[0].isDataTexture,oe=[];for(let W=0;W<6;W++)!V&&!ne?oe[W]=x(M.image[W],!1,!0,c):oe[W]=ne?M.image[W].image:M.image[W];const Te=oe[0],E=g(Te)||o,S=r.convert(M.format),X=r.convert(M.type),j=A(M.internalFormat,S,X);ae(34067,M,E);let le;if(V){for(let W=0;W<6;W++){le=oe[W].mipmaps;for(let fe=0;fe<le.length;fe++){const Le=le[fe];M.format!==St&&M.format!==ln?S!==null?t.compressedTexImage2D(34069+W,fe,j,Le.width,Le.height,0,Le.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):t.texImage2D(34069+W,fe,j,Le.width,Le.height,0,S,X,Le.data)}}w.__maxMipLevel=le.length-1}else{le=M.mipmaps;for(let W=0;W<6;W++)if(ne){t.texImage2D(34069+W,0,j,oe[W].width,oe[W].height,0,S,X,oe[W].data);for(let fe=0;fe<le.length;fe++){const Ce=le[fe].image[W].image;t.texImage2D(34069+W,fe+1,j,Ce.width,Ce.height,0,S,X,Ce.data)}}else{t.texImage2D(34069+W,0,j,S,X,oe[W]);for(let fe=0;fe<le.length;fe++){const Le=le[fe];t.texImage2D(34069+W,fe+1,j,S,X,Le.image[W])}}w.__maxMipLevel=le.length}T(M,E)&&L(34067,M,Te.width,Te.height),w.__version=M.version,M.onUpdate&&M.onUpdate(M)}function H(w,M,G,V){const ne=M.texture,oe=r.convert(ne.format),Te=r.convert(ne.type),E=A(ne.internalFormat,oe,Te);V===32879||V===35866?t.texImage3D(V,0,E,M.width,M.height,M.depth,0,oe,Te,null):t.texImage2D(V,0,E,M.width,M.height,0,oe,Te,null),t.bindFramebuffer(36160,w),s.framebufferTexture2D(36160,G,V,n.get(ne).__webglTexture,0),t.bindFramebuffer(36160,null)}function Ie(w,M,G){if(s.bindRenderbuffer(36161,w),M.depthBuffer&&!M.stencilBuffer){let V=33189;if(G){const ne=M.depthTexture;ne&&ne.isDepthTexture&&(ne.type===jt?V=36012:ne.type===Qi&&(V=33190));const oe=be(M);s.renderbufferStorageMultisample(36161,oe,V,M.width,M.height)}else s.renderbufferStorage(36161,V,M.width,M.height);s.framebufferRenderbuffer(36160,36096,36161,w)}else if(M.depthBuffer&&M.stencilBuffer){if(G){const V=be(M);s.renderbufferStorageMultisample(36161,V,35056,M.width,M.height)}else s.renderbufferStorage(36161,34041,M.width,M.height);s.framebufferRenderbuffer(36160,33306,36161,w)}else{const V=M.texture,ne=r.convert(V.format),oe=r.convert(V.type),Te=A(V.internalFormat,ne,oe);if(G){const E=be(M);s.renderbufferStorageMultisample(36161,E,Te,M.width,M.height)}else s.renderbufferStorage(36161,Te,M.width,M.height)}s.bindRenderbuffer(36161,null)}function Se(w,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(36160,w),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(M.depthTexture).__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),P(M.depthTexture,0);const V=n.get(M.depthTexture).__webglTexture;if(M.depthTexture.format===Fn)s.framebufferTexture2D(36160,36096,3553,V,0);else if(M.depthTexture.format===fi)s.framebufferTexture2D(36160,33306,3553,V,0);else throw new Error("Unknown depthTexture format")}function ge(w){const M=n.get(w),G=w.isWebGLCubeRenderTarget===!0;if(w.depthTexture){if(G)throw new Error("target.depthTexture not supported in Cube render targets");Se(M.__webglFramebuffer,w)}else if(G){M.__webglDepthbuffer=[];for(let V=0;V<6;V++)t.bindFramebuffer(36160,M.__webglFramebuffer[V]),M.__webglDepthbuffer[V]=s.createRenderbuffer(),Ie(M.__webglDepthbuffer[V],w,!1)}else t.bindFramebuffer(36160,M.__webglFramebuffer),M.__webglDepthbuffer=s.createRenderbuffer(),Ie(M.__webglDepthbuffer,w,!1);t.bindFramebuffer(36160,null)}function de(w){const M=w.texture,G=n.get(w),V=n.get(M);w.addEventListener("dispose",O),V.__webglTexture=s.createTexture(),V.__version=M.version,a.memory.textures++;const ne=w.isWebGLCubeRenderTarget===!0,oe=w.isWebGLMultisampleRenderTarget===!0,Te=M.isDataTexture3D||M.isDataTexture2DArray,E=g(w)||o;if(o&&M.format===ln&&(M.type===jt||M.type===er)&&(M.format=St,console.warn("THREE.WebGLRenderer: Rendering to textures with RGB format is not supported. Using RGBA format instead.")),ne){G.__webglFramebuffer=[];for(let S=0;S<6;S++)G.__webglFramebuffer[S]=s.createFramebuffer()}else if(G.__webglFramebuffer=s.createFramebuffer(),oe)if(o){G.__webglMultisampledFramebuffer=s.createFramebuffer(),G.__webglColorRenderbuffer=s.createRenderbuffer(),s.bindRenderbuffer(36161,G.__webglColorRenderbuffer);const S=r.convert(M.format),X=r.convert(M.type),j=A(M.internalFormat,S,X),le=be(w);s.renderbufferStorageMultisample(36161,le,j,w.width,w.height),t.bindFramebuffer(36160,G.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(36160,36064,36161,G.__webglColorRenderbuffer),s.bindRenderbuffer(36161,null),w.depthBuffer&&(G.__webglDepthRenderbuffer=s.createRenderbuffer(),Ie(G.__webglDepthRenderbuffer,w,!0)),t.bindFramebuffer(36160,null)}else console.warn("THREE.WebGLRenderer: WebGLMultisampleRenderTarget can only be used with WebGL2.");if(ne){t.bindTexture(34067,V.__webglTexture),ae(34067,M,E);for(let S=0;S<6;S++)H(G.__webglFramebuffer[S],w,36064,34069+S);T(M,E)&&L(34067,M,w.width,w.height),t.bindTexture(34067,null)}else{let S=3553;Te&&(o?S=M.isDataTexture3D?32879:35866:console.warn("THREE.DataTexture3D and THREE.DataTexture2DArray only supported with WebGL2.")),t.bindTexture(S,V.__webglTexture),ae(S,M,E),H(G.__webglFramebuffer,w,36064,S),T(M,E)&&L(3553,M,w.width,w.height),t.bindTexture(3553,null)}w.depthBuffer&&ge(w)}function Ee(w){const M=w.texture,G=g(w)||o;if(T(M,G)){const V=w.isWebGLCubeRenderTarget?34067:3553,ne=n.get(M).__webglTexture;t.bindTexture(V,ne),L(V,M,w.width,w.height),t.bindTexture(V,null)}}function Me(w){if(w.isWebGLMultisampleRenderTarget)if(o){const M=w.width,G=w.height;let V=16384;w.depthBuffer&&(V|=256),w.stencilBuffer&&(V|=1024);const ne=n.get(w);t.bindFramebuffer(36008,ne.__webglMultisampledFramebuffer),t.bindFramebuffer(36009,ne.__webglFramebuffer),s.blitFramebuffer(0,0,M,G,0,0,M,G,V,9728),t.bindFramebuffer(36008,null),t.bindFramebuffer(36009,ne.__webglMultisampledFramebuffer)}else console.warn("THREE.WebGLRenderer: WebGLMultisampleRenderTarget can only be used with WebGL2.")}function be(w){return o&&w.isWebGLMultisampleRenderTarget?Math.min(u,w.samples):0}function J(w){const M=a.render.frame;d.get(w)!==M&&(d.set(w,M),w.update())}let Q=!1,ee=!1;function ce(w,M){w&&w.isWebGLRenderTarget&&(Q===!1&&(console.warn("THREE.WebGLTextures.safeSetTexture2D: don't use render targets as textures. Use their .texture property instead."),Q=!0),w=w.texture),P(w,M)}function re(w,M){w&&w.isWebGLCubeRenderTarget&&(ee===!1&&(console.warn("THREE.WebGLTextures.safeSetTextureCube: don't use cube render targets as textures. Use their .texture property instead."),ee=!0),w=w.texture),Y(w,M)}this.allocateTextureUnit=R,this.resetTextureUnits=U,this.setTexture2D=P,this.setTexture2DArray=I,this.setTexture3D=C,this.setTextureCube=Y,this.setupRenderTarget=de,this.updateRenderTargetMipmap=Ee,this.updateMultisampleRenderTarget=Me,this.safeSetTexture2D=ce,this.safeSetTextureCube=re}function zp(s,e,t){const n=t.isWebGL2;function i(r){let a;if(r===xs)return 5121;if(r===ec)return 32819;if(r===tc)return 32820;if(r===nc)return 33635;if(r===$l)return 5120;if(r===Ql)return 5122;if(r===Ki)return 5123;if(r===Kl)return 5124;if(r===Qi)return 5125;if(r===jt)return 5126;if(r===er)return n?5131:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(r===ic)return 6406;if(r===ln)return 6407;if(r===St)return 6408;if(r===rc)return 6409;if(r===sc)return 6410;if(r===Fn)return 6402;if(r===fi)return 34041;if(r===ac)return 6403;if(r===oc)return 36244;if(r===lc)return 33319;if(r===cc)return 33320;if(r===hc)return 36248;if(r===uc)return 36249;if(r===Ks||r===ea||r===ta||r===na)if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(r===Ks)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===ea)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===ta)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===na)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===ia||r===ra||r===sa||r===aa)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(r===ia)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===ra)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===sa)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===aa)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===dc)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if((r===oa||r===la)&&(a=e.get("WEBGL_compressed_texture_etc"),a!==null)){if(r===oa)return a.COMPRESSED_RGB8_ETC2;if(r===la)return a.COMPRESSED_RGBA8_ETC2_EAC}if(r===fc||r===pc||r===mc||r===gc||r===vc||r===xc||r===yc||r===_c||r===Mc||r===bc||r===wc||r===Sc||r===Ec||r===Tc||r===Lc||r===Rc||r===Cc||r===Pc||r===Ic||r===Dc||r===Nc||r===Fc||r===Oc||r===Bc||r===zc||r===Uc||r===Hc||r===Gc)return a=e.get("WEBGL_compressed_texture_astc"),a!==null?r:null;if(r===Ac)return a=e.get("EXT_texture_compression_bptc"),a!==null?r:null;if(r===li)return n?34042:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null)}return{convert:i}}class Wo extends ut{constructor(e=[]){super(),this.cameras=e}}Wo.prototype.isArrayCamera=!0;class ri extends Pe{constructor(){super(),this.type="Group"}}ri.prototype.isGroup=!0;const Up={type:"move"};class qr{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ri,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ri,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new b,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new b),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ri,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new b,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new b),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred")if(o!==null&&(i=t.getPose(e.targetRaySpace,n),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Up))),c&&e.hand){a=!0;for(const v of e.hand.values()){const x=t.getJointPose(v,n);if(c.joints[v.jointName]===void 0){const p=new ri;p.matrixAutoUpdate=!1,p.visible=!1,c.joints[v.jointName]=p,c.add(p)}const g=c.joints[v.jointName];x!==null&&(g.matrix.fromArray(x.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.jointRadius=x.radius),g.visible=x!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,m=.005;c.inputState.pinching&&d>f+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=f-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}}class Hp extends en{constructor(e,t){super();const n=this,i=e.state;let r=null,a=1,o=null,l="local-floor",c=null;const h=[],u=new Map,d=new ut;d.layers.enable(1),d.viewport=new Oe;const f=new ut;f.layers.enable(2),f.viewport=new Oe;const m=[d,f],v=new Wo;v.layers.enable(1),v.layers.enable(2);let x=null,g=null;this.enabled=!1,this.isPresenting=!1,this.getController=function(U){let R=h[U];return R===void 0&&(R=new qr,h[U]=R),R.getTargetRaySpace()},this.getControllerGrip=function(U){let R=h[U];return R===void 0&&(R=new qr,h[U]=R),R.getGripSpace()},this.getHand=function(U){let R=h[U];return R===void 0&&(R=new qr,h[U]=R),R.getHandSpace()};function p(U){const R=u.get(U.inputSource);R&&R.dispatchEvent({type:U.type,data:U.inputSource})}function T(){u.forEach(function(U,R){U.disconnect(R)}),u.clear(),x=null,g=null,i.bindXRFramebuffer(null),e.setRenderTarget(e.getRenderTarget()),q.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(U){a=U,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(U){l=U,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return o},this.getSession=function(){return r},this.setSession=async function(U){if(r=U,r!==null){r.addEventListener("select",p),r.addEventListener("selectstart",p),r.addEventListener("selectend",p),r.addEventListener("squeeze",p),r.addEventListener("squeezestart",p),r.addEventListener("squeezeend",p),r.addEventListener("end",T),r.addEventListener("inputsourceschange",L);const R=t.getContextAttributes();R.xrCompatible!==!0&&await t.makeXRCompatible();const P={antialias:R.antialias,alpha:R.alpha,depth:R.depth,stencil:R.stencil,framebufferScaleFactor:a},I=new XRWebGLLayer(r,t,P);r.updateRenderState({baseLayer:I}),o=await r.requestReferenceSpace(l),q.setContext(r),q.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}};function L(U){const R=r.inputSources;for(let P=0;P<h.length;P++)u.set(R[P],h[P]);for(let P=0;P<U.removed.length;P++){const I=U.removed[P],C=u.get(I);C&&(C.dispatchEvent({type:"disconnected",data:I}),u.delete(I))}for(let P=0;P<U.added.length;P++){const I=U.added[P],C=u.get(I);C&&C.dispatchEvent({type:"connected",data:I})}}const A=new b,y=new b;function N(U,R,P){A.setFromMatrixPosition(R.matrixWorld),y.setFromMatrixPosition(P.matrixWorld);const I=A.distanceTo(y),C=R.projectionMatrix.elements,Y=P.projectionMatrix.elements,K=C[14]/(C[10]-1),$=C[14]/(C[10]+1),ae=(C[9]+1)/C[5],se=(C[9]-1)/C[5],ue=(C[8]-1)/C[0],me=(Y[8]+1)/Y[0],H=K*ue,Ie=K*me,Se=I/(-ue+me),ge=Se*-ue;R.matrixWorld.decompose(U.position,U.quaternion,U.scale),U.translateX(ge),U.translateZ(Se),U.matrixWorld.compose(U.position,U.quaternion,U.scale),U.matrixWorldInverse.copy(U.matrixWorld).invert();const de=K+Se,Ee=$+Se,Me=H-ge,be=Ie+(I-ge),J=ae*$/Ee*de,Q=se*$/Ee*de;U.projectionMatrix.makePerspective(Me,be,J,Q,de,Ee)}function O(U,R){R===null?U.matrixWorld.copy(U.matrix):U.matrixWorld.multiplyMatrices(R.matrixWorld,U.matrix),U.matrixWorldInverse.copy(U.matrixWorld).invert()}this.getCamera=function(U){v.near=f.near=d.near=U.near,v.far=f.far=d.far=U.far,(x!==v.near||g!==v.far)&&(r.updateRenderState({depthNear:v.near,depthFar:v.far}),x=v.near,g=v.far);const R=U.parent,P=v.cameras;O(v,R);for(let C=0;C<P.length;C++)O(P[C],R);U.matrixWorld.copy(v.matrixWorld),U.matrix.copy(v.matrix),U.matrix.decompose(U.position,U.quaternion,U.scale);const I=U.children;for(let C=0,Y=I.length;C<Y;C++)I[C].updateMatrixWorld(!0);return P.length===2?N(v,d,f):v.projectionMatrix.copy(d.projectionMatrix),v};let B=null;function k(U,R){if(c=R.getViewerPose(o),c!==null){const I=c.views,C=r.renderState.baseLayer;i.bindXRFramebuffer(C.framebuffer);let Y=!1;I.length!==v.cameras.length&&(v.cameras.length=0,Y=!0);for(let K=0;K<I.length;K++){const $=I[K],ae=C.getViewport($),se=m[K];se.matrix.fromArray($.transform.matrix),se.projectionMatrix.fromArray($.projectionMatrix),se.viewport.set(ae.x,ae.y,ae.width,ae.height),K===0&&v.matrix.copy(se.matrix),Y===!0&&v.cameras.push(se)}}const P=r.inputSources;for(let I=0;I<h.length;I++){const C=h[I],Y=P[I];C.update(Y,R,o)}B&&B(U,R)}const q=new Po;q.setAnimationLoop(k),this.setAnimationLoop=function(U){B=U},this.dispose=function(){}}}function Gp(s){function e(g,p){g.fogColor.value.copy(p.color),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function t(g,p,T,L){p.isMeshBasicMaterial?n(g,p):p.isMeshLambertMaterial?(n(g,p),l(g,p)):p.isMeshToonMaterial?(n(g,p),h(g,p)):p.isMeshPhongMaterial?(n(g,p),c(g,p)):p.isMeshStandardMaterial?(n(g,p),p.isMeshPhysicalMaterial?d(g,p):u(g,p)):p.isMeshMatcapMaterial?(n(g,p),f(g,p)):p.isMeshDepthMaterial?(n(g,p),m(g,p)):p.isMeshDistanceMaterial?(n(g,p),v(g,p)):p.isMeshNormalMaterial?(n(g,p),x(g,p)):p.isLineBasicMaterial?(i(g,p),p.isLineDashedMaterial&&r(g,p)):p.isPointsMaterial?a(g,p,T,L):p.isSpriteMaterial?o(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function n(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map),p.alphaMap&&(g.alphaMap.value=p.alphaMap),p.specularMap&&(g.specularMap.value=p.specularMap);const T=s.get(p).envMap;if(T){g.envMap.value=T,g.flipEnvMap.value=T.isCubeTexture&&T._needsFlipEnvMap?-1:1,g.reflectivity.value=p.reflectivity,g.refractionRatio.value=p.refractionRatio;const y=s.get(T).__maxMipLevel;y!==void 0&&(g.maxMipLevel.value=y)}p.lightMap&&(g.lightMap.value=p.lightMap,g.lightMapIntensity.value=p.lightMapIntensity),p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity);let L;p.map?L=p.map:p.specularMap?L=p.specularMap:p.displacementMap?L=p.displacementMap:p.normalMap?L=p.normalMap:p.bumpMap?L=p.bumpMap:p.roughnessMap?L=p.roughnessMap:p.metalnessMap?L=p.metalnessMap:p.alphaMap?L=p.alphaMap:p.emissiveMap?L=p.emissiveMap:p.clearcoatMap?L=p.clearcoatMap:p.clearcoatNormalMap?L=p.clearcoatNormalMap:p.clearcoatRoughnessMap&&(L=p.clearcoatRoughnessMap),L!==void 0&&(L.isWebGLRenderTarget&&(L=L.texture),L.matrixAutoUpdate===!0&&L.updateMatrix(),g.uvTransform.value.copy(L.matrix));let A;p.aoMap?A=p.aoMap:p.lightMap&&(A=p.lightMap),A!==void 0&&(A.isWebGLRenderTarget&&(A=A.texture),A.matrixAutoUpdate===!0&&A.updateMatrix(),g.uv2Transform.value.copy(A.matrix))}function i(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity}function r(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function a(g,p,T,L){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*T,g.scale.value=L*.5,p.map&&(g.map.value=p.map),p.alphaMap&&(g.alphaMap.value=p.alphaMap);let A;p.map?A=p.map:p.alphaMap&&(A=p.alphaMap),A!==void 0&&(A.matrixAutoUpdate===!0&&A.updateMatrix(),g.uvTransform.value.copy(A.matrix))}function o(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map),p.alphaMap&&(g.alphaMap.value=p.alphaMap);let T;p.map?T=p.map:p.alphaMap&&(T=p.alphaMap),T!==void 0&&(T.matrixAutoUpdate===!0&&T.updateMatrix(),g.uvTransform.value.copy(T.matrix))}function l(g,p){p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap)}function c(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap),p.bumpMap&&(g.bumpMap.value=p.bumpMap,g.bumpScale.value=p.bumpScale,p.side===Je&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,g.normalScale.value.copy(p.normalScale),p.side===Je&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias)}function h(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap),p.bumpMap&&(g.bumpMap.value=p.bumpMap,g.bumpScale.value=p.bumpScale,p.side===Je&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,g.normalScale.value.copy(p.normalScale),p.side===Je&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias)}function u(g,p){g.roughness.value=p.roughness,g.metalness.value=p.metalness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap),p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap),p.bumpMap&&(g.bumpMap.value=p.bumpMap,g.bumpScale.value=p.bumpScale,p.side===Je&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,g.normalScale.value.copy(p.normalScale),p.side===Je&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),s.get(p).envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function d(g,p){u(g,p),g.reflectivity.value=p.reflectivity,g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.sheen&&g.sheen.value.copy(p.sheen),p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap),p.clearcoatNormalMap&&(g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),g.clearcoatNormalMap.value=p.clearcoatNormalMap,p.side===Je&&g.clearcoatNormalScale.value.negate()),g.transmission.value=p.transmission,p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap)}function f(g,p){p.matcap&&(g.matcap.value=p.matcap),p.bumpMap&&(g.bumpMap.value=p.bumpMap,g.bumpScale.value=p.bumpScale,p.side===Je&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,g.normalScale.value.copy(p.normalScale),p.side===Je&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias)}function m(g,p){p.displacementMap&&(g.displacementMap.value=p.displacementMap,g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias)}function v(g,p){p.displacementMap&&(g.displacementMap.value=p.displacementMap,g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),g.referencePosition.value.copy(p.referencePosition),g.nearDistance.value=p.nearDistance,g.farDistance.value=p.farDistance}function x(g,p){p.bumpMap&&(g.bumpMap.value=p.bumpMap,g.bumpScale.value=p.bumpScale,p.side===Je&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,g.normalScale.value.copy(p.normalScale),p.side===Je&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias)}return{refreshFogUniforms:e,refreshMaterialUniforms:t}}function kp(){const s=document.createElementNS("http://www.w3.org/1999/xhtml","canvas");return s.style.display="block",s}function Be(s){s=s||{};const e=s.canvas!==void 0?s.canvas:kp(),t=s.context!==void 0?s.context:null,n=s.alpha!==void 0?s.alpha:!1,i=s.depth!==void 0?s.depth:!0,r=s.stencil!==void 0?s.stencil:!0,a=s.antialias!==void 0?s.antialias:!1,o=s.premultipliedAlpha!==void 0?s.premultipliedAlpha:!0,l=s.preserveDrawingBuffer!==void 0?s.preserveDrawingBuffer:!1,c=s.powerPreference!==void 0?s.powerPreference:"default",h=s.failIfMajorPerformanceCaveat!==void 0?s.failIfMajorPerformanceCaveat:!1;let u=null,d=null;const f=[],m=[];this.domElement=e,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.gammaFactor=2,this.outputEncoding=_i,this.physicallyCorrectLights=!1,this.toneMapping=oi,this.toneMappingExposure=1;const v=this;let x=!1,g=0,p=0,T=null,L=-1,A=null;const y=new Oe,N=new Oe;let O=null,B=e.width,k=e.height,q=1,U=null,R=null;const P=new Oe(0,0,B,k),I=new Oe(0,0,B,k);let C=!1;const Y=new dr;let K=!1,$=!1;const ae=new pe,se=new b,ue={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function me(){return T===null?q:1}let H=t;function Ie(_,F){for(let D=0;D<_.length;D++){const z=_[D],ie=e.getContext(z,F);if(ie!==null)return ie}return null}try{const _={alpha:n,depth:i,stencil:r,antialias:a,premultipliedAlpha:o,preserveDrawingBuffer:l,powerPreference:c,failIfMajorPerformanceCaveat:h};if(e.addEventListener("webglcontextlost",fe,!1),e.addEventListener("webglcontextrestored",Le,!1),H===null){const F=["webgl2","webgl","experimental-webgl"];if(v.isWebGL1Renderer===!0&&F.shift(),H=Ie(F,_),H===null)throw Ie(F)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}H.getShaderPrecisionFormat===void 0&&(H.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(_){throw console.error("THREE.WebGLRenderer: "+_.message),_}let Se,ge,de,Ee,Me,be,J,Q,ee,ce,re,w,M,G,V,ne,oe,Te,E,S,X,j;function le(){Se=new hf(H),ge=new of(H,Se,s),Se.init(ge),X=new zp(H,Se,ge),de=new Op(H,Se,ge),Ee=new ff,Me=new Sp,be=new Bp(H,Se,de,Me,ge,X,Ee),J=new cf(v),Q=new Nh(H,ge),j=new sf(H,Se,Q,ge),ee=new uf(H,Q,Ee,j),ce=new vf(H,ee,Q,Ee),Te=new gf(H),V=new lf(Me),re=new wp(v,J,Se,ge,j,V),w=new Gp(Me),M=new Ap(Me),G=new Dp(Se,ge),oe=new rf(v,J,de,ce,o),ne=new Vo(v,ce,ge),E=new af(H,Se,Ee,ge),S=new df(H,Se,Ee,ge),Ee.programs=re.programs,v.capabilities=ge,v.extensions=Se,v.properties=Me,v.renderLists=M,v.shadowMap=ne,v.state=de,v.info=Ee}le();const W=new Hp(v,H);this.xr=W,this.getContext=function(){return H},this.getContextAttributes=function(){return H.getContextAttributes()},this.forceContextLoss=function(){const _=Se.get("WEBGL_lose_context");_&&_.loseContext()},this.forceContextRestore=function(){const _=Se.get("WEBGL_lose_context");_&&_.restoreContext()},this.getPixelRatio=function(){return q},this.setPixelRatio=function(_){_!==void 0&&(q=_,this.setSize(B,k,!1))},this.getSize=function(_){return _===void 0&&(console.warn("WebGLRenderer: .getsize() now requires a Vector2 as an argument"),_=new Z),_.set(B,k)},this.setSize=function(_,F,D){if(W.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}B=_,k=F,e.width=Math.floor(_*q),e.height=Math.floor(F*q),D!==!1&&(e.style.width=_+"px",e.style.height=F+"px"),this.setViewport(0,0,_,F)},this.getDrawingBufferSize=function(_){return _===void 0&&(console.warn("WebGLRenderer: .getdrawingBufferSize() now requires a Vector2 as an argument"),_=new Z),_.set(B*q,k*q).floor()},this.setDrawingBufferSize=function(_,F,D){B=_,k=F,q=D,e.width=Math.floor(_*D),e.height=Math.floor(F*D),this.setViewport(0,0,_,F)},this.getCurrentViewport=function(_){return _===void 0&&(console.warn("WebGLRenderer: .getCurrentViewport() now requires a Vector4 as an argument"),_=new Oe),_.copy(y)},this.getViewport=function(_){return _.copy(P)},this.setViewport=function(_,F,D,z){_.isVector4?P.set(_.x,_.y,_.z,_.w):P.set(_,F,D,z),de.viewport(y.copy(P).multiplyScalar(q).floor())},this.getScissor=function(_){return _.copy(I)},this.setScissor=function(_,F,D,z){_.isVector4?I.set(_.x,_.y,_.z,_.w):I.set(_,F,D,z),de.scissor(N.copy(I).multiplyScalar(q).floor())},this.getScissorTest=function(){return C},this.setScissorTest=function(_){de.setScissorTest(C=_)},this.setOpaqueSort=function(_){U=_},this.setTransparentSort=function(_){R=_},this.getClearColor=function(_){return _===void 0&&(console.warn("WebGLRenderer: .getClearColor() now requires a Color as an argument"),_=new he),_.copy(oe.getClearColor())},this.setClearColor=function(){oe.setClearColor.apply(oe,arguments)},this.getClearAlpha=function(){return oe.getClearAlpha()},this.setClearAlpha=function(){oe.setClearAlpha.apply(oe,arguments)},this.clear=function(_,F,D){let z=0;(_===void 0||_)&&(z|=16384),(F===void 0||F)&&(z|=256),(D===void 0||D)&&(z|=1024),H.clear(z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",fe,!1),e.removeEventListener("webglcontextrestored",Le,!1),M.dispose(),G.dispose(),Me.dispose(),J.dispose(),ce.dispose(),j.dispose(),W.dispose(),W.removeEventListener("sessionstart",Bs),W.removeEventListener("sessionend",zs),nn.stop()};function fe(_){_.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),x=!0}function Le(){console.log("THREE.WebGLRenderer: Context Restored."),x=!1;const _=Ee.autoReset,F=ne.enabled,D=ne.autoUpdate,z=ne.needsUpdate,ie=ne.type;le(),Ee.autoReset=_,ne.enabled=F,ne.autoUpdate=D,ne.needsUpdate=z,ne.type=ie}function Ce(_){const F=_.target;F.removeEventListener("dispose",Ce),Ke(F)}function Ke(_){We(_),Me.remove(_)}function We(_){const F=Me.get(_).programs;F!==void 0&&F.forEach(function(D){re.releaseProgram(D)})}function It(_,F){_.render(function(D){v.renderBufferImmediate(D,F)})}this.renderBufferImmediate=function(_,F){j.initAttributes();const D=Me.get(_);_.hasPositions&&!D.position&&(D.position=H.createBuffer()),_.hasNormals&&!D.normal&&(D.normal=H.createBuffer()),_.hasUvs&&!D.uv&&(D.uv=H.createBuffer()),_.hasColors&&!D.color&&(D.color=H.createBuffer());const z=F.getAttributes();_.hasPositions&&(H.bindBuffer(34962,D.position),H.bufferData(34962,_.positionArray,35048),j.enableAttribute(z.position),H.vertexAttribPointer(z.position,3,5126,!1,0,0)),_.hasNormals&&(H.bindBuffer(34962,D.normal),H.bufferData(34962,_.normalArray,35048),j.enableAttribute(z.normal),H.vertexAttribPointer(z.normal,3,5126,!1,0,0)),_.hasUvs&&(H.bindBuffer(34962,D.uv),H.bufferData(34962,_.uvArray,35048),j.enableAttribute(z.uv),H.vertexAttribPointer(z.uv,2,5126,!1,0,0)),_.hasColors&&(H.bindBuffer(34962,D.color),H.bufferData(34962,_.colorArray,35048),j.enableAttribute(z.color),H.vertexAttribPointer(z.color,3,5126,!1,0,0)),j.disableUnusedAttributes(),H.drawArrays(4,0,_.count),_.count=0},this.renderBufferDirect=function(_,F,D,z,ie,Ae){F===null&&(F=ue);const ve=ie.isMesh&&ie.matrixWorld.determinant()<0,_e=Vs(_,F,z,ie);de.setMaterial(z,ve);let ze=D.index;const ye=D.attributes.position;if(ze===null){if(ye===void 0||ye.count===0)return}else if(ze.count===0)return;let Re=1;z.wireframe===!0&&(ze=ee.getWireframeAttribute(D),Re=2),(z.morphTargets||z.morphNormals)&&Te.update(ie,D,z,_e),j.setup(ie,z,_e,D,ze);let xe,De=E;ze!==null&&(xe=Q.get(ze),De=S,De.setIndex(xe));const Tt=ze!==null?ze.count:ye.count,at=D.drawRange.start*Re,rn=D.drawRange.count*Re,Ye=Ae!==null?Ae.start*Re:0,sn=Ae!==null?Ae.count*Re:1/0,qe=Math.max(at,Ye),yr=Math.min(Tt,at+rn,Ye+sn)-1,ht=Math.max(0,yr-qe+1);if(ht!==0){if(ie.isMesh)z.wireframe===!0?(de.setLineWidth(z.wireframeLinewidth*me()),De.setMode(1)):De.setMode(4);else if(ie.isLine){let Dt=z.linewidth;Dt===void 0&&(Dt=1),de.setLineWidth(Dt*me()),ie.isLineSegments?De.setMode(1):ie.isLineLoop?De.setMode(2):De.setMode(3)}else ie.isPoints?De.setMode(0):ie.isSprite&&De.setMode(4);if(ie.isInstancedMesh)De.renderInstances(qe,ht,ie.count);else if(D.isInstancedBufferGeometry){const Dt=Math.min(D.instanceCount,D._maxInstanceCount);De.renderInstances(qe,ht,Dt)}else De.render(qe,ht)}},this.compile=function(_,F){d=G.get(_),d.init(),_.traverseVisible(function(D){D.isLight&&D.layers.test(F.layers)&&(d.pushLight(D),D.castShadow&&d.pushShadow(D))}),d.setupLights(),_.traverse(function(D){const z=D.material;if(z)if(Array.isArray(z))for(let ie=0;ie<z.length;ie++){const Ae=z[ie];xr(Ae,_,D)}else xr(z,_,D)})};let xt=null;function vl(_){xt&&xt(_)}function Bs(){nn.stop()}function zs(){nn.start()}const nn=new Po;nn.setAnimationLoop(vl),typeof window<"u"&&nn.setContext(window),this.setAnimationLoop=function(_){xt=_,W.setAnimationLoop(_),_===null?nn.stop():nn.start()},W.addEventListener("sessionstart",Bs),W.addEventListener("sessionend",zs),this.render=function(_,F){let D,z;if(arguments[2]!==void 0&&(console.warn("THREE.WebGLRenderer.render(): the renderTarget argument has been removed. Use .setRenderTarget() instead."),D=arguments[2]),arguments[3]!==void 0&&(console.warn("THREE.WebGLRenderer.render(): the forceClear argument has been removed. Use .clear() instead."),z=arguments[3]),F!==void 0&&F.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(x===!0)return;_.autoUpdate===!0&&_.updateMatrixWorld(),F.parent===null&&F.updateMatrixWorld(),W.enabled===!0&&W.isPresenting===!0&&(F=W.getCamera(F)),_.isScene===!0&&_.onBeforeRender(v,_,F,D||T),d=G.get(_,m.length),d.init(),m.push(d),ae.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),Y.setFromProjectionMatrix(ae),$=this.localClippingEnabled,K=V.init(this.clippingPlanes,$,F),u=M.get(_,f.length),u.init(),f.push(u),Us(_,F,0,v.sortObjects),u.finish(),v.sortObjects===!0&&u.sort(U,R),K===!0&&V.beginShadows();const ie=d.state.shadowsArray;ne.render(ie,_,F),d.setupLights(),d.setupLightsView(F),K===!0&&V.endShadows(),this.info.autoReset===!0&&this.info.reset(),D!==void 0&&this.setRenderTarget(D),oe.render(u,_,F,z);const Ae=u.opaque,ve=u.transparent;Ae.length>0&&Hs(Ae,_,F),ve.length>0&&Hs(ve,_,F),T!==null&&(be.updateRenderTargetMipmap(T),be.updateMultisampleRenderTarget(T)),_.isScene===!0&&_.onAfterRender(v,_,F),de.buffers.depth.setTest(!0),de.buffers.depth.setMask(!0),de.buffers.color.setMask(!0),de.setPolygonOffset(!1),j.resetDefaultState(),L=-1,A=null,m.pop(),m.length>0?d=m[m.length-1]:d=null,f.pop(),f.length>0?u=f[f.length-1]:u=null};function Us(_,F,D,z){if(_.visible===!1)return;if(_.layers.test(F.layers)){if(_.isGroup)D=_.renderOrder;else if(_.isLOD)_.autoUpdate===!0&&_.update(F);else if(_.isLight)d.pushLight(_),_.castShadow&&d.pushShadow(_);else if(_.isSprite){if(!_.frustumCulled||Y.intersectsSprite(_)){z&&se.setFromMatrixPosition(_.matrixWorld).applyMatrix4(ae);const ve=ce.update(_),_e=_.material;_e.visible&&u.push(_,ve,_e,D,se.z,null)}}else if(_.isImmediateRenderObject)z&&se.setFromMatrixPosition(_.matrixWorld).applyMatrix4(ae),u.push(_,null,_.material,D,se.z,null);else if((_.isMesh||_.isLine||_.isPoints)&&(_.isSkinnedMesh&&_.skeleton.frame!==Ee.render.frame&&(_.skeleton.update(),_.skeleton.frame=Ee.render.frame),!_.frustumCulled||Y.intersectsObject(_))){z&&se.setFromMatrixPosition(_.matrixWorld).applyMatrix4(ae);const ve=ce.update(_),_e=_.material;if(Array.isArray(_e)){const ze=ve.groups;for(let ye=0,Re=ze.length;ye<Re;ye++){const xe=ze[ye],De=_e[xe.materialIndex];De&&De.visible&&u.push(_,ve,De,D,se.z,xe)}}else _e.visible&&u.push(_,ve,_e,D,se.z,null)}}const Ae=_.children;for(let ve=0,_e=Ae.length;ve<_e;ve++)Us(Ae[ve],F,D,z)}function Hs(_,F,D){const z=F.isScene===!0?F.overrideMaterial:null;for(let ie=0,Ae=_.length;ie<Ae;ie++){const ve=_[ie],_e=ve.object,ze=ve.geometry,ye=z===null?ve.material:z,Re=ve.group;if(D.isArrayCamera){const xe=D.cameras;for(let De=0,Tt=xe.length;De<Tt;De++){const at=xe[De];_e.layers.test(at.layers)&&(de.viewport(y.copy(at.viewport)),d.setupLightsView(at),Gs(_e,F,at,ze,ye,Re))}}else Gs(_e,F,D,ze,ye,Re)}}function Gs(_,F,D,z,ie,Ae){if(_.onBeforeRender(v,F,D,z,ie,Ae),_.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,_.matrixWorld),_.normalMatrix.getNormalMatrix(_.modelViewMatrix),_.isImmediateRenderObject){const ve=Vs(D,F,ie,_);de.setMaterial(ie),j.reset(),It(_,ve)}else v.renderBufferDirect(D,F,z,ie,_,Ae);_.onAfterRender(v,F,D,z,ie,Ae)}function xr(_,F,D){F.isScene!==!0&&(F=ue);const z=Me.get(_),ie=d.state.lights,Ae=d.state.shadowsArray,ve=ie.state.version,_e=re.getParameters(_,ie.state,Ae,F,D),ze=re.getProgramCacheKey(_e);let ye=z.programs;z.environment=_.isMeshStandardMaterial?F.environment:null,z.fog=F.fog,z.envMap=J.get(_.envMap||z.environment),ye===void 0&&(_.addEventListener("dispose",Ce),ye=new Map,z.programs=ye);let Re=ye.get(ze);if(Re!==void 0){if(z.currentProgram===Re&&z.lightsStateVersion===ve)return ks(_,_e),Re}else _e.uniforms=re.getUniforms(_),_.onBuild(_e,v),_.onBeforeCompile(_e,v),Re=re.acquireProgram(_e,ze),ye.set(ze,Re),z.uniforms=_e.uniforms;const xe=z.uniforms;(!_.isShaderMaterial&&!_.isRawShaderMaterial||_.clipping===!0)&&(xe.clippingPlanes=V.uniform),ks(_,_e),z.needsLights=yl(_),z.lightsStateVersion=ve,z.needsLights&&(xe.ambientLightColor.value=ie.state.ambient,xe.lightProbe.value=ie.state.probe,xe.directionalLights.value=ie.state.directional,xe.directionalLightShadows.value=ie.state.directionalShadow,xe.spotLights.value=ie.state.spot,xe.spotLightShadows.value=ie.state.spotShadow,xe.rectAreaLights.value=ie.state.rectArea,xe.ltc_1.value=ie.state.rectAreaLTC1,xe.ltc_2.value=ie.state.rectAreaLTC2,xe.pointLights.value=ie.state.point,xe.pointLightShadows.value=ie.state.pointShadow,xe.hemisphereLights.value=ie.state.hemi,xe.directionalShadowMap.value=ie.state.directionalShadowMap,xe.directionalShadowMatrix.value=ie.state.directionalShadowMatrix,xe.spotShadowMap.value=ie.state.spotShadowMap,xe.spotShadowMatrix.value=ie.state.spotShadowMatrix,xe.pointShadowMap.value=ie.state.pointShadowMap,xe.pointShadowMatrix.value=ie.state.pointShadowMatrix);const De=Re.getUniforms(),Tt=Zt.seqWithValue(De.seq,xe);return z.currentProgram=Re,z.uniformsList=Tt,Re}function ks(_,F){const D=Me.get(_);D.outputEncoding=F.outputEncoding,D.instancing=F.instancing,D.numClippingPlanes=F.numClippingPlanes,D.numIntersection=F.numClipIntersection,D.vertexAlphas=F.vertexAlphas}function Vs(_,F,D,z){F.isScene!==!0&&(F=ue),be.resetTextureUnits();const ie=F.fog,Ae=D.isMeshStandardMaterial?F.environment:null,ve=T===null?v.outputEncoding:T.texture.encoding,_e=J.get(D.envMap||Ae),ze=D.vertexColors===!0&&z.geometry&&z.geometry.attributes.color&&z.geometry.attributes.color.itemSize===4,ye=Me.get(D),Re=d.state.lights;if(K===!0&&($===!0||_!==A)){const qe=_===A&&D.id===L;V.setState(D,_,qe)}let xe=!1;D.version===ye.__version?(ye.needsLights&&ye.lightsStateVersion!==Re.state.version||ye.outputEncoding!==ve||z.isInstancedMesh&&ye.instancing===!1||!z.isInstancedMesh&&ye.instancing===!0||ye.envMap!==_e||D.fog&&ye.fog!==ie||ye.numClippingPlanes!==void 0&&(ye.numClippingPlanes!==V.numPlanes||ye.numIntersection!==V.numIntersection)||ye.vertexAlphas!==ze)&&(xe=!0):(xe=!0,ye.__version=D.version);let De=ye.currentProgram;xe===!0&&(De=xr(D,F,z));let Tt=!1,at=!1,rn=!1;const Ye=De.getUniforms(),sn=ye.uniforms;if(de.useProgram(De.program)&&(Tt=!0,at=!0,rn=!0),D.id!==L&&(L=D.id,at=!0),Tt||A!==_){if(Ye.setValue(H,"projectionMatrix",_.projectionMatrix),ge.logarithmicDepthBuffer&&Ye.setValue(H,"logDepthBufFC",2/(Math.log(_.far+1)/Math.LN2)),A!==_&&(A=_,at=!0,rn=!0),D.isShaderMaterial||D.isMeshPhongMaterial||D.isMeshToonMaterial||D.isMeshStandardMaterial||D.envMap){const qe=Ye.map.cameraPosition;qe!==void 0&&qe.setValue(H,se.setFromMatrixPosition(_.matrixWorld))}(D.isMeshPhongMaterial||D.isMeshToonMaterial||D.isMeshLambertMaterial||D.isMeshBasicMaterial||D.isMeshStandardMaterial||D.isShaderMaterial)&&Ye.setValue(H,"isOrthographic",_.isOrthographicCamera===!0),(D.isMeshPhongMaterial||D.isMeshToonMaterial||D.isMeshLambertMaterial||D.isMeshBasicMaterial||D.isMeshStandardMaterial||D.isShaderMaterial||D.isShadowMaterial||D.skinning)&&Ye.setValue(H,"viewMatrix",_.matrixWorldInverse)}if(D.skinning){Ye.setOptional(H,z,"bindMatrix"),Ye.setOptional(H,z,"bindMatrixInverse");const qe=z.skeleton;if(qe){const yr=qe.bones;if(ge.floatVertexTextures){if(qe.boneTexture===null){let ht=Math.sqrt(yr.length*4);ht=bo(ht),ht=Math.max(ht,4);const Dt=new Float32Array(ht*ht*4);Dt.set(qe.boneMatrices);const _l=new Co(Dt,ht,ht,St,jt);qe.boneMatrices=Dt,qe.boneTexture=_l,qe.boneTextureSize=ht}Ye.setValue(H,"boneTexture",qe.boneTexture,be),Ye.setValue(H,"boneTextureSize",qe.boneTextureSize)}else Ye.setOptional(H,qe,"boneMatrices")}}return(at||ye.receiveShadow!==z.receiveShadow)&&(ye.receiveShadow=z.receiveShadow,Ye.setValue(H,"receiveShadow",z.receiveShadow)),at&&(Ye.setValue(H,"toneMappingExposure",v.toneMappingExposure),ye.needsLights&&xl(sn,rn),ie&&D.fog&&w.refreshFogUniforms(sn,ie),w.refreshMaterialUniforms(sn,D,q,k),Zt.upload(H,ye.uniformsList,sn,be)),D.isShaderMaterial&&D.uniformsNeedUpdate===!0&&(Zt.upload(H,ye.uniformsList,sn,be),D.uniformsNeedUpdate=!1),D.isSpriteMaterial&&Ye.setValue(H,"center",z.center),Ye.setValue(H,"modelViewMatrix",z.modelViewMatrix),Ye.setValue(H,"normalMatrix",z.normalMatrix),Ye.setValue(H,"modelMatrix",z.matrixWorld),De}function xl(_,F){_.ambientLightColor.needsUpdate=F,_.lightProbe.needsUpdate=F,_.directionalLights.needsUpdate=F,_.directionalLightShadows.needsUpdate=F,_.pointLights.needsUpdate=F,_.pointLightShadows.needsUpdate=F,_.spotLights.needsUpdate=F,_.spotLightShadows.needsUpdate=F,_.rectAreaLights.needsUpdate=F,_.hemisphereLights.needsUpdate=F}function yl(_){return _.isMeshLambertMaterial||_.isMeshToonMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isShadowMaterial||_.isShaderMaterial&&_.lights===!0}this.getActiveCubeFace=function(){return g},this.getActiveMipmapLevel=function(){return p},this.getRenderTarget=function(){return T},this.setRenderTarget=function(_,F=0,D=0){T=_,g=F,p=D,_&&Me.get(_).__webglFramebuffer===void 0&&be.setupRenderTarget(_);let z=null,ie=!1,Ae=!1;if(_){const ve=_.texture;(ve.isDataTexture3D||ve.isDataTexture2DArray)&&(Ae=!0);const _e=Me.get(_).__webglFramebuffer;_.isWebGLCubeRenderTarget?(z=_e[F],ie=!0):_.isWebGLMultisampleRenderTarget?z=Me.get(_).__webglMultisampledFramebuffer:z=_e,y.copy(_.viewport),N.copy(_.scissor),O=_.scissorTest}else y.copy(P).multiplyScalar(q).floor(),N.copy(I).multiplyScalar(q).floor(),O=C;if(de.bindFramebuffer(36160,z),de.viewport(y),de.scissor(N),de.setScissorTest(O),ie){const ve=Me.get(_.texture);H.framebufferTexture2D(36160,36064,34069+F,ve.__webglTexture,D)}else if(Ae){const ve=Me.get(_.texture),_e=F||0;H.framebufferTextureLayer(36160,36064,ve.__webglTexture,D||0,_e)}},this.readRenderTargetPixels=function(_,F,D,z,ie,Ae,ve){if(!(_&&_.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let _e=Me.get(_).__webglFramebuffer;if(_.isWebGLCubeRenderTarget&&ve!==void 0&&(_e=_e[ve]),_e){de.bindFramebuffer(36160,_e);try{const ze=_.texture,ye=ze.format,Re=ze.type;if(ye!==St&&X.convert(ye)!==H.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const xe=Re===er&&(Se.has("EXT_color_buffer_half_float")||ge.isWebGL2&&Se.has("EXT_color_buffer_float"));if(Re!==xs&&X.convert(Re)!==H.getParameter(35738)&&!(Re===jt&&(ge.isWebGL2||Se.has("OES_texture_float")||Se.has("WEBGL_color_buffer_float")))&&!xe){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}H.checkFramebufferStatus(36160)===36053?F>=0&&F<=_.width-z&&D>=0&&D<=_.height-ie&&H.readPixels(F,D,z,ie,X.convert(ye),X.convert(Re),Ae):console.error("THREE.WebGLRenderer.readRenderTargetPixels: readPixels from renderTarget failed. Framebuffer not complete.")}finally{const ze=T!==null?Me.get(T).__webglFramebuffer:null;de.bindFramebuffer(36160,ze)}}},this.copyFramebufferToTexture=function(_,F,D=0){const z=Math.pow(2,-D),ie=Math.floor(F.image.width*z),Ae=Math.floor(F.image.height*z),ve=X.convert(F.format);be.setTexture2D(F,0),H.copyTexImage2D(3553,D,ve,_.x,_.y,ie,Ae,0),de.unbindTexture()},this.copyTextureToTexture=function(_,F,D,z=0){const ie=F.image.width,Ae=F.image.height,ve=X.convert(D.format),_e=X.convert(D.type);be.setTexture2D(D,0),H.pixelStorei(37440,D.flipY),H.pixelStorei(37441,D.premultiplyAlpha),H.pixelStorei(3317,D.unpackAlignment),F.isDataTexture?H.texSubImage2D(3553,z,_.x,_.y,ie,Ae,ve,_e,F.image.data):F.isCompressedTexture?H.compressedTexSubImage2D(3553,z,_.x,_.y,F.mipmaps[0].width,F.mipmaps[0].height,ve,F.mipmaps[0].data):H.texSubImage2D(3553,z,_.x,_.y,ve,_e,F.image),z===0&&D.generateMipmaps&&H.generateMipmap(3553),de.unbindTexture()},this.copyTextureToTexture3D=function(_,F,D,z,ie=0){if(v.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const{width:Ae,height:ve,data:_e}=D.image,ze=X.convert(z.format),ye=X.convert(z.type);let Re;if(z.isDataTexture3D)be.setTexture3D(z,0),Re=32879;else if(z.isDataTexture2DArray)be.setTexture2DArray(z,0),Re=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}H.pixelStorei(37440,z.flipY),H.pixelStorei(37441,z.premultiplyAlpha),H.pixelStorei(3317,z.unpackAlignment);const xe=H.getParameter(3314),De=H.getParameter(32878),Tt=H.getParameter(3316),at=H.getParameter(3315),rn=H.getParameter(32877);H.pixelStorei(3314,Ae),H.pixelStorei(32878,ve),H.pixelStorei(3316,_.min.x),H.pixelStorei(3315,_.min.y),H.pixelStorei(32877,_.min.z),H.texSubImage3D(Re,ie,F.x,F.y,F.z,_.max.x-_.min.x+1,_.max.y-_.min.y+1,_.max.z-_.min.z+1,ze,ye,_e),H.pixelStorei(3314,xe),H.pixelStorei(32878,De),H.pixelStorei(3316,Tt),H.pixelStorei(3315,at),H.pixelStorei(32877,rn),ie===0&&z.generateMipmaps&&H.generateMipmap(Re),de.unbindTexture()},this.initTexture=function(_){be.setTexture2D(_,0),de.unbindTexture()},this.resetState=function(){g=0,p=0,T=null,de.reset(),j.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}class Vp extends Be{}Vp.prototype.isWebGL1Renderer=!0;class fr{constructor(e,t=25e-5){this.name="",this.color=new he(e),this.density=t}clone(){return new fr(this.color,this.density)}toJSON(){return{type:"FogExp2",color:this.color.getHex(),density:this.density}}}fr.prototype.isFogExp2=!0;class Ss extends Pe{constructor(){super(),this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.overrideMaterial=null,this.autoUpdate=!0,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.autoUpdate=e.autoUpdate,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.background!==null&&(t.object.background=this.background.toJSON(e)),this.environment!==null&&(t.object.environment=this.environment.toJSON(e)),this.fog!==null&&(t.object.fog=this.fog.toJSON()),t}}Ss.prototype.isScene=!0;class un{constructor(e,t){this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=pi,this.updateRange={offset:0,count:-1},this.version=0,this.uuid=Et(),this.onUploadCallback=function(){}}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,r=this.stride;i<r;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Et()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new un(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Et()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.prototype.slice.call(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}un.prototype.isInterleavedBuffer=!0;const Xe=new b;class gi{constructor(e,t,n,i){this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i===!0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Xe.x=this.getX(t),Xe.y=this.getY(t),Xe.z=this.getZ(t),Xe.applyMatrix4(e),this.setXYZ(t,Xe.x,Xe.y,Xe.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Xe.x=this.getX(t),Xe.y=this.getY(t),Xe.z=this.getZ(t),Xe.applyNormalMatrix(e),this.setXYZ(t,Xe.x,Xe.y,Xe.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Xe.x=this.getX(t),Xe.y=this.getY(t),Xe.z=this.getZ(t),Xe.transformDirection(e),this.setXYZ(t,Xe.x,Xe.y,Xe.z);return this}setX(e,t){return this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){return this.data.array[e*this.data.stride+this.offset]}getY(e){return this.data.array[e*this.data.stride+this.offset+1]}getZ(e){return this.data.array[e*this.data.stride+this.offset+2]}getW(e){return this.data.array[e*this.data.stride+this.offset+3]}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e=e*this.data.stride+this.offset,this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interlaved buffer attribute will deinterleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return new $e(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new gi(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interlaved buffer attribute will deinterleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}gi.prototype.isInterleavedBufferAttribute=!0;class Xo extends Qe{constructor(e){super(),this.type="SpriteMaterial",this.color=new he(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this}}Xo.prototype.isSpriteMaterial=!0;let Tn;const $n=new b,An=new b,Ln=new b,Rn=new Z,Qn=new Z,qo=new pe,Hi=new b,Kn=new b,Gi=new b,Fa=new Z,Yr=new Z,Oa=new Z;class Wp extends Pe{constructor(e){if(super(),this.type="Sprite",Tn===void 0){Tn=new Fe;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new un(t,5);Tn.setIndex([0,1,2,0,2,3]),Tn.setAttribute("position",new gi(n,3,0,!1)),Tn.setAttribute("uv",new gi(n,2,3,!1))}this.geometry=Tn,this.material=e!==void 0?e:new Xo,this.center=new Z(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),An.setFromMatrixScale(this.matrixWorld),qo.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Ln.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&An.multiplyScalar(-Ln.z);const n=this.material.rotation;let i,r;n!==0&&(r=Math.cos(n),i=Math.sin(n));const a=this.center;ki(Hi.set(-.5,-.5,0),Ln,a,An,i,r),ki(Kn.set(.5,-.5,0),Ln,a,An,i,r),ki(Gi.set(.5,.5,0),Ln,a,An,i,r),Fa.set(0,0),Yr.set(1,0),Oa.set(1,1);let o=e.ray.intersectTriangle(Hi,Kn,Gi,!1,$n);if(o===null&&(ki(Kn.set(-.5,.5,0),Ln,a,An,i,r),Yr.set(0,1),o=e.ray.intersectTriangle(Hi,Gi,Kn,!1,$n),o===null))return;const l=e.ray.origin.distanceTo($n);l<e.near||l>e.far||t.push({distance:l,point:$n.clone(),uv:je.getUV($n,Hi,Kn,Gi,Fa,Yr,Oa,new Z),face:null,object:this})}copy(e){return super.copy(e),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}Wp.prototype.isSprite=!0;function ki(s,e,t,n,i,r){Rn.subVectors(s,t).addScalar(.5).multiply(n),i!==void 0?(Qn.x=r*Rn.x-i*Rn.y,Qn.y=i*Rn.x+r*Rn.y):Qn.copy(Rn),s.copy(e),s.x+=Qn.x,s.y+=Qn.y,s.applyMatrix4(qo)}const Ba=new b,za=new Oe,Ua=new Oe,Xp=new b,Ha=new pe;class Yo extends pt{constructor(e,t){super(e,t),this.type="SkinnedMesh",this.bindMode="attached",this.bindMatrix=new pe,this.bindMatrixInverse=new pe}copy(e){return super.copy(e),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,this}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new Oe,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.x=t.getX(n),e.y=t.getY(n),e.z=t.getZ(n),e.w=t.getW(n);const r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode==="attached"?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode==="detached"?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}boneTransform(e,t){const n=this.skeleton,i=this.geometry;za.fromBufferAttribute(i.attributes.skinIndex,e),Ua.fromBufferAttribute(i.attributes.skinWeight,e),Ba.fromBufferAttribute(i.attributes.position,e).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){const a=Ua.getComponent(r);if(a!==0){const o=za.getComponent(r);Ha.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector(Xp.copy(Ba).applyMatrix4(Ha),a)}}return t.applyMatrix4(this.bindMatrixInverse)}}Yo.prototype.isSkinnedMesh=!0;class qp extends Pe{constructor(){super(),this.type="Bone"}}qp.prototype.isBone=!0;const Ga=new pe,ka=new pe,Vi=[],ei=new pt;class Yp extends pt{constructor(e,t,n){super(e,t),this.instanceMatrix=new $e(new Float32Array(n*16),16),this.instanceColor=null,this.count=n,this.frustumCulled=!1}copy(e){return super.copy(e),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}raycast(e,t){const n=this.matrixWorld,i=this.count;if(ei.geometry=this.geometry,ei.material=this.material,ei.material!==void 0)for(let r=0;r<i;r++){this.getMatrixAt(r,Ga),ka.multiplyMatrices(n,Ga),ei.matrixWorld=ka,ei.raycast(e,Vi);for(let a=0,o=Vi.length;a<o;a++){const l=Vi[a];l.instanceId=r,l.object=this,t.push(l)}Vi.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new $e(new Float32Array(this.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}}Yp.prototype.isInstancedMesh=!0;class Vn extends Qe{constructor(e){super(),this.type="LineBasicMaterial",this.color=new he(16777215),this.linewidth=1,this.linecap="round",this.linejoin="round",this.morphTargets=!1,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.morphTargets=e.morphTargets,this}}Vn.prototype.isLineBasicMaterial=!0;const Va=new b,Wa=new b,Xa=new pe,jr=new hn,Wi=new Hn;class Es extends Pe{constructor(e=new Fe,t=new Vn){super(),this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e){return super.copy(e),this.material=e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.isBufferGeometry)if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,r=t.count;i<r;i++)Va.fromBufferAttribute(t,i-1),Wa.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=Va.distanceTo(Wa);e.setAttribute("lineDistance",new ke(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");else e.isGeometry&&console.error("THREE.Line.computeLineDistances() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Wi.copy(n.boundingSphere),Wi.applyMatrix4(i),Wi.radius+=r,e.ray.intersectsSphere(Wi)===!1)return;Xa.copy(i).invert(),jr.copy(e.ray).applyMatrix4(Xa);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=new b,h=new b,u=new b,d=new b,f=this.isLineSegments?2:1;if(n.isBufferGeometry){const m=n.index,x=n.attributes.position;if(m!==null){const g=Math.max(0,a.start),p=Math.min(m.count,a.start+a.count);for(let T=g,L=p-1;T<L;T+=f){const A=m.getX(T),y=m.getX(T+1);if(c.fromBufferAttribute(x,A),h.fromBufferAttribute(x,y),jr.distanceSqToSegment(c,h,d,u)>l)continue;d.applyMatrix4(this.matrixWorld);const O=e.ray.origin.distanceTo(d);O<e.near||O>e.far||t.push({distance:O,point:u.clone().applyMatrix4(this.matrixWorld),index:T,face:null,faceIndex:null,object:this})}}else{const g=Math.max(0,a.start),p=Math.min(x.count,a.start+a.count);for(let T=g,L=p-1;T<L;T+=f){if(c.fromBufferAttribute(x,T),h.fromBufferAttribute(x,T+1),jr.distanceSqToSegment(c,h,d,u)>l)continue;d.applyMatrix4(this.matrixWorld);const y=e.ray.origin.distanceTo(d);y<e.near||y>e.far||t.push({distance:y,point:u.clone().applyMatrix4(this.matrixWorld),index:T,face:null,faceIndex:null,object:this})}}}else n.isGeometry&&console.error("THREE.Line.raycast() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.")}updateMorphTargets(){const e=this.geometry;if(e.isBufferGeometry){const t=e.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}else{const t=e.morphTargets;t!==void 0&&t.length>0&&console.error("THREE.Line.updateMorphTargets() does not support THREE.Geometry. Use THREE.BufferGeometry instead.")}}}Es.prototype.isLine=!0;const qa=new b,Ya=new b;class Ts extends Es{constructor(e,t){super(e,t),this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.isBufferGeometry)if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,r=t.count;i<r;i+=2)qa.fromBufferAttribute(t,i),Ya.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+qa.distanceTo(Ya);e.setAttribute("lineDistance",new ke(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");else e.isGeometry&&console.error("THREE.LineSegments.computeLineDistances() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.");return this}}Ts.prototype.isLineSegments=!0;class jo extends Es{constructor(e,t){super(e,t),this.type="LineLoop"}}jo.prototype.isLineLoop=!0;class Zo extends Qe{constructor(e){super(),this.type="PointsMaterial",this.color=new he(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.morphTargets=!1,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.morphTargets=e.morphTargets,this}}Zo.prototype.isPointsMaterial=!0;const ja=new pe,ls=new hn,Xi=new Hn,qi=new b;class Jo extends Pe{constructor(e=new Fe,t=new Zo){super(),this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e){return super.copy(e),this.material=e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Xi.copy(n.boundingSphere),Xi.applyMatrix4(i),Xi.radius+=r,e.ray.intersectsSphere(Xi)===!1)return;ja.copy(i).invert(),ls.copy(e.ray).applyMatrix4(ja);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o;if(n.isBufferGeometry){const c=n.index,u=n.attributes.position;if(c!==null){const d=Math.max(0,a.start),f=Math.min(c.count,a.start+a.count);for(let m=d,v=f;m<v;m++){const x=c.getX(m);qi.fromBufferAttribute(u,x),Za(qi,x,l,i,e,t,this)}}else{const d=Math.max(0,a.start),f=Math.min(u.count,a.start+a.count);for(let m=d,v=f;m<v;m++)qi.fromBufferAttribute(u,m),Za(qi,m,l,i,e,t,this)}}else console.error("THREE.Points.raycast() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.")}updateMorphTargets(){const e=this.geometry;if(e.isBufferGeometry){const t=e.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}else{const t=e.morphTargets;t!==void 0&&t.length>0&&console.error("THREE.Points.updateMorphTargets() does not support THREE.Geometry. Use THREE.BufferGeometry instead.")}}}Jo.prototype.isPoints=!0;function Za(s,e,t,n,i,r,a){const o=ls.distanceSqToPoint(s);if(o<t){const l=new b;ls.closestPointToPoint(s,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,object:a})}}class jp extends it{constructor(e,t,n,i,r,a,o,l,c){super(e,t,n,i,r,a,o,l,c),this.format=o!==void 0?o:ln,this.minFilter=a!==void 0?a:mt,this.magFilter=r!==void 0?r:mt,this.generateMipmaps=!1;const h=this;function u(){h.needsUpdate=!0,e.requestVideoFrameCallback(u)}"requestVideoFrameCallback"in e&&e.requestVideoFrameCallback(u)}clone(){return new this.constructor(this.image).copy(this)}update(){const e=this.image;"requestVideoFrameCallback"in e===!1&&e.readyState>=e.HAVE_CURRENT_DATA&&(this.needsUpdate=!0)}}jp.prototype.isVideoTexture=!0;class Zp extends it{constructor(e,t,n,i,r,a,o,l,c,h,u,d){super(null,a,o,l,c,h,i,r,u,d),this.image={width:t,height:n},this.mipmaps=e,this.flipY=!1,this.generateMipmaps=!1}}Zp.prototype.isCompressedTexture=!0;class $o extends it{constructor(e,t,n,i,r,a,o,l,c){super(e,t,n,i,r,a,o,l,c),this.needsUpdate=!0}}$o.prototype.isCanvasTexture=!0;class Jp extends it{constructor(e,t,n,i,r,a,o,l,c,h){if(h=h!==void 0?h:Fn,h!==Fn&&h!==fi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Fn&&(n=Ki),n===void 0&&h===fi&&(n=li),super(null,i,r,a,o,l,h,n,c),this.image={width:e,height:t},this.magFilter=o!==void 0?o:lt,this.minFilter=l!==void 0?l:lt,this.flipY=!1,this.generateMipmaps=!1}}Jp.prototype.isDepthTexture=!0;const $p={triangulate:function(s,e,t){t=t||2;const n=e&&e.length,i=n?e[0]*t:s.length;let r=Qo(s,0,i,t,!0);const a=[];if(!r||r.next===r.prev)return a;let o,l,c,h,u,d,f;if(n&&(r=nm(s,e,r,t)),s.length>80*t){o=c=s[0],l=h=s[1];for(let m=t;m<i;m+=t)u=s[m],d=s[m+1],u<o&&(o=u),d<l&&(l=d),u>c&&(c=u),d>h&&(h=d);f=Math.max(c-o,h-l),f=f!==0?1/f:0}return vi(r,a,t,o,l,f),a}};function Qo(s,e,t,n,i){let r,a;if(i===fm(s,e,t,n)>0)for(r=e;r<t;r+=n)a=Ja(r,s[r],s[r+1],a);else for(r=t-n;r>=e;r-=n)a=Ja(r,s[r],s[r+1],a);return a&&pr(a,a.next)&&(yi(a),a=a.next),a}function Qt(s,e){if(!s)return s;e||(e=s);let t=s,n;do if(n=!1,!t.steiner&&(pr(t,t.next)||Ve(t.prev,t,t.next)===0)){if(yi(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function vi(s,e,t,n,i,r,a){if(!s)return;!a&&r&&om(s,n,i,r);let o=s,l,c;for(;s.prev!==s.next;){if(l=s.prev,c=s.next,r?Kp(s,n,i,r):Qp(s)){e.push(l.i/t),e.push(s.i/t),e.push(c.i/t),yi(s),s=c.next,o=c.next;continue}if(s=c,s===o){a?a===1?(s=em(Qt(s),e,t),vi(s,e,t,n,i,r,2)):a===2&&tm(s,e,t,n,i,r):vi(Qt(s),e,t,n,i,r,1);break}}}function Qp(s){const e=s.prev,t=s,n=s.next;if(Ve(e,t,n)>=0)return!1;let i=s.next.next;for(;i!==s.prev;){if(Dn(e.x,e.y,t.x,t.y,n.x,n.y,i.x,i.y)&&Ve(i.prev,i,i.next)>=0)return!1;i=i.next}return!0}function Kp(s,e,t,n){const i=s.prev,r=s,a=s.next;if(Ve(i,r,a)>=0)return!1;const o=i.x<r.x?i.x<a.x?i.x:a.x:r.x<a.x?r.x:a.x,l=i.y<r.y?i.y<a.y?i.y:a.y:r.y<a.y?r.y:a.y,c=i.x>r.x?i.x>a.x?i.x:a.x:r.x>a.x?r.x:a.x,h=i.y>r.y?i.y>a.y?i.y:a.y:r.y>a.y?r.y:a.y,u=cs(o,l,e,t,n),d=cs(c,h,e,t,n);let f=s.prevZ,m=s.nextZ;for(;f&&f.z>=u&&m&&m.z<=d;){if(f!==s.prev&&f!==s.next&&Dn(i.x,i.y,r.x,r.y,a.x,a.y,f.x,f.y)&&Ve(f.prev,f,f.next)>=0||(f=f.prevZ,m!==s.prev&&m!==s.next&&Dn(i.x,i.y,r.x,r.y,a.x,a.y,m.x,m.y)&&Ve(m.prev,m,m.next)>=0))return!1;m=m.nextZ}for(;f&&f.z>=u;){if(f!==s.prev&&f!==s.next&&Dn(i.x,i.y,r.x,r.y,a.x,a.y,f.x,f.y)&&Ve(f.prev,f,f.next)>=0)return!1;f=f.prevZ}for(;m&&m.z<=d;){if(m!==s.prev&&m!==s.next&&Dn(i.x,i.y,r.x,r.y,a.x,a.y,m.x,m.y)&&Ve(m.prev,m,m.next)>=0)return!1;m=m.nextZ}return!0}function em(s,e,t){let n=s;do{const i=n.prev,r=n.next.next;!pr(i,r)&&Ko(i,n,n.next,r)&&xi(i,r)&&xi(r,i)&&(e.push(i.i/t),e.push(n.i/t),e.push(r.i/t),yi(n),yi(n.next),n=s=r),n=n.next}while(n!==s);return Qt(n)}function tm(s,e,t,n,i,r){let a=s;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&hm(a,o)){let l=el(a,o);a=Qt(a,a.next),l=Qt(l,l.next),vi(a,e,t,n,i,r),vi(l,e,t,n,i,r);return}o=o.next}a=a.next}while(a!==s)}function nm(s,e,t,n){const i=[];let r,a,o,l,c;for(r=0,a=e.length;r<a;r++)o=e[r]*n,l=r<a-1?e[r+1]*n:s.length,c=Qo(s,o,l,n,!1),c===c.next&&(c.steiner=!0),i.push(cm(c));for(i.sort(im),r=0;r<i.length;r++)rm(i[r],t),t=Qt(t,t.next);return t}function im(s,e){return s.x-e.x}function rm(s,e){if(e=sm(s,e),e){const t=el(e,s);Qt(e,e.next),Qt(t,t.next)}}function sm(s,e){let t=e;const n=s.x,i=s.y;let r=-1/0,a;do{if(i<=t.y&&i>=t.next.y&&t.next.y!==t.y){const d=t.x+(i-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(d<=n&&d>r){if(r=d,d===n){if(i===t.y)return t;if(i===t.next.y)return t.next}a=t.x<t.next.x?t:t.next}}t=t.next}while(t!==e);if(!a)return null;if(n===r)return a;const o=a,l=a.x,c=a.y;let h=1/0,u;t=a;do n>=t.x&&t.x>=l&&n!==t.x&&Dn(i<c?n:r,i,l,c,i<c?r:n,i,t.x,t.y)&&(u=Math.abs(i-t.y)/(n-t.x),xi(t,s)&&(u<h||u===h&&(t.x>a.x||t.x===a.x&&am(a,t)))&&(a=t,h=u)),t=t.next;while(t!==o);return a}function am(s,e){return Ve(s.prev,s,e.prev)<0&&Ve(e.next,s,s.next)<0}function om(s,e,t,n){let i=s;do i.z===null&&(i.z=cs(i.x,i.y,e,t,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==s);i.prevZ.nextZ=null,i.prevZ=null,lm(i)}function lm(s){let e,t,n,i,r,a,o,l,c=1;do{for(t=s,s=null,r=null,a=0;t;){for(a++,n=t,o=0,e=0;e<c&&(o++,n=n.nextZ,!!n);e++);for(l=c;o>0||l>0&&n;)o!==0&&(l===0||!n||t.z<=n.z)?(i=t,t=t.nextZ,o--):(i=n,n=n.nextZ,l--),r?r.nextZ=i:s=i,i.prevZ=r,r=i;t=n}r.nextZ=null,c*=2}while(a>1);return s}function cs(s,e,t,n,i){return s=32767*(s-t)*i,e=32767*(e-n)*i,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,s|e<<1}function cm(s){let e=s,t=s;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==s);return t}function Dn(s,e,t,n,i,r,a,o){return(i-a)*(e-o)-(s-a)*(r-o)>=0&&(s-a)*(n-o)-(t-a)*(e-o)>=0&&(t-a)*(r-o)-(i-a)*(n-o)>=0}function hm(s,e){return s.next.i!==e.i&&s.prev.i!==e.i&&!um(s,e)&&(xi(s,e)&&xi(e,s)&&dm(s,e)&&(Ve(s.prev,s,e.prev)||Ve(s,e.prev,e))||pr(s,e)&&Ve(s.prev,s,s.next)>0&&Ve(e.prev,e,e.next)>0)}function Ve(s,e,t){return(e.y-s.y)*(t.x-e.x)-(e.x-s.x)*(t.y-e.y)}function pr(s,e){return s.x===e.x&&s.y===e.y}function Ko(s,e,t,n){const i=ji(Ve(s,e,t)),r=ji(Ve(s,e,n)),a=ji(Ve(t,n,s)),o=ji(Ve(t,n,e));return!!(i!==r&&a!==o||i===0&&Yi(s,t,e)||r===0&&Yi(s,n,e)||a===0&&Yi(t,s,n)||o===0&&Yi(t,e,n))}function Yi(s,e,t){return e.x<=Math.max(s.x,t.x)&&e.x>=Math.min(s.x,t.x)&&e.y<=Math.max(s.y,t.y)&&e.y>=Math.min(s.y,t.y)}function ji(s){return s>0?1:s<0?-1:0}function um(s,e){let t=s;do{if(t.i!==s.i&&t.next.i!==s.i&&t.i!==e.i&&t.next.i!==e.i&&Ko(t,t.next,s,e))return!0;t=t.next}while(t!==s);return!1}function xi(s,e){return Ve(s.prev,s,s.next)<0?Ve(s,e,s.next)>=0&&Ve(s,s.prev,e)>=0:Ve(s,e,s.prev)<0||Ve(s,s.next,e)<0}function dm(s,e){let t=s,n=!1;const i=(s.x+e.x)/2,r=(s.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&i<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==s);return n}function el(s,e){const t=new hs(s.i,s.x,s.y),n=new hs(e.i,e.x,e.y),i=s.next,r=e.prev;return s.next=e,e.prev=s,t.next=i,i.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function Ja(s,e,t,n){const i=new hs(s,e,t);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function yi(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function hs(s,e,t){this.i=s,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=null,this.prevZ=null,this.nextZ=null,this.steiner=!1}function fm(s,e,t,n){let i=0;for(let r=e,a=t-n;r<t;r+=n)i+=(s[a]-s[r])*(s[r+1]+s[a+1]),a=r;return i}class Jt{static area(e){const t=e.length;let n=0;for(let i=t-1,r=0;r<t;i=r++)n+=e[i].x*e[r].y-e[r].x*e[i].y;return n*.5}static isClockWise(e){return Jt.area(e)<0}static triangulateShape(e,t){const n=[],i=[],r=[];$a(e),Qa(n,e);let a=e.length;t.forEach($a);for(let l=0;l<t.length;l++)i.push(a),a+=t[l].length,Qa(n,t[l]);const o=$p.triangulate(n,i);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}}function $a(s){const e=s.length;e>2&&s[e-1].equals(s[0])&&s.pop()}function Qa(s,e){for(let t=0;t<e.length;t++)s.push(e[t].x),s.push(e[t].y)}class mr extends Fe{constructor(e,t){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const n=this,i=[],r=[];for(let o=0,l=e.length;o<l;o++){const c=e[o];a(c)}this.setAttribute("position",new ke(i,3)),this.setAttribute("uv",new ke(r,2)),this.computeVertexNormals();function a(o){const l=[],c=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1;let u=t.depth!==void 0?t.depth:100,d=t.bevelEnabled!==void 0?t.bevelEnabled:!0,f=t.bevelThickness!==void 0?t.bevelThickness:6,m=t.bevelSize!==void 0?t.bevelSize:f-2,v=t.bevelOffset!==void 0?t.bevelOffset:0,x=t.bevelSegments!==void 0?t.bevelSegments:3;const g=t.extrudePath,p=t.UVGenerator!==void 0?t.UVGenerator:pm;t.amount!==void 0&&(console.warn("THREE.ExtrudeBufferGeometry: amount has been renamed to depth."),u=t.amount);let T,L=!1,A,y,N,O;g&&(T=g.getSpacedPoints(h),L=!0,d=!1,A=g.computeFrenetFrames(h,!1),y=new b,N=new b,O=new b),d||(x=0,f=0,m=0,v=0);const B=o.extractPoints(c);let k=B.shape;const q=B.holes;if(!Jt.isClockWise(k)){k=k.reverse();for(let J=0,Q=q.length;J<Q;J++){const ee=q[J];Jt.isClockWise(ee)&&(q[J]=ee.reverse())}}const R=Jt.triangulateShape(k,q),P=k;for(let J=0,Q=q.length;J<Q;J++){const ee=q[J];k=k.concat(ee)}function I(J,Q,ee){return Q||console.error("THREE.ExtrudeGeometry: vec does not exist"),Q.clone().multiplyScalar(ee).add(J)}const C=k.length,Y=R.length;function K(J,Q,ee){let ce,re,w;const M=J.x-Q.x,G=J.y-Q.y,V=ee.x-J.x,ne=ee.y-J.y,oe=M*M+G*G,Te=M*ne-G*V;if(Math.abs(Te)>Number.EPSILON){const E=Math.sqrt(oe),S=Math.sqrt(V*V+ne*ne),X=Q.x-G/E,j=Q.y+M/E,le=ee.x-ne/S,W=ee.y+V/S,fe=((le-X)*ne-(W-j)*V)/(M*ne-G*V);ce=X+M*fe-J.x,re=j+G*fe-J.y;const Le=ce*ce+re*re;if(Le<=2)return new Z(ce,re);w=Math.sqrt(Le/2)}else{let E=!1;M>Number.EPSILON?V>Number.EPSILON&&(E=!0):M<-Number.EPSILON?V<-Number.EPSILON&&(E=!0):Math.sign(G)===Math.sign(ne)&&(E=!0),E?(ce=-G,re=M,w=Math.sqrt(oe)):(ce=M,re=G,w=Math.sqrt(oe/2))}return new Z(ce/w,re/w)}const $=[];for(let J=0,Q=P.length,ee=Q-1,ce=J+1;J<Q;J++,ee++,ce++)ee===Q&&(ee=0),ce===Q&&(ce=0),$[J]=K(P[J],P[ee],P[ce]);const ae=[];let se,ue=$.concat();for(let J=0,Q=q.length;J<Q;J++){const ee=q[J];se=[];for(let ce=0,re=ee.length,w=re-1,M=ce+1;ce<re;ce++,w++,M++)w===re&&(w=0),M===re&&(M=0),se[ce]=K(ee[ce],ee[w],ee[M]);ae.push(se),ue=ue.concat(se)}for(let J=0;J<x;J++){const Q=J/x,ee=f*Math.cos(Q*Math.PI/2),ce=m*Math.sin(Q*Math.PI/2)+v;for(let re=0,w=P.length;re<w;re++){const M=I(P[re],$[re],ce);ge(M.x,M.y,-ee)}for(let re=0,w=q.length;re<w;re++){const M=q[re];se=ae[re];for(let G=0,V=M.length;G<V;G++){const ne=I(M[G],se[G],ce);ge(ne.x,ne.y,-ee)}}}const me=m+v;for(let J=0;J<C;J++){const Q=d?I(k[J],ue[J],me):k[J];L?(N.copy(A.normals[0]).multiplyScalar(Q.x),y.copy(A.binormals[0]).multiplyScalar(Q.y),O.copy(T[0]).add(N).add(y),ge(O.x,O.y,O.z)):ge(Q.x,Q.y,0)}for(let J=1;J<=h;J++)for(let Q=0;Q<C;Q++){const ee=d?I(k[Q],ue[Q],me):k[Q];L?(N.copy(A.normals[J]).multiplyScalar(ee.x),y.copy(A.binormals[J]).multiplyScalar(ee.y),O.copy(T[J]).add(N).add(y),ge(O.x,O.y,O.z)):ge(ee.x,ee.y,u/h*J)}for(let J=x-1;J>=0;J--){const Q=J/x,ee=f*Math.cos(Q*Math.PI/2),ce=m*Math.sin(Q*Math.PI/2)+v;for(let re=0,w=P.length;re<w;re++){const M=I(P[re],$[re],ce);ge(M.x,M.y,u+ee)}for(let re=0,w=q.length;re<w;re++){const M=q[re];se=ae[re];for(let G=0,V=M.length;G<V;G++){const ne=I(M[G],se[G],ce);L?ge(ne.x,ne.y+T[h-1].y,T[h-1].x+ee):ge(ne.x,ne.y,u+ee)}}}H(),Ie();function H(){const J=i.length/3;if(d){let Q=0,ee=C*Q;for(let ce=0;ce<Y;ce++){const re=R[ce];de(re[2]+ee,re[1]+ee,re[0]+ee)}Q=h+x*2,ee=C*Q;for(let ce=0;ce<Y;ce++){const re=R[ce];de(re[0]+ee,re[1]+ee,re[2]+ee)}}else{for(let Q=0;Q<Y;Q++){const ee=R[Q];de(ee[2],ee[1],ee[0])}for(let Q=0;Q<Y;Q++){const ee=R[Q];de(ee[0]+C*h,ee[1]+C*h,ee[2]+C*h)}}n.addGroup(J,i.length/3-J,0)}function Ie(){const J=i.length/3;let Q=0;Se(P,Q),Q+=P.length;for(let ee=0,ce=q.length;ee<ce;ee++){const re=q[ee];Se(re,Q),Q+=re.length}n.addGroup(J,i.length/3-J,1)}function Se(J,Q){let ee=J.length;for(;--ee>=0;){const ce=ee;let re=ee-1;re<0&&(re=J.length-1);for(let w=0,M=h+x*2;w<M;w++){const G=C*w,V=C*(w+1),ne=Q+ce+G,oe=Q+re+G,Te=Q+re+V,E=Q+ce+V;Ee(ne,oe,Te,E)}}}function ge(J,Q,ee){l.push(J),l.push(Q),l.push(ee)}function de(J,Q,ee){Me(J),Me(Q),Me(ee);const ce=i.length/3,re=p.generateTopUV(n,i,ce-3,ce-2,ce-1);be(re[0]),be(re[1]),be(re[2])}function Ee(J,Q,ee,ce){Me(J),Me(Q),Me(ce),Me(Q),Me(ee),Me(ce);const re=i.length/3,w=p.generateSideWallUV(n,i,re-6,re-3,re-2,re-1);be(w[0]),be(w[1]),be(w[3]),be(w[1]),be(w[2]),be(w[3])}function Me(J){i.push(l[J*3+0]),i.push(l[J*3+1]),i.push(l[J*3+2])}function be(J){r.push(J.x),r.push(J.y)}}}toJSON(){const e=Fe.prototype.toJSON.call(this),t=this.parameters.shapes,n=this.parameters.options;return mm(t,n,e)}}const pm={generateTopUV:function(s,e,t,n,i){const r=e[t*3],a=e[t*3+1],o=e[n*3],l=e[n*3+1],c=e[i*3],h=e[i*3+1];return[new Z(r,a),new Z(o,l),new Z(c,h)]},generateSideWallUV:function(s,e,t,n,i,r){const a=e[t*3],o=e[t*3+1],l=e[t*3+2],c=e[n*3],h=e[n*3+1],u=e[n*3+2],d=e[i*3],f=e[i*3+1],m=e[i*3+2],v=e[r*3],x=e[r*3+1],g=e[r*3+2];return Math.abs(o-h)<.01?[new Z(a,1-l),new Z(c,1-u),new Z(d,1-m),new Z(v,1-g)]:[new Z(o,1-l),new Z(h,1-u),new Z(f,1-m),new Z(x,1-g)]}};function mm(s,e,t){if(t.shapes=[],Array.isArray(s))for(let n=0,i=s.length;n<i;n++){const r=s[n];t.shapes.push(r.uuid)}else t.shapes.push(s.uuid);return e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class gm extends Fe{constructor(e,t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};const n=[],i=[],r=[],a=[];let o=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let h=0;h<e.length;h++)c(e[h]),this.addGroup(o,l,h),o+=l,l=0;this.setIndex(n),this.setAttribute("position",new ke(i,3)),this.setAttribute("normal",new ke(r,3)),this.setAttribute("uv",new ke(a,2));function c(h){const u=i.length/3,d=h.extractPoints(t);let f=d.shape;const m=d.holes;Jt.isClockWise(f)===!1&&(f=f.reverse());for(let x=0,g=m.length;x<g;x++){const p=m[x];Jt.isClockWise(p)===!0&&(m[x]=p.reverse())}const v=Jt.triangulateShape(f,m);for(let x=0,g=m.length;x<g;x++){const p=m[x];f=f.concat(p)}for(let x=0,g=f.length;x<g;x++){const p=f[x];i.push(p.x,p.y,0),r.push(0,0,1),a.push(p.x,p.y)}for(let x=0,g=v.length;x<g;x++){const p=v[x],T=p[0]+u,L=p[1]+u,A=p[2]+u;n.push(T,L,A),l+=3}}}toJSON(){const e=Fe.prototype.toJSON.call(this),t=this.parameters.shapes;return vm(t,e)}}function vm(s,e){if(e.shapes=[],Array.isArray(s))for(let t=0,n=s.length;t<n;t++){const i=s[t];e.shapes.push(i.uuid)}else e.shapes.push(s.uuid);return e}class tl extends Fe{constructor(e=1,t=8,n=6,i=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(a+o,Math.PI);let c=0;const h=[],u=new b,d=new b,f=[],m=[],v=[],x=[];for(let g=0;g<=n;g++){const p=[],T=g/n;let L=0;g==0&&a==0?L=.5/t:g==n&&l==Math.PI&&(L=-.5/t);for(let A=0;A<=t;A++){const y=A/t;u.x=-e*Math.cos(i+y*r)*Math.sin(a+T*o),u.y=e*Math.cos(a+T*o),u.z=e*Math.sin(i+y*r)*Math.sin(a+T*o),m.push(u.x,u.y,u.z),d.copy(u).normalize(),v.push(d.x,d.y,d.z),x.push(y+L,1-T),p.push(c++)}h.push(p)}for(let g=0;g<n;g++)for(let p=0;p<t;p++){const T=h[g][p+1],L=h[g][p],A=h[g+1][p],y=h[g+1][p+1];(g!==0||a>0)&&f.push(T,L,y),(g!==n-1||l<Math.PI)&&f.push(L,A,y)}this.setIndex(f),this.setAttribute("position",new ke(m,3)),this.setAttribute("normal",new ke(v,3)),this.setAttribute("uv",new ke(x,2))}}class xm extends Qe{constructor(e){super(),this.type="ShadowMaterial",this.color=new he(0),this.transparent=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this}}xm.prototype.isShadowMaterial=!0;class ym extends $t{constructor(e){super(e),this.type="RawShaderMaterial"}}ym.prototype.isRawShaderMaterial=!0;class As extends Qe{constructor(e){super(),this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new he(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new he(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=zn,this.normalScale=new Z(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.skinning=!1,this.morphTargets=!1,this.morphNormals=!1,this.flatShading=!1,this.vertexTangents=!1,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.skinning=e.skinning,this.morphTargets=e.morphTargets,this.morphNormals=e.morphNormals,this.flatShading=e.flatShading,this.vertexTangents=e.vertexTangents,this}}As.prototype.isMeshStandardMaterial=!0;class _m extends As{constructor(e){super(),this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.clearcoat=0,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Z(1,1),this.clearcoatNormalMap=null,this.reflectivity=.5,Object.defineProperty(this,"ior",{get:function(){return(1+.4*this.reflectivity)/(1-.4*this.reflectivity)},set:function(t){this.reflectivity=ot(2.5*(t-1)/(t+1),0,1)}}),this.sheen=null,this.transmission=0,this.transmissionMap=null,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.reflectivity=e.reflectivity,e.sheen?this.sheen=(this.sheen||new he).copy(e.sheen):this.sheen=null,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this}}_m.prototype.isMeshPhysicalMaterial=!0;class Mm extends Qe{constructor(e){super(),this.type="MeshPhongMaterial",this.color=new he(16777215),this.specular=new he(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new he(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=zn,this.normalScale=new Z(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=cr,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.skinning=!1,this.morphTargets=!1,this.morphNormals=!1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.skinning=e.skinning,this.morphTargets=e.morphTargets,this.morphNormals=e.morphNormals,this.flatShading=e.flatShading,this}}Mm.prototype.isMeshPhongMaterial=!0;class bm extends Qe{constructor(e){super(),this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new he(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new he(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=zn,this.normalScale=new Z(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.skinning=!1,this.morphTargets=!1,this.morphNormals=!1,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.gradientMap=e.gradientMap,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.skinning=e.skinning,this.morphTargets=e.morphTargets,this.morphNormals=e.morphNormals,this}}bm.prototype.isMeshToonMaterial=!0;class wm extends Qe{constructor(e){super(),this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=zn,this.normalScale=new Z(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.skinning=!1,this.morphTargets=!1,this.morphNormals=!1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.skinning=e.skinning,this.morphTargets=e.morphTargets,this.morphNormals=e.morphNormals,this.flatShading=e.flatShading,this}}wm.prototype.isMeshNormalMaterial=!0;class Sm extends Qe{constructor(e){super(),this.type="MeshLambertMaterial",this.color=new he(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new he(0),this.emissiveIntensity=1,this.emissiveMap=null,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=cr,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.skinning=!1,this.morphTargets=!1,this.morphNormals=!1,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.skinning=e.skinning,this.morphTargets=e.morphTargets,this.morphNormals=e.morphNormals,this}}Sm.prototype.isMeshLambertMaterial=!0;class Em extends Qe{constructor(e){super(),this.defines={MATCAP:""},this.type="MeshMatcapMaterial",this.color=new he(16777215),this.matcap=null,this.map=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=zn,this.normalScale=new Z(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.skinning=!1,this.morphTargets=!1,this.morphNormals=!1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.defines={MATCAP:""},this.color.copy(e.color),this.matcap=e.matcap,this.map=e.map,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.skinning=e.skinning,this.morphTargets=e.morphTargets,this.morphNormals=e.morphNormals,this.flatShading=e.flatShading,this}}Em.prototype.isMeshMatcapMaterial=!0;class Tm extends Vn{constructor(e){super(),this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(e)}copy(e){return super.copy(e),this.scale=e.scale,this.dashSize=e.dashSize,this.gapSize=e.gapSize,this}}Tm.prototype.isLineDashedMaterial=!0;const Ge={arraySlice:function(s,e,t){return Ge.isTypedArray(s)?new s.constructor(s.subarray(e,t!==void 0?t:s.length)):s.slice(e,t)},convertArray:function(s,e,t){return!s||!t&&s.constructor===e?s:typeof e.BYTES_PER_ELEMENT=="number"?new e(s):Array.prototype.slice.call(s)},isTypedArray:function(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)},getKeyframeOrder:function(s){function e(i,r){return s[i]-s[r]}const t=s.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n},sortedArray:function(s,e,t){const n=s.length,i=new s.constructor(n);for(let r=0,a=0;a!==n;++r){const o=t[r]*e;for(let l=0;l!==e;++l)i[a++]=s[o+l]}return i},flattenJSON:function(s,e,t,n){let i=1,r=s[0];for(;r!==void 0&&r[n]===void 0;)r=s[i++];if(r===void 0)return;let a=r[n];if(a!==void 0)if(Array.isArray(a))do a=r[n],a!==void 0&&(e.push(r.time),t.push.apply(t,a)),r=s[i++];while(r!==void 0);else if(a.toArray!==void 0)do a=r[n],a!==void 0&&(e.push(r.time),a.toArray(t,t.length)),r=s[i++];while(r!==void 0);else do a=r[n],a!==void 0&&(e.push(r.time),t.push(a)),r=s[i++];while(r!==void 0)},subclip:function(s,e,t,n,i=30){const r=s.clone();r.name=e;const a=[];for(let l=0;l<r.tracks.length;++l){const c=r.tracks[l],h=c.getValueSize(),u=[],d=[];for(let f=0;f<c.times.length;++f){const m=c.times[f]*i;if(!(m<t||m>=n)){u.push(c.times[f]);for(let v=0;v<h;++v)d.push(c.values[f*h+v])}}u.length!==0&&(c.times=Ge.convertArray(u,c.times.constructor),c.values=Ge.convertArray(d,c.values.constructor),a.push(c))}r.tracks=a;let o=1/0;for(let l=0;l<r.tracks.length;++l)o>r.tracks[l].times[0]&&(o=r.tracks[l].times[0]);for(let l=0;l<r.tracks.length;++l)r.tracks[l].shift(-1*o);return r.resetDuration(),r},makeClipAdditive:function(s,e=0,t=s,n=30){n<=0&&(n=30);const i=t.tracks.length,r=e/n;for(let a=0;a<i;++a){const o=t.tracks[a],l=o.ValueTypeName;if(l==="bool"||l==="string")continue;const c=s.tracks.find(function(g){return g.name===o.name&&g.ValueTypeName===l});if(c===void 0)continue;let h=0;const u=o.getValueSize();o.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(h=u/3);let d=0;const f=c.getValueSize();c.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(d=f/3);const m=o.times.length-1;let v;if(r<=o.times[0]){const g=h,p=u-h;v=Ge.arraySlice(o.values,g,p)}else if(r>=o.times[m]){const g=m*u+h,p=g+u-h;v=Ge.arraySlice(o.values,g,p)}else{const g=o.createInterpolant(),p=h,T=u-h;g.evaluate(r),v=Ge.arraySlice(g.resultBuffer,p,T)}l==="quaternion"&&new nt().fromArray(v).normalize().conjugate().toArray(v);const x=c.times.length;for(let g=0;g<x;++g){const p=g*f+d;if(l==="quaternion")nt.multiplyQuaternionsFlat(c.values,p,v,0,c.values,p);else{const T=f-d*2;for(let L=0;L<T;++L)c.values[p+L]-=v[L]}}}return s.blendMode=_o,s}};class Kt{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],r=t[n-1];e:{t:{let a;n:{i:if(!(e<i)){for(let o=n+2;;){if(i===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.afterEnd_(n-1,e,r)}if(n===o)break;if(r=i,i=t[++n],e<i)break t}a=t.length;break n}if(!(e>=r)){const o=t[1];e<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.beforeStart_(0,e,i);if(n===l)break;if(i=r,r=t[--n-1],e>=r)break t}a=n,n=0;break n}break e}for(;n<a;){const o=n+a>>>1;e<t[o]?a=o:n=o+1}if(i=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.beforeStart_(0,e,i);if(i===void 0)return n=t.length,this._cachedIndex=n,this.afterEnd_(n-1,r,e)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i;for(let a=0;a!==i;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}Kt.prototype.beforeStart_=Kt.prototype.copySampleValue_;Kt.prototype.afterEnd_=Kt.prototype.copySampleValue_;class Am extends Kt{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Pn,endingEnd:Pn}}intervalChanged_(e,t,n){const i=this.parameterPositions;let r=e-2,a=e+1,o=i[r],l=i[a];if(o===void 0)switch(this.getSettings_().endingStart){case In:r=e,o=2*t-n;break;case ir:r=i.length-2,o=t+i[r]-i[r+1];break;default:r=e,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case In:a=e,l=2*n-t;break;case ir:a=1,l=n+i[1]-i[0];break;default:a=e-1,l=t}const c=(n-t)*.5,h=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(e,t,n,i){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,m=(n-t)/(i-t),v=m*m,x=v*m,g=-d*x+2*d*v-d*m,p=(1+d)*x+(-1.5-2*d)*v+(-.5+d)*m+1,T=(-1-f)*x+(1.5+f)*v+.5*m,L=f*x-f*v;for(let A=0;A!==o;++A)r[A]=g*a[h+A]+p*a[c+A]+T*a[l+A]+L*a[u+A];return r}}class nl extends Kt{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=(n-t)/(i-t),u=1-h;for(let d=0;d!==o;++d)r[d]=a[c+d]*u+a[l+d]*h;return r}}class Lm extends Kt{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class Pt{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Ge.convertArray(t,this.TimeBufferType),this.values=Ge.convertArray(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Ge.convertArray(e.times,Array),values:Ge.convertArray(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Lm(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new nl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Am(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case tr:t=this.InterpolantFactoryMethodDiscrete;break;case nr:t=this.InterpolantFactoryMethodLinear;break;case _r:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return tr;case this.InterpolantFactoryMethodLinear:return nr;case this.InterpolantFactoryMethodSmooth:return _r}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){const n=this.times,i=n.length;let r=0,a=i-1;for(;r!==i&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==i){r>=a&&(a=Math.max(a,1),r=a-1);const o=this.getValueSize();this.times=Ge.arraySlice(n,r,a),this.values=Ge.arraySlice(this.values,r*o,a*o)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,i=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){const l=n[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(i!==void 0&&Ge.isTypedArray(i))for(let o=0,l=i.length;o!==l;++o){const c=i[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){const e=Ge.arraySlice(this.times),t=Ge.arraySlice(this.values),n=this.getValueSize(),i=this.getInterpolation()===_r,r=e.length-1;let a=1;for(let o=1;o<r;++o){let l=!1;const c=e[o],h=e[o+1];if(c!==h&&(o!==1||c!==e[0]))if(i)l=!0;else{const u=o*n,d=u-n,f=u+n;for(let m=0;m!==n;++m){const v=t[u+m];if(v!==t[d+m]||v!==t[f+m]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];const u=o*n,d=a*n;for(let f=0;f!==n;++f)t[d+f]=t[u+f]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=Ge.arraySlice(e,0,a),this.values=Ge.arraySlice(t,0,a*n)):(this.times=e,this.values=t),this}clone(){const e=Ge.arraySlice(this.times,0),t=Ge.arraySlice(this.values,0),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}}Pt.prototype.TimeBufferType=Float32Array;Pt.prototype.ValueBufferType=Float32Array;Pt.prototype.DefaultInterpolation=nr;class Wn extends Pt{}Wn.prototype.ValueTypeName="bool";Wn.prototype.ValueBufferType=Array;Wn.prototype.DefaultInterpolation=tr;Wn.prototype.InterpolantFactoryMethodLinear=void 0;Wn.prototype.InterpolantFactoryMethodSmooth=void 0;class il extends Pt{}il.prototype.ValueTypeName="color";class sr extends Pt{}sr.prototype.ValueTypeName="number";class Rm extends Kt{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-t)/(i-t);let c=e*o;for(let h=c+o;c!==h;c+=4)nt.slerpFlat(r,0,a,c-o,a,c,l);return r}}class Mi extends Pt{InterpolantFactoryMethodLinear(e){return new Rm(this.times,this.values,this.getValueSize(),e)}}Mi.prototype.ValueTypeName="quaternion";Mi.prototype.DefaultInterpolation=nr;Mi.prototype.InterpolantFactoryMethodSmooth=void 0;class Xn extends Pt{}Xn.prototype.ValueTypeName="string";Xn.prototype.ValueBufferType=Array;Xn.prototype.DefaultInterpolation=tr;Xn.prototype.InterpolantFactoryMethodLinear=void 0;Xn.prototype.InterpolantFactoryMethodSmooth=void 0;class ar extends Pt{}ar.prototype.ValueTypeName="vector";class Ka{constructor(e,t=-1,n,i=ys){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=Et(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let a=0,o=n.length;a!==o;++a)t.push(Pm(n[a]).scale(i));const r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r}static toJSON(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,a=n.length;r!==a;++r)t.push(Pt.toJSON(n[r]));return i}static CreateFromMorphTargetSequence(e,t,n,i){const r=t.length,a=[];for(let o=0;o<r;o++){let l=[],c=[];l.push((o+r-1)%r,o,(o+1)%r),c.push(0,1,0);const h=Ge.getKeyframeOrder(l);l=Ge.sortedArray(l,1,h),c=Ge.sortedArray(c,1,h),!i&&l[0]===0&&(l.push(r),c.push(c[0])),a.push(new sr(".morphTargetInfluences["+t[o].name+"]",l,c).scale(1/n))}return new this(e,-1,a)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const i={},r=/^([\w-]*?)([\d]+)$/;for(let o=0,l=e.length;o<l;o++){const c=e[o],h=c.name.match(r);if(h&&h.length>1){const u=h[1];let d=i[u];d||(i[u]=d=[]),d.push(c)}}const a=[];for(const o in i)a.push(this.CreateFromMorphTargetSequence(o,i[o],t,n));return a}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(u,d,f,m,v){if(f.length!==0){const x=[],g=[];Ge.flattenJSON(f,x,g,m),x.length!==0&&v.push(new u(d,x,g))}},i=[],r=e.name||"default",a=e.fps||30,o=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let u=0;u<c.length;u++){const d=c[u].keys;if(!(!d||d.length===0))if(d[0].morphTargets){const f={};let m;for(m=0;m<d.length;m++)if(d[m].morphTargets)for(let v=0;v<d[m].morphTargets.length;v++)f[d[m].morphTargets[v]]=-1;for(const v in f){const x=[],g=[];for(let p=0;p!==d[m].morphTargets.length;++p){const T=d[m];x.push(T.time),g.push(T.morphTarget===v?1:0)}i.push(new sr(".morphTargetInfluence["+v+"]",x,g))}l=f.length*a}else{const f=".bones["+t[u].name+"]";n(ar,f+".position",d,"pos",i),n(Mi,f+".quaternion",d,"rot",i),n(ar,f+".scale",d,"scl",i)}}return i.length===0?null:new this(r,l,i,o)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,i=e.length;n!==i;++n){const r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function Cm(s){switch(s.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return sr;case"vector":case"vector2":case"vector3":case"vector4":return ar;case"color":return il;case"quaternion":return Mi;case"bool":case"boolean":return Wn;case"string":return Xn}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+s)}function Pm(s){if(s.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=Cm(s.type);if(s.times===void 0){const t=[],n=[];Ge.flattenJSON(s.keys,t,n,"value"),s.times=t,s.values=n}return e.parse!==void 0?e.parse(s):new e(s.name,s.times,s.values,s.interpolation)}const Bn={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(this.files[s]=e)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};class Im{constructor(e,t,n){const i=this;let r=!1,a=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(h){o++,r===!1&&i.onStart!==void 0&&i.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,i.onProgress!==void 0&&i.onProgress(h,a,o),a===o&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){const u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){const f=c[u],m=c[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return m}return null}}}const Dm=new Im;class tn{constructor(e){this.manager=e!==void 0?e:Dm,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,r){n.load(e,i,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}const bt={};class Nm extends tn{constructor(e){super(e)}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,a=Bn.get(e);if(a!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0),a;if(bt[e]!==void 0){bt[e].push({onLoad:t,onProgress:n,onError:i});return}const o=/^data:(.*?)(;base64)?,(.*)$/,l=e.match(o);let c;if(l){const h=l[1],u=!!l[2];let d=l[3];d=decodeURIComponent(d),u&&(d=atob(d));try{let f;const m=(this.responseType||"").toLowerCase();switch(m){case"arraybuffer":case"blob":const v=new Uint8Array(d.length);for(let g=0;g<d.length;g++)v[g]=d.charCodeAt(g);m==="blob"?f=new Blob([v.buffer],{type:h}):f=v.buffer;break;case"document":f=new DOMParser().parseFromString(d,h);break;case"json":f=JSON.parse(d);break;default:f=d;break}setTimeout(function(){t&&t(f),r.manager.itemEnd(e)},0)}catch(f){setTimeout(function(){i&&i(f),r.manager.itemError(e),r.manager.itemEnd(e)},0)}}else{bt[e]=[],bt[e].push({onLoad:t,onProgress:n,onError:i}),c=new XMLHttpRequest,c.open("GET",e,!0),c.addEventListener("load",function(h){const u=this.response,d=bt[e];if(delete bt[e],this.status===200||this.status===0){this.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),Bn.add(e,u);for(let f=0,m=d.length;f<m;f++){const v=d[f];v.onLoad&&v.onLoad(u)}r.manager.itemEnd(e)}else{for(let f=0,m=d.length;f<m;f++){const v=d[f];v.onError&&v.onError(h)}r.manager.itemError(e),r.manager.itemEnd(e)}},!1),c.addEventListener("progress",function(h){const u=bt[e];for(let d=0,f=u.length;d<f;d++){const m=u[d];m.onProgress&&m.onProgress(h)}},!1),c.addEventListener("error",function(h){const u=bt[e];delete bt[e];for(let d=0,f=u.length;d<f;d++){const m=u[d];m.onError&&m.onError(h)}r.manager.itemError(e),r.manager.itemEnd(e)},!1),c.addEventListener("abort",function(h){const u=bt[e];delete bt[e];for(let d=0,f=u.length;d<f;d++){const m=u[d];m.onError&&m.onError(h)}r.manager.itemError(e),r.manager.itemEnd(e)},!1),this.responseType!==void 0&&(c.responseType=this.responseType),this.withCredentials!==void 0&&(c.withCredentials=this.withCredentials),c.overrideMimeType&&c.overrideMimeType(this.mimeType!==void 0?this.mimeType:"text/plain");for(const h in this.requestHeader)c.setRequestHeader(h,this.requestHeader[h]);c.send(null)}return r.manager.itemStart(e),c}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class rl extends tn{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,a=Bn.get(e);if(a!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0),a;const o=document.createElementNS("http://www.w3.org/1999/xhtml","img");function l(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1),Bn.add(e,this),t&&t(this),r.manager.itemEnd(e)}function c(h){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1),i&&i(h),r.manager.itemError(e),r.manager.itemEnd(e)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.substr(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),r.manager.itemStart(e),o.src=e,o}}class Fm extends tn{constructor(e){super(e)}load(e,t,n,i){const r=new ur,a=new rl(this.manager);a.setCrossOrigin(this.crossOrigin),a.setPath(this.path);let o=0;function l(c){a.load(e[c],function(h){r.images[c]=h,o++,o===6&&(r.needsUpdate=!0,t&&t(r))},void 0,i)}for(let c=0;c<e.length;++c)l(c);return r}}class Om extends tn{constructor(e){super(e)}load(e,t,n,i){const r=new it,a=new rl(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o;const l=e.search(/\.jpe?g($|\?)/i)>0||e.search(/^data\:image\/jpeg/)===0;r.format=l?ln:St,r.needsUpdate=!0,t!==void 0&&t(r)},n,i),r}}class gt{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,i=this.getPoint(0),r=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),r+=n.distanceTo(i),t.push(r),i=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const n=this.getLengths();let i=0;const r=n.length;let a;t?a=t:a=e*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(i=Math.floor(o+(l-o)/2),c=n[i]-a,c<0)o=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===a)return i/(r-1);const h=n[i],d=n[i+1]-h,f=(a-h)/d;return(i+f)/(r-1)}getTangent(e,t){let i=e-1e-4,r=e+1e-4;i<0&&(i=0),r>1&&(r=1);const a=this.getPoint(i),o=this.getPoint(r),l=t||(a.isVector2?new Z:new b);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){const n=new b,i=[],r=[],a=[],o=new b,l=new pe;for(let f=0;f<=e;f++){const m=f/e;i[f]=this.getTangentAt(m,new b),i[f].normalize()}r[0]=new b,a[0]=new b;let c=Number.MAX_VALUE;const h=Math.abs(i[0].x),u=Math.abs(i[0].y),d=Math.abs(i[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),d<=c&&n.set(0,0,1),o.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],o),a[0].crossVectors(i[0],r[0]);for(let f=1;f<=e;f++){if(r[f]=r[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(i[f-1],i[f]),o.length()>Number.EPSILON){o.normalize();const m=Math.acos(ot(i[f-1].dot(i[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(o,m))}a[f].crossVectors(i[f],r[f])}if(t===!0){let f=Math.acos(ot(r[0].dot(r[e]),-1,1));f/=e,i[0].dot(o.crossVectors(r[0],r[e]))>0&&(f=-f);for(let m=1;m<=e;m++)r[m].applyMatrix4(l.makeRotationAxis(i[m],f*m)),a[m].crossVectors(i[m],r[m])}return{tangents:i,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.5,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class gr extends gt{constructor(e=0,t=0,n=1,i=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=i,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(e,t){const n=t||new Z,i=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=i;for(;r>i;)r-=i;r<Number.EPSILON&&(a?r=0:r=i),this.aClockwise===!0&&!a&&(r===i?r=-i:r=r-i);const o=this.aStartAngle+e*r;let l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=l-this.aX,f=c-this.aY;l=d*h-f*u+this.aX,c=d*u+f*h+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}gr.prototype.isEllipseCurve=!0;class sl extends gr{constructor(e,t,n,i,r,a){super(e,t,n,n,i,r,a),this.type="ArcCurve"}}sl.prototype.isArcCurve=!0;function Ls(){let s=0,e=0,t=0,n=0;function i(r,a,o,l){s=r,e=o,t=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){i(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,h,u){let d=(a-r)/c-(o-r)/(c+h)+(o-a)/h,f=(o-a)/h-(l-a)/(h+u)+(l-o)/u;d*=h,f*=h,i(a,o,d,f)},calc:function(r){const a=r*r,o=a*r;return s+e*r+t*a+n*o}}}const Zi=new b,Zr=new Ls,Jr=new Ls,$r=new Ls;class al extends gt{constructor(e=[],t=!1,n="centripetal",i=.5){super(),this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=i}getPoint(e,t=new b){const n=t,i=this.points,r=i.length,a=(r-(this.closed?0:1))*e;let o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,h;this.closed||o>0?c=i[(o-1)%r]:(Zi.subVectors(i[0],i[1]).add(i[0]),c=Zi);const u=i[o%r],d=i[(o+1)%r];if(this.closed||o+2<r?h=i[(o+2)%r]:(Zi.subVectors(i[r-1],i[r-2]).add(i[r-1]),h=Zi),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let m=Math.pow(c.distanceToSquared(u),f),v=Math.pow(u.distanceToSquared(d),f),x=Math.pow(d.distanceToSquared(h),f);v<1e-4&&(v=1),m<1e-4&&(m=v),x<1e-4&&(x=v),Zr.initNonuniformCatmullRom(c.x,u.x,d.x,h.x,m,v,x),Jr.initNonuniformCatmullRom(c.y,u.y,d.y,h.y,m,v,x),$r.initNonuniformCatmullRom(c.z,u.z,d.z,h.z,m,v,x)}else this.curveType==="catmullrom"&&(Zr.initCatmullRom(c.x,u.x,d.x,h.x,this.tension),Jr.initCatmullRom(c.y,u.y,d.y,h.y,this.tension),$r.initCatmullRom(c.z,u.z,d.z,h.z,this.tension));return n.set(Zr.calc(l),Jr.calc(l),$r.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new b().fromArray(i))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}al.prototype.isCatmullRomCurve3=!0;function eo(s,e,t,n,i){const r=(n-e)*.5,a=(i-t)*.5,o=s*s,l=s*o;return(2*t-2*n+r+a)*l+(-3*t+3*n-2*r-a)*o+r*s+t}function Bm(s,e){const t=1-s;return t*t*e}function zm(s,e){return 2*(1-s)*s*e}function Um(s,e){return s*s*e}function ui(s,e,t,n){return Bm(s,e)+zm(s,t)+Um(s,n)}function Hm(s,e){const t=1-s;return t*t*t*e}function Gm(s,e){const t=1-s;return 3*t*t*s*e}function km(s,e){return 3*(1-s)*s*s*e}function Vm(s,e){return s*s*s*e}function di(s,e,t,n,i){return Hm(s,e)+Gm(s,t)+km(s,n)+Vm(s,i)}class Rs extends gt{constructor(e=new Z,t=new Z,n=new Z,i=new Z){super(),this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new Z){const n=t,i=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(di(e,i.x,r.x,a.x,o.x),di(e,i.y,r.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}Rs.prototype.isCubicBezierCurve=!0;class ol extends gt{constructor(e=new b,t=new b,n=new b,i=new b){super(),this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new b){const n=t,i=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(di(e,i.x,r.x,a.x,o.x),di(e,i.y,r.y,a.y,o.y),di(e,i.z,r.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}ol.prototype.isCubicBezierCurve3=!0;class vr extends gt{constructor(e=new Z,t=new Z){super(),this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new Z){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t){const n=t||new Z;return n.copy(this.v2).sub(this.v1).normalize(),n}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}vr.prototype.isLineCurve=!0;class Wm extends gt{constructor(e=new b,t=new b){super(),this.type="LineCurve3",this.isLineCurve3=!0,this.v1=e,this.v2=t}getPoint(e,t=new b){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Cs extends gt{constructor(e=new Z,t=new Z,n=new Z){super(),this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new Z){const n=t,i=this.v0,r=this.v1,a=this.v2;return n.set(ui(e,i.x,r.x,a.x),ui(e,i.y,r.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}Cs.prototype.isQuadraticBezierCurve=!0;class ll extends gt{constructor(e=new b,t=new b,n=new b){super(),this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new b){const n=t,i=this.v0,r=this.v1,a=this.v2;return n.set(ui(e,i.x,r.x,a.x),ui(e,i.y,r.y,a.y),ui(e,i.z,r.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}ll.prototype.isQuadraticBezierCurve3=!0;class Ps extends gt{constructor(e=[]){super(),this.type="SplineCurve",this.points=e}getPoint(e,t=new Z){const n=t,i=this.points,r=(i.length-1)*e,a=Math.floor(r),o=r-a,l=i[a===0?a:a-1],c=i[a],h=i[a>i.length-2?i.length-1:a+1],u=i[a>i.length-3?i.length-1:a+2];return n.set(eo(o,l.x,c.x,h.x,u.x),eo(o,l.y,c.y,h.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new Z().fromArray(i))}return this}}Ps.prototype.isSplineCurve=!0;var Xm=Object.freeze({__proto__:null,ArcCurve:sl,CatmullRomCurve3:al,CubicBezierCurve:Rs,CubicBezierCurve3:ol,EllipseCurve:gr,LineCurve:vr,LineCurve3:Wm,QuadraticBezierCurve:Cs,QuadraticBezierCurve3:ll,SplineCurve:Ps});class qm extends gt{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);e.equals(t)||this.curves.push(new vr(t,e))}getPoint(e){const t=e*this.getLength(),n=this.getCurveLengths();let i=0;for(;i<n.length;){if(n[i]>=t){const r=n[i]-t,a=this.curves[i],o=a.getLength(),l=o===0?0:1-r/o;return a.getPointAt(l)}i++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let n=0,i=this.curves.length;n<i;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let n;for(let i=0,r=this.curves;i<r.length;i++){const a=r[i],o=a&&a.isEllipseCurve?e*2:a&&(a.isLineCurve||a.isLineCurve3)?1:a&&a.isSplineCurve?e*a.points.length:e,l=a.getPoints(o);for(let c=0;c<l.length;c++){const h=l[c];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const i=e.curves[t];this.curves.push(i.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){const i=this.curves[t];e.curves.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const i=e.curves[t];this.curves.push(new Xm[i.type]().fromJSON(i))}return this}}class us extends qm{constructor(e){super(),this.type="Path",this.currentPoint=new Z,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const n=new vr(this.currentPoint.clone(),new Z(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,i){const r=new Cs(this.currentPoint.clone(),new Z(e,t),new Z(n,i));return this.curves.push(r),this.currentPoint.set(n,i),this}bezierCurveTo(e,t,n,i,r,a){const o=new Rs(this.currentPoint.clone(),new Z(e,t),new Z(n,i),new Z(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),n=new Ps(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,i,r,a){const o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+o,t+l,n,i,r,a),this}absarc(e,t,n,i,r,a){return this.absellipse(e,t,n,n,i,r,a),this}ellipse(e,t,n,i,r,a,o,l){const c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,n,i,r,a,o,l),this}absellipse(e,t,n,i,r,a,o,l){const c=new gr(e,t,n,i,r,a,o,l);if(this.curves.length>0){const u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);const h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class Is extends us{constructor(e){super(e),this.uuid=Et(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let n=0,i=this.holes.length;n<i;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const i=e.holes[t];this.holes.push(i.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){const i=this.holes[t];e.holes.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const i=e.holes[t];this.holes.push(new us().fromJSON(i))}return this}}class Ct extends Pe{constructor(e,t=1){super(),this.type="Light",this.color=new he(e),this.intensity=t}dispose(){}copy(e){return super.copy(e),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}Ct.prototype.isLight=!0;class Ym extends Ct{constructor(e,t,n){super(e,n),this.type="HemisphereLight",this.position.copy(Pe.DefaultUp),this.updateMatrix(),this.groundColor=new he(t)}copy(e){return Ct.prototype.copy.call(this,e),this.groundColor.copy(e.groundColor),this}}Ym.prototype.isHemisphereLight=!0;const to=new pe,no=new b,io=new b;class Ds{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.mapSize=new Z(512,512),this.map=null,this.mapPass=null,this.matrix=new pe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new dr,this._frameExtents=new Z(1,1),this._viewportCount=1,this._viewports=[new Oe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;no.setFromMatrixPosition(e.matrixWorld),t.position.copy(no),io.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(io),t.updateMatrixWorld(),to.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(to),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(t.projectionMatrix),n.multiply(t.matrixWorldInverse)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class cl extends Ds{constructor(){super(new ut(50,1,.5,500)),this.focus=1}updateMatrices(e){const t=this.camera,n=mi*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(n!==t.fov||i!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=i,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}cl.prototype.isSpotLightShadow=!0;class jm extends Ct{constructor(e,t,n=0,i=Math.PI/3,r=0,a=1){super(e,t),this.type="SpotLight",this.position.copy(Pe.DefaultUp),this.updateMatrix(),this.target=new Pe,this.distance=n,this.angle=i,this.penumbra=r,this.decay=a,this.shadow=new cl}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}jm.prototype.isSpotLight=!0;const ro=new pe,ti=new b,Qr=new b;class hl extends Ds{constructor(){super(new ut(90,1,.5,500)),this._frameExtents=new Z(4,2),this._viewportCount=6,this._viewports=[new Oe(2,1,1,1),new Oe(0,1,1,1),new Oe(3,1,1,1),new Oe(1,1,1,1),new Oe(3,0,1,1),new Oe(1,0,1,1)],this._cubeDirections=[new b(1,0,0),new b(-1,0,0),new b(0,0,1),new b(0,0,-1),new b(0,1,0),new b(0,-1,0)],this._cubeUps=[new b(0,1,0),new b(0,1,0),new b(0,1,0),new b(0,1,0),new b(0,0,1),new b(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,i=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),ti.setFromMatrixPosition(e.matrixWorld),n.position.copy(ti),Qr.copy(n.position),Qr.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Qr),n.updateMatrixWorld(),i.makeTranslation(-ti.x,-ti.y,-ti.z),ro.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ro)}}hl.prototype.isPointLightShadow=!0;class Zm extends Ct{constructor(e,t,n=0,i=1){super(e,t),this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new hl}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}Zm.prototype.isPointLight=!0;class ul extends bs{constructor(e=-1,t=1,n=1,i=-1,r=.1,a=2e3){super(),this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-e,a=n+e,o=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}ul.prototype.isOrthographicCamera=!0;class dl extends Ds{constructor(){super(new ul(-5,5,5,-5,.5,500))}}dl.prototype.isDirectionalLightShadow=!0;class fl extends Ct{constructor(e,t){super(e,t),this.type="DirectionalLight",this.position.copy(Pe.DefaultUp),this.updateMatrix(),this.target=new Pe,this.shadow=new dl}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}fl.prototype.isDirectionalLight=!0;class pl extends Ct{constructor(e,t){super(e,t),this.type="AmbientLight"}}pl.prototype.isAmbientLight=!0;class Jm extends Ct{constructor(e,t,n=10,i=10){super(e,t),this.type="RectAreaLight",this.width=n,this.height=i}copy(e){return super.copy(e),this.width=e.width,this.height=e.height,this}toJSON(e){const t=super.toJSON(e);return t.object.width=this.width,t.object.height=this.height,t}}Jm.prototype.isRectAreaLight=!0;class ml{constructor(){this.coefficients=[];for(let e=0;e<9;e++)this.coefficients.push(new b)}set(e){for(let t=0;t<9;t++)this.coefficients[t].copy(e[t]);return this}zero(){for(let e=0;e<9;e++)this.coefficients[e].set(0,0,0);return this}getAt(e,t){const n=e.x,i=e.y,r=e.z,a=this.coefficients;return t.copy(a[0]).multiplyScalar(.282095),t.addScaledVector(a[1],.488603*i),t.addScaledVector(a[2],.488603*r),t.addScaledVector(a[3],.488603*n),t.addScaledVector(a[4],1.092548*(n*i)),t.addScaledVector(a[5],1.092548*(i*r)),t.addScaledVector(a[6],.315392*(3*r*r-1)),t.addScaledVector(a[7],1.092548*(n*r)),t.addScaledVector(a[8],.546274*(n*n-i*i)),t}getIrradianceAt(e,t){const n=e.x,i=e.y,r=e.z,a=this.coefficients;return t.copy(a[0]).multiplyScalar(.886227),t.addScaledVector(a[1],2*.511664*i),t.addScaledVector(a[2],2*.511664*r),t.addScaledVector(a[3],2*.511664*n),t.addScaledVector(a[4],2*.429043*n*i),t.addScaledVector(a[5],2*.429043*i*r),t.addScaledVector(a[6],.743125*r*r-.247708),t.addScaledVector(a[7],2*.429043*n*r),t.addScaledVector(a[8],.429043*(n*n-i*i)),t}add(e){for(let t=0;t<9;t++)this.coefficients[t].add(e.coefficients[t]);return this}addScaledSH(e,t){for(let n=0;n<9;n++)this.coefficients[n].addScaledVector(e.coefficients[n],t);return this}scale(e){for(let t=0;t<9;t++)this.coefficients[t].multiplyScalar(e);return this}lerp(e,t){for(let n=0;n<9;n++)this.coefficients[n].lerp(e.coefficients[n],t);return this}equals(e){for(let t=0;t<9;t++)if(!this.coefficients[t].equals(e.coefficients[t]))return!1;return!0}copy(e){return this.set(e.coefficients)}clone(){return new this.constructor().copy(this)}fromArray(e,t=0){const n=this.coefficients;for(let i=0;i<9;i++)n[i].fromArray(e,t+i*3);return this}toArray(e=[],t=0){const n=this.coefficients;for(let i=0;i<9;i++)n[i].toArray(e,t+i*3);return e}static getBasisAt(e,t){const n=e.x,i=e.y,r=e.z;t[0]=.282095,t[1]=.488603*i,t[2]=.488603*r,t[3]=.488603*n,t[4]=1.092548*n*i,t[5]=1.092548*i*r,t[6]=.315392*(3*r*r-1),t[7]=1.092548*n*r,t[8]=.546274*(n*n-i*i)}}ml.prototype.isSphericalHarmonics3=!0;class Ns extends Ct{constructor(e=new ml,t=1){super(void 0,t),this.sh=e}copy(e){return super.copy(e),this.sh.copy(e.sh),this}fromJSON(e){return this.intensity=e.intensity,this.sh.fromArray(e.sh),this}toJSON(e){const t=super.toJSON(e);return t.object.sh=this.sh.toArray(),t}}Ns.prototype.isLightProbe=!0;class $m{static decodeText(e){if(typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,i=e.length;n<i;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.substr(0,t+1)}}class Qm extends Fe{constructor(){super(),this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}clone(){return new this.constructor().copy(this)}toJSON(){const e=super.toJSON(this);return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}}Qm.prototype.isInstancedBufferGeometry=!0;class Km extends $e{constructor(e,t,n,i){typeof n=="number"&&(i=n,n=!1,console.error("THREE.InstancedBufferAttribute: The constructor now expects normalized as the third argument.")),super(e,t,n),this.meshPerAttribute=i||1}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}Km.prototype.isInstancedBufferAttribute=!0;class eg extends tn{constructor(e){super(e),typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,a=Bn.get(e);if(a!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0),a;const o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader,fetch(e,o).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(l){Bn.add(e,l),t&&t(l),r.manager.itemEnd(e)}).catch(function(l){i&&i(l),r.manager.itemError(e),r.manager.itemEnd(e)}),r.manager.itemStart(e)}}eg.prototype.isImageBitmapLoader=!0;let Ji;const tg={getContext:function(){return Ji===void 0&&(Ji=new(window.AudioContext||window.webkitAudioContext)),Ji},setContext:function(s){Ji=s}};class ng extends tn{constructor(e){super(e)}load(e,t,n,i){const r=this,a=new Nm(this.manager);a.setResponseType("arraybuffer"),a.setPath(this.path),a.setRequestHeader(this.requestHeader),a.setWithCredentials(this.withCredentials),a.load(e,function(o){try{const l=o.slice(0);tg.getContext().decodeAudioData(l,function(h){t(h)})}catch(l){i?i(l):console.error(l),r.manager.itemError(e)}},n,i)}}class ig extends Ns{constructor(e,t,n=1){super(void 0,n);const i=new he().set(e),r=new he().set(t),a=new b(i.r,i.g,i.b),o=new b(r.r,r.g,r.b),l=Math.sqrt(Math.PI),c=l*Math.sqrt(.75);this.sh.coefficients[0].copy(a).add(o).multiplyScalar(l),this.sh.coefficients[1].copy(a).sub(o).multiplyScalar(c)}}ig.prototype.isHemisphereLightProbe=!0;class rg extends Ns{constructor(e,t=1){super(void 0,t);const n=new he().set(e);this.sh.coefficients[0].set(n.r,n.g,n.b).multiplyScalar(2*Math.sqrt(Math.PI))}}rg.prototype.isAmbientLightProbe=!0;class sg{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=so(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=so();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function so(){return(typeof performance>"u"?Date:performance).now()}class ag extends Pe{constructor(e){super(),this.type="Audio",this.listener=e,this.context=e.context,this.gain=this.context.createGain(),this.gain.connect(e.getInput()),this.autoplay=!1,this.buffer=null,this.detune=0,this.loop=!1,this.loopStart=0,this.loopEnd=0,this.offset=0,this.duration=void 0,this.playbackRate=1,this.isPlaying=!1,this.hasPlaybackControl=!0,this.source=null,this.sourceType="empty",this._startedAt=0,this._progress=0,this._connected=!1,this.filters=[]}getOutput(){return this.gain}setNodeSource(e){return this.hasPlaybackControl=!1,this.sourceType="audioNode",this.source=e,this.connect(),this}setMediaElementSource(e){return this.hasPlaybackControl=!1,this.sourceType="mediaNode",this.source=this.context.createMediaElementSource(e),this.connect(),this}setMediaStreamSource(e){return this.hasPlaybackControl=!1,this.sourceType="mediaStreamNode",this.source=this.context.createMediaStreamSource(e),this.connect(),this}setBuffer(e){return this.buffer=e,this.sourceType="buffer",this.autoplay&&this.play(),this}play(e=0){if(this.isPlaying===!0){console.warn("THREE.Audio: Audio is already playing.");return}if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}this._startedAt=this.context.currentTime+e;const t=this.context.createBufferSource();return t.buffer=this.buffer,t.loop=this.loop,t.loopStart=this.loopStart,t.loopEnd=this.loopEnd,t.onended=this.onEnded.bind(this),t.start(this._startedAt,this._progress+this.offset,this.duration),this.isPlaying=!0,this.source=t,this.setDetune(this.detune),this.setPlaybackRate(this.playbackRate),this.connect()}pause(){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.isPlaying===!0&&(this._progress+=Math.max(this.context.currentTime-this._startedAt,0)*this.playbackRate,this.loop===!0&&(this._progress=this._progress%(this.duration||this.buffer.duration)),this.source.stop(),this.source.onended=null,this.isPlaying=!1),this}stop(){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this._progress=0,this.source.stop(),this.source.onended=null,this.isPlaying=!1,this}connect(){if(this.filters.length>0){this.source.connect(this.filters[0]);for(let e=1,t=this.filters.length;e<t;e++)this.filters[e-1].connect(this.filters[e]);this.filters[this.filters.length-1].connect(this.getOutput())}else this.source.connect(this.getOutput());return this._connected=!0,this}disconnect(){if(this.filters.length>0){this.source.disconnect(this.filters[0]);for(let e=1,t=this.filters.length;e<t;e++)this.filters[e-1].disconnect(this.filters[e]);this.filters[this.filters.length-1].disconnect(this.getOutput())}else this.source.disconnect(this.getOutput());return this._connected=!1,this}getFilters(){return this.filters}setFilters(e){return e||(e=[]),this._connected===!0?(this.disconnect(),this.filters=e.slice(),this.connect()):this.filters=e.slice(),this}setDetune(e){if(this.detune=e,this.source.detune!==void 0)return this.isPlaying===!0&&this.source.detune.setTargetAtTime(this.detune,this.context.currentTime,.01),this}getDetune(){return this.detune}getFilter(){return this.getFilters()[0]}setFilter(e){return this.setFilters(e?[e]:[])}setPlaybackRate(e){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.playbackRate=e,this.isPlaying===!0&&this.source.playbackRate.setTargetAtTime(this.playbackRate,this.context.currentTime,.01),this}getPlaybackRate(){return this.playbackRate}onEnded(){this.isPlaying=!1}getLoop(){return this.hasPlaybackControl===!1?(console.warn("THREE.Audio: this Audio has no playback control."),!1):this.loop}setLoop(e){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.loop=e,this.isPlaying===!0&&(this.source.loop=this.loop),this}setLoopStart(e){return this.loopStart=e,this}setLoopEnd(e){return this.loopEnd=e,this}getVolume(){return this.gain.gain.value}setVolume(e){return this.gain.gain.setTargetAtTime(e,this.context.currentTime,.01),this}}class og{constructor(e,t,n){this.binding=e,this.valueSize=n;let i,r,a;switch(t){case"quaternion":i=this._slerp,r=this._slerpAdditive,a=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":i=this._select,r=this._select,a=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:i=this._lerp,r=this._lerpAdditive,a=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=i,this._mixBufferRegionAdditive=r,this._setIdentity=a,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){const n=this.buffer,i=this.valueSize,r=e*i+i;let a=this.cumulativeWeight;if(a===0){for(let o=0;o!==i;++o)n[r+o]=n[o];a=t}else{a+=t;const o=t/a;this._mixBufferRegion(n,r,0,o,i)}this.cumulativeWeight=a}accumulateAdditive(e){const t=this.buffer,n=this.valueSize,i=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,i,0,e,n),this.cumulativeWeightAdditive+=e}apply(e){const t=this.valueSize,n=this.buffer,i=e*t+t,r=this.cumulativeWeight,a=this.cumulativeWeightAdditive,o=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,r<1){const l=t*this._origIndex;this._mixBufferRegion(n,i,l,1-r,t)}a>0&&this._mixBufferRegionAdditive(n,i,this._addIndex*t,1,t);for(let l=t,c=t+t;l!==c;++l)if(n[l]!==n[l+t]){o.setValue(n,i);break}}saveOriginalState(){const e=this.binding,t=this.buffer,n=this.valueSize,i=n*this._origIndex;e.getValue(t,i);for(let r=n,a=i;r!==a;++r)t[r]=t[i+r%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){const e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){const e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let n=e;n<t;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){const e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[t+n]=this.buffer[e+n]}_select(e,t,n,i,r){if(i>=.5)for(let a=0;a!==r;++a)e[t+a]=e[n+a]}_slerp(e,t,n,i){nt.slerpFlat(e,t,e,t,e,n,i)}_slerpAdditive(e,t,n,i,r){const a=this._workIndex*r;nt.multiplyQuaternionsFlat(e,a,e,t,e,n),nt.slerpFlat(e,t,e,t,e,a,i)}_lerp(e,t,n,i,r){const a=1-i;for(let o=0;o!==r;++o){const l=t+o;e[l]=e[l]*a+e[n+o]*i}}_lerpAdditive(e,t,n,i,r){for(let a=0;a!==r;++a){const o=t+a;e[o]=e[o]+e[n+a]*i}}}const Fs="\\[\\]\\.:\\/",lg=new RegExp("["+Fs+"]","g"),Os="[^"+Fs+"]",cg="[^"+Fs.replace("\\.","")+"]",hg=/((?:WC+[\/:])*)/.source.replace("WC",Os),ug=/(WCOD+)?/.source.replace("WCOD",cg),dg=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Os),fg=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Os),pg=new RegExp("^"+hg+ug+dg+fg+"$"),mg=["material","materials","bones"];class gg{constructor(e,t,n){const i=n||Ne.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class Ne{constructor(e,t,n){this.path=t,this.parsedPath=n||Ne.parseTrackName(t),this.node=Ne.findNode(e,this.parsedPath.nodeName)||e,this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new Ne.Composite(e,t,n):new Ne(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(lg,"")}static parseTrackName(e){const t=pg.exec(e);if(!t)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const r=n.nodeName.substring(i+1);mg.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(!t||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(r){for(let a=0;a<r.length;a++){const o=r[a];if(o.name===t||o.uuid===t)return o;const l=n(o.children);if(l)return l}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.node[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,i=t.propertyName;let r=t.propertyIndex;if(e||(e=Ne.findNode(this.rootNode,t.nodeName)||this.rootNode,this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.error("THREE.PropertyBinding: Trying to update node for track: "+this.path+" but it wasn't found.");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const a=e[i];if(a===void 0){const c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(e.geometry.isBufferGeometry){if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}else{console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences on THREE.Geometry. Use THREE.BufferGeometry instead.",this);return}}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}Ne.Composite=gg;Ne.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ne.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ne.prototype.GetterByBindingType=[Ne.prototype._getValue_direct,Ne.prototype._getValue_array,Ne.prototype._getValue_arrayElement,Ne.prototype._getValue_toArray];Ne.prototype.SetterByBindingTypeAndVersioning=[[Ne.prototype._setValue_direct,Ne.prototype._setValue_direct_setNeedsUpdate,Ne.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ne.prototype._setValue_array,Ne.prototype._setValue_array_setNeedsUpdate,Ne.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ne.prototype._setValue_arrayElement,Ne.prototype._setValue_arrayElement_setNeedsUpdate,Ne.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ne.prototype._setValue_fromArray,Ne.prototype._setValue_fromArray_setNeedsUpdate,Ne.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class vg{constructor(e,t,n=null,i=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=n,this.blendMode=i;const r=t.tracks,a=r.length,o=new Array(a),l={endingStart:Pn,endingEnd:Pn};for(let c=0;c!==a;++c){const h=r[c].createInterpolant(null);o[c]=h,h.settings=l}this._interpolantSettings=l,this._interpolants=o,this._propertyBindings=new Array(a),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=Vc,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,n){if(e.fadeOut(t),this.fadeIn(t),n){const i=this._clip.duration,r=e._clip.duration,a=r/i,o=i/r;e.warp(1,a,t),this.warp(o,1,t)}return this}crossFadeTo(e,t,n){return e.crossFadeFrom(this,t,n)}stopFading(){const e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,n){const i=this._mixer,r=i.time,a=this.timeScale;let o=this._timeScaleInterpolant;o===null&&(o=i._lendControlInterpolant(),this._timeScaleInterpolant=o);const l=o.parameterPositions,c=o.sampleValues;return l[0]=r,l[1]=r+n,c[0]=e/a,c[1]=t/a,this}stopWarping(){const e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,n,i){if(!this.enabled){this._updateWeight(e);return}const r=this._startTime;if(r!==null){const l=(e-r)*n;if(l<0||n===0)return;this._startTime=null,t=n*l}t*=this._updateTimeScale(e);const a=this._updateTime(t),o=this._updateWeight(e);if(o>0){const l=this._interpolants,c=this._propertyBindings;switch(this.blendMode){case _o:for(let h=0,u=l.length;h!==u;++h)l[h].evaluate(a),c[h].accumulateAdditive(o);break;case ys:default:for(let h=0,u=l.length;h!==u;++h)l[h].evaluate(a),c[h].accumulate(i,o)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;const n=this._weightInterpolant;if(n!==null){const i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopFading(),i===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;const n=this._timeScaleInterpolant;if(n!==null){const i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopWarping(),t===0?this.paused=!0:this.timeScale=t)}}return this._effectiveTimeScale=t,t}_updateTime(e){const t=this._clip.duration,n=this.loop;let i=this.time+e,r=this._loopCount;const a=n===Wc;if(e===0)return r===-1?i:a&&(r&1)===1?t-i:i;if(n===kc){r===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(i>=t)i=t;else if(i<0)i=0;else{this.time=i;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(r===-1&&(e>=0?(r=0,this._setEndings(!0,this.repetitions===0,a)):this._setEndings(this.repetitions===0,!0,a)),i>=t||i<0){const o=Math.floor(i/t);i-=t*o,r+=Math.abs(o);const l=this.repetitions-r;if(l<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,i=e>0?t:0,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(l===1){const c=e<0;this._setEndings(c,!c,a)}else this._setEndings(!1,!1,a);this._loopCount=r,this.time=i,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:o})}}else this.time=i;if(a&&(r&1)===1)return t-i}return i}_setEndings(e,t,n){const i=this._interpolantSettings;n?(i.endingStart=In,i.endingEnd=In):(e?i.endingStart=this.zeroSlopeAtStart?In:Pn:i.endingStart=ir,t?i.endingEnd=this.zeroSlopeAtEnd?In:Pn:i.endingEnd=ir)}_scheduleFading(e,t,n){const i=this._mixer,r=i.time;let a=this._weightInterpolant;a===null&&(a=i._lendControlInterpolant(),this._weightInterpolant=a);const o=a.parameterPositions,l=a.sampleValues;return o[0]=r,l[0]=t,o[1]=r+e,l[1]=n,this}}class xg extends en{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(e,t){const n=e._localRoot||this._root,i=e._clip.tracks,r=i.length,a=e._propertyBindings,o=e._interpolants,l=n.uuid,c=this._bindingsByRootAndName;let h=c[l];h===void 0&&(h={},c[l]=h);for(let u=0;u!==r;++u){const d=i[u],f=d.name;let m=h[f];if(m!==void 0)a[u]=m;else{if(m=a[u],m!==void 0){m._cacheIndex===null&&(++m.referenceCount,this._addInactiveBinding(m,l,f));continue}const v=t&&t._propertyBindings[u].binding.parsedPath;m=new og(Ne.create(n,f,v),d.ValueTypeName,d.getValueSize()),++m.referenceCount,this._addInactiveBinding(m,l,f),a[u]=m}o[u].resultBuffer=m.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){const n=(e._localRoot||this._root).uuid,i=e._clip.uuid,r=this._actionsByClip[i];this._bindAction(e,r&&r.knownActions[0]),this._addInactiveAction(e,i,n)}const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const r=t[n];r.useCount++===0&&(this._lendBinding(r),r.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const r=t[n];--r.useCount===0&&(r.restoreOriginalState(),this._takeBackBinding(r))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;const e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){const t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,n){const i=this._actions,r=this._actionsByClip;let a=r[t];if(a===void 0)a={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,r[t]=a;else{const o=a.knownActions;e._byClipCacheIndex=o.length,o.push(e)}e._cacheIndex=i.length,i.push(e),a.actionByRoot[n]=e}_removeInactiveAction(e){const t=this._actions,n=t[t.length-1],i=e._cacheIndex;n._cacheIndex=i,t[i]=n,t.pop(),e._cacheIndex=null;const r=e._clip.uuid,a=this._actionsByClip,o=a[r],l=o.knownActions,c=l[l.length-1],h=e._byClipCacheIndex;c._byClipCacheIndex=h,l[h]=c,l.pop(),e._byClipCacheIndex=null;const u=o.actionByRoot,d=(e._localRoot||this._root).uuid;delete u[d],l.length===0&&delete a[r],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const r=t[n];--r.referenceCount===0&&this._removeInactiveBinding(r)}}_lendAction(e){const t=this._actions,n=e._cacheIndex,i=this._nActiveActions++,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_takeBackAction(e){const t=this._actions,n=e._cacheIndex,i=--this._nActiveActions,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_addInactiveBinding(e,t,n){const i=this._bindingsByRootAndName,r=this._bindings;let a=i[t];a===void 0&&(a={},i[t]=a),a[n]=e,e._cacheIndex=r.length,r.push(e)}_removeInactiveBinding(e){const t=this._bindings,n=e.binding,i=n.rootNode.uuid,r=n.path,a=this._bindingsByRootAndName,o=a[i],l=t[t.length-1],c=e._cacheIndex;l._cacheIndex=c,t[c]=l,t.pop(),delete o[r],Object.keys(o).length===0&&delete a[i]}_lendBinding(e){const t=this._bindings,n=e._cacheIndex,i=this._nActiveBindings++,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_takeBackBinding(e){const t=this._bindings,n=e._cacheIndex,i=--this._nActiveBindings,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_lendControlInterpolant(){const e=this._controlInterpolants,t=this._nActiveControlInterpolants++;let n=e[t];return n===void 0&&(n=new nl(new Float32Array(2),new Float32Array(2),1,this._controlInterpolantsResultBuffer),n.__cacheIndex=t,e[t]=n),n}_takeBackControlInterpolant(e){const t=this._controlInterpolants,n=e.__cacheIndex,i=--this._nActiveControlInterpolants,r=t[i];e.__cacheIndex=i,t[i]=e,r.__cacheIndex=n,t[n]=r}clipAction(e,t,n){const i=t||this._root,r=i.uuid;let a=typeof e=="string"?Ka.findByName(i,e):e;const o=a!==null?a.uuid:e,l=this._actionsByClip[o];let c=null;if(n===void 0&&(a!==null?n=a.blendMode:n=ys),l!==void 0){const u=l.actionByRoot[r];if(u!==void 0&&u.blendMode===n)return u;c=l.knownActions[0],a===null&&(a=c._clip)}if(a===null)return null;const h=new vg(this,a,t,n);return this._bindAction(h,c),this._addInactiveAction(h,o,r),h}existingAction(e,t){const n=t||this._root,i=n.uuid,r=typeof e=="string"?Ka.findByName(n,e):e,a=r?r.uuid:e,o=this._actionsByClip[a];return o!==void 0&&o.actionByRoot[i]||null}stopAllAction(){const e=this._actions,t=this._nActiveActions;for(let n=t-1;n>=0;--n)e[n].stop();return this}update(e){e*=this.timeScale;const t=this._actions,n=this._nActiveActions,i=this.time+=e,r=Math.sign(e),a=this._accuIndex^=1;for(let c=0;c!==n;++c)t[c]._update(i,e,r,a);const o=this._bindings,l=this._nActiveBindings;for(let c=0;c!==l;++c)o[c].apply(a);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){const t=this._actions,n=e.uuid,i=this._actionsByClip,r=i[n];if(r!==void 0){const a=r.knownActions;for(let o=0,l=a.length;o!==l;++o){const c=a[o];this._deactivateAction(c);const h=c._cacheIndex,u=t[t.length-1];c._cacheIndex=null,c._byClipCacheIndex=null,u._cacheIndex=h,t[h]=u,t.pop(),this._removeInactiveBindingsForAction(c)}delete i[n]}}uncacheRoot(e){const t=e.uuid,n=this._actionsByClip;for(const a in n){const o=n[a].actionByRoot,l=o[t];l!==void 0&&(this._deactivateAction(l),this._removeInactiveAction(l))}const i=this._bindingsByRootAndName,r=i[t];if(r!==void 0)for(const a in r){const o=r[a];o.restoreOriginalState(),this._removeInactiveBinding(o)}}uncacheAction(e,t){const n=this.existingAction(e,t);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}}xg.prototype._controlInterpolantsResultBuffer=new Float32Array(1);class yg extends un{constructor(e,t,n=1){super(e,t),this.meshPerAttribute=n||1}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}clone(e){const t=super.clone(e);return t.meshPerAttribute=this.meshPerAttribute,t}toJSON(e){const t=super.toJSON(e);return t.isInstancedInterleavedBuffer=!0,t.meshPerAttribute=this.meshPerAttribute,t}}yg.prototype.isInstancedInterleavedBuffer=!0;class _g{constructor(e,t,n=0,i=1/0){this.ray=new hn(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new So,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t&&t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t&&t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!1,n=[]){return ds(e,this,n,t),n.sort(ao),n}intersectObjects(e,t=!1,n=[]){for(let i=0,r=e.length;i<r;i++)ds(e[i],this,n,t);return n.sort(ao),n}}function ao(s,e){return s.distance-e.distance}function ds(s,e,t,n){if(s.layers.test(e.layers)&&s.raycast(e,t),n===!0){const i=s.children;for(let r=0,a=i.length;r<a;r++)ds(i[r],e,t,!0)}}class oo{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(ot(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class Mg extends Pe{constructor(e){super(),this.material=e,this.render=function(){},this.hasPositions=!1,this.hasNormals=!1,this.hasColors=!1,this.hasUvs=!1,this.positionArray=null,this.normalArray=null,this.colorArray=null,this.uvArray=null,this.count=0}}Mg.prototype.isImmediateRenderObject=!0;const qt=new b,$i=new pe,Kr=new pe;class bg extends Ts{constructor(e){const t=gl(e),n=new Fe,i=[],r=[],a=new he(0,0,1),o=new he(0,1,0);for(let c=0;c<t.length;c++){const h=t[c];h.parent&&h.parent.isBone&&(i.push(0,0,0),i.push(0,0,0),r.push(a.r,a.g,a.b),r.push(o.r,o.g,o.b))}n.setAttribute("position",new ke(i,3)),n.setAttribute("color",new ke(r,3));const l=new Vn({vertexColors:!0,depthTest:!1,depthWrite:!1,toneMapped:!1,transparent:!0});super(n,l),this.type="SkeletonHelper",this.isSkeletonHelper=!0,this.root=e,this.bones=t,this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1}updateMatrixWorld(e){const t=this.bones,n=this.geometry,i=n.getAttribute("position");Kr.copy(this.root.matrixWorld).invert();for(let r=0,a=0;r<t.length;r++){const o=t[r];o.parent&&o.parent.isBone&&($i.multiplyMatrices(Kr,o.matrixWorld),qt.setFromMatrixPosition($i),i.setXYZ(a,qt.x,qt.y,qt.z),$i.multiplyMatrices(Kr,o.parent.matrixWorld),qt.setFromMatrixPosition($i),i.setXYZ(a+1,qt.x,qt.y,qt.z),a+=2)}n.getAttribute("position").needsUpdate=!0,super.updateMatrixWorld(e)}}function gl(s){const e=[];s&&s.isBone&&e.push(s);for(let t=0;t<s.children.length;t++)e.push.apply(e,gl(s.children[t]));return e}class wg extends Ts{constructor(e=10,t=10,n=4473924,i=8947848){n=new he(n),i=new he(i);const r=t/2,a=e/t,o=e/2,l=[],c=[];for(let d=0,f=0,m=-o;d<=t;d++,m+=a){l.push(-o,0,m,o,0,m),l.push(m,0,-o,m,0,o);const v=d===r?n:i;v.toArray(c,f),f+=3,v.toArray(c,f),f+=3,v.toArray(c,f),f+=3,v.toArray(c,f),f+=3}const h=new Fe;h.setAttribute("position",new ke(l,3)),h.setAttribute("color",new ke(c,3));const u=new Vn({vertexColors:!0,toneMapped:!1});super(h,u),this.type="GridHelper"}}const Sg=new Float32Array(1);new Int32Array(Sg.buffer);const Eg=new hr({side:Je,depthWrite:!1,depthTest:!1});new pt(new Ms,Eg);gt.create=function(s,e){return console.log("THREE.Curve.create() has been deprecated"),s.prototype=Object.create(gt.prototype),s.prototype.constructor=s,s.prototype.getPoint=e,s};us.prototype.fromPoints=function(s){return console.warn("THREE.Path: .fromPoints() has been renamed to .setFromPoints()."),this.setFromPoints(s)};wg.prototype.setColors=function(){console.error("THREE.GridHelper: setColors() has been deprecated, pass them in the constructor instead.")};bg.prototype.update=function(){console.error("THREE.SkeletonHelper: update() no longer needs to be called.")};tn.prototype.extractUrlBase=function(s){return console.warn("THREE.Loader: .extractUrlBase() has been deprecated. Use THREE.LoaderUtils.extractUrlBase() instead."),$m.extractUrlBase(s)};tn.Handlers={add:function(){console.error("THREE.Loader: Handlers.add() has been removed. Use LoadingManager.addHandler() instead.")},get:function(){console.error("THREE.Loader: Handlers.get() has been removed. Use LoadingManager.getHandler() instead.")}};vt.prototype.center=function(s){return console.warn("THREE.Box3: .center() has been renamed to .getCenter()."),this.getCenter(s)};vt.prototype.empty=function(){return console.warn("THREE.Box3: .empty() has been renamed to .isEmpty()."),this.isEmpty()};vt.prototype.isIntersectionBox=function(s){return console.warn("THREE.Box3: .isIntersectionBox() has been renamed to .intersectsBox()."),this.intersectsBox(s)};vt.prototype.isIntersectionSphere=function(s){return console.warn("THREE.Box3: .isIntersectionSphere() has been renamed to .intersectsSphere()."),this.intersectsSphere(s)};vt.prototype.size=function(s){return console.warn("THREE.Box3: .size() has been renamed to .getSize()."),this.getSize(s)};Hn.prototype.empty=function(){return console.warn("THREE.Sphere: .empty() has been renamed to .isEmpty()."),this.isEmpty()};dr.prototype.setFromMatrix=function(s){return console.warn("THREE.Frustum: .setFromMatrix() has been renamed to .setFromProjectionMatrix()."),this.setFromProjectionMatrix(s)};tt.prototype.flattenToArrayOffset=function(s,e){return console.warn("THREE.Matrix3: .flattenToArrayOffset() has been deprecated. Use .toArray() instead."),this.toArray(s,e)};tt.prototype.multiplyVector3=function(s){return console.warn("THREE.Matrix3: .multiplyVector3() has been removed. Use vector.applyMatrix3( matrix ) instead."),s.applyMatrix3(this)};tt.prototype.multiplyVector3Array=function(){console.error("THREE.Matrix3: .multiplyVector3Array() has been removed.")};tt.prototype.applyToBufferAttribute=function(s){return console.warn("THREE.Matrix3: .applyToBufferAttribute() has been removed. Use attribute.applyMatrix3( matrix ) instead."),s.applyMatrix3(this)};tt.prototype.applyToVector3Array=function(){console.error("THREE.Matrix3: .applyToVector3Array() has been removed.")};tt.prototype.getInverse=function(s){return console.warn("THREE.Matrix3: .getInverse() has been removed. Use matrixInv.copy( matrix ).invert(); instead."),this.copy(s).invert()};pe.prototype.extractPosition=function(s){return console.warn("THREE.Matrix4: .extractPosition() has been renamed to .copyPosition()."),this.copyPosition(s)};pe.prototype.flattenToArrayOffset=function(s,e){return console.warn("THREE.Matrix4: .flattenToArrayOffset() has been deprecated. Use .toArray() instead."),this.toArray(s,e)};pe.prototype.getPosition=function(){return console.warn("THREE.Matrix4: .getPosition() has been removed. Use Vector3.setFromMatrixPosition( matrix ) instead."),new b().setFromMatrixColumn(this,3)};pe.prototype.setRotationFromQuaternion=function(s){return console.warn("THREE.Matrix4: .setRotationFromQuaternion() has been renamed to .makeRotationFromQuaternion()."),this.makeRotationFromQuaternion(s)};pe.prototype.multiplyToArray=function(){console.warn("THREE.Matrix4: .multiplyToArray() has been removed.")};pe.prototype.multiplyVector3=function(s){return console.warn("THREE.Matrix4: .multiplyVector3() has been removed. Use vector.applyMatrix4( matrix ) instead."),s.applyMatrix4(this)};pe.prototype.multiplyVector4=function(s){return console.warn("THREE.Matrix4: .multiplyVector4() has been removed. Use vector.applyMatrix4( matrix ) instead."),s.applyMatrix4(this)};pe.prototype.multiplyVector3Array=function(){console.error("THREE.Matrix4: .multiplyVector3Array() has been removed.")};pe.prototype.rotateAxis=function(s){console.warn("THREE.Matrix4: .rotateAxis() has been removed. Use Vector3.transformDirection( matrix ) instead."),s.transformDirection(this)};pe.prototype.crossVector=function(s){return console.warn("THREE.Matrix4: .crossVector() has been removed. Use vector.applyMatrix4( matrix ) instead."),s.applyMatrix4(this)};pe.prototype.translate=function(){console.error("THREE.Matrix4: .translate() has been removed.")};pe.prototype.rotateX=function(){console.error("THREE.Matrix4: .rotateX() has been removed.")};pe.prototype.rotateY=function(){console.error("THREE.Matrix4: .rotateY() has been removed.")};pe.prototype.rotateZ=function(){console.error("THREE.Matrix4: .rotateZ() has been removed.")};pe.prototype.rotateByAxis=function(){console.error("THREE.Matrix4: .rotateByAxis() has been removed.")};pe.prototype.applyToBufferAttribute=function(s){return console.warn("THREE.Matrix4: .applyToBufferAttribute() has been removed. Use attribute.applyMatrix4( matrix ) instead."),s.applyMatrix4(this)};pe.prototype.applyToVector3Array=function(){console.error("THREE.Matrix4: .applyToVector3Array() has been removed.")};pe.prototype.makeFrustum=function(s,e,t,n,i,r){return console.warn("THREE.Matrix4: .makeFrustum() has been removed. Use .makePerspective( left, right, top, bottom, near, far ) instead."),this.makePerspective(s,e,n,t,i,r)};pe.prototype.getInverse=function(s){return console.warn("THREE.Matrix4: .getInverse() has been removed. Use matrixInv.copy( matrix ).invert(); instead."),this.copy(s).invert()};Lt.prototype.isIntersectionLine=function(s){return console.warn("THREE.Plane: .isIntersectionLine() has been renamed to .intersectsLine()."),this.intersectsLine(s)};nt.prototype.multiplyVector3=function(s){return console.warn("THREE.Quaternion: .multiplyVector3() has been removed. Use is now vector.applyQuaternion( quaternion ) instead."),s.applyQuaternion(this)};nt.prototype.inverse=function(){return console.warn("THREE.Quaternion: .inverse() has been renamed to invert()."),this.invert()};hn.prototype.isIntersectionBox=function(s){return console.warn("THREE.Ray: .isIntersectionBox() has been renamed to .intersectsBox()."),this.intersectsBox(s)};hn.prototype.isIntersectionPlane=function(s){return console.warn("THREE.Ray: .isIntersectionPlane() has been renamed to .intersectsPlane()."),this.intersectsPlane(s)};hn.prototype.isIntersectionSphere=function(s){return console.warn("THREE.Ray: .isIntersectionSphere() has been renamed to .intersectsSphere()."),this.intersectsSphere(s)};je.prototype.area=function(){return console.warn("THREE.Triangle: .area() has been renamed to .getArea()."),this.getArea()};je.prototype.barycoordFromPoint=function(s,e){return console.warn("THREE.Triangle: .barycoordFromPoint() has been renamed to .getBarycoord()."),this.getBarycoord(s,e)};je.prototype.midpoint=function(s){return console.warn("THREE.Triangle: .midpoint() has been renamed to .getMidpoint()."),this.getMidpoint(s)};je.prototypenormal=function(s){return console.warn("THREE.Triangle: .normal() has been renamed to .getNormal()."),this.getNormal(s)};je.prototype.plane=function(s){return console.warn("THREE.Triangle: .plane() has been renamed to .getPlane()."),this.getPlane(s)};je.barycoordFromPoint=function(s,e,t,n,i){return console.warn("THREE.Triangle: .barycoordFromPoint() has been renamed to .getBarycoord()."),je.getBarycoord(s,e,t,n,i)};je.normal=function(s,e,t,n){return console.warn("THREE.Triangle: .normal() has been renamed to .getNormal()."),je.getNormal(s,e,t,n)};Is.prototype.extractAllPoints=function(s){return console.warn("THREE.Shape: .extractAllPoints() has been removed. Use .extractPoints() instead."),this.extractPoints(s)};Is.prototype.extrude=function(s){return console.warn("THREE.Shape: .extrude() has been removed. Use ExtrudeGeometry() instead."),new mr(this,s)};Is.prototype.makeGeometry=function(s){return console.warn("THREE.Shape: .makeGeometry() has been removed. Use ShapeGeometry() instead."),new gm(this,s)};Z.prototype.fromAttribute=function(s,e,t){return console.warn("THREE.Vector2: .fromAttribute() has been renamed to .fromBufferAttribute()."),this.fromBufferAttribute(s,e,t)};Z.prototype.distanceToManhattan=function(s){return console.warn("THREE.Vector2: .distanceToManhattan() has been renamed to .manhattanDistanceTo()."),this.manhattanDistanceTo(s)};Z.prototype.lengthManhattan=function(){return console.warn("THREE.Vector2: .lengthManhattan() has been renamed to .manhattanLength()."),this.manhattanLength()};b.prototype.setEulerFromRotationMatrix=function(){console.error("THREE.Vector3: .setEulerFromRotationMatrix() has been removed. Use Euler.setFromRotationMatrix() instead.")};b.prototype.setEulerFromQuaternion=function(){console.error("THREE.Vector3: .setEulerFromQuaternion() has been removed. Use Euler.setFromQuaternion() instead.")};b.prototype.getPositionFromMatrix=function(s){return console.warn("THREE.Vector3: .getPositionFromMatrix() has been renamed to .setFromMatrixPosition()."),this.setFromMatrixPosition(s)};b.prototype.getScaleFromMatrix=function(s){return console.warn("THREE.Vector3: .getScaleFromMatrix() has been renamed to .setFromMatrixScale()."),this.setFromMatrixScale(s)};b.prototype.getColumnFromMatrix=function(s,e){return console.warn("THREE.Vector3: .getColumnFromMatrix() has been renamed to .setFromMatrixColumn()."),this.setFromMatrixColumn(e,s)};b.prototype.applyProjection=function(s){return console.warn("THREE.Vector3: .applyProjection() has been removed. Use .applyMatrix4( m ) instead."),this.applyMatrix4(s)};b.prototype.fromAttribute=function(s,e,t){return console.warn("THREE.Vector3: .fromAttribute() has been renamed to .fromBufferAttribute()."),this.fromBufferAttribute(s,e,t)};b.prototype.distanceToManhattan=function(s){return console.warn("THREE.Vector3: .distanceToManhattan() has been renamed to .manhattanDistanceTo()."),this.manhattanDistanceTo(s)};b.prototype.lengthManhattan=function(){return console.warn("THREE.Vector3: .lengthManhattan() has been renamed to .manhattanLength()."),this.manhattanLength()};Oe.prototype.fromAttribute=function(s,e,t){return console.warn("THREE.Vector4: .fromAttribute() has been renamed to .fromBufferAttribute()."),this.fromBufferAttribute(s,e,t)};Oe.prototype.lengthManhattan=function(){return console.warn("THREE.Vector4: .lengthManhattan() has been renamed to .manhattanLength()."),this.manhattanLength()};Pe.prototype.getChildByName=function(s){return console.warn("THREE.Object3D: .getChildByName() has been renamed to .getObjectByName()."),this.getObjectByName(s)};Pe.prototype.renderDepth=function(){console.warn("THREE.Object3D: .renderDepth has been removed. Use .renderOrder, instead.")};Pe.prototype.translate=function(s,e){return console.warn("THREE.Object3D: .translate() has been removed. Use .translateOnAxis( axis, distance ) instead."),this.translateOnAxis(e,s)};Pe.prototype.getWorldRotation=function(){console.error("THREE.Object3D: .getWorldRotation() has been removed. Use THREE.Object3D.getWorldQuaternion( target ) instead.")};Pe.prototype.applyMatrix=function(s){return console.warn("THREE.Object3D: .applyMatrix() has been renamed to .applyMatrix4()."),this.applyMatrix4(s)};Object.defineProperties(Pe.prototype,{eulerOrder:{get:function(){return console.warn("THREE.Object3D: .eulerOrder is now .rotation.order."),this.rotation.order},set:function(s){console.warn("THREE.Object3D: .eulerOrder is now .rotation.order."),this.rotation.order=s}},useQuaternion:{get:function(){console.warn("THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default.")},set:function(){console.warn("THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default.")}}});pt.prototype.setDrawMode=function(){console.error("THREE.Mesh: .setDrawMode() has been removed. The renderer now always assumes THREE.TrianglesDrawMode. Transform your geometry via BufferGeometryUtils.toTrianglesDrawMode() if necessary.")};Object.defineProperties(pt.prototype,{drawMode:{get:function(){return console.error("THREE.Mesh: .drawMode has been removed. The renderer now always assumes THREE.TrianglesDrawMode."),Xc},set:function(){console.error("THREE.Mesh: .drawMode has been removed. The renderer now always assumes THREE.TrianglesDrawMode. Transform your geometry via BufferGeometryUtils.toTrianglesDrawMode() if necessary.")}}});Yo.prototype.initBones=function(){console.error("THREE.SkinnedMesh: initBones() has been removed.")};ut.prototype.setLens=function(s,e){console.warn("THREE.PerspectiveCamera.setLens is deprecated. Use .setFocalLength and .filmGauge for a photographic setup."),e!==void 0&&(this.filmGauge=e),this.setFocalLength(s)};Object.defineProperties(Ct.prototype,{onlyShadow:{set:function(){console.warn("THREE.Light: .onlyShadow has been removed.")}},shadowCameraFov:{set:function(s){console.warn("THREE.Light: .shadowCameraFov is now .shadow.camera.fov."),this.shadow.camera.fov=s}},shadowCameraLeft:{set:function(s){console.warn("THREE.Light: .shadowCameraLeft is now .shadow.camera.left."),this.shadow.camera.left=s}},shadowCameraRight:{set:function(s){console.warn("THREE.Light: .shadowCameraRight is now .shadow.camera.right."),this.shadow.camera.right=s}},shadowCameraTop:{set:function(s){console.warn("THREE.Light: .shadowCameraTop is now .shadow.camera.top."),this.shadow.camera.top=s}},shadowCameraBottom:{set:function(s){console.warn("THREE.Light: .shadowCameraBottom is now .shadow.camera.bottom."),this.shadow.camera.bottom=s}},shadowCameraNear:{set:function(s){console.warn("THREE.Light: .shadowCameraNear is now .shadow.camera.near."),this.shadow.camera.near=s}},shadowCameraFar:{set:function(s){console.warn("THREE.Light: .shadowCameraFar is now .shadow.camera.far."),this.shadow.camera.far=s}},shadowCameraVisible:{set:function(){console.warn("THREE.Light: .shadowCameraVisible has been removed. Use new THREE.CameraHelper( light.shadow.camera ) instead.")}},shadowBias:{set:function(s){console.warn("THREE.Light: .shadowBias is now .shadow.bias."),this.shadow.bias=s}},shadowDarkness:{set:function(){console.warn("THREE.Light: .shadowDarkness has been removed.")}},shadowMapWidth:{set:function(s){console.warn("THREE.Light: .shadowMapWidth is now .shadow.mapSize.width."),this.shadow.mapSize.width=s}},shadowMapHeight:{set:function(s){console.warn("THREE.Light: .shadowMapHeight is now .shadow.mapSize.height."),this.shadow.mapSize.height=s}}});Object.defineProperties($e.prototype,{length:{get:function(){return console.warn("THREE.BufferAttribute: .length has been deprecated. Use .count instead."),this.array.length}},dynamic:{get:function(){return console.warn("THREE.BufferAttribute: .dynamic has been deprecated. Use .usage instead."),this.usage===rr},set:function(){console.warn("THREE.BufferAttribute: .dynamic has been deprecated. Use .usage instead."),this.setUsage(rr)}}});$e.prototype.setDynamic=function(s){return console.warn("THREE.BufferAttribute: .setDynamic() has been deprecated. Use .setUsage() instead."),this.setUsage(s===!0?rr:pi),this};$e.prototype.copyIndicesArray=function(){console.error("THREE.BufferAttribute: .copyIndicesArray() has been removed.")},$e.prototype.setArray=function(){console.error("THREE.BufferAttribute: .setArray has been removed. Use BufferGeometry .setAttribute to replace/resize attribute buffers")};Fe.prototype.addIndex=function(s){console.warn("THREE.BufferGeometry: .addIndex() has been renamed to .setIndex()."),this.setIndex(s)};Fe.prototype.addAttribute=function(s,e){return console.warn("THREE.BufferGeometry: .addAttribute() has been renamed to .setAttribute()."),!(e&&e.isBufferAttribute)&&!(e&&e.isInterleavedBufferAttribute)?(console.warn("THREE.BufferGeometry: .addAttribute() now expects ( name, attribute )."),this.setAttribute(s,new $e(arguments[1],arguments[2]))):s==="index"?(console.warn("THREE.BufferGeometry.addAttribute: Use .setIndex() for index attribute."),this.setIndex(e),this):this.setAttribute(s,e)};Fe.prototype.addDrawCall=function(s,e,t){t!==void 0&&console.warn("THREE.BufferGeometry: .addDrawCall() no longer supports indexOffset."),console.warn("THREE.BufferGeometry: .addDrawCall() is now .addGroup()."),this.addGroup(s,e)};Fe.prototype.clearDrawCalls=function(){console.warn("THREE.BufferGeometry: .clearDrawCalls() is now .clearGroups()."),this.clearGroups()};Fe.prototype.computeOffsets=function(){console.warn("THREE.BufferGeometry: .computeOffsets() has been removed.")};Fe.prototype.removeAttribute=function(s){return console.warn("THREE.BufferGeometry: .removeAttribute() has been renamed to .deleteAttribute()."),this.deleteAttribute(s)};Fe.prototype.applyMatrix=function(s){return console.warn("THREE.BufferGeometry: .applyMatrix() has been renamed to .applyMatrix4()."),this.applyMatrix4(s)};Object.defineProperties(Fe.prototype,{drawcalls:{get:function(){return console.error("THREE.BufferGeometry: .drawcalls has been renamed to .groups."),this.groups}},offsets:{get:function(){return console.warn("THREE.BufferGeometry: .offsets has been renamed to .groups."),this.groups}}});un.prototype.setDynamic=function(s){return console.warn("THREE.InterleavedBuffer: .setDynamic() has been deprecated. Use .setUsage() instead."),this.setUsage(s===!0?rr:pi),this};un.prototype.setArray=function(){console.error("THREE.InterleavedBuffer: .setArray has been removed. Use BufferGeometry .setAttribute to replace/resize attribute buffers")};mr.prototype.getArrays=function(){console.error("THREE.ExtrudeGeometry: .getArrays() has been removed.")};mr.prototype.addShapeList=function(){console.error("THREE.ExtrudeGeometry: .addShapeList() has been removed.")};mr.prototype.addShape=function(){console.error("THREE.ExtrudeGeometry: .addShape() has been removed.")};Ss.prototype.dispose=function(){console.error("THREE.Scene: .dispose() has been removed.")};Object.defineProperties(Qe.prototype,{wrapAround:{get:function(){console.warn("THREE.Material: .wrapAround has been removed.")},set:function(){console.warn("THREE.Material: .wrapAround has been removed.")}},overdraw:{get:function(){console.warn("THREE.Material: .overdraw has been removed.")},set:function(){console.warn("THREE.Material: .overdraw has been removed.")}},wrapRGB:{get:function(){return console.warn("THREE.Material: .wrapRGB has been removed."),new he}},shading:{get:function(){console.error("THREE."+this.type+": .shading has been removed. Use the boolean .flatShading instead.")},set:function(s){console.warn("THREE."+this.type+": .shading has been removed. Use the boolean .flatShading instead."),this.flatShading=s===go}},stencilMask:{get:function(){return console.warn("THREE."+this.type+": .stencilMask has been removed. Use .stencilFuncMask instead."),this.stencilFuncMask},set:function(s){console.warn("THREE."+this.type+": .stencilMask has been removed. Use .stencilFuncMask instead."),this.stencilFuncMask=s}}});Object.defineProperties($t.prototype,{derivatives:{get:function(){return console.warn("THREE.ShaderMaterial: .derivatives has been moved to .extensions.derivatives."),this.extensions.derivatives},set:function(s){console.warn("THREE. ShaderMaterial: .derivatives has been moved to .extensions.derivatives."),this.extensions.derivatives=s}}});Be.prototype.clearTarget=function(s,e,t,n){console.warn("THREE.WebGLRenderer: .clearTarget() has been deprecated. Use .setRenderTarget() and .clear() instead."),this.setRenderTarget(s),this.clear(e,t,n)};Be.prototype.animate=function(s){console.warn("THREE.WebGLRenderer: .animate() is now .setAnimationLoop()."),this.setAnimationLoop(s)};Be.prototype.getCurrentRenderTarget=function(){return console.warn("THREE.WebGLRenderer: .getCurrentRenderTarget() is now .getRenderTarget()."),this.getRenderTarget()};Be.prototype.getMaxAnisotropy=function(){return console.warn("THREE.WebGLRenderer: .getMaxAnisotropy() is now .capabilities.getMaxAnisotropy()."),this.capabilities.getMaxAnisotropy()};Be.prototype.getPrecision=function(){return console.warn("THREE.WebGLRenderer: .getPrecision() is now .capabilities.precision."),this.capabilities.precision};Be.prototype.resetGLState=function(){return console.warn("THREE.WebGLRenderer: .resetGLState() is now .state.reset()."),this.state.reset()};Be.prototype.supportsFloatTextures=function(){return console.warn("THREE.WebGLRenderer: .supportsFloatTextures() is now .extensions.get( 'OES_texture_float' )."),this.extensions.get("OES_texture_float")};Be.prototype.supportsHalfFloatTextures=function(){return console.warn("THREE.WebGLRenderer: .supportsHalfFloatTextures() is now .extensions.get( 'OES_texture_half_float' )."),this.extensions.get("OES_texture_half_float")};Be.prototype.supportsStandardDerivatives=function(){return console.warn("THREE.WebGLRenderer: .supportsStandardDerivatives() is now .extensions.get( 'OES_standard_derivatives' )."),this.extensions.get("OES_standard_derivatives")};Be.prototype.supportsCompressedTextureS3TC=function(){return console.warn("THREE.WebGLRenderer: .supportsCompressedTextureS3TC() is now .extensions.get( 'WEBGL_compressed_texture_s3tc' )."),this.extensions.get("WEBGL_compressed_texture_s3tc")};Be.prototype.supportsCompressedTexturePVRTC=function(){return console.warn("THREE.WebGLRenderer: .supportsCompressedTexturePVRTC() is now .extensions.get( 'WEBGL_compressed_texture_pvrtc' )."),this.extensions.get("WEBGL_compressed_texture_pvrtc")};Be.prototype.supportsBlendMinMax=function(){return console.warn("THREE.WebGLRenderer: .supportsBlendMinMax() is now .extensions.get( 'EXT_blend_minmax' )."),this.extensions.get("EXT_blend_minmax")};Be.prototype.supportsVertexTextures=function(){return console.warn("THREE.WebGLRenderer: .supportsVertexTextures() is now .capabilities.vertexTextures."),this.capabilities.vertexTextures};Be.prototype.supportsInstancedArrays=function(){return console.warn("THREE.WebGLRenderer: .supportsInstancedArrays() is now .extensions.get( 'ANGLE_instanced_arrays' )."),this.extensions.get("ANGLE_instanced_arrays")};Be.prototype.enableScissorTest=function(s){console.warn("THREE.WebGLRenderer: .enableScissorTest() is now .setScissorTest()."),this.setScissorTest(s)};Be.prototype.initMaterial=function(){console.warn("THREE.WebGLRenderer: .initMaterial() has been removed.")};Be.prototype.addPrePlugin=function(){console.warn("THREE.WebGLRenderer: .addPrePlugin() has been removed.")};Be.prototype.addPostPlugin=function(){console.warn("THREE.WebGLRenderer: .addPostPlugin() has been removed.")};Be.prototype.updateShadowMap=function(){console.warn("THREE.WebGLRenderer: .updateShadowMap() has been removed.")};Be.prototype.setFaceCulling=function(){console.warn("THREE.WebGLRenderer: .setFaceCulling() has been removed.")};Be.prototype.allocTextureUnit=function(){console.warn("THREE.WebGLRenderer: .allocTextureUnit() has been removed.")};Be.prototype.setTexture=function(){console.warn("THREE.WebGLRenderer: .setTexture() has been removed.")};Be.prototype.setTexture2D=function(){console.warn("THREE.WebGLRenderer: .setTexture2D() has been removed.")};Be.prototype.setTextureCube=function(){console.warn("THREE.WebGLRenderer: .setTextureCube() has been removed.")};Be.prototype.getActiveMipMapLevel=function(){return console.warn("THREE.WebGLRenderer: .getActiveMipMapLevel() is now .getActiveMipmapLevel()."),this.getActiveMipmapLevel()};Object.defineProperties(Be.prototype,{shadowMapEnabled:{get:function(){return this.shadowMap.enabled},set:function(s){console.warn("THREE.WebGLRenderer: .shadowMapEnabled is now .shadowMap.enabled."),this.shadowMap.enabled=s}},shadowMapType:{get:function(){return this.shadowMap.type},set:function(s){console.warn("THREE.WebGLRenderer: .shadowMapType is now .shadowMap.type."),this.shadowMap.type=s}},shadowMapCullFace:{get:function(){console.warn("THREE.WebGLRenderer: .shadowMapCullFace has been removed. Set Material.shadowSide instead.")},set:function(){console.warn("THREE.WebGLRenderer: .shadowMapCullFace has been removed. Set Material.shadowSide instead.")}},context:{get:function(){return console.warn("THREE.WebGLRenderer: .context has been removed. Use .getContext() instead."),this.getContext()}},vr:{get:function(){return console.warn("THREE.WebGLRenderer: .vr has been renamed to .xr"),this.xr}},gammaInput:{get:function(){return console.warn("THREE.WebGLRenderer: .gammaInput has been removed. Set the encoding for textures via Texture.encoding instead."),!1},set:function(){console.warn("THREE.WebGLRenderer: .gammaInput has been removed. Set the encoding for textures via Texture.encoding instead.")}},gammaOutput:{get:function(){return console.warn("THREE.WebGLRenderer: .gammaOutput has been removed. Set WebGLRenderer.outputEncoding instead."),!1},set:function(s){console.warn("THREE.WebGLRenderer: .gammaOutput has been removed. Set WebGLRenderer.outputEncoding instead."),this.outputEncoding=s===!0?Mo:_i}},toneMappingWhitePoint:{get:function(){return console.warn("THREE.WebGLRenderer: .toneMappingWhitePoint has been removed."),1},set:function(){console.warn("THREE.WebGLRenderer: .toneMappingWhitePoint has been removed.")}}});Object.defineProperties(Vo.prototype,{cullFace:{get:function(){console.warn("THREE.WebGLRenderer: .shadowMap.cullFace has been removed. Set Material.shadowSide instead.")},set:function(){console.warn("THREE.WebGLRenderer: .shadowMap.cullFace has been removed. Set Material.shadowSide instead.")}},renderReverseSided:{get:function(){console.warn("THREE.WebGLRenderer: .shadowMap.renderReverseSided has been removed. Set Material.shadowSide instead.")},set:function(){console.warn("THREE.WebGLRenderer: .shadowMap.renderReverseSided has been removed. Set Material.shadowSide instead.")}},renderSingleSided:{get:function(){console.warn("THREE.WebGLRenderer: .shadowMap.renderSingleSided has been removed. Set Material.shadowSide instead.")},set:function(){console.warn("THREE.WebGLRenderer: .shadowMap.renderSingleSided has been removed. Set Material.shadowSide instead.")}}});Object.defineProperties(cn.prototype,{wrapS:{get:function(){return console.warn("THREE.WebGLRenderTarget: .wrapS is now .texture.wrapS."),this.texture.wrapS},set:function(s){console.warn("THREE.WebGLRenderTarget: .wrapS is now .texture.wrapS."),this.texture.wrapS=s}},wrapT:{get:function(){return console.warn("THREE.WebGLRenderTarget: .wrapT is now .texture.wrapT."),this.texture.wrapT},set:function(s){console.warn("THREE.WebGLRenderTarget: .wrapT is now .texture.wrapT."),this.texture.wrapT=s}},magFilter:{get:function(){return console.warn("THREE.WebGLRenderTarget: .magFilter is now .texture.magFilter."),this.texture.magFilter},set:function(s){console.warn("THREE.WebGLRenderTarget: .magFilter is now .texture.magFilter."),this.texture.magFilter=s}},minFilter:{get:function(){return console.warn("THREE.WebGLRenderTarget: .minFilter is now .texture.minFilter."),this.texture.minFilter},set:function(s){console.warn("THREE.WebGLRenderTarget: .minFilter is now .texture.minFilter."),this.texture.minFilter=s}},anisotropy:{get:function(){return console.warn("THREE.WebGLRenderTarget: .anisotropy is now .texture.anisotropy."),this.texture.anisotropy},set:function(s){console.warn("THREE.WebGLRenderTarget: .anisotropy is now .texture.anisotropy."),this.texture.anisotropy=s}},offset:{get:function(){return console.warn("THREE.WebGLRenderTarget: .offset is now .texture.offset."),this.texture.offset},set:function(s){console.warn("THREE.WebGLRenderTarget: .offset is now .texture.offset."),this.texture.offset=s}},repeat:{get:function(){return console.warn("THREE.WebGLRenderTarget: .repeat is now .texture.repeat."),this.texture.repeat},set:function(s){console.warn("THREE.WebGLRenderTarget: .repeat is now .texture.repeat."),this.texture.repeat=s}},format:{get:function(){return console.warn("THREE.WebGLRenderTarget: .format is now .texture.format."),this.texture.format},set:function(s){console.warn("THREE.WebGLRenderTarget: .format is now .texture.format."),this.texture.format=s}},type:{get:function(){return console.warn("THREE.WebGLRenderTarget: .type is now .texture.type."),this.texture.type},set:function(s){console.warn("THREE.WebGLRenderTarget: .type is now .texture.type."),this.texture.type=s}},generateMipmaps:{get:function(){return console.warn("THREE.WebGLRenderTarget: .generateMipmaps is now .texture.generateMipmaps."),this.texture.generateMipmaps},set:function(s){console.warn("THREE.WebGLRenderTarget: .generateMipmaps is now .texture.generateMipmaps."),this.texture.generateMipmaps=s}}});ag.prototype.load=function(s){console.warn("THREE.Audio: .load has been deprecated. Use THREE.AudioLoader instead.");const e=this;return new ng().load(s,function(n){e.setBuffer(n)}),this};ws.prototype.updateCubeMap=function(s,e){return console.warn("THREE.CubeCamera: .updateCubeMap() is now .update()."),this.update(s,e)};ws.prototype.clear=function(s,e,t,n){return console.warn("THREE.CubeCamera: .clear() is now .renderTarget.clear()."),this.renderTarget.clear(s,e,t,n)};Un.crossOrigin=void 0;Un.loadTexture=function(s,e,t,n){console.warn("THREE.ImageUtils.loadTexture has been deprecated. Use THREE.TextureLoader() instead.");const i=new Om;i.setCrossOrigin(this.crossOrigin);const r=i.load(s,t,void 0,n);return e&&(r.mapping=e),r};Un.loadTextureCube=function(s,e,t,n){console.warn("THREE.ImageUtils.loadTextureCube has been deprecated. Use THREE.CubeTextureLoader() instead.");const i=new Fm;i.setCrossOrigin(this.crossOrigin);const r=i.load(s,t,void 0,n);return e&&(r.mapping=e),r};Un.loadCompressedTexture=function(){console.error("THREE.ImageUtils.loadCompressedTexture has been removed. Use THREE.DDSLoader instead.")};Un.loadCompressedTextureCube=function(){console.error("THREE.ImageUtils.loadCompressedTextureCube has been removed. Use THREE.DDSLoader instead.")};typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:po}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=po);const Ue={CAMERA:{FOV:75,NEAR:.1,FAR:1e4,INITIAL_POSITION:{x:0,y:0,z:50}},RENDERER:{ANTIALIAS:!0},CONTROLS:{AUTO_ROTATE:!1,AUTO_ROTATE_SPEED:2,DAMPING_FACTOR:.08,ZOOM_SPEED:1.2,MIN_DISTANCE:5,MAX_DISTANCE:2e3},UNIVERSE:{STAR_COUNT:1e3,STAR_SIZE_MIN:.1,STAR_SIZE_MAX:2,STAR_DISTANCE_MIN:50,STAR_DISTANCE_MAX:1e3},EVOLUTION_STAGES:[{threshold:500,stage:"岩",size:2,color:8947848},{threshold:2e3,stage:"衛星",size:4,color:16777215},{threshold:5e3,stage:"惑星",size:6,color:35071},{threshold:1e4,stage:"恒星",size:10,color:16776960},{threshold:1/0,stage:"巨大恒星",size:16,color:16711680}]};class Tg{constructor(){this.scene=new Ss,this.initialize()}initialize(){const t=document.createElement("canvas");t.width=2048,t.height=2048;const n=t.getContext("2d"),i=n.createRadialGradient(2048/2,2048/2,2048*.05,2048/2,2048/2,2048*.95);i.addColorStop(0,"#021226"),i.addColorStop(.4,"#000814"),i.addColorStop(1,"#000006"),n.fillStyle=i,n.fillRect(0,0,2048,2048);for(let a=0;a<800;a++){const o=Math.random()*2048,l=Math.random()*2048,c=Math.random()*1.2;n.globalAlpha=.4*Math.random(),n.fillStyle="#ffffff",n.beginPath(),n.arc(o,l,c,0,Math.PI*2),n.fill()}const r=new $o(t);r.needsUpdate=!0,this.scene.background=r,this.scene.fog=new fr(6,25e-5)}getScene(){return this.scene}add(e){this.scene.add(e)}remove(e){this.scene.remove(e)}}class Ag{constructor(e){this.camera=new ut(Ue.CAMERA.FOV,e,Ue.CAMERA.NEAR,Ue.CAMERA.FAR),this.initialize()}initialize(){const e=Ue.CAMERA.INITIAL_POSITION;this.camera.position.set(e.x,e.y,e.z),this.camera.lookAt(0,0,0)}getCamera(){return this.camera}updateAspect(e){this.camera.aspect=e,this.camera.updateProjectionMatrix()}getPosition(){return this.camera.position}setPosition(e,t,n){this.camera.position.set(e,t,n)}}class Lg{constructor(e){this.renderer=new Be({canvas:e,antialias:Ue.RENDERER.ANTIALIAS}),this.initialize()}initialize(){const e=this.renderer.domElement.getBoundingClientRect();this.setSize(e.width||window.innerWidth,e.height||window.innerHeight),this.renderer.setPixelRatio(window.devicePixelRatio)}getRenderer(){return this.renderer}setSize(e,t){this.renderer.setSize(e,t,!1)}render(e,t){this.renderer.render(e,t)}getSize(){return this.renderer.getSize(new Z)}}const lo={type:"change"},es={type:"start"},ts={type:"end"};class Rg extends en{constructor(e,t){super(),t===void 0&&console.warn('THREE.OrbitControls: The second parameter "domElement" is now mandatory.'),t===document&&console.error('THREE.OrbitControls: "document" should not be used as the target "domElement". Please use "renderer.domElement" instead.'),this.object=e,this.domElement=t,this.enabled=!0,this.target=new b,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:dn.ROTATE,MIDDLE:dn.DOLLY,RIGHT:dn.PAN},this.touches={ONE:Yt.ROTATE,TWO:Yt.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return o.phi},this.getAzimuthalAngle=function(){return o.theta},this.listenToKeyEvents=function(E){E.addEventListener("keydown",G),this._domElementKeyEvents=E},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(lo),n.update(),r=i.NONE},this.update=function(){const E=new b,S=new nt().setFromUnitVectors(e.up,new b(0,1,0)),X=S.clone().invert(),j=new b,le=new nt,W=2*Math.PI;return function(){const Le=n.object.position;E.copy(Le).sub(n.target),E.applyQuaternion(S),o.setFromVector3(E),n.autoRotate&&r===i.NONE&&N(A()),n.enableDamping?(o.theta+=l.theta*n.dampingFactor,o.phi+=l.phi*n.dampingFactor):(o.theta+=l.theta,o.phi+=l.phi);let Ce=n.minAzimuthAngle,Ke=n.maxAzimuthAngle;return isFinite(Ce)&&isFinite(Ke)&&(Ce<-Math.PI?Ce+=W:Ce>Math.PI&&(Ce-=W),Ke<-Math.PI?Ke+=W:Ke>Math.PI&&(Ke-=W),Ce<=Ke?o.theta=Math.max(Ce,Math.min(Ke,o.theta)):o.theta=o.theta>(Ce+Ke)/2?Math.max(Ce,o.theta):Math.min(Ke,o.theta)),o.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,o.phi)),o.makeSafe(),o.radius*=c,o.radius=Math.max(n.minDistance,Math.min(n.maxDistance,o.radius)),n.enableDamping===!0?n.target.addScaledVector(h,n.dampingFactor):n.target.add(h),E.setFromSpherical(o),E.applyQuaternion(X),Le.copy(n.target).add(E),n.object.lookAt(n.target),n.enableDamping===!0?(l.theta*=1-n.dampingFactor,l.phi*=1-n.dampingFactor,h.multiplyScalar(1-n.dampingFactor)):(l.set(0,0,0),h.set(0,0,0)),c=1,u||j.distanceToSquared(n.object.position)>a||8*(1-le.dot(n.object.quaternion))>a?(n.dispatchEvent(lo),j.copy(n.object.position),le.copy(n.object.quaternion),u=!1,!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",Te),n.domElement.removeEventListener("pointerdown",J),n.domElement.removeEventListener("wheel",M),n.domElement.removeEventListener("touchstart",V),n.domElement.removeEventListener("touchend",oe),n.domElement.removeEventListener("touchmove",ne),n.domElement.ownerDocument.removeEventListener("pointermove",Q),n.domElement.ownerDocument.removeEventListener("pointerup",ee),n._domElementKeyEvents!==null&&n._domElementKeyEvents.removeEventListener("keydown",G)};const n=this,i={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let r=i.NONE;const a=1e-6,o=new oo,l=new oo;let c=1;const h=new b;let u=!1;const d=new Z,f=new Z,m=new Z,v=new Z,x=new Z,g=new Z,p=new Z,T=new Z,L=new Z;function A(){return 2*Math.PI/60/60*n.autoRotateSpeed}function y(){return Math.pow(.95,n.zoomSpeed)}function N(E){l.theta-=E}function O(E){l.phi-=E}const B=function(){const E=new b;return function(X,j){E.setFromMatrixColumn(j,0),E.multiplyScalar(-X),h.add(E)}}(),k=function(){const E=new b;return function(X,j){n.screenSpacePanning===!0?E.setFromMatrixColumn(j,1):(E.setFromMatrixColumn(j,0),E.crossVectors(n.object.up,E)),E.multiplyScalar(X),h.add(E)}}(),q=function(){const E=new b;return function(X,j){const le=n.domElement;if(n.object.isPerspectiveCamera){const W=n.object.position;E.copy(W).sub(n.target);let fe=E.length();fe*=Math.tan(n.object.fov/2*Math.PI/180),B(2*X*fe/le.clientHeight,n.object.matrix),k(2*j*fe/le.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(B(X*(n.object.right-n.object.left)/n.object.zoom/le.clientWidth,n.object.matrix),k(j*(n.object.top-n.object.bottom)/n.object.zoom/le.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function U(E){n.object.isPerspectiveCamera?c/=E:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom*E)),n.object.updateProjectionMatrix(),u=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function R(E){n.object.isPerspectiveCamera?c*=E:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/E)),n.object.updateProjectionMatrix(),u=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function P(E){d.set(E.clientX,E.clientY)}function I(E){p.set(E.clientX,E.clientY)}function C(E){v.set(E.clientX,E.clientY)}function Y(E){f.set(E.clientX,E.clientY),m.subVectors(f,d).multiplyScalar(n.rotateSpeed);const S=n.domElement;N(2*Math.PI*m.x/S.clientHeight),O(2*Math.PI*m.y/S.clientHeight),d.copy(f),n.update()}function K(E){T.set(E.clientX,E.clientY),L.subVectors(T,p),L.y>0?U(y()):L.y<0&&R(y()),p.copy(T),n.update()}function $(E){x.set(E.clientX,E.clientY),g.subVectors(x,v).multiplyScalar(n.panSpeed),q(g.x,g.y),v.copy(x),n.update()}function ae(E){E.deltaY<0?R(y()):E.deltaY>0&&U(y()),n.update()}function se(E){let S=!1;switch(E.code){case n.keys.UP:q(0,n.keyPanSpeed),S=!0;break;case n.keys.BOTTOM:q(0,-n.keyPanSpeed),S=!0;break;case n.keys.LEFT:q(n.keyPanSpeed,0),S=!0;break;case n.keys.RIGHT:q(-n.keyPanSpeed,0),S=!0;break}S&&(E.preventDefault(),n.update())}function ue(E){if(E.touches.length==1)d.set(E.touches[0].pageX,E.touches[0].pageY);else{const S=.5*(E.touches[0].pageX+E.touches[1].pageX),X=.5*(E.touches[0].pageY+E.touches[1].pageY);d.set(S,X)}}function me(E){if(E.touches.length==1)v.set(E.touches[0].pageX,E.touches[0].pageY);else{const S=.5*(E.touches[0].pageX+E.touches[1].pageX),X=.5*(E.touches[0].pageY+E.touches[1].pageY);v.set(S,X)}}function H(E){const S=E.touches[0].pageX-E.touches[1].pageX,X=E.touches[0].pageY-E.touches[1].pageY,j=Math.sqrt(S*S+X*X);p.set(0,j)}function Ie(E){n.enableZoom&&H(E),n.enablePan&&me(E)}function Se(E){n.enableZoom&&H(E),n.enableRotate&&ue(E)}function ge(E){if(E.touches.length==1)f.set(E.touches[0].pageX,E.touches[0].pageY);else{const X=.5*(E.touches[0].pageX+E.touches[1].pageX),j=.5*(E.touches[0].pageY+E.touches[1].pageY);f.set(X,j)}m.subVectors(f,d).multiplyScalar(n.rotateSpeed);const S=n.domElement;N(2*Math.PI*m.x/S.clientHeight),O(2*Math.PI*m.y/S.clientHeight),d.copy(f)}function de(E){if(E.touches.length==1)x.set(E.touches[0].pageX,E.touches[0].pageY);else{const S=.5*(E.touches[0].pageX+E.touches[1].pageX),X=.5*(E.touches[0].pageY+E.touches[1].pageY);x.set(S,X)}g.subVectors(x,v).multiplyScalar(n.panSpeed),q(g.x,g.y),v.copy(x)}function Ee(E){const S=E.touches[0].pageX-E.touches[1].pageX,X=E.touches[0].pageY-E.touches[1].pageY,j=Math.sqrt(S*S+X*X);T.set(0,j),L.set(0,Math.pow(T.y/p.y,n.zoomSpeed)),U(L.y),p.copy(T)}function Me(E){n.enableZoom&&Ee(E),n.enablePan&&de(E)}function be(E){n.enableZoom&&Ee(E),n.enableRotate&&ge(E)}function J(E){if(n.enabled!==!1)switch(E.pointerType){case"mouse":case"pen":ce(E);break}}function Q(E){if(n.enabled!==!1)switch(E.pointerType){case"mouse":case"pen":re(E);break}}function ee(E){switch(E.pointerType){case"mouse":case"pen":w();break}}function ce(E){E.preventDefault(),n.domElement.focus?n.domElement.focus():window.focus();let S;switch(E.button){case 0:S=n.mouseButtons.LEFT;break;case 1:S=n.mouseButtons.MIDDLE;break;case 2:S=n.mouseButtons.RIGHT;break;default:S=-1}switch(S){case dn.DOLLY:if(n.enableZoom===!1)return;I(E),r=i.DOLLY;break;case dn.ROTATE:if(E.ctrlKey||E.metaKey||E.shiftKey){if(n.enablePan===!1)return;C(E),r=i.PAN}else{if(n.enableRotate===!1)return;P(E),r=i.ROTATE}break;case dn.PAN:if(E.ctrlKey||E.metaKey||E.shiftKey){if(n.enableRotate===!1)return;P(E),r=i.ROTATE}else{if(n.enablePan===!1)return;C(E),r=i.PAN}break;default:r=i.NONE}r!==i.NONE&&(n.domElement.ownerDocument.addEventListener("pointermove",Q),n.domElement.ownerDocument.addEventListener("pointerup",ee),n.dispatchEvent(es))}function re(E){if(n.enabled!==!1)switch(E.preventDefault(),r){case i.ROTATE:if(n.enableRotate===!1)return;Y(E);break;case i.DOLLY:if(n.enableZoom===!1)return;K(E);break;case i.PAN:if(n.enablePan===!1)return;$(E);break}}function w(E){n.domElement.ownerDocument.removeEventListener("pointermove",Q),n.domElement.ownerDocument.removeEventListener("pointerup",ee),n.enabled!==!1&&(n.dispatchEvent(ts),r=i.NONE)}function M(E){n.enabled===!1||n.enableZoom===!1||r!==i.NONE&&r!==i.ROTATE||(E.preventDefault(),n.dispatchEvent(es),ae(E),n.dispatchEvent(ts))}function G(E){n.enabled===!1||n.enablePan===!1||se(E)}function V(E){if(n.enabled!==!1){switch(E.preventDefault(),E.touches.length){case 1:switch(n.touches.ONE){case Yt.ROTATE:if(n.enableRotate===!1)return;ue(E),r=i.TOUCH_ROTATE;break;case Yt.PAN:if(n.enablePan===!1)return;me(E),r=i.TOUCH_PAN;break;default:r=i.NONE}break;case 2:switch(n.touches.TWO){case Yt.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;Ie(E),r=i.TOUCH_DOLLY_PAN;break;case Yt.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;Se(E),r=i.TOUCH_DOLLY_ROTATE;break;default:r=i.NONE}break;default:r=i.NONE}r!==i.NONE&&n.dispatchEvent(es)}}function ne(E){if(n.enabled!==!1)switch(E.preventDefault(),r){case i.TOUCH_ROTATE:if(n.enableRotate===!1)return;ge(E),n.update();break;case i.TOUCH_PAN:if(n.enablePan===!1)return;de(E),n.update();break;case i.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;Me(E),n.update();break;case i.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;be(E),n.update();break;default:r=i.NONE}}function oe(E){n.enabled!==!1&&(n.dispatchEvent(ts),r=i.NONE)}function Te(E){n.enabled!==!1&&E.preventDefault()}n.domElement.addEventListener("contextmenu",Te),n.domElement.addEventListener("pointerdown",J),n.domElement.addEventListener("wheel",M,{passive:!1}),n.domElement.addEventListener("touchstart",V,{passive:!1}),n.domElement.addEventListener("touchend",oe),n.domElement.addEventListener("touchmove",ne,{passive:!1}),this.update()}}class Cg{constructor(e,t,n=.7){this.realCamera=e,this.virtualCamera=this.realCamera.clone(),this.controls=new Rg(this.virtualCamera,t.domElement),this.delay=n,this.initialize()}initialize(){this.controls.enableDamping=!0,this.controls.dampingFactor=Ue.CONTROLS.DAMPING_FACTOR,this.controls.autoRotate=Ue.CONTROLS.AUTO_ROTATE,this.controls.autoRotateSpeed=Ue.CONTROLS.AUTO_ROTATE_SPEED,this.controls.enableRotate=!0,this.controls.enableZoom=!0,this.controls.enablePan=!0,this.controls.zoomSpeed=Ue.CONTROLS.ZOOM_SPEED,this.controls.minDistance=Ue.CONTROLS.MIN_DISTANCE,this.controls.maxDistance=Ue.CONTROLS.MAX_DISTANCE,this.controls.touches={ONE:Yt.ROTATE,TWO:Yt.DOLLY_ROTATE},this.controls.screenSpacePanning=!1}update(e=1/60){this.controls.update();const t=this.delay,n=1-Math.exp(-e/Math.max(1e-4,t));this.realCamera.position.lerp(this.virtualCamera.position,n),this.realCamera.quaternion.slerp(this.virtualCamera.quaternion,n),this.realCamera.up.lerp(this.virtualCamera.up,n)}getControls(){return this.controls}setAutoRotate(e){this.controls.autoRotate=e}setZoomSpeed(e){this.controls.zoomSpeed=e}setDampingFactor(e){this.controls.dampingFactor=e}setDelay(e){this.delay=e}}class Nn{constructor(e,t,n,i,r=16777215,a=null,o=0,l=null){const c=new tl(i,8,8),h=new hr({color:r});this.mesh=new pt(c,h),this.mesh.position.set(e,t,n),this.name=a,this.initialSize=0,this.orbitRadius=0,this.targetOrbitRadius=0,this.orbitAngle=0,this.orbitSpeed=0,this.rotationSpeed=0,this.orbitLine=null,this.data={name:a,x:e,y:t,z:n,size:i,color:r,calories:o,genre:l,orbitRadius:0,orbitAngle:0,orbitSpeed:0,rotationSpeed:0,age:0,type:"main_sequence",foods:[]}}setMesh(e){e&&(this.mesh=e)}getMesh(){return this.mesh}getData(){return this.data}getSerializableData(){return{...this.data,orbitRadius:this.orbitRadius,targetOrbitRadius:this.targetOrbitRadius,orbitAngle:this.orbitAngle,orbitSpeed:this.orbitSpeed,rotationSpeed:this.rotationSpeed}}setOrbitLine(e){this.orbitLine=e,this.data&&(this.data.orbitLine=e)}updateOrbitPosition(){if(!this.mesh)return;const e=Math.cos(this.orbitAngle)*this.orbitRadius,t=Math.sin(this.orbitAngle)*this.orbitRadius;this.mesh.position.set(e,this.mesh.position.y,t),this.data&&(this.data.x=e,this.data.z=t)}updateOrbitLine(){if(!this.orbitLine)return;const e=[],t=128;for(let n=0;n<=t;n+=1){const i=n/t*Math.PI*2;e.push(new b(Math.cos(i)*this.orbitRadius,0,Math.sin(i)*this.orbitRadius))}this.orbitLine.geometry.setFromPoints(e),this.orbitLine.geometry.attributes.position&&(this.orbitLine.geometry.attributes.position.needsUpdate=!0)}animateOrbit(e){if(Math.abs(this.targetOrbitRadius-this.orbitRadius)<.01)return;const t=Math.min(e*2.5,1);this.orbitRadius=mh.lerp(this.orbitRadius,this.targetOrbitRadius,t),this.data&&(this.data.orbitRadius=this.orbitRadius),this.updateOrbitPosition(),this.updateOrbitLine()}setOrbitRadius(e){this.orbitRadius=e,this.targetOrbitRadius=e,this.data&&(this.data.orbitRadius=e),this.updateOrbitPosition(),this.updateOrbitLine()}setTargetOrbitRadius(e){this.targetOrbitRadius=e}getDetails(){return{position:this.data,type:this.data.type,age:this.data.age,size:this.data.size}}getEvolutionStage(){const e=this.data.calories;for(const t of Ue.EVOLUTION_STAGES)if(e<=t.threshold)return t.stage;return Ue.EVOLUTION_STAGES[Ue.EVOLUTION_STAGES.length-1].stage}getEvolutionStageSize(){const e=this.data.calories;for(const t of Ue.EVOLUTION_STAGES)if(e<=t.threshold)return t.size;return Ue.EVOLUTION_STAGES[Ue.EVOLUTION_STAGES.length-1].size}getEvolutionStageColor(){const e=this.data.calories;for(const t of Ue.EVOLUTION_STAGES)if(e<=t.threshold)return t.color;return Ue.EVOLUTION_STAGES[Ue.EVOLUTION_STAGES.length-1].color}getEvolutionStageEmissive(){const e=this.data.calories;for(const n of Ue.EVOLUTION_STAGES)if(e<=n.threshold)return n.threshold>=1e4?{color:n.color,intensity:.3}:{color:0,intensity:0};const t=Ue.EVOLUTION_STAGES[Ue.EVOLUTION_STAGES.length-1];return t.threshold>=1e4?{color:t.color,intensity:.3}:{color:0,intensity:0}}evolve(e){this.data.age+=e}setInitialSize(e){this.initialSize=e}setCalories(e){this.data.calories=e}createFoodEntryId(){return typeof crypto<"u"&&typeof crypto.randomUUID=="function"?crypto.randomUUID():`food-${Date.now()}-${Math.floor(Math.random()*1e6)}`}addFoodEntry(e,t,n=""){const i={id:this.createFoodEntryId(),name:e,calories:t,storeName:n,registeredAt:new Date().toISOString()};return this.data.foods.push(i),i}getFoods(){return this.data.foods}recalculateCaloriesFromFoods(){if(!Array.isArray(this.data.foods))return this.data.calories=0,0;const e=this.data.foods.reduce((t,n)=>t+Number(n.calories||0),0);return this.data.calories=e,e}updateAppearance(e){if(!e||!e.material)return;const t=this.getEvolutionStageColor();e.material.color.setHex(t);const n=this.getEvolutionStageEmissive();if(e.material.emissive&&(e.material.emissive.setHex(n.color),e.material.emissiveIntensity=n.intensity),this.initialSize>0){const r=this.getEvolutionStageSize()/this.initialSize;e.scale.set(r,r,r)}e.material.needsUpdate=!0}}class Pg{constructor(){this.stars=[],this.starMap=new Map,this._nextId=0}generateId(){const e=this._nextId;return this._nextId+=1,e}generateStars(e=Ue.UNIVERSE.STAR_COUNT){const t=[];for(let n=0;n<e;n++){const i=this.createRandomStar(n),r=this.generateId();i.id=r,t.push(i),this.stars.push(i),this.starMap.set(r,i)}return t}createRandomStar(e){const{STAR_SIZE_MIN:t,STAR_SIZE_MAX:n,STAR_DISTANCE_MIN:i,STAR_DISTANCE_MAX:r}=Ue.UNIVERSE,a=Math.random()*(r-i)+i,o=Math.random()*Math.PI*2,l=Math.random()*Math.PI*2,c=a*Math.sin(l)*Math.cos(o),h=a*Math.sin(l)*Math.sin(o),u=a*Math.cos(l),d=Math.random()*(n-t)+t,f=[16777215,16753920,8900331,16739179,16776960],m=f[Math.floor(Math.random()*f.length)];return new Nn(c,h,u,d,m)}getAllStars(){return this.stars}getStarById(e){return this.starMap.get(e)}getStarByMesh(e){for(const t of this.stars)if(t&&t.getMesh&&t.getMesh()===e)return t;return null}addStar(e){this.stars.push(e);const t=this.generateId();return e.id=t,this.starMap.set(t,e),t}getStarId(e){for(const[t,n]of this.starMap.entries())if(n===e)return t;return null}removeStarByInstance(e){const t=this.getStarId(e);t!==null&&this.removeStar(t)}getStarsByName(e){return this.stars.filter(t=>(t.name||t.data.name)===e)}removeStar(e){const t=this.starMap.get(e);if(t){const n=this.stars.indexOf(t);n>-1&&this.stars.splice(n,1),this.starMap.delete(e)}}updateAll(e){this.stars.forEach(t=>{t.evolve(e),typeof t.animateOrbit=="function"&&t.animateOrbit(e)})}updateStarAppearance(e){const t=this.starMap.get(e);t&&t.getMesh&&t.updateAppearance&&t.updateAppearance(t.getMesh())}getCount(){return this.stars.length}}class Ig{constructor(e=Ue.UNIVERSE.STAR_COUNT){this.count=e,this.points=null,this.createPoints()}createPoints(){const e=new Float32Array(this.count*3),t=new Float32Array(this.count*3),n=new Float32Array(this.count),i=new he(16777215),{STAR_DISTANCE_MIN:r,STAR_DISTANCE_MAX:a,STAR_SIZE_MIN:o,STAR_SIZE_MAX:l}=Ue.UNIVERSE;for(let f=0;f<this.count;f++){const m=Math.random()*(a-r)+r,v=Math.random()*Math.PI*2,x=Math.acos(2*Math.random()-1),g=m*Math.sin(x)*Math.cos(v),p=m*Math.sin(x)*Math.sin(v),T=m*Math.cos(x),L=f*3;e[L]=g,e[L+1]=p,e[L+2]=T;const A=.85+Math.random()*.3;t[L]=i.r*A,t[L+1]=i.g*A,t[L+2]=i.b*A;const y=Math.random()*(l-o)+o;n[f]=y*(1+(m-r)/(a-r)*.5)}const c=new Fe;c.setAttribute("position",new ke(e,3)),c.setAttribute("color",new ke(t,3)),c.setAttribute("aSize",new ke(n,1)),c.computeBoundingSphere();const h=`
      attribute float aSize;
      varying vec3 vColor;
      uniform float uPixelRatio;
      void main() {
        vColor = color;
        vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
        // 視点距離に応じたサイズ調整（透視補正）
        float size = aSize * (200.0 / -mvPosition.z);
        gl_PointSize = size * uPixelRatio;
        gl_Position = projectionMatrix * mvPosition;
      }
    `,u=`
      varying vec3 vColor;
      uniform float uOpacity;
      void main() {
        // 円形のポイント（ソフトエッジ）
        vec2 coord = gl_PointCoord - vec2(0.5);
        float dist = length(coord);
        float alpha = smoothstep(0.5, 0.0, dist);
        gl_FragColor = vec4(vColor, alpha * uOpacity);
      }
    `,d=new $t({uniforms:{uPixelRatio:{value:window.devicePixelRatio||1},uOpacity:{value:.95}},vertexShader:h,fragmentShader:u,depthWrite:!1,blending:ns,transparent:!0,vertexColors:!0});this.points=new Jo(c,d),this.points.frustumCulled=!1}getObject(){return this.points}update(e){}}class co{constructor(e=8,t=3832789,n=0,i=0){this.radius=e,this.color=t,this.emissiveColor=n,this.emissiveIntensity=i,this.mesh=this.createMesh()}createMesh(){const e=new tl(this.radius,32,32),t=new As({color:this.color,roughness:.6,metalness:.1,emissive:this.emissiveColor,emissiveIntensity:this.emissiveIntensity}),n=new pt(e,t);return n.position.set(0,0,0),n}getMesh(){return this.mesh}update(e){}}class Dg{constructor(e){this.scene=e,this.starManager=new Pg,this.starField=null,this.initialize()}initialize(){this.starField=new Ig,this.scene.add(this.starField.getObject());const e=new pl(16777215,.3),t=new fl(16777215,.8);t.position.set(50,50,50),this.scene.add(e),this.scene.add(t)}getScene(){return this.scene}getStarManager(){return this.starManager}update(e){this.starManager.updateAll(e),this.starField&&this.starField.update(e)}addStarAtPosition(e,t,n,i=.5,r=16777215){const a=new Nn(e,t,n,i,r);return this.scene.add(a.getMesh()),this.starManager.addStar(a),a}getStats(){return{starCount:this.starManager.getCount(),pointsCount:this.starField?this.starField.count:0}}}const ho="星を選択してください",uo=6,fo="spaceDebrisAppData",Ng=[{id:"editStoreName",label:"店名",type:"text",getValue:s=>s.storeName||""},{id:"editFoodName",label:"食べ物名",type:"text",getValue:s=>s.name||""},{id:"editCalories",label:"カロリー(kcal)",type:"number",getValue:s=>s.calories??""}];class Fg{constructor(){this.canvas=document.getElementById("canvas"),this.infoPanel=document.getElementById("infoPanelBody"),this.infoPanelOuter=document.getElementById("infoPanel"),this.infoPanelHandle=document.getElementById("infoPanelHandle"),this.infoSummaryEl=document.getElementById("infoSummary"),this.inputPanelOuter=document.getElementById("inputPanel"),this.inputPanelHandle=document.getElementById("inputPanelHandle"),this.errorMessage=document.getElementById("errorMessage"),this._lastPointerDown=null,this.raycaster=new _g,this.mouse=new Z,this.clock=new sg,this.selectedStar=null,this.infoPanelMode="normal",this.editingFoodId=null,this.setInfoPanelDefault(),this.setupManagers(),this.setupUniverse(),this.loadData(),this.setupEventListeners(),this.onWindowResize(),this.animate()}setupManagers(){this.sceneManager=new Tg;const e=this.canvas.getBoundingClientRect(),t=e.width/e.height;this.cameraManager=new Ag(t),this.rendererManager=new Lg(this.canvas),this.cameraController=new Cg(this.cameraManager.getCamera(),this.rendererManager.getRenderer(),.7)}setupUniverse(){this.universe=new Dg(this.sceneManager.getScene())}setupEventListeners(){window.addEventListener("resize",()=>this.onWindowResize());const e=this.rendererManager.getRenderer().domElement;e.addEventListener("pointerdown",a=>this.onPointerDown(a)),e.addEventListener("pointerup",a=>this.onPointerUp(a));const t=document.getElementById("genreSelect");t&&t.addEventListener("change",()=>this.onGenreSelectionChanged());const n=document.querySelector(".food-form button");n&&n.addEventListener("click",()=>this.onRegisterButtonClick());const i=document.getElementById("supernovaButton");i&&i.addEventListener("click",()=>this.onSupernovaButtonClick()),this.infoPanel&&this.infoPanel.addEventListener("click",a=>this.onInfoPanelClick(a)),document.addEventListener("click",a=>{const o=a.target.closest(".food-menu"),l=a.target.closest(".food-menu-button");o||l||this.closeAllFoodMenus()}),this.inputPanelHandle&&this.inputPanelHandle.addEventListener("click",()=>this.toggleInputPanel()),this.infoPanelHandle&&this.infoPanelHandle.addEventListener("click",()=>this.toggleInfoPanel());const r=document.getElementById("drawerBackdrop");r&&r.addEventListener("click",()=>{this.collapseInputPanel(),this.collapseInfoPanel()}),this.onGenreSelectionChanged()}onRegisterButtonClick(){const e=document.getElementById("foodName"),t=document.getElementById("genreSelect"),n=document.getElementById("genreInput"),i=document.getElementById("storeName"),r=document.getElementById("calories"),a=e?e.value.trim():"",o=t?t.value:"new",l=o==="new"?n?n.value.trim():"":o,c=i?i.value.trim():"",h=r?r.value.trim():"",u=Number(h),d=this.validateRegistration(a,l,h,u);if(d){this.showError(d);return}let f=this.findStarByGenre(l);if(!f)f=this.createStarForGenre(l,u),this.addGenreOption(l),t&&(t.value=l);else{const x=Number(f.data.calories)+u;f.setCalories(x),f.updateAppearance(f.getMesh()),console.log("加算後のカロリー:",x)}this.updateOrbitSpacing(),f.addFoodEntry(a,u,c);const m=f.getEvolutionStage();console.log("対象の星:",f.name||f.data.name),console.log("進化段階:",m),this.saveData(),this.refreshStarDisplay(f),this.resetFoodForm(),this.clearError(),this.collapseInputPanel(),console.log("食べ物名:",a),console.log("ジャンル:",l),console.log("カロリー:",u)}onGenreSelectionChanged(){const e=document.getElementById("genreSelect"),t=document.getElementById("genreInput");!e||!t||(e.value==="new"?(t.value="",t.disabled=!1,t.focus()):(t.value=e.value,t.disabled=!0))}addGenreOption(e){const t=document.getElementById("genreSelect");if(!t||Array.from(t.options).find(r=>r.value.toLowerCase()===e.toLowerCase()))return;const i=document.createElement("option");i.value=e,i.textContent=e,t.appendChild(i)}getFoodGenre(e){const t=e.toLowerCase();return t.includes("ラーメン")||t.includes("らーめん")?"ラーメン":t.includes("カレー")||t.includes("curry")?"カレー":t.includes("寿司")||t.includes("すし")?"寿司":"その他"}findStarByGenre(e){const n=this.universe.getStarManager().getAllStars();for(const i of n)if(i.data.genre===e)return i;return null}validateRegistration(e,t,n,i){return e?t?n?Number.isNaN(i)?"カロリーは数字で入力してください。":i<=0?"カロリーは 1 以上で入力してください。":null:"カロリーを入力してください。":"ジャンルを入力してください。":"食べ物名を入力してください。"}showError(e){this.errorMessage&&(this.errorMessage.textContent=e)}clearError(){this.errorMessage&&(this.errorMessage.textContent="")}calculateNextOrbitRadius(e){const t=this.universe.getStarManager().getAllStars();if(t.length===0)return 0;const n=t.reduce((a,o)=>{const l=o.data.orbitRadius||0,c=a.data.orbitRadius||0;return l>c?o:a},t[0]),i=n.data.orbitRadius||0,r=n.getEvolutionStageSize();return i+r+e+uo}createOrbitLine(e){const t=[];for(let o=0;o<=128;o+=1){const l=o/128*Math.PI*2;t.push(new b(Math.cos(l)*e,0,Math.sin(l)*e))}const i=new Fe().setFromPoints(t),r=new Vn({color:16777215,transparent:!0,opacity:.18,depthWrite:!1}),a=new jo(i,r);return a.renderOrder=0,a.userData.isOrbitLine=!0,a}updateOrbitSpacing(){const e=this.universe.getStarManager().getAllStars();if(e.length===0)return;const t=[...e].sort((r,a)=>(r.orbitRadius||0)-(a.orbitRadius||0));let n=0,i=t[0].getEvolutionStageSize();t[0].setTargetOrbitRadius(0);for(let r=1;r<t.length;r+=1){const a=t[r],o=a.getEvolutionStageSize(),l=n+i+o+uo;a.setTargetOrbitRadius(l),n=l,i=o}}saveData(){const t=this.universe.getStarManager().getAllStars().map(i=>typeof i.getSerializableData=="function"?i.getSerializableData():i.getData()),n={version:1,savedAt:new Date().toISOString(),stars:t};try{localStorage.setItem(fo,JSON.stringify(n))}catch(i){console.warn("localStorage への保存に失敗しました。",i)}}loadData(){const e=localStorage.getItem(fo);if(!e)return;let t=null;try{t=JSON.parse(e)}catch(n){console.warn("localStorage のデータが読み込めませんでした。",n);return}!t||!Array.isArray(t.stars)||t.stars.forEach(n=>{const i=this.createStarFromSavedData(n);i&&i.data.genre&&this.addGenreOption(i.data.genre)})}migrateFoodEntries(e){return Array.isArray(e)?e.map(t=>t&&t.id?t:{...t,id:typeof crypto<"u"&&typeof crypto.randomUUID=="function"?crypto.randomUUID():`food-${Date.now()}-${Math.floor(Math.random()*1e6)}`}):[]}createStarFromSavedData(e){const t=this.sceneManager.getScene(),n=e.name||`${e.genre||"ジャンル"}星`,i=e.genre||"不明",r=Number(e.calories)||0,a=new Nn(0,0,0,0,16777215,n,r,i),o=a.getEvolutionStageSize(),l=a.getEvolutionStageColor(),c=a.getEvolutionStageEmissive(),h=Number(e.orbitRadius)||0,u=Number(e.orbitAngle)||(h===0?0:Math.random()*Math.PI*2),d=Math.cos(u)*h,f=Math.sin(u)*h,m=e.y||(h===0?0:(Math.random()-.5)*4),v=new Nn(d,m,f,0,16777215,n,r,i);v.orbitRadius=h,v.targetOrbitRadius=h,v.orbitAngle=u,v.orbitSpeed=Number(e.orbitSpeed)||.01,v.rotationSpeed=Number(e.rotationSpeed)||.002,v.setInitialSize(o),v.data={...v.data,...e,name:n,genre:i,calories:r,orbitRadius:h,orbitAngle:u,orbitSpeed:v.orbitSpeed,rotationSpeed:v.rotationSpeed,foods:this.migrateFoodEntries(e.foods)};const x=new co(o,l,c.color,c.intensity);if(x.getMesh().position.set(d,m,f),x.getMesh().renderOrder=1,t.add(x.getMesh()),h>0){const g=this.createOrbitLine(h);t.add(g),v.setOrbitLine(g)}return v.setMesh(x.getMesh()),this.universe.getStarManager().addStar(v),v}createStarForGenre(e,t){const n=this.sceneManager.getScene(),i=new Nn(0,0,0,0,16777215,`${e}星`,t,e),r=i.getEvolutionStageSize(),a=i.getEvolutionStageColor(),o=i.getEvolutionStageEmissive(),l=this.calculateNextOrbitRadius(r),c=l===0?0:Math.random()*Math.PI*2,h=Math.cos(c)*l,u=Math.sin(c)*l,d=l===0?0:(Math.random()-.5)*4,f=new Nn(h,d,u,0,16777215,`${e}星`,t,e);f.orbitRadius=l,f.orbitAngle=c,f.orbitSpeed=.01,f.rotationSpeed=.002,f.setInitialSize(r),f.data.orbitRadius=l,f.data.orbitAngle=c,f.data.orbitSpeed=.01,f.data.rotationSpeed=.002;const m=new co(r,a,o.color,o.intensity);if(m.getMesh().position.set(h,d,u),m.getMesh().renderOrder=1,n.add(m.getMesh()),l>0){const v=this.createOrbitLine(l);n.add(v),f.setOrbitLine(v)}return f.setMesh(m.getMesh()),this.universe.getStarManager().addStar(f),f}resetFoodForm(){const e=document.getElementById("foodName"),t=document.getElementById("genreSelect"),n=document.getElementById("genreInput"),i=document.getElementById("storeName"),r=document.getElementById("calories");e&&(e.value=""),t&&(t.value="new"),n&&(n.value="",n.disabled=!1),i&&(i.value=""),r&&(r.value=""),e&&e.focus(),this.onGenreSelectionChanged()}onWindowResize(){const e=this.canvas.getBoundingClientRect(),t=e.width||window.innerWidth,n=e.height||window.innerHeight;this.cameraManager.updateAspect(t/n),this.rendererManager.setSize(t,n)}animate(){requestAnimationFrame(()=>this.animate());const e=this.clock.getDelta();this.universe.update(e),this.cameraController.update(e),this.rendererManager.render(this.sceneManager.getScene(),this.cameraManager.getCamera())}setCameraAutoRotate(e){this.cameraController.setAutoRotate(e)}onPointerDown(e){this._lastPointerDown={clientX:e.clientX,clientY:e.clientY}}onPointerUp(e){if(!this._lastPointerDown)return;const t=e.clientX-this._lastPointerDown.clientX,n=e.clientY-this._lastPointerDown.clientY,i=t*t+n*n,r=5;if(this._lastPointerDown=null,i>r*r)return;const a=this.rendererManager.getRenderer().domElement.getBoundingClientRect();this.mouse.x=(e.clientX-a.left)/a.width*2-1,this.mouse.y=-((e.clientY-a.top)/a.height)*2+1,this.raycaster.setFromCamera(this.mouse,this.cameraManager.getCamera());const o=this.universe.getStarManager(),l=o.getAllStars().map(u=>u.getMesh()).filter(Boolean),c=this.raycaster.intersectObjects(l,!0);if(c.length===0){this.setInfoPanelDefault();return}const h=o.getStarByMesh(c[0].object);if(!h){this.setInfoPanelDefault();return}this.showStarInfo(h)}showStarInfo(e){this.infoPanel&&(this.selectedStar=e,this.infoPanelMode="normal",this.editingFoodId=null,this.renderSelectedStarInfo())}renderSelectedStarInfo(){if(!(!this.infoPanel||!this.selectedStar))switch(this.infoPanelMode){case"edit":this.renderFoodEditForm();break;case"normal":default:this.renderNormalStarInfo();break}}renderNormalStarInfo(){const e=this.selectedStar,t=e.name||e.data.name||"名前なし",n=e.data.calories||0,i=e.data.genre||"-",r=e.getEvolutionStage(),a=e.getPosition?e.getPosition():e.getMesh().position,o=`座標: ${a.x.toFixed(2)}, ${a.y.toFixed(2)}, ${a.z.toFixed(2)}`,l=Array.isArray(e.data.foods)?e.data.foods:[],c=l.length?`
          <h3>登録済みの食べ物</h3>
          <ul class="food-list">
            ${l.map(h=>`
                  <li class="food-item">
                    <button class="food-menu-button" data-food-id="${h.id}" type="button" aria-label="メニューを開く">⋮</button>
                    <div class="food-menu" data-food-menu-id="${h.id}">
                      <button class="food-menu-item" data-action="edit" data-food-id="${h.id}" type="button">✏️ 食事を編集</button>
                      <button class="food-menu-item" data-action="delete" data-food-id="${h.id}" type="button">🗑️ 削除</button>
                    </div>
                    <strong>${h.name}</strong> — ${h.calories} kcal<br>
                    ${h.storeName?`店名: ${h.storeName}<br>`:"店名: なし<br>"}
                    登録日時: ${new Date(h.registeredAt).toLocaleString()}
                  </li>`).join("")}
          </ul>
        `:'<p class="no-foods">登録された食べ物はありません。</p>';this.infoPanel.innerHTML=`
      <h2>${t}</h2>
      <div class="meta">
        ${o}<br>
        総カロリー: ${n} kcal<br>
        ジャンル: ${i}<br>
        進化段階: ${r}
      </div>
      ${c}
    `,this.updateInfoSummary(t,n,r)}renderFoodEditForm(){const e=this.selectedStar,n=(Array.isArray(e.data.foods)?e.data.foods:[]).find(r=>r.id===this.editingFoodId);if(!n){this.infoPanelMode="normal",this.editingFoodId=null,this.renderNormalStarInfo();return}const i=Ng.map(r=>{const a=r.getValue(n,e);return`
        <label for="${r.id}">${r.label}</label>
        <input id="${r.id}" name="${r.id}" type="${r.type}" value="${a}">
      `}).join("");this.infoPanel.innerHTML=`
      <h2>食事を編集</h2>
      <div class="food-form food-edit-form" data-food-id="${this.editingFoodId}">
        ${i}
        <div class="food-edit-actions">
          <button class="food-edit-save" type="button">保存</button>
          <button class="food-edit-cancel" type="button">キャンセル</button>
        </div>
      </div>
    `}updateInfoSummary(e,t,n){this.infoSummaryEl&&(this.infoSummaryEl.innerHTML=`
      <strong>${e}</strong>
      <span class="info-summary-sep">・</span>
      <span>${t} kcal</span>
      <span class="info-summary-sep">・</span>
      <span>${n}</span>
    `)}toggleInputPanel(){if(!this.inputPanelOuter)return;const e=!this.inputPanelOuter.classList.contains("is-expanded");e&&this.collapseInfoPanel(),this.setPanelExpanded(this.inputPanelOuter,this.inputPanelHandle,e),this.updateDrawerBackdrop()}toggleInfoPanel(){if(!this.infoPanelOuter)return;const e=!this.infoPanelOuter.classList.contains("is-expanded");e&&this.collapseInputPanel(),this.setPanelExpanded(this.infoPanelOuter,this.infoPanelHandle,e),this.updateDrawerBackdrop()}collapseInputPanel(){this.setPanelExpanded(this.inputPanelOuter,this.inputPanelHandle,!1),this.updateDrawerBackdrop()}collapseInfoPanel(){this.setPanelExpanded(this.infoPanelOuter,this.infoPanelHandle,!1),this.updateDrawerBackdrop()}setPanelExpanded(e,t,n){e&&(e.classList.toggle("is-expanded",n),t&&t.setAttribute("aria-expanded",String(n)))}updateDrawerBackdrop(){const e=document.getElementById("drawerBackdrop");if(!e)return;const t=this.inputPanelOuter&&this.inputPanelOuter.classList.contains("is-expanded")||this.infoPanelOuter&&this.infoPanelOuter.classList.contains("is-expanded");e.classList.toggle("is-visible",!!t)}confirmAction(e){return window.confirm(e)}onInfoPanelClick(e){if(e.target.closest(".food-edit-cancel")){this.cancelEditingFoodEntry();return}if(e.target.closest(".food-edit-save")){if(!this.confirmAction("本当に変更しますか？"))return;this.saveEditedFoodEntry();return}const i=e.target.closest(".food-menu-button");if(i){this.toggleFoodMenu(i.dataset.foodId);return}const r=e.target.closest('.food-menu-item[data-action="edit"]');if(r){const o=r.dataset.foodId;if(!o)return;this.startEditingFoodEntry(o);return}const a=e.target.closest('.food-menu-item[data-action="delete"]');if(a){const o=a.dataset.foodId;if(!o||!this.confirmAction("本当に削除しますか？"))return;this.deleteSelectedFoodEntry(o);return}}toggleFoodMenu(e){if(!this.infoPanel)return;this.infoPanel.querySelectorAll(".food-menu").forEach(n=>{if(!(n.dataset.foodMenuId===e)){n.classList.remove("is-open");return}n.classList.toggle("is-open")})}closeAllFoodMenus(){if(!this.infoPanel)return;this.infoPanel.querySelectorAll(".food-menu.is-open").forEach(t=>t.classList.remove("is-open"))}startEditingFoodEntry(e){console.log("編集開始"),console.log("id:",e),this.infoPanelMode="edit",this.editingFoodId=e,this.renderSelectedStarInfo()}cancelEditingFoodEntry(){this.infoPanelMode="normal",this.editingFoodId=null,this.renderSelectedStarInfo()}saveEditedFoodEntry(){const e=this.selectedStar;if(!e)return;const n=(Array.isArray(e.data.foods)?e.data.foods:[]).find(h=>h.id===this.editingFoodId);if(!n)return;const i=document.getElementById("editStoreName"),r=document.getElementById("editFoodName"),a=document.getElementById("editCalories"),o=i?i.value.trim():"",l=r?r.value.trim():"",c=a?Number(a.value):n.calories;n.name=l,n.storeName=o,n.calories=c,e.recalculateCaloriesFromFoods(),e.updateAppearance(e.getMesh()),this.saveData(),this.updateOrbitSpacing(),this.infoPanelMode="normal",this.editingFoodId=null,this.refreshStarDisplay(e)}deleteSelectedFoodEntry(e){if(!this.selectedStar||!Array.isArray(this.selectedStar.data.foods))return;const t=this.selectedStar.data.foods.findIndex(n=>n.id===e);if(t!==-1){if(this.selectedStar.data.foods.splice(t,1),this.selectedStar.data.foods.length===0){this.removeStarFromScene(this.selectedStar),this.selectedStar=null,this.updateOrbitSpacing(),this.saveData(),this.setInfoPanelDefault();return}this.selectedStar.recalculateCaloriesFromFoods(),this.selectedStar.updateAppearance(this.selectedStar.getMesh()),this.saveData(),this.updateOrbitSpacing(),this.refreshStarDisplay(this.selectedStar)}}async onSupernovaButtonClick(){const t=this.universe.getStarManager().getCount();if(t===0){window.alert("宇宙にはまだ星がありません。");return}if(!this.confirmAction(`本当に超新星爆発を起こしますか?

現在登録されている星(${t}個)と、そこに記録した食事のデータは
すべて消え、元に戻すことはできません。`))return;const i=this.getMaxCalorieStar();this.logSupernovaTarget(i),this.supernovaTarget=i,await this.playSupernovaColorChange(i),await this.playSupernovaExpansion(i),this.triggerSupernova()}playSupernovaExpansion(e){if(!e||!e.mesh||!e.mesh.material)return Promise.resolve();const t=e.mesh,n=1e3,i=t.scale.x||1,r=i*2,a=[16720384,16737792,16768256,16720384];return new Promise(o=>{const l=performance.now(),c=h=>{const u=h-l,d=Math.min(u/n,1),f=i+(r-i)*d;t.scale.set(f,f,f);const m=Math.min(Math.floor(d*a.length),a.length-1);t.material.color.set(a[m]),d<1?requestAnimationFrame(c):(t.material.color.set(a[a.length-1]),o())};requestAnimationFrame(c)})}wait(e){return new Promise(t=>setTimeout(t,e))}async playSupernovaColorChange(e){!e||!e.mesh||!e.mesh.material||(e.mesh.material.color.set(16720384),await this.wait(1e3))}getMaxCalorieStar(){const e=this.universe.getStarManager().getAllStars();if(e.length===0)return null;const t=e.reduce((n,i)=>{const r=i.data.calories||0,a=n.data.calories||0;return r>a?i:n});return{star:t,mesh:typeof t.getMesh=="function"?t.getMesh():null,genre:t.data.genre||"(ジャンル不明)",totalCalories:t.data.calories||0}}logSupernovaTarget(e){if(!e){console.log("超新星爆発対象: 星が1つもありませんでした");return}console.log("===================="),console.log("超新星爆発対象"),console.log("ジャンル："+e.genre),console.log("総カロリー："+e.totalCalories+" kcal"),console.log("===================="),console.log("対象の星オブジェクト(Three.js mesh):",e.mesh),console.log("対象の Star インスタンス:",e.star)}triggerSupernova(){[...this.universe.getStarManager().getAllStars()].forEach(n=>{this.removeStarFromScene(n)}),this.selectedStar=null,this.infoPanelMode="normal",this.editingFoodId=null,this.setInfoPanelDefault(),this.resetGenreOptions(),this.saveData()}resetGenreOptions(){const e=document.getElementById("genreSelect"),t=document.getElementById("genreInput");e&&(Array.from(e.options).forEach(n=>{n.value!=="new"&&e.removeChild(n)}),e.value="new",t&&(t.value="",t.disabled=!1))}removeStarFromScene(e){const t=this.sceneManager.getScene();if(!t)return;const n=this.universe.getStarManager();e.getMesh()&&t.remove(e.getMesh()),e.orbitLine&&t.remove(e.orbitLine),typeof n.removeStarByInstance=="function"&&n.removeStarByInstance(e)}refreshStarDisplay(e){e&&this.showStarInfo(e)}setInfoPanelDefault(){this.infoPanel&&(this.infoPanel.innerText=ho),this.infoSummaryEl&&(this.infoSummaryEl.innerHTML=`<span class="info-summary-placeholder">${ho}</span>`)}getUniverse(){return this.universe}}const Og=new Fg;window.app=Og;
