import React, {useState} from 'react'
import './App.css'
import {Row, Col, Button, Container, Stack} from 'react-bootstrap'



const App=()=> {

    

    let [index, setIndex] = useState(0)

    function handleClick(){
      setIndex(index+=1)
      return index
      }

      if (index===quotes.length){
        index=0
      }

    
    
 return (
      <Container fluid id="quote-box">
        <section id="quote_text">
          <Row>
            
              <h1 id="text">"{quotes[index].text}"</h1>
              <p id="author">{quotes[index].author}</p>
      
                   
     </Row>
      <Row className="buttons">
          <Col>
          <Stack direction="horizontal" gap={2}>
           <Button variant="secondary" className="mr-6"> 
               <a id="tweet-quote" href="https://twitter.com/intent/tweet" target="blank">
               <i className="fa fa-twitter"></i></a>
           </Button>
            <Button variant="secondary"><a target="blank" id="tumblr-quote" href="https://www.tumblr.com/"> 
              <i className="fa fa-tumblr"/></a>
             </Button>
             </Stack>
           </Col>
            <Col id="right">
           
          <Button variant="secondary" onClick={handleClick} id="new-quote">New quote</Button>
          
           </Col>
        </Row>
        </section>
    
</Container>
    )
            }

    

          export default App
const quotes=[
  {text:"El único modo de hacer un gran trabajo es amar lo que haces",
   author:"Steve Jobs"},
  {text:"Nunca pienso en las consecuencias de fallar un gran tiro… cuando se piensa en las consecuencias se está pensando en un resultado negativo",
   author:"Michael Jordan"},
  {text: "El dinero no es la clave del éxito; la libertad para poder crear lo es",
   author: "Nelson Mandela"},
   {text:"Cuanto más duramente trabajo, más suerte tengo",
    author:"Gary Player"},
  {text:"La inteligencia consiste no sólo en el conocimiento, sino también en la destreza de aplicar los conocimientos en la práctica",
  author:"Aristóteles"},
    {text:"El trabajo duro hace que desaparezcan las arrugas de la mente y el espíritu",
      author:"Helena Rubinstein"},
        {text:"Cuando algo es lo suficientemente importante, lo haces incluso si las probabilidades de que salga bien no te acompañan",
          author:"Elon Musk"},
            {text:"Escoge un trabajo que te guste, y nunca tendrás que trabajar ni un solo día de tu vida",
              author:"Confucio"},
{text:"Un sueño no se hace realidad por arte de magia, necesita sudor, determinación y trabajo duro",
  author: "Colin Powell"},
{text:"Cuéntamelo y me olvidaré. enséñamelo y lo recordaré. involúcrame y lo aprenderé",
  author:"Benjamin Franklin"},
    {text:"La lógica te llevará de la a a la z. la imaginación te llevará a cualquier lugar",
      author:"Albert Einstein"},
        {text:"A veces la adversidad es lo que necesitas encarar para ser exitoso",
          author:"Zig Ziglar"},
            {text:"Para tener éxito tu deseo de alcanzarlo debe ser mayor que tu miedo al fracaso",
              author:"Bill Cosby"},
{text:"Ejecuta tus conocimientos con la maestría del que sigue aprendiendo",
  author:"Jonathan García-Allen"}
    ]

    