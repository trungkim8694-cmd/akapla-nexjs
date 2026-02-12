(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([
  typeof document === "object" ? document.currentScript : undefined,
  "[project]/translations.ts [app-client] (ecmascript)",
  (__turbopack_context__) => {
    "use strict";

    __turbopack_context__.s(["translations", () => translations]);
    const translations = {
      JP: {
        nav: {
          about: "会社概要",
          process: "業務プロセス",
          rfq: "お見積り",
          bridge: "日本-ベトナム 架け橋",
        },
        hero: {
          tag: "ベトナム製造パートナー",
          title1: "日本品質の技術を、",
          title2: "ベトナムの製造力で。",
          desc: "Akaplaは、日本の厳格な技術基準とベトナムのコスト効率の高い大規模製造インフラを繋ぎます。次世代の信頼できる産業サプライチェーン管理を提供します。",
          btnStart: "RFQを開始する",
          btnService: "サービス紹介",
        },
        about: {
          tag: "Akaplaについて",
          title: "日本工学とベトナム工場の 信頼できる架け橋",
          desc: "ベトナムでの製造委託における最大の課題は「品質管理」と「コミュニケーション」です。Akaplaは、日本企業の要求品質を深く理解した「ブリッジエンジニア」が全プロセスを徹底管理. 日本水準のQCDをお約束します。",
          points: [
            {
              title: "深い文化理解",
              desc: "弊社のエンジニアは日本語が堪能で, 日本の製造現場での経験があります。",
            },
            {
              title: "厳格な品質管理",
              desc: "材料から出荷まで, 各段階で独立したQCチェックを実施します。",
            },
            {
              title: "シームレスな対話",
              desc: "言語の壁を排除し, 日本語によるリアルタイムな進捗報告を行います。",
            },
          ],
          badge: "日本品質基準(JIS)への100%コミットメント",
        },
        network: {
          tag: "製造ネットワーク",
          title: "ベトナムにおける広大な製造ネットワーク",
          slogan:
            "あらゆるニーズ、規模、難易度に対応可能な最適な工場を提案します",
          trustStat: "100+",
          trustLabel: "戦略的提携パートナー工場",
          cards: [
            {
              title: "多様な専門分野",
              desc: "CNC加工、射出成形、板金、電子機器(EMS)など、幅広い産業に対応。",
            },
            {
              title: "大規模生産体制",
              desc: "小ロット試作から大規模量産まで、ベトナム全土の拠点で対応可能です。",
            },
            {
              title: "厳格な品質管理",
              desc: "ISO取得済みかつ日本企業との取引実績豊富な工場のみを厳選。",
            },
            {
              title: "高い柔軟性",
              desc: "急な設計変更や短納期にも、ネットワークを活かして柔軟に対応します。",
            },
          ],
        },
        process: {
          tag: "私たちの手法",
          title: "シームレスな7ステップ",
          steps: [
            {
              number: 1,
              title: "RFQ受付",
              desc: "図面と要件を安全なフォーム経由で受領。",
            },
            {
              number: 2,
              title: "技術審査",
              desc: "製造可能性と品質基準をエンジニアが精査。",
            },
            {
              number: 3,
              title: "見積提出",
              desc: "最適な工場を選定し、競争力のある価格を提示。",
            },
            {
              number: 4,
              title: "工場見学 & 試作",
              desc: "現地視察や通訳サポート、プロジェクト前の試作作成で安心を提供します。",
            },
            {
              number: 5,
              title: "契約締結・着金",
              desc: "法的・技術的条件を確定。前払金（50%）を決済し生産開始。",
            },
            {
              number: 6,
              title: "生産・検査",
              desc: "ブリッジエンジニアが現地で徹底した品質管理を実施。",
            },
            {
              number: 7,
              title: "納品・決済",
              desc: "最終検査合格後、納品と残金（50%）の精算。",
            },
          ],
        },
        rfq: {
          title: "お見積り依頼",
          desc: "無料評価のために技術図面（PDF/CAD）をお送りください。弊社のブリッジエンジニアが48時間以内に回答いたします。",
          labels: {
            company: "会社名",
            email: "連絡先メールアドレス",
            category: "製品カテゴリ",
            file: "技術図面 (PDF/CAD, 最大1GB)",
            notes: "特別な要件 / 備考",
            visitRequest: "工場見学・試作の希望",
            nda: "秘密保持契約 (NDA) に同意します。",
            submit: "見積りを依頼する",
            sending: "送信中...",
            successTitle: "送信完了!",
            successDesc: "RFQを受け付けました。近日中にご連絡いたします。",
            reset: "新しいフォームを送る",
          },
          visitOptions: [
            "希望しない",
            "工場見学を希望",
            "試作(プロトタイプ)を希望",
            "両方を希望",
            "相談したい",
          ],
          categories: [
            "精密機械加工 (CNC)",
            "射出成形",
            "板金加工",
            "PCBA & 電子機器",
            "その他",
          ],
          fileError: "ファイルサイズが大きすぎます。最大1GBまで可能です。",
        },
        footer: {
          desc: "日本とベトナムのベストを繋ぐことで、グローバルサプライチェーンを強化します。",
          vnHq: "ベトナム本社: CÔNG TY TNHH AKAPLA",
          vnAddr: "VĨNH TƯỜNG - PHÚ THỌ - VIỆT NAM",
          vnTax: "企業コード: 2500747386",
          vnPhone: "電話: 0973080694",
          jpHq: "日本支社: TQC株式会社",
          jpAddr: "〒171-0022 南池袋2-33-6佐藤ビルディング3F",
          jpPhone: "電話: 03-6907-1219",
          jpFax: "FAX: (03) 6701-2399",
          nav: "ナビゲーション",
        },
      },
      EN: {
        nav: {
          about: "About Us",
          process: "Process",
          rfq: "Request Quote",
          bridge: "Japan-Vietnam Bridge",
        },
        hero: {
          tag: "Manufacturing Partner",
          title1: "Japanese Standards,",
          title2: "Vietnamese Production.",
          desc: "Akapla bridges Japan's rigorous technical standards with Vietnam's cost-efficient manufacturing infrastructure. Reliable Supply Chain Management for the future.",
          btnStart: "Start RFQ",
          btnService: "Our Services",
        },
        about: {
          tag: "About Akapla",
          title: "The Trustworthy Bridge Between JP Engineering & VN Factories",
          desc: "Quality control and communication are the biggest challenges in Vietnamese outsourcing. Our 'Bridge Engineers' understand Japanese quality requirements and manage the entire process.",
          points: [
            {
              title: "Deep Cultural Understanding",
              desc: "Our engineers are fluent in Japanese with JP manufacturing experience.",
            },
            {
              title: "Rigorous Quality Control",
              desc: "Independent QC checks at every stage, from material to shipping.",
            },
            {
              title: "Seamless Communication",
              desc: "Real-time updates in Japanese/English, avoiding language barriers.",
            },
          ],
          badge: "100% Commitment to Japanese Standards (JIS).",
        },
        network: {
          tag: "Manufacturing Network",
          title: "Extensive Manufacturing Network in Vietnam",
          slogan:
            "The right factory for every need, every scale, and every level of complexity.",
          trustStat: "100+",
          trustLabel: "Strategic Partner Factories",
          cards: [
            {
              title: "Diverse Specialization",
              desc: "Covering CNC, injection molding, sheet metal, PCBA, and more.",
            },
            {
              title: "Large-Scale Capacity",
              desc: "From low-volume prototypes to mass production across Vietnam.",
            },
            {
              title: "Strict Quality Audit",
              desc: "Carefully selected factories with ISO certification and JP track records.",
            },
            {
              title: "High Flexibility",
              desc: "Swiftly adapting to design changes and tight deadlines using our network.",
            },
          ],
        },
        process: {
          tag: "Our Methodology",
          title: "Seamless 7-Step Workflow",
          steps: [
            {
              number: 1,
              title: "RFQ Receipt",
              desc: "Drawings and requirements sent via secure form.",
            },
            {
              number: 2,
              title: "Technical Audit",
              desc: "Engineers audit manufacturability and quality standards.",
            },
            {
              number: 3,
              title: "Preliminary Quote",
              desc: "Selecting the best factory and presenting competitive pricing.",
            },
            {
              number: 4,
              title: "Factory Visit & Prototype",
              desc: "Site visits and prototyping to verify quality before major commitment.",
            },
            {
              number: 5,
              title: "Contract & Deposit",
              desc: "Finalizing terms and 50% advance payment to start production.",
            },
            {
              number: 6,
              title: "Production & QC",
              desc: "Bridge engineers manage local quality onsite.",
            },
            {
              number: 7,
              title: "Delivery & Final Pay",
              desc: "Final inspection, delivery, and remaining 50% payment.",
            },
          ],
        },
        rfq: {
          title: "Request for Quote",
          desc: "Send us your technical drawings (PDF/CAD) for a free evaluation. Our engineers will respond within 48 hours.",
          labels: {
            company: "Company Name",
            email: "Contact Email",
            category: "Product Category",
            file: "Technical Drawing (PDF/CAD, Max 1GB)",
            notes: "Special Requirements / Notes",
            visitRequest: "Request Factory Visit/Prototype",
            nda: "I agree to the confidentiality terms (NDA).",
            submit: "Request RFQ",
            sending: "Sending...",
            successTitle: "Submission Successful!",
            successDesc:
              "We have received your RFQ. Our team will contact you shortly.",
            reset: "Submit another form",
          },
          visitOptions: [
            "None",
            "Factory Visit",
            "Prototyping",
            "Both",
            "Need Consultation",
          ],
          categories: [
            "Precision Machining (CNC)",
            "Injection Molding",
            "Sheet Metal Fabrication",
            "PCBA & Electronics",
            "Other",
          ],
          fileError: "File is too large. Maximum size is 1GB.",
        },
        footer: {
          desc: "Empowering global supply chains by bridging the best of Japan and Vietnam.",
          vnHq: "Vietnam HQ: CÔNG TY TNHH AKAPLA",
          vnAddr: "VĨNH TƯỜNG - PHÚ THỌ - VIỆT NAM",
          vnTax: "Tax ID: 2500747386",
          vnPhone: "Tel: 0973080694",
          jpHq: "Japan Branch: TQC Co., Ltd.",
          jpAddr:
            "3F Sato Building, 2-33-6 Minami-Ikebukuro, Toshima-ku, Tokyo 171-0022",
          jpPhone: "Tel: 03-6907-1219",
          jpFax: "Fax: (03) 6701-2399",
          nav: "Navigation",
        },
      },
      VN: {
        nav: {
          about: "Về chúng tôi",
          process: "Quy trình",
          rfq: "Báo giá",
          bridge: "Cầu nối Nhật - Việt",
        },
        hero: {
          tag: "Đối tác sản xuất Việt Nam",
          title1: "Tiêu chuẩn Nhật Bản,",
          title2: "Sản xuất tại Việt Nam.",
          desc: "Akapla kết nối tiêu chuẩn kỹ thuật khắt khe của Nhật Bản với hạ tầng sản xuất chi phí tối ưu của Việt Nam. Quản lý chuỗi cung ứng công nghiệp tin cậy cho tương lai.",
          btnStart: "Bắt đầu RFQ",
          btnService: "Dịch vụ của chúng tôi",
        },
        about: {
          tag: "Về Akapla",
          title: "Cầu nối tin cậy giữa Kỹ thuật Nhật Bản & Nhà máy Việt Nam",
          desc: "Quản lý chất lượng và giao tiếp là thách thức lớn nhất khi thuê ngoài tại Việt Nam. Các 'Kỹ sư cầu nối' của chúng tôi hiểu rõ yêu cầu chất lượng Nhật Bản và quản lý toàn bộ quy trình.",
          points: [
            {
              title: "Am hiểu văn hóa sâu sắc",
              desc: "Kỹ sư của chúng tôi sử dụng thành thạo tiếng Nhật và có kinh nghiệm sản xuất tại Nhật.",
            },
            {
              title: "Kiểm soát chất lượng nghiêm ngặt",
              desc: "Kiểm tra QC độc lập ở mọi giai đoạn, từ nguyên liệu đến khi xuất xưởng.",
            },
            {
              title: "Giao tiếp thông suốt",
              desc: "Cập nhật thời gian thực bằng tiếng Nhật/Anh/Việt, xóa bỏ rào cản ngôn ngữ.",
            },
          ],
          badge: "Cam kết 100% tiêu chuẩn chất lượng Nhật Bản (JIS).",
        },
        network: {
          tag: "Mạng lưới sản xuất",
          title: "Mạng lưới sản xuất quy mô tại Việt Nam",
          slogan: "Mọi nhu cầu, mọi quy mô, mọi độ khó đều có nhà máy phù hợp.",
          trustStat: "100+",
          trustLabel: "Đối tác xưởng sản xuất chiến lược",
          cards: [
            {
              title: "Đa dạng lĩnh vực",
              desc: "Gia công CNC, đúc nhựa, tấm kim loại, PCBA và nhiều mảng khác.",
            },
            {
              title: "Quy mô lớn",
              desc: "Từ sản xuất mẫu nhỏ đến hàng loạt quy mô lớn trên khắp Việt Nam.",
            },
            {
              title: "Quản lý chất lượng",
              desc: "Hệ thống nhà máy đạt chuẩn ISO, giàu kinh nghiệm làm việc với Nhật.",
            },
            {
              title: "Sự linh hoạt",
              desc: "Thích ứng nhanh với thay đổi thiết kế và tiến độ gấp nhờ mạng lưới rộng.",
            },
          ],
        },
        process: {
          tag: "Phương pháp của chúng tôi",
          title: "Quy trình 7 bước tối ưu",
          steps: [
            {
              number: 1,
              title: "Tiếp nhận RFQ",
              desc: "Gửi bản vẽ và yêu cầu qua biểu mẫu bảo mật.",
            },
            {
              number: 2,
              title: "Thẩm định kỹ thuật",
              desc: "Kỹ sư thẩm định khả năng sản xuất và tiêu chuẩn chất lượng.",
            },
            {
              number: 3,
              title: "Báo giá sơ bộ",
              desc: "Lựa chọn nhà máy tối ưu và đưa ra mức giá cạnh tranh.",
            },
            {
              number: 4,
              title: "Thăm xưởng & Làm mẫu",
              desc: "Hỗ trợ đưa đón, phiên dịch kỹ thuật thăm xưởng. Khuyến khích đặt mẫu thử để kiểm chứng.",
            },
            {
              number: 5,
              title: "Hợp đồng & Đặt cọc",
              desc: "Ký hợp đồng và thanh toán 50% để bắt đầu sản xuất.",
            },
            {
              number: 6,
              title: "Sản xuất & QC",
              desc: "Kỹ sư cầu nối trực tiếp quản lý chất lượng tại hiện trường.",
            },
            {
              number: 7,
              title: "Giao hàng & Tất toán",
              desc: "Kiểm tra lần cuối, giao hàng và thanh toán 50% còn lại.",
            },
          ],
        },
        rfq: {
          title: "Yêu cầu báo giá",
          desc: "Gửi bản vẽ kỹ thuật (PDF/CAD) để được đánh giá miễn phí. Kỹ sư của chúng tôi sẽ phản hồi trong vòng 48 giờ.",
          labels: {
            company: "Tên công ty",
            email: "Email liên hệ",
            category: "Danh mục sản phẩm",
            file: "Bản vẽ kỹ thuật (PDF/CAD, Tối đa 1GB)",
            notes: "Yêu cầu đặc biệt / Ghi chú",
            visitRequest: "Yêu cầu thăm xưởng / Làm mẫu thử",
            nda: "Tôi đồng ý với các điều khoản bảo mật (NDA).",
            submit: "Gửi yêu cầu RFQ",
            sending: "Đang gửi...",
            successTitle: "Gửi thành công!",
            successDesc:
              "Chúng tôi đã nhận được RFQ của bạn. Đội ngũ sẽ liên hệ sớm nhất.",
            reset: "Gửi biểu mẫu khác",
          },
          visitOptions: [
            "Không",
            "Thăm xưởng trực tiếp",
            "Sản xuất mẫu thử",
            "Cả hai",
            "Cần tư vấn thêm",
          ],
          categories: [
            "Gia công chính xác (CNC)",
            "Đúc ép nhựa",
            "Gia công tấm kim loại",
            "PCBA & Điện tử",
            "Khác",
          ],
          fileError: "Tệp quá lớn. Dung lượng tối đa là 1GB.",
        },
        footer: {
          desc: "Tăng cường chuỗi cung ứng toàn cầu bằng cách kết nối những giá trị tốt nhất của Nhật Bản và Việt Nam.",
          vnHq: "Trụ sở chính VN: CÔNG TY TNHH AKAPLA",
          vnAddr: "VĨNH TƯỜNG - PHÚ THỌ - VIỆT NAM",
          vnTax: "MST: 2500747386",
          vnPhone: "SĐT: 0973080694",
          jpHq: "Chi nhánh Nhật Bản: TQC株式会社",
          jpAddr:
            "3F Sato Building, 2-33-6 Minami-Ikebukuro, Toshima-ku, Tokyo 171-0022",
          jpPhone: "SĐT: 03-6907-1219",
          jpFax: "Fax: (03) 6701-2399",
          nav: "Điều hướng",
        },
      },
    };
    if (
      typeof globalThis.$RefreshHelpers$ === "object" &&
      globalThis.$RefreshHelpers !== null
    ) {
      __turbopack_context__.k.registerExports(
        __turbopack_context__.m,
        globalThis.$RefreshHelpers$,
      );
    }
  },
  "[project]/components/Navbar.tsx [app-client] (ecmascript)",
  (__turbopack_context__) => {
    "use strict";

    __turbopack_context__.s(["default", () => __TURBOPACK__default__export__]);
    var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        "[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)",
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        "[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)",
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$translations$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        "[project]/translations.ts [app-client] (ecmascript)",
      );
    var _s = __turbopack_context__.k.signature();
    ("use client");
    const Navbar = ({ lang, toggleLanguage }) => {
      _s();
      const [isScrolled, setIsScrolled] = (0,
      __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
        "useState"
      ])(false);
      const t =
        __TURBOPACK__imported__module__$5b$project$5d2f$translations$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
          "translations"
        ][lang].nav;
      (0,
      __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
        "useEffect"
      ])(
        {
          "Navbar.useEffect": () => {
            const handleScroll = {
              "Navbar.useEffect.handleScroll": () => {
                setIsScrolled(window.scrollY > 50);
              },
            }["Navbar.useEffect.handleScroll"];
            window.addEventListener("scroll", handleScroll);
            return {
              "Navbar.useEffect": () =>
                window.removeEventListener("scroll", handleScroll),
            }["Navbar.useEffect"];
          },
        }["Navbar.useEffect"],
        [],
      );
      const scrollToTop = (e) => {
        e.preventDefault();
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      };
      return /*#__PURE__*/ (0,
      __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
        "jsxDEV"
      ])(
        "nav",
        {
          className: `fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? "bg-white/95 backdrop-blur-md shadow-sm py-3" : "bg-transparent py-5"}`,
          children: /*#__PURE__*/ (0,
          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
            "jsxDEV"
          ])(
            "div",
            {
              className:
                "container mx-auto px-6 flex justify-between items-center",
              children: [
                /*#__PURE__*/ (0,
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                  "jsxDEV"
                ])(
                  "a",
                  {
                    href: "#home",
                    onClick: scrollToTop,
                    className:
                      "flex items-center space-x-2 cursor-pointer group",
                    children: [
                      /*#__PURE__*/ (0,
                      __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                        "jsxDEV"
                      ])(
                        "span",
                        {
                          className: `text-2xl font-bold tracking-tighter transition-colors ${isScrolled ? "text-blue-900" : "text-white md:text-blue-900"}`,
                          children: "AKAPLA",
                        },
                        void 0,
                        false,
                        {
                          fileName: "[project]/components/Navbar.tsx",
                          lineNumber: 37,
                          columnNumber: 11,
                        },
                        ("TURBOPACK compile-time value", void 0),
                      ),
                      /*#__PURE__*/ (0,
                      __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                        "jsxDEV"
                      ])(
                        "div",
                        {
                          className: "hidden md:block w-1 h-6 bg-red-600",
                        },
                        void 0,
                        false,
                        {
                          fileName: "[project]/components/Navbar.tsx",
                          lineNumber: 40,
                          columnNumber: 11,
                        },
                        ("TURBOPACK compile-time value", void 0),
                      ),
                      /*#__PURE__*/ (0,
                      __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                        "jsxDEV"
                      ])(
                        "span",
                        {
                          className: `hidden md:block text-xs font-semibold uppercase tracking-widest ${isScrolled ? "text-slate-500" : "text-slate-300"}`,
                          children: t.bridge,
                        },
                        void 0,
                        false,
                        {
                          fileName: "[project]/components/Navbar.tsx",
                          lineNumber: 41,
                          columnNumber: 11,
                        },
                        ("TURBOPACK compile-time value", void 0),
                      ),
                    ],
                  },
                  void 0,
                  true,
                  {
                    fileName: "[project]/components/Navbar.tsx",
                    lineNumber: 32,
                    columnNumber: 9,
                  },
                  ("TURBOPACK compile-time value", void 0),
                ),
                /*#__PURE__*/ (0,
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                  "jsxDEV"
                ])(
                  "div",
                  {
                    className: "flex items-center space-x-4 md:space-x-8",
                    children: [
                      /*#__PURE__*/ (0,
                      __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                        "jsxDEV"
                      ])(
                        "div",
                        {
                          className:
                            "hidden lg:flex items-center space-x-8 mr-4",
                          children: [
                            /*#__PURE__*/ (0,
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                              "jsxDEV"
                            ])(
                              "a",
                              {
                                href: "#about",
                                className: `font-medium hover:text-red-600 transition-colors ${isScrolled ? "text-slate-700" : "text-white"}`,
                                children: t.about,
                              },
                              void 0,
                              false,
                              {
                                fileName: "[project]/components/Navbar.tsx",
                                lineNumber: 48,
                                columnNumber: 13,
                              },
                              ("TURBOPACK compile-time value", void 0),
                            ),
                            /*#__PURE__*/ (0,
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                              "jsxDEV"
                            ])(
                              "a",
                              {
                                href: "#process",
                                className: `font-medium hover:text-red-600 transition-colors ${isScrolled ? "text-slate-700" : "text-white"}`,
                                children: t.process,
                              },
                              void 0,
                              false,
                              {
                                fileName: "[project]/components/Navbar.tsx",
                                lineNumber: 49,
                                columnNumber: 13,
                              },
                              ("TURBOPACK compile-time value", void 0),
                            ),
                          ],
                        },
                        void 0,
                        true,
                        {
                          fileName: "[project]/components/Navbar.tsx",
                          lineNumber: 47,
                          columnNumber: 11,
                        },
                        ("TURBOPACK compile-time value", void 0),
                      ),
                      /*#__PURE__*/ (0,
                      __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                        "jsxDEV"
                      ])(
                        "button",
                        {
                          onClick: toggleLanguage,
                          className: `flex items-center space-x-1 px-3 py-1.5 rounded-full border transition-all text-[10px] md:text-xs font-bold ${isScrolled ? "border-slate-200 text-slate-700 hover:bg-slate-50" : "border-white/20 text-white hover:bg-white/10"}`,
                          children: [
                            /*#__PURE__*/ (0,
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                              "jsxDEV"
                            ])(
                              "span",
                              {
                                className:
                                  lang === "JP" ? "text-red-500" : "opacity-40",
                                children: "JP",
                              },
                              void 0,
                              false,
                              {
                                fileName: "[project]/components/Navbar.tsx",
                                lineNumber: 60,
                                columnNumber: 13,
                              },
                              ("TURBOPACK compile-time value", void 0),
                            ),
                            /*#__PURE__*/ (0,
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                              "jsxDEV"
                            ])(
                              "span",
                              {
                                className: "opacity-20",
                                children: "•",
                              },
                              void 0,
                              false,
                              {
                                fileName: "[project]/components/Navbar.tsx",
                                lineNumber: 61,
                                columnNumber: 13,
                              },
                              ("TURBOPACK compile-time value", void 0),
                            ),
                            /*#__PURE__*/ (0,
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                              "jsxDEV"
                            ])(
                              "span",
                              {
                                className:
                                  lang === "EN" ? "text-red-500" : "opacity-40",
                                children: "EN",
                              },
                              void 0,
                              false,
                              {
                                fileName: "[project]/components/Navbar.tsx",
                                lineNumber: 62,
                                columnNumber: 13,
                              },
                              ("TURBOPACK compile-time value", void 0),
                            ),
                            /*#__PURE__*/ (0,
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                              "jsxDEV"
                            ])(
                              "span",
                              {
                                className: "opacity-20",
                                children: "•",
                              },
                              void 0,
                              false,
                              {
                                fileName: "[project]/components/Navbar.tsx",
                                lineNumber: 63,
                                columnNumber: 13,
                              },
                              ("TURBOPACK compile-time value", void 0),
                            ),
                            /*#__PURE__*/ (0,
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                              "jsxDEV"
                            ])(
                              "span",
                              {
                                className:
                                  lang === "VN" ? "text-red-500" : "opacity-40",
                                children: "VN",
                              },
                              void 0,
                              false,
                              {
                                fileName: "[project]/components/Navbar.tsx",
                                lineNumber: 64,
                                columnNumber: 13,
                              },
                              ("TURBOPACK compile-time value", void 0),
                            ),
                          ],
                        },
                        void 0,
                        true,
                        {
                          fileName: "[project]/components/Navbar.tsx",
                          lineNumber: 52,
                          columnNumber: 11,
                        },
                        ("TURBOPACK compile-time value", void 0),
                      ),
                      /*#__PURE__*/ (0,
                      __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                        "jsxDEV"
                      ])(
                        "a",
                        {
                          href: "#rfq",
                          className:
                            "bg-red-600 hover:bg-red-700 text-white px-4 md:px-6 py-2.5 rounded-full text-xs md:text-sm font-bold shadow-lg shadow-red-200 transition-all transform hover:scale-105 whitespace-nowrap",
                          children: t.rfq,
                        },
                        void 0,
                        false,
                        {
                          fileName: "[project]/components/Navbar.tsx",
                          lineNumber: 67,
                          columnNumber: 11,
                        },
                        ("TURBOPACK compile-time value", void 0),
                      ),
                    ],
                  },
                  void 0,
                  true,
                  {
                    fileName: "[project]/components/Navbar.tsx",
                    lineNumber: 46,
                    columnNumber: 9,
                  },
                  ("TURBOPACK compile-time value", void 0),
                ),
              ],
            },
            void 0,
            true,
            {
              fileName: "[project]/components/Navbar.tsx",
              lineNumber: 31,
              columnNumber: 7,
            },
            ("TURBOPACK compile-time value", void 0),
          ),
        },
        void 0,
        false,
        {
          fileName: "[project]/components/Navbar.tsx",
          lineNumber: 30,
          columnNumber: 5,
        },
        ("TURBOPACK compile-time value", void 0),
      );
    };
    _s(Navbar, "UCaI8lpZVGvPrsRoIFYRt2wv0+o=");
    _c = Navbar;
    const __TURBOPACK__default__export__ = Navbar;
    var _c;
    __turbopack_context__.k.register(_c, "Navbar");
    if (
      typeof globalThis.$RefreshHelpers$ === "object" &&
      globalThis.$RefreshHelpers !== null
    ) {
      __turbopack_context__.k.registerExports(
        __turbopack_context__.m,
        globalThis.$RefreshHelpers$,
      );
    }
  },
  "[project]/app/public/intro-bg.png (static in ecmascript, tag client)",
  (__turbopack_context__) => {
    __turbopack_context__.v("/_next/static/media/intro-bg.728bec93.png");
  },
  '[project]/app/public/intro-bg.png.mjs { IMAGE => "[project]/app/public/intro-bg.png (static in ecmascript, tag client)" } [app-client] (structured image object with data url, ecmascript)',
  (__turbopack_context__) => {
    "use strict";

    __turbopack_context__.s(["default", () => __TURBOPACK__default__export__]);
    var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$public$2f$intro$2d$bg$2e$png__$28$static__in__ecmascript$2c$__tag__client$29$__ =
      __turbopack_context__.i(
        "[project]/app/public/intro-bg.png (static in ecmascript, tag client)",
      );
    const __TURBOPACK__default__export__ = {
      src: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$public$2f$intro$2d$bg$2e$png__$28$static__in__ecmascript$2c$__tag__client$29$__[
        "default"
      ],
      width: 1472,
      height: 704,
      blurWidth: 8,
      blurHeight: 4,
      blurDataURL:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAYAAACzzX7wAAAAj0lEQVR42gGEAHv/AFFdZ/8/Tlf/SFpl/1hrdf9WaXP/RFZg/0pXYv9gb3v/AIORnP9qeoX/cYGL/6Gutv+erbT/fo2W/5Khqv+GlqD/AGJze/9LYG7/YHaE/4eYo/99j5n/ip2l/4qdp/96io7/AFZqdP9JYGz/hpui/42epf+LnaT/eY6W/0peaP9bbXb/iWVOT0XfklkAAAAASUVORK5CYII=",
    };
    if (
      typeof globalThis.$RefreshHelpers$ === "object" &&
      globalThis.$RefreshHelpers !== null
    ) {
      __turbopack_context__.k.registerExports(
        __turbopack_context__.m,
        globalThis.$RefreshHelpers$,
      );
    }
  },
  "[project]/components/Hero.tsx [app-client] (ecmascript)",
  (__turbopack_context__) => {
    "use strict";

    __turbopack_context__.s(["default", () => __TURBOPACK__default__export__]);
    var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        "[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)",
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$translations$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        "[project]/translations.ts [app-client] (ecmascript)",
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$public$2f$intro$2d$bg$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$app$2f$public$2f$intro$2d$bg$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ =
      __turbopack_context__.i(
        '[project]/app/public/intro-bg.png.mjs { IMAGE => "[project]/app/public/intro-bg.png (static in ecmascript, tag client)" } [app-client] (structured image object with data url, ecmascript)',
      );
    const Hero = ({ lang }) => {
      const t =
        __TURBOPACK__imported__module__$5b$project$5d2f$translations$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
          "translations"
        ][lang].hero;
      return /*#__PURE__*/ (0,
      __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
        "jsxDEV"
      ])(
        "div",
        {
          className: "relative h-[90vh] flex items-center overflow-hidden",
          children: [
            /*#__PURE__*/ (0,
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
              "jsxDEV"
            ])(
              "div",
              {
                className: "absolute inset-0 z-0",
                children: /*#__PURE__*/ (0,
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                  "jsxDEV"
                ])(
                  "img",
                  {
                    src: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$public$2f$intro$2d$bg$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$app$2f$public$2f$intro$2d$bg$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__[
                      "default"
                    ],
                    alt: "Modern industrial facility",
                    className: "w-full h-full object-cover brightness-[0.4]",
                  },
                  void 0,
                  false,
                  {
                    fileName: "[project]/components/Hero.tsx",
                    lineNumber: 15,
                    columnNumber: 9,
                  },
                  ("TURBOPACK compile-time value", void 0),
                ),
              },
              void 0,
              false,
              {
                fileName: "[project]/components/Hero.tsx",
                lineNumber: 14,
                columnNumber: 7,
              },
              ("TURBOPACK compile-time value", void 0),
            ),
            /*#__PURE__*/ (0,
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
              "jsxDEV"
            ])(
              "div",
              {
                className: "container mx-auto px-6 relative z-10",
                children: /*#__PURE__*/ (0,
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                  "jsxDEV"
                ])(
                  "div",
                  {
                    className: "max-w-4xl",
                    children: [
                      /*#__PURE__*/ (0,
                      __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                        "jsxDEV"
                      ])(
                        "div",
                        {
                          className:
                            "inline-block px-4 py-1.5 mb-6 bg-red-600 text-white text-xs font-bold uppercase tracking-widest rounded-sm",
                          children: t.tag,
                        },
                        void 0,
                        false,
                        {
                          fileName: "[project]/components/Hero.tsx",
                          lineNumber: 24,
                          columnNumber: 11,
                        },
                        ("TURBOPACK compile-time value", void 0),
                      ),
                      /*#__PURE__*/ (0,
                      __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                        "jsxDEV"
                      ])(
                        "h1",
                        {
                          className:
                            "text-4xl md:text-7xl font-bold text-white leading-tight mb-8",
                          children: [
                            /*#__PURE__*/ (0,
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                              "jsxDEV"
                            ])(
                              "span",
                              {
                                className: "block",
                                children: t.title1,
                              },
                              void 0,
                              false,
                              {
                                fileName: "[project]/components/Hero.tsx",
                                lineNumber: 28,
                                columnNumber: 13,
                              },
                              ("TURBOPACK compile-time value", void 0),
                            ),
                            /*#__PURE__*/ (0,
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                              "jsxDEV"
                            ])(
                              "span",
                              {
                                className: "text-red-500",
                                children: t.title2,
                              },
                              void 0,
                              false,
                              {
                                fileName: "[project]/components/Hero.tsx",
                                lineNumber: 29,
                                columnNumber: 13,
                              },
                              ("TURBOPACK compile-time value", void 0),
                            ),
                          ],
                        },
                        void 0,
                        true,
                        {
                          fileName: "[project]/components/Hero.tsx",
                          lineNumber: 27,
                          columnNumber: 11,
                        },
                        ("TURBOPACK compile-time value", void 0),
                      ),
                      /*#__PURE__*/ (0,
                      __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                        "jsxDEV"
                      ])(
                        "p",
                        {
                          className:
                            "text-lg md:text-2xl text-slate-300 mb-10 leading-relaxed max-w-2xl",
                          children: t.desc,
                        },
                        void 0,
                        false,
                        {
                          fileName: "[project]/components/Hero.tsx",
                          lineNumber: 31,
                          columnNumber: 11,
                        },
                        ("TURBOPACK compile-time value", void 0),
                      ),
                      /*#__PURE__*/ (0,
                      __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                        "jsxDEV"
                      ])(
                        "div",
                        {
                          className: "flex flex-col sm:flex-row gap-4",
                          children: [
                            /*#__PURE__*/ (0,
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                              "jsxDEV"
                            ])(
                              "a",
                              {
                                href: "#rfq",
                                className:
                                  "px-10 py-4 bg-white text-blue-900 font-bold rounded-lg text-center hover:bg-slate-100 transition-colors",
                                children: t.btnStart,
                              },
                              void 0,
                              false,
                              {
                                fileName: "[project]/components/Hero.tsx",
                                lineNumber: 35,
                                columnNumber: 13,
                              },
                              ("TURBOPACK compile-time value", void 0),
                            ),
                            /*#__PURE__*/ (0,
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                              "jsxDEV"
                            ])(
                              "a",
                              {
                                href: "#process",
                                className:
                                  "px-10 py-4 border-2 border-white/30 text-white font-bold rounded-lg text-center hover:bg-white/10 transition-colors",
                                children: t.btnService,
                              },
                              void 0,
                              false,
                              {
                                fileName: "[project]/components/Hero.tsx",
                                lineNumber: 41,
                                columnNumber: 13,
                              },
                              ("TURBOPACK compile-time value", void 0),
                            ),
                          ],
                        },
                        void 0,
                        true,
                        {
                          fileName: "[project]/components/Hero.tsx",
                          lineNumber: 34,
                          columnNumber: 11,
                        },
                        ("TURBOPACK compile-time value", void 0),
                      ),
                    ],
                  },
                  void 0,
                  true,
                  {
                    fileName: "[project]/components/Hero.tsx",
                    lineNumber: 23,
                    columnNumber: 9,
                  },
                  ("TURBOPACK compile-time value", void 0),
                ),
              },
              void 0,
              false,
              {
                fileName: "[project]/components/Hero.tsx",
                lineNumber: 22,
                columnNumber: 7,
              },
              ("TURBOPACK compile-time value", void 0),
            ),
            /*#__PURE__*/ (0,
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
              "jsxDEV"
            ])(
              "div",
              {
                className:
                  "absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce hidden md:block",
                children: /*#__PURE__*/ (0,
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                  "jsxDEV"
                ])(
                  "div",
                  {
                    className:
                      "w-1 h-12 bg-gradient-to-b from-white to-transparent rounded-full",
                  },
                  void 0,
                  false,
                  {
                    fileName: "[project]/components/Hero.tsx",
                    lineNumber: 52,
                    columnNumber: 9,
                  },
                  ("TURBOPACK compile-time value", void 0),
                ),
              },
              void 0,
              false,
              {
                fileName: "[project]/components/Hero.tsx",
                lineNumber: 51,
                columnNumber: 7,
              },
              ("TURBOPACK compile-time value", void 0),
            ),
          ],
        },
        void 0,
        true,
        {
          fileName: "[project]/components/Hero.tsx",
          lineNumber: 13,
          columnNumber: 5,
        },
        ("TURBOPACK compile-time value", void 0),
      );
    };
    _c = Hero;
    const __TURBOPACK__default__export__ = Hero;
    var _c;
    __turbopack_context__.k.register(_c, "Hero");
    if (
      typeof globalThis.$RefreshHelpers$ === "object" &&
      globalThis.$RefreshHelpers !== null
    ) {
      __turbopack_context__.k.registerExports(
        __turbopack_context__.m,
        globalThis.$RefreshHelpers$,
      );
    }
  },
  "[project]/components/About.tsx [app-client] (ecmascript)",
  (__turbopack_context__) => {
    "use strict";

    __turbopack_context__.s(["default", () => __TURBOPACK__default__export__]);
    var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        "[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)",
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$translations$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        "[project]/translations.ts [app-client] (ecmascript)",
      );
    const About = ({ lang }) => {
      const t =
        __TURBOPACK__imported__module__$5b$project$5d2f$translations$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
          "translations"
        ][lang].about;
      return /*#__PURE__*/ (0,
      __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
        "jsxDEV"
      ])(
        "div",
        {
          className: "container mx-auto px-6",
          children: /*#__PURE__*/ (0,
          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
            "jsxDEV"
          ])(
            "div",
            {
              className: "grid lg:grid-cols-2 gap-16 items-center",
              children: [
                /*#__PURE__*/ (0,
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                  "jsxDEV"
                ])(
                  "div",
                  {
                    children: [
                      /*#__PURE__*/ (0,
                      __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                        "jsxDEV"
                      ])(
                        "h2",
                        {
                          className:
                            "text-sm font-bold text-red-600 uppercase tracking-widest mb-4",
                          children: t.tag,
                        },
                        void 0,
                        false,
                        {
                          fileName: "[project]/components/About.tsx",
                          lineNumber: 16,
                          columnNumber: 11,
                        },
                        ("TURBOPACK compile-time value", void 0),
                      ),
                      /*#__PURE__*/ (0,
                      __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                        "jsxDEV"
                      ])(
                        "h3",
                        {
                          className:
                            "text-3xl md:text-5xl font-bold text-slate-900 mb-8 leading-tight",
                          children: t.title,
                        },
                        void 0,
                        false,
                        {
                          fileName: "[project]/components/About.tsx",
                          lineNumber: 17,
                          columnNumber: 11,
                        },
                        ("TURBOPACK compile-time value", void 0),
                      ),
                      /*#__PURE__*/ (0,
                      __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                        "jsxDEV"
                      ])(
                        "p",
                        {
                          className:
                            "text-slate-600 text-lg mb-6 leading-relaxed",
                          children: t.desc,
                        },
                        void 0,
                        false,
                        {
                          fileName: "[project]/components/About.tsx",
                          lineNumber: 20,
                          columnNumber: 11,
                        },
                        ("TURBOPACK compile-time value", void 0),
                      ),
                      /*#__PURE__*/ (0,
                      __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                        "jsxDEV"
                      ])(
                        "div",
                        {
                          className: "space-y-6 mb-10",
                          children: t.points.map((item, idx) =>
                            /*#__PURE__*/ (0,
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                              "jsxDEV"
                            ])(
                              "div",
                              {
                                className: "flex gap-4",
                                children: [
                                  /*#__PURE__*/ (0,
                                  __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                    "jsxDEV"
                                  ])(
                                    "div",
                                    {
                                      className:
                                        "flex-shrink-0 w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center text-blue-900 font-bold",
                                      children: ["0", idx + 1],
                                    },
                                    void 0,
                                    true,
                                    {
                                      fileName:
                                        "[project]/components/About.tsx",
                                      lineNumber: 27,
                                      columnNumber: 17,
                                    },
                                    ("TURBOPACK compile-time value", void 0),
                                  ),
                                  /*#__PURE__*/ (0,
                                  __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                    "jsxDEV"
                                  ])(
                                    "div",
                                    {
                                      children: [
                                        /*#__PURE__*/ (0,
                                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                          "jsxDEV"
                                        ])(
                                          "h4",
                                          {
                                            className:
                                              "font-bold text-slate-900 text-xl",
                                            children: item.title,
                                          },
                                          void 0,
                                          false,
                                          {
                                            fileName:
                                              "[project]/components/About.tsx",
                                            lineNumber: 31,
                                            columnNumber: 19,
                                          },
                                          ("TURBOPACK compile-time value",
                                          void 0),
                                        ),
                                        /*#__PURE__*/ (0,
                                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                          "jsxDEV"
                                        ])(
                                          "p",
                                          {
                                            className: "text-slate-500",
                                            children: item.desc,
                                          },
                                          void 0,
                                          false,
                                          {
                                            fileName:
                                              "[project]/components/About.tsx",
                                            lineNumber: 32,
                                            columnNumber: 19,
                                          },
                                          ("TURBOPACK compile-time value",
                                          void 0),
                                        ),
                                      ],
                                    },
                                    void 0,
                                    true,
                                    {
                                      fileName:
                                        "[project]/components/About.tsx",
                                      lineNumber: 30,
                                      columnNumber: 17,
                                    },
                                    ("TURBOPACK compile-time value", void 0),
                                  ),
                                ],
                              },
                              idx,
                              true,
                              {
                                fileName: "[project]/components/About.tsx",
                                lineNumber: 26,
                                columnNumber: 15,
                              },
                              ("TURBOPACK compile-time value", void 0),
                            ),
                          ),
                        },
                        void 0,
                        false,
                        {
                          fileName: "[project]/components/About.tsx",
                          lineNumber: 24,
                          columnNumber: 11,
                        },
                        ("TURBOPACK compile-time value", void 0),
                      ),
                    ],
                  },
                  void 0,
                  true,
                  {
                    fileName: "[project]/components/About.tsx",
                    lineNumber: 15,
                    columnNumber: 9,
                  },
                  ("TURBOPACK compile-time value", void 0),
                ),
                /*#__PURE__*/ (0,
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                  "jsxDEV"
                ])(
                  "div",
                  {
                    className: "relative",
                    children: [
                      /*#__PURE__*/ (0,
                      __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                        "jsxDEV"
                      ])(
                        "div",
                        {
                          className: "rounded-2xl overflow-hidden shadow-2xl",
                          children: /*#__PURE__*/ (0,
                          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                            "jsxDEV"
                          ])(
                            "img",
                            {
                              src: "https://images.unsplash.com/photo-1573161158332-544ce39bc337?q=80&w=2069&auto=format&fit=crop",
                              alt: "Engineers working together",
                              className: "w-full h-auto",
                            },
                            void 0,
                            false,
                            {
                              fileName: "[project]/components/About.tsx",
                              lineNumber: 41,
                              columnNumber: 13,
                            },
                            ("TURBOPACK compile-time value", void 0),
                          ),
                        },
                        void 0,
                        false,
                        {
                          fileName: "[project]/components/About.tsx",
                          lineNumber: 40,
                          columnNumber: 11,
                        },
                        ("TURBOPACK compile-time value", void 0),
                      ),
                      /*#__PURE__*/ (0,
                      __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                        "jsxDEV"
                      ])(
                        "div",
                        {
                          className:
                            "absolute -bottom-8 -left-8 bg-blue-900 text-white p-8 rounded-xl shadow-xl hidden md:block max-w-xs",
                          children: [
                            /*#__PURE__*/ (0,
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                              "jsxDEV"
                            ])(
                              "p",
                              {
                                className: "text-3xl font-bold mb-2",
                                children: "100%",
                              },
                              void 0,
                              false,
                              {
                                fileName: "[project]/components/About.tsx",
                                lineNumber: 48,
                                columnNumber: 13,
                              },
                              ("TURBOPACK compile-time value", void 0),
                            ),
                            /*#__PURE__*/ (0,
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                              "jsxDEV"
                            ])(
                              "p",
                              {
                                className: "text-sm text-blue-200",
                                children: t.badge,
                              },
                              void 0,
                              false,
                              {
                                fileName: "[project]/components/About.tsx",
                                lineNumber: 49,
                                columnNumber: 13,
                              },
                              ("TURBOPACK compile-time value", void 0),
                            ),
                          ],
                        },
                        void 0,
                        true,
                        {
                          fileName: "[project]/components/About.tsx",
                          lineNumber: 47,
                          columnNumber: 11,
                        },
                        ("TURBOPACK compile-time value", void 0),
                      ),
                    ],
                  },
                  void 0,
                  true,
                  {
                    fileName: "[project]/components/About.tsx",
                    lineNumber: 39,
                    columnNumber: 9,
                  },
                  ("TURBOPACK compile-time value", void 0),
                ),
              ],
            },
            void 0,
            true,
            {
              fileName: "[project]/components/About.tsx",
              lineNumber: 14,
              columnNumber: 7,
            },
            ("TURBOPACK compile-time value", void 0),
          ),
        },
        void 0,
        false,
        {
          fileName: "[project]/components/About.tsx",
          lineNumber: 13,
          columnNumber: 5,
        },
        ("TURBOPACK compile-time value", void 0),
      );
    };
    _c = About;
    const __TURBOPACK__default__export__ = About;
    var _c;
    __turbopack_context__.k.register(_c, "About");
    if (
      typeof globalThis.$RefreshHelpers$ === "object" &&
      globalThis.$RefreshHelpers !== null
    ) {
      __turbopack_context__.k.registerExports(
        __turbopack_context__.m,
        globalThis.$RefreshHelpers$,
      );
    }
  },
  "[project]/components/Network.tsx [app-client] (ecmascript)",
  (__turbopack_context__) => {
    "use strict";

    __turbopack_context__.s(["default", () => __TURBOPACK__default__export__]);
    var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        "[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)",
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$translations$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        "[project]/translations.ts [app-client] (ecmascript)",
      );
    const Network = ({ lang }) => {
      const t =
        __TURBOPACK__imported__module__$5b$project$5d2f$translations$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
          "translations"
        ][lang].network;
      const icons = [
        // Diversity
        /*#__PURE__*/ (0,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
          "jsxDEV"
        ])(
          "svg",
          {
            className: "w-8 h-8",
            fill: "none",
            stroke: "currentColor",
            viewBox: "0 0 24 24",
            children: /*#__PURE__*/ (0,
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
              "jsxDEV"
            ])(
              "path",
              {
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: "2",
                d: "M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10",
              },
              void 0,
              false,
              {
                fileName: "[project]/components/Network.tsx",
                lineNumber: 14,
                columnNumber: 92,
              },
              ("TURBOPACK compile-time value", void 0),
            ),
          },
          "0",
          false,
          {
            fileName: "[project]/components/Network.tsx",
            lineNumber: 14,
            columnNumber: 5,
          },
          ("TURBOPACK compile-time value", void 0),
        ),
        // Scale
        /*#__PURE__*/ (0,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
          "jsxDEV"
        ])(
          "svg",
          {
            className: "w-8 h-8",
            fill: "none",
            stroke: "currentColor",
            viewBox: "0 0 24 24",
            children: /*#__PURE__*/ (0,
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
              "jsxDEV"
            ])(
              "path",
              {
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: "2",
                d: "M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9",
              },
              void 0,
              false,
              {
                fileName: "[project]/components/Network.tsx",
                lineNumber: 16,
                columnNumber: 92,
              },
              ("TURBOPACK compile-time value", void 0),
            ),
          },
          "1",
          false,
          {
            fileName: "[project]/components/Network.tsx",
            lineNumber: 16,
            columnNumber: 5,
          },
          ("TURBOPACK compile-time value", void 0),
        ),
        // QC
        /*#__PURE__*/ (0,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
          "jsxDEV"
        ])(
          "svg",
          {
            className: "w-8 h-8",
            fill: "none",
            stroke: "currentColor",
            viewBox: "0 0 24 24",
            children: /*#__PURE__*/ (0,
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
              "jsxDEV"
            ])(
              "path",
              {
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: "2",
                d: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
              },
              void 0,
              false,
              {
                fileName: "[project]/components/Network.tsx",
                lineNumber: 18,
                columnNumber: 92,
              },
              ("TURBOPACK compile-time value", void 0),
            ),
          },
          "2",
          false,
          {
            fileName: "[project]/components/Network.tsx",
            lineNumber: 18,
            columnNumber: 5,
          },
          ("TURBOPACK compile-time value", void 0),
        ),
        // Flexibility
        /*#__PURE__*/ (0,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
          "jsxDEV"
        ])(
          "svg",
          {
            className: "w-8 h-8",
            fill: "none",
            stroke: "currentColor",
            viewBox: "0 0 24 24",
            children: [
              /*#__PURE__*/ (0,
              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                "jsxDEV"
              ])(
                "path",
                {
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeWidth: "2",
                  d: "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z",
                },
                void 0,
                false,
                {
                  fileName: "[project]/components/Network.tsx",
                  lineNumber: 20,
                  columnNumber: 92,
                },
                ("TURBOPACK compile-time value", void 0),
              ),
              /*#__PURE__*/ (0,
              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                "jsxDEV"
              ])(
                "path",
                {
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeWidth: "2",
                  d: "M15 12a3 3 0 11-6 0 3 3 0 016 0z",
                },
                void 0,
                false,
                {
                  fileName: "[project]/components/Network.tsx",
                  lineNumber: 20,
                  columnNumber: 649,
                },
                ("TURBOPACK compile-time value", void 0),
              ),
            ],
          },
          "3",
          true,
          {
            fileName: "[project]/components/Network.tsx",
            lineNumber: 20,
            columnNumber: 5,
          },
          ("TURBOPACK compile-time value", void 0),
        ),
      ];
      return /*#__PURE__*/ (0,
      __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
        "jsxDEV"
      ])(
        "div",
        {
          className: "py-24 bg-white",
          children: /*#__PURE__*/ (0,
          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
            "jsxDEV"
          ])(
            "div",
            {
              className: "container mx-auto px-6",
              children: [
                /*#__PURE__*/ (0,
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                  "jsxDEV"
                ])(
                  "div",
                  {
                    className:
                      "flex flex-col lg:flex-row justify-between items-end gap-8 mb-16",
                    children: [
                      /*#__PURE__*/ (0,
                      __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                        "jsxDEV"
                      ])(
                        "div",
                        {
                          className: "max-w-3xl",
                          children: [
                            /*#__PURE__*/ (0,
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                              "jsxDEV"
                            ])(
                              "h2",
                              {
                                className:
                                  "text-red-600 font-bold uppercase tracking-widest mb-4",
                                children: t.tag,
                              },
                              void 0,
                              false,
                              {
                                fileName: "[project]/components/Network.tsx",
                                lineNumber: 28,
                                columnNumber: 13,
                              },
                              ("TURBOPACK compile-time value", void 0),
                            ),
                            /*#__PURE__*/ (0,
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                              "jsxDEV"
                            ])(
                              "h3",
                              {
                                className:
                                  "text-3xl md:text-5xl font-extrabold text-blue-950 mb-6 leading-tight",
                                children: t.title,
                              },
                              void 0,
                              false,
                              {
                                fileName: "[project]/components/Network.tsx",
                                lineNumber: 29,
                                columnNumber: 13,
                              },
                              ("TURBOPACK compile-time value", void 0),
                            ),
                            /*#__PURE__*/ (0,
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                              "jsxDEV"
                            ])(
                              "p",
                              {
                                className:
                                  "text-slate-600 text-lg md:text-xl border-l-4 border-red-500 pl-6 italic",
                                children: t.slogan,
                              },
                              void 0,
                              false,
                              {
                                fileName: "[project]/components/Network.tsx",
                                lineNumber: 32,
                                columnNumber: 13,
                              },
                              ("TURBOPACK compile-time value", void 0),
                            ),
                          ],
                        },
                        void 0,
                        true,
                        {
                          fileName: "[project]/components/Network.tsx",
                          lineNumber: 27,
                          columnNumber: 11,
                        },
                        ("TURBOPACK compile-time value", void 0),
                      ),
                      /*#__PURE__*/ (0,
                      __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                        "jsxDEV"
                      ])(
                        "div",
                        {
                          className:
                            "flex-shrink-0 bg-blue-900 text-white p-8 rounded-2xl shadow-2xl flex items-center gap-6 transform hover:scale-105 transition-transform duration-300",
                          children: [
                            /*#__PURE__*/ (0,
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                              "jsxDEV"
                            ])(
                              "div",
                              {
                                className: "text-6xl font-black",
                                children: t.trustStat,
                              },
                              void 0,
                              false,
                              {
                                fileName: "[project]/components/Network.tsx",
                                lineNumber: 38,
                                columnNumber: 13,
                              },
                              ("TURBOPACK compile-time value", void 0),
                            ),
                            /*#__PURE__*/ (0,
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                              "jsxDEV"
                            ])(
                              "div",
                              {
                                className:
                                  "text-sm font-bold uppercase tracking-wider leading-snug",
                                children: t.trustLabel,
                              },
                              void 0,
                              false,
                              {
                                fileName: "[project]/components/Network.tsx",
                                lineNumber: 39,
                                columnNumber: 13,
                              },
                              ("TURBOPACK compile-time value", void 0),
                            ),
                          ],
                        },
                        void 0,
                        true,
                        {
                          fileName: "[project]/components/Network.tsx",
                          lineNumber: 37,
                          columnNumber: 11,
                        },
                        ("TURBOPACK compile-time value", void 0),
                      ),
                    ],
                  },
                  void 0,
                  true,
                  {
                    fileName: "[project]/components/Network.tsx",
                    lineNumber: 26,
                    columnNumber: 9,
                  },
                  ("TURBOPACK compile-time value", void 0),
                ),
                /*#__PURE__*/ (0,
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                  "jsxDEV"
                ])(
                  "div",
                  {
                    className:
                      "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8",
                    children: t.cards.map((card, idx) =>
                      /*#__PURE__*/ (0,
                      __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                        "jsxDEV"
                      ])(
                        "div",
                        {
                          className:
                            "group p-8 bg-slate-50 rounded-2xl border border-slate-100 hover:bg-blue-950 hover:text-white transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 flex flex-col h-full",
                          children: [
                            /*#__PURE__*/ (0,
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                              "jsxDEV"
                            ])(
                              "div",
                              {
                                className:
                                  "mb-6 text-blue-900 group-hover:text-red-500 transition-colors",
                                children: icons[idx],
                              },
                              void 0,
                              false,
                              {
                                fileName: "[project]/components/Network.tsx",
                                lineNumber: 51,
                                columnNumber: 15,
                              },
                              ("TURBOPACK compile-time value", void 0),
                            ),
                            /*#__PURE__*/ (0,
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                              "jsxDEV"
                            ])(
                              "h4",
                              {
                                className:
                                  "text-xl font-bold mb-4 group-hover:text-white transition-colors",
                                children: card.title,
                              },
                              void 0,
                              false,
                              {
                                fileName: "[project]/components/Network.tsx",
                                lineNumber: 54,
                                columnNumber: 15,
                              },
                              ("TURBOPACK compile-time value", void 0),
                            ),
                            /*#__PURE__*/ (0,
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                              "jsxDEV"
                            ])(
                              "p",
                              {
                                className:
                                  "text-slate-500 group-hover:text-slate-300 transition-colors leading-relaxed",
                                children: card.desc,
                              },
                              void 0,
                              false,
                              {
                                fileName: "[project]/components/Network.tsx",
                                lineNumber: 55,
                                columnNumber: 15,
                              },
                              ("TURBOPACK compile-time value", void 0),
                            ),
                          ],
                        },
                        idx,
                        true,
                        {
                          fileName: "[project]/components/Network.tsx",
                          lineNumber: 47,
                          columnNumber: 13,
                        },
                        ("TURBOPACK compile-time value", void 0),
                      ),
                    ),
                  },
                  void 0,
                  false,
                  {
                    fileName: "[project]/components/Network.tsx",
                    lineNumber: 45,
                    columnNumber: 9,
                  },
                  ("TURBOPACK compile-time value", void 0),
                ),
                /*#__PURE__*/ (0,
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                  "jsxDEV"
                ])(
                  "div",
                  {
                    className:
                      "mt-20 relative rounded-3xl overflow-hidden h-64 shadow-inner",
                    children: [
                      /*#__PURE__*/ (0,
                      __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                        "jsxDEV"
                      ])(
                        "img",
                        {
                          src: "https://images.unsplash.com/photo-1565034946487-077786996e27?q=80&w=2070&auto=format&fit=crop",
                          alt: "Factory Floor",
                          className:
                            "w-full h-full object-cover opacity-80 brightness-[0.7]",
                        },
                        void 0,
                        false,
                        {
                          fileName: "[project]/components/Network.tsx",
                          lineNumber: 63,
                          columnNumber: 11,
                        },
                        ("TURBOPACK compile-time value", void 0),
                      ),
                      /*#__PURE__*/ (0,
                      __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                        "jsxDEV"
                      ])(
                        "div",
                        {
                          className:
                            "absolute inset-0 bg-gradient-to-t from-blue-950/80 to-transparent flex items-center justify-center",
                          children: /*#__PURE__*/ (0,
                          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                            "jsxDEV"
                          ])(
                            "div",
                            {
                              className: "text-center px-6",
                              children: /*#__PURE__*/ (0,
                              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                "jsxDEV"
                              ])(
                                "p",
                                {
                                  className:
                                    "text-white font-bold text-xl md:text-2xl drop-shadow-lg",
                                  children:
                                    "Vietnamese Quality Managed by Japanese Engineering",
                                },
                                void 0,
                                false,
                                {
                                  fileName: "[project]/components/Network.tsx",
                                  lineNumber: 70,
                                  columnNumber: 15,
                                },
                                ("TURBOPACK compile-time value", void 0),
                              ),
                            },
                            void 0,
                            false,
                            {
                              fileName: "[project]/components/Network.tsx",
                              lineNumber: 69,
                              columnNumber: 13,
                            },
                            ("TURBOPACK compile-time value", void 0),
                          ),
                        },
                        void 0,
                        false,
                        {
                          fileName: "[project]/components/Network.tsx",
                          lineNumber: 68,
                          columnNumber: 11,
                        },
                        ("TURBOPACK compile-time value", void 0),
                      ),
                    ],
                  },
                  void 0,
                  true,
                  {
                    fileName: "[project]/components/Network.tsx",
                    lineNumber: 62,
                    columnNumber: 9,
                  },
                  ("TURBOPACK compile-time value", void 0),
                ),
              ],
            },
            void 0,
            true,
            {
              fileName: "[project]/components/Network.tsx",
              lineNumber: 25,
              columnNumber: 7,
            },
            ("TURBOPACK compile-time value", void 0),
          ),
        },
        void 0,
        false,
        {
          fileName: "[project]/components/Network.tsx",
          lineNumber: 24,
          columnNumber: 5,
        },
        ("TURBOPACK compile-time value", void 0),
      );
    };
    _c = Network;
    const __TURBOPACK__default__export__ = Network;
    var _c;
    __turbopack_context__.k.register(_c, "Network");
    if (
      typeof globalThis.$RefreshHelpers$ === "object" &&
      globalThis.$RefreshHelpers !== null
    ) {
      __turbopack_context__.k.registerExports(
        __turbopack_context__.m,
        globalThis.$RefreshHelpers$,
      );
    }
  },
  "[project]/components/Process.tsx [app-client] (ecmascript)",
  (__turbopack_context__) => {
    "use strict";

    __turbopack_context__.s(["default", () => __TURBOPACK__default__export__]);
    var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        "[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)",
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$translations$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        "[project]/translations.ts [app-client] (ecmascript)",
      );
    const Process = ({ lang }) => {
      const t =
        __TURBOPACK__imported__module__$5b$project$5d2f$translations$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
          "translations"
        ][lang].process;
      return /*#__PURE__*/ (0,
      __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
        "jsxDEV"
      ])(
        "div",
        {
          className: "container mx-auto px-6",
          children: [
            /*#__PURE__*/ (0,
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
              "jsxDEV"
            ])(
              "div",
              {
                className: "text-center mb-16",
                children: [
                  /*#__PURE__*/ (0,
                  __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                    "jsxDEV"
                  ])(
                    "h2",
                    {
                      className:
                        "text-red-600 font-bold uppercase tracking-widest mb-4",
                      children: t.tag,
                    },
                    void 0,
                    false,
                    {
                      fileName: "[project]/components/Process.tsx",
                      lineNumber: 15,
                      columnNumber: 9,
                    },
                    ("TURBOPACK compile-time value", void 0),
                  ),
                  /*#__PURE__*/ (0,
                  __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                    "jsxDEV"
                  ])(
                    "h3",
                    {
                      className:
                        "text-3xl md:text-5xl font-bold text-slate-900",
                      children: t.title,
                    },
                    void 0,
                    false,
                    {
                      fileName: "[project]/components/Process.tsx",
                      lineNumber: 16,
                      columnNumber: 9,
                    },
                    ("TURBOPACK compile-time value", void 0),
                  ),
                ],
              },
              void 0,
              true,
              {
                fileName: "[project]/components/Process.tsx",
                lineNumber: 14,
                columnNumber: 7,
              },
              ("TURBOPACK compile-time value", void 0),
            ),
            /*#__PURE__*/ (0,
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
              "jsxDEV"
            ])(
              "div",
              {
                className: "relative",
                children: [
                  /*#__PURE__*/ (0,
                  __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                    "jsxDEV"
                  ])(
                    "div",
                    {
                      className:
                        "hidden lg:block absolute top-12 left-0 w-full h-1 bg-slate-200 z-0",
                    },
                    void 0,
                    false,
                    {
                      fileName: "[project]/components/Process.tsx",
                      lineNumber: 20,
                      columnNumber: 9,
                    },
                    ("TURBOPACK compile-time value", void 0),
                  ),
                  /*#__PURE__*/ (0,
                  __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                    "jsxDEV"
                  ])(
                    "div",
                    {
                      className:
                        "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-7 gap-8 relative z-10",
                      children: t.steps.map((step) =>
                        /*#__PURE__*/ (0,
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                          "jsxDEV"
                        ])(
                          "div",
                          {
                            className:
                              "flex flex-col items-center text-center group",
                            children: [
                              /*#__PURE__*/ (0,
                              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                "jsxDEV"
                              ])(
                                "div",
                                {
                                  className:
                                    "w-16 h-16 rounded-full bg-white border-4 border-blue-900 flex items-center justify-center text-2xl font-black text-blue-900 mb-6 group-hover:bg-blue-900 group-hover:text-white transition-all duration-300 shadow-xl",
                                  children: step.number,
                                },
                                void 0,
                                false,
                                {
                                  fileName: "[project]/components/Process.tsx",
                                  lineNumber: 25,
                                  columnNumber: 15,
                                },
                                ("TURBOPACK compile-time value", void 0),
                              ),
                              /*#__PURE__*/ (0,
                              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                "jsxDEV"
                              ])(
                                "h4",
                                {
                                  className: "font-bold text-slate-900 mb-1",
                                  children: step.title,
                                },
                                void 0,
                                false,
                                {
                                  fileName: "[project]/components/Process.tsx",
                                  lineNumber: 28,
                                  columnNumber: 15,
                                },
                                ("TURBOPACK compile-time value", void 0),
                              ),
                              /*#__PURE__*/ (0,
                              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                "jsxDEV"
                              ])(
                                "p",
                                {
                                  className:
                                    "text-sm text-slate-500 px-2 line-clamp-3",
                                  children: step.desc,
                                },
                                void 0,
                                false,
                                {
                                  fileName: "[project]/components/Process.tsx",
                                  lineNumber: 29,
                                  columnNumber: 15,
                                },
                                ("TURBOPACK compile-time value", void 0),
                              ),
                            ],
                          },
                          step.number,
                          true,
                          {
                            fileName: "[project]/components/Process.tsx",
                            lineNumber: 24,
                            columnNumber: 13,
                          },
                          ("TURBOPACK compile-time value", void 0),
                        ),
                      ),
                    },
                    void 0,
                    false,
                    {
                      fileName: "[project]/components/Process.tsx",
                      lineNumber: 22,
                      columnNumber: 9,
                    },
                    ("TURBOPACK compile-time value", void 0),
                  ),
                ],
              },
              void 0,
              true,
              {
                fileName: "[project]/components/Process.tsx",
                lineNumber: 19,
                columnNumber: 7,
              },
              ("TURBOPACK compile-time value", void 0),
            ),
          ],
        },
        void 0,
        true,
        {
          fileName: "[project]/components/Process.tsx",
          lineNumber: 13,
          columnNumber: 5,
        },
        ("TURBOPACK compile-time value", void 0),
      );
    };
    _c = Process;
    const __TURBOPACK__default__export__ = Process;
    var _c;
    __turbopack_context__.k.register(_c, "Process");
    if (
      typeof globalThis.$RefreshHelpers$ === "object" &&
      globalThis.$RefreshHelpers !== null
    ) {
      __turbopack_context__.k.registerExports(
        __turbopack_context__.m,
        globalThis.$RefreshHelpers$,
      );
    }
  },
  "[project]/types.ts [app-client] (ecmascript)",
  (__turbopack_context__) => {
    "use strict";

    __turbopack_context__.s(["AppStatus", () => AppStatus]);
    var AppStatus = /*#__PURE__*/ (function (AppStatus) {
      AppStatus["IDLE"] = "IDLE";
      AppStatus["SUBMITTING"] = "SUBMITTING";
      AppStatus["SUCCESS"] = "SUCCESS";
      AppStatus["ERROR"] = "ERROR";
      return AppStatus;
    })({});
    if (
      typeof globalThis.$RefreshHelpers$ === "object" &&
      globalThis.$RefreshHelpers !== null
    ) {
      __turbopack_context__.k.registerExports(
        __turbopack_context__.m,
        globalThis.$RefreshHelpers$,
      );
    }
  },
  "[project]/services/rfqService.ts [app-client] (ecmascript)",
  (__turbopack_context__) => {
    "use strict";

    __turbopack_context__.s(["submitRFQ", () => submitRFQ]);
    const submitRFQ = async (data) => {
      try {
        const formData = new FormData();
        formData.append("companyName", data.companyName);
        formData.append("contactEmail", data.contactEmail);
        formData.append("productType", data.productType);
        formData.append("notes", data.notes);
        formData.append(
          "requestVisitOrPrototype",
          data.requestVisitOrPrototype,
        );
        if (data.drawingFile) {
          formData.append("file", data.drawingFile);
        }
        const response = await fetch("/api/rfq", {
          method: "POST",
          body: formData,
        });
        if (!response.ok) {
          const errorData = await response.json();
          console.error("Submission failed:", errorData.error);
          return false;
        }
        const result = await response.json();
        return result.success === true;
      } catch (error) {
        console.error("Error submitting RFQ:", error);
        return false;
      }
    };
    if (
      typeof globalThis.$RefreshHelpers$ === "object" &&
      globalThis.$RefreshHelpers !== null
    ) {
      __turbopack_context__.k.registerExports(
        __turbopack_context__.m,
        globalThis.$RefreshHelpers$,
      );
    }
  },
  "[project]/components/RFQForm.tsx [app-client] (ecmascript)",
  (__turbopack_context__) => {
    "use strict";

    __turbopack_context__.s(["default", () => __TURBOPACK__default__export__]);
    var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        "[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)",
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        "[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)",
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i("[project]/types.ts [app-client] (ecmascript)");
    var __TURBOPACK__imported__module__$5b$project$5d2f$translations$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        "[project]/translations.ts [app-client] (ecmascript)",
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$rfqService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        "[project]/services/rfqService.ts [app-client] (ecmascript)",
      );
    var _s = __turbopack_context__.k.signature();
    ("use client");
    const RFQForm = ({ lang }) => {
      _s();
      const t =
        __TURBOPACK__imported__module__$5b$project$5d2f$translations$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
          "translations"
        ][lang].rfq;
      const [status, setStatus] = (0,
      __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
        "useState"
      ])(
        __TURBOPACK__imported__module__$5b$project$5d2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
          "AppStatus"
        ].IDLE,
      );
      const [errorMsg, setErrorMsg] = (0,
      __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
        "useState"
      ])(null);
      const [isModalOpen, setIsModalOpen] = (0,
      __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
        "useState"
      ])(false);
      const [formData, setFormData] = (0,
      __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
        "useState"
      ])({
        companyName: "",
        contactEmail: "",
        productType: "",
        notes: "",
        ndaAccepted: false,
        requestVisitOrPrototype: "",
      });
      const MAX_FILE_SIZE = 1024 * 1024 * 1024; // 1GB
      const handleInputChange = (e) => {
        const { name, value, type } = e.target;
        const val = type === "checkbox" ? e.target.checked : value;
        setFormData((prev) => ({
          ...prev,
          [name]: val,
        }));
      };
      const handleFileChange = (e) => {
        setErrorMsg(null);
        if (e.target.files && e.target.files[0]) {
          const file = e.target.files[0];
          if (file.size > MAX_FILE_SIZE) {
            setErrorMsg(t.fileError);
            e.target.value = "";
            return;
          }
          setFormData((prev) => ({
            ...prev,
            drawingFile: file,
          }));
        }
      };
      const handleSubmit = async (e) => {
        e.preventDefault();
        if (errorMsg) return;
        setStatus(
          __TURBOPACK__imported__module__$5b$project$5d2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
            "AppStatus"
          ].SUBMITTING,
        );
        try {
          const success = await (0,
          __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$rfqService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
            "submitRFQ"
          ])(formData);
          if (success) {
            setStatus(
              __TURBOPACK__imported__module__$5b$project$5d2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                "AppStatus"
              ].SUCCESS,
            );
          } else {
            setStatus(
              __TURBOPACK__imported__module__$5b$project$5d2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                "AppStatus"
              ].ERROR,
            );
            setErrorMsg("Submission failed. Please try again.");
          }
        } catch (err) {
          console.error(err);
          setStatus(
            __TURBOPACK__imported__module__$5b$project$5d2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
              "AppStatus"
            ].ERROR,
          );
          setErrorMsg("An unexpected error occurred.");
        }
      };
      const renderNdaLabel = () => {
        const labelText = t.labels.nda;
        const ndaKeywords = {
          JP: "秘密保持契約 (NDA)",
          EN: "confidentiality terms (NDA)",
          VN: "điều khoản bảo mật (NDA)",
        };
        const keyword = ndaKeywords[lang];
        if (labelText.includes(keyword)) {
          const parts = labelText.split(keyword);
          return /*#__PURE__*/ (0,
          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
            "jsxDEV"
          ])(
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
              "Fragment"
            ],
            {
              children: [
                parts[0],
                /*#__PURE__*/ (0,
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                  "jsxDEV"
                ])(
                  "button",
                  {
                    type: "button",
                    onClick: () => setIsModalOpen(true),
                    className:
                      "text-blue-400 hover:text-blue-300 underline font-medium",
                    children: keyword,
                  },
                  void 0,
                  false,
                  {
                    fileName: "[project]/components/RFQForm.tsx",
                    lineNumber: 83,
                    columnNumber: 11,
                  },
                  ("TURBOPACK compile-time value", void 0),
                ),
                parts[1],
              ],
            },
            void 0,
            true,
          );
        }
        return labelText;
      };
      return /*#__PURE__*/ (0,
      __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
        "jsxDEV"
      ])(
        "div",
        {
          className: "container mx-auto px-6 max-w-4xl",
          children: [
            /*#__PURE__*/ (0,
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
              "jsxDEV"
            ])(
              "div",
              {
                className:
                  "bg-slate-900 rounded-3xl p-8 md:p-16 text-white shadow-2xl relative overflow-hidden",
                children: [
                  /*#__PURE__*/ (0,
                  __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                    "jsxDEV"
                  ])(
                    "div",
                    {
                      className:
                        "absolute top-0 right-0 w-64 h-64 bg-red-600/10 rounded-full blur-3xl -mr-32 -mt-32",
                    },
                    void 0,
                    false,
                    {
                      fileName: "[project]/components/RFQForm.tsx",
                      lineNumber: 100,
                      columnNumber: 9,
                    },
                    ("TURBOPACK compile-time value", void 0),
                  ),
                  /*#__PURE__*/ (0,
                  __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                    "jsxDEV"
                  ])(
                    "div",
                    {
                      className: "relative z-10 grid lg:grid-cols-5 gap-12",
                      children: [
                        /*#__PURE__*/ (0,
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                          "jsxDEV"
                        ])(
                          "div",
                          {
                            className: "lg:col-span-2",
                            children: [
                              /*#__PURE__*/ (0,
                              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                "jsxDEV"
                              ])(
                                "h2",
                                {
                                  className: "text-3xl font-bold mb-6",
                                  children: t.title,
                                },
                                void 0,
                                false,
                                {
                                  fileName: "[project]/components/RFQForm.tsx",
                                  lineNumber: 104,
                                  columnNumber: 13,
                                },
                                ("TURBOPACK compile-time value", void 0),
                              ),
                              /*#__PURE__*/ (0,
                              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                "jsxDEV"
                              ])(
                                "p",
                                {
                                  className: "text-slate-400 mb-8",
                                  children: t.desc,
                                },
                                void 0,
                                false,
                                {
                                  fileName: "[project]/components/RFQForm.tsx",
                                  lineNumber: 105,
                                  columnNumber: 13,
                                },
                                ("TURBOPACK compile-time value", void 0),
                              ),
                            ],
                          },
                          void 0,
                          true,
                          {
                            fileName: "[project]/components/RFQForm.tsx",
                            lineNumber: 103,
                            columnNumber: 11,
                          },
                          ("TURBOPACK compile-time value", void 0),
                        ),
                        /*#__PURE__*/ (0,
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                          "jsxDEV"
                        ])(
                          "form",
                          {
                            onSubmit: handleSubmit,
                            className: "lg:col-span-3 space-y-6",
                            children:
                              status ===
                              __TURBOPACK__imported__module__$5b$project$5d2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                "AppStatus"
                              ].SUCCESS
                                ? /*#__PURE__*/ (0,
                                  __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                    "jsxDEV"
                                  ])(
                                    "div",
                                    {
                                      className:
                                        "bg-green-500/20 border border-green-500/50 p-8 rounded-2xl text-center",
                                      children: [
                                        /*#__PURE__*/ (0,
                                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                          "jsxDEV"
                                        ])(
                                          "h4",
                                          {
                                            className:
                                              "text-2xl font-bold mb-2",
                                            children: t.labels.successTitle,
                                          },
                                          void 0,
                                          false,
                                          {
                                            fileName:
                                              "[project]/components/RFQForm.tsx",
                                            lineNumber: 111,
                                            columnNumber: 17,
                                          },
                                          ("TURBOPACK compile-time value",
                                          void 0),
                                        ),
                                        /*#__PURE__*/ (0,
                                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                          "jsxDEV"
                                        ])(
                                          "p",
                                          {
                                            children: t.labels.successDesc,
                                          },
                                          void 0,
                                          false,
                                          {
                                            fileName:
                                              "[project]/components/RFQForm.tsx",
                                            lineNumber: 112,
                                            columnNumber: 17,
                                          },
                                          ("TURBOPACK compile-time value",
                                          void 0),
                                        ),
                                        /*#__PURE__*/ (0,
                                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                          "jsxDEV"
                                        ])(
                                          "button",
                                          {
                                            type: "button",
                                            onClick: () =>
                                              setStatus(
                                                __TURBOPACK__imported__module__$5b$project$5d2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                                  "AppStatus"
                                                ].IDLE,
                                              ),
                                            className:
                                              "mt-6 text-sm underline opacity-70 hover:opacity-100",
                                            children: t.labels.reset,
                                          },
                                          void 0,
                                          false,
                                          {
                                            fileName:
                                              "[project]/components/RFQForm.tsx",
                                            lineNumber: 113,
                                            columnNumber: 17,
                                          },
                                          ("TURBOPACK compile-time value",
                                          void 0),
                                        ),
                                      ],
                                    },
                                    void 0,
                                    true,
                                    {
                                      fileName:
                                        "[project]/components/RFQForm.tsx",
                                      lineNumber: 110,
                                      columnNumber: 15,
                                    },
                                    ("TURBOPACK compile-time value", void 0),
                                  )
                                : /*#__PURE__*/ (0,
                                  __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                    "jsxDEV"
                                  ])(
                                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                      "Fragment"
                                    ],
                                    {
                                      children: [
                                        /*#__PURE__*/ (0,
                                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                          "jsxDEV"
                                        ])(
                                          "div",
                                          {
                                            className:
                                              "grid md:grid-cols-2 gap-4",
                                            children: [
                                              /*#__PURE__*/ (0,
                                              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                                "jsxDEV"
                                              ])(
                                                "div",
                                                {
                                                  children: [
                                                    /*#__PURE__*/ (0,
                                                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                                      "jsxDEV"
                                                    ])(
                                                      "label",
                                                      {
                                                        className:
                                                          "block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2",
                                                        children:
                                                          t.labels.company,
                                                      },
                                                      void 0,
                                                      false,
                                                      {
                                                        fileName:
                                                          "[project]/components/RFQForm.tsx",
                                                        lineNumber: 125,
                                                        columnNumber: 21,
                                                      },
                                                      ("TURBOPACK compile-time value",
                                                      void 0),
                                                    ),
                                                    /*#__PURE__*/ (0,
                                                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                                      "jsxDEV"
                                                    ])(
                                                      "input",
                                                      {
                                                        required: true,
                                                        name: "companyName",
                                                        onChange:
                                                          handleInputChange,
                                                        className:
                                                          "w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500 transition-colors",
                                                      },
                                                      void 0,
                                                      false,
                                                      {
                                                        fileName:
                                                          "[project]/components/RFQForm.tsx",
                                                        lineNumber: 126,
                                                        columnNumber: 21,
                                                      },
                                                      ("TURBOPACK compile-time value",
                                                      void 0),
                                                    ),
                                                  ],
                                                },
                                                void 0,
                                                true,
                                                {
                                                  fileName:
                                                    "[project]/components/RFQForm.tsx",
                                                  lineNumber: 124,
                                                  columnNumber: 19,
                                                },
                                                ("TURBOPACK compile-time value",
                                                void 0),
                                              ),
                                              /*#__PURE__*/ (0,
                                              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                                "jsxDEV"
                                              ])(
                                                "div",
                                                {
                                                  children: [
                                                    /*#__PURE__*/ (0,
                                                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                                      "jsxDEV"
                                                    ])(
                                                      "label",
                                                      {
                                                        className:
                                                          "block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2",
                                                        children:
                                                          t.labels.email,
                                                      },
                                                      void 0,
                                                      false,
                                                      {
                                                        fileName:
                                                          "[project]/components/RFQForm.tsx",
                                                        lineNumber: 134,
                                                        columnNumber: 21,
                                                      },
                                                      ("TURBOPACK compile-time value",
                                                      void 0),
                                                    ),
                                                    /*#__PURE__*/ (0,
                                                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                                      "jsxDEV"
                                                    ])(
                                                      "input",
                                                      {
                                                        required: true,
                                                        type: "email",
                                                        name: "contactEmail",
                                                        onChange:
                                                          handleInputChange,
                                                        className:
                                                          "w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500 transition-colors",
                                                      },
                                                      void 0,
                                                      false,
                                                      {
                                                        fileName:
                                                          "[project]/components/RFQForm.tsx",
                                                        lineNumber: 135,
                                                        columnNumber: 21,
                                                      },
                                                      ("TURBOPACK compile-time value",
                                                      void 0),
                                                    ),
                                                  ],
                                                },
                                                void 0,
                                                true,
                                                {
                                                  fileName:
                                                    "[project]/components/RFQForm.tsx",
                                                  lineNumber: 133,
                                                  columnNumber: 19,
                                                },
                                                ("TURBOPACK compile-time value",
                                                void 0),
                                              ),
                                            ],
                                          },
                                          void 0,
                                          true,
                                          {
                                            fileName:
                                              "[project]/components/RFQForm.tsx",
                                            lineNumber: 123,
                                            columnNumber: 17,
                                          },
                                          ("TURBOPACK compile-time value",
                                          void 0),
                                        ),
                                        /*#__PURE__*/ (0,
                                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                          "jsxDEV"
                                        ])(
                                          "div",
                                          {
                                            className:
                                              "grid md:grid-cols-2 gap-4",
                                            children: [
                                              /*#__PURE__*/ (0,
                                              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                                "jsxDEV"
                                              ])(
                                                "div",
                                                {
                                                  children: [
                                                    /*#__PURE__*/ (0,
                                                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                                      "jsxDEV"
                                                    ])(
                                                      "label",
                                                      {
                                                        className:
                                                          "block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2",
                                                        children:
                                                          t.labels.category,
                                                      },
                                                      void 0,
                                                      false,
                                                      {
                                                        fileName:
                                                          "[project]/components/RFQForm.tsx",
                                                        lineNumber: 147,
                                                        columnNumber: 21,
                                                      },
                                                      ("TURBOPACK compile-time value",
                                                      void 0),
                                                    ),
                                                    /*#__PURE__*/ (0,
                                                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                                      "jsxDEV"
                                                    ])(
                                                      "select",
                                                      {
                                                        name: "productType",
                                                        onChange:
                                                          handleInputChange,
                                                        className:
                                                          "w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500 transition-colors appearance-none",
                                                        children: [
                                                          /*#__PURE__*/ (0,
                                                          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                                            "jsxDEV"
                                                          ])(
                                                            "option",
                                                            {
                                                              value: "",
                                                              className:
                                                                "bg-slate-900",
                                                              children:
                                                                "Select",
                                                            },
                                                            void 0,
                                                            false,
                                                            {
                                                              fileName:
                                                                "[project]/components/RFQForm.tsx",
                                                              lineNumber: 153,
                                                              columnNumber: 23,
                                                            },
                                                            ("TURBOPACK compile-time value",
                                                            void 0),
                                                          ),
                                                          t.categories.map(
                                                            (cat) =>
                                                              /*#__PURE__*/ (0,
                                                              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                                                "jsxDEV"
                                                              ])(
                                                                "option",
                                                                {
                                                                  value: cat,
                                                                  className:
                                                                    "bg-slate-900",
                                                                  children: cat,
                                                                },
                                                                cat,
                                                                false,
                                                                {
                                                                  fileName:
                                                                    "[project]/components/RFQForm.tsx",
                                                                  lineNumber: 155,
                                                                  columnNumber: 25,
                                                                },
                                                                ("TURBOPACK compile-time value",
                                                                void 0),
                                                              ),
                                                          ),
                                                        ],
                                                      },
                                                      void 0,
                                                      true,
                                                      {
                                                        fileName:
                                                          "[project]/components/RFQForm.tsx",
                                                        lineNumber: 148,
                                                        columnNumber: 21,
                                                      },
                                                      ("TURBOPACK compile-time value",
                                                      void 0),
                                                    ),
                                                  ],
                                                },
                                                void 0,
                                                true,
                                                {
                                                  fileName:
                                                    "[project]/components/RFQForm.tsx",
                                                  lineNumber: 146,
                                                  columnNumber: 19,
                                                },
                                                ("TURBOPACK compile-time value",
                                                void 0),
                                              ),
                                              /*#__PURE__*/ (0,
                                              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                                "jsxDEV"
                                              ])(
                                                "div",
                                                {
                                                  children: [
                                                    /*#__PURE__*/ (0,
                                                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                                      "jsxDEV"
                                                    ])(
                                                      "label",
                                                      {
                                                        className:
                                                          "block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2",
                                                        children:
                                                          t.labels.visitRequest,
                                                      },
                                                      void 0,
                                                      false,
                                                      {
                                                        fileName:
                                                          "[project]/components/RFQForm.tsx",
                                                        lineNumber: 160,
                                                        columnNumber: 21,
                                                      },
                                                      ("TURBOPACK compile-time value",
                                                      void 0),
                                                    ),
                                                    /*#__PURE__*/ (0,
                                                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                                      "jsxDEV"
                                                    ])(
                                                      "select",
                                                      {
                                                        name: "requestVisitOrPrototype",
                                                        onChange:
                                                          handleInputChange,
                                                        className:
                                                          "w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500 transition-colors appearance-none",
                                                        children: [
                                                          /*#__PURE__*/ (0,
                                                          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                                            "jsxDEV"
                                                          ])(
                                                            "option",
                                                            {
                                                              value: "",
                                                              className:
                                                                "bg-slate-900",
                                                              children:
                                                                "Select Option",
                                                            },
                                                            void 0,
                                                            false,
                                                            {
                                                              fileName:
                                                                "[project]/components/RFQForm.tsx",
                                                              lineNumber: 166,
                                                              columnNumber: 23,
                                                            },
                                                            ("TURBOPACK compile-time value",
                                                            void 0),
                                                          ),
                                                          t.visitOptions.map(
                                                            (opt) =>
                                                              /*#__PURE__*/ (0,
                                                              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                                                "jsxDEV"
                                                              ])(
                                                                "option",
                                                                {
                                                                  value: opt,
                                                                  className:
                                                                    "bg-slate-900",
                                                                  children: opt,
                                                                },
                                                                opt,
                                                                false,
                                                                {
                                                                  fileName:
                                                                    "[project]/components/RFQForm.tsx",
                                                                  lineNumber: 168,
                                                                  columnNumber: 25,
                                                                },
                                                                ("TURBOPACK compile-time value",
                                                                void 0),
                                                              ),
                                                          ),
                                                        ],
                                                      },
                                                      void 0,
                                                      true,
                                                      {
                                                        fileName:
                                                          "[project]/components/RFQForm.tsx",
                                                        lineNumber: 161,
                                                        columnNumber: 21,
                                                      },
                                                      ("TURBOPACK compile-time value",
                                                      void 0),
                                                    ),
                                                  ],
                                                },
                                                void 0,
                                                true,
                                                {
                                                  fileName:
                                                    "[project]/components/RFQForm.tsx",
                                                  lineNumber: 159,
                                                  columnNumber: 19,
                                                },
                                                ("TURBOPACK compile-time value",
                                                void 0),
                                              ),
                                            ],
                                          },
                                          void 0,
                                          true,
                                          {
                                            fileName:
                                              "[project]/components/RFQForm.tsx",
                                            lineNumber: 145,
                                            columnNumber: 17,
                                          },
                                          ("TURBOPACK compile-time value",
                                          void 0),
                                        ),
                                        /*#__PURE__*/ (0,
                                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                          "jsxDEV"
                                        ])(
                                          "div",
                                          {
                                            children: [
                                              /*#__PURE__*/ (0,
                                              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                                "jsxDEV"
                                              ])(
                                                "label",
                                                {
                                                  className:
                                                    "block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2",
                                                  children: t.labels.file,
                                                },
                                                void 0,
                                                false,
                                                {
                                                  fileName:
                                                    "[project]/components/RFQForm.tsx",
                                                  lineNumber: 175,
                                                  columnNumber: 19,
                                                },
                                                ("TURBOPACK compile-time value",
                                                void 0),
                                              ),
                                              /*#__PURE__*/ (0,
                                              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                                "jsxDEV"
                                              ])(
                                                "input",
                                                {
                                                  type: "file",
                                                  onChange: handleFileChange,
                                                  className:
                                                    "w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm file:mr-4 file:py-1 file:px-4 file:rounded-full file:border-0 file:text-xs file:font-bold file:bg-blue-500 file:text-white hover:file:bg-blue-600 transition-all cursor-pointer",
                                                },
                                                void 0,
                                                false,
                                                {
                                                  fileName:
                                                    "[project]/components/RFQForm.tsx",
                                                  lineNumber: 176,
                                                  columnNumber: 19,
                                                },
                                                ("TURBOPACK compile-time value",
                                                void 0),
                                              ),
                                              errorMsg &&
                                                /*#__PURE__*/ (0,
                                                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                                  "jsxDEV"
                                                ])(
                                                  "p",
                                                  {
                                                    className:
                                                      "text-red-400 text-xs mt-2 font-medium",
                                                    children: errorMsg,
                                                  },
                                                  void 0,
                                                  false,
                                                  {
                                                    fileName:
                                                      "[project]/components/RFQForm.tsx",
                                                    lineNumber: 181,
                                                    columnNumber: 32,
                                                  },
                                                  ("TURBOPACK compile-time value",
                                                  void 0),
                                                ),
                                            ],
                                          },
                                          void 0,
                                          true,
                                          {
                                            fileName:
                                              "[project]/components/RFQForm.tsx",
                                            lineNumber: 174,
                                            columnNumber: 17,
                                          },
                                          ("TURBOPACK compile-time value",
                                          void 0),
                                        ),
                                        /*#__PURE__*/ (0,
                                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                          "jsxDEV"
                                        ])(
                                          "div",
                                          {
                                            children: [
                                              /*#__PURE__*/ (0,
                                              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                                "jsxDEV"
                                              ])(
                                                "label",
                                                {
                                                  className:
                                                    "block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2",
                                                  children: t.labels.notes,
                                                },
                                                void 0,
                                                false,
                                                {
                                                  fileName:
                                                    "[project]/components/RFQForm.tsx",
                                                  lineNumber: 185,
                                                  columnNumber: 19,
                                                },
                                                ("TURBOPACK compile-time value",
                                                void 0),
                                              ),
                                              /*#__PURE__*/ (0,
                                              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                                "jsxDEV"
                                              ])(
                                                "textarea",
                                                {
                                                  name: "notes",
                                                  onChange: handleInputChange,
                                                  rows: 4,
                                                  className:
                                                    "w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500 transition-colors",
                                                },
                                                void 0,
                                                false,
                                                {
                                                  fileName:
                                                    "[project]/components/RFQForm.tsx",
                                                  lineNumber: 186,
                                                  columnNumber: 19,
                                                },
                                                ("TURBOPACK compile-time value",
                                                void 0),
                                              ),
                                            ],
                                          },
                                          void 0,
                                          true,
                                          {
                                            fileName:
                                              "[project]/components/RFQForm.tsx",
                                            lineNumber: 184,
                                            columnNumber: 17,
                                          },
                                          ("TURBOPACK compile-time value",
                                          void 0),
                                        ),
                                        /*#__PURE__*/ (0,
                                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                          "jsxDEV"
                                        ])(
                                          "div",
                                          {
                                            className: "flex items-start gap-3",
                                            children: [
                                              /*#__PURE__*/ (0,
                                              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                                "jsxDEV"
                                              ])(
                                                "input",
                                                {
                                                  type: "checkbox",
                                                  id: "nda",
                                                  name: "ndaAccepted",
                                                  onChange: handleInputChange,
                                                  className:
                                                    "mt-1 w-4 h-4 rounded border-white/10 text-blue-500 focus:ring-blue-500",
                                                  required: true,
                                                },
                                                void 0,
                                                false,
                                                {
                                                  fileName:
                                                    "[project]/components/RFQForm.tsx",
                                                  lineNumber: 195,
                                                  columnNumber: 19,
                                                },
                                                ("TURBOPACK compile-time value",
                                                void 0),
                                              ),
                                              /*#__PURE__*/ (0,
                                              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                                "jsxDEV"
                                              ])(
                                                "label",
                                                {
                                                  htmlFor: "nda",
                                                  className:
                                                    "text-xs text-slate-400 leading-normal",
                                                  children: renderNdaLabel(),
                                                },
                                                void 0,
                                                false,
                                                {
                                                  fileName:
                                                    "[project]/components/RFQForm.tsx",
                                                  lineNumber: 203,
                                                  columnNumber: 19,
                                                },
                                                ("TURBOPACK compile-time value",
                                                void 0),
                                              ),
                                            ],
                                          },
                                          void 0,
                                          true,
                                          {
                                            fileName:
                                              "[project]/components/RFQForm.tsx",
                                            lineNumber: 194,
                                            columnNumber: 17,
                                          },
                                          ("TURBOPACK compile-time value",
                                          void 0),
                                        ),
                                        /*#__PURE__*/ (0,
                                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                          "jsxDEV"
                                        ])(
                                          "button",
                                          {
                                            disabled:
                                              status ===
                                              __TURBOPACK__imported__module__$5b$project$5d2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                                "AppStatus"
                                              ].SUBMITTING,
                                            className:
                                              "w-full bg-red-600 hover:bg-red-700 disabled:bg-slate-700 text-white font-bold py-4 rounded-xl shadow-lg shadow-red-900/40 transition-all transform hover:-translate-y-1",
                                            children:
                                              status ===
                                              __TURBOPACK__imported__module__$5b$project$5d2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                                "AppStatus"
                                              ].SUBMITTING
                                                ? t.labels.sending
                                                : t.labels.submit,
                                          },
                                          void 0,
                                          false,
                                          {
                                            fileName:
                                              "[project]/components/RFQForm.tsx",
                                            lineNumber: 208,
                                            columnNumber: 17,
                                          },
                                          ("TURBOPACK compile-time value",
                                          void 0),
                                        ),
                                        status ===
                                          __TURBOPACK__imported__module__$5b$project$5d2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                            "AppStatus"
                                          ].ERROR &&
                                          /*#__PURE__*/ (0,
                                          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                            "jsxDEV"
                                          ])(
                                            "p",
                                            {
                                              className:
                                                "text-red-400 text-sm text-center mt-2",
                                              children: errorMsg,
                                            },
                                            void 0,
                                            false,
                                            {
                                              fileName:
                                                "[project]/components/RFQForm.tsx",
                                              lineNumber: 215,
                                              columnNumber: 19,
                                            },
                                            ("TURBOPACK compile-time value",
                                            void 0),
                                          ),
                                      ],
                                    },
                                    void 0,
                                    true,
                                  ),
                          },
                          void 0,
                          false,
                          {
                            fileName: "[project]/components/RFQForm.tsx",
                            lineNumber: 108,
                            columnNumber: 11,
                          },
                          ("TURBOPACK compile-time value", void 0),
                        ),
                      ],
                    },
                    void 0,
                    true,
                    {
                      fileName: "[project]/components/RFQForm.tsx",
                      lineNumber: 102,
                      columnNumber: 9,
                    },
                    ("TURBOPACK compile-time value", void 0),
                  ),
                ],
              },
              void 0,
              true,
              {
                fileName: "[project]/components/RFQForm.tsx",
                lineNumber: 99,
                columnNumber: 7,
              },
              ("TURBOPACK compile-time value", void 0),
            ),
            isModalOpen &&
              /*#__PURE__*/ (0,
              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                "jsxDEV"
              ])(
                "div",
                {
                  className:
                    "fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200",
                  children: /*#__PURE__*/ (0,
                  __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                    "jsxDEV"
                  ])(
                    "div",
                    {
                      className:
                        "bg-white text-slate-900 w-full max-w-2xl max-h-[85vh] overflow-hidden rounded-2xl shadow-2xl flex flex-col",
                      children: [
                        /*#__PURE__*/ (0,
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                          "jsxDEV"
                        ])(
                          "div",
                          {
                            className:
                              "p-6 border-b border-slate-100 flex justify-between items-center bg-slate-50",
                            children: [
                              /*#__PURE__*/ (0,
                              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                "jsxDEV"
                              ])(
                                "h3",
                                {
                                  className: "text-xl font-bold text-blue-900",
                                  children: "秘密保持合意書 (NDA)",
                                },
                                void 0,
                                false,
                                {
                                  fileName: "[project]/components/RFQForm.tsx",
                                  lineNumber: 227,
                                  columnNumber: 15,
                                },
                                ("TURBOPACK compile-time value", void 0),
                              ),
                              /*#__PURE__*/ (0,
                              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                "jsxDEV"
                              ])(
                                "button",
                                {
                                  onClick: () => setIsModalOpen(false),
                                  className:
                                    "w-8 h-8 flex items-center justify-center rounded-full hover:bg-slate-200 text-slate-500 transition-colors",
                                  children: "✕",
                                },
                                void 0,
                                false,
                                {
                                  fileName: "[project]/components/RFQForm.tsx",
                                  lineNumber: 228,
                                  columnNumber: 15,
                                },
                                ("TURBOPACK compile-time value", void 0),
                              ),
                            ],
                          },
                          void 0,
                          true,
                          {
                            fileName: "[project]/components/RFQForm.tsx",
                            lineNumber: 226,
                            columnNumber: 13,
                          },
                          ("TURBOPACK compile-time value", void 0),
                        ),
                        /*#__PURE__*/ (0,
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                          "jsxDEV"
                        ])(
                          "div",
                          {
                            className:
                              "p-8 overflow-y-auto text-sm leading-relaxed text-slate-700 space-y-6",
                            children: [
                              /*#__PURE__*/ (0,
                              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                "jsxDEV"
                              ])(
                                "p",
                                {
                                  children:
                                    "Akapla（以下「当社」）は、お客様が当社のお見積りフォームを通じて提供された技術図面、CADデータ、製品仕様、および商業的な情報（以下「秘密情報」）を、以下の条件に従って厳重に管理することを合意いたします。",
                                },
                                void 0,
                                false,
                                {
                                  fileName: "[project]/components/RFQForm.tsx",
                                  lineNumber: 237,
                                  columnNumber: 15,
                                },
                                ("TURBOPACK compile-time value", void 0),
                              ),
                              /*#__PURE__*/ (0,
                              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                "jsxDEV"
                              ])(
                                "div",
                                {
                                  className: "space-y-4",
                                  children: [
                                    /*#__PURE__*/ (0,
                                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                      "jsxDEV"
                                    ])(
                                      "div",
                                      {
                                        children: [
                                          /*#__PURE__*/ (0,
                                          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                            "jsxDEV"
                                          ])(
                                            "h4",
                                            {
                                              className:
                                                "font-bold text-slate-900 border-l-4 border-red-500 pl-3 mb-2",
                                              children:
                                                "1. 秘密情報の目的内利用",
                                            },
                                            void 0,
                                            false,
                                            {
                                              fileName:
                                                "[project]/components/RFQForm.tsx",
                                              lineNumber: 243,
                                              columnNumber: 19,
                                            },
                                            ("TURBOPACK compile-time value",
                                            void 0),
                                          ),
                                          /*#__PURE__*/ (0,
                                          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                            "jsxDEV"
                                          ])(
                                            "p",
                                            {
                                              children:
                                                "当社は、秘密情報を当社からの見積り提示、技術評価、および製品製造の検討目的のみに使用し、それ以外の目的で使用いたしません。",
                                            },
                                            void 0,
                                            false,
                                            {
                                              fileName:
                                                "[project]/components/RFQForm.tsx",
                                              lineNumber: 244,
                                              columnNumber: 19,
                                            },
                                            ("TURBOPACK compile-time value",
                                            void 0),
                                          ),
                                        ],
                                      },
                                      void 0,
                                      true,
                                      {
                                        fileName:
                                          "[project]/components/RFQForm.tsx",
                                        lineNumber: 242,
                                        columnNumber: 17,
                                      },
                                      ("TURBOPACK compile-time value", void 0),
                                    ),
                                    /*#__PURE__*/ (0,
                                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                      "jsxDEV"
                                    ])(
                                      "div",
                                      {
                                        children: [
                                          /*#__PURE__*/ (0,
                                          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                            "jsxDEV"
                                          ])(
                                            "h4",
                                            {
                                              className:
                                                "font-bold text-slate-900 border-l-4 border-red-500 pl-3 mb-2",
                                              children: "2. 第三者への開示禁止",
                                            },
                                            void 0,
                                            false,
                                            {
                                              fileName:
                                                "[project]/components/RFQForm.tsx",
                                              lineNumber: 248,
                                              columnNumber: 19,
                                            },
                                            ("TURBOPACK compile-time value",
                                            void 0),
                                          ),
                                          /*#__PURE__*/ (0,
                                          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                            "jsxDEV"
                                          ])(
                                            "p",
                                            {
                                              children:
                                                "当社は、秘密情報を厳重に保管し、お客様の事前の書面による同意なく、第三者に開示または漏洩いたしません。ただし、製造委託先であるパートナー工場へ、本目的達成のために必要最低限の情報を開示する場合を除きます。この場合、当社は当該委託先に対し、本合意書と同等の義務を負わせます。",
                                            },
                                            void 0,
                                            false,
                                            {
                                              fileName:
                                                "[project]/components/RFQForm.tsx",
                                              lineNumber: 249,
                                              columnNumber: 19,
                                            },
                                            ("TURBOPACK compile-time value",
                                            void 0),
                                          ),
                                        ],
                                      },
                                      void 0,
                                      true,
                                      {
                                        fileName:
                                          "[project]/components/RFQForm.tsx",
                                        lineNumber: 247,
                                        columnNumber: 17,
                                      },
                                      ("TURBOPACK compile-time value", void 0),
                                    ),
                                    /*#__PURE__*/ (0,
                                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                      "jsxDEV"
                                    ])(
                                      "div",
                                      {
                                        children: [
                                          /*#__PURE__*/ (0,
                                          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                            "jsxDEV"
                                          ])(
                                            "h4",
                                            {
                                              className:
                                                "font-bold text-slate-900 border-l-4 border-red-500 pl-3 mb-2",
                                              children:
                                                "3. 秘密情報の返還・廃棄",
                                            },
                                            void 0,
                                            false,
                                            {
                                              fileName:
                                                "[project]/components/RFQForm.tsx",
                                              lineNumber: 253,
                                              columnNumber: 19,
                                            },
                                            ("TURBOPACK compile-time value",
                                            void 0),
                                          ),
                                          /*#__PURE__*/ (0,
                                          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                            "jsxDEV"
                                          ])(
                                            "p",
                                            {
                                              children:
                                                "お見積りの終了後またはお客様の要請があった場合、当社は直ちに秘密情報を速やかに返還または廃棄いたします。",
                                            },
                                            void 0,
                                            false,
                                            {
                                              fileName:
                                                "[project]/components/RFQForm.tsx",
                                              lineNumber: 254,
                                              columnNumber: 19,
                                            },
                                            ("TURBOPACK compile-time value",
                                            void 0),
                                          ),
                                        ],
                                      },
                                      void 0,
                                      true,
                                      {
                                        fileName:
                                          "[project]/components/RFQForm.tsx",
                                        lineNumber: 252,
                                        columnNumber: 17,
                                      },
                                      ("TURBOPACK compile-time value", void 0),
                                    ),
                                    /*#__PURE__*/ (0,
                                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                      "jsxDEV"
                                    ])(
                                      "div",
                                      {
                                        children: [
                                          /*#__PURE__*/ (0,
                                          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                            "jsxDEV"
                                          ])(
                                            "h4",
                                            {
                                              className:
                                                "font-bold text-slate-900 border-l-4 border-red-500 pl-3 mb-2",
                                              children: "4. セキュリティ管理",
                                            },
                                            void 0,
                                            false,
                                            {
                                              fileName:
                                                "[project]/components/RFQForm.tsx",
                                              lineNumber: 258,
                                              columnNumber: 19,
                                            },
                                            ("TURBOPACK compile-time value",
                                            void 0),
                                          ),
                                          /*#__PURE__*/ (0,
                                          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                            "jsxDEV"
                                          ])(
                                            "p",
                                            {
                                              children:
                                                "当社は、秘密情報の紛失、盗難、改ざんを防ぐため、適切な安全管理措置を講じます。",
                                            },
                                            void 0,
                                            false,
                                            {
                                              fileName:
                                                "[project]/components/RFQForm.tsx",
                                              lineNumber: 259,
                                              columnNumber: 19,
                                            },
                                            ("TURBOPACK compile-time value",
                                            void 0),
                                          ),
                                        ],
                                      },
                                      void 0,
                                      true,
                                      {
                                        fileName:
                                          "[project]/components/RFQForm.tsx",
                                        lineNumber: 257,
                                        columnNumber: 17,
                                      },
                                      ("TURBOPACK compile-time value", void 0),
                                    ),
                                  ],
                                },
                                void 0,
                                true,
                                {
                                  fileName: "[project]/components/RFQForm.tsx",
                                  lineNumber: 241,
                                  columnNumber: 15,
                                },
                                ("TURBOPACK compile-time value", void 0),
                              ),
                              /*#__PURE__*/ (0,
                              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                "jsxDEV"
                              ])(
                                "div",
                                {
                                  className:
                                    "mt-8 p-4 bg-slate-50 rounded-lg border border-slate-100 text-xs text-slate-500 italic",
                                  children:
                                    "※本規約は、お客様がチェックボックスに同意し、情報を送信した時点で効力を生じます。",
                                },
                                void 0,
                                false,
                                {
                                  fileName: "[project]/components/RFQForm.tsx",
                                  lineNumber: 263,
                                  columnNumber: 15,
                                },
                                ("TURBOPACK compile-time value", void 0),
                              ),
                            ],
                          },
                          void 0,
                          true,
                          {
                            fileName: "[project]/components/RFQForm.tsx",
                            lineNumber: 236,
                            columnNumber: 13,
                          },
                          ("TURBOPACK compile-time value", void 0),
                        ),
                        /*#__PURE__*/ (0,
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                          "jsxDEV"
                        ])(
                          "div",
                          {
                            className:
                              "p-6 bg-slate-50 border-t border-slate-100 flex justify-end",
                            children: /*#__PURE__*/ (0,
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                              "jsxDEV"
                            ])(
                              "button",
                              {
                                onClick: () => setIsModalOpen(false),
                                className:
                                  "px-8 py-2.5 bg-blue-900 text-white font-bold rounded-lg hover:bg-blue-800 transition-colors shadow-md",
                                children: "閉じる",
                              },
                              void 0,
                              false,
                              {
                                fileName: "[project]/components/RFQForm.tsx",
                                lineNumber: 269,
                                columnNumber: 15,
                              },
                              ("TURBOPACK compile-time value", void 0),
                            ),
                          },
                          void 0,
                          false,
                          {
                            fileName: "[project]/components/RFQForm.tsx",
                            lineNumber: 268,
                            columnNumber: 13,
                          },
                          ("TURBOPACK compile-time value", void 0),
                        ),
                      ],
                    },
                    void 0,
                    true,
                    {
                      fileName: "[project]/components/RFQForm.tsx",
                      lineNumber: 225,
                      columnNumber: 11,
                    },
                    ("TURBOPACK compile-time value", void 0),
                  ),
                },
                void 0,
                false,
                {
                  fileName: "[project]/components/RFQForm.tsx",
                  lineNumber: 224,
                  columnNumber: 9,
                },
                ("TURBOPACK compile-time value", void 0),
              ),
          ],
        },
        void 0,
        true,
        {
          fileName: "[project]/components/RFQForm.tsx",
          lineNumber: 98,
          columnNumber: 5,
        },
        ("TURBOPACK compile-time value", void 0),
      );
    };
    _s(RFQForm, "QD84U4OTA4a+bbr1Ui06x1sY0Rc=");
    _c = RFQForm;
    const __TURBOPACK__default__export__ = RFQForm;
    var _c;
    __turbopack_context__.k.register(_c, "RFQForm");
    if (
      typeof globalThis.$RefreshHelpers$ === "object" &&
      globalThis.$RefreshHelpers !== null
    ) {
      __turbopack_context__.k.registerExports(
        __turbopack_context__.m,
        globalThis.$RefreshHelpers$,
      );
    }
  },
  "[project]/components/Footer.tsx [app-client] (ecmascript)",
  (__turbopack_context__) => {
    "use strict";

    __turbopack_context__.s(["default", () => __TURBOPACK__default__export__]);
    var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        "[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)",
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$translations$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        "[project]/translations.ts [app-client] (ecmascript)",
      );
    const Footer = ({ lang }) => {
      const t =
        __TURBOPACK__imported__module__$5b$project$5d2f$translations$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
          "translations"
        ][lang].footer;
      const navT =
        __TURBOPACK__imported__module__$5b$project$5d2f$translations$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
          "translations"
        ][lang].nav;
      // Specific emails from user request
      const vnEmail = "trungkim8694@gmail.com";
      const jpEmail = "tqcjapan2022@gmail.com";
      return /*#__PURE__*/ (0,
      __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
        "jsxDEV"
      ])(
        "footer",
        {
          className:
            "bg-slate-900 text-slate-400 py-20 border-t border-white/5",
          children: /*#__PURE__*/ (0,
          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
            "jsxDEV"
          ])(
            "div",
            {
              className: "container mx-auto px-6",
              children: [
                /*#__PURE__*/ (0,
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                  "jsxDEV"
                ])(
                  "div",
                  {
                    className:
                      "grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16",
                    children: [
                      /*#__PURE__*/ (0,
                      __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                        "jsxDEV"
                      ])(
                        "div",
                        {
                          className: "col-span-1 lg:col-span-1",
                          children: [
                            /*#__PURE__*/ (0,
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                              "jsxDEV"
                            ])(
                              "span",
                              {
                                className:
                                  "text-2xl font-bold text-white mb-6 block tracking-tighter",
                                children: "AKAPLA",
                              },
                              void 0,
                              false,
                              {
                                fileName: "[project]/components/Footer.tsx",
                                lineNumber: 22,
                                columnNumber: 13,
                              },
                              ("TURBOPACK compile-time value", void 0),
                            ),
                            /*#__PURE__*/ (0,
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                              "jsxDEV"
                            ])(
                              "p",
                              {
                                className: "text-sm leading-relaxed mb-6",
                                children: t.desc,
                              },
                              void 0,
                              false,
                              {
                                fileName: "[project]/components/Footer.tsx",
                                lineNumber: 23,
                                columnNumber: 13,
                              },
                              ("TURBOPACK compile-time value", void 0),
                            ),
                          ],
                        },
                        void 0,
                        true,
                        {
                          fileName: "[project]/components/Footer.tsx",
                          lineNumber: 21,
                          columnNumber: 11,
                        },
                        ("TURBOPACK compile-time value", void 0),
                      ),
                      /*#__PURE__*/ (0,
                      __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                        "jsxDEV"
                      ])(
                        "div",
                        {
                          children: [
                            /*#__PURE__*/ (0,
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                              "jsxDEV"
                            ])(
                              "h4",
                              {
                                className:
                                  "text-white font-bold mb-6 uppercase tracking-widest text-xs",
                                children: "VIETNAM HQ",
                              },
                              void 0,
                              false,
                              {
                                fileName: "[project]/components/Footer.tsx",
                                lineNumber: 29,
                                columnNumber: 13,
                              },
                              ("TURBOPACK compile-time value", void 0),
                            ),
                            /*#__PURE__*/ (0,
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                              "jsxDEV"
                            ])(
                              "div",
                              {
                                className: "text-sm leading-relaxed space-y-2",
                                children: [
                                  /*#__PURE__*/ (0,
                                  __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                    "jsxDEV"
                                  ])(
                                    "p",
                                    {
                                      className: "font-bold text-slate-200",
                                      children: t.vnHq,
                                    },
                                    void 0,
                                    false,
                                    {
                                      fileName:
                                        "[project]/components/Footer.tsx",
                                      lineNumber: 31,
                                      columnNumber: 15,
                                    },
                                    ("TURBOPACK compile-time value", void 0),
                                  ),
                                  /*#__PURE__*/ (0,
                                  __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                    "jsxDEV"
                                  ])(
                                    "p",
                                    {
                                      children: t.vnAddr,
                                    },
                                    void 0,
                                    false,
                                    {
                                      fileName:
                                        "[project]/components/Footer.tsx",
                                      lineNumber: 32,
                                      columnNumber: 15,
                                    },
                                    ("TURBOPACK compile-time value", void 0),
                                  ),
                                  /*#__PURE__*/ (0,
                                  __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                    "jsxDEV"
                                  ])(
                                    "p",
                                    {
                                      children: t.vnTax,
                                    },
                                    void 0,
                                    false,
                                    {
                                      fileName:
                                        "[project]/components/Footer.tsx",
                                      lineNumber: 33,
                                      columnNumber: 15,
                                    },
                                    ("TURBOPACK compile-time value", void 0),
                                  ),
                                  /*#__PURE__*/ (0,
                                  __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                    "jsxDEV"
                                  ])(
                                    "p",
                                    {
                                      children: t.vnPhone,
                                    },
                                    void 0,
                                    false,
                                    {
                                      fileName:
                                        "[project]/components/Footer.tsx",
                                      lineNumber: 34,
                                      columnNumber: 15,
                                    },
                                    ("TURBOPACK compile-time value", void 0),
                                  ),
                                  /*#__PURE__*/ (0,
                                  __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                    "jsxDEV"
                                  ])(
                                    "p",
                                    {
                                      className:
                                        "text-blue-400 hover:underline",
                                      children: /*#__PURE__*/ (0,
                                      __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                        "jsxDEV"
                                      ])(
                                        "a",
                                        {
                                          href: `mailto:${vnEmail}`,
                                          children: vnEmail,
                                        },
                                        void 0,
                                        false,
                                        {
                                          fileName:
                                            "[project]/components/Footer.tsx",
                                          lineNumber: 35,
                                          columnNumber: 60,
                                        },
                                        ("TURBOPACK compile-time value",
                                        void 0),
                                      ),
                                    },
                                    void 0,
                                    false,
                                    {
                                      fileName:
                                        "[project]/components/Footer.tsx",
                                      lineNumber: 35,
                                      columnNumber: 15,
                                    },
                                    ("TURBOPACK compile-time value", void 0),
                                  ),
                                ],
                              },
                              void 0,
                              true,
                              {
                                fileName: "[project]/components/Footer.tsx",
                                lineNumber: 30,
                                columnNumber: 13,
                              },
                              ("TURBOPACK compile-time value", void 0),
                            ),
                          ],
                        },
                        void 0,
                        true,
                        {
                          fileName: "[project]/components/Footer.tsx",
                          lineNumber: 28,
                          columnNumber: 11,
                        },
                        ("TURBOPACK compile-time value", void 0),
                      ),
                      /*#__PURE__*/ (0,
                      __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                        "jsxDEV"
                      ])(
                        "div",
                        {
                          children: [
                            /*#__PURE__*/ (0,
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                              "jsxDEV"
                            ])(
                              "h4",
                              {
                                className:
                                  "text-white font-bold mb-6 uppercase tracking-widest text-xs",
                                children: "JAPAN BRANCH",
                              },
                              void 0,
                              false,
                              {
                                fileName: "[project]/components/Footer.tsx",
                                lineNumber: 40,
                                columnNumber: 13,
                              },
                              ("TURBOPACK compile-time value", void 0),
                            ),
                            /*#__PURE__*/ (0,
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                              "jsxDEV"
                            ])(
                              "div",
                              {
                                className: "text-sm leading-relaxed space-y-2",
                                children: [
                                  /*#__PURE__*/ (0,
                                  __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                    "jsxDEV"
                                  ])(
                                    "p",
                                    {
                                      className: "font-bold text-slate-200",
                                      children: t.jpHq,
                                    },
                                    void 0,
                                    false,
                                    {
                                      fileName:
                                        "[project]/components/Footer.tsx",
                                      lineNumber: 42,
                                      columnNumber: 15,
                                    },
                                    ("TURBOPACK compile-time value", void 0),
                                  ),
                                  /*#__PURE__*/ (0,
                                  __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                    "jsxDEV"
                                  ])(
                                    "p",
                                    {
                                      children: t.jpAddr,
                                    },
                                    void 0,
                                    false,
                                    {
                                      fileName:
                                        "[project]/components/Footer.tsx",
                                      lineNumber: 43,
                                      columnNumber: 15,
                                    },
                                    ("TURBOPACK compile-time value", void 0),
                                  ),
                                  /*#__PURE__*/ (0,
                                  __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                    "jsxDEV"
                                  ])(
                                    "p",
                                    {
                                      children: t.jpPhone,
                                    },
                                    void 0,
                                    false,
                                    {
                                      fileName:
                                        "[project]/components/Footer.tsx",
                                      lineNumber: 44,
                                      columnNumber: 15,
                                    },
                                    ("TURBOPACK compile-time value", void 0),
                                  ),
                                  /*#__PURE__*/ (0,
                                  __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                    "jsxDEV"
                                  ])(
                                    "p",
                                    {
                                      children: t.jpFax,
                                    },
                                    void 0,
                                    false,
                                    {
                                      fileName:
                                        "[project]/components/Footer.tsx",
                                      lineNumber: 45,
                                      columnNumber: 15,
                                    },
                                    ("TURBOPACK compile-time value", void 0),
                                  ),
                                  /*#__PURE__*/ (0,
                                  __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                    "jsxDEV"
                                  ])(
                                    "p",
                                    {
                                      className:
                                        "text-blue-400 hover:underline",
                                      children: /*#__PURE__*/ (0,
                                      __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                        "jsxDEV"
                                      ])(
                                        "a",
                                        {
                                          href: `mailto:${jpEmail}`,
                                          children: jpEmail,
                                        },
                                        void 0,
                                        false,
                                        {
                                          fileName:
                                            "[project]/components/Footer.tsx",
                                          lineNumber: 46,
                                          columnNumber: 60,
                                        },
                                        ("TURBOPACK compile-time value",
                                        void 0),
                                      ),
                                    },
                                    void 0,
                                    false,
                                    {
                                      fileName:
                                        "[project]/components/Footer.tsx",
                                      lineNumber: 46,
                                      columnNumber: 15,
                                    },
                                    ("TURBOPACK compile-time value", void 0),
                                  ),
                                ],
                              },
                              void 0,
                              true,
                              {
                                fileName: "[project]/components/Footer.tsx",
                                lineNumber: 41,
                                columnNumber: 13,
                              },
                              ("TURBOPACK compile-time value", void 0),
                            ),
                          ],
                        },
                        void 0,
                        true,
                        {
                          fileName: "[project]/components/Footer.tsx",
                          lineNumber: 39,
                          columnNumber: 11,
                        },
                        ("TURBOPACK compile-time value", void 0),
                      ),
                      /*#__PURE__*/ (0,
                      __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                        "jsxDEV"
                      ])(
                        "div",
                        {
                          children: [
                            /*#__PURE__*/ (0,
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                              "jsxDEV"
                            ])(
                              "h4",
                              {
                                className:
                                  "text-white font-bold mb-6 uppercase tracking-widest text-xs",
                                children: t.nav,
                              },
                              void 0,
                              false,
                              {
                                fileName: "[project]/components/Footer.tsx",
                                lineNumber: 51,
                                columnNumber: 13,
                              },
                              ("TURBOPACK compile-time value", void 0),
                            ),
                            /*#__PURE__*/ (0,
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                              "jsxDEV"
                            ])(
                              "ul",
                              {
                                className: "space-y-3 text-sm",
                                children: [
                                  /*#__PURE__*/ (0,
                                  __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                    "jsxDEV"
                                  ])(
                                    "li",
                                    {
                                      children: /*#__PURE__*/ (0,
                                      __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                        "jsxDEV"
                                      ])(
                                        "a",
                                        {
                                          href: "#about",
                                          className:
                                            "hover:text-white transition-colors",
                                          children: navT.about,
                                        },
                                        void 0,
                                        false,
                                        {
                                          fileName:
                                            "[project]/components/Footer.tsx",
                                          lineNumber: 53,
                                          columnNumber: 19,
                                        },
                                        ("TURBOPACK compile-time value",
                                        void 0),
                                      ),
                                    },
                                    void 0,
                                    false,
                                    {
                                      fileName:
                                        "[project]/components/Footer.tsx",
                                      lineNumber: 53,
                                      columnNumber: 15,
                                    },
                                    ("TURBOPACK compile-time value", void 0),
                                  ),
                                  /*#__PURE__*/ (0,
                                  __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                    "jsxDEV"
                                  ])(
                                    "li",
                                    {
                                      children: /*#__PURE__*/ (0,
                                      __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                        "jsxDEV"
                                      ])(
                                        "a",
                                        {
                                          href: "#process",
                                          className:
                                            "hover:text-white transition-colors",
                                          children: navT.process,
                                        },
                                        void 0,
                                        false,
                                        {
                                          fileName:
                                            "[project]/components/Footer.tsx",
                                          lineNumber: 54,
                                          columnNumber: 19,
                                        },
                                        ("TURBOPACK compile-time value",
                                        void 0),
                                      ),
                                    },
                                    void 0,
                                    false,
                                    {
                                      fileName:
                                        "[project]/components/Footer.tsx",
                                      lineNumber: 54,
                                      columnNumber: 15,
                                    },
                                    ("TURBOPACK compile-time value", void 0),
                                  ),
                                  /*#__PURE__*/ (0,
                                  __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                    "jsxDEV"
                                  ])(
                                    "li",
                                    {
                                      children: /*#__PURE__*/ (0,
                                      __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                        "jsxDEV"
                                      ])(
                                        "a",
                                        {
                                          href: "#rfq",
                                          className:
                                            "hover:text-white transition-colors",
                                          children: navT.rfq,
                                        },
                                        void 0,
                                        false,
                                        {
                                          fileName:
                                            "[project]/components/Footer.tsx",
                                          lineNumber: 55,
                                          columnNumber: 19,
                                        },
                                        ("TURBOPACK compile-time value",
                                        void 0),
                                      ),
                                    },
                                    void 0,
                                    false,
                                    {
                                      fileName:
                                        "[project]/components/Footer.tsx",
                                      lineNumber: 55,
                                      columnNumber: 15,
                                    },
                                    ("TURBOPACK compile-time value", void 0),
                                  ),
                                ],
                              },
                              void 0,
                              true,
                              {
                                fileName: "[project]/components/Footer.tsx",
                                lineNumber: 52,
                                columnNumber: 13,
                              },
                              ("TURBOPACK compile-time value", void 0),
                            ),
                          ],
                        },
                        void 0,
                        true,
                        {
                          fileName: "[project]/components/Footer.tsx",
                          lineNumber: 50,
                          columnNumber: 11,
                        },
                        ("TURBOPACK compile-time value", void 0),
                      ),
                    ],
                  },
                  void 0,
                  true,
                  {
                    fileName: "[project]/components/Footer.tsx",
                    lineNumber: 20,
                    columnNumber: 9,
                  },
                  ("TURBOPACK compile-time value", void 0),
                ),
                /*#__PURE__*/ (0,
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                  "jsxDEV"
                ])(
                  "div",
                  {
                    className:
                      "pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-xs",
                    children: [
                      /*#__PURE__*/ (0,
                      __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                        "jsxDEV"
                      ])(
                        "p",
                        {
                          children:
                            "© 2022 Akapla Industrial Solutions. All rights reserved.",
                        },
                        void 0,
                        false,
                        {
                          fileName: "[project]/components/Footer.tsx",
                          lineNumber: 61,
                          columnNumber: 11,
                        },
                        ("TURBOPACK compile-time value", void 0),
                      ),
                      /*#__PURE__*/ (0,
                      __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                        "jsxDEV"
                      ])(
                        "div",
                        {
                          className: "flex space-x-4 mt-4 md:mt-0",
                          children: /*#__PURE__*/ (0,
                          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                            "jsxDEV"
                          ])(
                            "span",
                            {
                              className: "text-slate-600",
                              children: "AKAPLA x TQC",
                            },
                            void 0,
                            false,
                            {
                              fileName: "[project]/components/Footer.tsx",
                              lineNumber: 63,
                              columnNumber: 14,
                            },
                            ("TURBOPACK compile-time value", void 0),
                          ),
                        },
                        void 0,
                        false,
                        {
                          fileName: "[project]/components/Footer.tsx",
                          lineNumber: 62,
                          columnNumber: 11,
                        },
                        ("TURBOPACK compile-time value", void 0),
                      ),
                    ],
                  },
                  void 0,
                  true,
                  {
                    fileName: "[project]/components/Footer.tsx",
                    lineNumber: 60,
                    columnNumber: 9,
                  },
                  ("TURBOPACK compile-time value", void 0),
                ),
              ],
            },
            void 0,
            true,
            {
              fileName: "[project]/components/Footer.tsx",
              lineNumber: 19,
              columnNumber: 7,
            },
            ("TURBOPACK compile-time value", void 0),
          ),
        },
        void 0,
        false,
        {
          fileName: "[project]/components/Footer.tsx",
          lineNumber: 18,
          columnNumber: 5,
        },
        ("TURBOPACK compile-time value", void 0),
      );
    };
    _c = Footer;
    const __TURBOPACK__default__export__ = Footer;
    var _c;
    __turbopack_context__.k.register(_c, "Footer");
    if (
      typeof globalThis.$RefreshHelpers$ === "object" &&
      globalThis.$RefreshHelpers !== null
    ) {
      __turbopack_context__.k.registerExports(
        __turbopack_context__.m,
        globalThis.$RefreshHelpers$,
      );
    }
  },
  "[project]/app/page.tsx [app-client] (ecmascript)",
  (__turbopack_context__) => {
    "use strict";

    __turbopack_context__.s(["default", () => Home]);
    var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        "[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)",
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        "[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)",
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Navbar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        "[project]/components/Navbar.tsx [app-client] (ecmascript)",
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Hero$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        "[project]/components/Hero.tsx [app-client] (ecmascript)",
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$About$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        "[project]/components/About.tsx [app-client] (ecmascript)",
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Network$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        "[project]/components/Network.tsx [app-client] (ecmascript)",
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Process$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        "[project]/components/Process.tsx [app-client] (ecmascript)",
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$RFQForm$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        "[project]/components/RFQForm.tsx [app-client] (ecmascript)",
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Footer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        "[project]/components/Footer.tsx [app-client] (ecmascript)",
      );
    var _s = __turbopack_context__.k.signature();
    ("use client");
    function Home() {
      _s();
      const [lang, setLang] = (0,
      __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
        "useState"
      ])("JP");
      const toggleLanguage = () => {
        setLang((prev) => {
          if (prev === "JP") return "EN";
          if (prev === "EN") return "VN";
          return "JP";
        });
      };
      return /*#__PURE__*/ (0,
      __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
        "jsxDEV"
      ])(
        "div",
        {
          className: "min-h-screen flex flex-col",
          children: [
            /*#__PURE__*/ (0,
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
              "jsxDEV"
            ])(
              __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Navbar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                "default"
              ],
              {
                lang: lang,
                toggleLanguage: toggleLanguage,
              },
              void 0,
              false,
              {
                fileName: "[project]/app/page.tsx",
                lineNumber: 27,
                columnNumber: 7,
              },
              this,
            ),
            /*#__PURE__*/ (0,
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
              "jsxDEV"
            ])(
              "main",
              {
                className: "flex-grow",
                children: [
                  /*#__PURE__*/ (0,
                  __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                    "jsxDEV"
                  ])(
                    "section",
                    {
                      id: "home",
                      children: /*#__PURE__*/ (0,
                      __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                        "jsxDEV"
                      ])(
                        __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Hero$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                          "default"
                        ],
                        {
                          lang: lang,
                        },
                        void 0,
                        false,
                        {
                          fileName: "[project]/app/page.tsx",
                          lineNumber: 30,
                          columnNumber: 11,
                        },
                        this,
                      ),
                    },
                    void 0,
                    false,
                    {
                      fileName: "[project]/app/page.tsx",
                      lineNumber: 29,
                      columnNumber: 9,
                    },
                    this,
                  ),
                  /*#__PURE__*/ (0,
                  __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                    "jsxDEV"
                  ])(
                    "section",
                    {
                      id: "about",
                      className: "py-20 bg-white",
                      children: /*#__PURE__*/ (0,
                      __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                        "jsxDEV"
                      ])(
                        __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$About$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                          "default"
                        ],
                        {
                          lang: lang,
                        },
                        void 0,
                        false,
                        {
                          fileName: "[project]/app/page.tsx",
                          lineNumber: 34,
                          columnNumber: 11,
                        },
                        this,
                      ),
                    },
                    void 0,
                    false,
                    {
                      fileName: "[project]/app/page.tsx",
                      lineNumber: 33,
                      columnNumber: 9,
                    },
                    this,
                  ),
                  /*#__PURE__*/ (0,
                  __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                    "jsxDEV"
                  ])(
                    "section",
                    {
                      id: "network",
                      children: /*#__PURE__*/ (0,
                      __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                        "jsxDEV"
                      ])(
                        __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Network$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                          "default"
                        ],
                        {
                          lang: lang,
                        },
                        void 0,
                        false,
                        {
                          fileName: "[project]/app/page.tsx",
                          lineNumber: 38,
                          columnNumber: 11,
                        },
                        this,
                      ),
                    },
                    void 0,
                    false,
                    {
                      fileName: "[project]/app/page.tsx",
                      lineNumber: 37,
                      columnNumber: 9,
                    },
                    this,
                  ),
                  /*#__PURE__*/ (0,
                  __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                    "jsxDEV"
                  ])(
                    "section",
                    {
                      id: "process",
                      className: "py-20 bg-slate-50",
                      children: /*#__PURE__*/ (0,
                      __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                        "jsxDEV"
                      ])(
                        __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Process$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                          "default"
                        ],
                        {
                          lang: lang,
                        },
                        void 0,
                        false,
                        {
                          fileName: "[project]/app/page.tsx",
                          lineNumber: 42,
                          columnNumber: 11,
                        },
                        this,
                      ),
                    },
                    void 0,
                    false,
                    {
                      fileName: "[project]/app/page.tsx",
                      lineNumber: 41,
                      columnNumber: 9,
                    },
                    this,
                  ),
                  /*#__PURE__*/ (0,
                  __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                    "jsxDEV"
                  ])(
                    "section",
                    {
                      id: "rfq",
                      className: "py-20 bg-white border-t border-slate-100",
                      children: /*#__PURE__*/ (0,
                      __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                        "jsxDEV"
                      ])(
                        __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$RFQForm$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                          "default"
                        ],
                        {
                          lang: lang,
                        },
                        void 0,
                        false,
                        {
                          fileName: "[project]/app/page.tsx",
                          lineNumber: 46,
                          columnNumber: 11,
                        },
                        this,
                      ),
                    },
                    void 0,
                    false,
                    {
                      fileName: "[project]/app/page.tsx",
                      lineNumber: 45,
                      columnNumber: 9,
                    },
                    this,
                  ),
                ],
              },
              void 0,
              true,
              {
                fileName: "[project]/app/page.tsx",
                lineNumber: 28,
                columnNumber: 7,
              },
              this,
            ),
            /*#__PURE__*/ (0,
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
              "jsxDEV"
            ])(
              __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Footer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                "default"
              ],
              {
                lang: lang,
              },
              void 0,
              false,
              {
                fileName: "[project]/app/page.tsx",
                lineNumber: 49,
                columnNumber: 7,
              },
              this,
            ),
          ],
        },
        void 0,
        true,
        {
          fileName: "[project]/app/page.tsx",
          lineNumber: 26,
          columnNumber: 5,
        },
        this,
      );
    }
    _s(Home, "VEswdnkmgUDRAxdpZkxKP1xQQX0=");
    _c = Home;
    var _c;
    __turbopack_context__.k.register(_c, "Home");
    if (
      typeof globalThis.$RefreshHelpers$ === "object" &&
      globalThis.$RefreshHelpers !== null
    ) {
      __turbopack_context__.k.registerExports(
        __turbopack_context__.m,
        globalThis.$RefreshHelpers$,
      );
    }
  },
]);

//# sourceMappingURL=_e9e9dbeb._.js.map
