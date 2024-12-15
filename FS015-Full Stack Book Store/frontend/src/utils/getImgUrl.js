function getBookImgUrl(name){
    return new URL(`../assets/books/${name}`, import.meta.url)
}

function getNewsImgUrl(name){
    return new URL(`../assets/news/${name}`, import.meta.url)
}

export {getBookImgUrl, getNewsImgUrl}