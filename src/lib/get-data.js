import Data from '../data.json';

function getData(name) {
  console.log('Data: ', Data);
  for (var i = 0; i < Data.length; i++) {
    if (Data[i].firstName.toLowerCase() === name) {
      return Data[i];
    }
  }
}

export default getData;
