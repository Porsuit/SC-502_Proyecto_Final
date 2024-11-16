//
var nombre = document.getElementById('name').getAttribute('atributo');
var nombre = document.getElementById('name').value;
var userName = $('#name').val();
//La variable recolecta todos los valores de los inputs del formulario
$('#signup').on('submit', function (event){
	event.preventDefault(); 
	var formData = new FormData($('#signup')[0]);
});

//PHP para login


function saveUser(){
	$userPHP = array(
		"name" => document.getElementById('name').value,
		"mail" => document.getElementById('mail').value,
		"password" => document.getElementById('password').value)
	global $user;
}

function modifyUser(){
	$user[name] = document.getElementById('name').value;
	$user[mail] = document.getElementById('mail').value;
	$user[password] = document.getElementById('password').value;
}

funtion searchUser(){
	for (var i = user.length - 1; i >= 0; i--) {
		echo user[i]
	}
}

funtion searchAllUsers(){
	foreach($user as $clave => $valor){
		echo $clave . ": " . $valor . " ";
	} 
}
//se codigica el array a data JSON
$userJSON = json_encode(userPHP);
//Se decodifica el array JSON en un PHP
$userDataPHP = json_decode($userJSON, true);

class User{
	//Propiedades de user
	public $name;
	public $mail;
	private $password;

	//Constructor de user
	public function _construct($name, $mail, $password) {
		$this->name = $name;
		$this->mail = $mail;
		$this->password = $password;
	}

	//Metodo de user
}

$user = new User(name, mail, password);

