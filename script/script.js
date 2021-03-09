document.addEventListener('DOMContentLoaded', () => {
    'use strict'
    const tabs = () => {
        const cardDetailChangeElems = document.querySelectorAll('.card-detail__change');
        const cardDetailsTitleElems = document.querySelectorAll('.card-details__title');
        const cardImageElems = document.querySelectorAll('.card__image');

        const hideAll = () => {
            for (let i = 0; i < cardDetailChangeElems.length; i++) {
                cardDetailChangeElems[i].classList.remove('active');
                cardDetailsTitleElems[i].classList.remove('active');
                cardImageElems[i].classList.remove('active');
            }
        }

        for (let i = 0; i < cardDetailChangeElems.length; i++) {
            cardDetailChangeElems[i].addEventListener('click', () => {
                hideAll();
                cardDetailChangeElems[i].classList.add('active');
                cardDetailsTitleElems[i].classList.add('active');
                cardImageElems[i].classList.add('active');

            })
            
        }
    };
    tabs();
});
