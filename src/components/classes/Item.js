class Item {
  constructor(json, task) {
    this.id = json.id;
    this.text = json.text;
    this.complete = json.complete;
    this.task = task;
  }

  renderItem() {
    const li = document.createElement("li");
    li.innerHTML = itemHtml(this);
    li.id = `item-${this.id}`;
    li.className = "mb-3 card-text";
    document.querySelector("#items").appendChild(li);
    document.querySelector(`#done-item-${this.id}`).onclick = () =>
      this.update();
    document.querySelector(`#delete-item-${this.id}`).onclick = () =>
      this.delete();
  }

  static create(text, task) {
    const item = new Item(
      {
        id: Math.floor(Math.random() * 1000),
        text: text,
        complete: false,
        task_id: task.id,
      },
      task
    );
    task.items[item.id] = item;
    item.renderItem();
  }

  update() {
    document.querySelector(`#text-item-${this.id}`).classList.toggle("done");
    this.complete = !this.complete;
  }

  delete() {
    delete this.task.items[this.id];
    document
      .querySelector("#items")
      .removeChild(document.querySelector(`#item-${this.id}`));
  }
}
