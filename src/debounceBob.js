
// стрелочная функция смотрит на вышестоящий скоуп, поэтому нельзя к ней заBINDить

// bind устаналивает this скоуп

const fetchUrl = function (url) {
  console.log(`fetching ${url}`, this.firstName);
};

const user = {
  firstName: 'Bob',
};

function debounce(callback, delay) {
  let timer = null;

  return (...args) => {
    if (timer) {
      clearTimeout(timer)
    }
    timer = setTimeout(() => {
      callback(...args)
    }, delay);
  }
}

const fetching = debounce(fetchUrl.bind(user), 300);
// const fetching = debounce(fetchUrl.bind(user).bind({}), 300); запоминает только первый контекст

fetching(1);
fetching(2);
fetching(3);
fetching(4);
fetching(5);