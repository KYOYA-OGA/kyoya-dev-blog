import Link from '@/components/Link'

export default function FourZeroFour() {
  return (
    <div className="flex flex-col items-start justify-start md:justify-center md:items-center md:flex-row md:space-x-6 md:mt-24">
      <div className="pt-6 pb-8 space-x-2 md:space-y-5">
        <h1 className="text-5xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 md:text-7xl md:leading-14 md:border-r-2 md:px-6">
          404
        </h1>
      </div>
      <div className="max-w-md">
        <p className="mb-4 text-xl font-bold leading-normal md:text-2xl">
          申し訳ございませんがページが見つかりませんでした...
          <span role="img" aria-label="sorry">
            😢
          </span>
        </p>
        <p className="mb-8">ホームに戻って他の情報を探してみませんか？</p>
        <Link href="/">
          <button className="btn-primary">ホームに戻る</button>
        </Link>
      </div>
    </div>
  )
}
