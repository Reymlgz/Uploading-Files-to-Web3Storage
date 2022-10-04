# Uploading-Files-to-Web3Storage
The following script allows you to upload files to Web3.Storage without package it into a “.CAR”. 

# Installation: 

You need to use Node.js. So run the next command in your terminal:

>npm install

Now install the next library to upload the files to Web3.Storage: 

>npm install web3.storage 

# Ordering the files: 

Put the files do you want to upload into the “files” directory. 
Uploading: 

In the script.js file, change the “API_TOKEN” for the token provided by Web3.Storage. 

You can get a new one for free here: https://web3.storage/tokens/?create=true

With all your files in the “files” directory and with the “API_TOKEN” changed, the next step is to run the script to start the uploading process. 

# Uploading Process

Open the terminal and run the following command: 

>node script.js

# Notes:
When the process ends, check your account in the “Manage Files” section, and copy the first CID on the uploading list. 

Paste the CID on the search bar from your default browser and add the next text at the end of it: 

*.ipfs.dweb.link/*

The link needs to look like this: 

>*bafybeifhtxbrbwh2pkw7fcd7tzayytrbznehbcyhtcdkaguvmnbvcz4muy.ipfs.dweb.link/*


Hope it helps you!

