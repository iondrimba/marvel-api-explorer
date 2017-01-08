
module.exports = {
    output: {
        libraryTarget: 'commonjs2',
    },
    module: {
        loaders: [
            {
                test: /\.scss$/,
                loaders: [
                    'style-loader',
                    'css-loader?sourceMap&modules&importLoaders=1&localIdentName=[local]',
                    'sass-loader',
                    'postcss-loader',
                ],
            },
        ],
    },
};
