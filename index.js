class Table {
  constructor(tableSelector) {
    this.table = document.querySelector(tableSelector);
    this.bar = this.table.querySelector(".bar");
    this.grid = this.table.querySelector(".table-grid");
  }

  toggleActive(target) {
    this.bar.querySelectorAll(".bar__item_active").forEach((item) => {
      item.classList.remove("bar__item_active");
    });

    const btn = target;
    btn.classList.add("bar__item_active");
  }

  setColor(color) {
    this.grid.style.background = color;
  }

  toggle(event) {
    const target = event.target;
    const targetColor = target.dataset.color;
    if (!target.classList.contains("bar__item")) return false;

    this.toggleActive(target);
    this.setColor(targetColor);
  }

  init() {
    this.bar.addEventListener("click", (event) => this.toggle(event));
  }
}

const myTable = new Table(".table");
myTable.init();


let btns = document.querySelectorAll('.table-grid__item')

let input = document.getElementById('value')

//Функция добавления чисел в инпут
let clearBtn  = document.querySelector('.header__button')
btns.forEach((item)=>{
  item.addEventListener('click', (e)=>{
    console.log('number')
     let num = +item.innerHTML
     input.value =num 
  })
})

//Функция очистки инпут
clearBtn.addEventListener('click', (e)=>{
     input.value = ''
})


const cards = document.querySelectorAll('.table-grid__item');

function shuffle() {
  console.log('randomCard')
  cards.forEach(card => {
    let ramdomPos = Math.floor(Math.random() * 8);
    card.style.order = ramdomPos;
  });
}

setInterval(() => shuffle(), 5000)
