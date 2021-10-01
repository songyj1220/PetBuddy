
const petFinderKey = "Up4HlmLZYdjjbKDld8fTymqzn4XDwf0CKSPJb1KBP2IZbYzKDK";
const petFinderSecret = "UQh71IxHiFMVfqG9e6clxn2yEaZI8lwquLPbLSYD";


const PetFinder = {
    searchPet(type, location) {
        var token, tokenType, expires, result, locationQuery;

        var getOAuth = function() {
            return fetch('https://api.petfinder.com/v2/oauth2/token', {
                method: 'POST',
                body: 'grant_type=client_credentials&client_id=' + petFinderKey + '&client_secret=' + petFinderSecret,
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
            }).then(function(resp) {
                return resp.json();
            }).then(function(data) {
                // Store token data
                token = data.access_token;
                tokenType = data.token_type;
                expires = new Date().getTime() + (data.expires_in * 1000);
            });
        };

        var getPets = function () {
            locationQuery = (location !== "") ? `&location=${location}` : "";
            return fetch(`https://api.petfinder.com/v2/animals?type=${type}${locationQuery}`, {
                headers: {
                    'Authorization': tokenType + ' ' + token,
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
            }).then(function (resp) {
        
                // Return the API response as JSON
                return resp.json();
        
            }).then(function (data) {
        
                // Log the pet data
                console.log('pets', data);
                result= data;
                return data;
        
            }).catch(function (err) {
        
                // Log any errors
                console.log('something went wrong', err);
        
            });
        };

        return getOAuth()
        .then(function () {
            return getPets();
        })
        .then((response) =>
        {
            return response;
        })
        .then((jsonResponse) => 
        {
            console.log("jsonResponse" + jsonResponse);
            if (jsonResponse.animals) {
                return jsonResponse.animals.map((animal) => {
                  return {
                    id: animal.id,
                    url: animal.url,
                    breeds: animal.breeds,
                    name: animal.name,
                    age: animal.age,
                    gender: animal.gender,
                    size: animal.size,
                    photos: animal.photos,
                    description: animal.description,
                  };
                });
            }
        });
    },
    

};

export default PetFinder;