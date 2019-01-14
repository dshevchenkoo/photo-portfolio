/*
 * blueimp Gallery Demo JS
 * https://github.com/blueimp/Gallery
 *
 * Copyright 2013, Sebastian Tschan
 * https://blueimp.net
 *
 * Licensed under the MIT license:
 * https://opensource.org/licenses/MIT
 */

/* global blueimp, $ */

$(function () {
  'use strict'

var carouselLinks = [];
carouselLinks = [
{ 
  href: 'https://pp.userapi.com/c845016/v845016565/18291c/16cLGOKMDsI.jpg', 
  title: '1' 
},
{ 
  href: 'https://pp.userapi.com/c845016/v845016565/182925/cgvTZgjdj20.jpg', 
  title: '2' 
},
{ 
  href: 'https://pp.userapi.com/c845016/v845016565/18292f/sQ2DK0MtR3g.jpg', 
  title: '3' 
},
{ 
  href: 'https://pp.userapi.com/c845016/v845016565/182939/y2c3nSdpgmI.jpg', 
  title: '4' 
},
{ 
  href: 'https://pp.userapi.com/c845016/v845016565/182943/qSiYdMZsWBA.jpg', 
  title: '5' 
},
{ 
  href: 'https://pp.userapi.com/c845016/v845016565/18294c/-zXIR3easmc.jpg', 
  title: '6' 
},
{ 
  href: 'https://pp.userapi.com/c845016/v845016565/182955/sypxOndafnA.jpg', 
  title: '7' 
},
{ 
  href: 'https://pp.userapi.com/c845016/v845016565/18295d/qxmkcNonptg.jpg', 
  title: '8' 
},
{ 
  href: 'https://pp.userapi.com/c845016/v845016565/182967/9lmSwpz788o.jpg', 
  title: '9' 
},
{ 
  href: 'https://pp.userapi.com/c845016/v845016565/182970/tEeEI7MYSDQ.jpg', 
  title: '10' 
},
{ 
  href: 'https://pp.userapi.com/c845016/v845016565/18297a/mMUo0Qpz73Q.jpg', 
  title: '11' 
},
{ 
  href: 'https://pp.userapi.com/c845016/v845016565/182984/EYsWpapkU9A.jpg', 
  title: '12' 
},
{ 
  href: 'https://pp.userapi.com/c845016/v845016565/18298d/HP0ZeP3HZME.jpg', 
  title: '13' 
},
{ 
  href: 'https://pp.userapi.com/c845016/v845016565/182996/TgMHAJUi-5k.jpg', 
  title: '14' 
},
{ 
  href: 'https://pp.userapi.com/c845016/v845016565/18299f/wKq7G-g1sJ0.jpg', 
  title: '15' 
},
{ 
  href: 'https://pp.userapi.com/c845016/v845016565/1829a9/S3RLfZecHOE.jpg', 
  title: '16' 
},
{ 
  href: 'https://pp.userapi.com/c845016/v845016565/1829b2/jxG-iUszvb8.jpg', 
  title: '17' 
},
{ 
  href: 'https://pp.userapi.com/c845016/v845016565/1829bb/3s69L6zuyXA.jpg', 
  title: '18' 
},
{ 
  href: 'https://pp.userapi.com/c845016/v845016565/1829c3/EiDEqsXUHZ0.jpg', 
  title: '19' 
},
{ 
  href: 'https://pp.userapi.com/c845016/v845016565/1829cc/RaJQPh-OSeI.jpg', 
  title: '20' 
},
{ 
  href: 'https://pp.userapi.com/c845016/v845016565/1829d4/sS6lmQviuHo.jpg', 
  title: '21' 
},
{ 
  href: 'https://pp.userapi.com/c845016/v845016565/1829de/xhyXw9-rXdQ.jpg', 
  title: '22' 
},
{ 
  href: 'https://pp.userapi.com/c845016/v845016565/1829e7/WKtjnmN8oYY.jpg', 
  title: '23' 
},
{ 
  href: 'https://pp.userapi.com/c845016/v845016565/1829f1/tKACUkivm5o.jpg', 
  title: '24' 
},
{ 
  href: 'https://pp.userapi.com/c845016/v845016565/1829fb/pXiEvKS21XI.jpg', 
  title: '25' 
},
{ 
  href: 'https://pp.userapi.com/c845016/v845016565/182a04/u9G4EGmapxQ.jpg', 
  title: '26' 
},
{ 
  href: 'https://pp.userapi.com/c845016/v845016565/182a0e/XmI6zCSXiMg.jpg', 
  title: '27' 
},
{ 
  href: 'https://pp.userapi.com/c845016/v845016565/182a18/s9joDjuOl6U.jpg', 
  title: '28' 
},
{ 
  href: 'https://pp.userapi.com/c845016/v845016565/182a22/mj_orU9xI5g.jpg', 
  title: '29' 
},
{ 
  href: 'https://pp.userapi.com/c845016/v845016565/182a2b/8DRBd5y_ymc.jpg', 
  title: '30' 
},
]

    console.log(carouselLinks);
    // Initialize the Gallery as image carousel:
    blueimp.Gallery(carouselLinks, {
      container: '#blueimp-image-carousel',
      carousel: true
    })
  })
