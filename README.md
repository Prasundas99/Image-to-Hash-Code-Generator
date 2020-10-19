# Image to Hash code Generator 

Link to view the project: https://prasundas99.github.io/Image-to-Hash-Code-Generator/

 A Web-App which converts a pre-defined set of 36 images to hash code 
          You can choose upto four images at once  the hashed passwords are unencryptable .The images are first converted to MD5 hash and then it is converted to SHA-1  and at the end those are  redused to first fifty characters which makes it impossible to crack by any hackers.
          
          
# Screenshoots of the project          
          
   ![github](https://user-images.githubusercontent.com/58937669/96424838-e545bd00-1218-11eb-81c8-85769542706e.JPG)       
          

## What is MD-5 hash?
   The MD5 message-digest algorithm is a widely used hash function producing a 128-bit hash value. Although MD5 was initially designed to be used as a cryptographic hash function, it has been found to suffer from extensive vulnerabilities. It can still be used as a checksum to verify data integrity, but only against unintentional corruption. It remains suitable for other non-cryptographic purposes, for example for determining the partition for a particular key in a partitioned database.
               MD5 was designed by Ronald Rivest in 1991 to replace an earlier hash function MD4, and was specified in 1992 as RFC 1321.
               One basic requirement of any cryptographic hash function is that it should be computationally infeasible to find two distinct messages that hash to the same value. MD5 fails this requirement catastrophically; such collisions can be found in seconds on an ordinary home computer.
               The weaknesses of MD5 have been exploited in the field, most infamously by the Flame malware in 2012. The CMU Software Engineering Institute considers MD5 essentially "cryptographically broken and unsuitable for further use".

## What is MD-5 hash used for?
   The MD5 hash function was originally designed for use as a secure cryptographic hash algorithm for authenticating digital signatures. MD5 has been deprecated for uses other than as a non-cryptographic checksum to verify data integrity and detect unintentional data corruption.

## What is SHA-1 hash?
   In cryptography, SHA-1 (Secure Hash Algorithm 1) is a cryptographic hash function which takes an input and produces a 160-bit (20-byte) hash value known as a message digest – typically rendered as a hexadecimal number, 40 digits long. It was designed by the United States National Security Agency, and is a U.S. Federal Information Processing Standard.
               Since 2005, SHA-1 has not been considered secure against well-funded opponents; as of 2010 many organizations have recommended its replacement. NIST formally deprecated use of SHA-1 in 2011 and disallowed its use for digital signatures in 2013. As of 2020, chosen-prefix attacks against SHA-1 are practical. As such, it is recommended to remove SHA-1 from products as soon as possible and instead use SHA-2 or SHA-3. Replacing SHA-1 is urgent where it is used for digital signatures.
              All major web browser vendors ceased acceptance of SHA-1 SSL certificates in 2017. In February 2017, CWI Amsterdam and Google announced they had performed a collision attack against SHA-1, publishing two dissimilar PDF files which produced the same SHA-1 hash. But SHA-1 is still secure for HMAC.
