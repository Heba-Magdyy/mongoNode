const {Ads} = require('./model')


exports.getAllAds = async (req, res, next) => {
    try {
        const ads = await Ads.find().populate({ path: "user_id", select: "name" });
        res.status(200).json({
            data: ads,
        })
    }
    catch (e) {
        next(e);
    }
}


exports.createAds = async (req, res, next) => {
    const {title, img} = req.body;
  try{
    const newAds = await Ads.create({
        title,
        img,
        user_id: req.user_id
    })
    res.status(201).json({
        message: "Ad has been created.",
        data: newAds
    })
  } catch(e){
    next(e);
  }
}
