
const menuBtn = document.querySelector('.menu-btn');
const navLinks = document.querySelector('.nav-links');

menuBtn.addEventListener('click', () => {
  const open = navLinks.classList.toggle('open');
  menuBtn.setAttribute('aria-expanded', String(open));
});

document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => navLinks.classList.remove('open'));
});

document.getElementById('year').textContent = new Date().getFullYear();

document.getElementById('quoteForm').addEventListener('submit', async (e) => {
  e.preventDefault();

  const value = id => document.getElementById(id).value.trim();

  const message = [
    'STAY CLEAN - QUOTE REQUEST',
    '',
    `Name: ${value('name')}`,
    `Contact: ${value('contact')}`,
    `City: ${value('city')}`,
    `Service: ${value('service')}`,
    `Bedrooms: ${value('beds') || 'Not provided'}`,
    `Bathrooms: ${value('baths') || 'Not provided'}`,
    `Preferred date: ${value('date') || 'Flexible / not provided'}`,
    '',
    `Details: ${value('details') || 'None provided'}`
  ].join('\n');

  const status = document.getElementById('formStatus');

  try {
    await navigator.clipboard.writeText(message);
    status.textContent = 'Your quote request was copied. Paste it into Messenger, text, or email to Stay Clean.';
  } catch {
    status.textContent = 'Your quote request is ready. Copy the details and send them to Stay Clean.';
  }
});
