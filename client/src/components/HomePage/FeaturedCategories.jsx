import React from 'react'
import FeaturedCategoriesComponent from './FeaturedCategoriesComponent'

const FeaturedCategories = () => {
  return (
    <div className='px-16 mb-6'>
      <h1 className='font-semibold text-lg mb-2'>FEATURED CATEGORIES</h1>
      <div className='grid grid-cols-8'>
        <FeaturedCategoriesComponent name="Fashion" bg="violet" src="https://cdni.iconscout.com/illustration/premium/thumb/fashion-show-illustration-download-in-svg-png-gif-file-formats--model-photography-woman-elegant-pack-clothing-accessories-illustrations-5957733.png?f=webp"/>
        <FeaturedCategoriesComponent name="Electronics" bg="indigo" src="https://cdni.iconscout.com/illustration/premium/thumb/electronic-illustration-download-in-svg-png-gif-file-formats--counter-logo-sale-shelf-miscellaneous-pack-illustrations-4481052.png?f=webp"/>
        <FeaturedCategoriesComponent name="Bags" bg="blue" src="https://cdni.iconscout.com/illustration/premium/thumb/female-handbag-illustration-download-in-svg-png-gif-file-formats--boutique-purse-bag-store-pack-clothing-accessories-illustrations-5805844.png"/>
        <FeaturedCategoriesComponent name="Footwear" bg="green" src="https://cdn3d.iconscout.com/3d/premium/thumb/running-shoes-3d-icon-download-in-png-blend-fbx-gltf-file-formats--shoe-sport-sneakers-footwear-pack-clothing-accessories-icons-6670105.png?f=webp"/>
        <FeaturedCategoriesComponent name="Groceries" bg="yellow" src="https://cdni.iconscout.com/illustration/premium/thumb/grocery-delivery-illustration-download-in-svg-png-gif-file-formats--home-service-food-pack-e-commerce-shopping-illustrations-11395075.png?f=webp"/>
        <FeaturedCategoriesComponent name="Beauty" bg="orange" src="https://cdni.iconscout.com/illustration/premium/thumb/beauty-saloon-illustration-download-in-svg-png-gif-file-formats--parlor-female-woman-barber-and-fashion-pack-illustrations-2730854.png?f=webp"/>
        <FeaturedCategoriesComponent name="Wellness" bg="red" src="https://cdni.iconscout.com/illustration/premium/thumb/woman-focuses-on-health-and-wellness-illustration-download-in-svg-png-gif-file-formats--fitness-exercise-training-mental-pack-healthcare-medical-illustrations-10147306.png?f=webp"/>
        <FeaturedCategoriesComponent name="Jewellery" bg="pink" src="https://cdni.iconscout.com/illustration/premium/thumb/jewellery-at-shop-illustration-download-in-svg-png-gif-file-formats--store-jewelry-jeweler-pack-business-illustrations-9627000.png?f=webp"/>
      </div>
    </div>
  )
}

export default FeaturedCategories
