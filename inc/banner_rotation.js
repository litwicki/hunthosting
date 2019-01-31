images = new Array();

images[0] = '<a href="http://www.hunthosting.com/blog/"><img src="index_banner.gif" alt=""  border="0"></a>';
images[1] = '<a href="http://www.hunthosting.com/blog/does-your-website-make-your-phone-ring/"><img src="phone_banner.gif" alt=""  border="0"></a>';
images[2] = '<a href="http://www.hunthosting.com/blog/"><img src="1999_banner.gif" alt=""  border="0"></a>';

index = Math.floor(Math.random() * images.length);

document.write(images[index] + "\n");