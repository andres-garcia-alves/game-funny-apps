(function(e){function n(n){for(var o,a,s=n[0],i=n[1],u=n[2],p=0,m=[];p<s.length;p++)a=s[p],Object.prototype.hasOwnProperty.call(r,a)&&r[a]&&m.push(r[a][0]),r[a]=0;for(o in i)Object.prototype.hasOwnProperty.call(i,o)&&(e[o]=i[o]);d&&d(n);while(m.length)m.shift()();return c.push.apply(c,u||[]),t()}function t(){for(var e,n=0;n<c.length;n++){for(var t=c[n],o=!0,s=1;s<t.length;s++){var i=t[s];0!==r[i]&&(o=!1)}o&&(c.splice(n--,1),e=a(a.s=t[0]))}return e}var o={},r={app:0},c=[];function a(n){if(o[n])return o[n].exports;var t=o[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,a),t.l=!0,t.exports}a.m=e,a.c=o,a.d=function(e,n,t){a.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,n){if(1&n&&(e=a(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(a.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var o in e)a.d(t,o,function(n){return e[n]}.bind(null,o));return t},a.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(n,"a",n),n},a.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},a.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],i=s.push.bind(s);s.push=n,s=s.slice();for(var u=0;u<s.length;u++)n(s[u]);var d=i;c.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("56d7")},"4f62":function(e,n,t){"use strict";t("88dc")},"56d7":function(e,n,t){"use strict";t.r(n);var o=t("7a23");function r(e,n,t,r,c,a){const s=Object(o["k"])("PokemonPage");return Object(o["g"])(),Object(o["d"])("div",null,[Object(o["f"])(s)])}const c=e=>(Object(o["i"])("data-v-bc2be748"),e=e(),Object(o["h"])(),e),a={key:0},s=c(()=>Object(o["e"])("h1",null,"¿Quién es este pokemón?",-1)),i={class:"fade-in"},u={key:1};function d(e,n,t,r,c,d){const p=Object(o["k"])("PokemonPicture"),m=Object(o["k"])("PokemonOptions");return Object(o["g"])(),Object(o["d"])("div",null,[c.pokemon?(Object(o["g"])(),Object(o["d"])("div",a,[s,Object(o["f"])(p,{pokemonId:c.pokemon.id,showPokemon:c.showPokemon},null,8,["pokemonId","showPokemon"]),Object(o["f"])(m,{pokemons:c.pokemonArray,onSelection:n[0]||(n[0]=e=>d.checkAnswer(e))},null,8,["pokemons"]),c.showAnswer?(Object(o["g"])(),Object(o["d"])(o["a"],{key:0},[Object(o["e"])("h2",i,Object(o["l"])(c.message),1),Object(o["e"])("button",{onClick:n[1]||(n[1]=(...e)=>d.newGame&&d.newGame(...e))},"Nuevo juego")],64)):Object(o["c"])("",!0)])):(Object(o["g"])(),Object(o["d"])("h2",u,"espere por favor..."))])}const p={class:"pokemon-container"},m=["src"],l=["src"];function b(e,n,t,r,c,a){return Object(o["g"])(),Object(o["d"])("div",p,[t.showPokemon?(Object(o["g"])(),Object(o["d"])("img",{key:1,src:a.imgSrc,class:"fade-in",alt:"pokemon"},null,8,l)):(Object(o["g"])(),Object(o["d"])("img",{key:0,src:a.imgSrc,class:"hidden-pokemon",alt:"pokemon"},null,8,m))])}var k={props:{pokemonId:{type:Number,requiered:!0,validator:e=>e<600},showPokemon:{type:Boolean,requiered:!0,default:!1}},data(){return{id:this.pokemonId}},computed:{imgSrc(){return`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${this.pokemonId}.svg`}}},f=(t("7615"),t("6b0d")),h=t.n(f);const O=h()(k,[["render",b],["__scopeId","data-v-3e888164"]]);var j=O;const g={class:"options-container"},y=["onClick"];function v(e,n,t,r,c,a){return Object(o["g"])(),Object(o["d"])("div",g,[Object(o["e"])("ul",null,[(Object(o["g"])(!0),Object(o["d"])(o["a"],null,Object(o["j"])(t.pokemons,n=>(Object(o["g"])(),Object(o["d"])("li",{key:n.id,onClick:t=>e.$emit("selection",n.id)},Object(o["l"])(n.name),9,y))),128))])])}var w={props:{pokemons:{type:Array,requiered:!0}}};t("fa70");const P=h()(w,[["render",v],["__scopeId","data-v-662034d4"]]);var A=P,_=t("cee4");const x=_["a"].create({baseURL:"https://pokeapi.co/api/v2/pokemon"});var I=x;const S=()=>{const e=Array.from(Array(650));return e.map((e,n)=>n+1)},M=async([e,n,t,o]=[])=>{const r=[I.get("/"+e),I.get("/"+n),I.get("/"+t),I.get("/"+o)],[c,a,s,i]=await Promise.all(r);return[{id:c.data.id,name:c.data.name},{id:a.data.id,name:a.data.name},{id:s.data.id,name:s.data.name},{id:i.data.id,name:i.data.name}]},C=async()=>{const e=S().sort(()=>Math.random()-.5);return await M(e.splice(0,4))};var $=C,q={name:"PokemonPage",components:{PokemonPicture:j,PokemonOptions:A},data(){return{pokemonArray:[],pokemon:null,showPokemon:!1,showAnswer:!1,message:""}},methods:{async mixPokemonArray(){this.pokemonArray=await $();const e=Math.floor(4*Math.random());this.pokemon=this.pokemonArray[e]},checkAnswer(e){this.showPokemon=!0,this.showAnswer=!0,this.message=e===this.pokemon.id?`Correcto, ${this.pokemon.name}.`:`Ups, en realidad es: ${this.pokemon.name}.`},async newGame(){this.pokemonArray=[],this.pokemon=null,this.showPokemon=!1,this.showAnswer=!1,this.message="",await this.mixPokemonArray()}},mounted(){this.mixPokemonArray()}};t("cd23");const G=h()(q,[["render",d],["__scopeId","data-v-bc2be748"]]);var J=G,N={name:"App",components:{PokemonPage:J}};t("4f62");const T=h()(N,[["render",r]]);var U=T;t("90c2"),t("6924");Object(o["b"])(U).mount("#app")},6024:function(e,n,t){},6924:function(e,n,t){},7615:function(e,n,t){"use strict";t("b62e")},"88dc":function(e,n,t){},"90c2":function(e,n,t){},b62e:function(e,n,t){},cd23:function(e,n,t){"use strict";t("e33e")},e33e:function(e,n,t){},fa70:function(e,n,t){"use strict";t("6024")}});
//# sourceMappingURL=app.a4dc39a2.js.map