const os = require('os');

const user_information = os.userInfo;

console.log(user_information());

const os_information = {
    'type': os.type(),
    'totalmem': os.totalmem(),
    'uptime': os.uptime(),
    'release': os.release()
};

console.log(os_information);