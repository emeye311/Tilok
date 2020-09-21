const guide = require('../modules/guide-model');



const findByCountry=(req,res)=>{
    guide.find({country:req.body.country})
    .then(guides => {
        if (!guides.length) {
            return res.status(404).json({ success: false, error: 'not  found a single guide in thes country' })
        }
        else {
            return res.status(200).json({ success: true, data: guides });
        }
    })
    .catch(error => {
        console.log(error);
        return res.status(400).json({
            success: false,
            error: error,
            message: 'Could not get country!'
        })
    })
}
module.exports = {
    findByCountry
    
}