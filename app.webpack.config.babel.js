import webpack from 'webpack';

import AssetsPlugin from 'assets-webpack-plugin';

export default {

    entry: './lib/app.js',

    output:{
        path: './dist',
        filename: '[name].bundle.[chunkhash].js',
        publicPath: '/dist/'
    },
    plugins: [
            new AssetsPlugin({
                filename: 'dist/assets.json'
            }),
            new webpack.DllReferencePlugin({
                  context: '.',
                  manifest: require('./dist/vendor_manifest.json')
            })
    ],
    module: {
        loaders: [
            {include: /.json$/, loaders: ["json-loader"]}
        ]
    }
}
