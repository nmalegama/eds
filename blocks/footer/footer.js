import { getMetadata } from '../../scripts/aem.js';
import { loadFragment } from '../fragment/fragment.js';

/**
 * loads and decorates the footer
 * @param {Element} block The footer block element
 */
export default async function decorate(block) {
  // load footer as fragment
  const footerMeta = getMetadata('footer');
  const footerPath = footerMeta ? new URL(footerMeta, window.location).pathname : '/footer';
  const fragment = await loadFragment(footerPath);

  // decorate footer DOM
  block.textContent = '';
  const footer = document.createElement('div');
  while (fragment.firstElementChild) footer.append(fragment.firstElementChild);

  const classes = ['logo', 'links', 'disclaimer'];
  classes.forEach((c, i) => {
    const section = footer.children[i];
    if (section) section.classList.add(`footer-${c}`);
  });

  const backToTop = document.createElement('div');
  backToTop.className = 'cmp-container';
  backToTop.innerHTML = `<button type="button" aria-label="back to top" title="Go to top" class="back-to-top">
      <span>Go to top</span>
    </button>`;
  block.before(backToTop);

  const backToTopBtn = document.querySelector('.back-to-top');
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });

  const socialLinks = footer.querySelector('.footer-logo .default-content-wrapper > ul');
  socialLinks.className = 'footer-social-links';

  const linkParent = footer.querySelector('.footer-links .default-content-wrapper > ul');
  linkParent.className = 'footer-links-list';

  footer.querySelectorAll('.footer-links .default-content-wrapper > ul > li').forEach((liItm) => {
    liItm.className = "link-list";
  });

  block.append(footer);
}
