curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add -
echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list
sudo apt-get update
sudo apt-get install yarn -y
yarn add jquery
yarn add jsdom jsdom-global
yarn add datatables
yarn add datatables.net-responsive
yarn add datatables.net-buttons
yarn add datatables.net-responsive-bs4
pip3 install pytest
pip3 install pytest-cov
# pip3 install coverage==4.5
echo "Run command: yarn test , to generate coverage report for js file."
echo "Run command like: python -m pytest --cov-report=term-missing --cov=src test/ --cov=js --cov-report html"
echo "Run htmlcov/index.html."
