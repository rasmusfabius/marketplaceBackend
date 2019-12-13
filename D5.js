/*
    Team Challenge: Market Place / Amazon Like

    You and your team are in charge of creating a Marketplace

    Every product in your marketplace has this information:

    {
        "_id": "5d318e1a8541744830bef139", //SERVER GENERATED
        "name": "app test 1",  //REQUIRED
        "description": "somthing longer", //REQUIRED
        "brand": "nokia", //REQUIRED
        "imageUrl": "https://drop.ndtv.com/TECH/product_database/images/2152017124957PM_635_nokia_3310.jpeg?downsize=*:420&output-quality=80",
        "price": 100, //REQUIRED
        "category": "smartphones"
        "createdAt": "2019-07-19T09:32:10.535Z", //SERVER GENERATED
        "updatedAt": "2019-07-19T09:32:10.535Z", //SERVER GENERATED
    }

    And the reviews looks like:

     {
        "_id": "123455", //SERVER GENERATED
        "comment": "A good book but definitely I don't like many parts of the plot", //REQUIRED
        "rate": 3, //REQUIRED, max 5
        "elementId": "5d318e1a8541744830bef139", //REQUIRED
        "createdAt": "2019-08-01T12:46:45.895Z" // SERVER GENERATED
    },


    //BACKEND

    You are in charge of building the Backend using NodeJS + Express. The backend should include the extra following features:

    CRUD for Products ( /products GET, POST, DELETE, PUT)
    CRUD for Reviews ( /reviews GET, POST, DELETE, PUT)
    Extra method for product's image upload (POST /product/{id}/upload)
    Add an extra method to get all the reviews of a specific product (GET /products/{id}/Reviews)
    [EXTRA] GET /products?category=book => should return only books
    [EXTRA] Connect this app to your previous Marketplace from Module 3 or create a new one in ReactJS


    NOTE:
    For both Products and Reviews, the field CREATED should be set when adding the current product / review to the list.
    The UpdatedAt should be equal to created on creation and then change for each and every PUT on that very item.
*/