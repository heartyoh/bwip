# BWIP Server
#
# VERSION	0.1.6
#

# Dockerfile for BWIP Barcode Image Server
# =========================
#
# Use with Docker http://www.docker.io
#
# To build an image with docker is pretty simple:
#
#     $ docker build -t bwipserver github.com/heartyoh/bwip-docker
#
# Then to run that image and attach to it at the same time:
#
#     $ docker run -d -p 80:3030 --name bwipserver bwipserver
#
# To test bwipserver, try to open following URL on the internet browser:
#
#     http://{yourserver}/?bcid=code128&text=^FNC1011234567890&scale=4&rotate=L&parsefnc&alttext=(01)01234567890
#

FROM ubuntu:12.04
MAINTAINER Hearty, Oh. "heartyoh@gmail.com"

# make sure the package repository is up to date
RUN echo "deb http://archive.ubuntu.com/ubuntu precise main universe" > /etc/apt/sources.list
RUN apt-get update

# install wget
RUN apt-get -y install wget

# install nodejs
RUN	wget -O - http://nodejs.org/dist/v0.10.25/node-v0.10.25-linux-x64.tar.gz | tar -C /usr/local/ --strip-components=1 -zxv

# node package install 'bwip'
RUN npm install bwip

EXPOSE 3030

CMD ["node", "node_modules/bwip/example/node-barcode-server.js"]
