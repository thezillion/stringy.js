stringy.js
==========

Stringy.js is a string manipulation library that enables developers to perform functions on strings.

Usage
-----

### Flip case
> <code>"The Quick Brown Fox Jumps Over The Lazy Dog.".flipCase();</code>

### Camel case
> <code>"the quick brown fox jumps over the lazy dog.".camelCase(" ");</code>

### Encoding rot 13
> <code>"the quick brown fox jumps over the lazy dog.".encRot(13);</code>

### Decoding rot 13
> <code>"gur dhvpx oebja sbk whzcf bire gur ynml qbt.".decRot(13);</code>

### Search for the first occurence of the character 'u' and get it's first previous character
> <code>"the quick brown fox jumps over the lazy dog.".s('u').getPrevChar(1);</code>

### Search for the first occurence of the character 'u' and get it's position
> <code>"the quick brown fox jumps over the lazy dog.".s('u').getPos();</code>

### Global search for the character 'u' and replace it by 'r'
> <code>"the quick brown fox jumps over the lazy dog.".s(/u/g).r("r");</code>

###  Search for the first occurence of the character 'u' and replace it by it's ROT2 encoding
> <code>"the quick brown fox jumps over the lazy dog.".s("u").encRot(2);</code>

###  Search for the first occurence of the character 'u' and replace it by it's ROT2 decoding
> <code>"the quick brown fox jumps over the lazy dog.".s("u").decRot(2);</code>
