const articles = document.querySelector('.article__section')

getArticle()

async function getArticle() {
    const response = await fetch('./js/data.json')
    
    const articleArray = await response.json()
    
    renderArticle(articleArray)
}


function renderArticle(articleArray) {
    articleArray.forEach(function (item) {
        
        const articleHTML = `<div id="${item.id}" class="article__post">
                <div class="article__top">
                    <div class="top__wrap">
                        <div class="author__photo">
                            <img class="photo" src="/img/people/${item.userPhoto}" alt="">
                        </div>
                        <div class="author__info">
                            <div class="author__name">
                                <span class="name__text">
                                ${item.userName}
                                </span>
                            <button class="subscribe__button">
                                <svg xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24" width="13" height="13"><path d="M23,11H21V9a1,1,0,0,0-2,0v2H17a1,1,0,0,0,0,2h2v2a1,1,0,0,0,2,0V13h2a1,1,0,0,0,0-2Z"/><path d="M9,12A6,6,0,1,0,3,6,6.006,6.006,0,0,0,9,12ZM9,2A4,4,0,1,1,5,6,4,4,0,0,1,9,2Z"/><path d="M9,14a9.01,9.01,0,0,0-9,9,1,1,0,0,0,2,0,7,7,0,0,1,14,0,1,1,0,0,0,2,0A9.01,9.01,0,0,0,9,14Z"/></svg>
                            </button>
                            </div>
                            <div class="article__date">
                                <span class="date__add">1 day ago</span>
                            </div>
                        </div>
                    </div>    
                        <div class="article__category">
                            <a class="link__item" href="">
                                <div class="link__icon">
                                    #
                                </div>
                                <span class="link_text">
                                    Category 1
                                </span>
                            </a>
                        </div>
                    
                </div>

                <div class="article__image">
                    <img src="/img/post/${item.postImage}" alt="">
                </div>

                <h1 class="article__title">
                ${item.postTitle}
                </h1>

                <div class="article__text">
                    <span class="article__short-text">
                    ${item.postText}
                    </span>
                    <a href="#" class="article__read-more">
                        Read more
                    </a>
                </div>

                <div class="article__bottom f">
                    <div class="article__bottom_wrap f">
                        <div class="button__bottom">
                            <button class="button_comment">
                                <svg data-name="Livello 1" id="Livello_1" viewBox="0 0 128 128" width="24" height="24" xmlns="http://www.w3.org/2000/svg"><title/><path d="M113,0H15A15,15,0,0,0,0,15V79.57a15,15,0,0,0,15,15H38.28a1,1,0,0,1,1,1V121a7,7,0,0,0,11.95,4.95L82.31,94.87a1,1,0,0,1,.71-.29h30a15,15,0,0,0,15-15V15A15,15,0,0,0,113,0Zm9,79.57a9,9,0,0,1-9,9H83a7,7,0,0,0-4.95,2L47,121.7a1,1,0,0,1-1.71-.71V95.57a7,7,0,0,0-7-7H15a9,9,0,0,1-9-9V15a9,9,0,0,1,9-9h98a9,9,0,0,1,9,9Z"/></svg>
                            </button>
                        </div>

                        <div class="button__bottom">
                            <button class="button__bookmark">
                            </button>
                        </div>
                    </div>
                    <div class="article__rating f">
                        <div class="button__bottom">
                            <button class="button__like">
                                <!-- <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width="28" height="28"><path d="M22.586,18.148,12.707,8.269a1.021,1.021,0,0,0-1.414,0L1.42,18.142.006,16.728,9.879,6.855a3.073,3.073,0,0,1,4.243,0L24,16.734Z"/></svg> -->
                            </button>
                        </div>
                        <span class="rating__counter">0</span>
                        <div class="button__bottom">
                            <button class="button__dislike">
                                <!-- <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width="28" height="28"><path d="M22.586,5.929l-9.879,9.879a1.021,1.021,0,0,1-1.414,0L1.42,5.934.006,7.348l9.873,9.874a3.075,3.075,0,0,0,4.243,0L24,7.343Z"/></svg> -->
                            </button>
                        </div>
                    </div>

                </div>
            </div>`
            
            
            
            articles.insertAdjacentHTML('beforeend',articleHTML)
            
            
    });
   

}
