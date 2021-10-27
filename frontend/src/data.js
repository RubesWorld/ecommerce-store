import image1 from "./images/product1.jpg";
import image2 from "./images/product2.jpg";
import image3 from "./images/product3.jpg";
import image4 from "./images/product4.jpg";
import image5 from "./images/product5.jpg";

const data = {
  products: [
    {
      id: "1",
      name: "Jean Jacket",
      category: "Jackets",
      image: image1,
      price: 100,
      brand: "Levi",
      rating: 4.0,
      numReviews: 10,
      description: "Great and warm!",
    },
    {
      id: "2",
      name: "Jean Pants",
      category: "Bottoms",
      image: image2,
      price: 75,
      brand: "Levi",
      rating: 5.0,
      numReviews: 5,
      description: "Durable pants!",
    },
    {
      id: "3",
      name: "Leather Jacket",
      category: "Jackets",
      image: image3,
      price: 70,
      brand: "Levi",
      rating: 4.5,
      numReviews: 1,
      description: "Stylish and practical!",
    },
    {
      id: "4",
      name: "Leather Boots",
      category: "Shoes",
      image: image4,
      price: 65,
      brand: "Levi",
      rating: 4.0,
      numReviews: 3,
      description: "Comfortable!",
    },
    {
      id: "5",
      name: "Leather Belt",
      category: "Accessories",
      image: image5,
      price: 25,
      brand: "Levi",
      rating: 4.5,
      numReviews: 5,
      description: "Durable!",
    },
  ],
};

export default data;
