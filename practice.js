const puppeteer = require("puppeteer");
const babel = require("@babel/core");

async function rc() {
  let browser = await puppeteer.launch({ headless: false });
  //   for (pi = 0; pi < 100; pi = pi + 50) {
  let page1 = await browser.newPage();

  //login to GMATCLUB
  const gmatclub_id = "garmgoon@gmail.com";
  const gmatclub_pw = "wlaotzmffjq";

  await page1.goto("https://gmatclub.com/forum/ucp.php?mode=login", {
    waitUntil: "load",
    timeout: 0
  });

  await page1.evaluate(
    (id, pw) => {
      document.querySelector("#email").value = id;
      document.querySelector("#password").value = pw;
    },
    gmatclub_id,
    gmatclub_pw
  );

  await page1.waitFor(".button.login");
  await page1.click(".button.login");
  await page1.waitForNavigation();

  // await page1.goto(
  //   `https://gmatclub.com/forum/search.php?st=0&sk=t&sd=d&sr=topics&search_id=search_tag&search_id=search_tag&selected_search_tags%5B%5D=162&selected_search_tags%5B%5D=228&selected_search_tags%5B%5D=229&selected_search_tags%5B%5D=125&selected_search_tags%5B%5D=126&selected_search_tags%5B%5D=128&selected_search_tags%5B%5D=167&selected_search_tags%5B%5D=129&selected_search_tags%5B%5D=130&selected_search_tags%5B%5D=248&selected_search_tags%5B%5D=163&selected_search_tags%5B%5D=521&selected_search_tags%5B%5D=364&selected_search_tags%5B%5D=532&selected_search_tags%5B%5D=1120&selected_search_tags%5B%5D=1229&selected_search_tags%5B%5D=1358&selected_search_tags%5B%5D=205&selected_search_tags%5B%5D=276&selected_search_tags%5B%5D=534&selected_search_tags%5B%5D=318&selected_search_tags%5B%5D=165&selected_search_tags%5B%5D=1359&selected_search_tags%5B%5D=1360&selected_search_tags%5B%5D=255&selected_search_tags%5B%5D=531&selected_search_tags%5B%5D=273&selected_search_tags%5B%5D=1321&selected_search_tags%5B%5D=316&selected_search_tags%5B%5D=256&selected_search_tags%5B%5D=164&selected_search_tags%5B%5D=1331&selected_search_tags%5B%5D=520&selected_search_tags%5B%5D=278&selected_search_tags%5B%5D=275&selected_search_tags%5B%5D=274&selected_search_tags%5B%5D=522&selected_search_tags%5B%5D=94&selected_search_tags%5B%5D=166&selected_search_tags%5B%5D=285&selected_search_tags%5B%5D=1348&selected_search_tags%5B%5D=1281&selected_search_tags%5B%5D=1282&selected_search_tags%5B%5D=1283&selected_search_tags%5B%5D=1284&selected_search_tags%5B%5D=1285&selected_search_tags%5B%5D=1286&selected_search_tags%5B%5D=1287&selected_search_tags%5B%5D=1288&selected_search_tags%5B%5D=1330&selected_search_tags%5B%5D=1335&selected_search_tags%5B%5D=1336&selected_search_tags%5B%5D=1349&selected_search_tags%5B%5D=1289&selected_search_tags%5B%5D=1290&selected_search_tags%5B%5D=1291&selected_search_tags%5B%5D=1292&selected_search_tags%5B%5D=1293&selected_search_tags%5B%5D=1394&selected_search_tags%5B%5D=1294&selected_search_tags%5B%5D=1404&search_tags=exact&terms=both&sj=one&start=100`
  // );

  // await page1.waitFor(".topicsName.rc");
  // //검색된 페이지 내 article 개수
  // let links = await page1.$$eval(".topicsName.rc", options => {
  //   return options.map(option => option.getElementsByTagName("a")[1].href);
  // });

  // for (i = 0; i < 2; i++) {
  //   let page2 = await browser.newPage();
  //   await page2.goto(`${links[i]}`);

  //   //문제 요소
  //   //문제
  //   let raw_questions_que = await page2
  //     .$$(".bbcodeBoxIn")
  //     .catch(e => console.log(e));

  //   let questions_que = await raw_questions_que[1]
  //     .$$eval(".bbcodeBoxIn > span", el => {
  //       return el.map(a => a.innerText);
  //     })
  //     .catch(e => console.log(e));

  //   let ans_code = await page2
  //     .$$eval("script", el => {
  //       return el[el.length - 1].innerHTML;
  //     })
  //     .catch(e => console.log(e));

  //   let ans_code_parse = await babel.parse(ans_code);
  //   let post_id =
  //     ans_code_parse.program.body[0].declarations[0].init.elements[0].value;
  //   let ans_num = await page2.$$("div > .upRow");
  //   let questions_ans = [];
  //   for (i = 1; i < ans_num.length + 1; i++) {
  //     asb = await page2.$eval(`#spoiler_${post_id}_${i}`, el => {
  //       return el.innerText.trim();
  //     });
  //     console.log(asb);
  //   }
  //   console.log(questions_ans);
  //   // //보기
  //   // let questions_opt = await page2
  //   // .$$eval(".bbcodeBoxIn", el => {
  //   //   return el.map(a=>a.innerText)
  //   // })
  //   // .catch(e => console.log(e));

  //   // let raw_questions = await page2
  //   //   .$$eval(".bbcodeBoxIn", el => {
  //   //     return el[1].innerHTML;
  //   //   })
  //   //   .catch(e => console.log(e));

  //   // await page2.close();

  //   // console.log(questions_que);
  // }
  // // await page1.close();
  // // }

  // // browser.close();
}
rc();
