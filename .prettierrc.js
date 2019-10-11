const prettierRcBase = require("@itsjonq/zero/prettier");

module.exports = Object.assign({}, prettierRcBase, {
	trailingComma: "all",
	tabWidth: 4,
	semi: true,
	singleQuote: false,
	useTabs: true,
});
