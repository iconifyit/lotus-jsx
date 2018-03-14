/**
 * This class takes a collection of objects (artboars, files, SVG objects) 
 * and a callback and iterates over the colletion, executing the callback on each object.
 * The callback must return the updated object when finished so that additional methods 
 * can be run on the object.
 */
var Iterator = {};

//@TODO: build Iterator class.