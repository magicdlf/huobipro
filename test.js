const rest = require('./crawler/rest');
const ws = require('./crawler/ws');

function compare(book1, book2) {
    let diff = {};
    for (let item of book1) {
        let price = item[0].toFixed(8);
        let amount = item[1];
        diff[price] = (diff[price] || 0) + amount;
    }
    // console.log(diff);
    for (let item of book2) {
        let price = item[0].toFixed(8);
        let amount = item[1];
        diff[price] = (diff[price] || 0) - amount;
    }
    // console.log(diff);
    for (let price in diff) {
        if (Math.abs(diff[price]) > 0.1) {
            if (diff[price] > 0) {
                console.log('  ws+', price, diff[price]);
            } else {
                console.log('rest-', price, -diff[price]);
            }
        }
    }
}

function check() {
    let symbol = 'xrpbtc';
    // 检查rest行情和ws行情是否一致并打印
    // console.log('ws',JSON.stringify(ws.OrderBook));
    // console.log('rest',JSON.stringify(rest.OrderBook));
    console.log('============ Check Start =============');
    console.log('Check asks');
    let ws_asks = ws.OrderBook[symbol].asks;
    let rest_asks = rest.OrderBook[symbol].asks;
    compare(ws_asks, rest_asks);
    console.log('Check bids');
    let ws_bids = ws.OrderBook[symbol].bids;
    let rest_bids = rest.OrderBook[symbol].bids;
    compare(ws_bids, rest_bids);
    console.log('============ Check End =============');
    setTimeout(check, 100);
}

setTimeout(check, 3000);