var FileSystem = {};

/**
 * Logging for this script.
 * @param {string}  path        The file path
 * @param {string}  txt         The text to write
 * @param {bool}    replace     Replace the file
 * @return void
 */
FileSystem.write_file = function( path, txt, replace ) {
    try {
        var file = new File( path );
        if (replace && file.exists) {
            file.remove();
            file = new File( path );
        }
        file.open("e", "TEXT", "????");
        file.seek(0,2);
        $.os.search(/windows/i)  != -1 ? file.lineFeed = 'windows'  : file.lineFeed = 'macintosh';
        file.writeln(txt);
        file.close();
    }
    catch(ex) {
        try { file.close(); }
        catch(ex) {/* Exit Gracefully*/}
    }
};

/**
 * Writes a file and calls a callback.
 * @param   {string}    path        The file path
 * @param   {string}    txt         The text to write
 * @param   {function}  callback    The callback to execute.
 * @returns {*}                     The result of the callback.
 */
FileSystem.write_and_call = function( path, txt, callback ) {
    try {
        var file = new File( path );
        if (file.exists) {
            file.remove();
            file = new File( path );
        }
        file.open("e", "TEXT", "????");
        file.seek(0,2);
        $.os.search(/windows/i)  != -1 ? file.lineFeed = 'windows'  : file.lineFeed = 'macintosh';
        file.writeln(txt);
        file.close();
        return callback.call(this, file);
    }
    catch(ex) {
        try {
            file.close();
        }
        catch(ex) {/* Exit Gracefully*/}
        throw ex;
    }
};

/**
 *
 * @param {string}  path
 * @param {object}  json
 * @param {bool}    replace
 */
Utils.write_json_file = function( path, json, replace ) {
    try {
        Utils.write_file(path, Utils.objectToString(json), replace);
    }
    catch(ex) {
        Utils.logger(ex, $.line, $.fileName);
    }
};

/**
 * Reads the contents of a file.
 * @param   {string}  filepath
 * @returns {string}
 */
File.read_file = function( filepath ) {

    var content = "";

    var theFile = new File(filepath);

    if (theFile) {

        try {
            if (theFile.alias) {
                while (theFile.alias) {
                    theFile = theFile.resolve().openDlg(
                        LANG.CHOOSE_FILE,
                        "",
                        false
                    );
                }
            }
        }
        catch(ex) {
            dialog.presetsMsgBox.text = ex.message;
        }

        try {
            theFile.open('r', undefined, undefined);
            if (theFile !== '') {
                content = theFile.read();
                theFile.close();
            }
        }
        catch(ex) {

            try { theFile.close(); }catch(ex){};
            Utils.logger(ex, $.line, $.fileName);
        }
    }
    return content;
};

/**
 *
 * @param {string}  filepath
 * @returns {*}
 */
FileSystem.read_json_file = function(filepath) {
    var contents, result;
    try {
        if ( contents = Utils.read_file( filepath ) ) {
            result = JSON.parse(contents);
            if ( typeof(result) != 'object') {
                result = null;
            }
        }
    }
    catch(ex) {
        Utils.logger(ex, $.line, $.fileName);
    }
    return result;
};