// Code your solution in this file!
// Code your solution in this file!
function distanceFromHqInBlocks(blocks) {
  const headquarters = 42;
  return Math.abs(blocks - headquarters);
}
function distanceFromHqInFeet(blocks) {
  const headquarters = 42;
  const feet = 264;
  const distanceFromHqInBlocks = Math.abs(blocks - headquarters);
  return distanceFromHqInBlock * headquarters;
}

function distanceFromHqInBlocks(blocks) {
  const headquarters = 42;
  return Math.abs(blocks - headquarters);
}

function distanceFromHqInFeet(blocks) {
  const blockLengthInFeet = 264;
  const distanceInBlocks = distanceFromHqInBlocks(blocks);
  return distanceInBlocks * blockLengthInFeet;
}

function distanceTravelledInFeet(startBlock, endBlock) {
  const distanceInBlocks = Math.abs(startBlock - endBlock);
  return distanceInBlocks * 264;
}

function calculatesFarePrice(startBlock, endBlock) {
  const distanceInFeet = distanceTravelledInFeet(startBlock, endBlock);
  let farePrice;
  if (distanceInFeet <= 400) {
    farePrice = 0;
  } else if (distanceInFeet > 400 && distanceInFeet <= 2000) {
    farePrice = (distanceInFeet - 400) * 0.02;
  } else if (distanceInFeet > 2000 && distanceInFeet <= 2500) {
    farePrice = 25;
  } else {
    farePrice = "cannot travel that far";
  }
  return farePrice;
}
