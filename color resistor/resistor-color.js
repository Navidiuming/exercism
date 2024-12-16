//
// This is only a SKELETON file for the 'Resistor Color' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const colorCode = (color) => {
  let readedNum;
  for(let i=0 ; i<COLORS.length ;i++){
    if(COLORS[i] == color){
      readedNum = i;
      console.log(i);
      break;
    }
  }
  return readedNum;
};

export const COLORS = ['black',"brown","red", "orange","yellow","green","blue", "violet","grey", "white"]
