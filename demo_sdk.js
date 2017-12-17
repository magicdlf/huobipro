const hbsdk = require('./sdk/hbsdk');

function run() {
    // 准备工作，填写config/default.json中的:
    // access_key & secretkey, www.huobi.com上申请
    // account_id 登陆后看自己的UID
    // trade_password 可以先不填，提现时需要

    // 第一步，获取account_id
    hbsdk.get_account().then(console.log);
    // 把get_account获取到的type=spot的id填写到:
    // default.json中的${account_id_pro}中去

    // 第二步，获取Balance和OpenOrders
    // hbsdk.get_balance().then(console.log);
    // hbsdk.get_open_orders('btcusdt').then(console.log);

    // 第三步，交易
    // hbsdk.buy_limit('ltcusdt', 0.01, 0.1);

    // 第四步，检查订单
    // hbsdk.get_order(377378515).then(console.log);

    // 第五步，提现
    // 先去网站上设置好安全提现地址
    // 欢迎打赏到我的钱包，我可以协助测试 ^^
    // hbsdk.withdrawal('0x9edfe04c866d636526828e523a60501a37daf8f6', 'etc', 1);
}

run();