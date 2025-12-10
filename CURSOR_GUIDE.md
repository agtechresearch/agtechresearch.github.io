# Cursor AI Gallery 관리 가이드

이 문서는 Cursor AI가 Gallery 관리 작업을 자동화하기 위한 상세 지침서입니다.

---

## 📂 프로젝트 구조

```
/
├── _data/gallery/          # Gallery JSON 데이터
│   └── YYYY-MM-DD-slug.json
├── images/gallery/         # Gallery 이미지 파일
│   └── *.jpg, *.png, *.JPG
├── js/
│   └── gallery.js         # Gallery 로드 스크립트
├── gallery.html           # Gallery 페이지
├── GALLERY_REQUESTS.md    # 사용자 요청 파일 ⭐
└── CURSOR_GUIDE.md        # 이 파일 (AI용)
```

---

## 🎯 Cursor AI의 역할

사용자가 `GALLERY_REQUESTS.md`에 요청을 작성하면, 다음 작업을 자동으로 수행:

1. ✅ GALLERY_REQUESTS.md 파싱
2. ✅ JSON 파일 생성/수정/삭제 (`_data/gallery/`)
3. ✅ Git add, commit, push
4. ✅ 요청 항목을 "처리 완료"로 이동

---

## 📝 요청 형식

```markdown
### 요청 1: [추가] 제목
제목: ASABE 2024 Conference
설명: 국제 농업공학회 발표
카테고리: event
이미지파일명: asabe_2024.jpg
날짜: 2024-11-15
게시: true
```

---

## 🔧 작업별 처리 방법

### 1. [추가] 작업

**입력:**
```markdown
### 요청 1: [추가] ASABE 발표
제목: ASABE 2024 Conference
설명: 국제 농업공학회 발표
카테고리: event
이미지파일명: asabe_2024.jpg
날짜: 2024-11-15
게시: true
```

**처리 단계:**

1. **날짜에서 slug 생성**
   - 날짜: `2024-11-15`
   - 제목: `ASABE 2024 Conference`
   - Slug: `asabe-2024-conference` (소문자, 공백→하이픈)
   - 파일명: `2024-11-15-asabe-2024-conference.json`

2. **JSON 파일 생성** (`_data/gallery/2024-11-15-asabe-2024-conference.json`)
```json
{
  "title": "ASABE 2024 Conference",
  "description": "국제 농업공학회 발표",
  "category": "event",
  "image": "/images/gallery/asabe_2024.jpg",
  "alt": "ASABE 2024 Conference",
  "date": "2024-11-15T10:00:00.000Z",
  "published": true
}
```

**중요:**
- `image` 경로는 항상 `/images/gallery/파일명` 형식
- `alt`는 `title`과 동일하게 설정
- `date`는 ISO 8601 형식 (`YYYY-MM-DDTHH:MM:SS.000Z`)

3. **Git 작업**
```bash
git add _data/gallery/2024-11-15-asabe-2024-conference.json
git commit -m "Add gallery item: ASABE 2024 Conference"
git push origin main
```

4. **GALLERY_REQUESTS.md 업데이트**
   - 처리한 요청을 "✅ 처리 대기 중"에서 "✔️ 처리 완료"로 이동
   - 처리 날짜/시간 추가

---

### 2. [수정] 작업

**입력:**
```markdown
### 요청 2: [수정]
이미지파일명: asabe_2024.jpg
제목: ASABE 2024 국제 학회
설명: 농업공학 국제 학회 발표 및 포스터 세션
```

**처리 단계:**

1. **기존 JSON 파일 찾기**
   - `_data/gallery/` 폴더에서 `"image": "/images/gallery/asabe_2024.jpg"` 포함하는 파일 검색
   - 예: `2024-11-15-asabe-2024-conference.json`

2. **JSON 파일 수정**
   - 지정된 필드만 업데이트
   - 나머지 필드는 유지

3. **Git 작업**
```bash
git add _data/gallery/2024-11-15-asabe-2024-conference.json
git commit -m "Update gallery item: asabe_2024.jpg"
git push origin main
```

---

### 3. [삭제] 작업

**입력:**
```markdown
### 요청 3: [삭제]
이미지파일명: old_photo.jpg
```

**처리 단계:**

1. **기존 JSON 파일 찾기**
   - `_data/gallery/` 폴더에서 해당 이미지 포함하는 파일 검색

2. **JSON 파일 삭제**
```bash
rm _data/gallery/YYYY-MM-DD-slug.json
```

3. **Git 작업**
```bash
git add _data/gallery/
git commit -m "Delete gallery item: old_photo.jpg"
git push origin main
```

**주의:** 이미지 파일 자체는 삭제하지 않음 (JSON만 삭제)

---

## 🤖 Cursor AI 프롬프트 예시

### 사용자가 입력할 프롬프트:

**기본:**
```
GALLERY_REQUESTS.md의 대기 중인 요청 처리해줘
```

**상세:**
```
CURSOR_GUIDE.md를 참고해서 GALLERY_REQUESTS.md에 있는
"✅ 처리 대기 중" 섹션의 모든 요청을 처리하고
Git push까지 완료해줘
```

**특정 요청만:**
```
GALLERY_REQUESTS.md의 요청 1번만 처리해줘
```

---

## 🔐 권한 확인

**승인된 GitHub 계정:**
- Repository: `agtechresearch/agtechresearch.github.io`
- Write 권한이 있는 계정만 push 가능

**Cursor AI가 확인할 사항:**
1. `git remote -v`로 원격 저장소 확인
2. `git config user.name` 및 `git config user.email` 확인
3. Push 권한 있는지 확인

---

## ✅ 체크리스트

Cursor AI가 작업 완료 전 확인해야 할 사항:

- [ ] `_data/gallery/` 폴더에 JSON 파일 생성/수정/삭제 완료
- [ ] JSON 형식 유효 (유효한 JSON인지 확인)
- [ ] 이미지 경로 정확 (`/images/gallery/` 시작)
- [ ] 날짜 형식 정확 (ISO 8601)
- [ ] 카테고리 유효 (`lab`, `event`, `research` 중 하나)
- [ ] Git commit 메시지 명확
- [ ] Git push 성공
- [ ] GALLERY_REQUESTS.md 업데이트 (요청 → 완료로 이동)

---

## 📊 JSON 스키마

```json
{
  "title": "string (필수)",
  "description": "string (필수)",
  "category": "lab | event | research (필수)",
  "image": "/images/gallery/파일명 (필수)",
  "alt": "string (필수, title과 동일)",
  "date": "ISO 8601 형식 (필수, YYYY-MM-DDTHH:MM:SS.000Z)",
  "published": "boolean (필수, true/false)"
}
```

---

## 🐛 오류 처리

### 오류 1: 이미지 파일이 없음
```
Error: images/gallery/파일명.jpg not found
```
**해결:** 사용자에게 이미지를 먼저 업로드하라고 안내

### 오류 2: 중복된 파일명
```
Error: _data/gallery/YYYY-MM-DD-slug.json already exists
```
**해결:**
- Slug에 숫자 추가 (예: `asabe-2024-conference-2.json`)
- 또는 사용자에게 확인 요청

### 오류 3: 잘못된 카테고리
```
Error: Invalid category. Must be: lab, event, or research
```
**해결:** 사용자에게 카테고리 수정 요청

### 오류 4: Git push 실패
```
Error: Permission denied
```
**해결:**
- Git 인증 확인
- 사용자에게 GitHub 권한 확인 요청

---

## 📖 추가 참고사항

### Slug 생성 규칙
```javascript
// 예시: "ASABE 2024 Conference" → "asabe-2024-conference"
function createSlug(title) {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9가-힣]+/g, '-')
    .replace(/^-+|-+$/g, '');
}
```

### 날짜 변환
```javascript
// 예시: "2024-11-15" → "2024-11-15T10:00:00.000Z"
function toISODate(dateString) {
  return new Date(dateString + 'T10:00:00.000Z').toISOString();
}
```

---

## 🎓 학습 자료

Cursor AI가 참고할 만한 파일:
- `js/gallery.js` - Gallery 데이터 로드 방법
- `_data/gallery/*.json` - 기존 데이터 구조 예시
- `gallery.html` - Gallery 페이지 구조

---

## 📞 문제 발생 시

Cursor AI가 처리할 수 없는 경우:
1. GALLERY_REQUESTS.md에 오류 메시지 추가
2. 사용자에게 수동 확인 요청
3. 처리 가능한 요청만 먼저 처리
