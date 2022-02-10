import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';



function Home(){
  return(
    
      <div>
      
      <div class="header">
      <h1>Express Commerce</h1>
      <div class="navbar">
      <a href="#" className="act">Home</a><br/>
      <a href="#women" className="link">Womens</a><br/>
      <a href="#men"className="contact">Mens</a><br/>
      <a href="#kids" class="right">kids</a> <br/>
      <a href="#sports" class="right">Sports</a> <br/>
      <a href="#Accessories" class="right">Accessories</a> <br/>
      </div>
      </div>
      
      <br/>
      <br/>
  
      
      <div className='container'>
      <Card 
        img="img/women.jfif"
        title="Womens Section"
        heading="This is a section of womens "
        description="All things are available regarding Womens outfits"/>

      <Card 
        img="img/men.jfif"
        title="Mens Section"
        heading="This is a section of Mens "
        description="All things are available regarding Mens outfits"/>


      <Card 
        img="img/kids.jpg"
        title="Kids Section "
        heading="This is a section of Kids "
        description="All things are available regarding Mens outfits"/>

      <Card 
        img="img/sports.jpg"
        title="Sports"
        heading="This is a section of Sports"
        description="All things are available regarding Mens outfits"/>

      <Card 
        img="img/tech.jfif"
        title="Accessories"
        heading="This is a section of Accessories"
        description="All things are available regarding Accesscories"/>
      </div>
    </div>
    
  )
  function Card(props){
    return(
      <div className='card'>
        <div className='card-body'>
          <img src={props.img} class="card-img"/>
          
        <div className='card-content'>
          <h3 className='card-title'>{props.title}</h3>
          <h3 className='card-heading'>{props.heading}</h3>
          <p className='card-description'>{props.description}</p>
        </div>
  
        </div>
        
        <a className="show"><button className='button'>show more</button></a>
        <br/>
        <br/>
        </div>
        
    )
  }
  
}
function Womens(){
  return(
    
      <div>
      <br/>
      <hr/>
      <div className='header'><h3>Womens Section</h3></div>
      
      <br/>
  
      
      <div className='container' id="women">
      <Card 
        img="img/women.jfif"
        title="Womens Section"
        heading="This is a section of womens "
        description="All things are available regarding Womens outfits"/>

<Card 
        img="img/women.jfif"
        title="Womens Section"
        heading="This is a section of womens "
        description="All things are available regarding Womens outfits"/>

<Card 
        img="img/women.jfif"
        title="Womens Section"
        heading="This is a section of womens "
        description="All things are available regarding Womens outfits"/>

<Card 
        img="img/women.jfif"
        title="Womens Section"
        heading="This is a section of womens "
        description="All things are available regarding Womens outfits"/>

<Card 
        img="img/women.jfif"
        title="Womens Section"
        heading="This is a section of womens "
        description="All things are available regarding Womens outfits"/>

      </div>
      
    </div>
  )
}
function Mens(){
  return(
    
      <div>
      <br/>
      <hr/>
      <div className='header' id="men"><h3>Mens Section</h3></div>
      
      <br/>
  
      
      <div className='container'>
      <Card 
        img="img/men.jfif"
        title="Mens Section"
        heading="This is a section of Mens "
        description="All things are available regarding Mens outfits"/>
        <Card 
        img="img/men.jfif"
        title="Mens Section"
        heading="This is a section of Mens "
        description="All things are available regarding Mens outfits"/>
        <Card 
        img="img/men.jfif"
        title="Mens Section"
        heading="This is a section of Mens "
        description="All things are available regarding Mens outfits"/>
        <Card 
        img="img/men.jfif"
        title="Mens Section"
        heading="This is a section of Mens "
        description="All things are available regarding Mens outfits"/>
        <Card 
        img="img/men.jfif"
        title="Mens Section"
        heading="This is a section of Mens "
        description="All things are available regarding Mens outfits"/>
      </div>
      {/* <div className="footer">
      <p>I Hope You Enjoy these courses and their article.</p>
      <h3>@2022 Sudha Kashyap</h3>
  </div> */}
    </div>
  )
}
function Kids(){
  return(
    
      <div>
      <br/>
      <hr/>
      <div className='header' id="kids"><h3>Kids Section</h3></div>
      
      <br/>
  
      
      <div className='container'>
      <Card 
        img="img/kids.jpg"
        title="Kids Section "
        heading="This is a section of Kids "
        description="All things are available regarding Mens outfits"/>

<Card 
        img="img/kids.jpg"
        title="Kids Section "
        heading="This is a section of Kids "
        description="All things are available regarding Mens outfits"/>

<Card 
        img="img/kids.jpg"
        title="Kids Section "
        heading="This is a section of Kids "
        description="All things are available regarding Mens outfits"/>

<Card 
        img="img/kids.jpg"
        title="Kids Section "
        heading="This is a section of Kids "
        description="All things are available regarding Mens outfits"/>

<Card 
        img="img/kids.jpg"
        title="Kids Section "
        heading="This is a section of Kids "
        description="All things are available regarding Mens outfits"/>

      </div>
    </div>
  )
}

function Sports(){
  return(
    
      <div>
      <br/>
      <hr/>
      <div className='header' id="sports"><h3>Sports Section</h3></div>
      
      <br/>
  
      
      <div className='container'>
      <Card 
        img="img/sports.jpg"
        title="Sports"
        heading="This is a section of Sports"
        description="All things are available regarding Mens outfits"/>

<Card 
        img="img/sports.jpg"
        title="Sports"
        heading="This is a section of Sports"
        description="All things are available regarding Mens outfits"/>

<Card 
        img="img/sports.jpg"
        title="Sports"
        heading="This is a section of Sports"
        description="All things are available regarding Mens outfits"/>

<Card 
        img="img/sports.jpg"
        title="Sports"
        heading="This is a section of Sports"
        description="All things are available regarding Mens outfits"/>

<Card 
        img="img/sports.jpg"
        title="Sports"
        heading="This is a section of Sports"
        description="All things are available regarding Mens outfits"/>

      </div>
      {/* <div className="footer">
      <p>I Hope You Enjoy these courses and their article.</p>
      <h3>@2022 Sudha Kashyap</h3>
  </div> */}
    </div>
  )
}
function Access(){
  return(
    
      <div>
      <br/>
      <hr/>
      <div className='header' id="Accessories"><h3>Accesscories Section</h3></div>
      
      <br/>
  
      
      <div className='container'>
      <Card 
        img="img/tech.jfif"
        title="Accessories"
        heading="This is a section of Accessories"
        description="All things are available regarding Accesscories"/>
        <Card 
        img="img/tech.jfif"
        title="Accessories"
        heading="This is a section of Accessories"
        description="All things are available regarding Accesscories"/>
        <Card 
        img="img/tech.jfif"
        title="Accessories"
        heading="This is a section of Accessories"
        description="All things are available regarding Accesscories"/>
        <Card 
        img="img/tech.jfif"
        title="Accessories"
        heading="This is a section of Accessories"
        description="All things are available regarding Accesscories"/>
        <Card 
        img="img/tech.jfif"
        title="Accessories"
        heading="This is a section of Accessories"
        description="All things are available regarding Accesscories"/>
      </div>
      {/* <div className="footer">
      <p>I Hope You Enjoy these courses and their article.</p>
      <h3>@2022 Sudha Kashyap</h3>
  </div> */}
    </div>
  )
}

function Card(props){
  return(
    <div className='card'>
      <div className='card-body'>
        <img src={props.img} class="card-img"/>
        
      <div className='card-content'>
        <h3 className='card-title'>{props.title}</h3>
        <h3 className='card-heading'>{props.heading}</h3>
        <p className='card-description'>{props.description}</p>
      </div>

      </div>
      
      <a className="show"><button className='button'>Add to Cart</button></a>
      <br/>
      <br/>
      </div>
      
  )
}

ReactDOM.render(
  <React.StrictMode>
    <Home/>
    <Womens/>
    <Mens/>
    <Kids/>
    <Sports/>
    <Access/>
    
  </React.StrictMode>,
  document.getElementById('root')
);

