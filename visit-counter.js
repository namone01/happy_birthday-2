(function(){
  const namespace = 'happy_birthday_2_project';
  const key = 'visits';
  const endpoint = `https://api.countapi.xyz/hit/${namespace}/${key}`;

  function createBadge() {
    const badge = document.createElement('div');
    badge.id = 'visit-counter';
    badge.style.position = 'fixed';
    badge.style.right = '12px';
    badge.style.bottom = '12px';
    badge.style.padding = '8px 10px';
    badge.style.background = 'rgba(0,0,0,0.6)';
    badge.style.color = '#fff';
    badge.style.fontFamily = 'sans-serif';
    badge.style.fontSize = '14px';
    badge.style.borderRadius = '8px';
    badge.style.zIndex = 9999;
    badge.style.backdropFilter = 'blur(4px)';
    badge.innerHTML = 'Truy cập: <span class="count">...</span>';
    document.body.appendChild(badge);
    return badge;
  }

  function updateCount(el, value){
    const span = el.querySelector('.count');
    if(span) span.textContent = value;
  }

  document.addEventListener('DOMContentLoaded', function(){
    const badge = createBadge();
    fetch(endpoint)
      .then(res => res.json())
      .then(data => {
        if(data && typeof data.value !== 'undefined') updateCount(badge, data.value);
      })
      .catch(()=>{
        updateCount(badge, '0');
      });
  });

})();