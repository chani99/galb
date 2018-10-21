app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());
// app.use(express.static('../../client'));
app.use(express.static('./gbweb/client'));
app.use(express.static('../node_modules'));
// app.use('/public', express.static('../../client'));
app.use('/public', express.static('./gbweb/client'));


app.get('/', function (req, res) {
    // fs.readFile('../../client/index.html', 'utf8', function(err, data) {
    fs.readFile('./gbweb/client/index.html', 'utf8', function (err, data) {
        if (err) {
            console.log(err);
        }
        console.log('i am basic');
        res.end(data)
    });

});

app.get('/book', function (req, res) {
    paperCtrl.getlastpaper(req.query.params, function (err, num) {
        if (err) {
            console.log(err);
        }
        console.log(`last ${req.query.params} is ${JSON.stringify(num)}`);
        res.end(JSON.stringify(num));



    });

    console.log('book was enterd');

});


// Start the server
var server = app.listen(8081, function () {
    console.log('listening to 8081')
})