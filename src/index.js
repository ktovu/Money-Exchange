// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    // Your code goes here!
    // Return an object containing the minimum number of coins needed to make change
    if(currency >= 1 && currency <10000){
        var h = 0;
        var q = 0;
        var d = 0;
        var n = 0;
        var p = 0;
        // var h,q,d,n,p;
        var cash = 0;
        var ost = 0;
        var res = {};
        ost = currency%50;
        if (ost == 0){
            res.H =h = currency/50;
        }
        if( ost > 0){
            res.H = h = (currency-ost)/50;
            cash = ost;
            ost= ost%25;
            if (ost == 0){
                res.Q = q = cash/25;
            }
            if(ost > 0){
                res.Q = q = (cash-ost)/25;
                cash = ost;
                ost= ost%10;
                if (ost == 0){
                    res.D = d = cash/10;
                }
                if(ost > 0){
                    res.D = d = (cash-ost)/10;
                    cash = ost;
                    ost= ost%5;
                    if (ost == 0){
                        res.N = n = cash/5;
                    }
                    if(ost > 0){
                        res.N = n = (cash-ost)/5;
                        res.P = p = ost;
                    }
                }
            }
        }
        if(res.H == 0){
            delete res["H"];
        }
        if(res.D == 0){
            delete res["D"];
        }
        if(res.P == 0){
            delete res["P"];
        }
        if(res.N == 0){
            delete res["N"];
        }
        if(res.Q == 0){
            delete res["Q"];
        }
        return res;

    }
    if(currency >= 10000){
        return {"error": "You are rich, my friend! We don't have so much coins for exchange"};
    }
    if(currency <= 0){
        return {};
    }
}
