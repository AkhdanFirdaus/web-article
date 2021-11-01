function commentComponent(data) {
    return `<div class="mb-4 border-bottom">
        <h6 class="font-weight-bold">${data.email}</h6>
        <p class="mt-2">${data.body}</p>
    </div>`
}

$(window).on('load', function() {
    const param = new URL(window.location.href)
    const id = param.searchParams.get('id')

    $.get({
        url: `https://jsonplaceholder.typicode.com/posts/${id}`,
        success: (data) => {
            document.title = data.title
            $('#title').text(data.title)
            $('#content').text(data.body)
        }
    })

    $.get({
        url: `https://jsonplaceholder.typicode.com/users/${id}`,
        success: (data) => {
            $('#writer-name').text(data.name)
            $('#writer-email').text(data.email)
        }
    })

    $.get({
        url: `https://jsonplaceholder.typicode.com/posts/${id}/comments`,
        success: (data) => {
            data.forEach((comment) => {
                $('#comments').append(commentComponent(comment))
            })
        }
    })
})