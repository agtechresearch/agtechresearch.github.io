# 갤러리 관리 가이드
## AgTech Research Lab - 간단한 갤러리 이미지 추가 방법

**GitHub Pages 전용 - 로컬 관리 도구 사용**

---

## 🚀 빠른 시작

### 방법: 로컬 HTML 도구 사용 (가장 쉬움!)

이 방법은:
- ✅ 코딩 지식 불필요
- ✅ 브라우저에서 바로 실행
- ✅ 드래그 앤 드롭으로 이미지 추가
- ✅ JSON 코드 자동 생성
- ✅ GitHub Desktop으로 간단히 커밋

---

## 📝 사용 방법

### Step 1: 관리 도구 열기

1. 프로젝트 폴더에서 **`gallery-manager.html`** 파일 찾기
2. 파일을 **더블클릭** 또는 **브라우저로 드래그**하여 열기
3. 관리 페이지가 브라우저에서 열립니다

### Step 2: 이미지 정보 입력

웹 페이지에서 다음 정보를 입력:

1. **제목**: 이미지 제목 (예: "2025 ASABE 학회 발표")
2. **설명**: 간단한 설명 (예: "국제 학회 발표")
3. **카테고리**:
   - Laboratory (연구실 시설)
   - Event (행사 및 학회)
   - Research (현장 연구)
4. **이미지 설명 (Alt Text)**: 영문 설명 (예: "ASABE Conference Presentation")
5. **날짜**: 이미지 촬영/행사 날짜
6. **이미지 업로드**:
   - 드래그 앤 드롭 또는
   - 클릭하여 파일 선택

### Step 3: JSON 생성

1. 모든 정보 입력 후 **"✅ JSON 생성하기"** 버튼 클릭
2. 화면 하단에 생성된 코드가 표시됩니다:
   - **JSON 파일 내용**
   - **gallery.js 업데이트 코드**

### Step 4: 파일 생성 및 수정

#### 4-1. 이미지 복사
- 선택한 이미지를 `images/gallery/` 폴더에 복사

#### 4-2. JSON 파일 생성
1. `_data/gallery/` 폴더 열기
2. 새 파일 생성 (파일명은 화면에 표시됨)
3. 생성된 JSON 코드를 복사하여 붙여넣기
4. 저장

**예시:**
```
파일명: _data/gallery/2025-01-15-lab-meeting.json
```

#### 4-3. gallery.js 업데이트
1. `js/gallery.js` 파일 열기
2. **12-18번째 줄** 찾기 (galleryFiles 배열)
3. 생성된 JS 코드로 교체
4. 저장

**변경 전:**
```javascript
const galleryFiles = [
    '2024-11-01-asabe-presentation.json',
    '2024-11-02-bug-monitoring.json',
    '2024-11-03-festival.json'
];
```

**변경 후:**
```javascript
const galleryFiles = [
    '2024-11-01-asabe-presentation.json',
    '2024-11-02-bug-monitoring.json',
    '2024-11-03-festival.json',
    '2025-01-15-lab-meeting.json'  // 새로 추가됨
];
```

### Step 5: GitHub에 업로드

1. **GitHub Desktop** 열기
2. 변경된 파일 확인:
   - `images/gallery/새이미지.jpg` (새 파일)
   - `_data/gallery/날짜-제목.json` (새 파일)
   - `js/gallery.js` (수정됨)
3. 커밋 메시지 작성:
   ```
   Add gallery image: [이미지 제목]
   ```
4. **"Commit to main"** 클릭
5. **"Push origin"** 클릭
6. **1-2분 후** 웹사이트에서 확인!

---

## 🖼️ 이미지 삭제하는 방법

### Step 1: JSON 파일 삭제
- `_data/gallery/` 폴더에서 해당 JSON 파일 삭제

### Step 2: gallery.js 업데이트
- `js/gallery.js` 파일의 `galleryFiles` 배열에서 해당 파일명 제거

### Step 3: 이미지 파일 삭제 (선택사항)
- `images/gallery/` 폴더에서 이미지 파일 삭제

### Step 4: GitHub에 업로드
- GitHub Desktop에서 커밋 및 푸시

---

## 🔧 카테고리 설명

| 카테고리 | 영문 값 | 설명 | 예시 |
|---------|---------|------|------|
| 연구실 시설 | `laboratory` | 연구실 내부, 장비, 시설 | 온실, 실험 장비 |
| 행사 및 학회 | `event` | 학회, 세미나, 워크샵 | ASABE 발표, 랩미팅 |
| 현장 연구 | `research` | 현장 조사, 실험 | 참외 재배, 딸기 모니터링 |

---

## 📁 파일 구조

```
agtechresearch.github.io/
├── gallery-manager.html    # 🆕 관리 도구 (브라우저로 열기)
├── _data/
│   └── gallery/            # JSON 파일 저장 위치
│       ├── 2024-11-01-asabe-presentation.json
│       ├── 2024-11-02-bug-monitoring.json
│       └── ...
├── images/
│   └── gallery/            # 이미지 파일 저장 위치
│       ├── ASABE_pr.JPG
│       ├── bug_monitering.jpg
│       └── ...
└── js/
    └── gallery.js          # 갤러리 로딩 스크립트 (수정 필요)
```

---

## ⚠️ 주의사항

1. **이미지 파일명**: 영문, 숫자, 언더스코어(_), 하이픈(-)만 사용 권장
2. **파일 크기**: 이미지는 5MB 이하 권장
3. **파일 형식**: JPG, PNG 권장
4. **JSON 문법**: 쉼표(,) 위치 주의! 마지막 항목에는 쉼표 없음
5. **gallery.js 수정**: 파일 목록을 정확히 업데이트해야 이미지가 표시됨

---

## 🐛 문제 해결

### 이미지가 웹사이트에 안 나타나요

**체크리스트:**
- [ ] JSON 파일이 `_data/gallery/` 폴더에 있나요?
- [ ] 이미지 파일이 `images/gallery/` 폴더에 있나요?
- [ ] `js/gallery.js`의 `galleryFiles` 배열에 파일명이 추가되었나요?
- [ ] GitHub에 푸시했나요?
- [ ] 1-2분 기다렸나요? (GitHub Pages 배포 시간)

### JSON 문법 오류

**흔한 실수:**
```javascript
// ❌ 잘못된 예 - 마지막에 쉼표
const galleryFiles = [
    'file1.json',
    'file2.json',  // 마지막 쉼표 제거!
];

// ✅ 올바른 예
const galleryFiles = [
    'file1.json',
    'file2.json'
];
```

### 이미지가 깨져 보여요

- 이미지 파일 경로 확인: `images/gallery/파일명.jpg`
- 파일명 대소문자 정확히 일치해야 함
- 이미지 파일이 실제로 해당 폴더에 있는지 확인

---

## 💡 팁

### 여러 이미지를 한 번에 추가하려면

1. 관리 도구에서 첫 번째 이미지 정보 입력 및 JSON 생성
2. JSON 파일 생성
3. 두 번째 이미지로 "🔄 초기화" 버튼 클릭 후 반복
4. 모든 JSON 파일 생성 후 `gallery.js`를 한 번에 업데이트
5. GitHub Desktop에서 모든 변경사항을 한 번에 커밋

### 이미지 순서 변경

`js/gallery.js`의 `galleryFiles` 배열에서 파일 순서를 변경하면 됩니다.
(최신 이미지가 위로 오도록 날짜순으로 정렬됩니다)

---

## 📞 도움이 필요하면

1. 이 가이드를 다시 읽어보세요
2. `gallery-manager.html` 파일의 안내 메시지를 확인하세요
3. GitHub Desktop에서 변경사항을 확인하세요
4. 브라우저 개발자 도구(F12)에서 에러 메시지를 확인하세요

---

**작성일**: 2025-11-17
**버전**: 2.0 (로컬 도구 버전)
**대상**: GitHub Pages 사용자
