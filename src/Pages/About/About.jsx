import React from 'react';
import AboutImg from '../../Assests/About/About.jpg'; // Make sure the path is correct
import AboutImge2 from '../../Assests/About/About2.jpg'
import facebook from '../../Assests/About/facebook.svg'
import instagram from '../../Assests/About/instagram.svg'
import  pinterest from '../../Assests/About/pinterest.svg'
import  twitter from '../../Assests/About/twitter.svg'
import './About.css'
const About = () => {
  return (
    <div className='relative'>
      <div className='image-container'>
        <img className='bg-contain' src={AboutImg} alt="About" />
        <img className='overlay-image absolute top-6 rounded-3xl mt-[200px] ml-[865px] ' src={AboutImge2} alt="Overlay" />
        <div className='overlay-image absolute top-6 rounded-3xl mt-[200px] ml-[80px] box-border h-[484px] w-[730px] p-4  text-white   font-l 'style={{ backgroundColor: 'black'  }}><span className=' font-serif  text-4xl ml-3  font-thin'  >Prasad Siriwardana Wild Life Photography</span><br/><br/><p className=' text-lg ml-3 font-thin'>Welcome to my ‘Wildlife photography with Prasad Siriwardana’ page which illustrates the diversity of Wildlife photography.<br/> <br/> 

I’m an international award winning Nature & Wildlife photographer, born in the Pearl of the Indian Ocean – Sri Lanka. Capturing the beauty of flora and fauna in Sri Lanka is one of my favourite hobbies. Throughout the past years I was able to capture many species across the country, such as leopards, elephants, birds, insects etc., & their behaviour.<br/><br/>

My favourite places in Sri Lanka where I spend my time photographing the beauty of nature & wildlife are, Wilpattu National Park in the North Western province and Yala National park in the Southern province and my ‘all-time favourite’ morning walk locations are the Diyasaru & Beddagana Wetland Parks in Colombo.</p></div>

<a href="https://www.facebook.com/your-facebook-profile" target="_blank" rel="noopener noreferrer">
  <img className='overlay-image absolute bottom-40 w-[40px] h-[40px] ml-[80px]' src={facebook} alt="Facebook" />
</a>
<a href="https://www.instagram.com/your-instagram-profile" target="_blank" rel="noopener noreferrer">
  <img className='overlay-image absolute bottom-40 w-[40px] h-[40px] ml-[130px]' src={instagram} alt="Instagram" />
</a>
<a href="https://www.pinterest.com/your-pinterest-profile" target="_blank" rel="noopener noreferrer">
  <img className='overlay-image absolute bottom-40 w-[40px] h-[40px] ml-[180px]' src={pinterest} alt="Pinterest" />
</a>
<a href="https://www.twitter.com/your-twitter-profile" target="_blank" rel="noopener noreferrer">
  <img className='overlay-image absolute bottom-40 w-[40px] h-[40px] ml-[230px]' src={twitter} alt="Twitter" />
</a>


      </div>
    </div>
  );
};

export default About;
