function scoreToHTML (scoreStr) {
    let scoreArr = JSON.parse(scoreStr);
    let html = `<table>\n`;
    html += `  <tr><th>name</th><th>score</th></tr>\n`;
    for (let scr of scoreArr) {
        html += `  <tr><td>${htmlEscape(scr.name)}</td><td>${htmlEscape(scr.score)}</td></tr>\n`;
    }
    html += `</table>`;
    return html;

    function htmlEscape(text) {
        text = new String(text);
        let map = { '"': '&quot;', '&': '&amp;',
            "'": '&#39;', '<': '&lt;', '>': '&gt;' };
        return text.replace(/[\"&'<>]/g, ch => map[ch]);
    }
}

console.log(
    scoreToHTML(['[{"name":"Pesho","score":479},' +
                 '{"name":"Gosho","score":205},{"name":"Pavel & Anchve","score":105}]'])
);

//<table>
//<tr><th>name</th><th>score</th>
//<tr><td>Pesho</td><td>479</td></tr>
//<tr><td>Gosho</td><td>205</td></tr>
//</table>
