function writerComponent(data) {
    return `<div class="mb-4 border-bottom">
        <h6 class="font-weight-bold">${data.name}</h6>
        <p class"small text-lowercase">${data.email}</p>
    </div>`
}

$(window).on('load', function() {
    $.get({
        url: `https://jsonplaceholder.typicode.com/users`,
        success: (data) => {
            data.forEach((item) => {
                $('#writers').append(writerComponent(item))
            })
        }
    })
})