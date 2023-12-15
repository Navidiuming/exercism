//
// This is only a SKELETON file for the 'Pangram' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const isPangram = (sen) => {
  let alpha = "abcdefghijklmnopqrstuvwxyz";
  let CorrectedSen = sen.toLowerCase();
  let isPanagramed = true;
  let isWordPanagram = false;
  for(let i = 0 ; i< alpha.length ; i++){
    if(CorrectedSen.includes(alpha[i])== false){
      isPanagramed = false;
      break;
    }
  }

  return isPanagramed;
  
}

