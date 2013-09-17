stringy.js
==========

Stringy.js is a string manipulation library that enables developers to perform functions on strings.

Usage
-----

### Flip case
> <"The Quick Brown Fox Jumps Over The Lazy Dog.".flipCase();>

### Camel case
> <"the quick brown fox jumps over the lazy dog.".camelCase(" ");>

### Encoding rot 13
> <"the quick brown fox jumps over the lazy dog.".encRot(13);>

### Decoding rot 13
> <"gur dhvpx oebja sbk whzcf bire gur ynml qbt.".decRot(13);>

### Search for the first occurence of the character 'u' and get it's first previous character
> <"the quick brown fox jumps over the lazy dog.".s('u').getPrevChar(1);>

### Search for the first occurence of the character 'u' and get it's position
> <"the quick brown fox jumps over the lazy dog.".s('u').getPos();>

### Global search for the character 'u' and replace it by 'r'
> <"the quick brown fox jumps over the lazy dog.".s(/u/g).r("r");>

###  Search for the first occurence of the character 'u' and replace it by it's ROT2 encoding
> <"the quick brown fox jumps over the lazy dog.".s("u").encRot(2);>

###  Search for the first occurence of the character 'u' and replace it by it's ROT2 decoding
> <"the quick brown fox jumps over the lazy dog.".s("u").decRot(2);>
