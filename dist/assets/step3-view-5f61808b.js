import{u as v,r as l,o as p,c as i,a as e,t as n,b as m,d as b}from"./index-75dab780.js";const h={class:"poll step3"},_={class:"row block"},w=e("div",{class:"block-title"},[e("h1",null,"Шаг 3")],-1),f={key:0,class:"error row"},k=b('<div class="row poll-row"><h3>Отметьте среди указанных все простые числа:</h3></div><div class="row poll-row"><input type="checkbox" id="step3-2" name="step3" value="2"><label for="step3-2">2</label></div><div class="row poll-row"><input type="checkbox" id="step3-4" name="step3" value="4"><label for="step3-4">4</label></div><div class="row poll-row"><input type="checkbox" id="step3-11" name="step3" value="11"><label for="step3-11">11</label></div><div class="row poll-row"><input type="checkbox" id="step3-8" name="step3" value="8"><label for="step3-8">8</label></div><div class="row poll-row"><input type="checkbox" id="step3-22" name="step3" value="22"><label for="step3-22">22</label></div>',6),V={__name:"step3-view",setup(x){const o=v(),a=l(""),c=l(""),r=l(!1);function u(s){return new Promise(t=>setTimeout(t,s))}function d(){const s=document.querySelectorAll('input[name="step3"]:checked');s.length==2&&(s[0].value+s[1].value=="211"?o.push({name:"step6"}):(a.value="Вы заморожены.",c.value="До разморозки осталось: <оставшееся время>.",r.value=!0,u(6e5).then(()=>{o.push({name:"step4"})})))}return(s,t)=>(p(),i("div",h,[e("div",_,[w,r.value?(p(),i("div",f,[e("p",null,n(a.value),1),e("p",null,n(c.value),1)])):m("",!0),k,e("div",{class:"row"},[e("button",{id:"step3-button",onClick:d},"Ответить")])])]))}};export{V as default};
