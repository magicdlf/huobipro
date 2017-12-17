const moment = require('moment');
const http = require('../framework/httpClient');
const Promise = require('bluebird');

const BASE_URL = 'https://api.huobipro.com';

var orderbook = {};

exports.OrderBook = orderbook;

function cmp_ask(a, b) {
    return a[0] - b[0];
}

function cmp_bid(a, b) {
    return b[0] - a[0];
}

function handle(coin, asks, bids, currency) {
    let a = asks.sort(cmp_ask);
    let b = bids.sort(cmp_bid);

    let symbol = (coin + currency).toLowerCase();
    orderbook[symbol] = {
        asks: a,
        bids: b
    };
    // console.log(orderbook[symbol]);
    // TODO 根据数据生成你想要的K线 or whatever...
    // TODO 记录数据到你的数据库或者Redis
}

function get_depth(coin, currency) {
    return new Promise(resolve => {
        let url = `${BASE_URL}/market/depth?symbol=${coin}${currency}&type=step0`;
        http.get(url, {
            timeout: 1000,
            gzip: true
        }).then(data => {
            // console.log(data);
            let json = JSON.parse(data);
            let t = json.ts;
            let asks = json.tick.asks;
            let bids = json.tick.bids;

            handle(coin, asks, bids, currency);
            resolve(null);
        }).catch(ex => {
            console.log(coin, currency, ex);
            resolve(null);
        });
    });
}

function run() {
    // console.log(`run ${moment()}`);
    // let list_btc = ['ltc-btc', 'eth-btc', 'etc-btc', 'bcc-btc', 'dash-btc', 'omg-btc', 'eos-btc', 'xrp-btc', 'zec-btc', 'qtum-btc'];
    // let list_usdt = ['btc-usdt', 'ltc-usdt', 'eth-usdt', 'etc-usdt', 'bcc-usdt', 'dash-usdt', 'xrp-usdt', 'eos-usdt', 'omg-usdt', 'zec-usdt', 'qtum-usdt'];
    // let list_eth = ['omg-eth', 'eos-eth', 'qtum-eth'];
    // let list = list_btc.concat(list_usdt).concat(list_eth);
    let list = ['xrp-btc'];
    Promise.map(list, item => {
        let coin = item.split('-')[0];
        let currency = item.split('-')[1];
        return get_depth(coin, currency);
    }).then(() => {
        setTimeout(run, 100);
    });
}

run();