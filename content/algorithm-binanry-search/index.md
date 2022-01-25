---
emoji: 🧑🏻‍💻
title: 이분 탐색 (Binary Search)
date: '2022-01-18 23:00:00'
author: Hanboo
tags: 알고리즘 이분탐색 이진탐색
categories: 알고리즘
---

## 이분 탐색이란?

- 데이터가 **정렬돼 있는 배열**에서 특정한 값을 찾아내는 알고리즘
- 탐색을 진행할 때마다 탐색의 범위를 반으로 줄임
- 데이터 삽입이나 삭제에는 유리하지 않고, 주로 고정된 데이터에 대한 탐색에 유리

## 이분 탐색을 사용하는 이유

- 순차 탐색에 비해 **엄청난 성능 차이**
  ![https://blog.kakaocdn.net/dn/cmgi7N/btrrcu1qb2e/c4Ene1lpoG6aKfG5HoSKU0/img.gif](https://blog.kakaocdn.net/dn/cmgi7N/btrrcu1qb2e/c4Ene1lpoG6aKfG5HoSKU0/img.gif)

- 시간 복잡도 - **O(logN)**
  ![binanry-search-1.png](binanry-search-1.png)

## 이분 탐색 구현

### 동작 원리

- 우선 정렬을 해야 함
- left와 right로 mid 값 설정
- mid와 내가 구하고자 하는 값과 비교
- 구할 값이 mid보다 높으면 : left = mid+1 구할 값이 mid보다 낮으면 : right = mid - 1
- left > right가 될 때까지 계속 반복하기

### 소스 코드 (Python)

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

### 의미

- **Lower Bound**: 원하는 값 N <span style="color:red">이상</span>이 처음 나오는 위치
- **Upper Bound**: 원하는 값 N을 처음으로 <span style="color:red">초과</span>하는 위치

### 활용

Lower Bound와 Upper Bound를 이용하여 해당 리스트에 원하는 값 N의 갯수를 확인할 수 있다.

- Lower Bound == Upper Bound: 해당 리스트에 원하는 값 N이 존재하지 않는다.
- Upper Bound - Lower Bound = 1 : 해당 리스트에 원하는 값 N이 한 개 존재한다.
- Upper Bound - Lower Bound = K : 해당 리스트에 원하는 값 N이 K 개 존재한다.

**Lower Bound가 결국 이분 탐색의 원하는 <span style="color:red">결과값</span>이 될 수 있다.**

## Python - bisect

파이썬에는 내장함수로 bisect를 지원하고 있다. bisect를 이용하여 쉽게 lower bound, upper bound를 구현할 수 있다.

```python
import bisect

_list = [23, 24, 25, 26, 45, 45, 45, 57, 58, 61, 64, 68]

# lower bound 구하기
print(bisect.bisect_left(_list, 45))
# 4

# upper bound 구하기
print(bisect.bisect_right(_list, 45))
# 7

# target 값 갯수 구하기
print(bisect.bisect_right(_list, 45) - bisect.bisect_left(_list, 45))
# 3
```

### 이분 탐색 연습 문제

- [수 찾기 (1920)](https://www.acmicpc.net/problem/1920)
- [Sort 마스터 배지훈의 후계자 (20551)](https://www.acmicpc.net/problem/20551)
- [숫자 카드 (10815)](https://www.acmicpc.net/problem/10815)
- [나무 자르기 (2805)](https://www.acmicpc.net/problem/2805)
- [랜선 자르기 (1654)](https://www.acmicpc.net/problem/1654)
- [징검다리 (11561)](https://www.acmicpc.net/problem/11561)
- [파닭파닭 (14627)](https://www.acmicpc.net/problem/14627)
- [맥주 축제 (17503)](https://www.acmicpc.net/problem/17503)

```toc

```
