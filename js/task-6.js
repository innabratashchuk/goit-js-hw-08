const input = document.querySelector('#controls input');
    const createBtn = document.querySelector('[data-create]');
    const destroyBtn = document.querySelector('[data-destroy]');
    const boxesContainer = document.getElementById('boxes');

    function getRandomHexColor() {
      return `#${Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, 0)}`;
    }

    function createBoxes(amount) {
      const boxes = [];
      let size = 30;

      for (let i = 0; i < amount; i++) {
        const box = document.createElement('div');
        box.style.width = `${size}px`;
        box.style.height = `${size}px`;
        box.style.backgroundColor = getRandomHexColor();
        box.textContent = `${i + 1}`;
        boxes.push(box);
        size += 10;
      }

      boxesContainer.innerHTML = '';
      boxesContainer.append(...boxes);
    }

    function destroyBoxes() {
      boxesContainer.innerHTML = '';
    }

    createBtn.addEventListener('click', () => {
      const amount = Number(input.value);

      if (amount >= 1 && amount <= 100) {
        createBoxes(amount);
        input.value = '';
      } else {
        alert('Please enter a number between 1 and 100.');
      }
    });

    destroyBtn.addEventListener('click', destroyBoxes);