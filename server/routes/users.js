var express = require('express');
var router = express.Router();

const users = [
  {
    "isActive": true,
    "picture": "https://via.placeholder.com/50x50",
    "age": 28,
    "eyeColor": "green",
    "firstName": "Watson",
    "lastName": "Pena",
    "gender": "male",
    "company": "ENTROPIX",
    "email": "watsonpena@entropix.com",
    "phone": "+1 (884) 526-3656"
  },
  {
    "isActive": true,
    "picture": "https://via.placeholder.com/50x50",
    "age": 21,
    "eyeColor": "blue",
    "firstName": "Jacklyn",
    "lastName": "Knight",
    "gender": "female",
    "company": "GEOFORM",
    "email": "jacklynknight@geoform.com",
    "phone": "+1 (922) 539-3550"
  },
  {
    "isActive": true,
    "picture": "https://via.placeholder.com/50x50",
    "age": 23,
    "eyeColor": "green",
    "firstName": "Brianna",
    "lastName": "Rivas",
    "gender": "female",
    "company": "CALCULA",
    "email": "briannarivas@calcula.com",
    "phone": "+1 (975) 504-3374"
  },
  {
    "isActive": false,
    "picture": "https://via.placeholder.com/50x50",
    "age": 37,
    "eyeColor": "green",
    "firstName": "Violet",
    "lastName": "Hartman",
    "gender": "female",
    "company": "ANACHO",
    "email": "violethartman@anacho.com",
    "phone": "+1 (987) 560-3026"
  },
  {
    "isActive": false,
    "picture": "https://via.placeholder.com/50x50",
    "age": 28,
    "eyeColor": "brown",
    "firstName": "Tyler",
    "lastName": "Holder",
    "gender": "male",
    "company": "DIGIPRINT",
    "email": "tylerholder@digiprint.com",
    "phone": "+1 (883) 546-3704"
  },
  {
    "isActive": true,
    "picture": "https://via.placeholder.com/50x50",
    "age": 34,
    "eyeColor": "blue",
    "firstName": "Ross",
    "lastName": "Robles",
    "gender": "male",
    "company": "EXOSIS",
    "email": "rossrobles@exosis.com",
    "phone": "+1 (886) 430-2992"
  },
  {
    "isActive": false,
    "picture": "https://via.placeholder.com/50x50",
    "age": 36,
    "eyeColor": "brown",
    "firstName": "Britt",
    "lastName": "Barnett",
    "gender": "male",
    "company": "GENMY",
    "email": "brittbarnett@genmy.com",
    "phone": "+1 (849) 425-3557"
  },
  {
    "isActive": true,
    "picture": "https://via.placeholder.com/50x50",
    "age": 23,
    "eyeColor": "green",
    "firstName": "Millicent",
    "lastName": "Bowman",
    "gender": "female",
    "company": "ZENTIA",
    "email": "millicentbowman@zentia.com",
    "phone": "+1 (961) 474-3262"
  },
  {
    "isActive": true,
    "picture": "https://via.placeholder.com/50x50",
    "age": 27,
    "eyeColor": "green",
    "firstName": "Knox",
    "lastName": "Trujillo",
    "gender": "male",
    "company": "MARQET",
    "email": "knoxtrujillo@marqet.com",
    "phone": "+1 (883) 579-2757"
  },
  {
    "isActive": false,
    "picture": "https://via.placeholder.com/50x50",
    "age": 35,
    "eyeColor": "brown",
    "firstName": "Lucille",
    "lastName": "Welch",
    "gender": "female",
    "company": "BEDDER",
    "email": "lucillewelch@bedder.com",
    "phone": "+1 (947) 495-3400"
  },
  {
    "isActive": false,
    "picture": "https://via.placeholder.com/50x50",
    "age": 37,
    "eyeColor": "green",
    "firstName": "Terry",
    "lastName": "Bartlett",
    "gender": "male",
    "company": "UPDAT",
    "email": "terrybartlett@updat.com",
    "phone": "+1 (966) 462-2476"
  },
  {
    "isActive": false,
    "picture": "https://via.placeholder.com/50x50",
    "age": 23,
    "eyeColor": "blue",
    "firstName": "Claudette",
    "lastName": "Perry",
    "gender": "female",
    "company": "ROUGHIES",
    "email": "claudetteperry@roughies.com",
    "phone": "+1 (860) 403-3429"
  },
  {
    "isActive": false,
    "picture": "https://via.placeholder.com/50x50",
    "age": 40,
    "eyeColor": "green",
    "firstName": "Rhonda",
    "lastName": "Vega",
    "gender": "female",
    "company": "RETROTEX",
    "email": "rhondavega@retrotex.com",
    "phone": "+1 (986) 515-2594"
  },
  {
    "isActive": false,
    "picture": "https://via.placeholder.com/50x50",
    "age": 21,
    "eyeColor": "blue",
    "firstName": "Lane",
    "lastName": "Thomas",
    "gender": "male",
    "company": "ECRAZE",
    "email": "lanethomas@ecraze.com",
    "phone": "+1 (998) 437-3638"
  },
  {
    "isActive": true,
    "picture": "https://via.placeholder.com/50x50",
    "age": 22,
    "eyeColor": "brown",
    "firstName": "Durham",
    "lastName": "Clay",
    "gender": "male",
    "company": "BULLJUICE",
    "email": "durhamclay@bulljuice.com",
    "phone": "+1 (902) 550-3248"
  },
  {
    "isActive": false,
    "picture": "https://via.placeholder.com/50x50",
    "age": 30,
    "eyeColor": "brown",
    "firstName": "Essie",
    "lastName": "English",
    "gender": "female",
    "company": "SAVVY",
    "email": "essieenglish@savvy.com",
    "phone": "+1 (951) 528-3687"
  },
  {
    "isActive": true,
    "picture": "https://via.placeholder.com/50x50",
    "age": 29,
    "eyeColor": "green",
    "firstName": "Meredith",
    "lastName": "Melton",
    "gender": "female",
    "company": "MAINELAND",
    "email": "meredithmelton@maineland.com",
    "phone": "+1 (847) 581-2616"
  },
  {
    "isActive": true,
    "picture": "https://via.placeholder.com/50x50",
    "age": 36,
    "eyeColor": "green",
    "firstName": "Schultz",
    "lastName": "Burgess",
    "gender": "male",
    "company": "OZEAN",
    "email": "schultzburgess@ozean.com",
    "phone": "+1 (897) 413-3545"
  },
  {
    "isActive": true,
    "picture": "https://via.placeholder.com/50x50",
    "age": 24,
    "eyeColor": "blue",
    "firstName": "Small",
    "lastName": "Burris",
    "gender": "male",
    "company": "GLOBOIL",
    "email": "smallburris@globoil.com",
    "phone": "+1 (931) 594-3309"
  },
  {
    "isActive": false,
    "picture": "https://via.placeholder.com/50x50",
    "age": 25,
    "eyeColor": "blue",
    "firstName": "Lambert",
    "lastName": "Ross",
    "gender": "male",
    "company": "DYNO",
    "email": "lambertross@dyno.com",
    "phone": "+1 (851) 550-3028"
  },
  {
    "isActive": true,
    "picture": "https://via.placeholder.com/50x50",
    "age": 36,
    "eyeColor": "brown",
    "firstName": "Flores",
    "lastName": "Rodgers",
    "gender": "male",
    "company": "LUMBREX",
    "email": "floresrodgers@lumbrex.com",
    "phone": "+1 (820) 572-3909"
  },
  {
    "isActive": false,
    "picture": "https://via.placeholder.com/50x50",
    "age": 21,
    "eyeColor": "blue",
    "firstName": "Amie",
    "lastName": "Briggs",
    "gender": "female",
    "company": "VIAGREAT",
    "email": "amiebriggs@viagreat.com",
    "phone": "+1 (892) 552-3192"
  },
  {
    "isActive": false,
    "picture": "https://via.placeholder.com/50x50",
    "age": 35,
    "eyeColor": "brown",
    "firstName": "Nicole",
    "lastName": "Bullock",
    "gender": "female",
    "company": "NAVIR",
    "email": "nicolebullock@navir.com",
    "phone": "+1 (957) 581-2223"
  },
  {
    "isActive": true,
    "picture": "https://via.placeholder.com/50x50",
    "age": 35,
    "eyeColor": "green",
    "firstName": "Bryant",
    "lastName": "Silva",
    "gender": "male",
    "company": "CORECOM",
    "email": "bryantsilva@corecom.com",
    "phone": "+1 (958) 543-2859"
  },
  {
    "isActive": true,
    "picture": "https://via.placeholder.com/50x50",
    "age": 30,
    "eyeColor": "blue",
    "firstName": "Calhoun",
    "lastName": "Hobbs",
    "gender": "male",
    "company": "FLUM",
    "email": "calhounhobbs@flum.com",
    "phone": "+1 (811) 478-2711"
  },
  {
    "isActive": false,
    "picture": "https://via.placeholder.com/50x50",
    "age": 21,
    "eyeColor": "brown",
    "firstName": "Hayden",
    "lastName": "Winters",
    "gender": "male",
    "company": "TWIIST",
    "email": "haydenwinters@twiist.com",
    "phone": "+1 (965) 428-2614"
  },
  {
    "isActive": true,
    "picture": "https://via.placeholder.com/50x50",
    "age": 29,
    "eyeColor": "brown",
    "firstName": "Mccall",
    "lastName": "Howell",
    "gender": "male",
    "company": "CEDWARD",
    "email": "mccallhowell@cedward.com",
    "phone": "+1 (930) 552-3491"
  },
  {
    "isActive": true,
    "picture": "https://via.placeholder.com/50x50",
    "age": 36,
    "eyeColor": "green",
    "firstName": "Clarice",
    "lastName": "Cross",
    "gender": "female",
    "company": "OTHERWAY",
    "email": "claricecross@otherway.com",
    "phone": "+1 (890) 458-3853"
  },
  {
    "isActive": true,
    "picture": "https://via.placeholder.com/50x50",
    "age": 32,
    "eyeColor": "brown",
    "firstName": "Meyers",
    "lastName": "Cooley",
    "gender": "male",
    "company": "SCHOOLIO",
    "email": "meyerscooley@schoolio.com",
    "phone": "+1 (899) 495-2236"
  },
  {
    "isActive": false,
    "picture": "https://via.placeholder.com/50x50",
    "age": 37,
    "eyeColor": "blue",
    "firstName": "Macdonald",
    "lastName": "Byers",
    "gender": "male",
    "company": "WEBIOTIC",
    "email": "macdonaldbyers@webiotic.com",
    "phone": "+1 (860) 413-2936"
  }
];

users.forEach(function(i, index) {
  i.id = index + 1;
});

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json(users);
});

router.get('/:id', function(req, res, next) {
  var user = users.find(function(i) {
    return i.id === +req.params.id;
  });
  if (user) {
    res.json(user);
  } else {
    res.status(404)
      .send('Not found')
  }
});

router.post('/', function(req, res, next) {
  var user = Object.assign({
    "isActive": true,
    "picture": null,
    "age": null,
    "eyeColor": null,
    "firstName": '',
    "lastName": '',
    "gender": null,
    "company": '',
    "email": '',
    "phone": ''
  }, req.body);

  user.id = users[users.length - 1].id + 1;
  users.push(user);
  res.status(200).send(user);
});

router.put('/:id', function(req, res, next) {
  var user = users.find(function(i) {
    return i.id === +req.params.id;
  });
  var body = req.body;
  if (user) {
    for (var key in body) {
      if(body[key] !== undefined) {
        user[key] = body[key];
      }
    }
    res.json(user);
  } else {
    res.status(404)
      .send('Not found')
  }
});

module.exports = router;
