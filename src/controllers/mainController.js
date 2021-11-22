module.exports = {

    index : (req,res) => res.render('index'),
    login : (req,res) => res.render('login'),
    register : (req,res) => res.render('register'),
    admin : (req,res) => res.render('admin'),
    detail : (req,res) => res.render('detail'),
    products : (req,res) => res.render('products')
}