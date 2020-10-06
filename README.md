# Dojo `groupBy`

Inspiration : la méthode [groupBy](https://lodash.com/docs/4.17.15#groupBy) de [lodash](https://lodash.com/).

## Spec

La méthode `groupBy` permet de grouper les éléments d'un tableau selon :

* une certaine propriété,
* un critère défini par une fonction

## Exemples

```javascript
const groupedStrings = groupBy(['bed', 'cat', 'more', 'less'], 'length');
console.log(groupedStrings); // { '3': ['bed', 'cat'], ' 4': ['more', 'less'] }


const groupedObjects = groupBy(
  [
    { id: 1, firstName: 'Jane', lastName: 'Doe', email: 'jane.doe@gmail.com' },
    { id: 2, firstName: 'John', lastName: 'Doe', email: 'john.doe@yahoo.com' },
    { id: 3, firstName: 'Jack', lastName: 'Sparrow', email: 'jack.sparrow@gmail.com' }
  ],
  'lastName'
);
console.log(groupBy(groupedObjects));
/*
{
  'Doe': [
    { id: 1, firstName: 'Jane', lastName: 'Doe', email: 'jane.doe@gmail.com' },
    { id: 2, firstName: 'John', lastName: 'Doe', email: 'john.doe@yahoo.com' }
  ],
  'Sparrow': [
    { id: 3, firstName: 'Jack', lastName: 'Sparrow', email: 'jack.sparrow@gmail.com' }
  ]
}
*/

const groupedObjectsByFn = groupBy(
  [
    { id: 1, firstName: 'Jane', lastName: 'Doe', email: 'jane.doe@gmail.com' },
    { id: 2, firstName: 'John', lastName: 'Doe', email: 'john.doe@yahoo.com' },
    { id: 3, firstName: 'Jack', lastName: 'Sparrow', email: 'jack.sparrow@gmail.com' }
  ],
  // Will extract email domain
  (obj) => obj.email.split('@')[1]
);
console.log(groupBy(groupedObjectsByFn));
/*
{
  'gmail.com': [
    { id: 1, firstName: 'Jane', lastName: 'Doe', email: 'jane.doe@gmail.com' },
    { id: 3, firstName: 'Jack', lastName: 'Sparrow', email: 'jack.sparrow@gmail.com' }

  ],
  'yahoo.com': [
    { id: 2, firstName: 'John', lastName: 'Doe', email: 'john.doe@yahoo.com' }
  ]
}
*/
```

## Squelette

```javascript
// groupBy.js

function groupBy(arr, criterion) {

}

module.exports = groupBy;
```

## Test

Executer avec `node groupBy.test`.

```javascript
// groupBy.test.js
const assert = require('assert');

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
```