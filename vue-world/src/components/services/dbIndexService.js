export default {
  addIndexToDbObject(object, index) {
    return {
      ...object.fields,
      databaseId: {
        value: index,
        iterable: false,
      },
    };
  },
};
