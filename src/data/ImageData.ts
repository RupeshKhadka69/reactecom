interface ImageData {
    image: string;
    text1?: string;
    text2?: string;
    text3?: string;
    shop?: string;
    secText?: string;
  }

  const images: ImageData[] = [
    {
      image: '../assets/Images/imag2.jpg',
      text1: 'Best Sale',
      text2: 'Upto 30% off',
      text3: 'Apply fast at Checkout',
      shop: 'Shop Now'
    },
    {
        image: '../assets/Images/ecom.jpg',
        secText: 'Treat yourself to a shopping experience like no other.',
        shop: 'Shop Now',
    },
    {
        image: '../assets/Images/image1.jpg',
        secText: 'Shop smarter, not harder, with our user-friendly website.',
        shop: 'Shop Now',
    },
  ];
  
  export default images;
  