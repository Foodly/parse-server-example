FROM node:latest

RUN mkdir parse

ADD . /parse
WORKDIR /parse
RUN npm install

ENV APP_ID cravely
ENV MASTER_KEY 22142e23-57a2-4c24-b14e-d516a94aaeee
ENV DATABASE_URI mongodb://heroku_d95x8cn0:iu5na3dn7nulirkcg72315ql7t@ds119585.mlab.com:19585/heroku_d95x8cn0

# Optional (default : 'parse/cloud/main.js')
# ENV CLOUD_CODE_MAIN cloudCodePath

# Optional (default : '/parse')
# ENV PARSE_MOUNT mountPath

EXPOSE 1337

# Uncomment if you want to access cloud code outside of your container
# A main.js file must be present, if not Parse will not start

# VOLUME /parse/cloud

CMD [ "npm", "start" ]
