---
emoji: ๐ง๐ปโ๐ป
title: Docker ์ด๋ฏธ์ง ์ข๋ฅ
date: '2022-01-25 23:00:00'
author: Hanboo
tags: Docker Docker_image_version
categories: Docker
---

![images-1.png](images-1.png)

## Docker image ์ข๋ฅ?

์ฒ์ Docker๋ฅผ ์ ํ๊ณ  Docker Hub์์ ์ด๋ฏธ์ง๋ฅผ ๋ฐ์ผ๋ ค๊ณ  ํ๋ค๋ฉด ์์ญ๊ฐ์ง์ docker ์ด๋ฏธ์ง๋ก ์ธํด ์ ํ์ฅ์ ๋ฅผ ์ผ์ผํฌ ํ๋ฅ ์ด ๋งค์ฐ ๋๋ค.

![images-2.png](images-2.png)

์์ ์ฌ์ง์ Python ์ด๋ฏธ์ง๋ฅผ ๋ฐ๊ธฐ ์ํด Docker Hub์ ๋ค์ด๊ฐ๋ฉด ๋ง๋๊ฒ ๋๋ ์ฅ๋ฉด์ด๋ค. ์ซ์๋ Python ๋ฒ์ ์ ์๋ฏธํ๋ ๊ฒ ๊ฐ์๋ฐ ๋ค์ ๋ถ์ ๋จ์ด๋ค์ ๋๋์ฒด ๋ญ ์๋ฏธํ๋ ๊ฑธ๊น? ์ด ๋ง์ ๊ฒ๋ค ์ค์ ์ด๋ค ์ด๋ฏธ์ง๋ฅผ ์ ํํด์ ์จ์ผํ ๊น? ์ด๋ฌํ ๊ถ๊ธ์ฆ์ ๊ฐ์ด ํ์ด๋ณด๋๋ก ํ์.

<br>

---

## ์ด๋ฏธ์ง ์ข๋ฅ

- Full official image
- stretch/buster/jessie/bullseye
- slim
- alpine
- windowsservercore

### Full official image

> name:version

๊ธฐ๋ณธ์ ์ผ๋ก Docker๋ name:version์ ํด๋นํ๋ ๋ฒ์ ์ ์ฌ์ฉํ๋ค. (Base ์ด๋ฏธ์ง)
ํด๋น ๋ฒ์ ์ ์ด๋ฏธ์ง๋ ๊ฐ์ฅ ์ต๊ทผ์ ์์ ์ ์ธ ๋ฐ๋น์ ์ด์ ์ฒด์  ๋ฆด๋ฆฌ์ค๋ฅผ ๊ธฐ๋ฐ์ผ๋ก ํ๋ค.

๊ฐ์ฅ ์์ ์ ์ด๊ธฐ ๋๋ฌธ์ ๋ง์ฝ ํ๋ก์ ํธ๊ฐ ์ด๋ฏธ์ง์ ์ฉ๋์ ๊ตฌ์ ๋ฐ์ง ์๊ณ  ๋น ๋ฅด๊ฒ ๊ตฌํํ๋ ๊ฒ์ ์ด์ ์ ๋๋ ์ํ๋ผ๋ฉด ์ฌ์ฉํ๊ธฐ ๊ฐ์ฅ ์ข์ ์ด๋ฏธ์ง์ด๋ค.

### stretch/buster/jessie/bullseye

> name:version-<span style="color:red">stretch</span>, name:version-<span style="color:red">buster</span>, name:version-<span style="color:red">jessie</span>, name:version-<span style="color:red">bullseye</span>

stretch, buster, jessie, bullseye ํ๊ทธ๊ฐ ๋ถ์ ์ด๋ฏธ์ง์ ๊ฒฝ์ฐ ๋ฐ๋น์ ๋ฆด๋ฆฌ์ค์ ์ฝ๋๋ช์ ์๋ฏธํ๋ค.
๋ฐ๋น์ ๋ฒ์ ์ ์ซ์๋ก 8, 9, 10, 11๋ก ํ๊ธฐ๋ฅผ ํ๊ธฐ๋ ํ์ง๋ง jessie(8), stretch(9), buster(10), bullseye(11)๊ณผ ๊ฐ์ด ์ฝ๋๋ช์ผ๋ก ํ๊ธฐํ๊ธฐ๋ ํ๋ค. ํ์ฌ Stable(์์ ํ) ๋ฐฐํฌํ์ Buster์ด๋ค.

์ผ๋ฐ์ ์ผ๋ก ์์ ํ ๋ฒ์ ์ ์ฌ์ฉํ๋ฉด ๋๊ณ  ๋ง์ฝ์ ์๋ก์ด ํ๋ก์ ํธ๊ฐ ์ด์  ๋ฒ์ ์ ๋ฐ๋น์ ๋ฒ์ ์ด ํ์ํ๋ค๋ฉด ์ ํํด์ ์ฌ์ฉํ๋ฉด ๋๋ค.

### slim

> name:version-<span style="color:red">slim</span>

Silm์ ์คํํ๊ธฐ ์ํ ์ต์ํ์ ํจํค์ง๋ง ์ค์น๋ ์ด๋ฏธ์ง์ด๋ค.
Full official image์์ ์ต์ํ์ ๋ผ์ด๋ธ๋ฌ๋ฆฌ๋ ํจํค์ง๋ง ๋จ๊ธฐ๊ณ  ๋๋จธ์ง๋ฅผ ์ง์ด ๋ค์ด๋ ๋ฒ์ ์ด๋ผ๊ณ  ์๊ฐํ๋ฉด ๋๋ค.

์ฉ๋ ์ด์๊ฐ ์๊ณ  Full ์ด๋ฏธ์ง ๋ฒ์ ์ด ํ์์์ ๋ slim ์ด๋ฏธ์ง๋ฅผ ์ฌ์ฉํ๋ค.

### apline

> name:version-<span style="color:red">alpine</span>

Alpine ์ด๋ฏธ์ง๋ ์ปจํ์ด๋ ๋ด๋ถ์์ ์ฌ์ฉํ๊ธฐ ์ํด ํน๋ณํ ์ ์๋ ์ด์ ์ฒด์ ์ธ <span style="color:red">์ํ์ธ ๋ฆฌ๋์ค ํ๋ก์ ํธ</span>๋ฅผ ๊ธฐ๋ฐ์ผ๋ก ํ๋ค.
๊ฐ์ฅ ์ฉ๋์ด ์๊ณ  ๊ฐ๋ฒผ์ด ์ด๋ฏธ์ง์ด๋ค.

์ฉ๋ ์ด์๊ฐ ํด ๋ ์ฌ์ฉํ๊ธฐ์ ์ถ์ฒ๋๋ ์ด๋ฏธ์ง์ด๋ค.

### windowsservercore

> name:version-<span style="color:red">windowsservercore</span>

Windows Server ๊ธฐ๋ฐ์ผ๋ก ์์ฑ๋ ์ด๋ฏธ์ง์ด๋ค.

<br>

---

## ์ด๋ฏธ์ง ์ ํ ๊ธฐ์ค

๊ทธ๋... ์ด๋ฏธ์ง ์ข๋ฅ๊ฐ ์ ๋ ๊ฒ ์๋ค๋ ๊ฑด ์๊ฒ ์ด. ๊ทธ๋์ ์ด๋ค ์ด๋ฏธ์ง๋ฅผ ์ ํํ๋ผ๊ณ ....??

- ๋น ๋ฅด๊ฒ ๊ตฌํ์ ํด์ผํ๊ณ  ์ฉ๋ ์ ํ์ด ์๊ณ  ํ์คํธํ  ์๊ฐ์ด ๋ง์ง ์์ ๋ - <span style="color:red">Full official image</span>
- ์ฉ๋ ๊ฑฑ์ ์ด ๋๊ณ  ์ต์ํ์ ํจํค์ง๋ง ํ์๋ก ํ  ๋ - <span style="color:red">Slim</span>
- ๊ผผ๊ผผํ๊ฒ ํ์คํธ ํด๋ณผ ์๊ฐ์ด ์๊ณ  ์ฉ๋ ์ ํ์ด ์ฌํ ํ๋ก์ ํธ ์ผ ๋ - <span style="color:red">Apline</span>

<br>

---

## ์ฐธ๊ณ ์๋ฃ

[https://no-easy-dev.tistory.com/entry/Docker-Docker-Image-Differences](https://no-easy-dev.tistory.com/entry/Docker-Docker-Image-Differences)
[https://medium.com/swlh/alpine-slim-stretch-buster-jessie-bullseye-bookworm-what-are-the-differences-in-docker-62171ed4531d](https://medium.com/swlh/alpine-slim-stretch-buster-jessie-bullseye-bookworm-what-are-the-differences-in-docker-62171ed4531d)

```toc

```
