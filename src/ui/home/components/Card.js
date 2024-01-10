
function generateBingoCard() {
    const bingoCard = {
      b: [],
      i: [],
      n: [],
      g: [],
      o: []
    };
  
    // Function to generate an array of unique random numbers within a specified range
    const generateRandomNumbers = (min, max, count) => {
      const numbers = [];
      while (numbers.length < count) {
        const randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
        if (!numbers.includes(randomNum)) {
          numbers.push(randomNum);
        }
      }
      return numbers;
    };
  
    // Generate numbers for each column
    bingoCard.b = generateRandomNumbers(1, 15, 5);
    bingoCard.i = generateRandomNumbers(16, 30, 5);
    bingoCard.n = generateRandomNumbers(31, 45, 5);
    bingoCard.g = generateRandomNumbers(46, 60, 5);
    bingoCard.o = generateRandomNumbers(61, 75, 5);
  
    return { bingo: bingoCard };
  }
  
  const dynamicBingoCard = generateBingoCard();
  console.log(JSON.stringify(dynamicBingoCard, null, 2));
  