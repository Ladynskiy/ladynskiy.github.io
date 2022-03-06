// Rating counter

window.addEventListener('click', (e) => {
    let parentCount = e.target.closest('.article__rating')
    let count = parentCount.querySelector('.rating__counter')

    if(e.target.className === 'button__like') {
        count.innerText ++
        if(count.innerText >= 0) {
            count.style.color = '#01A611'
        } 
    }
    if(e.target.className === 'button__dislike') {
        count.innerText --
        if(count.innerText < 0) {
            count.style.color = 'red'
        } 
    }
})

// Add and remove bookmark

window.addEventListener('click', (e) => {
    const bookmarkWrapper = document.querySelector('.articles__bookmarks')
    if(e.target.className === 'button__bookmark') {

        let parentbtnBookmark = e.target.closest('.article__post')

        const artInfo = {
        id: parentbtnBookmark.getAttribute('id'),
        userPhoto: parentbtnBookmark.querySelector('img').getAttribute('src'),
        userName: parentbtnBookmark.querySelector('.name__text').innerText,
        title: parentbtnBookmark.querySelector('.article__title').innerText,
        text: parentbtnBookmark.querySelector('.article__short-text').innerText,
        }

        const haveBookmark = bookmarkWrapper.querySelector(`[id = "${artInfo.id}"]`)

        if(haveBookmark) {

        } else {
            const bookHTML = `<div id="${artInfo.id}" class="article__post-mini">
        <div class="author-mini__wrapper f">
            <div class="post-mini__author f">
                <div class="post-mini__photo">
                    <img class="photo" src="${artInfo.userPhoto}" alt="">
                </div>
                <div class="post-mini__name">
                    <span class="post-mini__name-text">
                    ${artInfo.userName}
                    </span>
                    </div>
            </div>      
                <button class="remove__bookmark">
                </button>
        </div>
        


            <h1 class="post-mini__title">
                ${artInfo.title}
            </h1>

            <div class="post-mini__text">
                <span class="post-mini__short-text">
                ${artInfo.text}
                </span>
                <div class="post-mini__read-more">
                <a href="#" >
                    Read more
                </a>
            </div>
            </div>
          </div>`

          bookmarkWrapper.insertAdjacentHTML('beforeend', bookHTML)
        }
    }

    if(e.target.className === 'remove__bookmark') {
       let parentRemove = e.target.closest('.article__post-mini')
       parentRemove.remove()
    }
    
})

