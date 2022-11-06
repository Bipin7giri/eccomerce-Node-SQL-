import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { json, useNavigate } from 'react-router-dom';
const AddProducts = () => {
  let navigate = useNavigate();
  const [productDetails, setProductDetails] = useState({
    product_name: '',
    description: '',
    product_price: '',
    image: '',
    tags: '',
    slug: '',
    stock: '',
    category_id: '',
  });
  const [category, setCatgrory] = useState([]);
  useEffect(() => {
    axios.get('http://127.0.0.1:3000/product/getallproduct').then((res) => {
      setCatgrory(res.data);
      console.log(category);
    });
  }, []);

  const formData = new FormData();
  formData.append('product_name', productDetails.product_name);
  formData.append('description', productDetails.description);
  formData.append('product_price', productDetails.product_price);
  formData.append('image', productDetails.image);
  formData.append('tags', productDetails.tags);
  formData.append('slug', productDetails.slug);
  formData.append('stock', productDetails.stock);
  formData.append('category_id', productDetails.category_id);

  const saveToDB = () => {
    console.log(productDetails);
    axios
      .post('http://127.0.0.1:3000/product/addproduct', formData, {
        withCredentials: false,
      })
      .then((res) => {
        // navigate('/productlist');
        console.log(res.data);
      });
  };
  return (
    <div class='grid  place-items-center mt-16 '>
      <div class='w-11/12 px-6 bg-white sm:w-8/12 md:w-1/2 lg:w-5/12'>
        <h1 class='text-xl font-semibold'>
          Hello there ?,
          <span class='font-normal'>
            please fill in your information to continue
          </span>
        </h1>
        <div
          encType='multipart/form-data'
          class='mt-6'
        >
          <div class='flex justify-between gap-3'>
            <span class='w-1/2'>
              <label
                for='Name'
                class='block text-xs font-semibold text-gray-600 uppercase'
              >
                Name
              </label>

              <input
                onKeyUp={(e) => {
                  setProductDetails({
                    ...productDetails,
                    product_name: e.target.value,
                  });
                }}
                id='name'
                type='text'
                name='name'
                placeholder='Samsung'
                autocomplete='given-name'
                class='block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner'
                required
              />
            </span>
            <span class='w-1/2'>
              <label
                for='countries'
                class='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400'
              >
                Select an option
              </label>
              <select
                id='category'
                class='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 '
                onChange={(e) => {
                  setProductDetails({
                    ...productDetails,
                    category_id: e.target.value,
                  });
                }}
              >
                <option selected>Select Category</option>

                {category.map((item) => {
                  return (
                    <>
                      <option value={item.c_id}>{item.name}</option>
                    </>
                  );
                })}
              </select>
            </span>
          </div>
          <label
            for='description'
            class='block mt-2 text-xs font-semibold text-gray-600 uppercase'
          >
            description
          </label>
          <textarea
            onKeyUp={(e) => {
              setProductDetails({
                ...productDetails,
                description: e.target.value,
              });
            }}
            id='description'
            cols='30'
            rows='4'
            placeholder='write here..'
            class='w-full font-serif  p-4 text-gray-600 bg-indigo-50 outline-none rounded-md'
          ></textarea>

          <div class='flex justify-between gap-3'>
            <span class='w-1/2'>
              <label
                for='color'
                class='block text-xs font-semibold text-gray-600 uppercase'
              >
                slug
              </label>
              <input
                onKeyUp={(e) => {
                  setProductDetails({
                    ...productDetails,
                    slug: e.target.value,
                  });
                }}
                id='color'
                type='text'
                name='color'
                placeholder='red'
                autocomplete='given-name'
                class='block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner'
                required
              />
            </span>

            <span class='w-1/2'>
              <label
                for='lastname'
                class='block text-xs font-semibold text-gray-600 uppercase'
              >
                Price
              </label>
              <input
                onKeyUp={(e) => {
                  setProductDetails({
                    ...productDetails,
                    product_price: e.target.value,
                  });
                }}
                id='lastname'
                type='number'
                name='lastname'
                placeholder='rs500'
                autocomplete='family-name'
                class='block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner'
                required
              />
            </span>
          </div>
          <div class='flex justify-between gap-3'>
            <span class='w-1/2'>
              <label
                for='color'
                class='block text-xs font-semibold text-gray-600 uppercase'
              >
                Tags
              </label>
              <input
                onKeyUp={(e) => {
                  setProductDetails({
                    ...productDetails,
                    tags: e.target.value,
                  });
                }}
                id='tags'
                type='text'
                name='tags'
                placeholder='mobile'
                autocomplete='given-name'
                class='block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner'
                required
              />
            </span>
            <span class='w-1/2'>
              <label
                for='image'
                class='block text-xs font-semibold text-gray-600 uppercase'
              >
                Image
              </label>
              <input
                onChange={(e) => {
                  setProductDetails({
                    ...productDetails,
                    image: e.target.files[0],
                  });
                }}
                id='image'
                type='file'
                name='image'
                placeholder='xl'
                autocomplete='family-name'
                class='block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner'
                required
              />
            </span>
            <span class='w-1/2'>
              <label
                for='stocks'
                class='block text-xs font-semibold text-gray-600 uppercase'
              >
                stocks
              </label>
              <input
                onKeyUp={(e) => {
                  setProductDetails({
                    ...productDetails,
                    stock: e.target.value,
                  });
                }}
                id='stocks'
                type='number'
                name='stocks'
                placeholder='5000'
                autocomplete='family-name'
                class='block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner'
                required
              />
            </span>
          </div>

          <button
            onClick={() => saveToDB()}
            type='button'
            class='w-full py-3 mt-6 font-medium tracking-widest text-white uppercase bg-black shadow-lg focus:outline-none hover:bg-gray-900 hover:shadow-none'
          >
            Add product
          </button>
          <p class='flex justify-between inline-block mt-4 text-xs text-gray-500 cursor-pointer hover:text-black'></p>
        </div>
      </div>
    </div>
  );
};

export default AddProducts;
