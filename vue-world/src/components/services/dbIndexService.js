export default {
  addIndexToDbObject(object, index) {
    const newItem = object.fields;
    Object.defineProperty(newItem, 'databaseId', {
      value: index,
    });
    return newItem;
***REMOVED***
***REMOVED***
