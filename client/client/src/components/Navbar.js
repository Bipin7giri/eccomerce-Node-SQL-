/** @format */

import React from 'react';
import { useState } from 'react';
import { Button, Drawer, Radio, Space } from 'antd';
import { Cascader } from 'antd';
import { Link } from 'react-router-dom';
import { HeartOutlined, ShoppingCartOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';
import { DownOutlined, SmileOutlined } from '@ant-design/icons';
import { Dropdown, Menu } from 'antd';
import { userAction } from '../redux/slice/authSlice';
const Navbar = () => {
  const dispatch = useDispatch();
  const { firstname, lastname } = useSelector((state) => state.user.user);
  const menu = (
    <Menu
      items={[
        {
          key: '1',
          label: <Link to={'/history'}>Profile</Link>,
        },
        {
          key: '2',
          label: (
            <p
              onClick={() => {
                dispatch(userAction.signOut());
              }}>
              Logout
            </p>
          ),
        },
      ]}
    />
  );

  const { cart } = useSelector((state) => state.carts);
  const { isLoggedIn } = useSelector((state) => state.user);

  const [open, setOpen] = useState(false);
  const [placement, setPlacement] = useState('left');
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  const onChange = (e) => {
    setPlacement(e.target.value);
  };
  const options = [
    {
      value: 'Dresses',
      label: 'dresses',
    },
    {
      value: 'zhejiang',
      label: 'Zhejiang',
    },
    {
      value: 'zhejiang',
      label: 'Zhejiang',
    },
    {
      value: 'zhejiang',
      label: 'Zhejiang',
    },
    {
      value: 'zhejiang',
      label: 'Zhejiang',
    },
    {
      value: 'zhejiang',
      label: 'Zhejiang',
    },
  ];
  const displayRender = (labels) => labels[labels.length - 1];

  return (
    <>
      <Drawer
        title='Basic Drawer'
        placement={placement}
        closable={false}
        onClose={onClose}
        open={open}
        key={placement}>
        <div class='navbar-nav mr-auto py-0'>
          <a
            href='index.html'
            class='nav-item nav-link active'>
            Home
          </a>
          <a
            href='shop.html'
            class='nav-item nav-link'>
            Shop
          </a>
          <a
            href='detail.html'
            class='nav-item nav-link'>
            Shop Detail
          </a>
          <div class='nav-item dropdown'>
            <a
              href='#'
              class='nav-link dropdown-toggle'
              data-toggle='dropdown'>
              Pages <i class='fa fa-angle-down mt-1'></i>
            </a>
            <div class='dropdown-menu bg-primary rounded-0 border-0 m-0'>
              <a
                href='cart.html'
                class='dropdown-item'>
                Shopping Cart
              </a>
              <a
                href='checkout.html'
                class='dropdown-item'>
                Checkout
              </a>
            </div>
          </div>
          <a
            href='contact.html'
            class='nav-item nav-link'>
            Contact
          </a>
        </div>
      </Drawer>
      <div class='container-fluid'>
        <div class='row bg-secondary py-1 px-xl-5'>
          <div class='col-lg-6 d-none d-lg-block'>
            <div class='d-inline-flex align-items-center h-100'></div>
          </div>
          <div class='col-lg-6 text-center text-lg-right'>
            {isLoggedIn && (
              <div class='d-inline-flex align-items-center'>
                <div class='btn-group'>
                  <Dropdown overlay={menu}>
                    <a onClick={(e) => e.preventDefault()}>
                      <Space>
                        <button
                          type='button'
                          class='btn btn-sm btn-light dropdown-toggle'
                          data-toggle='dropdown'>
                          {firstname + lastname}
                        </button>
                      </Space>
                    </a>
                  </Dropdown>
                </div>
              </div>
            )}

            <div class='d-inline-flex align-items-center d-block d-lg-none'>
              <a
                href=''
                class='btn px-0 ml-2'>
                <i class='fas fa-heart text-dark'></i>
                <span
                  class='badge text-dark border border-dark rounded-circle'
                  style={{ paddingBottom: '2px' }}>
                  0
                </span>
              </a>
              <a
                href=''
                class='btn px-0 ml-2'>
                <i class='fas fa-shopping-cart text-dark'></i>
                <span
                  class='badge text-dark border border-dark rounded-circle'
                  style={{ paddingBottom: '2px' }}>
                  0
                </span>
              </a>
            </div>
          </div>
        </div>
        <div class='row align-items-center bg-light py-3 px-xl-5 d-none d-lg-flex'>
          <div class='col-lg-4'>
            <a
              href=''
              class='text-decoration-none'>
              <span class='h1 text-uppercase text-primary bg-dark px-2'>
                Multi
              </span>
              <span class='h1 text-uppercase text-dark bg-primary px-2 ml-n1'>
                Shop
              </span>
            </a>
          </div>
          <div class='col-lg-4 col-6 text-left'>
            <form action=''>
              <div class='input-group'>
                <input
                  type='text'
                  class='form-control'
                  placeholder='Search for products'
                />
                <div class='input-group-append'>
                  <span class='input-group-text bg-transparent text-primary'>
                    <i class='fa fa-search'></i>
                  </span>
                </div>
              </div>
            </form>
          </div>
          <div class='col-lg-4 col-6 text-right'>
            <p class='m-0'>Customer Service</p>
            <h5 class='m-0'>+012 345 6789</h5>
          </div>
        </div>
      </div>
      <div class='container-fluid bg-dark mb-30'>
        <div class='row px-xl-5'>
          <div class='col-lg-3 d-none d-lg-block'>
            <Cascader
              options={options}
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: '20px',
              }}
              placeholder='Categories'
              expandTrigger='hover'
              displayRender={displayRender}
              onChange={onChange}
            />
            <nav
              class='collapse position-absolute navbar navbar-vertical navbar-light align-items-start p-0 bg-light'
              id='navbar-vertical'
              style={{ width: 'calc(100%-30px)', zIndex: 999 }}>
              <div class='navbar-nav w-100'>
                <div class='nav-item dropdown dropright'>
                  <a
                    href='#'
                    class='nav-link dropdown-toggle'
                    data-toggle='dropdown'>
                    Dresses <i class='fa fa-angle-right float-right mt-1'></i>
                  </a>
                  <div class='dropdown-menu position-absolute rounded-0 border-0 m-0'>
                    <a
                      href=''
                      class='dropdown-item'>
                      Men's Dresses
                    </a>
                    <a
                      href=''
                      class='dropdown-item'>
                      Women's Dresses
                    </a>
                    <a
                      href=''
                      class='dropdown-item'>
                      Baby's Dresses
                    </a>
                  </div>
                </div>
                <a
                  href=''
                  class='nav-item nav-link'>
                  Shirts
                </a>
                <a
                  href=''
                  class='nav-item nav-link'>
                  Jeans
                </a>
                <a
                  href=''
                  class='nav-item nav-link'>
                  Swimwear
                </a>
                <a
                  href=''
                  class='nav-item nav-link'>
                  Sleepwear
                </a>
                <a
                  href=''
                  class='nav-item nav-link'>
                  Sportswear
                </a>
                <a
                  href=''
                  class='nav-item nav-link'>
                  Jumpsuits
                </a>
                <a
                  href=''
                  class='nav-item nav-link'>
                  Blazers
                </a>
                <a
                  href=''
                  class='nav-item nav-link'>
                  Jackets
                </a>
                <a
                  href=''
                  class='nav-item nav-link'>
                  Shoes
                </a>
              </div>
            </nav>
          </div>
          <div class='col-lg-9'>
            <nav class='navbar navbar-expand-lg bg-dark navbar-dark py-3 py-lg-0 px-0'>
              <a
                href=''
                class='text-decoration-none d-block d-lg-none'>
                <span class='h1 text-uppercase text-dark bg-light px-2'>
                  Multi
                </span>
                <span class='h1 text-uppercase text-light bg-primary px-2 ml-n1'>
                  Shop
                </span>
              </a>
              <button
                type='button'
                class='navbar-toggler'
                data-toggle='collapse'
                data-target='#navbarCollapse'>
                <span
                  onClick={() => {
                    showDrawer();
                  }}
                  class='navbar-toggler-icon'></span>
              </button>
              <div
                class='collapse navbar-collapse justify-content-between'
                id='navbarCollapse'>
                <div class='navbar-nav mr-auto py-0'>
                  <Link
                    to={'/'}
                    class='nav-item nav-link '>
                    Home
                  </Link>
                  {isLoggedIn === true && (
                    <Link
                      to={'/history'}
                      class='nav-item nav-link '>
                      Profile
                    </Link>
                  )}

                  {isLoggedIn === false && (
                    <>
                      <Link
                        to={'/login'}
                        class='nav-item nav-link'>
                        Login
                      </Link>
                      <Link
                        to={'/register'}
                        class='nav-item nav-link'>
                        Register
                      </Link>
                    </>
                  )}

                  <div class='nav-item dropdown'>
                    <Link
                      to={'/cart'}
                      class='nav-link dropdown-toggle'
                      data-toggle='dropdown'>
                      Cart
                    </Link>
                  </div>
                </div>
                <div class='navbar-nav ml-auto py-0 d-none d-lg-block'>
                  <a
                    href=''
                    class='btn px-0'>
                    <i class='fas fa-heart text-primary'>
                      <HeartOutlined style={{ fontSize: '200%' }} />
                    </i>
                    <span
                      class='badge text-secondary border border-secondary rounded-circle'
                      style={{ paddingBottom: '2px' }}></span>
                  </a>
                  <Link
                    to={'/cart'}
                    class='btn px-0 ml-3'>
                    <i class='fas fa-shopping-cart text-primary'>
                      <ShoppingCartOutlined style={{ fontSize: '200%' }} />
                    </i>
                    <span
                      class='badge text-secondary border border-secondary rounded-circle'
                      style={{ paddingBottom: '2px' }}>
                      {cart.length}
                    </span>
                  </Link>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
