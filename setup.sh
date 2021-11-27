curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add -
echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list
sudo apt-get update
sudo apt-get install yarn -y
sudo yarn add jquery
sudo yarn add jsdom jsdom-global
sudo yarn add datatables
sudo yarn add datatables.net-responsive
sudo yarn add datatables.net-buttons
sudo yarn add datatables.net-responsive-bs4
sudo yarn test
pip3 install pytest
pytest -sv --cov=py --cov=js --cov-report html
cd ./htmlcov
echo "Run htmlcov/index.html."
