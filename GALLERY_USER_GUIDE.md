# 📸 Gallery 관리 사용자 가이드

AgTech Research Lab 웹사이트의 Gallery를 쉽게 관리하는 방법을 설명합니다.

---

## 🎯 개요

이 시스템을 사용하면 **코딩 없이** Cursor AI를 통해 Gallery에 사진을 추가/수정/삭제할 수 있습니다.

**필요한 것:**
- ✅ Cursor AI (무료 버전 OK)
- ✅ GitHub 계정 (agtechresearch 저장소 Write 권한)
- ✅ 추가할 이미지 파일

---

## 📋 빠른 시작 (3단계)

### 1단계: 이미지 업로드
`images/gallery/` 폴더에 사진 파일을 넣으세요.

**예시:**
```
images/gallery/
  └── conference_2024.jpg  ← 여기에 추가
```

### 2단계: 요청 작성
`GALLERY_REQUESTS.md` 파일을 열고 정보를 입력하세요.

**예시:**
```markdown
### 요청 1: [추가] 학회 발표
제목: 2024 농업공학회 발표
설명: 스마트팜 센서 연구 발표
카테고리: event
이미지파일명: conference_2024.jpg
날짜: 2024-11-20
게시: true
```

### 3단계: Cursor AI 실행
Cursor AI 채팅창에 다음을 입력:
```
GALLERY_REQUESTS.md의 대기 중인 요청 처리해줘
```

**끝!** 1-2분 후 웹사이트에서 확인하세요.

---

## 📖 상세 가이드

### 이미지 준비하기

**1. 이미지 요구사항**
- 형식: `.jpg`, `.png`, `.JPG` 등
- 권장 크기: 1920x1080px 이하
- 파일명: 영문과 숫자만 사용 (공백 X)
  - ✅ 좋은 예: `conference_2024.jpg`, `lab-photo-01.png`
  - ❌ 나쁜 예: `학회 사진.jpg`, `photo (1).jpg`

**2. 업로드 위치**
```
agtechresearch.github.io/
  └── images/
      └── gallery/  ← 여기에 업로드
```

**방법:**
- GitHub Desktop 사용: 파일 드래그 앤 드롭
- VS Code/Cursor: 탐색기에서 복사-붙여넣기
- GitHub 웹: Upload files 버튼 클릭

---

### 요청 작성하기

**`GALLERY_REQUESTS.md` 파일 열기**

파일 위치: 프로젝트 루트 폴더

**작성 양식:**
```markdown
### 요청 X: [작업타입] 간단한 제목
제목: 실제 표시될 제목
설명: 사진 설명 (1-2줄)
카테고리: lab 또는 event 또는 research
이미지파일명: 파일명.jpg
날짜: YYYY-MM-DD
게시: true
```

**필드 설명:**

| 필드 | 설명 | 예시 |
|------|------|------|
| **제목** | Gallery에 표시될 제목 | `2024 농업공학회 발표` |
| **설명** | 짧은 설명 | `스마트팜 센서 연구 발표` |
| **카테고리** | `lab`, `event`, `research` 중 하나 | `event` |
| **이미지파일명** | 업로드한 파일명 (정확히) | `conference_2024.jpg` |
| **날짜** | YYYY-MM-DD 형식 | `2024-11-20` |
| **게시** | `true` (공개) 또는 `false` (비공개) | `true` |

---

### 카테고리 선택

**lab (연구실)**
- 연구실 내부 사진
- 실험 장비
- 연구 환경

**event (행사)**
- 학회 발표
- 세미나
- 워크샵
- 단체 활동

**research (연구 활동)**
- 현장 조사
- 실험 과정
- 데이터 수집

---

### 작업 타입

**[추가]** - 새 사진 추가
```markdown
### 요청 1: [추가] 학회 발표
제목: 2024 ASABE 발표
설명: 국제 농업공학회 구두 발표
카테고리: event
이미지파일명: asabe_2024.jpg
날짜: 2024-07-28
게시: true
```

**[수정]** - 기존 사진 정보 수정
```markdown
### 요청 2: [수정]
이미지파일명: asabe_2024.jpg
제목: 2024 ASABE 국제학회 발표
설명: 농업공학 국제학회 구두발표 및 포스터 세션
```
※ 수정할 항목만 작성하면 됩니다

**[삭제]** - 사진 제거
```markdown
### 요청 3: [삭제]
이미지파일명: old_photo.jpg
```

---

## 💡 실전 예시

### 예시 1: 학회 사진 추가

**상황:** 2024년 11월 20일 농업공학회에서 발표한 사진을 추가

**1단계: 이미지 업로드**
- 파일: `images/gallery/agtech_conf_2024.jpg`

**2단계: GALLERY_REQUESTS.md 작성**
```markdown
### 요청 1: [추가] 농업공학회 발표
제목: 2024 한국농업공학회 추계학술대회
설명: 스마트팜 IoT 센서 네트워크 연구 발표
카테고리: event
이미지파일명: agtech_conf_2024.jpg
날짜: 2024-11-20
게시: true
```

**3단계: Cursor AI 실행**
```
GALLERY_REQUESTS.md 처리해줘
```

---

### 예시 2: 여러 사진 한번에 추가

**1단계: 이미지 업로드**
```
images/gallery/
  ├── lab_equipment_2024.jpg
  ├── field_research_01.jpg
  └── seminar_speaker.jpg
```

**2단계: GALLERY_REQUESTS.md 작성**
```markdown
### 요청 1: [추가] 연구실 장비
제목: 최신 연구 장비 도입
설명: AI 기반 작물 분석 시스템
카테고리: lab
이미지파일명: lab_equipment_2024.jpg
날짜: 2024-11-15
게시: true

### 요청 2: [추가] 현장 연구
제목: 스마트팜 현장 조사
설명: 충남 스마트팜 데이터 수집
카테고리: research
이미지파일명: field_research_01.jpg
날짜: 2024-10-28
게시: true

### 요청 3: [추가] 세미나
제목: 초청 세미나
설명: AI 농업 기술 특강
카테고리: event
이미지파일명: seminar_speaker.jpg
날짜: 2024-11-05
게시: true
```

**3단계: Cursor AI 실행**
```
GALLERY_REQUESTS.md의 모든 요청 처리해줘
```

---

## ✅ 확인 방법

**1. 로컬 확인**
- `_data/gallery/` 폴더에 JSON 파일 생성 확인
- 파일명 예: `2024-11-20-농업공학회-발표.json`

**2. 웹사이트 확인**
- 1-2분 후 https://agtechresearch.github.io/gallery.html 접속
- 새로 추가한 사진이 보이는지 확인

**3. Git 확인**
- GitHub Desktop에서 commit 확인
- 커밋 메시지: "Add gallery item: ..."

---

## ⚠️ 문제 해결

### 문제 1: 사진이 안 보여요
**원인:** 이미지 파일명 오타
**해결:**
1. `images/gallery/` 폴더에서 정확한 파일명 확인
2. GALLERY_REQUESTS.md에서 파일명 수정
3. 다시 Cursor AI 실행

### 문제 2: Cursor AI가 오류를 냅니다
**원인:** 요청 형식 오류
**해결:**
1. GALLERY_REQUESTS.md 형식 확인
2. 필수 필드 누락 확인:
   - 제목, 설명, 카테고리, 이미지파일명, 날짜, 게시
3. 날짜 형식 확인: `2024-11-20` (YYYY-MM-DD)

### 문제 3: Push 권한 오류
**원인:** GitHub 권한 없음
**해결:**
1. GitHub 계정이 agtechresearch organization 멤버인지 확인
2. Repository Write 권한 확인
3. Git 인증 다시 설정

### 문제 4: 여러 개 중 일부만 처리됨
**원인:** 특정 요청에 오류
**해결:**
1. GALLERY_REQUESTS.md의 "처리 완료" 섹션 확인
2. 처리 안 된 요청 수정
3. 다시 Cursor AI 실행

---

## 🚀 고급 팁

### 팁 1: 날짜 순서
최신 사진이 먼저 표시됩니다. 날짜를 정확히 입력하세요.

### 팁 2: 비공개 사진
`게시: false`로 설정하면 Gallery에 표시되지 않습니다.

### 팁 3: 일괄 수정
여러 사진의 카테고리를 한번에 변경할 수 있습니다:
```markdown
### 요청 1: [수정]
이미지파일명: photo1.jpg
카테고리: event

### 요청 2: [수정]
이미지파일명: photo2.jpg
카테고리: event
```

### 팁 4: 백업
중요한 사진은 원본을 다른 곳에 백업하세요.

---

## 📞 도움 요청

**문제가 해결되지 않으면:**
1. `GALLERY_REQUESTS.md`에 문제 상황 메모
2. GitHub Issue 생성
3. 관리자에게 문의

**자주 묻는 질문:**
- Q: 이미지 크기 제한이 있나요?
  - A: 권장 1920x1080px, 최대 5MB

- Q: 한글 파일명 가능한가요?
  - A: 가능하지만 영문 권장 (호환성)

- Q: 동영상도 추가할 수 있나요?
  - A: 현재는 이미지만 지원

---

## 📚 참고 자료

**관련 파일:**
- `GALLERY_REQUESTS.md` - 요청 작성 (여기에 작성)
- `CURSOR_GUIDE.md` - Cursor AI 가이드 (AI용, 고급 사용자)
- `gallery.html` - Gallery 페이지
- `js/gallery.js` - Gallery 동작 스크립트

**웹사이트:**
- Gallery 페이지: https://agtechresearch.github.io/gallery.html
- GitHub Repository: https://github.com/agtechresearch/agtechresearch.github.io

---

## ✨ 요약

```
1. 이미지 넣기 → images/gallery/
2. 정보 작성 → GALLERY_REQUESTS.md
3. AI 실행 → "GALLERY_REQUESTS.md 처리해줘"
4. 확인 → 웹사이트에서 확인
```

**이게 전부입니다! 🎉**
