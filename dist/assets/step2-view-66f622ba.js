import{u as h,r as o,o as l,c as r,a as e,t as c,b as m}from"./index-75dab780.js";const v={class:"poll step2"},w={class:"row block"},f=e("div",{class:"block-title"},[e("h1",null,"Шаг 2")],-1),g={key:0,class:"error row"},k=e("div",{class:"row poll-row"},[e("h3",null,"Как называется косметический бренд компании Shiawasedo?")],-1),b=e("div",{class:"row"},[e("input",{type:"text",placeholder:"Введите ответ",id:"step2-input"})],-1),y={__name:"step2-view",setup(C){const s=h(),n=o(""),p=o(""),i=o(!1);function u(){const t=document.getElementById("step2-input").value,a=t.toLowerCase().replace("summus","");if(a.length>0){const _=/[a-z0-9]/gi;a.match(_)?s.push({name:"step1"}):s.push({name:"step3"})}else t.length==0?s.push({name:"step1"}):s.push({name:"step3"})}return(t,d)=>(l(),r("div",v,[e("div",w,[f,i.value?(l(),r("div",g,[e("p",null,"Код ошибки: "+c(n.value),1),e("p",null,"Описание ошибки: "+c(p.value),1)])):m("",!0),k,b,e("div",{class:"row"},[e("button",{id:"step2-button",onClick:u},"Ответить")])])]))}};export{y as default};
