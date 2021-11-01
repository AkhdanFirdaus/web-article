function newsComponent(data) {
    return `<div class="news-item d-block bg-light">
        <div class="d-flex mb-3 align-items-center position-relative">
            <div class="flex-shrink-0">
                <img src="https://source.unsplash.com/random/120x120?post,${data.id}" alt="random">
            </div>
            <div class="flex-grow-1 ms-3">
                <p class="text-justify">${data.title}</p>
                <p class="small">writted by ${data.userId}</p>
                <a class="stretched-link" href="detail.html?id=${data.id}"></a>
            </div>
        </div>
    </div>`
}

$(window).on('load', function() {
    const news = $('#articles')
    
    $.get({
        url: 'https://jsonplaceholder.typicode.com/posts',
        success: (data) => {
            data.forEach((item) => {
                news.append(newsComponent(item))
            })
        }
    })
})

