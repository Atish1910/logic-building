{
  "_id": "682263",
  "userName": "sherif",
  "email": "sharief@aucegypt.edu",
  "password": "67834783ujk",
  "houses": [
    {
      "_id": "2178123",
      "name": "New Mansion",
      "rooms": [
        { "name": "4th bedroom", "size": "12" },
        { "name": "kitchen", "size": "100" }
      ]
    }
  ]
}

// db -> select Current databse
// users -> the collection that i am updateing;
// updateOne -> Tell MongoDB to update only one Document  if we writ updadeMany

db.users.updateOne(
    // if both condition will satisfied then update
    {_id : "682263", "houses._id" : "2178123"},
    
    {
        // add new Element into Array
        $push : {
            // positional Operator 
            "houses.$.rooms" : {"name" : "Hall", "size" : "50"}
        }
    }
)



db.users.updateMany(
    {_id : "09876", "houses._id" : "45678"},
    {
        $push : {
            "houses.$.rooms" : {
                $each : [
                    {"name" : "Hall", "size" : "60"},
                    {"name" : "Hall 2", "size" : "50"}
                ]
            }
        }
    }
)