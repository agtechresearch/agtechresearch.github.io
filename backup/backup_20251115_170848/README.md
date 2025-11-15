# AgTech Research Lab Website

This is the official website for the AgTech Research Lab at Sejong University. The site introduces the lab's research, members, publications, and activities, and provides contact information for collaboration and inquiries.

## 🌱 Project Overview
- **Lab:** AgTech Research Lab, Sejong University
- **Purpose:** Showcase research projects, members, publications, gallery, and contact details
- **Tech Stack:** HTML, CSS, JavaScript (Vanilla)

## 🚀 Main Features
- **Responsive homepage** with lab introduction and research areas
- **Members page** with tab navigation (All Members, Current Members, Alumni)
- **Research and publications pages** with interactive modals and filtering
- **Gallery** of lab activities and events with category filters
- **Contact page** with working form (EmailJS/Formspree integration) and Google Maps
- **Image optimization** with lazy loading for better performance
- **Mobile-friendly** responsive design

## 🖥️ Local Development
1. Clone the repository:
   ```bash
   git clone https://github.com/agtechresearch/agtech.git
   cd agtech
   ```
2. Open `index.html` in your browser.

No build step is required (pure static site).

## 🌐 Deploy with GitHub Pages
1. Go to your repository's **Settings > Pages**
2. Set the source to `main` branch and `/ (root)`
3. Save and wait a few minutes
4. Your site will be live at: `https://agtechresearch.github.io/agtech/`

## 📁 Folder Structure & File Roles

### HTML Files (페이지 구조)

```
├── index.html            # 홈페이지 - 연구실 이름, 부제목, 네비게이션 링크, 파티클 애니메이션
├── introduction.html     # 연구실 소개 페이지 - 연구실 소개, 비전, 연구 분야
├── members.html          # 멤버 페이지 - 교수진, 박사/석사/학부생, 스태프, 탭 기능
├── publications.html     # 논문 페이지 - 논문 목록, 연도별 필터링, 검색 기능
├── research.html         # 연구 프로젝트 페이지 - 연구 프로젝트 목록, 상세 모달
├── gallery.html          # 갤러리 페이지 - 사진 갤러리, 카테고리 필터, 라이트박스
└── contact.html          # 연락처 페이지 - 주소, 지도, 연락 정보
```

### CSS Files (스타일)

```
├── css/
│   └── style.css         # 메인 스타일시트 (3300+ lines)
│                        # - 전역 스타일, 폰트 설정 (Times New Roman, Myriad Pro)
│                        # - 네비게이션 바, 히어로 섹션, 푸터
│                        # - 반응형 디자인 (모바일, 태블릿, 데스크톱)
│                        # - 갤러리 라이트박스, 모달 스타일
│                        # - 흑백 미니멀 디자인
```

### JavaScript Files (기능)

```
├── js/
│   ├── main.js           # 전역 기능
│   │                     # - 네비게이션 토글 (모바일 메뉴)
│   │                     # - 스크롤 효과
│   │                     # - 파티클 애니메이션 (홈페이지)
│   │
│   ├── research.js       # 연구 프로젝트 페이지 기능
│   │                     # - 연구 프로젝트 상세 모달 열기/닫기
│   │                     # - 관련 논문 표시
│   │
│   ├── publications.js    # 논문 페이지 기능
│   │                     # - 연도별 필터링 (2025, 2024, 2023, 2022, All)
│   │                     # - 검색 기능 (제목, 저자, 키워드)
│   │
│   ├── members.js        # 멤버 페이지 기능
│   │                     # - 탭 전환 (All Members, Current Members, Alumni)
│   │                     # - 현재 멤버 필터링
│   │
│   ├── gallery.js        # 갤러리 페이지 기능
│   │                     # - 카테고리 필터링 (All, Laboratory, Events, Research)
│   │                     # - 라이트박스 (이미지 클릭 시 크게 보기)
│   │                     # - 이미지 로딩 최적화
│   │
│   └── contact.js        # 연락처 페이지 기능
│                         # - 연락 폼 처리 (EmailJS/Formspree)
│                         # - 폼 검증 및 제출
```

### Image Files (이미지)

```
├── images/
│   ├── hero/             # 히어로 섹션 배경 이미지 (현재 미사용)
│   ├── members/          # 멤버 프로필 사진
│   │                     # - 파일명: 한글 이름.jpg (예: 서현권.jpg, 박현지.jpg)
│   ├── gallery/          # 갤러리 사진
│   │                     # - 연구실 사진, 행사 사진, 연구 활동 사진
│   ├── news/             # 뉴스 이미지 (현재 미사용)
│   └── research/         # 연구 프로젝트 이미지 (현재 미사용)
```

### 기타 파일

```
├── README.md             # 프로젝트 설명서 (이 파일)
├── CONTENT_EDIT_GUIDE.md # 콘텐츠 수정 가이드 (상세한 수정 방법)
├── CHANGELOG.md          # 변경 이력
└── CNAME                 # 커스텀 도메인 설정 (있는 경우)
```

## ⚙️ Configuration

### Contact Form Setup
To enable email sending from the contact form, configure one of the following services in `js/contact.js`:

#### Option 1: Formspree (Recommended - Easy Setup)
1. Sign up at [formspree.io](https://formspree.io/)
2. Create a new form and get your form ID
3. Update `js/contact.js`:
   ```javascript
   formspree: {
       endpoint: 'https://formspree.io/f/YOUR_FORM_ID'
   }
   ```

#### Option 2: EmailJS
1. Sign up at [emailjs.com](https://www.emailjs.com/)
2. Create a service and email template
3. Update `js/contact.js`:
   ```javascript
   emailjs: {
       serviceId: 'YOUR_SERVICE_ID',
       templateId: 'YOUR_TEMPLATE_ID',
       publicKey: 'YOUR_PUBLIC_KEY'
   }
   ```

If neither is configured, the form will use `mailto:` as a fallback.

## 📝 How to Update Website Content

### For Lab Members: Quick Content Updates

You can update the website content directly through GitHub's web interface - no coding knowledge required!

#### Method 1: Edit Files Directly on GitHub (Easiest - Recommended for Quick Edits)

**장점:** 브라우저에서 바로 수정 가능, 별도 프로그램 설치 불필요  
**단점:** 여러 파일 동시 수정 시 불편, 이미지 업로드 제한적

1. **Go to the repository:** https://github.com/agtechresearch/agtechresearch.github.io
2. **Navigate to the file you want to edit:**
   - Members: `members.html`
   - Research: `research.html`
   - Publications: `publications.html`
   - Gallery: `gallery.html`
   - Styles: `css/style.css`
   - Scripts: `js/` folder
3. **Click the pencil icon (✏️)** in the top-right corner to edit
4. **Make your changes** (see CONTENT_EDIT_GUIDE.md for detailed instructions)
5. **Scroll down to the "Commit changes" section:**
   - Enter a commit message (e.g., "Update member information" or "Fix gallery layout")
   - Select "Commit directly to the main branch"
   - Click "Commit changes"
6. **Wait 1-2 minutes** - your changes will automatically appear on the live site!

**이미지 추가 방법:**
- GitHub 웹에서: `images/` 폴더로 이동 → "Add file" → "Upload files" → 이미지 드래그 앤 드롭 → "Commit changes"

#### Method 2: Download, Edit, and Upload (No Git Required)

**장점:** 로컬에서 편집기 사용 가능, Git 설치 불필요  
**단점:** 수동으로 파일 업로드 필요, 버전 관리 어려움

1. **Download the repository:**
   - Go to https://github.com/agtechresearch/agtechresearch.github.io
   - Click the green "Code" button
   - Select "Download ZIP"
   - Extract the ZIP file to your computer

2. **Edit files locally:**
   - Open files in any text editor (VS Code, Notepad++, Sublime Text, etc.)
   - Make your changes
   - Save the files

3. **Upload back to GitHub:**
   - Go back to the repository on GitHub
   - Navigate to the file you edited
   - Click the pencil icon (✏️) to edit
   - Delete all existing content (Ctrl+A, Delete)
   - Copy and paste your edited content
   - Click "Commit changes"

**또는 여러 파일을 한 번에 업로드:**
- Go to the repository root
- Click "Add file" → "Upload files"
- Drag and drop your edited files
- Click "Commit changes"

#### Method 3: Download, Edit, and Push with Git (Recommended for Developers)

**장점:** 버전 관리 가능, 여러 파일 한 번에 커밋, 프로페셔널한 워크플로우  
**단점:** Git 설치 및 기본 지식 필요

1. **Install Git:**
   - Windows: Download from https://git-scm.com/download/win
   - Mac: `brew install git` or download from https://git-scm.com/download/mac
   - Linux: `sudo apt install git` (Ubuntu/Debian)

2. **Clone the repository:**
   ```bash
   git clone https://github.com/agtechresearch/agtechresearch.github.io.git
   cd agtechresearch.github.io
   ```

3. **Edit files locally:**
   - Open files in your preferred editor
   - Make your changes
   - Save the files

4. **Commit and push:**
   ```bash
   # Check what files were changed
   git status
   
   # Add all changed files
   git add .
   
   # Or add specific files
   git add css/style.css js/gallery.js
   
   # Commit with a message
   git commit -m "Update gallery layout and fix lightbox centering"
   
   # Push to GitHub
   git push origin main
   ```

5. **Wait 1-2 minutes** - changes will appear on the live site!

**Note:** If you get a permission error, you may need to:
- Set up SSH keys, or
- Use GitHub Desktop (see Method 4)

#### Method 4: Using GitHub Desktop (Recommended for Non-Developers)

**장점:** GUI로 쉽게 사용, Git 명령어 불필요, 여러 파일 관리 편리  
**단점:** 별도 프로그램 설치 필요

1. **Install GitHub Desktop:** https://desktop.github.com/
2. **Clone the repository:**
   - Open GitHub Desktop
   - File → Clone Repository
   - Select `agtechresearch/agtechresearch.github.io`
   - Choose a local path
   - Click "Clone"

3. **Make your changes:**
   - Open files in any text editor (VS Code, Notepad++, etc.)
   - Edit and save files

4. **Commit and push:**
   - Open GitHub Desktop
   - You'll see all changed files in the left panel
   - Review your changes in the diff view
   - Write a commit message (e.g., "Add new member" or "Update research projects")
   - Click "Commit to main"
   - Click "Push origin" (top menu bar)
   - Wait 1-2 minutes - changes will appear on the live site!

#### Common Tasks:

**Adding a New Member:**
1. Add profile photo to `images/members/이름.jpg`
2. Edit `members.html` - copy an existing member card and modify the details
3. See CONTENT_EDIT_GUIDE.md for step-by-step instructions

**Updating Publications:**
1. Edit `publications.html`
2. Add new publication entry following the existing format

**Adding Gallery Photos:**
1. Upload images to `images/gallery/`
2. Edit `gallery.html` to add the new image cards

**Need Help?** See `CONTENT_EDIT_GUIDE.md` for detailed instructions with examples.

## 🤝 Contribution
Contributions are welcome! Please open an issue or pull request for suggestions, bug fixes, or improvements.

## 📬 Contact
- **Lab:** AgTech Research Lab, Sejong University
- **Address:** Chungmugwan 502B, 209 Neungdong-ro, Gwangjin-gu, Seoul
- **Email:** agtech@sejong.ac.kr

---

© 2024 AgTech Research Lab. All rights reserved. 