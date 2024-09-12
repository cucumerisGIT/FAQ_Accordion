const faqItems = Array.from(document.querySelectorAll('.faq-item'));
let currentlyVisibleAnswer = null;
let currentlyToggledButton = null;

const toggleFaqState = (btn, answer, scrollHeight) => {
    const isExpanded = btn.getAttribute('aria-expanded') === 'true';

    // Close any previously open answer
    if (currentlyToggledButton && currentlyToggledButton !== btn) {
        currentlyToggledButton.setAttribute('aria-expanded', false);
        currentlyVisibleAnswer.setAttribute('aria-hidden', true);
        currentlyVisibleAnswer.style.maxHeight = '0';
    }

    // Toggle the current FAQ item
    btn.setAttribute('aria-expanded', !isExpanded);
    answer.setAttribute('aria-hidden', isExpanded);
    answer.style.maxHeight = isExpanded ? '0' : `${scrollHeight}px`;

    // Update references to the current visible/toggled FAQ
    currentlyToggledButton = !isExpanded ? btn : null;
    currentlyVisibleAnswer = !isExpanded ? answer : null;
}

faqItems.forEach(item => {
    const btn = item.querySelector('.faq-item__toggle');
    const answer = item.querySelector('.faq-item__answer');
    const scrollHeight = answer.scrollHeight; // Precompute scrollHeight

    // Set initial states for aria attributes
    btn.setAttribute('aria-expanded', false);
    answer.setAttribute('aria-hidden', true);

    // Click event handler
    btn.addEventListener('click', () => toggleFaqState(btn, answer, scrollHeight));
});