
var data = [ 
	{
		"id_student": 610410999,
		"start": "อ่างแก้ว",
		"end": "ห้องสมุด",
		"status": "รอ"
	},
	{
		"id_student": 610410999,
		"start": "คณะบริหารธุรกิจ",
		"end": "หน้ามอ",
		"status": "รอ"
	}
];

exports.findAll = function() {
	return data;
};

exports.add_id = function(data) {
	data[3].id_student.push(data);
};

exports.add_start = function(data) {
	data[3].start.push(data);
};

exports.add_end = function(data) {
	data[3].start.push(data);
};