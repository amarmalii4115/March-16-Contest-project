const countEl = document.getElementById('count');
const incrementBtn = document.getElementById('increment');
const decrementBtn = document.getElementById('decrement');
const clearBtn = document.getElementById('clear');
const errorEl = document.getElementById('error');

let count = 0;

incrementBtn.addEventListener('click', function() {
  count++;
  countEl.innerHTML = "Your Current Count is : " + count;
  if (count >= 1) {
    clearBtn.style.display = 'block';
  }
  errorEl.style.display = 'none';
});

decrementBtn.addEventListener('click', function() {
  if (count > 0) {
    count--;
    countEl.innerHTML = "Your Current Count is : " + count;
  } else {
    errorEl.innerText = 'Error : Cannot go below 0';
    errorEl.style.display = 'block';
  }
});

clearBtn.addEventListener('click', function() {
  count = 0;
  countEl.innerHTML ="Your Current Count is : " +  count;
  clearBtn.style.display = 'none';
  errorEl.style.display = 'none';
});