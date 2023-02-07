#!/usr/bin
curl -fsSL https://deb.nodesource.com/setup_16.x | sudo -E bash - &&\
sudo apt-get install -y nodejs
echo "Node version 16 installed"
cd app/app
npm install --no-bin-links -y
echo "NPM Install Succesful"
node script.js