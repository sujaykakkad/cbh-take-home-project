# Refactoring

You've been asked to refactor the function `deterministicPartitionKey` in [`dpk.js`](dpk.js) to make it easier to read and understand without changing its functionality. For this task, you should:

1. Write unit tests to cover the existing functionality and ensure that your refactor doesn't break it. We typically use `jest`, but if you have another library you prefer, feel free to use it.
2. Refactor the function to be as "clean" and "readable" as possible. There are many valid ways to define those words - use your own personal definitions, but be prepared to defend them. Note that we do like to use the latest JS language features when applicable.
3. Write up a brief (~1 paragraph) explanation of why you made the choices you did and why specifically your version is more "readable" than the original.

You will be graded on the exhaustiveness and quality of your unit tests, the depth of your refactor, and the level of insight into your thought process provided by the written explanation.

## Your Explanation Here
* The constants `
const TRIVIAL_PARTITION_KEY = "0";
const MAX_PARTITION_KEY_LENGTH = 256;
`
have been removed from function definition as these values will remain static 

* The canditate variable is being given default value so no need to check for value in candidate and that entire nested  code
    ```
    if (candidate) {
        if (typeof candidate !== "string") {
          candidate = JSON.stringify(candidate);
        }
    } else {
        candidate = TRIVIAL_PARTITION_KEY;
    }
    ```

    can be reduced to 
    ```
     candidate = TRIVIAL_PARTITION_KEY;
    {}.
     .
     if (typeof candidate !== "string") {
        candidate = JSON.stringify(candidate);
     }
     ```
* There are around 7 test cases written which will cover the entire function and almost all test cases along various inputs like `undefined, {}, {partitionKey: {}}, {partitionKey: '12443'}, {partitionKey: '<string-more-than-256-characters>'}, {partitionKey: <object>}, {partitionKey: <object-length-more-than-256-characters>}`