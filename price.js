const allprice = items.reduce((currentTotal,item)=> {
    return item.price+currentTotal
},0)
console.log('allprice') 
console.log(allprice)
const allpricewithoutdollar = item.filter(items => {
    return items.price > 10
}).reduce((currentTotal,items) => {
    return items.price + currentTotal
},0)
console.log('all price with product under the 10 dollar')
console.log(allpricewithoutdollar)