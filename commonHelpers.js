import"./assets/modulepreload-polyfill-3cfb730f.js";import{f as u,i as l}from"./assets/vendor-77e16229.js";let r,s;const t={inputDate:document.querySelector("#datetime-picker"),startBtn:document.querySelector("[data-start]"),days:document.querySelector("[data-days]"),hours:document.querySelector("[data-hours]"),minutes:document.querySelector("[data-minutes]"),seconds:document.querySelector("[data-seconds]")};t.startBtn.disabled=!0;const m={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(e){console.log(e[0]),r=e[0],r>new Date?t.startBtn.disabled=!1:(l.show({title:"Error",message:"Please choose a date in the future",backgroundColor:"#ef4040",titleColor:"#fff",titleSize:"16px",progressBarColor:"#B51B1B",position:"topRight"}),t.startBtn.disabled=!0)}};u("#datetime-picker",m);t.startBtn.addEventListener("click",()=>{s=setInterval(()=>{t.startBtn.disabled=!0,t.inputDate.disabled=!0;const e=Date.now(),n=r-e,o=f(n);t.days.textContent=o.days.toString().padStart(2,"0"),t.hours.textContent=o.hours.toString().padStart(2,"0"),t.minutes.textContent=o.minutes.toString().padStart(2,"0"),t.seconds.textContent=o.seconds.toString().padStart(2,"0"),console.log(t.seconds.textContent),n<1e3&&clearInterval(s)},1e3)});function f(e){const a=Math.floor(e/864e5),d=Math.floor(e%864e5/36e5),i=Math.floor(e%864e5%36e5/6e4),c=Math.floor(e%864e5%36e5%6e4/1e3);return{days:a,hours:d,minutes:i,seconds:c}}
//# sourceMappingURL=commonHelpers.js.map
