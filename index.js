const renderFurigana = require("./renderFurigana");
const kanjiFont = "40px Noto Sans JP";
const furiganaFont = "20px Noto Sans JP";

const app = require("express")();
app.use(require("cors")());

app.get("/:text", async (req, res) => {
  try {
    const png = await renderFurigana(req.params.text, kanjiFont, furiganaFont, {
      backgroundColor: "transparent",
      textColor: "white"
    });
    res.contentType("image/jpeg");
    res.send(png);
  } catch (error) {
    console.log(error.message);
  }
});

app.listen(process.env.PORT || 3000);
