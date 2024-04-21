/* Ease selector helper function
* help select dom elements quicker
* */
const select = (el, all = false) => {
    el = el.trim()
    if(all){
        return [...document.querySelectorAll(el)]
    } else {
        return document.querySelector(el)
    }
}

// Easy event listener function
// make it easier to add events listener
const on = (type, el, listener, all=false) => {
    let selectEL = select(el, all)
    if(selectEL){
        if(all){
            selectEL.forEach(e => e.addEventListener(type, listener))
        }else{
            selectEL.addEventListener(type, listener)
        }
    }
}

// we need set up the isotope
window.addEventListener('load', ()=>{
    let portfolioContainer = select(".product-container")
    if(portfolioContainer){
        let portfolioIsotope = new Isotope(portfolioContainer,{
            itemSelector: '.product-item',
            layoutMode: 'fitRows',
            percentPosition: true,
            fitRows:{
                gutter:15
            }
        })

        let portfolioFilters = select('#product-filters li', true)

        on(
            'click',
            '#product-filters li',
            function (e) {
                e.preventDefault()
                portfolioFilters.forEach(function (el) {
                    el.classList.remove('filter-active')
                })
                this.classList.add('filter-active')
                portfolioIsotope.arrange({
                    filter: this.getAttribute('data-filter')
                })
            },
            true
        )
    }
})