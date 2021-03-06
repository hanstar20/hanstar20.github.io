---
emoji: ๐ง๐ปโ๐ป
title: ์ด๋ถ ํ์ (Binary Search)
date: '2022-01-18 23:00:00'
author: Hanboo
tags: ์๊ณ ๋ฆฌ์ฆ ์ด๋ถํ์ ์ด์งํ์
categories: ์๊ณ ๋ฆฌ์ฆ
---

## ์ด๋ถ ํ์์ด๋?

- ๋ฐ์ดํฐ๊ฐ **์ ๋ ฌ๋ผ ์๋ ๋ฐฐ์ด**์์ ํน์ ํ ๊ฐ์ ์ฐพ์๋ด๋ ์๊ณ ๋ฆฌ์ฆ
- ํ์์ ์งํํ  ๋๋ง๋ค ํ์์ ๋ฒ์๋ฅผ ๋ฐ์ผ๋ก ์ค์
- ๋ฐ์ดํฐ ์ฝ์์ด๋ ์ญ์ ์๋ ์ ๋ฆฌํ์ง ์๊ณ , ์ฃผ๋ก ๊ณ ์ ๋ ๋ฐ์ดํฐ์ ๋ํ ํ์์ ์ ๋ฆฌ

## ์ด๋ถ ํ์์ ์ฌ์ฉํ๋ ์ด์ 

- ์์ฐจ ํ์์ ๋นํด **์์ฒญ๋ ์ฑ๋ฅ ์ฐจ์ด**
  ![https://blog.kakaocdn.net/dn/cmgi7N/btrrcu1qb2e/c4Ene1lpoG6aKfG5HoSKU0/img.gif](https://blog.kakaocdn.net/dn/cmgi7N/btrrcu1qb2e/c4Ene1lpoG6aKfG5HoSKU0/img.gif)

- ์๊ฐ ๋ณต์ก๋ - **O(logN)**
  ![binanry-search-1.png](binanry-search-1.png)

## ์ด๋ถ ํ์ ๊ตฌํ

### ๋์ ์๋ฆฌ

- ์ฐ์  ์ ๋ ฌ์ ํด์ผ ํจ
- left์ right๋ก mid ๊ฐ ์ค์ 
- mid์ ๋ด๊ฐ ๊ตฌํ๊ณ ์ ํ๋ ๊ฐ๊ณผ ๋น๊ต
- ๊ตฌํ  ๊ฐ์ด mid๋ณด๋ค ๋์ผ๋ฉด : left = mid+1 ๊ตฌํ  ๊ฐ์ด mid๋ณด๋ค ๋ฎ์ผ๋ฉด : right = mid - 1
- left > right๊ฐ ๋  ๋๊น์ง ๊ณ์ ๋ฐ๋ณตํ๊ธฐ

### ์์ค ์ฝ๋ (Python)

```python
def BinarySearch(arr, target):
    left = 0
    right = len(arr) - 1

    while left < right:
        mid = (left + right) // 2
        if arr[mid] < target:
            left = mid + 1
        else:
            right = mid
    return (left + right) / 2
```

## Lower Bound / Upper Bound

### ์๋ฏธ

- **Lower Bound**: ์ํ๋ ๊ฐ N <span style="color:red">์ด์</span>์ด ์ฒ์ ๋์ค๋ ์์น
- **Upper Bound**: ์ํ๋ ๊ฐ N์ ์ฒ์์ผ๋ก <span style="color:red">์ด๊ณผ</span>ํ๋ ์์น

### ํ์ฉ

Lower Bound์ Upper Bound๋ฅผ ์ด์ฉํ์ฌ ํด๋น ๋ฆฌ์คํธ์ ์ํ๋ ๊ฐ N์ ๊ฐฏ์๋ฅผ ํ์ธํ  ์ ์๋ค.

- Lower Bound == Upper Bound: ํด๋น ๋ฆฌ์คํธ์ ์ํ๋ ๊ฐ N์ด ์กด์ฌํ์ง ์๋๋ค.
- Upper Bound - Lower Bound = 1 : ํด๋น ๋ฆฌ์คํธ์ ์ํ๋ ๊ฐ N์ด ํ ๊ฐ ์กด์ฌํ๋ค.
- Upper Bound - Lower Bound = K : ํด๋น ๋ฆฌ์คํธ์ ์ํ๋ ๊ฐ N์ด K ๊ฐ ์กด์ฌํ๋ค.

**Lower Bound๊ฐ ๊ฒฐ๊ตญ ์ด๋ถ ํ์์ ์ํ๋ <span style="color:red">๊ฒฐ๊ณผ๊ฐ</span>์ด ๋  ์ ์๋ค.**

## Python - bisect

ํ์ด์ฌ์๋ ๋ด์ฅํจ์๋ก bisect๋ฅผ ์ง์ํ๊ณ  ์๋ค. bisect๋ฅผ ์ด์ฉํ์ฌ ์ฝ๊ฒ lower bound, upper bound๋ฅผ ๊ตฌํํ  ์ ์๋ค.

```python
import bisect

_list = [23, 24, 25, 26, 45, 45, 45, 57, 58, 61, 64, 68]

# lower bound ๊ตฌํ๊ธฐ
print(bisect.bisect_left(_list, 45))
# 4

# upper bound ๊ตฌํ๊ธฐ
print(bisect.bisect_right(_list, 45))
# 7

# target ๊ฐ ๊ฐฏ์ ๊ตฌํ๊ธฐ
print(bisect.bisect_right(_list, 45) - bisect.bisect_left(_list, 45))
# 3
```

### ์ด๋ถ ํ์ ์ฐ์ต ๋ฌธ์ 

- [์ ์ฐพ๊ธฐ (1920)](https://www.acmicpc.net/problem/1920)
- [Sort ๋ง์คํฐ ๋ฐฐ์งํ์ ํ๊ณ์ (20551)](https://www.acmicpc.net/problem/20551)
- [์ซ์ ์นด๋ (10815)](https://www.acmicpc.net/problem/10815)
- [๋๋ฌด ์๋ฅด๊ธฐ (2805)](https://www.acmicpc.net/problem/2805)
- [๋์  ์๋ฅด๊ธฐ (1654)](https://www.acmicpc.net/problem/1654)
- [์ง๊ฒ๋ค๋ฆฌ (11561)](https://www.acmicpc.net/problem/11561)
- [ํ๋ญํ๋ญ (14627)](https://www.acmicpc.net/problem/14627)
- [๋งฅ์ฃผ ์ถ์  (17503)](https://www.acmicpc.net/problem/17503)

```toc

```
