#!/bin/bash
openssl ecparam -name secp256k1 -genkey -noout -out privatekey.pem
openssl pkcs8 -topk8 -in privatekey.pem -nocrypt -out pk8-privatekey.pem
openssl ec -in privatekey.pem -pubout -out publickey.pem