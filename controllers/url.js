const shortid = require('shortid');
const URL = require("../models/url");

async function handleGenerateNewUrl(req,res){
    const body = req.body;
    if (!body.url) return res.status(400).json({error:"url is required"});
 const shortID= shortid();

await URL.create({
    shortId:shortID,
    redirectUrl: body.url,
    totalClicks:[],

});
return res.json({id: shortID});
}

module.exports={ handleGenerateNewUrl,}