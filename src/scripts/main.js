'use strict';

const selectHeader = document.querySelectorAll('.select__header');
const allItems = [ ...document.querySelectorAll('.select__item') ];
const selectBody = document.querySelectorAll('.select__body');

for (let i = 0; i < selectHeader.length; i++) {
  selectHeader[i].textContent = allItems[0].textContent;
};

selectHeader.forEach(el => {
  el.addEventListener('click', (ev) => {
    ev.target.nextElementSibling.classList.toggle('select__body--active');
  });
});

selectBody.forEach(el => {
  el.addEventListener('click', (ev) => {
    for (let i = 0; i < allItems.length; i++) {
      allItems[i].classList.remove('select__item--active');
    }

    const parent = ev.target.parentNode;

    parent.previousElementSibling.textContent = ev.target.textContent;
    parent.classList.remove('select__body--active');
  });
});

const btnThemesDel = document.querySelectorAll('.block__themesDel');

btnThemesDel.forEach(el => {
  el.addEventListener('click', (ev) => {
    ev.target.parentNode.classList.add('block__themes--del');
  });
});

const openBlock = document.querySelector('.block__title--advertisingСompanies');
const blockAdvertisingCompanies = document.querySelectorAll('.block__optionsBlock--advertisingCompanies');

openBlock.addEventListener('click', (ev) => {
  openBlock.classList.toggle('block__title--advertisingСompanies--open');

  for (let i = 0; i < blockAdvertisingCompanies.length; i++) {
    blockAdvertisingCompanies[i].classList.toggle('block__optionsBlock--advertisingCompanies--open');
  }
});

const btnDefault = document.querySelector('.page__btn--default');

const checkboxes = document.querySelectorAll('.block__checkbox');

for (let i = 0; i < checkboxes.length; i++) {
  checkboxes[i].setAttribute('checked', true);
  checkboxes[i].nextElementSibling.classList.add('block__slider--checked');
};

checkboxes.forEach(el => {
  el.addEventListener('click', (ev) => {
    const slider = ev.target.nextElementSibling;

    if (ev.target.hasAttribute('checked')) {
      ev.target.removeAttribute('checked');
    }
    slider.classList.toggle('block__slider--checked');
  });
});

btnDefault.addEventListener('click', (ev) => {
  for (let i = 0; i < checkboxes.length; i++) {
    checkboxes[i].setAttribute('checked', true);
    checkboxes[i].nextElementSibling.classList.add('block__slider--checked');
  };

  for (let i = 0; i < selectHeader.length; i++) {
    selectHeader[i].textContent = allItems[0].textContent;
  };
});

// modal dialog
const btnSave = document.querySelector('.page__btn--saveChange');
const dialog = document.getElementById('areYouSure');
const yesAnswer = document.getElementById('yes');
const notAnswer = document.getElementById('not');
const pageDialog = document.querySelector('.page__dialogForm');
const succesfullSaved = document.querySelector('.page__saveSuccess');

btnSave.addEventListener('click', function() {
  areYouSure.showModal();
});

yesAnswer.addEventListener('click', function() {
  pageDialog.classList.add('page__dialogForm--close');
  succesfullSaved.classList.add('page__saveSuccess--show');

  setTimeout(() => {
    pageDialog.classList.remove('page__dialogForm--close');
    succesfullSaved.classList.remove('page__saveSuccess--show');
    areYouSure.close();
  }, 2500);
});

notAnswer.addEventListener('click', function() {
  areYouSure.close();
});

