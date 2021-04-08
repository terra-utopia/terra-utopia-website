import * as nanoid from 'nanoid';


/**
 * input: `<p>Lalala \\citep{https://example.com} lalala.</p>`
 * output: `<p>Lalala <a href="#citation-tzghöjäakgölsk">[1]</a> lalala.</p>`
 * `<table>`
 *   `<tbody>`
 *     `<tr id="citation-tzghöjäakgölsk">`
 *       `<td>[1]</td>`
 *       `<td><a ..>..</a></td>`
 *     `</tr>`
 *    `</tbody>`
 * `</table>`
 * @param {string} contentHtml
 * @returns {string}
 */
export function enhanceCitations(contentHtml) {
    // contentHtml = "<p>Lalala \\citep{https://example.com} \\citep{https://google.com} lalala.</p>"; // XXX
    let citationCounter = 1;
    let citations = [];
    contentHtml = contentHtml.replace(/\\citep{([^}]+)}/g, (match, citationUrl) => {
        let citationId = `citation-${ nanoid.customAlphabet('abcdefghijklmnopqrstuvwxyz0123456789', 10)() }`;
        // let citationId = `citation-${citationCounter}`; // XXX
        citations.push({ citationId, citationUrl });
        return `<a href="#${citationId}">[${citationCounter++}]</a>`;
    });
    contentHtml += `
        <table>
            <tbody>
                ${(() => {
                    let tableHtml = "";
                    citations.forEach(({ citationId, citationUrl }, i) => {
                        const citationCounter = i + 1;
                        tableHtml += `<tr id="${citationId}">
                            <td>[${citationCounter}]</td>
                            <td><a href="${citationUrl}" target="_blank">${citationUrl}</a></td>
                        </tr>`;
                    });
                    return tableHtml;
                })()}
            </tbody>
        </table>
    `;
    return contentHtml;
}


export function forceReflow() {
    window.getComputedStyle(window.document.body).getPropertyValue('height');  // the reflow is only triggered when you access a property ('width' in our case) on the 'CSSStyleDeclaration' object
}
