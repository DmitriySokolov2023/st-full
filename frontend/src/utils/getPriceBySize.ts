export const getPriceBySize = (size = 0, price = 0, total = 1) =>{
    if (size === 0){
        return price * total
    }
    else {
        return (price/100*75)*total
    }
}