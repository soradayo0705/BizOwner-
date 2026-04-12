#
 Design System

##
 Overview

Visual Personality: Professional, ICT-focused, and corporate-traditional with a clean, technology-driven edge. 
Density: Moderate spacing with clearly defined sections. 
Tone: Trustworthy, stable, and global. 
Motion: Use of 
`wow.js`
 for fadeInUp entrance animations and smooth hover transitions (0.3s-0.5s ease-in-out). 
Layout: A fixed-width layout (min 1100px for PC) with a sticky header. Mobile layout switches to a single-column, touch-friendly interface with a full-screen drawer menu.
##
 Colors

-
 
**
Primary Brand Color
**
: 
`#006785`
 (used for bold text, buttons, and accents)
-
 
**
Secondary Accent
**
: 
`#cef1fb`
 (used for hover backgrounds in navigation)
-
 
**
Text Primary
**
: 
`#4d4d4d`
 (standard body text)
-
 
**
Text Heading
**
: 
`#000000`
 (section titles and primary links)
-
 
**
Background Alternative
**
: 
`#f5f5f5`
 (footer and subtle section shifts)
-
 
**
Base White
**
: 
`#FFFFFF`
 (header and main backgrounds)
-
 
**
Base Black
**
: 
`#000000`
 (copyright area and mobile nav base)
##
 Typography

-
 
**
Main Font Family
**
: 'Noto Sans JP', sans-serif (Default weight: 500)
-
 
**
Heading Accents
**
: 'Josefin Sans', sans-serif (used for large English background text and specific bold letters)
-
 
**
Impactful Headings
**
: 'Impact', 'Charcoal' (used for section sub-titles and "imp" class elements)
-
 
**
Secondary Sans
**
: 'Roboto', sans-serif
-
 
**
Hierarchy
**
:
  
-
 H1/Section Large English: 7.2rem - 7.4rem (PC) / 2.8rem (SP)
  
-
 H2/Section Subtitles: 1.6rem (PC) / 1.5rem (SP)
  
-
 Navigation: 1.6rem
  
-
 Body text: 1.4rem - 1.6rem
##
 Elevation

-
 
**
Shadows
**
: Minimal usage; the site relies on flat design and solid border lines.
-
 
**
Borders
**
: Strong use of solid borders for navigation separation and button outlines.
-
 
**
Layering
**
: Sticky header at 
`z-index: 200`
. Mobile navigation at 
`z-index: 1000`
. Full-screen overlays for mobile menu.
##
 Components

-
 
**
Header
**
: Sticky layout featuring a logo on the left and a flexbox-based navigation menu on the right. Links have a sliding color fill effect on hover.
-
 
**
Hero Section
**
: Simple image-based messaging centered in the top wrapper.
-
 
**
Buttons (btn1)
**
: Circular-ended ghost buttons with a centered line-arrow that transforms (shrinks/changes color) on hover. Borders and text are 
`#006785`
.
-
 
**
Navigation Cards
**
: Used in the Company/Recruit section; large block links with centered titles and a "VIEW" badge.
-
 
**
Solution Carousel
**
: Uses Slick slider for product thumbnails with specific fit-image cropping.
-
 
**
News List
**
: Vertical stack of links with date tags (
`dt`
) and category badges (
`dd span`
).
-
 
**
Footer
**
: Distinct two-tone layout where a blue sidebar (
`#006f87`
) aligns with the left logo area while the rest of the site links sit on a light gray background.
##
 Do's and Don'ts

-
 
**
Do
**
: Maintain the specific character highlight in headings (e.g., the 'O' in SOLUTION is styled differently via Josefin Sans).
-
 
**
Do
**
: Use smooth transitions for all hover states (0.2s to 0.5s).
-
 
**
Don't
**
: Use drop shadows on primary containers; keep the aesthetic flat and border-driven.
-
 
**
Don't
**
: Reduce the mobile menu size; it should be full-width/full-height for accessibility.
##
 Assets

-
 
**
Font
**
: https://fonts.gstatic.com/s/josefinsans/v34/Qw3PZQNVED7rKGKxtqIqX5E-AVSJrOCfjY46_N_XXME.ttf
-
 
**
Font
**
: https://fonts.gstatic.com/s/notosansjp/v56/-F6jfjtqLzI2JPCgQBnw7HFyzSD-AsregP8VFBEi75s.ttf
-
 
**
Font
**
: https://fonts.gstatic.com/s/notosansjp/v56/-F6jfjtqLzI2JPCgQBnw7HFyzSD-AsregP8VFBEj75s.ttf
-
 
**
Font
**
: https://fonts.gstatic.com/s/notosansjp/v56/-F6jfjtqLzI2JPCgQBnw7HFyzSD-AsregP8VFCMj75s.ttf
-
 
**
Font
**
: https://fonts.gstatic.com/s/notosansjp/v56/-F6jfjtqLzI2JPCgQBnw7HFyzSD-AsregP8VFE8j75s.ttf
-
 
**
Font
**
: https://fonts.gstatic.com/s/notosansjp/v56/-F6jfjtqLzI2JPCgQBnw7HFyzSD-AsregP8VFLgk75s.ttf
-
 
**
Font
**
: https://fonts.gstatic.com/s/notosansjp/v56/-F6jfjtqLzI2JPCgQBnw7HFyzSD-AsregP8VFPYk75s.ttf
-
 
**
Font
**
: https://fonts.gstatic.com/s/roboto/v51/KFOMCnqEu92Fr1ME7kSn66aGLdTylUAMQXC89YmC2DPNWuaabWmT.ttf
-
 
**
Font
**
: https://fonts.gstatic.com/s/roboto/v51/KFOMCnqEu92Fr1ME7kSn66aGLdTylUAMQXC89YmC2DPNWub2bWmT.ttf
-
 
**
Font
**
: https://fonts.gstatic.com/s/roboto/v51/KFOMCnqEu92Fr1ME7kSn66aGLdTylUAMQXC89YmC2DPNWubEbWmT.ttf
-
 
**
Font
**
: https://fonts.gstatic.com/s/roboto/v51/KFOMCnqEu92Fr1ME7kSn66aGLdTylUAMQXC89YmC2DPNWuYjammT.ttf
-
 
**
Font
**
: https://fonts.gstatic.com/s/roboto/v51/KFOMCnqEu92Fr1ME7kSn66aGLdTylUAMQXC89YmC2DPNWuZtammT.ttf
-
 
**
Background
**
: https://www.gwt-corp.jp/common_img/pagetop.png
-
 
**
Font
**
: https://www.gwt-corp.jp/fonts/fontawesome-webfont.eot?#iefix&v=4.6.3
-
 
**
Font
**
: https://www.gwt-corp.jp/fonts/fontawesome-webfont.eot?v=4.6.3
-
 
**
Background
**
: https://www.gwt-corp.jp/fonts/fontawesome-webfont.svg?v=4.6.3#fontawesomeregular
-
 
**
Font
**
: https://www.gwt-corp.jp/fonts/fontawesome-webfont.ttf?v=4.6.3
-
 
**
Font
**
: https://www.gwt-corp.jp/fonts/fontawesome-webfont.woff?v=4.6.3
-
 
**
Font
**
: https://www.gwt-corp.jp/fonts/fontawesome-webfont.woff2?v=4.6.3
-
 
**
Image
**
: https://www.gwt-corp.jp/wp-content/themes/stagegroup/asset/common_img/flogo.png
-
 
**
Image
**
: https://www.gwt-corp.jp/wp-content/themes/stagegroup/asset/common_img/logo.png
-
 
**
Image
**
: https://www.gwt-corp.jp/wp-content/themes/stagegroup/asset/common_img/sp-logo.png
-
 
**
Image
**
: https://www.gwt-corp.jp/wp-content/themes/stagegroup/asset/images/COMPANY.png
-
 
**
Image
**
: https://www.gwt-corp.jp/wp-content/themes/stagegroup/asset/images/media.png
-
 
**
Image
**
: https://www.gwt-corp.jp/wp-content/themes/stagegroup/asset/images/mv-txt.png
-
 
**
Image
**
: https://www.gwt-corp.jp/wp-content/themes/stagegroup/asset/images/SOLUTION.png
-
 
**
Image
**
: https://www.gwt-corp.jp/wp-content/themes/stagegroup/asset/images/thumbnail.jpg
-
 
**
Image
**
: https://www.gwt-corp.jp/wp-content/themes/stagegroup/asset/images/TOPICS.png
-
 
**
Image
**
: https://www.gwt-corp.jp/wp-content/themes/stagegroup/asset/images/tp1ti.png
-
 
**
Image
**
: https://www.gwt-corp.jp/wp-content/uploads/2022/11/tradeshape-300x168.jpg
-
 
**
Image
**
: https://www.gwt-corp.jp/wp-content/uploads/2022/11/tradeshape.jpg
-
 
**
Image
**
: https://www.gwt-corp.jp/wp-content/uploads/2022/11/vidhance-300x168.jpg
-
 
**
Image
**
: https://www.gwt-corp.jp/wp-content/uploads/2022/11/vidhance.jpg