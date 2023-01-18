import React from 'react';

export default function ContactForm() {

  return(
    <section class="contact section" id="contact">
        {/* <h2 class="section__title">Contact Me</h2> */}
        {/* <span class="section__subtitle">Get to know me!</span> */}
        

        <div class="contact__container container grid">
          
                <div class="contact__information">
                    <i class="uil uil-phone contact__icon"></i>
                    <div>
                        <h3 class="contact__title">What's app</h3>
                        <span class="contact__subtitle">+62-822-898-959-78</span>
                    </div>
                </div>
                <div class="contact__information">
                    <i class="uil uil-envelope contact__icon"></i>
                    <div>
                        <h3 class="contact__title">Email</h3>
                        <span class="contact__subtitle">violettasalim@gmail.com</span>
                    </div>
                </div>
                <div class="contact__information">
                    <i class="uil uil-map-marker contact__icon"></i>
                    <div>
                        <h3 class="contact__title">Location</h3>
                        <span class="contact__subtitle"> Merpati, Medan Estate, Percut Sei Tuan, Kab. Deli Serdang, <br></br> North Sumatera, Medan, Indonesia.</span>
                    </div>
                </div>
                <form  class="contact__form grid">
                    <div class="contact__inputs grid">
                        <div class="contact__content">
                            <label for="" class="contact__label">Name</label>
                            <input type="text" id="name-contact" name="name" class="contact__input"/>
                        </div>

                        <div class="contact__content">
                            <label for="" class="contact__label">Email</label>
                            <input type="email" id="email-contact" name="email" class="contact__input"/>    
                        </div>

                        

                        <div class="contact__content">
                            <label for="" class="contact__label">Message</label>
                            <textarea name="message" id="message" cols="0" rows="7" class="contact__input"></textarea>    
                        </div>

                        <div>
                
                            <button type="submit" class="button contact__button button--flex">
                                Send Message
                                <i class="uil uil-message button__icon"></i>
                            </button>
                        </div>
                      
                    </div>
                </form>
      
        </div>


    </section>
  );
}
