// toggle reset button
function toggleRestBtn(){
    const resetBtn = document.querySelector('.reset')
    resetBtn.classList.toggle('active')
}

// switch left, middle and right part of banner
function switchBanner(name){
    const banner = document.querySelector('#banner')
    if(!banner.classList.contains(name)){
        banner.className = 'banner'
        banner.classList.add(name)

        // whenever switch the banner, the button should toggle
        toggleRestBtn()
    }
}

// reset button
function resetBanner(){
    const banner = document.querySelector('#banner')
    banner.className = 'banner'
    toggleRestBtn()
}

