
const tours = [
{
title:'Гора Иремель',
price:'4 900 ₽',
image:'https://images.unsplash.com/photo-1464822759085-2f3661248589?q=80&w=1200',
desc:'Восхождение на главную вершину Южного Урала.'
},
{
title:'Шульган-Таш',
price:'5 500 ₽',
image:'https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1200',
desc:'Капова пещера и древние рисунки.'
},
{
title:'Сплав по Белой',
price:'9 900 ₽',
image:'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200',
desc:'Настоящее приключение с палатками и кострами.'
},
{
title:'Озеро Банное',
price:'6 200 ₽',
image:'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1200',
desc:'Отдых на красивейшем озере Башкирии.'
}
]

const tourGrid = document.getElementById('tourGrid')

function renderTours(){

tourGrid.innerHTML=''

tours.forEach(tour=>{

tourGrid.innerHTML += `
<div class="tour-card">

<img src="${tour.image}" alt="${tour.title}">

<div class="tour-content">

<h3>${tour.title}</h3>

<p>${tour.desc}</p>

<div class="price">${tour.price}</div>

<button class="primary-btn" style="margin-top:20px;width:100%;">
Забронировать
</button>

</div>

</div>
`
})

}

function openAuth(){
document.getElementById('authModal').style.display='flex'
}

function closeAuth(){
document.getElementById('authModal').style.display='none'
}

document.getElementById('authForm').addEventListener('submit',(e)=>{

e.preventDefault()

const user = {
name:document.getElementById('username').value,
email:document.getElementById('email').value
}

localStorage.setItem('bashUser',JSON.stringify(user))

alert(`Добро пожаловать, ${user.name}!`)

closeAuth()

})

window.addEventListener('DOMContentLoaded',()=>{

renderTours()

const savedUser = JSON.parse(localStorage.getItem('bashUser'))

if(savedUser){
document.querySelector('.login-btn').innerHTML = savedUser.name
}

})
