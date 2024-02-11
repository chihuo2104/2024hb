# huohuobot - headless chrome for quiz3
# Some codes copyright (c) USTC-Hackergame & PKU GeekGame
# Chi's redbag adventure - chihuo2104(c)2018-2024.

from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.common.by import By
import time

from flask import Flask, request
import base64

app = Flask(__name__)

@app.route('/')
def get():
    # Path to your ChromeDriver executable
    chrome_driver_path = '/usr/bin/chromedriver'
    a = time.time()
    # Configure Chrome options
    chrome_options = webdriver.ChromeOptions()
    chrome_options.add_argument('--headless')  # Run Chrome in headless mode (without opening browser window)
    # chrome_options.add_argument('--disable-gpu')  # Disable GPU acceleration
    # Initialize ChromeDriver with the configured options
    service = Service(chrome_driver_path)
    driver = webdriver.Chrome(service=service, options=chrome_options)
    # URL of the website you want to scrape
    url = request.args.get('input')
    geturl = base64.b64decode(url).decode('utf-8')
    # Open the website
    driver.get(geturl)
    time.sleep(5)
    # Get the entire body text content
    # Close the WebDriver session
    driver.quit()
    return "ok"

if __name__ == '__main__':
    app.run(port=11451)
