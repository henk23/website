import { browser } from '$app/environment';

const fadeInObserver = browser && new IntersectionObserver(entries => {
  entries.forEach(async entry => {
    if(entry.isIntersecting) {
      await delay(500);
      entry.target.classList.remove('is-faded-out');
    }
  });
});

export function fadeIn(node) {
  node.classList.add('fade-in', 'is-faded-out');
  fadeInObserver.observe(node);
}

export async function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
