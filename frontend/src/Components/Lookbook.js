import React from 'react'
import Navigation from './Navigation'
import Footer from './Footer'

import {
  MDBCarousel,
  MDBCarouselItem,
} from 'mdb-react-ui-kit';

const Lookbook = () => {

 
  return (
    <div>
      <Navigation />
      <br />
      <br />
      <br />


      

 
      
     <h1 className='lookbook' >Lookbook</h1> 
     <br />
     <br />
      <br />

        <MDBCarousel showControls showIndicators dark fade>
      <MDBCarouselItem
        className='w-100 d-block'
        itemId={1}
        src='https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-store-lookbook-cover-image-3-1536x668.jpg'
        alt='...'
      >
       
      </MDBCarouselItem>
      <MDBCarouselItem
        className='w-100 d-block'
        itemId={2}
        src='https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-store-lookbook-cover-image-1-1536x668.jpg'
        alt='...'
      >
       
      </MDBCarouselItem>

      <MDBCarouselItem
        className='w-100 d-block'
        itemId={3}
        src='https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-store-lookbook-cover-image-4-1536x668.jpg'
        alt='...'
      >
        
      </MDBCarouselItem>
      <MDBCarouselItem
        className='w-100 d-block'
        itemId={4}
        src='https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/w_1253,c_limit/b0c441b1-0d5a-43dc-96cd-3699688fb1a3/nike-just-do-it.jpg'
        alt='...'
      />
      <MDBCarouselItem
        className='w-100 d-block'
        itemId={5}
        src='https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/w_1253,c_limit/f0c0fbe6-a338-4ef5-b563-ca96eecc4fe4/nike-just-do-it.jpg'
        alt='...'
      />
      <MDBCarouselItem
        className='w-100 d-block'
        itemId={6}
        src='https://s7ap1.scene7.com/is/image/adityabirlafashion/1550x650?resMode=sharp2&wid=1550&hei=650'
        alt='...'
      />
    </MDBCarousel>  



 {/* <MDBCarousel>
      <MDBCarouselItem
        className='w-100 d-block'
        itemId={1}
        src='https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-store-lookbook-cover-image-3-1536x668.jpg'
        alt='...'
      />
      <MDBCarouselItem
        className='w-100 d-block'
        itemId={2}
        src='https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-store-lookbook-cover-image-1-1536x668.jpg'
        alt='...'
      />
      <MDBCarouselItem
        className='w-100 d-block'
        itemId={3}
        src='https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-store-lookbook-cover-image-4-1536x668.jpg'
        alt='...'
      />
      <MDBCarouselItem
        className='w-100 d-block'
        itemId={4}
        src='https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/w_1253,c_limit/b0c441b1-0d5a-43dc-96cd-3699688fb1a3/nike-just-do-it.jpg'
        alt='...'
      />
      <MDBCarouselItem
        className='w-100 d-block'
        itemId={5}
        src='https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/w_1253,c_limit/f0c0fbe6-a338-4ef5-b563-ca96eecc4fe4/nike-just-do-it.jpg'
        alt='...'
      />
      <MDBCarouselItem
        className='w-100 d-block'
        itemId={6}
        src='E:\react tutorial\shoe-e-commerce\src\image4.png'
        alt='...'
      />
    </MDBCarousel> */}

 

 







       <div>
      {/* <div className='lookimage'>
    


      </div> */}


      <br /><br /><br />
       <h3>Go & Play 2023</h3>
        <p>go play shoes include running shoes, trail running shoes, hiking shoes, cross-training shoes, soccer cleats, basketball shoes, and other sports-specific footwear. The choice of go play shoes would depend on the activity you're engaging in and the specific requirements of that activity. It's essential to choose shoes that fit well, provide the necessary support, and are appropriate for the type of play you'll be involved in.</p>
      <br />
      <h3>Spring/Summer 2023</h3>
        <p>Spring and summer shoes are footwear designed to be worn during the warmer months, typically from spring through summer, when the weather is more conducive to open-toe, breathable, and lightweight footwear. These shoes are crafted with materials and styles that prioritize comfort, breathability, and a sense of style suitable for the season.When selecting spring and summer shoes, consider the material, breathability, comfort, style, and occasion. It's essential to choose shoes that match your personal style and provide the necessary comfort for the warmer weather.When selecting spring and summer shoes, consider the material, breathability, comfort, style, and occasion. It's essential to choose shoes that match your personal style and provide the necessary comfort for the warmer weather..</p>
      <br />
      
      <h3>  Fall/Winter 2023</h3>
        <p>Fall and winter shoes are footwear designed to provide comfort, warmth, and protection during the colder seasons of fall and winter. These shoes are crafted to keep your feet warm and dry while also being stylish and functional.Key features to consider when choosing fall and winter shoes include insulation, water resistance or waterproofing, traction, warmth, comfort, and style. It's important to select footwear based on your specific needs, the climate you'll be facing, and the types of activities you'll be engaged in during the fall and winter seasons.</p>
      
      </div> 





      

      <br />
      <br /><br />
      <br /><br />
      <br />
      <Footer />
      </div>
  )
}

export default Lookbook
