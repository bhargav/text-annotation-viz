/* eslint no-console:0 */

const registery = {};
const supportedViews = [];

const PREFIX = "edu.illinois.cs.cogcomp.core.datastructures.textannotation.";

var canRender = function(viewType) {
	return registery.hasOwnProperty(viewType);
};

var registerRenderer = function(viewType, renderer) {
	registery[viewType] = renderer;
	supportedViews.push(viewType);
};

var getRenderer = function(viewType) {
	return registery[viewType];
};

// Initialization - Register all renderers
const spanLabelViewRenderer = require('./renderers/spanLabelViewRenderer');
const treeViewRenderer = require('./renderers/treeViewRenderer');

registerRenderer(PREFIX + "PredicateArgumentView", spanLabelViewRenderer);
registerRenderer(PREFIX + "SpanLabelView", spanLabelViewRenderer);
registerRenderer(PREFIX + "TokenLabelView", spanLabelViewRenderer);
registerRenderer(PREFIX + "TreeView", treeViewRenderer);

module.exports = {
	canRender: canRender,
	getRenderer: getRenderer,
	supportedTypes: supportedViews
};