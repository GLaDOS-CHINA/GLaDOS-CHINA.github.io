'use strict';
const en = document.documentElement.lang === 'en';
const text = en ? {
  unavailable: 'This photograph could not be loaded.',
  credit: 'Photography: GLaDOS-CHINA · Instagram @GLADOSLOVE',
  all: n => `Showing all ${n} photographs`,
  group: (name,n) => `Showing ${name}: ${n} photographs`
} : {
  unavailable: '影像暫時無法載入',
  credit: '攝影：GLaDOS-CHINA · Instagram @GLADOSLOVE',
  all: n => `顯示全部 ${n} 件作品`,
  group: (name,n) => `顯示${name}：${n} 件作品`
};
const viewer = document.querySelector('dialog');
const large = document.querySelector('#large');
const frame = document.querySelector('#large-frame');
const caption = document.querySelector('#large-caption');
const errorMessage = document.querySelector('#viewer-error');
const works = [...document.querySelectorAll('.open')];
const filters = [...document.querySelectorAll('[data-filter]')];
let active = works, current = 0;
function show(index) {
  if (!active.length) return;
  current = (index + active.length) % active.length;
  const button = active[current];
  errorMessage.hidden = true;
  frame.hidden = false;
  frame.style.cssText = button.dataset.crop;
  large.alt = button.dataset.desc;
  large.src = button.dataset.full;
  caption.textContent = `${button.dataset.title} — ${button.dataset.desc} ${text.credit}`;
  document.querySelector('#position').textContent = `${current + 1} / ${active.length}`;
}
works.forEach(button => {
  const image = button.querySelector('img');
  function failed() {
    button.classList.add('failed');
    button.disabled = true;
    button.textContent = text.unavailable;
  }
  image.addEventListener('error', failed);
  if (image.complete && !image.naturalWidth) failed();
  button.addEventListener('click', () => {
    active = works.filter(b => !b.closest('figure').hidden && !b.disabled);
    show(active.indexOf(button));
    viewer.showModal();
  });
});
large.addEventListener('error', () => {
  if (!large.getAttribute('src')) return;
  frame.hidden = true;
  errorMessage.textContent = text.unavailable;
  errorMessage.hidden = false;
});
document.querySelector('#close').addEventListener('click', () => viewer.close());
document.querySelector('#prev').addEventListener('click', () => show(current - 1));
document.querySelector('#next').addEventListener('click', () => show(current + 1));
viewer.addEventListener('keydown', event => {
  if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
    event.preventDefault();
    show(current + (event.key === 'ArrowLeft' ? -1 : 1));
  }
});
viewer.addEventListener('click', event => {
  if (event.target !== viewer) return;
  const rect = viewer.getBoundingClientRect();
  if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) viewer.close();
});
viewer.addEventListener('close', () => {
  large.removeAttribute('src');
  large.alt = '';
});
function selectCategory(selected) {
  const chosen = filters.find(b => b.dataset.filter === selected) || filters[0];
  selected = chosen.dataset.filter;
  filters.forEach(b => b.setAttribute('aria-pressed', String(b === chosen)));
  const figures = [...document.querySelectorAll('figure[data-category]')];
  figures.forEach(f => { f.hidden = selected !== 'all' && f.dataset.category !== selected; });
  document.querySelectorAll('[data-group]').forEach(s => { s.hidden = selected !== 'all' && s.dataset.group !== selected; });
  const count = figures.filter(f => !f.hidden).length;
  const name = chosen.textContent.split(' · ')[0];
  document.querySelector('.work-count').textContent = selected === 'all' ? text.all(count) : text.group(name,count);
  const url = new URL(location.href);
  if (selected === 'all') url.searchParams.delete('category');
  else url.searchParams.set('category',selected);
  try { history.replaceState(null,'',url); } catch (_) { /* File previews keep working without URL updates. */ }
  document.querySelectorAll('.languages a').forEach(a => {
    const target = new URL(a.getAttribute('href'),location.href);
    if (selected === 'all') target.searchParams.delete('category');
    else target.searchParams.set('category',selected);
    a.href = target.href;
  });
}
filters.forEach(b => b.addEventListener('click', () => selectCategory(b.dataset.filter)));
selectCategory(new URL(location.href).searchParams.get('category') || 'all');
