# passwordGenerator

This application was created to generate a strong random password.

![Homepage](Assets/img1.png)

Various questions popup on the screen to retrieve what type of characters the user would want in their password.

![Prompt](Assets/img2.png)

Finally a random password is generated according to the user's preference.

![Password Generated](Assets/img3.png)

In order to get this website to function:

* I had to create multiple arrays of different characters and one empty array to push the arrays that the user wanted in their password.

![Arrays](Assets/img4.png)

* I used these conditions to push the arrays into the empty array.

![if statements](Assets/img5.png)

* Finally I needed a for loop to first choose a random array (from the conditions the user chose), then from that array, choose a random charcter. This would repeat according to the length of the password the user wanted.

![for loop](Assets/img6.png)