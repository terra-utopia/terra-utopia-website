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
    // contentHtml = "<p>Lalala \\citep{https://example.com} \\citep{https://google.com} lalala.</p>";
    let citationCounter = 1;
    let citations = [/*
        { citationId: string, citationUrl: string, citationCounter: number(1-based-index) },
        ...
    */];
    contentHtml = contentHtml.replace(/ ?\\citep{([^}]+)}/g, (match, citationUrl) => {
        const existingCitation = citations.filter(c => c.citationUrl === citationUrl)[0];  // `undefined` most of the times
        if (existingCitation) {
            return `<sup><a href="#${existingCitation.citationId}">[${existingCitation.citationCounter}]</a></sup>`;
        } else {
            // we have to make a new citation object
            let citationId = `citation-${ nanoid.customAlphabet('abcdefghijklmnopqrstuvwxyz0123456789', 10)() }`;
            citations.push({ citationId, citationUrl, citationCounter });
            return `<sup><a href="#${citationId}">[${citationCounter++}]</a></sup>`;
        }
    });
    contentHtml += `
        <table>
            <tbody>
                ${(() => {
                    let tableHtml = "";
                    citations.forEach(({ citationId, citationUrl, citationCounter }) => {
                        tableHtml += `<tr>
                            <td>[${citationCounter}]</td>
                            <td>
                                <div class="citation-anchor" id="${citationId}"></div>
                                <a href="${citationUrl}" target="_blank">${citationUrl}</a>
                            </td>
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


/**
 * @param {string} str the input string
 * @returns {string} the input string with a trailing slash appended (if it had not existed in the first place)
 */
export function ensureTrailingSlash(str) {
    return str.replace(/(?<!\/)$/, '/')
}
