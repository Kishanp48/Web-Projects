const notify = document.querySelector('.notify')
const btn = document.querySelector('.btn')

btn.addEventListener('click', addOne)

function addOne()
{
    var add = Number(notify.getAttribute('abb') || 0)
    notify.setAttribute('abb', add+1)

    if(add === 0)
    {
        notify.classList.add('add-num')
        btn.classList.remove('exite')
    }
}