# Gallery 추가/수정/삭제 요청

이 파일에 Gallery 항목을 작성하면, Cursor AI가 자동으로 처리합니다.

---

## ✅ 처리 대기 중

### 요청 1: [추가]
제목:
설명:
카테고리: lab (또는 event, research)
이미지파일명:
날짜: YYYY-MM-DD
게시: true

---

## 📝 작성 예시

### 요청 예시: [추가] ASABE 2024 발표
제목: ASABE 2024 Conference
설명: 국제 농업공학회 발표
카테고리: event
이미지파일명: asabe_2024_presentation.jpg
날짜: 2024-11-15
게시: true

---

## ✔️ 처리 완료

<!-- Cursor AI가 처리 후 여기로 이동됩니다 -->

---

## 📋 작성 가이드

### 1. 이미지 준비
먼저 `images/gallery/` 폴더에 이미지를 업로드하세요.

### 2. 요청 작성
위의 "✅ 처리 대기 중" 섹션에 다음 형식으로 작성:

```
### 요청 X: [작업타입] 제목
제목: 실제 제목
설명: 실제 설명
카테고리: lab/event/research 중 하나
이미지파일명: 파일명.jpg
날짜: YYYY-MM-DD
게시: true/false
```

### 3. Cursor AI에게 요청
Cursor AI 채팅에 다음 프롬프트 입력:
```
GALLERY_REQUESTS.md의 대기 중인 요청 처리해줘
```

### 4. 확인
- JSON 파일 생성: `_data/gallery/YYYY-MM-DD-slug.json`
- Git commit & push 완료
- 요청이 "처리 완료" 섹션으로 이동

---

## 🔧 작업 타입

- **[추가]**: 새 Gallery 항목 추가
- **[수정]**: 기존 항목 수정 (이미지파일명으로 찾음)
- **[삭제]**: 기존 항목 삭제 (이미지파일명으로 찾음)

---

## 📌 카테고리 설명

- **lab**: 연구실 사진 (Laboratory)
- **event**: 행사/이벤트 (Events)
- **research**: 연구 활동 (Research Activities)

---

## ⚠️ 주의사항

1. 이미지는 반드시 먼저 `images/gallery/`에 업로드
2. 이미지파일명은 정확하게 입력 (대소문자, 확장자 포함)
3. 날짜 형식: `2024-11-15` (YYYY-MM-DD)
4. 카테고리는 정확히 `lab`, `event`, `research` 중 하나만
5. 한 번에 여러 요청 가능 (각각 ### 요청으로 구분)
