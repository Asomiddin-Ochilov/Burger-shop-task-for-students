var cardArray = [
  {
      id:1,
    productName:'Burger Dreams',
    description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    price:9.20,
    conunt:1,
    img:'/img-2/image1.png'
},  
{
    id:2,
  productName:'Burger Waldo',
  description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
  price:10.00,
  conunt:1,
  img:'/img-2/image2.png'
},
{
    id:3,
  productName:'Burger Cali',
  description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
  price:8.00,
  conunt:1,
  img:'/img-2/image3.png'
},
{
    id:4,
  productName:'Burger Bacon Buddy',
  description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
  price:9.99,
  conunt:1,
  img:'/img-2/image4.png'
},
{
    id:5,
  productName:'Burger Spicy',
  description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
  price:9.20,
  conunt:1,
  img:'/img-2/image5.png'
},
{
    id:6,
  productName:'Burger Classic',
  description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
  price:8.00,
  conunt:1,
  img:'/img-2/image6.png'
},
]

var cards = []

function CardMap(){
    
    let cardHtml = cardArray.map((item,index)=>
        `
        <div class="card-item reavel">
        <div class="price">
         $ ${item.price} USD  
        </div>
     <img src=${item.img} alt="img1">  
      <div class="item-text">
         <h4> ${item.productName} </h4> 
         <p> 
             ${item.description}
          </p>
          <button class="mt-2"> ${item.conunt} </button>
          <button onclick="AddCard(${item.id})" class="btn-active"> 
              Add to card 
             </button>
      </div>
    </div>  
      `
    )
    $('.card-groups').html(cardHtml)
}

CardMap()
function AddCard(id){
     let CardLength = cards.length + 1
      const OneCard = cardArray.filter((item)=>{
        if(item.id === id){
          return item
        }
      }) 
      cards.push(...OneCard)
    $('.sale-card').css('display','block')
    $('.span').html(CardLength)
}
$('.sale-card').click(function(){
    let TableCard = cards.map((item,index)=>
    `
    <tr>
    <td>${index + 1}</td>
    <td>${item.productName}</td>
    <td>
     <img class='table-img' src=${item.img} />
    </td>
    <td>${item.price}
    </tr> 
    `
    )
    let date = new Date();
    let d = `${date.getDate()}
    -${date.getMonth()+ 1}
    - ${date.getFullYear()}
    `
    var suma = 0
    cards.filter((item)=>{
         return suma = suma + parseInt(item.price)
    })
    
    $('.price-span').html(`$ ${suma}`)

     $('.date-span').html(d)
     $('.count-span').html(cards.length)

    $('.tbody').html(TableCard)

   $('.modalVisable').addClass('activeModal')
})

$('.close-modal').click(function(){
   $('.modalVisable').removeClass('activeModal')
})

$('.clear').click(function(){

  $('.modalVisable').removeClass('activeModal')
  $('.sale-card').css('display','none')
  cards = []
})
$('.checkout').click(function(){
  alert('Maxsulotlar sotildi :)')
  $('.modalVisable').removeClass('activeModal')
  $('.sale-card').css('display','none')
  cards = []
})


// const input = document.getElementById('input')
// input.addEventListener('input',(event)=>{
//     if(event.target.value !== ''){
//       addEventListener("beforeunload",beforeUnload,{capture:true})
//     }else{
//         removeEventListener("beforeunload",beforeUnload,{capture:true})
//     }
// })

// function beforeUnload(event){
//  event.preventDefault();
//  return event.returnValue = 'Toxtatishni hohlaysanmi ? '
// }