
// groupBy.test.js
const assert = require('assert');
const groupBy = require('./groupBy');

const groupedStrings = groupBy(['bed', 'cat', 'more', 'less'], 'length');
assert.deepStrictEqual(groupedStrings, { '3': ['bed', 'cat'], ' 4': ['more', 'less'] });

const groupedNumbers = groupBy([6.1, 4.2, 6.3], Math.floor);
assert.deepStrictEqual(groupedNumbers, { '4': [4.2], '6': [6.1, 6.3] });

const groupedObjects = groupBy(
  [
    { id: 1, firstName: 'Jane', lastName: 'Doe', email: 'jane.doe@gmail.com' },
    { id: 2, firstName: 'John', lastName: 'Doe', email: 'john.doe@yahoo.com' },
    { id: 3, firstName: 'Jack', lastName: 'Sparrow', email: 'jack.sparrow@gmail.com' }
  ],
  'lastName'
);
assert.deepStrictEqual(
  groupedObjects,
  {
    'Doe': [
      { id: 1, firstName: 'Jane', lastName: 'Doe', email: 'jane.doe@gmail.com' },
      { id: 2, firstName: 'John', lastName: 'Doe', email: 'john.doe@yahoo.com' }
    ],
    'Sparrow': [
      { id: 3, firstName: 'Jack', lastName: 'Sparrow', email: 'jack.sparrow@gmail.com' }
    ]
  }
);

const groupedObjectsByFn = groupBy(
  [
    { id: 1, firstName: 'Jane', lastName: 'Doe', email: 'jane.doe@gmail.com' },
    { id: 2, firstName: 'John', lastName: 'Doe', email: 'john.doe@yahoo.com' },
    { id: 3, firstName: 'Jack', lastName: 'Sparrow', email: 'jack.sparrow@gmail.com' }
  ],
  // Will extract email domain
  (obj) => obj.email.split('@')[1]
);
assert.deepStrictEqual(
  groupedObjectsByFn,
  {
    'gmail.com': [
      { id: 1, firstName: 'Jane', lastName: 'Doe', email: 'jane.doe@gmail.com' },
      { id: 3, firstName: 'Jack', lastName: 'Sparrow', email: 'jack.sparrow@gmail.com' }

    ],
    'yahoo.com': [
      { id: 2, firstName: 'John', lastName: 'Doe', email: 'john.doe@yahoo.com' }
    ]
  }
);