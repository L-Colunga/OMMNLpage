document.addEventListener('DOMContentLoaded', () => {
    const faqContainer = document.querySelector('.faq-content');

    const exaMenu = document.querySelector('.exa-menu');
    exaMenu.addEventListener('click', (e) => {
        const groupHeader = e.target.closest('li');
        console.log(groupHeader);
        if (!groupHeader) return;
        if (!groupHeader.classList.contains('active')) {
            groupHeader.classList.add('active');
        }
        const otherGroups = exaMenu.querySelectorAll('li');
        otherGroups.forEach((otherGroup) => { 
            if (otherGroup !== groupHeader) {
                otherGroup.classList.remove('active');
            }
        });
    })

})