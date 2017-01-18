import webpack from 'webpack';
import AssetsPlugin from 'assets-webpack-plugin';

export default {
    entry: {
        vendor: ['react', 'react-dom', 'react-router']
    },
    output:{
        path: './dist',
        filename: '[name].bundle.[chunkhash].js',
        publicPath: '/dist/',
        library: '[name]_lib',
    },
    plugins: [
       new AssetsPlugin({
          filename: 'dist/vendor_assets.json'
       }),
       new webpack.DllPlugin({
                path: 'dist/[name]_manifest.json',
                name: '[name]_lib'
       }),
       new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('production')
            }
       }),
       new webpack.optimize.UglifyJsPlugin({
            minimize: true,
            compressor: {
                warnings: false
            }
       })
    ]
}
