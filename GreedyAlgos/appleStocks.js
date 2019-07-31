/*

Write an efficient function that takes stockPrices and returns the best profit I could have made from one purchase and one sale of one share of Apple stock yesterday.

For example:

  const stockPrices = [10, 7, 5, 8, 11, 9];

getMaxProfit(stockPrices);
// Returns 6 (buying for $5 and selling for $11)

No "shorting"—you need to buy before you can sell. Also, you can't buy and sell in the same time step—at least 1 minute has to pass.


hint - should work for a declining market (negative profit)
*/

const stockPrices = [6, 1, 3];

function getMaxProfit(stockPrices) {
  let profit = -Infinity;
  let bestBuyPrice = Infinity;

  for (let i = 0; i < stockPrices.length; i++) {
    let cv = stockPrices[i];
    if (cv - bestBuyPrice > profit) {
      profit = cv - bestBuyPrice;
    }
    if (cv < bestBuyPrice) {
      bestBuyPrice = cv;
    }
  }
  return profit;
}

console.log(getMaxProfit(stockPrices));
