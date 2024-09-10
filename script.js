let currentlyExpandedBtn = null;
let currentlyVisibleAnswer = null;

document.querySelectorAll('.faq-item__toggle').forEach(toggle => {
    toggle.addEventListener('click', (e) => {
        const btn = e.currentTarget;
        const answer = btn.nextElementSibling;
        const isExpanded = btn.getAttribute("aria-expanded") === "true";

        // Close the currently expanded answer, if any
        if (currentlyExpandedBtn && currentlyExpandedBtn !== btn) {
            currentlyExpandedBtn.setAttribute("aria-expanded", "false");
            currentlyVisibleAnswer.classList.add("faq-item--collapsed");
            currentlyVisibleAnswer.setAttribute("aria-hidden", "false");
        }

        // Toggle the current button
        btn.setAttribute("aria-expanded", !isExpanded);
        answer.classList.toggle("faq-item--collapsed", isExpanded);
        answer.setAttribute("aria-hidden", isExpanded);

        // Assign the currently active button and answer, if any
        currentlyExpandedBtn = !isExpanded ? btn : null;
        currentlyVisibleAnswer = !isExpanded ? answer : null;
    });
  });