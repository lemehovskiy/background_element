module.exports = {
    watch: true,
    entry: './src/background_element.es6',
    output: {
        filename: 'build/background_element.js'
    },
    module: {
        rules: [
            {
                test: /\.es6$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['env']
                    }
                }
            }
        ]
    }
};