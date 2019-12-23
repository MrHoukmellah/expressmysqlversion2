const express  =  require('express');
const bodyParser  =  require('body-parser');
const cors = require('cors')
const sqlite3  =  require('sqlite3').verbose();
const db = require('./db.js');
const jwt  =  require('jsonwebtoken');
const  bcrypt  =  require('bcryptjs');
const testId = 2654653;
const testProductId = 87687;

const SECRET_KEY = "secretkey23456";

const  app  =  express();
const  router  =  express.Router();

app.use(cors())

router.use(bodyParser.urlencoded({ extended:  false }));
router.use(bodyParser.json());

const database = new sqlite3.Database("./my.db");

const  insertWishlist  = (productId, userId, cb) => {
    console.log('========',productId, userId)
    console.log("Connected!");
    var sql = "INSERT INTO wishlist (product_id, user_id) VALUES ?";
    var values = [[productId, userId]]
    
    db.query(sql, [values], function (err, result) {
        if (err) {
            console.log(err)
        }
        cb(err)
        console.log("1 record inserted");
    });
}

router.get('/users', (req, res)=>{

    db.query('SELECT * FROM comparateur.users', function (err, result) {
        if (err) {
            console.log(err)


        }
        return res.json(result)
        console.log('********')
        console.log(result)
        

    })
}
)

router.post('/products', (req, res)=>{
    console.log('heeeeere');
    var offset = req.body.offset;
    console.log('offset =>', offset);
    db.query('SELECT DISTINCT products.* , categories.name, GROUP_CONCAT(images.urls) AS image FROM products, categories, images WHERE products.category_id = categories.id AND products.id = images.product_id GROUP BY products.id LIMIT 20 OFFSET ' + offset , function (err, result){
        if (err) {
            console.log(err)
        }

        console.log('result sql =>', result);
        return res.json(result)
        console.log('********')
        console.log(result)
        

    })
}
)
router.post('/productscategory', (req, res)=>{
    var categoryId = req.body.categoryId
    console.log('heeeeere');
    var offset = req.body.offset;
    console.log('offset =>', offset);
    db.query('SELECT DISTINCT products.* , categories.name, GROUP_CONCAT(images.urls) AS image FROM products, categories, images WHERE products.category_id = categories.id AND products.id = images.product_id AND products.category_id = '+categoryId+' GROUP BY products.id LIMIT 20 OFFSET ' + offset , function (err, result){
        if (err) {
            console.log(err)
        }

        console.log('result sql =>', result);
        return res.json(result)
        console.log('********')
        console.log(result)
        

    })
}
)
router.post('/updateuser', (req, res)=>{
    console.log('heeeeere');
    var name = req.body.name;
    var password = req.body.password;
    var email = req.body.email;
    var id = req.body.id;

    console.log('offset =>', name);
    db.query("UPDATE users SET name= '"+name+"', email='"+email+"',password='"+password+"' WHERE id='"+id+"'" , function (err, result){
        if (err) {
            console.log(err)
            

        }
        console.log('result sql =>', result);
        return res.json(result)
        console.log('********')
        console.log(result)
        

    })
}
)
router.post('/updateproduct', (req, res)=>{
    console.log('heeeeere');
    var title = req.body.title;
    var description = req.body.description;
    var categoryId = req.body.categoryId
    var image = req.body.image
    var url = req.body.url
    var price = req.body.price
    var id = req.body.id;

    console.log('offset =>', description);
    db.query("UPDATE products SET title= '"+title+"', description='"+description+"',category_id='"+categoryId+"', image='"+image+"', url='"+url+"', price='"+price+"' WHERE id="+id , function (err, result){
        if (err) {
            console.log(err)
            

        }
        console.log('result sql =>', result);
        return res.json(result)
        console.log('********')
        console.log(result)
        

    })
}
)
router.post('/addproduct', (req, res)=>{
    console.log('heeeeere');
    var title = req.body.title;
    var description = req.body.description;
    var categoryId = req.body.categoryId
    var image = req.body.image
    var url = req.body.url
    var price = req.body.price
    var id = req.body.id;

    console.log('offset =>',categoryId);
    db.query("INSERT products (title, description,category_id,image,url,price) VALUES ('"+title+"','"+description+"','"+categoryId+"','"+image+"','"+url+"','"+price+"')" , function (err, result){
        if (err) {
            console.log(err)
            

        }
        console.log('result sql =>', result);
        return res.json(result)
        console.log('********')
        console.log(result)
        

    })
}
)
router.post('/adduser', (req, res)=>{
    console.log('heeeeere');
    var name = req.body.name;
    var password = req.body.password;
    var email = req.body.email;
    var id = req.body.id;

    console.log('offset =>', name);
    db.query("INSERT users (name, email, password) VALUES ('"+name+"','"+email+"','"+password+"')" , function (err, result){
        if (err) {
            console.log(err)
            

        }
        console.log('result sql =>', result);
        return res.json(result)
        console.log('********')
        console.log(result)
        

    })
}
)
router.post('/wishlists', (req, res)=>{
    console.log('heeeeere');
    
    var userId = req.body.userid;
    
    console.log('mlezfmez')
    db.query("SELECT products.*,wishlist.*, categories.name FROM products, wishlist, categories WHERE wishlist.user_id="+userId+" AND products.id=wishlist.product_id AND categories.id=products.category_id LIMIT 20 OFFSET 0" , function (err, result){
    if (err) {
        console.log(err)
    }
    console.log(result)
    return res.json(result)

})})


router.post('/wishlist', (req, res)=>{
    console.log('heeeeere');
    var productId = req.body.productid;
    var userId = req.body.userid;
    
    console.log('mlezfmez')
    db.query("SELECT * FROM wishlist WHERE user_id="+userId+" AND product_id = "+productId , function (err, result){
        console.log('======>',result.length)

        if(result.length>=1) {
            db.query("DELETE FROM wishlist WHERE product_id="+productId+" AND user_id="+userId, function (err, result){
                if (err) {
                    console.log(err)
                }
                console.log('result sql =>êzgezkg', result.affectedRows);
                return res.json(result)
        })}
        else {

            db.query("INSERT wishlist (product_id, user_id) VALUES ("+productId+","+userId+")" , function (err, result){
                if (err) {
                    console.log(err)
                }
                console.log('result sql =>s,glzkrgklrz', result.affectedRows);
                return res.json(result)
        })
        if (err) {
            console.log(err)
        }
       

        

    }
}
)
})
router.post('/deletewishlist', (req, res)=>{
    console.log('heeeeere');
    var productId = req.body.productId;
    var userId = req.body.userId;
  

    console.log('offset =>', name);
    db.query("DELETE FROM wishlist WHERE user_id = "+productId+"" , function (err, result){
        if (err) {
            console.log(err)
            

        }
        console.log('result sql =>', result);
        return res.json(result)
        console.log('********')
        console.log(result)
        

    })
}
)


router.post('/deleteuser', (req, res)=>{
    console.log('heeeeere');

    var id = req.body.id;

    console.log('offset =>',id);
    db.query("DELETE FROM users WHERE id = "+id+""    , function (err, result){
        if (err) {
            console.log(err)
            

        }
        console.log('result sql =>', result);
        return res.json(result)
        console.log('********')
        console.log(result)
        

    })
}
)
router.post('/deleteproduct', (req, res)=>{
    console.log('heeeeere');

    var id = req.body.id;

    console.log('offset =>',id);
    db.query("DELETE FROM products WHERE id = "+id+""    , function (err, result){
        if (err) {
            console.log(err)
            

        }
        console.log('result sql =>', result);
        return res.json(result)
        console.log('********')
        console.log(result)
        

    })
}
)









const  findUserByEmail  = (email, cb) => {
    db.query('SELECT * FROM users WHERE email = ?', [email], function (err, result) {
        if (err) {
            console.log(err)
            cb(err, result)

        }
        console.log('********')
        console.log(result)
        
        cb(null, result[0])
    });
}

const  createUser  = (user, cb) => {
    console.log('========',user)
    console.log("Connected!");
    var sql = "INSERT INTO users (name, email, password) VALUES ?";
    var values = [[user.name, user.email, user.password]]
    
    db.query(sql, [values], function (err, result) {
        if (err) {
            console.log(err)
        }
        cb(err)
        console.log("1 record inserted");
    });
}



router.post('/register', (req, res) => {
    const u = {
        name: req.body.name,
        email: req.body.email,
        password: bcrypt.hashSync(req.body.password)
    }

    createUser(u, (err) => {
        if(err) {
            return  res.status(500).send("Server error!")
        }

        findUserByEmail(u.email, (err, user) => {
            if (err) {
                console.log(err);
                return  res.status(504).send('Server error!');  
            }
            const  expiresIn  =  24  *  60  *  60;
            const  accessToken  =  jwt.sign({ id:  user.id }, SECRET_KEY, {
                expiresIn:  expiresIn
            });
            return res.status(200).send({
                "user": user,
                "access_token": accessToken,
                "expires_in": expiresIn          
            });
        });
    });
});

router.post('/login', (req, res) => {
    const  email  =  req.body.email;
    const  password  =  req.body.password;
    findUserByEmail(email, (err, user)=>{
        if (err)
            return res.status(500).send('Server error!');
        
        if (!user)
            return  res.status(404).send('User not found!');
        
        const  result  =  bcrypt.compareSync(password, user.password);
        if(!result)
            return  res.status(401).send('Password not valid!');

        const expiresIn = 24 * 60 * 60;
        const accessToken = jwt.sign(
            {
                id:  user.id
            },
            SECRET_KEY, {
                expiresIn:  expiresIn
            }
        );
        
        res.status(200).send({ "user":  user, "access_token":  accessToken, "expires_in":  expiresIn});
    });
});

app.use(router);

const  port  =  process.env.PORT  ||  9292;
const  server  =  app.listen(port, () => {
    console.log('Server listening at http://localhost:'  +  port);
}); 