// ####################################
// #### ----- Sale Calculator ----- ###
// ####################################

function saleCalculator() {
  // write your code here

  alert('How much money do you have to spend?')
  let money= prompt ()

  alert('How much is the item normally?')
  let price=prompt ()

  alert('What is the discount percentage?')
  let discount=prompt ()

  let total=(price-discount)
  if (price-discount>money)
  alert("You can't afford to buy it as you have only"+money+'to spend, but even with'+discount+'off'+price+'only comes down to'+total+'!')

  else{(price-discount<money)
  alert('You can afford it, as the'+discount+'off the'+price+'only comes down to'+total+ 'and you have'+money+'dollars to spend.')
}
alert('Goodbye!')
}
