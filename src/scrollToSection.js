const NAV_OFFSET = 80;

function easeInOutCubic(progress) {
  return progress < 0.5
    ? 4 * progress * progress * progress
    : 1 - Math.pow(-2 * progress + 2, 3) / 2;
}

export function scrollToSection(targetId, { offset = NAV_OFFSET, duration = 900 } = {}) {
  const id = targetId.replace('#', '');
  const target = document.getElementById(id);
  if (!target) return;

  const targetY = target.getBoundingClientRect().top + window.scrollY - offset;
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (prefersReducedMotion) {
    window.scrollTo({ top: targetY, behavior: 'auto' });
    return;
  }

  const startY = window.scrollY;
  const distance = targetY - startY;
  let startTime = null;

  const step = (timestamp) => {
    if (startTime === null) startTime = timestamp;
    const elapsed = timestamp - startTime;
    const progress = Math.min(elapsed / duration, 1);
    window.scrollTo(0, startY + distance * easeInOutCubic(progress));
    if (progress < 1) requestAnimationFrame(step);
  };

  requestAnimationFrame(step);
}

export function ScrollLink({ to, children, className, onClick }) {
  const handleClick = (event) => {
    event.preventDefault();
    scrollToSection(to);
    onClick?.(event);
  };

  return (
    <a href={`#${to.replace('#', '')}`} className={className} onClick={handleClick}>
      {children}
    </a>
  );
}

export function ScrollButton({ to, children, className, onClick, ...props }) {
  const handleClick = (event) => {
    scrollToSection(to);
    onClick?.(event);
  };

  return (
    <button type="button" className={className} onClick={handleClick} {...props}>
      {children}
    </button>
  );
}
