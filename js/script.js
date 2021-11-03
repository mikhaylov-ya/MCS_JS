const subtopic = document.querySelector(".subtop");
const result = document.querySelector(".result");
const subtName = document.getElementById("subtopic");
const tassRef = document.getElementById("tassRef");
const riaRef = document.getElementById("riaRef");
const tassTime = document.getElementById("tassTime");
const riaTime = document.getElementById("riaTime");
const onlyTass = document.querySelector(".onlyTass");
const onlyRia = document.querySelector(".onlyRia");
const common = document.querySelector(".common");
const riaIntro = document.querySelector(".riaIntro");
const tassIntro = document.querySelector(".tassIntro");
const tassFirst = document.querySelector(".tassFirst");
const riaFirst = document.querySelector(".riaFirst");
const noFirst = document.querySelector(".noFirst");
const riaIntroCom = document.querySelector(".riaIntroCom");
const tassIntroCom = document.querySelector(".tassIntroCom");

class JFF extends Array {
  sum(key) {
    return this.reduce((a, b) => parseInt(a,10) + (parseInt(b[key],10) || 0), 0);
  }
}

let onlyRiaNews = new JFF(...[]);
let onlyTassNews = new JFF(...[]);
let riaFirstNews = new JFF(...[]);
let tassFirstNews = new JFF(...[]);
let noFirstNews = new JFF(...[]);

function toAnalyze(arr, slot) {
  for (e of arr) {
    let tag = document.createElement("li");
    let tex;
    if (e.timeTass)
      tex = document.createTextNode(
        `${e.name} (${e.timeTass} / ${e.timeRia}) (${e.tass} / ${e.ria})`
      );
    else tex = document.createTextNode(`${e.name} (${e.tass} / ${e.ria})`);
    tag.append(tex);
    slot.append(tag);
  }
}

function toText(arr, agency) {
  if (agency === "tass") {
    let str1 = "ТАСС впереди по ";
    tassIntroCom.innerHTML = "";

    arr.sort((a, b) => parseInt(a.tass - a.ria,10) < parseInt(b.tass - b.ria,10));

    for (e of arr) str1 += `${e.name} (+${e.tass - e.ria}), `;
    let tex1 = document.createTextNode(str1);
    let tag1 = document.createElement("p");
    tag1.append(tex1);
    tassIntroCom.append(tag1);
  }

  if (agency === "ria") {
    let str = "РИА впереди по ";

    riaIntroCom.innerHTML = "";
    arr.sort((a, b) => parseInt(a.ria - a.tass,10) < parseInt(b.ria - b.tass,10));

    for (e of arr) str += `${e.name} (-${e.ria - e.tass}), `;

    let tex = document.createTextNode(str);
    let tag = document.createElement("p");
    tag.append(tex);
    riaIntroCom.append(tag);
  }
}

subtopic.onsubmit = function (e) {
  if (subtName.value == "") {
    e.preventDefault();
  }

  // Эксклюзивы ТАСС
  else if (
    tassTime.value == false &&
    riaTime.value == false &&
    riaRef.value == false
  ) {
    e.preventDefault();

    let onlyTass1 = {
      name: subtName.value,
      quantity: tassRef.value,
    };

    onlyTassNews.push(onlyTass1);
    if (onlyTassNews.length > 1) {
      onlyTassNews.sort((a, b) => parseInt(a.quantity,10) < parseInt(b.quantity,10));
    }

    onlyTass.innerHTML = "";
    tassIntro.innerHTML = "";

    let total = onlyTassNews.sum("quantity");

    for (e of onlyTassNews) {
      let tag = document.createElement("li");
      let tex = document.createTextNode(`${e.name} - ${e.quantity}`);
      tag.append(tex);
      onlyTass.append(tag);
    }

    let tassUniq = document.createTextNode(
      `Кроме того, ${total} ссылок на сообщения, которые цитируются только у ТАСС, в том числе`
    );
    tassIntro.append(tassUniq);

    subtopic.reset();
  }

  // Эксклюзивы РИА
  else if (
    tassTime.value == false &&
    riaTime.value == false &&
    tassRef.value == false
  ) {
    e.preventDefault();

    let onlyRia1 = {
      name: subtName.value,
      quantity: riaRef.value,
    };

    onlyRiaNews.push(onlyRia1);

    if (onlyRiaNews.length > 1) {
      onlyRiaNews.sort((a, b) => parseInt(a.quantity,10) < parseInt(b.quantity,10));
    }

    let total = onlyRiaNews.sum("quantity");

    onlyRia.innerHTML = "";
    riaIntro.innerHTML = "";

    for (e of onlyRiaNews) {
      let tag = document.createElement("li");
      let tex = document.createTextNode(`${e.name} - ${e.quantity}`);
      tag.append(tex);
      onlyRia.append(tag);
    }

    let riaUniq = document.createTextNode(
      `Кроме того, ${total} ссылок на сообщения, которые цитируются только у РИА, в том числе`
    );
    riaIntro.append(riaUniq);

    subtopic.reset();
  }

  // Подтемы!
  else {
    e.preventDefault();

    let commonSubtopic = {
      name: subtName.value,
      timeTass: tassTime.value,
      timeRia: riaTime.value,
      tass: tassRef.value,
      ria: riaRef.value,
    };

    if (parseInt(commonSubtopic.tass,10) > parseInt(commonSubtopic.ria, 10))
      tassFirstNews.push(commonSubtopic);
    else if (parseInt(commonSubtopic.ria, 10) > parseInt(commonSubtopic.tass, 10))
      riaFirstNews.push(commonSubtopic);
    else noFirstNews.push(commonSubtopic);

    if (tassFirstNews.length > 1) {
      tassFirstNews.sort(
        (a, b) => (parseInt(a.tass) + parseInt(a.ria)) < (parseInt(b.tass) + parseInt(b.ria))
      );
    }

    if (riaFirstNews.length > 1) {
      riaFirstNews.sort(
        (a, b) => (parseInt(a.tass) + parseInt(a.ria)) < (parseInt(b.tass) + parseInt(b.ria))
      );
    }

    if (noFirstNews.length > 1) {
      noFirstNews.sort(
        (a, b) => (parseInt(a.tass) + parseInt(a.ria)) < (parseInt(b.tass) + parseInt(b.ria))
      );
    }

    noFirst.innerHTML = "";
    riaFirst.innerHTML = "";
    tassFirst.innerHTML = "";

    toAnalyze(tassFirstNews, tassFirst);

    toAnalyze(riaFirstNews, riaFirst);
    toAnalyze(noFirstNews, noFirst);

    toText(tassFirstNews, "tass");
    toText(riaFirstNews, "ria");

    subtopic.reset();
  }
};
