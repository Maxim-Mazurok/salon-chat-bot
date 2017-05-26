module.exports = function (bp) {
    bp.middlewares.load();

    bp.hear(/hello/i, (event, next) => {
        const first_name = event.user.first_name;

        bp.messenger.sendText(event.user.id, 'Hello, ' + first_name, {typing: true})
    })
};
