const $BODY = $('body')

async function getDeck(){
   let res = await axios.get('https://www.deckofcardsapi.com/api/deck/new/')
   console.log(res.data)
   
}

const deck = {
   async init(){
      let res = await axios.get('https://deckofcardsapi.com/api/deck/new/')
      this.deckId = res.data.deck_id
   },
   async shuffle(){
      let res = await axios.get(`https://www.deckofcardsapi.com/api/deck/${this.deckId}/shuffle/`)
      console.log(res)
   },
   async drawCard(){
      let res = await axios.get(`https://www.deckofcardsapi.com/api/deck/${this.deckId}/draw/`)
      var card = res.data.cards[0]
      var newCard = document.createElement('img')
      newCard.src = card.image
      $('.cards').append(newCard)
   }
}

$(document).ready(async ()=>{
   await deck.init()
   await deck.shuffle()
   $('.btn').click(()=>{
      deck.drawCard()
   })
})

async function getUser(user) {
   try {
      let url = `https://api.github.com/users/${user}`
      let res = await axios.get(url)
      console.log(`${res.data.name}: ${res.data.bio}`)
   }
   catch(e) {
      console.log('User does not exist!', e.message)
   }
}

guitarUrl = 'https://api.uberchord.com/v1/chords?names=E_m'

async function guitarTest() {
   res = await axios.get(guitarUrl)
   data = res.data[0]
   console.log(data.strings, data)
}