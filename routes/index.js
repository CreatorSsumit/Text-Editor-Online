var express = require('express');
var router = express.Router();
const fs = require("fs");


router.get("/", function(req, res) {

    let ss = fs.readdirSync("./upload/")
    res.render("index", { filenames: ss });
})

router.post("/data", function(req, res) {

    let ab = req.body.filename + ".txt";
    fs.writeFileSync("./upload/" + ab, req.body.textarea);
    res.redirect('/');
})

router.get("/open/:fileopen", function(req, res) {
    let open = fs.readFileSync("./upload/" + req.params.fileopen);
    let dir = req.params.fileopen;
    res.render("detail", { area: open, filname: dir })
})

router.get("/delete/:filedelete", function(req, res) {
    fs.unlinkSync("./upload/" + req.params.filedelete);
    res.redirect("/");

})
router.get("/download/:filedownload", function(req, res) {
    let download = fs.readFileSync("./upload/" + req.params.filedownload);
    res.send(download);

})
router.post("/saves", function(req, res) {
    let abs = req.body.ff;
    fs.writeFileSync("./upload/" + abs, req.body.textareas);
    res.send("file successfully updated , Go Back and Refresh page !")
})


//   error wALI line


router.get("/goback", function(req, res) {
    let ss = fs.readdirSync("./upload/");
    res.redirect("/");

})


//






module.exports = router;