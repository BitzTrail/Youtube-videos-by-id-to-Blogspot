/* exported doGet */

/**
 * The Server
 * @param {object} params doGet's trigger params
 * @returns {GoogleAppsScript.HTML.HtmlOutput} HTML output
 */
function doGet(params) {
  return HtmlService.createTemplateFromFile('index').evaluate();
}
