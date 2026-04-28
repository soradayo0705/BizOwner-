# ビジネスの学び家 LP ファーストビュー 画像要件

**デザイン参照**：`docs/reference/太成大院大学/ファーストビュー.png`
**方針**：デザイン言語は大学FVを踏襲、**コンテンツは学び家ブランド**（学ぶ・遊ぶ・稼ぐ）
**更新日**：2026-04-24

---

## FVコピー確定版

| 位置 | テキスト | 色 |
|------|---------|-----|
| 左の小フキダシ | **学ぶも** | 水色地（#BBDEFB）+ 黒フチ |
| 右の小フキダシ | **遊ぶも** | 黄色地（#FFF176）+ 黒フチ |
| 中央の大フキダシ | **学ぶも、遊ぶも、全部まるごと** | 白地 + 黒フチ |
| 巨大筆文字 | **稼ぐ！** | 赤（#E53935）毛筆 |

全体で「**学ぶも、遊ぶも、全部まるごと 稼ぐ！**」というブランドコアメッセージ。

---

## コード vs 画像 切り分け

| 要素 | 実装 | 状態 |
|------|------|-----|
| ヘッダー（ロゴ+5色ナビ+検索+オレンジLINEリボン） | HTML+SVG | ✅ 完成 |
| 右縦タブ（イベント情報/メンバーサイト） | CSS | ✅ 完成 |
| ピンク背景+放射線+ドット | CSS | ✅ 完成 |
| 左右の小フキダシ「学ぶも」「遊ぶも」 | 色付きSVG（`WobbleBubble`） | ✅ 完成 |
| 中央大フキダシ「全部まるごと」 | SVG（`MainBubble`） | ✅ 完成 |
| 巨大「稼ぐ！」 | CSSテキスト（仮）→ PNG差し替え推奨 | ⏳ 画像あれば質UP |
| 左：男の子キャラ | PNG placeholder中 | ❌ **画像必要** |
| 右：女の子キャラ | PNG placeholder中 | ❌ **画像必要** |
| 下段：メンバー10人群像 | `fv-crowd.png`（暗背景・透過NG） | ❌ **透過PNG差し替え必要** |

---

## 画像4点の仕様

### 🎨 共通スタイル要件（全画像で揃えること）

```
Hand-drawn cartoon pamphlet illustration style,
thick black outline (3-4px), flat colors with minimal cel shading,
Japanese school/university pamphlet art style (reference: 太成学院大学 website),
transparent PNG background,
cheerful approachable pop vibe,
same exact illustration style across all 4 images
```

**⚠️ 最重要**：4枚の絵柄を揃えること。同じ生成セッション or 同じ絵師。大学FVを参考画像として渡すと失敗しにくい。

---

### 1. `fv-boy.png` ― 左：男の子キャラクター

- **保存先**：`/public/lp/manabiya/fv-boy.png`
- **推奨サイズ**：1200×1600px / 透過PNG / 3:4 縦長

**プロンプト**：
```
A cheerful young Japanese man character (age 20-30), hand-drawn cartoon
pamphlet style matching 太成学院大学 university website illustrations,
wearing a PINK/SALMON short-sleeve t-shirt and dark navy shorts,
short brown messy hair, big happy open-mouth smile with teeth visible,
right hand pointing up-left excitedly, dynamic running/jumping pose leaning right,
thick black outline (3-4px), flat vibrant colors, minimal cel shading,
full body visible from head to feet, transparent background,
ratio 3:4 vertical, Japanese pamphlet illustration aesthetic,
approachable friendly energy, no text, no logo
```

---

### 2. `fv-girl.png` ― 右：女の子キャラクター

- **保存先**：`/public/lp/manabiya/fv-girl.png`
- **推奨サイズ**：1200×1600px / 透過PNG / 3:4 縦長

**プロンプト**：
```
A cheerful young Japanese woman character (age 20-30), hand-drawn cartoon
pamphlet style matching 太成学院大学 university website illustrations
(EXACT SAME style as the boy image),
wearing a BRIGHT YELLOW short-sleeve t-shirt and LIGHT BLUE short pleated skirt,
shoulder-length brown hair with small side ponytail tied with yellow ribbon,
pink cheek blush, big happy open-mouth smile,
left hand raised high in fist-pump pose, dynamic jumping pose leaning left,
thick black outline (3-4px), flat vibrant colors, minimal cel shading,
full body visible from head to feet, transparent background,
ratio 3:4 vertical, cute approachable energy, no text, no logo
```

---

### 3. `fv-brush-title.png` ― 中央：巨大筆文字「稼ぐ！」

- **保存先**：`/public/lp/manabiya/fv-brush-title.png`
- **推奨サイズ**：2400×800px / 透過PNG / 横長
- **任意**：無くても CSS テキストで表示される。あると質が劇的に上がる

**プロンプト**：
```
Large Japanese kanji text "稼ぐ" written in hand-painted brush calligraphy,
deep red color (#E53935), textured brush strokes with visible bristle marks
and slight ink bleeds, playful energetic handwriting (not formal shodo),
slight tilt, bold and confident strokes,
followed by a smaller brush-painted "！" exclamation mark in same red,
transparent background, wide horizontal layout 2400x800px,
Japanese pop poster calligraphy aesthetic,
like the 太成学院大学 "サクセス" title style but with "稼ぐ！" instead
```

**画像が来たらコード差し替え**：`src/app/manabiya/page.tsx` の `<h1>` 内 `<span className="tgu-hero-title...">` ブロックを `<Image src="/lp/manabiya/fv-brush-title.png" ... />` に置換。

---

### 4. `fv-crowd.png` ― 下段：メンバー群像（**透過版で差し替え**）

- **保存先**：`/public/lp/manabiya/fv-crowd.png`（既存を上書き）
- **推奨サイズ**：3000×900px / 透過PNG / 横長
- **現状問題**：現ファイルは暗背景で、ピンク地に乗せるとボックスが浮いて見える

**プロンプト**：
```
Horizontal row illustration of 9 diverse Japanese young adults (age 20-40,
mixed gender, various ethnicities/hairstyles, casual business community vibe
- NOT students/uniforms), hand-drawn cartoon pamphlet style matching
the boy and girl character images (EXACT SAME illustration style),
each person with a different friendly gesture: waving, peace sign, thumbs up,
pointing, arms crossed, holding laptop, clapping,
varied clothing colors (casual shirts, hoodies, dresses - mix of colors),
thick black outline (3-4px), flat vibrant colors, minimal cel shading,
standing in a natural row with slightly varied heights,
visible from waist up OR full body, transparent background,
wide horizontal layout 3000x900px, cheerful community energy,
like 太成学院大学 FV bottom row but for adult business community
```

---

## 画像到着後の手順

1. 4枚のPNGを `/public/lp/manabiya/` に配置（ファイル名上記の通り）
2. `fv-brush-title.png` を使う場合のみ `page.tsx` の CSS テキストを `<Image>` へ書き換え（詳細は上記③を参照）
3. 他3点（boy/girl/crowd）は**ファイル名同じでドロップインすれば即反映**
4. ブラウザで `/manabiya` を確認して完成

---

## よくある失敗を避けるコツ

- ❌ 4枚を別々のプロンプト・別セッションで作る → 絵柄が揃わず崩壊
- ❌ crowd を背景ありで作ってもらう → 暗いボックスが浮く
- ❌ 筆文字を装飾フォント風に作ってもらう → 「手書きのカスレ・にじみ」が無いと別物になる
- ✅ 大学FVのスクショを参考画像として**必ず**渡す
- ✅ boy を先に確定させ、その結果画像を girl/crowd 生成時のリファレンスに入れる
- ✅ 透過は「transparent background」と明記（「white background」はNG）
