// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require('vscode');

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	// console.log('Congratulations, your extension "vue-find-partner-compoent" is now active!');

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with  registerCommand
	// The commandId parameter must match the command field in package.json
	let disposable = vscode.commands.registerCommand('vue-find-partner-compoent.findPartnerCompoent', function () {

		// get current file name without suffix
		const editor = vscode.window.activeTextEditor;
		const fileSuffix = editor.document.fileName.split('.').pop();
		const fileName = editor.document.fileName.split('/').pop().split('.')[0];

		if (fileSuffix !== 'vue') {
			vscode.window.showErrorMessage('is not a vue file!');
			return;
		}
		
		// In the global search, search for '<fileName'
		vscode.commands.executeCommand('workbench.action.findInFiles', {
			query: `<${fileName}`,
			triggerSearch: true,
			matchWholeWord: true,
			isCaseSensitive: true,
			isRegex: false,
			filesToInclude: '',
			filesToExclude: '',
			onlyOpenEditors: false,
			isSmartCase: true,
			preserveCase: true
		});
	});

	context.subscriptions.push(disposable);
}

// This method is called when your extension is deactivated
function deactivate() {}

module.exports = {
	activate,
	deactivate
}
