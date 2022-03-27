const renderFurigana = require("./renderFurigana");
const express = require("express");

const kanjiFont = "40px Noto Sans JP";
const furiganaFont = "20px Noto Sans JP";

const app = express();

app.get("/:text", function(req, res) {
  renderFurigana(req.params.text, kanjiFont, furiganaFont).then(pngBuffer => {
    res.contentType("image/jpeg");
    res.send(pngBuffer);
  });
});

app.listen(process.env.PORT || 3000);
