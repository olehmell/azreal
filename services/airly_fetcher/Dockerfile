FROM python:3.8

WORKDIR fetcher

COPY requirements.txt .
RUN pip3 install -r requirements.txt

COPY . .

RUN curl -sL https://deb.nodesource.com/setup_lts.x | bash -
RUN apt-get install -y nodejs

RUN npm install pm2 -g

CMD pm2 start --cron '0,30 * * * *' /fetcher/main.py --interpreter python3 --no-autorestart --no-daemon
