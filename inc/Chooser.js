/**
 * @author Scott Lewis <scott@vectoricons.net>
 * @license The MIT License (MIT)
 * @copyright 2017 Scott Lewis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */

/**
 * @type {Logger}
 */
var logger = new Logger($.fileName, "/var/log/");

/**
 *
 * @type {{}}
 */
var Chooser = {};

/**
 * Open a file dialog.
 * @param   {File} file           The file object
 * @param   {String} title        The dialog title
 * @param   {String} file_filter  The file filter pattern
 * @returns {*}
 */
Chooser.chooseFile = function( oFile, title, file_filter ) {
    if (! oFile instanceof File) var oFile = new File();
    if (! title) var title  = LANG.CHOOSE_FILE;
    if (! filter) var filter = "*";
    return oFile.openDlg(
        title,
        file_filter,
        false
    );
};

/**
 * Open a file chooser to select a folder.
 * @param {String}  title           The dialog title/message.
 * @param {Folder}  baseFolder      The basefolder from where to start.
 * @returns {*}
 */
Chooser.chooseFolder = function( title, baseFolder ) {
    return Folder.selectDialog( title, baseFolder );
};