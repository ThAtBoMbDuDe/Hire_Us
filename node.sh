
curl -fsSL https://deb.nodesource.com/setup_16.x | sudo -E bash - &&\
sudo apt-get install -y nodejs
npm i -g forever
echo "Node version 16 installed"
cd HIRE_US/hire-us-api
npm install --no-bin-links -y
echo "NPM Install Succesful"
forever start index.js 