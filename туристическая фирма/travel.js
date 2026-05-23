const tours=[
{title:'Иремель',price:'4900 ₽'},
{title:'Шульган-Таш',price:'5500 ₽'},
{title:'Озеро Банное',price:'6200 ₽'}
];

const grid=document.getElementById('tourGrid');

tours.forEach(t=>{
grid.innerHTML+=`
<div class="card">
<h2>${t.title}</h2>
<p>${t.price}</p>
</div>
`
});
