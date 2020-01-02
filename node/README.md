# Spiral kata

Description found in [Coding Wars](https://www.codewars.com/kata/536a155256eb459b8700077e/train/javascript)

## Problem Description

> Classic definition: A spiral is a curve which emanates from a central point, getting progressively farther away as it revolves around the point.

Your objective is to complete a function `createSpiral(N)` that receives an integer `N` and returns an `NxN` two-dimensional array with numbers `1` through `NxN` represented as a clockwise spiral.

Return an empty array if `N < 1` or `N` is not int / number

Examples:

```javascript
N = 1 Output: [[1]]
```

```bash
1
```

```javascript
N = 3 Output: [[1,2,3],[8,9,4],[7,6,5]]
```

```bash
1    2    3
8    9    4
7    6    5
```

```javascript
N = 4 Output: [[1,2,3,4],[12,13,14,5],[11,16,15,6],[10,9,8,7]]
```

```bash
1   2   3   4
12  13  14  5
11  16  15  6
10  9   8   7
```

```javascript
N = 5 Output: [[1,2,3,4,5],[16,17,18,19,6],[15,24,25,20,7],[14,23,22,21,8],[13,12,11,10,9]]
```

```bash
1   2   3   4   5
16  17  18  19  6
15  24  25  20  7
14  23  22  21  8
13  12  11  10  9
```