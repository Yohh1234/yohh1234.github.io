/* ============================================================
   SITE SETTINGS — the only file you need to edit for links,
   files and going live. Everything else reads from here.
   ============================================================ */
window.SITE = {
  // true  = draft preview: shows the orange banner and DRAFT tags,
  //         and shows proposed (unverified) numbers so you can review them.
  // false = live: hides the banner, the tags, every unverified number,
  //         and any button whose link or file is still missing.
  draft: false,

  // Contact — leave "" until you have the real value.
  email: "quocthientrung@gmail.com",
  linkedin: "https://www.linkedin.com/in/quocthientrung03/",
  github: "https://github.com/Yohh1234",
  phone: "+84 347 892 075",

  // Portrait — put the file in assets/img/ and write its path here.
  portrait: "assets/img/portrait.webp",

  // CVs — put the PDFs in cv/ with these names, then set ready: true.
  cv: {
    ready: false,
    ba: "cv/Ta-Quoc-Thien-Trung_CV_ERP-BA.pdf",
    integration: "cv/Ta-Quoc-Thien-Trung_CV_Integration-Engineer.pdf"
  },

  // GoatCounter — create a free site code at goatcounter.com, write it here
  // (the "xxx" in xxx.goatcounter.com). Leave "" to turn counting off.
  goatcounter: "quocthientrung",

  // Shown in the footer. Update when you change the page.
  updated: { en: "Nov 2026", vi: "11/2026" },

  // Credentials — shown in the Credentials section, in this order.
  // url: paste the certificate's public "verify" link to show a Verify button; leave "" to hide it.
  certs: [
    { when: { en: "Jun 2026", vi: "06/2026" }, url: "",
      en: ["Google Business Intelligence", "Professional Certificate · Google, via Coursera"],
      vi: ["Google Business Intelligence", "Professional Certificate · Google, qua Coursera"] },
    { when: { en: "Dec 2025", vi: "12/2025" }, url: "",
      en: ["Google Project Management", "Professional Certificate · Google, via Coursera"],
      vi: ["Google Project Management", "Professional Certificate · Google, qua Coursera"] },
    { when: { en: "Dec 2024", vi: "12/2024" }, url: "",
      en: ["Google Data Analytics", "Professional Certificate · Google, via Coursera"],
      vi: ["Google Data Analytics", "Professional Certificate · Google, qua Coursera"] },
    { when: { en: "English", vi: "Tiếng Anh" }, url: "",
      en: ["IELTS 7.0 · TOEIC 865", "English proficiency tests"],
      vi: ["IELTS 7.0 · TOEIC 865", "Kỳ thi năng lực tiếng Anh"] },
    { when: { en: "Japanese", vi: "Tiếng Nhật" }, url: "",
      en: ["JLPT N3", "Japanese-Language Proficiency Test"],
      vi: ["JLPT N3", "Kỳ thi năng lực tiếng Nhật"] },
    { when: { en: "Vietnamese", vi: "Tiếng Việt" }, url: "",
      en: ["Native", "Based in Ho Chi Minh City"],
      vi: ["Bản ngữ", "Sống tại TP. Hồ Chí Minh"] }
  ],

  // Work samples — images live in assets/samples/.
  // group: which heading the sample sits under (see sampleGroups).
  // case:  "01"–"04" also shows the sample inside that case window; "" = not tied to a case.
  // fit:   "contain" shows the whole image in the thumbnail (use for wide or tall diagrams).
  // tag:   the honesty label under each sample — say what the document really is.
  sampleGroups: {
    edi: { en: ["EDI integration", "rebuilt without partner names · dashboards use mock data"],
           vi: ["Tích hợp EDI", "dựng lại, không có tên đối tác · dashboard dùng dữ liệu giả lập"] },
    lms: { en: ["System analysis", "self-initiated project: an internal learning platform (LMS)"],
           vi: ["Phân tích hệ thống", "dự án tự thực hiện: nền tảng đào tạo nội bộ (LMS)"] },
    req: { en: ["Requirements writing", "practice briefs"],
           vi: ["Viết yêu cầu", "đề bài luyện tập"] }
  },
  samples: [
    { src: "assets/samples/edi-gap-856.webp", group: "edi", case: "03", fit: "cover",
      tag: { en: "Rebuilt · anonymized", vi: "Dựng lại · ẩn danh" },
      en: ["GAP analysis: 856 ship notice", "Canonical JSON fields against the partner's X12 004010 spec, with the condition for every element."],
      vi: ["Phân tích GAP: 856 ship notice", "Đối chiếu trường JSON chuẩn với đặc tả X12 004010 của đối tác, kèm điều kiện cho từng element."] },
    { src: "assets/samples/edi-dashboard-overview.webp", group: "edi", case: "03", fit: "cover",
      tag: { en: "Dashboard design · mock data", vi: "Thiết kế dashboard · dữ liệu giả lập" },
      en: ["Partner onboarding dashboard", "Lead time to UAT, first-pass QC rate and overdue connections on one management view."],
      vi: ["Dashboard onboarding đối tác", "Thời gian đến UAT, tỉ lệ qua QC lần đầu và kết nối quá hạn trên một màn hình quản lý."] },
    { src: "assets/samples/edi-dashboard-quality.webp", group: "edi", case: "03", fit: "cover",
      tag: { en: "Dashboard design · mock data", vi: "Thiết kế dashboard · dữ liệu giả lập" },
      en: ["GAP quality and defect view", "Where defects start, where they are caught, and which document types cause most of them."],
      vi: ["Chất lượng GAP và lỗi", "Lỗi phát sinh ở bước nào, bị phát hiện ở đâu và loại chứng từ nào gây lỗi nhiều nhất."] },
    { src: "assets/samples/lms-userflow.webp", group: "lms", case: "", fit: "contain",
      tag: { en: "Self-initiated project", vi: "Dự án tự thực hiện" },
      en: ["User flow", "A learner's path through courses, exams, session booking and certificates, with every error branch."],
      vi: ["User flow", "Đường đi của học viên qua khóa học, bài kiểm tra, đăng ký buổi học và chứng chỉ, kèm mọi nhánh lỗi."] },
    { src: "assets/samples/lms-sequence.webp", group: "lms", case: "", fit: "contain",
      tag: { en: "Self-initiated project", vi: "Dự án tự thực hiện" },
      en: ["Sequence diagram", "Two learners compete for the last seat: who gets it, who gets the error, and why."],
      vi: ["Sequence diagram", "Hai học viên tranh chỗ cuối cùng: ai được, ai nhận lỗi và vì sao."] },
    { src: "assets/samples/lms-state.webp", group: "lms", case: "", fit: "contain",
      tag: { en: "Self-initiated project", vi: "Dự án tự thực hiện" },
      en: ["State diagram", "Lifecycle of a course assignment, from not started to completed, overdue or withdrawn."],
      vi: ["State diagram", "Vòng đời một lượt giao khóa học: chưa bắt đầu, hoàn thành, quá hạn hoặc thu hồi."] },
    { src: "assets/samples/lms-erd.webp", group: "lms", case: "", fit: "contain",
      tag: { en: "Self-initiated project", vi: "Dự án tự thực hiện" },
      en: ["ERD", "Users, authentication, audit and email logs, traced back to the requirement IDs."],
      vi: ["ERD", "Người dùng, xác thực, audit log và nhật ký email, truy về mã yêu cầu."] },
    { src: "assets/samples/lms-wireframe.webp", group: "lms", case: "", fit: "cover",
      tag: { en: "Self-initiated project", vi: "Dự án tự thực hiện" },
      en: ["Wireframe", "The exam screen while the connection is lost: autosave, server timer and answer states."],
      vi: ["Wireframe", "Màn hình làm bài khi mất mạng: tự lưu, đồng hồ phía server và trạng thái đáp án."] },
    { src: "assets/samples/lms-wireframe-dashboard.webp", group: "lms", case: "", fit: "cover",
      tag: { en: "Self-initiated project", vi: "Dự án tự thực hiện" },
      en: ["Wireframe", "A manager's dashboard: overdue assignments first, then every direct report's progress."],
      vi: ["Wireframe", "Dashboard của quản lý: lượt giao quá hạn trước, rồi tiến độ của từng nhân viên cấp dưới."] },
    { src: "assets/samples/user-story-ac.webp", group: "req", case: "", fit: "cover",
      tag: { en: "Practice brief", vi: "Đề bài luyện tập" },
      en: ["User story + acceptance criteria", "One story with an INVEST check and Given / When / Then criteria. Written in Vietnamese."],
      vi: ["User story + tiêu chí nghiệm thu", "Một story có kiểm tra INVEST và tiêu chí Given / When / Then."] },
    { src: "assets/samples/use-case-spec.webp", group: "req", case: "", fit: "cover",
      tag: { en: "Practice brief", vi: "Đề bài luyện tập" },
      en: ["Use case specification", "Pre- and post-conditions, business rules and a main flow mapped to screens. Written in Vietnamese."],
      vi: ["Đặc tả use case", "Tiền điều kiện, hậu điều kiện, business rule và luồng chính gắn với từng màn hình."] }
  ]
};
