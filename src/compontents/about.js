import React from 'react';


const AboutUs = () => {
  return (
    <div className="container-lg my-5">
     
      <section className="row justify-content-center">
       
        <div className="col-12 col-md-8 col-lg-8 mb-5">
          <h2 className="text-dark text-center">Who We Are</h2>
          <p>
            At <strong>The Store</strong>, we believe in bringing you the best products from all over the world. Whether you're looking for the latest technology, the coolest toys, or the most luxurious perfumes, we've got something for everyone. From headsets to keyboards, toy cars to cologne, we offer a wide variety of high-quality items to meet your needs.
          </p>
        </div>

        
        <div className="col-12 col-md-8 col-lg-8 mb-5">
          <h2 className="text-dark text-center">Our Vision</h2>
          <p>
            Our vision is simple: to create a store where people can find everything they need in one place. We are constantly updating our inventory to ensure we provide the latest trends and the best deals. Whether you're shopping for yourself or looking for the perfect gift, The Store is here to make your shopping experience easier and more enjoyable.
          </p>
        </div>

       
        <div className="col-12 col-md-8 col-lg-8 mb-5">
          <h2 className="text-dark text-center">What We Sell</h2>
          <p className='text-center'>
            We offer a diverse range of products, including:
          </p>
          <ul className="list-unstyled">
            <li><strong>High-quality headsets</strong> for music lovers and gamers.</li>
            <li><strong>Fun and durable toy cars</strong> for children of all ages.</li>
            <li><strong>Advanced keyboards</strong> for professionals and gamers alike.</li>
            <li><strong>Luxury perfumes</strong> and fragrances to make you feel special.</li>
            <li>And much more! We constantly update our catalog to include a wide variety of products for everyone.</li>
          </ul>
        </div>

       
        <div className="col-12 col-md-8 col-lg-8 mb-5">
          <h2 className="text-dark text-center">Our Commitment to Quality</h2>
          <p>
            At The Store, we are committed to providing only the highest quality products. We carefully select every item in our store, ensuring that it meets our high standards for durability, functionality, and style. Customer satisfaction is our top priority, and we strive to offer excellent customer service to make your shopping experience as smooth as possible.
          </p>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
