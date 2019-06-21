<?php
//
require_once $_SERVER['DOCUMENT_ROOT'] . '/protected/app/vendors/autoload.php';
require_once $_SERVER['DOCUMENT_ROOT'] . "/back_end/classes/DB.php";
//
class User {
    const TABLE = "db_mdd_users";
    //
    private $DB             = NULL;
    private $auth           = false;
    private $userId          = NULL;
    //
    public function __construct() {
        $this->DB = DB::connect();
    }
    // Добавить нового пользователя
    public function addUser(array $data) {
        $email         = strip_tags(trim($data['email']));
        $password      = strip_tags(trim($data['password']));
        $dublePassword = strip_tags(trim($data['dublePassword']));
        // если данные не валидны
        if(strpos($email, '@') === false || count($password) === 0 || count($dublePassword) === 0 || $password !== $dublePassword) {
            echo -1;
            exit;
        }
        // если заданный email уже существует
        if($this->checkEmail($email)) {
            echo 0;
            exit;
        }
        //
        $verifyHash = sha1($email);        
        
        $query = "INSERT INTO " . static::TABLE ." (email, password, verify_hash) VALUES (:email, :password, :verify_hash)";
        $params = [
            ':email'    => $email,
            ':password' => md5($password),
            ':verify_hash' => $verifyHash

        ];
        $stmt = $this->DB->prepare($query);
        if(!$stmt) {
            echo -1;
        }
        if(!$stmt->execute($params)) {
            echo -1;
        }
        $this->sendEmail($email, $verifyHash);
    }
    //
    public function verify($hash) {
        $query = "SELECT id FROM " . static::TABLE ." WHERE verify_hash = :verify_hash";
        $params = [
            ':verify_hash' => $hash
        ];
        $stmt = $this->DB->prepare($query);
        $stmt->execute($params);
        $response = $stmt->fetchAll(PDO::FETCH_OBJ);
        if(!empty($response)) {
            $id =  $response[0]->id;
            $query = "UPDATE " . static::TABLE ." SET verify_hash = :verify_hash WHERE id = :id";
            $params = [
                ':verify_hash' => NULL,
                ':id' => $id

            ];
            $stmt = $this->DB->prepare($query);
            $stmt->execute($params);
        }
    }
    // авторизация
    public function auth(array $data) {
        $email         = strip_tags(trim($data['email']));
        $password      = strip_tags(trim($data['password']));
        //
        // если данные не валидны
        if(strpos($email, '@') === false || count($password) === 0) {
            echo -1;
            exit;
        }
        //
        $query = "SELECT id FROM " . static::TABLE ." WHERE email = :email and password = :password";
        $params = [
            ':email'    => $email,
            ':password' => md5($password)
        ];
        $stmt = $this->DB->prepare($query);
        if(!$stmt) {
            echo -1;
        }
        if(!$stmt->execute($params)) {
            echo -1;
        }
        $responce = $stmt->fetchAll(PDO::FETCH_OBJ);
        if(empty($responce)) {
            echo -1;
            exit;
        }
        echo $responce[0]->id;
    }
    // 
    // 
    // 
    public function checkEmail(string $email) {
        $query = "SELECT id FROM " . static::TABLE ." WHERE email = :email";
        $params = [
            ':email' => $email
        ];
        $stmt = $this->DB->prepare($query);
        $stmt->execute($params);
        if(empty($stmt->fetchAll(PDO::FETCH_OBJ))) {
            return false;
        }
        return true;
    }
    //
    private function sendEmail($email, $verifyHash) {
        $MESS = 'http://react-example/back_end/verify.php?param=' . $verifyHash;

		$transport = (new Swift_SmtpTransport('smtp.mail.ru', 465, 'ssl'))
			->setUsername('prog@2-br.ru')
			->setPassword('123123prog');
		//
		$mailer = new Swift_Mailer($transport);
		//
		$message = new Swift_Message('Ссылка на подтверждение');
		$message->setFrom(['prog@2-br.ru' => 'admin']);
		$message->setTo($email);
		$message->setBody("<a href=" . $MESS . ">$MESS</a>", 'text/html');
        //
        $mailer->send($message);
        echo 1;
    }
    //

}