/**
 * Created by alexander on 06.03.18.
 */
// import axios from "axios";

export function send_payment() {

    const promise = new Promise((resolve, reject) => {
        const isPaid = Math.random() >= 0.5;

        if (isPaid) setTimeout(resolve, 800, isPaid);
        else setTimeout(reject, 1000, isPaid);
    });

    return promise;

}

