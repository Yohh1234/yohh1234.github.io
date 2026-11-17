/* Case studies, role tabs and the 60-second summary — English and Vietnamese.
   A metric with unverified: true is a PROPOSED number. It shows only in draft mode
   (js/config.js → draft: true). Replace value/label with your real result and
   delete "unverified: true" to publish it. */

window.CASES = {
  "01": {
    slug: "erp-distribution",
    company: "Gia Cat Technology", period: "2025 – 2026",
    tools: ["AS-IS / TO-BE", "BRD", "User stories", "Wireframes", "SQL reports", "UAT", "Data migration", "ERP–DMS", "E-invoice"],
    metrics: [
      { value: "+70%", en: "order-processing efficiency", vi: "hiệu suất xử lý đơn hàng" },
      { value: "800+", en: "invoices per day", vi: "hóa đơn mỗi ngày" }
    ],
    en: {
      kicker: "ERP transformation · Distribution",
      title: "One operating backbone for a multi-branch distributor",
      summary: "A connected ERP operating model for five branches, 30 warehouses, roughly 7,000 SKUs, 100 users and more than 800 invoices per day.",
      context: ["Distribution", "5 branches", "30 warehouses", "~7,000 SKUs", "100 users"],
      challenge: "Sales, inventory, finance and operations teams worked across fragmented steps and manual checks. Nightly inventory and e-invoice synchronization also had to stay stable at production volume.",
      ownership: "Led AS-IS / TO-BE analysis, BRD and user stories, workflows, wireframes, functional specifications, SQL reports, master-data mapping, UAT, migration, backlog support, training and integration testing.",
      delivery: "Connected Order-to-Cash with Sales, Purchasing, Inventory, POS, Finance, CRM, HRM, Production, Reporting and Approval. Coordinated ERP–DMS and Viettel e-invoice flows.",
      outcome: "Improved order-processing efficiency by 70% while supporting 800+ invoices per day and stable nightly synchronization."
    },
    vi: {
      kicker: "Chuyển đổi ERP · Phân phối",
      title: "Một xương sống vận hành cho nhà phân phối nhiều chi nhánh",
      summary: "Mô hình vận hành ERP liền mạch cho 5 chi nhánh, 30 kho, khoảng 7.000 SKU, 100 người dùng và hơn 800 hóa đơn mỗi ngày.",
      context: ["Phân phối", "5 chi nhánh", "30 kho", "~7.000 SKU", "100 người dùng"],
      challenge: "Bán hàng, kho, tài chính và vận hành làm việc qua nhiều bước rời rạc và kiểm tra thủ công. Việc đồng bộ tồn kho và hóa đơn điện tử hằng đêm cũng phải ổn định ở khối lượng thực tế.",
      ownership: "Dẫn dắt phân tích AS-IS / TO-BE, viết BRD và user story, quy trình, wireframe, đặc tả chức năng, báo cáo SQL, mapping dữ liệu gốc, UAT, chuyển đổi dữ liệu, hỗ trợ backlog, đào tạo và kiểm thử tích hợp.",
      delivery: "Kết nối Order-to-Cash với Bán hàng, Mua hàng, Kho, POS, Tài chính, CRM, HRM, Sản xuất, Báo cáo và Phê duyệt. Điều phối luồng ERP–DMS và hóa đơn điện tử Viettel.",
      outcome: "Tăng 70% hiệu suất xử lý đơn hàng, đáp ứng hơn 800 hóa đơn mỗi ngày và đồng bộ hằng đêm ổn định."
    }
  },

  "02": {
    slug: "erp-construction",
    company: "Gia Cat Technology", period: "2023 – 2024",
    tools: ["Workshops", "Use cases", "Configuration", "Data migration", "UAT", "Training", "HRM / Payroll", "E-office"],
    metrics: [
      { value: "−25%", en: "approval turnaround", vi: "thời gian phê duyệt" },
      { value: "2,000+", en: "employees trained", vi: "nhân sự được đào tạo" }
    ],
    en: {
      kicker: "Enterprise rollout · Construction",
      title: "Real-time control across 160+ construction projects",
      summary: "A cross-functional ERP rollout spanning project, supply, warehouse, finance, HR, e-office and cost-management processes for a 2,000+ employee organization.",
      context: ["Construction", "160+ projects", "8 departments", "2,000+ employees"],
      challenge: "Eight departments needed consistent workflows and visibility across more than 160 projects without breaking the operational realities of each function.",
      ownership: "Ran workshops with 50+ stakeholders, documented requirements and use cases, supported configuration and integration, prepared data migration, executed 40+ UAT cases, and enabled deployment and training.",
      delivery: "Aligned project management, supply management, warehouse management, finance, HRM, e-office and construction project management into a shared ERP model.",
      outcome: "Enabled real-time project cost tracking and automated payroll, trained 2,000+ employees and reduced approval turnaround by 25%."
    },
    vi: {
      kicker: "Triển khai doanh nghiệp · Xây dựng",
      title: "Kiểm soát theo thời gian thực trên hơn 160 dự án xây dựng",
      summary: "Triển khai ERP liên phòng ban cho các quy trình dự án, cung ứng, kho, tài chính, nhân sự, văn phòng điện tử và quản lý chi phí của một doanh nghiệp hơn 2.000 nhân sự.",
      context: ["Xây dựng", "160+ dự án", "8 phòng ban", "2.000+ nhân sự"],
      challenge: "Tám phòng ban cần quy trình thống nhất và nhìn được toàn bộ hơn 160 dự án, mà không phá vỡ thực tế vận hành của từng bộ phận.",
      ownership: "Tổ chức workshop với hơn 50 bên liên quan, viết yêu cầu và use case, hỗ trợ cấu hình và tích hợp, chuẩn bị chuyển đổi dữ liệu, chạy hơn 40 kịch bản UAT, hỗ trợ triển khai và đào tạo.",
      delivery: "Đưa quản lý dự án, cung ứng, kho, tài chính, HRM, văn phòng điện tử và quản lý thi công về chung một mô hình ERP.",
      outcome: "Theo dõi chi phí dự án theo thời gian thực, tự động hóa tính lương, đào tạo hơn 2.000 nhân sự và giảm 25% thời gian phê duyệt."
    }
  },

  "03": {
    slug: "edi-onboarding",
    company: "TrueCommerce", period: "2026",
    tools: ["ANSI X12", "JSON", "XML", "Gap analysis", "Source-to-target mapping", "UAT evidence", "NetSuite touchpoints"],
    metrics: [
      { value: "4", en: "document flows onboarded", vi: "luồng chứng từ được onboard" },
      { value: "−30%", en: "onboarding lead time", vi: "thời gian onboard" }
    ],
    en: {
      kicker: "EDI onboarding · Industrial supply chain",
      title: "Four document flows, one traceable integration path",
      summary: "An integration workstream covering Orders, PO Acknowledgement, ASN and Invoice between supplier and customer systems. Client identities are generalized for confidentiality.",
      context: ["Industrial supply chain", "4 transaction flows", "2 test environments", "Client anonymized"],
      challenge: "Each business document needed aligned specifications, samples, mapping decisions, test routing and release coordination across teams and environments.",
      ownership: "Produced gap analyses, clarified source-to-target fields, coordinated mapping releases and routes, tracked test readiness, and investigated duplicate-document and parsing failures.",
      delivery: "Worked across ANSI X12, JSON and XML representations with NetSuite-related integration touchpoints and structured UAT evidence.",
      outcome: "Established a traceable delivery path for four transaction flows and reduced ambiguity between customer requirements, mapping work and integration routing."
    },
    vi: {
      kicker: "EDI onboarding · Chuỗi cung ứng công nghiệp",
      title: "Bốn luồng chứng từ, một lộ trình tích hợp truy vết được",
      summary: "Hạng mục tích hợp cho Orders, PO Acknowledgement, ASN và Invoice giữa hệ thống của nhà cung cấp và khách hàng. Tên khách hàng được ẩn vì bảo mật.",
      context: ["Chuỗi cung ứng công nghiệp", "4 luồng giao dịch", "2 môi trường test", "Khách hàng ẩn danh"],
      challenge: "Mỗi loại chứng từ cần thống nhất đặc tả, file mẫu, quyết định mapping, định tuyến test và phối hợp release giữa nhiều đội và môi trường.",
      ownership: "Viết phân tích gap, làm rõ trường nguồn–đích, điều phối release mapping và định tuyến, theo dõi mức sẵn sàng test, điều tra lỗi trùng chứng từ và lỗi parse.",
      delivery: "Làm việc trên ANSI X12, JSON và XML, với các điểm tích hợp liên quan NetSuite và bằng chứng UAT có cấu trúc.",
      outcome: "Thiết lập lộ trình bàn giao truy vết được cho bốn luồng giao dịch, giảm mơ hồ giữa yêu cầu khách hàng, việc mapping và định tuyến tích hợp."
    }
  },

  "04": {
    slug: "automotive-labels",
    company: "TrueCommerce", period: "2026",
    tools: ["X12 830", "X12 862", "X12 856", "INI configuration", "Supplier master data", "Label rules", "Edge-case catalog"],
    metrics: [
      { value: "4", en: "label types specified", vi: "loại nhãn được đặc tả" },
      { value: "4 / 4", en: "passed customer validation", vi: "đạt kiểm tra của khách hàng" }
    ],
    en: {
      kicker: "Automotive compliance · EDI + labels",
      title: "EDI-to-label rules that survive real packaging complexity",
      summary: "A functional model for bag, container, master and mixed-master labels, driven by EDI inputs, configuration rules and supplier-maintained reference data.",
      context: ["Automotive", "4 label types", "3 EDI inputs", "Client anonymized"],
      challenge: "The platform supported only inner and outer packaging levels, while the customer required four label behaviors, dynamic country-of-origin values and drawing information that EDI messages do not carry.",
      ownership: "Clarified packaging definitions, traced where each data element comes from, specified serial and package-ID behavior, defined dynamic label conditions, and turned customer feedback into buildable rules.",
      delivery: "Assessed 830, 862 and 856 inputs alongside INI configuration and supplier master data; documented edge cases for mixed origins and multi-bag containers.",
      outcome: "Converted ambiguous compliance language into field-level rules that development and customer teams could validate consistently."
    },
    vi: {
      kicker: "Tuân thủ ngành ô tô · EDI + nhãn",
      title: "Quy tắc từ EDI ra nhãn, đứng vững trước độ phức tạp đóng gói thực tế",
      summary: "Mô hình chức năng cho nhãn bag, container, master và mixed-master, dựa trên dữ liệu EDI, quy tắc cấu hình và dữ liệu tham chiếu do nhà cung cấp duy trì.",
      context: ["Ô tô", "4 loại nhãn", "3 nguồn EDI", "Khách hàng ẩn danh"],
      challenge: "Nền tảng chỉ hỗ trợ hai cấp đóng gói trong và ngoài, trong khi khách hàng yêu cầu bốn kiểu nhãn, xuất xứ thay đổi linh hoạt và thông tin bản vẽ không có trong message EDI.",
      ownership: "Làm rõ định nghĩa đóng gói, truy nguồn từng trường dữ liệu, đặc tả cách sinh serial và package ID, định nghĩa điều kiện nhãn động, chuyển phản hồi của khách hàng thành quy tắc xây được.",
      delivery: "Đánh giá dữ liệu 830, 862 và 856 cùng cấu hình INI và dữ liệu gốc nhà cung cấp; ghi lại các trường hợp biên về xuất xứ hỗn hợp và container nhiều bag.",
      outcome: "Biến ngôn ngữ tuân thủ mơ hồ thành quy tắc ở mức trường dữ liệu mà đội phát triển và khách hàng kiểm chứng được một cách nhất quán."
    }
  }
};

window.ROLES = {
  ba: {
    cv: "ba",
    tools: "BPMN · SQL · Jira · Confluence · Figma · Postman",
    en: { kicker: "Best fit when the problem is ambiguous", title: "I turn operations into requirements teams can build and test.", points: ["Discovery workshops, AS-IS / TO-BE and gap analysis", "BRD, functional specs, user stories and acceptance criteria", "Data mapping, UAT, migration, training and adoption"], cta: "Download ERP BA CV" },
    vi: { kicker: "Phù hợp nhất khi bài toán còn mơ hồ", title: "Tôi biến vận hành thành yêu cầu mà đội dự án xây và kiểm thử được.", points: ["Workshop khảo sát, AS-IS / TO-BE và phân tích gap", "BRD, đặc tả chức năng, user story và tiêu chí nghiệm thu", "Mapping dữ liệu, UAT, chuyển đổi dữ liệu, đào tạo và đưa vào sử dụng"], cta: "Tải CV ERP BA" }
  },
  integration: {
    cv: "integration",
    tools: "ANSI X12 · JSON · XML · REST APIs · SQL · Postman · ERP / DMS",
    en: { kicker: "Best fit when systems must agree", title: "I make cross-system data flows understandable, testable and resilient.", points: ["EDI / API field mapping, envelopes, identifiers and validation rules", "Gap analysis, routing, UAT scenarios and traceable test evidence", "Failure analysis: duplicates, timeouts, idempotency and reconciliation"], cta: "Download Integration CV" },
    vi: { kicker: "Phù hợp nhất khi các hệ thống phải khớp nhau", title: "Tôi làm cho luồng dữ liệu giữa các hệ thống dễ hiểu, kiểm thử được và bền vững.", points: ["Mapping trường EDI / API, envelope, định danh và quy tắc kiểm tra", "Phân tích gap, định tuyến, kịch bản UAT và bằng chứng test truy vết được", "Phân tích lỗi: trùng lặp, timeout, idempotency và đối soát"], cta: "Tải CV Integration" }
  },
  po: {
    cv: "ba",
    tools: "Roadmaps · User stories · Acceptance criteria · Scrum · Kanban · Jira",
    en: { kicker: "Best fit when delivery needs focus", title: "I connect product priorities to operational value and delivery evidence.", points: ["Backlog structure, refinement and outcome-based prioritization", "Stakeholder alignment across business, delivery and support", "Sprint planning, acceptance decisions and feedback loops"], cta: "Download ERP BA CV" },
    vi: { kicker: "Phù hợp nhất khi việc bàn giao cần trọng tâm", title: "Tôi nối ưu tiên sản phẩm với giá trị vận hành và bằng chứng bàn giao.", points: ["Cấu trúc backlog, refinement và ưu tiên theo kết quả", "Thống nhất các bên: nghiệp vụ, triển khai và hỗ trợ", "Lập kế hoạch sprint, quyết định nghiệm thu và vòng phản hồi"], cta: "Tải CV ERP BA" }
  }
};

window.SUMMARY = {
  en: "Ta Quoc Thien Trung is an ERP Business Analyst and Integration Engineer in Ho Chi Minh City. He has 3+ years of experience turning business operations into ERP products and EDI integrations, and is currently an Integration Engineer at TrueCommerce. His work includes a multi-branch distribution ERP supporting 800+ invoices/day (+70% order-processing efficiency), an ERP rollout for 2,000+ employees across 160+ construction projects (−25% approval turnaround), and B2B EDI flows covering Orders, PO Acknowledgement, ASN and Invoice. Strong across discovery, AS-IS/TO-BE, functional specs, X12 mapping, UAT and go-live. English IELTS 7.0 / TOEIC 865, Japanese JLPT N3.",
  vi: "Tạ Quốc Thiện Trung là ERP Business Analyst và Integration Engineer tại TP. Hồ Chí Minh, có hơn 3 năm kinh nghiệm biến vận hành doanh nghiệp thành sản phẩm ERP và tích hợp EDI; hiện là Integration Engineer tại TrueCommerce. Dự án tiêu biểu: ERP cho nhà phân phối nhiều chi nhánh với hơn 800 hóa đơn/ngày (tăng 70% hiệu suất xử lý đơn), triển khai ERP cho hơn 2.000 nhân sự trên hơn 160 dự án xây dựng (giảm 25% thời gian phê duyệt), và các luồng EDI B2B gồm Orders, PO Acknowledgement, ASN và Invoice. Mạnh về khảo sát, AS-IS/TO-BE, đặc tả chức năng, mapping X12, UAT và go-live. Tiếng Anh IELTS 7.0 / TOEIC 865, tiếng Nhật JLPT N3."
};
