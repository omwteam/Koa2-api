let errorHandle = (ctx, next) => {
    if (ctx.url.match(/^\/public/)) {
        ctx.body = 'unprotected\n';
    } else {
        return next().catch((err) => {
            if (err.status === 401) {
                ctx.status = 401;
                ctx.body = {
                    error: err.originalError ? err.originalError.message : err.message,
                };
            } else {
                throw err;
            }
        });
    }

};

module.exports = errorHandle;