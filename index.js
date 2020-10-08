class Table {
  constructor(tableSelector) {
    this.table = document.querySelector(tableSelector);
    this.bar = this.table.querySelector('.bar');
    this.grid = this.table.querySelector('.table-grid');
    this.tableSelector = this.init() 
  }

  toggleActive(target) {
    this.bar.querySelectorAll('.bar__item_active').forEach((item) => {
      item.classList.remove('bar__item_active');
    });

    const btn = target;
    btn.classList.add('bar__item_active');
  }

  setColor(color) {
    this.grid.style.background = color;
  }

  toggle(event) {
    const target = event.target;
    const targetColor = target.dataset.color;
    if (!target.classList.contains('bar__item')) return false;

    this.toggleActive(target);
    this.setColor(targetColor);
    console.log('changeColor')
  }

  init() {
    this.bar.addEventListener('click', (event) => this.toggle(event));
  }
}

const myTable = new Table('.table');

const btns = document.querySelectorAll('span');

const input = document.getElementById('value');

//Функция добавления чисел в инпут
let clearBtn = document.querySelector('.header__button');
btns.forEach((item) => {
  item.addEventListener('click', (e) => {
    console.log('number');
    let num = +item.innerHTML;
    input.value = num;
  });
});

//Функция очистки инпут
clearBtn.addEventListener('click', (e) => {
  console.log('clearNumber')
  input.value = '';
});

// Функция рандомной смены элементов
const cardsBox = document.querySelectorAll('.table-grid')[0];
const cards = document.querySelectorAll('.table-grid__item');

function shuffle() {
  console.log('randomCard');
  cards.forEach((card) => {
    let ramdomPos = Math.floor(Math.random() * cards.length);
    card.style.order = ramdomPos;
  });
}

setInterval(() => {
  shuffle();
  cardsBox.classList.add('transform');
  setTimeout(() => cardsBox.classList.remove('transform'), 333);
}, 5000);

//функция drag & drop
// const tasksListElement = document.querySelector('.table-grid');
// const taskElements = tasksListElement.querySelectorAll('.table-grid__item');

// tasksListElement.addEventListener('dragstart', (evt) => {
//   evt.target.classList.add('selected');
// });

// tasksListElement.addEventListener('dragend', (evt) => {
//   evt.target.classList.remove('selected');
// });

// tasksListElement.addEventListener('dragover', (evt) => {
//   // Разрешаем сбрасывать элементы в эту область
//   evt.preventDefault();
//   // Находим перемещаемый элемент
//   const activeElement = tasksListElement.querySelector('.selected');
//   // Находим элемент, над которым в данный момент находится курсор
//   const currentElement = evt.target;
//   // Проверяем, что событие сработало:
//   // 1. не на том элементе, который мы перемещаем,
//   // 2. именно на элементе списка
//   const isMoveable =
//     activeElement !== currentElement &&
//     currentElement.classList.contains('.table-grid__item');

//   // // Если нет, прерываем выполнение функции
//   if (!isMoveable) {
//     return;
//   }

//   // Находим элемент, перед которым будем вставлять
//   const nextElement =
//     currentElement === activeElement.nextElementSibling
//       ? currentElement.nextElementSibling
//       : currentElement;

//   // Вставляем activeElement перед nextElement
//   tasksListElement.insertBefore(activeElement, nextElement);
// });

// const getNextElement = (cursorPosition, currentElement) => {
//   // Получаем объект с размерами и координатами
//   const currentElementCoord = currentElement.getBoundingClientRect();
//   // Находим вертикальную координату центра текущего элемента
//   const currentElementCenter =
//     currentElementCoord.y + currentElementCoord.height / 2;

//   // Если курсор выше центра элемента, возвращаем текущий элемент
//   // В ином случае — следующий DOM-элемент
//   const nextElement =
//     cursorPosition < currentElementCenter
//       ? currentElement
//       : currentElement.nextElementSibling;

//   return nextElement;
// };

// tasksListElement.addEventListener('dragover', (evt) => {
//   evt.preventDefault();

//   const activeElement = tasksListElement.querySelector('.selected');
//   const currentElement = evt.target;
//   const isMoveable =
//     activeElement !== currentElement &&
//     currentElement.classList.contains('table-grid__item');

//   if (!isMoveable) {
//     return;
//   }

//   // evt.clientY — вертикальная координата курсора в момент,
//   // когда сработало событие
//   const nextElement = getNextElement(evt.clientY, currentElement);

//   // Проверяем, нужно ли менять элементы местами
//   if (
//     (nextElement && activeElement === nextElement.previousElementSibling) ||
//     activeElement === nextElement
//   ) {
//   //   // Если нет, выходим из функции, чтобы избежать лишних изменений в DOM
//     return;
//   }

//   tasksListElement.insertBefore(activeElement, nextElement);
// });


document.addEventListener('DOMContentLoaded', (event) => {

  var dragSrcEl = null;
  
  function handleDragStart(e) {
    this.style.opacity = '0.4';
    
    dragSrcEl = this;

    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('text/html', this.innerHTML);
  }

  function handleDragOver(e) {
    if (e.preventDefault) {
      e.preventDefault();
    }

    e.dataTransfer.dropEffect = 'move';
    
    return false;
  }

  function handleDragEnter(e) {
    this.classList.add('over');
  }

  function handleDragLeave(e) {
    this.classList.remove('over');
  }

  function handleDrop(e) {
    if (e.stopPropagation) {
      e.stopPropagation(); // stops the browser from redirecting.
    }
    
    if (dragSrcEl != this) {
      dragSrcEl.innerHTML = this.innerHTML;
      this.innerHTML = e.dataTransfer.getData('text/html');
    }
    
    return false;
  }

  function handleDragEnd(e) {
    this.style.opacity = '1';
    
    items.forEach(function (item) {
      item.classList.remove('over');
    });
  }
  
  
  let items = document.querySelectorAll('.table-grid .table-grid__item');
  items.forEach(function(item) {
    item.addEventListener('dragstart', handleDragStart, false);
    item.addEventListener('dragenter', handleDragEnter, false);
    item.addEventListener('dragover', handleDragOver, false);
    item.addEventListener('dragleave', handleDragLeave, false);
    item.addEventListener('drop', handleDrop, false);
    item.addEventListener('dragend', handleDragEnd, false);
  });
});