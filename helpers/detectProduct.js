const tf = require("@tensorflow/tfjs-node");
const mobilenet = require("@tensorflow-models/mobilenet");
const fs = require("fs");
const path = require("path");

function detectProduct(url) {
  const image = fs.readFileSync(url);
  const input = tf.node.decodeImage(image, 3);

  mobilenet.load().then((model) => {
    model.classify(input).then((predictions) => {
      console.log(predictions);
    });
  });
}
detectProduct(
  path.join(
    __dirname,
    "../uploads/@0551278.80@4184661.27@10@S@037.80790@-122.41746@NPGe270SqzvUD876dglIRQ@@270@@@@201311@@.jpg"
  )
);
