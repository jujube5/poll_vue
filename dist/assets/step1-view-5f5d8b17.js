import{u as d,r as t,o as a,c as l,a as e,t as r,b as u,d as v}from"./index-75dab780.js";const _={class:"poll step1"},m={class:"row block"},h=e("div",{class:"block-title"},[e("h1",null,"Шаг 1")],-1),f={key:0,class:"error row"},w=v('<div class="row poll-row"><h3>Чему равно следующее выражение? 5!</h3></div><div class="row poll-row"><input type="radio" id="step1-120" name="step1" value="120"><label for="step1-120">120</label></div><div class="row poll-row"><input type="radio" id="step1-5" name="step1" value="5"><label for="step1-5">5</label></div>',3),N={__name:"step1-view",setup(b){const o=d(),c=t(""),i=t(""),n=t(!1);function p(){const s=document.querySelector('input[name="step1"]:checked').value;s=="120"&&o.push({name:"step3"}),s=="5"&&o.push({name:"step2"})}return(s,k)=>(a(),l("div",_,[e("div",m,[h,n.value?(a(),l("div",f,[e("p",null,"Код ошибки: "+r(c.value),1),e("p",null,"Описание ошибки: "+r(i.value),1)])):u("",!0),w,e("div",{class:"row"},[e("button",{id:"step1-button",onClick:p},"Ответить")])])]))}};export{N as default};
