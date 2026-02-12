
export type Language = 'JP' | 'EN' | 'VN';

export const translations = {
  JP: {
    nav: {
      about: "会社概要",
      process: "業務プロセス",
      rfq: "お見積り",
      bridge: "日本-ベトナム 架け橋"
    },
    hero: {
      tag: "ベトナム製造パートナー",
      title1: "日本品質の技術を、",
      title2: "ベトナムの製造力で。",
      desc: "Akaplaは、日本の厳格な技術基準とベトナムのコスト効率の高い大規模製造インフラを繋ぎます。次世代の信頼できる産業サプライチェーン管理を提供します。",
      btnStart: "RFQを開始する",
      btnService: "サービス紹介"
    },
    about: {
      tag: "Akaplaについて",
      title: "日本工学とベトナム工場の 信頼できる架け橋",
      desc: "ベトナムでの製造委託における最大の課題は「品質管理」と「コミュニケーション」です。Akaplaは、日本企業の要求品質を深く理解した「ブリッジエンジニア」が全プロセスを徹底管理. 日本水準のQCDをお約束します。",
      points: [
        { title: "深い文化理解", desc: "弊社のエンジニアは日本語が堪能で, 日本の製造現場での経験があります。" },
        { title: "厳格な品質管理", desc: "材料から出荷まで, 各段階で独立したQCチェックを実施します。" },
        { title: "シームレスな対話", desc: "言語の壁を排除し, 日本語によるリアルタイムな進捗報告を行います。" }
      ],
      badge: "日本品質基準(JIS)への100%コミットメント"
    },
    network: {
      tag: "製造ネットワーク",
      title: "ベトナムにおける広大な製造ネットワーク",
      slogan: "あらゆるニーズ、規模、難易度に対応可能な最適な工場を提案します",
      trustStat: "100+",
      trustLabel: "戦略的提携パートナー工場",
      cards: [
        { title: "多様な専門分野", desc: "CNC加工、射出成形、板金、電子機器(EMS)など、幅広い産業に対応。" },
        { title: "大規模生産体制", desc: "小ロット試作から大規模量産まで、ベトナム全土の拠点で対応可能です。" },
        { title: "厳格な品質管理", desc: "ISO取得済みかつ日本企業との取引実績豊富な工場のみを厳選。" },
        { title: "高い柔軟性", desc: "急な設計変更や短納期にも、ネットワークを活かして柔軟に対応します。" }
      ]
    },
    process: {
      tag: "私たちの手法",
      title: "シームレスな7ステップ",
      steps: [
        { number: 1, title: "RFQ受付", desc: "図面と要件を安全なフォーム経由で受領。" },
        { number: 2, title: "技術審査", desc: "製造可能性と品質基準をエンジニアが精査。" },
        { number: 3, title: "見積提出", desc: "最適な工場を選定し、競争力のある価格を提示。" },
        { number: 4, title: "工場見学 & 試作", desc: "現地視察や通訳サポート、プロジェクト前の試作作成で安心を提供します。" },
        { number: 5, title: "契約締結・着金", desc: "法的・技術的条件を確定。前払金（50%）を決済し生産開始。" },
        { number: 6, title: "生産・検査", desc: "ブリッジエンジニアが現地で徹底した品質管理を実施。" },
        { number: 7, title: "納品・決済", desc: "最終検査合格後、納品と残金（50%）の精算。" }
      ]
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
        reset: "新しいフォームを送る"
      },
      visitOptions: ["希望しない", "工場見学を希望", "試作(プロトタイプ)を希望", "両方を希望", "相談したい"],
      categories: ["精密機械加工 (CNC)", "射出成形", "板金加工", "PCBA & 電子機器", "その他"],
      fileError: "ファイルサイズが大きすぎます。最大1GBまで可能です。"
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
      nav: "ナビゲーション"
    }
  },
  EN: {
    nav: {
      about: "About Us",
      process: "Process",
      rfq: "Request Quote",
      bridge: "Japan-Vietnam Bridge"
    },
    hero: {
      tag: "Manufacturing Partner",
      title1: "Japanese Standards,",
      title2: "Vietnamese Production.",
      desc: "Akapla bridges Japan's rigorous technical standards with Vietnam's cost-efficient manufacturing infrastructure. Reliable Supply Chain Management for the future.",
      btnStart: "Start RFQ",
      btnService: "Our Services"
    },
    about: {
      tag: "About Akapla",
      title: "The Trustworthy Bridge Between JP Engineering & VN Factories",
      desc: "Quality control and communication are the biggest challenges in Vietnamese outsourcing. Our 'Bridge Engineers' understand Japanese quality requirements and manage the entire process.",
      points: [
        { title: "Deep Cultural Understanding", desc: "Our engineers are fluent in Japanese with JP manufacturing experience." },
        { title: "Rigorous Quality Control", desc: "Independent QC checks at every stage, from material to shipping." },
        { title: "Seamless Communication", desc: "Real-time updates in Japanese/English, avoiding language barriers." }
      ],
      badge: "100% Commitment to Japanese Standards (JIS)."
    },
    network: {
      tag: "Manufacturing Network",
      title: "Extensive Manufacturing Network in Vietnam",
      slogan: "The right factory for every need, every scale, and every level of complexity.",
      trustStat: "100+",
      trustLabel: "Strategic Partner Factories",
      cards: [
        { title: "Diverse Specialization", desc: "Covering CNC, injection molding, sheet metal, PCBA, and more." },
        { title: "Large-Scale Capacity", desc: "From low-volume prototypes to mass production across Vietnam." },
        { title: "Strict Quality Audit", desc: "Carefully selected factories with ISO certification and JP track records." },
        { title: "High Flexibility", desc: "Swiftly adapting to design changes and tight deadlines using our network." }
      ]
    },
    process: {
      tag: "Our Methodology",
      title: "Seamless 7-Step Workflow",
      steps: [
        { number: 1, title: "RFQ Receipt", desc: "Drawings and requirements sent via secure form." },
        { number: 2, title: "Technical Audit", desc: "Engineers audit manufacturability and quality standards." },
        { number: 3, title: "Preliminary Quote", desc: "Selecting the best factory and presenting competitive pricing." },
        { number: 4, title: "Factory Visit & Prototype", desc: "Site visits and prototyping to verify quality before major commitment." },
        { number: 5, title: "Contract & Deposit", desc: "Finalizing terms and 50% advance payment to start production." },
        { number: 6, title: "Production & QC", desc: "Bridge engineers manage local quality onsite." },
        { number: 7, title: "Delivery & Final Pay", desc: "Final inspection, delivery, and remaining 50% payment." }
      ]
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
        successDesc: "We have received your RFQ. Our team will contact you shortly.",
        reset: "Submit another form"
      },
      visitOptions: ["None", "Factory Visit", "Prototyping", "Both", "Need Consultation"],
      categories: ["Precision Machining (CNC)", "Injection Molding", "Sheet Metal Fabrication", "PCBA & Electronics", "Other"],
      fileError: "File is too large. Maximum size is 1GB."
    },
    footer: {
      desc: "Empowering global supply chains by bridging the best of Japan and Vietnam.",
      vnHq: "Vietnam HQ: CÔNG TY TNHH AKAPLA",
      vnAddr: "VĨNH TƯỜNG - PHÚ THỌ - VIỆT NAM",
      vnTax: "Tax ID: 2500747386",
      vnPhone: "Tel: 0973080694",
      jpHq: "Japan Branch: TQC Co., Ltd.",
      jpAddr: "3F Sato Building, 2-33-6 Minami-Ikebukuro, Toshima-ku, Tokyo 171-0022",
      jpPhone: "Tel: 03-6907-1219",
      jpFax: "Fax: (03) 6701-2399",
      nav: "Navigation"
    }
  },
  VN: {
    nav: {
      about: "Về chúng tôi",
      process: "Quy trình",
      rfq: "Báo giá",
      bridge: "Cầu nối Nhật - Việt"
    },
    hero: {
      tag: "Đối tác sản xuất Việt Nam",
      title1: "Tiêu chuẩn Nhật Bản,",
      title2: "Sản xuất tại Việt Nam.",
      desc: "Akapla kết nối tiêu chuẩn kỹ thuật khắt khe của Nhật Bản với hạ tầng sản xuất chi phí tối ưu của Việt Nam. Quản lý chuỗi cung ứng công nghiệp tin cậy cho tương lai.",
      btnStart: "Bắt đầu RFQ",
      btnService: "Dịch vụ của chúng tôi"
    },
    about: {
      tag: "Về Akapla",
      title: "Cầu nối tin cậy giữa Kỹ thuật Nhật Bản & Nhà máy Việt Nam",
      desc: "Quản lý chất lượng và giao tiếp là thách thức lớn nhất khi thuê ngoài tại Việt Nam. Các 'Kỹ sư cầu nối' của chúng tôi hiểu rõ yêu cầu chất lượng Nhật Bản và quản lý toàn bộ quy trình.",
      points: [
        { title: "Am hiểu văn hóa sâu sắc", desc: "Kỹ sư của chúng tôi sử dụng thành thạo tiếng Nhật và có kinh nghiệm sản xuất tại Nhật." },
        { title: "Kiểm soát chất lượng nghiêm ngặt", desc: "Kiểm tra QC độc lập ở mọi giai đoạn, từ nguyên liệu đến khi xuất xưởng." },
        { title: "Giao tiếp thông suốt", desc: "Cập nhật thời gian thực bằng tiếng Nhật/Anh/Việt, xóa bỏ rào cản ngôn ngữ." }
      ],
      badge: "Cam kết 100% tiêu chuẩn chất lượng Nhật Bản (JIS)."
    },
    network: {
      tag: "Mạng lưới sản xuất",
      title: "Mạng lưới sản xuất quy mô tại Việt Nam",
      slogan: "Mọi nhu cầu, mọi quy mô, mọi độ khó đều có nhà máy phù hợp.",
      trustStat: "100+",
      trustLabel: "Đối tác xưởng sản xuất chiến lược",
      cards: [
        { title: "Đa dạng lĩnh vực", desc: "Gia công CNC, đúc nhựa, tấm kim loại, PCBA và nhiều mảng khác." },
        { title: "Quy mô lớn", desc: "Từ sản xuất mẫu nhỏ đến hàng loạt quy mô lớn trên khắp Việt Nam." },
        { title: "Quản lý chất lượng", desc: "Hệ thống nhà máy đạt chuẩn ISO, giàu kinh nghiệm làm việc với Nhật." },
        { title: "Sự linh hoạt", desc: "Thích ứng nhanh với thay đổi thiết kế và tiến độ gấp nhờ mạng lưới rộng." }
      ]
    },
    process: {
      tag: "Phương pháp của chúng tôi",
      title: "Quy trình 7 bước tối ưu",
      steps: [
        { number: 1, title: "Tiếp nhận RFQ", desc: "Gửi bản vẽ và yêu cầu qua biểu mẫu bảo mật." },
        { number: 2, title: "Thẩm định kỹ thuật", desc: "Kỹ sư thẩm định khả năng sản xuất và tiêu chuẩn chất lượng." },
        { number: 3, title: "Báo giá sơ bộ", desc: "Lựa chọn nhà máy tối ưu và đưa ra mức giá cạnh tranh." },
        { number: 4, title: "Thăm xưởng & Làm mẫu", desc: "Hỗ trợ đưa đón, phiên dịch kỹ thuật thăm xưởng. Khuyến khích đặt mẫu thử để kiểm chứng." },
        { number: 5, title: "Hợp đồng & Đặt cọc", desc: "Ký hợp đồng và thanh toán 50% để bắt đầu sản xuất." },
        { number: 6, title: "Sản xuất & QC", desc: "Kỹ sư cầu nối trực tiếp quản lý chất lượng tại hiện trường." },
        { number: 7, title: "Giao hàng & Tất toán", desc: "Kiểm tra lần cuối, giao hàng và thanh toán 50% còn lại." }
      ]
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
        successDesc: "Chúng tôi đã nhận được RFQ của bạn. Đội ngũ sẽ liên hệ sớm nhất.",
        reset: "Gửi biểu mẫu khác"
      },
      visitOptions: ["Không", "Thăm xưởng trực tiếp", "Sản xuất mẫu thử", "Cả hai", "Cần tư vấn thêm"],
      categories: ["Gia công chính xác (CNC)", "Đúc ép nhựa", "Gia công tấm kim loại", "PCBA & Điện tử", "Khác"],
      fileError: "Tệp quá lớn. Dung lượng tối đa là 1GB."
    },
    footer: {
      desc: "Tăng cường chuỗi cung ứng toàn cầu bằng cách kết nối những giá trị tốt nhất của Nhật Bản và Việt Nam.",
      vnHq: "Trụ sở chính VN: CÔNG TY TNHH AKAPLA",
      vnAddr: "VĨNH TƯỜNG - PHÚ THỌ - VIỆT NAM",
      vnTax: "MST: 2500747386",
      vnPhone: "SĐT: 0973080694",
      jpHq: "Chi nhánh Nhật Bản: TQC株式会社",
      jpAddr: "3F Sato Building, 2-33-6 Minami-Ikebukuro, Toshima-ku, Tokyo 171-0022",
      jpPhone: "SĐT: 03-6907-1219",
      jpFax: "Fax: (03) 6701-2399",
      nav: "Điều hướng"
    }
  }
};
