// const dataStore=require("../dataStore.json")

module.exports.form = async (req, res) => {
  try {
    let submitData = req.body["Submit text message"];
    let searchData = req.body["Search text message"];

    if (submitData) {
      res.cookie(submitData, `encrypted Value`);
     return res.send("Cookie saved successfully");
    }

    if(searchData){
        console.log(req.cookies)
        res.send(req.cookies);
    }

    res.clearCookie()
    return res.send('All Cookies deleted successfully');

  } 
  catch (error) {
    res.status(500).send({ status: false, error: error.message });
  }
};
