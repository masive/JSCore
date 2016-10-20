function fromJSONToHTMLTable(input){
    let html = `<table>\n`;
    let data = JSON.parse(input);
    html += `  <tr>`;
    let objKey = [];
    for (let key of Object.keys(data[0])) {
        html += `<th>${key}</th>`;
        objKey.push(key);

    }
    html += `</tr>\n`;
    for (let element of data) {
        html += `  <tr>`;
        for (let keyName of objKey) {
            html += `<td>${htmlEscape(element[keyName])}</td>`
        }
        html += `</tr>\n`;
    }

    function htmlEscape(text) {
        text = new String(text);
        let map = { '"': '&quot;', '&': '&amp;',
            "'": '&#39;', '<': '&lt;', '>': '&gt;' };
        return text.replace(/[\"&'<>]/g, ch => map[ch]);
    }
    return html += `</table>`
}

console.log(
    fromJSONToHTMLTable(['[{"Name":"Tomatoes & Chips","Price":2.35},' +
                     '{"Name":"J&B Chocolate","Price":0.96}]'])
);
//for (let key of Object.keys(arr[0]))
