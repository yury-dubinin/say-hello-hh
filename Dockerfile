FROM docker.io/node:16-alpine3.14 as builder

USER node

WORKDIR /home/node/example

COPY --chown=node:node . /home/node/example/

RUN npm i
RUN npx hardhat compile

ENTRYPOINT ["npx", "hardhat", "run", "scripts/deploy.js"]