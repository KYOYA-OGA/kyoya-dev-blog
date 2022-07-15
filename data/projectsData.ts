const projectsData = [
  {
    title: 'Movie Review App',
    imgSrc: '/static/images/movie-review-app.jpg',
    description:
      'MERNスタックにて構築した映画・ドラマレビューアプリ。基本的な認証に加えてOTP認証も実装。管理者権限でコンテンツの登録が可能で、通常ユーザーにはレビュー投稿機能を提供しています。',
    githubLink: 'https://github.com/KYOYA-OGA/mern-review-app-frontend',
    href: 'https://mern-review-app-frontend.pages.dev/',
  },
  {
    title: 'Netflix Clone',
    imgSrc: '/static/images/netflix-clone.jpg',
    description:
      'Next.js & TypeScript & tailwindcss & firebase & stripeで構築したお馴染みのNetflixクローン。firebaseによるユーザー認証とstripeによる決済システムを盛り込んでいます。ダミーサイトのため警告がでますがご了承ください🤡',
    githubLink: 'https://github.com/KYOYA-OGA/netflix-clone',
    href: 'https://netflix-clone-ochre-five.vercel.app/',
  },
  {
    title: 'Gatsby Tech Blog',
    imgSrc: '/static/images/gatsby-dev-blog.jpg',
    description:
      'フレームワークとしてGatsbyを採用した静的ブログサイト。CMSにはsanityを採用。カテゴリーでの絞り込みやページネーション、検索機能等、ブログに必要な機能を網羅しています。',
    githubLink: 'https://github.com/KYOYA-OGA/gatsby-tech-blog-tutorial',
    href: 'https://gatsby-tech-blog-tutorial.pages.dev/',
  },
  {
    title: 'Coffee Connoisseur',
    imgSrc: '/static/images/coffee-connoisseur.jpeg',
    description:
      'Next.js & Airtableで構築したコーヒー店検索アプリ。位置情報を元にFoursquareAPIで現在地近くのコーヒー店を検索できます',
    githubLink: 'https://github.com/KYOYA-OGA/next-coffee-connoisseur',
    href: 'https://coffee-stores-discover.netlify.app/',
  },
  {
    title: 'Github Finder',
    imgSrc: '/static/images/github-finder-app.jpeg',
    description: 'React & tailwindcssで構築したGithubユーザー情報検索アプリ',
    githubLink: 'https://github.com/KYOYA-OGA/github-finder',
    href: 'https://github-finder-ivory.vercel.app',
  },
  {
    title: 'YouTube Clone',
    description: `React + Redux + firebase + YouTube DATA API で構築した YouTube クローン`,
    imgSrc: '/static/images/youtube-clone.jpg',
    href: 'https://not-real-yt.firebaseapp.com/',
    githubLink: 'https://github.com/KYOYA-OGA/youtube-clone',
  },
  {
    title: 'React Awesome Shop',
    imgSrc: '/static/images/awesome-shop.png',
    description:
      'フロントエンドをReact、バックエンドをFirebaseで構築したサーバーレスなショッピングサイト',
    githubLink: 'https://github.com/KYOYA-OGA/react-awesome-store-JP',
  },
  {
    imgSrc: '/static/images/comfy-store.png',
    title: 'React Comfy Store',
    description: 'SPAで構築された架空のネットショップ',
    githubLink: 'https://github.com/KYOYA-OGA/react-comfy-store-demo',
    href: 'https://react-comfy-store-demo.netlify.app',
  },
  {
    title: 'Github User Search',
    imgSrc: '/static/images/github-user.png',
    description: 'Github APIを通じてユーザーを検索して各種情報を確認できるアプリ',
    githubLink: 'https://github.com/KYOYA-OGA/search-github-user',
    href: 'https://react-github-user-searching.netlify.app',
  },
  {
    title: 'e-VENTs',
    imgSrc: '/static/images/next-event.png',
    description: 'フロントエンドをNext.js、バックエンドをStrapiで構築したイベント作成アプリ',
    githubLink: 'https://github.com/KYOYA-OGA/next-events',
    href: 'https://next-events-nine-xi.vercel.app',
  },
  // {
  //   title: 'Airbnb Clone',
  //   imgSrc: '/static/images/airbnb-clone.png',
  //   description: 'Next.js & tailwindcss 製Airbnbクローン',
  //   githubLink: 'https://github.com/KYOYA-OGA/airbnb-clone',
  //   href: 'https://airbnb-clone-opal-one.vercel.app',
  // },
  {
    title: 'Dev.to Clone',
    imgSrc: '/static/images/dev-to-clone.png',
    description: 'Next.js & Firebase 製Dev.toクローン',
    githubLink: 'https://github.com/KYOYA-OGA/dev.to-clone',
    href: 'https://dev-to-clone-flax.vercel.app/',
  },
  {
    title: 'Next Amazona',
    imgSrc: '/static/images/amazona.png',
    description: 'React(Next.js) & Material-UI & MongoDB 製ショッピングサイト',
    githubLink: 'https://github.com/KYOYA-OGA/next-amazona',
    href: 'https://next-amazona-taupe.vercel.app',
  },
  {
    title: 'ファイル共有アプリ',
    imgSrc: '/static/images/fileshare-app.png',
    description: 'ファイルをアップロードして共有できるサイト。メール送信機能付き。',
    githubLink: 'https://github.com/KYOYA-OGA/fileshare-app-frontend',
    href: 'https://fileshare-app-frontend.vercel.app',
  },
  {
    title: 'Venue LP',
    imgSrc: '/static/images/venue.png',
    description: 'Next.js製それっぽいランディングページ',
    githubLink: 'https://github.com/KYOYA-OGA/venue_lp',
    href: 'https://venue-lp.vercel.app',
  },
  {
    title: 'HOKUSAI',
    imgSrc: '/static/images/hokusai.png',
    description: 'Next.js製ギャラリーサイト',
    githubLink: 'https://github.com/KYOYA-OGA/hokusai',
    href: 'https://hokusai.vercel.app',
  },
]

export default projectsData
