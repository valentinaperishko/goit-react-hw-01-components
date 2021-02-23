// const getRandomColor = () => {
//   let colorValues = [
//     'red',
//     'blue',
//     'green',
//     'yellow',
//     'grey',
//     'black',
//     'purple',
//   ];
//   return colorValues[Math.floor(Math.random() * colorValues.length)];
// };
function getRandomColor() {
  let x = Math.floor(Math.random() * 256);
  let y = Math.floor(Math.random() * 256);
  let z = Math.floor(Math.random() * 256);
  return 'rgb(' + x + ',' + y + ',' + z + ')';
}

export default getRandomColor;
