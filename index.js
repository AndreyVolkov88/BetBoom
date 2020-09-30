class TableShit {
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

const myTable = new TableShit(".table");
myTable.init();
