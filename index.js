let puppeteer = require("puppeteer");

async function main() {
  let broswer = await puppeteer.launch({ headless: true });
  let page = await broswer.newPage();

  await page.goto(
    `https://gmatclub.com/forum/search.php?st=0&sk=t&sd=d&sr=topics&search_id=search_tag&search_id=search_tag&selected_search_tags%5B%5D=1348&selected_search_tags%5B%5D=1281&selected_search_tags%5B%5D=1282&selected_search_tags%5B%5D=1283&selected_search_tags%5B%5D=1284&selected_search_tags%5B%5D=1285&selected_search_tags%5B%5D=1286&selected_search_tags%5B%5D=1287&selected_search_tags%5B%5D=1288&selected_search_tags%5B%5D=1330&selected_search_tags%5B%5D=1335&search_tags=exact&terms=both&sj=one&start=0`);

  await page.waitFor(".topicsName.rc");
  await page.evaluate(async () => {
    let links = [];
    const topicNames = await document.querySelectorAll(".topicsName.rc")
    // for (let i = 0; i < topicNames.length; i++) {
    //   links.push(topicNames[i].children)
    // }
    // return links
    return topicNames
  }).catch(e => console.log(e))
  console.log(topicNames)
  // for (topic in topics) {
  //   console.log(topic.children[1].href)
  // }
  // for (let topic of topics){
  //   console.log(topic[1].children[1])
  // }
  // let ehList = await page.$$("td.topicsName.rc a")
  // for (let eh of ehList) {
  //   let href = await eh.$eval("a", function(el){
  //     return el
  //   })
  // }

  broswer.close();
}

main();
