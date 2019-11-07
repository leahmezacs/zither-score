import React, {Component} from 'react';

const IMAGE_URLS = {
    nature: 'https://images.unsplash.com/photo-1501854140801-50d01698950b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2600&q=80',
    
  };
  // Sets the background image
  const setBackground = (image) => {
    document.body.style.background = "url('"+IMAGE_URLS.nature+"')";
  };
