import siteMetadata from '@/data/siteMetadata'
import projectsData from '@/data/projectsData'
import Card from '@/components/Card'
import { PageSEO } from '@/components/SEO'

export default function Projects() {
  return (
    <>
      <PageSEO title={`Projects - ${siteMetadata.author}`} description={siteMetadata.description} />
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="pt-6 pb-8 space-y-2 md:space-y-5">
          <h1 className="text-2xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-3xl sm:leading-10 md:text-4xl md:leading-14">
            My Projects
          </h1>
          <p className="md:text-lg leading-7 text-gray-700 dark:text-gray-300">
            技術力向上のために作ったWebサイトやアプリです。コードも公開していますので参考になれば幸いです。
            <br />
            一部ログインが必要なサイトがありますので、ダミーアカウントでお試しください。
          </p>
        </div>
        <div className="container py-12">
          <div className="flex flex-wrap -m-4">
            {projectsData.map((d) => (
              <Card
                key={d.title}
                title={d.title}
                description={d.description}
                imgSrc={d.imgSrc}
                href={d.href}
                githubLink={d.githubLink}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
