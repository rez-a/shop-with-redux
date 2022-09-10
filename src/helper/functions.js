export const shorterTitle = (title) => {
    const splitedTitle = title.split(" ");
    const newTitle = `${splitedTitle[0]} ${splitedTitle[1]}`;
    return newTitle;
}


export const shorterPrice = (price) => {
    const newPrice = price.toFixed(2);
    return newPrice;
}