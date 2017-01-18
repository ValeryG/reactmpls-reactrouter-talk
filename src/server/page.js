export default (assets) => {
    return `
        <html>
            <head>
                <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap.min.css">
            </head>
            <body>
                <div class="container">
                    <div id="root"></div>
                </div>

                <script src="${assets.main.js}"></script>
                
            </body>
        </html>
    `;
}
