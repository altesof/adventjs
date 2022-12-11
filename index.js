$(document).ready(function ()
{
    const gifts = ['cat', 'game', 'socks']
    const wrapped = wrapping(gifts)
    
    console.log(wrapped)
    /* [
      "*****\n*cat*\n*****",
      "******\n*game*\n******",
      "*******\n*socks*\n*******"
    ] */

});

function wrapping(gifts) {
    let simb = '*'
    let jump = "\n"
    let result = []
    gifts.forEach(item =>{
        const stringCode = Array(item.length + 2).fill(simb,0).join('')
        let strItem = simb.concat(item, simb)
        strItem = jump.concat(strItem, jump)
        strItem = stringCode.concat(strItem, stringCode)                              
        result.push(strItem)
    });
    return result
}
