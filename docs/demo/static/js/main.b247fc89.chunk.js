(this["webpackJsonplds-ecdsa-secp256k1-2019-demo"]=this["webpackJsonplds-ecdsa-secp256k1-2019-demo"]||[]).push([[0],{123:function(e,t,n){"use strict";(function(e){n.d(t,"b",(function(){return v})),n.d(t,"c",(function(){return m}));var r=n(7),i=n(124),a=n.n(i),c=n(33),o=n.n(c),u=n(47),s=n.n(u),f=n(25),d=n(435),l=n.n(d),p=function(t){var n=Object(r.a)({},t);delete n.d,delete n.kid,delete n.alg;var i=s.a.createHash("sha256").update(l()(n)).digest();return o.a.encode(e.from(i))},b=function(e){return Object(r.b)(void 0,void 0,void 0,(function(){return Object(r.d)(this,(function(t){return[2,a.a.from(Object(r.a)(Object(r.a)({},e),{crv:"K-256"}),"jwk").toString("blk","private")]}))}))},h=function(e){return Object(r.b)(void 0,void 0,void 0,(function(){var t,n,i;return Object(r.d)(this,(function(c){switch(c.label){case 0:return[4,Object(f.c)()];case 1:return t=c.sent(),n=a.a.from(Object(r.a)(Object(r.a)({},e),{crv:"K-256"}),"jwk").toString("blk","public"),i=t.compressPublicKey(Object(f.b)(n)),[2,Object(f.a)(i)]}}))}))},v=function(e){return Object(r.b)(void 0,void 0,void 0,(function(){var t;return Object(r.d)(this,(function(n){switch(n.label){case 0:return[4,b(e)];case 1:return t=n.sent(),[2,Object(f.b)(t)]}}))}))},m=function(e){return Object(r.b)(void 0,void 0,void 0,(function(){var t;return Object(r.d)(this,(function(n){switch(n.label){case 0:return[4,h(e)];case 1:return t=n.sent(),[2,Object(f.b)(t)]}}))}))};t.a={binToHex:f.a,getKid:p,hexToBin:f.b,privateJWKFromPrivateKeyHex:function(e){return Object(r.b)(void 0,void 0,void 0,(function(){var t,n;return Object(r.d)(this,(function(i){return t=Object(r.a)(Object(r.a)({},a.a.from(e,"blk").toJwk("private")),{crv:"secp256k1"}),n=p(t),[2,Object(r.a)(Object(r.a)({},t),{kid:n})]}))}))},privateJWKFromPrivateKeyPem:function(e){var t=Object(r.a)(Object(r.a)({},a.a.from(e,"pem").toJwk("private")),{crv:"secp256k1"}),n=p(t);return Object(r.a)(Object(r.a)({},t),{kid:n})},privateKeyHexFromJWK:b,privateKeyUInt8ArrayFromJWK:v,publicJWKFromPublicKeyHex:function(e){return Object(r.b)(void 0,void 0,void 0,(function(){var t,n,i,c;return Object(r.d)(this,(function(o){switch(o.label){case 0:return[4,Object(f.c)()];case 1:return t=o.sent(),n=e,66===e.length&&(n=Object(f.a)(t.uncompressPublicKey(Object(f.b)(e)))),i=Object(r.a)(Object(r.a)({},a.a.from(n,"blk").toJwk("public")),{crv:"secp256k1"}),c=p(i),[2,Object(r.a)(Object(r.a)({},i),{kid:c})]}}))}))},publicJWKFromPublicKeyPem:function(e){var t=Object(r.a)(Object(r.a)({},a.a.from(e,"pem").toJwk("public")),{crv:"secp256k1"}),n=p(t);return Object(r.a)(Object(r.a)({},t),{kid:n})},publicKeyHexFromJWK:h,publicKeyUInt8ArrayFromJWK:m}}).call(this,n(1).Buffer)},134:function(e,t){},141:function(e,t){},158:function(e,t){},170:function(e,t){},173:function(e,t,n){"use strict";(function(e){var r=n(142),i=n(122),a=n(2),c=n(0),o=n.n(c),u=n(30),s=n(439),f=n(123),d=n(434),l=n.n(d);var p=function(){function t(e){Object(r.a)(this,t),this.controller=e.controller,this.type=e.type||"EcdsaSecp256k1VerificationKey2019",this.privateKeyJwk=e.privateKeyJwk,this.publicKeyJwk=e.publicKeyJwk,this.alg="ES256K",void 0===this.publicKeyJwk&&(this.publicKeyJwk=Object.assign({},this.privateKeyJwk),delete this.publicKeyJwk.d),this.id=e.id||this.controller+"#"+this.fingerprint()}return Object(i.a)(t,null,[{key:"from",value:function(e){return u.a(this,void 0,void 0,o.a.mark((function n(){return o.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",new t(e));case 1:case"end":return n.stop()}}),n)})))}},{key:"fingerprintFromPublicKey",value:function(e){var t=e.publicKeyJwk,n=Object.assign({},t);return delete n.kid,f.a.getKid(n)}}]),Object(i.a)(t,[{key:"signer",value:function(){return(t=this).privateKeyJwk?{sign:function(n){var r=n.data;return u.a(this,void 0,void 0,o.a.mark((function n(){var i,a;return o.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return i={alg:"ES256K",b64:!1,crit:["b64"]},a=e.from(r.buffer,r.byteOffset,r.length),n.abrupt("return",s.a.signDetached(a,t.privateKeyJwk,i));case 3:case"end":return n.stop()}}),n)})))}}:{sign:function(e){return e.data,u.a(this,void 0,void 0,o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:throw new Error("No private key to sign with.");case 1:case"end":return e.stop()}}),e)})))}};var t}},{key:"verifier",value:function(){return(t=this).publicKeyJwk?{verify:function(n){var r=n.data,i=n.signature;return u.a(this,void 0,void 0,o.a.mark((function n(){var c,u,f,d,p,b,h,v;return o.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:c="ES256K",u="EcdsaSecp256k1VerificationKey2019",f=i.split(".."),d=Object(a.a)(f,2),p=d[0],d[1],n.prev=3,b=JSON.parse(l.a.decode(p)),n.next=10;break;case 7:throw n.prev=7,n.t0=n.catch(3),new Error("Could not parse JWS header; "+n.t0);case 10:if(b&&"object"===typeof b){n.next=12;break}throw new Error("Invalid JWS header.");case 12:if(b.alg===c&&!1===b.b64&&Array.isArray(b.crit)&&1===b.crit.length&&"b64"===b.crit[0]||3!==Object.keys(b).length){n.next=14;break}throw new Error("Invalid JWS header parameters for ".concat(u,"."));case 14:return h=!1,v=e.from(r.buffer,r.byteOffset,r.length),n.prev=16,n.next=19,s.a.verifyDetached(i,v,t.publicKeyJwk);case 19:h=!0,n.next=24;break;case 22:n.prev=22,n.t1=n.catch(16);case 24:return n.abrupt("return",h);case 25:case"end":return n.stop()}}),n,null,[[3,7],[16,22]])})))}}:{verify:function(){return u.a(this,void 0,void 0,o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:throw new Error("No public key to verify with.");case 1:case"end":return e.stop()}}),e)})))}};var t}},{key:"addEncodedPublicKey",value:function(e){return e.publicKeyJwk=this.publicKeyJwk,e}},{key:"fingerprint",value:function(){var e=Object.assign({},this.publicKeyJwk);return delete e.kid,f.a.getKid(e)}},{key:"publicNode",value:function(){var e=this.controller,t={id:this.id,type:this.type};return e&&(t.controller=e),this.addEncodedPublicKey(t),t}}]),t}();t.a=p}).call(this,n(1).Buffer)},225:function(e,t){},230:function(e,t){},256:function(e,t){},257:function(e,t){},275:function(e,t){},280:function(e,t){},289:function(e,t){},290:function(e,t){},328:function(e,t){},379:function(e,t){},393:function(e,t,n){"use strict";(function(e){var r=n(0),i=n.n(r),a=n(142),c=n(122),o=n(103),u=n(293),s=n(214),f=n(215),d=n(30),l=n(175),p=n.n(l),b=n(436),h=n.n(b),v=n(173),m=h.a.suites.LinkedDataSignature,y=function(t){Object(f.a)(r,t);var n=Object(s.a)(r);function r(e){e.signer;var t,i=e.key,c=e.date,o=e.useNativeCanonize;if(Object(a.a)(this,r),(t=n.call(this,{type:"EcdsaSecp256k1Signature2019",LDKeyClass:v.a,date:c,useNativeCanonize:o})).alg="ES256K",t.LDKeyClass=v.a,i){var u=i.publicNode();t.verificationMethod=u.id,t.key=i,"function"===typeof i.signer&&(t.signer=i.signer()),"function"===typeof i.verifier&&(t.verifier=i.verifier(i,t.alg,t.type))}return t}return Object(c.a)(r,[{key:"sign",value:function(e){var t=e.verifyData,n=e.proof;return d.a(this,void 0,void 0,i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(this.signer&&"function"===typeof this.signer.sign){e.next=2;break}throw new Error("A signer API has not been specified.");case 2:return e.next=4,this.signer.sign({data:t});case 4:return n.jws=e.sent,e.abrupt("return",n);case 6:case"end":return e.stop()}}),e,this)})))}},{key:"verifySignature",value:function(t){var n=t.verifyData,r=t.verificationMethod,a=t.proof;return d.a(this,void 0,void 0,i.a.mark((function t(){var c,o;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(c=this.verifier){t.next=6;break}return t.next=4,this.LDKeyClass.from(r);case 4:o=t.sent,c=o.verifier(o,this.alg,this.type);case 6:return t.abrupt("return",c.verify({data:e.from(n),signature:a.jws}));case 7:case"end":return t.stop()}}),t,this)})))}},{key:"assertVerificationMethod",value:function(e){var t=e.verificationMethod;return d.a(this,void 0,void 0,i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(p.a.hasValue(t,"type","EcdsaSecp256k1VerificationKey2019")){e.next=2;break}throw new Error('Invalid key type. Key type must be "'.concat("EcdsaSecp256k1VerificationKey2019",'".'));case 2:case"end":return e.stop()}}),e)})))}},{key:"getVerificationMethod",value:function(e){var t=this,n=e.proof,a=e.documentLoader,c=Object.create(null,{getVerificationMethod:{get:function(){return Object(u.a)(Object(o.a)(r.prototype),"getVerificationMethod",t)}}});return d.a(this,void 0,void 0,i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!this.key){e.next=2;break}return e.abrupt("return",this.key.publicNode());case 2:return e.next=4,c.getVerificationMethod.call(this,{proof:n,documentLoader:a});case 4:return t=e.sent,e.next=7,this.assertVerificationMethod({verificationMethod:t});case 7:return e.abrupt("return",t);case 8:case"end":return e.stop()}}),e,this)})))}},{key:"matchProof",value:function(e){var t=this,n=e.proof,a=e.document,c=e.purpose,s=e.documentLoader,f=e.expansionMap,l=Object.create(null,{matchProof:{get:function(){return Object(u.a)(Object(o.a)(r.prototype),"matchProof",t)}}});return d.a(this,void 0,void 0,i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l.matchProof.call(this,{proof:n,document:a,purpose:c,documentLoader:s,expansionMap:f});case 2:if(e.sent){e.next=4;break}return e.abrupt("return",!1);case 4:if(this.key){e.next=6;break}return e.abrupt("return",!0);case 6:if("object"!==typeof(t=n.verificationMethod)){e.next=9;break}return e.abrupt("return",t.id===this.key.id);case 9:return e.abrupt("return",t===this.key.id);case 10:case"end":return e.stop()}}),e,this)})))}}]),r}(m);t.a=y}).call(this,n(1).Buffer)},420:function(e,t){},431:function(e,t){},432:function(e,t,n){"use strict";(function(e){var r=n(0),i=n.n(r),a=n(143),c=n(30),o=n(175),u=n.n(o),s=n(438),f=!("undefined"!==typeof e&&e.versions&&e.versions.node)&&("undefined"!==typeof window||"undefined"!==typeof self)?u.a.documentLoaders.xhr():u.a.documentLoaders.node();t.a=function(e){return c.a(void 0,void 0,void 0,i.a.mark((function t(){var n,r,c,o;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(0!==e.indexOf("did:")){t.next=23;break}return t.next=3,s.a.resolve(e);case 3:if(n=t.sent,!e.indexOf("#")){t.next=22;break}r=Object(a.a)(n.publicKey),t.prev=6,r.s();case 8:if((c=r.n()).done){t.next=14;break}if((o=c.value).id!==e){t.next=12;break}return t.abrupt("return",{contextUrl:null,document:o,documentUrl:e});case 12:t.next=8;break;case 14:t.next=19;break;case 16:t.prev=16,t.t0=t.catch(6),r.e(t.t0);case 19:return t.prev=19,r.f(),t.finish(19);case 22:return t.abrupt("return",{contextUrl:null,document:n,documentUrl:e});case 23:return t.abrupt("return",f(e));case 24:case"end":return t.stop()}}),t,null,[[6,16,19,22]])})))}}).call(this,n(19))},438:function(e,t,n){"use strict";var r=n(0),i=n.n(r),a=n(30),c=n(437),o=n.n(c),u=["assertionMethod","authentication","capabilityDelegation","capabilityInvocation"],s=["publicKey","keyAgreement"],f=function(e){var t=JSON.parse(JSON.stringify(Object.assign({},e)));return s.forEach((function(e){t[e]&&t[e].forEach((function(e){"#"===e.id[0]&&(e.id=t.id+e.id),e.controller||(e.controller=t.id)}))})),u.forEach((function(e){t[e]&&(t[e]=t[e].map((function(e){return"#"===e[0]?t.id+e:e})))})),t},d=function(e){return a.a(void 0,void 0,void 0,i.a.mark((function t(){return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",o()(e,{headers:{Accept:"application/ld+json"},method:"get"}).then((function(e){return e.json()})));case 1:case"end":return t.stop()}}),t)})))},l=function(e){var t=e.id&&0===e.id.indexOf("did:")?e:Object.assign({},e.didDocument);return e.methodMetadata&&(e.methodMetadata.continuation.publicKey&&(t.publicKey=e.methodMetadata.continuation.publicKey),e.methodMetadata.continuation.assertionMethod&&(t.assertionMethod=e.methodMetadata.continuation.assertionMethod),e.methodMetadata.continuation.authentication&&(t.authentication=e.methodMetadata.continuation.authentication),e.methodMetadata.continuation.capabilityInvocation&&(t.capabilityInvocation=e.methodMetadata.continuation.capabilityInvocation),e.methodMetadata.continuation.capabilityDelegation&&(t.capabilityDelegation=e.methodMetadata.continuation.capabilityDelegation),e.methodMetadata.continuation.keyAgreement&&(t.keyAgreement=e.methodMetadata.continuation.keyAgreement)),t};t.a={resolve:function(e){return a.a(void 0,void 0,void 0,i.a.mark((function t(){var n,r,a,c,o;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:t.prev=0,n=e.split(":").splice(0,2).join(":"),t.t0=n,t.next="did:elem"===t.t0?5:9;break;case 5:return t.next=7,d("https://element-did.com/api/v1/sidetree/"+e);case 7:return r=t.sent,t.abrupt("break",12);case 9:return t.next=11,d("https://uniresolver.io/1.0/identifiers/"+e);case 11:r=t.sent;case 12:if(null!==r.didDocument){t.next=14;break}throw new Error("Could not resolve DID with Universal Resolver.");case 14:return t.next=16,l(r);case 16:return a=t.sent,c=f(a),o=c,t.abrupt("return",o);case 22:throw t.prev=22,t.t1=t.catch(0),new Error(t.t1);case 25:case"end":return t.stop()}}),t,null,[[0,22]])})))}}},439:function(e,t,n){"use strict";(function(e){var r=n(7),i=n(33),a=n.n(i),c=n(25),o=n(47),u=n.n(o),s=n(123),f=function(e){function t(t){var n=e.call(this,t)||this;return n.name="JWSVerificationFailed",n}return Object(r.c)(t,e),t}(Error);t.a={decode:function(e,t){void 0===t&&(t={complete:!1});var n=e.split("."),r=n[0],i=n[1],c=n[2];return t.complete?{header:JSON.parse(a.a.decode(r)),payload:JSON.parse(a.a.decode(i)),signature:c}:JSON.parse(a.a.decode(i))},sign:function(t,n,i){return void 0===i&&(i={alg:"ES256K"}),Object(r.b)(void 0,void 0,void 0,(function(){var o,f,d,l,p,b,h,v,m,y,g;return Object(r.d)(this,(function(r){switch(r.label){case 0:return[4,Object(s.b)(n)];case 1:return o=r.sent(),[4,Object(c.c)()];case 2:return f=r.sent(),d=a.a.encode(JSON.stringify(i)),l=a.a.encode(JSON.stringify(t)),p=d+"."+l,b=e.from(p),h=u.a.createHash("sha256").update(b).digest().toString("hex"),v=Object(c.b)(h),m=f.signMessageHashCompact(o,v),y=Object(c.a)(m),g=a.a.encode(e.from(y,"hex")),[2,d+"."+l+"."+g]}}))}))},signDetached:function(t,n,i){return void 0===i&&(i={alg:"ES256K",b64:!1,crit:["b64"]}),Object(r.b)(void 0,void 0,void 0,(function(){var o,f,d,l,p,b,h,v,m,y;return Object(r.d)(this,(function(r){switch(r.label){case 0:return[4,Object(s.b)(n)];case 1:return o=r.sent(),[4,Object(c.c)()];case 2:return f=r.sent(),d=a.a.encode(JSON.stringify(i)),l=e.concat([e.from(d+".","utf8"),e.from(t.buffer,t.byteOffset,t.length)]),p=e.from(l),b=u.a.createHash("sha256").update(p).digest().toString("hex"),h=Object(c.b)(b),v=f.signMessageHashCompact(o,h),m=Object(c.a)(v),y=a.a.encode(e.from(m,"hex")),[2,d+".."+y]}}))}))},verify:function(t,n){return Object(r.b)(void 0,void 0,void 0,(function(){var i,o,d,l,p,b,h,v,m,y,g;return Object(r.d)(this,(function(r){switch(r.label){case 0:return[4,Object(c.c)()];case 1:return i=r.sent(),[4,Object(s.c)(n)];case 2:if(o=r.sent(),d=t.split("."),l=d[0],p=d[1],b=d[2],h=l+"."+p,v=e.from(h),m=u.a.createHash("sha256").update(v).digest().toString("hex"),y=Object(c.b)(m),g=Object(c.b)(a.a.toBuffer(b).toString("hex")),i.verifySignatureCompact(g,o,y))return[2,JSON.parse(a.a.decode(p))];throw new f("signature verification failed")}}))}))},verifyDetached:function(t,n,i){return Object(r.b)(void 0,void 0,void 0,(function(){var o,d,l,p,b,h,v,m,y,g,k;return Object(r.d)(this,(function(r){switch(r.label){case 0:if(-1===t.indexOf(".."))throw new f("not a valid rfc7797 jws.");if(o=t.split(".."),d=o[0],l=o[1],"ES256K"!==(p=JSON.parse(a.a.decode(d))).alg)throw new Error("JWS alg is not signed with ES256K.");if(!1!==p.b64||!p.crit||!p.crit.length||"b64"!==p.crit[0])throw new Error("JWS Header is not in rfc7797 format (not detached).");return[4,Object(s.c)(i)];case 1:return b=r.sent(),[4,Object(c.c)()];case 2:if(h=r.sent(),v=e.concat([e.from(d+".","utf8"),e.from(n.buffer,n.byteOffset,n.length)]),m=e.from(v),y=u.a.createHash("sha256").update(m).digest().toString("hex"),g=Object(c.b)(y),k=Object(c.b)(a.a.toBuffer(l).toString("hex")),h.verifySignatureCompact(k,b,g))return[2,!0];throw new Error("Cannot verify detached signature.")}}))}))}}}).call(this,n(1).Buffer)},440:function(e,t,n){e.exports=n(805)},445:function(e,t,n){},461:function(e,t){},471:function(e,t){},479:function(e,t){},480:function(e,t){},498:function(e,t){},506:function(e,t){},524:function(e,t){},526:function(e,t){},556:function(e,t){},558:function(e,t){},564:function(e,t){},566:function(e,t){},579:function(e,t){},596:function(e,t){},609:function(e,t){},632:function(e,t){},633:function(e,t){},639:function(e,t,n){"use strict";n.r(t);var r=n(173);n.d(t,"EcdsaSecp256k1KeyClass2019",(function(){return r.a}));var i=n(393);n.d(t,"EcdsaSecp256k1Signature2019",(function(){return i.a}));var a=n(432);n.d(t,"defaultDocumentLoader",(function(){return a.a}))},647:function(e,t){},665:function(e,t){},689:function(e,t){},692:function(e,t){},701:function(e,t){},702:function(e,t){},712:function(e,t){},721:function(e,t){},722:function(e,t){},739:function(e,t){},775:function(e,t){},776:function(e,t){},786:function(e,t){},795:function(e,t){},796:function(e,t){},805:function(e,t,n){"use strict";n.r(t);var r=n(102),i=n.n(r),a=n(433),c=n.n(a),o=(n(445),n(0)),u=n.n(o),s=n(22),f=n(142),d=n(122),l=n(214),p=n(215),b=n(216),h=b.purposes.AssertionProofPurpose,v=n(639),m=v.EcdsaSecp256k1KeyClass2019,y=v.EcdsaSecp256k1Signature2019,g=v.defaultDocumentLoader,k=n(782),O=function(e){Object(p.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(f.a)(this,n);for(var r=arguments.length,i=new Array(r),a=0;a<r;a++)i[a]=arguments[a];return(e=t.call.apply(t,[this].concat(i))).state={},e}return Object(d.a)(n,[{key:"componentWillMount",value:function(){var e=Object(s.a)(u.a.mark((function e(){var t,n,r,i,a,c,o,s;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={"@context":[{schema:"http://schema.org/",name:"schema:name",homepage:"schema:url",image:"schema:image"}],name:"Manu Sporny",homepage:"https://manu.sporny.org/",image:"https://manu.sporny.org/images/manu.png"},this.setState({doc:t}),n=new m({id:"did:elem:EiChaglAoJaBq7bGWp6bA5PAQKaOTzVHVXIlJqyQbljfmg#qfknmVDhMi3Uc190IHBRfBRqMgbEEBRzWOj1E9EmzwM",controller:"did:elem:EiChaglAoJaBq7bGWp6bA5PAQKaOTzVHVXIlJqyQbljfmg",privateKeyJwk:{kty:"EC",crv:"secp256k1",d:"wNZx20zCHoOehqaBOFsdLELabfv8sX0612PnuAiyc-g",x:"NbASvplLIO_XTzP9R69a3MuqOO0DQw2LGnhJjirpd4w",y:"EiZOvo9JWPz1yGlNNW66IV8uA44EQP_Yv_E7OZl1NG0",kid:"qfknmVDhMi3Uc190IHBRfBRqMgbEEBRzWOj1E9EmzwM"}}),r=new y({key:n}),e.next=6,b.sign(t,{compactProof:!1,documentLoader:g,purpose:new h,suite:r});case 6:return i=e.sent,this.setState({signed:i}),e.next=10,b.verify(i,{suite:r,compactProof:!1,documentLoader:g,purpose:new h});case 10:return(a=e.sent).verified||console.log(a),this.setState({verified:a}),c={"@context":["https://www.w3.org/2018/credentials/v1","https://www.w3.org/2018/credentials/examples/v1"],id:"https://example.com/credentials/1872",type:["VerifiableCredential","AlumniCredential"],issuer:n.controller,issuanceDate:"2010-01-01T19:23:24Z",credentialSubject:{id:"did:example:ebfeb1f712ebc6f1c276e12ec21",alumniOf:"Example University"}},e.next=16,k.issue({credential:c,suite:r});case 16:return o=e.sent,this.setState({vc_issued:o}),e.next=20,k.verify({credential:o,suite:r,documentLoader:g});case 20:s=e.sent,this.setState({vc_verified:s});case 22:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return i.a.createElement("div",{className:"App"},i.a.createElement("h5",null,"EcdsaSecp256k1Signature2019"),i.a.createElement("pre",null,JSON.stringify(this.state,null,2)))}}]),n}(i.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(i.a.createElement(O,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[440,1,2]]]);
//# sourceMappingURL=main.b247fc89.chunk.js.map