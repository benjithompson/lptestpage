const closeConv = async () => {
    document.querySelector('.lp_close').click();
    await sleep(1000);
    document.querySelector('.lp_confirm_button').click();
}

const sleep = async (milliseconds) => {
    await new Promise(resolve => {
        return setTimeout(resolve, milliseconds)
    });
};