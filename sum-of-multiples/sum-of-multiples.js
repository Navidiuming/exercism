//
// This is only a SKELETON file for the 'Sum Of Multiples' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const sum = (items,playerLevel) => {
  let TotalEnergyPoints = [];
  let totalEnergyPointsAfterFilter = [];
  let result = 0;
  let duplicatedChecker;
  console.log(items.length)
  for(let i = 0; i<items.length ; i++){
    console.log(items[i]);
    for(let j = 1; j<playerLevel ; j++){
      if(items[i]*j< playerLevel){
        let currentEnergyPoint = items[i]*j;
        TotalEnergyPoints.push(currentEnergyPoint);
      }
    }
  }
  TotalEnergyPoints.sort();
  for(let i = 0 ; i<TotalEnergyPoints.length ;i++){
    if(duplicatedChecker != TotalEnergyPoints[i]){
      totalEnergyPointsAfterFilter.push(TotalEnergyPoints[i]);
    }
    duplicatedChecker = TotalEnergyPoints[i];
  }

  for(let i = 0 ;i<totalEnergyPointsAfterFilter.length;i++){
    result = result + totalEnergyPointsAfterFilter[i];
  }

  console.log(result);
  return result;
};
