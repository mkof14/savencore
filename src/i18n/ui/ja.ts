import { uiEn, type UiMessages } from "@/i18n/ui/en";

/** Japanese UI chrome — clear, natural Japanese. */
export const uiJa: UiMessages = {
  ...uiEn,
  language: "言語", menu: "メニュー", close: "閉じる", open: "開く", skipToContent: "本文へ移動",
  nav: { home: "ホーム", technology: "技術", systems: "システム", applications: "応用", trust: "信頼", research: "研究", purpose: "目的", foundation: "基盤", labs: "ラボ", investors: "投資家", signIn: "サインイン / 登録" },
  navEntries: { ...uiEn.navEntries, "technology-overview": "技術", "technology-human-data": "人に関するデータ", "technology-human-data-model": "人に関するデータのモデル", "technology-data-infrastructure": "データ基盤", "technology-interoperability": "相互運用性", "technology-privacy": "プライバシー", "technology-security": "セキュリティ", "technology-artificial-intelligence": "人工知能", "technology-automation": "自動化", "technology-robotics": "ロボティクス", "systems-overview": "システム", "systems-knowledge-engine": "知識エンジン", "systems-ai-decision-support": "AIによる意思決定支援", "systems-safety-layer": "安全レイヤー", "systems-communication-layer": "通信レイヤー", "systems-clinical-interfaces": "臨床インターフェース", "systems-robotics-layer": "ロボティクス・レイヤー", "systems-drone-systems": "ドローンシステム", "systems-saven-robotics-interface": "SAVENロボティクス・インターフェース", "applications-overview": "活用分野", "applications-healthcare": "医療", "applications-home": "家庭アプリケーション", "applications-hospitals": "病院", "applications-emergency": "緊急時", "applications-industrial": "産業", "applications-government": "公共部門", "applications-agriculture": "農業", "applications-research-applications": "研究分野での活用", "trust-overview": "信頼", "trust-privacy": "プライバシー", "trust-security": "セキュリティ", "trust-safety": "安全", "trust-human-oversight": "人による監督", "trust-transparency": "透明性", "trust-ethics": "倫理と責任ある利用", "trust-limitations": "限界", "footer-technology-overview": "概要", "footer-systems-overview": "概要", "footer-applications-overview": "概要", "footer-trust-overview": "概要", "footer-applications-research": "研究", "footer-trust-ethics": "倫理", "footer-company-about": "会社概要",
    "footer-company-home": "ホーム", "footer-company-biomath-core": "BioMath Core", "footer-company-mission": "ミッション", "footer-company-investors-contact": "投資家向け連絡", "footer-company-roadmap": "ロードマップ", "footer-resources-search": "検索", "footer-resources-lab": "Lab",
    "footer-resources-faq": "よくある質問", "footer-resources-security-issue": "セキュリティ問題", "sign-in": "サインイン / 登録", "footer-company-contact": "お問い合わせ", "footer-company-investors": "投資家", "footer-company-media": "メディア", "footer-labs-overview": "概要", "footer-labs-saven-robotics-lab": "SAVEN Robotics Lab", "footer-labs-internal-future-lab": "Future Lab", "footer-systems-saven-robotics-interface": "ロボティクス・インターフェース", "footer-legal-privacy-policy": "プライバシーポリシー", "footer-legal-terms-of-use": "利用規約", "footer-legal-cookie-policy": "クッキーポリシー", "footer-legal-cookie-preferences": "クッキー設定", "footer-legal-accessibility-statement": "アクセシビリティ声明", "footer-legal-security": "セキュリティ", "footer-legal-responsible-ai": "責任あるAI", "footer-legal-medical-disclaimer": "医療に関する免責事項", "footer-legal-research-disclaimer": "研究に関する免責事項", "footer-legal-intellectual-property": "知的財産", "footer-legal-trademark-notice": "商標に関する通知", "footer-legal-copyright": "著作権表示", "footer-legal-data-rights": "データに関する権利", "footer-legal-regional-privacy-rights": "地域のプライバシー権", "footer-legal-do-not-sell-or-share": "販売・共有の拒否", "footer-legal-legal-notices": "法的通知", "footer-legal-more": "もっと見る"},
  footer: { ...uiEn.footer, copyrightLabel: "Copyright", themeToLight: "ライトテーマに切り替え", themeToDark: "ダークテーマに切り替え", signIn: "サインイン / 登録", admin: "管理", technology: "技術", systems: "システム", architecture: "アーキテクチャ", applications: "活用分野", trust: "信頼", research: "研究", labs: "ラボ", about: "SAVEN Coreについて", resources: "リソース", company: "会社情報", legal: "法的情報", more: "もっと見る", contact: "お問い合わせ", plannedNote: "", comingSoon: "", copyright: "© 2026 SAVEN Core. All rights reserved.", copyrightShort: "© SAVEN Core", rightsReserved: "無断転載を禁じます。", privacy: "プライバシー", terms: "利用規約", cookies: "Cookie", theme: "テーマ", themeLight: "ライト", themeDark: "ダーク", version: "バージョン", tagline: "人のデータ。\nつながるシステム。\n責任あるテクノロジー。" },
  social: { ...uiEn.social, navLabel: "ソーシャルネットワーク", notConfigured: "リンクは未設定" },
  admin: { ...uiEn.admin, localStoreOnly: "ローカルのみ / このホストでは永続化しません：招待・役割・権限・配信・通知をVercel上で保持するには BLOB_READ_WRITE_TOKEN（Vercel Blob）が必要です。未設定だと変更が失敗したり再デプロイ後に消えることがあります。ローカル開発は引き続き storage/admin/ に書き込みます。", brandTitle: "SAVEN Admin", navLabel: "管理ナビゲーション", statusInDevelopment: "開発中", eyebrow: "管理プラットフォーム", backToSite: "サイトへ戻る", signOut: "サインアウト", navDashboard: "ダッシュボード", navEmailTemplates: "メールテンプレート", navMailings: "配信", navInvitations: "招待", navUsers: "ユーザーと役割", navPermissions: "権限", navNotifications: "通知", navMedia: "メディアライブラリ", navMarketing: "マーケティングツール", navMonitoring: "技術モニタリング", openSection: "開く", dashboardTitle: "サイト管理", emailTitle: "メールテンプレート", mediaTitle: "メディアライブラリ", mediaLead: "動画・書類・リンクを一か所で追加。ブランド資産はサイト同梱。公開項目は /media/ に表示。", mediaAddHeading: "アップロード", mediaAddLead: "クラシックな操作：ファイルアップロード、動画URL追加、リンク保存。下の表で行を管理します。", mediaTabFile: "ファイルをアップロード", mediaTabVideo: "動画をアップロード", mediaTabLink: "リンクを追加", mediaTabUploadFile: "ファイルをアップロード", mediaTabUploadVideo: "動画をアップロード", mediaTabAddLink: "リンクを追加", mediaChooseFile: "ファイルを選択", mediaChooseVideo: "動画ファイルを選択", mediaVercelLimit: "BLOB_READ_WRITE_TOKENがない場合、このホストではメディアライブラリの変更を保存できません（Vercelで典型的）。永続保存にはVercel Blobを設定するか、ファイルとYouTube/Vimeoリンクはローカルで追加してください。大きな動画はURL埋め込みを推奨（Vercel本文 ≈ 4.5 MB）。", mediaErrorTooLarge: "ファイルが大きすぎます。ローカル上限40 MB。Vercelでは約4.5 MB超のアップロードは失敗しがちです — YouTube/VimeoのURLを使ってください。", mediaErrorInvalidType: "未対応の種類です。PDF、Office、画像、または動画（MP4、WebM、OGG、MOV）。", mediaErrorStorage: "ここは書き込み不可です。永続的なVercel Blobストレージには BLOB_READ_WRITE_TOKEN を設定するか、ローカル開発を使用してください。", mediaVideoUrlHint: "大きな動画向け：YouTubeまたはVimeoのURLを貼り付け（下にプレビュー）。", mediaLibraryHeading: "ライブラリ", mediaFilterAllFiles: "すべてのファイル", mediaFilterVideos: "動画", mediaFilterDocs: "文書", mediaDeleteConfirm: "この項目をライブラリから削除しますか？組み込みカタログ行は一覧から非表示になります（/public 配下のサイトファイルは残ります）。", mediaFilterLinks: "リンク", mediaSourceSeed: "内蔵", colDate: "日付", mediaDropTitle: "動画やPDFをドロップ、またはリンクを貼り付け", mediaDropHint: "またはクリックして選択", mediaAcceptedTypes: "PDF、DOC/DOCX、PPT/PPTX、KEY、MP4/WebM、画像 · 最大40 MB", mediaBrowse: "ファイルを選択", mediaUploadNow: "アップロード", mediaUploading: "アップロード中…", mediaUploadSuccess: "アップロードしました。", mediaVideoUrlLabel: "動画URL", mediaVideoUrlPlaceholder: "YouTube、Vimeo、または直接MP4/WebM URL", mediaVideoTitlePlaceholder: "タイトル（任意 — URLから）", mediaVideoOrUpload: "または動画ファイルをアップロード", mediaVideoPreview: "ライブプレビュー", mediaSaveVideo: "動画を保存", mediaLinkHeading: "リンクを追加", mediaLinkUrlLabel: "URL", mediaLinkNote: "メモ（任意）", mediaLinkNotePlaceholder: "短いメモ", mediaLinkAdd: "リンクを追加", mediaSaveLink: "リンクを保存", mediaLinkSuccess: "保存しました。", mediaFilterAll: "すべて", mediaEmptyLibrary: "動画やPDFをドロップ、またはリンクを貼り付け", mediaJustAdded: "追加済み", mediaOpen: "開く", mediaCopyLink: "リンクをコピー", mediaCatImage: "画像", mediaCatVideo: "動画", mediaCatDocument: "書類", mediaCatPresentation: "プレゼン", mediaCatLink: "リンク", mediaCatOther: "その他", actionDelete: "削除", marketingTitle: "マーケティングツール", monitoringTitle: "技術モニタリング", actionPreview: "プレビュー", actionCopy: "コピー", actionPrint: "印刷", actionShare: "共有", actionDownload: "ダウンロード", actionDownloading: "ダウンロード中…", actionPdf: "PDF" },
  auth: {
    signInTitleBefore: "",
    signInTitleAfter: "にサインイン",
    signInLead:
      "メールとパスワードでサインインするか、Googleで続行できます。",
    emailLabel: "メール",
    emailPlaceholder: "you@example.com",
    passwordLabel: "パスワード",
    passwordPlaceholder: "パスワード",
    showPassword: "パスワードを表示",
    hidePassword: "パスワードを隠す",
    signInSubmit: "サインイン",
    orDivider: "または",
    continueWithGoogle: "Googleで続行",
    back: "戻る",
    invalidCredentials: "メールまたはパスワードが正しくありません。",
    credentialsUnavailable:
      "メールでのサインインは現在ご利用いただけません。",
    googleUnavailable:
      "Googleでのサインインは現在ご利用いただけません。",
    signInUnavailable: "サインインは現在ご利用いただけません。",
  },
  legal: {"lastUpdated":"最終更新","related":"法務ページ","draftNote":"本ウェブサイトのサイトポリシーおよび利用条件であり、複数法域にわたる完全な規制コンプライアンスパックではありません。お問い合わせ: info@savencore.com。","indexTitle":"法的情報","indexLead":"公開サイトのプライバシー、利用規約、Cookie、アクセシビリティ、セキュリティおよび関連通知。これらはウェブサイトのポリシーであり、すべての法域向けの弁護士認定パックではありません。Cookie設定ではライブの同意CMPがないことを説明します — ブラウザ設定を使うかお問い合わせください。"},
    search: { title: "検索", lead: "公開ページをタイトルで検索します。軽量なサイトマップ検索であり、全文CMSではありません。", placeholder: "ページタイトルを検索…", submit: "検索", noQuery: "公開ページのタイトルを絞り込む文字を入力してください。", empty: "一致する公開ページはありません。別の語を試すか、フッターの地図をご利用ください。", results: "{count} 件の一致ページ", honestNote: "検索対象は公開ページのタイトルとナビラベルのみです。本文や非公開Adminは含まれません。", navLabel: "検索" },

  lab: {
    eyebrow: "テスト / Lab / 実験",
    title: "Lab",
    lead: "公開サイトを変えずに新しい機能を試すためのサンドボックスです。ここにあるものは実験であり、製品の主張ではありません。",
    videoOverlayEyebrow: "Lab 実験",
    videoOverlayLine: "作業用のカット — 人のケアのためのシステム。",
    videoCaption:
      "作業用のカット — 物理世界での人のケアのために形づくられるシステム。",
    videoCaptionUnderstanding: "理解 — 物語は人から始まります。",
    videoCaptionAssistance: "支援 — 実際の場のためのサポート。",
    videoCaptionCare: "ケア — この Lab プレビューの目的。",
    videoCaptionSavenUnderstanding: "理解 — 名前が形になります。",
    videoCaptionSavenAssistance: "支援 — Lab の場におけるサポートの形。",
    videoCaptionSavenCare: "ケア — 人のために形づくられるシステムへの、より近い視点。",
    videoChaptersLabel: "動画チャプター",
    videoChapterUnderstanding: "チャプター：理解",
    videoChapterAssistance: "チャプター：支援",
    videoChapterCare: "チャプター：ケア",
    videoSwitcherLabel: "Lab 動画",
    videoClipGwr: "GWR",
    videoClipSaven: "SAVEN",
    videoMute: "ミュート",
    videoUnmute: "ミュート解除",
    videoLinksLabel: "この Lab 実験から公開ページへ",
    videoLinkHome: "ホーム",
    videoLinkBiomath: "BioMath Core",
    videoLinkInterface: "ロボティクス・インターフェース",
    videoLinkContact: "お問い合わせ",
    videoEffectsHeading: "動画スプラッシュの演出",
    videoEffectsApplied:
      "この帯に適用（ページ背景に溶け込む・柔らかいフェザー縁、硬い動画枠や額縁なし）：コンパクトなマルチクリップ・プレイリスト切替（GWR + SAVEN；追加可能）、各クリップは軽量デュアル形式（WebM + MP4、モバイル選択）。GWR はマスター t=0 からの点描パーソン開幕を保持（約10秒）；SAVEN は S-2 マークカット（純粋な黒頭のみ除去後、約10秒）。元の16:9、キャッシュ ?v=d0277；任意音声（開始ミュート）、Mute、控えめなテキスト、glass-light リンク、アクティブクリップごとのチャプターと理解 → 支援 → ケアの時間連動キャプション、スクロール連動、軽いパララックス、カーソルライト、Ken Burns、側面アンビエント — グレイン・強いビネット・濁ったグレードなし。直角コーナー、ネオンなし。動きを抑える設定ではモーションを弱め、ポスターを表示。",
    videoEffectsIdeas:
      "将来のアイデア（未実装）：同じ切替への追加 Lab クリップ、スクラブ連動の奥行きパララックス、広い対応時の HDR/AV1。",
    note: "新しい実験はこのハブからリンクできます。このページは noindex で、主要ヘッダーメニューにはありません。公開ホームは写真コラージュのままです。",
  },

  medicalDisclaimer: {
    short:
      "SAVEN Core は、本ウェブサイトを通じて病状の診断、医薬品の処方・販売、緊急医療の提供を行いません。医師・医療従事者・人々を支援するためのシステムの開発を目指しています。サイトの内容は情報提供であり、医療アドバイスではありません。",
    linkLabel: "医療上の免責事項",
  },
  home: { developmentStatus: "アーキテクチャ", architectureOverview: "ひと目でわかる考え方", architectureOverviewText: "人と情報から、日常の生活を支えるシステムへ。明確な範囲のもとで進めます。", knowledgeExplorer: "見る", majorDomains: "主なテーマ", publishedPages: "このページ群", relationships: "つながり", domainMap: "見つける", architectureDependencies: "テーマのつながり", currentStatus: "進捗", platformProgress: "テーマ", featuredConcepts: "見つける", startWithCore: "はじめに読む考え方", continueExploring: "続ける", chooseEntrance: "始める場所を選ぶ", knowledgeId: "文書ID", complete: "完了", inProgress: "進行中", planned: "対象範囲", understand: "理解する", explore: "見る", discover: "見つける", continue: "続ける", beatWhat: "何を", beatWho: "誰に", beatWhy: "なぜ", beatHow: "どう", hourFramesLabel: "ケアの一時間", watchTitle: "SAVEN Core を見る", watchSupport: "SAVEN Core の短い概要プレゼンテーション — 人の暮らしを支えるために作られる知能システムです。", watchEmbedTitle: "SAVEN Core 紹介動画" },
  ko: { ...uiEn.ko, document: "文書", passport: "文書情報", knowledgeId: "文書ID", domain: "テーマ領域", type: "文書の種類", status: "ステータス", version: "バージョン", evidence: "根拠", maturity: "ステータス", readingTime: "読了時間", lastReview: "最終確認", owner: "担当者", engineeringObject: "ページ情報", currentPosition: "現在地", nextReading: "次に読む内容", notYetAssigned: "未指定", dependencies: "関連する概念", dependencyGraph: "関連する概念", incoming: "利用するもの", outgoing: "依存するもの", nonePublished: "なし", knowledgeGraph: "つながり", parents: "より広いテーマ", children: "含まれるテーマ", consumers: "利用するもの", providers: "基盤となるもの", lifecycle: "文書の履歴", created: "作成", reviewed: "確認", published: "公開", updated: "更新", nextReview: "次回確認", deprecated: "非推奨", futureRevision: "改訂", versionHistory: "バージョン", previousVersion: "前のバージョン", summaryOfChanges: "変更内容", date: "日付", readingPaths: "おすすめの読み方", level2Kicker: "次に", level2Title: "関連する文書と概念", level3Kicker: "詳細", level3Title: "専門家向けの文書情報" },
  scope: { definition: "定義", "current-scope": "対象範囲", "future-scope": "次に進むこと", "human-oversight": "人による監督", "safety-boundary": "安全上の境界", "engineering-note": "注記", limitation: "限界" },
  callout: { information: "情報", definition: "定義", "engineering-note": "注記", important: "重要", "current-scope": "対象範囲", "future-scope": "次に進むこと", relationship: "つながり" },
  common: { openArrow: "開く", relatedDomains: "関連テーマ", referenceLinks: "さらに読む", keyPrinciples: "重要な原則", executiveSummary: "概要", whyItMatters: "重要な理由", purpose: "目的", futureExpansion: "関連テーマ" },
  hub: { related: "続ける", explore: "見る", areas: "領域", what: "ひとこと", why: "なぜ役立つか", next: "これから", deeper: "もっと読む", scenes: "場面" },
  pwa: {
    installApp: "アプリをインストール",
    installed: "インストール済み",
    howToInstall: "インストール方法",
    closeHelp: "閉じる",
    iosTip:
      "iPhoneまたはiPadでは、「共有」→「ホーム画面に追加」でSAVEN Coreをインストールできます。",
    browserTip:
      "ブラウザのメニューから「インストール」または「ホーム画面に追加」で SAVEN Core をインストールできます。",
  },

  contact: {
    formHeading: "メッセージ",
    nameLabel: "お名前",
    emailLabel: "メール",
    subjectLabel: "件名（任意）",
    messageLabel: "メッセージ",
    submit: "メッセージを送信",
    submitMailto: "メールアプリで開く",
    success: "メッセージを送信しました。返信までお待ちください。",
    successMailto: "送信準備済みのメッセージでメールアプリが開きます。",
    error: "お名前、メール、メッセージを入力してください。",
    fallbackNote:
      "このサーバーでは直接送信が設定されていません。代わりにメールアプリが開き、メッセージは info@savencore.com に届きます。",
  },

  media: {
    galleryTitle: "ライブラリ",
    galleryLead:
      "承認済みの動画・文書・リンクを閲覧できます。開いて表示するか、ファイルをダウンロードしてください。",
    filterAll: "すべて",
    filterVideos: "動画",
    filterDocs: "文書",
    filterLinks: "リンク",
    sectionVideos: "動画",
    sectionDocuments: "文書とプレゼンテーション",
    sectionLinks: "リンク",
    sectionBrand: "ブランド素材",
    emptyAll:
      "公開ライブラリは現在空です。承認された素材は追加されるとここに表示されます。",
    emptyVideos:
      "公開ライブラリに動画はまだありません。承認されたアップロードがここに表示されます。",
    emptyDocuments:
      "文書やプレゼンテーションはまだありません。運営者は管理 → メディアから PDF やスライドを追加できます。",
    emptyLinks:
      "共有メディアライブラリに追加されると、厳選リンクがここに表示されます。",
    emptyBrand: "ブランド素材はサイトのライブラリから読み込まれます。",
    preview: "プレビュー",
    view: "表示",
    download: "ダウンロード",
    downloading: "ダウンロード中…",
    copy: "リンクをコピー",
    share: "共有",
    open: "開く",
    copied: "リンクをコピーしました。",
    shared: "共有シートを開きました。",
    downloadStarted: "ダウンロードを開始しました。",
    actionFailed: "操作を完了できませんでした。",
    badgeImage: "画像",
    badgeVideo: "動画",
    badgeDocument: "文書",
    badgePresentation: "プレゼン",
    badgeLink: "リンク",
    badgeOther: "ファイル",
  },
};
