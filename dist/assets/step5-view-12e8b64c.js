import{u as B,a as n,o as V,c as y,d as g,e as f,f as e,t as h,g as C,i as v}from"./index-d9ef3172.js";const E={class:"poll step5"},N={class:"row block"},P=e("div",{class:"block-title"},[e("h1",null,"Шаг 5")],-1),x={key:0,class:"error row"},M=e("div",{class:"row poll-row"},[e("h3",null,"Чему равно выражение 3^2?")],-1),T=e("div",{class:"row"},[e("input",{type:"number",placeholder:"Введите ответ",id:"step5-input"})],-1),O={__name:"step5-view",setup(D){const o=B(),r=n(""),c=n(""),i=n(!1);function u(t,s,l){i.value=t,r.value=s,c.value=l}const k=localStorage.getItem("poll_id"),p=v.get_poll_url+k,d=localStorage.getItem("token"),_=localStorage.getItem("gift");function m(t,s,l,w,b){v.apiPutPollFunc(t,s,l,w,b).then(function(a){a[0]=="error"?u(!0,"Ошибка сети или сервера SIV003",a[1]):a[1].message=="Unauthenticated."&&u(!0,"Ошибка авторизации SIV004","Попробуйте ещё раз")})}function S(){document.getElementById("step5-input").value=="9"?(m(d,p,"step7","0000-00-00 00:00:00",_),localStorage.setItem("last_step","step7"),o.push({name:"step7"})):(m(d,p,"step2","0000-00-00 00:00:00",_),localStorage.setItem("last_step","step2"),localStorage.setItem("error_name","Ответ на шаге 5 был неверный."),localStorage.setItem("error_message","Поэтому вернулись на шаг 2."),o.push({name:"step2"}))}function I(){localStorage.clear(),o.push({name:"sign-in"})}return V(()=>{y.checkToken(o)}),(t,s)=>(g(),f("div",E,[e("div",N,[P,i.value?(g(),f("div",x,[e("p",null,h(r.value),1),e("p",null,h(c.value),1)])):C("",!0),M,T,e("div",{class:"row"},[e("button",{id:"step5-button",onClick:S},"Ответить")]),e("div",{class:"row"},[e("button",{id:"sign-out-button",onClick:I},"Выйти")])])]))}};export{O as default};
