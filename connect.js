//import file
var mysql     =    require('mysql');

//create
var con      =    mysql.createConnection({
    connectionLimit : 100, 
    host     : 'localhost',
    user     : 'root',
    password : '',
    database : 'bootcamp',
    debug    :  false
});

//connect
con.connect(function(err){
	if(err) throw err;
	console.log("Connected");
	//sql = "insert into staff (staff_id, title, f_name, l_name) values (11111, 'นาย',  'สิรภพ',  'สิทธิ')";
	//con.query(sql, function(err, result){
	//	if(err) throw err;
	//	console.log("Complete");
	//});
});