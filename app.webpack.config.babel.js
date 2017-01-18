import webpack from 'webpack';

export default {

    entry: './lib/app.js',

    output:{
        path: './dist',
        filename:'[name].bundle.js',
        publicPath: '/dist/'
    },
    module: {
        loaders: [
            {include: /.json$/, loaders: ["json-loader"]}
        ]
    }
}
