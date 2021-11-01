function trendingComponent(index, data) {
    return `<div class="d-flex news-item position-relative">
        <div class="flex-shrink-0">
            <h1>0${index}</h1>
        </div>
        <div class="flex-grow-1 ms-3">
            <p class="text-justify">${data.title}</p>
            <p class="small">writted by ${data.userId}</p>
            <a class="stretched-link" href="detail.html?post,${data.id}"></a>
        </div>
    </div>`
}

function newsComponent(data) {
    return `<div class="news-item d-block bg-light">
        <div class="d-flex mb-3 align-items-center position-relative">
            <div class="flex-shrink-0">
                <img src="https://source.unsplash.com/random/120x120?keyword=${data.id}" alt="random">
            </div>
            <div class="flex-grow-1 ms-3">
                <p class="text-justify">${data.title}</p>
                <p class="small">writted by ${data.userId}</p>
                <a class="stretched-link" href="detail.html?id=${data.id}"></a>
            </div>
        </div>
    </div>`
}

function writerComponent(data) {
    return `<div class="d-flex mb-3 align-items-center">
        <div class="flex-shrink-0">
            <img src="https://source.unsplash.com/random/48x48" alt="random" class="rounded-circle">
        </div>
        <div class="flex-grow-1 ms-3">
            <span class="d-block fw-bold">${data.name}</span>
            <span class="small">${data.email}</span>
        </div>
    </div>`
}

$(window).on('load', function() {
    const trending = $('#trending-articles')
    const news = $('#news-articles')
    const writer = $('#writer')

    $.get({
        url: 'https://jsonplaceholder.typicode.com/posts',
        success: (data) => {
            for (let i=0; i<3; i++) {
                trending.append(trendingComponent(i+1, data[i]))
            }
        }
    })
    
    $.get({
        url: 'https://jsonplaceholder.typicode.com/posts',
        success: (data) => {
            for (let i=0; i<5; i++) {
                news.append(newsComponent(data[i]))
            }
        }
    })

    $.get({
        url: 'https://jsonplaceholder.typicode.com/users',
        success: (data) => {
            for (let i=0; i<5; i++) {
                writer.append(writerComponent(data[i]))
            }
        }
    })
})

