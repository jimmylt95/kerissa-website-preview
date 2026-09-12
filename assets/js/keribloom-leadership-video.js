(() => {
  function addLeadershipVideo() {
    if (document.getElementById('leadership-in-action')) return;

    const section = document.createElement('section');
    section.id = 'leadership-in-action';
    section.className = 'kb-action-section';
    section.setAttribute('aria-labelledby', 'kb-action-title');

    section.innerHTML = `
      <div class="kb-action-wrap">
        <div class="kb-action-copy">
          <span class="kb-action-kicker">Leadership in Action</span>
          <h2 id="kb-action-title">Leadership that shows up in the room.</h2>
          <p>KeriBloom Legacy Group is built around real development, real conversations, and leaders who show up. Watch Kerissa working with agents at a recent GFI team event, sharing the guidance and energy that help people grow with confidence.</p>
          <div class="kb-action-meta" aria-label="Video details">
            <span>GFI Team Event</span><b aria-hidden="true">•</b><span>September 2026</span>
          </div>
          <a class="kb-action-link" href="keribloom-about.html">Discover KeriBloom Legacy Group <span aria-hidden="true">→</span></a>
        </div>

        <figure class="kb-video-card">
          <div class="kb-video-frame">
            <video controls playsinline preload="metadata" aria-label="Kerissa speaking at a GFI team event">
              <source src="assets/media/events/2026-09-gfi-team-event/keribloom-gfi-team-event-september-2026.mp4" type="video/mp4">
              Your browser does not support HTML video.
            </video>
          </div>
          <figcaption>Real leadership. Real rooms. Real growth.</figcaption>
        </figure>
      </div>`;

    const footer = document.querySelector('footer') || document.querySelector('.site-footer') || document.querySelector('.footer');
    if (footer && footer.parentNode) {
      footer.parentNode.insertBefore(section, footer);
    } else {
      document.body.appendChild(section);
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', addLeadershipVideo, { once: true });
  } else {
    addLeadershipVideo();
  }
})();
