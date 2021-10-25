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

// arr.sort( (a, b) => a - b );

class JFF extends Array {
  sum(key) {
    return this.reduce((a, b) => parseInt(a) + (parseInt(b[key]) || 0), 0);
  }
}

let onlyRiaNews = new JFF(...[]);
let onlyTassNews = new JFF(...[]);

subtopic.onsubmit = function (e) {
  if (subtName.value == "") {
    e.preventDefault();
  } else if (
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
      onlyTassNews.sort((a, b) => parseInt(a.quantity) < parseInt(b.quantity));
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
      `У ТАСС ${total} ссылок на сообщения, которых нет у РИА.`
    );
    tassIntro.append(tassUniq);

    subtopic.reset();
  } else if (
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
      onlyRiaNews.sort((a, b) => parseInt(a.quantity) < parseInt(b.quantity));
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
      `У РИА ${total} ссылок на сообщения, которых нет у ТАСС.`
    );
    riaIntro.append(riaUniq);

    subtopic.reset();
  } else if (tassTime.value == false || riaTime.value == false) {
    e.preventDefault();
    let tag = document.createElement("p");
    tag.className = "ital";
    let tex = document.createTextNode(
      `${subtName.value} (${tassRef.value} / ${riaRef.value})`
    );
    tag.append(tex);
    common.append(tag);
    subtopic.reset();
  } else {
    e.preventDefault();
    let tag = document.createElement("p");
    let tex = document.createTextNode(
      `${subtName.value} (${tassTime.value} / ${riaTime.value}) (${tassRef.value} / ${riaRef.value})`
    );
    tag.append(tex);
    common.append(tag);
    subtopic.reset();
  }
};
