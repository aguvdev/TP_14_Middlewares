let admins = ['Ada','Vim','Greta','Tim']

const access = (req,res,next) => {
    if (admins.includes(req.query.user)) {
        next()
    }else{
        res.render('noAccess',{
            title : 'No tiene permisos'
        })
    }
}

module.exports = access;