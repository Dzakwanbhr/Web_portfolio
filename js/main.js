const menuToggle=document.querySelector('.menu-toggle');
const navLinks=document.getElementById('navLinks');
if(menuToggle){menuToggle.addEventListener('click',()=>{const open=navLinks.classList.toggle('open');menuToggle.setAttribute('aria-expanded',open)});navLinks.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>navLinks.classList.remove('open')))}
const progress=document.getElementById('progressBar');
const updateProgress=()=>{const h=document.documentElement;const max=h.scrollHeight-h.clientHeight;progress.style.width=(max>0?(h.scrollTop/max)*100:0)+'%'};
window.addEventListener('scroll',updateProgress,{passive:true}); updateProgress();
const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('visible')}),{threshold:.1});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));
const exportPdf=()=>window.print();
['exportPdfBtn','contactPdfBtn'].forEach(id=>{const el=document.getElementById(id);if(el)el.addEventListener('click',exportPdf)});
