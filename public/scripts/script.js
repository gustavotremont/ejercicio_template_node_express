if(document.getElementById('showdogs')) {
    document.getElementById('showdogs').addEventListener('click', (e) => {
        e.preventDefault();
        document.getElementById('perrito').setAttribute('src','https://biotechmagazineandnews.com/wp-content/uploads/2019/10/perros.jpg')
    });
}

if(document.getElementById('response')){
    document.getElementById('response').addEventListener('click', (e) => {
        e.preventDefault();
        const form = document.getElementById('formBody')
        window.location.href = `/answer/${form.pregunta.value}`;
    })
}